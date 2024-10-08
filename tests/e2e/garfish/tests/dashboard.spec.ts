import { join } from 'path';
import { expect, test } from '@modern-js/e2e/playwright';
import { killApp, launchApp } from '../../../utils/modernTestUtils';
import { getPublicPath } from '../testUtils';

let app: unknown;
declare global {
  const __GARFISH__: unknown;
}

test.beforeAll(async () => {
  test.setTimeout(90 * 1000);
  app = await launchApp(join(__dirname, '../fixtures/dashboard'));
});

test.afterAll(async () => {
  await killApp(app);
});

test('independent access', async ({ page }) => {
  await page.goto(getPublicPath('@e2e/garfish-dashboard'));

  expect(await page.textContent('body')).toContain('Dashboard Home page');

  const link = await page.$('[data-test=sub-link-dashboard]');
  await link?.click();

  expect(await page.textContent('body')).toContain('Dashboard detail page');

  // it should not inject window.__GARFISH__ while independent access
  const garfishExists = await page.evaluate(
    () => typeof window.__GARFISH__ !== 'undefined',
  );
  expect(garfishExists).toBe(false);

  await killApp(app);
});
