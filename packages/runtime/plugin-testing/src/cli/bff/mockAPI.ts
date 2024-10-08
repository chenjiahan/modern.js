import * as ptr from 'path-to-regexp';
import * as mockAppModule from './app';

const mock_replaceUrlWithParams = (
  url: string,
  paramValues: (string | number)[],
  payload: Record<string, any>,
) => {
  const keys: any[] = [];
  ptr.pathToRegexp(url, keys);
  const params = keys.reduce(
    (cur, key, index) => {
      if (paramValues[index]) {
        cur[key.name] = paramValues[index];
      }
      return cur;
    },
    {} as Record<string | number, any>,
  );
  const getFinalPath = ptr.compile(url, { encode: encodeURIComponent });
  return getFinalPath({
    ...params,
    ...payload,
  });
};

const mock_getParamsAndPayload = (
  args: any[],
): [string[], Record<string, any>] => {
  if (args.length === 0) {
    return [[], {}];
  }

  const head = args[0];
  if (typeof head === 'object') {
    return [[], head];
  } else {
    const latest = args[args.length - 1];
    if (typeof latest === 'object') {
      return [args.slice(0, args.length - 1), latest];
    } else {
      return [args, {}];
    }
  }
};

export default (
  // can't use APIHandlerInfo, https://github.com/aelbore/esbuild-jest/issues/57
  mockApiInfosByFile: Record<string, any[]>,
) => {
  const files = Object.keys(mockApiInfosByFile);

  files.forEach(mockedFile => {
    jest.mock(mockedFile, () => {
      const supertest = require('supertest');
      return mockApiInfosByFile[mockedFile].reduce<Record<string, any>>(
        (res, info) => {
          const module = {
            [info.name]: (...args: any[]) => {
              if (mockAppModule.isInHandler()) {
                return info.handler(...args);
              }

              const [params, payload] = mock_getParamsAndPayload(args);
              const { returnHttp } = module[info.name] as any;
              const url = mock_replaceUrlWithParams(
                info.routePath,
                params,
                payload.params,
              );
              const app = mockAppModule.getApp();
              let test = supertest(app)[info.httpMethod.toLowerCase()](url);

              if (payload.query) {
                test = test.query(payload.query);
              }
              if (payload.body) {
                test = test.send(payload.body);
              }
              if (payload.data) {
                test = test.send(payload.data);
              }
              if (payload.headers) {
                for (const name in payload.headers) {
                  test = test.set(name, payload.headers[name]);
                }
              }
              if (payload.cookies) {
                test = test.set('Cookie', [payload.cookies]);
              }

              if (returnHttp) {
                return test;
              }

              return test.then((value: any) => {
                try {
                  return JSON.parse(value.text);
                } catch {
                  return value.text;
                }
              });
            },
          };

          res[info.name] = module[info.name];

          Object.assign(res[info.name], info.handler);

          res.__esModule = true;

          return res;
        },
        {},
      );
    });
  });
};
