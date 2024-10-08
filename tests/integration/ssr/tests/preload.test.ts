import http, { type OutgoingHttpHeaders } from 'http';
import path from 'path';
import { fs } from '@modern-js/utils';
import { getPort, killApp, launchApp } from '../../../utils/modernTestUtils';

const fixtureDir = path.resolve(__dirname, '../fixtures');

async function request(
  url: string,
  options?: { timeout?: number },
): Promise<{
  body: string;
  headers: OutgoingHttpHeaders;
}> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`timeout: ${options?.timeout || 3000}`);
    }, options?.timeout || 3000);
    const req = http.request(url, res => {
      res.on('error', reject);
      let data = '';
      res.on('data', chunk => {
        data += chunk.toString();
      });
      res.on('end', () => {
        resolve({
          headers: res.headers,
          body: data,
        });
      });
    });

    req.end();
  });
}

// we would remove ssr preload features.
// so skip the test here
describe.skip('SSR preload', () => {
  let app: any;
  let appPort: number;
  const appDir = path.join(fixtureDir, 'preload');

  beforeAll(async () => {
    appPort = await getPort();
    app = await launchApp(appDir, appPort);
  });

  afterAll(async () => {
    if (app) {
      await killApp(app);
    }
  });

  test(`should add Links to response headers`, async () => {
    const url = `http://127.0.0.1:${appPort}`;
    const { headers, body } = await request(url);

    const links = (headers.link as string).split(', ');
    // the vendors chunk include hash, would fail in CI
    // so filtration the vendors chunk,
    expect(links.filter(link => !link.includes('vendors'))).toMatchSnapshot();
    expect(body).toMatch('"renderLevel":2');
  });

  test('should set routes.stream is true', async () => {
    const routePath = path.resolve(appDir, 'dist', 'route.json');

    const content = JSON.parse(fs.readFileSync(routePath, 'utf-8'));

    expect(content.routes[0].isStream).toBeTruthy();
  });
});
