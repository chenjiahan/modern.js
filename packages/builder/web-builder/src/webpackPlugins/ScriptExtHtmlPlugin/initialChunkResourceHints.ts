import {
  matches,
  hasScriptName,
  getScriptName,
  getRawScriptName,
  createResourceHint,
} from './common';

const CHUNK_OPTIONS = ['all', 'initial'];

const optionsMatch = (option, scriptName) =>
  matches(option.chunks, CHUNK_OPTIONS) && matches(scriptName, option.test);

export const addInitialChunkResourceHints = (options, tags) => {
  return tags.filter(hasScriptName).reduce((hints, tag) => {
    const scriptName = getScriptName(options, tag);
    if (optionsMatch(options.preload, scriptName)) {
      hints.push(createResourceHint('preload', getRawScriptName(tag)));
    } else if (optionsMatch(options.prefetch, scriptName)) {
      hints.push(createResourceHint('prefetch', getRawScriptName(tag)));
    }
    return hints;
  }, []);
};
