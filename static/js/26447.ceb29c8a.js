(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[26447],{

/***/ 29133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RQ": () => (/* binding */ joinPaths),
/* harmony export */   "Zn": () => (/* binding */ stripBasename),
/* harmony export */   "Zq": () => (/* binding */ getPathContributingMatches),
/* harmony export */   "aU": () => (/* binding */ Action),
/* harmony export */   "cP": () => (/* binding */ parsePath),
/* harmony export */   "fp": () => (/* binding */ matchRoutes),
/* harmony export */   "kG": () => (/* binding */ invariant),
/* harmony export */   "lX": () => (/* binding */ createBrowserHistory),
/* harmony export */   "pC": () => (/* binding */ resolveTo)
/* harmony export */ });
/* unused harmony exports AbortedDeferredError, ErrorResponse, IDLE_FETCHER, IDLE_NAVIGATION, UNSAFE_convertRoutesToDataRoutes, createHashHistory, createMemoryHistory, createPath, createRouter, createStaticHandler, defer, generatePath, getStaticContextFromError, getToPathname, isRouteErrorResponse, json, matchPath, normalizePathname, redirect, resolvePath, warning */
/**
 * @remix-run/router v1.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////

/**
 * Actions represent the type of change to a location value.
 */
var Action;

(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */

  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */

  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));

const PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */

function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }

  let {
    initialEntries = ["/"],
    initialIndex,
    v5Compat = false
  } = options;
  let entries; // Declare so we can access from createMemoryLocation

  entries = initialEntries.map((entry, index) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
  let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
  let action = Action.Pop;
  let listener = null;

  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }

  function getCurrentLocation() {
    return entries[index];
  }

  function createMemoryLocation(to, state, key) {
    if (state === void 0) {
      state = null;
    }

    let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
    warning$1(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
    return location;
  }

  let history = {
    get index() {
      return index;
    },

    get action() {
      return action;
    },

    get location() {
      return getCurrentLocation();
    },

    createHref(to) {
      return typeof to === "string" ? to : createPath(to);
    },

    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },

    push(to, state) {
      action = Action.Push;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);

      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation
        });
      }
    },

    replace(to, state) {
      action = Action.Replace;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;

      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation
        });
      }
    },

    go(delta) {
      action = Action.Pop;
      index = clampIndex(index + delta);

      if (listener) {
        listener({
          action,
          location: getCurrentLocation()
        });
      }
    },

    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }

  };
  return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */

function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }

  function createBrowserLocation(window, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window.location;
    return createLocation("", {
      pathname,
      search,
      hash
    }, // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }

  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : createPath(to);
  }

  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */

function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }

  function createHashLocation(window, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window.location.hash.substr(1));
    return createLocation("", {
      pathname,
      search,
      hash
    }, // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }

  function createHashHref(window, to) {
    let base = window.document.querySelector("base");
    let href = "";

    if (base && base.getAttribute("href")) {
      let url = window.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }

    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }

  function validateHashLocation(location, to) {
    warning$1(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }

  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}

function warning$1(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */


function getHistoryState(location) {
  return {
    usr: location.state,
    key: location.key
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */


function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }

  let location = _extends({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });

  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */

function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */

function parsePath(path) {
  let parsedPath = {};

  if (path) {
    let hashIndex = path.indexOf("#");

    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }

    let searchIndex = path.indexOf("?");

    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }

    if (path) {
      parsedPath.pathname = path;
    }
  }

  return parsedPath;
}
function createClientSideURL(location) {
  // window.location.origin is "null" (the literal string value) in Firefox
  // under certain conditions, notably when serving from a local HTML file
  // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
  let base = typeof window !== "undefined" && typeof window.location !== "undefined" && window.location.origin !== "null" ? window.location.origin : window.location.href;
  let href = typeof location === "string" ? location : createPath(location);
  invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
  return new URL(href, base);
}

function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }

  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = Action.Pop;
  let listener = null;

  function handlePop() {
    action = Action.Pop;

    if (listener) {
      listener({
        action,
        location: history.location
      });
    }
  }

  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    let historyState = getHistoryState(location);
    let url = history.createHref(location); // try...catch because iOS limits us to 100 pushState calls :/

    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }

    if (v5Compat && listener) {
      listener({
        action,
        location: history.location
      });
    }
  }

  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    let historyState = getHistoryState(location);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);

    if (v5Compat && listener) {
      listener({
        action,
        location: history.location
      });
    }
  }

  let history = {
    get action() {
      return action;
    },

    get location() {
      return getLocation(window, globalHistory);
    },

    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }

      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },

    createHref(to) {
      return createHref(window, to);
    },

    encodeLocation(to) {
      // Encode a Location the same way window.location would
      let url = createClientSideURL(typeof to === "string" ? to : createPath(to));
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },

    push,
    replace,

    go(n) {
      return globalHistory.go(n);
    }

  };
  return history;
} //#endregion

var ResultType;

(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));

function isIndexRoute(route) {
  return route.index === true;
} // Walk the route tree generating unique IDs where necessary so we are working
// solely with AgnosticDataRouteObject's within the Router


function convertRoutesToDataRoutes(routes, parentPath, allIds) {
  if (parentPath === void 0) {
    parentPath = [];
  }

  if (allIds === void 0) {
    allIds = new Set();
  }

  return routes.map((route, index) => {
    let treePath = [...parentPath, index];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
    invariant(!allIds.has(id), "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");
    allIds.add(id);

    if (isIndexRoute(route)) {
      let indexRoute = _extends({}, route, {
        id
      });

      return indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, {
        id,
        children: route.children ? convertRoutesToDataRoutes(route.children, treePath, allIds) : undefined
      });

      return pathOrLayoutRoute;
    }
  });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */

function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }

  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);

  if (pathname == null) {
    return null;
  }

  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;

  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    safelyDecodeURI(pathname));
  }

  return matches;
}

function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }

  if (parentsMeta === void 0) {
    parentsMeta = [];
  }

  if (parentPath === void 0) {
    parentPath = "";
  }

  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };

    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }

    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children && route.children.length > 0) {
      invariant( // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    } // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.


    if (route.path == null && !route.index) {
      return;
    }

    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };

  routes.forEach((route, index) => {
    var _route$path;

    // coarse-grain check for optional params
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */


function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments; // Optional path segments are denoted by a trailing `?`

  let isOptional = first.endsWith("?"); // Compute the corresponding required segment: `foo?` -> `foo`

  let required = first.replace(/\?$/, "");

  if (rest.length === 0) {
    // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [required, ""] : [required];
  }

  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = []; // All child paths with the prefix.  Do this for all children before the
  // optional version for all children so we get consistent ordering where the
  // parent optional aspect is preferred as required.  Otherwise, we can get
  // child sections interspersed where deeper optional segments are higher than
  // parent optional segments, where for example, /:two would explodes _earlier_
  // then /:one.  By always including the parent as required _for all children_
  // first, we avoid this issue

  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/"))); // Then if this is an optional value, add all child versions without

  if (isOptional) {
    result.push(...restExploded);
  } // for absolute paths, ensure `/` instead of empty segment


  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
}

function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}

const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;

const isSplat = s => s === "*";

function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;

  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }

  if (index) {
    initialScore += indexRouteValue;
  }

  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}

function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}

function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];

  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });

    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }

  return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */


function generatePath(originalPath, params) {
  if (params === void 0) {
    params = {};
  }

  let path = originalPath;

  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    path = path.replace(/\*$/, "/*");
  }

  return path.replace(/^:(\w+)/g, (_, key) => {
    invariant(params[key] != null, "Missing \":" + key + "\" param");
    return params[key];
  }).replace(/\/:(\w+)/g, (_, key) => {
    invariant(params[key] != null, "Missing \":" + key + "\" param");
    return "/" + params[key];
  }).replace(/(\/?)\*/, (_, prefix, __, str) => {
    const star = "*";

    if (params[star] == null) {
      // If no splat was provided, trim the trailing slash _unless_ it's
      // the entire path
      return str === "/*" ? "/" : "";
    } // Apply the splat


    return "" + prefix + params[star];
  });
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */

function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }

  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }

    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}

function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }

  if (end === void 0) {
    end = true;
  }

  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "/([^\\/]+)";
  });

  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;

  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}

function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
    return value;
  }
}

function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */


function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;

  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  } // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it


  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);

  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }

  return pathname.slice(startIndex) || "/";
}
/**
 * @private
 */

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */

function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}

function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */


function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
/**
 * @private
 */

function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }

  let to;

  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }

  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from; // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.


    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original "to" had one

  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/"); // Or if this was a link to the current path which has a trailing slash

  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");

  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }

  return path;
}
/**
 * @private
 */

function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */

const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */

const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */

const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */

const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */

const json = function json(data, init) {
  if (init === void 0) {
    init = {};
  }

  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  let headers = new Headers(responseInit.headers);

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }

  return new Response(JSON.stringify(data), _extends({}, responseInit, {
    headers
  }));
};
class AbortedDeferredError extends Error {}
class DeferredData {
  constructor(data) {
    this.pendingKeys = new Set();
    this.subscriber = undefined;
    invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects"); // Set up an AbortController + Promise we can race against to exit early
    // cancellation

    let reject;
    this.abortPromise = new Promise((_, r) => reject = r);
    this.controller = new AbortController();

    let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));

    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);

    this.controller.signal.addEventListener("abort", onAbort);
    this.data = Object.entries(data).reduce((acc, _ref) => {
      let [key, value] = _ref;
      return Object.assign(acc, {
        [key]: this.trackPromise(key, value)
      });
    }, {});
  }

  trackPromise(key, value) {
    if (!(value instanceof Promise)) {
      return value;
    }

    this.pendingKeys.add(key); // We store a little wrapper promise that will be extended with
    // _data/_error props upon resolve/reject

    let promise = Promise.race([value, this.abortPromise]).then(data => this.onSettle(promise, key, null, data), error => this.onSettle(promise, key, error)); // Register rejection listeners to avoid uncaught promise rejections on
    // errors or aborted deferred values

    promise.catch(() => {});
    Object.defineProperty(promise, "_tracked", {
      get: () => true
    });
    return promise;
  }

  onSettle(promise, key, error, data) {
    if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
      this.unlistenAbortSignal();
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      return Promise.reject(error);
    }

    this.pendingKeys.delete(key);

    if (this.done) {
      // Nothing left to abort!
      this.unlistenAbortSignal();
    }

    const subscriber = this.subscriber;

    if (error) {
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      subscriber && subscriber(false);
      return Promise.reject(error);
    }

    Object.defineProperty(promise, "_data", {
      get: () => data
    });
    subscriber && subscriber(false);
    return data;
  }

  subscribe(fn) {
    this.subscriber = fn;
  }

  cancel() {
    this.controller.abort();
    this.pendingKeys.forEach((v, k) => this.pendingKeys.delete(k));
    let subscriber = this.subscriber;
    subscriber && subscriber(true);
  }

  async resolveData(signal) {
    let aborted = false;

    if (!this.done) {
      let onAbort = () => this.cancel();

      signal.addEventListener("abort", onAbort);
      aborted = await new Promise(resolve => {
        this.subscribe(aborted => {
          signal.removeEventListener("abort", onAbort);

          if (aborted || this.done) {
            resolve(aborted);
          }
        });
      });
    }

    return aborted;
  }

  get done() {
    return this.pendingKeys.size === 0;
  }

  get unwrappedData() {
    invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
    return Object.entries(this.data).reduce((acc, _ref2) => {
      let [key, value] = _ref2;
      return Object.assign(acc, {
        [key]: unwrapTrackedPromise(value)
      });
    }, {});
  }

}

function isTrackedPromise(value) {
  return value instanceof Promise && value._tracked === true;
}

function unwrapTrackedPromise(value) {
  if (!isTrackedPromise(value)) {
    return value;
  }

  if (value._error) {
    throw value._error;
  }

  return value._data;
}

function defer(data) {
  return new DeferredData(data);
}
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */

const redirect = function redirect(url, init) {
  if (init === void 0) {
    init = 302;
  }

  let responseInit = init;

  if (typeof responseInit === "number") {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }

  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, _extends({}, responseInit, {
    headers
  }));
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 */

class ErrorResponse {
  constructor(status, statusText, data, internal) {
    if (internal === void 0) {
      internal = false;
    }

    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;

    if (data instanceof Error) {
      this.data = data.toString();
      this.error = data;
    } else {
      this.data = data;
    }
  }

}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response throw from an action/loader
 */

function isRouteErrorResponse(e) {
  return e instanceof ErrorResponse;
}

const validMutationMethodsArr = ["post", "put", "patch", "delete"];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
const redirectPreserveMethodStatusCodes = new Set([307, 308]);
const IDLE_NAVIGATION = {
  state: "idle",
  location: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined
};
const IDLE_FETCHER = {
  state: "idle",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined
};
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const isServer = !isBrowser; //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////

/**
 * Create a router and listen to history POP navigations
 */

function createRouter(init) {
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let dataRoutes = convertRoutesToDataRoutes(init.routes); // Cleanup function for history

  let unlistenHistory = null; // Externally-provided functions to call on all state changes

  let subscribers = new Set(); // Externally-provided object to hold scroll restoration locations during routing

  let savedScrollPositions = null; // Externally-provided function to get scroll restoration keys

  let getScrollRestorationKey = null; // Externally-provided function to get current scroll position

  let getScrollPosition = null; // One-time flag to control the initial hydration scroll restoration.  Because
  // we don't get the saved positions from <ScrollRestoration /> until _after_
  // the initial render, we need to manually trigger a separate updateState to
  // send along the restoreScrollPosition
  // Set to true if we have `hydrationData` since we assume we were SSR'd and that
  // SSR did the initial scroll restoration.

  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, init.basename);
  let initialErrors = null;

  if (initialMatches == null) {
    // If we do not match a user-provided-route, fall back to the root
    // to allow the error boundary to take over
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let {
      matches,
      route
    } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = {
      [route.id]: error
    };
  }

  let initialized = !initialMatches.some(m => m.route.loader) || init.hydrationData != null;
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: new Map()
  }; // -- Stateful internal variables to manage navigations --
  // Current navigation in progress (to be committed in completeNavigation)

  let pendingAction = Action.Pop; // Should the current navigation prevent the scroll reset if scroll cannot
  // be restored?

  let pendingPreventScrollReset = false; // AbortController for the active navigation

  let pendingNavigationController; // We use this to avoid touching history in completeNavigation if a
  // revalidation is entirely uninterrupted

  let isUninterruptedRevalidation = false; // Use this internal flag to force revalidation of all loaders:
  //  - submissions (completed or interrupted)
  //  - useRevalidate()
  //  - X-Remix-Revalidate (from redirect)

  let isRevalidationRequired = false; // Use this internal array to capture routes that require revalidation due
  // to a cancelled deferred on action submission

  let cancelledDeferredRoutes = []; // Use this internal array to capture fetcher loads that were cancelled by an
  // action navigation and require revalidation

  let cancelledFetcherLoads = []; // AbortControllers for any in-flight fetchers

  let fetchControllers = new Map(); // Track loads based on the order in which they started

  let incrementingLoadId = 0; // Track the outstanding pending navigation data load to be compared against
  // the globally incrementing load when a fetcher load lands after a completed
  // navigation

  let pendingNavigationLoadId = -1; // Fetchers that triggered data reloads as a result of their actions

  let fetchReloadIds = new Map(); // Fetchers that triggered redirect navigations from their actions

  let fetchRedirectIds = new Set(); // Most recent href/match for fetcher.load calls for fetchers

  let fetchLoadMatches = new Map(); // Store DeferredData instances for active route matches.  When a
  // route loader returns defer() we stick one in here.  Then, when a nested
  // promise resolves we update loaderData.  If a new navigation starts we
  // cancel active deferreds for eliminated routes.

  let activeDeferreds = new Map(); // Initialize the router, all side effects should be kicked off from here.
  // Implemented as a Fluent API for ease of:
  //   let router = createRouter(init).initialize();

  function initialize() {
    // If history informs us of a POP navigation, start the navigation but do not update
    // state.  We'll update our own state once the navigation completes
    unlistenHistory = init.history.listen(_ref => {
      let {
        action: historyAction,
        location
      } = _ref;
      return startNavigation(historyAction, location);
    }); // Kick off initial data load if needed.  Use Pop to avoid modifying history

    if (!state.initialized) {
      startNavigation(Action.Pop, state.location);
    }

    return router;
  } // Clean up a router and it's side effects


  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }

    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
  } // Subscribe to state updates for the router


  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  } // Update our state and notify the calling context of the change


  function updateState(newState) {
    state = _extends({}, state, newState);
    subscribers.forEach(subscriber => subscriber(state));
  } // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
  // and setting state.[historyAction/location/matches] to the new route.
  // - Location is a required param
  // - Navigation will always be set to IDLE_NAVIGATION
  // - Can pass any other state in newState


  function completeNavigation(location, newState) {
    var _state$navigation$for;

    // Deduce if we're in a loading/actionReload state:
    // - We have committed actionData in the store
    // - The current navigation was a submission
    // - We're past the submitting state and into the loading state
    // - The location we've finished loading is different from the submission
    //   location, indicating we redirected from the action (avoids false
    //   positives for loading/submissionRedirect when actionData returned
    //   on a prior submission)
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && state.navigation.state === "loading" && ((_state$navigation$for = state.navigation.formAction) == null ? void 0 : _state$navigation$for.split("?")[0]) === location.pathname;
    let actionData;

    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        // Empty actionData -> clear prior actionData due to an action error
        actionData = null;
      }
    } else if (isActionReload) {
      // Keep the current data if we're wrapping up the action reload
      actionData = state.actionData;
    } else {
      // Clear actionData on any other completed navigations
      actionData = null;
    } // Always preserve any existing loaderData from re-used routes


    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
    updateState(_extends({}, newState, {
      actionData,
      loaderData,
      historyAction: pendingAction,
      location,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      // Don't restore on submission navigations
      restoreScrollPosition: state.navigation.formData ? false : getSavedScrollPosition(location, newState.matches || state.matches),
      preventScrollReset: pendingPreventScrollReset
    }));

    if (isUninterruptedRevalidation) ; else if (pendingAction === Action.Pop) ; else if (pendingAction === Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === Action.Replace) {
      init.history.replace(location, location.state);
    } // Reset stateful navigation vars


    pendingAction = Action.Pop;
    pendingPreventScrollReset = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
    cancelledFetcherLoads = [];
  } // Trigger a navigation event, which can either be a numerical POP or a PUSH
  // replace with an optional submission


  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }

    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(to, opts);
    let location = createLocation(state.location, path, opts && opts.state); // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
    // URL from window.location, so we need to encode it here so the behavior
    // remains the same as POP and non-data-router usages.  new URL() does all
    // the same encoding we'd get from a history.pushState/window.location read
    // without having to touch history

    location = _extends({}, location, init.history.encodeLocation(location));
    let userReplace = opts && opts.replace != null ? opts.replace : undefined;
    let historyAction = Action.Push;

    if (userReplace === true) {
      historyAction = Action.Replace;
    } else if (userReplace === false) ; else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      // By default on submissions to the current location we REPLACE so that
      // users don't have to double-click the back button to get to the prior
      // location.  If the user redirects to a different location from the
      // action/loader this will be ignored and the redirect will be a PUSH
      historyAction = Action.Replace;
    }

    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
    return await startNavigation(historyAction, location, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace
    });
  } // Revalidate all current loaders.  If a navigation is in progress or if this
  // is interrupted by a navigation, allow this to "succeed" by calling all
  // loaders during the next loader round


  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: "loading"
    }); // If we're currently submitting an action, we don't need to start a new
    // navigation, we'll just let the follow up loader execution call all loaders

    if (state.navigation.state === "submitting") {
      return;
    } // If we're currently in an idle state, start a new navigation for the current
    // action/location and mark it as uninterrupted, which will skip the history
    // update in completeNavigation


    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    } // Otherwise, if we're currently in a loading state, just start a new
    // navigation to the navigation.location but do not trigger an uninterrupted
    // revalidation so that history correctly updates once the navigation completes


    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation
    });
  } // Start a navigation to the given action/location.  Can optionally provide a
  // overrideNavigation which will override the normalLoad in the case of a redirect
  // navigation


  async function startNavigation(historyAction, location, opts) {
    // Abort any in-progress navigations and start a new one. Unset any ongoing
    // uninterrupted revalidations unless told otherwise, since we want this
    // new navigation to update history normally
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true; // Save the current scroll position every time we start a new navigation,
    // and track whether we should reset scroll on completion

    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(dataRoutes, location, init.basename); // Short circuit with a 404 on the root error boundary if we match nothing

    if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes); // Cancel all pending deferred on 404s since we don't keep any routes

      cancelActiveDeferreds();
      completeNavigation(location, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      });
      return;
    } // Short circuit if it's only a hash change


    if (isHashChangeOnly(state.location, location)) {
      completeNavigation(location, {
        matches
      });
      return;
    } // Create a controller/Request for this navigation


    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(location, pendingNavigationController.signal, opts && opts.submission);
    let pendingActionData;
    let pendingError;

    if (opts && opts.pendingError) {
      // If we have a pendingError, it means the user attempted a GET submission
      // with binary FormData so assign here and skip to handleLoaders.  That
      // way we handle calling loaders above the boundary etc.  It's not really
      // different from an actionError in that sense.
      pendingError = {
        [findNearestBoundary(matches).route.id]: opts.pendingError
      };
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      // Call action if we received an action submission
      let actionOutput = await handleAction(request, location, opts.submission, matches, {
        replace: opts.replace
      });

      if (actionOutput.shortCircuited) {
        return;
      }

      pendingActionData = actionOutput.pendingActionData;
      pendingError = actionOutput.pendingActionError;

      let navigation = _extends({
        state: "loading",
        location
      }, opts.submission);

      loadingNavigation = navigation; // Create a GET request for the loaders

      request = new Request(request.url, {
        signal: request.signal
      });
    } // Call loaders


    let {
      shortCircuited,
      loaderData,
      errors
    } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.replace, pendingActionData, pendingError);

    if (shortCircuited) {
      return;
    } // Clean up now that the action/loaders have completed.  Don't clean up if
    // we short circuited because pendingNavigationController will have already
    // been assigned to a new controller for the next navigation


    pendingNavigationController = null;
    completeNavigation(location, _extends({
      matches
    }, pendingActionData ? {
      actionData: pendingActionData
    } : {}, {
      loaderData,
      errors
    }));
  } // Call the action matched by the leaf route for this navigation and handle
  // redirects/errors


  async function handleAction(request, location, submission, matches, opts) {
    interruptActiveLoads(); // Put us in a submitting state

    let navigation = _extends({
      state: "submitting",
      location
    }, submission);

    updateState({
      navigation
    }); // Call our action and get the result

    let result;
    let actionMatch = getTargetMatch(matches, location);

    if (!actionMatch.route.action) {
      result = {
        type: ResultType.error,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, router.basename);

      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }

    if (isRedirectResult(result)) {
      let replace;

      if (opts && opts.replace != null) {
        replace = opts.replace;
      } else {
        // If the user didn't explicity indicate replace behavior, replace if
        // we redirected to the exact same location we're currently at to avoid
        // double back-buttons
        replace = result.location === state.location.pathname + state.location.search;
      }

      await startRedirectNavigation(state, result, replace);
      return {
        shortCircuited: true
      };
    }

    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id); // By default, all submissions are REPLACE navigations, but if the
      // action threw an error that'll be rendered in an errorElement, we fall
      // back to PUSH so that the user can use the back button to get back to
      // the pre-submission form location to try again

      if ((opts && opts.replace) !== true) {
        pendingAction = Action.Push;
      }

      return {
        // Send back an empty object we can use to clear out any prior actionData
        pendingActionData: {},
        pendingActionError: {
          [boundaryMatch.route.id]: result.error
        }
      };
    }

    if (isDeferredResult(result)) {
      throw new Error("defer() is not supported in actions");
    }

    return {
      pendingActionData: {
        [actionMatch.route.id]: result.data
      }
    };
  } // Call all applicable loaders for the given matches, handling redirects,
  // errors, etc.


  async function handleLoaders(request, location, matches, overrideNavigation, submission, replace, pendingActionData, pendingError) {
    // Figure out the right navigation we want to use for data loading
    let loadingNavigation = overrideNavigation;

    if (!loadingNavigation) {
      let navigation = _extends({
        state: "loading",
        location,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined
      }, submission);

      loadingNavigation = navigation;
    }

    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, pendingActionData, pendingError, fetchLoadMatches); // Cancel pending deferreds for no-longer-matched routes or routes we're
    // about to reload.  Note that if this is an action reload we would have
    // already cancelled all pending deferreds so this would be a no-op

    cancelActiveDeferreds(routeId => !(matches && matches.some(m => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some(m => m.route.id === routeId)); // Short circuit if we have no loaders to run

    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      completeNavigation(location, _extends({
        matches,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: pendingError || null
      }, pendingActionData ? {
        actionData: pendingActionData
      } : {}));
      return {
        shortCircuited: true
      };
    } // If this is an uninterrupted revalidation, we remain in our current idle
    // state.  If not, we need to switch to our loading state and load data,
    // preserving any new action data or existing action data (in the case of
    // a revalidation interrupting an actionReload)


    if (!isUninterruptedRevalidation) {
      revalidatingFetchers.forEach(_ref2 => {
        let [key] = _ref2;
        let fetcher = state.fetchers.get(key);
        let revalidatingFetcher = {
          state: "loading",
          data: fetcher && fetcher.data,
          formMethod: undefined,
          formAction: undefined,
          formEncType: undefined,
          formData: undefined,
          " _hasFetcherDoneAnything ": true
        };
        state.fetchers.set(key, revalidatingFetcher);
      });
      let actionData = pendingActionData || state.actionData;
      updateState(_extends({
        navigation: loadingNavigation
      }, actionData ? Object.keys(actionData).length === 0 ? {
        actionData: null
      } : {
        actionData
      } : {}, revalidatingFetchers.length > 0 ? {
        fetchers: new Map(state.fetchers)
      } : {}));
    }

    pendingNavigationLoadId = ++incrementingLoadId;
    revalidatingFetchers.forEach(_ref3 => {
      let [key] = _ref3;
      return fetchControllers.set(key, pendingNavigationController);
    });
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);

    if (request.signal.aborted) {
      return {
        shortCircuited: true
      };
    } // Clean up _after_ loaders have completed.  Don't clean up if we short
    // circuited because fetchControllers would have been aborted and
    // reassigned to new controllers for the next navigation


    revalidatingFetchers.forEach(_ref4 => {
      let [key] = _ref4;
      return fetchControllers.delete(key);
    }); // If any loaders returned a redirect Response, start a new REPLACE navigation

    let redirect = findRedirect(results);

    if (redirect) {
      await startRedirectNavigation(state, redirect, replace);
      return {
        shortCircuited: true
      };
    } // Process and commit output from loaders


    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds); // Wire up subscribers to update loaderData as promises settle

    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe(aborted => {
        // Note: No need to updateState here since the TrackedPromise on
        // loaderData is stable across resolve/reject
        // Remove this instance if we were aborted or if promises have settled
        if (aborted || deferredData.done) {
          activeDeferreds.delete(routeId);
        }
      });
    });
    markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    return _extends({
      loaderData,
      errors
    }, didAbortFetchLoads || revalidatingFetchers.length > 0 ? {
      fetchers: new Map(state.fetchers)
    } : {});
  }

  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  } // Trigger a fetcher load/submit for the given fetcher key


  function fetch(key, routeId, href, opts) {
    if (isServer) {
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
    }

    if (fetchControllers.has(key)) abortFetcher(key);
    let matches = matchRoutes(dataRoutes, href, init.basename);

    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: href
      }));
      return;
    }

    let {
      path,
      submission
    } = normalizeNavigateOptions(href, opts, true);
    let match = getTargetMatch(matches, path);

    if (submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, submission);
      return;
    } // Store off the match so we can call it's shouldRevalidate on subsequent
    // revalidations


    fetchLoadMatches.set(key, [path, match, matches]);
    handleFetcherLoader(key, routeId, path, match, matches, submission);
  } // Call the action for the matched fetcher.submit(), and then handle redirects,
  // errors, and revalidation


  async function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);

    if (!match.route.action) {
      let error = getInternalRouterError(405, {
        method: submission.formMethod,
        pathname: path,
        routeId: routeId
      });
      setFetcherError(key, routeId, error);
      return;
    } // Put this fetcher into it's submitting state


    let existingFetcher = state.fetchers.get(key);

    let fetcher = _extends({
      state: "submitting"
    }, submission, {
      data: existingFetcher && existingFetcher.data,
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, fetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }); // Call the action for the fetcher

    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(path, abortController.signal, submission);
    fetchControllers.set(key, abortController);
    let actionResult = await callLoaderOrAction("action", fetchRequest, match, requestMatches, router.basename);

    if (fetchRequest.signal.aborted) {
      // We can delete this so long as we weren't aborted by ou our own fetcher
      // re-submit which would have put _new_ controller is in fetchControllers
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }

      return;
    }

    if (isRedirectResult(actionResult)) {
      fetchControllers.delete(key);
      fetchRedirectIds.add(key);

      let loadingFetcher = _extends({
        state: "loading"
      }, submission, {
        data: undefined,
        " _hasFetcherDoneAnything ": true
      });

      state.fetchers.set(key, loadingFetcher);
      updateState({
        fetchers: new Map(state.fetchers)
      });
      return startRedirectNavigation(state, actionResult, false, true);
    } // Process any non-redirect errors thrown


    if (isErrorResult(actionResult)) {
      setFetcherError(key, routeId, actionResult.error);
      return;
    }

    if (isDeferredResult(actionResult)) {
      invariant(false, "defer() is not supported in actions");
    } // Start the data load for current matches, or the next location if we're
    // in the middle of a navigation


    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(nextLocation, abortController.signal);
    let matches = state.navigation.state !== "idle" ? matchRoutes(dataRoutes, state.navigation.location, init.basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);

    let loadFetcher = _extends({
      state: "loading",
      data: actionResult.data
    }, submission, {
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(state, matches, submission, nextLocation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, {
      [match.route.id]: actionResult.data
    }, undefined, // No need to send through errors since we short circuit above
    fetchLoadMatches); // Put all revalidating fetchers into the loading state, except for the
    // current fetcher which we want to keep in it's current loading state which
    // contains it's action submission info + action data

    revalidatingFetchers.filter(_ref5 => {
      let [staleKey] = _ref5;
      return staleKey !== key;
    }).forEach(_ref6 => {
      let [staleKey] = _ref6;
      let existingFetcher = state.fetchers.get(staleKey);
      let revalidatingFetcher = {
        state: "loading",
        data: existingFetcher && existingFetcher.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(staleKey, revalidatingFetcher);
      fetchControllers.set(staleKey, abortController);
    });
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);

    if (abortController.signal.aborted) {
      return;
    }

    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach(_ref7 => {
      let [staleKey] = _ref7;
      return fetchControllers.delete(staleKey);
    });
    let redirect = findRedirect(results);

    if (redirect) {
      return startRedirectNavigation(state, redirect);
    } // Process and commit output from loaders


    let {
      loaderData,
      errors
    } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
    let doneFetcher = {
      state: "idle",
      data: actionResult.data,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      " _hasFetcherDoneAnything ": true
    };
    state.fetchers.set(key, doneFetcher);
    let didAbortFetchLoads = abortStaleFetchLoads(loadId); // If we are currently in a navigation loading state and this fetcher is
    // more recent than the navigation, we want the newer data so abort the
    // navigation and complete it with the fetcher data

    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      // otherwise just update with the fetcher data, preserving any existing
      // loaderData for loaders that did not need to reload.  We have to
      // manually merge here since we aren't going through completeNavigation
      updateState(_extends({
        errors,
        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors)
      }, didAbortFetchLoads ? {
        fetchers: new Map(state.fetchers)
      } : {}));
      isRevalidationRequired = false;
    }
  } // Call the matched loader for fetcher.load(), handling redirects, errors, etc.


  async function handleFetcherLoader(key, routeId, path, match, matches, submission) {
    let existingFetcher = state.fetchers.get(key); // Put this fetcher into it's loading state

    let loadingFetcher = _extends({
      state: "loading",
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined
    }, submission, {
      data: existingFetcher && existingFetcher.data,
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, loadingFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }); // Call the loader for this fetcher route match

    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(path, abortController.signal);
    fetchControllers.set(key, abortController);
    let result = await callLoaderOrAction("loader", fetchRequest, match, matches, router.basename); // Deferred isn't supported or fetcher loads, await everything and treat it
    // as a normal load.  resolveDeferredData will return undefined if this
    // fetcher gets aborted, so we just leave result untouched and short circuit
    // below if that happens

    if (isDeferredResult(result)) {
      result = (await resolveDeferredData(result, fetchRequest.signal, true)) || result;
    } // We can delete this so long as we weren't aborted by ou our own fetcher
    // re-load which would have put _new_ controller is in fetchControllers


    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }

    if (fetchRequest.signal.aborted) {
      return;
    } // If the loader threw a redirect Response, start a new REPLACE navigation


    if (isRedirectResult(result)) {
      await startRedirectNavigation(state, result);
      return;
    } // Process any non-redirect errors thrown


    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, routeId);
      state.fetchers.delete(key); // TODO: In remix, this would reset to IDLE_NAVIGATION if it was a catch -
      // do we need to behave any differently with our non-redirect errors?
      // What if it was a non-redirect Response?

      updateState({
        fetchers: new Map(state.fetchers),
        errors: {
          [boundaryMatch.route.id]: result.error
        }
      });
      return;
    }

    invariant(!isDeferredResult(result), "Unhandled fetcher deferred data"); // Put the fetcher back into an idle state

    let doneFetcher = {
      state: "idle",
      data: result.data,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      " _hasFetcherDoneAnything ": true
    };
    state.fetchers.set(key, doneFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */


  async function startRedirectNavigation(state, redirect, replace, isFetchActionRedirect) {
    var _window;

    if (redirect.revalidate) {
      isRevalidationRequired = true;
    }

    let redirectLocation = createLocation(state.location, redirect.location, // TODO: This can be removed once we get rid of useTransition in Remix v2
    _extends({
      _isRedirect: true
    }, isFetchActionRedirect ? {
      _isFetchActionRedirect: true
    } : {}));
    invariant(redirectLocation, "Expected a location on the redirect navigation"); // Check if this an external redirect that goes to a new origin

    if (typeof ((_window = window) == null ? void 0 : _window.location) !== "undefined") {
      let newOrigin = createClientSideURL(redirect.location).origin;

      if (window.location.origin !== newOrigin) {
        if (replace) {
          window.location.replace(redirect.location);
        } else {
          window.location.assign(redirect.location);
        }

        return;
      }
    } // There's no need to abort on redirects, since we don't detect the
    // redirect until the action/loaders have settled


    pendingNavigationController = null;
    let redirectHistoryAction = replace === true ? Action.Replace : Action.Push;
    let {
      formMethod,
      formAction,
      formEncType,
      formData
    } = state.navigation; // If this was a 307/308 submission we want to preserve the HTTP method and
    // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
    // redirected location

    if (redirectPreserveMethodStatusCodes.has(redirect.status) && formMethod && isMutationMethod(formMethod) && formEncType && formData) {
      await startNavigation(redirectHistoryAction, redirectLocation, {
        submission: {
          formMethod,
          formAction: redirect.location,
          formEncType,
          formData
        }
      });
    } else {
      // Otherwise, we kick off a new loading navigation, preserving the
      // submission info for the duration of this navigation
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation: {
          state: "loading",
          location: redirectLocation,
          formMethod: formMethod || undefined,
          formAction: formAction || undefined,
          formEncType: formEncType || undefined,
          formData: formData || undefined
        }
      });
    }
  }

  async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
    // Call all navigation loaders and revalidating fetcher loaders in parallel,
    // then slice off the results into separate arrays so we can handle them
    // accordingly
    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, router.basename)), ...fetchersToLoad.map(_ref8 => {
      let [, href, match, fetchMatches] = _ref8;
      return callLoaderOrAction("loader", createClientSideRequest(href, request.signal), match, fetchMatches, router.basename);
    })]);
    let loaderResults = results.slice(0, matchesToLoad.length);
    let fetcherResults = results.slice(matchesToLoad.length);
    await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, request.signal, false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map(_ref9 => {
      let [,, match] = _ref9;
      return match;
    }), fetcherResults, request.signal, true)]);
    return {
      results,
      loaderResults,
      fetcherResults
    };
  }

  function interruptActiveLoads() {
    // Every interruption triggers a revalidation
    isRevalidationRequired = true; // Cancel pending route-level deferreds and mark cancelled routes for
    // revalidation

    cancelledDeferredRoutes.push(...cancelActiveDeferreds()); // Abort in-flight fetcher loads

    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.push(key);
        abortFetcher(key);
      }
    });
  }

  function setFetcherError(key, routeId, error) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    });
  }

  function deleteFetcher(key) {
    if (fetchControllers.has(key)) abortFetcher(key);
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    state.fetchers.delete(key);
  }

  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant(controller, "Expected fetch controller: " + key);
    controller.abort();
    fetchControllers.delete(key);
  }

  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = {
        state: "idle",
        data: fetcher.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(key, doneFetcher);
    }
  }

  function markFetchRedirectsDone() {
    let doneKeys = [];

    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, "Expected fetcher: " + key);

      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
      }
    }

    markFetchersDone(doneKeys);
  }

  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];

    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key);

        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }

    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }

  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    activeDeferreds.forEach((dfd, routeId) => {
      if (!predicate || predicate(routeId)) {
        // Cancel the deferred - but do not remove from activeDeferreds here -
        // we rely on the subscribers to do that so our tests can assert proper
        // cleanup via _internalActiveDeferreds
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  } // Opt in to capturing and reporting scroll positions during navigations,
  // used by the <ScrollRestoration> component


  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;

    getScrollRestorationKey = getKey || (location => location.key); // Perform initial hydration scroll restoration, since we miss the boat on
    // the initial updateState() because we've not yet rendered <ScrollRestoration/>
    // and therefore have no savedScrollPositions available


    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);

      if (y != null) {
        updateState({
          restoreScrollPosition: y
        });
      }
    }

    return () => {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }

  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
      let key = getScrollRestorationKey(location, userMatches) || location.key;
      savedScrollPositions[key] = getScrollPosition();
    }
  }

  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
      let key = getScrollRestorationKey(location, userMatches) || location.key;
      let y = savedScrollPositions[key];

      if (typeof y === "number") {
        return y;
      }
    }

    return null;
  }

  router = {
    get basename() {
      return init.basename;
    },

    get state() {
      return state;
    },

    get routes() {
      return dataRoutes;
    },

    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: to => init.history.createHref(to),
    encodeLocation: to => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher,
    dispose,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds
  };
  return router;
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////

function createStaticHandler(routes, opts) {
  invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let dataRoutes = convertRoutesToDataRoutes(routes);
  let basename = (opts ? opts.basename : null) || "/";
  /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   */

  async function query(request, _temp) {
    let {
      requestContext
    } = _temp === void 0 ? {} : _temp;
    let url = new URL(request.url);
    let method = request.method.toLowerCase();
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't

    if (!isValidMethod(method) && method !== "head") {
      let error = getInternalRouterError(405, {
        method
      });
      let {
        matches: methodNotAllowedMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {}
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {}
      };
    }

    let result = await queryImpl(request, location, matches, requestContext);

    if (isResponse(result)) {
      return result;
    } // When returning StaticHandlerContext, we patch back in the location here
    // since we need it for React Context.  But this helps keep our submit and
    // loadRouteData operating on a Request instead of a Location


    return _extends({
      location,
      basename
    }, result);
  }
  /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   */


  async function queryRoute(request, _temp2) {
    let {
      routeId,
      requestContext
    } = _temp2 === void 0 ? {} : _temp2;
    let url = new URL(request.url);
    let method = request.method.toLowerCase();
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't

    if (!isValidMethod(method) && method !== "head") {
      throw getInternalRouterError(405, {
        method
      });
    } else if (!matches) {
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }

    let match = routeId ? matches.find(m => m.route.id === routeId) : getTargetMatch(matches, location);

    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      // This should never hit I don't think?
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }

    let result = await queryImpl(request, location, matches, requestContext, match);

    if (isResponse(result)) {
      return result;
    }

    let error = result.errors ? Object.values(result.errors)[0] : undefined;

    if (error !== undefined) {
      // If we got back result.errors, that means the loader/action threw
      // _something_ that wasn't a Response, but it's not guaranteed/required
      // to be an `instanceof Error` either, so we have to use throw here to
      // preserve the "error" state outside of queryImpl.
      throw error;
    } // Pick off the right state value to return


    let routeData = [result.actionData, result.loaderData].find(v => v);
    return Object.values(routeData || {})[0];
  }

  async function queryImpl(request, location, matches, requestContext, routeMatch) {
    invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");

    try {
      if (isMutationMethod(request.method.toLowerCase())) {
        let result = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, routeMatch != null);
        return result;
      }

      let result = await loadRouteData(request, matches, requestContext, routeMatch);
      return isResponse(result) ? result : _extends({}, result, {
        actionData: null,
        actionHeaders: {}
      });
    } catch (e) {
      // If the user threw/returned a Response in callLoaderOrAction, we throw
      // it to bail out and then return or throw here based on whether the user
      // returned or threw
      if (isQueryRouteResponse(e)) {
        if (e.type === ResultType.error && !isRedirectResponse(e.response)) {
          throw e.response;
        }

        return e.response;
      } // Redirects are always returned since they don't propagate to catch
      // boundaries


      if (isRedirectResponse(e)) {
        return e;
      }

      throw e;
    }
  }

  async function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
    let result;

    if (!actionMatch.route.action) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });

      if (isRouteRequest) {
        throw error;
      }

      result = {
        type: ResultType.error,
        error
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, basename, true, isRouteRequest, requestContext);

      if (request.signal.aborted) {
        let method = isRouteRequest ? "queryRoute" : "query";
        throw new Error(method + "() call aborted");
      }
    }

    if (isRedirectResult(result)) {
      // Uhhhh - this should never happen, we should always throw these from
      // callLoaderOrAction, but the type narrowing here keeps TS happy and we
      // can get back on the "throw all redirect responses" train here should
      // this ever happen :/
      throw new Response(null, {
        status: result.status,
        headers: {
          Location: result.location
        }
      });
    }

    if (isDeferredResult(result)) {
      throw new Error("defer() is not supported in actions");
    }

    if (isRouteRequest) {
      // Note: This should only be non-Response values if we get here, since
      // isRouteRequest should throw any Response received in callLoaderOrAction
      if (isErrorResult(result)) {
        throw result.error;
      }

      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: {
          [actionMatch.route.id]: result.data
        },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {}
      };
    }

    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      let context = await loadRouteData(request, matches, requestContext, undefined, {
        [boundaryMatch.route.id]: result.error
      }); // action status codes take precedence over loader status codes

      return _extends({}, context, {
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
        actionData: null,
        actionHeaders: _extends({}, result.headers ? {
          [actionMatch.route.id]: result.headers
        } : {})
      });
    } // Create a GET request for the loaders


    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    let context = await loadRouteData(loaderRequest, matches, requestContext);
    return _extends({}, context, result.statusCode ? {
      statusCode: result.statusCode
    } : {}, {
      actionData: {
        [actionMatch.route.id]: result.data
      },
      actionHeaders: _extends({}, result.headers ? {
        [actionMatch.route.id]: result.headers
      } : {})
    });
  }

  async function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
    let isRouteRequest = routeMatch != null; // Short circuit if we have no loaders to run (queryRoute())

    if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader)) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch == null ? void 0 : routeMatch.route.id
      });
    }

    let requestMatches = routeMatch ? [routeMatch] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
    let matchesToLoad = requestMatches.filter(m => m.route.loader); // Short circuit if we have no loaders to run (query())

    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce((acc, m) => Object.assign(acc, {
          [m.route.id]: null
        }), {}),
        errors: pendingActionError || null,
        statusCode: 200,
        loaderHeaders: {}
      };
    }

    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, basename, true, isRouteRequest, requestContext))]);

    if (request.signal.aborted) {
      let method = isRouteRequest ? "queryRoute" : "query";
      throw new Error(method + "() call aborted");
    }

    let executedLoaders = new Set();
    results.forEach((result, i) => {
      executedLoaders.add(matchesToLoad[i].route.id); // Can't do anything with these without the Remix side of things, so just
      // cancel them for now

      if (isDeferredResult(result)) {
        result.deferredData.cancel();
      }
    }); // Process and commit output from loaders

    let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError); // Add a null for any non-loader matches for proper revalidation on the client

    matches.forEach(match => {
      if (!executedLoaders.has(match.route.id)) {
        context.loaderData[match.route.id] = null;
      }
    });
    return _extends({}, context, {
      matches
    });
  }

  return {
    dataRoutes,
    query,
    queryRoute
  };
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////

/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */

function getStaticContextFromError(routes, context, error) {
  let newContext = _extends({}, context, {
    statusCode: 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes[0].id]: error
    }
  });

  return newContext;
}

function isSubmissionNavigation(opts) {
  return opts != null && "formData" in opts;
} // Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params


function normalizeNavigateOptions(to, opts, isFetcher) {
  if (isFetcher === void 0) {
    isFetcher = false;
  }

  let path = typeof to === "string" ? to : createPath(to); // Return location verbatim on non-submission navigations

  if (!opts || !isSubmissionNavigation(opts)) {
    return {
      path
    };
  }

  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  } // Create a Submission on non-GET navigations


  let submission;

  if (opts.formData) {
    submission = {
      formMethod: opts.formMethod || "get",
      formAction: stripHashFromPath(path),
      formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
      formData: opts.formData
    };

    if (isMutationMethod(submission.formMethod)) {
      return {
        path,
        submission
      };
    }
  } // Flatten submission onto URLSearchParams for GET submissions


  let parsedPath = parsePath(path);

  try {
    let searchParams = convertFormDataToSearchParams(opts.formData); // Since fetcher GET submissions only run a single loader (as opposed to
    // navigation GET submissions which run all loaders), we need to preserve
    // any incoming ?index params

    if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
      searchParams.append("index", "");
    }

    parsedPath.search = "?" + searchParams;
  } catch (e) {
    return {
      path,
      error: getInternalRouterError(400)
    };
  }

  return {
    path: createPath(parsedPath),
    submission
  };
} // Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them


function getLoaderMatchesUntilBoundary(matches, boundaryId) {
  let boundaryMatches = matches;

  if (boundaryId) {
    let index = matches.findIndex(m => m.route.id === boundaryId);

    if (index >= 0) {
      boundaryMatches = matches.slice(0, index);
    }
  }

  return boundaryMatches;
}

function getMatchesToLoad(state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, pendingActionData, pendingError, fetchLoadMatches) {
  let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined; // Pick navigation matches that are net-new or qualify for revalidation

  let boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
  let boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
  let navigationMatches = boundaryMatches.filter((match, index) => match.route.loader != null && (isNewLoader(state.loaderData, state.matches[index], match) || // If this route had a pending deferred cancelled it must be revalidated
  cancelledDeferredRoutes.some(id => id === match.route.id) || shouldRevalidateLoader(state.location, state.matches[index], submission, location, match, isRevalidationRequired, actionResult))); // Pick fetcher.loads that need to be revalidated

  let revalidatingFetchers = [];
  fetchLoadMatches && fetchLoadMatches.forEach((_ref10, key) => {
    let [href, match, fetchMatches] = _ref10;

    // This fetcher was cancelled from a prior action submission - force reload
    if (cancelledFetcherLoads.includes(key)) {
      revalidatingFetchers.push([key, href, match, fetchMatches]);
    } else if (isRevalidationRequired) {
      let shouldRevalidate = shouldRevalidateLoader(href, match, submission, href, match, isRevalidationRequired, actionResult);

      if (shouldRevalidate) {
        revalidatingFetchers.push([key, href, match, fetchMatches]);
      }
    }
  });
  return [navigationMatches, revalidatingFetchers];
}

function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew = // [a] -> [a, b]
  !currentMatch || // [a, b] -> [a, c]
  match.route.id !== currentMatch.route.id; // Handle the case that we don't have data for a re-used route, potentially
  // from a prior error or from a cancelled pending deferred

  let isMissingData = currentLoaderData[match.route.id] === undefined; // Always load if this is a net-new route or we don't yet have data

  return isNew || isMissingData;
}

function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (// param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}

function shouldRevalidateLoader(currentLocation, currentMatch, submission, location, match, isRevalidationRequired, actionResult) {
  let currentUrl = createClientSideURL(currentLocation);
  let currentParams = currentMatch.params;
  let nextUrl = createClientSideURL(location);
  let nextParams = match.params; // This is the default implementation as to when we revalidate.  If the route
  // provides it's own implementation, then we give them full control but
  // provide this value so they can leverage it if needed after they check
  // their own specific use cases
  // Note that fetchers always provide the same current/next locations so the
  // URL-based checks here don't apply to fetcher shouldRevalidate calls

  let defaultShouldRevalidate = isNewRouteInstance(currentMatch, match) || // Clicked the same link, resubmitted a GET form
  currentUrl.toString() === nextUrl.toString() || // Search params affect all loaders
  currentUrl.search !== nextUrl.search || // Forced revalidation due to submission, useRevalidate, or X-Remix-Revalidate
  isRevalidationRequired;

  if (match.route.shouldRevalidate) {
    let routeChoice = match.route.shouldRevalidate(_extends({
      currentUrl,
      currentParams,
      nextUrl,
      nextParams
    }, submission, {
      actionResult,
      defaultShouldRevalidate
    }));

    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }

  return defaultShouldRevalidate;
}

async function callLoaderOrAction(type, request, match, matches, basename, isStaticRequest, isRouteRequest, requestContext) {
  if (basename === void 0) {
    basename = "/";
  }

  if (isStaticRequest === void 0) {
    isStaticRequest = false;
  }

  if (isRouteRequest === void 0) {
    isRouteRequest = false;
  }

  let resultType;
  let result; // Setup a promise we can race against so that abort signals short circuit

  let reject;
  let abortPromise = new Promise((_, r) => reject = r);

  let onReject = () => reject();

  request.signal.addEventListener("abort", onReject);

  try {
    let handler = match.route[type];
    invariant(handler, "Could not find the " + type + " to run on the \"" + match.route.id + "\" route");
    result = await Promise.race([handler({
      request,
      params: match.params,
      context: requestContext
    }), abortPromise]);
    invariant(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
  } catch (e) {
    resultType = ResultType.error;
    result = e;
  } finally {
    request.signal.removeEventListener("abort", onReject);
  }

  if (isResponse(result)) {
    let status = result.status; // Process redirects

    if (redirectStatusCodes.has(status)) {
      let location = result.headers.get("Location");
      invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
      let isAbsolute = /^[a-z+]+:\/\//i.test(location) || location.startsWith("//"); // Support relative routing in internal redirects

      if (!isAbsolute) {
        let activeMatches = matches.slice(0, matches.indexOf(match) + 1);
        let routePathnames = getPathContributingMatches(activeMatches).map(match => match.pathnameBase);
        let resolvedLocation = resolveTo(location, routePathnames, new URL(request.url).pathname);
        invariant(createPath(resolvedLocation), "Unable to resolve redirect location: " + location); // Prepend the basename to the redirect location if we have one

        if (basename) {
          let path = resolvedLocation.pathname;
          resolvedLocation.pathname = path === "/" ? basename : joinPaths([basename, path]);
        }

        location = createPath(resolvedLocation);
      } // Don't process redirects in the router during static requests requests.
      // Instead, throw the Response and let the server handle it with an HTTP
      // redirect.  We also update the Location header in place in this flow so
      // basename and relative routing is taken into account


      if (isStaticRequest) {
        result.headers.set("Location", location);
        throw result;
      }

      return {
        type: ResultType.redirect,
        status,
        location,
        revalidate: result.headers.get("X-Remix-Revalidate") !== null
      };
    } // For SSR single-route requests, we want to hand Responses back directly
    // without unwrapping.  We do this with the QueryRouteResponse wrapper
    // interface so we can know whether it was returned or thrown


    if (isRouteRequest) {
      // eslint-disable-next-line no-throw-literal
      throw {
        type: resultType || ResultType.data,
        response: result
      };
    }

    let data;
    let contentType = result.headers.get("Content-Type"); // Check between word boundaries instead of startsWith() due to the last
    // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type

    if (contentType && /\bapplication\/json\b/.test(contentType)) {
      data = await result.json();
    } else {
      data = await result.text();
    }

    if (resultType === ResultType.error) {
      return {
        type: resultType,
        error: new ErrorResponse(status, result.statusText, data),
        headers: result.headers
      };
    }

    return {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }

  if (resultType === ResultType.error) {
    return {
      type: resultType,
      error: result
    };
  }

  if (result instanceof DeferredData) {
    return {
      type: ResultType.deferred,
      deferredData: result
    };
  }

  return {
    type: ResultType.data,
    data: result
  };
} // Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)


function createClientSideRequest(location, signal, submission) {
  let url = createClientSideURL(stripHashFromPath(location)).toString();
  let init = {
    signal
  };

  if (submission && isMutationMethod(submission.formMethod)) {
    let {
      formMethod,
      formEncType,
      formData
    } = submission;
    init.method = formMethod.toUpperCase();
    init.body = formEncType === "application/x-www-form-urlencoded" ? convertFormDataToSearchParams(formData) : formData;
  } // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)


  return new Request(url, init);
}

function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();

  for (let [key, value] of formData.entries()) {
    invariant(typeof value === "string", 'File inputs are not supported with encType "application/x-www-form-urlencoded", ' + 'please use "multipart/form-data" instead.');
    searchParams.append(key, value);
  }

  return searchParams;
}

function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
  // Fill in loaderData/errors from our loaders
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {}; // Process loader results into state.loaderData/state.errors

  results.forEach((result, index) => {
    let id = matchesToLoad[index].route.id;
    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");

    if (isErrorResult(result)) {
      // Look upwards from the matched route for the closest ancestor
      // error boundary, defaulting to the root match
      let boundaryMatch = findNearestBoundary(matches, id);
      let error = result.error; // If we have a pending action error, we report it at the highest-route
      // that throws a loader error, and then clear it out to indicate that
      // it was consumed

      if (pendingError) {
        error = Object.values(pendingError)[0];
        pendingError = undefined;
      }

      errors = errors || {}; // Prefer higher error values if lower errors bubble to the same boundary

      if (errors[boundaryMatch.route.id] == null) {
        errors[boundaryMatch.route.id] = error;
      } // Clear our any prior loaderData for the throwing route


      loaderData[id] = undefined; // Once we find our first (highest) error, we set the status code and
      // prevent deeper status codes from overriding

      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }

      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else if (isDeferredResult(result)) {
      activeDeferreds && activeDeferreds.set(id, result.deferredData);
      loaderData[id] = result.deferredData.data; // TODO: Add statusCode/headers once we wire up streaming in Remix
    } else {
      loaderData[id] = result.data; // Error status codes always override success status codes, but if all
      // loaders are successful we take the deepest status code.

      if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }

      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  }); // If we didn't consume the pending action error (i.e., all loaders
  // resolved), then consume it here.  Also clear out any loaderData for the
  // throwing route

  if (pendingError) {
    errors = pendingError;
    loaderData[Object.keys(pendingError)[0]] = undefined;
  }

  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}

function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
  let {
    loaderData,
    errors
  } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds); // Process results from our revalidating fetchers

  for (let index = 0; index < revalidatingFetchers.length; index++) {
    let [key,, match] = revalidatingFetchers[index];
    invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
    let result = fetcherResults[index]; // Process fetcher non-redirect errors

    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match.route.id);

      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = _extends({}, errors, {
          [boundaryMatch.route.id]: result.error
        });
      }

      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      // Should never get here, redirects should get processed above, but we
      // keep this to type narrow to a success result in the else
      throw new Error("Unhandled fetcher revalidation redirect");
    } else if (isDeferredResult(result)) {
      // Should never get here, deferred data should be awaited for fetchers
      // in resolveDeferredResults
      throw new Error("Unhandled fetcher deferred data");
    } else {
      let doneFetcher = {
        state: "idle",
        data: result.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(key, doneFetcher);
    }
  }

  return {
    loaderData,
    errors
  };
}

function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = _extends({}, newLoaderData);

  for (let match of matches) {
    let id = match.route.id;

    if (newLoaderData.hasOwnProperty(id)) {
      if (newLoaderData[id] !== undefined) {
        mergedLoaderData[id] = newLoaderData[id];
      }
    } else if (loaderData[id] !== undefined) {
      mergedLoaderData[id] = loaderData[id];
    }

    if (errors && errors.hasOwnProperty(id)) {
      // Don't keep any loader data below the boundary
      break;
    }
  }

  return mergedLoaderData;
} // Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match


function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find(m => m.route.hasErrorBoundary === true) || matches[0];
}

function getShortCircuitMatches(routes) {
  // Prefer a root layout route if present, otherwise shim in a route object
  let route = routes.find(r => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route
    }],
    route
  };
}

function getInternalRouterError(status, _temp3) {
  let {
    pathname,
    routeId,
    method
  } = _temp3 === void 0 ? {} : _temp3;
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";

  if (status === 400) {
    statusText = "Bad Request";

    if (method && pathname && routeId) {
      errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else {
      errorMessage = "Cannot submit binary form data using GET";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = "No route matches URL \"" + pathname + "\"";
  } else if (status === 405) {
    statusText = "Method Not Allowed";

    if (method && pathname && routeId) {
      errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (method) {
      errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
    }
  }

  return new ErrorResponse(status || 500, statusText, new Error(errorMessage), true);
} // Find any returned redirect errors, starting from the lowest match


function findRedirect(results) {
  for (let i = results.length - 1; i >= 0; i--) {
    let result = results[i];

    if (isRedirectResult(result)) {
      return result;
    }
  }
}

function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}

function isHashChangeOnly(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash !== b.hash;
}

function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}

function isErrorResult(result) {
  return result.type === ResultType.error;
}

function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}

function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}

function isRedirectResponse(result) {
  if (!isResponse(result)) {
    return false;
  }

  let status = result.status;
  let location = result.headers.get("Location");
  return status >= 300 && status <= 399 && location != null;
}

function isQueryRouteResponse(obj) {
  return obj && isResponse(obj.response) && (obj.type === ResultType.data || ResultType.error);
}

function isValidMethod(method) {
  return validRequestMethods.has(method);
}

function isMutationMethod(method) {
  return validMutationMethods.has(method);
}

async function resolveDeferredResults(currentMatches, matchesToLoad, results, signal, isFetcher, currentLoaderData) {
  for (let index = 0; index < results.length; index++) {
    let result = results[index];
    let match = matchesToLoad[index];
    let currentMatch = currentMatches.find(m => m.route.id === match.route.id);
    let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;

    if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
      // Note: we do not have to touch activeDeferreds here since we race them
      // against the signal in resolveDeferredData and they'll get aborted
      // there if needed
      await resolveDeferredData(result, signal, isFetcher).then(result => {
        if (result) {
          results[index] = result || results[index];
        }
      });
    }
  }
}

async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0) {
    unwrap = false;
  }

  let aborted = await result.deferredData.resolveData(signal);

  if (aborted) {
    return;
  }

  if (unwrap) {
    try {
      return {
        type: ResultType.data,
        data: result.deferredData.unwrappedData
      };
    } catch (e) {
      // Handle any TrackedPromise._error values encountered while unwrapping
      return {
        type: ResultType.error,
        error: e
      };
    }
  }

  return {
    type: ResultType.data,
    data: result.deferredData.data
  };
}

function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some(v => v === "");
} // Note: This should match the format exported by useMatches, so if you change
// this please also change that :)  Eventually we'll DRY this up


function createUseMatchesMatch(match, loaderData) {
  let {
    route,
    pathname,
    params
  } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}

function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;

  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    // Return the leaf index route when index is present
    return matches[matches.length - 1];
  } // Otherwise grab the deepest "path contributing" match (ignoring index and
  // pathless layout routes)


  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
} //#endregion


//# sourceMappingURL=router.js.map


/***/ }),

/***/ 35274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qp": () => (/* binding */ disableBodyScroll),
/* harmony export */   "tP": () => (/* binding */ clearAllBodyScrollLocks)
/* harmony export */ });
/* unused harmony export enableBodyScroll */
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Older browsers don't support event options, feature detect it.

// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

var hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }
  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);


var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPosition = void 0;
var previousBodyPaddingRight = void 0;

// returns true if `el` should be allowed to receive touchmove events.
var allowTouchMove = function allowTouchMove(el) {
  return locks.some(function (lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });
};

var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event;

  // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.
  if (allowTouchMove(e.target)) {
    return true;
  }

  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
  // If previousBodyPaddingRight is already set, don't set it again.
  if (previousBodyPaddingRight === undefined) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

    if (_reserveScrollBarGap && scrollBarGap > 0) {
      var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'), 10);
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = computedBodyPaddingRight + scrollBarGap + 'px';
    }
  }

  // If previousBodyOverflowSetting is already set, don't set it again.
  if (previousBodyOverflowSetting === undefined) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
};

var restoreOverflowSetting = function restoreOverflowSetting() {
  if (previousBodyPaddingRight !== undefined) {
    document.body.style.paddingRight = previousBodyPaddingRight;

    // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
    // can be set again.
    previousBodyPaddingRight = undefined;
  }

  if (previousBodyOverflowSetting !== undefined) {
    document.body.style.overflow = previousBodyOverflowSetting;

    // Restore previousBodyOverflowSetting to undefined
    // so setOverflowHidden knows it can be set again.
    previousBodyOverflowSetting = undefined;
  }
};

var setPositionFixed = function setPositionFixed() {
  return window.requestAnimationFrame(function () {
    // If previousBodyPosition is already set, don't set it again.
    if (previousBodyPosition === undefined) {
      previousBodyPosition = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left
      };

      // Update the dom inside an animation frame 
      var _window = window,
          scrollY = _window.scrollY,
          scrollX = _window.scrollX,
          innerHeight = _window.innerHeight;

      document.body.style.position = 'fixed';
      document.body.style.top = -scrollY;
      document.body.style.left = -scrollX;

      setTimeout(function () {
        return window.requestAnimationFrame(function () {
          // Attempt to check if the bottom bar appeared due to the position change
          var bottomBarHeight = innerHeight - window.innerHeight;
          if (bottomBarHeight && scrollY >= innerHeight) {
            // Move the content further up so that the bottom bar doesn't hide it
            document.body.style.top = -(scrollY + bottomBarHeight);
          }
        });
      }, 300);
    }
  });
};

var restorePositionSetting = function restorePositionSetting() {
  if (previousBodyPosition !== undefined) {
    // Convert the position from "px" to Int
    var y = -parseInt(document.body.style.top, 10);
    var x = -parseInt(document.body.style.left, 10);

    // Restore styles
    document.body.style.position = previousBodyPosition.position;
    document.body.style.top = previousBodyPosition.top;
    document.body.style.left = previousBodyPosition.left;

    // Restore scroll
    window.scrollTo(x, y);

    previousBodyPosition = undefined;
  }
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};

var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target)) {
    return false;
  }

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

var disableBodyScroll = function disableBodyScroll(targetElement, options) {
  // targetElement must be provided
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
    return;
  }

  // disableBodyScroll must not have been called on this targetElement before
  if (locks.some(function (lock) {
    return lock.targetElement === targetElement;
  })) {
    return;
  }

  var lock = {
    targetElement: targetElement,
    options: options || {}
  };

  locks = [].concat(_toConsumableArray(locks), [lock]);

  if (isIosDevice) {
    setPositionFixed();
  } else {
    setOverflowHidden(options);
  }

  if (isIosDevice) {
    targetElement.ontouchstart = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        handleScroll(event, targetElement);
      }
    };

    if (!documentListenerAdded) {
      document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = true;
    }
  }
};

var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    // Clear all locks ontouchstart/ontouchmove handlers, and the references.
    locks.forEach(function (lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });

    if (documentListenerAdded) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }

    // Reset initial clientY.
    initialClientY = -1;
  }

  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }

  locks = [];
};

var enableBodyScroll = function enableBodyScroll(targetElement) {
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
    return;
  }

  locks = locks.filter(function (lock) {
    return lock.targetElement !== targetElement;
  });

  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }
  }

  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }
};



/***/ }),

/***/ 83849:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 14517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clsx */
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ 86724:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(80480);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true"
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 21700:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ 33906:
/***/ (() => {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 50482:
/***/ (() => {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 66567:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ 31772:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(25148);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 7862:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(31772)();
}


/***/ }),

/***/ 25148:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 22197:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 35655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(22197);
} else {}


/***/ }),

/***/ 31236:
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ 80480:
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ 68548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"title":"","description":"","icon":"https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico","themeConfig":{"locales":[{"lang":"zh","title":"Modern.js - 现代 Web 工程体系","description":"A Progressive React Framework for modern web development.","nav":[{"text":"教程","link":"/tutorials/foundations/introduction","activeMatch":"/tutorials/"},{"text":"指南","link":"/guides/get-started/quick-start","activeMatch":"/guides/"},{"text":"配置","link":"/configure/app/usage","activeMatch":"/configure/app"},{"text":"API","link":"/apis/app/commands/dev","activeMatch":"/apis/"},{"text":"v2.3.0","items":[{"text":"v1","link":"https://modernjs.dev/v1/"}]}],"label":"简体中文","sidebar":{"/apis/app/":[{"text":"命令","link":"/apis/app/commands/","collapsed":true,"collapsible":true,"items":[{"text":"dev / start","link":"/apis/app/commands/dev"},{"text":"new","link":"/apis/app/commands/new"},{"text":"test","link":"/apis/app/commands/test"},{"text":"lint","link":"/apis/app/commands/lint"},{"text":"build","link":"/apis/app/commands/build"},{"text":"serve","link":"/apis/app/commands/serve"},{"text":"inspect","link":"/apis/app/commands/inspect"},{"text":"upgrade","link":"/apis/app/commands/upgrade"}]},{"text":"文件约定","link":"/apis/app/hooks/","collapsed":true,"collapsible":true,"items":[{"text":"src/","collapsed":true,"collapsible":true,"items":[{"text":"App.[tj]sx","link":"/apis/app/hooks/src/app"},{"text":"routes/","link":"/apis/app/hooks/src/routes"},{"text":"pages/","link":"/apis/app/hooks/src/pages"},{"text":"index.[tj]s","link":"/apis/app/hooks/src/index_"},{"text":"**/*.test.[tj]sx?","link":"/apis/app/hooks/src/test"},{"text":"**/*.stories.[tj]sx","link":"/apis/app/hooks/src/stories"},{"text":"*.[server|node].[tj]sx","link":"/apis/app/hooks/src/server"}]},{"text":"api/","collapsed":true,"collapsible":true,"items":[{"text":"Function Mode","collapsed":true,"collapsible":true,"items":[{"text":"**/*.[tj]s","link":"/apis/app/hooks/api/functions/api"},{"text":"**/_*.[tj]s, _*/**","link":"/apis/app/hooks/api/functions/common"},{"text":"_app.[tj]s","link":"/apis/app/hooks/api/functions/app"}]},{"text":"test.[tj]s","link":"/apis/app/hooks/api/test"},{"text":"Framework Mode","collapsed":true,"collapsible":true,"items":[{"text":"lambda/*.[tj]s","link":"/apis/app/hooks/api/framework/lambda"}]}]},{"text":"server/","collapsed":true,"collapsible":true,"items":[{"text":"index.[tj]s","link":"/apis/app/hooks/server/index_"},{"text":"test.[tj]s","link":"/apis/app/hooks/server/test"}]},{"text":"shared/","link":"/apis/app/hooks/shared"},{"text":"config/","collapsed":true,"collapsible":true,"items":[{"text":"html/","link":"/apis/app/hooks/config/html"},{"text":"icon.png","link":"/apis/app/hooks/config/icon"},{"text":"public/","link":"/apis/app/hooks/config/public"},{"text":"upload/","link":"/apis/app/hooks/config/upload"},{"text":"mock/","link":"/apis/app/hooks/config/mock"},{"text":"storybook/","link":"/apis/app/hooks/config/storybook"}]},{"text":"modern.config.js","link":"/apis/app/hooks/modern-config"}]},{"text":"运行时","link":"/apis/app/runtime/","collapsed":false,"collapsible":true,"items":[{"text":"核心","collapsed":true,"collapsible":true,"items":[{"text":"bootstrap","link":"/apis/app/runtime/core/bootstrap"},{"text":"createApp","link":"/apis/app/runtime/core/create-app"},{"text":"useLoader","link":"/apis/app/runtime/core/use-loader"},{"text":"useModuleApps","link":"/apis/app/runtime/core/use-module-apps"},{"text":"useRuntimeContext","link":"/apis/app/runtime/core/use-runtime-context"}]},{"text":"APP","collapsed":true,"collapsible":true,"items":[{"text":"defineConfig","link":"/apis/app/runtime/app/define-config"}]},{"text":"Router","collapsed":true,"collapsible":true,"items":[{"text":"router","link":"/apis/app/runtime/router/router"}]},{"text":"Model","collapsed":true,"collapsible":true,"items":[{"text":"model","link":"/apis/app/runtime/model/model_"},{"text":"useModel","link":"/apis/app/runtime/model/use-model"},{"text":"useStaticModel","link":"/apis/app/runtime/model/use-static-model"},{"text":"useLocalModel","link":"/apis/app/runtime/model/use-local-model"},{"text":"connect","link":"/apis/app/runtime/model/connect"},{"text":"Auto actions","link":"/apis/app/runtime/model/auto-actions"},{"text":"handleEffect","link":"/apis/app/runtime/model/handle-effect"},{"text":"Provider","link":"/apis/app/runtime/model/Provider"},{"text":"useStore","link":"/apis/app/runtime/model/use-store"},{"text":"createStore","link":"/apis/app/runtime/model/create-store"},{"text":"createApp","link":"/apis/app/runtime/model/create-app"}]},{"text":"SSR","collapsed":true,"collapsible":true,"items":[{"text":"NoSSR","link":"/apis/app/runtime/ssr/no-ssr"},{"text":"PreRender","link":"/apis/app/runtime/ssr/pre-render"}]},{"text":"BFF","collapsed":true,"collapsible":true,"items":[{"text":"hook","link":"/apis/app/runtime/bff/hook"},{"text":"useContext","link":"/apis/app/runtime/bff/use-context"}]},{"text":"Web Server","collapsed":true,"collapsible":true,"items":[{"text":"Hook","link":"/apis/app/runtime/web-server/hook"},{"text":"Middleware","link":"/apis/app/runtime/web-server/middleware"}]},{"text":"Utility","collapsed":true,"collapsible":true,"items":[{"text":"CSS-In-JS API","link":"/apis/app/runtime/utility/css-in-js"},{"text":"Head","link":"/apis/app/runtime/utility/head"},{"text":"loadable","link":"/apis/app/runtime/utility/loadable"}]},{"text":"Testing","collapsed":true,"collapsible":true,"items":[{"text":"cleanup","link":"/apis/app/runtime/testing/cleanup"},{"text":"act","link":"/apis/app/runtime/testing/act"},{"text":"render","link":"/apis/app/runtime/testing/render"},{"text":"renderApp","link":"/apis/app/runtime/testing/renderApp"}]}]}],"/blog/":[{"text":"Modern.js 2.0","link":"/blog/"}],"/configure/app/":[{"text":"配置使用","link":"/configure/app/usage"},{"text":"source (源文件)","collapsed":true,"collapsible":true,"items":[{"text":"alias","link":"/configure/app/source/alias"},{"text":"compileJsDataURI","link":"/configure/app/source/compile-js-data-uri"},{"text":"configDir","link":"/configure/app/source/config-dir"},{"text":"define","link":"/configure/app/source/define"},{"text":"designSystem","link":"/configure/app/source/design-system"},{"text":"disableDefaultEntries","link":"/configure/app/source/disable-default-entries"},{"text":"disableEntryDirs","link":"/configure/app/source/disable-entry-dirs"},{"text":"enableAsyncEntry","link":"/configure/app/source/enable-async-entry"},{"text":"entriesDir","link":"/configure/app/source/entries-dir"},{"text":"entries","link":"/configure/app/source/entries"},{"text":"exclude","link":"/configure/app/source/exclude"},{"text":"globalVars","link":"/configure/app/source/global-vars"},{"text":"include","link":"/configure/app/source/include"},{"text":"moduleScopes","link":"/configure/app/source/module-scopes"},{"text":"preEntry","link":"/configure/app/source/pre-entry"},{"text":"resolveExtensionPrefix","link":"/configure/app/source/resolve-extension-prefix"},{"text":"resolveMainFields","link":"/configure/app/source/resolve-main-fields"}]},{"text":"html (模板)","collapsed":true,"collapsible":true,"items":[{"text":"appIcon","link":"/configure/app/html/app-icon"},{"text":"crossorigin","link":"/configure/app/html/crossorigin"},{"text":"disableHtmlFolder","link":"/configure/app/html/disable-html-folder"},{"text":"faviconByEntries","link":"/configure/app/html/favicon-by-entries"},{"text":"favicon","link":"/configure/app/html/favicon"},{"text":"injectByEntries","link":"/configure/app/html/inject-by-entries"},{"text":"inject","link":"/configure/app/html/inject"},{"text":"metaByEntries","link":"/configure/app/html/meta-by-entries"},{"text":"meta","link":"/configure/app/html/meta"},{"text":"mountId","link":"/configure/app/html/mount-id"},{"text":"tagsByEntries","link":"/configure/app/html/tags-by-entries"},{"text":"tags","link":"/configure/app/html/tags"},{"text":"templateByEntries","link":"/configure/app/html/template-by-entries"},{"text":"templateParametersByEntries","link":"/configure/app/html/template-parameters-by-entries"},{"text":"templateParameters","link":"/configure/app/html/template-parameters"},{"text":"template","link":"/configure/app/html/template"},{"text":"titleByEntries","link":"/configure/app/html/title-by-entries"},{"text":"title","link":"/configure/app/html/title"}]},{"text":"output (构建产物)","collapsed":true,"collapsible":true,"items":[{"text":"assetPrefix","link":"/configure/app/output/asset-prefix"},{"text":"assetsRetry","link":"/configure/app/output/assets-retry"},{"text":"charset","link":"/configure/app/output/charset"},{"text":"cleanDistPath","link":"/configure/app/output/clean-dist-path"},{"text":"convertToRem","link":"/configure/app/output/convert-to-rem"},{"text":"copy","link":"/configure/app/output/copy"},{"text":"cssModuleLocalIdentName","link":"/configure/app/output/css-module-local-ident-name"},{"text":"dataUriLimit","link":"/configure/app/output/data-uri-limit"},{"text":"disableCssExtract","link":"/configure/app/output/disable-css-extract"},{"text":"disableCssModuleExtension","link":"/configure/app/output/disable-css-module-extension"},{"text":"disableFilenameHash","link":"/configure/app/output/disable-filename-hash"},{"text":"disableInlineRuntimeChunk","link":"/configure/app/output/disable-inline-runtime-chunk"},{"text":"disableMinimize","link":"/configure/app/output/disable-minimize"},{"text":"disableNodePolyfill","link":"/configure/app/output/disable-node-polyfill"},{"text":"disableSourceMap","link":"/configure/app/output/disable-source-map"},{"text":"disableTsChecker","link":"/configure/app/output/disable-ts-checker"},{"text":"distPath","link":"/configure/app/output/dist-path"},{"text":"enableAssetFallback","link":"/configure/app/output/enable-asset-fallback"},{"text":"enableAssetManifest","link":"/configure/app/output/enable-asset-manifest"},{"text":"enableCssModuleTSDeclaration","link":"/configure/app/output/enable-css-module-tsdeclaration"},{"text":"enableInlineScripts","link":"/configure/app/output/enable-inline-scripts"},{"text":"enableInlineStyles","link":"/configure/app/output/enable-inline-styles"},{"text":"enableLatestDecorators","link":"/configure/app/output/enable-latest-decorators"},{"text":"externals","link":"/configure/app/output/externals"},{"text":"filename","link":"/configure/app/output/filename"},{"text":"legalComments","link":"/configure/app/output/legal-comments"},{"text":"overrideBrowserslist","link":"/configure/app/output/override-browserslist"},{"text":"polyfill","link":"/configure/app/output/polyfill"},{"text":"ssg","link":"/configure/app/output/ssg"},{"text":"svgDefaultExport","link":"/configure/app/output/svg-default-export"}]},{"text":"runtime (运行时)","collapsed":true,"collapsible":true,"items":[{"text":"总览","link":"/configure/app/runtime/intro"},{"text":"masterApp","link":"/configure/app/runtime/master-app"},{"text":"router","link":"/configure/app/runtime/router"},{"text":"state","link":"/configure/app/runtime/state"}]},{"text":"server (服务器)","collapsed":true,"collapsible":true,"items":[{"text":"baseUrl","link":"/configure/app/server/base-url"},{"text":"enableFrameworkExt","link":"/configure/app/server/enable-framework-ext"},{"text":"port","link":"/configure/app/server/port"},{"text":"publicRoutes","link":"/configure/app/server/public-routes"},{"text":"routes","link":"/configure/app/server/routes"},{"text":"ssrByEntries","link":"/configure/app/server/ssr-by-entries"},{"text":"ssr","link":"/configure/app/server/ssr"}]},{"text":"bff (BFF API)","collapsed":true,"collapsible":true,"items":[{"text":"prefix","link":"/configure/app/bff/prefix"},{"text":"proxy","link":"/configure/app/bff/proxy"}]},{"text":"dev (开发调试)","collapsed":true,"collapsible":true,"items":[{"text":"assetPrefix","link":"/configure/app/dev/asset-prefix"},{"text":"hmr","link":"/configure/app/dev/hmr"},{"text":"https","link":"/configure/app/dev/https"},{"text":"port","link":"/configure/app/dev/port"},{"text":"progressBar","link":"/configure/app/dev/progress-bar"},{"text":"proxy","link":"/configure/app/dev/proxy"},{"text":"startUrl","link":"/configure/app/dev/start-url"}]},{"text":"deploy (部署)","collapsed":true,"collapsible":true,"items":[{"text":"microFrontend","link":"/configure/app/deploy/microFrontend"}]},{"text":"testing (测试)","collapsed":true,"collapsible":true,"items":[{"text":"transformer","link":"/configure/app/testing/transformer"}]},{"text":"plugins (插件)","link":"/configure/app/plugins"},{"text":"builderPlugins (构建插件)","link":"/configure/app/builder-plugins"},{"text":"autoLoadPlugins (自动注册插件)","link":"/configure/app/auto-load-plugin"},{"text":"tools (底层配置)","collapsed":true,"collapsible":true,"items":[{"text":"autoprefixer","link":"/configure/app/tools/autoprefixer"},{"text":"babel","link":"/configure/app/tools/babel"},{"text":"cssExtract","link":"/configure/app/tools/css-extract"},{"text":"cssLoader","link":"/configure/app/tools/css-loader"},{"text":"devServer","link":"/configure/app/tools/dev-server"},{"text":"esbuild","link":"/configure/app/tools/esbuild"},{"text":"htmlPlugin","link":"/configure/app/tools/html-plugin"},{"text":"inspector","link":"/configure/app/tools/inspector"},{"text":"jest","link":"/configure/app/tools/jest"},{"text":"less","link":"/configure/app/tools/less"},{"text":"minifyCss","link":"/configure/app/tools/minify-css"},{"text":"postcss","link":"/configure/app/tools/postcss"},{"text":"pug","link":"/configure/app/tools/pug"},{"text":"sass","link":"/configure/app/tools/sass"},{"text":"styleLoader","link":"/configure/app/tools/style-loader"},{"text":"styledComponents","link":"/configure/app/tools/styled-components"},{"text":"swc","link":"/configure/app/tools/swc"},{"text":"tailwindcss","link":"/configure/app/tools/tailwindcss"},{"text":"terser","link":"/configure/app/tools/terser"},{"text":"tsChecker","link":"/configure/app/tools/ts-checker"},{"text":"tsLoader","link":"/configure/app/tools/ts-loader"},{"text":"webpackChain","link":"/configure/app/tools/webpack-chain"},{"text":"webpack","link":"/configure/app/tools/webpack"}]},{"text":"performance (性能)","collapsed":true,"collapsible":true,"items":[{"text":"buildCache","link":"/configure/app/performance/build-cache"},{"text":"bundleAnalyze","link":"/configure/app/performance/bundle-analyze"},{"text":"chunkSplit","link":"/configure/app/performance/chunk-split"},{"text":"printFileSize","link":"/configure/app/performance/print-file-size"},{"text":"profile","link":"/configure/app/performance/profile"},{"text":"removeConsole","link":"/configure/app/performance/remove-console"},{"text":"removeMomentLocale","link":"/configure/app/performance/remove-moment-locale"}]},{"text":"security (安全)","collapsed":true,"collapsible":true,"items":[{"text":"checkSyntax","link":"/configure/app/security/check-syntax"},{"text":"sri","link":"/configure/app/security/sri"}]},{"text":"experiments (实验性)","collapsed":true,"collapsible":true,"items":[{"text":"lazyCompilation","link":"/configure/app/experiments/lazy-compilation"}]}],"/guides/":[{"text":"开始","collapsed":false,"collapsible":true,"items":[{"text":"快速上手","link":"/guides/get-started/quick-start"},{"text":"升级","link":"/guides/get-started/upgrade"}]},{"text":"核心概念","collapsed":false,"collapsible":true,"items":[{"text":"入口","link":"/guides/concept/entries"}]},{"text":"基础功能","link":"/guides/basic-features/","collapsed":false,"collapsible":true,"items":[{"text":"路由","link":"/guides/basic-features/routes"},{"text":"构建能力","link":"/guides/basic-features/builder"},{"text":"数据获取","link":"/guides/basic-features/data-fetch"},{"text":"CSS 开发方案","collapsed":true,"collapsible":true,"items":[{"text":"CSS-in-JS","link":"/guides/basic-features/css/css-in-js"},{"text":"Tailwind CSS","link":"/guides/basic-features/css/tailwindcss"},{"text":"PostCSS","link":"/guides/basic-features/css/postcss"},{"text":"Less 和 Sass","link":"/guides/basic-features/css/less-sass"},{"text":"CSS Modules","link":"/guides/basic-features/css/css-modules"}]},{"text":"代理","link":"/guides/basic-features/proxy"},{"text":"数据模拟","link":"/guides/basic-features/mock"},{"text":"环境变量","link":"/guides/basic-features/env-vars"},{"text":"别名","link":"/guides/basic-features/alias"},{"text":"HTML 模板","link":"/guides/basic-features/html"}]},{"text":"进阶功能","link":"/guides/advanced-features/","collapsed":true,"collapsible":true,"items":[{"text":"BFF","link":"/guides/advanced-features/bff/","collapsed":true,"collapsible":true,"items":[{"text":"基础用法","link":"/guides/advanced-features/bff/function"},{"text":"函数写法 & 框架写法","link":"/guides/advanced-features/bff/type"},{"text":"运行时框架","link":"/guides/advanced-features/bff/frameworks"},{"text":"使用 BFF 代理","link":"/guides/advanced-features/bff/bff-proxy"}]},{"text":"自定义 Web Server","link":"/guides/advanced-features/web-server"},{"text":"服务端渲染（SSR）","link":"/guides/advanced-features/ssr"},{"text":"静态站点生成（SSG）","link":"/guides/advanced-features/ssg"},{"text":"客户端兼容性","link":"/guides/advanced-features/compatibility"},{"text":"代码分割","link":"/guides/advanced-features/code-split"},{"text":"ESLint 规则集","link":"/guides/advanced-features/eslint"},{"text":"测试","link":"/guides/advanced-features/testing"},{"text":"配置底层工具","link":"/guides/advanced-features/low-level"}]},{"text":"专题详解","collapsed":true,"collapsible":true,"items":[{"text":"Reduck 状态管理","collapsed":true,"collapsible":true,"items":[{"text":"快速上手","link":"/guides/topic-detail/model/quick-start"},{"text":"创建 Model","link":"/guides/topic-detail/model/define-model"},{"text":"使用 Model","link":"/guides/topic-detail/model/use-model"},{"text":"衍生状态","link":"/guides/topic-detail/model/computed-state"},{"text":"副作用管理","link":"/guides/topic-detail/model/manage-effects"},{"text":"自动生成 Actions","link":"/guides/topic-detail/model/auto-actions"},{"text":"Model 通信","link":"/guides/topic-detail/model/model-communicate"},{"text":"性能优化","link":"/guides/topic-detail/model/performance"},{"text":"测试 Model","link":"/guides/topic-detail/model/test-model"},{"text":"TS 最佳实践","link":"/guides/topic-detail/model/typescript-best-practice"},{"text":"Redux 生态集成","link":"/guides/topic-detail/model/redux-integration"},{"text":"单独使用 Reduck","link":"/guides/topic-detail/model/use-out-of-modernjs"},{"text":"常见问题","link":"/guides/topic-detail/model/faq"}]},{"text":"微前端","collapsed":true,"collapsible":true,"items":[{"text":"微前端介绍","link":"/guides/topic-detail/micro-frontend/c01-introduction"},{"text":"体验微前端","link":"/guides/topic-detail/micro-frontend/c02-development"},{"text":"开发主应用","link":"/guides/topic-detail/micro-frontend/c03-main-app"},{"text":"主子应用通信","link":"/guides/topic-detail/micro-frontend/c04-communicate"},{"text":"混合技术栈","link":"/guides/topic-detail/micro-frontend/c05-mixed-stack"}]},{"text":"Monorepo","collapsed":true,"collapsible":true,"items":[{"text":"Monorepo 工程介绍","link":"/guides/topic-detail/monorepo/intro"},{"text":"创建子项目","link":"/guides/topic-detail/monorepo/create-sub-project"},{"text":"子项目联调","link":"/guides/topic-detail/monorepo/sub-project-interface"},{"text":"可复用模块的发布","link":"/guides/topic-detail/monorepo/publish"}]},{"text":"包版本管理","collapsed":true,"collapsible":true,"items":[{"text":"认识 Changesets","link":"/guides/topic-detail/changesets/introduce"},{"text":"添加一个 changeset","link":"/guides/topic-detail/changesets/add"},{"text":"发布正式版本","link":"/guides/topic-detail/changesets/release"},{"text":"发布预发布版本","link":"/guides/topic-detail/changesets/release-pre"},{"text":"Changesets 配置文件","link":"/guides/topic-detail/changesets/config"},{"text":"自定义 Changelog 生成","link":"/guides/topic-detail/changesets/changelog"},{"text":"自定义提交 commit 信息","link":"/guides/topic-detail/changesets/commit"},{"text":"自定义 Release Note 格式","link":"/guides/topic-detail/changesets/release-note"},{"text":"使用 Github 相关工具","link":"/guides/topic-detail/changesets/github"}]},{"text":"项目生成器","link":"/guides/topic-detail/generator/project","collapsed":true,"collapsible":true,"items":[{"text":"工程方案配置","collapsed":true,"collapsible":true,"items":[{"text":"通用配置","link":"/guides/topic-detail/generator/config/common"},{"text":"Web 应用","link":"/guides/topic-detail/generator/config/app"},{"text":"模块","link":"/guides/topic-detail/generator/config/module"},{"text":"Monorepo","link":"/guides/topic-detail/generator/config/monorepo"}]},{"text":"开发生成器插件","collapsed":true,"collapsible":true,"items":[{"text":"为什么需要生成器插件","link":"/guides/topic-detail/generator/plugin/abstract"},{"text":"如何使用生成器插件","link":"/guides/topic-detail/generator/plugin/use"},{"text":"如何开发生成器插件","link":"/guides/topic-detail/generator/plugin/develop"},{"text":"API","collapsed":true,"collapsible":true,"items":[{"text":"介绍","link":"/guides/topic-detail/generator/plugin/api/introduce"},{"text":"自定义输入 API","collapsed":true,"collapsible":true,"items":[{"text":"自定义输入相关类型定义","link":"/guides/topic-detail/generator/plugin/api/input/type"},{"text":"addInputBefore","link":"/guides/topic-detail/generator/plugin/api/input/addInputBefore"},{"text":"addInputAfter","link":"/guides/topic-detail/generator/plugin/api/input/addInputAfter"},{"text":"setInput","link":"/guides/topic-detail/generator/plugin/api/input/setInput"},{"text":"setInputValue","link":"/guides/topic-detail/generator/plugin/api/input/setInputValue"}]},{"text":"获取信息 API","collapsed":true,"collapsible":true,"items":[{"text":"locale","link":"/guides/topic-detail/generator/plugin/api/info/locale"},{"text":"isFileExit","link":"/guides/topic-detail/generator/plugin/api/info/isFileExit"},{"text":"readDir","link":"/guides/topic-detail/generator/plugin/api/info/readDir"}]},{"text":"Hook 函数 API","collapsed":true,"collapsible":true,"items":[{"text":"OnForged","link":"/guides/topic-detail/generator/plugin/api/hook/onForged"},{"text":"AfterForged","link":"/guides/topic-detail/generator/plugin/api/hook/afterForged"}]},{"text":"文件操作 API","collapsed":true,"collapsible":true,"items":[{"text":"介绍","link":"/guides/topic-detail/generator/plugin/api/file/introduce"},{"text":"addHelper","link":"/guides/topic-detail/generator/plugin/api/file/addHelper"},{"text":"addPartial","link":"/guides/topic-detail/generator/plugin/api/file/addPartial"},{"text":"addFile","link":"/guides/topic-detail/generator/plugin/api/file/addFile"},{"text":"addManyFile","link":"/guides/topic-detail/generator/plugin/api/file/addManyFile"},{"text":"updateJSONFile","link":"/guides/topic-detail/generator/plugin/api/file/updateJSONFile"},{"text":"updateTextRawFile","link":"/guides/topic-detail/generator/plugin/api/file/updateTextRawFile"},{"text":"updateModernConfig","link":"/guides/topic-detail/generator/plugin/api/file/updateModernConfig"},{"text":"rmFile","link":"/guides/topic-detail/generator/plugin/api/file/rmFile"},{"text":"rmDir","link":"/guides/topic-detail/generator/plugin/api/file/rmDir"}]},{"text":"启用功能 API","collapsed":true,"collapsible":true,"items":[{"text":"介绍","link":"/guides/topic-detail/generator/plugin/api/new/introduce"},{"text":"createElement","link":"/guides/topic-detail/generator/plugin/api/new/createElement"},{"text":"enableFunc","link":"/guides/topic-detail/generator/plugin/api/new/enableFunc"},{"text":"createSubProject","link":"/guides/topic-detail/generator/plugin/api/new/createSubProject"}]},{"text":"NPM API","collapsed":true,"collapsible":true,"items":[{"text":"install","link":"/guides/topic-detail/generator/plugin/api/npm/install"}]},{"text":"GIT API","collapsed":true,"collapsible":true,"items":[{"text":"isInGitRepo","link":"/guides/topic-detail/generator/plugin/api/git/isInGitRepo"},{"text":"initGitRepo","link":"/guides/topic-detail/generator/plugin/api/git/initGitRepo"},{"text":"gitAddAndCommit","link":"/guides/topic-detail/generator/plugin/api/git/gitAddAndCommit"}]}]}]},{"text":"开发微生成器","collapsed":true,"collapsible":true,"items":[{"text":"什么是微生成器","link":"/guides/topic-detail/generator/codesmith/introduce"},{"text":"微生成器的组成","link":"/guides/topic-detail/generator/codesmith/structure"},{"text":"开发微生成器项目","link":"/guides/topic-detail/generator/codesmith/develop"},{"text":"使用 JS 代码执行微生成器","link":"/guides/topic-detail/generator/codesmith/run-in-js"},{"text":"API","collapsed":true,"collapsible":true,"items":[{"text":"@modern-js/codesmith-api-app","link":"/guides/topic-detail/generator/codesmith/api/app"},{"text":"@modern-js/codesmith-api-json","link":"/guides/topic-detail/generator/codesmith/api/json"},{"text":"@modern-js/codesmith-api-fs","link":"/guides/topic-detail/generator/codesmith/api/fs"},{"text":"@modern-js/codesmith-api-git","link":"/guides/topic-detail/generator/codesmith/api/git"},{"text":"@modern-js/codesmith-api-handlebars","link":"/guides/topic-detail/generator/codesmith/api/handlebars"},{"text":"@modern-js/codesmith-api-ejs","link":"/guides/topic-detail/generator/codesmith/api/ejs"},{"text":"@modern-js/codesmith-api-npm","link":"/guides/topic-detail/generator/codesmith/api/npm"}]}]}]},{"text":"自定义插件","collapsed":true,"collapsible":true,"items":[{"text":"介绍","link":"/guides/topic-detail/framework-plugin/introduction"},{"text":"生命周期","link":"/guides/topic-detail/framework-plugin/lifecycle"},{"text":"Hook 模型","link":"/guides/topic-detail/framework-plugin/hook"},{"text":"如何编写插件","link":"/guides/topic-detail/framework-plugin/implement"},{"text":"插件之间的关系","link":"/guides/topic-detail/framework-plugin/relationship"},{"text":"扩展插件 Hook","link":"/guides/topic-detail/framework-plugin/extend"},{"text":"插件 API","link":"/guides/topic-detail/framework-plugin/plugin-api"},{"text":"Hook 列表","link":"/guides/topic-detail/framework-plugin/hook-list"}]}]},{"text":"常见问题","collapsed":true,"collapsible":true,"items":[{"text":"依赖安装问题","link":"/guides/troubleshooting/dependencies"},{"text":"命令行问题","link":"/guides/troubleshooting/cli"}]}],"/tutorials/":[{"text":"基础","collapsed":false,"collapsible":true,"items":[{"text":"介绍","link":"/tutorials/foundations/introduction"}]},{"text":"联系人列表应用","collapsed":false,"collapsible":true,"items":[{"text":"创建项目","link":"/tutorials/first-app/c01-start"},{"text":"编写 UI 组件","link":"/tutorials/first-app/c02-component"},{"text":"添加样式","link":"/tutorials/first-app/c03-css"},{"text":"添加客户端路由","link":"/tutorials/first-app/c04-routes"},{"text":"添加 Loader","link":"/tutorials/first-app/c05-loader"},{"text":"添加业务模型（状态管理）","link":"/tutorials/first-app/c06-model"},{"text":"添加容器组件","link":"/tutorials/first-app/c07-container"},{"text":"添加应用入口","link":"/tutorials/first-app/c08-entries"}]}]}},{"lang":"en","title":"Modern.js - Modern Web Engine","description":"A Progressive React Framework for modern web development.","nav":[{"text":"Tutorials","link":"/en/tutorials/foundations/introduction","activeMatch":"/tutorials/"},{"text":"Guide","link":"/en/guides/get-started/quick-start","activeMatch":"/guides/"},{"text":"Configure","link":"/en/configure/app/usage","activeMatch":"/configure/app"},{"text":"API","link":"/en/apis/app/commands/dev","activeMatch":"/apis/"},{"text":"v2.3.0","items":[{"text":"v1","link":"https://modernjs.dev/v1/"}]}],"label":"English","sidebar":{"/en/apis/app/":[{"text":"Commands","link":"/en/apis/app/commands/","collapsed":true,"collapsible":true,"items":[{"text":"dev / start","link":"/en/apis/app/commands/dev"},{"text":"new","link":"/en/apis/app/commands/new"},{"text":"test","link":"/en/apis/app/commands/test"},{"text":"lint","link":"/en/apis/app/commands/lint"},{"text":"build","link":"/en/apis/app/commands/build"},{"text":"serve","link":"/en/apis/app/commands/serve"},{"text":"inspect","link":"/en/apis/app/commands/inspect"},{"text":"upgrade","link":"/en/apis/app/commands/upgrade"}]},{"text":"Convention","link":"/en/apis/app/hooks/","collapsed":true,"collapsible":true,"items":[{"text":"src/","collapsed":true,"collapsible":true,"items":[{"text":"App.[tj]sx","link":"/en/apis/app/hooks/src/app"},{"text":"routes/","link":"/en/apis/app/hooks/src/routes"},{"text":"pages/","link":"/en/apis/app/hooks/src/pages"},{"text":"index.[tj]s","link":"/en/apis/app/hooks/src/index_"},{"text":"**/*.test.[tj]sx?","link":"/en/apis/app/hooks/src/test"},{"text":"**/*.stories.[tj]sx","link":"/en/apis/app/hooks/src/stories"},{"text":"*.[server|node].[tj]sx","link":"/en/apis/app/hooks/src/server"}]},{"text":"api/","collapsed":true,"collapsible":true,"items":[{"text":"函数写法","collapsed":true,"collapsible":true,"items":[{"text":"**/*.[tj]s","link":"/en/apis/app/hooks/api/functions/api"},{"text":"**/_*.[tj]s, _*/**","link":"/en/apis/app/hooks/api/functions/common"},{"text":"_app.[tj]s","link":"/en/apis/app/hooks/api/functions/app"}]},{"text":"test.[tj]s","link":"/en/apis/app/hooks/api/test"},{"text":"框架写法","collapsed":true,"collapsible":true,"items":[{"text":"lambda/*.[tj]s","link":"/en/apis/app/hooks/api/framework/lambda"}]}]},{"text":"server/","collapsed":true,"collapsible":true,"items":[{"text":"index.[tj]s","link":"/en/apis/app/hooks/server/index_"},{"text":"test.[tj]s","link":"/en/apis/app/hooks/server/test"}]},{"text":"shared/","link":"/en/apis/app/hooks/shared"},{"text":"config/","collapsed":true,"collapsible":true,"items":[{"text":"html/","link":"/en/apis/app/hooks/config/html"},{"text":"icon.png","link":"/en/apis/app/hooks/config/icon"},{"text":"public/","link":"/en/apis/app/hooks/config/public"},{"text":"upload/","link":"/en/apis/app/hooks/config/upload"},{"text":"mock/","link":"/en/apis/app/hooks/config/mock"},{"text":"storybook/","link":"/en/apis/app/hooks/config/storybook"}]},{"text":"modern.config.js","link":"/en/apis/app/hooks/modern-config"}]},{"text":"runtime","link":"/en/apis/app/runtime/","collapsed":false,"collapsible":true,"items":[{"text":"Core API","collapsed":true,"collapsible":true,"items":[{"text":"bootstrap","link":"/en/apis/app/runtime/core/bootstrap"},{"text":"createApp","link":"/en/apis/app/runtime/core/create-app"},{"text":"useLoader","link":"/en/apis/app/runtime/core/use-loader"},{"text":"useModuleApps","link":"/en/apis/app/runtime/core/use-module-apps"},{"text":"useRuntimeContext","link":"/en/apis/app/runtime/core/use-runtime-context"}]},{"text":"APP API","collapsed":true,"collapsible":true,"items":[{"text":"defineConfig","link":"/en/apis/app/runtime/app/define-config"}]},{"text":"Router API","collapsed":true,"collapsible":true,"items":[{"text":"router","link":"/en/apis/app/runtime/router/router"}]},{"text":"Model API","collapsed":true,"collapsible":true,"items":[{"text":"model","link":"/en/apis/app/runtime/model/model_"},{"text":"useModel","link":"/en/apis/app/runtime/model/use-model"},{"text":"useStaticModel","link":"/en/apis/app/runtime/model/use-static-model"},{"text":"useLocalModel","link":"/en/apis/app/runtime/model/use-local-model"},{"text":"connect","link":"/en/apis/app/runtime/model/connect"},{"text":"Auto actions","link":"/en/apis/app/runtime/model/auto-actions"},{"text":"handleEffect","link":"/en/apis/app/runtime/model/handle-effect"},{"text":"Provider","link":"/en/apis/app/runtime/model/Provider"},{"text":"useStore","link":"/en/apis/app/runtime/model/use-store"},{"text":"createStore","link":"/en/apis/app/runtime/model/create-store"},{"text":"createApp","link":"/en/apis/app/runtime/model/create-app"}]},{"text":"SSR API","collapsed":true,"collapsible":true,"items":[{"text":"NoSSR","link":"/en/apis/app/runtime/ssr/no-ssr"},{"text":"PreRender","link":"/en/apis/app/runtime/ssr/pre-render"}]},{"text":"BFF API","collapsed":true,"collapsible":true,"items":[{"text":"hook","link":"/en/apis/app/runtime/bff/hook"},{"text":"useContext","link":"/en/apis/app/runtime/bff/use-context"}]},{"text":"Web Server API","collapsed":true,"collapsible":true,"items":[{"text":"Hook","link":"/en/apis/app/runtime/web-server/hook"},{"text":"Middleware","link":"/en/apis/app/runtime/web-server/middleware"}]},{"text":"Utility API","collapsed":true,"collapsible":true,"items":[{"text":"CSS-In-JS API","link":"/en/apis/app/runtime/utility/css-in-js"},{"text":"Head","link":"/en/apis/app/runtime/utility/head"},{"text":"loadable","link":"/en/apis/app/runtime/utility/loadable"}]},{"text":"Testing API","collapsed":true,"collapsible":true,"items":[{"text":"cleanup","link":"/en/apis/app/runtime/testing/cleanup"},{"text":"act","link":"/en/apis/app/runtime/testing/act"},{"text":"render","link":"/en/apis/app/runtime/testing/render"},{"text":"renderApp","link":"/en/apis/app/runtime/testing/renderApp"}]}]}],"/en/blog/":[],"/en/configure/app/":[{"text":"Configure to use","link":"/en/configure/app/usage"},{"text":"plugins","link":"/en/configure/app/plugins"},{"text":"builderPlugins","link":"/en/configure/app/builder-plugins"},{"text":"autoLoadPlugins","link":"/en/configure/app/auto-load-plugin"}],"/en/guides/":[{"text":"Start","collapsed":false,"collapsible":true,"items":[{"text":"Quick Start","link":"/en/guides/get-started/quick-start"},{"text":"Upgrade","link":"/en/guides/get-started/upgrade"}]},{"text":"Core Concept","collapsed":false,"collapsible":true,"items":[{"text":"Entries","link":"/en/guides/concept/entries"}]},{"text":"Basic Features","collapsed":false,"collapsible":true,"items":[{"text":"Routes","link":"/en/guides/basic-features/routes"},{"text":"Builder","link":"/en/guides/basic-features/builder"},{"text":"Fetch Data","link":"/en/guides/basic-features/data-fetch"},{"text":"CSS Solutions","collapsed":true,"collapsible":true,"items":[{"text":"CSS-in-JS","link":"/en/guides/basic-features/css/css-in-js"},{"text":"Tailwind CSS","link":"/en/guides/basic-features/css/tailwindcss"},{"text":"PostCSS","link":"/en/guides/basic-features/css/postcss"},{"text":"Less and Sass","link":"/en/guides/basic-features/css/less-sass"},{"text":"CSS Modules","link":"/en/guides/basic-features/css/css-modules"}]},{"text":"Proxy","link":"/en/guides/basic-features/proxy"},{"text":"Mock","link":"/en/guides/basic-features/mock"},{"text":"Environment Variable","link":"/en/guides/basic-features/env-vars"},{"text":"Alias","link":"/en/guides/basic-features/alias"},{"text":"HTML Template","link":"/en/guides/basic-features/html"}]},{"text":"Advanced Features","link":"/en/guides/advanced-features/","collapsed":true,"collapsible":true,"items":[{"text":"BFF","link":"/en/guides/advanced-features/bff/","collapsed":true,"collapsible":true,"items":[{"text":"Basic Usage","link":"/en/guides/advanced-features/bff/function"},{"text":"Writing Type","link":"/en/guides/advanced-features/bff/type"},{"text":"Frameworks","link":"/en/guides/advanced-features/bff/frameworks"},{"text":"Use Proxy","link":"/en/guides/advanced-features/bff/bff-proxy"}]},{"text":"Custom Web Server","link":"/en/guides/advanced-features/web-server"},{"text":"Server-side rendering","link":"/en/guides/advanced-features/ssr"},{"text":"Static Site Generation","link":"/en/guides/advanced-features/ssg"},{"text":"Compatibility","link":"/en/guides/advanced-features/compatibility"},{"text":"Code Split","link":"/en/guides/advanced-features/code-split"},{"text":"ESLint","link":"/en/guides/advanced-features/eslint"},{"text":"Testing","link":"/en/guides/advanced-features/testing"},{"text":"Low-Level Tools","link":"/en/guides/advanced-features/low-level"}]},{"text":"Topic Detail","collapsed":true,"collapsible":true,"items":[{"text":"Reduck State Manage","collapsed":true,"collapsible":true,"items":[{"text":"快速上手","link":"/en/guides/topic-detail/model/quick-start"},{"text":"创建 Model","link":"/en/guides/topic-detail/model/define-model"},{"text":"使用 Model","link":"/en/guides/topic-detail/model/use-model"},{"text":"衍生状态","link":"/en/guides/topic-detail/model/computed-state"},{"text":"副作用管理","link":"/en/guides/topic-detail/model/manage-effects"},{"text":"自动生成 Actions","link":"/en/guides/topic-detail/model/auto-actions"},{"text":"Model 通信","link":"/en/guides/topic-detail/model/model-communicate"},{"text":"性能优化","link":"/en/guides/topic-detail/model/performance"},{"text":"测试 Model","link":"/en/guides/topic-detail/model/test-model"},{"text":"TS 最佳实践","link":"/en/guides/topic-detail/model/typescript-best-practice"},{"text":"Redux 生态集成","link":"/en/guides/topic-detail/model/redux-integration"},{"text":"单独使用 Reduck","link":"/en/guides/topic-detail/model/use-out-of-modernjs"},{"text":"常见问题","link":"/en/guides/topic-detail/model/faq"}]},{"text":"Micro Frontend","collapsed":true,"collapsible":true,"items":[{"text":"微前端介绍","link":"/en/guides/topic-detail/micro-frontend/c01-introduction"},{"text":"体验微前端","link":"/en/guides/topic-detail/micro-frontend/c02-development"},{"text":"开发主应用","link":"/en/guides/topic-detail/micro-frontend/c03-main-app"},{"text":"主子应用通信","link":"/en/guides/topic-detail/micro-frontend/c04-communicate"},{"text":"混合技术栈","link":"/en/guides/topic-detail/micro-frontend/c05-mixed-stack"}]},{"text":"Project Generator","link":"/en/guides/topic-detail/generator/project","collapsed":true,"collapsible":true,"items":[{"text":"Engineering configuration","collapsed":true,"collapsible":true,"items":[{"text":"Generator Configuration","link":"/en/guides/topic-detail/generator/config/common"},{"text":"Web App","link":"/en/guides/topic-detail/generator/config/app"},{"text":"Module","link":"/en/guides/topic-detail/generator/config/module"},{"text":"Monorepo","link":"/en/guides/topic-detail/generator/config/monorepo"}]},{"text":"Development Generator Plugin","collapsed":true,"collapsible":true,"items":[{"text":"Why do you need a generator plugin","link":"/en/guides/topic-detail/generator/plugin/abstract"},{"text":"How to use the generator plugin","link":"/en/guides/topic-detail/generator/plugin/use"},{"text":"How to develop generator plugins","link":"/en/guides/topic-detail/generator/plugin/develop"},{"text":"API","collapsed":true,"collapsible":true,"items":[{"text":"Introduction","link":"/en/guides/topic-detail/generator/plugin/api/introduce"},{"text":"Customized Input API","collapsed":true,"collapsible":true,"items":[{"text":"Customize input related type definition","link":"/en/guides/topic-detail/generator/plugin/api/input/type"},{"text":"addInputBefore","link":"/en/guides/topic-detail/generator/plugin/api/input/addInputBefore"},{"text":"addInputAfter","link":"/en/guides/topic-detail/generator/plugin/api/input/addInputAfter"},{"text":"setInput","link":"/en/guides/topic-detail/generator/plugin/api/input/setInput"},{"text":"setInputValue","link":"/en/guides/topic-detail/generator/plugin/api/input/setInputValue"}]},{"text":"Get Information API","collapsed":true,"collapsible":true,"items":[{"text":"locale","link":"/en/guides/topic-detail/generator/plugin/api/info/locale"},{"text":"isFileExit","link":"/en/guides/topic-detail/generator/plugin/api/info/isFileExit"},{"text":"readDir","link":"/en/guides/topic-detail/generator/plugin/api/info/readDir"}]},{"text":"Hook Function API","collapsed":true,"collapsible":true,"items":[{"text":"OnForged","link":"/en/guides/topic-detail/generator/plugin/api/hook/onForged"},{"text":"AfterForged","link":"/en/guides/topic-detail/generator/plugin/api/hook/afterForged"}]},{"text":"File API","collapsed":true,"collapsible":true,"items":[{"text":"Introduction","link":"/en/guides/topic-detail/generator/plugin/api/file/introduce"},{"text":"addHelper","link":"/en/guides/topic-detail/generator/plugin/api/file/addHelper"},{"text":"addPartial","link":"/en/guides/topic-detail/generator/plugin/api/file/addPartial"},{"text":"addFile","link":"/en/guides/topic-detail/generator/plugin/api/file/addFile"},{"text":"addManyFile","link":"/en/guides/topic-detail/generator/plugin/api/file/addManyFile"},{"text":"updateJSONFile","link":"/en/guides/topic-detail/generator/plugin/api/file/updateJSONFile"},{"text":"updateTextRawFile","link":"/en/guides/topic-detail/generator/plugin/api/file/updateTextRawFile"},{"text":"updateModernConfig","link":"/en/guides/topic-detail/generator/plugin/api/file/updateModernConfig"},{"text":"rmFile","link":"/en/guides/topic-detail/generator/plugin/api/file/rmFile"},{"text":"rmDir","link":"/en/guides/topic-detail/generator/plugin/api/file/rmDir"}]},{"text":"Enable function API","collapsed":true,"collapsible":true,"items":[{"text":"Introduction","link":"/en/guides/topic-detail/generator/plugin/api/new/introduce"},{"text":"createElement","link":"/en/guides/topic-detail/generator/plugin/api/new/createElement"},{"text":"enableFunc","link":"/en/guides/topic-detail/generator/plugin/api/new/enableFunc"},{"text":"createSubProject","link":"/en/guides/topic-detail/generator/plugin/api/new/createSubProject"}]},{"text":"NPM API","collapsed":true,"collapsible":true,"items":[{"text":"install","link":"/en/guides/topic-detail/generator/plugin/api/npm/install"}]},{"text":"GIT API","collapsed":true,"collapsible":true,"items":[{"text":"isInGitRepo","link":"/en/guides/topic-detail/generator/plugin/api/git/isInGitRepo"},{"text":"initGitRepo","link":"/en/guides/topic-detail/generator/plugin/api/git/initGitRepo"},{"text":"gitAddAndCommit","link":"/en/guides/topic-detail/generator/plugin/api/git/gitAddAndCommit"}]}]}]},{"text":"Develop microgenerator","collapsed":true,"collapsible":true,"items":[{"text":"What is a microgenerator","link":"/en/guides/topic-detail/generator/codesmith/introduce"},{"text":"The composition of the microgenerator","link":"/en/guides/topic-detail/generator/codesmith/structure"},{"text":"Develop a microgenerator project","link":"/en/guides/topic-detail/generator/codesmith/develop"},{"text":"Execute microgenerator with JS code","link":"/en/guides/topic-detail/generator/codesmith/run-in-js"},{"text":"API","collapsed":true,"collapsible":true,"items":[{"text":"@modern-js/codesmith-api-app","link":"/en/guides/topic-detail/generator/codesmith/api/app"},{"text":"@modern-js/codesmith-api-json","link":"/en/guides/topic-detail/generator/codesmith/api/json"},{"text":"@modern-js/codesmith-api-fs","link":"/en/guides/topic-detail/generator/codesmith/api/fs"},{"text":"@modern-js/codesmith-api-git","link":"/en/guides/topic-detail/generator/codesmith/api/git"},{"text":"@modern-js/codesmith-api-handlebars","link":"/en/guides/topic-detail/generator/codesmith/api/handlebars"},{"text":"@modern-js/codesmith-api-ejs","link":"/en/guides/topic-detail/generator/codesmith/api/ejs"},{"text":"@modern-js/codesmith-api-npm","link":"/en/guides/topic-detail/generator/codesmith/api/npm"}]}]}]},{"text":"Custom Plugin","collapsed":true,"collapsible":true,"items":[{"text":"介绍","link":"/en/guides/topic-detail/framework-plugin/introduction"},{"text":"Lifecycle","link":"/en/guides/topic-detail/framework-plugin/lifecycle"},{"text":"Hook 模型","link":"/en/guides/topic-detail/framework-plugin/hook"},{"text":"如何编写插件","link":"/en/guides/topic-detail/framework-plugin/implement"},{"text":"插件之间的关系","link":"/en/guides/topic-detail/framework-plugin/relationship"},{"text":"扩展插件 Hook","link":"/en/guides/topic-detail/framework-plugin/extend"},{"text":"插件 API","link":"/en/guides/topic-detail/framework-plugin/plugin-api"},{"text":"Hook 列表","link":"/en/guides/topic-detail/framework-plugin/hook-list"}]}]},{"text":"FAQ","collapsed":true,"collapsible":true,"items":[{"text":"CLI FAQ","link":"/en/guides/troubleshooting/cli"}]}],"/en/tutorials/":[{"text":"Basic","collapsed":false,"collapsible":true,"items":[{"text":"Introduce","link":"/en/tutorials/foundations/introduction"}]},{"text":"First App","collapsed":false,"collapsible":true,"items":[{"text":"Create Project","link":"/en/tutorials/first-app/c01-start"},{"text":"Add UI Components","link":"/en/tutorials/first-app/c02-component"},{"text":"Add Style","link":"/en/tutorials/first-app/c03-css"},{"text":"Add Client Route","link":"/en/tutorials/first-app/c04-routes"},{"text":"Add Loader","link":"/en/tutorials/first-app/c05-loader"},{"text":"Add Model","link":"/en/tutorials/first-app/c06-model"},{"text":"Add Container","link":"/en/tutorials/first-app/c07-container"},{"text":"Add Application Entry","link":"/en/tutorials/first-app/c08-entries"}]}]}}],"socialLinks":[{"icon":"github","mode":"link","content":"https://github.com/modern-js-dev/modern.js"}],"footer":{"style":"dark","links":[{"title":"使用指南","items":[{"label":"快速上手","to":"/guides/get-started/quick-start"},{"label":"基础功能","to":"/guides/basic-features/"},{"label":"进阶功能","to":"/guides/advanced-features/"}]},{"title":"API 资料","items":[{"label":"命令","to":"/apis/app/commands/"},{"label":"运行时","to":"/apis/app/runtime/"},{"label":"文件约定","to":"/apis/app/hooks/"},{"label":"配置选项","to":"/configure/app/usage"}]},{"title":"关注我们","items":[{"icon":"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/icons/weixin.png","qrcode":"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/icons/weixin-qrcode.jpeg","to":"/weixin","label":"微信"},{"icon":"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/icons/bilibili.png","to":"https://space.bilibili.com/1195398938","label":"bilibili"},{"icon":"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/icons/feishu.png","qrcode":"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/feishu-qrcode-0914.png","to":"Feishu","label":"飞书"},{"icon":"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/icons/github.png","qrcode":"","to":"https://github.com/modern-js-dev/modern.js","label":"GitHub"}]}]}},"base":"/","root":"/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc","lang":"zh","logo":"https://lf-cdn-tos.bytescm.com/obj/static/webinfra/modern-js-website/assets/images/images/modernjs-logo.svg","pages":[{"routePath":"/en/apis/app/commands/build","toc":[{"id":"analyze-bundle","text":"Analyze Bundle","depth":2}]},{"routePath":"/en/apis/app/commands/dev","toc":[{"id":"compile-partial-pages","text":"Compile Partial Pages","depth":2},{"id":"specify-the-page-by-parameter","text":"Specify the page by parameter","depth":3}]},{"routePath":"/en/apis/app/commands/","toc":[]},{"routePath":"/en/apis/app/commands/inspect","toc":[{"id":"configuration-env","text":"Configuration Env","depth":2},{"id":"verbose-content","text":"Verbose content","depth":2},{"id":"ssr-configuration","text":"SSR Configuration","depth":3}]},{"routePath":"/en/apis/app/commands/lint","toc":[]},{"routePath":"/en/apis/app/commands/new","toc":[{"id":"add-entry","text":"Add Entry","depth":3},{"id":"enable-features","text":"Enable Features","depth":3}]},{"routePath":"/en/apis/app/commands/serve","toc":[]},{"routePath":"/en/apis/app/commands/test","toc":[]},{"routePath":"/en/apis/app/commands/upgrade","toc":[]},{"routePath":"/en/apis/app/hooks/api/framework/lambda","toc":[{"id":"routing-rule","text":"Routing Rule","depth":2},{"id":"default-route","text":"Default Route","depth":3},{"id":"multi-level-route","text":"Multi Level Route","depth":3},{"id":"dynamic-route","text":"Dynamic Route","depth":3},{"id":"allow-list","text":"Allow List","depth":3},{"id":"define-function","text":"Define Function","depth":2}]},{"routePath":"/en/apis/app/hooks/api/functions/api","toc":[{"id":"routing-rule","text":"Routing Rule","depth":2},{"id":"default-route","text":"Default Route","depth":3},{"id":"multi-level-route","text":"Multi Level Route","depth":3},{"id":"dynamic-route","text":"Dynamic Route","depth":3},{"id":"allow-list","text":"Allow List","depth":3},{"id":"define-function","text":"Define Function","depth":2}]},{"routePath":"/en/apis/app/hooks/api/functions/app","toc":[]},{"routePath":"/en/apis/app/hooks/api/functions/common","toc":[]},{"routePath":"/en/apis/app/hooks/api/test","toc":[]},{"routePath":"/en/apis/app/hooks/config/html","toc":[]},{"routePath":"/en/apis/app/hooks/config/icon","toc":[]},{"routePath":"/en/apis/app/hooks/config/mock","toc":[]},{"routePath":"/en/apis/app/hooks/config/public","toc":[{"id":"description","text":"Description","depth":2},{"id":"scene","text":"Scene","depth":2},{"id":"compression","text":"Compression","depth":2}]},{"routePath":"/en/apis/app/hooks/config/storybook","toc":[]},{"routePath":"/en/apis/app/hooks/config/upload","toc":[{"id":"description","text":"Description","depth":2},{"id":"scene","text":"Scene","depth":2},{"id":"compression","text":"Compression","depth":2},{"id":"more-usage","text":"More Usage","depth":2}]},{"routePath":"/en/apis/app/hooks/","toc":[]},{"routePath":"/en/apis/app/hooks/modern-config","toc":[]},{"routePath":"/en/apis/app/hooks/server/index_","toc":[]},{"routePath":"/en/apis/app/hooks/server/test","toc":[]},{"routePath":"/en/apis/app/hooks/shared","toc":[]},{"routePath":"/en/apis/app/hooks/src/app","toc":[]},{"routePath":"/en/apis/app/hooks/src/index_","toc":[]},{"routePath":"/en/apis/app/hooks/src/pages","toc":[{"id":"dynamic-routing","text":"Dynamic Routing","depth":3},{"id":"global-layout","text":"Global Layout","depth":3},{"id":"partial-layout","text":"Partial Layout","depth":3},{"id":"404-路由","text":"404 路由","depth":3}]},{"routePath":"/en/apis/app/hooks/src/routes","toc":[{"id":"basic-example","text":"basic example","depth":2},{"id":"dynamic-route","text":"Dynamic Route","depth":2},{"id":"layout-component","text":"Layout component","depth":2}]},{"routePath":"/en/apis/app/hooks/src/server","toc":[]},{"routePath":"/en/apis/app/hooks/src/stories","toc":[]},{"routePath":"/en/apis/app/hooks/src/test","toc":[]},{"routePath":"/en/apis/app/runtime/app/define-config","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"function-signature","text":"Function Signature","depth":2},{"id":"input","text":"Input","depth":3},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/apis/app/runtime/bff/hook","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"function-signature","text":"Function Signature","depth":2},{"id":"input","text":"Input","depth":3},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/apis/app/runtime/bff/use-context","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"function-signature","text":"Function Signature","depth":2},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/apis/app/runtime/core/bootstrap","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"function-signature","text":"Function Signature","depth":2},{"id":"input","text":"Input","depth":3},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/apis/app/runtime/core/create-app","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"function-signature","text":"Function Signature","depth":2},{"id":"input","text":"Input","depth":3},{"id":"example","text":"Example","depth":2},{"id":"create-custom-entry","text":"Create Custom Entry","depth":3},{"id":"custom-plugins","text":"Custom Plugins","depth":3}]},{"routePath":"/en/apis/app/runtime/core/use-loader","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"function-signature","text":"Function Signature","depth":2},{"id":"input","text":"Input","depth":3},{"id":"return-value","text":"Return Value","depth":3},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/apis/app/runtime/core/use-module-apps","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"function-signature","text":"Function Signature","depth":2},{"id":"example","text":"Example","depth":2},{"id":"centralized-routing","text":"Centralized Routing","depth":3},{"id":"load-animation","text":"Load Animation","depth":2}]},{"routePath":"/en/apis/app/runtime/core/use-runtime-context","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"function-signature","text":"Function Signature","depth":2},{"id":"return-value","text":"Return Value","depth":3},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/apis/app/runtime/","toc":[]},{"routePath":"/en/apis/app/runtime/model/Provider","toc":[{"id":"function-signature","text":"Function Signature","depth":2},{"id":"input","text":"Input","depth":3},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/apis/app/runtime/model/auto-actions","toc":[{"id":"example","text":"Example","depth":2},{"id":"basic-data-type","text":"Basic Data Type","depth":3},{"id":"array","text":"Array","depth":3},{"id":"plainobject","text":"PlainObject","depth":3}]},{"routePath":"/en/apis/app/runtime/model/connect","toc":[{"id":"function-signature","text":"Function Signature","depth":2},{"id":"input","text":"Input","depth":3},{"id":"return-type","text":"Return Type","depth":3},{"id":"example","text":"Example","depth":2},{"id":"basic","text":"Basic","depth":3},{"id":"select-state--actions","text":"Select State & Actions","depth":3},{"id":"forwarding-ref","text":"Forwarding Ref","depth":3}]},{"routePath":"/en/apis/app/runtime/model/create-app","toc":[{"id":"function-signature","text":"Function Signature","depth":2},{"id":"input","text":"Input","depth":3},{"id":"return-value","text":"Return Value","depth":3},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/apis/app/runtime/model/create-store","toc":[{"id":"function-signature","text":"Function Signature","depth":2},{"id":"input","text":"Input","depth":3},{"id":"return-value","text":"Return Value","depth":3},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/apis/app/runtime/model/handle-effect","toc":[{"id":"function-signature","text":"Function Signature","depth":2},{"id":"input","text":"Input","depth":3},{"id":"return-type","text":"Return Type","depth":3}]},{"routePath":"/en/apis/app/runtime/model/model_","toc":[{"id":"model","text":"model","depth":2},{"id":"define","text":"define","depth":2},{"id":"object-type","text":"Object Type","depth":3},{"id":"function-type","text":"Function Type","depth":3},{"id":"input","text":"Input","depth":3},{"id":"modeldescstate","text":"ModelDesc.state","depth":4},{"id":"modeldescactions","text":"ModelDesc.actions","depth":4},{"id":"modeldesccomputed","text":"ModelDesc.computed","depth":4},{"id":"modeldesceffects","text":"ModelDesc.effects","depth":4}]},{"routePath":"/en/apis/app/runtime/model/use-local-model","toc":[{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/apis/app/runtime/model/use-model","toc":[{"id":"function-signature","text":"Function Signature","depth":2},{"id":"input","text":"Input","depth":3},{"id":"return-value","text":"Return Value","depth":3},{"id":"example","text":"Example","depth":2},{"id":"basic","text":"Basic","depth":3},{"id":"selector-usage","text":"Selector Usage","depth":3}]},{"routePath":"/en/apis/app/runtime/model/use-static-model","toc":[{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/apis/app/runtime/model/use-store","toc":[{"id":"function-signature","text":"Function Signature","depth":2},{"id":"return-type","text":"Return Type","depth":3}]},{"routePath":"/en/apis/app/runtime/router/router","toc":[{"id":"hooks","text":"hooks","depth":2},{"id":"usenavigate","text":"useNavigate","depth":3},{"id":"uselocation","text":"useLocation","depth":3},{"id":"useparams","text":"useParams","depth":3},{"id":"components","text":"Components","depth":2},{"id":"link","text":"Link","depth":3},{"id":"navlink","text":"NavLink","depth":3},{"id":"outlet","text":"Outlet","depth":3},{"id":"route","text":"Route","depth":3},{"id":"more","text":"More","depth":2}]},{"routePath":"/en/apis/app/runtime/ssr/no-ssr","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"example","text":"Example","depth":2},{"id":"scene","text":"Scene","depth":2}]},{"routePath":"/en/apis/app/runtime/ssr/pre-render","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"function-signature","text":"Function Signature","depth":2},{"id":"input","text":"Input","depth":3},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/apis/app/runtime/testing/act","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"function-signature","text":"Function Signature","depth":2},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/apis/app/runtime/testing/cleanup","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"function-signature","text":"Function Signature","depth":2},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/apis/app/runtime/testing/render","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"function-signature","text":"Function Signature","depth":2},{"id":"input","text":"Input","depth":3},{"id":"return-value","text":"Return Value","depth":3},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/apis/app/runtime/testing/renderApp","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"function-signature","text":"Function Signature","depth":2},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/apis/app/runtime/utility/css-in-js","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"function-signature","text":"Function Signature","depth":2},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/apis/app/runtime/utility/head","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"example","text":"Example","depth":2},{"id":"more","text":"More","depth":2}]},{"routePath":"/en/apis/app/runtime/utility/loadable","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"function-signature","text":"Function Signature","depth":2},{"id":"input","text":"Input","depth":3},{"id":"loadfn","text":"loadFn","depth":4},{"id":"optionsresolvecomponent","text":"options.resolveComponent","depth":4},{"id":"optionsfallback","text":"options.fallback","depth":4},{"id":"optionsssr","text":"options.ssr","depth":4},{"id":"return-value","text":"Return Value","depth":3},{"id":"loadablecomponent","text":"LoadableComponent","depth":4}]},{"routePath":"/en/apis/app/runtime/web-server/hook","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"function-signature","text":"Function Signature","depth":2},{"id":"input","text":"Input","depth":3},{"id":"example","text":"Example","depth":2},{"id":"redirect","text":"Redirect","depth":3},{"id":"rewrite","text":"Rewrite","depth":3},{"id":"html-inject","text":"HTML Inject","depth":3}]},{"routePath":"/en/apis/app/runtime/web-server/middleware","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"function-signature","text":"Function Signature","depth":2},{"id":"input","text":"Input","depth":3},{"id":"example","text":"Example","depth":2},{"id":"tracking","text":"Tracking","depth":3},{"id":"inject-tools--data","text":"Inject Tools & Data","depth":3}]},{"routePath":"/en/configure/app/auto-load-plugin","toc":[{"id":"manual-registration-plugin","text":"Manual Registration Plugin","depth":3},{"id":"auto-registration-plugin","text":"Auto Registration plugin","depth":3}]},{"routePath":"/en/configure/app/bff/prefix","toc":[]},{"routePath":"/en/configure/app/bff/proxy","toc":[{"id":"common-usage","text":"Common usage","depth":2},{"id":"solve-interface-cross-domain-problems","text":"Solve interface cross-domain problems","depth":3}]},{"routePath":"/en/configure/app/builder-plugins","toc":[{"id":"precautions","text":"Precautions","depth":2},{"id":"when-to-use","text":"When to use","depth":2},{"id":"example","text":"Example","depth":2},{"id":"using-plugins-on-npm","text":"Using plugins on npm","depth":3},{"id":"using-local-plugins","text":"Using local plugins","depth":3},{"id":"plugin-configuration-items","text":"Plugin configuration items","depth":3}]},{"routePath":"/en/configure/app/deploy/microFrontend","toc":[{"id":"example","text":"Example","depth":2},{"id":"configuration","text":"Configuration","depth":2},{"id":"enablehtmlentry","text":"enableHtmlEntry","depth":3},{"id":"externalbasiclibrary","text":"externalBasicLibrary","depth":3}]},{"routePath":"/en/configure/app/dev/asset-prefix","toc":[{"id":"boolean-type","text":"Boolean Type","depth":4},{"id":"string-type","text":"String type","depth":4}]},{"routePath":"/en/configure/app/dev/hmr","toc":[]},{"routePath":"/en/configure/app/dev/https","toc":[{"id":"automatically-generate-certificates","text":"Automatically generate certificates","depth":4},{"id":"manually-set-the-certificate","text":"Manually set the certificate","depth":4}]},{"routePath":"/en/configure/app/dev/port","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/dev/progress-bar","toc":[]},{"routePath":"/en/configure/app/dev/proxy","toc":[{"id":"object","text":"Object","depth":3},{"id":"string","text":"String","depth":3}]},{"routePath":"/en/configure/app/dev/start-url","toc":[{"id":"port-placeholder","text":"Port placeholder","depth":2}]},{"routePath":"/en/configure/app/experiments/lazy-compilation","toc":[{"id":"lazy-compilation-for-dynamic-imports","text":"Lazy Compilation for Dynamic Imports","depth":3},{"id":"lazy-compilation-for-entires","text":"Lazy Compilation for Entires","depth":3},{"id":"limitations","text":"Limitations","depth":3},{"id":"disable-split-chunks","text":"Disable split chunks","depth":4},{"id":"use-proxy","text":"Use proxy","depth":4}]},{"routePath":"/en/configure/app/html/app-icon","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/html/crossorigin","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/html/disable-html-folder","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/html/favicon-by-entries","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/html/favicon","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/html/inject-by-entries","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/html/inject","toc":[{"id":"default-inject-position","text":"Default inject position","depth":4},{"id":"inject-into-body","text":"Inject into body","depth":4}]},{"routePath":"/en/configure/app/html/meta-by-entries","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/html/meta","toc":[{"id":"string-type","text":"String Type","depth":4},{"id":"object-type","text":"Object Type","depth":4},{"id":"remove-default-value","text":"Remove Default Value","depth":3}]},{"routePath":"/en/configure/app/html/mount-id","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/html/tags-by-entries","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/html/tags","toc":[{"id":"tag-object","text":"Tag Object","depth":4},{"id":"tags-handler","text":"Tags Handler","depth":4}]},{"routePath":"/en/configure/app/html/template-by-entries","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/html/template-parameters-by-entries","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/html/template-parameters","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/html/template","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/html/title-by-entries","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/html/title","toc":[]},{"routePath":"/en/configure/app/output/asset-prefix","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/output/assets-retry","toc":[{"id":"assetsretrymax","text":"assetsRetry.max","depth":3},{"id":"assetsretrydomain","text":"assetsRetry.domain","depth":3},{"id":"assetsretrytype","text":"assetsRetry.type","depth":3},{"id":"assetsretrytest","text":"assetsRetry.test","depth":3},{"id":"assetsretrycrossorigin","text":"assetsRetry.crossOrigin","depth":3},{"id":"assetsretryonretry","text":"assetsRetry.onRetry","depth":3},{"id":"assetsretryonsuccess","text":"assetsRetry.onSuccess","depth":3},{"id":"assetsretryonfail","text":"assetsRetry.onFail","depth":3}]},{"routePath":"/en/configure/app/output/charset","toc":[]},{"routePath":"/en/configure/app/output/clean-dist-path","toc":[]},{"routePath":"/en/configure/app/output/convert-to-rem","toc":[{"id":"boolean-type","text":"Boolean Type","depth":4},{"id":"object-type","text":"Object Type","depth":4},{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/output/copy","toc":[]},{"routePath":"/en/configure/app/output/css-module-local-ident-name","toc":[{"id":"default-value","text":"Default Value","depth":3},{"id":"template-string","text":"Template String","depth":3},{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/output/data-uri-limit","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/output/disable-css-extract","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/output/disable-css-module-extension","toc":[{"id":"example","text":"Example","depth":3},{"id":"detailed","text":"Detailed","depth":3},{"id":"disablecssmoduleextension-is-false-default","text":"disableCssModuleExtension is false (default)","depth":4},{"id":"disablecssmoduleextension-is-true","text":"disableCssModuleExtension is true","depth":4}]},{"routePath":"/en/configure/app/output/disable-filename-hash","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/output/disable-inline-runtime-chunk","toc":[]},{"routePath":"/en/configure/app/output/disable-minimize","toc":[]},{"routePath":"/en/configure/app/output/disable-node-polyfill","toc":[]},{"routePath":"/en/configure/app/output/disable-source-map","toc":[]},{"routePath":"/en/configure/app/output/disable-ts-checker","toc":[{"id":"blocking-compilation","text":"Blocking Compilation","depth":3},{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/output/dist-path","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/output/enable-asset-fallback","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/output/enable-asset-manifest","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/output/enable-css-module-tsdeclaration","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/output/enable-inline-scripts","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/output/enable-inline-styles","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/output/enable-latest-decorators","toc":[]},{"routePath":"/en/configure/app/output/externals","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/output/filename","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/output/legal-comments","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/output/override-browserslist","toc":[{"id":"priority","text":"Priority","depth":4},{"id":"default-value","text":"Default Value","depth":4},{"id":"example","text":"Example","depth":3},{"id":"set-according-to-targets","text":"Set according to Targets","depth":4}]},{"routePath":"/en/configure/app/output/polyfill","toc":[{"id":"config","text":"Config","depth":3},{"id":"entry","text":"entry","depth":4},{"id":"usage","text":"usage","depth":4},{"id":"ua","text":"ua","depth":4},{"id":"off","text":"off","depth":4}]},{"routePath":"/en/configure/app/output/ssg","toc":[{"id":"example","text":"Example","depth":2},{"id":"single-entry","text":"Single Entry","depth":3},{"id":"multi-entries","text":"Multi Entries","depth":3},{"id":"configure-route","text":"Configure Route","depth":3},{"id":"prevent-default","text":"Prevent Default","depth":3},{"id":"dynamic-params","text":"Dynamic Params","depth":3}]},{"routePath":"/en/configure/app/output/svg-default-export","toc":[]},{"routePath":"/en/configure/app/performance/build-cache","toc":[]},{"routePath":"/en/configure/app/performance/bundle-analyze","toc":[]},{"routePath":"/en/configure/app/performance/chunk-split","toc":[{"id":"chunksplitstrategy","text":"chunkSplit.strategy","depth":3},{"id":"chunksplitminsize","text":"chunkSplit.minSize","depth":3},{"id":"chunksplitmaxsize","text":"chunkSplit.maxSize","depth":3},{"id":"chunksplitforcesplitting","text":"chunkSplit.forceSplitting","depth":3},{"id":"chunksplitsplitchunks","text":"chunkSplit.splitChunks","depth":3},{"id":"chunksplitoverride","text":"chunkSplit.override","depth":3}]},{"routePath":"/en/configure/app/performance/print-file-size","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/performance/profile","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/performance/remove-console","toc":[{"id":"remove-all-consoles","text":"Remove all consoles","depth":4},{"id":"remove-specific-console","text":"Remove specific console","depth":4}]},{"routePath":"/en/configure/app/performance/remove-moment-locale","toc":[]},{"routePath":"/en/configure/app/plugins","toc":[{"id":"precautions","text":"Precautions","depth":2},{"id":"plugin-type","text":"Plugin type","depth":2},{"id":"plugin-execution-order","text":"Plugin execution order","depth":2},{"id":"example","text":"Example","depth":2},{"id":"using-plugins-on-npm","text":"Using plugins on npm","depth":3},{"id":"use-local-plugins","text":"Use local plugins","depth":3},{"id":"plugin-configuration","text":"Plugin configuration","depth":3}]},{"routePath":"/en/configure/app/runtime/intro","toc":[{"id":"configuration","text":"Configuration","depth":2},{"id":"runtime","text":"runtime","depth":3},{"id":"base","text":"Base","depth":4},{"id":"defineconfig","text":"DefineConfig","depth":4},{"id":"runtimebyentries","text":"runtimeByEntries","depth":3},{"id":"introduce","text":"Introduce","depth":4}]},{"routePath":"/en/configure/app/runtime/master-app","toc":[{"id":"example","text":"Example","depth":2},{"id":"apps","text":"apps","depth":3},{"id":"other-config","text":"Other Config","depth":3}]},{"routePath":"/en/configure/app/runtime/router","toc":[{"id":"basename","text":"basename","depth":2},{"id":"supporthtml5history","text":"supportHtml5History","depth":2}]},{"routePath":"/en/configure/app/runtime/state","toc":[{"id":"models","text":"models","depth":2},{"id":"initialstate","text":"initialState","depth":2},{"id":"immer","text":"immer","depth":2},{"id":"effects","text":"effects","depth":2},{"id":"autoactions","text":"autoActions","depth":2},{"id":"devtools","text":"devtools","depth":2}]},{"routePath":"/en/configure/app/security/check-syntax","toc":[{"id":"example","text":"Example","depth":2},{"id":"error-log","text":"Error Log","depth":3},{"id":"solution","text":"Solution","depth":3}]},{"routePath":"/en/configure/app/security/sri","toc":[{"id":"introduce-sri","text":"Introduce SRI","depth":4},{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/server/base-url","toc":[]},{"routePath":"/en/configure/app/server/enable-framework-ext","toc":[{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/configure/app/server/port","toc":[{"id":"difference-with-devport","text":"Difference with dev.port","depth":3}]},{"routePath":"/en/configure/app/server/public-routes","toc":[]},{"routePath":"/en/configure/app/server/routes","toc":[{"id":"custom-access-routing","text":"Custom access routing","depth":2},{"id":"custom-response-header","text":"Custom response header","depth":2}]},{"routePath":"/en/configure/app/server/ssr-by-entries","toc":[]},{"routePath":"/en/configure/app/server/ssr","toc":[]},{"routePath":"/en/configure/app/source/alias","toc":[{"id":"object-type","text":"Object Type","depth":4},{"id":"function-type","text":"Function Type","depth":4}]},{"routePath":"/en/configure/app/source/compile-js-data-uri","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/source/config-dir","toc":[]},{"routePath":"/en/configure/app/source/define","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/source/design-system","toc":[{"id":"structure","text":"Structure","depth":3},{"id":"screens","text":"Screens","depth":4},{"id":"colors","text":"Colors","depth":4},{"id":"spacing","text":"Spacing","depth":4},{"id":"core-plugins","text":"Core plugins","depth":4},{"id":"custom-default-configuration","text":"Custom default configuration","depth":3},{"id":"override-default-configuration","text":"Override default configuration","depth":4},{"id":"extension-default-configuration","text":"Extension default configuration","depth":4},{"id":"reference-other-values","text":"Reference other values","depth":4},{"id":"disable-the-entire-core-plugin","text":"Disable the entire core plugin","depth":4},{"id":"add-your-own-key","text":"Add your own key","depth":4},{"id":"configure-reference","text":"Configure reference","depth":3},{"id":"additional-configuration","text":"Additional configuration","depth":3},{"id":"sourcedesignsystemsupportstyledcomponents","text":"source.designSystem.supportStyledComponents","depth":4}]},{"routePath":"/en/configure/app/source/disable-default-entries","toc":[]},{"routePath":"/en/configure/app/source/disable-entry-dirs","toc":[]},{"routePath":"/en/configure/app/source/enable-async-entry","toc":[{"id":"background-knowledge","text":"Background knowledge","depth":2},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/configure/app/source/entries-dir","toc":[]},{"routePath":"/en/configure/app/source/entries","toc":[{"id":"string","text":"String","depth":2},{"id":"object","text":"Object","depth":2},{"id":"combine-entry","text":"Combine Entry","depth":2}]},{"routePath":"/en/configure/app/source/exclude","toc":[]},{"routePath":"/en/configure/app/source/global-vars","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/en/configure/app/source/include","toc":[{"id":"typical-example","text":"Typical Example","depth":3},{"id":"monorepo-project","text":"Monorepo Project","depth":3},{"id":"precautions","text":"Precautions","depth":3}]},{"routePath":"/en/configure/app/source/module-scopes","toc":[{"id":"example","text":"Example","depth":3},{"id":"array-type","text":"Array Type","depth":4},{"id":"function-type","text":"Function Type","depth":4}]},{"routePath":"/en/configure/app/source/pre-entry","toc":[{"id":"add-a-single-script","text":"Add a single script","depth":4},{"id":"add-global-style","text":"Add global style","depth":4},{"id":"add-multiple-scripts","text":"Add multiple scripts","depth":4}]},{"routePath":"/en/configure/app/source/resolve-extension-prefix","toc":[{"id":"example","text":"Example","depth":3},{"id":"set-according-to-targets","text":"Set according to Targets","depth":4}]},{"routePath":"/en/configure/app/source/resolve-main-fields","toc":[{"id":"example","text":"Example","depth":3},{"id":"set-according-to-targets","text":"Set according to Targets","depth":4}]},{"routePath":"/en/configure/app/testing/transformer","toc":[]},{"routePath":"/en/configure/app/tools/autoprefixer","toc":[{"id":"object-type","text":"Object Type","depth":3},{"id":"function-type","text":"Function Type","depth":3}]},{"routePath":"/en/configure/app/tools/babel","toc":[{"id":"function-type","text":"Function Type","depth":3},{"id":"object-type","text":"Object Type","depth":3},{"id":"util-functions","text":"Util Functions","depth":3},{"id":"addplugins","text":"addPlugins","depth":4},{"id":"addpresets","text":"addPresets","depth":4},{"id":"removeplugins","text":"removePlugins","depth":4},{"id":"removepresets","text":"removePresets","depth":4},{"id":"addincludes","text":"addIncludes","depth":4},{"id":"addexcludes","text":"addExcludes","depth":4},{"id":"modifypresetenvoptions","text":"modifyPresetEnvOptions","depth":4},{"id":"modifypresetreactoptions","text":"modifyPresetReactOptions","depth":4}]},{"routePath":"/en/configure/app/tools/css-extract","toc":[{"id":"object-type","text":"Object Type","depth":3},{"id":"function-type","text":"Function Type","depth":3}]},{"routePath":"/en/configure/app/tools/css-loader","toc":[{"id":"object-type","text":"Object Type","depth":3},{"id":"function-type","text":"Function Type","depth":3}]},{"routePath":"/en/configure/app/tools/dev-server","toc":[{"id":"options","text":"Options","depth":3},{"id":"after","text":"after","depth":4},{"id":"before","text":"before","depth":4},{"id":"client","text":"client","depth":4},{"id":"devmiddleware","text":"devMiddleware","depth":4},{"id":"headers","text":"headers","depth":4},{"id":"historyapifallback","text":"historyApiFallback","depth":4},{"id":"hot","text":"hot","depth":4},{"id":"https","text":"https","depth":4},{"id":"livereload","text":"liveReload","depth":4},{"id":"setupmiddlewares","text":"setupMiddlewares","depth":4},{"id":"proxy","text":"proxy","depth":4},{"id":"watch","text":"watch","depth":4}]},{"routePath":"/en/configure/app/tools/esbuild","toc":[{"id":"introduction","text":"Introduction","depth":2},{"id":"configuration","text":"Configuration","depth":2}]},{"routePath":"/en/configure/app/tools/html-plugin","toc":[{"id":"object-type","text":"Object Type","depth":3},{"id":"function-type","text":"Function Type","depth":3},{"id":"boolean-type","text":"Boolean Type","depth":3}]},{"routePath":"/en/configure/app/tools/inspector","toc":[{"id":"object-type","text":"Object Type","depth":3},{"id":"function-type","text":"Function Type","depth":3}]},{"routePath":"/en/configure/app/tools/jest","toc":[]},{"routePath":"/en/configure/app/tools/less","toc":[{"id":"object-type","text":"Object Type","depth":3},{"id":"function-type","text":"Function Type","depth":3},{"id":"util-function","text":"Util Function","depth":3},{"id":"addexcludes","text":"addExcludes","depth":4}]},{"routePath":"/en/configure/app/tools/minify-css","toc":[{"id":"object-type","text":"Object Type","depth":3},{"id":"function-type","text":"Function Type","depth":3}]},{"routePath":"/en/configure/app/tools/postcss","toc":[{"id":"function-type","text":"Function Type","depth":3},{"id":"object-type","text":"Object Type","depth":3},{"id":"util-functions","text":"Util Functions","depth":3},{"id":"addplugins","text":"addPlugins","depth":4}]},{"routePath":"/en/configure/app/tools/pug","toc":[{"id":"boolean-type","text":"Boolean Type","depth":3},{"id":"object-type","text":"Object Type","depth":3},{"id":"function-type","text":"Function Type","depth":3}]},{"routePath":"/en/configure/app/tools/sass","toc":[{"id":"object-type","text":"Object Type","depth":3},{"id":"function-type","text":"Function Type","depth":3},{"id":"utility-function","text":"Utility Function","depth":3},{"id":"addexcludes","text":"addExcludes","depth":4}]},{"routePath":"/en/configure/app/tools/style-loader","toc":[{"id":"object-type","text":"Object Type","depth":3},{"id":"function-type","text":"Function Type","depth":3}]},{"routePath":"/en/configure/app/tools/styled-components","toc":[]},{"routePath":"/en/configure/app/tools/swc","toc":[{"id":"introduction","text":"Introduction","depth":2},{"id":"install","text":"Install","depth":2},{"id":"config","text":"Config","depth":2}]},{"routePath":"/en/configure/app/tools/tailwindcss","toc":[{"id":"limitations","text":"Limitations","depth":3}]},{"routePath":"/en/configure/app/tools/terser","toc":[{"id":"object-type","text":"Object Type","depth":3},{"id":"function-type","text":"Function Type","depth":3}]},{"routePath":"/en/configure/app/tools/ts-checker","toc":[{"id":"object-type","text":"Object Type","depth":3},{"id":"function-type","text":"Function Type","depth":3}]},{"routePath":"/en/configure/app/tools/ts-loader","toc":[{"id":"object-type","text":"Object Type","depth":3},{"id":"function-type","text":"Function Type","depth":3},{"id":"util-functions","text":"Util Functions","depth":3},{"id":"addincludes","text":"addIncludes","depth":4},{"id":"addexcludes","text":"addExcludes","depth":4}]},{"routePath":"/en/configure/app/tools/webpack-chain","toc":[{"id":"utils","text":"Utils","depth":3},{"id":"env","text":"env","depth":4},{"id":"isprod","text":"isProd","depth":4},{"id":"target","text":"target","depth":4},{"id":"isserver","text":"isServer","depth":4},{"id":"iswebworker","text":"isWebWorker","depth":4},{"id":"webpack","text":"webpack","depth":4},{"id":"htmlwebpackplugin","text":"HtmlWebpackPlugin","depth":3},{"id":"chain_id","text":"CHAIN_ID","depth":4},{"id":"chain_idone_of","text":"CHAIN_ID.ONE_OF","depth":3},{"id":"chain_iduse","text":"CHAIN_ID.USE","depth":3},{"id":"chain_idplugin","text":"CHAIN_ID.PLUGIN","depth":3},{"id":"chain_idminimizer","text":"CHAIN_ID.MINIMIZER","depth":3},{"id":"examples","text":"Examples","depth":3},{"id":"addmodifydelete-loader","text":"Add/Modify/Delete loader","depth":4},{"id":"addmodifydelete-plugin","text":"Add/Modify/Delete plugin","depth":4}]},{"routePath":"/en/configure/app/tools/webpack","toc":[{"id":"object-type","text":"Object Type","depth":3},{"id":"function-type","text":"Function Type","depth":3},{"id":"utils","text":"Utils","depth":3},{"id":"env","text":"env","depth":4},{"id":"isprod","text":"isProd","depth":4},{"id":"target","text":"target","depth":4},{"id":"isserver","text":"isServer","depth":4},{"id":"iswebworker","text":"isWebWorker","depth":4},{"id":"webpack","text":"webpack","depth":4},{"id":"htmlwebpackplugin","text":"HtmlWebpackPlugin","depth":3},{"id":"addrules","text":"addRules","depth":3},{"id":"prependplugins","text":"prependPlugins","depth":3},{"id":"appendplugins","text":"appendPlugins","depth":3},{"id":"removeplugin","text":"removePlugin","depth":3}]},{"routePath":"/en/configure/app/usage","toc":[{"id":"configure-in-the-configuration-file","text":"Configure in the configuration file","depth":2},{"id":"modernconfigjs","text":"modern.config.js","depth":3},{"id":"modernconfigts-recommended","text":"modern.config.ts (recommended)","depth":3},{"id":"export-configuration-function","text":"Export Configuration Function","depth":3},{"id":"export-async-function","text":"Export Async Function","depth":3},{"id":"specify-the-configuration-file","text":"Specify the Configuration File","depth":3},{"id":"configure-in-packagejson-not-recommended","text":"Configure in package.json (not recommended)","depth":2},{"id":"note","text":"Note","depth":3},{"id":"debug-configuration-locally","text":"Debug configuration locally","depth":2},{"id":"example","text":"Example","depth":3},{"id":"note-1","text":"Note","depth":3}]},{"routePath":"/en/guides/advanced-features/bff/bff-proxy","toc":[]},{"routePath":"/en/guides/advanced-features/bff/frameworks","toc":[{"id":"function-writing","text":"Function Writing","depth":2},{"id":"framework-writing","text":"Framework Writing","depth":2},{"id":"express","text":"Express","depth":3},{"id":"koa","text":"Koa","depth":3}]},{"routePath":"/en/guides/advanced-features/bff/function","toc":[{"id":"enable-bff","text":"Enable BFF","depth":2},{"id":"bff-function","text":"BFF Function","depth":2},{"id":"api-routes","text":"API Routes","depth":2},{"id":"default-route","text":"Default Route","depth":3},{"id":"multi-layer-route","text":"Multi-layer Route","depth":3},{"id":"dynamic-route","text":"Dynamic Route","depth":3},{"id":"allow-list","text":"Allow List","depth":3},{"id":"restful-api","text":"RESTful API","depth":2},{"id":"function-named-export","text":"Function Named Export","depth":3},{"id":"function-parameter-rule","text":"Function Parameter Rule","depth":3},{"id":"dynamic-path","text":"Dynamic Path","depth":4},{"id":"requestoption","text":"RequestOption","depth":4}]},{"routePath":"/en/guides/advanced-features/bff/","toc":[]},{"routePath":"/en/guides/advanced-features/bff/type","toc":[{"id":"function-writing","text":"Function Writing","depth":2},{"id":"framework-writing","text":"Framework Writing","depth":2}]},{"routePath":"/en/guides/advanced-features/code-split","toc":[{"id":"import","text":"import","depth":2},{"id":"reactlazy","text":"React.lazy","depth":2},{"id":"loadable","text":"loadable","depth":2}]},{"routePath":"/en/guides/advanced-features/compatibility","toc":[{"id":"browserslist","text":"Browserslist","depth":2},{"id":"polyfill","text":"Polyfill","depth":2},{"id":"polyfill-at-compile","text":"Polyfill At Compile","depth":3},{"id":"polyfill-at-runtime","text":"Polyfill At Runtime","depth":3}]},{"routePath":"/en/guides/advanced-features/eslint","toc":[{"id":"q-how-to-deal-with-lint","text":"Q: How To Deal With Lint","depth":2},{"id":"automatic-fix","text":"Automatic Fix","depth":3},{"id":"batch-automatic-fix","text":"Batch Automatic Fix","depth":3},{"id":"manual-fix","text":"Manual Fix","depth":3},{"id":"声明例外情况","text":"声明例外情况","depth":3},{"id":"q-如何自定义-eslint-规则","text":"Q: 如何自定义 ESLint 规则","depth":2},{"id":"仓库根目录下-packagejson-里的-eslintconfig-字段","text":"仓库根目录下 package.json 里的 \"eslintConfig\" 字段","depth":3},{"id":"srceslintrcjs-文件","text":"src/.eslintrc.js 文件","depth":3},{"id":"packagejson-里的-eslintignore-字段","text":"package.json 里的 eslintIgnore 字段","depth":3},{"id":"q-如何升级-eslint-插件的版本","text":"Q: 如何升级 ESLint 插件的版本","depth":2},{"id":"q-webstorm-有时候会报-eslint-错误","text":"Q: WebStorm 有时候会报 ESLint 错误","depth":2}]},{"routePath":"/en/guides/advanced-features/","toc":[]},{"routePath":"/en/guides/advanced-features/low-level","toc":[{"id":"usage","text":"Usage","depth":2},{"id":"low-level-configuration-details","text":"Low-level Configuration Details","depth":2}]},{"routePath":"/en/guides/advanced-features/ssg","toc":[{"id":"conventional-routing","text":"Conventional Routing","depth":3},{"id":"self-controlled-routing","text":"Self-controlled Routing","depth":3}]},{"routePath":"/en/guides/advanced-features/ssr","toc":[{"id":"ssr-data-fetch","text":"SSR Data Fetch","depth":2},{"id":"keep-rendering-consistent","text":"Keep Rendering Consistent","depth":2},{"id":"concerned-memory-leaks","text":"Concerned Memory Leaks","depth":2},{"id":"crop-ssr-data","text":"Crop SSR Data","depth":2},{"id":"serverless-pre-render","text":"Serverless Pre-render","depth":2},{"id":"treeshaking","text":"Treeshaking","depth":2},{"id":"use-environment-variables","text":"Use Environment Variables","depth":3},{"id":"use-file-suffix","text":"Use File Suffix","depth":3},{"id":"independent-file","text":"Independent File","depth":3},{"id":"remote-request","text":"Remote Request","depth":2},{"id":"stream-ssr","text":"Stream SSR","depth":2}]},{"routePath":"/en/guides/advanced-features/testing","toc":[{"id":"test-file","text":"Test file","depth":2},{"id":"usage","text":"Usage","depth":2},{"id":"transform","text":"transform","depth":2}]},{"routePath":"/en/guides/advanced-features/web-server","toc":[{"id":"创建自定义-web-server","text":"创建自定义 Web Server","depth":2},{"id":"使用-api-扩展-web-server","text":"使用 API 扩展 Web Server","depth":2},{"id":"hook","text":"Hook","depth":3},{"id":"middleware","text":"Middleware","depth":3},{"id":"完全自定义的-web-server","text":"完全自定义的 Web Server","depth":2}]},{"routePath":"/en/guides/basic-features/alias","toc":[]},{"routePath":"/en/guides/basic-features/builder","toc":[{"id":"build-architecture","text":"Build Architecture","depth":2},{"id":"builder-documentation","text":"Builder Documentation","depth":2},{"id":"builder-config","text":"Builder Config","depth":2},{"id":"building-features","text":"Building Features","depth":2}]},{"routePath":"/en/guides/basic-features/css/css-in-js","toc":[]},{"routePath":"/en/guides/basic-features/css/css-modules","toc":[{"id":"file-suffix-form-css-modules","text":"File Suffix Form CSS Modules","depth":2},{"id":"global-css-modules","text":"Global CSS Modules","depth":2}]},{"routePath":"/en/guides/basic-features/css/less-sass","toc":[{"id":"customized-configuration","text":"Customized Configuration","depth":2}]},{"routePath":"/en/guides/basic-features/css/postcss","toc":[]},{"routePath":"/en/guides/basic-features/css/tailwindcss","toc":[{"id":"tailwind-css-version","text":"Tailwind CSS version","depth":2},{"id":"browser-compatibility","text":"Browser Compatibility","depth":3},{"id":"theme-config","text":"Theme config","depth":2}]},{"routePath":"/en/guides/basic-features/data-fetch","toc":[{"id":"data-loaderrecommend","text":"Data loader(recommend)","depth":2},{"id":"basic-example","text":"Basic example","depth":3},{"id":"loader-function","text":"loader function","depth":3},{"id":"request","text":"request","depth":4},{"id":"return-value","text":"Return value","depth":4},{"id":"request-api","text":"Request API","depth":3},{"id":"error-handling","text":"Error handling","depth":3},{"id":"get-data-from-upper-level-components","text":"Get data from upper level components","depth":3},{"id":"wiploading-ui","text":"(WIP)Loading UI","depth":3},{"id":"wrong-usage","text":"Wrong usage","depth":3},{"id":"useloaderold","text":"useLoader(Old)","depth":2},{"id":"route-loader","text":"Route Loader","depth":2}]},{"routePath":"/en/guides/basic-features/env-vars","toc":[{"id":"built-in-environment","text":"Built-in Environment","depth":2},{"id":"node_env","text":"NODE_ENV","depth":3},{"id":"modern_env","text":"MODERN_ENV","depth":3},{"id":"modern_target","text":"MODERN_TARGET","depth":3},{"id":"custom-environment-variables","text":"Custom Environment Variables","depth":2},{"id":"specify-via-shell","text":"Specify via shell","depth":3},{"id":"specify-via-env-file","text":"Specify via .env file","depth":3},{"id":"using-environment-variables","text":"Using Environment Variables","depth":2},{"id":"convention-names","text":"Convention Names","depth":3},{"id":"any-other-names","text":"Any Other Names","depth":3},{"id":"use-global-replacement","text":"Use Global Replacement","depth":2}]},{"routePath":"/en/guides/basic-features/html","toc":[{"id":"jsx-syntax","text":"JSX syntax","depth":2},{"id":"html-component","text":"HTML Component","depth":3},{"id":"template-params","text":"Template Params","depth":3},{"id":"examples","text":"Examples","depth":3},{"id":"html-synxtax","text":"Html Synxtax","depth":2},{"id":"custom-html-fragments","text":"Custom HTML Fragments","depth":3},{"id":"fully-custom-html-templates","text":"Fully Custom HTML Templates","depth":3},{"id":"template-params-1","text":"Template Params","depth":3},{"id":"config-by-entry","text":"Config By Entry","depth":3}]},{"routePath":"/en/guides/basic-features/mock","toc":[{"id":"mock-file","text":"Mock File","depth":2},{"id":"writing-mock-files","text":"Writing Mock Files","depth":2},{"id":"return-random-data","text":"Return Random Data","depth":2},{"id":"delayed-return","text":"Delayed Return","depth":2}]},{"routePath":"/en/guides/basic-features/proxy","toc":[{"id":"local-proxy","text":"Local Proxy","depth":2},{"id":"global-proxy","text":"Global Proxy","depth":2},{"id":"set-proxy-rules","text":"Set Proxy Rules","depth":3},{"id":"use-proxy-dashboard","text":"Use Proxy Dashboard","depth":3},{"id":"bff-proxy","text":"BFF Proxy","depth":2}]},{"routePath":"/en/guides/basic-features/routes","toc":[{"id":"conventional-routing","text":"Conventional routing","depth":2},{"id":"routing-file-convention","text":"Routing file convention","depth":3},{"id":"layout","text":"Layout","depth":4},{"id":"page","text":"Page","depth":4},{"id":"dynamic-routing","text":"Dynamic routing","depth":3},{"id":"catch-all-routing","text":"Catch all routing","depth":3},{"id":"layout-with-no-path","text":"Layout with No Path","depth":3},{"id":"no-layout","text":"No Layout","depth":3},{"id":"wiploading","text":"(WIP)Loading","depth":3},{"id":"errorboundary","text":"ErrorBoundary","depth":3},{"id":"hooks-before-rendering","text":"Hooks before rendering","depth":3},{"id":"runtime-configuration","text":"Runtime Configuration","depth":3},{"id":"self-controlled-routing","text":"Self-controlled routing","depth":2},{"id":"other","text":"Other","depth":2}]},{"routePath":"/en/guides/concept/entries","toc":[{"id":"single-entry-and-multiple-entries","text":"Single Entry and Multiple Entries","depth":2},{"id":"entry-conditions","text":"Entry conditions","depth":2},{"id":"difference-between-entries","text":"Difference between entries","depth":2},{"id":"routes","text":"routes","depth":3},{"id":"app","text":"App","depth":3},{"id":"index","text":"Index","depth":3},{"id":"configuration","text":"configuration","depth":2}]},{"routePath":"/en/guides/get-started/quick-start","toc":[{"id":"environment","text":"Environment","depth":2},{"id":"nodejs","text":"Node.js","depth":3},{"id":"pnpm","text":"pnpm","depth":3},{"id":"installation","text":"Installation","depth":2},{"id":"initialize","text":"Initialize","depth":2},{"id":"development","text":"Development","depth":2},{"id":"configuration","text":"Configuration","depth":2},{"id":"build","text":"Build","depth":2},{"id":"verify","text":"Verify","depth":2},{"id":"deploy","text":"Deploy","depth":2}]},{"routePath":"/en/guides/get-started/upgrade","toc":[{"id":"upgrade-with-command","text":"Upgrade with command","depth":2},{"id":"specify-version-upgrade","text":"Specify version upgrade","depth":2},{"id":"lock-child-dependency","text":"lock child dependency","depth":2},{"id":"pnpm","text":"pnpm","depth":3},{"id":"yarn","text":"Yarn","depth":3},{"id":"npm","text":"Npm","depth":3}]},{"routePath":"/en/guides/topic-detail/framework-plugin/extend","toc":[{"id":"示例","text":"示例","depth":2},{"id":"创建-hook","text":"创建 Hook","depth":3},{"id":"使用-hook","text":"使用 Hook","depth":3}]},{"routePath":"/en/guides/topic-detail/framework-plugin/hook-list","toc":[{"id":"cli","text":"CLI","depth":2},{"id":"config","text":"config","depth":3},{"id":"validateschema","text":"validateSchema","depth":3},{"id":"prepare","text":"prepare","depth":3},{"id":"afterprepare","text":"afterPrepare","depth":3},{"id":"commands","text":"commands","depth":3},{"id":"beforeexit","text":"beforeExit","depth":3},{"id":"beforedev","text":"beforeDev","depth":3},{"id":"afterdev","text":"afterDev","depth":3},{"id":"beforecreatecompiler","text":"beforeCreateCompiler","depth":3},{"id":"aftercreatecompiler","text":"afterCreateCompiler","depth":3},{"id":"beforeprintinstructions","text":"beforePrintInstructions","depth":3},{"id":"beforebuild","text":"beforeBuild","depth":3},{"id":"afterbuild","text":"afterBuild","depth":3},{"id":"modifyentryimports","text":"modifyEntryImports","depth":3},{"id":"modifyentryexport","text":"modifyEntryExport","depth":3},{"id":"modifyentryruntimeplugins","text":"modifyEntryRuntimePlugins","depth":3},{"id":"modifyentryrenderfunction","text":"modifyEntryRenderFunction","depth":3},{"id":"modifyfilesystemroutes","text":"modifyFileSystemRoutes","depth":3},{"id":"modifyserverroutes","text":"modifyServerRoutes","depth":3},{"id":"modifyasyncentry","text":"modifyAsyncEntry","depth":3},{"id":"htmlpartials","text":"htmlPartials","depth":3},{"id":"server","text":"Server","depth":2},{"id":"create","text":"create","depth":3},{"id":"preparewebserver","text":"prepareWebServer","depth":3},{"id":"prepareapiserver","text":"prepareApiServer","depth":3},{"id":"runtime","text":"Runtime","depth":2},{"id":"init","text":"init","depth":3},{"id":"hoc","text":"hoc","depth":3},{"id":"provide","text":"provide","depth":3},{"id":"client","text":"client","depth":3},{"id":"server-1","text":"server","depth":3}]},{"routePath":"/en/guides/topic-detail/framework-plugin/hook","toc":[{"id":"基础工作方式","text":"基础工作方式","depth":2},{"id":"不同-hook-模型的区别","text":"不同 Hook 模型的区别","depth":2},{"id":"pipeline","text":"Pipeline","depth":3},{"id":"waterfall","text":"Waterfall","depth":3},{"id":"workflow","text":"Workflow","depth":3},{"id":"hook-模型对比","text":"Hook 模型对比","depth":2}]},{"routePath":"/en/guides/topic-detail/framework-plugin/implement","toc":[{"id":"实现插件","text":"实现插件","depth":2},{"id":"插件类型","text":"插件类型","depth":3},{"id":"插件配置项","text":"插件配置项","depth":3},{"id":"插件-api","text":"插件 API","depth":3},{"id":"异步-setup","text":"异步 setup","depth":3},{"id":"添加插件","text":"添加插件","depth":2},{"id":"开发本地插件","text":"开发本地插件","depth":3},{"id":"在-npm-上发布插件","text":"在 npm 上发布插件","depth":3}]},{"routePath":"/en/guides/topic-detail/framework-plugin/introduction","toc":[{"id":"modernjs-插件系统","text":"Modern.js 插件系统","depth":2},{"id":"插件可以做什么","text":"插件可以做什么","depth":2}]},{"routePath":"/en/guides/topic-detail/framework-plugin/lifecycle","toc":[]},{"routePath":"/en/guides/topic-detail/framework-plugin/plugin-api","toc":[{"id":"api","text":"API","depth":2},{"id":"useconfigcontext","text":"useConfigContext","depth":3},{"id":"useappcontext","text":"useAppContext","depth":3},{"id":"useresolvedconfigcontext","text":"useResolvedConfigContext","depth":3},{"id":"usehookrunners","text":"useHookRunners","depth":3}]},{"routePath":"/en/guides/topic-detail/framework-plugin/relationship","toc":[{"id":"插件排序","text":"插件排序","depth":2},{"id":"前置插件","text":"前置插件","depth":3},{"id":"后置插件","text":"后置插件","depth":3},{"id":"互斥插件","text":"互斥插件","depth":2},{"id":"必需插件","text":"必需插件","depth":2},{"id":"注册插件","text":"注册插件","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/codesmith/api/app","toc":[{"id":"use","text":"Use","depth":2},{"id":"api","text":"API","depth":2},{"id":"checkenvironment","text":"checkEnvironment","depth":3},{"id":"runinstall","text":"runInstall","depth":3},{"id":"rungitandinstall","text":"runGitAndInstall","depth":3},{"id":"forgetemplate","text":"forgeTemplate","depth":3},{"id":"showsuccessinfo","text":"showSuccessInfo","depth":3},{"id":"runsubgenerator","text":"runSubGenerator","depth":3},{"id":"getinputbyschema","text":"getInputBySchema","depth":3},{"id":"getinputbyschemafunc","text":"getInputBySchemaFunc","depth":3}]},{"routePath":"/en/guides/topic-detail/generator/codesmith/api/ejs","toc":[{"id":"use","text":"Use","depth":2},{"id":"api","text":"API","depth":2},{"id":"rendertemplate","text":"renderTemplate","depth":3},{"id":"rendertemplatedir","text":"renderTemplateDir","depth":3}]},{"routePath":"/en/guides/topic-detail/generator/codesmith/api/fs","toc":[{"id":"use","text":"Use","depth":2},{"id":"api","text":"API","depth":2},{"id":"renderfile","text":"renderFile","depth":3},{"id":"renderdir","text":"renderDir","depth":3}]},{"routePath":"/en/guides/topic-detail/generator/codesmith/api/git","toc":[{"id":"use","text":"Use","depth":2},{"id":"api","text":"API","depth":2},{"id":"isingitrepo","text":"isInGitRepo","depth":3},{"id":"initgitrepo","text":"initGitRepo","depth":3},{"id":"addandcommit","text":"addAndCommit","depth":3}]},{"routePath":"/en/guides/topic-detail/generator/codesmith/api/handlebars","toc":[{"id":"use","text":"Use","depth":2},{"id":"api","text":"API","depth":2},{"id":"rendertemplate","text":"renderTemplate","depth":3},{"id":"rendertemplatedir","text":"renderTemplateDir","depth":3}]},{"routePath":"/en/guides/topic-detail/generator/codesmith/api/json","toc":[{"id":"use","text":"Use","depth":2},{"id":"api","text":"API","depth":2},{"id":"get","text":"get","depth":3},{"id":"extend","text":"extend","depth":3},{"id":"update","text":"update","depth":3}]},{"routePath":"/en/guides/topic-detail/generator/codesmith/api/npm","toc":[{"id":"use","text":"Use","depth":2},{"id":"api","text":"API","depth":2},{"id":"npminstall","text":"npmInstall","depth":3},{"id":"yarninstall","text":"yarnInstall","depth":3},{"id":"pnpminstall","text":"pnpmInstall","depth":3}]},{"routePath":"/en/guides/topic-detail/generator/codesmith/develop","toc":[{"id":"create-project","text":"Create project","depth":2},{"id":"add-template-file","text":"Add template file","depth":2},{"id":"develop-generator-core-logic","text":"Develop generator core logic","depth":2},{"id":"test-microgenerator","text":"Test microgenerator","depth":2},{"id":"run-the-microgenerator","text":"Run the microgenerator","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/codesmith/introduce","toc":[{"id":"core-concept","text":"Core concept","depth":2},{"id":"generatorcore","text":"GeneratorCore","depth":3},{"id":"materials","text":"Materials","depth":3}]},{"routePath":"/en/guides/topic-detail/generator/codesmith/run-in-js","toc":[{"id":"install-codesmith-dependency","text":"install codesmith dependency","depth":2},{"id":"create-codesmith-instance","text":"Create codesmith instance","depth":2},{"id":"call-the-forge-method-to-execute-the-generator","text":"Call the forge method to execute the generator","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/codesmith/structure","toc":[{"id":"packagejson","text":"package.json","depth":2},{"id":"entry-file","text":"Entry file","depth":2},{"id":"context","text":"context","depth":3},{"id":"generator","text":"generator","depth":3},{"id":"template-file","text":"Template File","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/config/app","toc":[{"id":"project-creation","text":"Project creation","depth":2},{"id":"new-command","text":"New Command","depth":2},{"id":"actiontype","text":"actionType","depth":3},{"id":"element","text":"element","depth":3},{"id":"name","text":"name","depth":4},{"id":"function","text":"function","depth":3},{"id":"bff-parameters","text":"BFF parameters","depth":4}]},{"routePath":"/en/guides/topic-detail/generator/config/common","toc":[{"id":"solution","text":"solution","depth":3},{"id":"scenes","text":"scenes","depth":3},{"id":"language","text":"language","depth":3},{"id":"packagemanager","text":"packageManager","depth":3},{"id":"other-configurations","text":"Other configurations","depth":2},{"id":"noneedinstall","text":"noNeedInstall","depth":3},{"id":"noneedgit","text":"noNeedGit","depth":3},{"id":"successinfo","text":"successInfo","depth":3},{"id":"ismonoreposubproject","text":"isMonorepoSubProject","depth":3},{"id":"istest","text":"isTest","depth":3},{"id":"ispublic","text":"isPublic","depth":3}]},{"routePath":"/en/guides/topic-detail/generator/config/module","toc":[{"id":"project-creation","text":"Project creation","depth":2},{"id":"packagename","text":"packageName","depth":3},{"id":"new-command","text":"New Command","depth":2},{"id":"actiontype","text":"actionType","depth":3},{"id":"function","text":"function","depth":3}]},{"routePath":"/en/guides/topic-detail/generator/config/monorepo","toc":[{"id":"create-subproject","text":"Create subproject","depth":2},{"id":"solution","text":"solution","depth":3},{"id":"packagename","text":"packageName","depth":3},{"id":"packagepath","text":"packagePath","depth":3}]},{"routePath":"/en/guides/topic-detail/generator/plugin/abstract","toc":[]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/file/addFile","toc":[{"id":"type","text":"type","depth":2},{"id":"file","text":"file","depth":2},{"id":"template","text":"template","depth":2},{"id":"templatefile","text":"templateFile","depth":2},{"id":"force","text":"force","depth":2},{"id":"data","text":"data","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/file/addHelper","toc":[{"id":"name","text":"name","depth":2},{"id":"fn","text":"fn","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/file/addManyFile","toc":[{"id":"type","text":"type","depth":2},{"id":"destination","text":"destination","depth":2},{"id":"templatefiles","text":"templateFiles","depth":2},{"id":"templatebase","text":"templateBase","depth":2},{"id":"filenamefunc","text":"fileNameFunc","depth":2},{"id":"data","text":"data","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/file/addPartial","toc":[{"id":"name","text":"name","depth":2},{"id":"str","text":"str","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/file/introduce","toc":[{"id":"file-type","text":"File type","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/file/rmDir","toc":[{"id":"dirname","text":"dirName","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/file/rmFile","toc":[{"id":"filename","text":"fileName","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/file/updateJSONFile","toc":[{"id":"filename","text":"fileName","depth":2},{"id":"updateinfo","text":"updateInfo","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/file/updateModernConfig","toc":[{"id":"updateinfo","text":"updateInfo","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/file/updateTextRawFile","toc":[{"id":"filename","text":"fileName","depth":2},{"id":"update","text":"update","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/git/gitAddAndCommit","toc":[{"id":"commitmessage","text":"commitMessage","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/git/initGitRepo","toc":[]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/git/isInGitRepo","toc":[]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/hook/afterForged","toc":[{"id":"func","text":"func","depth":2},{"id":"api","text":"api","depth":3},{"id":"inputdata","text":"inputData","depth":3}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/hook/onForged","toc":[{"id":"func","text":"func","depth":2},{"id":"api","text":"api","depth":3},{"id":"inputdata","text":"inputData","depth":3}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/info/isFileExit","toc":[{"id":"filename","text":"fileName","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/info/locale","toc":[]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/info/readDir","toc":[{"id":"dir","text":"dir","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/input/addInputAfter","toc":[{"id":"key","text":"key","depth":2},{"id":"input","text":"input","depth":2},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/input/addInputBefore","toc":[{"id":"key","text":"key","depth":2},{"id":"input","text":"input","depth":2},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/input/setInput","toc":[{"id":"key","text":"key","depth":2},{"id":"filed","text":"filed","depth":2},{"id":"value","text":"value","depth":2},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/input/setInputValue","toc":[{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/input/type","toc":[{"id":"input","text":"Input","depth":2},{"id":"type","text":"type","depth":3},{"id":"name","text":"name","depth":3},{"id":"title","text":"title","depth":3},{"id":"default","text":"default","depth":3},{"id":"enum","text":"enum","depth":3},{"id":"x-validate","text":"x-validate","depth":3},{"id":"x-reactions","text":"x-reactions","depth":3},{"id":"properties","text":"properties","depth":3},{"id":"example","text":"Example","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/introduce","toc":[{"id":"generator-plugin-composition","text":"Generator plugin composition","depth":2},{"id":"classification","text":"Classification","depth":2},{"id":"type-definition","text":"Type definition","depth":3},{"id":"extended-engineering","text":"Extended engineering","depth":4},{"id":"create-engineering-scenes","text":"Create engineering scenes","depth":4},{"id":"custom-type","text":"Custom type","depth":3}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/new/createElement","toc":[{"id":"element","text":"element","depth":2},{"id":"params","text":"params","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/new/createSubProject","toc":[{"id":"solution","text":"solution","depth":2},{"id":"params","text":"params","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/new/enableFunc","toc":[{"id":"func","text":"func","depth":2},{"id":"params","text":"params","depth":2}]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/new/introduce","toc":[]},{"routePath":"/en/guides/topic-detail/generator/plugin/api/npm/install","toc":[]},{"routePath":"/en/guides/topic-detail/generator/plugin/develop","toc":[{"id":"create-project","text":"Create project","depth":2},{"id":"extension-type","text":"Extension type","depth":3},{"id":"customized-type","text":"Customized type","depth":3},{"id":"develop-plugin-logic","text":"Develop plugin logic","depth":2},{"id":"customize-input","text":"Customize input","depth":3},{"id":"onforged","text":"onForged","depth":3},{"id":"afterforged","text":"afterForged","depth":3}]},{"routePath":"/en/guides/topic-detail/generator/plugin/use","toc":[{"id":"classification","text":"Classification","depth":2},{"id":"type-definition","text":"Type definition","depth":3},{"id":"extended-engineering","text":"Extended engineering","depth":4},{"id":"create-engineering-scenes","text":"Create engineering scenes","depth":4},{"id":"execution-timing","text":"Execution timing","depth":3},{"id":"extended-engineering-1","text":"Extended engineering","depth":4},{"id":"create-engineering-scenes-1","text":"Create engineering scenes","depth":4}]},{"routePath":"/en/guides/topic-detail/generator/project","toc":[{"id":"use","text":"Use","depth":2},{"id":"params","text":"Params","depth":2},{"id":"projectdir","text":"[projectDir]","depth":3},{"id":"--version","text":"--version","depth":3},{"id":"--lang","text":"--lang","depth":3},{"id":"-c---config","text":"-c, --config","depth":3},{"id":"--no-need-install","text":"--no-need-install","depth":3},{"id":"--dist-tag-disttag","text":"--dist-tag <distTag>","depth":3},{"id":"--registry-registry","text":"--registry <registry/>","depth":3},{"id":"--debug","text":"--debug","depth":3},{"id":"--mwa","text":"--mwa","depth":3},{"id":"--module","text":"--module","depth":3},{"id":"--monorepo","text":"--monorepo","depth":3},{"id":"--plugin-plugin","text":"--plugin <plugin>","depth":3},{"id":"--generator-generator","text":"--generator <generator>","depth":3},{"id":"--packages-packages","text":"--packages <packages>","depth":3}]},{"routePath":"/en/guides/topic-detail/micro-frontend/c01-introduction","toc":[{"id":"微前端关键词","text":"微前端关键词","depth":2},{"id":"功能简介","text":"功能简介","depth":2}]},{"routePath":"/en/guides/topic-detail/micro-frontend/c02-development","toc":[{"id":"创建应用","text":"创建应用","depth":2},{"id":"创建-main-主应用","text":"创建 main 主应用","depth":3},{"id":"创建-dashboard-子应用","text":"创建 dashboard 子应用","depth":3},{"id":"创建-table-子应用","text":"创建 table 子应用","depth":3},{"id":"添加代码","text":"添加代码","depth":2},{"id":"main-主应用","text":"main 主应用","depth":3},{"id":"dashboard-子应用","text":"dashboard 子应用","depth":3},{"id":"table-子应用","text":"table 子应用","depth":3},{"id":"调试","text":"调试","depth":2},{"id":"常见问题","text":"常见问题","depth":2}]},{"routePath":"/en/guides/topic-detail/micro-frontend/c03-main-app","toc":[{"id":"注册子应用信息","text":"注册子应用信息","depth":2},{"id":"直接注册子应用信息","text":"直接注册子应用信息","depth":3},{"id":"自定义远程应用列表","text":"自定义远程应用列表","depth":3},{"id":"渲染子应用","text":"渲染子应用","depth":2},{"id":"子应用组件","text":"子应用组件","depth":3},{"id":"集中式路由","text":"集中式路由","depth":3},{"id":"两种模式混用","text":"两种模式混用","depth":3},{"id":"添加-loading","text":"添加 loading","depth":3},{"id":"增加错误状态","text":"增加错误状态","depth":4},{"id":"避免-loading-闪退","text":"避免 loading 闪退","depth":4},{"id":"增加超时状态","text":"增加超时状态","depth":4}]},{"routePath":"/en/guides/topic-detail/micro-frontend/c04-communicate","toc":[{"id":"props-通信","text":"props 通信","depth":2},{"id":"channel-通信","text":"channel 通信","depth":2}]},{"routePath":"/en/guides/topic-detail/micro-frontend/c05-mixed-stack","toc":[{"id":"子应用是-modernjs","text":"子应用是 Modern.js","depth":2},{"id":"主应用是-modernjs","text":"主应用是 Modern.js","depth":2}]},{"routePath":"/en/guides/topic-detail/model/auto-actions","toc":[{"id":"原始数据类型","text":"原始数据类型","depth":2},{"id":"数组类型","text":"数组类型","depth":2},{"id":"简单对象类型","text":"简单对象类型","depth":2}]},{"routePath":"/en/guides/topic-detail/model/computed-state","toc":[{"id":"只依赖自身的-state","text":"只依赖自身的 State","depth":2},{"id":"依赖其他-model-的-state","text":"依赖其他 Model 的 State","depth":2},{"id":"函数类型的衍生状态","text":"函数类型的衍生状态","depth":2}]},{"routePath":"/en/guides/topic-detail/model/define-model","toc":[]},{"routePath":"/en/guides/topic-detail/model/faq","toc":[{"id":"浏览器兼容性","text":"浏览器兼容性","depth":2},{"id":"微前端子应用-model-访问主应用-model","text":"微前端子应用 Model 访问主应用 Model","depth":2}]},{"routePath":"/en/guides/topic-detail/model/manage-effects","toc":[{"id":"副作用对-state-修改","text":"副作用对 State 修改","depth":2},{"id":"副作用不影响-state","text":"副作用不影响 state","depth":2},{"id":"副作用函数返回值","text":"副作用函数返回值","depth":2}]},{"routePath":"/en/guides/topic-detail/model/model-communicate","toc":[{"id":"model-间通信","text":"Model 间通信","depth":2},{"id":"model-内通信","text":"Model 内通信","depth":2}]},{"routePath":"/en/guides/topic-detail/model/performance","toc":[{"id":"model-拆分","text":"Model 拆分","depth":2},{"id":"状态筛选","text":"状态筛选","depth":2},{"id":"衍生状态缓存","text":"衍生状态缓存","depth":2}]},{"routePath":"/en/guides/topic-detail/model/quick-start","toc":[{"id":"核心概念","text":"核心概念","depth":2},{"id":"基本用法","text":"基本用法","depth":2}]},{"routePath":"/en/guides/topic-detail/model/redux-integration","toc":[]},{"routePath":"/en/guides/topic-detail/model/test-model","toc":[]},{"routePath":"/en/guides/topic-detail/model/typescript-best-practice","toc":[{"id":"定义-model-的-state-类型","text":"定义 Model 的 State 类型","depth":2},{"id":"衍生状态的依赖类型","text":"衍生状态的依赖类型","depth":2},{"id":"获取-model-类型信息的-hooks","text":"获取 Model 类型信息的 Hooks","depth":2}]},{"routePath":"/en/guides/topic-detail/model/use-model","toc":[{"id":"在组件内使用","text":"在组件内使用","depth":2},{"id":"作为全局状态使用","text":"作为全局状态使用","depth":3},{"id":"作为静态状态使用","text":"作为静态状态使用","depth":3},{"id":"作为局部状态使用","text":"作为局部状态使用","depth":3},{"id":"在组件外使用","text":"在组件外使用","depth":2}]},{"routePath":"/en/guides/topic-detail/model/use-out-of-modernjs","toc":[]},{"routePath":"/en/guides/troubleshooting/cli","toc":[{"id":"cant-pass-command-line-arguments-correctly-when-using-pnpm","text":"Can't pass command line arguments correctly when using pnpm?","depth":3}]},{"routePath":"/en/","toc":[]},{"routePath":"/en/tutorials/first-app/c01-start","toc":[{"id":"environment-preparation","text":"Environment preparation","depth":2},{"id":"nodejs","text":"Node.js","depth":3},{"id":"pnpm","text":"pnpm","depth":3},{"id":"initialization-project","text":"Initialization project","depth":2},{"id":"debug-project","text":"Debug Project","depth":2},{"id":"modify-the-code","text":"Modify the code","depth":2},{"id":"enable-ssr","text":"Enable SSR","depth":2}]},{"routePath":"/en/tutorials/first-app/c02-component","toc":[]},{"routePath":"/en/tutorials/first-app/c03-css","toc":[{"id":"js-components-using-css","text":"JS components using CSS","depth":2},{"id":"utility","text":"Utility","depth":2},{"id":"customized-utility-class","text":"Customized Utility Class","depth":2}]},{"routePath":"/en/tutorials/first-app/c04-routes","toc":[]},{"routePath":"/en/tutorials/first-app/c05-loader","toc":[]},{"routePath":"/en/tutorials/first-app/c06-model","toc":[{"id":"model-implementation","text":"Model implementation","depth":2},{"id":"use-model","text":"Use Model","depth":2}]},{"routePath":"/en/tutorials/first-app/c07-container","toc":[{"id":"use-the-full-model","text":"Use the full Model","depth":2},{"id":"withdraw-container-components","text":"Withdraw container components","depth":2}]},{"routePath":"/en/tutorials/first-app/c08-entries","toc":[{"id":"new-entry","text":"New entry","depth":2},{"id":"modify-the-configuration-by-entry","text":"Modify the configuration by entry","depth":2},{"id":"next-step","text":"Next step","depth":2}]},{"routePath":"/en/tutorials/foundations/introduction","toc":[{"id":"what-is-modernjs","text":"What is Modern.js","depth":2},{"id":"why-modernjs","text":"Why Modern.js","depth":2},{"id":"next","text":"Next","depth":2}]},{"routePath":"/apis/app/commands/build","toc":[{"id":"分析构建产物体积","text":"分析构建产物体积","depth":2}]},{"routePath":"/apis/app/commands/dev","toc":[{"id":"编译部分页面","text":"编译部分页面","depth":2},{"id":"通过参数指定页面","text":"通过参数指定页面","depth":3}]},{"routePath":"/apis/app/commands/","toc":[]},{"routePath":"/apis/app/commands/inspect","toc":[{"id":"指定环境","text":"指定环境","depth":2},{"id":"完整内容","text":"完整内容","depth":2},{"id":"ssr-构建配置","text":"SSR 构建配置","depth":2}]},{"routePath":"/apis/app/commands/lint","toc":[]},{"routePath":"/apis/app/commands/new","toc":[{"id":"添加入口","text":"添加入口","depth":3},{"id":"启用可选功能","text":"启用可选功能","depth":3}]},{"routePath":"/apis/app/commands/serve","toc":[]},{"routePath":"/apis/app/commands/test","toc":[]},{"routePath":"/apis/app/commands/upgrade","toc":[]},{"routePath":"/apis/app/hooks/api/framework/lambda","toc":[{"id":"路由规则","text":"路由规则","depth":2},{"id":"默认路由","text":"默认路由","depth":3},{"id":"多级路由","text":"多级路由","depth":3},{"id":"动态路由","text":"动态路由","depth":3},{"id":"白名单","text":"白名单","depth":3},{"id":"函数定义","text":"函数定义","depth":2}]},{"routePath":"/apis/app/hooks/api/functions/api","toc":[{"id":"该文件约定路由如下","text":"该文件约定路由如下：","depth":2},{"id":"默认路由","text":"默认路由","depth":3},{"id":"嵌套路由","text":"嵌套路由","depth":3},{"id":"动态路由","text":"动态路由","depth":3},{"id":"白名单","text":"白名单","depth":3},{"id":"函数定义","text":"函数定义","depth":2}]},{"routePath":"/apis/app/hooks/api/functions/app","toc":[]},{"routePath":"/apis/app/hooks/api/functions/common","toc":[]},{"routePath":"/apis/app/hooks/api/test","toc":[]},{"routePath":"/apis/app/hooks/config/html","toc":[]},{"routePath":"/apis/app/hooks/config/icon","toc":[]},{"routePath":"/apis/app/hooks/config/mock","toc":[]},{"routePath":"/apis/app/hooks/config/public","toc":[{"id":"说明","text":"说明","depth":2},{"id":"场景","text":"场景","depth":2},{"id":"代码压缩","text":"代码压缩","depth":2}]},{"routePath":"/apis/app/hooks/config/storybook","toc":[]},{"routePath":"/apis/app/hooks/config/upload","toc":[{"id":"说明","text":"说明","depth":2},{"id":"场景","text":"场景","depth":2},{"id":"代码压缩","text":"代码压缩","depth":2},{"id":"更多用法","text":"更多用法","depth":2}]},{"routePath":"/apis/app/hooks/","toc":[]},{"routePath":"/apis/app/hooks/modern-config","toc":[]},{"routePath":"/apis/app/hooks/server/index_","toc":[]},{"routePath":"/apis/app/hooks/server/test","toc":[]},{"routePath":"/apis/app/hooks/shared","toc":[]},{"routePath":"/apis/app/hooks/src/app","toc":[]},{"routePath":"/apis/app/hooks/src/index_","toc":[]},{"routePath":"/apis/app/hooks/src/pages","toc":[{"id":"动态路由","text":"动态路由","depth":3},{"id":"全局-layout","text":"全局 layout","depth":3},{"id":"部分-layout","text":"部分 layout","depth":3},{"id":"404-路由","text":"404 路由","depth":3}]},{"routePath":"/apis/app/hooks/src/routes","toc":[{"id":"基本示例","text":"基本示例","depth":2},{"id":"动态路由","text":"动态路由","depth":2},{"id":"布局组件","text":"布局组件","depth":2}]},{"routePath":"/apis/app/hooks/src/server","toc":[]},{"routePath":"/apis/app/hooks/src/stories","toc":[]},{"routePath":"/apis/app/hooks/src/test","toc":[]},{"routePath":"/apis/app/runtime/app/define-config","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"函数签名","text":"函数签名","depth":2},{"id":"参数","text":"参数","depth":3},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/apis/app/runtime/bff/hook","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"函数签名","text":"函数签名","depth":2},{"id":"参数","text":"参数","depth":3},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/apis/app/runtime/bff/use-context","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"函数签名","text":"函数签名","depth":2},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/apis/app/runtime/core/bootstrap","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"函数签名","text":"函数签名","depth":2},{"id":"参数","text":"参数","depth":3},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/apis/app/runtime/core/create-app","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"函数签名","text":"函数签名","depth":2},{"id":"参数","text":"参数","depth":3},{"id":"示例","text":"示例","depth":2},{"id":"创建自定义入口","text":"创建自定义入口","depth":3}]},{"routePath":"/apis/app/runtime/core/use-loader","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"函数签名","text":"函数签名","depth":2},{"id":"参数","text":"参数","depth":3},{"id":"返回值","text":"返回值","depth":3},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/apis/app/runtime/core/use-module-apps","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"函数签名","text":"函数签名","depth":2},{"id":"示例","text":"示例","depth":2},{"id":"集中式路由","text":"集中式路由","depth":3},{"id":"加载动画","text":"加载动画","depth":2}]},{"routePath":"/apis/app/runtime/core/use-runtime-context","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"函数签名","text":"函数签名","depth":2},{"id":"返回值","text":"返回值","depth":3},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/apis/app/runtime/","toc":[]},{"routePath":"/apis/app/runtime/model/Provider","toc":[{"id":"函数签名","text":"函数签名","depth":2},{"id":"参数","text":"参数","depth":3},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/apis/app/runtime/model/auto-actions","toc":[{"id":"示例","text":"示例","depth":2},{"id":"基础数据类型","text":"基础数据类型","depth":3},{"id":"数组-array","text":"数组 Array","depth":3},{"id":"简单对象-plainobject","text":"简单对象 PlainObject","depth":3}]},{"routePath":"/apis/app/runtime/model/connect","toc":[{"id":"类型","text":"类型","depth":2},{"id":"参数","text":"参数","depth":2},{"id":"返回值","text":"返回值","depth":2},{"id":"示例","text":"示例","depth":2},{"id":"简单用法","text":"简单用法","depth":3},{"id":"筛选-state-和-actions","text":"筛选 State 和 Actions","depth":3},{"id":"转发组件的-ref","text":"转发组件的 ref","depth":3}]},{"routePath":"/apis/app/runtime/model/create-app","toc":[{"id":"函数签名","text":"函数签名","depth":2},{"id":"参数","text":"参数","depth":3},{"id":"返回值","text":"返回值","depth":3},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/apis/app/runtime/model/create-store","toc":[{"id":"函数签名","text":"函数签名","depth":2},{"id":"参数","text":"参数","depth":3},{"id":"返回值","text":"返回值","depth":3},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/apis/app/runtime/model/handle-effect","toc":[{"id":"函数签名","text":"函数签名","depth":2},{"id":"参数","text":"参数","depth":3},{"id":"返回值","text":"返回值","depth":3}]},{"routePath":"/apis/app/runtime/model/model_","toc":[{"id":"model","text":"model","depth":2},{"id":"define","text":"define","depth":2},{"id":"对象类型","text":"对象类型","depth":3},{"id":"函数类型","text":"函数类型","depth":3},{"id":"参数","text":"参数","depth":3},{"id":"modeldescstate","text":"ModelDesc.state","depth":4},{"id":"modeldescactions","text":"ModelDesc.actions","depth":4},{"id":"modeldesccomputed","text":"ModelDesc.computed","depth":4},{"id":"modeldesceffects","text":"ModelDesc.effects","depth":4}]},{"routePath":"/apis/app/runtime/model/use-local-model","toc":[{"id":"示例","text":"示例","depth":4}]},{"routePath":"/apis/app/runtime/model/use-model","toc":[{"id":"函数签名","text":"函数签名","depth":2},{"id":"参数","text":"参数","depth":3},{"id":"返回值","text":"返回值","depth":3},{"id":"示例","text":"示例","depth":2},{"id":"基本用法","text":"基本用法","depth":3},{"id":"selector-用法","text":"selector 用法","depth":3}]},{"routePath":"/apis/app/runtime/model/use-static-model","toc":[{"id":"示例","text":"示例","depth":4}]},{"routePath":"/apis/app/runtime/model/use-store","toc":[{"id":"函数签名","text":"函数签名","depth":2},{"id":"返回值","text":"返回值","depth":3}]},{"routePath":"/apis/app/runtime/router/router","toc":[{"id":"hooks","text":"hooks","depth":2},{"id":"usenavigate","text":"useNavigate","depth":3},{"id":"uselocation","text":"useLocation","depth":3},{"id":"useparams","text":"useParams","depth":3},{"id":"组件","text":"组件","depth":2},{"id":"link","text":"Link","depth":3},{"id":"navlink","text":"NavLink","depth":3},{"id":"outlet","text":"Outlet","depth":3},{"id":"route","text":"Route","depth":3},{"id":"更多-api","text":"更多 API","depth":2}]},{"routePath":"/apis/app/runtime/ssr/no-ssr","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"示例","text":"示例","depth":2},{"id":"使用场景","text":"使用场景","depth":2}]},{"routePath":"/apis/app/runtime/ssr/pre-render","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"函数签名","text":"函数签名","depth":2},{"id":"参数","text":"参数","depth":3},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/apis/app/runtime/testing/act","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"函数签名","text":"函数签名","depth":2},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/apis/app/runtime/testing/cleanup","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"函数签名","text":"函数签名","depth":2},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/apis/app/runtime/testing/render","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"函数签名","text":"函数签名","depth":2},{"id":"参数","text":"参数","depth":3},{"id":"返回值","text":"返回值","depth":3},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/apis/app/runtime/testing/renderApp","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"函数签名","text":"函数签名","depth":2},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/apis/app/runtime/utility/css-in-js","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"函数签名","text":"函数签名","depth":2},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/apis/app/runtime/utility/head","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"示例","text":"示例","depth":2},{"id":"更多用法","text":"更多用法","depth":2}]},{"routePath":"/apis/app/runtime/utility/loadable","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"函数签名","text":"函数签名","depth":2},{"id":"参数","text":"参数","depth":3},{"id":"loadfn","text":"loadFn","depth":4},{"id":"optionsresolvecomponent","text":"options.resolveComponent","depth":4},{"id":"optionsfallback","text":"options.fallback","depth":4},{"id":"optionsssr","text":"options.ssr","depth":4},{"id":"返回值","text":"返回值","depth":3},{"id":"loadablecomponent","text":"LoadableComponent","depth":4}]},{"routePath":"/apis/app/runtime/web-server/hook","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"函数签名","text":"函数签名","depth":2},{"id":"参数","text":"参数","depth":3},{"id":"示例","text":"示例","depth":2},{"id":"redirect","text":"Redirect","depth":3},{"id":"rewrite","text":"Rewrite","depth":3},{"id":"html-内容注入","text":"HTML 内容注入","depth":3}]},{"routePath":"/apis/app/runtime/web-server/middleware","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"函数签名","text":"函数签名","depth":2},{"id":"参数","text":"参数","depth":3},{"id":"示例","text":"示例","depth":2},{"id":"服务端耗时打点","text":"服务端耗时打点","depth":3},{"id":"注入服务端工具--数据","text":"注入服务端工具 & 数据","depth":3}]},{"routePath":"/apis/monorepo/commands/bump","toc":[]},{"routePath":"/apis/monorepo/commands/change","toc":[]},{"routePath":"/apis/monorepo/commands/clear","toc":[]},{"routePath":"/apis/monorepo/commands/deploy","toc":[]},{"routePath":"/apis/monorepo/commands/gen-release-note","toc":[]},{"routePath":"/apis/monorepo/commands/","toc":[]},{"routePath":"/apis/monorepo/commands/lint","toc":[]},{"routePath":"/apis/monorepo/commands/new","toc":[]},{"routePath":"/apis/monorepo/commands/pre","toc":[]},{"routePath":"/apis/monorepo/commands/release","toc":[]},{"routePath":"/apis/monorepo/commands/upgrade","toc":[]},{"routePath":"/apis/monorepo/hooks/apps","toc":[]},{"routePath":"/apis/monorepo/hooks/code-workspace","toc":[]},{"routePath":"/apis/monorepo/hooks/examples","toc":[]},{"routePath":"/apis/monorepo/hooks/features","toc":[]},{"routePath":"/apis/monorepo/hooks/","toc":[]},{"routePath":"/apis/monorepo/hooks/packages","toc":[]},{"routePath":"/apis/monorepo/hooks/pnpm-workspace","toc":[]},{"routePath":"/apis/monorepo/hooks/pnpmfile","toc":[]},{"routePath":"/blog/","toc":[]},{"routePath":"/community/","toc":[]},{"routePath":"/configure/app/auto-load-plugin","toc":[{"id":"手动注册插件","text":"手动注册插件","depth":3},{"id":"自动注册插件","text":"自动注册插件","depth":3}]},{"routePath":"/configure/app/bff/prefix","toc":[]},{"routePath":"/configure/app/bff/proxy","toc":[{"id":"常见用法","text":"常见用法","depth":2},{"id":"解决接口跨域问题","text":"解决接口跨域问题","depth":3}]},{"routePath":"/configure/app/builder-plugins","toc":[{"id":"注意事项","text":"注意事项","depth":2},{"id":"何时使用","text":"何时使用","depth":2},{"id":"示例","text":"示例","depth":2},{"id":"使用-npm-上的插件","text":"使用 npm 上的插件","depth":3},{"id":"使用本地插件","text":"使用本地插件","depth":3},{"id":"插件配置项","text":"插件配置项","depth":3}]},{"routePath":"/configure/app/deploy/microFrontend","toc":[{"id":"示例","text":"示例","depth":2},{"id":"配置项","text":"配置项","depth":2},{"id":"enablehtmlentry","text":"enableHtmlEntry","depth":3},{"id":"externalbasiclibrary","text":"externalBasicLibrary","depth":3}]},{"routePath":"/configure/app/dev/asset-prefix","toc":[{"id":"boolean-类型","text":"Boolean 类型","depth":4},{"id":"string-类型","text":"String 类型","depth":4}]},{"routePath":"/configure/app/dev/hmr","toc":[]},{"routePath":"/configure/app/dev/https","toc":[{"id":"自动生成证书","text":"自动生成证书","depth":4},{"id":"手动设置证书","text":"手动设置证书","depth":4}]},{"routePath":"/configure/app/dev/port","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/dev/progress-bar","toc":[]},{"routePath":"/configure/app/dev/proxy","toc":[]},{"routePath":"/configure/app/dev/start-url","toc":[{"id":"端口号占位符","text":"端口号占位符","depth":2}]},{"routePath":"/configure/app/experiments/lazy-compilation","toc":[{"id":"延迟编译异步模块","text":"延迟编译异步模块","depth":3},{"id":"延迟编译入口模块","text":"延迟编译入口模块","depth":3},{"id":"局限性","text":"局限性","depth":3},{"id":"禁用拆包规则","text":"禁用拆包规则","depth":4},{"id":"使用代理","text":"使用代理","depth":4}]},{"routePath":"/configure/app/html/app-icon","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/html/crossorigin","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/html/disable-html-folder","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/html/favicon-by-entries","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/html/favicon","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/html/inject-by-entries","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/html/inject","toc":[{"id":"默认插入位置","text":"默认插入位置","depth":4},{"id":"插入至-body-标签","text":"插入至 body 标签","depth":4}]},{"routePath":"/configure/app/html/meta-by-entries","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/html/meta","toc":[{"id":"字符串用法","text":"字符串用法","depth":4},{"id":"对象用法","text":"对象用法","depth":4},{"id":"移除默认值","text":"移除默认值","depth":3}]},{"routePath":"/configure/app/html/mount-id","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/html/tags-by-entries","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/html/tags","toc":[{"id":"对象形式","text":"对象形式","depth":4},{"id":"函数形式","text":"函数形式","depth":4}]},{"routePath":"/configure/app/html/template-by-entries","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/html/template-parameters-by-entries","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/html/template-parameters","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/html/template","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/html/title-by-entries","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/html/title","toc":[]},{"routePath":"/configure/app/output/asset-prefix","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/output/assets-retry","toc":[{"id":"assetsretrymax","text":"assetsRetry.max","depth":3},{"id":"assetsretrydomain","text":"assetsRetry.domain","depth":3},{"id":"assetsretrytype","text":"assetsRetry.type","depth":3},{"id":"assetsretrytest","text":"assetsRetry.test","depth":3},{"id":"assetsretrycrossorigin","text":"assetsRetry.crossOrigin","depth":3},{"id":"assetsretryonretry","text":"assetsRetry.onRetry","depth":3},{"id":"assetsretryonsuccess","text":"assetsRetry.onSuccess","depth":3},{"id":"assetsretryonfail","text":"assetsRetry.onFail","depth":3}]},{"routePath":"/configure/app/output/charset","toc":[]},{"routePath":"/configure/app/output/clean-dist-path","toc":[]},{"routePath":"/configure/app/output/convert-to-rem","toc":[{"id":"boolean-类型","text":"Boolean 类型","depth":4},{"id":"object-类型","text":"Object 类型","depth":4},{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/output/copy","toc":[]},{"routePath":"/configure/app/output/css-module-local-ident-name","toc":[{"id":"默认值","text":"默认值","depth":3},{"id":"模板字符串","text":"模板字符串","depth":3},{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/output/data-uri-limit","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/output/disable-css-extract","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/output/disable-css-module-extension","toc":[{"id":"示例","text":"示例","depth":3},{"id":"规则","text":"规则","depth":3},{"id":"未开启-disablecssmoduleextension默认","text":"未开启 disableCssModuleExtension（默认）","depth":4},{"id":"开启-disablecssmoduleextension","text":"开启 disableCssModuleExtension","depth":4}]},{"routePath":"/configure/app/output/disable-filename-hash","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/output/disable-inline-runtime-chunk","toc":[]},{"routePath":"/configure/app/output/disable-minimize","toc":[]},{"routePath":"/configure/app/output/disable-node-polyfill","toc":[]},{"routePath":"/configure/app/output/disable-source-map","toc":[]},{"routePath":"/configure/app/output/disable-ts-checker","toc":[{"id":"阻塞编译","text":"阻塞编译","depth":3},{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/output/dist-path","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/output/enable-asset-fallback","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/output/enable-asset-manifest","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/output/enable-css-module-tsdeclaration","toc":[{"id":"example","text":"Example","depth":3}]},{"routePath":"/configure/app/output/enable-inline-scripts","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/output/enable-inline-styles","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/output/enable-latest-decorators","toc":[]},{"routePath":"/configure/app/output/externals","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/output/filename","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/output/legal-comments","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/output/override-browserslist","toc":[{"id":"优先级","text":"优先级","depth":4},{"id":"默认值","text":"默认值","depth":4},{"id":"示例","text":"示例","depth":3},{"id":"根据产物类型设置","text":"根据产物类型设置","depth":4}]},{"routePath":"/configure/app/output/polyfill","toc":[{"id":"配置项","text":"配置项","depth":3},{"id":"entry","text":"entry","depth":4},{"id":"usage","text":"usage","depth":4},{"id":"ua","text":"ua","depth":4},{"id":"off","text":"off","depth":4}]},{"routePath":"/configure/app/output/ssg","toc":[{"id":"示例","text":"示例","depth":2},{"id":"单入口","text":"单入口","depth":3},{"id":"多入口","text":"多入口","depth":3},{"id":"配置路由","text":"配置路由","depth":3},{"id":"阻止默认行为","text":"阻止默认行为","depth":3},{"id":"添加动态路由参数","text":"添加动态路由参数","depth":3}]},{"routePath":"/configure/app/output/svg-default-export","toc":[]},{"routePath":"/configure/app/performance/build-cache","toc":[]},{"routePath":"/configure/app/performance/bundle-analyze","toc":[]},{"routePath":"/configure/app/performance/chunk-split","toc":[{"id":"chunksplitstrategy","text":"chunkSplit.strategy","depth":3},{"id":"chunksplitminsize","text":"chunkSplit.minSize","depth":3},{"id":"chunksplitmaxsize","text":"chunkSplit.maxSize","depth":3},{"id":"chunksplitforcesplitting","text":"chunkSplit.forceSplitting","depth":3},{"id":"chunksplitsplitchunks","text":"chunkSplit.splitChunks","depth":3},{"id":"chunksplitoverride","text":"chunkSplit.override","depth":3}]},{"routePath":"/configure/app/performance/print-file-size","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/performance/profile","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/performance/remove-console","toc":[{"id":"移除所有-console","text":"移除所有 console","depth":4},{"id":"移除特定的-console","text":"移除特定的 console","depth":4}]},{"routePath":"/configure/app/performance/remove-moment-locale","toc":[]},{"routePath":"/configure/app/plugins","toc":[{"id":"注意事项","text":"注意事项","depth":2},{"id":"插件类型","text":"插件类型","depth":2},{"id":"插件执行顺序","text":"插件执行顺序","depth":2},{"id":"示例","text":"示例","depth":2},{"id":"使用-npm-上的插件","text":"使用 npm 上的插件","depth":3},{"id":"使用本地插件","text":"使用本地插件","depth":3},{"id":"插件配置项","text":"插件配置项","depth":3}]},{"routePath":"/configure/app/runtime/intro","toc":[{"id":"配置方式","text":"配置方式","depth":2},{"id":"runtime","text":"runtime","depth":3},{"id":"基本用法","text":"基本用法","depth":4},{"id":"运行时配置","text":"运行时配置","depth":4},{"id":"runtimebyentries","text":"runtimeByEntries","depth":3},{"id":"说明","text":"说明","depth":4}]},{"routePath":"/configure/app/runtime/master-app","toc":[{"id":"示例","text":"示例","depth":2},{"id":"apps","text":"apps","depth":3},{"id":"其他配置项","text":"其他配置项","depth":3}]},{"routePath":"/configure/app/runtime/router","toc":[{"id":"basename","text":"basename","depth":2},{"id":"supporthtml5history","text":"supportHtml5History","depth":2}]},{"routePath":"/configure/app/runtime/state","toc":[{"id":"models","text":"models","depth":2},{"id":"initialstate","text":"initialState","depth":2},{"id":"immer","text":"immer","depth":2},{"id":"effects","text":"effects","depth":2},{"id":"autoactions","text":"autoActions","depth":2},{"id":"devtools","text":"devtools","depth":2}]},{"routePath":"/configure/app/security/check-syntax","toc":[{"id":"示例","text":"示例","depth":3},{"id":"错误日志","text":"错误日志","depth":3},{"id":"解决方法","text":"解决方法","depth":3}]},{"routePath":"/configure/app/security/sri","toc":[{"id":"sri-介绍","text":"SRI 介绍","depth":4},{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/server/base-url","toc":[]},{"routePath":"/configure/app/server/enable-framework-ext","toc":[{"id":"示例","text":"示例","depth":2}]},{"routePath":"/configure/app/server/port","toc":[{"id":"与-devport-的区别","text":"与 dev.port 的区别","depth":3}]},{"routePath":"/configure/app/server/public-routes","toc":[]},{"routePath":"/configure/app/server/routes","toc":[{"id":"自定义访问路由","text":"自定义访问路由","depth":2},{"id":"自定义响应头","text":"自定义响应头","depth":2}]},{"routePath":"/configure/app/server/ssr-by-entries","toc":[]},{"routePath":"/configure/app/server/ssr","toc":[]},{"routePath":"/configure/app/source/alias","toc":[{"id":"object-类型","text":"Object 类型","depth":4},{"id":"function-类型","text":"Function 类型","depth":4}]},{"routePath":"/configure/app/source/compile-js-data-uri","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/source/config-dir","toc":[]},{"routePath":"/configure/app/source/define","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/source/design-system","toc":[{"id":"结构","text":"结构","depth":3},{"id":"screens","text":"Screens","depth":4},{"id":"colors","text":"Colors","depth":4},{"id":"spacing","text":"Spacing","depth":4},{"id":"core-plugins","text":"Core plugins","depth":4},{"id":"自定义默认配置","text":"自定义默认配置","depth":3},{"id":"覆盖默认配置","text":"覆盖默认配置","depth":4},{"id":"扩展默认配置","text":"扩展默认配置","depth":4},{"id":"引用其他值","text":"引用其他值","depth":4},{"id":"禁用整个核心插件","text":"禁用整个核心插件","depth":4},{"id":"添加自己的-key","text":"添加自己的 key","depth":4},{"id":"配置引用","text":"配置引用","depth":3},{"id":"额外的配置","text":"额外的配置","depth":3},{"id":"sourcedesignsystemsupportstyledcomponents","text":"source.designSystem.supportStyledComponents","depth":4}]},{"routePath":"/configure/app/source/disable-default-entries","toc":[]},{"routePath":"/configure/app/source/disable-entry-dirs","toc":[]},{"routePath":"/configure/app/source/enable-async-entry","toc":[{"id":"背景知识","text":"背景知识","depth":2},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/configure/app/source/entries-dir","toc":[]},{"routePath":"/configure/app/source/entries","toc":[{"id":"string-类型","text":"String 类型","depth":2},{"id":"object-类型","text":"Object 类型","depth":2},{"id":"自定义入口和默认入口合并","text":"自定义入口和默认入口合并","depth":2}]},{"routePath":"/configure/app/source/exclude","toc":[]},{"routePath":"/configure/app/source/global-vars","toc":[{"id":"示例","text":"示例","depth":3}]},{"routePath":"/configure/app/source/include","toc":[{"id":"场景示例","text":"场景示例","depth":3},{"id":"monorepo-项目","text":"Monorepo 项目","depth":3},{"id":"注意事项","text":"注意事项","depth":3}]},{"routePath":"/configure/app/source/module-scopes","toc":[{"id":"示例","text":"示例","depth":3},{"id":"array-类型","text":"Array 类型","depth":4},{"id":"function-类型","text":"Function 类型","depth":4}]},{"routePath":"/configure/app/source/pre-entry","toc":[{"id":"添加单个脚本","text":"添加单个脚本","depth":4},{"id":"添加全局样式","text":"添加全局样式","depth":4},{"id":"添加多个脚本","text":"添加多个脚本","depth":4}]},{"routePath":"/configure/app/source/resolve-extension-prefix","toc":[{"id":"示例","text":"示例","depth":3},{"id":"根据产物类型设置","text":"根据产物类型设置","depth":4}]},{"routePath":"/configure/app/source/resolve-main-fields","toc":[{"id":"示例","text":"示例","depth":3},{"id":"根据产物类型设置","text":"根据产物类型设置","depth":4}]},{"routePath":"/configure/app/testing/transformer","toc":[]},{"routePath":"/configure/app/tools/autoprefixer","toc":[{"id":"object-类型","text":"Object 类型","depth":3},{"id":"function-类型","text":"Function 类型","depth":3}]},{"routePath":"/configure/app/tools/babel","toc":[{"id":"function-类型","text":"Function 类型","depth":3},{"id":"object-类型","text":"Object 类型","depth":3},{"id":"工具函数","text":"工具函数","depth":3},{"id":"addplugins","text":"addPlugins","depth":4},{"id":"addpresets","text":"addPresets","depth":4},{"id":"removeplugins","text":"removePlugins","depth":4},{"id":"removepresets","text":"removePresets","depth":4},{"id":"addincludes","text":"addIncludes","depth":4},{"id":"addexcludes","text":"addExcludes","depth":4},{"id":"modifypresetenvoptions","text":"modifyPresetEnvOptions","depth":4},{"id":"modifypresetreactoptions","text":"modifyPresetReactOptions","depth":4}]},{"routePath":"/configure/app/tools/css-extract","toc":[{"id":"object-类型","text":"Object 类型","depth":3},{"id":"function-类型","text":"Function 类型","depth":3}]},{"routePath":"/configure/app/tools/css-loader","toc":[{"id":"object-类型","text":"Object 类型","depth":3},{"id":"function-类型","text":"Function 类型","depth":3}]},{"routePath":"/configure/app/tools/dev-server","toc":[{"id":"选项","text":"选项","depth":3},{"id":"after","text":"after","depth":4},{"id":"before","text":"before","depth":4},{"id":"client","text":"client","depth":4},{"id":"devmiddleware","text":"devMiddleware","depth":4},{"id":"headers","text":"headers","depth":4},{"id":"historyapifallback","text":"historyApiFallback","depth":4},{"id":"hot","text":"hot","depth":4},{"id":"https","text":"https","depth":4},{"id":"livereload","text":"liveReload","depth":4},{"id":"setupmiddlewares","text":"setupMiddlewares","depth":4},{"id":"proxy","text":"proxy","depth":4},{"id":"watch","text":"watch","depth":4}]},{"routePath":"/configure/app/tools/esbuild","toc":[{"id":"介绍","text":"介绍","depth":2},{"id":"配置项","text":"配置项","depth":2}]},{"routePath":"/configure/app/tools/html-plugin","toc":[{"id":"object-类型","text":"Object 类型","depth":3},{"id":"function-类型","text":"Function 类型","depth":3},{"id":"boolean-类型","text":"Boolean 类型","depth":3}]},{"routePath":"/configure/app/tools/inspector","toc":[{"id":"object-类型","text":"Object 类型","depth":3},{"id":"function-类型","text":"Function 类型","depth":3}]},{"routePath":"/configure/app/tools/jest","toc":[]},{"routePath":"/configure/app/tools/less","toc":[{"id":"object-类型","text":"Object 类型","depth":3},{"id":"function-类型","text":"Function 类型","depth":3},{"id":"工具函数","text":"工具函数","depth":3},{"id":"addexcludes","text":"addExcludes","depth":4}]},{"routePath":"/configure/app/tools/minify-css","toc":[{"id":"object-类型","text":"Object 类型","depth":3},{"id":"function-类型","text":"Function 类型","depth":3}]},{"routePath":"/configure/app/tools/postcss","toc":[{"id":"function-类型","text":"Function 类型","depth":3},{"id":"object-类型","text":"Object 类型","depth":3},{"id":"工具函数","text":"工具函数","depth":3},{"id":"addplugins","text":"addPlugins","depth":4}]},{"routePath":"/configure/app/tools/pug","toc":[{"id":"boolean-类型","text":"Boolean 类型","depth":3},{"id":"object-类型","text":"Object 类型","depth":3},{"id":"function-类型","text":"Function 类型","depth":3}]},{"routePath":"/configure/app/tools/sass","toc":[{"id":"object-类型","text":"Object 类型","depth":3},{"id":"function-类型","text":"Function 类型","depth":3},{"id":"工具函数","text":"工具函数","depth":3},{"id":"addexcludes","text":"addExcludes","depth":4}]},{"routePath":"/configure/app/tools/style-loader","toc":[{"id":"object-类型","text":"Object 类型","depth":3},{"id":"function-类型","text":"Function 类型","depth":3}]},{"routePath":"/configure/app/tools/styled-components","toc":[]},{"routePath":"/configure/app/tools/swc","toc":[{"id":"介绍","text":"介绍","depth":2},{"id":"安装","text":"安装","depth":2},{"id":"配置项","text":"配置项","depth":2}]},{"routePath":"/configure/app/tools/tailwindcss","toc":[{"id":"限制","text":"限制","depth":3}]},{"routePath":"/configure/app/tools/terser","toc":[{"id":"object-类型","text":"Object 类型","depth":3},{"id":"function-类型","text":"Function 类型","depth":3}]},{"routePath":"/configure/app/tools/ts-checker","toc":[{"id":"object-类型","text":"Object 类型","depth":3},{"id":"function-类型","text":"Function 类型","depth":3}]},{"routePath":"/configure/app/tools/ts-loader","toc":[{"id":"object-类型","text":"Object 类型","depth":3},{"id":"function-类型","text":"Function 类型","depth":3},{"id":"工具函数","text":"工具函数","depth":3},{"id":"addincludes","text":"addIncludes","depth":4},{"id":"addexcludes","text":"addExcludes","depth":4}]},{"routePath":"/configure/app/tools/webpack-chain","toc":[{"id":"工具集合","text":"工具集合","depth":3},{"id":"env","text":"env","depth":4},{"id":"isprod","text":"isProd","depth":4},{"id":"target","text":"target","depth":4},{"id":"isserver","text":"isServer","depth":4},{"id":"iswebworker","text":"isWebWorker","depth":4},{"id":"webpack","text":"webpack","depth":4},{"id":"htmlwebpackplugin","text":"HtmlWebpackPlugin","depth":3},{"id":"chain_id","text":"CHAIN_ID","depth":4},{"id":"chain_idone_of","text":"CHAIN_ID.ONE_OF","depth":3},{"id":"chain_iduse","text":"CHAIN_ID.USE","depth":3},{"id":"chain_idplugin","text":"CHAIN_ID.PLUGIN","depth":3},{"id":"chain_idminimizer","text":"CHAIN_ID.MINIMIZER","depth":3},{"id":"常用-webpackchain-使用示例","text":"常用 WebpackChain 使用示例","depth":3},{"id":"新增修改删除-loader","text":"新增/修改/删除 loader","depth":4},{"id":"新增修改删除-plugin","text":"新增/修改/删除 plugin","depth":4}]},{"routePath":"/configure/app/tools/webpack","toc":[{"id":"object-类型","text":"Object 类型","depth":3},{"id":"function-类型","text":"Function 类型","depth":3},{"id":"工具集合","text":"工具集合","depth":3},{"id":"env","text":"env","depth":4},{"id":"isprod","text":"isProd","depth":4},{"id":"target","text":"target","depth":4},{"id":"isserver","text":"isServer","depth":4},{"id":"iswebworker","text":"isWebWorker","depth":4},{"id":"webpack","text":"webpack","depth":4},{"id":"htmlwebpackplugin","text":"HtmlWebpackPlugin","depth":3},{"id":"addrules","text":"addRules","depth":3},{"id":"prependplugins","text":"prependPlugins","depth":3},{"id":"appendplugins","text":"appendPlugins","depth":3},{"id":"removeplugin","text":"removePlugin","depth":3}]},{"routePath":"/configure/app/usage","toc":[{"id":"在配置文件中配置","text":"在配置文件中配置","depth":2},{"id":"modernconfigjs","text":"modern.config.js","depth":3},{"id":"modernconfigts推荐","text":"modern.config.ts（推荐）","depth":3},{"id":"导出配置函数","text":"导出配置函数","depth":3},{"id":"导出异步函数","text":"导出异步函数","depth":3},{"id":"指定配置文件","text":"指定配置文件","depth":3},{"id":"在-packagejson-中配置不推荐","text":"在 package.json 中配置（不推荐）","depth":2},{"id":"注意事项","text":"注意事项","depth":3},{"id":"本地调试配置","text":"本地调试配置","depth":2},{"id":"示例","text":"示例","depth":3},{"id":"注意事项-1","text":"注意事项","depth":3}]},{"routePath":"/guides/advanced-features/bff/bff-proxy","toc":[]},{"routePath":"/guides/advanced-features/bff/frameworks","toc":[{"id":"函数写法","text":"函数写法","depth":2},{"id":"框架写法","text":"框架写法","depth":2},{"id":"express","text":"Express","depth":3},{"id":"koa","text":"Koa","depth":3}]},{"routePath":"/guides/advanced-features/bff/function","toc":[{"id":"启用-bff","text":"启用 BFF","depth":2},{"id":"bff-函数","text":"BFF 函数","depth":2},{"id":"函数路由","text":"函数路由","depth":2},{"id":"默认路由","text":"默认路由","depth":3},{"id":"多层路由","text":"多层路由","depth":3},{"id":"动态路由","text":"动态路由","depth":3},{"id":"白名单","text":"白名单","depth":3},{"id":"restful-api","text":"RESTful API","depth":2},{"id":"函数具名导出","text":"函数具名导出","depth":3},{"id":"函数参数规则","text":"函数参数规则","depth":3},{"id":"dynamic-path","text":"Dynamic Path","depth":4},{"id":"requestoption","text":"RequestOption","depth":4}]},{"routePath":"/guides/advanced-features/bff/","toc":[]},{"routePath":"/guides/advanced-features/bff/type","toc":[{"id":"函数写法","text":"函数写法","depth":2},{"id":"框架写法","text":"框架写法","depth":2}]},{"routePath":"/guides/advanced-features/code-split","toc":[{"id":"import","text":"import","depth":2},{"id":"reactlazy","text":"React.lazy","depth":2},{"id":"loadable","text":"loadable","depth":2}]},{"routePath":"/guides/advanced-features/compatibility","toc":[{"id":"browserslist-配置","text":"Browserslist 配置","depth":2},{"id":"polyfill","text":"Polyfill","depth":2},{"id":"编译时-polyfill","text":"编译时 Polyfill","depth":3},{"id":"运行时按需-polyfill","text":"运行时按需 Polyfill","depth":3}]},{"routePath":"/guides/advanced-features/eslint","toc":[{"id":"q-如何处理-lint","text":"Q: 如何处理 Lint","depth":2},{"id":"实时自动修复","text":"实时自动修复","depth":3},{"id":"批量自动修复","text":"批量自动修复","depth":3},{"id":"人工修复","text":"人工修复","depth":3},{"id":"声明例外情况","text":"声明例外情况","depth":3},{"id":"q-如何自定义-eslint-规则","text":"Q: 如何自定义 ESLint 规则","depth":2},{"id":"仓库根目录下-packagejson-里的-eslintconfig-字段","text":"仓库根目录下 package.json 里的 \"eslintConfig\" 字段","depth":3},{"id":"srceslintrcjs-文件","text":"src/.eslintrc.js 文件","depth":3},{"id":"packagejson-里的-eslintignore-字段","text":"package.json 里的 eslintIgnore 字段","depth":3},{"id":"q-如何升级-eslint-插件的版本","text":"Q: 如何升级 ESLint 插件的版本","depth":2},{"id":"q-webstorm-有时候会报-eslint-错误","text":"Q: WebStorm 有时候会报 ESLint 错误","depth":2}]},{"routePath":"/guides/advanced-features/","toc":[]},{"routePath":"/guides/advanced-features/low-level","toc":[{"id":"使用方式","text":"使用方式","depth":2},{"id":"底层配置明细","text":"底层配置明细","depth":2}]},{"routePath":"/guides/advanced-features/ssg","toc":[{"id":"在约定式路由中使用","text":"在约定式路由中使用","depth":3},{"id":"在自控式路由中使用","text":"在自控式路由中使用","depth":3}]},{"routePath":"/guides/advanced-features/ssr","toc":[{"id":"ssr-时的数据获取","text":"SSR 时的数据获取","depth":2},{"id":"保持渲染一致","text":"保持渲染一致","depth":2},{"id":"关注内存泄漏","text":"关注内存泄漏","depth":2},{"id":"收敛服务端数据","text":"收敛服务端数据","depth":2},{"id":"serverless-pre-render","text":"Serverless Pre-render","depth":2},{"id":"treeshaking","text":"Treeshaking","depth":2},{"id":"环境变量区分","text":"环境变量区分","depth":3},{"id":"文件后缀区分","text":"文件后缀区分","depth":3},{"id":"独立文件","text":"独立文件","depth":3},{"id":"接口请求","text":"接口请求","depth":2},{"id":"流式渲染","text":"流式渲染","depth":2}]},{"routePath":"/guides/advanced-features/testing","toc":[{"id":"测试文件","text":"测试文件","depth":2},{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"transform","text":"transform","depth":2}]},{"routePath":"/guides/advanced-features/web-server","toc":[{"id":"创建自定义-web-server","text":"创建自定义 Web Server","depth":2},{"id":"使用-api-扩展-web-server","text":"使用 API 扩展 Web Server","depth":2},{"id":"hook","text":"Hook","depth":3},{"id":"middleware","text":"Middleware","depth":3},{"id":"完全自定义的-web-server","text":"完全自定义的 Web Server","depth":2}]},{"routePath":"/guides/basic-features/alias","toc":[]},{"routePath":"/guides/basic-features/builder","toc":[{"id":"构建架构","text":"构建架构","depth":2},{"id":"构建文档","text":"构建文档","depth":2},{"id":"构建配置","text":"构建配置","depth":2},{"id":"构建能力","text":"构建能力","depth":2}]},{"routePath":"/guides/basic-features/css/css-in-js","toc":[]},{"routePath":"/guides/basic-features/css/css-modules","toc":[{"id":"文件后缀形式-css-modules","text":"文件后缀形式 CSS Modules","depth":2},{"id":"全面启用-css-modules","text":"全面启用 CSS Modules","depth":2}]},{"routePath":"/guides/basic-features/css/less-sass","toc":[{"id":"自定义配置","text":"自定义配置","depth":2}]},{"routePath":"/guides/basic-features/css/postcss","toc":[]},{"routePath":"/guides/basic-features/css/tailwindcss","toc":[{"id":"tailwind-css-版本","text":"Tailwind CSS 版本","depth":2},{"id":"浏览器兼容性","text":"浏览器兼容性","depth":3},{"id":"theme-配置","text":"Theme 配置","depth":2}]},{"routePath":"/guides/basic-features/data-fetch","toc":[{"id":"data-loader推荐","text":"Data Loader(推荐)","depth":2},{"id":"基础示例","text":"基础示例","depth":3},{"id":"loader-函数","text":"loader 函数","depth":3},{"id":"params","text":"Params","depth":4},{"id":"request","text":"request","depth":4},{"id":"返回值","text":"返回值","depth":4},{"id":"请求-api","text":"请求 API","depth":3},{"id":"错误处理","text":"错误处理","depth":3},{"id":"获取上层组件的数据","text":"获取上层组件的数据","depth":3},{"id":"wiploading-ui","text":"(WIP)Loading UI","depth":3},{"id":"错误用法","text":"错误用法","depth":3},{"id":"useloader旧版","text":"useLoader（旧版）","depth":2}]},{"routePath":"/guides/basic-features/env-vars","toc":[{"id":"内置的环境变量","text":"内置的环境变量","depth":2},{"id":"node_env","text":"NODE_ENV","depth":3},{"id":"modern_env","text":"MODERN_ENV","depth":3},{"id":"modern_target","text":"MODERN_TARGET","depth":3},{"id":"自定义环境变量","text":"自定义环境变量","depth":2},{"id":"通过-shell-指定","text":"通过 shell 指定","depth":3},{"id":"通过-env-文件指定","text":"通过 .env 文件指定","depth":3},{"id":"使用环境变量","text":"使用环境变量","depth":2},{"id":"约定命名","text":"约定命名","depth":3},{"id":"任意命名","text":"任意命名","depth":3},{"id":"使用全局替换","text":"使用全局替换","depth":2}]},{"routePath":"/guides/basic-features/html","toc":[{"id":"jsx-语法","text":"JSX 语法","depth":2},{"id":"html-组件","text":"HTML 组件","depth":3},{"id":"模板参数","text":"模板参数","depth":3},{"id":"示例","text":"示例","depth":3},{"id":"html-语法","text":"Html 语法","depth":2},{"id":"自定义-html-片段","text":"自定义 HTML 片段","depth":3},{"id":"完全自定义-html-模板","text":"完全自定义 HTML 模板","depth":3},{"id":"模板参数-1","text":"模板参数","depth":3},{"id":"按入口设置","text":"按入口设置","depth":3}]},{"routePath":"/guides/basic-features/","toc":[]},{"routePath":"/guides/basic-features/mock","toc":[{"id":"mock-文件","text":"Mock 文件","depth":2},{"id":"编写-mock-文件","text":"编写 Mock 文件","depth":2},{"id":"返回随机数据","text":"返回随机数据","depth":2},{"id":"延迟返回","text":"延迟返回","depth":2}]},{"routePath":"/guides/basic-features/proxy","toc":[{"id":"本地代理","text":"本地代理","depth":2},{"id":"全局代理","text":"全局代理","depth":2},{"id":"设置代理规则","text":"设置代理规则","depth":3},{"id":"代理服务器-ui-界面","text":"代理服务器 UI 界面","depth":3},{"id":"bff-代理","text":"BFF 代理","depth":2}]},{"routePath":"/guides/basic-features/routes","toc":[{"id":"约定式路由","text":"约定式路由","depth":2},{"id":"路由文件约定","text":"路由文件约定","depth":3},{"id":"layout","text":"Layout","depth":4},{"id":"page","text":"Page","depth":4},{"id":"动态路由","text":"动态路由","depth":3},{"id":"通配路由","text":"通配路由","depth":3},{"id":"无路径布局","text":"无路径布局","depth":3},{"id":"无布局路径","text":"无布局路径","depth":3},{"id":"wiploading","text":"(WIP)Loading","depth":3},{"id":"错误处理","text":"错误处理","depth":3},{"id":"运行时配置","text":"运行时配置","depth":3},{"id":"渲染前的钩子","text":"渲染前的钩子","depth":3},{"id":"自控式路由","text":"自控式路由","depth":2},{"id":"其他路由方案","text":"其他路由方案","depth":2}]},{"routePath":"/guides/concept/entries","toc":[{"id":"单入口与多入口","text":"单入口与多入口","depth":2},{"id":"入口类型","text":"入口类型","depth":2},{"id":"框架模式入口","text":"框架模式入口","depth":3},{"id":"约定式路由","text":"约定式路由","depth":4},{"id":"自定义路由","text":"自定义路由","depth":4},{"id":"自定义-app","text":"自定义 App","depth":4},{"id":"构建模式入口","text":"构建模式入口","depth":3},{"id":"使用配置文件定义入口","text":"使用配置文件定义入口","depth":2},{"id":"禁用默认入口扫描","text":"禁用默认入口扫描","depth":2}]},{"routePath":"/guides/get-started/quick-start","toc":[{"id":"环境准备","text":"环境准备","depth":2},{"id":"nodejs","text":"Node.js","depth":3},{"id":"pnpm","text":"pnpm","depth":3},{"id":"安装","text":"安装","depth":2},{"id":"初始化项目","text":"初始化项目","depth":2},{"id":"启动项目","text":"启动项目","depth":2},{"id":"使用配置","text":"使用配置","depth":2},{"id":"构建项目","text":"构建项目","depth":2},{"id":"本地验证","text":"本地验证","depth":2},{"id":"部署","text":"部署","depth":2}]},{"routePath":"/guides/get-started/upgrade","toc":[{"id":"通过命令行升级","text":"通过命令行升级","depth":2},{"id":"指定版本升级","text":"指定版本升级","depth":2},{"id":"锁定子依赖","text":"锁定子依赖","depth":2},{"id":"pnpm","text":"pnpm","depth":3},{"id":"yarn","text":"Yarn","depth":3},{"id":"npm","text":"Npm","depth":3}]},{"routePath":"/guides/topic-detail/changesets/add","toc":[{"id":"信息","text":"信息","depth":2},{"id":"步骤","text":"步骤","depth":2},{"id":"模块工程方案","text":"模块工程方案","depth":3},{"id":"在根目录执行以下命令","text":"在根目录执行以下命令：","depth":4},{"id":"选择本次变更需要升级的版本号类型点击回车","text":"选择本次变更需要升级的版本号类型，点击回车：","depth":4},{"id":"填入-changelog-信息并点击两次回车","text":"填入 Changelog 信息，并点击两次回车：","depth":4},{"id":"monorepo-工程方案","text":"Monorepo 工程方案","depth":3},{"id":"在根目录执行以下命令-1","text":"在根目录执行以下命令：","depth":4},{"id":"选择本次需要升级的包列表","text":"选择本次需要升级的包列表：","depth":4},{"id":"分别选择不同版本类型对应的包changeset-会询问-major-和-minor-类型如果存在包未选择这两种类型将会默认使用-patch-类型","text":"分别选择不同版本类型对应的包，changeset 会询问 major 和 minor 类型，如果存在包未选择这两种类型，将会默认使用 patch 类型：","depth":4},{"id":"填入-changelog-信息并点击两次回车-1","text":"填入 Changelog 信息，并点击两次回车：","depth":4},{"id":"参数","text":"参数","depth":2},{"id":"注意事项","text":"注意事项","depth":2}]},{"routePath":"/guides/topic-detail/changesets/changelog","toc":[{"id":"自定义-changlog-内容","text":"自定义 Changlog 内容","depth":2},{"id":"getreleaseline","text":"getReleaseLine","depth":3},{"id":"params","text":"Params","depth":4},{"id":"返回值","text":"返回值","depth":4},{"id":"默认实现","text":"默认实现","depth":4},{"id":"getdependencyreleaseline","text":"getDependencyReleaseLine","depth":3},{"id":"params-1","text":"Params","depth":4},{"id":"返回值-1","text":"返回值","depth":4},{"id":"默认实现-1","text":"默认实现","depth":4},{"id":"配置","text":"配置","depth":2},{"id":"配置相对路径","text":"配置相对路径","depth":3},{"id":"使用模块工程方案","text":"使用模块工程方案","depth":3},{"id":"使用-npx-modern-jscreate-创建模块工程方案","text":"使用 npx @modern-js/create 创建模块工程方案。","depth":4},{"id":"实现自定义内容","text":"实现自定义内容。","depth":4},{"id":"将模块发布到-npm","text":"将模块发布到 NPM。","depth":4},{"id":"在目标仓库根目录安装对应模块例如-custom-changelog","text":"在目标仓库根目录安装对应模块，例如 custom-changelog。","depth":4},{"id":"配置-changeset-的-changelog-配置为包名称","text":"配置 changeset 的 changelog 配置为包名称。","depth":4},{"id":"使用-monorepo-工程方案","text":"使用 Monorepo 工程方案","depth":3},{"id":"执行-pnpm-run-new-创建模块子项目","text":"执行 pnpm run new 创建模块子项目。","depth":4},{"id":"实现自定义内容-1","text":"实现自定义内容。","depth":4},{"id":"在-monorepo-根目录添加子项目模块依赖例如-custom-changelog","text":"在 Monorepo 根目录添加子项目模块依赖，例如 custom-changelog。","depth":4},{"id":"配置-changeset-的-changelog-配置为包名称-1","text":"配置 changeset 的 changelog 配置为包名称。","depth":4}]},{"routePath":"/guides/topic-detail/changesets/commit","toc":[{"id":"自定义-commit-信息内容","text":"自定义 commit 信息内容","depth":2},{"id":"getaddmessage","text":"getAddMessage","depth":3},{"id":"params","text":"Params","depth":4},{"id":"返回值","text":"返回值","depth":4},{"id":"默认实现","text":"默认实现","depth":4},{"id":"getversionmessage","text":"getVersionMessage","depth":3},{"id":"params-1","text":"Params","depth":4},{"id":"返回值-1","text":"返回值","depth":4},{"id":"默认实现-1","text":"默认实现","depth":4},{"id":"配置","text":"配置","depth":2},{"id":"配置相对路径","text":"配置相对路径","depth":3},{"id":"使用模块工程方案","text":"使用模块工程方案","depth":3},{"id":"使用-npx-modern-jscreate-创建模块工程方案","text":"使用 npx @modern-js/create 创建模块工程方案。","depth":4},{"id":"实现自定义内容","text":"实现自定义内容。","depth":4},{"id":"将模块发布到-npm","text":"将模块发布到 NPM。","depth":4},{"id":"在目标仓库根目录安装对应模块例如-custom-commit","text":"在目标仓库根目录安装对应模块，例如 custom-commit。","depth":4},{"id":"配置-changeset-的-commit-配置为包名称","text":"配置 changeset 的 commit 配置为包名称。","depth":4},{"id":"使用-monorepo-工程方案","text":"使用 Monorepo 工程方案","depth":3},{"id":"执行-pnpm-run-new-创建模块子项目","text":"执行 pnpm run new 创建模块子项目。","depth":4},{"id":"实现自定义内容-1","text":"实现自定义内容。","depth":4},{"id":"在-monorepo-根目录添加子项目模块依赖例如-custom-commit","text":"在 Monorepo 根目录添加子项目模块依赖，例如 custom-commit。","depth":4},{"id":"配置-changeset-的-commit-配置为包名称-1","text":"配置 changeset 的 commit 配置为包名称。","depth":4}]},{"routePath":"/guides/topic-detail/changesets/config","toc":[{"id":"配置介绍","text":"配置介绍","depth":2},{"id":"commit","text":"commit","depth":3},{"id":"access","text":"access","depth":3},{"id":"basebranch","text":"baseBranch","depth":3},{"id":"ignore","text":"ignore","depth":3},{"id":"fixed","text":"fixed","depth":3},{"id":"linked","text":"linked","depth":3},{"id":"updateinternaldependencies","text":"updateInternalDependencies","depth":3},{"id":"changelog","text":"changelog","depth":3},{"id":"___experimentalunsafeoptions_will_change_in_patch","text":"___experimentalUnsafeOptions_WILL_CHANGE_IN_PATCH","depth":3},{"id":"onlyupdatepeerdependentswhenoutofrange","text":"onlyUpdatePeerDependentsWhenOutOfRange","depth":4},{"id":"updateinternaldependents","text":"updateInternalDependents","depth":4},{"id":"usecalculatedversionforsnapshots","text":"useCalculatedVersionForSnapshots","depth":4}]},{"routePath":"/guides/topic-detail/changesets/github","toc":[{"id":"bot","text":"BOT","depth":2},{"id":"安装","text":"安装","depth":3},{"id":"配置","text":"配置","depth":3},{"id":"使用","text":"使用","depth":3},{"id":"未添加-changeset","text":"未添加 changeset","depth":4},{"id":"已添加-changeset","text":"已添加 changeset","depth":4},{"id":"不需要-changeset","text":"不需要 changeset","depth":4},{"id":"action","text":"Action","depth":2},{"id":"自动创建-release-pull-request","text":"自动创建 Release Pull Request","depth":3},{"id":"使用-1","text":"使用","depth":3},{"id":"自动-release","text":"自动 Release","depth":3},{"id":"使用-2","text":"使用","depth":4}]},{"routePath":"/guides/topic-detail/changesets/introduce","toc":[{"id":"特点","text":"特点","depth":2},{"id":"初始化","text":"初始化","depth":2},{"id":"命令","text":"命令","depth":2}]},{"routePath":"/guides/topic-detail/changesets/release-note","toc":[{"id":"信息","text":"信息","depth":2},{"id":"自定义-release-note-所需信息","text":"自定义 Release Note 所需信息","depth":3},{"id":"getreleaseinfo","text":"getReleaseInfo","depth":4},{"id":"使用获取的信息生成-release-note","text":"使用获取的信息生成 Release Note","depth":3},{"id":"getreleasenoteline","text":"getReleaseNoteLine","depth":4},{"id":"使用自定义模块","text":"使用自定义模块","depth":2},{"id":"配置相对路径","text":"配置相对路径","depth":3},{"id":"使用模块工程方案","text":"使用模块工程方案","depth":3},{"id":"使用-monorepo-工程方案","text":"使用 Monorepo 工程方案","depth":3}]},{"routePath":"/guides/topic-detail/changesets/release-pre","toc":[{"id":"步骤","text":"步骤","depth":2},{"id":"执行以下命令升级预发布版本版本号","text":"执行以下命令升级预发布版本版本号：","depth":4},{"id":"检查相关变更并提交","text":"检查相关变更并提交","depth":4},{"id":"执行以下命令发布预发布版本","text":"执行以下命令发布预发布版本：","depth":4},{"id":"注意事项","text":"注意事项","depth":2},{"id":"退出预发布模式","text":"退出预发布模式","depth":3}]},{"routePath":"/guides/topic-detail/changesets/release","toc":[{"id":"步骤","text":"步骤","depth":2},{"id":"模块工程方案","text":"模块工程方案","depth":3},{"id":"在根目录执行以下命令","text":"在根目录执行以下命令：","depth":4},{"id":"确认并提交当前变更","text":"确认并提交当前变更：","depth":4},{"id":"在根目录执行以下命令发布包至-npm","text":"在根目录执行以下命令发布包至 NPM：","depth":4},{"id":"push-对应的-tag-信息至远程仓库","text":"push 对应的 tag 信息至远程仓库：","depth":4},{"id":"monorepo-工程方案","text":"Monorepo 工程方案","depth":3},{"id":"在根目录执行以下命令-1","text":"在根目录执行以下命令：","depth":4},{"id":"确认并提交当前变更-1","text":"确认并提交当前变更：","depth":4},{"id":"在根目录执行以下命令发布包至-npm-1","text":"在根目录执行以下命令发布包至 NPM：","depth":4},{"id":"push-对应的-tag-信息至远程仓库-1","text":"push 对应的 tag 信息至远程仓库：","depth":4},{"id":"参数","text":"参数","depth":2},{"id":"bump-命令参数","text":"bump 命令参数","depth":3},{"id":"release-命令参数","text":"release 命令参数","depth":3},{"id":"升级版本策略","text":"升级版本策略","depth":2},{"id":"dependencies-或者-devdependencies-依赖","text":"dependencies 或者 devDependencies 依赖","depth":3},{"id":"patch-版本依赖只升级自身","text":"patch 版本依赖只升级自身","depth":4},{"id":"major--minor-版本自身升级-major-或者-minor-版本号依赖包升级-patch-版本号","text":"major / minor 版本自身升级 major 或者 minor 版本号，依赖包升级 patch 版本号","depth":4},{"id":"peerdependencies-依赖","text":"peerDependencies 依赖","depth":3},{"id":"patch-版本依赖自身和依赖包都升级-patch-版本号","text":"patch 版本依赖自身和依赖包都升级 patch 版本号","depth":4},{"id":"major--minor-版本自身升级-major-或者-minor-版本号依赖包升级-major-版本号","text":"major / minor 版本自身升级 major 或者 minor 版本号，依赖包升级 major 版本号","depth":4},{"id":"修改-peerdependencies-的升级策略","text":"修改 peerDependencies 的升级策略","depth":4}]},{"routePath":"/guides/topic-detail/framework-plugin/extend","toc":[{"id":"示例","text":"示例","depth":2},{"id":"创建-hook","text":"创建 Hook","depth":3},{"id":"使用-hook","text":"使用 Hook","depth":3}]},{"routePath":"/guides/topic-detail/framework-plugin/hook-list","toc":[{"id":"cli","text":"CLI","depth":2},{"id":"config","text":"config","depth":3},{"id":"validateschema","text":"validateSchema","depth":3},{"id":"prepare","text":"prepare","depth":3},{"id":"afterprepare","text":"afterPrepare","depth":3},{"id":"commands","text":"commands","depth":3},{"id":"beforeexit","text":"beforeExit","depth":3},{"id":"beforedev","text":"beforeDev","depth":3},{"id":"afterdev","text":"afterDev","depth":3},{"id":"beforecreatecompiler","text":"beforeCreateCompiler","depth":3},{"id":"aftercreatecompiler","text":"afterCreateCompiler","depth":3},{"id":"beforeprintinstructions","text":"beforePrintInstructions","depth":3},{"id":"beforebuild","text":"beforeBuild","depth":3},{"id":"afterbuild","text":"afterBuild","depth":3},{"id":"modifyentryimports","text":"modifyEntryImports","depth":3},{"id":"modifyentryexport","text":"modifyEntryExport","depth":3},{"id":"modifyentryruntimeplugins","text":"modifyEntryRuntimePlugins","depth":3},{"id":"modifyentryrenderfunction","text":"modifyEntryRenderFunction","depth":3},{"id":"modifyfilesystemroutes","text":"modifyFileSystemRoutes","depth":3},{"id":"modifyserverroutes","text":"modifyServerRoutes","depth":3},{"id":"modifyasyncentry","text":"modifyAsyncEntry","depth":3},{"id":"htmlpartials","text":"htmlPartials","depth":3},{"id":"server","text":"Server","depth":2},{"id":"create","text":"create","depth":3},{"id":"preparewebserver","text":"prepareWebServer","depth":3},{"id":"prepareapiserver","text":"prepareApiServer","depth":3},{"id":"runtime","text":"Runtime","depth":2},{"id":"init","text":"init","depth":3},{"id":"hoc","text":"hoc","depth":3},{"id":"provide","text":"provide","depth":3},{"id":"client","text":"client","depth":3},{"id":"server-1","text":"server","depth":3}]},{"routePath":"/guides/topic-detail/framework-plugin/hook","toc":[{"id":"基础工作方式","text":"基础工作方式","depth":2},{"id":"不同-hook-模型的区别","text":"不同 Hook 模型的区别","depth":2},{"id":"pipeline","text":"Pipeline","depth":3},{"id":"waterfall","text":"Waterfall","depth":3},{"id":"workflow","text":"Workflow","depth":3},{"id":"hook-模型对比","text":"Hook 模型对比","depth":2}]},{"routePath":"/guides/topic-detail/framework-plugin/implement","toc":[{"id":"实现插件","text":"实现插件","depth":2},{"id":"插件类型","text":"插件类型","depth":3},{"id":"插件配置项","text":"插件配置项","depth":3},{"id":"插件-api","text":"插件 API","depth":3},{"id":"异步-setup","text":"异步 setup","depth":3},{"id":"添加插件","text":"添加插件","depth":2},{"id":"开发本地插件","text":"开发本地插件","depth":3},{"id":"在-npm-上发布插件","text":"在 npm 上发布插件","depth":3}]},{"routePath":"/guides/topic-detail/framework-plugin/introduction","toc":[{"id":"modernjs-插件系统","text":"Modern.js 插件系统","depth":2},{"id":"插件可以做什么","text":"插件可以做什么","depth":2}]},{"routePath":"/guides/topic-detail/framework-plugin/lifecycle","toc":[]},{"routePath":"/guides/topic-detail/framework-plugin/plugin-api","toc":[{"id":"api","text":"API","depth":2},{"id":"useconfigcontext","text":"useConfigContext","depth":3},{"id":"useappcontext","text":"useAppContext","depth":3},{"id":"useresolvedconfigcontext","text":"useResolvedConfigContext","depth":3},{"id":"usehookrunners","text":"useHookRunners","depth":3}]},{"routePath":"/guides/topic-detail/framework-plugin/relationship","toc":[{"id":"插件排序","text":"插件排序","depth":2},{"id":"前置插件","text":"前置插件","depth":3},{"id":"后置插件","text":"后置插件","depth":3},{"id":"互斥插件","text":"互斥插件","depth":2},{"id":"必需插件","text":"必需插件","depth":2},{"id":"注册插件","text":"注册插件","depth":2}]},{"routePath":"/guides/topic-detail/generator/codesmith/api/app","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"api","text":"API","depth":2},{"id":"checkenvironment","text":"checkEnvironment","depth":3},{"id":"runinstall","text":"runInstall","depth":3},{"id":"rungitandinstall","text":"runGitAndInstall","depth":3},{"id":"forgetemplate","text":"forgeTemplate","depth":3},{"id":"showsuccessinfo","text":"showSuccessInfo","depth":3},{"id":"runsubgenerator","text":"runSubGenerator","depth":3},{"id":"getinputbyschema","text":"getInputBySchema","depth":3},{"id":"getinputbyschemafunc","text":"getInputBySchemaFunc","depth":3}]},{"routePath":"/guides/topic-detail/generator/codesmith/api/ejs","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"api","text":"API","depth":2},{"id":"rendertemplate","text":"renderTemplate","depth":3},{"id":"rendertemplatedir","text":"renderTemplateDir","depth":3}]},{"routePath":"/guides/topic-detail/generator/codesmith/api/fs","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"api","text":"API","depth":2},{"id":"renderfile","text":"renderFile","depth":3},{"id":"renderdir","text":"renderDir","depth":3}]},{"routePath":"/guides/topic-detail/generator/codesmith/api/git","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"api","text":"API","depth":2},{"id":"isingitrepo","text":"isInGitRepo","depth":3},{"id":"initgitrepo","text":"initGitRepo","depth":3},{"id":"addandcommit","text":"addAndCommit","depth":3}]},{"routePath":"/guides/topic-detail/generator/codesmith/api/handlebars","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"api","text":"API","depth":2},{"id":"rendertemplate","text":"renderTemplate","depth":3},{"id":"rendertemplatedir","text":"renderTemplateDir","depth":3}]},{"routePath":"/guides/topic-detail/generator/codesmith/api/json","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"api","text":"API","depth":2},{"id":"get","text":"get","depth":3},{"id":"extend","text":"extend","depth":3},{"id":"update","text":"update","depth":3}]},{"routePath":"/guides/topic-detail/generator/codesmith/api/npm","toc":[{"id":"使用姿势","text":"使用姿势","depth":2},{"id":"api","text":"API","depth":2},{"id":"npminstall","text":"npmInstall","depth":3},{"id":"yarninstall","text":"yarnInstall","depth":3},{"id":"pnpminstall","text":"pnpmInstall","depth":3}]},{"routePath":"/guides/topic-detail/generator/codesmith/develop","toc":[{"id":"创建项目","text":"创建项目","depth":2},{"id":"添加模板文件","text":"添加模板文件","depth":2},{"id":"开发生成器核心逻辑","text":"开发生成器核心逻辑","depth":2},{"id":"测试微生成器","text":"测试微生成器","depth":2},{"id":"运行微生成器","text":"运行微生成器","depth":2}]},{"routePath":"/guides/topic-detail/generator/codesmith/introduce","toc":[{"id":"核心概念","text":"核心概念","depth":2},{"id":"generatorcore","text":"GeneratorCore","depth":3},{"id":"materials","text":"Materials","depth":3}]},{"routePath":"/guides/topic-detail/generator/codesmith/run-in-js","toc":[{"id":"安装-codesmith-依赖","text":"安装 codesmith 依赖","depth":2},{"id":"创建-codesmith-实例","text":"创建 codesmith 实例","depth":2},{"id":"调用-forge-方法执行生成器","text":"调用 forge 方法执行生成器","depth":2}]},{"routePath":"/guides/topic-detail/generator/codesmith/structure","toc":[{"id":"packagejson","text":"package.json","depth":2},{"id":"入口文件","text":"入口文件","depth":2},{"id":"context","text":"context","depth":3},{"id":"generator","text":"generator","depth":3},{"id":"template-文件","text":"Template 文件","depth":2}]},{"routePath":"/guides/topic-detail/generator/config/app","toc":[{"id":"项目创建","text":"项目创建","depth":2},{"id":"new-命令","text":"New 命令","depth":2},{"id":"actiontype","text":"actionType","depth":3},{"id":"element","text":"element","depth":3},{"id":"name","text":"name","depth":4},{"id":"function","text":"function","depth":3},{"id":"bff-相关参数","text":"BFF 相关参数","depth":4}]},{"routePath":"/guides/topic-detail/generator/config/common","toc":[{"id":"solution","text":"solution","depth":3},{"id":"scenes","text":"scenes","depth":3},{"id":"language","text":"language","depth":3},{"id":"packagemanager","text":"packageManager","depth":3},{"id":"其他配置","text":"其他配置","depth":2},{"id":"noneedinstall","text":"noNeedInstall","depth":3},{"id":"noneedgit","text":"noNeedGit","depth":3},{"id":"successinfo","text":"successInfo","depth":3},{"id":"ismonoreposubproject","text":"isMonorepoSubProject","depth":3},{"id":"istest","text":"isTest","depth":3},{"id":"ispublic","text":"isPublic","depth":3}]},{"routePath":"/guides/topic-detail/generator/config/module","toc":[{"id":"项目创建","text":"项目创建","depth":2},{"id":"packagename","text":"packageName","depth":3},{"id":"new-命令","text":"New 命令","depth":2},{"id":"actiontype","text":"actionType","depth":3},{"id":"function","text":"function","depth":3}]},{"routePath":"/guides/topic-detail/generator/config/monorepo","toc":[{"id":"创建子项目","text":"创建子项目","depth":2},{"id":"solution","text":"solution","depth":3},{"id":"packagename","text":"packageName","depth":3},{"id":"packagepath","text":"packagePath","depth":3}]},{"routePath":"/guides/topic-detail/generator/plugin/abstract","toc":[]},{"routePath":"/guides/topic-detail/generator/plugin/api/file/addFile","toc":[{"id":"type","text":"type","depth":2},{"id":"file","text":"file","depth":2},{"id":"template","text":"template","depth":2},{"id":"templatefile","text":"templateFile","depth":2},{"id":"force","text":"force","depth":2},{"id":"data","text":"data","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/file/addHelper","toc":[{"id":"name","text":"name","depth":2},{"id":"fn","text":"fn","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/file/addManyFile","toc":[{"id":"type","text":"type","depth":2},{"id":"destination","text":"destination","depth":2},{"id":"templatefiles","text":"templateFiles","depth":2},{"id":"templatebase","text":"templateBase","depth":2},{"id":"filenamefunc","text":"fileNameFunc","depth":2},{"id":"data","text":"data","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/file/addPartial","toc":[{"id":"name","text":"name","depth":2},{"id":"str","text":"str","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/file/introduce","toc":[{"id":"文件类型","text":"文件类型","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/file/rmDir","toc":[{"id":"dirname","text":"dirName","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/file/rmFile","toc":[{"id":"filename","text":"fileName","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/file/updateJSONFile","toc":[{"id":"filename","text":"fileName","depth":2},{"id":"updateinfo","text":"updateInfo","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/file/updateModernConfig","toc":[{"id":"updateinfo","text":"updateInfo","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/file/updateTextRawFile","toc":[{"id":"filename","text":"fileName","depth":2},{"id":"update","text":"update","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/git/gitAddAndCommit","toc":[{"id":"commitmessage","text":"commitMessage","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/git/initGitRepo","toc":[]},{"routePath":"/guides/topic-detail/generator/plugin/api/git/isInGitRepo","toc":[]},{"routePath":"/guides/topic-detail/generator/plugin/api/hook/afterForged","toc":[{"id":"func","text":"func","depth":2},{"id":"api","text":"api","depth":3},{"id":"inputdata","text":"inputData","depth":3}]},{"routePath":"/guides/topic-detail/generator/plugin/api/hook/onForged","toc":[{"id":"func","text":"func","depth":2},{"id":"api","text":"api","depth":3},{"id":"inputdata","text":"inputData","depth":3}]},{"routePath":"/guides/topic-detail/generator/plugin/api/info/isFileExit","toc":[{"id":"filename","text":"fileName","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/info/locale","toc":[]},{"routePath":"/guides/topic-detail/generator/plugin/api/info/readDir","toc":[{"id":"dir","text":"dir","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/input/addInputAfter","toc":[{"id":"key","text":"key","depth":2},{"id":"input","text":"input","depth":2},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/input/addInputBefore","toc":[{"id":"key","text":"key","depth":2},{"id":"input","text":"input","depth":2},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/input/setInput","toc":[{"id":"key","text":"key","depth":2},{"id":"filed","text":"filed","depth":2},{"id":"value","text":"value","depth":2},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/input/setInputValue","toc":[{"id":"示例","text":"示例","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/input/type","toc":[{"id":"input","text":"Input","depth":2},{"id":"type","text":"type","depth":3},{"id":"name","text":"name","depth":3},{"id":"title","text":"title","depth":3},{"id":"default","text":"default","depth":3},{"id":"enum","text":"enum","depth":3},{"id":"x-validate","text":"x-validate","depth":3},{"id":"x-reactions","text":"x-reactions","depth":3},{"id":"properties","text":"properties","depth":3},{"id":"示例","text":"示例","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/introduce","toc":[{"id":"生成器插件构成","text":"生成器插件构成","depth":2},{"id":"生成器插件分类","text":"生成器插件分类","depth":2},{"id":"类型定义","text":"类型定义","depth":3},{"id":"扩展工程方案","text":"扩展工程方案","depth":4},{"id":"创建工程方案场景","text":"创建工程方案场景","depth":4},{"id":"自定义custom类型","text":"自定义(custom)类型","depth":3}]},{"routePath":"/guides/topic-detail/generator/plugin/api/new/createElement","toc":[{"id":"element","text":"element","depth":2},{"id":"params","text":"params","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/new/createSubProject","toc":[{"id":"solution","text":"solution","depth":2},{"id":"params","text":"params","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/new/enableFunc","toc":[{"id":"func","text":"func","depth":2},{"id":"params","text":"params","depth":2}]},{"routePath":"/guides/topic-detail/generator/plugin/api/new/introduce","toc":[]},{"routePath":"/guides/topic-detail/generator/plugin/api/npm/install","toc":[]},{"routePath":"/guides/topic-detail/generator/plugin/develop","toc":[{"id":"创建项目","text":"创建项目","depth":2},{"id":"扩展工程方案","text":"扩展工程方案","depth":3},{"id":"创建工程方案场景","text":"创建工程方案场景","depth":3},{"id":"开发插件逻辑","text":"开发插件逻辑","depth":2},{"id":"自定义输入","text":"自定义输入","depth":3},{"id":"onforged","text":"onForged","depth":3},{"id":"afterforged","text":"afterForged","depth":3}]},{"routePath":"/guides/topic-detail/generator/plugin/use","toc":[{"id":"生成器插件分类","text":"生成器插件分类","depth":2},{"id":"类型定义","text":"类型定义","depth":3},{"id":"扩展工程方案","text":"扩展工程方案","depth":4},{"id":"创建工程方案场景","text":"创建工程方案场景","depth":4},{"id":"执行时机","text":"执行时机","depth":3},{"id":"扩展工程方案-1","text":"扩展工程方案","depth":4},{"id":"创建工程方案场景-1","text":"创建工程方案场景","depth":4}]},{"routePath":"/guides/topic-detail/generator/project","toc":[{"id":"使用","text":"使用","depth":2},{"id":"参数","text":"参数","depth":2},{"id":"projectdir","text":"[projectDir]","depth":3},{"id":"--version","text":"--version","depth":3},{"id":"--lang","text":"--lang","depth":3},{"id":"-c---config","text":"-c, --config","depth":3},{"id":"--no-need-install","text":"--no-need-install","depth":3},{"id":"--dist-tag-disttag","text":"--dist-tag <distTag>","depth":3},{"id":"--registry-registry","text":"--registry <registry/>","depth":3},{"id":"--debug","text":"--debug","depth":3},{"id":"--mwa","text":"--mwa","depth":3},{"id":"--module","text":"--module","depth":3},{"id":"--monorepo","text":"--monorepo","depth":3},{"id":"--plugin-plugin","text":"--plugin <plugin>","depth":3},{"id":"--generator-generator","text":"--generator <generator>","depth":3},{"id":"--packages-packages","text":"--packages <packages>","depth":3}]},{"routePath":"/guides/topic-detail/micro-frontend/c01-introduction","toc":[{"id":"微前端关键词","text":"微前端关键词","depth":2},{"id":"功能简介","text":"功能简介","depth":2}]},{"routePath":"/guides/topic-detail/micro-frontend/c02-development","toc":[{"id":"创建应用","text":"创建应用","depth":2},{"id":"创建-main-主应用","text":"创建 main 主应用","depth":3},{"id":"创建-dashboard-子应用","text":"创建 dashboard 子应用","depth":3},{"id":"创建-table-子应用","text":"创建 table 子应用","depth":3},{"id":"添加代码","text":"添加代码","depth":2},{"id":"main-主应用","text":"main 主应用","depth":3},{"id":"dashboard-子应用","text":"dashboard 子应用","depth":3},{"id":"table-子应用","text":"table 子应用","depth":3},{"id":"调试","text":"调试","depth":2},{"id":"常见问题","text":"常见问题","depth":2}]},{"routePath":"/guides/topic-detail/micro-frontend/c03-main-app","toc":[{"id":"注册子应用信息","text":"注册子应用信息","depth":2},{"id":"直接注册子应用信息","text":"直接注册子应用信息","depth":3},{"id":"自定义远程应用列表","text":"自定义远程应用列表","depth":3},{"id":"渲染子应用","text":"渲染子应用","depth":2},{"id":"子应用组件","text":"子应用组件","depth":3},{"id":"集中式路由","text":"集中式路由","depth":3},{"id":"两种模式混用","text":"两种模式混用","depth":3},{"id":"添加-loading","text":"添加 loading","depth":3},{"id":"增加错误状态","text":"增加错误状态","depth":4},{"id":"避免-loading-闪退","text":"避免 loading 闪退","depth":4},{"id":"增加超时状态","text":"增加超时状态","depth":4}]},{"routePath":"/guides/topic-detail/micro-frontend/c04-communicate","toc":[{"id":"props-通信","text":"props 通信","depth":2},{"id":"channel-通信","text":"channel 通信","depth":2}]},{"routePath":"/guides/topic-detail/micro-frontend/c05-mixed-stack","toc":[{"id":"子应用是-modernjs","text":"子应用是 Modern.js","depth":2},{"id":"主应用是-modernjs","text":"主应用是 Modern.js","depth":2}]},{"routePath":"/guides/topic-detail/model/auto-actions","toc":[{"id":"原始数据类型","text":"原始数据类型","depth":2},{"id":"数组类型","text":"数组类型","depth":2},{"id":"简单对象类型","text":"简单对象类型","depth":2}]},{"routePath":"/guides/topic-detail/model/computed-state","toc":[{"id":"只依赖自身的-state","text":"只依赖自身的 State","depth":2},{"id":"依赖其他-model-的-state","text":"依赖其他 Model 的 State","depth":2},{"id":"函数类型的衍生状态","text":"函数类型的衍生状态","depth":2}]},{"routePath":"/guides/topic-detail/model/define-model","toc":[]},{"routePath":"/guides/topic-detail/model/faq","toc":[{"id":"浏览器兼容性","text":"浏览器兼容性","depth":2},{"id":"微前端子应用-model-访问主应用-model","text":"微前端子应用 Model 访问主应用 Model","depth":2}]},{"routePath":"/guides/topic-detail/model/manage-effects","toc":[{"id":"副作用对-state-修改","text":"副作用对 State 修改","depth":2},{"id":"副作用不影响-state","text":"副作用不影响 state","depth":2},{"id":"副作用函数返回值","text":"副作用函数返回值","depth":2}]},{"routePath":"/guides/topic-detail/model/model-communicate","toc":[{"id":"model-间通信","text":"Model 间通信","depth":2},{"id":"model-内通信","text":"Model 内通信","depth":2}]},{"routePath":"/guides/topic-detail/model/performance","toc":[{"id":"model-拆分","text":"Model 拆分","depth":2},{"id":"状态筛选","text":"状态筛选","depth":2},{"id":"衍生状态缓存","text":"衍生状态缓存","depth":2}]},{"routePath":"/guides/topic-detail/model/quick-start","toc":[{"id":"核心概念","text":"核心概念","depth":2},{"id":"基本用法","text":"基本用法","depth":2}]},{"routePath":"/guides/topic-detail/model/redux-integration","toc":[]},{"routePath":"/guides/topic-detail/model/test-model","toc":[]},{"routePath":"/guides/topic-detail/model/typescript-best-practice","toc":[{"id":"定义-model-的-state-类型","text":"定义 Model 的 State 类型","depth":2},{"id":"衍生状态的依赖类型","text":"衍生状态的依赖类型","depth":2},{"id":"获取-model-类型信息的-hooks","text":"获取 Model 类型信息的 Hooks","depth":2}]},{"routePath":"/guides/topic-detail/model/use-model","toc":[{"id":"在组件内使用","text":"在组件内使用","depth":2},{"id":"作为全局状态使用","text":"作为全局状态使用","depth":3},{"id":"作为静态状态使用","text":"作为静态状态使用","depth":3},{"id":"作为局部状态使用","text":"作为局部状态使用","depth":3},{"id":"在组件外使用","text":"在组件外使用","depth":2}]},{"routePath":"/guides/topic-detail/model/use-out-of-modernjs","toc":[]},{"routePath":"/guides/topic-detail/monorepo/create-sub-project","toc":[]},{"routePath":"/guides/topic-detail/monorepo/intro","toc":[]},{"routePath":"/guides/topic-detail/monorepo/publish","toc":[{"id":"准备工作","text":"准备工作","depth":2},{"id":"生成变更记录","text":"生成变更记录","depth":2},{"id":"版本更新","text":"版本更新","depth":2},{"id":"发布","text":"发布","depth":2}]},{"routePath":"/guides/topic-detail/monorepo/sub-project-interface","toc":[{"id":"准备工作","text":"准备工作","depth":2},{"id":"在使用-pnpm-的-monorepo-中进行项目联调","text":"在使用 pnpm 的 Monorepo 中进行项目联调","depth":2},{"id":"在使用-yarn-的-monorepo-中进行项目联调","text":"在使用 Yarn 的 Monorepo 中进行项目联调","depth":2}]},{"routePath":"/guides/troubleshooting/cli","toc":[{"id":"使用-pnpm-时无法正确传递命令行参数","text":"使用 pnpm 时无法正确传递命令行参数？","depth":3}]},{"routePath":"/guides/troubleshooting/dependencies","toc":[{"id":"如何查看项目里某个依赖实际安装的版本","text":"如何查看项目里某个依赖实际安装的版本？","depth":3},{"id":"安装依赖时提示-the-engine-node-is-incompatible","text":"安装依赖时提示 The engine \"node\" is incompatible？","depth":3},{"id":"升级依赖后出现-reactnode-类型错误","text":"升级依赖后出现 ReactNode 类型错误？","depth":3},{"id":"执行-pnpm-install-之后控制台出现-peer-dependencies-相关-warning","text":"执行 pnpm install 之后，控制台出现 peer dependencies 相关 warning？","depth":3}]},{"routePath":"/","toc":[]},{"routePath":"/tutorials/first-app/c01-start","toc":[{"id":"环境准备","text":"环境准备","depth":2},{"id":"nodejs","text":"Node.js","depth":3},{"id":"pnpm","text":"pnpm","depth":3},{"id":"初始化项目","text":"初始化项目","depth":2},{"id":"调试项目","text":"调试项目","depth":2},{"id":"修改代码","text":"修改代码","depth":2},{"id":"开启-ssr","text":"开启 SSR","depth":2}]},{"routePath":"/tutorials/first-app/c02-component","toc":[]},{"routePath":"/tutorials/first-app/c03-css","toc":[{"id":"使用-css-写-js-组件","text":"使用 CSS 写 JS 组件","depth":2},{"id":"使用-utility","text":"使用 Utility","depth":2},{"id":"自定义-utility-class","text":"自定义 Utility Class","depth":2}]},{"routePath":"/tutorials/first-app/c04-routes","toc":[]},{"routePath":"/tutorials/first-app/c05-loader","toc":[]},{"routePath":"/tutorials/first-app/c06-model","toc":[{"id":"实现-model","text":"实现 Model","depth":2},{"id":"使用-model","text":"使用 Model","depth":2}]},{"routePath":"/tutorials/first-app/c07-container","toc":[{"id":"使用完整-model","text":"使用完整 Model","depth":2},{"id":"抽离容器组件","text":"抽离容器组件","depth":2}]},{"routePath":"/tutorials/first-app/c08-entries","toc":[{"id":"新建入口","text":"新建入口","depth":2},{"id":"按入口修改配置","text":"按入口修改配置","depth":2},{"id":"下一步","text":"下一步","depth":2}]},{"routePath":"/tutorials/foundations/introduction","toc":[{"id":"modernjs-是什么","text":"Modern.js 是什么","depth":2},{"id":"为什么使用-modernjs","text":"为什么使用 Modern.js","depth":2},{"id":"下一步","text":"下一步","depth":2}]}]});

/***/ }),

/***/ 20714:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([]);

/***/ }),

/***/ 20456:
/***/ (() => {

"use strict";


/***/ }),

/***/ 63610:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52983);
/* harmony import */ var react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19515);
const Route0=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_commands_build */ 34806).then(__webpack_require__.bind(__webpack_require__, 1905)));const Route1=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_commands_dev */ 36866).then(__webpack_require__.bind(__webpack_require__, 29566)));const Route2=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_commands_index */ 72917).then(__webpack_require__.bind(__webpack_require__, 75217)));const Route3=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_commands_inspect */ 49857).then(__webpack_require__.bind(__webpack_require__, 50718)));const Route4=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_commands_lint */ 65704).then(__webpack_require__.bind(__webpack_require__, 80922)));const Route5=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_commands_new */ 30276).then(__webpack_require__.bind(__webpack_require__, 23172)));const Route6=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_commands_serve */ 78940).then(__webpack_require__.bind(__webpack_require__, 56751)));const Route7=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_commands_test */ 64415).then(__webpack_require__.bind(__webpack_require__, 96024)));const Route8=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_commands_upgrade */ 90992).then(__webpack_require__.bind(__webpack_require__, 82556)));const Route9=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_api_framework_lambda */ 985).then(__webpack_require__.bind(__webpack_require__, 85111)));const Route10=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_api_functions_api */ 11592).then(__webpack_require__.bind(__webpack_require__, 83011)));const Route11=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_api_functions_app */ 11181).then(__webpack_require__.bind(__webpack_require__, 28134)));const Route12=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_api_functions_common */ 89486).then(__webpack_require__.bind(__webpack_require__, 7613)));const Route13=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_api_test */ 82377).then(__webpack_require__.bind(__webpack_require__, 81874)));const Route14=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_config_html */ 53650).then(__webpack_require__.bind(__webpack_require__, 23957)));const Route15=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_config_icon */ 6533).then(__webpack_require__.bind(__webpack_require__, 42616)));const Route16=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_config_mock */ 18410).then(__webpack_require__.bind(__webpack_require__, 96374)));const Route17=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_config_public */ 34487).then(__webpack_require__.bind(__webpack_require__, 58782)));const Route18=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_config_storybook */ 28746).then(__webpack_require__.bind(__webpack_require__, 21054)));const Route19=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_config_upload */ 35565).then(__webpack_require__.bind(__webpack_require__, 48793)));const Route20=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_index */ 52943).then(__webpack_require__.bind(__webpack_require__, 85943)));const Route21=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_modern-config */ 54871).then(__webpack_require__.bind(__webpack_require__, 58169)));const Route22=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_server_index_ */ 87668).then(__webpack_require__.bind(__webpack_require__, 74934)));const Route23=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_server_test */ 56676).then(__webpack_require__.bind(__webpack_require__, 47318)));const Route24=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_shared */ 60437).then(__webpack_require__.bind(__webpack_require__, 86155)));const Route25=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_src_app */ 94526).then(__webpack_require__.bind(__webpack_require__, 89025)));const Route26=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_src_index_ */ 12029).then(__webpack_require__.bind(__webpack_require__, 79602)));const Route27=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_src_pages */ 43459).then(__webpack_require__.bind(__webpack_require__, 25343)));const Route28=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_src_routes */ 20405).then(__webpack_require__.bind(__webpack_require__, 60434)));const Route29=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_src_server */ 8360).then(__webpack_require__.bind(__webpack_require__, 98765)));const Route30=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_src_stories */ 61022).then(__webpack_require__.bind(__webpack_require__, 74532)));const Route31=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_hooks_src_test */ 57103).then(__webpack_require__.bind(__webpack_require__, 80540)));const Route32=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_app_define-config */ 34266).then(__webpack_require__.bind(__webpack_require__, 90400)));const Route33=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_bff_hook */ 45464).then(__webpack_require__.bind(__webpack_require__, 43618)));const Route34=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_bff_use-context */ 25347).then(__webpack_require__.bind(__webpack_require__, 85319)));const Route35=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_core_bootstrap */ 72795).then(__webpack_require__.bind(__webpack_require__, 42924)));const Route36=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_core_create-app */ 82494).then(__webpack_require__.bind(__webpack_require__, 56647)));const Route37=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_core_use-loader */ 32940).then(__webpack_require__.bind(__webpack_require__, 60511)));const Route38=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_core_use-module-apps */ 87418).then(__webpack_require__.bind(__webpack_require__, 83752)));const Route39=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_core_use-runtime-context */ 53210).then(__webpack_require__.bind(__webpack_require__, 20692)));const Route40=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_index */ 92219).then(__webpack_require__.bind(__webpack_require__, 11217)));const Route41=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_model_Provider */ 32337).then(__webpack_require__.bind(__webpack_require__, 91147)));const Route42=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_model_auto-actions */ 69174).then(__webpack_require__.bind(__webpack_require__, 73591)));const Route43=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_model_connect */ 90521).then(__webpack_require__.bind(__webpack_require__, 40748)));const Route44=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_model_create-app */ 829).then(__webpack_require__.bind(__webpack_require__, 66691)));const Route45=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_model_create-store */ 20092).then(__webpack_require__.bind(__webpack_require__, 60407)));const Route46=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_model_handle-effect */ 50891).then(__webpack_require__.bind(__webpack_require__, 92897)));const Route47=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_model_model_ */ 57337).then(__webpack_require__.bind(__webpack_require__, 36417)));const Route48=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_model_use-local-model */ 87968).then(__webpack_require__.bind(__webpack_require__, 96794)));const Route49=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_model_use-model */ 49737).then(__webpack_require__.bind(__webpack_require__, 17461)));const Route50=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_model_use-static-model */ 36466).then(__webpack_require__.bind(__webpack_require__, 25065)));const Route51=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_model_use-store */ 31834).then(__webpack_require__.bind(__webpack_require__, 47781)));const Route52=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_router_router */ 87692).then(__webpack_require__.bind(__webpack_require__, 49086)));const Route53=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_ssr_no-ssr */ 65865).then(__webpack_require__.bind(__webpack_require__, 67431)));const Route54=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_ssr_pre-render */ 46908).then(__webpack_require__.bind(__webpack_require__, 20845)));const Route55=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_testing_act */ 97604).then(__webpack_require__.bind(__webpack_require__, 3567)));const Route56=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_testing_cleanup */ 13638).then(__webpack_require__.bind(__webpack_require__, 99416)));const Route57=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_testing_render */ 89052).then(__webpack_require__.bind(__webpack_require__, 28646)));const Route58=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_testing_renderApp */ 54363).then(__webpack_require__.bind(__webpack_require__, 24859)));const Route59=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_utility_css-in-js */ 41461).then(__webpack_require__.bind(__webpack_require__, 48373)));const Route60=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_utility_head */ 96749).then(__webpack_require__.bind(__webpack_require__, 63538)));const Route61=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_utility_loadable */ 84256).then(__webpack_require__.bind(__webpack_require__, 92136)));const Route62=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_web-server_hook */ 11056).then(__webpack_require__.bind(__webpack_require__, 53357)));const Route63=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_apis_app_runtime_web-server_middleware */ 37156).then(__webpack_require__.bind(__webpack_require__, 94141)));const Route64=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_auto-load-plugin */ 28013).then(__webpack_require__.bind(__webpack_require__, 69094)));const Route65=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_bff_prefix */ 10051).then(__webpack_require__.bind(__webpack_require__, 40016)));const Route66=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_bff_proxy */ 55227).then(__webpack_require__.bind(__webpack_require__, 28706)));const Route67=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_builder-plugins */ 56380).then(__webpack_require__.bind(__webpack_require__, 39332)));const Route68=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_deploy_microFrontend */ 65768).then(__webpack_require__.bind(__webpack_require__, 64822)));const Route69=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_dev_asset-prefix */ 55990).then(__webpack_require__.bind(__webpack_require__, 68933)));const Route70=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_dev_hmr */ 50564).then(__webpack_require__.bind(__webpack_require__, 89884)));const Route71=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_dev_https */ 20057).then(__webpack_require__.bind(__webpack_require__, 67369)));const Route72=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_dev_port */ 19187).then(__webpack_require__.bind(__webpack_require__, 65539)));const Route73=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_dev_progress-bar */ 10982).then(__webpack_require__.bind(__webpack_require__, 34634)));const Route74=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_dev_proxy */ 45970).then(__webpack_require__.bind(__webpack_require__, 74123)));const Route75=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_dev_start-url */ 16586).then(__webpack_require__.bind(__webpack_require__, 49947)));const Route76=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_experiments_lazy-compilation */ 35175).then(__webpack_require__.bind(__webpack_require__, 58438)));const Route77=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_app-icon */ 29892).then(__webpack_require__.bind(__webpack_require__, 10130)));const Route78=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_crossorigin */ 21255).then(__webpack_require__.bind(__webpack_require__, 38804)));const Route79=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_disable-html-folder */ 63582).then(__webpack_require__.bind(__webpack_require__, 94752)));const Route80=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_favicon-by-entries */ 38646).then(__webpack_require__.bind(__webpack_require__, 855)));const Route81=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_favicon */ 31501).then(__webpack_require__.bind(__webpack_require__, 74247)));const Route82=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_inject-by-entries */ 74040).then(__webpack_require__.bind(__webpack_require__, 66711)));const Route83=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_inject */ 51016).then(__webpack_require__.bind(__webpack_require__, 58356)));const Route84=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_meta-by-entries */ 30533).then(__webpack_require__.bind(__webpack_require__, 93234)));const Route85=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_meta */ 84347).then(__webpack_require__.bind(__webpack_require__, 7392)));const Route86=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_mount-id */ 22381).then(__webpack_require__.bind(__webpack_require__, 3508)));const Route87=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_tags-by-entries */ 25410).then(__webpack_require__.bind(__webpack_require__, 34958)));const Route88=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_tags */ 71187).then(__webpack_require__.bind(__webpack_require__, 44122)));const Route89=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_template-by-entries */ 90765).then(__webpack_require__.bind(__webpack_require__, 4008)));const Route90=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_template-parameters-by-entries */ 66297).then(__webpack_require__.bind(__webpack_require__, 80292)));const Route91=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_template-parameters */ 20617).then(__webpack_require__.bind(__webpack_require__, 84712)));const Route92=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_template */ 5788).then(__webpack_require__.bind(__webpack_require__, 9006)));const Route93=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_title-by-entries */ 61151).then(__webpack_require__.bind(__webpack_require__, 82910)));const Route94=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_html_title */ 43830).then(__webpack_require__.bind(__webpack_require__, 43408)));const Route95=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_asset-prefix */ 70765).then(__webpack_require__.bind(__webpack_require__, 27691)));const Route96=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_assets-retry */ 20127).then(__webpack_require__.bind(__webpack_require__, 45)));const Route97=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_charset */ 20008).then(__webpack_require__.bind(__webpack_require__, 66273)));const Route98=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_clean-dist-path */ 68827).then(__webpack_require__.bind(__webpack_require__, 52722)));const Route99=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_convert-to-rem */ 41009).then(__webpack_require__.bind(__webpack_require__, 11781)));const Route100=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_copy */ 21346).then(__webpack_require__.bind(__webpack_require__, 12354)));const Route101=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_css-module-local-ident-name */ 65885).then(__webpack_require__.bind(__webpack_require__, 85434)));const Route102=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_data-uri-limit */ 70009).then(__webpack_require__.bind(__webpack_require__, 91943)));const Route103=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_disable-css-extract */ 7208).then(__webpack_require__.bind(__webpack_require__, 26894)));const Route104=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_disable-css-module-extension */ 13388).then(__webpack_require__.bind(__webpack_require__, 51153)));const Route105=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_disable-filename-hash */ 61432).then(__webpack_require__.bind(__webpack_require__, 30896)));const Route106=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_disable-inline-runtime-chunk */ 21222).then(__webpack_require__.bind(__webpack_require__, 5746)));const Route107=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_disable-minimize */ 38715).then(__webpack_require__.bind(__webpack_require__, 43562)));const Route108=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_disable-node-polyfill */ 20194).then(__webpack_require__.bind(__webpack_require__, 47060)));const Route109=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_disable-source-map */ 25474).then(__webpack_require__.bind(__webpack_require__, 22896)));const Route110=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_disable-ts-checker */ 36623).then(__webpack_require__.bind(__webpack_require__, 16248)));const Route111=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_dist-path */ 87590).then(__webpack_require__.bind(__webpack_require__, 59497)));const Route112=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_enable-asset-fallback */ 84598).then(__webpack_require__.bind(__webpack_require__, 96776)));const Route113=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_enable-asset-manifest */ 91304).then(__webpack_require__.bind(__webpack_require__, 88338)));const Route114=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_enable-css-module-tsdeclaration */ 19496).then(__webpack_require__.bind(__webpack_require__, 37921)));const Route115=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_enable-inline-scripts */ 55475).then(__webpack_require__.bind(__webpack_require__, 18667)));const Route116=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_enable-inline-styles */ 83847).then(__webpack_require__.bind(__webpack_require__, 74449)));const Route117=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_enable-latest-decorators */ 15826).then(__webpack_require__.bind(__webpack_require__, 36906)));const Route118=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_externals */ 70329).then(__webpack_require__.bind(__webpack_require__, 81062)));const Route119=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_filename */ 22940).then(__webpack_require__.bind(__webpack_require__, 39590)));const Route120=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_legal-comments */ 92961).then(__webpack_require__.bind(__webpack_require__, 29002)));const Route121=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_override-browserslist */ 40136).then(__webpack_require__.bind(__webpack_require__, 38691)));const Route122=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_polyfill */ 37846).then(__webpack_require__.bind(__webpack_require__, 88758)));const Route123=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>Promise.all(/* import() | en_configure_app_output_ssg */[__webpack_require__.e(29169), __webpack_require__.e(47237)]).then(__webpack_require__.bind(__webpack_require__, 71906)));const Route124=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_output_svg-default-export */ 86862).then(__webpack_require__.bind(__webpack_require__, 83024)));const Route125=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_performance_build-cache */ 59117).then(__webpack_require__.bind(__webpack_require__, 84280)));const Route126=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_performance_bundle-analyze */ 85358).then(__webpack_require__.bind(__webpack_require__, 62439)));const Route127=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_performance_chunk-split */ 57952).then(__webpack_require__.bind(__webpack_require__, 9382)));const Route128=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_performance_print-file-size */ 12706).then(__webpack_require__.bind(__webpack_require__, 40861)));const Route129=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_performance_profile */ 94810).then(__webpack_require__.bind(__webpack_require__, 31933)));const Route130=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_performance_remove-console */ 36100).then(__webpack_require__.bind(__webpack_require__, 66728)));const Route131=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_performance_remove-moment-locale */ 98555).then(__webpack_require__.bind(__webpack_require__, 61517)));const Route132=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_plugins */ 77729).then(__webpack_require__.bind(__webpack_require__, 54511)));const Route133=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_runtime_intro */ 78823).then(__webpack_require__.bind(__webpack_require__, 25876)));const Route134=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_runtime_master-app */ 28765).then(__webpack_require__.bind(__webpack_require__, 85782)));const Route135=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_runtime_router */ 87891).then(__webpack_require__.bind(__webpack_require__, 23655)));const Route136=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_runtime_state */ 29319).then(__webpack_require__.bind(__webpack_require__, 25819)));const Route137=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_security_check-syntax */ 94938).then(__webpack_require__.bind(__webpack_require__, 64731)));const Route138=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_security_sri */ 6402).then(__webpack_require__.bind(__webpack_require__, 67275)));const Route139=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_server_base-url */ 85917).then(__webpack_require__.bind(__webpack_require__, 76937)));const Route140=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_server_enable-framework-ext */ 56910).then(__webpack_require__.bind(__webpack_require__, 72912)));const Route141=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_server_port */ 39175).then(__webpack_require__.bind(__webpack_require__, 17052)));const Route142=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_server_public-routes */ 93226).then(__webpack_require__.bind(__webpack_require__, 9475)));const Route143=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_server_routes */ 79302).then(__webpack_require__.bind(__webpack_require__, 54004)));const Route144=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_server_ssr-by-entries */ 8973).then(__webpack_require__.bind(__webpack_require__, 84489)));const Route145=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_server_ssr */ 87556).then(__webpack_require__.bind(__webpack_require__, 94518)));const Route146=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_source_alias */ 77774).then(__webpack_require__.bind(__webpack_require__, 63764)));const Route147=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_source_compile-js-data-uri */ 51464).then(__webpack_require__.bind(__webpack_require__, 95799)));const Route148=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_source_config-dir */ 49264).then(__webpack_require__.bind(__webpack_require__, 64711)));const Route149=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_source_define */ 22486).then(__webpack_require__.bind(__webpack_require__, 27578)));const Route150=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_source_design-system */ 49516).then(__webpack_require__.bind(__webpack_require__, 64111)));const Route151=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_source_disable-default-entries */ 57001).then(__webpack_require__.bind(__webpack_require__, 17195)));const Route152=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_source_disable-entry-dirs */ 21888).then(__webpack_require__.bind(__webpack_require__, 14773)));const Route153=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_source_enable-async-entry */ 76417).then(__webpack_require__.bind(__webpack_require__, 83847)));const Route154=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_source_entries-dir */ 85453).then(__webpack_require__.bind(__webpack_require__, 52793)));const Route155=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_source_entries */ 13122).then(__webpack_require__.bind(__webpack_require__, 48815)));const Route156=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_source_exclude */ 21513).then(__webpack_require__.bind(__webpack_require__, 2893)));const Route157=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_source_global-vars */ 16153).then(__webpack_require__.bind(__webpack_require__, 57038)));const Route158=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_source_include */ 4611).then(__webpack_require__.bind(__webpack_require__, 97221)));const Route159=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_source_module-scopes */ 29016).then(__webpack_require__.bind(__webpack_require__, 36220)));const Route160=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_source_pre-entry */ 31213).then(__webpack_require__.bind(__webpack_require__, 50250)));const Route161=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_source_resolve-extension-prefix */ 27633).then(__webpack_require__.bind(__webpack_require__, 46616)));const Route162=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_source_resolve-main-fields */ 4737).then(__webpack_require__.bind(__webpack_require__, 15094)));const Route163=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_testing_transformer */ 91256).then(__webpack_require__.bind(__webpack_require__, 51586)));const Route164=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_autoprefixer */ 15451).then(__webpack_require__.bind(__webpack_require__, 300)));const Route165=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_babel */ 4595).then(__webpack_require__.bind(__webpack_require__, 71255)));const Route166=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_css-extract */ 16941).then(__webpack_require__.bind(__webpack_require__, 21965)));const Route167=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_css-loader */ 43596).then(__webpack_require__.bind(__webpack_require__, 96279)));const Route168=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_dev-server */ 37100).then(__webpack_require__.bind(__webpack_require__, 18387)));const Route169=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_esbuild */ 25671).then(__webpack_require__.bind(__webpack_require__, 27268)));const Route170=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_html-plugin */ 80056).then(__webpack_require__.bind(__webpack_require__, 8486)));const Route171=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_inspector */ 63117).then(__webpack_require__.bind(__webpack_require__, 3588)));const Route172=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_jest */ 92003).then(__webpack_require__.bind(__webpack_require__, 52826)));const Route173=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_less */ 64092).then(__webpack_require__.bind(__webpack_require__, 34126)));const Route174=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_minify-css */ 32727).then(__webpack_require__.bind(__webpack_require__, 23902)));const Route175=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_postcss */ 25008).then(__webpack_require__.bind(__webpack_require__, 32258)));const Route176=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_pug */ 23274).then(__webpack_require__.bind(__webpack_require__, 98231)));const Route177=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_sass */ 26262).then(__webpack_require__.bind(__webpack_require__, 79519)));const Route178=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_style-loader */ 23641).then(__webpack_require__.bind(__webpack_require__, 10969)));const Route179=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_styled-components */ 72484).then(__webpack_require__.bind(__webpack_require__, 68741)));const Route180=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_swc */ 2184).then(__webpack_require__.bind(__webpack_require__, 86515)));const Route181=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_tailwindcss */ 46544).then(__webpack_require__.bind(__webpack_require__, 34940)));const Route182=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_terser */ 26470).then(__webpack_require__.bind(__webpack_require__, 29152)));const Route183=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_ts-checker */ 27389).then(__webpack_require__.bind(__webpack_require__, 26873)));const Route184=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_ts-loader */ 53470).then(__webpack_require__.bind(__webpack_require__, 56583)));const Route185=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_webpack-chain */ 43777).then(__webpack_require__.bind(__webpack_require__, 80058)));const Route186=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_tools_webpack */ 23917).then(__webpack_require__.bind(__webpack_require__, 58185)));const Route187=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_configure_app_usage */ 94981).then(__webpack_require__.bind(__webpack_require__, 84878)));const Route188=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_advanced-features_bff_bff-proxy */ 1371).then(__webpack_require__.bind(__webpack_require__, 6625)));const Route189=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_advanced-features_bff_frameworks */ 55232).then(__webpack_require__.bind(__webpack_require__, 35155)));const Route190=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_advanced-features_bff_function */ 28621).then(__webpack_require__.bind(__webpack_require__, 88495)));const Route191=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_advanced-features_bff_index */ 89933).then(__webpack_require__.bind(__webpack_require__, 31965)));const Route192=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_advanced-features_bff_type */ 30116).then(__webpack_require__.bind(__webpack_require__, 59845)));const Route193=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_advanced-features_code-split */ 2314).then(__webpack_require__.bind(__webpack_require__, 4538)));const Route194=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_advanced-features_compatibility */ 57259).then(__webpack_require__.bind(__webpack_require__, 96545)));const Route195=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_advanced-features_eslint */ 119).then(__webpack_require__.bind(__webpack_require__, 7581)));const Route196=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_advanced-features_index */ 51703).then(__webpack_require__.bind(__webpack_require__, 32200)));const Route197=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_advanced-features_low-level */ 54706).then(__webpack_require__.bind(__webpack_require__, 79852)));const Route198=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>Promise.all(/* import() | en_guides_advanced-features_ssg */[__webpack_require__.e(29169), __webpack_require__.e(93331)]).then(__webpack_require__.bind(__webpack_require__, 6112)));const Route199=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_advanced-features_ssr */ 63608).then(__webpack_require__.bind(__webpack_require__, 9188)));const Route200=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_advanced-features_testing */ 46600).then(__webpack_require__.bind(__webpack_require__, 65327)));const Route201=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_advanced-features_web-server */ 15814).then(__webpack_require__.bind(__webpack_require__, 30266)));const Route202=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_basic-features_alias */ 56553).then(__webpack_require__.bind(__webpack_require__, 49706)));const Route203=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_basic-features_builder */ 5352).then(__webpack_require__.bind(__webpack_require__, 10513)));const Route204=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_basic-features_css_css-in-js */ 25046).then(__webpack_require__.bind(__webpack_require__, 16859)));const Route205=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_basic-features_css_css-modules */ 31881).then(__webpack_require__.bind(__webpack_require__, 43593)));const Route206=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_basic-features_css_less-sass */ 6129).then(__webpack_require__.bind(__webpack_require__, 76722)));const Route207=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_basic-features_css_postcss */ 92001).then(__webpack_require__.bind(__webpack_require__, 72653)));const Route208=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_basic-features_css_tailwindcss */ 69128).then(__webpack_require__.bind(__webpack_require__, 23394)));const Route209=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_basic-features_data-fetch */ 75684).then(__webpack_require__.bind(__webpack_require__, 95219)));const Route210=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_basic-features_env-vars */ 77273).then(__webpack_require__.bind(__webpack_require__, 81174)));const Route211=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_basic-features_html */ 91285).then(__webpack_require__.bind(__webpack_require__, 75013)));const Route212=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_basic-features_mock */ 39121).then(__webpack_require__.bind(__webpack_require__, 15967)));const Route213=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_basic-features_proxy */ 87567).then(__webpack_require__.bind(__webpack_require__, 22454)));const Route214=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_basic-features_routes */ 88547).then(__webpack_require__.bind(__webpack_require__, 8392)));const Route215=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_concept_entries */ 4343).then(__webpack_require__.bind(__webpack_require__, 62899)));const Route216=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_get-started_quick-start */ 97371).then(__webpack_require__.bind(__webpack_require__, 65187)));const Route217=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_get-started_upgrade */ 88598).then(__webpack_require__.bind(__webpack_require__, 27572)));const Route218=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_framework-plugin_extend */ 6075).then(__webpack_require__.bind(__webpack_require__, 61106)));const Route219=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_framework-plugin_hook-list */ 25358).then(__webpack_require__.bind(__webpack_require__, 59519)));const Route220=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_framework-plugin_hook */ 78576).then(__webpack_require__.bind(__webpack_require__, 76282)));const Route221=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_framework-plugin_implement */ 50914).then(__webpack_require__.bind(__webpack_require__, 3064)));const Route222=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_framework-plugin_introduction */ 29467).then(__webpack_require__.bind(__webpack_require__, 93018)));const Route223=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_framework-plugin_lifecycle */ 61481).then(__webpack_require__.bind(__webpack_require__, 32136)));const Route224=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_framework-plugin_plugin-api */ 67011).then(__webpack_require__.bind(__webpack_require__, 8917)));const Route225=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_framework-plugin_relationship */ 60589).then(__webpack_require__.bind(__webpack_require__, 34833)));const Route226=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_codesmith_api_app */ 51553).then(__webpack_require__.bind(__webpack_require__, 23113)));const Route227=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_codesmith_api_ejs */ 28410).then(__webpack_require__.bind(__webpack_require__, 23988)));const Route228=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_codesmith_api_fs */ 94236).then(__webpack_require__.bind(__webpack_require__, 53352)));const Route229=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_codesmith_api_git */ 66575).then(__webpack_require__.bind(__webpack_require__, 35786)));const Route230=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_codesmith_api_handlebars */ 15368).then(__webpack_require__.bind(__webpack_require__, 9296)));const Route231=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_codesmith_api_json */ 11413).then(__webpack_require__.bind(__webpack_require__, 84413)));const Route232=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_codesmith_api_npm */ 57729).then(__webpack_require__.bind(__webpack_require__, 52109)));const Route233=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_codesmith_develop */ 89358).then(__webpack_require__.bind(__webpack_require__, 42245)));const Route234=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_codesmith_introduce */ 15722).then(__webpack_require__.bind(__webpack_require__, 29773)));const Route235=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_codesmith_run-in-js */ 59393).then(__webpack_require__.bind(__webpack_require__, 39221)));const Route236=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_codesmith_structure */ 80488).then(__webpack_require__.bind(__webpack_require__, 93145)));const Route237=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_config_app */ 57689).then(__webpack_require__.bind(__webpack_require__, 14178)));const Route238=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_config_common */ 70655).then(__webpack_require__.bind(__webpack_require__, 18799)));const Route239=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_config_module */ 98515).then(__webpack_require__.bind(__webpack_require__, 47535)));const Route240=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_config_monorepo */ 27510).then(__webpack_require__.bind(__webpack_require__, 46174)));const Route241=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_abstract */ 97120).then(__webpack_require__.bind(__webpack_require__, 97681)));const Route242=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_file_addFile */ 44474).then(__webpack_require__.bind(__webpack_require__, 82430)));const Route243=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_file_addHelper */ 94749).then(__webpack_require__.bind(__webpack_require__, 58799)));const Route244=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_file_addManyFile */ 85267).then(__webpack_require__.bind(__webpack_require__, 90535)));const Route245=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_file_addPartial */ 65083).then(__webpack_require__.bind(__webpack_require__, 94163)));const Route246=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_file_introduce */ 54365).then(__webpack_require__.bind(__webpack_require__, 91683)));const Route247=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_file_rmDir */ 28315).then(__webpack_require__.bind(__webpack_require__, 59370)));const Route248=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_file_rmFile */ 66251).then(__webpack_require__.bind(__webpack_require__, 81526)));const Route249=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_file_updateJSONFile */ 54453).then(__webpack_require__.bind(__webpack_require__, 44901)));const Route250=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_file_updateModernConfig */ 59304).then(__webpack_require__.bind(__webpack_require__, 37128)));const Route251=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_file_updateTextRawFile */ 57051).then(__webpack_require__.bind(__webpack_require__, 52854)));const Route252=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_git_gitAddAndCommit */ 95772).then(__webpack_require__.bind(__webpack_require__, 70371)));const Route253=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_git_initGitRepo */ 68027).then(__webpack_require__.bind(__webpack_require__, 8626)));const Route254=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_git_isInGitRepo */ 46348).then(__webpack_require__.bind(__webpack_require__, 45005)));const Route255=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_hook_afterForged */ 61989).then(__webpack_require__.bind(__webpack_require__, 53134)));const Route256=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_hook_onForged */ 30633).then(__webpack_require__.bind(__webpack_require__, 28067)));const Route257=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_info_isFileExit */ 4266).then(__webpack_require__.bind(__webpack_require__, 88374)));const Route258=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_info_locale */ 34805).then(__webpack_require__.bind(__webpack_require__, 63208)));const Route259=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_info_readDir */ 68487).then(__webpack_require__.bind(__webpack_require__, 46998)));const Route260=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_input_addInputAfter */ 42803).then(__webpack_require__.bind(__webpack_require__, 22361)));const Route261=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_input_addInputBefore */ 79755).then(__webpack_require__.bind(__webpack_require__, 97476)));const Route262=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_input_setInput */ 33222).then(__webpack_require__.bind(__webpack_require__, 92181)));const Route263=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_input_setInputValue */ 70464).then(__webpack_require__.bind(__webpack_require__, 8540)));const Route264=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_input_type */ 6320).then(__webpack_require__.bind(__webpack_require__, 35923)));const Route265=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_introduce */ 75114).then(__webpack_require__.bind(__webpack_require__, 19276)));const Route266=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_new_createElement */ 13771).then(__webpack_require__.bind(__webpack_require__, 93287)));const Route267=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_new_createSubProject */ 38198).then(__webpack_require__.bind(__webpack_require__, 14526)));const Route268=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_new_enableFunc */ 29761).then(__webpack_require__.bind(__webpack_require__, 14959)));const Route269=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_new_introduce */ 40464).then(__webpack_require__.bind(__webpack_require__, 94342)));const Route270=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_api_npm_install */ 66195).then(__webpack_require__.bind(__webpack_require__, 32471)));const Route271=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_develop */ 63412).then(__webpack_require__.bind(__webpack_require__, 58917)));const Route272=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_plugin_use */ 76091).then(__webpack_require__.bind(__webpack_require__, 23347)));const Route273=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_generator_project */ 35722).then(__webpack_require__.bind(__webpack_require__, 53784)));const Route274=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_micro-frontend_c01-introduction */ 71404).then(__webpack_require__.bind(__webpack_require__, 39784)));const Route275=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>Promise.all(/* import() | en_guides_topic-detail_micro-frontend_c02-development */[__webpack_require__.e(37085), __webpack_require__.e(19254)]).then(__webpack_require__.bind(__webpack_require__, 43591)));const Route276=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>Promise.all(/* import() | en_guides_topic-detail_micro-frontend_c03-main-app */[__webpack_require__.e(37085), __webpack_require__.e(34823)]).then(__webpack_require__.bind(__webpack_require__, 36041)));const Route277=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_micro-frontend_c04-communicate */ 40158).then(__webpack_require__.bind(__webpack_require__, 4299)));const Route278=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_micro-frontend_c05-mixed-stack */ 14514).then(__webpack_require__.bind(__webpack_require__, 20964)));const Route279=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_model_auto-actions */ 79833).then(__webpack_require__.bind(__webpack_require__, 38194)));const Route280=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_model_computed-state */ 81260).then(__webpack_require__.bind(__webpack_require__, 77373)));const Route281=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_model_define-model */ 59471).then(__webpack_require__.bind(__webpack_require__, 53151)));const Route282=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_model_faq */ 71975).then(__webpack_require__.bind(__webpack_require__, 41524)));const Route283=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_model_manage-effects */ 82619).then(__webpack_require__.bind(__webpack_require__, 93081)));const Route284=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_model_model-communicate */ 66453).then(__webpack_require__.bind(__webpack_require__, 32820)));const Route285=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_model_performance */ 25019).then(__webpack_require__.bind(__webpack_require__, 67787)));const Route286=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_model_quick-start */ 57255).then(__webpack_require__.bind(__webpack_require__, 10750)));const Route287=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_model_redux-integration */ 73654).then(__webpack_require__.bind(__webpack_require__, 43937)));const Route288=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_model_test-model */ 77975).then(__webpack_require__.bind(__webpack_require__, 61777)));const Route289=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_model_typescript-best-practice */ 56714).then(__webpack_require__.bind(__webpack_require__, 33840)));const Route290=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_model_use-model */ 25628).then(__webpack_require__.bind(__webpack_require__, 41529)));const Route291=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_topic-detail_model_use-out-of-modernjs */ 52342).then(__webpack_require__.bind(__webpack_require__, 93448)));const Route292=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_guides_troubleshooting_cli */ 43074).then(__webpack_require__.bind(__webpack_require__, 75881)));const Route293=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_index */ 10315).then(__webpack_require__.bind(__webpack_require__, 71741)));const Route294=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_tutorials_first-app_c01-start */ 97837).then(__webpack_require__.bind(__webpack_require__, 94267)));const Route295=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_tutorials_first-app_c02-component */ 55073).then(__webpack_require__.bind(__webpack_require__, 96035)));const Route296=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_tutorials_first-app_c03-css */ 91014).then(__webpack_require__.bind(__webpack_require__, 2656)));const Route297=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_tutorials_first-app_c04-routes */ 7201).then(__webpack_require__.bind(__webpack_require__, 39907)));const Route298=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_tutorials_first-app_c05-loader */ 70103).then(__webpack_require__.bind(__webpack_require__, 3598)));const Route299=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_tutorials_first-app_c06-model */ 44063).then(__webpack_require__.bind(__webpack_require__, 37694)));const Route300=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_tutorials_first-app_c07-container */ 12259).then(__webpack_require__.bind(__webpack_require__, 91402)));const Route301=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_tutorials_first-app_c08-entries */ 58366).then(__webpack_require__.bind(__webpack_require__, 89607)));const Route302=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | en_tutorials_foundations_introduction */ 70425).then(__webpack_require__.bind(__webpack_require__, 79246)));const Route303=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_commands_build */ 78102).then(__webpack_require__.bind(__webpack_require__, 64069)));const Route304=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_commands_dev */ 15905).then(__webpack_require__.bind(__webpack_require__, 2687)));const Route305=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_commands_index */ 58268).then(__webpack_require__.bind(__webpack_require__, 65723)));const Route306=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_commands_inspect */ 43388).then(__webpack_require__.bind(__webpack_require__, 64778)));const Route307=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_commands_lint */ 29103).then(__webpack_require__.bind(__webpack_require__, 88007)));const Route308=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_commands_new */ 56844).then(__webpack_require__.bind(__webpack_require__, 51988)));const Route309=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_commands_serve */ 14163).then(__webpack_require__.bind(__webpack_require__, 29961)));const Route310=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_commands_test */ 17370).then(__webpack_require__.bind(__webpack_require__, 55119)));const Route311=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_commands_upgrade */ 6612).then(__webpack_require__.bind(__webpack_require__, 43901)));const Route312=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_api_framework_lambda */ 28202).then(__webpack_require__.bind(__webpack_require__, 97005)));const Route313=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_api_functions_api */ 69094).then(__webpack_require__.bind(__webpack_require__, 51903)));const Route314=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_api_functions_app */ 29032).then(__webpack_require__.bind(__webpack_require__, 41821)));const Route315=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_api_functions_common */ 5946).then(__webpack_require__.bind(__webpack_require__, 46539)));const Route316=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_api_test */ 8875).then(__webpack_require__.bind(__webpack_require__, 85151)));const Route317=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_config_html */ 40934).then(__webpack_require__.bind(__webpack_require__, 55509)));const Route318=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_config_icon */ 22306).then(__webpack_require__.bind(__webpack_require__, 57010)));const Route319=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_config_mock */ 41157).then(__webpack_require__.bind(__webpack_require__, 61732)));const Route320=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_config_public */ 2564).then(__webpack_require__.bind(__webpack_require__, 58787)));const Route321=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_config_storybook */ 60833).then(__webpack_require__.bind(__webpack_require__, 20731)));const Route322=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_config_upload */ 10881).then(__webpack_require__.bind(__webpack_require__, 53706)));const Route323=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_index */ 63206).then(__webpack_require__.bind(__webpack_require__, 71221)));const Route324=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_modern-config */ 95900).then(__webpack_require__.bind(__webpack_require__, 80182)));const Route325=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_server_index_ */ 29942).then(__webpack_require__.bind(__webpack_require__, 76000)));const Route326=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_server_test */ 58969).then(__webpack_require__.bind(__webpack_require__, 74611)));const Route327=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_shared */ 58205).then(__webpack_require__.bind(__webpack_require__, 5834)));const Route328=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_src_app */ 14693).then(__webpack_require__.bind(__webpack_require__, 13355)));const Route329=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_src_index_ */ 10318).then(__webpack_require__.bind(__webpack_require__, 79762)));const Route330=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_src_pages */ 9962).then(__webpack_require__.bind(__webpack_require__, 95900)));const Route331=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_src_routes */ 70986).then(__webpack_require__.bind(__webpack_require__, 96213)));const Route332=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_src_server */ 20003).then(__webpack_require__.bind(__webpack_require__, 43006)));const Route333=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_src_stories */ 96567).then(__webpack_require__.bind(__webpack_require__, 19969)));const Route334=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_hooks_src_test */ 92531).then(__webpack_require__.bind(__webpack_require__, 2421)));const Route335=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_app_define-config */ 48894).then(__webpack_require__.bind(__webpack_require__, 95544)));const Route336=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_bff_hook */ 1005).then(__webpack_require__.bind(__webpack_require__, 7499)));const Route337=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_bff_use-context */ 71963).then(__webpack_require__.bind(__webpack_require__, 20932)));const Route338=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_core_bootstrap */ 602).then(__webpack_require__.bind(__webpack_require__, 34095)));const Route339=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_core_create-app */ 46066).then(__webpack_require__.bind(__webpack_require__, 38193)));const Route340=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_core_use-loader */ 35726).then(__webpack_require__.bind(__webpack_require__, 94953)));const Route341=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>Promise.all(/* import() | zh_apis_app_runtime_core_use-module-apps */[__webpack_require__.e(37085), __webpack_require__.e(71960)]).then(__webpack_require__.bind(__webpack_require__, 71018)));const Route342=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_core_use-runtime-context */ 36991).then(__webpack_require__.bind(__webpack_require__, 23215)));const Route343=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_index */ 1870).then(__webpack_require__.bind(__webpack_require__, 54251)));const Route344=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_model_Provider */ 12211).then(__webpack_require__.bind(__webpack_require__, 39579)));const Route345=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_model_auto-actions */ 74126).then(__webpack_require__.bind(__webpack_require__, 31516)));const Route346=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_model_connect */ 4912).then(__webpack_require__.bind(__webpack_require__, 60886)));const Route347=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_model_create-app */ 27534).then(__webpack_require__.bind(__webpack_require__, 38916)));const Route348=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_model_create-store */ 26055).then(__webpack_require__.bind(__webpack_require__, 13827)));const Route349=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_model_handle-effect */ 25704).then(__webpack_require__.bind(__webpack_require__, 28869)));const Route350=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_model_model_ */ 2131).then(__webpack_require__.bind(__webpack_require__, 59138)));const Route351=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_model_use-local-model */ 90542).then(__webpack_require__.bind(__webpack_require__, 82979)));const Route352=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_model_use-model */ 1829).then(__webpack_require__.bind(__webpack_require__, 70677)));const Route353=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_model_use-static-model */ 81063).then(__webpack_require__.bind(__webpack_require__, 23417)));const Route354=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_model_use-store */ 89828).then(__webpack_require__.bind(__webpack_require__, 49852)));const Route355=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_router_router */ 99374).then(__webpack_require__.bind(__webpack_require__, 20166)));const Route356=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_ssr_no-ssr */ 22452).then(__webpack_require__.bind(__webpack_require__, 25427)));const Route357=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_ssr_pre-render */ 93777).then(__webpack_require__.bind(__webpack_require__, 19993)));const Route358=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_testing_act */ 46321).then(__webpack_require__.bind(__webpack_require__, 10276)));const Route359=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_testing_cleanup */ 59657).then(__webpack_require__.bind(__webpack_require__, 61864)));const Route360=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_testing_render */ 76541).then(__webpack_require__.bind(__webpack_require__, 17823)));const Route361=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_testing_renderApp */ 18317).then(__webpack_require__.bind(__webpack_require__, 30631)));const Route362=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_utility_css-in-js */ 25447).then(__webpack_require__.bind(__webpack_require__, 24963)));const Route363=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_utility_head */ 39625).then(__webpack_require__.bind(__webpack_require__, 21096)));const Route364=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_utility_loadable */ 86085).then(__webpack_require__.bind(__webpack_require__, 18974)));const Route365=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_web-server_hook */ 51491).then(__webpack_require__.bind(__webpack_require__, 76580)));const Route366=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_app_runtime_web-server_middleware */ 62626).then(__webpack_require__.bind(__webpack_require__, 38979)));const Route367=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_commands_bump */ 93916).then(__webpack_require__.bind(__webpack_require__, 31609)));const Route368=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_commands_change */ 22423).then(__webpack_require__.bind(__webpack_require__, 2549)));const Route369=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_commands_clear */ 24672).then(__webpack_require__.bind(__webpack_require__, 51245)));const Route370=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_commands_deploy */ 9460).then(__webpack_require__.bind(__webpack_require__, 97469)));const Route371=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_commands_gen-release-note */ 56369).then(__webpack_require__.bind(__webpack_require__, 66119)));const Route372=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_commands_index */ 15387).then(__webpack_require__.bind(__webpack_require__, 68626)));const Route373=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_commands_lint */ 4970).then(__webpack_require__.bind(__webpack_require__, 6143)));const Route374=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_commands_new */ 93917).then(__webpack_require__.bind(__webpack_require__, 34179)));const Route375=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_commands_pre */ 78169).then(__webpack_require__.bind(__webpack_require__, 53383)));const Route376=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_commands_release */ 5814).then(__webpack_require__.bind(__webpack_require__, 46361)));const Route377=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_commands_upgrade */ 88197).then(__webpack_require__.bind(__webpack_require__, 66582)));const Route378=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_hooks_apps */ 52085).then(__webpack_require__.bind(__webpack_require__, 849)));const Route379=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_hooks_code-workspace */ 16218).then(__webpack_require__.bind(__webpack_require__, 46917)));const Route380=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_hooks_examples */ 79924).then(__webpack_require__.bind(__webpack_require__, 13465)));const Route381=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_hooks_features */ 84875).then(__webpack_require__.bind(__webpack_require__, 91670)));const Route382=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_hooks_index */ 11937).then(__webpack_require__.bind(__webpack_require__, 16013)));const Route383=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_hooks_packages */ 26386).then(__webpack_require__.bind(__webpack_require__, 66455)));const Route384=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_hooks_pnpm-workspace */ 37426).then(__webpack_require__.bind(__webpack_require__, 62167)));const Route385=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_apis_monorepo_hooks_pnpmfile */ 86282).then(__webpack_require__.bind(__webpack_require__, 11426)));const Route386=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_blog_index */ 70775).then(__webpack_require__.bind(__webpack_require__, 68662)));const Route387=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_community_index */ 93970).then(__webpack_require__.bind(__webpack_require__, 29011)));const Route388=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_auto-load-plugin */ 4326).then(__webpack_require__.bind(__webpack_require__, 19742)));const Route389=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_bff_prefix */ 96932).then(__webpack_require__.bind(__webpack_require__, 5567)));const Route390=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_bff_proxy */ 91970).then(__webpack_require__.bind(__webpack_require__, 63801)));const Route391=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_builder-plugins */ 12212).then(__webpack_require__.bind(__webpack_require__, 868)));const Route392=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_deploy_microFrontend */ 26226).then(__webpack_require__.bind(__webpack_require__, 83012)));const Route393=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_dev_asset-prefix */ 19875).then(__webpack_require__.bind(__webpack_require__, 17203)));const Route394=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_dev_hmr */ 41277).then(__webpack_require__.bind(__webpack_require__, 88523)));const Route395=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_dev_https */ 31096).then(__webpack_require__.bind(__webpack_require__, 92311)));const Route396=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_dev_port */ 60026).then(__webpack_require__.bind(__webpack_require__, 75880)));const Route397=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_dev_progress-bar */ 42338).then(__webpack_require__.bind(__webpack_require__, 75531)));const Route398=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_dev_proxy */ 58887).then(__webpack_require__.bind(__webpack_require__, 63917)));const Route399=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_dev_start-url */ 29179).then(__webpack_require__.bind(__webpack_require__, 12107)));const Route400=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_experiments_lazy-compilation */ 84929).then(__webpack_require__.bind(__webpack_require__, 35265)));const Route401=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_app-icon */ 91292).then(__webpack_require__.bind(__webpack_require__, 11589)));const Route402=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_crossorigin */ 91096).then(__webpack_require__.bind(__webpack_require__, 24115)));const Route403=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_disable-html-folder */ 28748).then(__webpack_require__.bind(__webpack_require__, 20571)));const Route404=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_favicon-by-entries */ 71340).then(__webpack_require__.bind(__webpack_require__, 88200)));const Route405=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_favicon */ 92301).then(__webpack_require__.bind(__webpack_require__, 62582)));const Route406=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_inject-by-entries */ 23521).then(__webpack_require__.bind(__webpack_require__, 47645)));const Route407=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_inject */ 19148).then(__webpack_require__.bind(__webpack_require__, 68274)));const Route408=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_meta-by-entries */ 62220).then(__webpack_require__.bind(__webpack_require__, 2943)));const Route409=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_meta */ 75430).then(__webpack_require__.bind(__webpack_require__, 10898)));const Route410=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_mount-id */ 36149).then(__webpack_require__.bind(__webpack_require__, 81708)));const Route411=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_tags-by-entries */ 53831).then(__webpack_require__.bind(__webpack_require__, 53123)));const Route412=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_tags */ 45168).then(__webpack_require__.bind(__webpack_require__, 56163)));const Route413=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_template-by-entries */ 42824).then(__webpack_require__.bind(__webpack_require__, 7723)));const Route414=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_template-parameters-by-entries */ 46138).then(__webpack_require__.bind(__webpack_require__, 11374)));const Route415=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_template-parameters */ 79838).then(__webpack_require__.bind(__webpack_require__, 37995)));const Route416=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_template */ 66572).then(__webpack_require__.bind(__webpack_require__, 53282)));const Route417=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_title-by-entries */ 29208).then(__webpack_require__.bind(__webpack_require__, 48761)));const Route418=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_html_title */ 90987).then(__webpack_require__.bind(__webpack_require__, 15954)));const Route419=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_asset-prefix */ 78639).then(__webpack_require__.bind(__webpack_require__, 90029)));const Route420=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_assets-retry */ 31297).then(__webpack_require__.bind(__webpack_require__, 63649)));const Route421=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_charset */ 91686).then(__webpack_require__.bind(__webpack_require__, 59532)));const Route422=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_clean-dist-path */ 65090).then(__webpack_require__.bind(__webpack_require__, 76098)));const Route423=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_convert-to-rem */ 41820).then(__webpack_require__.bind(__webpack_require__, 42042)));const Route424=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_copy */ 47597).then(__webpack_require__.bind(__webpack_require__, 77053)));const Route425=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_css-module-local-ident-name */ 35138).then(__webpack_require__.bind(__webpack_require__, 76285)));const Route426=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_data-uri-limit */ 62450).then(__webpack_require__.bind(__webpack_require__, 1823)));const Route427=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_disable-css-extract */ 14253).then(__webpack_require__.bind(__webpack_require__, 76826)));const Route428=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_disable-css-module-extension */ 59935).then(__webpack_require__.bind(__webpack_require__, 40995)));const Route429=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_disable-filename-hash */ 42335).then(__webpack_require__.bind(__webpack_require__, 76478)));const Route430=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_disable-inline-runtime-chunk */ 20038).then(__webpack_require__.bind(__webpack_require__, 31727)));const Route431=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_disable-minimize */ 81201).then(__webpack_require__.bind(__webpack_require__, 36045)));const Route432=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_disable-node-polyfill */ 9233).then(__webpack_require__.bind(__webpack_require__, 61828)));const Route433=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_disable-source-map */ 13443).then(__webpack_require__.bind(__webpack_require__, 21287)));const Route434=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_disable-ts-checker */ 19522).then(__webpack_require__.bind(__webpack_require__, 52315)));const Route435=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_dist-path */ 12146).then(__webpack_require__.bind(__webpack_require__, 46287)));const Route436=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_enable-asset-fallback */ 17356).then(__webpack_require__.bind(__webpack_require__, 16386)));const Route437=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_enable-asset-manifest */ 92210).then(__webpack_require__.bind(__webpack_require__, 87368)));const Route438=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_enable-css-module-tsdeclaration */ 44471).then(__webpack_require__.bind(__webpack_require__, 46288)));const Route439=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_enable-inline-scripts */ 45126).then(__webpack_require__.bind(__webpack_require__, 78879)));const Route440=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_enable-inline-styles */ 83994).then(__webpack_require__.bind(__webpack_require__, 55593)));const Route441=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_enable-latest-decorators */ 26016).then(__webpack_require__.bind(__webpack_require__, 58329)));const Route442=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_externals */ 7843).then(__webpack_require__.bind(__webpack_require__, 24556)));const Route443=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_filename */ 56183).then(__webpack_require__.bind(__webpack_require__, 29718)));const Route444=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_legal-comments */ 37046).then(__webpack_require__.bind(__webpack_require__, 96879)));const Route445=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_override-browserslist */ 77274).then(__webpack_require__.bind(__webpack_require__, 13382)));const Route446=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_polyfill */ 52220).then(__webpack_require__.bind(__webpack_require__, 36268)));const Route447=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>Promise.all(/* import() | zh_configure_app_output_ssg */[__webpack_require__.e(29169), __webpack_require__.e(91951)]).then(__webpack_require__.bind(__webpack_require__, 64027)));const Route448=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_output_svg-default-export */ 34012).then(__webpack_require__.bind(__webpack_require__, 6284)));const Route449=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_performance_build-cache */ 62786).then(__webpack_require__.bind(__webpack_require__, 28229)));const Route450=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_performance_bundle-analyze */ 97229).then(__webpack_require__.bind(__webpack_require__, 14975)));const Route451=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_performance_chunk-split */ 20567).then(__webpack_require__.bind(__webpack_require__, 2775)));const Route452=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_performance_print-file-size */ 63349).then(__webpack_require__.bind(__webpack_require__, 40547)));const Route453=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_performance_profile */ 46617).then(__webpack_require__.bind(__webpack_require__, 56068)));const Route454=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_performance_remove-console */ 27778).then(__webpack_require__.bind(__webpack_require__, 30660)));const Route455=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_performance_remove-moment-locale */ 99412).then(__webpack_require__.bind(__webpack_require__, 64580)));const Route456=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_plugins */ 91547).then(__webpack_require__.bind(__webpack_require__, 22340)));const Route457=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_runtime_intro */ 34197).then(__webpack_require__.bind(__webpack_require__, 73238)));const Route458=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_runtime_master-app */ 14042).then(__webpack_require__.bind(__webpack_require__, 90120)));const Route459=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_runtime_router */ 16244).then(__webpack_require__.bind(__webpack_require__, 14670)));const Route460=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_runtime_state */ 92589).then(__webpack_require__.bind(__webpack_require__, 84725)));const Route461=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_security_check-syntax */ 91597).then(__webpack_require__.bind(__webpack_require__, 11303)));const Route462=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_security_sri */ 82757).then(__webpack_require__.bind(__webpack_require__, 18045)));const Route463=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_server_base-url */ 18572).then(__webpack_require__.bind(__webpack_require__, 61806)));const Route464=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_server_enable-framework-ext */ 85861).then(__webpack_require__.bind(__webpack_require__, 13186)));const Route465=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_server_port */ 40193).then(__webpack_require__.bind(__webpack_require__, 41927)));const Route466=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_server_public-routes */ 62531).then(__webpack_require__.bind(__webpack_require__, 54839)));const Route467=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_server_routes */ 28366).then(__webpack_require__.bind(__webpack_require__, 65271)));const Route468=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_server_ssr-by-entries */ 61707).then(__webpack_require__.bind(__webpack_require__, 8078)));const Route469=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_server_ssr */ 639).then(__webpack_require__.bind(__webpack_require__, 58220)));const Route470=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_source_alias */ 2022).then(__webpack_require__.bind(__webpack_require__, 63329)));const Route471=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_source_compile-js-data-uri */ 3083).then(__webpack_require__.bind(__webpack_require__, 48130)));const Route472=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_source_config-dir */ 47177).then(__webpack_require__.bind(__webpack_require__, 66558)));const Route473=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_source_define */ 22782).then(__webpack_require__.bind(__webpack_require__, 49175)));const Route474=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_source_design-system */ 14294).then(__webpack_require__.bind(__webpack_require__, 93298)));const Route475=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_source_disable-default-entries */ 25912).then(__webpack_require__.bind(__webpack_require__, 77166)));const Route476=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_source_disable-entry-dirs */ 76877).then(__webpack_require__.bind(__webpack_require__, 14663)));const Route477=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_source_enable-async-entry */ 5643).then(__webpack_require__.bind(__webpack_require__, 26797)));const Route478=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_source_entries-dir */ 64731).then(__webpack_require__.bind(__webpack_require__, 40)));const Route479=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_source_entries */ 28561).then(__webpack_require__.bind(__webpack_require__, 74230)));const Route480=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_source_exclude */ 27056).then(__webpack_require__.bind(__webpack_require__, 30753)));const Route481=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_source_global-vars */ 16201).then(__webpack_require__.bind(__webpack_require__, 82895)));const Route482=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_source_include */ 42854).then(__webpack_require__.bind(__webpack_require__, 53017)));const Route483=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_source_module-scopes */ 91643).then(__webpack_require__.bind(__webpack_require__, 81344)));const Route484=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_source_pre-entry */ 6077).then(__webpack_require__.bind(__webpack_require__, 10986)));const Route485=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_source_resolve-extension-prefix */ 12844).then(__webpack_require__.bind(__webpack_require__, 63893)));const Route486=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_source_resolve-main-fields */ 55814).then(__webpack_require__.bind(__webpack_require__, 63366)));const Route487=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_testing_transformer */ 77267).then(__webpack_require__.bind(__webpack_require__, 36367)));const Route488=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_autoprefixer */ 67603).then(__webpack_require__.bind(__webpack_require__, 44058)));const Route489=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_babel */ 54191).then(__webpack_require__.bind(__webpack_require__, 43211)));const Route490=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_css-extract */ 4813).then(__webpack_require__.bind(__webpack_require__, 69078)));const Route491=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_css-loader */ 95833).then(__webpack_require__.bind(__webpack_require__, 74156)));const Route492=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_dev-server */ 10209).then(__webpack_require__.bind(__webpack_require__, 83477)));const Route493=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_esbuild */ 90774).then(__webpack_require__.bind(__webpack_require__, 72145)));const Route494=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_html-plugin */ 82773).then(__webpack_require__.bind(__webpack_require__, 82921)));const Route495=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_inspector */ 40913).then(__webpack_require__.bind(__webpack_require__, 720)));const Route496=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_jest */ 14566).then(__webpack_require__.bind(__webpack_require__, 71164)));const Route497=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_less */ 81006).then(__webpack_require__.bind(__webpack_require__, 85442)));const Route498=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_minify-css */ 31255).then(__webpack_require__.bind(__webpack_require__, 95186)));const Route499=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_postcss */ 3027).then(__webpack_require__.bind(__webpack_require__, 27088)));const Route500=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_pug */ 89344).then(__webpack_require__.bind(__webpack_require__, 57071)));const Route501=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_sass */ 86613).then(__webpack_require__.bind(__webpack_require__, 17603)));const Route502=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_style-loader */ 50410).then(__webpack_require__.bind(__webpack_require__, 48241)));const Route503=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_styled-components */ 91906).then(__webpack_require__.bind(__webpack_require__, 89913)));const Route504=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_swc */ 66567).then(__webpack_require__.bind(__webpack_require__, 59976)));const Route505=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_tailwindcss */ 6656).then(__webpack_require__.bind(__webpack_require__, 31990)));const Route506=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_terser */ 97931).then(__webpack_require__.bind(__webpack_require__, 88012)));const Route507=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_ts-checker */ 3510).then(__webpack_require__.bind(__webpack_require__, 55147)));const Route508=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_ts-loader */ 76080).then(__webpack_require__.bind(__webpack_require__, 47793)));const Route509=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_webpack-chain */ 13987).then(__webpack_require__.bind(__webpack_require__, 82589)));const Route510=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_tools_webpack */ 36297).then(__webpack_require__.bind(__webpack_require__, 55230)));const Route511=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_configure_app_usage */ 53694).then(__webpack_require__.bind(__webpack_require__, 7299)));const Route512=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_advanced-features_bff_bff-proxy */ 84345).then(__webpack_require__.bind(__webpack_require__, 33466)));const Route513=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_advanced-features_bff_frameworks */ 47492).then(__webpack_require__.bind(__webpack_require__, 8549)));const Route514=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_advanced-features_bff_function */ 44812).then(__webpack_require__.bind(__webpack_require__, 34623)));const Route515=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_advanced-features_bff_index */ 74391).then(__webpack_require__.bind(__webpack_require__, 85062)));const Route516=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_advanced-features_bff_type */ 93763).then(__webpack_require__.bind(__webpack_require__, 26126)));const Route517=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_advanced-features_code-split */ 22200).then(__webpack_require__.bind(__webpack_require__, 54738)));const Route518=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_advanced-features_compatibility */ 67414).then(__webpack_require__.bind(__webpack_require__, 97106)));const Route519=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_advanced-features_eslint */ 3694).then(__webpack_require__.bind(__webpack_require__, 79835)));const Route520=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_advanced-features_index */ 40086).then(__webpack_require__.bind(__webpack_require__, 77531)));const Route521=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_advanced-features_low-level */ 41037).then(__webpack_require__.bind(__webpack_require__, 16236)));const Route522=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>Promise.all(/* import() | zh_guides_advanced-features_ssg */[__webpack_require__.e(29169), __webpack_require__.e(27302)]).then(__webpack_require__.bind(__webpack_require__, 3856)));const Route523=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_advanced-features_ssr */ 23665).then(__webpack_require__.bind(__webpack_require__, 91059)));const Route524=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_advanced-features_testing */ 10296).then(__webpack_require__.bind(__webpack_require__, 72392)));const Route525=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_advanced-features_web-server */ 24858).then(__webpack_require__.bind(__webpack_require__, 69984)));const Route526=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_basic-features_alias */ 61175).then(__webpack_require__.bind(__webpack_require__, 54019)));const Route527=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_basic-features_builder */ 48626).then(__webpack_require__.bind(__webpack_require__, 22886)));const Route528=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_basic-features_css_css-in-js */ 86152).then(__webpack_require__.bind(__webpack_require__, 46363)));const Route529=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_basic-features_css_css-modules */ 10202).then(__webpack_require__.bind(__webpack_require__, 20574)));const Route530=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_basic-features_css_less-sass */ 86206).then(__webpack_require__.bind(__webpack_require__, 18507)));const Route531=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_basic-features_css_postcss */ 69710).then(__webpack_require__.bind(__webpack_require__, 34081)));const Route532=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_basic-features_css_tailwindcss */ 9828).then(__webpack_require__.bind(__webpack_require__, 15394)));const Route533=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_basic-features_data-fetch */ 95959).then(__webpack_require__.bind(__webpack_require__, 82175)));const Route534=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_basic-features_env-vars */ 16609).then(__webpack_require__.bind(__webpack_require__, 57175)));const Route535=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_basic-features_html */ 10529).then(__webpack_require__.bind(__webpack_require__, 73931)));const Route536=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_basic-features_index */ 8227).then(__webpack_require__.bind(__webpack_require__, 87765)));const Route537=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_basic-features_mock */ 23212).then(__webpack_require__.bind(__webpack_require__, 55722)));const Route538=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_basic-features_proxy */ 38225).then(__webpack_require__.bind(__webpack_require__, 98677)));const Route539=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_basic-features_routes */ 81409).then(__webpack_require__.bind(__webpack_require__, 98683)));const Route540=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_concept_entries */ 86650).then(__webpack_require__.bind(__webpack_require__, 17243)));const Route541=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>Promise.all(/* import() | zh_guides_get-started_quick-start */[__webpack_require__.e(86630), __webpack_require__.e(2742)]).then(__webpack_require__.bind(__webpack_require__, 9760)));const Route542=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_get-started_upgrade */ 7344).then(__webpack_require__.bind(__webpack_require__, 81302)));const Route543=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_changesets_add */ 21693).then(__webpack_require__.bind(__webpack_require__, 22426)));const Route544=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_changesets_changelog */ 48292).then(__webpack_require__.bind(__webpack_require__, 651)));const Route545=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_changesets_commit */ 64743).then(__webpack_require__.bind(__webpack_require__, 15266)));const Route546=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_changesets_config */ 70792).then(__webpack_require__.bind(__webpack_require__, 68387)));const Route547=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_changesets_github */ 35453).then(__webpack_require__.bind(__webpack_require__, 6221)));const Route548=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_changesets_introduce */ 33739).then(__webpack_require__.bind(__webpack_require__, 62373)));const Route549=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_changesets_release-note */ 20345).then(__webpack_require__.bind(__webpack_require__, 75653)));const Route550=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_changesets_release-pre */ 99510).then(__webpack_require__.bind(__webpack_require__, 45391)));const Route551=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_changesets_release */ 10302).then(__webpack_require__.bind(__webpack_require__, 26541)));const Route552=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_framework-plugin_extend */ 66198).then(__webpack_require__.bind(__webpack_require__, 19771)));const Route553=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_framework-plugin_hook-list */ 38834).then(__webpack_require__.bind(__webpack_require__, 1525)));const Route554=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_framework-plugin_hook */ 74022).then(__webpack_require__.bind(__webpack_require__, 78745)));const Route555=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_framework-plugin_implement */ 18375).then(__webpack_require__.bind(__webpack_require__, 48476)));const Route556=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_framework-plugin_introduction */ 51952).then(__webpack_require__.bind(__webpack_require__, 39924)));const Route557=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_framework-plugin_lifecycle */ 68077).then(__webpack_require__.bind(__webpack_require__, 49266)));const Route558=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_framework-plugin_plugin-api */ 60408).then(__webpack_require__.bind(__webpack_require__, 24236)));const Route559=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_framework-plugin_relationship */ 80027).then(__webpack_require__.bind(__webpack_require__, 12977)));const Route560=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_codesmith_api_app */ 83757).then(__webpack_require__.bind(__webpack_require__, 9061)));const Route561=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_codesmith_api_ejs */ 49233).then(__webpack_require__.bind(__webpack_require__, 18892)));const Route562=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_codesmith_api_fs */ 62089).then(__webpack_require__.bind(__webpack_require__, 7657)));const Route563=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_codesmith_api_git */ 52576).then(__webpack_require__.bind(__webpack_require__, 4757)));const Route564=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_codesmith_api_handlebars */ 31947).then(__webpack_require__.bind(__webpack_require__, 77745)));const Route565=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_codesmith_api_json */ 57000).then(__webpack_require__.bind(__webpack_require__, 97497)));const Route566=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_codesmith_api_npm */ 30064).then(__webpack_require__.bind(__webpack_require__, 85832)));const Route567=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_codesmith_develop */ 67508).then(__webpack_require__.bind(__webpack_require__, 35664)));const Route568=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_codesmith_introduce */ 97459).then(__webpack_require__.bind(__webpack_require__, 90904)));const Route569=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_codesmith_run-in-js */ 38011).then(__webpack_require__.bind(__webpack_require__, 11547)));const Route570=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_codesmith_structure */ 38465).then(__webpack_require__.bind(__webpack_require__, 88239)));const Route571=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_config_app */ 1986).then(__webpack_require__.bind(__webpack_require__, 4658)));const Route572=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_config_common */ 20597).then(__webpack_require__.bind(__webpack_require__, 18097)));const Route573=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_config_module */ 17477).then(__webpack_require__.bind(__webpack_require__, 42880)));const Route574=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_config_monorepo */ 51826).then(__webpack_require__.bind(__webpack_require__, 99856)));const Route575=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_abstract */ 48184).then(__webpack_require__.bind(__webpack_require__, 31238)));const Route576=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_file_addFile */ 92699).then(__webpack_require__.bind(__webpack_require__, 59927)));const Route577=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_file_addHelper */ 2842).then(__webpack_require__.bind(__webpack_require__, 32591)));const Route578=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_file_addManyFile */ 16461).then(__webpack_require__.bind(__webpack_require__, 85083)));const Route579=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_file_addPartial */ 22085).then(__webpack_require__.bind(__webpack_require__, 65957)));const Route580=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_file_introduce */ 50623).then(__webpack_require__.bind(__webpack_require__, 52278)));const Route581=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_file_rmDir */ 24335).then(__webpack_require__.bind(__webpack_require__, 7820)));const Route582=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_file_rmFile */ 82885).then(__webpack_require__.bind(__webpack_require__, 97676)));const Route583=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_file_updateJSONFile */ 18070).then(__webpack_require__.bind(__webpack_require__, 89974)));const Route584=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_file_updateModernConfig */ 21725).then(__webpack_require__.bind(__webpack_require__, 58804)));const Route585=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_file_updateTextRawFile */ 57273).then(__webpack_require__.bind(__webpack_require__, 83166)));const Route586=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_git_gitAddAndCommit */ 84325).then(__webpack_require__.bind(__webpack_require__, 59565)));const Route587=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_git_initGitRepo */ 9587).then(__webpack_require__.bind(__webpack_require__, 99793)));const Route588=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_git_isInGitRepo */ 40304).then(__webpack_require__.bind(__webpack_require__, 25332)));const Route589=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_hook_afterForged */ 98552).then(__webpack_require__.bind(__webpack_require__, 58254)));const Route590=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_hook_onForged */ 24147).then(__webpack_require__.bind(__webpack_require__, 44189)));const Route591=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_info_isFileExit */ 9104).then(__webpack_require__.bind(__webpack_require__, 5302)));const Route592=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_info_locale */ 7391).then(__webpack_require__.bind(__webpack_require__, 54303)));const Route593=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_info_readDir */ 73981).then(__webpack_require__.bind(__webpack_require__, 42664)));const Route594=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_input_addInputAfter */ 42702).then(__webpack_require__.bind(__webpack_require__, 58965)));const Route595=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_input_addInputBefore */ 40).then(__webpack_require__.bind(__webpack_require__, 96800)));const Route596=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_input_setInput */ 36938).then(__webpack_require__.bind(__webpack_require__, 13029)));const Route597=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_input_setInputValue */ 86021).then(__webpack_require__.bind(__webpack_require__, 48035)));const Route598=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_input_type */ 86337).then(__webpack_require__.bind(__webpack_require__, 19834)));const Route599=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_introduce */ 77886).then(__webpack_require__.bind(__webpack_require__, 90810)));const Route600=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_new_createElement */ 15661).then(__webpack_require__.bind(__webpack_require__, 68456)));const Route601=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_new_createSubProject */ 91031).then(__webpack_require__.bind(__webpack_require__, 87287)));const Route602=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_new_enableFunc */ 63940).then(__webpack_require__.bind(__webpack_require__, 29444)));const Route603=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_new_introduce */ 50531).then(__webpack_require__.bind(__webpack_require__, 11691)));const Route604=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_api_npm_install */ 78267).then(__webpack_require__.bind(__webpack_require__, 83579)));const Route605=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_develop */ 24111).then(__webpack_require__.bind(__webpack_require__, 65951)));const Route606=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_plugin_use */ 60450).then(__webpack_require__.bind(__webpack_require__, 55532)));const Route607=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_generator_project */ 10647).then(__webpack_require__.bind(__webpack_require__, 81335)));const Route608=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_micro-frontend_c01-introduction */ 40625).then(__webpack_require__.bind(__webpack_require__, 3579)));const Route609=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>Promise.all(/* import() | zh_guides_topic-detail_micro-frontend_c02-development */[__webpack_require__.e(37085), __webpack_require__.e(51735)]).then(__webpack_require__.bind(__webpack_require__, 87722)));const Route610=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>Promise.all(/* import() | zh_guides_topic-detail_micro-frontend_c03-main-app */[__webpack_require__.e(37085), __webpack_require__.e(39101)]).then(__webpack_require__.bind(__webpack_require__, 37649)));const Route611=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_micro-frontend_c04-communicate */ 3106).then(__webpack_require__.bind(__webpack_require__, 99278)));const Route612=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_micro-frontend_c05-mixed-stack */ 94091).then(__webpack_require__.bind(__webpack_require__, 85534)));const Route613=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_model_auto-actions */ 41567).then(__webpack_require__.bind(__webpack_require__, 58873)));const Route614=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_model_computed-state */ 46820).then(__webpack_require__.bind(__webpack_require__, 29105)));const Route615=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_model_define-model */ 84757).then(__webpack_require__.bind(__webpack_require__, 82889)));const Route616=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_model_faq */ 63153).then(__webpack_require__.bind(__webpack_require__, 95747)));const Route617=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_model_manage-effects */ 49998).then(__webpack_require__.bind(__webpack_require__, 75945)));const Route618=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_model_model-communicate */ 72154).then(__webpack_require__.bind(__webpack_require__, 14153)));const Route619=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_model_performance */ 92192).then(__webpack_require__.bind(__webpack_require__, 92747)));const Route620=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_model_quick-start */ 74470).then(__webpack_require__.bind(__webpack_require__, 35181)));const Route621=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_model_redux-integration */ 14601).then(__webpack_require__.bind(__webpack_require__, 72072)));const Route622=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_model_test-model */ 1413).then(__webpack_require__.bind(__webpack_require__, 70566)));const Route623=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_model_typescript-best-practice */ 29510).then(__webpack_require__.bind(__webpack_require__, 43249)));const Route624=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_model_use-model */ 37388).then(__webpack_require__.bind(__webpack_require__, 49757)));const Route625=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_model_use-out-of-modernjs */ 61291).then(__webpack_require__.bind(__webpack_require__, 79805)));const Route626=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_monorepo_create-sub-project */ 49037).then(__webpack_require__.bind(__webpack_require__, 95945)));const Route627=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_monorepo_intro */ 13406).then(__webpack_require__.bind(__webpack_require__, 89683)));const Route628=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_monorepo_publish */ 50432).then(__webpack_require__.bind(__webpack_require__, 14223)));const Route629=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_topic-detail_monorepo_sub-project-interface */ 444).then(__webpack_require__.bind(__webpack_require__, 6288)));const Route630=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_troubleshooting_cli */ 97220).then(__webpack_require__.bind(__webpack_require__, 97844)));const Route631=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_guides_troubleshooting_dependencies */ 19992).then(__webpack_require__.bind(__webpack_require__, 68281)));const Route632=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_index */ 51895).then(__webpack_require__.bind(__webpack_require__, 99315)));const Route633=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>Promise.all(/* import() | zh_tutorials_first-app_c01-start */[__webpack_require__.e(86630), __webpack_require__.e(68726)]).then(__webpack_require__.bind(__webpack_require__, 12584)));const Route634=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_tutorials_first-app_c02-component */ 87145).then(__webpack_require__.bind(__webpack_require__, 15909)));const Route635=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_tutorials_first-app_c03-css */ 75756).then(__webpack_require__.bind(__webpack_require__, 91775)));const Route636=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_tutorials_first-app_c04-routes */ 45498).then(__webpack_require__.bind(__webpack_require__, 98131)));const Route637=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_tutorials_first-app_c05-loader */ 19782).then(__webpack_require__.bind(__webpack_require__, 50017)));const Route638=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_tutorials_first-app_c06-model */ 26132).then(__webpack_require__.bind(__webpack_require__, 26608)));const Route639=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_tutorials_first-app_c07-container */ 95392).then(__webpack_require__.bind(__webpack_require__, 11839)));const Route640=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_tutorials_first-app_c08-entries */ 10284).then(__webpack_require__.bind(__webpack_require__, 75573)));const Route641=(0,react_lazy_with_preload__WEBPACK_IMPORTED_MODULE_1__/* .lazyWithPreload */ .kz)(()=>__webpack_require__.e(/* import() | zh_tutorials_foundations_introduction */ 6309).then(__webpack_require__.bind(__webpack_require__, 93791)));const routes=[{path:'/en/apis/app/commands/build',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route0),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/commands/build.mdx',preload:async()=>{await Route0.preload();return __webpack_require__.e(/* import() */ 34806).then(__webpack_require__.bind(__webpack_require__, 1905));}},{path:'/en/apis/app/commands/dev',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route1),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/commands/dev.mdx',preload:async()=>{await Route1.preload();return __webpack_require__.e(/* import() */ 36866).then(__webpack_require__.bind(__webpack_require__, 29566));}},{path:'/en/apis/app/commands/',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route2),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/commands/index.mdx',preload:async()=>{await Route2.preload();return __webpack_require__.e(/* import() */ 72917).then(__webpack_require__.bind(__webpack_require__, 75217));}},{path:'/en/apis/app/commands/inspect',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route3),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/commands/inspect.mdx',preload:async()=>{await Route3.preload();return __webpack_require__.e(/* import() */ 49857).then(__webpack_require__.bind(__webpack_require__, 50718));}},{path:'/en/apis/app/commands/lint',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route4),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/commands/lint.mdx',preload:async()=>{await Route4.preload();return __webpack_require__.e(/* import() */ 65704).then(__webpack_require__.bind(__webpack_require__, 80922));}},{path:'/en/apis/app/commands/new',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route5),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/commands/new.mdx',preload:async()=>{await Route5.preload();return __webpack_require__.e(/* import() */ 30276).then(__webpack_require__.bind(__webpack_require__, 23172));}},{path:'/en/apis/app/commands/serve',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route6),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/commands/serve.mdx',preload:async()=>{await Route6.preload();return __webpack_require__.e(/* import() */ 78940).then(__webpack_require__.bind(__webpack_require__, 56751));}},{path:'/en/apis/app/commands/test',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route7),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/commands/test.mdx',preload:async()=>{await Route7.preload();return __webpack_require__.e(/* import() */ 64415).then(__webpack_require__.bind(__webpack_require__, 96024));}},{path:'/en/apis/app/commands/upgrade',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route8),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/commands/upgrade.mdx',preload:async()=>{await Route8.preload();return __webpack_require__.e(/* import() */ 90992).then(__webpack_require__.bind(__webpack_require__, 82556));}},{path:'/en/apis/app/hooks/api/framework/lambda',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route9),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/api/framework/lambda.mdx',preload:async()=>{await Route9.preload();return __webpack_require__.e(/* import() */ 985).then(__webpack_require__.bind(__webpack_require__, 85111));}},{path:'/en/apis/app/hooks/api/functions/api',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route10),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/api/functions/api.mdx',preload:async()=>{await Route10.preload();return __webpack_require__.e(/* import() */ 11592).then(__webpack_require__.bind(__webpack_require__, 83011));}},{path:'/en/apis/app/hooks/api/functions/app',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route11),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/api/functions/app.mdx',preload:async()=>{await Route11.preload();return __webpack_require__.e(/* import() */ 11181).then(__webpack_require__.bind(__webpack_require__, 28134));}},{path:'/en/apis/app/hooks/api/functions/common',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route12),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/api/functions/common.mdx',preload:async()=>{await Route12.preload();return __webpack_require__.e(/* import() */ 89486).then(__webpack_require__.bind(__webpack_require__, 7613));}},{path:'/en/apis/app/hooks/api/test',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route13),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/api/test.mdx',preload:async()=>{await Route13.preload();return __webpack_require__.e(/* import() */ 82377).then(__webpack_require__.bind(__webpack_require__, 81874));}},{path:'/en/apis/app/hooks/config/html',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route14),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/config/html.mdx',preload:async()=>{await Route14.preload();return __webpack_require__.e(/* import() */ 53650).then(__webpack_require__.bind(__webpack_require__, 23957));}},{path:'/en/apis/app/hooks/config/icon',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route15),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/config/icon.mdx',preload:async()=>{await Route15.preload();return __webpack_require__.e(/* import() */ 6533).then(__webpack_require__.bind(__webpack_require__, 42616));}},{path:'/en/apis/app/hooks/config/mock',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route16),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/config/mock.mdx',preload:async()=>{await Route16.preload();return __webpack_require__.e(/* import() */ 18410).then(__webpack_require__.bind(__webpack_require__, 96374));}},{path:'/en/apis/app/hooks/config/public',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route17),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/config/public.mdx',preload:async()=>{await Route17.preload();return __webpack_require__.e(/* import() */ 34487).then(__webpack_require__.bind(__webpack_require__, 58782));}},{path:'/en/apis/app/hooks/config/storybook',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route18),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/config/storybook.mdx',preload:async()=>{await Route18.preload();return __webpack_require__.e(/* import() */ 28746).then(__webpack_require__.bind(__webpack_require__, 21054));}},{path:'/en/apis/app/hooks/config/upload',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route19),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/config/upload.mdx',preload:async()=>{await Route19.preload();return __webpack_require__.e(/* import() */ 35565).then(__webpack_require__.bind(__webpack_require__, 48793));}},{path:'/en/apis/app/hooks/',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route20),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/index.mdx',preload:async()=>{await Route20.preload();return __webpack_require__.e(/* import() */ 52943).then(__webpack_require__.bind(__webpack_require__, 85943));}},{path:'/en/apis/app/hooks/modern-config',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route21),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/modern-config.mdx',preload:async()=>{await Route21.preload();return __webpack_require__.e(/* import() */ 54871).then(__webpack_require__.bind(__webpack_require__, 58169));}},{path:'/en/apis/app/hooks/server/index_',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route22),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/server/index_.mdx',preload:async()=>{await Route22.preload();return __webpack_require__.e(/* import() */ 87668).then(__webpack_require__.bind(__webpack_require__, 74934));}},{path:'/en/apis/app/hooks/server/test',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route23),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/server/test.mdx',preload:async()=>{await Route23.preload();return __webpack_require__.e(/* import() */ 56676).then(__webpack_require__.bind(__webpack_require__, 47318));}},{path:'/en/apis/app/hooks/shared',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route24),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/shared.mdx',preload:async()=>{await Route24.preload();return __webpack_require__.e(/* import() */ 60437).then(__webpack_require__.bind(__webpack_require__, 86155));}},{path:'/en/apis/app/hooks/src/app',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route25),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/src/app.mdx',preload:async()=>{await Route25.preload();return __webpack_require__.e(/* import() */ 94526).then(__webpack_require__.bind(__webpack_require__, 89025));}},{path:'/en/apis/app/hooks/src/index_',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route26),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/src/index_.mdx',preload:async()=>{await Route26.preload();return __webpack_require__.e(/* import() */ 12029).then(__webpack_require__.bind(__webpack_require__, 79602));}},{path:'/en/apis/app/hooks/src/pages',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route27),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/src/pages.mdx',preload:async()=>{await Route27.preload();return __webpack_require__.e(/* import() */ 43459).then(__webpack_require__.bind(__webpack_require__, 25343));}},{path:'/en/apis/app/hooks/src/routes',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route28),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/src/routes.mdx',preload:async()=>{await Route28.preload();return __webpack_require__.e(/* import() */ 20405).then(__webpack_require__.bind(__webpack_require__, 60434));}},{path:'/en/apis/app/hooks/src/server',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route29),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/src/server.mdx',preload:async()=>{await Route29.preload();return __webpack_require__.e(/* import() */ 8360).then(__webpack_require__.bind(__webpack_require__, 98765));}},{path:'/en/apis/app/hooks/src/stories',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route30),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/src/stories.mdx',preload:async()=>{await Route30.preload();return __webpack_require__.e(/* import() */ 61022).then(__webpack_require__.bind(__webpack_require__, 74532));}},{path:'/en/apis/app/hooks/src/test',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route31),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/hooks/src/test.mdx',preload:async()=>{await Route31.preload();return __webpack_require__.e(/* import() */ 57103).then(__webpack_require__.bind(__webpack_require__, 80540));}},{path:'/en/apis/app/runtime/app/define-config',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route32),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/app/define-config.mdx',preload:async()=>{await Route32.preload();return __webpack_require__.e(/* import() */ 34266).then(__webpack_require__.bind(__webpack_require__, 90400));}},{path:'/en/apis/app/runtime/bff/hook',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route33),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/bff/hook.mdx',preload:async()=>{await Route33.preload();return __webpack_require__.e(/* import() */ 45464).then(__webpack_require__.bind(__webpack_require__, 43618));}},{path:'/en/apis/app/runtime/bff/use-context',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route34),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/bff/use-context.mdx',preload:async()=>{await Route34.preload();return __webpack_require__.e(/* import() */ 25347).then(__webpack_require__.bind(__webpack_require__, 85319));}},{path:'/en/apis/app/runtime/core/bootstrap',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route35),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/core/bootstrap.mdx',preload:async()=>{await Route35.preload();return __webpack_require__.e(/* import() */ 72795).then(__webpack_require__.bind(__webpack_require__, 42924));}},{path:'/en/apis/app/runtime/core/create-app',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route36),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/core/create-app.mdx',preload:async()=>{await Route36.preload();return __webpack_require__.e(/* import() */ 82494).then(__webpack_require__.bind(__webpack_require__, 56647));}},{path:'/en/apis/app/runtime/core/use-loader',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route37),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/core/use-loader.mdx',preload:async()=>{await Route37.preload();return __webpack_require__.e(/* import() */ 32940).then(__webpack_require__.bind(__webpack_require__, 60511));}},{path:'/en/apis/app/runtime/core/use-module-apps',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route38),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/core/use-module-apps.mdx',preload:async()=>{await Route38.preload();return __webpack_require__.e(/* import() */ 87418).then(__webpack_require__.bind(__webpack_require__, 83752));}},{path:'/en/apis/app/runtime/core/use-runtime-context',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route39),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/core/use-runtime-context.mdx',preload:async()=>{await Route39.preload();return __webpack_require__.e(/* import() */ 53210).then(__webpack_require__.bind(__webpack_require__, 20692));}},{path:'/en/apis/app/runtime/',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route40),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/index.mdx',preload:async()=>{await Route40.preload();return __webpack_require__.e(/* import() */ 92219).then(__webpack_require__.bind(__webpack_require__, 11217));}},{path:'/en/apis/app/runtime/model/Provider',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route41),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/model/Provider.mdx',preload:async()=>{await Route41.preload();return __webpack_require__.e(/* import() */ 32337).then(__webpack_require__.bind(__webpack_require__, 91147));}},{path:'/en/apis/app/runtime/model/auto-actions',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route42),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/model/auto-actions.mdx',preload:async()=>{await Route42.preload();return __webpack_require__.e(/* import() */ 69174).then(__webpack_require__.bind(__webpack_require__, 73591));}},{path:'/en/apis/app/runtime/model/connect',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route43),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/model/connect.mdx',preload:async()=>{await Route43.preload();return __webpack_require__.e(/* import() */ 90521).then(__webpack_require__.bind(__webpack_require__, 40748));}},{path:'/en/apis/app/runtime/model/create-app',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route44),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/model/create-app.mdx',preload:async()=>{await Route44.preload();return __webpack_require__.e(/* import() */ 829).then(__webpack_require__.bind(__webpack_require__, 66691));}},{path:'/en/apis/app/runtime/model/create-store',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route45),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/model/create-store.mdx',preload:async()=>{await Route45.preload();return __webpack_require__.e(/* import() */ 20092).then(__webpack_require__.bind(__webpack_require__, 60407));}},{path:'/en/apis/app/runtime/model/handle-effect',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route46),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/model/handle-effect.mdx',preload:async()=>{await Route46.preload();return __webpack_require__.e(/* import() */ 50891).then(__webpack_require__.bind(__webpack_require__, 92897));}},{path:'/en/apis/app/runtime/model/model_',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route47),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/model/model_.mdx',preload:async()=>{await Route47.preload();return __webpack_require__.e(/* import() */ 57337).then(__webpack_require__.bind(__webpack_require__, 36417));}},{path:'/en/apis/app/runtime/model/use-local-model',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route48),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/model/use-local-model.mdx',preload:async()=>{await Route48.preload();return __webpack_require__.e(/* import() */ 87968).then(__webpack_require__.bind(__webpack_require__, 96794));}},{path:'/en/apis/app/runtime/model/use-model',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route49),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/model/use-model.mdx',preload:async()=>{await Route49.preload();return __webpack_require__.e(/* import() */ 49737).then(__webpack_require__.bind(__webpack_require__, 17461));}},{path:'/en/apis/app/runtime/model/use-static-model',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route50),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/model/use-static-model.mdx',preload:async()=>{await Route50.preload();return __webpack_require__.e(/* import() */ 36466).then(__webpack_require__.bind(__webpack_require__, 25065));}},{path:'/en/apis/app/runtime/model/use-store',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route51),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/model/use-store.mdx',preload:async()=>{await Route51.preload();return __webpack_require__.e(/* import() */ 31834).then(__webpack_require__.bind(__webpack_require__, 47781));}},{path:'/en/apis/app/runtime/router/router',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route52),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/router/router.mdx',preload:async()=>{await Route52.preload();return __webpack_require__.e(/* import() */ 87692).then(__webpack_require__.bind(__webpack_require__, 49086));}},{path:'/en/apis/app/runtime/ssr/no-ssr',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route53),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/ssr/no-ssr.mdx',preload:async()=>{await Route53.preload();return __webpack_require__.e(/* import() */ 65865).then(__webpack_require__.bind(__webpack_require__, 67431));}},{path:'/en/apis/app/runtime/ssr/pre-render',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route54),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/ssr/pre-render.mdx',preload:async()=>{await Route54.preload();return __webpack_require__.e(/* import() */ 46908).then(__webpack_require__.bind(__webpack_require__, 20845));}},{path:'/en/apis/app/runtime/testing/act',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route55),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/testing/act.mdx',preload:async()=>{await Route55.preload();return __webpack_require__.e(/* import() */ 97604).then(__webpack_require__.bind(__webpack_require__, 3567));}},{path:'/en/apis/app/runtime/testing/cleanup',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route56),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/testing/cleanup.mdx',preload:async()=>{await Route56.preload();return __webpack_require__.e(/* import() */ 13638).then(__webpack_require__.bind(__webpack_require__, 99416));}},{path:'/en/apis/app/runtime/testing/render',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route57),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/testing/render.mdx',preload:async()=>{await Route57.preload();return __webpack_require__.e(/* import() */ 89052).then(__webpack_require__.bind(__webpack_require__, 28646));}},{path:'/en/apis/app/runtime/testing/renderApp',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route58),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/testing/renderApp.mdx',preload:async()=>{await Route58.preload();return __webpack_require__.e(/* import() */ 54363).then(__webpack_require__.bind(__webpack_require__, 24859));}},{path:'/en/apis/app/runtime/utility/css-in-js',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route59),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/utility/css-in-js.mdx',preload:async()=>{await Route59.preload();return __webpack_require__.e(/* import() */ 41461).then(__webpack_require__.bind(__webpack_require__, 48373));}},{path:'/en/apis/app/runtime/utility/head',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route60),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/utility/head.mdx',preload:async()=>{await Route60.preload();return __webpack_require__.e(/* import() */ 96749).then(__webpack_require__.bind(__webpack_require__, 63538));}},{path:'/en/apis/app/runtime/utility/loadable',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route61),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/utility/loadable.mdx',preload:async()=>{await Route61.preload();return __webpack_require__.e(/* import() */ 84256).then(__webpack_require__.bind(__webpack_require__, 92136));}},{path:'/en/apis/app/runtime/web-server/hook',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route62),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/web-server/hook.mdx',preload:async()=>{await Route62.preload();return __webpack_require__.e(/* import() */ 11056).then(__webpack_require__.bind(__webpack_require__, 53357));}},{path:'/en/apis/app/runtime/web-server/middleware',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route63),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/apis/app/runtime/web-server/middleware.mdx',preload:async()=>{await Route63.preload();return __webpack_require__.e(/* import() */ 37156).then(__webpack_require__.bind(__webpack_require__, 94141));}},{path:'/en/configure/app/auto-load-plugin',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route64),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/auto-load-plugin.mdx',preload:async()=>{await Route64.preload();return __webpack_require__.e(/* import() */ 28013).then(__webpack_require__.bind(__webpack_require__, 69094));}},{path:'/en/configure/app/bff/prefix',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route65),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/bff/prefix.mdx',preload:async()=>{await Route65.preload();return __webpack_require__.e(/* import() */ 10051).then(__webpack_require__.bind(__webpack_require__, 40016));}},{path:'/en/configure/app/bff/proxy',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route66),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/bff/proxy.mdx',preload:async()=>{await Route66.preload();return __webpack_require__.e(/* import() */ 55227).then(__webpack_require__.bind(__webpack_require__, 28706));}},{path:'/en/configure/app/builder-plugins',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route67),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/builder-plugins.mdx',preload:async()=>{await Route67.preload();return __webpack_require__.e(/* import() */ 56380).then(__webpack_require__.bind(__webpack_require__, 39332));}},{path:'/en/configure/app/deploy/microFrontend',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route68),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/deploy/microFrontend.mdx',preload:async()=>{await Route68.preload();return __webpack_require__.e(/* import() */ 65768).then(__webpack_require__.bind(__webpack_require__, 64822));}},{path:'/en/configure/app/dev/asset-prefix',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route69),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/dev/asset-prefix.mdx',preload:async()=>{await Route69.preload();return __webpack_require__.e(/* import() */ 55990).then(__webpack_require__.bind(__webpack_require__, 68933));}},{path:'/en/configure/app/dev/hmr',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route70),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/dev/hmr.mdx',preload:async()=>{await Route70.preload();return __webpack_require__.e(/* import() */ 50564).then(__webpack_require__.bind(__webpack_require__, 89884));}},{path:'/en/configure/app/dev/https',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route71),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/dev/https.mdx',preload:async()=>{await Route71.preload();return __webpack_require__.e(/* import() */ 20057).then(__webpack_require__.bind(__webpack_require__, 67369));}},{path:'/en/configure/app/dev/port',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route72),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/dev/port.mdx',preload:async()=>{await Route72.preload();return __webpack_require__.e(/* import() */ 19187).then(__webpack_require__.bind(__webpack_require__, 65539));}},{path:'/en/configure/app/dev/progress-bar',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route73),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/dev/progress-bar.mdx',preload:async()=>{await Route73.preload();return __webpack_require__.e(/* import() */ 10982).then(__webpack_require__.bind(__webpack_require__, 34634));}},{path:'/en/configure/app/dev/proxy',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route74),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/dev/proxy.mdx',preload:async()=>{await Route74.preload();return __webpack_require__.e(/* import() */ 45970).then(__webpack_require__.bind(__webpack_require__, 74123));}},{path:'/en/configure/app/dev/start-url',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route75),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/dev/start-url.mdx',preload:async()=>{await Route75.preload();return __webpack_require__.e(/* import() */ 16586).then(__webpack_require__.bind(__webpack_require__, 49947));}},{path:'/en/configure/app/experiments/lazy-compilation',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route76),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/experiments/lazy-compilation.mdx',preload:async()=>{await Route76.preload();return __webpack_require__.e(/* import() */ 35175).then(__webpack_require__.bind(__webpack_require__, 58438));}},{path:'/en/configure/app/html/app-icon',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route77),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/app-icon.mdx',preload:async()=>{await Route77.preload();return __webpack_require__.e(/* import() */ 29892).then(__webpack_require__.bind(__webpack_require__, 10130));}},{path:'/en/configure/app/html/crossorigin',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route78),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/crossorigin.mdx',preload:async()=>{await Route78.preload();return __webpack_require__.e(/* import() */ 21255).then(__webpack_require__.bind(__webpack_require__, 38804));}},{path:'/en/configure/app/html/disable-html-folder',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route79),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/disable-html-folder.mdx',preload:async()=>{await Route79.preload();return __webpack_require__.e(/* import() */ 63582).then(__webpack_require__.bind(__webpack_require__, 94752));}},{path:'/en/configure/app/html/favicon-by-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route80),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/favicon-by-entries.mdx',preload:async()=>{await Route80.preload();return __webpack_require__.e(/* import() */ 38646).then(__webpack_require__.bind(__webpack_require__, 855));}},{path:'/en/configure/app/html/favicon',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route81),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/favicon.mdx',preload:async()=>{await Route81.preload();return __webpack_require__.e(/* import() */ 31501).then(__webpack_require__.bind(__webpack_require__, 74247));}},{path:'/en/configure/app/html/inject-by-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route82),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/inject-by-entries.mdx',preload:async()=>{await Route82.preload();return __webpack_require__.e(/* import() */ 74040).then(__webpack_require__.bind(__webpack_require__, 66711));}},{path:'/en/configure/app/html/inject',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route83),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/inject.mdx',preload:async()=>{await Route83.preload();return __webpack_require__.e(/* import() */ 51016).then(__webpack_require__.bind(__webpack_require__, 58356));}},{path:'/en/configure/app/html/meta-by-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route84),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/meta-by-entries.mdx',preload:async()=>{await Route84.preload();return __webpack_require__.e(/* import() */ 30533).then(__webpack_require__.bind(__webpack_require__, 93234));}},{path:'/en/configure/app/html/meta',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route85),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/meta.mdx',preload:async()=>{await Route85.preload();return __webpack_require__.e(/* import() */ 84347).then(__webpack_require__.bind(__webpack_require__, 7392));}},{path:'/en/configure/app/html/mount-id',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route86),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/mount-id.mdx',preload:async()=>{await Route86.preload();return __webpack_require__.e(/* import() */ 22381).then(__webpack_require__.bind(__webpack_require__, 3508));}},{path:'/en/configure/app/html/tags-by-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route87),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/tags-by-entries.mdx',preload:async()=>{await Route87.preload();return __webpack_require__.e(/* import() */ 25410).then(__webpack_require__.bind(__webpack_require__, 34958));}},{path:'/en/configure/app/html/tags',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route88),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/tags.mdx',preload:async()=>{await Route88.preload();return __webpack_require__.e(/* import() */ 71187).then(__webpack_require__.bind(__webpack_require__, 44122));}},{path:'/en/configure/app/html/template-by-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route89),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/template-by-entries.mdx',preload:async()=>{await Route89.preload();return __webpack_require__.e(/* import() */ 90765).then(__webpack_require__.bind(__webpack_require__, 4008));}},{path:'/en/configure/app/html/template-parameters-by-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route90),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/template-parameters-by-entries.mdx',preload:async()=>{await Route90.preload();return __webpack_require__.e(/* import() */ 66297).then(__webpack_require__.bind(__webpack_require__, 80292));}},{path:'/en/configure/app/html/template-parameters',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route91),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/template-parameters.mdx',preload:async()=>{await Route91.preload();return __webpack_require__.e(/* import() */ 20617).then(__webpack_require__.bind(__webpack_require__, 84712));}},{path:'/en/configure/app/html/template',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route92),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/template.mdx',preload:async()=>{await Route92.preload();return __webpack_require__.e(/* import() */ 5788).then(__webpack_require__.bind(__webpack_require__, 9006));}},{path:'/en/configure/app/html/title-by-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route93),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/title-by-entries.mdx',preload:async()=>{await Route93.preload();return __webpack_require__.e(/* import() */ 61151).then(__webpack_require__.bind(__webpack_require__, 82910));}},{path:'/en/configure/app/html/title',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route94),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/html/title.mdx',preload:async()=>{await Route94.preload();return __webpack_require__.e(/* import() */ 43830).then(__webpack_require__.bind(__webpack_require__, 43408));}},{path:'/en/configure/app/output/asset-prefix',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route95),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/asset-prefix.mdx',preload:async()=>{await Route95.preload();return __webpack_require__.e(/* import() */ 70765).then(__webpack_require__.bind(__webpack_require__, 27691));}},{path:'/en/configure/app/output/assets-retry',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route96),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/assets-retry.mdx',preload:async()=>{await Route96.preload();return __webpack_require__.e(/* import() */ 20127).then(__webpack_require__.bind(__webpack_require__, 45));}},{path:'/en/configure/app/output/charset',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route97),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/charset.mdx',preload:async()=>{await Route97.preload();return __webpack_require__.e(/* import() */ 20008).then(__webpack_require__.bind(__webpack_require__, 66273));}},{path:'/en/configure/app/output/clean-dist-path',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route98),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/clean-dist-path.mdx',preload:async()=>{await Route98.preload();return __webpack_require__.e(/* import() */ 68827).then(__webpack_require__.bind(__webpack_require__, 52722));}},{path:'/en/configure/app/output/convert-to-rem',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route99),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/convert-to-rem.mdx',preload:async()=>{await Route99.preload();return __webpack_require__.e(/* import() */ 41009).then(__webpack_require__.bind(__webpack_require__, 11781));}},{path:'/en/configure/app/output/copy',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route100),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/copy.mdx',preload:async()=>{await Route100.preload();return __webpack_require__.e(/* import() */ 21346).then(__webpack_require__.bind(__webpack_require__, 12354));}},{path:'/en/configure/app/output/css-module-local-ident-name',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route101),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/css-module-local-ident-name.mdx',preload:async()=>{await Route101.preload();return __webpack_require__.e(/* import() */ 65885).then(__webpack_require__.bind(__webpack_require__, 85434));}},{path:'/en/configure/app/output/data-uri-limit',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route102),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/data-uri-limit.mdx',preload:async()=>{await Route102.preload();return __webpack_require__.e(/* import() */ 70009).then(__webpack_require__.bind(__webpack_require__, 91943));}},{path:'/en/configure/app/output/disable-css-extract',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route103),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/disable-css-extract.mdx',preload:async()=>{await Route103.preload();return __webpack_require__.e(/* import() */ 7208).then(__webpack_require__.bind(__webpack_require__, 26894));}},{path:'/en/configure/app/output/disable-css-module-extension',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route104),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/disable-css-module-extension.mdx',preload:async()=>{await Route104.preload();return __webpack_require__.e(/* import() */ 13388).then(__webpack_require__.bind(__webpack_require__, 51153));}},{path:'/en/configure/app/output/disable-filename-hash',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route105),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/disable-filename-hash.mdx',preload:async()=>{await Route105.preload();return __webpack_require__.e(/* import() */ 61432).then(__webpack_require__.bind(__webpack_require__, 30896));}},{path:'/en/configure/app/output/disable-inline-runtime-chunk',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route106),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/disable-inline-runtime-chunk.mdx',preload:async()=>{await Route106.preload();return __webpack_require__.e(/* import() */ 21222).then(__webpack_require__.bind(__webpack_require__, 5746));}},{path:'/en/configure/app/output/disable-minimize',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route107),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/disable-minimize.mdx',preload:async()=>{await Route107.preload();return __webpack_require__.e(/* import() */ 38715).then(__webpack_require__.bind(__webpack_require__, 43562));}},{path:'/en/configure/app/output/disable-node-polyfill',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route108),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/disable-node-polyfill.mdx',preload:async()=>{await Route108.preload();return __webpack_require__.e(/* import() */ 20194).then(__webpack_require__.bind(__webpack_require__, 47060));}},{path:'/en/configure/app/output/disable-source-map',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route109),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/disable-source-map.mdx',preload:async()=>{await Route109.preload();return __webpack_require__.e(/* import() */ 25474).then(__webpack_require__.bind(__webpack_require__, 22896));}},{path:'/en/configure/app/output/disable-ts-checker',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route110),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/disable-ts-checker.mdx',preload:async()=>{await Route110.preload();return __webpack_require__.e(/* import() */ 36623).then(__webpack_require__.bind(__webpack_require__, 16248));}},{path:'/en/configure/app/output/dist-path',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route111),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/dist-path.mdx',preload:async()=>{await Route111.preload();return __webpack_require__.e(/* import() */ 87590).then(__webpack_require__.bind(__webpack_require__, 59497));}},{path:'/en/configure/app/output/enable-asset-fallback',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route112),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/enable-asset-fallback.mdx',preload:async()=>{await Route112.preload();return __webpack_require__.e(/* import() */ 84598).then(__webpack_require__.bind(__webpack_require__, 96776));}},{path:'/en/configure/app/output/enable-asset-manifest',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route113),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/enable-asset-manifest.mdx',preload:async()=>{await Route113.preload();return __webpack_require__.e(/* import() */ 91304).then(__webpack_require__.bind(__webpack_require__, 88338));}},{path:'/en/configure/app/output/enable-css-module-tsdeclaration',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route114),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/enable-css-module-tsdeclaration.mdx',preload:async()=>{await Route114.preload();return __webpack_require__.e(/* import() */ 19496).then(__webpack_require__.bind(__webpack_require__, 37921));}},{path:'/en/configure/app/output/enable-inline-scripts',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route115),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/enable-inline-scripts.mdx',preload:async()=>{await Route115.preload();return __webpack_require__.e(/* import() */ 55475).then(__webpack_require__.bind(__webpack_require__, 18667));}},{path:'/en/configure/app/output/enable-inline-styles',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route116),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/enable-inline-styles.mdx',preload:async()=>{await Route116.preload();return __webpack_require__.e(/* import() */ 83847).then(__webpack_require__.bind(__webpack_require__, 74449));}},{path:'/en/configure/app/output/enable-latest-decorators',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route117),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/enable-latest-decorators.mdx',preload:async()=>{await Route117.preload();return __webpack_require__.e(/* import() */ 15826).then(__webpack_require__.bind(__webpack_require__, 36906));}},{path:'/en/configure/app/output/externals',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route118),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/externals.mdx',preload:async()=>{await Route118.preload();return __webpack_require__.e(/* import() */ 70329).then(__webpack_require__.bind(__webpack_require__, 81062));}},{path:'/en/configure/app/output/filename',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route119),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/filename.mdx',preload:async()=>{await Route119.preload();return __webpack_require__.e(/* import() */ 22940).then(__webpack_require__.bind(__webpack_require__, 39590));}},{path:'/en/configure/app/output/legal-comments',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route120),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/legal-comments.mdx',preload:async()=>{await Route120.preload();return __webpack_require__.e(/* import() */ 92961).then(__webpack_require__.bind(__webpack_require__, 29002));}},{path:'/en/configure/app/output/override-browserslist',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route121),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/override-browserslist.mdx',preload:async()=>{await Route121.preload();return __webpack_require__.e(/* import() */ 40136).then(__webpack_require__.bind(__webpack_require__, 38691));}},{path:'/en/configure/app/output/polyfill',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route122),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/polyfill.mdx',preload:async()=>{await Route122.preload();return __webpack_require__.e(/* import() */ 37846).then(__webpack_require__.bind(__webpack_require__, 88758));}},{path:'/en/configure/app/output/ssg',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route123),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/ssg.mdx',preload:async()=>{await Route123.preload();return Promise.all(/* import() */[__webpack_require__.e(29169), __webpack_require__.e(47237)]).then(__webpack_require__.bind(__webpack_require__, 71906));}},{path:'/en/configure/app/output/svg-default-export',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route124),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/output/svg-default-export.mdx',preload:async()=>{await Route124.preload();return __webpack_require__.e(/* import() */ 86862).then(__webpack_require__.bind(__webpack_require__, 83024));}},{path:'/en/configure/app/performance/build-cache',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route125),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/performance/build-cache.mdx',preload:async()=>{await Route125.preload();return __webpack_require__.e(/* import() */ 59117).then(__webpack_require__.bind(__webpack_require__, 84280));}},{path:'/en/configure/app/performance/bundle-analyze',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route126),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/performance/bundle-analyze.mdx',preload:async()=>{await Route126.preload();return __webpack_require__.e(/* import() */ 85358).then(__webpack_require__.bind(__webpack_require__, 62439));}},{path:'/en/configure/app/performance/chunk-split',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route127),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/performance/chunk-split.mdx',preload:async()=>{await Route127.preload();return __webpack_require__.e(/* import() */ 57952).then(__webpack_require__.bind(__webpack_require__, 9382));}},{path:'/en/configure/app/performance/print-file-size',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route128),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/performance/print-file-size.mdx',preload:async()=>{await Route128.preload();return __webpack_require__.e(/* import() */ 12706).then(__webpack_require__.bind(__webpack_require__, 40861));}},{path:'/en/configure/app/performance/profile',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route129),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/performance/profile.mdx',preload:async()=>{await Route129.preload();return __webpack_require__.e(/* import() */ 94810).then(__webpack_require__.bind(__webpack_require__, 31933));}},{path:'/en/configure/app/performance/remove-console',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route130),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/performance/remove-console.mdx',preload:async()=>{await Route130.preload();return __webpack_require__.e(/* import() */ 36100).then(__webpack_require__.bind(__webpack_require__, 66728));}},{path:'/en/configure/app/performance/remove-moment-locale',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route131),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/performance/remove-moment-locale.mdx',preload:async()=>{await Route131.preload();return __webpack_require__.e(/* import() */ 98555).then(__webpack_require__.bind(__webpack_require__, 61517));}},{path:'/en/configure/app/plugins',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route132),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/plugins.mdx',preload:async()=>{await Route132.preload();return __webpack_require__.e(/* import() */ 77729).then(__webpack_require__.bind(__webpack_require__, 54511));}},{path:'/en/configure/app/runtime/intro',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route133),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/runtime/intro.mdx',preload:async()=>{await Route133.preload();return __webpack_require__.e(/* import() */ 78823).then(__webpack_require__.bind(__webpack_require__, 25876));}},{path:'/en/configure/app/runtime/master-app',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route134),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/runtime/master-app.mdx',preload:async()=>{await Route134.preload();return __webpack_require__.e(/* import() */ 28765).then(__webpack_require__.bind(__webpack_require__, 85782));}},{path:'/en/configure/app/runtime/router',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route135),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/runtime/router.mdx',preload:async()=>{await Route135.preload();return __webpack_require__.e(/* import() */ 87891).then(__webpack_require__.bind(__webpack_require__, 23655));}},{path:'/en/configure/app/runtime/state',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route136),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/runtime/state.mdx',preload:async()=>{await Route136.preload();return __webpack_require__.e(/* import() */ 29319).then(__webpack_require__.bind(__webpack_require__, 25819));}},{path:'/en/configure/app/security/check-syntax',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route137),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/security/check-syntax.mdx',preload:async()=>{await Route137.preload();return __webpack_require__.e(/* import() */ 94938).then(__webpack_require__.bind(__webpack_require__, 64731));}},{path:'/en/configure/app/security/sri',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route138),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/security/sri.mdx',preload:async()=>{await Route138.preload();return __webpack_require__.e(/* import() */ 6402).then(__webpack_require__.bind(__webpack_require__, 67275));}},{path:'/en/configure/app/server/base-url',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route139),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/server/base-url.mdx',preload:async()=>{await Route139.preload();return __webpack_require__.e(/* import() */ 85917).then(__webpack_require__.bind(__webpack_require__, 76937));}},{path:'/en/configure/app/server/enable-framework-ext',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route140),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/server/enable-framework-ext.mdx',preload:async()=>{await Route140.preload();return __webpack_require__.e(/* import() */ 56910).then(__webpack_require__.bind(__webpack_require__, 72912));}},{path:'/en/configure/app/server/port',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route141),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/server/port.mdx',preload:async()=>{await Route141.preload();return __webpack_require__.e(/* import() */ 39175).then(__webpack_require__.bind(__webpack_require__, 17052));}},{path:'/en/configure/app/server/public-routes',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route142),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/server/public-routes.mdx',preload:async()=>{await Route142.preload();return __webpack_require__.e(/* import() */ 93226).then(__webpack_require__.bind(__webpack_require__, 9475));}},{path:'/en/configure/app/server/routes',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route143),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/server/routes.mdx',preload:async()=>{await Route143.preload();return __webpack_require__.e(/* import() */ 79302).then(__webpack_require__.bind(__webpack_require__, 54004));}},{path:'/en/configure/app/server/ssr-by-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route144),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/server/ssr-by-entries.mdx',preload:async()=>{await Route144.preload();return __webpack_require__.e(/* import() */ 8973).then(__webpack_require__.bind(__webpack_require__, 84489));}},{path:'/en/configure/app/server/ssr',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route145),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/server/ssr.mdx',preload:async()=>{await Route145.preload();return __webpack_require__.e(/* import() */ 87556).then(__webpack_require__.bind(__webpack_require__, 94518));}},{path:'/en/configure/app/source/alias',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route146),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/source/alias.mdx',preload:async()=>{await Route146.preload();return __webpack_require__.e(/* import() */ 77774).then(__webpack_require__.bind(__webpack_require__, 63764));}},{path:'/en/configure/app/source/compile-js-data-uri',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route147),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/source/compile-js-data-uri.mdx',preload:async()=>{await Route147.preload();return __webpack_require__.e(/* import() */ 51464).then(__webpack_require__.bind(__webpack_require__, 95799));}},{path:'/en/configure/app/source/config-dir',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route148),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/source/config-dir.mdx',preload:async()=>{await Route148.preload();return __webpack_require__.e(/* import() */ 49264).then(__webpack_require__.bind(__webpack_require__, 64711));}},{path:'/en/configure/app/source/define',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route149),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/source/define.mdx',preload:async()=>{await Route149.preload();return __webpack_require__.e(/* import() */ 22486).then(__webpack_require__.bind(__webpack_require__, 27578));}},{path:'/en/configure/app/source/design-system',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route150),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/source/design-system.mdx',preload:async()=>{await Route150.preload();return __webpack_require__.e(/* import() */ 49516).then(__webpack_require__.bind(__webpack_require__, 64111));}},{path:'/en/configure/app/source/disable-default-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route151),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/source/disable-default-entries.mdx',preload:async()=>{await Route151.preload();return __webpack_require__.e(/* import() */ 57001).then(__webpack_require__.bind(__webpack_require__, 17195));}},{path:'/en/configure/app/source/disable-entry-dirs',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route152),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/source/disable-entry-dirs.mdx',preload:async()=>{await Route152.preload();return __webpack_require__.e(/* import() */ 21888).then(__webpack_require__.bind(__webpack_require__, 14773));}},{path:'/en/configure/app/source/enable-async-entry',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route153),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/source/enable-async-entry.mdx',preload:async()=>{await Route153.preload();return __webpack_require__.e(/* import() */ 76417).then(__webpack_require__.bind(__webpack_require__, 83847));}},{path:'/en/configure/app/source/entries-dir',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route154),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/source/entries-dir.mdx',preload:async()=>{await Route154.preload();return __webpack_require__.e(/* import() */ 85453).then(__webpack_require__.bind(__webpack_require__, 52793));}},{path:'/en/configure/app/source/entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route155),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/source/entries.mdx',preload:async()=>{await Route155.preload();return __webpack_require__.e(/* import() */ 13122).then(__webpack_require__.bind(__webpack_require__, 48815));}},{path:'/en/configure/app/source/exclude',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route156),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/source/exclude.mdx',preload:async()=>{await Route156.preload();return __webpack_require__.e(/* import() */ 21513).then(__webpack_require__.bind(__webpack_require__, 2893));}},{path:'/en/configure/app/source/global-vars',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route157),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/source/global-vars.mdx',preload:async()=>{await Route157.preload();return __webpack_require__.e(/* import() */ 16153).then(__webpack_require__.bind(__webpack_require__, 57038));}},{path:'/en/configure/app/source/include',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route158),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/source/include.mdx',preload:async()=>{await Route158.preload();return __webpack_require__.e(/* import() */ 4611).then(__webpack_require__.bind(__webpack_require__, 97221));}},{path:'/en/configure/app/source/module-scopes',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route159),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/source/module-scopes.mdx',preload:async()=>{await Route159.preload();return __webpack_require__.e(/* import() */ 29016).then(__webpack_require__.bind(__webpack_require__, 36220));}},{path:'/en/configure/app/source/pre-entry',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route160),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/source/pre-entry.mdx',preload:async()=>{await Route160.preload();return __webpack_require__.e(/* import() */ 31213).then(__webpack_require__.bind(__webpack_require__, 50250));}},{path:'/en/configure/app/source/resolve-extension-prefix',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route161),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/source/resolve-extension-prefix.mdx',preload:async()=>{await Route161.preload();return __webpack_require__.e(/* import() */ 27633).then(__webpack_require__.bind(__webpack_require__, 46616));}},{path:'/en/configure/app/source/resolve-main-fields',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route162),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/source/resolve-main-fields.mdx',preload:async()=>{await Route162.preload();return __webpack_require__.e(/* import() */ 4737).then(__webpack_require__.bind(__webpack_require__, 15094));}},{path:'/en/configure/app/testing/transformer',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route163),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/testing/transformer.mdx',preload:async()=>{await Route163.preload();return __webpack_require__.e(/* import() */ 91256).then(__webpack_require__.bind(__webpack_require__, 51586));}},{path:'/en/configure/app/tools/autoprefixer',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route164),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/autoprefixer.mdx',preload:async()=>{await Route164.preload();return __webpack_require__.e(/* import() */ 15451).then(__webpack_require__.bind(__webpack_require__, 300));}},{path:'/en/configure/app/tools/babel',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route165),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/babel.mdx',preload:async()=>{await Route165.preload();return __webpack_require__.e(/* import() */ 4595).then(__webpack_require__.bind(__webpack_require__, 71255));}},{path:'/en/configure/app/tools/css-extract',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route166),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/css-extract.mdx',preload:async()=>{await Route166.preload();return __webpack_require__.e(/* import() */ 16941).then(__webpack_require__.bind(__webpack_require__, 21965));}},{path:'/en/configure/app/tools/css-loader',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route167),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/css-loader.mdx',preload:async()=>{await Route167.preload();return __webpack_require__.e(/* import() */ 43596).then(__webpack_require__.bind(__webpack_require__, 96279));}},{path:'/en/configure/app/tools/dev-server',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route168),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/dev-server.mdx',preload:async()=>{await Route168.preload();return __webpack_require__.e(/* import() */ 37100).then(__webpack_require__.bind(__webpack_require__, 18387));}},{path:'/en/configure/app/tools/esbuild',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route169),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/esbuild.mdx',preload:async()=>{await Route169.preload();return __webpack_require__.e(/* import() */ 25671).then(__webpack_require__.bind(__webpack_require__, 27268));}},{path:'/en/configure/app/tools/html-plugin',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route170),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/html-plugin.mdx',preload:async()=>{await Route170.preload();return __webpack_require__.e(/* import() */ 80056).then(__webpack_require__.bind(__webpack_require__, 8486));}},{path:'/en/configure/app/tools/inspector',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route171),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/inspector.mdx',preload:async()=>{await Route171.preload();return __webpack_require__.e(/* import() */ 63117).then(__webpack_require__.bind(__webpack_require__, 3588));}},{path:'/en/configure/app/tools/jest',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route172),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/jest.mdx',preload:async()=>{await Route172.preload();return __webpack_require__.e(/* import() */ 92003).then(__webpack_require__.bind(__webpack_require__, 52826));}},{path:'/en/configure/app/tools/less',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route173),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/less.mdx',preload:async()=>{await Route173.preload();return __webpack_require__.e(/* import() */ 64092).then(__webpack_require__.bind(__webpack_require__, 34126));}},{path:'/en/configure/app/tools/minify-css',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route174),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/minify-css.mdx',preload:async()=>{await Route174.preload();return __webpack_require__.e(/* import() */ 32727).then(__webpack_require__.bind(__webpack_require__, 23902));}},{path:'/en/configure/app/tools/postcss',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route175),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/postcss.mdx',preload:async()=>{await Route175.preload();return __webpack_require__.e(/* import() */ 25008).then(__webpack_require__.bind(__webpack_require__, 32258));}},{path:'/en/configure/app/tools/pug',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route176),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/pug.mdx',preload:async()=>{await Route176.preload();return __webpack_require__.e(/* import() */ 23274).then(__webpack_require__.bind(__webpack_require__, 98231));}},{path:'/en/configure/app/tools/sass',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route177),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/sass.mdx',preload:async()=>{await Route177.preload();return __webpack_require__.e(/* import() */ 26262).then(__webpack_require__.bind(__webpack_require__, 79519));}},{path:'/en/configure/app/tools/style-loader',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route178),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/style-loader.mdx',preload:async()=>{await Route178.preload();return __webpack_require__.e(/* import() */ 23641).then(__webpack_require__.bind(__webpack_require__, 10969));}},{path:'/en/configure/app/tools/styled-components',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route179),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/styled-components.mdx',preload:async()=>{await Route179.preload();return __webpack_require__.e(/* import() */ 72484).then(__webpack_require__.bind(__webpack_require__, 68741));}},{path:'/en/configure/app/tools/swc',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route180),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/swc.mdx',preload:async()=>{await Route180.preload();return __webpack_require__.e(/* import() */ 2184).then(__webpack_require__.bind(__webpack_require__, 86515));}},{path:'/en/configure/app/tools/tailwindcss',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route181),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/tailwindcss.mdx',preload:async()=>{await Route181.preload();return __webpack_require__.e(/* import() */ 46544).then(__webpack_require__.bind(__webpack_require__, 34940));}},{path:'/en/configure/app/tools/terser',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route182),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/terser.mdx',preload:async()=>{await Route182.preload();return __webpack_require__.e(/* import() */ 26470).then(__webpack_require__.bind(__webpack_require__, 29152));}},{path:'/en/configure/app/tools/ts-checker',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route183),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/ts-checker.mdx',preload:async()=>{await Route183.preload();return __webpack_require__.e(/* import() */ 27389).then(__webpack_require__.bind(__webpack_require__, 26873));}},{path:'/en/configure/app/tools/ts-loader',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route184),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/ts-loader.mdx',preload:async()=>{await Route184.preload();return __webpack_require__.e(/* import() */ 53470).then(__webpack_require__.bind(__webpack_require__, 56583));}},{path:'/en/configure/app/tools/webpack-chain',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route185),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/webpack-chain.mdx',preload:async()=>{await Route185.preload();return __webpack_require__.e(/* import() */ 43777).then(__webpack_require__.bind(__webpack_require__, 80058));}},{path:'/en/configure/app/tools/webpack',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route186),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/tools/webpack.mdx',preload:async()=>{await Route186.preload();return __webpack_require__.e(/* import() */ 23917).then(__webpack_require__.bind(__webpack_require__, 58185));}},{path:'/en/configure/app/usage',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route187),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/configure/app/usage.mdx',preload:async()=>{await Route187.preload();return __webpack_require__.e(/* import() */ 94981).then(__webpack_require__.bind(__webpack_require__, 84878));}},{path:'/en/guides/advanced-features/bff/bff-proxy',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route188),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/advanced-features/bff/bff-proxy.mdx',preload:async()=>{await Route188.preload();return __webpack_require__.e(/* import() */ 1371).then(__webpack_require__.bind(__webpack_require__, 6625));}},{path:'/en/guides/advanced-features/bff/frameworks',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route189),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/advanced-features/bff/frameworks.mdx',preload:async()=>{await Route189.preload();return __webpack_require__.e(/* import() */ 55232).then(__webpack_require__.bind(__webpack_require__, 35155));}},{path:'/en/guides/advanced-features/bff/function',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route190),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/advanced-features/bff/function.mdx',preload:async()=>{await Route190.preload();return __webpack_require__.e(/* import() */ 28621).then(__webpack_require__.bind(__webpack_require__, 88495));}},{path:'/en/guides/advanced-features/bff/',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route191),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/advanced-features/bff/index.mdx',preload:async()=>{await Route191.preload();return __webpack_require__.e(/* import() */ 89933).then(__webpack_require__.bind(__webpack_require__, 31965));}},{path:'/en/guides/advanced-features/bff/type',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route192),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/advanced-features/bff/type.mdx',preload:async()=>{await Route192.preload();return __webpack_require__.e(/* import() */ 30116).then(__webpack_require__.bind(__webpack_require__, 59845));}},{path:'/en/guides/advanced-features/code-split',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route193),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/advanced-features/code-split.mdx',preload:async()=>{await Route193.preload();return __webpack_require__.e(/* import() */ 2314).then(__webpack_require__.bind(__webpack_require__, 4538));}},{path:'/en/guides/advanced-features/compatibility',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route194),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/advanced-features/compatibility.mdx',preload:async()=>{await Route194.preload();return __webpack_require__.e(/* import() */ 57259).then(__webpack_require__.bind(__webpack_require__, 96545));}},{path:'/en/guides/advanced-features/eslint',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route195),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/advanced-features/eslint.mdx',preload:async()=>{await Route195.preload();return __webpack_require__.e(/* import() */ 119).then(__webpack_require__.bind(__webpack_require__, 7581));}},{path:'/en/guides/advanced-features/',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route196),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/advanced-features/index.mdx',preload:async()=>{await Route196.preload();return __webpack_require__.e(/* import() */ 51703).then(__webpack_require__.bind(__webpack_require__, 32200));}},{path:'/en/guides/advanced-features/low-level',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route197),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/advanced-features/low-level.mdx',preload:async()=>{await Route197.preload();return __webpack_require__.e(/* import() */ 54706).then(__webpack_require__.bind(__webpack_require__, 79852));}},{path:'/en/guides/advanced-features/ssg',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route198),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/advanced-features/ssg.mdx',preload:async()=>{await Route198.preload();return Promise.all(/* import() */[__webpack_require__.e(29169), __webpack_require__.e(93331)]).then(__webpack_require__.bind(__webpack_require__, 6112));}},{path:'/en/guides/advanced-features/ssr',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route199),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/advanced-features/ssr.mdx',preload:async()=>{await Route199.preload();return __webpack_require__.e(/* import() */ 63608).then(__webpack_require__.bind(__webpack_require__, 9188));}},{path:'/en/guides/advanced-features/testing',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route200),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/advanced-features/testing.mdx',preload:async()=>{await Route200.preload();return __webpack_require__.e(/* import() */ 46600).then(__webpack_require__.bind(__webpack_require__, 65327));}},{path:'/en/guides/advanced-features/web-server',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route201),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/advanced-features/web-server.mdx',preload:async()=>{await Route201.preload();return __webpack_require__.e(/* import() */ 15814).then(__webpack_require__.bind(__webpack_require__, 30266));}},{path:'/en/guides/basic-features/alias',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route202),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/basic-features/alias.mdx',preload:async()=>{await Route202.preload();return __webpack_require__.e(/* import() */ 56553).then(__webpack_require__.bind(__webpack_require__, 49706));}},{path:'/en/guides/basic-features/builder',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route203),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/basic-features/builder.mdx',preload:async()=>{await Route203.preload();return __webpack_require__.e(/* import() */ 5352).then(__webpack_require__.bind(__webpack_require__, 10513));}},{path:'/en/guides/basic-features/css/css-in-js',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route204),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/basic-features/css/css-in-js.mdx',preload:async()=>{await Route204.preload();return __webpack_require__.e(/* import() */ 25046).then(__webpack_require__.bind(__webpack_require__, 16859));}},{path:'/en/guides/basic-features/css/css-modules',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route205),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/basic-features/css/css-modules.mdx',preload:async()=>{await Route205.preload();return __webpack_require__.e(/* import() */ 31881).then(__webpack_require__.bind(__webpack_require__, 43593));}},{path:'/en/guides/basic-features/css/less-sass',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route206),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/basic-features/css/less-sass.mdx',preload:async()=>{await Route206.preload();return __webpack_require__.e(/* import() */ 6129).then(__webpack_require__.bind(__webpack_require__, 76722));}},{path:'/en/guides/basic-features/css/postcss',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route207),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/basic-features/css/postcss.mdx',preload:async()=>{await Route207.preload();return __webpack_require__.e(/* import() */ 92001).then(__webpack_require__.bind(__webpack_require__, 72653));}},{path:'/en/guides/basic-features/css/tailwindcss',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route208),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/basic-features/css/tailwindcss.mdx',preload:async()=>{await Route208.preload();return __webpack_require__.e(/* import() */ 69128).then(__webpack_require__.bind(__webpack_require__, 23394));}},{path:'/en/guides/basic-features/data-fetch',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route209),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/basic-features/data-fetch.mdx',preload:async()=>{await Route209.preload();return __webpack_require__.e(/* import() */ 75684).then(__webpack_require__.bind(__webpack_require__, 95219));}},{path:'/en/guides/basic-features/env-vars',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route210),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/basic-features/env-vars.mdx',preload:async()=>{await Route210.preload();return __webpack_require__.e(/* import() */ 77273).then(__webpack_require__.bind(__webpack_require__, 81174));}},{path:'/en/guides/basic-features/html',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route211),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/basic-features/html.mdx',preload:async()=>{await Route211.preload();return __webpack_require__.e(/* import() */ 91285).then(__webpack_require__.bind(__webpack_require__, 75013));}},{path:'/en/guides/basic-features/mock',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route212),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/basic-features/mock.mdx',preload:async()=>{await Route212.preload();return __webpack_require__.e(/* import() */ 39121).then(__webpack_require__.bind(__webpack_require__, 15967));}},{path:'/en/guides/basic-features/proxy',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route213),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/basic-features/proxy.mdx',preload:async()=>{await Route213.preload();return __webpack_require__.e(/* import() */ 87567).then(__webpack_require__.bind(__webpack_require__, 22454));}},{path:'/en/guides/basic-features/routes',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route214),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/basic-features/routes.mdx',preload:async()=>{await Route214.preload();return __webpack_require__.e(/* import() */ 88547).then(__webpack_require__.bind(__webpack_require__, 8392));}},{path:'/en/guides/concept/entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route215),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/concept/entries.mdx',preload:async()=>{await Route215.preload();return __webpack_require__.e(/* import() */ 4343).then(__webpack_require__.bind(__webpack_require__, 62899));}},{path:'/en/guides/get-started/quick-start',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route216),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/get-started/quick-start.mdx',preload:async()=>{await Route216.preload();return __webpack_require__.e(/* import() */ 97371).then(__webpack_require__.bind(__webpack_require__, 65187));}},{path:'/en/guides/get-started/upgrade',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route217),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/get-started/upgrade.mdx',preload:async()=>{await Route217.preload();return __webpack_require__.e(/* import() */ 88598).then(__webpack_require__.bind(__webpack_require__, 27572));}},{path:'/en/guides/topic-detail/framework-plugin/extend',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route218),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/framework-plugin/extend.mdx',preload:async()=>{await Route218.preload();return __webpack_require__.e(/* import() */ 6075).then(__webpack_require__.bind(__webpack_require__, 61106));}},{path:'/en/guides/topic-detail/framework-plugin/hook-list',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route219),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/framework-plugin/hook-list.mdx',preload:async()=>{await Route219.preload();return __webpack_require__.e(/* import() */ 25358).then(__webpack_require__.bind(__webpack_require__, 59519));}},{path:'/en/guides/topic-detail/framework-plugin/hook',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route220),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/framework-plugin/hook.mdx',preload:async()=>{await Route220.preload();return __webpack_require__.e(/* import() */ 78576).then(__webpack_require__.bind(__webpack_require__, 76282));}},{path:'/en/guides/topic-detail/framework-plugin/implement',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route221),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/framework-plugin/implement.mdx',preload:async()=>{await Route221.preload();return __webpack_require__.e(/* import() */ 50914).then(__webpack_require__.bind(__webpack_require__, 3064));}},{path:'/en/guides/topic-detail/framework-plugin/introduction',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route222),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/framework-plugin/introduction.mdx',preload:async()=>{await Route222.preload();return __webpack_require__.e(/* import() */ 29467).then(__webpack_require__.bind(__webpack_require__, 93018));}},{path:'/en/guides/topic-detail/framework-plugin/lifecycle',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route223),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/framework-plugin/lifecycle.mdx',preload:async()=>{await Route223.preload();return __webpack_require__.e(/* import() */ 61481).then(__webpack_require__.bind(__webpack_require__, 32136));}},{path:'/en/guides/topic-detail/framework-plugin/plugin-api',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route224),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/framework-plugin/plugin-api.mdx',preload:async()=>{await Route224.preload();return __webpack_require__.e(/* import() */ 67011).then(__webpack_require__.bind(__webpack_require__, 8917));}},{path:'/en/guides/topic-detail/framework-plugin/relationship',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route225),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/framework-plugin/relationship.mdx',preload:async()=>{await Route225.preload();return __webpack_require__.e(/* import() */ 60589).then(__webpack_require__.bind(__webpack_require__, 34833));}},{path:'/en/guides/topic-detail/generator/codesmith/api/app',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route226),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/codesmith/api/app.mdx',preload:async()=>{await Route226.preload();return __webpack_require__.e(/* import() */ 51553).then(__webpack_require__.bind(__webpack_require__, 23113));}},{path:'/en/guides/topic-detail/generator/codesmith/api/ejs',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route227),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/codesmith/api/ejs.mdx',preload:async()=>{await Route227.preload();return __webpack_require__.e(/* import() */ 28410).then(__webpack_require__.bind(__webpack_require__, 23988));}},{path:'/en/guides/topic-detail/generator/codesmith/api/fs',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route228),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/codesmith/api/fs.mdx',preload:async()=>{await Route228.preload();return __webpack_require__.e(/* import() */ 94236).then(__webpack_require__.bind(__webpack_require__, 53352));}},{path:'/en/guides/topic-detail/generator/codesmith/api/git',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route229),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/codesmith/api/git.mdx',preload:async()=>{await Route229.preload();return __webpack_require__.e(/* import() */ 66575).then(__webpack_require__.bind(__webpack_require__, 35786));}},{path:'/en/guides/topic-detail/generator/codesmith/api/handlebars',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route230),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/codesmith/api/handlebars.mdx',preload:async()=>{await Route230.preload();return __webpack_require__.e(/* import() */ 15368).then(__webpack_require__.bind(__webpack_require__, 9296));}},{path:'/en/guides/topic-detail/generator/codesmith/api/json',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route231),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/codesmith/api/json.mdx',preload:async()=>{await Route231.preload();return __webpack_require__.e(/* import() */ 11413).then(__webpack_require__.bind(__webpack_require__, 84413));}},{path:'/en/guides/topic-detail/generator/codesmith/api/npm',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route232),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/codesmith/api/npm.mdx',preload:async()=>{await Route232.preload();return __webpack_require__.e(/* import() */ 57729).then(__webpack_require__.bind(__webpack_require__, 52109));}},{path:'/en/guides/topic-detail/generator/codesmith/develop',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route233),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/codesmith/develop.mdx',preload:async()=>{await Route233.preload();return __webpack_require__.e(/* import() */ 89358).then(__webpack_require__.bind(__webpack_require__, 42245));}},{path:'/en/guides/topic-detail/generator/codesmith/introduce',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route234),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/codesmith/introduce.mdx',preload:async()=>{await Route234.preload();return __webpack_require__.e(/* import() */ 15722).then(__webpack_require__.bind(__webpack_require__, 29773));}},{path:'/en/guides/topic-detail/generator/codesmith/run-in-js',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route235),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/codesmith/run-in-js.mdx',preload:async()=>{await Route235.preload();return __webpack_require__.e(/* import() */ 59393).then(__webpack_require__.bind(__webpack_require__, 39221));}},{path:'/en/guides/topic-detail/generator/codesmith/structure',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route236),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/codesmith/structure.mdx',preload:async()=>{await Route236.preload();return __webpack_require__.e(/* import() */ 80488).then(__webpack_require__.bind(__webpack_require__, 93145));}},{path:'/en/guides/topic-detail/generator/config/app',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route237),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/config/app.mdx',preload:async()=>{await Route237.preload();return __webpack_require__.e(/* import() */ 57689).then(__webpack_require__.bind(__webpack_require__, 14178));}},{path:'/en/guides/topic-detail/generator/config/common',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route238),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/config/common.mdx',preload:async()=>{await Route238.preload();return __webpack_require__.e(/* import() */ 70655).then(__webpack_require__.bind(__webpack_require__, 18799));}},{path:'/en/guides/topic-detail/generator/config/module',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route239),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/config/module.mdx',preload:async()=>{await Route239.preload();return __webpack_require__.e(/* import() */ 98515).then(__webpack_require__.bind(__webpack_require__, 47535));}},{path:'/en/guides/topic-detail/generator/config/monorepo',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route240),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/config/monorepo.mdx',preload:async()=>{await Route240.preload();return __webpack_require__.e(/* import() */ 27510).then(__webpack_require__.bind(__webpack_require__, 46174));}},{path:'/en/guides/topic-detail/generator/plugin/abstract',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route241),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/abstract.mdx',preload:async()=>{await Route241.preload();return __webpack_require__.e(/* import() */ 97120).then(__webpack_require__.bind(__webpack_require__, 97681));}},{path:'/en/guides/topic-detail/generator/plugin/api/file/addFile',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route242),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/file/addFile.mdx',preload:async()=>{await Route242.preload();return __webpack_require__.e(/* import() */ 44474).then(__webpack_require__.bind(__webpack_require__, 82430));}},{path:'/en/guides/topic-detail/generator/plugin/api/file/addHelper',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route243),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/file/addHelper.mdx',preload:async()=>{await Route243.preload();return __webpack_require__.e(/* import() */ 94749).then(__webpack_require__.bind(__webpack_require__, 58799));}},{path:'/en/guides/topic-detail/generator/plugin/api/file/addManyFile',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route244),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/file/addManyFile.mdx',preload:async()=>{await Route244.preload();return __webpack_require__.e(/* import() */ 85267).then(__webpack_require__.bind(__webpack_require__, 90535));}},{path:'/en/guides/topic-detail/generator/plugin/api/file/addPartial',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route245),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/file/addPartial.mdx',preload:async()=>{await Route245.preload();return __webpack_require__.e(/* import() */ 65083).then(__webpack_require__.bind(__webpack_require__, 94163));}},{path:'/en/guides/topic-detail/generator/plugin/api/file/introduce',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route246),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/file/introduce.mdx',preload:async()=>{await Route246.preload();return __webpack_require__.e(/* import() */ 54365).then(__webpack_require__.bind(__webpack_require__, 91683));}},{path:'/en/guides/topic-detail/generator/plugin/api/file/rmDir',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route247),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/file/rmDir.mdx',preload:async()=>{await Route247.preload();return __webpack_require__.e(/* import() */ 28315).then(__webpack_require__.bind(__webpack_require__, 59370));}},{path:'/en/guides/topic-detail/generator/plugin/api/file/rmFile',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route248),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/file/rmFile.mdx',preload:async()=>{await Route248.preload();return __webpack_require__.e(/* import() */ 66251).then(__webpack_require__.bind(__webpack_require__, 81526));}},{path:'/en/guides/topic-detail/generator/plugin/api/file/updateJSONFile',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route249),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/file/updateJSONFile.mdx',preload:async()=>{await Route249.preload();return __webpack_require__.e(/* import() */ 54453).then(__webpack_require__.bind(__webpack_require__, 44901));}},{path:'/en/guides/topic-detail/generator/plugin/api/file/updateModernConfig',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route250),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/file/updateModernConfig.mdx',preload:async()=>{await Route250.preload();return __webpack_require__.e(/* import() */ 59304).then(__webpack_require__.bind(__webpack_require__, 37128));}},{path:'/en/guides/topic-detail/generator/plugin/api/file/updateTextRawFile',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route251),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/file/updateTextRawFile.mdx',preload:async()=>{await Route251.preload();return __webpack_require__.e(/* import() */ 57051).then(__webpack_require__.bind(__webpack_require__, 52854));}},{path:'/en/guides/topic-detail/generator/plugin/api/git/gitAddAndCommit',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route252),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/git/gitAddAndCommit.mdx',preload:async()=>{await Route252.preload();return __webpack_require__.e(/* import() */ 95772).then(__webpack_require__.bind(__webpack_require__, 70371));}},{path:'/en/guides/topic-detail/generator/plugin/api/git/initGitRepo',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route253),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/git/initGitRepo.mdx',preload:async()=>{await Route253.preload();return __webpack_require__.e(/* import() */ 68027).then(__webpack_require__.bind(__webpack_require__, 8626));}},{path:'/en/guides/topic-detail/generator/plugin/api/git/isInGitRepo',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route254),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/git/isInGitRepo.mdx',preload:async()=>{await Route254.preload();return __webpack_require__.e(/* import() */ 46348).then(__webpack_require__.bind(__webpack_require__, 45005));}},{path:'/en/guides/topic-detail/generator/plugin/api/hook/afterForged',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route255),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/hook/afterForged.mdx',preload:async()=>{await Route255.preload();return __webpack_require__.e(/* import() */ 61989).then(__webpack_require__.bind(__webpack_require__, 53134));}},{path:'/en/guides/topic-detail/generator/plugin/api/hook/onForged',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route256),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/hook/onForged.mdx',preload:async()=>{await Route256.preload();return __webpack_require__.e(/* import() */ 30633).then(__webpack_require__.bind(__webpack_require__, 28067));}},{path:'/en/guides/topic-detail/generator/plugin/api/info/isFileExit',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route257),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/info/isFileExit.mdx',preload:async()=>{await Route257.preload();return __webpack_require__.e(/* import() */ 4266).then(__webpack_require__.bind(__webpack_require__, 88374));}},{path:'/en/guides/topic-detail/generator/plugin/api/info/locale',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route258),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/info/locale.mdx',preload:async()=>{await Route258.preload();return __webpack_require__.e(/* import() */ 34805).then(__webpack_require__.bind(__webpack_require__, 63208));}},{path:'/en/guides/topic-detail/generator/plugin/api/info/readDir',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route259),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/info/readDir.mdx',preload:async()=>{await Route259.preload();return __webpack_require__.e(/* import() */ 68487).then(__webpack_require__.bind(__webpack_require__, 46998));}},{path:'/en/guides/topic-detail/generator/plugin/api/input/addInputAfter',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route260),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/input/addInputAfter.mdx',preload:async()=>{await Route260.preload();return __webpack_require__.e(/* import() */ 42803).then(__webpack_require__.bind(__webpack_require__, 22361));}},{path:'/en/guides/topic-detail/generator/plugin/api/input/addInputBefore',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route261),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/input/addInputBefore.mdx',preload:async()=>{await Route261.preload();return __webpack_require__.e(/* import() */ 79755).then(__webpack_require__.bind(__webpack_require__, 97476));}},{path:'/en/guides/topic-detail/generator/plugin/api/input/setInput',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route262),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/input/setInput.mdx',preload:async()=>{await Route262.preload();return __webpack_require__.e(/* import() */ 33222).then(__webpack_require__.bind(__webpack_require__, 92181));}},{path:'/en/guides/topic-detail/generator/plugin/api/input/setInputValue',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route263),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/input/setInputValue.mdx',preload:async()=>{await Route263.preload();return __webpack_require__.e(/* import() */ 70464).then(__webpack_require__.bind(__webpack_require__, 8540));}},{path:'/en/guides/topic-detail/generator/plugin/api/input/type',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route264),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/input/type.mdx',preload:async()=>{await Route264.preload();return __webpack_require__.e(/* import() */ 6320).then(__webpack_require__.bind(__webpack_require__, 35923));}},{path:'/en/guides/topic-detail/generator/plugin/api/introduce',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route265),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/introduce.mdx',preload:async()=>{await Route265.preload();return __webpack_require__.e(/* import() */ 75114).then(__webpack_require__.bind(__webpack_require__, 19276));}},{path:'/en/guides/topic-detail/generator/plugin/api/new/createElement',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route266),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/new/createElement.mdx',preload:async()=>{await Route266.preload();return __webpack_require__.e(/* import() */ 13771).then(__webpack_require__.bind(__webpack_require__, 93287));}},{path:'/en/guides/topic-detail/generator/plugin/api/new/createSubProject',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route267),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/new/createSubProject.mdx',preload:async()=>{await Route267.preload();return __webpack_require__.e(/* import() */ 38198).then(__webpack_require__.bind(__webpack_require__, 14526));}},{path:'/en/guides/topic-detail/generator/plugin/api/new/enableFunc',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route268),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/new/enableFunc.mdx',preload:async()=>{await Route268.preload();return __webpack_require__.e(/* import() */ 29761).then(__webpack_require__.bind(__webpack_require__, 14959));}},{path:'/en/guides/topic-detail/generator/plugin/api/new/introduce',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route269),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/new/introduce.mdx',preload:async()=>{await Route269.preload();return __webpack_require__.e(/* import() */ 40464).then(__webpack_require__.bind(__webpack_require__, 94342));}},{path:'/en/guides/topic-detail/generator/plugin/api/npm/install',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route270),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/api/npm/install.mdx',preload:async()=>{await Route270.preload();return __webpack_require__.e(/* import() */ 66195).then(__webpack_require__.bind(__webpack_require__, 32471));}},{path:'/en/guides/topic-detail/generator/plugin/develop',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route271),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/develop.mdx',preload:async()=>{await Route271.preload();return __webpack_require__.e(/* import() */ 63412).then(__webpack_require__.bind(__webpack_require__, 58917));}},{path:'/en/guides/topic-detail/generator/plugin/use',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route272),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/plugin/use.mdx',preload:async()=>{await Route272.preload();return __webpack_require__.e(/* import() */ 76091).then(__webpack_require__.bind(__webpack_require__, 23347));}},{path:'/en/guides/topic-detail/generator/project',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route273),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/generator/project.mdx',preload:async()=>{await Route273.preload();return __webpack_require__.e(/* import() */ 35722).then(__webpack_require__.bind(__webpack_require__, 53784));}},{path:'/en/guides/topic-detail/micro-frontend/c01-introduction',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route274),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/micro-frontend/c01-introduction.mdx',preload:async()=>{await Route274.preload();return __webpack_require__.e(/* import() */ 71404).then(__webpack_require__.bind(__webpack_require__, 39784));}},{path:'/en/guides/topic-detail/micro-frontend/c02-development',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route275),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/micro-frontend/c02-development.mdx',preload:async()=>{await Route275.preload();return Promise.all(/* import() */[__webpack_require__.e(37085), __webpack_require__.e(19254)]).then(__webpack_require__.bind(__webpack_require__, 43591));}},{path:'/en/guides/topic-detail/micro-frontend/c03-main-app',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route276),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/micro-frontend/c03-main-app.mdx',preload:async()=>{await Route276.preload();return Promise.all(/* import() */[__webpack_require__.e(37085), __webpack_require__.e(34823)]).then(__webpack_require__.bind(__webpack_require__, 36041));}},{path:'/en/guides/topic-detail/micro-frontend/c04-communicate',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route277),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/micro-frontend/c04-communicate.mdx',preload:async()=>{await Route277.preload();return __webpack_require__.e(/* import() */ 40158).then(__webpack_require__.bind(__webpack_require__, 4299));}},{path:'/en/guides/topic-detail/micro-frontend/c05-mixed-stack',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route278),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/micro-frontend/c05-mixed-stack.mdx',preload:async()=>{await Route278.preload();return __webpack_require__.e(/* import() */ 14514).then(__webpack_require__.bind(__webpack_require__, 20964));}},{path:'/en/guides/topic-detail/model/auto-actions',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route279),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/model/auto-actions.mdx',preload:async()=>{await Route279.preload();return __webpack_require__.e(/* import() */ 79833).then(__webpack_require__.bind(__webpack_require__, 38194));}},{path:'/en/guides/topic-detail/model/computed-state',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route280),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/model/computed-state.mdx',preload:async()=>{await Route280.preload();return __webpack_require__.e(/* import() */ 81260).then(__webpack_require__.bind(__webpack_require__, 77373));}},{path:'/en/guides/topic-detail/model/define-model',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route281),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/model/define-model.mdx',preload:async()=>{await Route281.preload();return __webpack_require__.e(/* import() */ 59471).then(__webpack_require__.bind(__webpack_require__, 53151));}},{path:'/en/guides/topic-detail/model/faq',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route282),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/model/faq.mdx',preload:async()=>{await Route282.preload();return __webpack_require__.e(/* import() */ 71975).then(__webpack_require__.bind(__webpack_require__, 41524));}},{path:'/en/guides/topic-detail/model/manage-effects',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route283),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/model/manage-effects.mdx',preload:async()=>{await Route283.preload();return __webpack_require__.e(/* import() */ 82619).then(__webpack_require__.bind(__webpack_require__, 93081));}},{path:'/en/guides/topic-detail/model/model-communicate',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route284),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/model/model-communicate.mdx',preload:async()=>{await Route284.preload();return __webpack_require__.e(/* import() */ 66453).then(__webpack_require__.bind(__webpack_require__, 32820));}},{path:'/en/guides/topic-detail/model/performance',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route285),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/model/performance.mdx',preload:async()=>{await Route285.preload();return __webpack_require__.e(/* import() */ 25019).then(__webpack_require__.bind(__webpack_require__, 67787));}},{path:'/en/guides/topic-detail/model/quick-start',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route286),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/model/quick-start.mdx',preload:async()=>{await Route286.preload();return __webpack_require__.e(/* import() */ 57255).then(__webpack_require__.bind(__webpack_require__, 10750));}},{path:'/en/guides/topic-detail/model/redux-integration',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route287),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/model/redux-integration.mdx',preload:async()=>{await Route287.preload();return __webpack_require__.e(/* import() */ 73654).then(__webpack_require__.bind(__webpack_require__, 43937));}},{path:'/en/guides/topic-detail/model/test-model',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route288),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/model/test-model.mdx',preload:async()=>{await Route288.preload();return __webpack_require__.e(/* import() */ 77975).then(__webpack_require__.bind(__webpack_require__, 61777));}},{path:'/en/guides/topic-detail/model/typescript-best-practice',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route289),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/model/typescript-best-practice.mdx',preload:async()=>{await Route289.preload();return __webpack_require__.e(/* import() */ 56714).then(__webpack_require__.bind(__webpack_require__, 33840));}},{path:'/en/guides/topic-detail/model/use-model',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route290),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/model/use-model.mdx',preload:async()=>{await Route290.preload();return __webpack_require__.e(/* import() */ 25628).then(__webpack_require__.bind(__webpack_require__, 41529));}},{path:'/en/guides/topic-detail/model/use-out-of-modernjs',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route291),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/topic-detail/model/use-out-of-modernjs.mdx',preload:async()=>{await Route291.preload();return __webpack_require__.e(/* import() */ 52342).then(__webpack_require__.bind(__webpack_require__, 93448));}},{path:'/en/guides/troubleshooting/cli',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route292),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/guides/troubleshooting/cli.mdx',preload:async()=>{await Route292.preload();return __webpack_require__.e(/* import() */ 43074).then(__webpack_require__.bind(__webpack_require__, 75881));}},{path:'/en/',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route293),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/index.md',preload:async()=>{await Route293.preload();return __webpack_require__.e(/* import() */ 10315).then(__webpack_require__.bind(__webpack_require__, 71741));}},{path:'/en/tutorials/first-app/c01-start',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route294),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/tutorials/first-app/c01-start.mdx',preload:async()=>{await Route294.preload();return __webpack_require__.e(/* import() */ 97837).then(__webpack_require__.bind(__webpack_require__, 94267));}},{path:'/en/tutorials/first-app/c02-component',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route295),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/tutorials/first-app/c02-component.mdx',preload:async()=>{await Route295.preload();return __webpack_require__.e(/* import() */ 55073).then(__webpack_require__.bind(__webpack_require__, 96035));}},{path:'/en/tutorials/first-app/c03-css',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route296),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/tutorials/first-app/c03-css.mdx',preload:async()=>{await Route296.preload();return __webpack_require__.e(/* import() */ 91014).then(__webpack_require__.bind(__webpack_require__, 2656));}},{path:'/en/tutorials/first-app/c04-routes',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route297),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/tutorials/first-app/c04-routes.mdx',preload:async()=>{await Route297.preload();return __webpack_require__.e(/* import() */ 7201).then(__webpack_require__.bind(__webpack_require__, 39907));}},{path:'/en/tutorials/first-app/c05-loader',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route298),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/tutorials/first-app/c05-loader.mdx',preload:async()=>{await Route298.preload();return __webpack_require__.e(/* import() */ 70103).then(__webpack_require__.bind(__webpack_require__, 3598));}},{path:'/en/tutorials/first-app/c06-model',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route299),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/tutorials/first-app/c06-model.mdx',preload:async()=>{await Route299.preload();return __webpack_require__.e(/* import() */ 44063).then(__webpack_require__.bind(__webpack_require__, 37694));}},{path:'/en/tutorials/first-app/c07-container',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route300),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/tutorials/first-app/c07-container.mdx',preload:async()=>{await Route300.preload();return __webpack_require__.e(/* import() */ 12259).then(__webpack_require__.bind(__webpack_require__, 91402));}},{path:'/en/tutorials/first-app/c08-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route301),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/tutorials/first-app/c08-entries.mdx',preload:async()=>{await Route301.preload();return __webpack_require__.e(/* import() */ 58366).then(__webpack_require__.bind(__webpack_require__, 89607));}},{path:'/en/tutorials/foundations/introduction',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route302),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/en/tutorials/foundations/introduction.mdx',preload:async()=>{await Route302.preload();return __webpack_require__.e(/* import() */ 70425).then(__webpack_require__.bind(__webpack_require__, 79246));}},{path:'/apis/app/commands/build',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route303),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/commands/build.mdx',preload:async()=>{await Route303.preload();return __webpack_require__.e(/* import() */ 78102).then(__webpack_require__.bind(__webpack_require__, 64069));}},{path:'/apis/app/commands/dev',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route304),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/commands/dev.mdx',preload:async()=>{await Route304.preload();return __webpack_require__.e(/* import() */ 15905).then(__webpack_require__.bind(__webpack_require__, 2687));}},{path:'/apis/app/commands/',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route305),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/commands/index.mdx',preload:async()=>{await Route305.preload();return __webpack_require__.e(/* import() */ 58268).then(__webpack_require__.bind(__webpack_require__, 65723));}},{path:'/apis/app/commands/inspect',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route306),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/commands/inspect.mdx',preload:async()=>{await Route306.preload();return __webpack_require__.e(/* import() */ 43388).then(__webpack_require__.bind(__webpack_require__, 64778));}},{path:'/apis/app/commands/lint',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route307),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/commands/lint.mdx',preload:async()=>{await Route307.preload();return __webpack_require__.e(/* import() */ 29103).then(__webpack_require__.bind(__webpack_require__, 88007));}},{path:'/apis/app/commands/new',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route308),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/commands/new.mdx',preload:async()=>{await Route308.preload();return __webpack_require__.e(/* import() */ 56844).then(__webpack_require__.bind(__webpack_require__, 51988));}},{path:'/apis/app/commands/serve',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route309),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/commands/serve.mdx',preload:async()=>{await Route309.preload();return __webpack_require__.e(/* import() */ 14163).then(__webpack_require__.bind(__webpack_require__, 29961));}},{path:'/apis/app/commands/test',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route310),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/commands/test.mdx',preload:async()=>{await Route310.preload();return __webpack_require__.e(/* import() */ 17370).then(__webpack_require__.bind(__webpack_require__, 55119));}},{path:'/apis/app/commands/upgrade',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route311),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/commands/upgrade.mdx',preload:async()=>{await Route311.preload();return __webpack_require__.e(/* import() */ 6612).then(__webpack_require__.bind(__webpack_require__, 43901));}},{path:'/apis/app/hooks/api/framework/lambda',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route312),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/api/framework/lambda.mdx',preload:async()=>{await Route312.preload();return __webpack_require__.e(/* import() */ 28202).then(__webpack_require__.bind(__webpack_require__, 97005));}},{path:'/apis/app/hooks/api/functions/api',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route313),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/api/functions/api.mdx',preload:async()=>{await Route313.preload();return __webpack_require__.e(/* import() */ 69094).then(__webpack_require__.bind(__webpack_require__, 51903));}},{path:'/apis/app/hooks/api/functions/app',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route314),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/api/functions/app.mdx',preload:async()=>{await Route314.preload();return __webpack_require__.e(/* import() */ 29032).then(__webpack_require__.bind(__webpack_require__, 41821));}},{path:'/apis/app/hooks/api/functions/common',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route315),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/api/functions/common.mdx',preload:async()=>{await Route315.preload();return __webpack_require__.e(/* import() */ 5946).then(__webpack_require__.bind(__webpack_require__, 46539));}},{path:'/apis/app/hooks/api/test',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route316),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/api/test.mdx',preload:async()=>{await Route316.preload();return __webpack_require__.e(/* import() */ 8875).then(__webpack_require__.bind(__webpack_require__, 85151));}},{path:'/apis/app/hooks/config/html',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route317),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/config/html.mdx',preload:async()=>{await Route317.preload();return __webpack_require__.e(/* import() */ 40934).then(__webpack_require__.bind(__webpack_require__, 55509));}},{path:'/apis/app/hooks/config/icon',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route318),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/config/icon.mdx',preload:async()=>{await Route318.preload();return __webpack_require__.e(/* import() */ 22306).then(__webpack_require__.bind(__webpack_require__, 57010));}},{path:'/apis/app/hooks/config/mock',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route319),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/config/mock.mdx',preload:async()=>{await Route319.preload();return __webpack_require__.e(/* import() */ 41157).then(__webpack_require__.bind(__webpack_require__, 61732));}},{path:'/apis/app/hooks/config/public',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route320),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/config/public.mdx',preload:async()=>{await Route320.preload();return __webpack_require__.e(/* import() */ 2564).then(__webpack_require__.bind(__webpack_require__, 58787));}},{path:'/apis/app/hooks/config/storybook',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route321),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/config/storybook.mdx',preload:async()=>{await Route321.preload();return __webpack_require__.e(/* import() */ 60833).then(__webpack_require__.bind(__webpack_require__, 20731));}},{path:'/apis/app/hooks/config/upload',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route322),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/config/upload.mdx',preload:async()=>{await Route322.preload();return __webpack_require__.e(/* import() */ 10881).then(__webpack_require__.bind(__webpack_require__, 53706));}},{path:'/apis/app/hooks/',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route323),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/index.mdx',preload:async()=>{await Route323.preload();return __webpack_require__.e(/* import() */ 63206).then(__webpack_require__.bind(__webpack_require__, 71221));}},{path:'/apis/app/hooks/modern-config',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route324),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/modern-config.mdx',preload:async()=>{await Route324.preload();return __webpack_require__.e(/* import() */ 95900).then(__webpack_require__.bind(__webpack_require__, 80182));}},{path:'/apis/app/hooks/server/index_',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route325),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/server/index_.mdx',preload:async()=>{await Route325.preload();return __webpack_require__.e(/* import() */ 29942).then(__webpack_require__.bind(__webpack_require__, 76000));}},{path:'/apis/app/hooks/server/test',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route326),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/server/test.mdx',preload:async()=>{await Route326.preload();return __webpack_require__.e(/* import() */ 58969).then(__webpack_require__.bind(__webpack_require__, 74611));}},{path:'/apis/app/hooks/shared',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route327),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/shared.mdx',preload:async()=>{await Route327.preload();return __webpack_require__.e(/* import() */ 58205).then(__webpack_require__.bind(__webpack_require__, 5834));}},{path:'/apis/app/hooks/src/app',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route328),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/src/app.mdx',preload:async()=>{await Route328.preload();return __webpack_require__.e(/* import() */ 14693).then(__webpack_require__.bind(__webpack_require__, 13355));}},{path:'/apis/app/hooks/src/index_',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route329),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/src/index_.mdx',preload:async()=>{await Route329.preload();return __webpack_require__.e(/* import() */ 10318).then(__webpack_require__.bind(__webpack_require__, 79762));}},{path:'/apis/app/hooks/src/pages',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route330),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/src/pages.mdx',preload:async()=>{await Route330.preload();return __webpack_require__.e(/* import() */ 9962).then(__webpack_require__.bind(__webpack_require__, 95900));}},{path:'/apis/app/hooks/src/routes',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route331),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/src/routes.mdx',preload:async()=>{await Route331.preload();return __webpack_require__.e(/* import() */ 70986).then(__webpack_require__.bind(__webpack_require__, 96213));}},{path:'/apis/app/hooks/src/server',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route332),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/src/server.mdx',preload:async()=>{await Route332.preload();return __webpack_require__.e(/* import() */ 20003).then(__webpack_require__.bind(__webpack_require__, 43006));}},{path:'/apis/app/hooks/src/stories',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route333),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/src/stories.mdx',preload:async()=>{await Route333.preload();return __webpack_require__.e(/* import() */ 96567).then(__webpack_require__.bind(__webpack_require__, 19969));}},{path:'/apis/app/hooks/src/test',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route334),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/hooks/src/test.mdx',preload:async()=>{await Route334.preload();return __webpack_require__.e(/* import() */ 92531).then(__webpack_require__.bind(__webpack_require__, 2421));}},{path:'/apis/app/runtime/app/define-config',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route335),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/app/define-config.mdx',preload:async()=>{await Route335.preload();return __webpack_require__.e(/* import() */ 48894).then(__webpack_require__.bind(__webpack_require__, 95544));}},{path:'/apis/app/runtime/bff/hook',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route336),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/bff/hook.mdx',preload:async()=>{await Route336.preload();return __webpack_require__.e(/* import() */ 1005).then(__webpack_require__.bind(__webpack_require__, 7499));}},{path:'/apis/app/runtime/bff/use-context',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route337),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/bff/use-context.mdx',preload:async()=>{await Route337.preload();return __webpack_require__.e(/* import() */ 71963).then(__webpack_require__.bind(__webpack_require__, 20932));}},{path:'/apis/app/runtime/core/bootstrap',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route338),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/core/bootstrap.mdx',preload:async()=>{await Route338.preload();return __webpack_require__.e(/* import() */ 602).then(__webpack_require__.bind(__webpack_require__, 34095));}},{path:'/apis/app/runtime/core/create-app',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route339),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/core/create-app.mdx',preload:async()=>{await Route339.preload();return __webpack_require__.e(/* import() */ 46066).then(__webpack_require__.bind(__webpack_require__, 38193));}},{path:'/apis/app/runtime/core/use-loader',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route340),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/core/use-loader.mdx',preload:async()=>{await Route340.preload();return __webpack_require__.e(/* import() */ 35726).then(__webpack_require__.bind(__webpack_require__, 94953));}},{path:'/apis/app/runtime/core/use-module-apps',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route341),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/core/use-module-apps.mdx',preload:async()=>{await Route341.preload();return Promise.all(/* import() */[__webpack_require__.e(37085), __webpack_require__.e(71960)]).then(__webpack_require__.bind(__webpack_require__, 71018));}},{path:'/apis/app/runtime/core/use-runtime-context',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route342),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/core/use-runtime-context.mdx',preload:async()=>{await Route342.preload();return __webpack_require__.e(/* import() */ 36991).then(__webpack_require__.bind(__webpack_require__, 23215));}},{path:'/apis/app/runtime/',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route343),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/index.mdx',preload:async()=>{await Route343.preload();return __webpack_require__.e(/* import() */ 1870).then(__webpack_require__.bind(__webpack_require__, 54251));}},{path:'/apis/app/runtime/model/Provider',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route344),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/model/Provider.mdx',preload:async()=>{await Route344.preload();return __webpack_require__.e(/* import() */ 12211).then(__webpack_require__.bind(__webpack_require__, 39579));}},{path:'/apis/app/runtime/model/auto-actions',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route345),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/model/auto-actions.mdx',preload:async()=>{await Route345.preload();return __webpack_require__.e(/* import() */ 74126).then(__webpack_require__.bind(__webpack_require__, 31516));}},{path:'/apis/app/runtime/model/connect',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route346),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/model/connect.mdx',preload:async()=>{await Route346.preload();return __webpack_require__.e(/* import() */ 4912).then(__webpack_require__.bind(__webpack_require__, 60886));}},{path:'/apis/app/runtime/model/create-app',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route347),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/model/create-app.mdx',preload:async()=>{await Route347.preload();return __webpack_require__.e(/* import() */ 27534).then(__webpack_require__.bind(__webpack_require__, 38916));}},{path:'/apis/app/runtime/model/create-store',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route348),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/model/create-store.mdx',preload:async()=>{await Route348.preload();return __webpack_require__.e(/* import() */ 26055).then(__webpack_require__.bind(__webpack_require__, 13827));}},{path:'/apis/app/runtime/model/handle-effect',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route349),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/model/handle-effect.mdx',preload:async()=>{await Route349.preload();return __webpack_require__.e(/* import() */ 25704).then(__webpack_require__.bind(__webpack_require__, 28869));}},{path:'/apis/app/runtime/model/model_',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route350),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/model/model_.mdx',preload:async()=>{await Route350.preload();return __webpack_require__.e(/* import() */ 2131).then(__webpack_require__.bind(__webpack_require__, 59138));}},{path:'/apis/app/runtime/model/use-local-model',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route351),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/model/use-local-model.mdx',preload:async()=>{await Route351.preload();return __webpack_require__.e(/* import() */ 90542).then(__webpack_require__.bind(__webpack_require__, 82979));}},{path:'/apis/app/runtime/model/use-model',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route352),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/model/use-model.mdx',preload:async()=>{await Route352.preload();return __webpack_require__.e(/* import() */ 1829).then(__webpack_require__.bind(__webpack_require__, 70677));}},{path:'/apis/app/runtime/model/use-static-model',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route353),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/model/use-static-model.mdx',preload:async()=>{await Route353.preload();return __webpack_require__.e(/* import() */ 81063).then(__webpack_require__.bind(__webpack_require__, 23417));}},{path:'/apis/app/runtime/model/use-store',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route354),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/model/use-store.mdx',preload:async()=>{await Route354.preload();return __webpack_require__.e(/* import() */ 89828).then(__webpack_require__.bind(__webpack_require__, 49852));}},{path:'/apis/app/runtime/router/router',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route355),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/router/router.mdx',preload:async()=>{await Route355.preload();return __webpack_require__.e(/* import() */ 99374).then(__webpack_require__.bind(__webpack_require__, 20166));}},{path:'/apis/app/runtime/ssr/no-ssr',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route356),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/ssr/no-ssr.mdx',preload:async()=>{await Route356.preload();return __webpack_require__.e(/* import() */ 22452).then(__webpack_require__.bind(__webpack_require__, 25427));}},{path:'/apis/app/runtime/ssr/pre-render',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route357),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/ssr/pre-render.mdx',preload:async()=>{await Route357.preload();return __webpack_require__.e(/* import() */ 93777).then(__webpack_require__.bind(__webpack_require__, 19993));}},{path:'/apis/app/runtime/testing/act',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route358),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/testing/act.mdx',preload:async()=>{await Route358.preload();return __webpack_require__.e(/* import() */ 46321).then(__webpack_require__.bind(__webpack_require__, 10276));}},{path:'/apis/app/runtime/testing/cleanup',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route359),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/testing/cleanup.mdx',preload:async()=>{await Route359.preload();return __webpack_require__.e(/* import() */ 59657).then(__webpack_require__.bind(__webpack_require__, 61864));}},{path:'/apis/app/runtime/testing/render',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route360),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/testing/render.mdx',preload:async()=>{await Route360.preload();return __webpack_require__.e(/* import() */ 76541).then(__webpack_require__.bind(__webpack_require__, 17823));}},{path:'/apis/app/runtime/testing/renderApp',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route361),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/testing/renderApp.mdx',preload:async()=>{await Route361.preload();return __webpack_require__.e(/* import() */ 18317).then(__webpack_require__.bind(__webpack_require__, 30631));}},{path:'/apis/app/runtime/utility/css-in-js',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route362),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/utility/css-in-js.mdx',preload:async()=>{await Route362.preload();return __webpack_require__.e(/* import() */ 25447).then(__webpack_require__.bind(__webpack_require__, 24963));}},{path:'/apis/app/runtime/utility/head',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route363),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/utility/head.mdx',preload:async()=>{await Route363.preload();return __webpack_require__.e(/* import() */ 39625).then(__webpack_require__.bind(__webpack_require__, 21096));}},{path:'/apis/app/runtime/utility/loadable',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route364),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/utility/loadable.mdx',preload:async()=>{await Route364.preload();return __webpack_require__.e(/* import() */ 86085).then(__webpack_require__.bind(__webpack_require__, 18974));}},{path:'/apis/app/runtime/web-server/hook',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route365),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/web-server/hook.mdx',preload:async()=>{await Route365.preload();return __webpack_require__.e(/* import() */ 51491).then(__webpack_require__.bind(__webpack_require__, 76580));}},{path:'/apis/app/runtime/web-server/middleware',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route366),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/app/runtime/web-server/middleware.mdx',preload:async()=>{await Route366.preload();return __webpack_require__.e(/* import() */ 62626).then(__webpack_require__.bind(__webpack_require__, 38979));}},{path:'/apis/monorepo/commands/bump',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route367),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/commands/bump.mdx',preload:async()=>{await Route367.preload();return __webpack_require__.e(/* import() */ 93916).then(__webpack_require__.bind(__webpack_require__, 31609));}},{path:'/apis/monorepo/commands/change',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route368),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/commands/change.mdx',preload:async()=>{await Route368.preload();return __webpack_require__.e(/* import() */ 22423).then(__webpack_require__.bind(__webpack_require__, 2549));}},{path:'/apis/monorepo/commands/clear',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route369),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/commands/clear.mdx',preload:async()=>{await Route369.preload();return __webpack_require__.e(/* import() */ 24672).then(__webpack_require__.bind(__webpack_require__, 51245));}},{path:'/apis/monorepo/commands/deploy',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route370),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/commands/deploy.mdx',preload:async()=>{await Route370.preload();return __webpack_require__.e(/* import() */ 9460).then(__webpack_require__.bind(__webpack_require__, 97469));}},{path:'/apis/monorepo/commands/gen-release-note',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route371),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/commands/gen-release-note.mdx',preload:async()=>{await Route371.preload();return __webpack_require__.e(/* import() */ 56369).then(__webpack_require__.bind(__webpack_require__, 66119));}},{path:'/apis/monorepo/commands/',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route372),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/commands/index.mdx',preload:async()=>{await Route372.preload();return __webpack_require__.e(/* import() */ 15387).then(__webpack_require__.bind(__webpack_require__, 68626));}},{path:'/apis/monorepo/commands/lint',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route373),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/commands/lint.mdx',preload:async()=>{await Route373.preload();return __webpack_require__.e(/* import() */ 4970).then(__webpack_require__.bind(__webpack_require__, 6143));}},{path:'/apis/monorepo/commands/new',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route374),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/commands/new.mdx',preload:async()=>{await Route374.preload();return __webpack_require__.e(/* import() */ 93917).then(__webpack_require__.bind(__webpack_require__, 34179));}},{path:'/apis/monorepo/commands/pre',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route375),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/commands/pre.mdx',preload:async()=>{await Route375.preload();return __webpack_require__.e(/* import() */ 78169).then(__webpack_require__.bind(__webpack_require__, 53383));}},{path:'/apis/monorepo/commands/release',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route376),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/commands/release.mdx',preload:async()=>{await Route376.preload();return __webpack_require__.e(/* import() */ 5814).then(__webpack_require__.bind(__webpack_require__, 46361));}},{path:'/apis/monorepo/commands/upgrade',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route377),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/commands/upgrade.mdx',preload:async()=>{await Route377.preload();return __webpack_require__.e(/* import() */ 88197).then(__webpack_require__.bind(__webpack_require__, 66582));}},{path:'/apis/monorepo/hooks/apps',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route378),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/hooks/apps.mdx',preload:async()=>{await Route378.preload();return __webpack_require__.e(/* import() */ 52085).then(__webpack_require__.bind(__webpack_require__, 849));}},{path:'/apis/monorepo/hooks/code-workspace',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route379),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/hooks/code-workspace.mdx',preload:async()=>{await Route379.preload();return __webpack_require__.e(/* import() */ 16218).then(__webpack_require__.bind(__webpack_require__, 46917));}},{path:'/apis/monorepo/hooks/examples',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route380),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/hooks/examples.mdx',preload:async()=>{await Route380.preload();return __webpack_require__.e(/* import() */ 79924).then(__webpack_require__.bind(__webpack_require__, 13465));}},{path:'/apis/monorepo/hooks/features',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route381),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/hooks/features.mdx',preload:async()=>{await Route381.preload();return __webpack_require__.e(/* import() */ 84875).then(__webpack_require__.bind(__webpack_require__, 91670));}},{path:'/apis/monorepo/hooks/',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route382),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/hooks/index.mdx',preload:async()=>{await Route382.preload();return __webpack_require__.e(/* import() */ 11937).then(__webpack_require__.bind(__webpack_require__, 16013));}},{path:'/apis/monorepo/hooks/packages',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route383),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/hooks/packages.mdx',preload:async()=>{await Route383.preload();return __webpack_require__.e(/* import() */ 26386).then(__webpack_require__.bind(__webpack_require__, 66455));}},{path:'/apis/monorepo/hooks/pnpm-workspace',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route384),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/hooks/pnpm-workspace.mdx',preload:async()=>{await Route384.preload();return __webpack_require__.e(/* import() */ 37426).then(__webpack_require__.bind(__webpack_require__, 62167));}},{path:'/apis/monorepo/hooks/pnpmfile',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route385),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/apis/monorepo/hooks/pnpmfile.mdx',preload:async()=>{await Route385.preload();return __webpack_require__.e(/* import() */ 86282).then(__webpack_require__.bind(__webpack_require__, 11426));}},{path:'/blog/',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route386),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/blog/index.md',preload:async()=>{await Route386.preload();return __webpack_require__.e(/* import() */ 70775).then(__webpack_require__.bind(__webpack_require__, 68662));}},{path:'/community/',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route387),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/community/index.mdx',preload:async()=>{await Route387.preload();return __webpack_require__.e(/* import() */ 93970).then(__webpack_require__.bind(__webpack_require__, 29011));}},{path:'/configure/app/auto-load-plugin',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route388),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/auto-load-plugin.mdx',preload:async()=>{await Route388.preload();return __webpack_require__.e(/* import() */ 4326).then(__webpack_require__.bind(__webpack_require__, 19742));}},{path:'/configure/app/bff/prefix',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route389),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/bff/prefix.mdx',preload:async()=>{await Route389.preload();return __webpack_require__.e(/* import() */ 96932).then(__webpack_require__.bind(__webpack_require__, 5567));}},{path:'/configure/app/bff/proxy',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route390),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/bff/proxy.mdx',preload:async()=>{await Route390.preload();return __webpack_require__.e(/* import() */ 91970).then(__webpack_require__.bind(__webpack_require__, 63801));}},{path:'/configure/app/builder-plugins',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route391),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/builder-plugins.mdx',preload:async()=>{await Route391.preload();return __webpack_require__.e(/* import() */ 12212).then(__webpack_require__.bind(__webpack_require__, 868));}},{path:'/configure/app/deploy/microFrontend',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route392),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/deploy/microFrontend.mdx',preload:async()=>{await Route392.preload();return __webpack_require__.e(/* import() */ 26226).then(__webpack_require__.bind(__webpack_require__, 83012));}},{path:'/configure/app/dev/asset-prefix',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route393),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/dev/asset-prefix.mdx',preload:async()=>{await Route393.preload();return __webpack_require__.e(/* import() */ 19875).then(__webpack_require__.bind(__webpack_require__, 17203));}},{path:'/configure/app/dev/hmr',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route394),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/dev/hmr.mdx',preload:async()=>{await Route394.preload();return __webpack_require__.e(/* import() */ 41277).then(__webpack_require__.bind(__webpack_require__, 88523));}},{path:'/configure/app/dev/https',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route395),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/dev/https.mdx',preload:async()=>{await Route395.preload();return __webpack_require__.e(/* import() */ 31096).then(__webpack_require__.bind(__webpack_require__, 92311));}},{path:'/configure/app/dev/port',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route396),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/dev/port.mdx',preload:async()=>{await Route396.preload();return __webpack_require__.e(/* import() */ 60026).then(__webpack_require__.bind(__webpack_require__, 75880));}},{path:'/configure/app/dev/progress-bar',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route397),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/dev/progress-bar.mdx',preload:async()=>{await Route397.preload();return __webpack_require__.e(/* import() */ 42338).then(__webpack_require__.bind(__webpack_require__, 75531));}},{path:'/configure/app/dev/proxy',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route398),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/dev/proxy.mdx',preload:async()=>{await Route398.preload();return __webpack_require__.e(/* import() */ 58887).then(__webpack_require__.bind(__webpack_require__, 63917));}},{path:'/configure/app/dev/start-url',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route399),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/dev/start-url.mdx',preload:async()=>{await Route399.preload();return __webpack_require__.e(/* import() */ 29179).then(__webpack_require__.bind(__webpack_require__, 12107));}},{path:'/configure/app/experiments/lazy-compilation',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route400),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/experiments/lazy-compilation.mdx',preload:async()=>{await Route400.preload();return __webpack_require__.e(/* import() */ 84929).then(__webpack_require__.bind(__webpack_require__, 35265));}},{path:'/configure/app/html/app-icon',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route401),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/app-icon.mdx',preload:async()=>{await Route401.preload();return __webpack_require__.e(/* import() */ 91292).then(__webpack_require__.bind(__webpack_require__, 11589));}},{path:'/configure/app/html/crossorigin',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route402),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/crossorigin.mdx',preload:async()=>{await Route402.preload();return __webpack_require__.e(/* import() */ 91096).then(__webpack_require__.bind(__webpack_require__, 24115));}},{path:'/configure/app/html/disable-html-folder',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route403),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/disable-html-folder.mdx',preload:async()=>{await Route403.preload();return __webpack_require__.e(/* import() */ 28748).then(__webpack_require__.bind(__webpack_require__, 20571));}},{path:'/configure/app/html/favicon-by-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route404),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/favicon-by-entries.mdx',preload:async()=>{await Route404.preload();return __webpack_require__.e(/* import() */ 71340).then(__webpack_require__.bind(__webpack_require__, 88200));}},{path:'/configure/app/html/favicon',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route405),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/favicon.mdx',preload:async()=>{await Route405.preload();return __webpack_require__.e(/* import() */ 92301).then(__webpack_require__.bind(__webpack_require__, 62582));}},{path:'/configure/app/html/inject-by-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route406),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/inject-by-entries.mdx',preload:async()=>{await Route406.preload();return __webpack_require__.e(/* import() */ 23521).then(__webpack_require__.bind(__webpack_require__, 47645));}},{path:'/configure/app/html/inject',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route407),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/inject.mdx',preload:async()=>{await Route407.preload();return __webpack_require__.e(/* import() */ 19148).then(__webpack_require__.bind(__webpack_require__, 68274));}},{path:'/configure/app/html/meta-by-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route408),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/meta-by-entries.mdx',preload:async()=>{await Route408.preload();return __webpack_require__.e(/* import() */ 62220).then(__webpack_require__.bind(__webpack_require__, 2943));}},{path:'/configure/app/html/meta',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route409),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/meta.mdx',preload:async()=>{await Route409.preload();return __webpack_require__.e(/* import() */ 75430).then(__webpack_require__.bind(__webpack_require__, 10898));}},{path:'/configure/app/html/mount-id',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route410),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/mount-id.mdx',preload:async()=>{await Route410.preload();return __webpack_require__.e(/* import() */ 36149).then(__webpack_require__.bind(__webpack_require__, 81708));}},{path:'/configure/app/html/tags-by-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route411),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/tags-by-entries.mdx',preload:async()=>{await Route411.preload();return __webpack_require__.e(/* import() */ 53831).then(__webpack_require__.bind(__webpack_require__, 53123));}},{path:'/configure/app/html/tags',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route412),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/tags.mdx',preload:async()=>{await Route412.preload();return __webpack_require__.e(/* import() */ 45168).then(__webpack_require__.bind(__webpack_require__, 56163));}},{path:'/configure/app/html/template-by-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route413),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/template-by-entries.mdx',preload:async()=>{await Route413.preload();return __webpack_require__.e(/* import() */ 42824).then(__webpack_require__.bind(__webpack_require__, 7723));}},{path:'/configure/app/html/template-parameters-by-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route414),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/template-parameters-by-entries.mdx',preload:async()=>{await Route414.preload();return __webpack_require__.e(/* import() */ 46138).then(__webpack_require__.bind(__webpack_require__, 11374));}},{path:'/configure/app/html/template-parameters',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route415),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/template-parameters.mdx',preload:async()=>{await Route415.preload();return __webpack_require__.e(/* import() */ 79838).then(__webpack_require__.bind(__webpack_require__, 37995));}},{path:'/configure/app/html/template',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route416),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/template.mdx',preload:async()=>{await Route416.preload();return __webpack_require__.e(/* import() */ 66572).then(__webpack_require__.bind(__webpack_require__, 53282));}},{path:'/configure/app/html/title-by-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route417),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/title-by-entries.mdx',preload:async()=>{await Route417.preload();return __webpack_require__.e(/* import() */ 29208).then(__webpack_require__.bind(__webpack_require__, 48761));}},{path:'/configure/app/html/title',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route418),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/html/title.mdx',preload:async()=>{await Route418.preload();return __webpack_require__.e(/* import() */ 90987).then(__webpack_require__.bind(__webpack_require__, 15954));}},{path:'/configure/app/output/asset-prefix',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route419),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/asset-prefix.mdx',preload:async()=>{await Route419.preload();return __webpack_require__.e(/* import() */ 78639).then(__webpack_require__.bind(__webpack_require__, 90029));}},{path:'/configure/app/output/assets-retry',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route420),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/assets-retry.mdx',preload:async()=>{await Route420.preload();return __webpack_require__.e(/* import() */ 31297).then(__webpack_require__.bind(__webpack_require__, 63649));}},{path:'/configure/app/output/charset',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route421),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/charset.mdx',preload:async()=>{await Route421.preload();return __webpack_require__.e(/* import() */ 91686).then(__webpack_require__.bind(__webpack_require__, 59532));}},{path:'/configure/app/output/clean-dist-path',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route422),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/clean-dist-path.mdx',preload:async()=>{await Route422.preload();return __webpack_require__.e(/* import() */ 65090).then(__webpack_require__.bind(__webpack_require__, 76098));}},{path:'/configure/app/output/convert-to-rem',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route423),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/convert-to-rem.mdx',preload:async()=>{await Route423.preload();return __webpack_require__.e(/* import() */ 41820).then(__webpack_require__.bind(__webpack_require__, 42042));}},{path:'/configure/app/output/copy',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route424),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/copy.mdx',preload:async()=>{await Route424.preload();return __webpack_require__.e(/* import() */ 47597).then(__webpack_require__.bind(__webpack_require__, 77053));}},{path:'/configure/app/output/css-module-local-ident-name',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route425),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/css-module-local-ident-name.mdx',preload:async()=>{await Route425.preload();return __webpack_require__.e(/* import() */ 35138).then(__webpack_require__.bind(__webpack_require__, 76285));}},{path:'/configure/app/output/data-uri-limit',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route426),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/data-uri-limit.mdx',preload:async()=>{await Route426.preload();return __webpack_require__.e(/* import() */ 62450).then(__webpack_require__.bind(__webpack_require__, 1823));}},{path:'/configure/app/output/disable-css-extract',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route427),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/disable-css-extract.mdx',preload:async()=>{await Route427.preload();return __webpack_require__.e(/* import() */ 14253).then(__webpack_require__.bind(__webpack_require__, 76826));}},{path:'/configure/app/output/disable-css-module-extension',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route428),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/disable-css-module-extension.mdx',preload:async()=>{await Route428.preload();return __webpack_require__.e(/* import() */ 59935).then(__webpack_require__.bind(__webpack_require__, 40995));}},{path:'/configure/app/output/disable-filename-hash',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route429),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/disable-filename-hash.mdx',preload:async()=>{await Route429.preload();return __webpack_require__.e(/* import() */ 42335).then(__webpack_require__.bind(__webpack_require__, 76478));}},{path:'/configure/app/output/disable-inline-runtime-chunk',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route430),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/disable-inline-runtime-chunk.mdx',preload:async()=>{await Route430.preload();return __webpack_require__.e(/* import() */ 20038).then(__webpack_require__.bind(__webpack_require__, 31727));}},{path:'/configure/app/output/disable-minimize',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route431),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/disable-minimize.mdx',preload:async()=>{await Route431.preload();return __webpack_require__.e(/* import() */ 81201).then(__webpack_require__.bind(__webpack_require__, 36045));}},{path:'/configure/app/output/disable-node-polyfill',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route432),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/disable-node-polyfill.mdx',preload:async()=>{await Route432.preload();return __webpack_require__.e(/* import() */ 9233).then(__webpack_require__.bind(__webpack_require__, 61828));}},{path:'/configure/app/output/disable-source-map',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route433),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/disable-source-map.mdx',preload:async()=>{await Route433.preload();return __webpack_require__.e(/* import() */ 13443).then(__webpack_require__.bind(__webpack_require__, 21287));}},{path:'/configure/app/output/disable-ts-checker',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route434),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/disable-ts-checker.mdx',preload:async()=>{await Route434.preload();return __webpack_require__.e(/* import() */ 19522).then(__webpack_require__.bind(__webpack_require__, 52315));}},{path:'/configure/app/output/dist-path',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route435),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/dist-path.mdx',preload:async()=>{await Route435.preload();return __webpack_require__.e(/* import() */ 12146).then(__webpack_require__.bind(__webpack_require__, 46287));}},{path:'/configure/app/output/enable-asset-fallback',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route436),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/enable-asset-fallback.mdx',preload:async()=>{await Route436.preload();return __webpack_require__.e(/* import() */ 17356).then(__webpack_require__.bind(__webpack_require__, 16386));}},{path:'/configure/app/output/enable-asset-manifest',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route437),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/enable-asset-manifest.mdx',preload:async()=>{await Route437.preload();return __webpack_require__.e(/* import() */ 92210).then(__webpack_require__.bind(__webpack_require__, 87368));}},{path:'/configure/app/output/enable-css-module-tsdeclaration',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route438),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/enable-css-module-tsdeclaration.mdx',preload:async()=>{await Route438.preload();return __webpack_require__.e(/* import() */ 44471).then(__webpack_require__.bind(__webpack_require__, 46288));}},{path:'/configure/app/output/enable-inline-scripts',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route439),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/enable-inline-scripts.mdx',preload:async()=>{await Route439.preload();return __webpack_require__.e(/* import() */ 45126).then(__webpack_require__.bind(__webpack_require__, 78879));}},{path:'/configure/app/output/enable-inline-styles',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route440),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/enable-inline-styles.mdx',preload:async()=>{await Route440.preload();return __webpack_require__.e(/* import() */ 83994).then(__webpack_require__.bind(__webpack_require__, 55593));}},{path:'/configure/app/output/enable-latest-decorators',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route441),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/enable-latest-decorators.mdx',preload:async()=>{await Route441.preload();return __webpack_require__.e(/* import() */ 26016).then(__webpack_require__.bind(__webpack_require__, 58329));}},{path:'/configure/app/output/externals',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route442),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/externals.mdx',preload:async()=>{await Route442.preload();return __webpack_require__.e(/* import() */ 7843).then(__webpack_require__.bind(__webpack_require__, 24556));}},{path:'/configure/app/output/filename',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route443),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/filename.mdx',preload:async()=>{await Route443.preload();return __webpack_require__.e(/* import() */ 56183).then(__webpack_require__.bind(__webpack_require__, 29718));}},{path:'/configure/app/output/legal-comments',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route444),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/legal-comments.mdx',preload:async()=>{await Route444.preload();return __webpack_require__.e(/* import() */ 37046).then(__webpack_require__.bind(__webpack_require__, 96879));}},{path:'/configure/app/output/override-browserslist',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route445),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/override-browserslist.mdx',preload:async()=>{await Route445.preload();return __webpack_require__.e(/* import() */ 77274).then(__webpack_require__.bind(__webpack_require__, 13382));}},{path:'/configure/app/output/polyfill',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route446),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/polyfill.mdx',preload:async()=>{await Route446.preload();return __webpack_require__.e(/* import() */ 52220).then(__webpack_require__.bind(__webpack_require__, 36268));}},{path:'/configure/app/output/ssg',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route447),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/ssg.mdx',preload:async()=>{await Route447.preload();return Promise.all(/* import() */[__webpack_require__.e(29169), __webpack_require__.e(91951)]).then(__webpack_require__.bind(__webpack_require__, 64027));}},{path:'/configure/app/output/svg-default-export',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route448),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/output/svg-default-export.mdx',preload:async()=>{await Route448.preload();return __webpack_require__.e(/* import() */ 34012).then(__webpack_require__.bind(__webpack_require__, 6284));}},{path:'/configure/app/performance/build-cache',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route449),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/performance/build-cache.mdx',preload:async()=>{await Route449.preload();return __webpack_require__.e(/* import() */ 62786).then(__webpack_require__.bind(__webpack_require__, 28229));}},{path:'/configure/app/performance/bundle-analyze',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route450),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/performance/bundle-analyze.mdx',preload:async()=>{await Route450.preload();return __webpack_require__.e(/* import() */ 97229).then(__webpack_require__.bind(__webpack_require__, 14975));}},{path:'/configure/app/performance/chunk-split',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route451),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/performance/chunk-split.mdx',preload:async()=>{await Route451.preload();return __webpack_require__.e(/* import() */ 20567).then(__webpack_require__.bind(__webpack_require__, 2775));}},{path:'/configure/app/performance/print-file-size',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route452),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/performance/print-file-size.mdx',preload:async()=>{await Route452.preload();return __webpack_require__.e(/* import() */ 63349).then(__webpack_require__.bind(__webpack_require__, 40547));}},{path:'/configure/app/performance/profile',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route453),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/performance/profile.mdx',preload:async()=>{await Route453.preload();return __webpack_require__.e(/* import() */ 46617).then(__webpack_require__.bind(__webpack_require__, 56068));}},{path:'/configure/app/performance/remove-console',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route454),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/performance/remove-console.mdx',preload:async()=>{await Route454.preload();return __webpack_require__.e(/* import() */ 27778).then(__webpack_require__.bind(__webpack_require__, 30660));}},{path:'/configure/app/performance/remove-moment-locale',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route455),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/performance/remove-moment-locale.mdx',preload:async()=>{await Route455.preload();return __webpack_require__.e(/* import() */ 99412).then(__webpack_require__.bind(__webpack_require__, 64580));}},{path:'/configure/app/plugins',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route456),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/plugins.mdx',preload:async()=>{await Route456.preload();return __webpack_require__.e(/* import() */ 91547).then(__webpack_require__.bind(__webpack_require__, 22340));}},{path:'/configure/app/runtime/intro',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route457),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/runtime/intro.mdx',preload:async()=>{await Route457.preload();return __webpack_require__.e(/* import() */ 34197).then(__webpack_require__.bind(__webpack_require__, 73238));}},{path:'/configure/app/runtime/master-app',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route458),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/runtime/master-app.mdx',preload:async()=>{await Route458.preload();return __webpack_require__.e(/* import() */ 14042).then(__webpack_require__.bind(__webpack_require__, 90120));}},{path:'/configure/app/runtime/router',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route459),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/runtime/router.mdx',preload:async()=>{await Route459.preload();return __webpack_require__.e(/* import() */ 16244).then(__webpack_require__.bind(__webpack_require__, 14670));}},{path:'/configure/app/runtime/state',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route460),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/runtime/state.mdx',preload:async()=>{await Route460.preload();return __webpack_require__.e(/* import() */ 92589).then(__webpack_require__.bind(__webpack_require__, 84725));}},{path:'/configure/app/security/check-syntax',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route461),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/security/check-syntax.mdx',preload:async()=>{await Route461.preload();return __webpack_require__.e(/* import() */ 91597).then(__webpack_require__.bind(__webpack_require__, 11303));}},{path:'/configure/app/security/sri',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route462),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/security/sri.mdx',preload:async()=>{await Route462.preload();return __webpack_require__.e(/* import() */ 82757).then(__webpack_require__.bind(__webpack_require__, 18045));}},{path:'/configure/app/server/base-url',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route463),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/server/base-url.mdx',preload:async()=>{await Route463.preload();return __webpack_require__.e(/* import() */ 18572).then(__webpack_require__.bind(__webpack_require__, 61806));}},{path:'/configure/app/server/enable-framework-ext',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route464),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/server/enable-framework-ext.mdx',preload:async()=>{await Route464.preload();return __webpack_require__.e(/* import() */ 85861).then(__webpack_require__.bind(__webpack_require__, 13186));}},{path:'/configure/app/server/port',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route465),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/server/port.mdx',preload:async()=>{await Route465.preload();return __webpack_require__.e(/* import() */ 40193).then(__webpack_require__.bind(__webpack_require__, 41927));}},{path:'/configure/app/server/public-routes',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route466),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/server/public-routes.mdx',preload:async()=>{await Route466.preload();return __webpack_require__.e(/* import() */ 62531).then(__webpack_require__.bind(__webpack_require__, 54839));}},{path:'/configure/app/server/routes',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route467),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/server/routes.mdx',preload:async()=>{await Route467.preload();return __webpack_require__.e(/* import() */ 28366).then(__webpack_require__.bind(__webpack_require__, 65271));}},{path:'/configure/app/server/ssr-by-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route468),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/server/ssr-by-entries.mdx',preload:async()=>{await Route468.preload();return __webpack_require__.e(/* import() */ 61707).then(__webpack_require__.bind(__webpack_require__, 8078));}},{path:'/configure/app/server/ssr',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route469),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/server/ssr.mdx',preload:async()=>{await Route469.preload();return __webpack_require__.e(/* import() */ 639).then(__webpack_require__.bind(__webpack_require__, 58220));}},{path:'/configure/app/source/alias',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route470),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/source/alias.mdx',preload:async()=>{await Route470.preload();return __webpack_require__.e(/* import() */ 2022).then(__webpack_require__.bind(__webpack_require__, 63329));}},{path:'/configure/app/source/compile-js-data-uri',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route471),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/source/compile-js-data-uri.mdx',preload:async()=>{await Route471.preload();return __webpack_require__.e(/* import() */ 3083).then(__webpack_require__.bind(__webpack_require__, 48130));}},{path:'/configure/app/source/config-dir',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route472),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/source/config-dir.mdx',preload:async()=>{await Route472.preload();return __webpack_require__.e(/* import() */ 47177).then(__webpack_require__.bind(__webpack_require__, 66558));}},{path:'/configure/app/source/define',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route473),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/source/define.mdx',preload:async()=>{await Route473.preload();return __webpack_require__.e(/* import() */ 22782).then(__webpack_require__.bind(__webpack_require__, 49175));}},{path:'/configure/app/source/design-system',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route474),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/source/design-system.mdx',preload:async()=>{await Route474.preload();return __webpack_require__.e(/* import() */ 14294).then(__webpack_require__.bind(__webpack_require__, 93298));}},{path:'/configure/app/source/disable-default-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route475),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/source/disable-default-entries.mdx',preload:async()=>{await Route475.preload();return __webpack_require__.e(/* import() */ 25912).then(__webpack_require__.bind(__webpack_require__, 77166));}},{path:'/configure/app/source/disable-entry-dirs',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route476),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/source/disable-entry-dirs.mdx',preload:async()=>{await Route476.preload();return __webpack_require__.e(/* import() */ 76877).then(__webpack_require__.bind(__webpack_require__, 14663));}},{path:'/configure/app/source/enable-async-entry',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route477),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/source/enable-async-entry.mdx',preload:async()=>{await Route477.preload();return __webpack_require__.e(/* import() */ 5643).then(__webpack_require__.bind(__webpack_require__, 26797));}},{path:'/configure/app/source/entries-dir',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route478),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/source/entries-dir.mdx',preload:async()=>{await Route478.preload();return __webpack_require__.e(/* import() */ 64731).then(__webpack_require__.bind(__webpack_require__, 40));}},{path:'/configure/app/source/entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route479),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/source/entries.mdx',preload:async()=>{await Route479.preload();return __webpack_require__.e(/* import() */ 28561).then(__webpack_require__.bind(__webpack_require__, 74230));}},{path:'/configure/app/source/exclude',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route480),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/source/exclude.mdx',preload:async()=>{await Route480.preload();return __webpack_require__.e(/* import() */ 27056).then(__webpack_require__.bind(__webpack_require__, 30753));}},{path:'/configure/app/source/global-vars',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route481),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/source/global-vars.mdx',preload:async()=>{await Route481.preload();return __webpack_require__.e(/* import() */ 16201).then(__webpack_require__.bind(__webpack_require__, 82895));}},{path:'/configure/app/source/include',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route482),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/source/include.mdx',preload:async()=>{await Route482.preload();return __webpack_require__.e(/* import() */ 42854).then(__webpack_require__.bind(__webpack_require__, 53017));}},{path:'/configure/app/source/module-scopes',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route483),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/source/module-scopes.mdx',preload:async()=>{await Route483.preload();return __webpack_require__.e(/* import() */ 91643).then(__webpack_require__.bind(__webpack_require__, 81344));}},{path:'/configure/app/source/pre-entry',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route484),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/source/pre-entry.mdx',preload:async()=>{await Route484.preload();return __webpack_require__.e(/* import() */ 6077).then(__webpack_require__.bind(__webpack_require__, 10986));}},{path:'/configure/app/source/resolve-extension-prefix',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route485),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/source/resolve-extension-prefix.mdx',preload:async()=>{await Route485.preload();return __webpack_require__.e(/* import() */ 12844).then(__webpack_require__.bind(__webpack_require__, 63893));}},{path:'/configure/app/source/resolve-main-fields',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route486),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/source/resolve-main-fields.mdx',preload:async()=>{await Route486.preload();return __webpack_require__.e(/* import() */ 55814).then(__webpack_require__.bind(__webpack_require__, 63366));}},{path:'/configure/app/testing/transformer',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route487),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/testing/transformer.mdx',preload:async()=>{await Route487.preload();return __webpack_require__.e(/* import() */ 77267).then(__webpack_require__.bind(__webpack_require__, 36367));}},{path:'/configure/app/tools/autoprefixer',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route488),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/autoprefixer.mdx',preload:async()=>{await Route488.preload();return __webpack_require__.e(/* import() */ 67603).then(__webpack_require__.bind(__webpack_require__, 44058));}},{path:'/configure/app/tools/babel',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route489),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/babel.mdx',preload:async()=>{await Route489.preload();return __webpack_require__.e(/* import() */ 54191).then(__webpack_require__.bind(__webpack_require__, 43211));}},{path:'/configure/app/tools/css-extract',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route490),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/css-extract.mdx',preload:async()=>{await Route490.preload();return __webpack_require__.e(/* import() */ 4813).then(__webpack_require__.bind(__webpack_require__, 69078));}},{path:'/configure/app/tools/css-loader',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route491),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/css-loader.mdx',preload:async()=>{await Route491.preload();return __webpack_require__.e(/* import() */ 95833).then(__webpack_require__.bind(__webpack_require__, 74156));}},{path:'/configure/app/tools/dev-server',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route492),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/dev-server.mdx',preload:async()=>{await Route492.preload();return __webpack_require__.e(/* import() */ 10209).then(__webpack_require__.bind(__webpack_require__, 83477));}},{path:'/configure/app/tools/esbuild',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route493),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/esbuild.mdx',preload:async()=>{await Route493.preload();return __webpack_require__.e(/* import() */ 90774).then(__webpack_require__.bind(__webpack_require__, 72145));}},{path:'/configure/app/tools/html-plugin',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route494),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/html-plugin.mdx',preload:async()=>{await Route494.preload();return __webpack_require__.e(/* import() */ 82773).then(__webpack_require__.bind(__webpack_require__, 82921));}},{path:'/configure/app/tools/inspector',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route495),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/inspector.mdx',preload:async()=>{await Route495.preload();return __webpack_require__.e(/* import() */ 40913).then(__webpack_require__.bind(__webpack_require__, 720));}},{path:'/configure/app/tools/jest',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route496),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/jest.mdx',preload:async()=>{await Route496.preload();return __webpack_require__.e(/* import() */ 14566).then(__webpack_require__.bind(__webpack_require__, 71164));}},{path:'/configure/app/tools/less',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route497),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/less.mdx',preload:async()=>{await Route497.preload();return __webpack_require__.e(/* import() */ 81006).then(__webpack_require__.bind(__webpack_require__, 85442));}},{path:'/configure/app/tools/minify-css',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route498),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/minify-css.mdx',preload:async()=>{await Route498.preload();return __webpack_require__.e(/* import() */ 31255).then(__webpack_require__.bind(__webpack_require__, 95186));}},{path:'/configure/app/tools/postcss',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route499),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/postcss.mdx',preload:async()=>{await Route499.preload();return __webpack_require__.e(/* import() */ 3027).then(__webpack_require__.bind(__webpack_require__, 27088));}},{path:'/configure/app/tools/pug',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route500),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/pug.mdx',preload:async()=>{await Route500.preload();return __webpack_require__.e(/* import() */ 89344).then(__webpack_require__.bind(__webpack_require__, 57071));}},{path:'/configure/app/tools/sass',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route501),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/sass.mdx',preload:async()=>{await Route501.preload();return __webpack_require__.e(/* import() */ 86613).then(__webpack_require__.bind(__webpack_require__, 17603));}},{path:'/configure/app/tools/style-loader',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route502),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/style-loader.mdx',preload:async()=>{await Route502.preload();return __webpack_require__.e(/* import() */ 50410).then(__webpack_require__.bind(__webpack_require__, 48241));}},{path:'/configure/app/tools/styled-components',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route503),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/styled-components.mdx',preload:async()=>{await Route503.preload();return __webpack_require__.e(/* import() */ 91906).then(__webpack_require__.bind(__webpack_require__, 89913));}},{path:'/configure/app/tools/swc',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route504),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/swc.mdx',preload:async()=>{await Route504.preload();return __webpack_require__.e(/* import() */ 66567).then(__webpack_require__.bind(__webpack_require__, 59976));}},{path:'/configure/app/tools/tailwindcss',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route505),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/tailwindcss.mdx',preload:async()=>{await Route505.preload();return __webpack_require__.e(/* import() */ 6656).then(__webpack_require__.bind(__webpack_require__, 31990));}},{path:'/configure/app/tools/terser',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route506),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/terser.mdx',preload:async()=>{await Route506.preload();return __webpack_require__.e(/* import() */ 97931).then(__webpack_require__.bind(__webpack_require__, 88012));}},{path:'/configure/app/tools/ts-checker',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route507),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/ts-checker.mdx',preload:async()=>{await Route507.preload();return __webpack_require__.e(/* import() */ 3510).then(__webpack_require__.bind(__webpack_require__, 55147));}},{path:'/configure/app/tools/ts-loader',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route508),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/ts-loader.mdx',preload:async()=>{await Route508.preload();return __webpack_require__.e(/* import() */ 76080).then(__webpack_require__.bind(__webpack_require__, 47793));}},{path:'/configure/app/tools/webpack-chain',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route509),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/webpack-chain.mdx',preload:async()=>{await Route509.preload();return __webpack_require__.e(/* import() */ 13987).then(__webpack_require__.bind(__webpack_require__, 82589));}},{path:'/configure/app/tools/webpack',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route510),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/tools/webpack.mdx',preload:async()=>{await Route510.preload();return __webpack_require__.e(/* import() */ 36297).then(__webpack_require__.bind(__webpack_require__, 55230));}},{path:'/configure/app/usage',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route511),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/configure/app/usage.mdx',preload:async()=>{await Route511.preload();return __webpack_require__.e(/* import() */ 53694).then(__webpack_require__.bind(__webpack_require__, 7299));}},{path:'/guides/advanced-features/bff/bff-proxy',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route512),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/advanced-features/bff/bff-proxy.mdx',preload:async()=>{await Route512.preload();return __webpack_require__.e(/* import() */ 84345).then(__webpack_require__.bind(__webpack_require__, 33466));}},{path:'/guides/advanced-features/bff/frameworks',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route513),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/advanced-features/bff/frameworks.mdx',preload:async()=>{await Route513.preload();return __webpack_require__.e(/* import() */ 47492).then(__webpack_require__.bind(__webpack_require__, 8549));}},{path:'/guides/advanced-features/bff/function',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route514),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/advanced-features/bff/function.mdx',preload:async()=>{await Route514.preload();return __webpack_require__.e(/* import() */ 44812).then(__webpack_require__.bind(__webpack_require__, 34623));}},{path:'/guides/advanced-features/bff/',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route515),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/advanced-features/bff/index.mdx',preload:async()=>{await Route515.preload();return __webpack_require__.e(/* import() */ 74391).then(__webpack_require__.bind(__webpack_require__, 85062));}},{path:'/guides/advanced-features/bff/type',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route516),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/advanced-features/bff/type.mdx',preload:async()=>{await Route516.preload();return __webpack_require__.e(/* import() */ 93763).then(__webpack_require__.bind(__webpack_require__, 26126));}},{path:'/guides/advanced-features/code-split',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route517),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/advanced-features/code-split.mdx',preload:async()=>{await Route517.preload();return __webpack_require__.e(/* import() */ 22200).then(__webpack_require__.bind(__webpack_require__, 54738));}},{path:'/guides/advanced-features/compatibility',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route518),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/advanced-features/compatibility.mdx',preload:async()=>{await Route518.preload();return __webpack_require__.e(/* import() */ 67414).then(__webpack_require__.bind(__webpack_require__, 97106));}},{path:'/guides/advanced-features/eslint',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route519),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/advanced-features/eslint.mdx',preload:async()=>{await Route519.preload();return __webpack_require__.e(/* import() */ 3694).then(__webpack_require__.bind(__webpack_require__, 79835));}},{path:'/guides/advanced-features/',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route520),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/advanced-features/index.mdx',preload:async()=>{await Route520.preload();return __webpack_require__.e(/* import() */ 40086).then(__webpack_require__.bind(__webpack_require__, 77531));}},{path:'/guides/advanced-features/low-level',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route521),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/advanced-features/low-level.mdx',preload:async()=>{await Route521.preload();return __webpack_require__.e(/* import() */ 41037).then(__webpack_require__.bind(__webpack_require__, 16236));}},{path:'/guides/advanced-features/ssg',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route522),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/advanced-features/ssg.mdx',preload:async()=>{await Route522.preload();return Promise.all(/* import() */[__webpack_require__.e(29169), __webpack_require__.e(27302)]).then(__webpack_require__.bind(__webpack_require__, 3856));}},{path:'/guides/advanced-features/ssr',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route523),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/advanced-features/ssr.mdx',preload:async()=>{await Route523.preload();return __webpack_require__.e(/* import() */ 23665).then(__webpack_require__.bind(__webpack_require__, 91059));}},{path:'/guides/advanced-features/testing',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route524),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/advanced-features/testing.mdx',preload:async()=>{await Route524.preload();return __webpack_require__.e(/* import() */ 10296).then(__webpack_require__.bind(__webpack_require__, 72392));}},{path:'/guides/advanced-features/web-server',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route525),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/advanced-features/web-server.mdx',preload:async()=>{await Route525.preload();return __webpack_require__.e(/* import() */ 24858).then(__webpack_require__.bind(__webpack_require__, 69984));}},{path:'/guides/basic-features/alias',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route526),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/basic-features/alias.mdx',preload:async()=>{await Route526.preload();return __webpack_require__.e(/* import() */ 61175).then(__webpack_require__.bind(__webpack_require__, 54019));}},{path:'/guides/basic-features/builder',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route527),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/basic-features/builder.mdx',preload:async()=>{await Route527.preload();return __webpack_require__.e(/* import() */ 48626).then(__webpack_require__.bind(__webpack_require__, 22886));}},{path:'/guides/basic-features/css/css-in-js',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route528),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/basic-features/css/css-in-js.mdx',preload:async()=>{await Route528.preload();return __webpack_require__.e(/* import() */ 86152).then(__webpack_require__.bind(__webpack_require__, 46363));}},{path:'/guides/basic-features/css/css-modules',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route529),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/basic-features/css/css-modules.mdx',preload:async()=>{await Route529.preload();return __webpack_require__.e(/* import() */ 10202).then(__webpack_require__.bind(__webpack_require__, 20574));}},{path:'/guides/basic-features/css/less-sass',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route530),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/basic-features/css/less-sass.mdx',preload:async()=>{await Route530.preload();return __webpack_require__.e(/* import() */ 86206).then(__webpack_require__.bind(__webpack_require__, 18507));}},{path:'/guides/basic-features/css/postcss',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route531),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/basic-features/css/postcss.mdx',preload:async()=>{await Route531.preload();return __webpack_require__.e(/* import() */ 69710).then(__webpack_require__.bind(__webpack_require__, 34081));}},{path:'/guides/basic-features/css/tailwindcss',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route532),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/basic-features/css/tailwindcss.mdx',preload:async()=>{await Route532.preload();return __webpack_require__.e(/* import() */ 9828).then(__webpack_require__.bind(__webpack_require__, 15394));}},{path:'/guides/basic-features/data-fetch',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route533),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/basic-features/data-fetch.mdx',preload:async()=>{await Route533.preload();return __webpack_require__.e(/* import() */ 95959).then(__webpack_require__.bind(__webpack_require__, 82175));}},{path:'/guides/basic-features/env-vars',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route534),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/basic-features/env-vars.mdx',preload:async()=>{await Route534.preload();return __webpack_require__.e(/* import() */ 16609).then(__webpack_require__.bind(__webpack_require__, 57175));}},{path:'/guides/basic-features/html',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route535),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/basic-features/html.mdx',preload:async()=>{await Route535.preload();return __webpack_require__.e(/* import() */ 10529).then(__webpack_require__.bind(__webpack_require__, 73931));}},{path:'/guides/basic-features/',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route536),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/basic-features/index.mdx',preload:async()=>{await Route536.preload();return __webpack_require__.e(/* import() */ 8227).then(__webpack_require__.bind(__webpack_require__, 87765));}},{path:'/guides/basic-features/mock',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route537),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/basic-features/mock.mdx',preload:async()=>{await Route537.preload();return __webpack_require__.e(/* import() */ 23212).then(__webpack_require__.bind(__webpack_require__, 55722));}},{path:'/guides/basic-features/proxy',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route538),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/basic-features/proxy.mdx',preload:async()=>{await Route538.preload();return __webpack_require__.e(/* import() */ 38225).then(__webpack_require__.bind(__webpack_require__, 98677));}},{path:'/guides/basic-features/routes',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route539),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/basic-features/routes.mdx',preload:async()=>{await Route539.preload();return __webpack_require__.e(/* import() */ 81409).then(__webpack_require__.bind(__webpack_require__, 98683));}},{path:'/guides/concept/entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route540),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/concept/entries.mdx',preload:async()=>{await Route540.preload();return __webpack_require__.e(/* import() */ 86650).then(__webpack_require__.bind(__webpack_require__, 17243));}},{path:'/guides/get-started/quick-start',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route541),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/get-started/quick-start.mdx',preload:async()=>{await Route541.preload();return Promise.all(/* import() */[__webpack_require__.e(86630), __webpack_require__.e(2742)]).then(__webpack_require__.bind(__webpack_require__, 9760));}},{path:'/guides/get-started/upgrade',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route542),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/get-started/upgrade.mdx',preload:async()=>{await Route542.preload();return __webpack_require__.e(/* import() */ 7344).then(__webpack_require__.bind(__webpack_require__, 81302));}},{path:'/guides/topic-detail/changesets/add',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route543),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/changesets/add.mdx',preload:async()=>{await Route543.preload();return __webpack_require__.e(/* import() */ 21693).then(__webpack_require__.bind(__webpack_require__, 22426));}},{path:'/guides/topic-detail/changesets/changelog',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route544),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/changesets/changelog.mdx',preload:async()=>{await Route544.preload();return __webpack_require__.e(/* import() */ 48292).then(__webpack_require__.bind(__webpack_require__, 651));}},{path:'/guides/topic-detail/changesets/commit',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route545),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/changesets/commit.mdx',preload:async()=>{await Route545.preload();return __webpack_require__.e(/* import() */ 64743).then(__webpack_require__.bind(__webpack_require__, 15266));}},{path:'/guides/topic-detail/changesets/config',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route546),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/changesets/config.mdx',preload:async()=>{await Route546.preload();return __webpack_require__.e(/* import() */ 70792).then(__webpack_require__.bind(__webpack_require__, 68387));}},{path:'/guides/topic-detail/changesets/github',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route547),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/changesets/github.mdx',preload:async()=>{await Route547.preload();return __webpack_require__.e(/* import() */ 35453).then(__webpack_require__.bind(__webpack_require__, 6221));}},{path:'/guides/topic-detail/changesets/introduce',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route548),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/changesets/introduce.mdx',preload:async()=>{await Route548.preload();return __webpack_require__.e(/* import() */ 33739).then(__webpack_require__.bind(__webpack_require__, 62373));}},{path:'/guides/topic-detail/changesets/release-note',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route549),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/changesets/release-note.mdx',preload:async()=>{await Route549.preload();return __webpack_require__.e(/* import() */ 20345).then(__webpack_require__.bind(__webpack_require__, 75653));}},{path:'/guides/topic-detail/changesets/release-pre',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route550),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/changesets/release-pre.mdx',preload:async()=>{await Route550.preload();return __webpack_require__.e(/* import() */ 99510).then(__webpack_require__.bind(__webpack_require__, 45391));}},{path:'/guides/topic-detail/changesets/release',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route551),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/changesets/release.mdx',preload:async()=>{await Route551.preload();return __webpack_require__.e(/* import() */ 10302).then(__webpack_require__.bind(__webpack_require__, 26541));}},{path:'/guides/topic-detail/framework-plugin/extend',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route552),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/framework-plugin/extend.mdx',preload:async()=>{await Route552.preload();return __webpack_require__.e(/* import() */ 66198).then(__webpack_require__.bind(__webpack_require__, 19771));}},{path:'/guides/topic-detail/framework-plugin/hook-list',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route553),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/framework-plugin/hook-list.mdx',preload:async()=>{await Route553.preload();return __webpack_require__.e(/* import() */ 38834).then(__webpack_require__.bind(__webpack_require__, 1525));}},{path:'/guides/topic-detail/framework-plugin/hook',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route554),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/framework-plugin/hook.mdx',preload:async()=>{await Route554.preload();return __webpack_require__.e(/* import() */ 74022).then(__webpack_require__.bind(__webpack_require__, 78745));}},{path:'/guides/topic-detail/framework-plugin/implement',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route555),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/framework-plugin/implement.mdx',preload:async()=>{await Route555.preload();return __webpack_require__.e(/* import() */ 18375).then(__webpack_require__.bind(__webpack_require__, 48476));}},{path:'/guides/topic-detail/framework-plugin/introduction',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route556),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/framework-plugin/introduction.mdx',preload:async()=>{await Route556.preload();return __webpack_require__.e(/* import() */ 51952).then(__webpack_require__.bind(__webpack_require__, 39924));}},{path:'/guides/topic-detail/framework-plugin/lifecycle',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route557),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/framework-plugin/lifecycle.mdx',preload:async()=>{await Route557.preload();return __webpack_require__.e(/* import() */ 68077).then(__webpack_require__.bind(__webpack_require__, 49266));}},{path:'/guides/topic-detail/framework-plugin/plugin-api',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route558),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/framework-plugin/plugin-api.mdx',preload:async()=>{await Route558.preload();return __webpack_require__.e(/* import() */ 60408).then(__webpack_require__.bind(__webpack_require__, 24236));}},{path:'/guides/topic-detail/framework-plugin/relationship',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route559),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/framework-plugin/relationship.mdx',preload:async()=>{await Route559.preload();return __webpack_require__.e(/* import() */ 80027).then(__webpack_require__.bind(__webpack_require__, 12977));}},{path:'/guides/topic-detail/generator/codesmith/api/app',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route560),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/codesmith/api/app.mdx',preload:async()=>{await Route560.preload();return __webpack_require__.e(/* import() */ 83757).then(__webpack_require__.bind(__webpack_require__, 9061));}},{path:'/guides/topic-detail/generator/codesmith/api/ejs',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route561),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/codesmith/api/ejs.mdx',preload:async()=>{await Route561.preload();return __webpack_require__.e(/* import() */ 49233).then(__webpack_require__.bind(__webpack_require__, 18892));}},{path:'/guides/topic-detail/generator/codesmith/api/fs',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route562),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/codesmith/api/fs.mdx',preload:async()=>{await Route562.preload();return __webpack_require__.e(/* import() */ 62089).then(__webpack_require__.bind(__webpack_require__, 7657));}},{path:'/guides/topic-detail/generator/codesmith/api/git',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route563),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/codesmith/api/git.mdx',preload:async()=>{await Route563.preload();return __webpack_require__.e(/* import() */ 52576).then(__webpack_require__.bind(__webpack_require__, 4757));}},{path:'/guides/topic-detail/generator/codesmith/api/handlebars',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route564),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/codesmith/api/handlebars.mdx',preload:async()=>{await Route564.preload();return __webpack_require__.e(/* import() */ 31947).then(__webpack_require__.bind(__webpack_require__, 77745));}},{path:'/guides/topic-detail/generator/codesmith/api/json',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route565),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/codesmith/api/json.mdx',preload:async()=>{await Route565.preload();return __webpack_require__.e(/* import() */ 57000).then(__webpack_require__.bind(__webpack_require__, 97497));}},{path:'/guides/topic-detail/generator/codesmith/api/npm',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route566),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/codesmith/api/npm.mdx',preload:async()=>{await Route566.preload();return __webpack_require__.e(/* import() */ 30064).then(__webpack_require__.bind(__webpack_require__, 85832));}},{path:'/guides/topic-detail/generator/codesmith/develop',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route567),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/codesmith/develop.mdx',preload:async()=>{await Route567.preload();return __webpack_require__.e(/* import() */ 67508).then(__webpack_require__.bind(__webpack_require__, 35664));}},{path:'/guides/topic-detail/generator/codesmith/introduce',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route568),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/codesmith/introduce.mdx',preload:async()=>{await Route568.preload();return __webpack_require__.e(/* import() */ 97459).then(__webpack_require__.bind(__webpack_require__, 90904));}},{path:'/guides/topic-detail/generator/codesmith/run-in-js',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route569),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/codesmith/run-in-js.mdx',preload:async()=>{await Route569.preload();return __webpack_require__.e(/* import() */ 38011).then(__webpack_require__.bind(__webpack_require__, 11547));}},{path:'/guides/topic-detail/generator/codesmith/structure',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route570),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/codesmith/structure.mdx',preload:async()=>{await Route570.preload();return __webpack_require__.e(/* import() */ 38465).then(__webpack_require__.bind(__webpack_require__, 88239));}},{path:'/guides/topic-detail/generator/config/app',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route571),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/config/app.mdx',preload:async()=>{await Route571.preload();return __webpack_require__.e(/* import() */ 1986).then(__webpack_require__.bind(__webpack_require__, 4658));}},{path:'/guides/topic-detail/generator/config/common',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route572),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/config/common.mdx',preload:async()=>{await Route572.preload();return __webpack_require__.e(/* import() */ 20597).then(__webpack_require__.bind(__webpack_require__, 18097));}},{path:'/guides/topic-detail/generator/config/module',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route573),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/config/module.mdx',preload:async()=>{await Route573.preload();return __webpack_require__.e(/* import() */ 17477).then(__webpack_require__.bind(__webpack_require__, 42880));}},{path:'/guides/topic-detail/generator/config/monorepo',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route574),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/config/monorepo.mdx',preload:async()=>{await Route574.preload();return __webpack_require__.e(/* import() */ 51826).then(__webpack_require__.bind(__webpack_require__, 99856));}},{path:'/guides/topic-detail/generator/plugin/abstract',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route575),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/abstract.mdx',preload:async()=>{await Route575.preload();return __webpack_require__.e(/* import() */ 48184).then(__webpack_require__.bind(__webpack_require__, 31238));}},{path:'/guides/topic-detail/generator/plugin/api/file/addFile',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route576),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/file/addFile.mdx',preload:async()=>{await Route576.preload();return __webpack_require__.e(/* import() */ 92699).then(__webpack_require__.bind(__webpack_require__, 59927));}},{path:'/guides/topic-detail/generator/plugin/api/file/addHelper',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route577),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/file/addHelper.mdx',preload:async()=>{await Route577.preload();return __webpack_require__.e(/* import() */ 2842).then(__webpack_require__.bind(__webpack_require__, 32591));}},{path:'/guides/topic-detail/generator/plugin/api/file/addManyFile',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route578),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/file/addManyFile.mdx',preload:async()=>{await Route578.preload();return __webpack_require__.e(/* import() */ 16461).then(__webpack_require__.bind(__webpack_require__, 85083));}},{path:'/guides/topic-detail/generator/plugin/api/file/addPartial',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route579),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/file/addPartial.mdx',preload:async()=>{await Route579.preload();return __webpack_require__.e(/* import() */ 22085).then(__webpack_require__.bind(__webpack_require__, 65957));}},{path:'/guides/topic-detail/generator/plugin/api/file/introduce',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route580),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/file/introduce.mdx',preload:async()=>{await Route580.preload();return __webpack_require__.e(/* import() */ 50623).then(__webpack_require__.bind(__webpack_require__, 52278));}},{path:'/guides/topic-detail/generator/plugin/api/file/rmDir',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route581),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/file/rmDir.mdx',preload:async()=>{await Route581.preload();return __webpack_require__.e(/* import() */ 24335).then(__webpack_require__.bind(__webpack_require__, 7820));}},{path:'/guides/topic-detail/generator/plugin/api/file/rmFile',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route582),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/file/rmFile.mdx',preload:async()=>{await Route582.preload();return __webpack_require__.e(/* import() */ 82885).then(__webpack_require__.bind(__webpack_require__, 97676));}},{path:'/guides/topic-detail/generator/plugin/api/file/updateJSONFile',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route583),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/file/updateJSONFile.mdx',preload:async()=>{await Route583.preload();return __webpack_require__.e(/* import() */ 18070).then(__webpack_require__.bind(__webpack_require__, 89974));}},{path:'/guides/topic-detail/generator/plugin/api/file/updateModernConfig',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route584),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/file/updateModernConfig.mdx',preload:async()=>{await Route584.preload();return __webpack_require__.e(/* import() */ 21725).then(__webpack_require__.bind(__webpack_require__, 58804));}},{path:'/guides/topic-detail/generator/plugin/api/file/updateTextRawFile',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route585),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/file/updateTextRawFile.mdx',preload:async()=>{await Route585.preload();return __webpack_require__.e(/* import() */ 57273).then(__webpack_require__.bind(__webpack_require__, 83166));}},{path:'/guides/topic-detail/generator/plugin/api/git/gitAddAndCommit',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route586),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/git/gitAddAndCommit.mdx',preload:async()=>{await Route586.preload();return __webpack_require__.e(/* import() */ 84325).then(__webpack_require__.bind(__webpack_require__, 59565));}},{path:'/guides/topic-detail/generator/plugin/api/git/initGitRepo',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route587),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/git/initGitRepo.mdx',preload:async()=>{await Route587.preload();return __webpack_require__.e(/* import() */ 9587).then(__webpack_require__.bind(__webpack_require__, 99793));}},{path:'/guides/topic-detail/generator/plugin/api/git/isInGitRepo',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route588),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/git/isInGitRepo.mdx',preload:async()=>{await Route588.preload();return __webpack_require__.e(/* import() */ 40304).then(__webpack_require__.bind(__webpack_require__, 25332));}},{path:'/guides/topic-detail/generator/plugin/api/hook/afterForged',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route589),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/hook/afterForged.mdx',preload:async()=>{await Route589.preload();return __webpack_require__.e(/* import() */ 98552).then(__webpack_require__.bind(__webpack_require__, 58254));}},{path:'/guides/topic-detail/generator/plugin/api/hook/onForged',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route590),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/hook/onForged.mdx',preload:async()=>{await Route590.preload();return __webpack_require__.e(/* import() */ 24147).then(__webpack_require__.bind(__webpack_require__, 44189));}},{path:'/guides/topic-detail/generator/plugin/api/info/isFileExit',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route591),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/info/isFileExit.mdx',preload:async()=>{await Route591.preload();return __webpack_require__.e(/* import() */ 9104).then(__webpack_require__.bind(__webpack_require__, 5302));}},{path:'/guides/topic-detail/generator/plugin/api/info/locale',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route592),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/info/locale.mdx',preload:async()=>{await Route592.preload();return __webpack_require__.e(/* import() */ 7391).then(__webpack_require__.bind(__webpack_require__, 54303));}},{path:'/guides/topic-detail/generator/plugin/api/info/readDir',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route593),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/info/readDir.mdx',preload:async()=>{await Route593.preload();return __webpack_require__.e(/* import() */ 73981).then(__webpack_require__.bind(__webpack_require__, 42664));}},{path:'/guides/topic-detail/generator/plugin/api/input/addInputAfter',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route594),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/input/addInputAfter.mdx',preload:async()=>{await Route594.preload();return __webpack_require__.e(/* import() */ 42702).then(__webpack_require__.bind(__webpack_require__, 58965));}},{path:'/guides/topic-detail/generator/plugin/api/input/addInputBefore',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route595),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/input/addInputBefore.mdx',preload:async()=>{await Route595.preload();return __webpack_require__.e(/* import() */ 40).then(__webpack_require__.bind(__webpack_require__, 96800));}},{path:'/guides/topic-detail/generator/plugin/api/input/setInput',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route596),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/input/setInput.mdx',preload:async()=>{await Route596.preload();return __webpack_require__.e(/* import() */ 36938).then(__webpack_require__.bind(__webpack_require__, 13029));}},{path:'/guides/topic-detail/generator/plugin/api/input/setInputValue',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route597),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/input/setInputValue.mdx',preload:async()=>{await Route597.preload();return __webpack_require__.e(/* import() */ 86021).then(__webpack_require__.bind(__webpack_require__, 48035));}},{path:'/guides/topic-detail/generator/plugin/api/input/type',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route598),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/input/type.mdx',preload:async()=>{await Route598.preload();return __webpack_require__.e(/* import() */ 86337).then(__webpack_require__.bind(__webpack_require__, 19834));}},{path:'/guides/topic-detail/generator/plugin/api/introduce',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route599),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/introduce.mdx',preload:async()=>{await Route599.preload();return __webpack_require__.e(/* import() */ 77886).then(__webpack_require__.bind(__webpack_require__, 90810));}},{path:'/guides/topic-detail/generator/plugin/api/new/createElement',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route600),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/new/createElement.mdx',preload:async()=>{await Route600.preload();return __webpack_require__.e(/* import() */ 15661).then(__webpack_require__.bind(__webpack_require__, 68456));}},{path:'/guides/topic-detail/generator/plugin/api/new/createSubProject',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route601),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/new/createSubProject.mdx',preload:async()=>{await Route601.preload();return __webpack_require__.e(/* import() */ 91031).then(__webpack_require__.bind(__webpack_require__, 87287));}},{path:'/guides/topic-detail/generator/plugin/api/new/enableFunc',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route602),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/new/enableFunc.mdx',preload:async()=>{await Route602.preload();return __webpack_require__.e(/* import() */ 63940).then(__webpack_require__.bind(__webpack_require__, 29444));}},{path:'/guides/topic-detail/generator/plugin/api/new/introduce',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route603),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/new/introduce.mdx',preload:async()=>{await Route603.preload();return __webpack_require__.e(/* import() */ 50531).then(__webpack_require__.bind(__webpack_require__, 11691));}},{path:'/guides/topic-detail/generator/plugin/api/npm/install',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route604),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/npm/install.mdx',preload:async()=>{await Route604.preload();return __webpack_require__.e(/* import() */ 78267).then(__webpack_require__.bind(__webpack_require__, 83579));}},{path:'/guides/topic-detail/generator/plugin/develop',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route605),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/develop.mdx',preload:async()=>{await Route605.preload();return __webpack_require__.e(/* import() */ 24111).then(__webpack_require__.bind(__webpack_require__, 65951));}},{path:'/guides/topic-detail/generator/plugin/use',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route606),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/use.mdx',preload:async()=>{await Route606.preload();return __webpack_require__.e(/* import() */ 60450).then(__webpack_require__.bind(__webpack_require__, 55532));}},{path:'/guides/topic-detail/generator/project',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route607),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/generator/project.mdx',preload:async()=>{await Route607.preload();return __webpack_require__.e(/* import() */ 10647).then(__webpack_require__.bind(__webpack_require__, 81335));}},{path:'/guides/topic-detail/micro-frontend/c01-introduction',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route608),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/micro-frontend/c01-introduction.mdx',preload:async()=>{await Route608.preload();return __webpack_require__.e(/* import() */ 40625).then(__webpack_require__.bind(__webpack_require__, 3579));}},{path:'/guides/topic-detail/micro-frontend/c02-development',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route609),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/micro-frontend/c02-development.mdx',preload:async()=>{await Route609.preload();return Promise.all(/* import() */[__webpack_require__.e(37085), __webpack_require__.e(51735)]).then(__webpack_require__.bind(__webpack_require__, 87722));}},{path:'/guides/topic-detail/micro-frontend/c03-main-app',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route610),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/micro-frontend/c03-main-app.mdx',preload:async()=>{await Route610.preload();return Promise.all(/* import() */[__webpack_require__.e(37085), __webpack_require__.e(39101)]).then(__webpack_require__.bind(__webpack_require__, 37649));}},{path:'/guides/topic-detail/micro-frontend/c04-communicate',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route611),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/micro-frontend/c04-communicate.mdx',preload:async()=>{await Route611.preload();return __webpack_require__.e(/* import() */ 3106).then(__webpack_require__.bind(__webpack_require__, 99278));}},{path:'/guides/topic-detail/micro-frontend/c05-mixed-stack',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route612),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/micro-frontend/c05-mixed-stack.mdx',preload:async()=>{await Route612.preload();return __webpack_require__.e(/* import() */ 94091).then(__webpack_require__.bind(__webpack_require__, 85534));}},{path:'/guides/topic-detail/model/auto-actions',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route613),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/model/auto-actions.mdx',preload:async()=>{await Route613.preload();return __webpack_require__.e(/* import() */ 41567).then(__webpack_require__.bind(__webpack_require__, 58873));}},{path:'/guides/topic-detail/model/computed-state',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route614),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/model/computed-state.mdx',preload:async()=>{await Route614.preload();return __webpack_require__.e(/* import() */ 46820).then(__webpack_require__.bind(__webpack_require__, 29105));}},{path:'/guides/topic-detail/model/define-model',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route615),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/model/define-model.mdx',preload:async()=>{await Route615.preload();return __webpack_require__.e(/* import() */ 84757).then(__webpack_require__.bind(__webpack_require__, 82889));}},{path:'/guides/topic-detail/model/faq',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route616),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/model/faq.mdx',preload:async()=>{await Route616.preload();return __webpack_require__.e(/* import() */ 63153).then(__webpack_require__.bind(__webpack_require__, 95747));}},{path:'/guides/topic-detail/model/manage-effects',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route617),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/model/manage-effects.mdx',preload:async()=>{await Route617.preload();return __webpack_require__.e(/* import() */ 49998).then(__webpack_require__.bind(__webpack_require__, 75945));}},{path:'/guides/topic-detail/model/model-communicate',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route618),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/model/model-communicate.mdx',preload:async()=>{await Route618.preload();return __webpack_require__.e(/* import() */ 72154).then(__webpack_require__.bind(__webpack_require__, 14153));}},{path:'/guides/topic-detail/model/performance',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route619),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/model/performance.mdx',preload:async()=>{await Route619.preload();return __webpack_require__.e(/* import() */ 92192).then(__webpack_require__.bind(__webpack_require__, 92747));}},{path:'/guides/topic-detail/model/quick-start',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route620),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/model/quick-start.mdx',preload:async()=>{await Route620.preload();return __webpack_require__.e(/* import() */ 74470).then(__webpack_require__.bind(__webpack_require__, 35181));}},{path:'/guides/topic-detail/model/redux-integration',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route621),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/model/redux-integration.mdx',preload:async()=>{await Route621.preload();return __webpack_require__.e(/* import() */ 14601).then(__webpack_require__.bind(__webpack_require__, 72072));}},{path:'/guides/topic-detail/model/test-model',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route622),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/model/test-model.mdx',preload:async()=>{await Route622.preload();return __webpack_require__.e(/* import() */ 1413).then(__webpack_require__.bind(__webpack_require__, 70566));}},{path:'/guides/topic-detail/model/typescript-best-practice',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route623),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/model/typescript-best-practice.mdx',preload:async()=>{await Route623.preload();return __webpack_require__.e(/* import() */ 29510).then(__webpack_require__.bind(__webpack_require__, 43249));}},{path:'/guides/topic-detail/model/use-model',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route624),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/model/use-model.mdx',preload:async()=>{await Route624.preload();return __webpack_require__.e(/* import() */ 37388).then(__webpack_require__.bind(__webpack_require__, 49757));}},{path:'/guides/topic-detail/model/use-out-of-modernjs',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route625),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/model/use-out-of-modernjs.mdx',preload:async()=>{await Route625.preload();return __webpack_require__.e(/* import() */ 61291).then(__webpack_require__.bind(__webpack_require__, 79805));}},{path:'/guides/topic-detail/monorepo/create-sub-project',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route626),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/monorepo/create-sub-project.mdx',preload:async()=>{await Route626.preload();return __webpack_require__.e(/* import() */ 49037).then(__webpack_require__.bind(__webpack_require__, 95945));}},{path:'/guides/topic-detail/monorepo/intro',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route627),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/monorepo/intro.mdx',preload:async()=>{await Route627.preload();return __webpack_require__.e(/* import() */ 13406).then(__webpack_require__.bind(__webpack_require__, 89683));}},{path:'/guides/topic-detail/monorepo/publish',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route628),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/monorepo/publish.mdx',preload:async()=>{await Route628.preload();return __webpack_require__.e(/* import() */ 50432).then(__webpack_require__.bind(__webpack_require__, 14223));}},{path:'/guides/topic-detail/monorepo/sub-project-interface',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route629),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/topic-detail/monorepo/sub-project-interface.mdx',preload:async()=>{await Route629.preload();return __webpack_require__.e(/* import() */ 444).then(__webpack_require__.bind(__webpack_require__, 6288));}},{path:'/guides/troubleshooting/cli',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route630),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/troubleshooting/cli.mdx',preload:async()=>{await Route630.preload();return __webpack_require__.e(/* import() */ 97220).then(__webpack_require__.bind(__webpack_require__, 97844));}},{path:'/guides/troubleshooting/dependencies',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route631),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/guides/troubleshooting/dependencies.mdx',preload:async()=>{await Route631.preload();return __webpack_require__.e(/* import() */ 19992).then(__webpack_require__.bind(__webpack_require__, 68281));}},{path:'/',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route632),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/index.md',preload:async()=>{await Route632.preload();return __webpack_require__.e(/* import() */ 51895).then(__webpack_require__.bind(__webpack_require__, 99315));}},{path:'/tutorials/first-app/c01-start',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route633),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/tutorials/first-app/c01-start.mdx',preload:async()=>{await Route633.preload();return Promise.all(/* import() */[__webpack_require__.e(86630), __webpack_require__.e(68726)]).then(__webpack_require__.bind(__webpack_require__, 12584));}},{path:'/tutorials/first-app/c02-component',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route634),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/tutorials/first-app/c02-component.mdx',preload:async()=>{await Route634.preload();return __webpack_require__.e(/* import() */ 87145).then(__webpack_require__.bind(__webpack_require__, 15909));}},{path:'/tutorials/first-app/c03-css',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route635),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/tutorials/first-app/c03-css.mdx',preload:async()=>{await Route635.preload();return __webpack_require__.e(/* import() */ 75756).then(__webpack_require__.bind(__webpack_require__, 91775));}},{path:'/tutorials/first-app/c04-routes',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route636),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/tutorials/first-app/c04-routes.mdx',preload:async()=>{await Route636.preload();return __webpack_require__.e(/* import() */ 45498).then(__webpack_require__.bind(__webpack_require__, 98131));}},{path:'/tutorials/first-app/c05-loader',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route637),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/tutorials/first-app/c05-loader.mdx',preload:async()=>{await Route637.preload();return __webpack_require__.e(/* import() */ 19782).then(__webpack_require__.bind(__webpack_require__, 50017));}},{path:'/tutorials/first-app/c06-model',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route638),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/tutorials/first-app/c06-model.mdx',preload:async()=>{await Route638.preload();return __webpack_require__.e(/* import() */ 26132).then(__webpack_require__.bind(__webpack_require__, 26608));}},{path:'/tutorials/first-app/c07-container',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route639),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/tutorials/first-app/c07-container.mdx',preload:async()=>{await Route639.preload();return __webpack_require__.e(/* import() */ 95392).then(__webpack_require__.bind(__webpack_require__, 11839));}},{path:'/tutorials/first-app/c08-entries',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route640),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/tutorials/first-app/c08-entries.mdx',preload:async()=>{await Route640.preload();return __webpack_require__.e(/* import() */ 10284).then(__webpack_require__.bind(__webpack_require__, 75573));}},{path:'/tutorials/foundations/introduction',element:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Route641),filePath:'/home/runner/work/modern.js/modern.js/packages/toolkit/main-doc/zh/tutorials/foundations/introduction.mdx',preload:async()=>{await Route641.preload();return __webpack_require__.e(/* import() */ 6309).then(__webpack_require__.bind(__webpack_require__, 93791));}}];

/***/ })

}]);