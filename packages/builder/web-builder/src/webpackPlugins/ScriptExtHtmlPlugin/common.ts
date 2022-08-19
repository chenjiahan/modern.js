const separator = '/';

export const PLUGIN = 'ScriptExtHtmlPlugin';

export const isScript = tag => tag.tagName === 'script';

export const isResourceLink = tag =>
  tag.tagName === 'link' && tag.attributes && tag.attributes.as === 'script';

export const hasScriptName = tag => {
  if (isScript(tag)) {
    return tag.attributes && tag.attributes.src;
  } else if (isResourceLink(tag)) {
    return tag.attributes && tag.attributes.href;
  } else {
    return false;
  }
};

export const getRawScriptName = tag => {
  if (isScript(tag)) {
    return (tag.attributes && tag.attributes.src) || '';
  } else if (isResourceLink(tag)) {
    return (tag.attributes && tag.attributes.href) || '';
  } else {
    return '';
  }
};

export const getPublicPath = options => {
  const { output } = options.compilationOptions;
  if (output) {
    const { publicPath } = output;
    if (publicPath) {
      return publicPath.endsWith(separator)
        ? publicPath
        : publicPath + separator;
    }
  }
};

export const getScriptName = (options, tag) => {
  let scriptName = getRawScriptName(tag);
  const publicPath = getPublicPath(options);
  if (publicPath) {
    scriptName = scriptName.replace(publicPath, '');
  }
  if (options.htmlWebpackOptions.hash) {
    scriptName = scriptName.split('?', 1)[0];
  }
  return scriptName;
};

export const matches = (toMatch, matchers) =>
  matchers.some(matcher => {
    if (matcher instanceof RegExp) {
      return matcher.test(toMatch);
    } else {
      return toMatch.includes(matcher);
    }
  });

export const shouldAddResourceHints = options => {
  return !(
    options.prefetch.test.length === 0 && options.preload.test.length === 0
  );
};

export const createResourceHint = (rel, href) => {
  return {
    tagName: 'link',
    selfClosingTag: true,
    attributes: {
      rel,
      href,
      as: 'script',
    },
  };
};
