import { pluginSwc } from '@rsbuild/plugin-webpack-swc';
import { describe, expect, it } from 'vitest';
import { createUniBuilder } from '../src';
import { unwrapConfig } from './helper';

describe('plugin-minimize', () => {
  it('should not apply minimizer in development', async () => {
    process.env.NODE_ENV = 'development';

    const rsbuild = await createUniBuilder({
      bundlerType: 'webpack',
      cwd: '',
      config: {},
    });

    const config = await unwrapConfig(rsbuild);

    expect(config.optimization?.minimize).toEqual(false);
    expect(config.optimization?.minimizer).toBeUndefined();

    process.env.NODE_ENV = 'test';
  });

  it('should apply minimizer in production', async () => {
    process.env.NODE_ENV = 'production';

    const rsbuild = await createUniBuilder({
      bundlerType: 'webpack',
      cwd: '',
      config: {},
    });

    const config = await unwrapConfig(rsbuild);

    expect(config.optimization?.minimizer).toMatchSnapshot();

    process.env.NODE_ENV = 'test';
  });

  it('Terser and SWC minimizer should not coexist', async () => {
    process.env.NODE_ENV = 'production';

    const rsbuild = await createUniBuilder({
      bundlerType: 'webpack',
      cwd: '',
      config: {},
    });

    rsbuild.addPlugins([pluginSwc()]);

    const config = await unwrapConfig(rsbuild);

    expect(config.optimization?.minimizer?.length).toBe(2);

    expect(config.optimization?.minimizer).toMatchSnapshot();

    process.env.NODE_ENV = 'test';
  });

  it('should accept and merge options for JS minimizer', async () => {
    process.env.NODE_ENV = 'production';

    const rsbuild = await createUniBuilder({
      bundlerType: 'webpack',
      cwd: '',
      config: {
        tools: {
          terser: {
            exclude: 'no_js_minify',
          },
        },
      },
    });

    const config = await unwrapConfig(rsbuild);

    expect(JSON.stringify(config.optimization?.minimizer)).toContain(
      'no_js_minify',
    );

    process.env.NODE_ENV = 'test';
  });

  it('should not extractComments when output.legalComments is inline', async () => {
    process.env.NODE_ENV = 'production';

    const rsbuild = await createUniBuilder({
      bundlerType: 'webpack',
      cwd: '',
      config: {
        output: {
          legalComments: 'inline',
        },
      },
    });

    const config = await unwrapConfig(rsbuild);

    expect(JSON.stringify(config.optimization?.minimizer)).toContain(
      '"extractComments":false',
    );
    expect(JSON.stringify(config.optimization?.minimizer)).not.toContain(
      '"comments":false',
    );

    process.env.NODE_ENV = 'test';
  });

  it('should not enable ascii_only when output.charset is utf8', async () => {
    process.env.NODE_ENV = 'production';

    const rsbuild = await createUniBuilder({
      bundlerType: 'webpack',
      cwd: '',
      config: {
        output: {
          charset: 'utf8',
        },
      },
    });

    const config = await unwrapConfig(rsbuild);

    expect(JSON.stringify(config.optimization?.minimizer)).toContain(
      '"ascii_only":false',
    );

    process.env.NODE_ENV = 'test';
  });
});

describe('html minify', () => {
  it('should not apply html minify in production when disableMinimize', async () => {
    process.env.NODE_ENV = 'production';

    const rsbuild = await createUniBuilder({
      bundlerType: 'webpack',
      cwd: '',
      config: {
        output: {
          disableMinimize: true,
        },
      },
    });

    const config = await unwrapConfig(rsbuild);

    expect(config.plugins).toMatchSnapshot();

    process.env.NODE_ENV = 'test';
  });

  it('should not apply html plugin when htmlPlugin false', async () => {
    process.env.NODE_ENV = 'production';

    const rsbuild = await createUniBuilder({
      bundlerType: 'webpack',
      cwd: '',
      config: {
        tools: {
          htmlPlugin: false,
        },
      },
    });

    const config = await unwrapConfig(rsbuild);

    expect(config.plugins).toMatchSnapshot();

    process.env.NODE_ENV = 'test';
  });

  it('should not apply html minify when htmlPlugin.minify false', async () => {
    process.env.NODE_ENV = 'production';

    const rsbuild = await createUniBuilder({
      bundlerType: 'webpack',
      cwd: '',
      config: {
        tools: {
          htmlPlugin: {
            minify: false,
          },
        },
      },
    });

    const config = await unwrapConfig(rsbuild);

    expect(config.plugins).toMatchSnapshot();

    process.env.NODE_ENV = 'test';
  });
});
