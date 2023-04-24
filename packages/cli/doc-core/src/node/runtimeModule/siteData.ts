import path, { join } from 'path';
import {
  UserConfig,
  DefaultThemeConfig,
  NormalizedDefaultThemeConfig,
  SidebarItem,
  SidebarGroup,
  NormalizedSidebarGroup,
  PageIndexInfo,
} from 'shared/types';
import yamlFront from 'yaml-front-matter';
import { htmlToText } from 'html-to-text';
import { ReplaceRule, Header } from 'shared/types/index';
import fs from '@modern-js/utils/fs-extra';
import { compile } from '@modern-js/mdx-rs-binding';
import { importStatementRegex, TEMP_DIR } from '../constants';
import { applyReplaceRules } from '../utils/applyReplaceRules';
import { logger, createHash } from '../utils';
import { flattenMdxContent } from '../utils/flattenMdxContent';
import { extendPageData } from '../hooks';
import RuntimeModulesPlugin from './RuntimeModulePlugin';
import { routeService } from './routeData';
import { RuntimeModuleID } from '.';
import { withBase, MDX_REGEXP, SEARCH_INDEX_NAME } from '@/shared/utils';

let pages: PageIndexInfo[] | undefined;

// How can we let the client runtime access the `indexHash`?
// We can only do something after the Rspack build process becuase the index hash is generated within Rspack build process.There are two ways to do this:
// 1. insert window.__INDEX_HASH__ = 'xxx' into the html template manually
// 2. replace the `__INDEX_HASH__` placeholder in the html template with the real index hash after Rspack build
export const indexHash = '';

function deletePriviteKey<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  Object.keys(obj).forEach(key => {
    if (key.startsWith('_')) {
      delete obj[key];
    }
  });
  return obj;
}

export function normalizeThemeConfig(
  themeConfig: DefaultThemeConfig,
  pages: PageIndexInfo[] = [],
  base = '',
  replaceRules: ReplaceRule[],
): NormalizedDefaultThemeConfig {
  // In following code, we will normalize the theme config reference to the pages data extracted from mdx files
  // Normalize sidebar
  const normalizeSidebar = (
    sidebar: DefaultThemeConfig['sidebar'],
  ): NormalizedDefaultThemeConfig['sidebar'] => {
    const normalizedSidebar: NormalizedDefaultThemeConfig['sidebar'] = {};
    if (!sidebar) {
      return {};
    }
    const normalizeSidebarItem = (
      item: SidebarGroup | SidebarItem | string,
    ): NormalizedSidebarGroup | SidebarItem => {
      if (typeof item === 'object' && 'items' in item) {
        return {
          text: applyReplaceRules(item.text, replaceRules),
          link: item.link,
          collapsed: item.collapsed ?? false,
          collapsible: item.collapsible ?? true,
          items: item.items.map(subItem => {
            return normalizeSidebarItem(subItem);
          }),
        };
      }

      if (typeof item === 'string') {
        const page = pages.find(
          page => page.routePath === withBase(item, base),
        );
        return {
          text: applyReplaceRules(page?.title || '', replaceRules),
          link: item,
        };
      }

      return {
        ...item,
        text: applyReplaceRules(item.text, replaceRules),
      };
    };
    Object.keys(sidebar).forEach(key => {
      const value = sidebar[key];
      normalizedSidebar[key] = value.map(normalizeSidebarItem);
    });
    return normalizedSidebar;
  };

  const normalizeNav = (nav: DefaultThemeConfig['nav']) => {
    return nav?.map(navItem => {
      return {
        ...navItem,
        text: applyReplaceRules(navItem.text, replaceRules),
      };
    });
  };

  const locales = themeConfig?.locales || [];
  if (locales.length) {
    locales.forEach(locale => {
      locale.sidebar = normalizeSidebar(locale.sidebar);
      locale.nav = normalizeNav(locale.nav);
    });
  } else {
    themeConfig.sidebar = normalizeSidebar(themeConfig.sidebar);
    themeConfig.nav = normalizeNav(themeConfig.nav);
  }

  return themeConfig as NormalizedDefaultThemeConfig;
}

async function extractPageData(
  replaceRules: ReplaceRule[],
  alias: Record<string, string | string[]>,
  domain: string,
  root: string,
): Promise<(PageIndexInfo | null)[]> {
  return Promise.all(
    routeService
      .getRoutes()
      .filter(route => MDX_REGEXP.test(route.absolutePath))
      .map(async (route, index) => {
        let content: string = await fs.readFile(route.absolutePath, 'utf8');
        const frontmatter = {
          // eslint-disable-next-line import/no-named-as-default-member
          ...yamlFront.loadFront(content),
        };

        // 1. Replace rules for frontmatter & content
        Object.keys(frontmatter).forEach(key => {
          if (typeof frontmatter[key] === 'string') {
            frontmatter[key] = applyReplaceRules(
              frontmatter[key],
              replaceRules,
            );
          }
        });

        // TODO: we will find a more efficient way to do this
        const flattenContent = await flattenMdxContent(
          frontmatter.__content,
          route.absolutePath,
          alias,
        );

        content = applyReplaceRules(flattenContent, replaceRules).replace(
          importStatementRegex,
          '',
        );

        const {
          html,
          title,
          toc: rawToc,
        } = await compile({
          value: content,
          filepath: route.absolutePath,
          development: process.env.NODE_ENV !== 'production',
          root,
        });

        if (!title?.length && !frontmatter && !frontmatter.title?.length) {
          return null;
        }
        content = htmlToText(String(html), {
          wordwrap: 80,
          selectors: [
            {
              selector: 'a',
              options: {
                ignoreHref: true,
              },
            },
            {
              selector: 'img',
              format: 'skip',
            },
            ...['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(tag => ({
              selector: tag,
              options: {
                uppercase: false,
              },
            })),
          ],
          tables: true,
          longWordSplit: {
            forceWrapOnLimit: true,
          },
        });
        if (content.startsWith(title)) {
          // Remove the title from the content
          content = content.slice(title.length);
        }

        const toc: Header[] = rawToc.map(item => {
          // If the item.id ends with '-number', we take the number
          const match = item.id.match(/-(\d+)$/);
          let position = -1;
          if (match) {
            for (let i = 0; i < Number(match[1]); i++) {
              position = content.indexOf(`\n${item.text}#\n\n`, position + 1);
            }
          }
          return {
            ...item,
            charIndex: content.indexOf(`\n${item.text}#\n\n`, position + 1),
          };
        });

        return {
          id: index,
          title: frontmatter.title || title,
          routePath: route.routePath,
          lang: route.lang,
          toc,
          domain,
          // Stripped frontmatter content
          content,
          frontmatter: {
            ...frontmatter,
            __content: undefined,
          },
          _filepath: route.absolutePath,
        };
      }),
  );
}

export async function siteDataVMPlugin(
  userRoot: string,
  config: UserConfig,
  isSSR: boolean,
  runtimeTempDir: string,
  alias: Record<string, string | string[]>,
) {
  const entryPath = join(runtimeTempDir, `${RuntimeModuleID.SiteData}.js`);
  const searchIndexHashPath = join(
    runtimeTempDir,
    `${RuntimeModuleID.SearchIndexHash}.js`,
  );
  const userConfig = config.doc;
  const replaceRules = userConfig?.replaceRules || [];
  if (!pages) {
    // If the dev server restart when config file, we will reuse the siteData instead of extracting the siteData from source files again.
    if (!isSSR) {
      logger.info('Extracting site data...');
    }
    const domain =
      userConfig?.search && userConfig?.search?.mode === 'remote'
        ? userConfig?.search.domain ?? ''
        : '';
    pages = (
      await extractPageData(replaceRules, alias, domain, userRoot)
    ).filter(Boolean);
  }

  // Categorize pages, sorted by language, and write search index to file
  const pagesByLang = deletePriviteKey<PageIndexInfo[]>(pages).reduce(
    (acc, page) => {
      if (!acc[page.lang]) {
        acc[page.lang] = [];
      }
      if (page.frontmatter?.pageType === 'home') {
        return acc;
      }
      acc[page.lang].push(page);
      return acc;
    },
    {} as Record<string, PageIndexInfo[]>,
  );

  const indexHashByLang = {} as Record<string, string>;

  // Generate search index by different languages, file name is {SEARCH_INDEX_NAME}.{lang}.{hash}.json
  await Promise.all(
    Object.keys(pagesByLang).map(async lang => {
      const stringfiedIndex = JSON.stringify(pagesByLang[lang]);
      const indexHash = createHash(stringfiedIndex);
      indexHashByLang[lang] = indexHash;
      await fs.ensureDir(TEMP_DIR);
      await fs.writeFile(
        path.join(TEMP_DIR, `${SEARCH_INDEX_NAME}.${lang}.${indexHash}.json`),
        stringfiedIndex,
      );
    }),
  );

  // Run extendPageData hook in plugins
  await Promise.all(
    pages.map(async pageData =>
      extendPageData({
        pageData,
        config,
      }),
    ),
  );

  const siteData = {
    title: userConfig?.title || '',
    description: userConfig?.description || '',
    icon: userConfig?.icon || '',
    themeConfig: normalizeThemeConfig(
      userConfig?.themeConfig || {},
      pages,
      config.doc?.base,
      config.doc?.replaceRules || [],
    ),
    base: userConfig?.base || '/',
    root: userRoot,
    lang: userConfig?.lang || '',
    logo: userConfig?.logo || '',
    search: userConfig?.search ?? { mode: 'local' },
    pages: pages.map(page => {
      const { content, id, domain, ...rest } = page;
      return rest;
    }),
  };

  const plugin = new RuntimeModulesPlugin({
    [entryPath]: `export default ${JSON.stringify(siteData)}`,
    [searchIndexHashPath]: `export default ${JSON.stringify(indexHashByLang)}`,
  });

  return plugin;
}