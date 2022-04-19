import fs from 'fs-extra';
import { dirname, join } from 'path';
import { TASKS, DIST_DIR, PACKAGES_DIR, ImportMap } from './constant';

export type ParsedTask = {
  minify: boolean;
  depName: string;
  depPath: string;
  distPath: string;
  externals: Record<string, string>;
  importPath: string;
  emitFiles: ImportMap[];
  packageDir: string;
  packagePath: string;
  packageName: string;
  packageJsonField: string[];
};

export function findDepPath(name: string) {
  let entry = dirname(require.resolve(join(name)));

  while (!dirname(entry).endsWith('node_modules')) {
    entry = dirname(entry);
  }

  return entry;
}

export function parseTasks() {
  const result: ParsedTask[] = [];

  TASKS.forEach(({ packageName, packageDir, dependencies }) => {
    dependencies.forEach(dep => {
      const depName = typeof dep === 'string' ? dep : dep.name;
      const importPath = join(packageName, DIST_DIR, depName);
      const packagePath = join(PACKAGES_DIR, packageDir);
      const distPath = join(packagePath, DIST_DIR, depName);
      const depPath = findDepPath(depName);
      const info = {
        depName,
        depPath,
        distPath,
        importPath,
        packageDir,
        packagePath,
        packageName,
      };

      if (typeof dep === 'string') {
        result.push({
          minify: true,
          externals: {},
          emitFiles: [],
          packageJsonField: [],
          ...info,
        });
      } else {
        result.push({
          minify: dep.minify ?? true,
          externals: dep.externals ?? {},
          emitFiles: dep.emitFiles ?? [],
          packageJsonField: dep.packageJsonField ?? [],
          ...info,
        });
      }
    });
  });

  return result;
}

export function pick<T, U extends keyof T>(obj: T, keys: ReadonlyArray<U>) {
  return keys.reduce((ret, key) => {
    if (obj[key] !== undefined) {
      ret[key] = obj[key];
    }
    return ret;
  }, {} as Pick<T, U>);
}

export function replaceFileContent(
  filePath: string,
  replaceFn: (content: string) => string,
) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const newContent = replaceFn(content);
  fs.writeFileSync(filePath, newContent);
}
