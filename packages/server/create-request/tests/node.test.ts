import { storage } from '@modern-js/runtime-utils/node';
/**
 * @jest-environment node
 */
import nock from 'nock';
// 如果通过 default 引入会报 "Property exprName of TSTypeQuery expected node to be of a type ["TSEntityName","TSImportType"] but instead got "MemberExpression"
import * as fetch from 'node-fetch';
import { Response } from 'node-fetch';
import { configure, createRequest } from '../src/node';

describe('configure', () => {
  const url = 'http://127.0.0.1:8080';
  const path = '/api';
  const method = 'GET';
  const response = {
    code: 200,
    data: {
      message: 'hello Modernjs',
    },
  };

  // beforeEach(() => {
  //   nock.disableNetConnect();
  // });

  // afterEach(() => {
  //   nock.cleanAll();
  // });

  test('should support custom request', done => {
    const url = 'http://127.0.0.1:9090';
    const port = 9090;

    storage.run(
      {
        headers: {
          referer: url,
        },
        monitors: {} as any,
      },
      async () => {
        nock(url).get(path).reply(200, response);

        const customRequest = jest.fn((requestPath: any) => fetch(requestPath));

        configure({ request: customRequest as unknown as typeof fetch });
        const request = createRequest({ path, method, port });
        const res = await request();
        const data = await res.json();

        expect(customRequest).toHaveBeenCalledTimes(1);
        expect(res instanceof Response).toBe(true);
        expect(data).toStrictEqual(response);
        done();
      },
    );
  });

  test('query should support array', done => {
    const url = 'http://127.0.0.1:9090';
    const port = 9090;

    storage.run(
      {
        headers: {
          referer: url,
        },
        monitors: {} as any,
      },
      async () => {
        nock(url)
          .get(path)
          .query({
            users: ['foo', 'bar'],
          })
          .reply(200, response);

        const customRequest = jest.fn((requestPath: any) => fetch(requestPath));

        configure({ request: customRequest as unknown as typeof fetch });
        const request = createRequest({ path, method, port });
        const res = await request({
          query: {
            users: ['foo', 'bar'],
          },
        });
        const data = await res.json();

        expect(res instanceof Response).toBe(true);
        expect(data).toStrictEqual(response);
        done();
      },
    );
  });

  test('should support interceptor', done => {
    storage.run(
      {
        monitors: {} as any,
        headers: {},
      },
      async () => {
        nock(url).get(path).reply(200, response);

        const interceptor = jest.fn(
          request => (requestPath: any) => request(requestPath),
        );

        configure({ interceptor: interceptor as any });
        const request = createRequest({ path, method, port: 8080 });
        const res = await request();
        const data = await res.json();

        expect(res instanceof Response).toBe(true);
        expect(data).toStrictEqual(response);
        done();
      },
    );
  });

  test('should has correct priority', done => {
    storage.run(
      {
        monitors: {} as any,
        headers: {},
      },
      async () => {
        nock(url).get(path).reply(200, response);

        const customRequest = jest.fn((requestPath: any) => fetch(requestPath));

        const interceptor = jest.fn(
          request => (requestPath: any) => request(requestPath),
        );

        configure({
          request: customRequest as unknown as typeof fetch,
          interceptor: interceptor as any,
        });
        const request = createRequest({ path, method, port: 8080 });
        const res = await request();
        const data = await res.json();

        expect(interceptor).toHaveBeenCalledTimes(0);
        expect(customRequest).toHaveBeenCalledTimes(1);
        expect(res instanceof Response).toBe(true);
        expect(data).toStrictEqual(response);
        done();
      },
    );
  });

  test('should support custom headers in ssr environment', done => {
    const authKey = 'aaa';

    storage.run(
      {
        headers: {
          authorization: authKey,
        },
        monitors: {} as any,
      },
      async () => {
        nock(url, {
          reqheaders: {
            authorization: authKey,
          },
        })
          .get(path)
          .reply(200, response);

        configure({ allowedHeaders: ['authorization'] });
        const request = createRequest({ path, method, port: 8080 });
        const data = await request();

        expect(data).toStrictEqual(response);
        done();
      },
    );
  });

  test('should support params', done => {
    storage.run(
      {
        monitors: {} as any,
        headers: {},
      },
      async () => {
        nock(url).get(`${path}/modernjs`).reply(200, response);

        const interceptor = jest.fn(
          request => (requestPath: any) => request(requestPath),
        );

        configure({ interceptor: interceptor as any });

        const request = createRequest({
          path: `${path}/:id`,
          method,
          port: 8080,
        });
        const res = await request('modernjs');
        const data = await res.json();
        expect(res instanceof Response).toBe(true);
        expect(data).toStrictEqual(response);
        done();
      },
    );
  });

  test('should support params with schema', done => {
    storage.run(
      {
        monitors: {} as any,
        headers: {},
      },
      async () => {
        nock(url).get(`${path}/modernjs`).reply(200, response);

        const interceptor = jest.fn(
          request => (requestPath: any) => request(requestPath),
        );

        configure({ interceptor: interceptor as any });

        const request = createRequest({
          path: `${path}/:id`,
          method,
          port: 8080,
        });
        const res = await request({
          params: {
            id: 'modernjs',
          },
        });
        const data = await res.json();
        expect(res instanceof Response).toBe(true);
        expect(data).toStrictEqual(response);
        done();
      },
    );
  });
});
