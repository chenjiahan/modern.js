const fs = require('fs');
const { join } = require('path');

const GROUP_MAP = {
  css: ['css', 'css-modules'],
  server: ['server-prod', 'bff-express', 'api-service-koa'],
  runtime: ['runtime'],
};

const mapFolderToMatch = dirs =>
  dirs.map(dir => `<rootDir>/integration/${dir}/**/*.(spec|test).[tj]s?(x)`);

const getTestMatch = groupName => {
  if (groupName) {
    if (GROUP_MAP[groupName]) {
      return mapFolderToMatch(GROUP_MAP[groupName]);
    }
    throw new Error(`unknown group name: ${groupName}!`);
  }

  const integrationDir = join(__dirname, 'integration');

  const allDirs = fs
    .readdirSync(integrationDir)
    .filter(dir => fs.lstatSync(join(integrationDir, dir)).isDirectory());

  const groupDirs = Object.keys(GROUP_MAP).reduce(
    (ret, key) => [...ret, ...GROUP_MAP[key]],
    [],
  );

  const restDirs = allDirs.filter(dir => !groupDirs.includes(dir));

  return mapFolderToMatch(restDirs);
};

module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  preset: 'jest-puppeteer',
  rootDir: __dirname,
  setupFilesAfterEnv: ['./utils/jest.setup.js'],
  testMatch: getTestMatch(process.env.TEST_GROUP),
  testPathIgnorePatterns: ['/node_modules/', '/api-service-koa/api/'],
  transform: {
    '^.+.tsx?$': 'ts-jest',
  },
};
