import path from 'path';
import type { GeneratorContext, GeneratorCore } from '@modern-js/codesmith';
import { AppAPI } from '@modern-js/codesmith-api-app';
import { merge } from '@modern-js/codesmith-utils/lodash';
import {
  i18n as commonI18n,
  getEntrySchema,
} from '@modern-js/generator-common';
import { fs, getPackageObj, isTsProject } from '@modern-js/generator-utils';
import { i18n, localeKeys } from './locale';
import { isEmptySource, isSingleEntry } from './utils';

const handleInput = async (
  context: GeneratorContext,
  generator: GeneratorCore,
  appApi: AppAPI,
) => {
  const appDir = context.materials.default.basePath;

  const { entriesDir } = context.config;

  await fs.ensureDir(path.join(appDir, entriesDir));

  const analysisInfo = {
    isEmptySrc: isEmptySource(appDir, entriesDir),
    isSingleEntry: isSingleEntry(appDir, entriesDir),
    isTsProject: isTsProject(appDir),
  };

  generator.logger.debug(
    `💡 [Entry Analysis Info]: ${JSON.stringify(analysisInfo)}`,
  );

  const config = { ...context.config, ...analysisInfo };
  const ans = await appApi.getInputBySchemaFunc(getEntrySchema, config);

  return ans;
};

const refactorSingleEntry = async (
  context: GeneratorContext,
  generator: GeneratorCore,
) => {
  const pkgObj = await getPackageObj(context);
  const pkgName = pkgObj.name;

  const { entriesDir } = context.config;

  const oldFilePath = path.join(context.materials.default.basePath, entriesDir);
  const oldFiles = fs
    .readdirSync(oldFilePath)
    .filter(filePath => {
      if (fs.statSync(path.join(oldFilePath, filePath)).isDirectory()) {
        const files = fs.readdirSync(path.join(oldFilePath, filePath));
        return files.length;
      }
      return (
        filePath !== '.eslintrc.json' &&
        filePath !== '.eslintrc.js' &&
        filePath !== 'modern-app-env.d.ts' &&
        filePath !== 'modern.runtime.ts' &&
        filePath !== 'modern.runtime.js'
      );
    })
    .map(file =>
      path.join(context.materials.default.basePath, entriesDir, file),
    );

  // create new dir in entriesDir and move code to that dir
  fs.mkdirpSync(
    path.join(context.materials.default.basePath, entriesDir, pkgName),
  );
  oldFiles.forEach(file => {
    generator.logger.debug(
      `💡 [Rename Entry Info]: from ${file} to ${file.replace(
        entriesDir,
        path.join(entriesDir, pkgName),
      )}`,
    );
    fs.renameSync(
      file,
      file.replace(entriesDir, path.join(entriesDir, pkgName)),
    );
  });
};

export const handleTemplateFile = async (
  context: GeneratorContext,
  generator: GeneratorCore,
  appApi: AppAPI,
) => {
  const ans = await handleInput(context, generator, appApi);

  if (ans.isSingleEntry) {
    generator.logger.debug(
      `💡 [Current Entry Info]: Current Entry is Single Entry`,
    );
    await refactorSingleEntry(context, generator);
  }

  const entryName = (ans.name as string) || '';
  const fileExtra = ans.isTsProject ? 'tsx' : 'jsx';
  const targetPath = path.join(context.config.entriesDir, entryName);

  await appApi.forgeTemplate(`templates/**/*`, undefined, resourceKey =>
    resourceKey
      .replace('templates', targetPath)
      .replace('.handlebars', `.${fileExtra}`),
  );
};

export default async (context: GeneratorContext, generator: GeneratorCore) => {
  const appApi = new AppAPI(context, generator);

  const { locale } = context.config;
  commonI18n.changeLanguage({ locale });
  appApi.i18n.changeLanguage({ locale });
  i18n.changeLanguage({ locale });

  if (!(await appApi.checkEnvironment())) {
    process.exit(1);
  }

  generator.logger.debug(`🚀 [Start Run Entry Generator]`);
  generator.logger.debug(
    '💡 [Current Config]:',
    JSON.stringify(context.config),
  );

  merge(context.config, { entriesDir: context.config.entriesDir || 'src' });

  await handleTemplateFile(context, generator, appApi);

  if (!context.config.isEmptySrc) {
    appApi.showSuccessInfo(
      i18n.t(localeKeys.success, { name: context.config.name }),
    );
  }

  generator.logger.debug(`🌟 [End Run Entry Generator]`);
};
