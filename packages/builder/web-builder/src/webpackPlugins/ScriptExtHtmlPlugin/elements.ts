import { matches, isScript, getScriptName, PLUGIN } from './common';

const SYNC = 'sync';
const ATTRIBUTE_PRIORITIES = [SYNC, 'async', 'defer'];

const shouldUpdate = options => {
  if (ATTRIBUTE_PRIORITIES.indexOf(options.defaultAttribute) < 0) {
    throw new Error(`${PLUGIN}: invalid default attribute`);
  }
  return !(
    options.defaultAttribute === SYNC &&
    options.inline.test.length === 0 &&
    options.async.test.length === 0 &&
    options.defer.test.length === 0 &&
    options.module.test.length === 0
  );
};

const update = (assets, options, tags) => {
  const update = updateElement.bind(null, assets, options);
  return tags.map(update);
};

export const elements = {
  update,
  shouldUpdate,
};

const updateElement = (assets, options, tag) => {
  return isScript(tag) ? updateScriptElement(assets, options, tag) : tag;
};

const updateScriptElement = (assets, options, tag) => {
  return isInline(options, tag)
    ? replaceWithInlineElement(assets, options, tag)
    : updateSrcElement(options, tag);
};

const isInline = (options, tag) =>
  matches(getScriptName(options, tag), options.inline.test);

const replaceWithInlineElement = (assets, options, tag) => {
  const scriptName = getScriptName(options, tag);
  const asset = assets[scriptName];
  if (!asset) {
    throw new Error(`${PLUGIN}: no asset with href '${scriptName}'`);
  }
  const newTag = {
    tagName: 'script',
    closeTag: true,
    innerHTML: asset.source(),
  };
  return newTag;
};

const updateSrcElement = (options, tag) => {
  const scriptName = getScriptName(options, tag);
  // select new attribute, if any, by priority
  let newAttribute;
  ATTRIBUTE_PRIORITIES.some(attribute => {
    if (matches(scriptName, options[attribute].test)) {
      newAttribute = attribute;
      return true;
    }
  });
  if (!newAttribute) {
    newAttribute = options.defaultAttribute;
  }

  if (!tag.attributes) {
    tag.attributes = {};
  }

  if (newAttribute !== SYNC) {
    tag.attributes[newAttribute] = true;
  }
  // possibly overwrite existing type attribute
  if (matches(scriptName, options.module.test)) {
    tag.attributes.type = 'module';
  }
  return tag;
};
