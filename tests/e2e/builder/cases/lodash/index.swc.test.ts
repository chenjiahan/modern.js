import * as path from 'path';
import { expect, test } from '@modern-js/e2e/playwright';
import { pluginSwc } from '@rsbuild/plugin-webpack-swc';
import { build } from '@scripts/shared';

test('should optimize lodash bundle size when using SWC plugin', async () => {
  const builder = await build({
    cwd: __dirname,
    entry: {
      index: path.resolve(__dirname, './src/index.ts'),
    },
    builderConfig: {
      performance: {
        chunkSplit: {
          strategy: 'all-in-one',
        },
      },
      output: {
        distPath: {
          root: 'dist-swc',
        },
      },
    },
    plugins: [pluginSwc()],
    runServer: false,
  });

  const { content, size } = await builder.getIndexFile();
  expect(content.includes('debounce')).toBeFalsy();
  expect(size < 10).toBeTruthy();
});

test('should not optimize lodash bundle size when transformLodash is false and using SWC plugin', async () => {
  const builder = await build({
    cwd: __dirname,
    entry: {
      index: path.resolve(__dirname, './src/index.ts'),
    },
    builderConfig: {
      performance: {
        chunkSplit: {
          strategy: 'all-in-one',
        },
      },
      output: {
        distPath: {
          root: 'dist-swc',
        },
      },
    },
    plugins: [
      pluginSwc({
        transformLodash: false,
      }),
    ],
    runServer: false,
  });

  const { content, size } = await builder.getIndexFile();
  expect(content.includes('debounce')).toBeTruthy();
  expect(size > 30).toBeTruthy();
});
