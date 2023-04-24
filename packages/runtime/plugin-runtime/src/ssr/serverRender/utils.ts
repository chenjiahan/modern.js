import type { ChunkExtractor } from '@loadable/server';

export const CSS_CHUNKS_PLACEHOLDER = '<!--<?- chunksMap.css ?>-->';

export const SSR_DATA_JSON_ID = '__MODERN_SSR_DATA__';

export const ROUTER_DATA_JSON_ID = '__MODERN_ROUTER_DATA__';

export function getLoadableScripts(extractor: ChunkExtractor) {
  const check = (scripts: string) =>
    (scripts || '').includes('__LOADABLE_REQUIRED_CHUNKS___ext');

  const scripts = extractor.getScriptTags();

  if (!check(scripts)) {
    return '';
  }

  return (
    scripts
      .split('</script>')
      // 前两个 script为 loadable 必须的 script
      .slice(0, 2)
      .map(i => `${i}</script>`)
      .join('')
  );
}