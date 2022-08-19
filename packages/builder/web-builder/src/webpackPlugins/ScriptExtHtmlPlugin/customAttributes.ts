import { matches, isScript, getScriptName, isResourceLink } from './common';

const updateElement = (options, tag) =>
  isScript(tag) || isResourceLink(tag)
    ? updateScriptElement(options, tag)
    : tag;

const updateScriptElement = (options, tag) => {
  const scriptName = getScriptName(options, tag);
  options.custom.forEach(customOption => {
    if (matches(scriptName, customOption.test)) {
      tag.attributes = tag.attributes || {};
      tag.attributes[customOption.attribute] = customOption.value;
    }
  });
  return tag;
};

export const customAttributes = {
  add: (options, tags) => {
    const update = updateElement.bind(null, options);
    return tags.map(update);
  },
  shouldAdd: options => options.custom.length > 0,
};
