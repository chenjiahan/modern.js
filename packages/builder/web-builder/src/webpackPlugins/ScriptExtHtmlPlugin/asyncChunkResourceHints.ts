import { createResourceHint, getPublicPath, matches } from './common';

const CHUNK_OPTIONS = ['all', 'async'];

export const addAsyncChunkResourceHints = (chunks, options) => {
  const getRef = generateRef(options);
  const hints = [];
  chunks
    .filter(chunk => !isInitial(chunk))
    .reduce((files, chunk) => files.concat(chunk.files), [])
    .forEach(file => {
      if (optionsMatch(options.preload, file)) {
        hints.push(createResourceHint('preload', getRef(file)));
      } else if (optionsMatch(options.prefetch, file)) {
        hints.push(createResourceHint('prefetch', getRef(file)));
      }
    });

  return hints;
};

const isInitial = chunk => {
  if (chunk.canBeInitial) {
    if (chunk.canBeInitial()) {
      return chunk.isInitial;
    }
    return chunk.isInitial();
  }
  return chunk.isInitial;
};

const optionsMatch = (option, file) =>
  matches(option.chunks, CHUNK_OPTIONS) && matches(file, option.test);

const generateRef = options => {
  const publicPath = getPublicPath(options);
  return publicPath ? file => publicPath + file : file => file;
};
