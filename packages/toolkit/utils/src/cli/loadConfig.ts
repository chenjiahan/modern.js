import jitiFactory from 'jiti';

export const loadConfig = async <T = unknown>(
  configFile: string,
): Promise<T> => {
  try {
    const jiti = jitiFactory(__filename, { interopDefault: true });
    return jiti(configFile);
  } catch (e) {
    if (e instanceof Error) {
      e.message = `Get Error while loading config file: ${configFile}, please check it and retry.\n${
        e.message || ''
      }`;
    }
    throw e;
  }
};
