const DEFAULT_HASH = {
  test: [],
};

const DEFAULT_RESOURCE_HINT_HASH = {
  test: [],
  chunks: 'initial',
};

const DEFAULT_CUSTOM_HASH = {
  test: [],
  attribute: '',
  value: true,
};

const DEFAULT_OPTIONS = {
  inline: DEFAULT_HASH,
  sync: DEFAULT_HASH,
  async: DEFAULT_HASH,
  defer: DEFAULT_HASH,
  module: DEFAULT_HASH,
  prefetch: DEFAULT_RESOURCE_HINT_HASH,
  preload: DEFAULT_RESOURCE_HINT_HASH,
  defaultAttribute: 'sync',
  removeInlinedAssets: true,
  custom: [],
};

const POSSIBLE_VALUES = ['chunks', 'attribute', 'value'];

export const normalizeOptions = options => {
  if (!options) {
    return DEFAULT_OPTIONS;
  }

  const normalized = { ...DEFAULT_OPTIONS, ...options };
  // now overwrite values which are not of DEFAULT_HASH form
  Object.keys(options).forEach(key => {
    const value = options[key];
    switch (key) {
      case 'inline':
      case 'sync':
      case 'async':
      case 'defer':
      case 'module':
        normalized[key] = normalizeAttribute(value);
        break;
      case 'prefetch':
      case 'preload':
        normalized[key] = normalizeResourceHint(value);
        break;
      case 'custom':
        normalized[key] = normalizeCustomArray(value);
        break;
      default:
        break;
    }
  });
  return normalized;
};

const normalizeValue = (defaultProps, value) => {
  const normalized = { ...defaultProps };
  if (value) {
    normalized.test = convertToArray(value, () => {
      if (typeof value === 'object') {
        POSSIBLE_VALUES.forEach(key => copyValue(key, normalized, value));
        if (value.test) {
          return convertToArray(value.test);
        }
        return null;
      }
    });
  }
  return normalized;
};

const normalizeAttribute = normalizeValue.bind(null, DEFAULT_HASH);

const normalizeResourceHint = normalizeValue.bind(
  null,
  DEFAULT_RESOURCE_HINT_HASH,
);

const normalizeCustomAttribute = normalizeValue.bind(null, DEFAULT_CUSTOM_HASH);

const normalizeCustomArray = value => {
  const array = Array.isArray(value) ? value : [value];
  return array.map(normalizeCustomAttribute);
};

const convertToArray = (value: unknown, elseFn) => {
  if (typeof value === 'string') {
    return [value];
  } else if (value instanceof RegExp) {
    return [value];
  } else if (Array.isArray(value)) {
    return value;
  } else {
    return elseFn();
  }
};

const copyValue = (key, to, from) => {
  if (Object.prototype.hasOwnProperty.call(from, key)) {
    to[key] = from[key];
  }
};
