'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var buffer = require('buffer');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var iconsMaterial = require('@mui/icons-material');
var material = require('@mui/material');
var _taggedTemplateLiteral = require('@babel/runtime/helpers/taggedTemplateLiteral');
require('@mui/icons-material/ArrowBackIosNew');
var MuiCloseIcon = require('@mui/icons-material/Close');
var core = require('@web3-react/core');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
var utils = require('jotai/utils');
var jotai = require('jotai');
var _styled = require('styled-components');
var polished = require('polished');
require('wcag-contrast');
var _extends$9 = require('@babel/runtime/helpers/extends');
var rebass = require('rebass');
require('wicg-inert');
var reactFeather = require('react-feather');
var reactDom = require('react-dom');
var styles = require('@mui/material/styles');
var invariant = require('tiny-invariant');
var _get = require('@babel/runtime/helpers/get');
var _createClass = require('@babel/runtime/helpers/createClass');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _inherits = require('@babel/runtime/helpers/inherits');
var _possibleConstructorReturn = require('@babel/runtime/helpers/possibleConstructorReturn');
var _getPrototypeOf = require('@babel/runtime/helpers/getPrototypeOf');
require('setimmediate');
var walletconnect = require('@web3-react/walletconnect');
var QRCode = require('qrcode');
var ExpandMoreIcon = require('@mui/icons-material/ExpandMore');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var sdk = require('@ladder/sdk');
var axios = require('axios');
var qs = require('qs');
var CID = require('cids');
var multicodec = require('multicodec');
var multihashes = require('multihashes');
var reduxMulticall = require('@uniswap/redux-multicall');
var sdkCore = require('@uniswap/sdk-core');
var address = require('@ethersproject/address');
var constants = require('@ethersproject/constants');
var contracts = require('@ethersproject/contracts');
var hash = require('@ethersproject/hash');
var HelpOutlineOutlinedIcon = require('@mui/icons-material/HelpOutlineOutlined');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
require('dayjs');
var portal = require('@reach/portal');
var reactPopper = require('react-popper');
var Switch = require('@mui/material/Switch');
var abi$2 = require('@ethersproject/abi');
require('@ethersproject/strings');
var DEFAULT_TOKEN_LIST = require('@uniswap/default-token-list');
var utils$1 = require('ethers/lib/utils');
var immer = require('jotai/immer');
var flatMap = require('lodash.flatmap');
var providers = require('@ethersproject/providers');
var bignumber = require('@ethersproject/bignumber');
var _assertThisInitialized = require('@babel/runtime/helpers/assertThisInitialized');
var _wrapNativeSuper = require('@babel/runtime/helpers/wrapNativeSuper');
var KeyboardArrowDownIcon = require('@mui/icons-material/KeyboardArrowDown');
var Accordion = require('@mui/material/Accordion');
var AccordionDetails = require('@mui/material/AccordionDetails');
var AccordionSummary = require('@mui/material/AccordionSummary');
var CheckIcon = require('@mui/icons-material/Check');
var eip1193 = require('@web3-react/eip1193');
var metamask = require('@web3-react/metamask');
var network = require('@web3-react/network');
var types = require('@web3-react/types');
var plurals = require('make-plural/plurals');
var reactRedux = require('react-redux');
var toolkit = require('@reduxjs/toolkit');
var redux = require('redux');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _taggedTemplateLiteral__default = /*#__PURE__*/_interopDefaultLegacy(_taggedTemplateLiteral);
var MuiCloseIcon__default = /*#__PURE__*/_interopDefaultLegacy(MuiCloseIcon);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends$9);
var invariant__default = /*#__PURE__*/_interopDefaultLegacy(invariant);
var _get__default = /*#__PURE__*/_interopDefaultLegacy(_get);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _inherits__default = /*#__PURE__*/_interopDefaultLegacy(_inherits);
var _possibleConstructorReturn__default = /*#__PURE__*/_interopDefaultLegacy(_possibleConstructorReturn);
var _getPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(_getPrototypeOf);
var QRCode__default = /*#__PURE__*/_interopDefaultLegacy(QRCode);
var ExpandMoreIcon__default = /*#__PURE__*/_interopDefaultLegacy(ExpandMoreIcon);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var qs__default = /*#__PURE__*/_interopDefaultLegacy(qs);
var CID__default = /*#__PURE__*/_interopDefaultLegacy(CID);
var HelpOutlineOutlinedIcon__default = /*#__PURE__*/_interopDefaultLegacy(HelpOutlineOutlinedIcon);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var DEFAULT_TOKEN_LIST__default = /*#__PURE__*/_interopDefaultLegacy(DEFAULT_TOKEN_LIST);
var flatMap__default = /*#__PURE__*/_interopDefaultLegacy(flatMap);
var _assertThisInitialized__default = /*#__PURE__*/_interopDefaultLegacy(_assertThisInitialized);
var _wrapNativeSuper__default = /*#__PURE__*/_interopDefaultLegacy(_wrapNativeSuper);
var KeyboardArrowDownIcon__default = /*#__PURE__*/_interopDefaultLegacy(KeyboardArrowDownIcon);
var Accordion__default = /*#__PURE__*/_interopDefaultLegacy(Accordion);
var AccordionDetails__default = /*#__PURE__*/_interopDefaultLegacy(AccordionDetails);
var AccordionSummary__default = /*#__PURE__*/_interopDefaultLegacy(AccordionSummary);
var CheckIcon__default = /*#__PURE__*/_interopDefaultLegacy(CheckIcon);

if (typeof window !== 'undefined') {
  // WalletConnect relies on Buffer, so it must be polyfilled.
  if (!('Buffer' in window)) {
    window.Buffer = buffer.Buffer;
  }
}

var LinguiContext = /*#__PURE__*/React__default["default"].createContext(null);

function useLingui() {
  var context = React__default["default"].useContext(LinguiContext);
  {
    if (context == null) {
      throw new Error("useLingui hook was used without I18nProvider.");
    }
  }
  return context;
}

function withI18n(o) {
  return function (WrappedComponent) {
    return function (props) {
      {
        if (typeof o === "function" || /*#__PURE__*/React__default["default"].isValidElement(o)) {
          throw new Error("withI18n([options]) takes options as a first argument, " + "but received React component itself. Without options, the Component " + "should be wrapped as withI18n()(Component), not withI18n(Component).");
        }
      }

      var _useLingui = useLingui(),
          i18n = _useLingui.i18n;

      return /*#__PURE__*/React__default["default"].createElement(WrappedComponent, Object.assign({}, props, {
        i18n: i18n
      }));
    };
  };
}

var I18nProvider$1 = function I18nProvider(_ref) {
  var i18n = _ref.i18n,
      defaultComponent = _ref.defaultComponent,
      _ref$forceRenderOnLoc = _ref.forceRenderOnLocaleChange,
      forceRenderOnLocaleChange = _ref$forceRenderOnLoc === void 0 ? true : _ref$forceRenderOnLoc,
      children = _ref.children;
  /**
   * We can't pass `i18n` object directly through context, because even when locale
   * or messages are changed, i18n object is still the same. Context provider compares
   * reference identity and suggested workaround is create a wrapper object every time
   * we need to trigger re-render. See https://reactjs.org/docs/context.html#caveats.
   *
   * Due to this effect we also pass `defaultComponent` in the same context, instead
   * of creating a separate Provider/Consumer pair.
   *
   * We can't use useMemo hook either, because we want to recalculate value manually.
   */

  var makeContext = function makeContext() {
    return {
      i18n: i18n,
      defaultComponent: defaultComponent
    };
  };

  var getRenderKey = function getRenderKey() {
    return forceRenderOnLocaleChange ? i18n.locale || 'default' : 'default';
  };

  var _React$useState = React__default["default"].useState(makeContext()),
      _React$useState2 = _slicedToArray__default["default"](_React$useState, 2),
      context = _React$useState2[0],
      setContext = _React$useState2[1],
      _React$useState3 = React__default["default"].useState(getRenderKey()),
      _React$useState4 = _slicedToArray__default["default"](_React$useState3, 2),
      renderKey = _React$useState4[0],
      setRenderKey = _React$useState4[1];
  /**
   * Subscribe for locale/message changes
   *
   * I18n object from `@lingui/core` is the single source of truth for all i18n related
   * data (active locale, catalogs). When new messages are loaded or locale is changed
   * we need to trigger re-rendering of LinguiContext.Consumers.
   *
   * We call `setContext(makeContext())` after adding the observer in case the `change`
   * event would already have fired between the inital renderKey calculation and the
   * `useEffect` hook being called. This can happen if locales are loaded/activated
   * async.
   */


  React__default["default"].useEffect(function () {
    var unsubscribe = i18n.on("change", function () {
      setContext(makeContext());
      setRenderKey(getRenderKey());
    });

    if (renderKey === 'default') {
      setRenderKey(getRenderKey());
    }

    if (forceRenderOnLocaleChange && renderKey === 'default') {
      console.log("I18nProvider did not render. A call to i18n.activate still needs to happen or forceRenderOnLocaleChange must be set to false.");
    }

    return function () {
      return unsubscribe();
    };
  }, []);
  if (forceRenderOnLocaleChange && renderKey === 'default') return null;
  return /*#__PURE__*/React__default["default"].createElement(LinguiContext.Provider, {
    value: context,
    key: renderKey
  }, children);
};

function _createForOfIteratorHelper$1(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var tagRe = /<(\d+)>(.*?)<\/\1>|<(\d+)\/>/;
var nlRe = /(?:\r\n|\r|\n)/g; // For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.

var voidElementTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true,
  menuitem: true
};
/**
 * `formatElements` - parse string and return tree of react elements
 *
 * `value` is string to be formatted with <0>Paired<0/> or <0/> (unpaired)
 * placeholders. `elements` is a array of react elements which indexes
 * correspond to element indexes in formatted string
 */

function formatElements(value) {
  var elements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var uniqueId = makeCounter(0, '$lingui$');
  var parts = value.replace(nlRe, "").split(tagRe); // no inline elements, return

  if (parts.length === 1) return value;
  var tree = [];
  var before = parts.shift();
  if (before) tree.push(before);

  var _iterator = _createForOfIteratorHelper$1(getElements(parts)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray__default["default"](_step.value, 3),
          index = _step$value[0],
          children = _step$value[1],
          after = _step$value[2];

      var element = elements[index];

      if (!element || voidElementTags[element.type] && children) {
        if (!element) {
          console.error("Can use element at index '".concat(index, "' as it is not declared in the original translation"));
        } else {
          console.error("".concat(element.type, " is a void element tag therefore it must have no children"));
        } // ignore problematic element but push its children and elements after it


        element = /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment);
      }

      tree.push( /*#__PURE__*/React__default["default"].cloneElement(element, {
        key: uniqueId()
      }, // format children for pair tags
      // unpaired tags might have children if it's a component passed as a variable
      children ? formatElements(children, elements) : element.props.children));
      if (after) tree.push(after);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return tree;
}
/*
 * `getElements` - return array of element indexes and element childrens
 *
 * `parts` is array of [pairedIndex, children, unpairedIndex, textAfter, ...]
 * where:
 * - `pairedIndex` is index of paired element (undef for unpaired)
 * - `children` are children of paired element (undef for unpaired)
 * - `unpairedIndex` is index of unpaired element (undef for paired)
 * - `textAfter` is string after all elements (empty string, if there's nothing)
 *
 * `parts` length is always multiply of 4
 *
 * Returns: Array<[elementIndex, children, after]>
 */


function getElements(parts) {
  if (!parts.length) return [];

  var _parts$slice = parts.slice(0, 4),
      _parts$slice2 = _slicedToArray__default["default"](_parts$slice, 4),
      paired = _parts$slice2[0],
      children = _parts$slice2[1],
      unpaired = _parts$slice2[2],
      after = _parts$slice2[3];

  return [[parseInt(paired || unpaired), children || "", after]].concat(getElements(parts.slice(4, parts.length)));
}

var makeCounter = function makeCounter() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return function () {
    return "".concat(prefix, "_").concat(count++);
  };
};

function ownKeys$n(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$n(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$n(Object(source), true).forEach(function (key) {
        _defineProperty__default["default"](target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$n(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Trans$1(props) {
  var _useLingui = useLingui(),
      i18n = _useLingui.i18n,
      defaultComponent = _useLingui.defaultComponent;

  var render = props.render,
      component = props.component,
      id = props.id,
      message = props.message,
      formats = props.formats;

  var values = _objectSpread$n({}, props.values);

  var components = _objectSpread$n({}, props.components);

  if (values) {
    /*
      Related discussion: https://github.com/lingui/js-lingui/issues/183
           Values *might* contain React elements with static content.
      They're replaced with <INDEX /> placeholders and added to `components`.
           Example:
      Translation: Hello {name}
      Values: { name: <strong>Jane</strong> }
           It'll become "Hello <0 />" with components=[<strong>Jane</strong>]
      */
    Object.keys(values).forEach(function (key) {
      var value = values[key];
      if (! /*#__PURE__*/React__default["default"].isValidElement(value)) return;
      var index = Object.keys(components).length;
      components[index] = value;
      values[key] = "<".concat(index, "/>");
    });
  }

  var _translation = i18n && typeof i18n._ === "function" ? i18n._(id, values, {
    message: message,
    formats: formats
  }) : id; // i18n provider isn't loaded at all


  var translation = _translation ? formatElements(_translation, components) : null;

  if (render === null || component === null) {
    // Although `string` is a valid react element, types only allow `Element`
    // Upstream issue: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20544
    return translation;
  }

  var FallbackComponent = defaultComponent || React__default["default"].Fragment; // Validation of `render` and `component` props

  if (render && component) {
    console.error("You can't use both `component` and `render` prop at the same time. `component` is ignored.");
  } else if (render && typeof render !== "function") {
    console.error("Invalid value supplied to prop `render`. It must be a function, provided ".concat(render));
  } else if (component && typeof component !== "function") {
    // Apparently, both function components and class components are functions
    // See https://stackoverflow.com/a/41658173/1535540
    console.error("Invalid value supplied to prop `component`. It must be a React component, provided ".concat(component));
    return /*#__PURE__*/React__default["default"].createElement(FallbackComponent, null, translation);
  } // Rendering using a render prop


  if (typeof render === "function") {
    // Component: render={(props) => <a title={props.translation}>x</a>}
    return render({
      id: id,
      translation: translation,
      message: message
    });
  } // `component` prop has a higher precedence over `defaultComponent`


  var Component = component || FallbackComponent;
  return /*#__PURE__*/React__default["default"].createElement(Component, null, translation);
}

Trans$1.defaultProps = {
  values: {},
  components: {}
};

var r = /*#__PURE__*/React__default["default"].createContext(null);

function o() {
  var e = React__default["default"].useContext(r);
  return e;
}

function a(e) {
  return function (e) {
    return function (t) {
      var r = o(),
          a = r.i18n;
      return /*#__PURE__*/React__default["default"].createElement(e, Object.assign({}, t, {
        i18n: a
      }));
    };
  };
}

var i$1 = function i(t) {
  var o = t.i18n,
      a = t.defaultComponent,
      i = t.forceRenderOnLocaleChange,
      c = void 0 === i || i,
      u = t.children,
      l = function l() {
    return {
      i18n: o,
      defaultComponent: a
    };
  },
      f = function f() {
    return c && o.locale || "default";
  },
      s = React__default["default"].useState(l()),
      p = _slicedToArray__default["default"](s, 2),
      m = p[0],
      d = p[1],
      v = React__default["default"].useState(f()),
      y = _slicedToArray__default["default"](v, 2),
      h = y[0],
      b = y[1];

  return React__default["default"].useEffect(function () {
    var e = o.on("change", function () {
      d(l()), b(f());
    });
    return "default" === h && b(f()), c && "default" === h && console.log("I18nProvider did not render. A call to i18n.activate still needs to happen or forceRenderOnLocaleChange must be set to false."), function () {
      return e();
    };
  }, []), c && "default" === h ? null : /*#__PURE__*/React__default["default"].createElement(r.Provider, {
    value: m,
    key: h
  }, u);
};

function c$1(e, n) {
  var t;

  if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
    if (Array.isArray(e) || (t = function (e, n) {
      if (!e) return;
      if ("string" == typeof e) return u$1(e, n);
      var t = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === t && e.constructor && (t = e.constructor.name);
      if ("Map" === t || "Set" === t) return Array.from(e);
      if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return u$1(e, n);
    }(e)) || n && e && "number" == typeof e.length) {
      t && (e = t);

      var r = 0,
          o = function o() {};

      return {
        s: o,
        n: function n() {
          return r >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[r++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: o
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var a,
      i = !0,
      c = !1;
  return {
    s: function s() {
      t = e[Symbol.iterator]();
    },
    n: function n() {
      var e = t.next();
      return i = e.done, e;
    },
    e: function e(_e2) {
      c = !0, a = _e2;
    },
    f: function f() {
      try {
        i || null == t.return || t.return();
      } finally {
        if (c) throw a;
      }
    }
  };
}

function u$1(e, n) {
  (null == n || n > e.length) && (n = e.length);

  for (var t = 0, r = new Array(n); t < n; t++) {
    r[t] = e[t];
  }

  return r;
}

var l = /<(\d+)>(.*?)<\/\1>|<(\d+)\/>/,
    f$1 = /(?:\r\n|\r|\n)/g,
    s$1 = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0,
  menuitem: !0
};

function p$1(n) {
  if (!n.length) return [];
  var t = n.slice(0, 4),
      r = _slicedToArray__default["default"](t, 4),
      o = r[0],
      a = r[1],
      i = r[2],
      c = r[3];
  return [[parseInt(o || i), a || "", c]].concat(p$1(n.slice(4, n.length)));
}

var m$1 = function m() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  return function () {
    return "".concat(n, "_").concat(e++);
  };
};

function d$1(e, n) {
  var t = Object.keys(e);

  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function (n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, r);
  }

  return t;
}

function v$1(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = null != arguments[n] ? arguments[n] : {};
    n % 2 ? d$1(Object(r), !0).forEach(function (n) {
      _defineProperty__default["default"](e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d$1(Object(r)).forEach(function (n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }

  return e;
}

function y$1(t) {
  var r = o(),
      a = r.i18n,
      i = r.defaultComponent,
      u = t.render,
      d = t.component,
      y = t.id,
      h = t.message,
      b = t.formats,
      g = v$1({}, t.values),
      O = v$1({}, t.components);
  g && Object.keys(g).forEach(function (e) {
    var t = g[e];

    if ( /*#__PURE__*/React__default["default"].isValidElement(t)) {
      var r = Object.keys(O).length;
      O[r] = t, g[e] = "<".concat(r, "/>");
    }
  });
  var j = a && "function" == typeof a._ ? a._(y, g, {
    message: h,
    formats: b
  }) : y,
      w = j ? function t(r) {
    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = m$1(0, "$lingui$"),
        i = r.replace(f$1, "").split(l);
    if (1 === i.length) return r;
    var u = [],
        d = i.shift();
    d && u.push(d);
    var v,
        y = c$1(p$1(i));

    try {
      for (y.s(); !(v = y.n()).done;) {
        var h = _slicedToArray__default["default"](v.value, 3),
            b = h[0],
            g = h[1],
            O = h[2],
            j = o[b];
        (!j || s$1[j.type] && g) && (j ? console.error("".concat(j.type, " is a void element tag therefore it must have no children")) : console.error("Can use element at index '".concat(b, "' as it is not declared in the original translation")), j = /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment)), u.push( /*#__PURE__*/React__default["default"].cloneElement(j, {
          key: a()
        }, g ? t(g, o) : j.props.children)), O && u.push(O);
      }
    } catch (e) {
      y.e(e);
    } finally {
      y.f();
    }

    return u;
  }(j, O) : null;
  if (null === u || null === d) return w;
  var E = i || React__default["default"].Fragment;
  if (u && d) console.error("You can't use both `component` and `render` prop at the same time. `component` is ignored.");else if (u && "function" != typeof u) console.error("Invalid value supplied to prop `render`. It must be a function, provided ".concat(u));else if (d && "function" != typeof d) return console.error("Invalid value supplied to prop `component`. It must be a React component, provided ".concat(d)), /*#__PURE__*/React__default["default"].createElement(E, null, w);
  if ("function" == typeof u) return u({
    id: y,
    translation: w,
    message: h
  });
  var P = d || E;
  return /*#__PURE__*/React__default["default"].createElement(P, null, w);
}

y$1.defaultProps = {
  values: {},
  components: {}
};

var I18nProvider = process.env.NODE_ENV === "production" ? i$1 : I18nProvider$1;
var Trans = process.env.NODE_ENV === "production" ? y$1 : Trans$1;
process.env.NODE_ENV === "production" ? o : useLingui;
process.env.NODE_ENV === "production" ? a : withI18n;

var _path$5;

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

var SvgExternalArrow = function SvgExternalArrow(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$8({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M10.6667 10.6667H1.33333V1.33333H6V0H1.33333C0.593333 0 0 0.6 0 1.33333V10.6667C0 11.4 0.593333 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V6H10.6667V10.6667ZM7.33333 0V1.33333H9.72667L3.17333 7.88667L4.11333 8.82667L10.6667 2.27333V4.66667H12V0H7.33333Z",
    fill: "#1F9898"
  })));
};

function ownKeys$m(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$m(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$m(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$m(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function CloseIcon(_ref2) {
  var onClick = _ref2.onClick,
      _ref2$variant = _ref2.variant,
      variant = _ref2$variant === void 0 ? 'button' : _ref2$variant,
      sx = _ref2.sx;
  var theme = material.useTheme();

  if (variant === 'plain') {
    return /*#__PURE__*/React__default["default"].createElement(material.ButtonBase, {
      onClick: onClick,
      sx: _objectSpread$m({
        position: 'absolute'
      }, sx)
    }, /*#__PURE__*/React__default["default"].createElement(MuiCloseIcon__default["default"], {
      sx: {
        fontSize: 20,
        color: theme.palette.text.secondary,
        '&:hover': {
          color: theme.palette.text.primary
        }
      }
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement(material.IconButton, {
    onClick: onClick,
    sx: _objectSpread$m({
      padding: 0,
      position: 'absolute',
      background: theme.palette.background.default,
      borderRadius: '8px',
      width: {
        xs: 32,
        md: 52
      },
      height: {
        xs: 32,
        md: 52
      },
      '&:hover': {
        background: theme.palette.text.secondary + '50'
      },
      '&:hover path': {
        fill: theme.palette.text.primary
      }
    }, sx)
  }, /*#__PURE__*/React__default["default"].createElement(MuiCloseIcon__default["default"], {
    sx: {
      fontSize: 20,
      color: theme.palette.text.secondary
    }
  }));
}
function ExternalLink(_ref3) {
  var _ref3$target = _ref3.target,
      target = _ref3$target === void 0 ? '_blank' : _ref3$target,
      href = _ref3.href,
      _ref3$rel = _ref3.rel,
      rel = _ref3$rel === void 0 ? 'noopener noreferrer' : _ref3$rel,
      style = _ref3.style,
      sx = _ref3.sx,
      className = _ref3.className,
      children = _ref3.children,
      underline = _ref3.underline,
      showIcon = _ref3.showIcon;
  var handleClick = React.useCallback(function (event) {
    if (target === '_blank' || event.ctrlKey || event.metaKey) ; else {
      event.preventDefault();
      window.location.href = href;
    }
  }, [href, target]);
  return /*#__PURE__*/React__default["default"].createElement(material.Link, {
    className: className,
    target: target,
    rel: rel,
    href: href,
    onClick: handleClick,
    style: style,
    sx: sx,
    underline: underline !== null && underline !== void 0 ? underline : 'none'
  }, children, showIcon && /*#__PURE__*/React__default["default"].createElement(SvgExternalArrow, {
    style: {
      marginLeft: 8
    }
  }));
}
var Dots = material.styled('span')("\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n");

var _templateObject$8;
var Wrapper$2 = material.styled(material.Box)(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral__default["default"](["\n  margin-top: auto;\n"])));
var BrandedFooter = /*#__PURE__*/React.memo(function BrandedFooter() {
  return /*#__PURE__*/React__default["default"].createElement(Wrapper$2, {
    display: "flex",
    justifyContent: 'center'
  }, /*#__PURE__*/React__default["default"].createElement(ExternalLink, {
    href: ""
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, null, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Powered by Ladder protocol"
  }))));
});

var _templateObject$7;
var AccountButton = material.styled(material.Button)(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral__default["default"](["\n  display: inline-block;\n  filter: none;\n  visibility: ", ";\n  width: max-content;\n"])), function (_ref) {
  var hidden = _ref.hidden;
  return hidden ? 'hidden' : 'visible';
});
function ConnectedWalletChip(_ref2) {
  var disabled = _ref2.disabled;
      _ref2.account;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var _useWeb3React = core.useWeb3React(),
      connector = _useWeb3React.connector;

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(AccountButton, {
    variant: "text",
    hidden: disabled,
    onClick: function onClick() {
      return connector.deactivate ? connector.deactivate() : connector.resetState();
    },
    color: "secondary",
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    "data-testid": "account"
  }, hover ? /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    display: 'flex',
    gap: 5,
    color: "primary"
  }, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Disconnect wallet"
  })) : /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    display: 'flex',
    gap: 5,
    color: "primary"
  }, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Disconnect wallet"
  })) // <Typography display={'flex'} gap={5} color="primary">
  //   {account?.substring(0, 6)}...{account?.substring(account?.length - 4)}
  // </Typography>
  ));
}

function Wallet(_ref) {
  var disabled = _ref.disabled;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account,
      isActive = _useWeb3React.isActive;

  return isActive && Boolean(account) ? /*#__PURE__*/React__default["default"].createElement(ConnectedWalletChip, {
    disabled: disabled,
    account: account
  }) : null;
}

var _templateObject$6;
var HeaderRow$1 = material.styled(material.Box)(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral__default["default"](["\n  align-items: center;\n  display: flex;\n  height: 1.75em;\n  justify-content: space-between;\n  margin: 0 10px 10px;\n  margin-bottom: 20px;\n  padding-top: 0.5em;\n"])));
function Header$1(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement(HeaderRow$1, null, /*#__PURE__*/React__default["default"].createElement(material.Box, null, title && /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    variant: "h5",
    fontWeight: 700,
    fontSize: 16
  }, title)), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      whiteSpace: 'nowrap'
    },
    display: "flex",
    alignItems: 'center'
  }, children));
}

var _path$4, _defs$3;

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

var SvgAddCircle = function SvgAddCircle(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$7({
    width: 30,
    height: 30,
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React__default["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 -1.31134e-06C6.75 -5.90104e-07 -2.03258e-06 6.75 -1.31134e-06 15C-5.90104e-07 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 -2.03258e-06 15 -1.31134e-06ZM8 15C8 15.8284 8.67157 16.5 9.5 16.5L13.5 16.5L13.5 20.5C13.5 21.3284 14.1716 22 15 22C15.8284 22 16.5 21.3284 16.5 20.5L16.5 16.5L20.5 16.5C21.3284 16.5 22 15.8284 22 15C22 14.1716 21.3284 13.5 20.5 13.5L16.5 13.5L16.5 9.5C16.5 8.67157 15.8284 8 15 8C14.1716 8 13.5 8.67157 13.5 9.5L13.5 13.5L9.5 13.5C8.67157 13.5 8 14.1716 8 15Z",
    fill: "url(#paint0_linear_5561_7706)"
  })), _defs$3 || (_defs$3 = /*#__PURE__*/React__default["default"].createElement("defs", null, /*#__PURE__*/React__default["default"].createElement("linearGradient", {
    id: "paint0_linear_5561_7706",
    x1: 9.5,
    y1: -4,
    x2: 21,
    y2: 28.5,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__default["default"].createElement("stop", {
    stopColor: "#CAF400"
  }), /*#__PURE__*/React__default["default"].createElement("stop", {
    offset: 1,
    stopColor: "#00E4DD"
  })))));
};

function useConditionalHandler(handler) {
  return React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    var result,
        _args = arguments;
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (handler) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", true);

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return handler.apply(void 0, _args);

          case 5:
            result = _context.sent;

            if (!(result === false)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", false);

          case 8:
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", false);

          case 13:
            return _context.abrupt("return", true);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 10]]);
  })), [handler]);
}

// If set, allows integrator to add behavior when 'Connect wallet to swap' button is clicked
var onConnectWalletClickAtom = jotai.atom(undefined);

var black$1 = 'hsl(0, 0%, 0%)';
var white$1 = 'hsl(0, 0%, 100%)';
({
  // surface
  interactive: polished.transparentize(1 - 0.54, black$1),
  outline: polished.transparentize(1 - 0.24, black$1),
  // text
  primary: black$1,
  secondary: polished.transparentize(1 - 0.64, black$1),
  onInteractive: white$1
});
({
  // surface
  interactive: polished.transparentize(1 - 0.48, white$1),
  outline: polished.transparentize(1 - 0.12, white$1),
  // text
  primary: white$1,
  secondary: polished.transparentize(1 - 0.6, white$1),
  onInteractive: black$1
});

var Layer;

(function (Layer) {
  Layer[Layer["UNDERLAYER"] = -1] = "UNDERLAYER";
  Layer[Layer["OVERLAY"] = 100] = "OVERLAY";
  Layer[Layer["DIALOG"] = 1000] = "DIALOG";
  Layer[Layer["TOOLTIP"] = 2000] = "TOOLTIP";
})(Layer || (Layer = {}));

var TextWrapper = /*#__PURE__*/_styled__default["default"](rebass.Text).withConfig({
  displayName: "type__TextWrapper",
  componentId: "sc-15vgmlt-0"
})(["color:", ";min-height:", ";user-select:", ";white-space:", ";"], function (_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      theme = _ref.theme;
  return theme[color];
}, function (_ref2) {
  var lineHeight = _ref2.lineHeight;
  return lineHeight;
}, function (_ref3) {
  var userSelect = _ref3.userSelect;
  return userSelect === true ? 'text' : userSelect === false ? 'none' : undefined;
}, function (_ref4) {
  var noWrap = _ref4.noWrap;
  return noWrap && 'nowrap';
});

var TransitionTextWrapper = /*#__PURE__*/_styled__default["default"](TextWrapper).withConfig({
  displayName: "type__TransitionTextWrapper",
  componentId: "sc-15vgmlt-1"
})(["transition:font-size 0.25s ease-out,line-height 0.25s ease-out;"]);
function Subhead1(props) {
  return /*#__PURE__*/React__default["default"].createElement(TextWrapper, _extends__default["default"]({
    className: "subhead subhead-1",
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "16px",
    noWrap: true
  }, props));
}
function Subhead2(props) {
  return /*#__PURE__*/React__default["default"].createElement(TextWrapper, _extends__default["default"]({
    className: "subhead subhead-2",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "14px",
    noWrap: true
  }, props));
}
function Body2(props) {
  return /*#__PURE__*/React__default["default"].createElement(TextWrapper, _extends__default["default"]({
    className: "body body-2",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "20px"
  }, props));
}
function Caption(props) {
  return /*#__PURE__*/React__default["default"].createElement(TextWrapper, _extends__default["default"]({
    className: "caption",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "16px"
  }, props));
}
function TransitionButton(props) {
  var className = "button button-".concat(props.buttonSize);
  var fontSize = {
    small: 14,
    medium: 16,
    large: 20
  }[props.buttonSize];
  var lineHeight = "".concat(fontSize, "px");
  return /*#__PURE__*/React__default["default"].createElement(TransitionTextWrapper, _extends__default["default"]({
    className: className,
    fontSize: fontSize,
    fontWeight: 500,
    lineHeight: lineHeight,
    noWrap: true
  }, props));
}

function ownKeys$l(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$l(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$l(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$l(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var white = 'hsl(0, 0%, 100%)';
var black = 'hsl(0, 0%, 0%)';
var brandLight = 'hsl(331.3, 100%, 50%)';
var brandDark = 'hsl(221, 96%, 64%)';
var stateColors = {
  active: 'hsl(221, 96%, 64%)',
  success: 'hsl(145, 63.4%, 41.8%)',
  warning: 'hsl(43, 89.9%, 53.5%)',
  error: 'hsl(0, 98%, 62.2%)'
};
var lightTheme = _objectSpread$l(_objectSpread$l({
  // surface
  accent: brandLight,
  container: 'hsl(220, 23%, 97.5%)',
  module: 'hsl(231, 14%, 90%)',
  interactive: 'hsl(229, 13%, 83%)',
  outline: 'hsl(225, 7%, 78%)',
  dialog: white,
  // text
  onAccent: white,
  primary: black,
  secondary: 'hsl(227, 10%, 37.5%)',
  hint: 'hsl(224, 9%, 57%)',
  onInteractive: black
}, stateColors), {}, {
  currentColor: 'currentColor'
});
var darkTheme = _objectSpread$l(_objectSpread$l({
  // surface
  accent: brandDark,
  container: 'hsl(225, 30%, 8%)',
  module: 'hsl(222, 37%, 12%)',
  interactive: 'hsl(224, 10%, 28%)',
  outline: 'hsl(227, 10%, 37.5%)',
  dialog: black,
  // text
  onAccent: white,
  primary: white,
  secondary: 'hsl(227, 21%, 67%)',
  hint: 'hsl(225, 10%, 47.1%)',
  onInteractive: white
}, stateColors), {}, {
  currentColor: 'currentColor'
});
var defaultTheme = _objectSpread$l({
  borderRadius: 1,
  fontFamily: {
    font: '"Inter", sans-serif',
    variable: '"InterVariable", sans-serif'
  },
  fontFamilyCode: 'IBM Plex Mono',
  tokenColorExtraction: false
}, lightTheme);
var ThemeContext = /*#__PURE__*/React.createContext(toDefaultTheme(defaultTheme));
function ThemeProvider$1(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  var contextTheme = React.useContext(ThemeContext);
  var value = React.useMemo(function () {
    return toDefaultTheme(_objectSpread$l(_objectSpread$l({}, contextTheme), theme));
  }, [contextTheme, theme]);
  return /*#__PURE__*/React__default["default"].createElement(ThemeContext.Provider, {
    value: value
  }, /*#__PURE__*/React__default["default"].createElement(_styled.ThemeProvider, {
    theme: value
  }, children));
}

function toDefaultTheme(theme) {
  return _objectSpread$l(_objectSpread$l({}, theme), {}, {
    borderRadius: clamp(Number.isFinite(theme.borderRadius) ? theme.borderRadius : theme.borderRadius ? 1 : 0),
    onHover: function onHover(color) {
      return color === theme.primary ? polished.transparentize(0.4, theme.primary) : polished.mix(0.16, theme.primary, color);
    }
  });

  function clamp(value) {
    return Math.min(Math.max(value, 0), 1);
  }
}

var _defs$2, _path$3;

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

var SvgAutoRouter = function SvgAutoRouter(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$6({
    width: 23,
    height: 20,
    viewBox: "0 0 23 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _defs$2 || (_defs$2 = /*#__PURE__*/React__default["default"].createElement("defs", null, /*#__PURE__*/React__default["default"].createElement("linearGradient", {
    id: "gradient",
    x1: 0,
    y1: 0,
    x2: 1,
    y2: 0,
    gradientTransform: "rotate(95)"
  }, /*#__PURE__*/React__default["default"].createElement("stop", {
    id: "stop1",
    offset: 0,
    stopColor: "#2274E2"
  }), /*#__PURE__*/React__default["default"].createElement("stop", {
    id: "stop1",
    offset: 0.5,
    stopColor: "#2274E2"
  }), /*#__PURE__*/React__default["default"].createElement("stop", {
    id: "stop2",
    offset: 1,
    stopColor: "#3FB672"
  })))), _path$3 || (_path$3 = /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16 16C10 16 9 10 5 10M16 16C16 17.6569 17.3431 19 19 19C20.6569 19 22 17.6569 22 16C22 14.3431 20.6569 13 19 13C17.3431 13 16 14.3431 16 16ZM5 10C9 10 10 4 16 4M5 10H1.5M16 4C16 5.65685 17.3431 7 19 7C20.6569 7 22 5.65685 22 4C22 2.34315 20.6569 1 19 1C17.3431 1 16 2.34315 16 4Z",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "url(#gradient)"
  })));
};

var _polyline, _polyline2;

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

var SvgExpando = function SvgExpando(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$5({
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: 2,
    strokeLinecap: "round",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _polyline || (_polyline = /*#__PURE__*/React__default["default"].createElement("polyline", {
    className: "left",
    points: "18 15 12 9"
  })), _polyline2 || (_polyline2 = /*#__PURE__*/React__default["default"].createElement("polyline", {
    className: "right",
    points: "12 9 6 15"
  })));
};

var _mask, _circle;

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

var SvgSpinner = function SvgSpinner(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$4({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _mask || (_mask = /*#__PURE__*/React__default["default"].createElement("mask", {
    id: "mask"
  }, /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10,
    stroke: "white",
    strokeWidth: 2
  }), /*#__PURE__*/React__default["default"].createElement("rect", {
    width: 12,
    height: 12,
    fill: "black",
    strokeWidth: 0
  }), /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: 2,
    cy: 12,
    r: 1,
    fill: "white",
    strokeWidth: 0
  }), /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: 12,
    cy: 2,
    r: 1,
    fill: "white",
    strokeWidth: 0
  }))), _circle || (_circle = /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    mask: "url(#mask)"
  })));
};

var _templateObject$5, _templateObject2$3;
/* eslint-enable no-restricted-imports */

function icon(Icon) {
  return _styled__default["default"](Icon).withConfig({
    displayName: "icons",
    componentId: "sc-14vlpb6-0"
  })(["clip-path:stroke-box;height:1em;stroke:", ";width:1em;"], function (_ref) {
    var _ref$color = _ref.color,
        color = _ref$color === void 0 ? 'currentColor' : _ref$color,
        theme = _ref.theme;
    return theme[color];
  });
}

var largeIconCss = _styled.css(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral__default["default"](["\n  display: flex;\n\n  svg {\n    align-self: center;\n    height: ", "em;\n    width: ", "em;\n  }\n"])), function (_ref2) {
  var iconSize = _ref2.iconSize;
  return iconSize;
}, function (_ref3) {
  var iconSize = _ref3.iconSize;
  return iconSize;
});

var LargeWrapper = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "icons__LargeWrapper",
  componentId: "sc-14vlpb6-1"
})(["height:1em;width:", "em;", ""], function (_ref4) {
  var iconSize = _ref4.iconSize;
  return iconSize;
}, largeIconCss);

function LargeIcon(_ref5) {
  var Icon = _ref5.icon,
      color = _ref5.color,
      _ref5$size = _ref5.size,
      size = _ref5$size === void 0 ? 1.2 : _ref5$size,
      className = _ref5.className;
  return /*#__PURE__*/React__default["default"].createElement(LargeWrapper, {
    color: color,
    iconSize: size,
    className: className
  }, Icon && /*#__PURE__*/React__default["default"].createElement(Icon, {
    color: color
  }));
}
var AlertTriangle = icon(reactFeather.AlertTriangle);
icon(reactFeather.ArrowRight);
icon(reactFeather.ArrowUp);
icon(reactFeather.CheckCircle);
icon(reactFeather.BarChart2);
var ChevronLeft = icon(reactFeather.ChevronLeft);
icon(reactFeather.ChevronDown);
var Clock = icon(reactFeather.Clock);
icon(reactFeather.HelpCircle);
var Info = icon(reactFeather.Info);
var Link = icon(reactFeather.ExternalLink);
icon(SvgAutoRouter);
var Settings$1 = icon(reactFeather.Settings);
icon(reactFeather.Slash);
icon(reactFeather.Trash2);
icon(reactFeather.X);
var XOctagon = icon(reactFeather.XOctagon);
var Expando$1 = /*#__PURE__*/_styled__default["default"](icon(SvgExpando)).withConfig({
  displayName: "icons__Expando",
  componentId: "sc-14vlpb6-3"
})([".left,.right{transition:transform 0.25s ease-in-out;will-change:transform;}.left{transform:", ";}.right{transform:", ";}"], function (_ref7) {
  var open = _ref7.open;
  return open ? undefined : 'translateX(-25%)';
}, function (_ref8) {
  var open = _ref8.open;
  return open ? undefined : 'translateX(25%)';
});

var rotate = _styled.keyframes(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral__default["default"](["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));

var Spinner$1 = /*#__PURE__*/_styled__default["default"](icon(SvgSpinner)).withConfig({
  displayName: "icons__Spinner",
  componentId: "sc-14vlpb6-6"
})(["animation:2s ", " linear infinite;stroke:", ";stroke-linecap:round;stroke-width:2;"], rotate, function (_ref10) {
  var _ref10$color = _ref10.color,
      color = _ref10$color === void 0 ? 'active' : _ref10$color,
      theme = _ref10.theme;
  return theme[color];
});

function ownKeys$k(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$k(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$k(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$k(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var themeConstants = {
  gradient: {
    gradient1: 'linear-gradient(98.91deg, #D8FF20 10.95%, #99F7F4 100%)',
    gradient2: 'linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), linear-gradient(98.91deg, #D8FF20 10.95%, #99F7F4 100%)',
    gradient3: 'linear-gradient(98.91deg, rgba(216, 255, 32, 0.2) 10.95%, rgba(153, 247, 244, 0.2) 100%)'
  },
  width: {
    maxContent: '1110px',
    minContent: '350px'
  },
  shape: {
    border: '1px solid',
    borderRadius: 10
  },
  spacing: function spacing(factor) {
    return "".concat(1 * factor, "px");
  }
};
var themeColors = {
  primary: {
    light: '#ADDFB5',
    main: '#1F9898',
    dark: styles.darken('#1F9898', 0.3),
    contrastText: '#1A1C1E'
  },
  secondary: {
    light: '#31B047',
    main: '#99F7F4',
    dark: '#00E4DD',
    contrastText: '#1A1C1E'
  },
  error: {
    main: '#FA0E0E',
    light: '#FA0E0E10'
  },
  warning: {
    main: '#F0B90B'
  },
  info: {
    main: '#1F9898'
  },
  success: {
    main: '#31B047'
  },
  background: {
    default: '#F7F7F7',
    paper: '#FFFFFF',
    secondary: '#484D50'
  },
  text: {
    primary: '#333333',
    secondary: '#828282',
    disabled: '#828282'
  },
  action: {
    disabledOpacity: 0.6,
    disabledBackground: '#cccccc'
  }
};
var themeDarkColors = {
  primary: {
    light: '#ADDFB5',
    main: '#D8FF20',
    dark: styles.darken('#D8FF20', 0.2),
    contrastText: '#1A1C1E'
  },
  secondary: {
    light: '#31B047',
    main: '#99F7F4',
    dark: '#00E4DD',
    contrastText: '#ffffff'
  },
  error: {
    main: '#FA0E0E',
    light: '#FA0E0E10'
  },
  warning: {
    main: '#F0B90B'
  },
  info: {
    main: '#1F9898'
  },
  success: {
    main: '#31B047'
  },
  background: {
    default: '#343739',
    paper: '#1A1C1E'
  },
  text: {
    primary: '#E6EAEE',
    secondary: '#878D92',
    disabled: '#61666A'
  },
  action: {
    disabledOpacity: 0.6,
    disabledBackground: '#343739'
  }
};
var override = function override(palette) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: palette.background.paper === '#1A1C1E' ? '#000000' : '#FFF6F6',
          fontSize: 16,
          overflow: 'auto!important',
          paddingRight: '0px!important'
        },
        'html, input, textarea, button, body': {
          fontFamily: FONTS.content,
          fontDisplay: 'fallback'
        },
        '@supports (font-variation-settings: normal)': {
          'html, input, textarea, button, body': {
            fontFamily: FONTS.content,
            fontDisplay: 'fallback'
          }
        }
      }
    },
    MuiBox: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          '& *': {
            boxSizing: 'border-box'
          }
        }
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableRipple: true
      },
      styleOverrides: {
        root: {
          color: palette.primary.contrastText,
          borderRadius: themeConstants.shape.borderRadius,
          transition: '.3s',
          textTransform: 'none',
          width: '100%',
          height: 50,
          fontSize: 16,
          fontWeight: 500
        },
        contained: {
          background: themeConstants.gradient.gradient1,
          color: palette.primary.contrastText,
          boxShadow: 'unset',
          '&:hover': {
            boxShadow: 'unset',
            background: themeConstants.gradient.gradient2
          },
          '&:active': {
            boxShadow: 'unset',
            background: themeConstants.gradient.gradient3
          },
          '&:disabled': {
            boxShadow: 'unset',
            background: palette.action.disabledBackground,
            color: palette.text.disabled
          }
        },
        containedSecondary: {
          backgroundColor: palette.secondary.main,
          color: palette.secondary.contrastText,
          boxShadow: 'unset',
          '&:hover, :active': {
            boxShadow: 'unset',
            backgroundColor: palette.secondary.dark
          },
          '&:disabled': {
            opacity: palette.action.disabledOpacity,
            backgroundColor: palette.secondary.light
          }
        },
        outlined: {
          backgroundColor: 'transparent',
          borderColor: palette.primary.main,
          color: palette.primary.main,
          '&:hover, :active': {
            backgroundColor: 'transparent',
            borderColor: palette.primary.dark,
            color: palette.primary.dark
          },
          '&:disabled': {
            opacity: palette.action.disabledOpacity
          }
        },
        outlinedSecondary: {
          backgroundColor: 'transparent',
          borderColor: palette.secondary.main,
          color: palette.secondary.main,
          '&:hover, :active': {
            backgroundColor: 'transparent',
            borderColor: palette.secondary.dark,
            color: palette.secondary.dark
          },
          '&:disabled': {
            opacity: palette.action.disabledOpacity
          }
        },
        text: {
          backgroundColor: 'transparent',
          color: palette.primary.main,
          fontWeight: 500,
          '&:hover, :active': {
            backgroundColor: 'transparent',
            color: palette.primary.dark,
            opacity: 1
          }
        },
        textPrimary: {
          color: palette.primary.main,
          '&:hover, :active': {
            color: palette.primary.dark
          }
        },
        textSecondary: {
          color: palette.secondary.main,
          backgroundColor: 'transparent',
          '&:hover, :active': {
            backgroundColor: 'transparent',
            color: palette.secondary.dark
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.2
        },
        body1: {
          fontSize: 14
        },
        body2: {
          fontSize: 12
        },
        h1: {
          fontSize: 45,
          fontWeight: 700,
          fontFamily: FONTS.title
        },
        h5: {
          fontSize: 28,
          fontWeight: 500,
          fontFamily: FONTS.title
        },
        h6: {
          fontSize: 22,
          fontWeight: 500
        },
        caption: {
          fontSize: 12,
          color: palette.text.primary
        }
      }
    }
  };
};
var FONTS = {
  title: 'Monument Extended, Helvetica, sans-serif',
  content: 'Lato, Helvetica, sans-serif'
};
styles.styled('div', {
  shouldForwardProp: function shouldForwardProp() {
    return true;
  }
})(function (_ref) {
  var theme = _ref.theme,
      breakpoint = _ref.breakpoint;
  return _defineProperty__default["default"]({}, theme.breakpoints.down(breakpoint !== null && breakpoint !== void 0 ? breakpoint : 'sm'), {
    display: 'none'
  });
});
styles.styled('div', {
  shouldForwardProp: function shouldForwardProp() {
    return true;
  }
})(function (_ref3) {
  var theme = _ref3.theme,
      breakpoint = _ref3.breakpoint;
  return _defineProperty__default["default"]({
    display: 'none'
  }, theme.breakpoints.down(breakpoint !== null && breakpoint !== void 0 ? breakpoint : 'sm'), {
    display: 'block'
  });
});
var theme = styles.createTheme(_objectSpread$k(_objectSpread$k({
  palette: _objectSpread$k({
    mode: 'light'
  }, themeColors)
}, themeConstants), {}, {
  components: _objectSpread$k({}, override(themeColors)),
  typography: {
    allVariants: {
      fontFamily: FONTS.content
    }
  }
}));
styles.createTheme(_objectSpread$k(_objectSpread$k({
  palette: _objectSpread$k({
    mode: 'dark'
  }, themeDarkColors)
}, themeConstants), {}, {
  components: _objectSpread$k({}, override(themeDarkColors)),
  typography: {
    allVariants: {
      fontFamily: FONTS.content
    }
  }
}));
function ThemeProvider(_ref5) {
  var children = _ref5.children;
  return /*#__PURE__*/React__default["default"].createElement(styles.ThemeProvider, {
    theme: theme
  }, children);
}

function isAnimating(node) {
  var _node$getAnimations$l, _node$getAnimations;

  return ((_node$getAnimations$l = node === null || node === void 0 ? void 0 : (_node$getAnimations = node.getAnimations) === null || _node$getAnimations === void 0 ? void 0 : _node$getAnimations.call(node).length) !== null && _node$getAnimations$l !== void 0 ? _node$getAnimations$l : 0) > 0;
}
/**
 * Delays a node's unmounting until any animations on that node are finished, so that an unmounting
 * animation may be applied. If there is no animation, this is a no-op.
 *
 * CSS should target the class returned from getAnimatingClass to determine when to apply the
 * animation.
 * Note that getAnimatingClass will be called when the node would normally begin unmounting.
 */

function useUnmountingAnimation(node, getAnimatingClass) {
  React.useEffect(function () {
    var current = node.current;
    var parent = current === null || current === void 0 ? void 0 : current.parentElement;
    var removeChild = parent === null || parent === void 0 ? void 0 : parent.removeChild;
    if (!(parent && removeChild)) return;

    parent.removeChild = function (child) {
      if (child === current) {
        current.classList.add(getAnimatingClass());

        if (isAnimating(current)) {
          current.addEventListener('animationend', function () {
            removeChild.call(parent, child);
          });
        } else {
          removeChild.call(parent, child);
        }

        return child;
      } else {
        return removeChild.call(parent, child);
      }
    };

    return function () {
      parent.removeChild = removeChild;
    };
  }, [getAnimatingClass, node]);
}

var Animation;

(function (Animation) {
  Animation["CLOSING"] = "closing";
  Animation["PAGING"] = "paging";
})(Animation || (Animation = {}));

var Context = /*#__PURE__*/React.createContext({
  element: null,
  active: false,
  setActive: function setActive(active) {
    return undefined;
  }
});
function Provider$4(_ref) {
  var value = _ref.value,
      children = _ref.children;
  // If a Dialog is active, mark the main content inert
  var ref = React.useRef(null);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var context = {
    element: value,
    active: active,
    setActive: setActive
  };
  React.useEffect(function () {
    if (ref.current) {
      ref.current.inert = active;
    }
  }, [active]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: ref,
    style: {
      isolation: 'isolate',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column'
    } // creates a new stacking context, preventing the dialog from intercepting non-dialog clicks

  }, /*#__PURE__*/React__default["default"].createElement(Context.Provider, {
    value: context
  }, children));
}
var OnCloseContext = /*#__PURE__*/React.createContext(undefined);
var HeaderRow = material.styled(material.Box)("\n  disply: flex;\n  justify-content:flex-start;\n  height: 1.75em;\n  margin: 0 15px;\n  padding-top: 15px;\n  button:{\n    height: max-content\n  }\n");
function Header(_ref2) {
  var title = _ref2.title,
      children = _ref2.children;
  var onClose = React.useContext(OnCloseContext);
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "grid",
    "data-testid": "dialog-header"
  }, /*#__PURE__*/React__default["default"].createElement(HeaderRow, null, /*#__PURE__*/React__default["default"].createElement(material.Button, {
    color: "primary",
    onClick: onClose,
    variant: "text",
    sx: {
      height: 'max-content',
      width: 'max-content'
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    justifyContent: "flex-start",
    gap: 10
  }, /*#__PURE__*/React__default["default"].createElement(ChevronLeft, null), title && /*#__PURE__*/React__default["default"].createElement(material.Typography, null, title))), children));
}
var Modal = material.styled('div', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'type';
  }
})(function (_ref3) {
  var theme = _ref3.theme;
      _ref3.type;
  return "\n  background-color: ".concat(theme.palette.background.default, ";\n  border-radius: ").concat(theme.shape.borderRadius * 0.75, "px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  z-index: ").concat(Layer.DIALOG, ";\n");
});
function Dialog(_ref4) {
  var children = _ref4.children,
      onClose = _ref4.onClose,
      type = _ref4.type;
  var context = React.useContext(Context);
  React.useEffect(function () {
    context.setActive(true);
    return function () {
      return context.setActive(false);
    };
  }, [context]);
  var modal = React.useRef(null);
  useUnmountingAnimation(modal, function () {
    var _context$element$chil, _context$element;

    // Returns the context element's child count at the time of unmounting.
    // This cannot be done through state because the count is updated outside of React's lifecycle -
    // it *must* be checked at the time of unmounting in order to include the next page of Dialog.
    return ((_context$element$chil = (_context$element = context.element) === null || _context$element === void 0 ? void 0 : _context$element.childElementCount) !== null && _context$element$chil !== void 0 ? _context$element$chil : 0) > 1 ? Animation.PAGING : Animation.CLOSING;
  });
  React.useEffect(function () {
    var close = function close(e) {
      return e.key === 'Escape' && (onClose === null || onClose === void 0 ? void 0 : onClose());
    };

    document.addEventListener('keydown', close, true);
    return function () {
      return document.removeEventListener('keydown', close, true);
    };
  }, [onClose]);
  return context.element && /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(ThemeProvider, null, /*#__PURE__*/React__default["default"].createElement(ThemeProvider$1, null, /*#__PURE__*/React__default["default"].createElement(OnCloseContext.Provider, {
    value: onClose
  }, /*#__PURE__*/React__default["default"].createElement(Modal, {
    type: type,
    ref: modal,
    className: "modal"
  }, children)))), context.element);
}

var Row = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "Row",
  componentId: "sc-4jn9cp-0"
})(["align-items:", ";color:", ";display:", ";flex-flow:wrap;flex-grow:", ";gap:", ";grid-auto-flow:column;grid-template-columns:", ";justify-content:", ";padding:", ";"], function (_ref) {
  var align = _ref.align;
  return align !== null && align !== void 0 ? align : 'center';
}, function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return color && theme[color];
}, function (_ref3) {
  var flex = _ref3.flex;
  return flex ? 'flex' : 'grid';
}, function (_ref4) {
  var grow = _ref4.grow;
  return grow && 1;
}, function (_ref5) {
  var gap = _ref5.gap;
  return gap && "".concat(gap, "em");
}, function (_ref6) {
  var grow = _ref6.grow,
      children = _ref6.children;
  if (grow === 'first') return '1fr';
  if (grow === 'last') return "repeat(".concat(React.Children.count(children) - 1, ", auto) 1fr");
  if (grow) return "repeat(".concat(React.Children.count(children), ", 1fr)");
  return undefined;
}, function (_ref7) {
  var justify = _ref7.justify;
  return justify !== null && justify !== void 0 ? justify : 'space-between';
}, function (_ref8) {
  var pad = _ref8.pad;
  return pad && "0 ".concat(pad, "em");
});

var METAMASK_ICON_URL = "data:image/png;base64,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";

var WALLETCONNECT_ICON_URL = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%3Crect%20width%3D%2224%22%20height%3D%2215.0867%22%20fill%3D%22url%28%23pattern0%29%22%2F%3E%20%20%3Cdefs%3E%20%20%20%20%3Cpattern%20id%3D%22pattern0%22%20patternContentUnits%3D%22objectBoundingBox%22%20width%3D%221%22%20height%3D%221%22%3E%20%20%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23image0%22%20transform%3D%22translate%28-0.00968744%29%20scale%280.00339792%200.00540541%29%22%2F%3E%20%20%20%20%3C%2Fpattern%3E%20%20%20%20%3Cimage%20id%3D%22image0%22%20width%3D%22300%22%20height%3D%22185%22%20xlink%3Ahref%3D%22data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAASwAAAC5CAYAAACSoQIxAAAgAElEQVR4Ae19fZgdVZnn761TnQ%2FCtwmugxhkGPXZDIjDoENIuu9twsAm4CS7EpFhWHYktN23AwzC6Dg6xI%2FVWcGsk%2FTtNgQ0MogQ9lkQDAtLTN%2FuhDjIk5koG10eWRwQdAjRYBLIR9epd5%2B3um%2FS6dx7%2B35U3Vt16tx%2Fqu6pc96P33vqd8%2BtOu85BPuxCFRAYF4%2Fn%2BJ4ONNV3izt0AzycRwRzQBjBgPHEfszfMIMIjqOGDNAmAHguDGRb4HxJhPeZOa3yMFe%2BM5%2BR74DbzHzmyC8ST7vZXJ%2Fs9fFL7Z10e8qmGMvpRwBSrn%2F1n0AF97Np07d753rK2eOw%2F4fENG7ffCZYDrTIZzYTJAY%2BB3AvwDoX5nk6PxcaWfHb2fgJ9v%2FC73RTFusrvghYAkrfjGJ1KL21XyO4%2BgPMvhch%2BhcAHMAzIpUaUjCmfEagP8D4ucA2u6z%2BtFwjn4WkngrJgEIWMJKQJDqNfE%2FfJNnvXVQz3OYLwToAmZ8iAjT65UXy3aMfSD8E3x%2BlhVtPdimtv7wevptLG21RjWMgCWshiGMj4DzvsUnn3RAZx2NLDvcSSAZPaXq4zN8Av8YwCZi2rST1PCOHO1LFQgGO2sJK%2BHB7cjzBWDvcihc7jD9UcLdicR8Zv4hkfOY1s73h5fTc5EosUKbgoAlrKbAHJ6Ss1fx1He26UvIx4dBuBzAO8KTbr4kZvwrgx91GI%2FyLneosII88702x0NLWAmJZTCSIn29A3wMwAkJMTvWZjLjN8z8bZrmDhSupxdibaw1LkDAElaMO8JF9%2FAJ6qB%2FrQP%2FegKdF2NTE28ag7cw0V2vjqj1L9xIBxPvkKEOWMKKYWDb8zzXgV5GhKsATIuhicaa5DP2EHAvjai%2BwZvpeWMdTahjlrBiEjgZTU095P9nH%2F4NxHROTMxKtRkMfpqJ1thRV3y6gSWsFsciczefjUP6UwRcY0dTLQ5GGfWjoy6%2BS7vuys1d9Osy1WxxExCwhNUEkEupGCOqLzJjqUNwStWxZTFDgHGQgbXaVV%2B2xNWa2FjCajLulqiaDHgU6ixxRYFqVTItYVUFU%2BOV2vN8hkP6y2N%2F%2FRoXaCXEAgFm%2FgeP3M9v6aHdsTDIcCMsYUUcYHmY7h7yPuv4dBMIUyNWZ8W3AgHGbhB9aY9yVm%2FropFWmJAWnZawIop0ZgW7fJrf7YD%2FDsDMiNRYsXFCgPGiT%2Fj0UI%2F7UJzMMskWS1gRRDPbN3Kx76DfAb0nAvFWZMwRkEmo2nG7Nn%2BCfhpzUxNnniWsEEMmy7nsP6BXEYIJnyFKtqIShwDDA%2FF%2F36PcFdu66K3E2R9Tgy1hhREYZur8hp%2Fzmb9EwElhiLQyjEHgZQDLB3vcR43xqIWOWMJqEPxsH89h8tYR0R83KMo2NxuBR5lVVyFH%2F2a2m9F6ZwmrXnxXsJM9zf%2B0D77dAabUK8a2Sw8CPvBbYvQUcu6D6fE6XE8tYdWB5%2BjkT%2B8BAp1fR3PbJO0IMP7nm6xu%2BFEv%2FSbtUNTqv00JqQUxZmrP65twUP%2FEklUtwNm6RyFA%2BI%2FTSf80kx%2B57Khy%2B2VSBOwIa1KIRitk1vBMaL2egGyVTWw1i8CkCDCj7%2FVZ6pM7ltKhSSvbCrCEVUUnyPTzn4D1I0R4exXVbRWLQE0IMPO%2F%2BFPc%2FzS8jH5RU8MUVrZ%2FCSsFnZkyffqzBL3FklUloOy1RhAgog%2BoEf3jbL%2F34UbkpKGtHWGVifIH%2B%2Fhtx5F%2BkAgXl6liiy0CoSPgM68ayrXdFLpgQwRawioRyMwafh95%2Bn%2BDcEaJy7bIIhApAj54q4Z7uV0B4liY7V%2FCCZhk%2B7yF5OlnLVlNAMZ%2BbRoCDmiuy%2Fqf5YezaUoTosgS1rhAZfv1Z9jB90E4flyxPbUINB0BIpwpP5zyA9p05TFWaP8SjgUn2%2B99B8DVMY6VNS2lCDDRrYVu9bWUun%2BU26knrGAnZaUfI8IlRyFjv1gEYoQAg79e6Gn7qxiZ1BJTUk1YQlZnuPoJAJmWoG%2BVWgRqQMBnfHOoR10PIq6hmVFVU0tYF67k6dOm6cctWRnVn9PgzEO8U11dWEFeGpyd6GMqH7rPyfPxU6Z5Gy1ZTewO9nsCELgSp%2BlH5d9BAmwN3cTUjbDOvZdnnLrXe4qILgwdTSvQItAkBJh58%2BtwF%2B7I0b4mqYyFmlQR1odW8YnTlfcDu9heCH2PsY%2BB34H4DTkS6HeQ74w34PDosik%2BvQ2EkwGcxOCT4ONkIjopWJXVTh1pOAjM%2FE%2F7tXvpMzfSnoaFJURAaghLUm2mO94mB3RuQmLTOjODjUL5ZSJ6yWe87BC9xOCXoPklV7kvezvxcqPPUGRXIecdmA3fm%2B379C44NJuYZ%2Fs%2BZpOD2QycYRdGnLwLMHj7fs%2FtSAtppYKw%2FnSATzvke1uI6A8m7wKprLELjGENGoZ2hod%2Fix9jBfktRWI9q8xr%2BABcv4OY28GYD8IpLbUppsqFtDy4nWlI5TGesC65h3%2FPO6i3AHh3TPtbK8z6FQPDTDTskzOUiO2omGn%2BAM5xMEpgDLQ7hNNaAV4cdTJ4B5SbKXTRrjjaF5ZNRhPWgjX8Lq31ZgDvCguwBMt5GeAHR%2BA%2BuKWHtiXYj1HTmakjjz8BeVc5oKUg%2FLvE%2B9SgA8z8PFx3nsmkZSxhtef5DEX6GQDvaLAfJLn56wz%2Bjtbu%2F9i8nJ5OsiOT2d45MNKpmT7qMK5M819H%2BXtY6Gn7wGR4JfW6sYSVyY88m9K3gW%2BCcT85%2FMCm7rZNSe2YjdgdJAw7wWa2f9GInMS29fkrg71tn0ms%2FRUMN5KwMnnvOiJ8q4LfJl76NTOt3K%2Bdu9LyxmiyIMqb4RmOn%2FPBNznAqZPVN%2Bj6G4M9rpEvKIwkrGy%2F9z0AqVhulsE%2FZqb%2FNpRzv2vQDRe6K5m893Em%2FmsH9J7QhcdRoK%2F%2BcLCXdsTRtEZschtpHNe2zHwWkZFcPB7yR4n4HwZT%2BrdvPBDVnBdy7j0A7sn2eX%2FGxJ8kovnVtEtqHQLellTbK9ltJGGBYGxiKDMe86E%2BNZyjn1UKrL1WGoHBXldG39%2Bbv4o%2FqFxvJYEuKl0z4aUK%2Fy%2FhHpQ030zCAv1fAOeV9DihhcEra0JvIdcmSdv20yACm2%2BkHwGYlxnwroKPO4lweoMiY9NcUnYGe%2BjV2BgUoiFGrtbgAPeGiFFLRTHjNz5RTyHX9r5CjyWrsINR6HYfwHHqbPbpc8zYH7b8Vshjh77aCr3N0Gnsg56O%2FpGnZTH%2FZoAYlQ5ZZXKvclds6woSi6NSY%2BWOITB%2FDb%2FD9fTfg3BtYkFhfGcw516TWPsnMdxYwjp%2FDR93gqcfTei%2BggXtqBuGP0E%2FnyR%2B9nIECMzr5%2FNdePcQ6P0RiI9OJGP9YM79aHQKWi%2FZyL%2BEAuu2LnrrFa0WMeOp1sNcnQU%2Bw2fmzw%2FuVBdbsqoOsyhqSerSK577IWZ8Iwr5Uchk4IHBWcr4TVSMHWEVO8X5a7jtBE9viPsmE8x4zYX6yMYcSaK2%2FcQEgUy%2Ft5gY%2Fxjnrd%2BErArd6uo0rPVuPGFJvw9IS%2BuHCVgUk%2FvgKDMYGIRSS01OWj3K4YR9yQzwmWDvkVj%2BRWTcO9ijrksDWUm3SQVhiaOyYBxm6fVEWBKb%2B4XhMdFnC93OV9PS4WKDfY2GjI7UvTuI6KYam0ZXnbF2sEd1panvpIawir0m0%2B89QEDLH0wy4RVPq49s6SVZUcJ%2BEoJAZsC7HIz7gmWeW2gzM%2FoKOXd5C01oiWpjH7qXQ7MwU%2F25%2FOcvd70Z5T74J8pVf2zJqhloh6uj0O1%2B33PVBwG8HK7k6qWllawEodSNsIJuwUyZAX0%2FIViCpPqeEkJNeV61V6nL5S1mCOKsiBYhkFnDM6G9Jwh0fjNNSDNZCc7pJCzxnJmy%2FXpdUycJygPSWeovsZR0Mzu51RUNAplv8TTs1w8RcHk0Go6Wysx3FnJttx1dmq5v6SUsifMoaa0BYVn0YafbB3vUF6LXYzU0FQFZqvkb3t87TH8dpV6Zn1fIta2IUkcSZKebsMYilM17d0VFWgyMyCguyFlLQo%2BwNtaFQHveu1YRvglA1SWgQiNmuq2QU3dWqJKaS5awxkKdyY98PYJX1geIeFFalypOzV005mhnfuRPmUiWr5kWnu%2F0ycEetTI8ecmWZAlrXPwyeW81EXrHFdV%2FytinoS4dztHW%2BoXYlklDoD3Pcx3ojUSY3qjtRLR8U7fqa1SOSe0tYU2IZiY%2FIpMDb51QXNtXxj4fqnMoR8%2FW1tDWNgGBMEjLZ9wwlHPXmoBHmD6kbh7WZODJWxh5wDlZvXLXfcYeS1bl0ElHuYyqfagFYOyr1WMG2JJVedTsCKsMNpm8vpWI7yhzuXQxYzdDdRZytL10BVuaJgQ68nyBA72p2sTpMbK6bjjnGrMAZdjxtoRVAdEaSWsXfJUxcaeSChDZS5MgIKQF6I0O4cRKVYWsQLjavk2uhFKaJ45WxuXw1c4B3cvMqw8XlD7ZhUNq3uDN9Hzpy7Y0zQhk8nweQw9VIC3NhGssWU3eS%2BwIa3KM0JH3ljmEu0pVlXWsaER1WLIqhY4tKyJQgbS0T7hyqNt9uFjXHssjYB%2B6l8fm8BV5W0Og7sMFR05%2B5Ss135LVEUDsWWkE5LkmQXXIKh3jarzpM5ZYshqHyCSndoQ1CUDjL49NDPwbBhOBdrpT1c1PfZx%2BNb6OPbcIVELgvG%2FxySfv84It6BzX%2FfmmbjO346qEgb1mEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhaBOhCI5BnWJffw740c8JaDcGFgE9Mb5PDAYHfbk3XYaJskBIHsKn4%2FlL6FiWeLycT0kvbVncPL6bmEuGDNrAOB7MDIpexTN4hPDuLuY6vX5q7e3EW%2FrkNcxSahE1YmP3InEX2ylFYGb%2FMd92N2z71S6CS37Pw1fNIJWq8jYHEZLx7ao9Qyu4N1GXQSWjz%2FG%2FzvHd%2F7rgM6t6QLPn9lsLftMyWv1VkYGmFVu5WW5NoBaoFNDK4zYjFrdvFafrs%2B5A0R0XsrmcbMz6spbscPltFrlerZa8lAoIYZ%2FBv2KrVkWxeNhOFZKPOwzl7FU4PNSqvY909m%2B0p%2B1ajDYbhgZbQKgc4BPt0%2FpLdORlZin9SRukJwrbLX6g0HgbHVKDZVmLl%2FWJHsBSrcIBxxuLCBk4ZHWGLIGa5%2BQrb%2Bq8kOu15UTXDFrXJAVqyfJiB4XlW1fYwXyVHtdv5R1YjFqmIDS%2BcUfumpy164kQ424lBDhHXhSp4%2BbZp%2BvGayGrOYGfvh88LC8rZCI07Yts1FoPNunu0f0kM1k1Ux7sBLzhTVsel6eqm5llttjSCQWT2SgUOPN7A4YeHAAbXwh7fQ%2FnrtqPsv4Zw8Hz9lmrexXrISg8VxcuiJAIh6PbDtmopAQFYH6xhZjbNSiM4%2FqJ8WWeOK7WmMEejoG7lE7tUGyEq8ywhnCHfU62pdI6wPreITp7veRgJdUK%2Fio9oxDvrMVwz1tj11VLn9EisEFvTzWR7rYSKcHoZhzHjVJdW%2BsYdeDEOelRENAmNktYGAtjA0MPjZ%2FZ674JkbaU%2Bt8momrHn9fIoLbxOBgnyoWhWWqy%2B7yxCwZLDH3VCuji1vHQLZr%2FN7uU0PESHUh%2Bay2oVLaq4lrdbFtpLmbL%2B3iIGHwyKroi4Gb9%2FvuR21klZNhDVGVpsJNKeoONQjwwNhsSWtUFFtWJiQFaboLQBmNiyshAC7RE8JUGJQJGQFxiMguFGYI6Tlwe3c0kO7q5Vf9TMs2ZrbhRcdWYnFAgzjkY4Bb0m1Dth60SKQ7eM5UZJVEHYZtU3RWwJd0bpjpVeJQHAPRkhWQdxB5wmnCLdUaRaqIqxg7oznbYlsZDXeWoLrMB6ypDUelNacy6JzIL05qpHVBK9mii5LWhNQacHXzIB3ldyDUY2sxrsUcIrnbal2ft6kfwllvg37ehiEs8YrasK5XTa2CSCXU1FhhcxyTcIptxt5hINjnVKErMC4n5q9fDrjRWeKmjtZJkTFEVZxcmALyErgVgKcbAFeJ%2Fa2WZ0ISBbCJGuQ1ym5imaEU0S3zYSoAquQqwT3WivISvwgnCWZEMI5ldwqS1jBfJt6ZjJX0lbjNWF5h7DOklaNwDVQXYhCUqeqSbtoQE3FpjZ9qyI8kVwc27dAEtgn%2FdcViQEiVEiLK8%2FPK0lYMt9GJvbVO5M5TIeKpCWAhinXyjoWgWKOWLX76B0rIcQSwvFCnGJTiFKtqBIIFDdZaSlZjdlVnFQsHFTC1GMfussrbI8loTWcyYGllNZaNkZad8mWW7W2tfWrQ0CyDRzojbEgq6LJo6S10ZJWEZDwj3JPldsRKnxt1UkU7hEOCqbTTGhy1PAv6vk2E3TX9ZWIlm%2FqVn11NbaNSiIgZCVpFyCEklFfUkkDhTbntAHwKjStcs%2FNChIiv3TMfp%2BH%2FxI2Y75NGO7JpqayI3MYsqwMoJgjFleykhgVc07FVhuzcBCQe6iKDYLDUVa%2FlJkT5%2BcFI6yArJxgJnOwxGn98pvZkv52sEd9uZkaTdOV7fMWwkGiUqEIWLipx%2F1fpsWimf5k%2BvRnyeEvNlNng7re8Bx10eZP0E%2Bd89fwcXD0YwASRFbiPv%2FXzMDIlxoEIrXNs33enyWNrIKoA49n%2B70PpzZwDTqe7Rv5csLISjw%2BWfn6UTlxTvD8vwLw7gZxaElzYvrbTH7kKy1RnmClmbz3ETh4JMEufC%2FT75VbPz7BbkVrekffyNfg0N9EqyUa6QT8frZf3%2BIAfqIDT0Sflo0vooHJPKmZvPdRIjyUdM8IeDjb5y1Nuh%2FNsr9jYGSl49AtzdIXjR6%2BwiGis6MR3jypsktPJu%2Btbp7GZGqStAsifCeZ1pew2sH9QSpJiUu26AgC2bx3l8Mk%2F6SS%2FWG8T94Sesn2YtR6IvRKYMB81FQNE3wLw4di2kWQ8hSGwHjICNK3LGmVCQYzBfcEwYhJ1z7gOMz8szLuJq%2BYsCwzoO9KnuHRWpzJex9XhG%2FHYSZz2J6KT8T4bvuA95dhy066vGy%2FXgtDyEpiQcBzDoiMusEJuL4j792T9M4Wlv3ZvO4hwt1hyYurHMW4J9uvb4irfc22K9vv3QvCx5utN0p9BPSPzsPq92Qt9QVRKmu2bAbuK%2FS4f9FsvXHS19GvlzvgVXGyKWpbNKh3uEflo9YTZ%2FnZvHcfCH8eZxtrtY2B7xd63CuCme67p6srmflfahUS5%2FoEXJPp974bZxujtG30FXC6yErwVOC%2Bzn59c5TYxll2Nu89aBpZ%2BcT%2FvN9TAQEffkAd%2Bk44MYkqMx7G62ppYQUZ8XKhGlgl7YKI76imrql1mOm2Qk6lZrpLZgW7mKXXE8Go5cUn7rBzmLCk48p%2BYbMo2BEnnO27YnI3MLABO9XiNJBWdkB%2FDsxfiAn0LTUjLaR1%2FhpuO0Fr2dlmUUsBD1m5D966i91Ld%2BRoX1H04eRnKZALr7PbKRWLFUw4BoE8TT8igTXBn3I%2BZPIjd1iyOoKOjDIzA%2Fr2IyXmnQVk5WnZM9A4sjp0wF0wnqwkekcRlhRIBakIwKjt4yWgJ3h6w9mrOJZLqDR6KwlZEZFdxWICkMS8IiDyCeUmfJW%2BLH2aCKatYlEQDiq1pf1RfwnHB1HAeKfSj5kIxi89ddkLN9LB8f4m%2BVxm%2BcvE2ST7ELXtzHxnIdd2W9R6miX%2FwpU8fdo0%2Fbhs%2F94snc3Qw4ynXtHqinL3Z1nCEuMODzcNZPADB9TCUgzejKCEqcOSVfVoMqOvkHOXV98injWFrKZM8zY6IKOWjxay2uuqRdu6aKQc8hUJSxqZ%2FECv3LCzHFixKpe0i369xqSZzE3Bl7F2MOcmdoKpvBibSd6TxpEVsGGvUksqkZX0j2OeYU3sNIGAnWpxMD1g4sUEf5eAy6%2BUdIDEuTFKVussWdUROcKypOacFt%2FiG0dWMvVop1o8GVlJtCcdYR3uEutZZXbp%2Bwi46nCZAScT53nE3qUjZGX3a2wkWIx7B3vUdUEmYiNymtTW2HmSwAOFmeoaLCVdDZTVE5ZIY6bMgJZdYU0jre37PbfjmRtpTzWgtayOoT8arcKT5WbpVlfHnbTm9fMpLoL5kee1Cqso9NaDf22EJVYb%2BgvP4O0e3M4tPbQ7iuA0LFPI6nX9kGkzmRvGpUEBwU1Twy98g%2Bpqbj5GVpsJNKfmxnFuUOcIt3bCEhAMfeDL4B1QbqbQRbviFGtT0y7igrE8ny3MUldW%2B7ekWXZn1vBMaK9gIFmtHexRXfWMbOsjrLGImbQ4WLETMvPzcN15cSGtgKxO04%2BYNpO5iHdcjnHLOb14Lb9dH%2FKGiOi9ccEoDDsanVrSEGGJAybOAxLSUlPcjh8so9fCCFK9MkydUlIvHlG3k5zTal6tR22HkJV%2FSG8FoeR27VHrj0p%2Bo2Qldk06rWEy42Uinswinqxekq7Lr5p0GOk4rbL7cNqFYTlircKzGr3F9C35oaimfhR1Ogf4dDPJSjINGp%2B02zBhSdAk5cH3DVshgHCWdBzpQFF0zEoyhazOcPUTBqZFVXI7FtcE81blnHbezbN91k%2BbN7Liz4eVFtXwX8LxvczEdZgYeMmZojo2XU8vjfc1qnNTc8SiwitCuYVm5pwGZHVQP02Epv9ARoihvJ8LdV2yUAlLHDeStBivOlPVRVGTlqlpF1HeEBHLLjQj53RBP5%2FlsR42jayIaPmmbtUXZoxCJywxrnNA9zKzUfsEMuNVl1T7xh56McwAFGUV0y4IZNTiiUX%2FknostYhcmL6MkdVWIrTseWmY%2FhRlRUFWIjsSwhLBHXlvGRHWmLS1FDNec0nNDZu0TE27KHbepB8lfUsWtpy4mFyjfmW%2Fzu%2FlNj1kElmxzNJkdA3l3LWN4lOqfWSEJcpk806HsM400qIR1TF4Mz1fCtBay0xNu6gVh7jXDzvnNNvHc%2BBoWSRzZtx9r9Y%2BISufcd1wzr232ja11gvlLWE5pYHhDKM2uAx%2BDafozZkB%2FsNyfldbfuHdfKpL3hCBjMoR88E%2FYeLnqsUhCfXkr%2Fp05RXkB6ZRe9tX8zm%2Bo4dNIivBJGqyEh2REpYoKOTcdRpm7ZEGYBazHsqu4vfX23kl7WLKIW%2BQmM6pV0Yc2zFj3VBP2%2FsL3W3nAvh2HG2s1yYi%2BoAkITdCWvP7%2BI%2BUo4cc4NR67YhjOyZ8LMqRVdHnSP8SFpXIsWPAW%2BL4WA%2BCO7480eeM3QzVWcjR9lr8CHLEPG%2BLaWkXmJjQam6ifF05px15vgDQGx3CibX0l1jXZXi%2Bg6VD3e7DzbAz8hFW0YnAIcJiMMzZH5BwCkMPjXbEoqeVj8HseTPJShJaj15fioiDMkYkD2ArIx3d1SAZ2fO2BD88VaqRPuJAbzKNrEBY3CyyEqibRliibLDH3SAOMlB2zeYq4x%2BbatIBpSNWQ1rFtAvTRlaSIxYsO0zExwRGSCvn3iB1jrmW4IIghp63pZr0rfY8z5U%2BAkLyVrctE6PgHiYsDu7pMnWiKG4qYYkD4iD7vAgMY3atkY4oHVI6ZrkgBWRlZtpFVTliJuecVkrfGiOrjSaRldy7cg83m6zk3mo6YYnSod62p9jnywwkrY2lSKuYI0bA7HKElsTyWrfOknwy0xLlJe9P8v9KkVZm9UjGgd5IhOlJjG8pm5mxX%2B5duYdLXY%2B6rCWEJU4VlrcVxHEBIGonmyVfOqZ0UOmoRZ0yk9mXHDHDyApEf1dPQutoGzJqN2aJbUBad%2FPhH6SOvpFLyCFJYDeKrHyoBXLvFvt3s49Ne0tYzrH5q%2Fki19FPGDVkBg744JUM51cO8%2BdMmskscQwjoTXbr28D%2BKvl%2BkUiyxn%2F5jv0BdL%2BbHLoU4n0oZzRjH0a6tLhHG0tV6UZ5S0nLHHSyNe9zYheC3SEmSNmYs5pC0ISuUqfsQdQC4Zy9GzkyiZREAvCEhszeT5PpggY9dp3EvCTdDmqHDHJOXUIdyUJi1TZWudcw6gwig1hiYNCWjT6%2Brfh9IeoAEuj3KhzxExMlDeinzB2g9X8wV7aERd%2FYkVYAoqJSaFxCXY9dkRNVkWbTEyUL%2FqW0OMu%2BCoTJ7ISHGNHWGKUictuJLTTaiZcU%2Bh2H2iG%2FZkB7ypi3AdANUOf1VEaAVlGKcwVSUprqa80loQlrpi6sFl9YWpBqybniBU9DHJOGQ9Z0ioi0txjVGu%2BheVFy%2BZhTeaALJIni%2BXJSp%2BT1bXXQ0ZA8j2bnCNW9EDy0nzClUblnBadi%2FlxbFXd0BeoDNPt2I6wik4Gs8QP6SHjJl4WHYzZUXLECFjSirSL8VBk%2B71FDDxMQMu23Bpvj%2Bnnzd5spV48YzvCKjokGz84pC4CI5K11It67FFmhLYuR2wi%2FkbmnE50Mi7fGS%2FKPRb1JithuBv7EVbRSVN3wy361%2BpjkCLl88JWpl2UwkDSnCTFBYSppa7bsgYRELKaoua2epfzar2I%2FQir6IgAKsDKNvLFMnsMCQHGvlbniJXzxMSc03K%2BNrtc7qUkkZXgk5gRVjGYwaJp2isEi6gVC%2B2xfgRGyaozDmkXlZyQVTAU9JOG5ZxWcjnSawyua9XUSI2qQnjiCEt8GttpZrMlrSoiXKFKnHLEKph5%2BJLNOT0MRUMnDN7uwe3c0kO7GxLUgsaJJCzByW6P1WBviVmOWLXe2PStapEqXU%2FIar%2FndjxzI%2B0pXSPepYl5hjURRvl1EOBlv7iJ1%2Bz3SRHYJTlitW6eManUJlQIbGY1H5LnZj81ITC2t2JiyUqcTewIqxgp2eJ9JnlPOqCyyxMX69pjgMAuHFLzwtoItlWY2pzT2pD3wVt3sXtp2LtX12ZF47UTO8Iqui4BOHTAXSABKZbZY2kEJO3CBLIS74Kk3ENqXuBTaXdt6REECnKPJJ2sxJ3Ej7CKMblwJU%2BfNk0%2FLqvUFMvs8QgCY2kX7ZLydKQ0%2BWdjOafDRDg9%2Bd5E4kHhl5667IUbyYhNX4whLAn12at46qA5Wb8AAAVoSURBVDuVfowIl0QS%2BoQKTUraRb3wBulbsm6%2BJa2jIGTGU69odYUpZCXOJf4v4fgISWD2ukpy0DaML0%2F1eYLSLuqNU5C%2BNVVdJMRcrwzT2sk9IPeCSWQlMTKKsMShbV00gp1KNmu1pDWWdrGpm4xf8cLmnB6h3KDv71SLg3vhSLERZ8YRlkSlsIK8gLQYDxsRpTqcSGLaRR1uHtVEiDnt6VssfX6nWhzcA0ehY8YXo55hHROS9awyu%2FR9BFx1zDWDC5KadhFWSIL0Lc%2FbEmwnH5bQBMhh4IHCTHUNlpJOgLl1mWg2YQkkzJTt1%2BtAuLYuhBLWKMlpF2FCnbqcU8a9gz3qOhBxmDjGTZb5hCWIp4S0kp52EfbNkZr0rZSQlfQPI59hHdPxiTj49WGsPeaaIQUmpF2EHYpUpG8x1qZhZFXsG%2BkYYRW9DfY%2B9FYToXdcUeJPTUm7iCoQpqZvMaOvkHOXR4VbHOWmY4Q1DnkJsAR6XFHST41Ju4gqECambzHznWkjK%2BkfqRthFW%2BKTH7kDiK6tfg9iUcTZzJHGQdT0rdGyarttiixiqvs1BKWBCQzoG8n5hVxDU4lu4SsZCaziZMDK%2Fnd6LXkp2%2FR7YM96guN4pDU9qkmLAlaJq9vJeI7khTAIO1CqSWWrOqL2vlruO0ErWULsUX1SWhNK2a6rZBTd7ZGezy0pu4Z1kTYpQMQUWIeXBZnMluymhjJ6r8H2CUsfUv6aNrJSiKc%2BhFWsZt3DuheZl5d%2FB7HYxpmMjcT98wKdjFLryfCkmbqrVWXz7hhKOcaOyWnFjwsYY1DqyPvLSPCGoohkQdk1a2uNn0m87hwNOc0xulbLFOeGV2WrI50BUtYR7AIztrz3rUOYV2sSCtFM5knhKM5X2OYCSFk5TOuG8659zYHhGRosYRVIk6ZAe8qMO6PBWmNzmTusiOrEoEKsyhGpCVkBcLVhW73gTBdNEFW6h%2B6lwpi0FEIVwNoada7THAdzLk3WLIqFaWQy%2BKTvqUtWZWPrR1hlccGHQPeEsfHehDcCtUiuZTmyYGRAFqD0Ey%2BRelbDM93sHSo203tOm6ThcmOsCogFHQcgqxeOlKhWuiXLFmFDmlNAkfTt7ip852CPkZYbMmqcqgsYVXGB4M97gb2WdaJbxJp0e2FXDrTLiYJRVMvBzFg%2FmIzlErfkj4mfa0Z%2BpKsw%2F4lrDJ6HX0jlzhEj4EwtcomNVezM5lrhizyBpFnQjAO%2BsxXDPW2PRW5MwYosIRVQxAzq0cycOhxIkyvoVlVVWUm86ZuZdIqElX5nYRKUZEWM%2FbD54WF5W2FJOAQBxstYdUYhfY8z3WgN4ZJWnYmc41BaEH10DMhGPs01KXDObI7ltcQT0tYNYBVrCqkpaCfBOH4Ylk9RzuTuR7UWtcmtEwIxj4fqnMoR8%2B2zptkaraEVWfcOvJ8AaA3OoQT6xFhZzLXg1rr2zSaCeEz9gBqgSWr%2BmJpCas%2B3IJWmTyfR9CbQDilRjGaCdfYmcw1ohaT6nWTFmM3Q3UWcrQ9Jq4kzgxLWA2GLNvHc0B6c9WkZScHNoh4PJpL%2BhYx7gOgqrRoF3yVGeylHVXWt9VKIGAJqwQotRYFpOVoedMzs2JbhgfCYjvfpiJKiblYQybELhxS8wZvpucT41xMDbUTR0MIjPxqakfN9X3%2BaVlxjN0%2B80JLVmURStwFmZVO4EWjz6VKmy%2B7cEvfsGRVGp9aS%2B0Iq1bEJqnfPqC7iP1bHNB7pCozXiOiVXuUk9%2FWRb%2BbpLm9nEAEZMPWNvJ7wSwr184K4g7%2BGZi%2BVsi59yTQJWty2hBoX8vvnt%2FP56bN77T7KzHvvJtnpx2HqPz%2F%2F6omxnsqyGCHAAAAAElFTkSuQmCC%22%2F%3E%20%20%3C%2Fdefs%3E%3C%2Fsvg%3E";

var Column = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "Column",
  componentId: "sc-12atera-0"
})(["align-items:", ";color:", ";display:", ";flex-direction:column;flex-grow:", ";gap:", ";grid-auto-flow:row;grid-template-columns:1fr;justify-content:", ";padding:", ";", ""], function (_ref) {
  var align = _ref.align;
  return align !== null && align !== void 0 ? align : 'center';
}, function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return color && theme[color];
}, function (_ref3) {
  var flex = _ref3.flex;
  return flex ? 'flex' : 'grid';
}, function (_ref4) {
  var grow = _ref4.grow;
  return grow && 1;
}, function (_ref5) {
  var gap = _ref5.gap;
  return gap && "".concat(gap, "em");
}, function (_ref6) {
  var justify = _ref6.justify;
  return justify !== null && justify !== void 0 ? justify : 'space-between';
}, function (_ref7) {
  var padded = _ref7.padded;
  return padded && '0.75em';
}, function (_ref8) {
  var css = _ref8.css;
  return css;
});

var ConnectorsContext = /*#__PURE__*/React.createContext(null);
function Provider$3(_ref) {
  var connectors = _ref.connectors,
      children = _ref.children;

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId,
      connector = _useWeb3React.connector; // The network chainId must be kept synchronized to avoid a loop when disconnecting and for a better UX.


  React.useEffect(function () {
    if (connector !== connectors.network) {
      connectors.network.activate(chainId);
    }
  }, [chainId, connector, connectors.network]);
  return /*#__PURE__*/React__default["default"].createElement(ConnectorsContext.Provider, {
    value: connectors
  }, children);
}
function useConnectors() {
  var connectors = React.useContext(ConnectorsContext);
  invariant__default["default"](connectors, 'useConnectors used without initializing the context');
  return connectors;
}

function ownKeys$j(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$j(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$j(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$j(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var WalletConnectPopup = /*#__PURE__*/function (_WalletConnect) {
  _inherits__default["default"](WalletConnectPopup, _WalletConnect);

  var _super = _createSuper$8(WalletConnectPopup);

  function WalletConnectPopup(_ref) {
    var actions = _ref.actions,
        options = _ref.options,
        defaultChainId = _ref.defaultChainId,
        timeout = _ref.timeout,
        onError = _ref.onError;

    _classCallCheck__default["default"](this, WalletConnectPopup);

    return _super.call(this, {
      actions: actions,
      options: _objectSpread$j(_objectSpread$j({}, options), {}, {
        qrcode: true
      }),
      defaultChainId: defaultChainId,
      timeout: timeout,
      onError: onError
    });
  }

  return _createClass__default["default"](WalletConnectPopup);
}(walletconnect.WalletConnect);
var WalletConnectQR = /*#__PURE__*/function (_WalletConnect2) {
  _inherits__default["default"](WalletConnectQR, _WalletConnect2);

  var _super2 = _createSuper$8(WalletConnectQR);

  function WalletConnectQR(_ref2) {
    var _this;

    var actions = _ref2.actions,
        options = _ref2.options,
        defaultChainId = _ref2.defaultChainId,
        timeout = _ref2.timeout,
        onError = _ref2.onError;

    _classCallCheck__default["default"](this, WalletConnectQR);

    _this = _super2.call(this, {
      actions: actions,
      options: _objectSpread$j(_objectSpread$j({}, options), {}, {
        qrcode: false
      }),
      defaultChainId: defaultChainId,
      timeout: timeout,
      onError: onError
    });

    _this.events.once(walletconnect.URI_AVAILABLE, function () {
      var _this$provider;

      (_this$provider = _this.provider) === null || _this$provider === void 0 ? void 0 : _this$provider.connector.on('disconnect', function () {
        _this.deactivate();
      });
    });

    _this.events.on(walletconnect.URI_AVAILABLE, /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(uri) {
        return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.svg = undefined;

                if (uri) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return QRCode__default["default"].toString(uri, {
                  // Leave a margin to increase contrast in dark mode.
                  margin: 1,
                  // Use 55*2=110 for the width to prevent distortion. The generated viewbox is "0 0 55 55".
                  width: 110,
                  type: 'svg'
                });

              case 5:
                _this.svg = _context.sent;

                _this.events.emit(WalletConnectQR.SVG_AVAILABLE, _this.svg);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass__default["default"](WalletConnectQR, [{
    key: "deactivate",
    value: function deactivate() {
      this.events.emit(walletconnect.URI_AVAILABLE);
      return _get__default["default"](_getPrototypeOf__default["default"](WalletConnectQR.prototype), "deactivate", this).call(this);
    }
  }]);

  return WalletConnectQR;
}(walletconnect.WalletConnect);

_defineProperty__default["default"](WalletConnectQR, "SVG_AVAILABLE", 'svg_available');

var _templateObject$4, _templateObject2$2, _templateObject3$1, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
var NO_WALLET_HELP_CENTER_URL = 'https://help.uniswap.org/en/articles/5391585-how-to-get-a-wallet';
var Body = material.styled(Column)(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral__default["default"](["\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(2, calc(50% - 0.5em / 2));\n  grid-template-rows: 2fr 1fr;\n  height: calc(100% - 2.5em);\n"])));
var StyledButtonContents = material.styled(Column)(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral__default["default"](["\n  gap: 0.75em;\n  justify-items: center;\n"])));
var StyledMainButton = material.styled(material.Button)(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral__default["default"](["\n  border-radius: ", "px;\n  grid-column: 1 / 3;\n  height: 100%;\n  padding: 10px;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.shape.borderRadius * 0.75;
});
var StyledMainButtonRow = material.styled(Row)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral__default["default"](["\n  grid-template-columns: repeat(2, calc(50% - 1em / 2));\n  justify-items: center;\n"])));
var StyledSmallButton = material.styled(material.Button)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral__default["default"](["\n  border-radius: ", "px;\n  height: 88px;\n  padding: 16px;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.shape.borderRadius * 0.75;
});
var StyledNoWalletText = material.styled(Subhead1)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral__default["default"](["\n  line-height: 20px;\n  white-space: pre-wrap;\n"])));
var QRCodeWrapper = material.styled('div')(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral__default["default"](["\n  height: 110px;\n  width: 110px;\n  path {\n    /* Maximize contrast: transparent in light theme, otherwise hard-coded to light theme. */\n    fill: ", ";\n  }\n"])), '#00000000');

function ButtonContents(_ref3) {
  var walletName = _ref3.walletName,
      logoSrc = _ref3.logoSrc,
      caption = _ref3.caption;
  return /*#__PURE__*/React__default["default"].createElement(StyledButtonContents, null, /*#__PURE__*/React__default["default"].createElement("img", {
    src: logoSrc,
    alt: walletName,
    width: 26
  }), /*#__PURE__*/React__default["default"].createElement(Subhead1, null, walletName), caption && /*#__PURE__*/React__default["default"].createElement(Caption, {
    color: "secondary"
  }, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "{caption}",
    values: {
      caption: caption
    }
  })));
}

function WalletConnectButton(_ref4) {
  var walletName = _ref4.walletName,
      logoSrc = _ref4.logoSrc,
      walletConnect = _ref4.walletConnectQR,
      onClick = _ref4.onClick;

  var _useState = React.useState(walletConnect.svg),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      svg = _useState2[0],
      setSvg = _useState2[1];

  React.useEffect(function () {
    if (!svg) walletConnect.activate();
    walletConnect.events.on(WalletConnectQR.SVG_AVAILABLE, setSvg);
    return function () {
      walletConnect.events.off(WalletConnectQR.SVG_AVAILABLE, setSvg);
    };
  }, [svg, walletConnect]);
  return /*#__PURE__*/React__default["default"].createElement(StyledMainButton, {
    onClick: onClick,
    variant: "outlined"
  }, /*#__PURE__*/React__default["default"].createElement(StyledMainButtonRow, null, /*#__PURE__*/React__default["default"].createElement(ButtonContents, {
    logoSrc: logoSrc,
    walletName: walletName,
    caption: 'Scan to connect your wallet. Works with most wallets.'
  }), svg && /*#__PURE__*/React__default["default"].createElement(QRCodeWrapper, {
    dangerouslySetInnerHTML: {
      __html: svg
    }
  })));
}

function MetaMaskButton(_ref5) {
  var walletName = _ref5.walletName,
      logoSrc = _ref5.logoSrc,
      onClick = _ref5.onClick;
  return /*#__PURE__*/React__default["default"].createElement(StyledSmallButton, {
    onClick: onClick,
    variant: "outlined"
  }, /*#__PURE__*/React__default["default"].createElement(ButtonContents, {
    logoSrc: logoSrc,
    walletName: walletName
  }));
}

function NoWalletButton() {
  return /*#__PURE__*/React__default["default"].createElement(StyledSmallButton, {
    onClick: function onClick() {
      return window.open(NO_WALLET_HELP_CENTER_URL);
    },
    variant: "outlined"
  }, /*#__PURE__*/React__default["default"].createElement(StyledNoWalletText, null, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "I don't have a wallet"
  })));
}

function ConnectWalletDialog() {
  var connectors = useConnectors();
  var onActivate = React.useCallback( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(connector) {
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return connector.activate();

            case 3:
              _context.next = 7;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));

    return function (_x) {
      return _ref6.apply(this, arguments);
    };
  }(), []);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Header, {
    title: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Connect wallet"
    })
  }), /*#__PURE__*/React__default["default"].createElement(Body, {
    align: "stretch",
    padded: true
  }, /*#__PURE__*/React__default["default"].createElement(WalletConnectButton, {
    walletName: "WalletConnect",
    logoSrc: WALLETCONNECT_ICON_URL,
    walletConnectQR: connectors.walletConnectQR,
    onClick: function onClick() {
      return onActivate(connectors.walletConnect);
    }
  }), /*#__PURE__*/React__default["default"].createElement(MetaMaskButton, {
    walletName: "MetaMask",
    logoSrc: METAMASK_ICON_URL,
    onClick: function onClick() {
      return onActivate(connectors.metaMask);
    }
  }), /*#__PURE__*/React__default["default"].createElement(NoWalletButton, null)));
}

var _templateObject$3;
var WalletButton = material.styled(material.Button)(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral__default["default"](["\n  filter: none;\n  visibility: ", ";\n"])), function (_ref) {
  var hidden = _ref.hidden;
  return hidden ? 'hidden' : 'visible';
});
function ConnectWallet(_ref2) {
  var disabled = _ref2.disabled;

  // Opens a dialog that initiates own wallet connection flow
  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var onClose = function onClose() {
    return setOpen(false);
  };

  var onConnectWalletClick = useConditionalHandler(utils.useAtomValue(onConnectWalletClickAtom));
  var onClick = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = setOpen;
            _context.next = 3;
            return onConnectWalletClick();

          case 3:
            _context.t1 = _context.sent;
            (0, _context.t0)(_context.t1);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [onConnectWalletClick]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(WalletButton, {
    hidden: disabled,
    onClick: onClick,
    color: "secondary",
    "data-testid": "connect-wallet"
  }, /*#__PURE__*/React__default["default"].createElement(Caption, null, /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.5
  }, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Connect wallet"
  })))), open && /*#__PURE__*/React__default["default"].createElement(Dialog, {
    onClose: onClose
  }, /*#__PURE__*/React__default["default"].createElement(ConnectWalletDialog, null)));
}

function SelectButton(props) {
  var onClick = props.onClick,
      disabled = props.disabled,
      width = props.width,
      height = props.height,
      primary = props.primary,
      children = props.children,
      selected = props.selected;
  var theme = material.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(material.ButtonBase, {
    onClick: onClick,
    disabled: disabled,
    sx: {
      width: width || '100%',
      height: height || 52,
      backgroundColor: primary ? theme.palette.primary.main : theme.palette.background.paper,
      color: selected ? theme.palette.text.primary : theme.palette.text.primary + '80',
      borderRadius: 1,
      fontSize: 16,
      fontWeight: 400,
      transition: '.3s',
      padding: '0 15.67px 0 20px',
      position: 'relative',
      '& *': {
        zIndex: 2
      },
      '&:hover, :active': {
        borderRadius: '10px',
        background: theme.gradient.gradient1 && theme.palette.primary.main === '#1F9898' ? theme.gradient.gradient1 : theme.palette.primary.main,
        backgroundClip: 'padding-box',
        zIndex: 1
      },
      '&:before': {
        background: theme.palette.background.paper,
        position: 'absolute',
        borderRadius: '9px',
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        content: '""',
        pointerEvents: 'none !important'
      },
      display: 'flex',
      justifyContent: 'space-between',
      '&.MuiButtonBase-root.Mui-disabled': {
        opacity: theme.palette.action.disabledOpacity
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, null, children), /*#__PURE__*/React__default["default"].createElement(ExpandMoreIcon__default["default"], null));
}

var WETH = "https://bscscan.com/token/images/ethereum_32.png";
var DAI = "https://raw.githubusercontent.com/sushiswap/icons/master/token/dai.jpg";
var USDC = "https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg";
var FRAX = "https://etherscan.io/token/images/fraxfinance_32.png";
var sETH2 = "https://etherscan.io/token/images/stakewisestakedeth2_32.png";
var DYDX = "https://etherscan.io/token/images/dydx2_32.png";
var WBNB = "https://bscscan.com/images/svg/brands/bnb.svg?v=1.3";
var BNB = "https://bscscan.com/images/svg/brands/bnb.svg?v=1.3";
var BUSD = "https://bscscan.com/token/images/busd_32.png";
var BUSDT = "https://raw.githubusercontent.com/compound-finance/token-list/master/assets/asset_USDT.svg";
var RACA = "https://bscscan.com/token/images/radiocaca_32.png";
var MBOX = "https://bscscan.com/token/images/mobox_32.png";
var ETH = "https://bscscan.com/token/images/ethereum_32.png";
var BPAY = "https://bscscan.com/token/images/bnbpay_32.png";
var BTCB = "https://bscscan.com/token/images/btcb_32.png";
var BNX = "https://bscscan.com/token/images/binaryx_32.png";
var ALCH = "https://raw.githubusercontent.com/sushiswap/icons/master/token/alch.jpg";
var BAL = "https://raw.githubusercontent.com/sushiswap/icons/master/token/bal.jpg";
var CELR = "https://raw.githubusercontent.com/sushiswap/icons/master/token/celr.jpg";
var CREAM = "https://raw.githubusercontent.com/sushiswap/icons/master/token/cream.jpg";
var DODO = "https://raw.githubusercontent.com/sushiswap/icons/master/token/dodo.jpg";
var DXD = "https://raw.githubusercontent.com/sushiswap/icons/master/token/dxd.jpg";
var EUX = "https://raw.githubusercontent.com/sushiswap/icons/master/token/eux.jpg";
var GNO = "https://raw.githubusercontent.com/sushiswap/icons/master/token/gno.jpg";
var GRT = "https://raw.githubusercontent.com/sushiswap/icons/master/token/grt.jpg";
var SWPR = "https://raw.githubusercontent.com/sushiswap/icons/master/token/swpr.jpg";
var WOO = "https://raw.githubusercontent.com/sushiswap/icons/master/token/woo.jpg";
var sUSD = "https://raw.githubusercontent.com/sushiswap/icons/master/token/susd.jpg";
var WAVAX = "https://raw.githubusercontent.com/sushiswap/icons/master/token/avax.jpg";
var AVAX = "https://raw.githubusercontent.com/sushiswap/icons/master/token/avax.jpg";
var WBTC = "https://raw.githubusercontent.com/sushiswap/icons/master/token/btc.jpg";
var UNI = "https://etherscan.io/token/images/uniswap_32.png";
var LINK = "https://raw.githubusercontent.com/sushiswap/icons/master/token/link.jpg";
var MATIC = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0/logo.png";
var LUNA = "https://assets.coingecko.com/coins/images/13628/thumb/wluna.png?1610448334";
var AAVE = "https://raw.githubusercontent.com/sushiswap/icons/master/token/aave.jpg";
var FTT = "https://assets.coingecko.com/coins/images/9026/thumb/F.png?1609051564";
var AMP = "https://assets.coingecko.com/coins/images/12409/thumb/amp-200x200.png?1599625397";
var MKR = "https://etherscan.io/token/images/mkr-etherscan-35.png";
var COMP = "https://raw.githubusercontent.com/compound-finance/token-list/master/assets/asset_COMP.svg";
var AXS = "https://assets.coingecko.com/coins/images/13029/thumb/axie_infinity_logo.png?1604471082";
var SUSHI = "https://raw.githubusercontent.com/sushiswap/icons/master/token/sushi.jpg";
var SNX = "https://assets.coingecko.com/coins/images/3406/thumb/SNX.png?1598631139";
var YFI = "https://assets.coingecko.com/coins/images/11849/thumb/yfi-192x192.png?1598325330";
var NXM = "https://assets.coingecko.com/coins/images/11810/thumb/nexus-mutual.jpg?1594547726";
var FTM = "https://assets.coingecko.com/coins/images/4001/thumb/Fantom.png?1558015016";
var CRV = "https://assets.coingecko.com/coins/images/12124/thumb/Curve.png?1597369484";
var PERP = "https://assets.coingecko.com/coins/images/12381/thumb/token_2000x2000.png?1615791204";
var MATTER = "https://raw.githubusercontent.com/antimatter-finance/antimatter-assets/main/antimatter_new.svg";
var ASAP = "https://raw.githubusercontent.com/chainswap/chainswap-assets/main/logo_64_black.png";
var UMB = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6fc13eace26590b80cccab1ba5d51890577d83b2/logo.png";
var UMA = "https://assets.coingecko.com/coins/images/10951/thumb/UMA.png?1586307916";
var AUCTION = "https://assets.coingecko.com/coins/images/13860/thumb/1_KtgpRIJzuwfHe0Rl0avP_g.jpeg?1612412025";
var INJ = "https://assets.coingecko.com/coins/images/12882/thumb/Secondary_Symbol.png?1628233237";
var Cake = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png";
var ADA = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47/logo.png";
var ALICE = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xAC51066d7bEC65Dc4589368da368b212745d63E8/logo.png";
var ALPACA = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F/logo.png";
var ALPHA = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xa1faa113cbE53436Df28FF0aEe54275c13B40975/logo.png";
var ATA = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xA2120b9e674d3fC3875f415A7DF52e382F141225/logo.png";
var BABYDOGE = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xc748673057861a797275CD8A068AbB95A902e8de/logo.png";
var BABYEVERDOGE = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x06c4212Ae2fEa51a27A045D968E73F7E91eA5521/logo.png";
var BABYSHIBAINU = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xAECf6d1afF214feF70042740054f0f6D0Caa98Ab/logo.png";
var BELT = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f/logo.png";
var BIFI = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xCa3F508B8e4Dd382eE878A314789373D80A5190A/logo.png";
var BMON = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x08ba0619b1e7A582E0BCe5BBE9843322C954C340/logo.png";
var BOXER = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x192E9321b6244D204D4301AfA507EB29CA84D9ef/logo.png";
var BP = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xACB8f52DC63BB752a51186D1c55868ADbFfEe9C1/logo.png";
var BSCPAD = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700/logo.png";
var BSHIB = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xdeff0eE83Ba00Be152BCFf88795F1577BF5bE806/logo.png";
var BTT = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8595F9dA7b868b1822194fAEd312235E43007b49/logo.png";
var BUNNY = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51/logo.png";
var cDAI = "https://raw.githubusercontent.com/compound-finance/token-list/master/assets/ctoken_dai.svg";
var USDT = "https://raw.githubusercontent.com/compound-finance/token-list/master/assets/asset_USDT.svg";
var WFTM = "https://assets.spookyswap.finance/tokens/FTM.png";
var Aave = "https://assets.coingecko.com/coins/images/12645/large/AAVE.png";
var fUSDT = "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png";
var FBNB = "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png";
var tokenLogoUriList = {
	WETH: WETH,
	DAI: DAI,
	USDC: USDC,
	FRAX: FRAX,
	sETH2: sETH2,
	DYDX: DYDX,
	WBNB: WBNB,
	BNB: BNB,
	BUSD: BUSD,
	BUSDT: BUSDT,
	"BSC-USD": "https://bscscan.com/token/images/busdt_32.png",
	RACA: RACA,
	MBOX: MBOX,
	ETH: ETH,
	BPAY: BPAY,
	BTCB: BTCB,
	BNX: BNX,
	ALCH: ALCH,
	BAL: BAL,
	CELR: CELR,
	CREAM: CREAM,
	DODO: DODO,
	DXD: DXD,
	EUX: EUX,
	GNO: GNO,
	GRT: GRT,
	SWPR: SWPR,
	WOO: WOO,
	sUSD: sUSD,
	WAVAX: WAVAX,
	AVAX: AVAX,
	WBTC: WBTC,
	UNI: UNI,
	LINK: LINK,
	MATIC: MATIC,
	LUNA: LUNA,
	AAVE: AAVE,
	FTT: FTT,
	AMP: AMP,
	MKR: MKR,
	COMP: COMP,
	AXS: AXS,
	SUSHI: SUSHI,
	SNX: SNX,
	YFI: YFI,
	"1INCH": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x111111111117dc0aa78b770fa6a738034120c302/logo.png",
	NXM: NXM,
	FTM: FTM,
	CRV: CRV,
	PERP: PERP,
	MATTER: MATTER,
	ASAP: ASAP,
	UMB: UMB,
	UMA: UMA,
	AUCTION: AUCTION,
	INJ: INJ,
	Cake: Cake,
	ADA: ADA,
	ALICE: ALICE,
	ALPACA: ALPACA,
	ALPHA: ALPHA,
	"AMPL-BSC-MP": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xDB021b1B247fe2F1fa57e0A87C748Cc1E321F07F/logo.png",
	ATA: ATA,
	BABYDOGE: BABYDOGE,
	BABYEVERDOGE: BABYEVERDOGE,
	BABYSHIBAINU: BABYSHIBAINU,
	BELT: BELT,
	BIFI: BIFI,
	BMON: BMON,
	BOXER: BOXER,
	BP: BP,
	BSCPAD: BSCPAD,
	BSHIB: BSHIB,
	BTT: BTT,
	BUNNY: BUNNY,
	cDAI: cDAI,
	USDT: USDT,
	WFTM: WFTM,
	Aave: Aave,
	fUSDT: fUSDT,
	FBNB: FBNB
};

var ChainId;

(function (ChainId) {
  ChainId[ChainId["MAINNET"] = 1] = "MAINNET";
  ChainId[ChainId["ROPSTEN"] = 3] = "ROPSTEN";
  ChainId[ChainId["RINKEBY"] = 4] = "RINKEBY";
  ChainId[ChainId["G\xD6RLI"] = 5] = "G\xD6RLI";
  ChainId[ChainId["KOVAN"] = 42] = "KOVAN";
  ChainId[ChainId["BSC"] = 56] = "BSC";
})(ChainId || (ChainId = {}));

var NETWORK_CHAIN_ID = process.env.REACT_APP_CHAIN_ID ? parseInt(process.env.REACT_APP_CHAIN_ID) : ChainId.MAINNET;
process.env.REACT_APP_CHAIN_IDS ? process.env.REACT_APP_CHAIN_IDS.split(',').map(function (v) {
  return Number(v);
}) : [ChainId.MAINNET];
var IS_TEST_NET = !!(NETWORK_CHAIN_ID === ChainId.GÖRLI);

var ethereumLogoUrl = "data:image/png;base64,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";

var _CHAIN_NAMES_TO_IDS;

/**
 * List of all the networks supported by the Uniswap Interface
 */
exports.SupportedChainId = void 0;

(function (SupportedChainId) {
  SupportedChainId[SupportedChainId["MAINNET"] = 1] = "MAINNET";
  SupportedChainId[SupportedChainId["GOERLI"] = 5] = "GOERLI";
  SupportedChainId[SupportedChainId["SEPOLIA"] = 11155111] = "SEPOLIA";
})(exports.SupportedChainId || (exports.SupportedChainId = {}));

var ChainName;

(function (ChainName) {
  ChainName["MAINNET"] = "mainnet";
  ChainName["GOERLI"] = "goerli";
  ChainName["SEPOLIA"] = "sepolia";
})(ChainName || (ChainName = {}));

(_CHAIN_NAMES_TO_IDS = {}, _defineProperty__default["default"](_CHAIN_NAMES_TO_IDS, ChainName.MAINNET, exports.SupportedChainId.MAINNET), _defineProperty__default["default"](_CHAIN_NAMES_TO_IDS, ChainName.GOERLI, exports.SupportedChainId.GOERLI), _defineProperty__default["default"](_CHAIN_NAMES_TO_IDS, ChainName.SEPOLIA, exports.SupportedChainId.SEPOLIA), _CHAIN_NAMES_TO_IDS);
/**
 * Array of all the supported chain IDs
 */

var ALL_SUPPORTED_CHAIN_IDS = Object.values(exports.SupportedChainId).filter(function (id) {
  return typeof id === 'number';
});
[exports.SupportedChainId.MAINNET // SupportedChainId.POLYGON,
// SupportedChainId.OPTIMISM,
// SupportedChainId.ARBITRUM_ONE,
// SupportedChainId.CELO,
];
/**
 * All the chain IDs that are running the Ethereum protocol.
 */

[exports.SupportedChainId.MAINNET, // SupportedChainId.ROPSTEN,
// SupportedChainId.RINKEBY,
exports.SupportedChainId.GOERLI, // SupportedChainId.KOVAN,
// SupportedChainId.POLYGON,
// SupportedChainId.POLYGON_MUMBAI,
// SupportedChainId.CELO,
// SupportedChainId.CELO_ALFAJORES,
exports.SupportedChainId.SEPOLIA];

/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
var L2_CHAIN_IDS = [// SupportedChainId.ARBITRUM_ONE,
  // SupportedChainId.ARBITRUM_RINKEBY,
  // SupportedChainId.OPTIMISM,
  // SupportedChainId.OPTIMISTIC_KOVAN,
];

var _CHAIN_INFO;
var NetworkType;

(function (NetworkType) {
  NetworkType[NetworkType["L1"] = 0] = "L1";
  NetworkType[NetworkType["L2"] = 1] = "L2";
})(NetworkType || (NetworkType = {}));

// } & //   readonly [chainId in SupportedL2ChainId]: L2ChainInfo //   {
var CHAIN_INFO = (_CHAIN_INFO = {}, _defineProperty__default["default"](_CHAIN_INFO, exports.SupportedChainId.MAINNET, {
  networkType: NetworkType.L1,
  explorer: 'https://etherscan.io/',
  label: 'Ethereum',
  logoUrl: ethereumLogoUrl,
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  }
}), _defineProperty__default["default"](_CHAIN_INFO, exports.SupportedChainId.GOERLI, {
  networkType: NetworkType.L1,
  explorer: 'https://goerli.etherscan.io/',
  label: 'Görli',
  logoUrl: ethereumLogoUrl,
  nativeCurrency: {
    name: 'Görli Ether',
    symbol: 'görETH',
    decimals: 18
  }
}), _defineProperty__default["default"](_CHAIN_INFO, exports.SupportedChainId.SEPOLIA, {
  networkType: NetworkType.L1,
  explorer: 'https://sepolia.etherscan.io/',
  label: 'Sepolia',
  logoUrl: ethereumLogoUrl,
  nativeCurrency: {
    name: 'Sepolia Ether',
    symbol: 'SepoliaETH',
    decimals: 18
  }
}), _CHAIN_INFO);

/**
 * Overloaded method for returning ChainInfo given a chainID
 * Return type varies depending on input type:
 * number | undefined -> returns chaininfo | undefined
 * SupportedChainId -> returns L1ChainInfo | L2ChainInfo
 * SupportedL1ChainId -> returns L1ChainInfo
 * SupportedL2ChainId -> returns L2ChainInfo
 */
function getChainInfo(chainId) {
  if (chainId) {
    var _CHAIN_INFO$chainId;

    return (_CHAIN_INFO$chainId = CHAIN_INFO[chainId]) !== null && _CHAIN_INFO$chainId !== void 0 ? _CHAIN_INFO$chainId : undefined;
  }

  return undefined;
}
CHAIN_INFO[exports.SupportedChainId.MAINNET];

function ownKeys$i(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$i(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$i(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$i(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var axiosInstance = axios__default["default"].create({
  baseURL: 'https://dualinvest-testapi.antimatter.finance/web/',
  timeout: 10000,
  headers: {
    'content-type': 'application/json',
    accept: 'application/json'
  }
});
var axiosToken1155Instance = axios__default["default"].create({
  baseURL: 'https://bsc-mainnet.blockvision.org/v1/2EL8whf4KemeNi9Pr3b1hPshJoA',
  timeout: 10000,
  headers: {
    'content-type': 'application/json',
    accept: 'application/json'
  }
});
var Axios = {
  get: function get(url) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return axiosInstance.get(url, {
      params: params
    });
  },
  post: function post(url, data) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var config = arguments.length > 3 ? arguments[3] : undefined;
    var isFormData = arguments.length > 4 ? arguments[4] : undefined;
    return axiosInstance.post(url, isFormData ? qs__default["default"].stringify(data) : data, _objectSpread$i({
      params: params
    }, config));
  },
  getMetadata: function getMetadata(contractAddress, tokenId) {
    return axiosToken1155Instance.post('', {
      jsonrpc: '2.0',
      method: 'nft_metadata',
      params: {
        tokenId: tokenId + '',
        contractAddress: contractAddress
      }
    });
  }
};

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Represents an ERC721 token with a unique address and some metadata.
 */

var Token721 = /*#__PURE__*/function (_Token) {
  _inherits__default["default"](Token721, _Token);

  var _super = _createSuper$7(Token721);

  function Token721(chainId, address, tokenId, metadata) {
    var _metadata$name, _metadata$symbol;

    var _this;

    _classCallCheck__default["default"](this, Token721);

    _this = _super.call(this, chainId, address, 0, metadata === null || metadata === void 0 ? void 0 : metadata.symbol, metadata === null || metadata === void 0 ? void 0 : metadata.name);
    _this.tokenId = tokenId === '' ? undefined : tokenId;
    _this.is721 = true;
    _this.uri = metadata === null || metadata === void 0 ? void 0 : metadata.uri;
    _this.name = (_metadata$name = metadata === null || metadata === void 0 ? void 0 : metadata.name) !== null && _metadata$name !== void 0 ? _metadata$name : 'ERC721';
    _this.symbol = (_metadata$symbol = metadata === null || metadata === void 0 ? void 0 : metadata.symbol) !== null && _metadata$symbol !== void 0 ? _metadata$symbol : 'NFT';

    if ((!metadata || !metadata.uri) && !IS_TEST_NET) {
      if (tokenId) {
        Axios.getMetadata(address, tokenId).then(function (r) {
          var metadata = r.data.result.metadata;
          _this.uri = metadata.image;
          _this.name = metadata.name;
        }).catch(function (e) {
          console.error(e);
        });
      }
    }

    return _this;
  }
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */


  _createClass__default["default"](Token721, [{
    key: "equals",
    value: function equals(other) {
      // short circuit on reference equality
      if (this === other) {
        return true;
      }

      return this.chainId === other.chainId && this.address.toLocaleLowerCase() === other.address.toLocaleLowerCase() && this.tokenId === other.tokenId;
    }
  }, {
    key: "setUri",
    value: function setUri(uri) {
      this.uri = uri;
    }
  }]);

  return Token721;
}(sdk.Token);

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Represents an ERC1155 token with a unique address and some metadata.
 */

var Token1155 = /*#__PURE__*/function (_Token) {
  _inherits__default["default"](Token1155, _Token);

  var _super = _createSuper$6(Token1155);

  function Token1155(chainId, address, tokenId, metadata) {
    var _metadata$name, _metadata$symbol;

    var _this;

    _classCallCheck__default["default"](this, Token1155);

    _this = _super.call(this, chainId, address, 0, metadata === null || metadata === void 0 ? void 0 : metadata.symbol, metadata === null || metadata === void 0 ? void 0 : metadata.name);
    _this.tokenId = tokenId + '';
    _this.is1155 = true;
    _this.uri = metadata === null || metadata === void 0 ? void 0 : metadata.uri;
    _this.name = (_metadata$name = metadata === null || metadata === void 0 ? void 0 : metadata.name) !== null && _metadata$name !== void 0 ? _metadata$name : 'ERC1155';
    _this.symbol = (_metadata$symbol = metadata === null || metadata === void 0 ? void 0 : metadata.symbol) !== null && _metadata$symbol !== void 0 ? _metadata$symbol : 'NFT';

    if (!metadata && !IS_TEST_NET) {
      Axios.getMetadata(address, tokenId).then(function (r) {
        var metadata = r.data.result.metadata;
        _this.uri = metadata.image;
        _this.name = metadata.name;
        _this.symbol = 'NFT';
      }).catch(function (e) {
        console.error(e);
      });
    }

    return _this;
  }
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */


  _createClass__default["default"](Token1155, [{
    key: "equals",
    value: function equals(other) {
      // short circuit on reference equality
      if (this === other) {
        return true;
      }

      return this.chainId === other.chainId && this.address.toLocaleLowerCase() === other.address.toLocaleLowerCase() && this.tokenId === other.tokenId;
    }
  }, {
    key: "setUri",
    value: function setUri(uri) {
      this.uri = uri;
    }
  }]);

  return Token1155;
}(sdk.Token);

function hexToUint8Array(hex) {
  hex = hex.startsWith('0x') ? hex.substr(2) : hex;
  if (hex.length % 2 !== 0) throw new Error('hex must have length that is multiple of 2');
  var arr = new Uint8Array(hex.length / 2);

  for (var i = 0; i < arr.length; i++) {
    arr[i] = parseInt(hex.substr(i * 2, 2), 16);
  }

  return arr;
}
var UTF_8_DECODER = new TextDecoder('utf-8');
/**
 * Returns the URI representation of the content hash for supported codecs
 * @param contenthash to decode
 */

function contenthashToUri(contenthash) {
  var data = hexToUint8Array(contenthash);
  var codec = multicodec.getNameFromData(data);

  switch (codec) {
    case 'ipfs-ns':
      {
        var unprefixedData = multicodec.rmPrefix(data);
        var cid = new CID__default["default"](unprefixedData);
        return "ipfs://".concat(multihashes.toB58String(cid.multihash));
      }

    case 'ipns-ns':
      {
        var _unprefixedData = multicodec.rmPrefix(data);

        var _cid = new CID__default["default"](_unprefixedData);

        var multihash = multihashes.decode(_cid.multihash);

        if (multihash.name === 'identity') {
          return "ipns://".concat(UTF_8_DECODER.decode(multihash.digest).trim());
        } else {
          return "ipns://".concat(multihashes.toB58String(_cid.multihash));
        }
      }

    default:
      throw new Error("Unrecognized codec: ".concat(codec));
  }
}

var ENS_NAME_REGEX = /^(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+)eth(\/.*)?$/;
function parseENSAddress(ensAddress) {
  var match = ensAddress.match(ENS_NAME_REGEX);
  if (!match) return undefined;
  return {
    ensName: "".concat(match[1].toLowerCase(), "eth"),
    ensPath: match[4]
  };
}

/**
 * Given a URI that may be ipfs, ipns, http, https, ar, or data protocol, return the fetch-able http(s) URLs for the same content
 * @param uri to convert to fetch-able http url
 */
function uriToHttp(uri) {
  var _uri$match, _uri$match2, _uri$match3;

  var protocol = uri.split(':')[0].toLowerCase();

  switch (protocol) {
    case 'data':
      return [uri];

    case 'https':
      return [uri];

    case 'http':
      return ['https' + uri.substr(4), uri];

    case 'ipfs':
      var hash = (_uri$match = uri.match(/^ipfs:(\/\/)?(.*)$/i)) === null || _uri$match === void 0 ? void 0 : _uri$match[2];
      return ["https://cloudflare-ipfs.com/ipfs/".concat(hash, "/"), "https://ipfs.io/ipfs/".concat(hash, "/")];

    case 'ipns':
      var name = (_uri$match2 = uri.match(/^ipns:(\/\/)?(.*)$/i)) === null || _uri$match2 === void 0 ? void 0 : _uri$match2[2];
      return ["https://cloudflare-ipfs.com/ipns/".concat(name, "/"), "https://ipfs.io/ipns/".concat(name, "/")];

    case 'ar':
      var tx = (_uri$match3 = uri.match(/^ar:(\/\/)?(.*)$/i)) === null || _uri$match3 === void 0 ? void 0 : _uri$match3[2];
      return ["https://arweave.net/".concat(tx)];

    default:
      return [];
  }
}

function isVisibilityStateSupported() {
  return 'visibilityState' in document;
}

function isWindowVisible() {
  return !isVisibilityStateSupported() || document.visibilityState !== 'hidden';
}
/**
 * Returns whether the window is currently visible to the user.
 */


function useIsWindowVisible() {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  var listener = React.useCallback(function () {
    setFocused(isWindowVisible());
  }, [setFocused]);
  React.useEffect(function () {
    if (!isVisibilityStateSupported()) return undefined;
    setFocused(function (focused) {
      return isWindowVisible();
    });
    document.addEventListener('visibilitychange', listener);
    return function () {
      document.removeEventListener('visibilitychange', listener);
    };
  }, [listener]);
  return focused;
}

var MISSING_PROVIDER = Symbol();
var BlockNumberContext = /*#__PURE__*/React.createContext(MISSING_PROVIDER);

function useBlockNumberContext() {
  var blockNumber = React.useContext(BlockNumberContext);

  if (blockNumber === MISSING_PROVIDER) {
    throw new Error('BlockNumber hooks must be wrapped in a <BlockNumberProvider>');
  }

  return blockNumber;
}
/** Requires that BlockUpdater be installed in the DOM tree. */


function useBlockNumber() {
  return useBlockNumberContext().value;
}
function useFastForwardBlockNumber() {
  return useBlockNumberContext().fastForward;
}
function BlockNumberProvider(_ref) {
  var children = _ref.children;

  var _useWeb3React = core.useWeb3React(),
      activeChainId = _useWeb3React.chainId,
      provider = _useWeb3React.provider;

  var _useState = React.useState({
    chainId: activeChainId
  }),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      _useState2$ = _useState2[0],
      chainId = _useState2$.chainId,
      block = _useState2$.block,
      setChainBlock = _useState2[1];

  var onBlock = React.useCallback(function (block) {
    setChainBlock(function (chainBlock) {
      if (chainBlock.chainId === activeChainId) {
        if (!chainBlock.block || chainBlock.block < block) {
          return {
            chainId: activeChainId,
            block: block
          };
        }
      }

      return chainBlock;
    });
  }, [activeChainId, setChainBlock]);
  var windowVisible = useIsWindowVisible();
  React.useEffect(function () {
    if (provider && activeChainId && windowVisible) {
      // If chainId hasn't changed, don't clear the block. This prevents re-fetching still valid data.
      setChainBlock(function (chainBlock) {
        return chainBlock.chainId === activeChainId ? chainBlock : {
          chainId: activeChainId
        };
      });
      var stale = false;
      provider.getBlockNumber().then(function (block) {
        if (stale) return;
        onBlock(block);
      }).catch(function (error) {
        if (stale) return;
        console.error("Failed to get block number for chainId ".concat(activeChainId), error);
      });
      provider.on('block', onBlock);
      return function () {
        stale = true;
        provider.off('block', onBlock);
      };
    }

    return undefined;
  }, [activeChainId, provider, onBlock, setChainBlock, windowVisible]);
  var value = React.useMemo(function () {
    return {
      value: chainId === activeChainId ? block : undefined,
      fastForward: function fastForward(block) {
        return setChainBlock({
          chainId: activeChainId,
          block: block
        });
      }
    };
  }, [activeChainId, block, chainId]);
  return /*#__PURE__*/React__default["default"].createElement(BlockNumberContext.Provider, {
    value: value
  }, children);
}

var _format = "hh-sol-artifact-1";
var contractName = "UniswapInterfaceMulticall";
var sourceName = "contracts/lens/UniswapInterfaceMulticall.sol";
var abi$1 = [
	{
		inputs: [
		],
		name: "getCurrentBlockTimestamp",
		outputs: [
			{
				internalType: "uint256",
				name: "timestamp",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "addr",
				type: "address"
			}
		],
		name: "getEthBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "balance",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "gasLimit",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct UniswapInterfaceMulticall.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "multicall",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			},
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "uint256",
						name: "gasUsed",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct UniswapInterfaceMulticall.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];
var bytecode$1 = "0x608060405234801561001057600080fd5b50610567806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630f28c97d146100465780631749e1e3146100645780634d2301cc14610085575b600080fd5b61004e610098565b60405161005b919061041f565b60405180910390f35b6100776100723660046102a7565b61009c565b60405161005b929190610428565b61004e610093366004610286565b610220565b4290565b8051439060609067ffffffffffffffff811180156100b957600080fd5b506040519080825280602002602001820160405280156100f357816020015b6100e061023a565b8152602001906001900390816100d85790505b50905060005b835181101561021a57600080600086848151811061011357fe5b60200260200101516000015187858151811061012b57fe5b60200260200101516020015188868151811061014357fe5b60200260200101516040015192509250925060005a90506000808573ffffffffffffffffffffffffffffffffffffffff1685856040516101839190610403565b60006040518083038160008787f1925050503d80600081146101c1576040519150601f19603f3d011682016040523d82523d6000602084013e6101c6565b606091505b509150915060005a8403905060405180606001604052808415158152602001828152602001838152508989815181106101fb57fe5b60200260200101819052505050505050505080806001019150506100f9565b50915091565b73ffffffffffffffffffffffffffffffffffffffff163190565b604051806060016040528060001515815260200160008152602001606081525090565b803573ffffffffffffffffffffffffffffffffffffffff8116811461028157600080fd5b919050565b600060208284031215610297578081fd5b6102a08261025d565b9392505050565b600060208083850312156102b9578182fd5b823567ffffffffffffffff808211156102d0578384fd5b818501915085601f8301126102e3578384fd5b8135818111156102ef57fe5b6102fc8485830201610506565b81815284810190848601875b848110156103f457813587017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0606081838f03011215610346578a8bfd5b60408051606081018181108b8211171561035c57fe5b8252610369848d0161025d565b8152818401358c82015260608401358a811115610384578d8efd5b8085019450508e603f850112610398578c8dfd5b8b8401358a8111156103a657fe5b6103b68d85601f84011601610506565b93508084528f838287010111156103cb578d8efd5b808386018e86013783018c018d9052908101919091528552509287019290870190600101610308565b50909998505050505050505050565b6000825161041581846020870161052a565b9190910192915050565b90815260200190565b600060408083018584526020828186015281865180845260609350838701915083838202880101838901875b838110156104f6578983037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa001855281518051151584528681015187850152880151888401889052805188850181905260806104b582828801858c0161052a565b96880196601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01694909401909301925090850190600101610454565b50909a9950505050505050505050565b60405181810167ffffffffffffffff8111828210171561052257fe5b604052919050565b60005b8381101561054557818101518382015260200161052d565b83811115610554576000848401525b5050505056fea164736f6c6343000706000a";
var deployedBytecode = "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80630f28c97d146100465780631749e1e3146100645780634d2301cc14610085575b600080fd5b61004e610098565b60405161005b919061041f565b60405180910390f35b6100776100723660046102a7565b61009c565b60405161005b929190610428565b61004e610093366004610286565b610220565b4290565b8051439060609067ffffffffffffffff811180156100b957600080fd5b506040519080825280602002602001820160405280156100f357816020015b6100e061023a565b8152602001906001900390816100d85790505b50905060005b835181101561021a57600080600086848151811061011357fe5b60200260200101516000015187858151811061012b57fe5b60200260200101516020015188868151811061014357fe5b60200260200101516040015192509250925060005a90506000808573ffffffffffffffffffffffffffffffffffffffff1685856040516101839190610403565b60006040518083038160008787f1925050503d80600081146101c1576040519150601f19603f3d011682016040523d82523d6000602084013e6101c6565b606091505b509150915060005a8403905060405180606001604052808415158152602001828152602001838152508989815181106101fb57fe5b60200260200101819052505050505050505080806001019150506100f9565b50915091565b73ffffffffffffffffffffffffffffffffffffffff163190565b604051806060016040528060001515815260200160008152602001606081525090565b803573ffffffffffffffffffffffffffffffffffffffff8116811461028157600080fd5b919050565b600060208284031215610297578081fd5b6102a08261025d565b9392505050565b600060208083850312156102b9578182fd5b823567ffffffffffffffff808211156102d0578384fd5b818501915085601f8301126102e3578384fd5b8135818111156102ef57fe5b6102fc8485830201610506565b81815284810190848601875b848110156103f457813587017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0606081838f03011215610346578a8bfd5b60408051606081018181108b8211171561035c57fe5b8252610369848d0161025d565b8152818401358c82015260608401358a811115610384578d8efd5b8085019450508e603f850112610398578c8dfd5b8b8401358a8111156103a657fe5b6103b68d85601f84011601610506565b93508084528f838287010111156103cb578d8efd5b808386018e86013783018c018d9052908101919091528552509287019290870190600101610308565b50909998505050505050505050565b6000825161041581846020870161052a565b9190910192915050565b90815260200190565b600060408083018584526020828186015281865180845260609350838701915083838202880101838901875b838110156104f6578983037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa001855281518051151584528681015187850152880151888401889052805188850181905260806104b582828801858c0161052a565b96880196601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01694909401909301925090850190600101610454565b50909a9950505050505050505050565b60405181810167ffffffffffffffff8111828210171561052257fe5b604052919050565b60005b8381101561054557818101518382015260200161052d565b83811115610554576000848401525b5050505056fea164736f6c6343000706000a";
var linkReferences = {
};
var deployedLinkReferences = {
};
var UniswapInterfaceMulticallJson = {
	_format: _format,
	contractName: contractName,
	sourceName: sourceName,
	abi: abi$1,
	bytecode: bytecode$1,
	deployedBytecode: deployedBytecode,
	linkReferences: linkReferences,
	deployedLinkReferences: deployedLinkReferences
};

var ENS_PUBLIC_RESOLVER_ABI = [
	{
		inputs: [
			{
				internalType: "contract ENS",
				name: "_ens",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "contentType",
				type: "uint256"
			}
		],
		name: "ABIChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "address",
				name: "a",
				type: "address"
			}
		],
		name: "AddrChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "coinType",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "newAddress",
				type: "bytes"
			}
		],
		name: "AddressChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "target",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "isAuthorised",
				type: "bool"
			}
		],
		name: "AuthorisationChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "hash",
				type: "bytes"
			}
		],
		name: "ContenthashChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "name",
				type: "bytes"
			},
			{
				indexed: false,
				internalType: "uint16",
				name: "resource",
				type: "uint16"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "record",
				type: "bytes"
			}
		],
		name: "DNSRecordChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "name",
				type: "bytes"
			},
			{
				indexed: false,
				internalType: "uint16",
				name: "resource",
				type: "uint16"
			}
		],
		name: "DNSRecordDeleted",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "DNSZoneCleared",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "bytes4",
				name: "interfaceID",
				type: "bytes4"
			},
			{
				indexed: false,
				internalType: "address",
				name: "implementer",
				type: "address"
			}
		],
		name: "InterfaceChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "string",
				name: "name",
				type: "string"
			}
		],
		name: "NameChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "bytes32",
				name: "x",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "bytes32",
				name: "y",
				type: "bytes32"
			}
		],
		name: "PubkeyChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "string",
				name: "indexedKey",
				type: "string"
			},
			{
				indexed: false,
				internalType: "string",
				name: "key",
				type: "string"
			}
		],
		name: "TextChanged",
		type: "event"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "uint256",
				name: "contentTypes",
				type: "uint256"
			}
		],
		name: "ABI",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "addr",
		outputs: [
			{
				internalType: "address payable",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "authorisations",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "clearDNSZone",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "contenthash",
		outputs: [
			{
				internalType: "bytes",
				name: "",
				type: "bytes"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "name",
				type: "bytes32"
			},
			{
				internalType: "uint16",
				name: "resource",
				type: "uint16"
			}
		],
		name: "dnsRecord",
		outputs: [
			{
				internalType: "bytes",
				name: "",
				type: "bytes"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "name",
				type: "bytes32"
			}
		],
		name: "hasDNSRecords",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes4",
				name: "interfaceID",
				type: "bytes4"
			}
		],
		name: "interfaceImplementer",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "pubkey",
		outputs: [
			{
				internalType: "bytes32",
				name: "x",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "y",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "uint256",
				name: "contentType",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "setABI",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "uint256",
				name: "coinType",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "a",
				type: "bytes"
			}
		],
		name: "setAddr",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "a",
				type: "address"
			}
		],
		name: "setAddr",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "target",
				type: "address"
			},
			{
				internalType: "bool",
				name: "isAuthorised",
				type: "bool"
			}
		],
		name: "setAuthorisation",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes",
				name: "hash",
				type: "bytes"
			}
		],
		name: "setContenthash",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "setDNSRecords",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes4",
				name: "interfaceID",
				type: "bytes4"
			},
			{
				internalType: "address",
				name: "implementer",
				type: "address"
			}
		],
		name: "setInterface",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "string",
				name: "name",
				type: "string"
			}
		],
		name: "setName",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "x",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "y",
				type: "bytes32"
			}
		],
		name: "setPubkey",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "string",
				name: "key",
				type: "string"
			},
			{
				internalType: "string",
				name: "value",
				type: "string"
			}
		],
		name: "setText",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceID",
				type: "bytes4"
			}
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "pure",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "string",
				name: "key",
				type: "string"
			}
		],
		name: "text",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	}
];

var ENS_ABI = [
	{
		inputs: [
			{
				internalType: "contract ENS",
				name: "_old",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "ApprovalForAll",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "bytes32",
				name: "label",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "NewOwner",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "address",
				name: "resolver",
				type: "address"
			}
		],
		name: "NewResolver",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "uint64",
				name: "ttl",
				type: "uint64"
			}
		],
		name: "NewTTL",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "operator",
				type: "address"
			}
		],
		name: "isApprovedForAll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "old",
		outputs: [
			{
				internalType: "contract ENS",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "recordExists",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "resolver",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "setApprovalForAll",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "setOwner",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "resolver",
				type: "address"
			},
			{
				internalType: "uint64",
				name: "ttl",
				type: "uint64"
			}
		],
		name: "setRecord",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "resolver",
				type: "address"
			}
		],
		name: "setResolver",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "label",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "setSubnodeOwner",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "label",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "resolver",
				type: "address"
			},
			{
				internalType: "uint64",
				name: "ttl",
				type: "uint64"
			}
		],
		name: "setSubnodeRecord",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "uint64",
				name: "ttl",
				type: "uint64"
			}
		],
		name: "setTTL",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "ttl",
		outputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	}
];

var ERC20_ABI = [
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_spender",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_from",
				type: "address"
			},
			{
				name: "_to",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				name: "balance",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_to",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address"
			},
			{
				name: "_spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		payable: true,
		stateMutability: "payable",
		type: "fallback"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	}
];

var ERC20_BYTES32_ABI = [
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	}
];

var ERC2721_ABI = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "ApprovalForAll",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousGovernor",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newGovernor",
				type: "address"
			}
		],
		name: "GovernorshipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "governor_",
				type: "address"
			}
		],
		name: "__Governable_init_unchained",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "governor",
				type: "address"
			},
			{
				internalType: "string",
				name: "name",
				type: "string"
			},
			{
				internalType: "string",
				name: "symbol",
				type: "string"
			}
		],
		name: "__TestNFT_init",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "baseURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "burn",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "getApproved",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "key",
				type: "bytes32"
			}
		],
		name: "getConfig",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "key",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "addr",
				type: "address"
			}
		],
		name: "getConfigA",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "key",
				type: "bytes32"
			},
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			}
		],
		name: "getConfigI",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "governor",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "operator",
				type: "address"
			}
		],
		name: "isApprovedForAll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				internalType: "string",
				name: "tokenURI",
				type: "string"
			}
		],
		name: "mint",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "ownerOf",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceGovernorship",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "_data",
				type: "bytes"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "setApprovalForAll",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "key",
				type: "bytes32"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "setConfig",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "key",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "addr",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "setConfigA",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "key",
				type: "bytes32"
			},
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "setConfigI",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4"
			}
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			}
		],
		name: "tokenByIndex",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			}
		],
		name: "tokenOfOwnerByIndex",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "tokenURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newGovernor",
				type: "address"
			}
		],
		name: "transferGovernorship",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var ERC721_PAIR_ABI = [
	{
		inputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "Burn",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			}
		],
		name: "Mint",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0In",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1In",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0Out",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1Out",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "Swap",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint112",
				name: "reserve0",
				type: "uint112"
			},
			{
				indexed: false,
				internalType: "uint112",
				name: "reserve1",
				type: "uint112"
			}
		],
		name: "Sync",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		constant: true,
		inputs: [
		],
		name: "ARRAY_LIMIT",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "DOMAIN_SEPARATOR",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "MINIMUM_LIQUIDITY",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "PERMIT_TYPEHASH",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			}
		],
		name: "atMap",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "balanceOfToken",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "burn",
		outputs: [
			{
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			},
			{
				internalType: "uint256[]",
				name: "removeNFTIDs",
				type: "uint256[]"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "limit",
				type: "uint256"
			}
		],
		name: "erc721IDlist",
		outputs: [
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "erc721MapLength",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "factory",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "getReserves",
		outputs: [
			{
				internalType: "uint112",
				name: "_reserve0",
				type: "uint112"
			},
			{
				internalType: "uint112",
				name: "_reserve1",
				type: "uint112"
			},
			{
				internalType: "uint32",
				name: "_blockTimestampLast",
				type: "uint32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "_token0",
				type: "address"
			},
			{
				internalType: "address",
				name: "_token1",
				type: "address"
			}
		],
		name: "initialize",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "kLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "mint",
		outputs: [
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "nonces",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "onERC721Received",
		outputs: [
			{
				internalType: "bytes4",
				name: "",
				type: "bytes4"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "permit",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "price0CumulativeLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "price1CumulativeLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "skim",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "uint256[]",
				name: "amountArr",
				type: "uint256[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256[]",
				name: "erc721NFTIDs",
				type: "uint256[]"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "swap",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
		],
		name: "sync",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "token0",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "token1",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "key",
				type: "uint256"
			}
		],
		name: "tryGetMap",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	}
];

var ERC21155_ABI = [
	{
		inputs: [
			{
				internalType: "string",
				name: "name_",
				type: "string"
			},
			{
				internalType: "string",
				name: "symbol_",
				type: "string"
			},
			{
				internalType: "string",
				name: "url_",
				type: "string"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "account",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "ApprovalForAll",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256[]",
				name: "ids",
				type: "uint256[]"
			},
			{
				indexed: false,
				internalType: "uint256[]",
				name: "values",
				type: "uint256[]"
			}
		],
		name: "TransferBatch",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "id",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "TransferSingle",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "string",
				name: "value",
				type: "string"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "id",
				type: "uint256"
			}
		],
		name: "URI",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "id",
				type: "uint256"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address[]",
				name: "accounts",
				type: "address[]"
			},
			{
				internalType: "uint256[]",
				name: "ids",
				type: "uint256[]"
			}
		],
		name: "balanceOfBatch",
		outputs: [
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			},
			{
				internalType: "address",
				name: "operator",
				type: "address"
			}
		],
		name: "isApprovedForAll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "id",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "mint",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256[]",
				name: "ids",
				type: "uint256[]"
			},
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "safeBatchTransferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "id",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "setApprovalForAll",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "newuri",
				type: "string"
			}
		],
		name: "setURI",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4"
			}
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "uri",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];

var DEFAULT_NETWORKS = [exports.SupportedChainId.MAINNET, // SupportedChainId.ROPSTEN,
// SupportedChainId.RINKEBY,
exports.SupportedChainId.GOERLI // SupportedChainId.KOVAN,
];
function constructSameAddressMap(address) {
  var additionalNetworks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce(function (memo, chainId) {
    memo[chainId] = address;
    return memo;
  }, {});
}

var _ENS_REGISTRAR_ADDRES;

function ownKeys$h(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$h(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$h(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$h(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var MULTICALL_ADDRESS = _objectSpread$h(_objectSpread$h({}, constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984')), {}, _defineProperty__default["default"]({}, exports.SupportedChainId.SEPOLIA, '0xE78D911B56a6321bF622172D32D916f9563e8D84'));
_objectSpread$h({}, constructSameAddressMap('0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45'));
_defineProperty__default["default"]({}, exports.SupportedChainId.MAINNET, '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8');
var ENS_REGISTRAR_ADDRESSES = (_ENS_REGISTRAR_ADDRES = {}, _defineProperty__default["default"](_ENS_REGISTRAR_ADDRES, exports.SupportedChainId.MAINNET, '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'), _defineProperty__default["default"](_ENS_REGISTRAR_ADDRES, exports.SupportedChainId.GOERLI, '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'), _ENS_REGISTRAR_ADDRES);
var ROUTER_ADDRESSES = {
  4: '0x2cB34c38f7FFF789fab70AB69DAA9f7F05a4ecc8',
  56: '0x54F0d8485e931c22D542D7b95dbbf5ecdE9C91E8',
  1: '',
  5: '0x6ECBC55F9087b86aF9AADF553F086EfdAC5c1458',
  11155111: '0x6e2c879382520c7B15927902eEf1c0FbC1F8de91'
};
var ROUTER_ADDRESSES_721 = {
  5: '0xB2d06a54f2DBC5a2b608358c034be6aA88646Df4',
  4: '0xC61d146BB1965ba0e387aA2Ad94c500a17dfe65F',
  56: '',
  1: '',
  11155111: '0x855AA5FAC685841C96F6d5cE103BF4a7122B016C'
};

var _USDC;

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys$g(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$g(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$g(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$g(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var USDC_MAINNET = new sdkCore.Token(exports.SupportedChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C');
var USDC_GOERLI = new sdkCore.Token(exports.SupportedChainId.GOERLI, '0x07865c6e87b9f70255377e024ace6630c1eaa37f', 6, 'USDC', 'USD//C');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC'); //

new sdkCore.Token(exports.SupportedChainId.MAINNET, '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', 18, 'FEI', 'Fei USD');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B', 18, 'TRIBE', 'Tribe');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0x853d955aCEf822Db058eb8505911ED77F175b99e', 18, 'FRAX', 'Frax');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0', 18, 'FXS', 'Frax Share');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D', 8, 'renBTC', 'renBTC');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD', 18, 'ETH2x-FLI', 'ETH 2x Flexible Leverage Index');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0xFe2e637202056d30016725477c5da089Ab0A043A', 18, 'sETH2', 'StakeWise Staked ETH2');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0x20BC832ca081b91433ff6c17f85701B6e92486c5', 18, 'rETH2', 'StakeWise Reward ETH2');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2', 18, 'SWISE', 'StakeWise');
var WRAPPED_NATIVE_CURRENCY = _objectSpread$g({}, sdkCore.WETH9);
var ExtendedEther = /*#__PURE__*/function (_Ether) {
  _inherits__default["default"](ExtendedEther, _Ether);

  var _super = _createSuper$5(ExtendedEther);

  function ExtendedEther() {
    _classCallCheck__default["default"](this, ExtendedEther);

    return _super.apply(this, arguments);
  }

  _createClass__default["default"](ExtendedEther, [{
    key: "wrapped",
    get: function get() {
      var wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId];
      if (wrapped) return wrapped;
      throw new Error('Unsupported chain ID');
    }
  }], [{
    key: "onChain",
    value: function onChain(chainId) {
      var _this$_cachedExtended;

      return (_this$_cachedExtended = this._cachedExtendedEther[chainId]) !== null && _this$_cachedExtended !== void 0 ? _this$_cachedExtended : this._cachedExtendedEther[chainId] = new ExtendedEther(chainId);
    }
  }]);

  return ExtendedEther;
}(sdkCore.Ether);

_defineProperty__default["default"](ExtendedEther, "_cachedExtendedEther", {});

({
  USDC: (_USDC = {}, _defineProperty__default["default"](_USDC, exports.SupportedChainId.MAINNET, USDC_MAINNET.address), _defineProperty__default["default"](_USDC, exports.SupportedChainId.GOERLI, USDC_GOERLI.address), _USDC)
});

var router721ABI = [
	{
		inputs: [
			{
				internalType: "address",
				name: "token721",
				type: "address"
			},
			{
				internalType: "uint256[]",
				name: "nftIds",
				type: "uint256[]"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amountBDesired",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "addLiquidity721",
		outputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token721",
				type: "address"
			},
			{
				internalType: "uint256[]",
				name: "nftIds",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "amount721",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETHMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "addLiquidityETH721",
		outputs: [
			{
				internalType: "uint256",
				name: "amountToken",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETH",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountAMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "removeLiquidity",
		outputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETHMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "removeLiquidityETH",
		outputs: [
			{
				internalType: "uint256",
				name: "amountToken",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETH",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETHMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "approveMax",
				type: "bool"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "removeLiquidityETHWithPermit",
		outputs: [
			{
				internalType: "uint256",
				name: "amountToken",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETH",
				type: "uint256"
			},
			{
				internalType: "uint256[]",
				name: "removeNFTIDs",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountAMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "approveMax",
				type: "bool"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "removeLiquidityWithPermit",
		outputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "uint256[]",
				name: "erc721NFTIDs",
				type: "uint256[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapETHForExactTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "uint256[]",
				name: "erc721NFTIDs",
				type: "uint256[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactETHForTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "uint256[]",
				name: "erc721NFTIDs",
				type: "uint256[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactTokensForETH",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "uint256[]",
				name: "erc721NFTIDs",
				type: "uint256[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactTokensForTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountInMax",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "uint256[]",
				name: "erc721NFTIDs",
				type: "uint256[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapTokensForExactETH",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountInMax",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "uint256[]",
				name: "erc721NFTIDs",
				type: "uint256[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapTokensForExactTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_factory",
				type: "address"
			},
			{
				internalType: "address",
				name: "_WETH",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		stateMutability: "payable",
		type: "receive"
	},
	{
		inputs: [
		],
		name: "factory",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveOut",
				type: "uint256"
			}
		],
		name: "getAmountIn",
		outputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveOut",
				type: "uint256"
			}
		],
		name: "getAmountOut",
		outputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			}
		],
		name: "getAmountsIn",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			}
		],
		name: "getAmountsOut",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes"
			}
		],
		name: "onERC1155Received",
		outputs: [
			{
				internalType: "bytes4",
				name: "",
				type: "bytes4"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveB",
				type: "uint256"
			}
		],
		name: "quote",
		outputs: [
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "smartBalanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "WETH",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];

var V2RouterABI = [
	{
		inputs: [
			{
				internalType: "address",
				name: "_factory",
				type: "address"
			},
			{
				internalType: "address",
				name: "_WETH",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		inputs: [
		],
		name: "WETH",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amountADesired",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBDesired",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountAMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "addLiquidity",
		outputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token1155",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "token1155Id",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amountADesired",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBDesired",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountAMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "addLiquidity1155",
		outputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amountTokenDesired",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETHMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "addLiquidityETH",
		outputs: [
			{
				internalType: "uint256",
				name: "amountToken",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETH",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token1155",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "token1155Id",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenDesired",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETHMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "addLiquidityETH1155",
		outputs: [
			{
				internalType: "uint256",
				name: "amountToken",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETH",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "factory",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveOut",
				type: "uint256"
			}
		],
		name: "getAmountIn",
		outputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveOut",
				type: "uint256"
			}
		],
		name: "getAmountOut",
		outputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			}
		],
		name: "getAmountsIn",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			}
		],
		name: "getAmountsOut",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes"
			}
		],
		name: "onERC1155Received",
		outputs: [
			{
				internalType: "bytes4",
				name: "",
				type: "bytes4"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveB",
				type: "uint256"
			}
		],
		name: "quote",
		outputs: [
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountAMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "removeLiquidity",
		outputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETHMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "removeLiquidityETH",
		outputs: [
			{
				internalType: "uint256",
				name: "amountToken",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETH",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETHMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "removeLiquidityETHSupportingFeeOnTransferTokens",
		outputs: [
			{
				internalType: "uint256",
				name: "amountETH",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETHMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "approveMax",
				type: "bool"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "removeLiquidityETHWithPermit",
		outputs: [
			{
				internalType: "uint256",
				name: "amountToken",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETH",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETHMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "approveMax",
				type: "bool"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
		outputs: [
			{
				internalType: "uint256",
				name: "amountETH",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountAMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "approveMax",
				type: "bool"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "removeLiquidityWithPermit",
		outputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "smartBalanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapETHForExactTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactETHForTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
		outputs: [
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactTokensForETH",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactTokensForTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountInMax",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapTokensForExactETH",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountInMax",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapTokensForExactTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		stateMutability: "payable",
		type: "receive"
	}
];

function isAddress(value) {
  try {
    return address.getAddress(value);
  } catch (_unused) {
    return false;
  }
} // shorten the checksummed version of the input address to have 0x + 4 characters at start and end

function shortenAddress(address) {
  var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var parsed = isAddress(address);

  if (!parsed) {
    throw Error("Invalid 'address' parameter '".concat(address, "'."));
  }

  return "".concat(parsed.substring(0, chars + 2), "...").concat(parsed.substring(42 - chars));
} // account is not optional

function getSigner(provider, account) {
  return provider.getSigner(account).connectUnchecked();
} // account is optional


function getProviderOrSigner(provider, account) {
  return account ? getSigner(provider, account) : provider;
} // account is optional


function getContract(address, ABI, provider, account) {
  if (!isAddress(address) || address === constants.AddressZero) {
    throw Error("Invalid 'address' parameter '".concat(address, "'."));
  }

  return new contracts.Contract(address, ABI, getProviderOrSigner(provider, account));
}
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function getRouterContract() {
  var chainId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NETWORK_CHAIN_ID;
  var library = arguments.length > 1 ? arguments[1] : undefined;
  var account = arguments.length > 2 ? arguments[2] : undefined;
  return getContract(ROUTER_ADDRESSES[chainId], V2RouterABI, library, account);
}
function getRouterContract721() {
  var chainId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NETWORK_CHAIN_ID;
  var library = arguments.length > 1 ? arguments[1] : undefined;
  var account = arguments.length > 2 ? arguments[2] : undefined;
  return getContract(ROUTER_ADDRESSES_721[chainId], router721ABI, library, account);
}

// eslint-disable-next-line no-extend-native
String.prototype.trimTrailingZero = function () {
  return this.replace(/(\.[0-9]*[1-9])0+$|\.0*$/, '$1');
};

var MulticallABI = UniswapInterfaceMulticallJson.abi; // returns null on errors

function useContract(addressOrAddressMap, ABI) {
  var withSignerIfPossible = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var _useWeb3React = core.useWeb3React(),
      provider = _useWeb3React.provider,
      account = _useWeb3React.account,
      chainId = _useWeb3React.chainId;

  return React.useMemo(function () {
    if (!addressOrAddressMap || !ABI || !provider || !chainId) return null;
    var address;
    if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap;else address = addressOrAddressMap[chainId];
    if (!address) return null;

    try {
      return getContract(address, ABI, provider, withSignerIfPossible && account ? account : undefined);
    } catch (error) {
      console.error('Failed to get contract', error);
      return null;
    }
  }, [addressOrAddressMap, ABI, provider, chainId, withSignerIfPossible, account]);
}
function useTokenContract(tokenAddress, withSignerIfPossible) {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible);
}
function useENSRegistrarContract(withSignerIfPossible) {
  return useContract(ENS_REGISTRAR_ADDRESSES, ENS_ABI, withSignerIfPossible);
}
function useENSResolverContract(address, withSignerIfPossible) {
  return useContract(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible);
}
function useInterfaceMulticall() {
  return useContract(MULTICALL_ADDRESS, MulticallABI, false);
}
function use1155Contract(address, withSignerIfPossible) {
  return useContract(address, ERC21155_ABI, withSignerIfPossible);
}
function use721Contract(address, withSignerIfPossible) {
  return useContract(address, ERC2721_ABI, withSignerIfPossible);
}
function use721PairContract(address, withSignerIfPossible) {
  return useContract(address, ERC721_PAIR_ABI, withSignerIfPossible);
}

var multicall = reduxMulticall.createMulticall();
function MulticallUpdater() {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var latestBlockNumber = useBlockNumber();
  var contract = useInterfaceMulticall();
  return /*#__PURE__*/React__default["default"].createElement(multicall.Updater, {
    chainId: chainId,
    latestBlockNumber: latestBlockNumber,
    contract: contract
  });
}

// Create wrappers for hooks so consumers don't need to get latest block themselves

function useMultipleContractSingleData() {
  var _multicall$hooks;

  var _useCallContext = useCallContext(),
      chainId = _useCallContext.chainId,
      latestBlock = _useCallContext.latestBlock;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (_multicall$hooks = multicall.hooks).useMultipleContractSingleData.apply(_multicall$hooks, [chainId, latestBlock].concat(args));
}
function useSingleCallResult() {
  var _multicall$hooks2;

  var _useCallContext2 = useCallContext(),
      chainId = _useCallContext2.chainId,
      latestBlock = _useCallContext2.latestBlock;

  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return (_multicall$hooks2 = multicall.hooks).useSingleCallResult.apply(_multicall$hooks2, [chainId, latestBlock].concat(args));
}
function useSingleContractMultipleData() {
  var _multicall$hooks3;

  var _useCallContext3 = useCallContext(),
      chainId = _useCallContext3.chainId,
      latestBlock = _useCallContext3.latestBlock;

  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return (_multicall$hooks3 = multicall.hooks).useSingleContractMultipleData.apply(_multicall$hooks3, [chainId, latestBlock].concat(args));
}

function useCallContext() {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var latestBlock = useBlockNumber();
  return {
    chainId: chainId,
    latestBlock: latestBlock
  };
}

/**
 * Returns true if the string value is zero in hex
 * @param hexNumberString
 */
function isZero(hexNumberString) {
  return /^0x0*$/.test(hexNumberString);
}

function safeNamehash(name) {
  if (name === undefined) return undefined;

  try {
    return hash.namehash(name);
  } catch (error) {
    console.debug(error);
    return undefined;
  }
}

/**
 * Does a lookup for an ENS name to find its contenthash.
 */

function useENSContentHash(ensName) {
  var _resolverAddressResul;

  var ensNodeArgument = React.useMemo(function () {
    return [ensName === null ? undefined : safeNamehash(ensName)];
  }, [ensName]);
  var registrarContract = useENSRegistrarContract(false);
  var resolverAddressResult = useSingleCallResult(registrarContract, 'resolver', ensNodeArgument);
  var resolverAddress = (_resolverAddressResul = resolverAddressResult.result) === null || _resolverAddressResul === void 0 ? void 0 : _resolverAddressResul[0];
  var resolverContract = useENSResolverContract(resolverAddress && isZero(resolverAddress) ? undefined : resolverAddress, false);
  var contenthash = useSingleCallResult(resolverContract, 'contenthash', ensNodeArgument);
  return React.useMemo(function () {
    var _contenthash$result$, _contenthash$result;

    return {
      contenthash: (_contenthash$result$ = (_contenthash$result = contenthash.result) === null || _contenthash$result === void 0 ? void 0 : _contenthash$result[0]) !== null && _contenthash$result$ !== void 0 ? _contenthash$result$ : null,
      loading: resolverAddressResult.loading || contenthash.loading
    };
  }, [contenthash.loading, contenthash.result, resolverAddressResult.loading]);
}

function useHttpLocations(uri) {
  var ens = React.useMemo(function () {
    return uri ? parseENSAddress(uri) : undefined;
  }, [uri]);
  var resolvedContentHash = useENSContentHash(ens === null || ens === void 0 ? void 0 : ens.ensName);
  return React.useMemo(function () {
    if (ens) {
      return resolvedContentHash.contenthash ? uriToHttp(contenthashToUri(resolvedContentHash.contenthash)) : [];
    } else {
      return uri ? uriToHttp(uri) : [];
    }
  }, [ens, resolvedContentHash.contenthash, uri]);
}

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var WrappedTokenInfo = /*#__PURE__*/function (_Token) {
  _inherits__default["default"](WrappedTokenInfo, _Token);

  var _super = _createSuper$4(WrappedTokenInfo);

  function WrappedTokenInfo(tokenInfo, tags) {
    var _this;

    _classCallCheck__default["default"](this, WrappedTokenInfo);

    _this = _super.call(this, tokenInfo.chainId, tokenInfo.address, tokenInfo.decimals, tokenInfo.symbol, tokenInfo.name);
    _this.tokenInfo = tokenInfo;
    _this.tags = tags;
    return _this;
  }

  _createClass__default["default"](WrappedTokenInfo, [{
    key: "logoURI",
    get: function get() {
      return this.tokenInfo.logoURI;
    }
  }]);

  return WrappedTokenInfo;
}(sdk.Token);

function ownKeys$f(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$f(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$f(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$f(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var BAD_SRCS$1 = {};

/**
 * Renders an image by sequentially trying a list of URIs, and then eventually a fallback triangle alert
 */
function Logo(_ref) {
  var srcs = _ref.srcs,
      alt = _ref.alt,
      style = _ref.style;

  var _useState = React.useState(0),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      refresh = _useState2[1];

  var src = srcs.find(function (src) {
    return !BAD_SRCS$1[src];
  });

  if (src) {
    return /*#__PURE__*/React__default["default"].createElement("img", {
      style: _objectSpread$f(_objectSpread$f({}, style), {}, {
        background: '#ffffff'
      }),
      alt: alt,
      src: src,
      onError: function onError() {
        if (src) BAD_SRCS$1[src] = true;
        refresh(function (i) {
          return i + 1;
        });
      }
    });
  }

  return /*#__PURE__*/React__default["default"].createElement(HelpOutlineOutlinedIcon__default["default"], {
    sx: _objectSpread$f(_objectSpread$f({}, style), {}, {
      background: '#ffffff'
    })
  });
}

function ownKeys$e(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$e(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$e(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var getTokenLogoURL = function getTokenLogoURL(address) {
  return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/".concat(address, "/logo.png");
};
function CurrencyLogo(_ref) {
  var _currency$symbol;

  var currency = _ref.currency,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '24px' : _ref$size,
      style = _ref.style,
      currencySymbol = _ref.currencySymbol;

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined);
  var srcs = React.useMemo(function () {
    if (!currency && !currencySymbol) {
      return [];
    }

    if ((currency === null || currency === void 0 ? void 0 : currency.symbol) === 'ETH') {
      var _getChainInfo$nativeC, _getChainInfo;

      var uri = tokenLogoUriList[(_getChainInfo$nativeC = (_getChainInfo = getChainInfo(chainId !== null && chainId !== void 0 ? chainId : NETWORK_CHAIN_ID)) === null || _getChainInfo === void 0 ? void 0 : _getChainInfo.nativeCurrency.symbol) !== null && _getChainInfo$nativeC !== void 0 ? _getChainInfo$nativeC : 'ETH'];
      if (uri) return [uri];
    }

    if (currencySymbol) {
      var _uri = tokenLogoUriList[currencySymbol];
      if (_uri) return [_uri];
    }

    if (!currency) return [];

    if (currency instanceof Token1155 || currency instanceof Token721) {
      if (currency.uri) {
        return [currency.uri];
      }
    }

    if (currency !== null && currency !== void 0 && currency.symbol) {
      var _uri2 = tokenLogoUriList[currency.symbol];
      if (_uri2) return [_uri2];
    }

    if (currency instanceof sdk.Token) {
      var _uri3 = '';

      if (currency !== null && currency !== void 0 && currency.symbol) {
        _uri3 = tokenLogoUriList[currency.symbol];
      }

      return [].concat(_toConsumableArray__default["default"](uriLocations), [getTokenLogoURL(currency.address), _uri3]);
    }

    return [];
  }, [chainId, currency, currencySymbol, uriLocations]);
  return /*#__PURE__*/React__default["default"].createElement(Logo, {
    style: _objectSpread$e(_objectSpread$e({}, style), {}, {
      width: size,
      height: size,
      borderRadius: size,
      boxShadow: ' 0px 6px 10px rgba(0, 0, 0, 0.075)',
      objectFit: 'cover',
      background: '#ffffff'
    }),
    srcs: srcs,
    alt: "".concat((_currency$symbol = currency === null || currency === void 0 ? void 0 : currency.symbol) !== null && _currency$symbol !== void 0 ? _currency$symbol : 'token', " logo")
  });
}

var _path$2, _path2;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var SvgSearch = function SvgSearch(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$3({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2 || (_path2 = /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21.0004 21.0004L16.6504 16.6504",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _g, _defs$1;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var SvgXcircle = function SvgXcircle(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$2({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g || (_g = /*#__PURE__*/React__default["default"].createElement("g", {
    clipPath: "url(#clip0_7080_9718)"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9.99935 18.3327C14.6017 18.3327 18.3327 14.6017 18.3327 9.99935C18.3327 5.39698 14.6017 1.66602 9.99935 1.66602C5.39698 1.66602 1.66602 5.39698 1.66602 9.99935C1.66602 14.6017 5.39698 18.3327 9.99935 18.3327Z",
    stroke: "#C53434",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.5 7.5L7.5 12.5",
    stroke: "#C53434",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.5 7.5L12.5 12.5",
    stroke: "#C53434",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), _defs$1 || (_defs$1 = /*#__PURE__*/React__default["default"].createElement("defs", null, /*#__PURE__*/React__default["default"].createElement("clipPath", {
    id: "clip0_7080_9718"
  }, /*#__PURE__*/React__default["default"].createElement("rect", {
    width: 20,
    height: 20,
    fill: "white"
  })))));
};

/**
 * Invokes callback repeatedly over an interval defined by the delay
 * @param callback
 * @param delay if null, the callback will not be invoked
 * @param leading if true, the callback will be invoked immediately (on the leading edge); otherwise, it will be invoked after delay
 */

function useInterval(callback, delay) {
  var leading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var savedCallback = React.useRef(); // Remember the latest callback.

  React.useEffect(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  React.useEffect(function () {
    function tick() {
      var current = savedCallback.current;
      current && current();
    }

    if (delay !== null) {
      if (leading) tick();
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }

    return;
  }, [delay, leading]);
}

var PopoverContainer = material.styled('div')(function (_ref) {
  var theme = _ref.theme;
  return {
    zIndex: 9999,
    transition: 'visibility 150ms linear, opacity 150ms linear',
    background: material.lighten(theme.palette.background.paper, 0.1),
    border: 'none',
    boxShadow: '0 4px 8px 0 #33333320',
    color: theme.palette.text.primary,
    borderRadius: ' 8px'
  };
});
var ReferenceElement = material.styled('div')({
  display: 'inline-block'
});
var Arrow = material.styled('div')(function (_ref2) {
  var theme = _ref2.theme;
  return {
    width: '8px',
    height: '8px',
    zIndex: 9998,
    '&:before': {
      position: ' absolute',
      width: '8px',
      height: '8px',
      zIndex: 9998,
      content: "''",
      boxShadow: '1px solid #33333320',
      transform: 'rotate(45deg)',
      background: theme.palette.background.paper
    },
    '&.arrow-top': {
      bottom: '-5px',
      '&:before': {
        borderTop: 'none',
        borderLeft: 'none'
      }
    },
    '&.arrow-bottom': {
      top: '-5px',
      '&:before': {
        borderTop: 'none',
        borderLeft: 'none'
      }
    },
    '&.arrow-left': {
      right: '-5px',
      '&:before': {
        borderTop: 'none',
        borderLeft: 'none'
      }
    },
    '&.arrow-right': {
      left: '-5px',
      '&:before': {
        borderTop: 'none',
        borderLeft: 'none'
      }
    }
  };
});
function Popover(_ref3) {
  var _attributes$popper$da, _attributes$popper;

  var content = _ref3.content,
      show = _ref3.show,
      children = _ref3.children,
      _ref3$placement = _ref3.placement,
      placement = _ref3$placement === void 0 ? 'auto' : _ref3$placement;

  var _useState = React.useState(null),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      referenceElement = _useState2[0],
      setReferenceElement = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      popperElement = _useState4[0],
      setPopperElement = _useState4[1];

  var _useState5 = React.useState(null),
      _useState6 = _slicedToArray__default["default"](_useState5, 2),
      arrowElement = _useState6[0],
      setArrowElement = _useState6[1];

  var _usePopper = reactPopper.usePopper(referenceElement, popperElement, {
    placement: placement,
    strategy: 'fixed',
    modifiers: [{
      name: 'offset',
      options: {
        offset: [8, 8]
      }
    }, {
      name: 'arrow',
      options: {
        element: arrowElement
      }
    }]
  }),
      styles = _usePopper.styles,
      update = _usePopper.update,
      attributes = _usePopper.attributes;

  var updateCallback = React.useCallback(function () {
    update && update();
  }, [update]);
  useInterval(updateCallback, show ? 100 : null);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ReferenceElement, {
    ref: setReferenceElement
  }, children), /*#__PURE__*/React__default["default"].createElement(portal.Portal, null, /*#__PURE__*/React__default["default"].createElement(PopoverContainer, _extends__default["default"]({
    ref: setPopperElement,
    style: styles.popper
  }, attributes.popper, {
    sx: {
      visibility: show ? 'visible' : 'hidden',
      opacity: show ? 1 : 0
    }
  }), content, /*#__PURE__*/React__default["default"].createElement(Arrow, _extends__default["default"]({
    className: "arrow-".concat((_attributes$popper$da = (_attributes$popper = attributes.popper) === null || _attributes$popper === void 0 ? void 0 : _attributes$popper['data-popper-placement']) !== null && _attributes$popper$da !== void 0 ? _attributes$popper$da : ''),
    ref: setArrowElement,
    style: styles.arrow
  }, attributes.arrow)))));
}

var _excluded$6 = ["text"];
var TooltipContainer = material.styled('div')({
  maxWidth: '243px',
  fontSize: 14,
  padding: '0.6rem 1rem',
  lineHeight: '150%',
  fontWeight: 400,
  whiteSpace: 'pre-line'
});
function Tooltip(_ref) {
  var text = _ref.text,
      rest = _objectWithoutProperties__default["default"](_ref, _excluded$6);

  return /*#__PURE__*/React__default["default"].createElement(Popover, _extends__default["default"]({
    content: /*#__PURE__*/React__default["default"].createElement(TooltipContainer, null, text)
  }, rest));
}

function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$d(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$d(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var QuestionWrapper = material.styled('div')(function (_ref) {
  var theme = _ref.theme;
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: '0.2rem',
    border: 'none',
    background: 'none',
    outline: 'none',
    cursor: 'default',
    borderRadius: '36px',
    backgroundColor: theme.palette.background.paper,
    color: '#828282',
    '&:hover, :focus': {
      opacity: 0.7
    }
  };
});
material.styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.2rem',
  border: 'none',
  background: 'none',
  outline: 'none',
  cursor: 'default',
  borderRadius: '36px',
  width: '12px',
  height: '12px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: '#ffffff',
  '&:hover, :focus': {
    opacity: 0.7
  }
});
material.styled('span')({
  fontSize: '1rem'
});
function QuestionHelper(_ref2) {
  var text = _ref2.text,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 14 : _ref2$size,
      title = _ref2.title,
      style = _ref2.style;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var open = React.useCallback(function () {
    return setShow(true);
  }, [setShow]);
  var close = React.useCallback(function () {
    return setShow(false);
  }, [setShow]);
  return /*#__PURE__*/React__default["default"].createElement(Tooltip, {
    text: text,
    show: show
  }, /*#__PURE__*/React__default["default"].createElement(QuestionWrapper, {
    onClick: open,
    onMouseEnter: open,
    onMouseLeave: close,
    style: _objectSpread$d({}, style)
  }, title ? title : /*#__PURE__*/React__default["default"].createElement(HelpOutlineOutlinedIcon__default["default"], {
    sx: {
      height: size,
      width: size
    }
  })));
}

function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$c(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function InputLabel(_ref) {
  var children = _ref.children,
      helperText = _ref.helperText,
      style = _ref.style;
  return /*#__PURE__*/React__default["default"].createElement(material.InputLabel, {
    sx: {
      color: function color(theme) {
        return theme.palette.text.secondary;
      },
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: _objectSpread$c({
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '148.69%'
    }, style)
  }, children), helperText && /*#__PURE__*/React__default["default"].createElement(QuestionHelper, {
    text: helperText,
    style: {
      marginLeft: 4
    }
  }) // <InfoIcon
  //   style={{
  //     marginLeft: 4,
  //     cursor: 'pointer'
  //   }}
  // />
  );
}

var _excluded$5 = ["focused", "placeholder", "onChange", "value", "disabled", "type", "startAdornment", "endAdornment", "maxWidth", "label", "height", "error", "subStr", "subStr2", "helperText", "borderRadius"];
function Input(_ref) {
  var focused = _ref.focused,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      value = _ref.value,
      disabled = _ref.disabled,
      type = _ref.type,
      startAdornment = _ref.startAdornment,
      endAdornment = _ref.endAdornment,
      maxWidth = _ref.maxWidth,
      label = _ref.label,
      height = _ref.height,
      error = _ref.error,
      subStr = _ref.subStr,
      subStr2 = _ref.subStr2,
      helperText = _ref.helperText,
      _ref$borderRadius = _ref.borderRadius,
      borderRadius = _ref$borderRadius === void 0 ? '8px' : _ref$borderRadius,
      rest = _objectWithoutProperties__default["default"](_ref, _excluded$5);

  var theme = material.useTheme();
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: '100%',
      maxWidth: maxWidth || 'unset'
    }
  }, label && /*#__PURE__*/React__default["default"].createElement(InputLabel, {
    helperText: helperText
  }, label), /*#__PURE__*/React__default["default"].createElement(material.InputBase, _extends__default["default"]({
    sx: {
      height: height || 40,
      borderRadius: borderRadius,
      padding: 0,
      zIndex: 1,
      // background: error ? 'red' : 'transparent',
      '&.Mui-focused:before': {
        display: 'none'
      },
      '& .MuiInputBase-input': {
        height: '100%',
        padding: "0 ".concat(endAdornment ? '60px' : '22px', " 0 ").concat(startAdornment ? '60px' : '22px'),
        backgroundClip: 'padding-box',
        boxSizing: 'border-box',
        background: theme.palette.background.paper,
        borderRadius: borderRadius
      },
      '& .MuiInputBase-input.Mui-disabled': {
        WebkitTextFillColor: theme.palette.text.secondary,
        opacity: theme.palette.action.disabledOpacity
      },
      '&.Mui-focused .MuiInputBase-input, &:hover .MuiInputBase-input': {
        height: '100%',
        width: '100%',
        background: theme.palette.background.paper,
        padding: "0 ".concat(endAdornment ? '60px' : '22px', " 0 ").concat(startAdornment ? '60px' : '22px'),
        borderRadius: borderRadius
      },
      '&:after': {
        top: -1,
        right: -1,
        bottom: -1,
        left: -1,
        zIndex: -1,
        content: '""',
        borderRadius: "calc(".concat(borderRadius, " + 1px)"),
        position: 'absolute',
        background: error ? "".concat(theme.palette.error.main, "!important") : 'transparent'
      },
      '&.Mui-focused:after, &:hover:after': {
        background: theme.gradient.gradient1 && theme.palette.primary.main === '#1F9898' ? theme.gradient.gradient1 : theme.palette.primary.main
      },
      '&.Mui-disabled:hover:after': {
        background: 'unset'
      },
      '& span': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 22,
        paddingRight: '0 !important',
        position: 'absolute'
      },
      '&.Mui-focused span': {
        background: theme.palette.background.paper,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: "".concat(borderRadius, " 0 0 ").concat(borderRadius)
      }
    },
    color: error ? 'error' : 'primary',
    fullWidth: true,
    placeholder: placeholder,
    inputRef: function inputRef(input) {
      return input && focused && input.focus();
    },
    onChange: onChange,
    value: value,
    disabled: disabled,
    type: type,
    startAdornment: startAdornment && /*#__PURE__*/React__default["default"].createElement("span", {
      style: {
        paddingRight: 17
      }
    }, startAdornment),
    endAdornment: endAdornment && /*#__PURE__*/React__default["default"].createElement("span", {
      style: {
        paddingRight: 20,
        right: 0
      }
    }, endAdornment)
  }, rest)), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    justifyContent: "space-between"
  }, subStr && /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    fontSize: 12,
    mt: 12,
    sx: {
      color: theme.palette.text.secondary
    }
  }, subStr), subStr2 && /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    fontSize: 12,
    mt: 12,
    sx: {
      color: theme.palette.text.secondary
    }
  }, subStr2)));
}

var _excluded$4 = ["placeholder", "onChange", "maxWidth", "onMax", "balance", "label", "unit", "endAdornment", "subStr", "integer"];
var inputRegex = RegExp("^\\d*(?:\\\\[.])?\\d*$"); // match escaped "." characters via in a non-capturing group

var enforcer = function enforcer(nextUserInput, integer) {
  if (integer && nextUserInput !== '') {
    return parseInt(nextUserInput).toString();
  }

  var fixed = nextUserInput.replace(/,/g, '.');

  if (fixed === '' || inputRegex.test(escapeRegExp(fixed))) {
    return fixed;
  }

  return null;
};

function NumericalInput(_ref) {
  var placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      maxWidth = _ref.maxWidth;
      _ref.onMax;
      var balance = _ref.balance,
      label = _ref.label,
      unit = _ref.unit,
      endAdornment = _ref.endAdornment,
      subStr = _ref.subStr,
      integer = _ref.integer,
      props = _objectWithoutProperties__default["default"](_ref, _excluded$4);

  var handleChange = React.useCallback(function (event) {
    // replace commas with periods
    var formatted = enforcer(event.target.value, integer);

    if (formatted === null) {
      return;
    }

    event.target.value = formatted;
    onChange && onChange(event);
  }, [integer, onChange]);
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      position: 'relative',
      maxWidth: maxWidth !== null && maxWidth !== void 0 ? maxWidth : 'unset',
      width: '100%'
    }
  }, (label || balance) && /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    justifyContent: "space-between"
  }, /*#__PURE__*/React__default["default"].createElement(InputLabel, null, label), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    alignItems: "baseline"
  }, !!balance && /*#__PURE__*/React__default["default"].createElement(InputLabel, {
    style: {
      fontSize: '12px'
    }
  }, "Available: ", balance, " ", unit !== null && unit !== void 0 ? unit : 'MATTER'))), /*#__PURE__*/React__default["default"].createElement(Input, _extends__default["default"]({}, props, {
    // universal input options
    maxWidth: maxWidth,
    onChange: handleChange,
    inputMode: "decimal",
    title: "Token Amount",
    autoComplete: "off",
    autoCorrect: "off" // text-specific options
    ,
    type: "text",
    pattern: "^[0-9]*[.,]?[0-9]*$",
    placeholder: placeholder || '0.0',
    minLength: 1,
    maxLength: 79,
    spellCheck: "false",
    endAdornment: endAdornment,
    subStr: subStr
  })));
}

function Loader(_ref) {
  _ref.color;
      _ref.margin;
      _ref.size;
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "grid",
    gap: 19,
    justifyItems: "center"
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    sx: {
      color: function color(theme) {
        return theme.palette.text.secondary;
      }
    },
    fontSize: 16,
    fontWeight: 500
  }, "Loading", /*#__PURE__*/React__default["default"].createElement(Dots, null)));
}

var _excluded$3 = ["src", "alt", "style", "className", "altSrc"];
var BAD_SRCS = {};
function Image(_ref) {
  var src = _ref.src,
      _ref$alt = _ref.alt,
      alt = _ref$alt === void 0 ? '' : _ref$alt,
      style = _ref.style,
      className = _ref.className,
      altSrc = _ref.altSrc,
      rest = _objectWithoutProperties__default["default"](_ref, _excluded$3);

  var _useState = React.useState(0),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      refresh = _useState2[1];

  var srcs = React.useMemo(function () {
    return [src, altSrc];
  }, [src, altSrc]);
  var srcStr = srcs.find(function (item) {
    return !BAD_SRCS[item !== null && item !== void 0 ? item : ''];
  });
  return /*#__PURE__*/React__default["default"].createElement("img", _extends__default["default"]({}, rest, {
    src: srcStr,
    alt: alt,
    style: style,
    className: className,
    onError: function onError() {
      if (srcStr) BAD_SRCS[srcStr] = true;
      refresh(function (i) {
        return i + 1;
      });
    }
  }));
}

var Wrapper$1 = material.styled('div')({});
function LogoText(_ref) {
  var logo = _ref.logo,
      text = _ref.text,
      fontWeight = _ref.fontWeight,
      fontSize = _ref.fontSize,
      gapSize = _ref.gapSize,
      size = _ref.size;
  return /*#__PURE__*/React__default["default"].createElement(Wrapper$1, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: fontWeight !== null && fontWeight !== void 0 ? fontWeight : 400,
      fontSize: fontSize !== null && fontSize !== void 0 ? fontSize : 16,
      '& > img, > svg': {
        marginRight: gapSize === 'small' ? '4px' : '12px',
        height: size ? size : '20px',
        width: size ? size : '20px'
      }
    }
  }, typeof logo === 'string' ? /*#__PURE__*/React__default["default"].createElement(Image, {
    src: logo,
    alt: "".concat(text, " logo")
  }) : logo, /*#__PURE__*/React__default["default"].createElement("span", null, text));
}

var StyledSwitch = material.styled(material.Switch)(function () {
  var _$concat, _ref;

  return _ref = {}, _defineProperty__default["default"](_ref, "&.".concat(Switch.switchClasses.root), {
    width: 44,
    height: 24,
    padding: 0
  }), _defineProperty__default["default"](_ref, "& .".concat(Switch.switchClasses.switchBase), {
    padding: '4px 6px'
  }), _defineProperty__default["default"](_ref, "& .".concat(Switch.switchClasses.thumb), {
    width: 16,
    height: 16,
    backgroundColor: '#FFFFFF'
  }), _defineProperty__default["default"](_ref, "& .".concat(Switch.switchClasses.track), {
    width: 80,
    height: 24,
    opacity: '1 !important',
    // backgroundColor: '#DADADA',
    // border: '1px solid #cccccc',
    borderRadius: '30px',
    position: 'relative' // '&:before, &:after': {
    //   display: 'inline-block',
    //   position: 'absolute',
    //   top: '50%',
    //   width: '50%',
    //   transform: 'translateY(-50%)',
    //   textAlign: 'center'
    // }
    // '&:before': {
    //   content: '"On"',
    //   left: 4,
    //   opacity: 0
    // }
    // '&:after': {
    //   content: '"Off"',
    //   right: 4
    // }

  }), _defineProperty__default["default"](_ref, "& .".concat(Switch.switchClasses.checked), (_$concat = {}, _defineProperty__default["default"](_$concat, "&.".concat(Switch.switchClasses.switchBase), {
    transform: 'translateX(16px)',
    '&:hover': {}
  }), _defineProperty__default["default"](_$concat, "& .".concat(Switch.switchClasses.thumb), {
    backgroundColor: '#FFFFFF'
  }), _defineProperty__default["default"](_$concat, "& + .".concat(Switch.switchClasses.track), {
    backgroundColor: '#1F9898' // opacity: '1 !important',
    // border: '1px solid #cccccc'
    // borderRadius: '49px'
    // '&:before': {
    //   opacity: 1
    // },
    // '&:after': {
    //   opacity: 0
    // }

  }), _$concat)), _ref;
});
function SwitchToggle(_ref2) {
  var checked = _ref2.checked,
      onChange = _ref2.onChange;
  return /*#__PURE__*/React__default["default"].createElement(StyledSwitch, {
    checked: checked,
    onChange: onChange,
    sx: _defineProperty__default["default"]({}, "& .".concat(Switch.switchClasses.track), {
      backgroundColor: '#DADADA30'
    })
  });
}

function useERC721Tokens() {
  var _useState = React.useState([]),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      tokens = _useState2[0],
      setTokens = _useState2[1];

  var onRemoveToken = React.useCallback(function (token) {
    var newTokens = tokens.filter(function (el) {
      return el != token;
    });
    setTokens(newTokens);
  }, [tokens]);
  var onAddToken = React.useCallback(function (token) {
    var list = tokens;
    var index = tokens.findIndex(function (el) {
      return el.tokenId === token.tokenId;
    });

    if (index !== -1) {
      return;
    }

    list.push(token);
    setTokens(_toConsumableArray__default["default"](list));
  }, [tokens]);
  var onToggleToken = React.useCallback(function (token) {
    var newToken = tokens.find(function (el) {
      return el.tokenId == token.tokenId;
    });

    if (newToken) {
      onRemoveToken(token);
    } else {
      onAddToken(token);
    }
  }, [onAddToken, onRemoveToken, tokens]);
  var onClearTokens = React.useCallback(function () {
    setTokens([]);
  }, []);
  return {
    tokens: tokens,
    setTokens: setTokens,
    onRemoveToken: onRemoveToken,
    onAddToken: onAddToken,
    onClearTokens: onClearTokens,
    onToggleToken: onToggleToken
  };
}

var ERC20_INTERFACE = new abi$2.Interface(ERC20_ABI);
new abi$2.Interface(ERC20_BYTES32_ABI);

var _DEFAULT_721_LIST;
var test721List = [{
  address: '0x54C0ac6D96D7B79c2941FaA33e61188611F4d813',
  name: 'Mutant Ape Yacht Club',
  synbol: 'BAYC'
}, {
  address: '0x9D88b325faA7b4C3E845c493fF282ed317414F6f',
  name: 'CryptoPunks',
  symbol: 'cp'
}, {
  address: '0x9cd61d732a7BFb6D3C1E7F1b26e5aafB3A5763cd',
  name: 'Chromie Squiggle ',
  symbol: 'CS'
}, {
  address: '0x0516eD436C66FC45E3353A784F64674F7DFD5940',
  name: 'Pudgy Penguins ',
  symbol: 'PPG'
}, {
  address: '0x1137aaCBFDDD6Ed98a1a0B98D5a67d51f157bc31',
  name: 'World Of Women',
  symbol: 'WOW'
}, {
  address: '0xD530d2191eBfF1b4CcC6A1f429Fdd8B965114296',
  name: 'RENGA',
  symbol: 'RNG'
}, {
  address: '0x12AA0C5C73A4f5de6c5C646a5279505D0a4be970',
  name: 'Exosama',
  symbol: 'ESO'
}, {
  address: '0x70020E84b37c54141e847b9AE540C1cA41cF2882',
  name: 'Cool Cats',
  symbol: 'COOL'
}, {
  address: '0xCaaB4d2107D465Ed58c2AAD6554b2dA1C3117860',
  name: 'Doodles',
  symbol: 'DOODLE'
}, {
  address: '0xBA1a650Abd084AbF42742AB7df5f7E65D458481B',
  name: 'Azuki',
  symbol: 'AZUKI'
}];
var test721ListSepolia = [{
  name: 'LADDER-TEST-721-1',
  symbol: 'T-721-1',
  address: '0x6746e7bd4250263F7F6CedEEDa3d055749c82A9e'
}, {
  name: 'LADDER-TEST-721-2',
  symbol: 'T-721-2',
  address: '0x96013A85E4B2ad0B579A8713a56225F8ed7530E9'
}, {
  name: 'LADDER-TEST-721-3',
  symbol: 'T-721-3',
  address: '0x5070F6ac4B161aa3f9B48E14d4A6182752939Cfe'
}, {
  name: 'LADDER-TEST-721-4',
  symbol: 'T-721-4',
  address: '0x31F2e3D0Ee3a97c0B3186eBAf5CAa92677046654'
}, {
  name: 'LADDER-TEST-721-5',
  symbol: 'T-721-5',
  address: '0x3186385C1c1C20B5230723dc67C18AA63D010C7d'
}, {
  name: 'LADDER-TEST-721-6',
  symbol: 'T-721-6',
  address: '0x5D0F0780c6f7d95780D50de1413919E8CdD5579d'
}, {
  name: 'LADDER-TEST-721-7',
  symbol: 'T-721-7',
  address: '0xd4C70114d12b05eACE5749dF0878891570BB0BEE'
}, {
  name: 'LADDER-TEST-721-8',
  symbol: 'T-721-8',
  address: '0xdB16d60B19F0de9F1702d7f5E400A38c0A35aa25'
}, {
  name: 'LADDER-TEST-721-9',
  symbol: 'T-721-9',
  address: '0x21243b3C267CeB2794dc4a1eaad223CDD2e27732'
}, {
  name: 'LADDER-TEST-721-10',
  symbol: ' T-721-10',
  address: '0xDE9e6C49C1E009314973A1FF37385b443d418971'
}];
var getTest721uri = function getTest721uri(name) {
  return "https://info.chainswap.com/".concat(name.split(' ').join(''), "/0.jpg");
};
var isTest721 = function isTest721(address) {
  var testAsset = test721List.find(function (item) {
    return item.address == address;
  });
  return !!testAsset;
};
var TEST_721_LIST = test721List.map(function (_ref) {
  var address = _ref.address,
      name = _ref.name,
      symbol = _ref.symbol;
  return {
    address: address,
    tokenId: undefined,
    metadata: {
      name: name,
      symbol: symbol,
      uri: getTest721uri(name)
    }
  };
});
TEST_721_LIST.unshift({
  address: '0x502AE96a7D3A13A51b7A13613569113A70841dEb',
  tokenId: undefined,
  metadata: {
    name: 'Test 721',
    symbol: 'TEST_721'
  }
});
(_DEFAULT_721_LIST = {}, _defineProperty__default["default"](_DEFAULT_721_LIST, sdk.ChainId.MAINNET, []), _defineProperty__default["default"](_DEFAULT_721_LIST, sdk.ChainId.RINKEBY, [{
  address: '0x8978F929a3d85E92f5eA89613Cc4fD2B37294Db2',
  tokenId: undefined,
  metadata: {
    name: 'Standard ERC721',
    symbol: 'ERC721'
  }
}]), _defineProperty__default["default"](_DEFAULT_721_LIST, sdk.ChainId.GÖRLI, TEST_721_LIST), _defineProperty__default["default"](_DEFAULT_721_LIST, sdk.ChainId.SEPOLIA, test721ListSepolia.map(function (_ref2, index) {
  var address = _ref2.address,
      name = _ref2.name,
      symbol = _ref2.symbol;
  return {
    address: address,
    tokenId: undefined,
    metadata: {
      name: name,
      symbol: symbol,
      uri: getTest721uri(test721List[index].name)
    }
  };
})), _DEFAULT_721_LIST);

var defaultContext = {
  erc20List: [],
  erc1155List: [],
  erc721Map: {},
  erc721List: []
};
var TokenMapContext = /*#__PURE__*/React.createContext(defaultContext);
function useTokenLists() {
  var chainTokenMap = React.useContext(TokenMapContext);
  return chainTokenMap;
}
function TokenListsProvider(_ref) {
  var children = _ref.children,
      erc20List = _ref.erc20List,
      erc1155List = _ref.erc1155List,
      erc721List = _ref.erc721List;

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var val = React.useMemo(function () {
    if (!chainId) {
      return defaultContext;
    }

    return {
      erc20List: erc20List !== null && erc20List !== void 0 && erc20List[chainId] ? erc20List[chainId] : [],
      erc1155List: erc1155List !== null && erc1155List !== void 0 && erc1155List[chainId] ? erc1155List[chainId] : [],
      erc721List: erc721List !== null && erc721List !== void 0 && erc721List[chainId] ? erc721List[chainId] : [],
      erc721Map: erc721List !== null && erc721List !== void 0 && erc721List[chainId] ? ListToMap(erc721List[chainId]) : {}
    };
  }, [chainId, erc1155List, erc20List, erc721List]);
  return /*#__PURE__*/React__default["default"].createElement(TokenMapContext.Provider, {
    value: val
  }, children);
}

function ListToMap(list) {
  return list.reduce(function (acc, item) {
    if (item.address) {
      acc[item.address] = item;
    }

    return acc;
  }, {});
}

var _EMPTY_LIST;

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$b(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var EMPTY_LIST = (_EMPTY_LIST = {}, _defineProperty__default["default"](_EMPTY_LIST, sdk.ChainId.KOVAN, {}), _defineProperty__default["default"](_EMPTY_LIST, sdk.ChainId.RINKEBY, {}), _defineProperty__default["default"](_EMPTY_LIST, sdk.ChainId.ROPSTEN, {}), _defineProperty__default["default"](_EMPTY_LIST, sdk.ChainId.GÖRLI, {}), _defineProperty__default["default"](_EMPTY_LIST, sdk.ChainId.MAINNET, {}), _defineProperty__default["default"](_EMPTY_LIST, sdk.ChainId.BSC, {}), _defineProperty__default["default"](_EMPTY_LIST, sdk.ChainId.SEPOLIA, {}), _EMPTY_LIST);
var listCache = typeof WeakMap !== 'undefined' ? new WeakMap() : null;
function listToTokenMap(list) {
  var result = listCache === null || listCache === void 0 ? void 0 : listCache.get(list);
  if (result) return result;
  var map = list.tokens.reduce(function (tokenMap, tokenInfo) {
    var _tokenInfo$tags$map$f, _tokenInfo$tags, _tokenInfo$tags$map, _tokenMap$token$chain;

    var tags = (_tokenInfo$tags$map$f = (_tokenInfo$tags = tokenInfo.tags) === null || _tokenInfo$tags === void 0 ? void 0 : (_tokenInfo$tags$map = _tokenInfo$tags.map(function (tagId) {
      var _list$tags;

      if (!((_list$tags = list.tags) !== null && _list$tags !== void 0 && _list$tags[tagId])) return undefined;
      return _objectSpread$b(_objectSpread$b({}, list.tags[tagId]), {}, {
        id: tagId
      });
    })) === null || _tokenInfo$tags$map === void 0 ? void 0 : _tokenInfo$tags$map.filter(function (x) {
      return Boolean(x);
    })) !== null && _tokenInfo$tags$map$f !== void 0 ? _tokenInfo$tags$map$f : [];
    var token = new WrappedTokenInfo(tokenInfo, tags);
    if (((_tokenMap$token$chain = tokenMap[token.chainId]) === null || _tokenMap$token$chain === void 0 ? void 0 : _tokenMap$token$chain[token.address]) !== undefined) throw Error('Duplicate tokens.');
    return _objectSpread$b(_objectSpread$b({}, tokenMap), {}, _defineProperty__default["default"]({}, token.chainId, _objectSpread$b(_objectSpread$b({}, tokenMap[token.chainId]), {}, _defineProperty__default["default"]({}, token.address, {
      token: token,
      list: list
    }))));
  }, _objectSpread$b({}, EMPTY_LIST));
  listCache === null || listCache === void 0 ? void 0 : listCache.set(list, map);
  return map;
}

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$a(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function useDefaultTokenList() {
  return listToTokenMap(DEFAULT_TOKEN_LIST__default["default"]);
} // reduce token map into standard address <-> Token mapping, optionally include user added tokens

function useTokensFromMap(tokenMap, includeUserAdded) {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  return React.useMemo(function () {
    var _Object$keys;

    if (!chainId || !tokenMap[chainId]) return {}; // reduce to just tokens

    var mapWithoutUrls = (_Object$keys = Object.keys(tokenMap[chainId])) === null || _Object$keys === void 0 ? void 0 : _Object$keys.reduce(function (newMap, address) {
      newMap[address] = tokenMap[chainId][address].token;
      return newMap;
    }, {});
    return mapWithoutUrls;
  }, [chainId, tokenMap]);
}

var testTokens = {
  '0x0F85225ab45b77DA055c5B5f9e5F4F919A1D17EA ': new WrappedTokenInfo({
    chainId: 5,
    address: '0x0F85225ab45b77DA055c5B5f9e5F4F919A1D17EA',
    decimals: 18,
    symbol: 'tWETH',
    name: 'testETH-LadderV2-ETH-Testnet'
  }, []),
  '0x314195C69d8F0236939a31f64cB367764672CA0f ': new WrappedTokenInfo({
    chainId: 5,
    address: '0x314195C69d8F0236939a31f64cB367764672CA0f',
    decimals: 18,
    symbol: 'tUSDC',
    name: 'testUSDC-LadderV2-USDC-Testnet'
  }, [])
};
function useAllTokens() {
  var allTokens = useDefaultTokenList(); //add user added tokens

  var tokens = useTokensFromMap(allTokens);
  return React.useMemo(function () {
    return _objectSpread$a(_objectSpread$a({}, tokens), NETWORK_CHAIN_ID === 5 ? testTokens : {});
  }, [tokens]);
} // parse a name or symbol from a token response

function checkIs721(token) {
  return !!token && !!(token instanceof Token721) && token.is721 == true;
}
function filter721(token) {
  if (token && token instanceof Token721 && token.is721 == true) {
    return token;
  }

  return undefined;
}
function checkIs1155(token) {
  return !!token && !!(token instanceof Token1155) && token.is1155 == true;
}
function filter1155(token) {
  if (token && token instanceof Token1155 && token.is1155 == true) {
    return token;
  }

  return undefined;
}
function getTokenText(token1, token2) {
  var _ref, _ref2, _ref4, _ref5, _filter1155$tokenId2, _filter2, _filter1155$tokenId3, _filter3;

  if (!token1) {
    return {
      Token1Text: function Token1Text() {
        return null;
      },
      Token2Text: function Token2Text() {
        return null;
      },
      token1Is1155: false,
      token2Is1155: false,
      toke1Text: '',
      token2Text: ''
    };
  }

  var token1Is1155 = checkIs1155(token1);
  var token1Is721 = checkIs721(token1);
  var tokenIsNFT = token1Is1155 || token1Is721;
  var token1Text = (_ref = token1Is1155 ? (_ref2 = (token1 === null || token1 === void 0 ? void 0 : token1.name) + ' #' + token1.tokenId) !== null && _ref2 !== void 0 ? _ref2 : '-' : tokenIsNFT ? token1 === null || token1 === void 0 ? void 0 : token1.name : token1 === null || token1 === void 0 ? void 0 : token1.symbol) !== null && _ref !== void 0 ? _ref : '';
  var Token1Text = token1Is1155 ? function (_ref3) {
    var fontSize = _ref3.fontSize,
        color = _ref3.color;
    return /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      component: "span",
      color: color !== null && color !== void 0 ? color : 'primary',
      fontSize: fontSize
    }, token1Text);
  } : function () {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, token1Text);
  };

  if (!token2) {
    var _filter1155$tokenId, _filter;

    return {
      Token1Text: Token1Text,
      Token2Text: function Token2Text() {
        return null;
      },
      token1Is1155: token1Is1155,
      token2Is1155: false,
      token1Id: (_filter1155$tokenId = (_filter = filter1155(token1)) === null || _filter === void 0 ? void 0 : _filter.tokenId) !== null && _filter1155$tokenId !== void 0 ? _filter1155$tokenId : '',
      token1Text: token1Text,
      token2Text: '',
      token2Id: ''
    };
  }

  var token2Is1155 = checkIs1155(token2);
  var token2Is721 = checkIs721(token2);
  var token2IsNFT = token2Is1155 || token2Is721;
  var token2Text = (_ref4 = token2Is1155 ? (_ref5 = (token2 === null || token2 === void 0 ? void 0 : token2.name) + ' #' + token2.tokenId) !== null && _ref5 !== void 0 ? _ref5 : '-' : token2IsNFT ? token2 === null || token2 === void 0 ? void 0 : token2.name : token2 === null || token2 === void 0 ? void 0 : token2.symbol) !== null && _ref4 !== void 0 ? _ref4 : '';
  var Token2Text = token2IsNFT ? function (_ref6) {
    var fontSize = _ref6.fontSize,
        color = _ref6.color;
    return /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      component: "span",
      color: color !== null && color !== void 0 ? color : 'primary',
      fontSize: fontSize
    }, token2Text);
  } : function () {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, token2Text);
  };
  return {
    token1Text: token1Text,
    token2Text: token2Text,
    Token1Text: Token1Text,
    Token2Text: Token2Text,
    token2Is1155: token2Is1155,
    token1Is1155: token1Is1155,
    token1Id: (_filter1155$tokenId2 = (_filter2 = filter1155(token1)) === null || _filter2 === void 0 ? void 0 : _filter2.tokenId) !== null && _filter1155$tokenId2 !== void 0 ? _filter1155$tokenId2 : '',
    token2Id: (_filter1155$tokenId3 = (_filter3 = filter1155(token2)) === null || _filter3 === void 0 ? void 0 : _filter3.tokenId) !== null && _filter1155$tokenId3 !== void 0 ? _filter1155$tokenId3 : ''
  };
}

/**
 * Returns a map of the given addresses to their eventually consistent ETH balances.
 */

function useETHBalances(uncheckedAddresses) {
  var multicallContract = useInterfaceMulticall();
  var addresses = React.useMemo(function () {
    return uncheckedAddresses ? uncheckedAddresses.map(isAddress).filter(function (a) {
      return a !== false;
    }).sort() : [];
  }, [uncheckedAddresses]);
  var results = useSingleContractMultipleData(multicallContract, 'getEthBalance', addresses.map(function (address) {
    return [address];
  }));
  return React.useMemo(function () {
    return addresses.reduce(function (memo, address, i) {
      var _results$i, _results$i$result;

      var value = results === null || results === void 0 ? void 0 : (_results$i = results[i]) === null || _results$i === void 0 ? void 0 : (_results$i$result = _results$i.result) === null || _results$i$result === void 0 ? void 0 : _results$i$result[0];
      if (value) memo[address] = sdk.CurrencyAmount.ether(sdk.JSBI.BigInt(value.toString()));
      return memo;
    }, {});
  }, [addresses, results]);
}
/**
 * Returns a map of token addresses to their eventually consistent token balances for a single account.
 */

function useTokenBalancesWithLoadingIndicator(address, tokens) {
  var validatedTokens = React.useMemo(function () {
    var _tokens$filter;

    return (_tokens$filter = tokens === null || tokens === void 0 ? void 0 : tokens.filter(function (t) {
      return isAddress(t === null || t === void 0 ? void 0 : t.address) !== false;
    })) !== null && _tokens$filter !== void 0 ? _tokens$filter : [];
  }, [tokens]);
  var arg = React.useMemo(function () {
    return [address];
  }, [address]);
  var validatedTokenAddresses = React.useMemo(function () {
    return validatedTokens.map(function (vt) {
      return vt.address;
    });
  }, [validatedTokens]);
  var balances = useMultipleContractSingleData(validatedTokenAddresses, ERC20_INTERFACE, 'balanceOf', arg);
  var anyLoading = React.useMemo(function () {
    return balances.some(function (callState) {
      return callState.loading;
    });
  }, [balances]);
  return [React.useMemo(function () {
    return address && validatedTokens.length > 0 ? validatedTokens.reduce(function (memo, token, i) {
      var _balances$i, _balances$i$result;

      var value = balances === null || balances === void 0 ? void 0 : (_balances$i = balances[i]) === null || _balances$i === void 0 ? void 0 : (_balances$i$result = _balances$i.result) === null || _balances$i$result === void 0 ? void 0 : _balances$i$result[0];
      var amount = value ? sdk.JSBI.BigInt(value.toString()) : undefined;

      if (amount) {
        memo[token.address] = new sdk.TokenAmount(token, amount);
      }

      return memo;
    }, {}) : {};
  }, [address, validatedTokens, balances]), anyLoading];
}
function useTokenBalances(address, tokens) {
  return useTokenBalancesWithLoadingIndicator(address, tokens)[0];
} // get the balance for a single token/account combo

function useTokenBalance(account, token) {
  var tokenBalances = useTokenBalances(account, [token]);
  if (!token) return undefined;
  return tokenBalances[token.address];
}
function useCurrencyBalances(account, currencies) {
  var tokens = React.useMemo(function () {
    var _currencies$filter;

    return (_currencies$filter = currencies === null || currencies === void 0 ? void 0 : currencies.filter(function (currency) {
      return currency instanceof sdk.Token;
    })) !== null && _currencies$filter !== void 0 ? _currencies$filter : [];
  }, [currencies]);
  var tokenBalances = useTokenBalances(account, tokens);
  var containsETH = React.useMemo(function () {
    var _currencies$some;

    return (_currencies$some = currencies === null || currencies === void 0 ? void 0 : currencies.some(function (currency) {
      return currency === sdk.ETHER;
    })) !== null && _currencies$some !== void 0 ? _currencies$some : false;
  }, [currencies]);
  var ethBalance = useETHBalances(containsETH ? [account] : []);
  return React.useMemo(function () {
    var _currencies$map;

    return (_currencies$map = currencies === null || currencies === void 0 ? void 0 : currencies.map(function (currency) {
      if (!account || !currency) return undefined;
      if (currency instanceof sdk.Token) return tokenBalances[currency.address];
      if (currency === sdk.ETHER) return ethBalance[account];
      return undefined;
    })) !== null && _currencies$map !== void 0 ? _currencies$map : [];
  }, [account, currencies, ethBalance, tokenBalances]);
}
function useCurrencyBalance(account, currency) {
  var is1155 = checkIs1155(currency);
  var is721 = checkIs721(currency);
  var token1155Balance = useToken1155Balance(is1155 ? currency : undefined);
  var token721Balance = useToken721Balance(is721 ? currency : undefined);
  var balances = useCurrencyBalances(is1155 || is721 ? undefined : account, [currency])[0];
  return is721 ? token721Balance : is1155 ? token1155Balance : balances;
} // mimics useAllBalances

function useAllTokenBalances() {
  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account;

  var allTokens = useAllTokens();
  var allTokensArray = React.useMemo(function () {
    return Object.values(allTokens !== null && allTokens !== void 0 ? allTokens : {});
  }, [allTokens]);
  var balances = useTokenBalances(account !== null && account !== void 0 ? account : undefined, allTokensArray);
  return React.useMemo(function () {
    return balances !== null && balances !== void 0 ? balances : {};
  }, [balances]);
}
function useToken1155Balances(tokens) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = React.useState(undefined),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = React.useState(undefined),
      _useState6 = _slicedToArray__default["default"](_useState5, 2),
      balances = _useState6[0],
      setBalances = _useState6[1];

  var _useWeb3React2 = core.useWeb3React(),
      account = _useWeb3React2.account,
      library = _useWeb3React2.provider;

  var blockNumber = useBlockNumber();
  var calls = React.useMemo(function () {
    if (!tokens || !library) return undefined;
    return Promise.all(tokens.map(function (_ref) {
      var tokenId = _ref.tokenId,
          address = _ref.address;
      var contract = getContract(address, ERC21155_ABI, library, account !== null && account !== void 0 ? account : undefined);
      if (!contract) return undefined;
      return contract.balanceOf(account, tokenId);
    }));
  }, [account, library, tokens]);
  React.useEffect(function () {

    _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
      var callRes, res;
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setError(undefined);
              setLoading(true);
              _context.prev = 2;
              _context.next = 5;
              return calls;

            case 5:
              callRes = _context.sent;
              setLoading(false);
              res = tokens === null || tokens === void 0 ? void 0 : tokens.map(function (token, idx) {
                var _callRes$idx$toString, _callRes$idx;

                return new sdk.TokenAmount(token, (_callRes$idx$toString = callRes === null || callRes === void 0 ? void 0 : (_callRes$idx = callRes[idx]) === null || _callRes$idx === void 0 ? void 0 : _callRes$idx.toString()) !== null && _callRes$idx$toString !== void 0 ? _callRes$idx$toString : '0');
              });
              setBalances(res);
              _context.next = 17;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              setLoading(false);
              setError(_context.t0.message);
              console.error(_context.t0.message);
              setBalances(undefined);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11]]);
    }))(); // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [calls, blockNumber, tokens]);
  return {
    loading: loading,
    error: error,
    balances: balances
  };
}
function useToken1155Balance(token) {
  var _useWeb3React3 = core.useWeb3React(),
      account = _useWeb3React3.account;

  var args = React.useMemo(function () {
    return [account !== null && account !== void 0 ? account : undefined, token === null || token === void 0 ? void 0 : token.tokenId];
  }, [account, token === null || token === void 0 ? void 0 : token.tokenId]);
  var contract = use1155Contract(token !== null && token !== void 0 && token.address ? token.address : undefined);
  var balance = useSingleCallResult(contract, 'balanceOf', args);
  var amount = React.useMemo(function () {
    var _balance$result$;

    return token && balance.result ? new sdk.TokenAmount(token, (_balance$result$ = balance.result[0]) === null || _balance$result$ === void 0 ? void 0 : _balance$result$.toString()) : undefined;
  }, [balance.result, token]);
  return amount;
}
function useToken721Balance(token) {
  var _useWeb3React5 = core.useWeb3React(),
      account = _useWeb3React5.account;

  var args = React.useMemo(function () {
    return [account !== null && account !== void 0 ? account : undefined];
  }, [account]);
  var contract = use721Contract(token && isAddress(token === null || token === void 0 ? void 0 : token.address) ? token === null || token === void 0 ? void 0 : token.address : undefined);
  var balance = useSingleCallResult(token && account ? contract : null, 'balanceOf', args);
  var amount = React.useMemo(function () {
    var _balance$result$2;

    return token && balance.result ? new sdk.TokenAmount(token, (_balance$result$2 = balance.result[0]) === null || _balance$result$2 === void 0 ? void 0 : _balance$result$2.toString()) : undefined;
  }, [balance.result, token]);
  return amount;
}
function useToken721BalanceTokens(tokenAmount) {
  var _tokenAmount$token, _tokenAmount$token2;

  var _useWeb3React6 = core.useWeb3React(),
      account = _useWeb3React6.account,
      chainId = _useWeb3React6.chainId;

  var _useState13 = React.useState(false),
      _useState14 = _slicedToArray__default["default"](_useState13, 2),
      loading = _useState14[0],
      setLoading = _useState14[1];

  var _useState15 = React.useState(undefined),
      _useState16 = _slicedToArray__default["default"](_useState15, 2),
      tokens = _useState16[0],
      setTokens = _useState16[1];

  var contract = use721Contract(isAddress(tokenAmount === null || tokenAmount === void 0 ? void 0 : (_tokenAmount$token = tokenAmount.token) === null || _tokenAmount$token === void 0 ? void 0 : _tokenAmount$token.address) ? tokenAmount === null || tokenAmount === void 0 ? void 0 : (_tokenAmount$token2 = tokenAmount.token) === null || _tokenAmount$token2 === void 0 ? void 0 : _tokenAmount$token2.address : undefined);
  var calls = React.useMemo(function () {
    var balance = tokenAmount === null || tokenAmount === void 0 ? void 0 : tokenAmount.toExact();
    if (!balance || !account || !contract) return;
    var total = parseInt(balance);
    var arr = Array.from(Array(total).keys()).map(function (_, idx) {
      return contract.tokenOfOwnerByIndex(account, idx);
    });
    return arr; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, contract, tokenAmount === null || tokenAmount === void 0 ? void 0 : tokenAmount.toExact()]);
  React.useEffect(function () {
    if (!calls || !chainId || !(tokenAmount !== null && tokenAmount !== void 0 && tokenAmount.raw)) {
      return;
    }

    _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3() {
      var indexes, _tokens;

      return _regeneratorRuntime__default["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setLoading(true);
              _context3.prev = 1;
              _context3.next = 4;
              return Promise.all(calls);

            case 4:
              indexes = _context3.sent;
              _tokens = indexes.map(function (id) {
                var _tokenAmount$token3, _tokenAmount$token3$n;

                return new Token721(chainId, tokenAmount.token.address, id.toString(), {
                  name: tokenAmount.token.name,
                  symbol: tokenAmount.token.symbol,
                  uri: chainId === sdk.ChainId.GÖRLI && isTest721(tokenAmount.token.address) ? "https://info.chainswap.com/".concat((_tokenAmount$token3 = tokenAmount.token) === null || _tokenAmount$token3 === void 0 ? void 0 : (_tokenAmount$token3$n = _tokenAmount$token3.name) === null || _tokenAmount$token3$n === void 0 ? void 0 : _tokenAmount$token3$n.split(' ').join(''), "/").concat(id, ".jpg") : undefined
                });
              });
              setTokens(_tokens);
              setLoading(false);
              _context3.next = 14;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](1);
              setLoading(false);
              console.error('cannot get 721 available ids');

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 10]]);
    }))(); // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [calls, chainId, tokenAmount === null || tokenAmount === void 0 ? void 0 : tokenAmount.toExact()]);
  var res = React.useMemo(function () {
    return {
      loading: loading,
      availableTokens: tokens
    };
  }, [loading, tokens]);
  return res;
}

function useToken721PoolIds(pairAddress, collection) {
  var _length$result, _ids$result2;

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var contract = use721PairContract(pairAddress);
  var length = useSingleCallResult(contract, 'erc721MapLength');
  var args = React.useMemo(function () {
    return length.result ? [0, length.result.toString()] : undefined; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length === null || length === void 0 ? void 0 : (_length$result = length.result) === null || _length$result === void 0 ? void 0 : _length$result.toString()]);
  var ids = useSingleCallResult(args ? contract : null, 'erc721IDlist', args);
  var results = React.useMemo(function () {
    var _ids$result, _ids$result$;

    var isTeset721 = (collection === null || collection === void 0 ? void 0 : collection.address) && chainId === sdk.ChainId.GÖRLI && isTest721(collection === null || collection === void 0 ? void 0 : collection.address);
    return {
      loading: ids.loading,
      poolTokens: ids.result && collection ? (_ids$result = ids.result) === null || _ids$result === void 0 ? void 0 : (_ids$result$ = _ids$result[0]) === null || _ids$result$ === void 0 ? void 0 : _ids$result$.map(function (id) {
        return new Token721(collection === null || collection === void 0 ? void 0 : collection.chainId, collection === null || collection === void 0 ? void 0 : collection.address, +id.toString(), {
          name: collection.name,
          symbol: collection.symbol,
          uri: isTeset721 && collection.name ? getTest721uri(collection.name) : undefined
        });
      }) : undefined
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId, collection, ids.loading, (_ids$result2 = ids.result) === null || _ids$result2 === void 0 ? void 0 : _ids$result2[0].toString()]);
  return results;
}

function Erc721IdSelectionModal(_ref) {
  var onDismiss = _ref.onDismiss,
      collection = _ref.collection,
      onSelectSubTokens = _ref.onSelectSubTokens,
      pairAddress = _ref.pairAddress,
      setAmount = _ref.setAmount;

  var _useState = React.useState(''),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      searchId = _useState2[0],
      setSearchId = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      detailsOpen = _useState4[0],
      setDetailsOpen = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray__default["default"](_useState5, 2),
      selectAll = _useState6[0],
      setSelectAll = _useState6[1];

  var container = React.useRef(null);

  var _useERC721Tokens = useERC721Tokens(),
      onRemoveToken = _useERC721Tokens.onRemoveToken,
      tokens = _useERC721Tokens.tokens,
      onToggleToken = _useERC721Tokens.onToggleToken,
      setTokens = _useERC721Tokens.setTokens;

  var balance = useToken721Balance(pairAddress ? undefined : collection);

  var _useToken721BalanceTo = useToken721BalanceTokens(balance),
      loading = _useToken721BalanceTo.loading,
      availableTokens = _useToken721BalanceTo.availableTokens;

  var _useToken721PoolIds = useToken721PoolIds(pairAddress, collection),
      poolLoading = _useToken721PoolIds.loading,
      poolTokens = _useToken721PoolIds.poolTokens;

  var _useState7 = React.useState(pairAddress ? poolTokens : availableTokens),
      _useState8 = _slicedToArray__default["default"](_useState7, 2),
      filteredAvailableTokens = _useState8[0],
      setFilteredAvailableTokens = _useState8[1];

  var onConfirm = React.useCallback(function () {
    if (!collection) {
      return;
    }

    setAmount && setAmount({
      target: {
        value: tokens.length + ''
      }
    });
    onSelectSubTokens && onSelectSubTokens(_toConsumableArray__default["default"](tokens));
    var tokenIds = tokens.map(function (_ref2) {
      var tokenId = _ref2.tokenId;
      return tokenId;
    });
    setFilteredAvailableTokens(function (prev) {
      return prev === null || prev === void 0 ? void 0 : prev.filter(function (token) {
        return !tokenIds.includes(token.tokenId);
      });
    });
    onDismiss();
  }, [collection, onDismiss, onSelectSubTokens, setAmount, tokens]);
  var searchIdToken = React.useMemo(function () {
    if (!filteredAvailableTokens || searchId == '') return undefined;
    var res = filteredAvailableTokens.find(function (token) {
      return (token.tokenId + '').includes(searchId);
    });
    return res ? res : null;
  }, [filteredAvailableTokens, searchId]);
  var handleSearchId = React.useCallback(function (e) {
    setSearchId(e.target.value);
  }, []);
  var resetSearchId = React.useCallback(function () {
    setSearchId('');
  }, []);
  React.useEffect(function () {
    setFilteredAvailableTokens(pairAddress ? poolTokens : availableTokens);
  }, [availableTokens, pairAddress, poolTokens]);
  return /*#__PURE__*/React__default["default"].createElement(Dialog, {
    onClose: onDismiss
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    width: "100%",
    display: "grid",
    gap: 14
  }, /*#__PURE__*/React__default["default"].createElement(Header, {
    title: "Select a NFT"
  }), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    padding: "0 10px"
  }, /*#__PURE__*/React__default["default"].createElement(NumericalInput, {
    integer: true,
    value: searchId,
    onChange: handleSearchId,
    placeholder: "Search NFT token ID",
    endAdornment: /*#__PURE__*/React__default["default"].createElement(CloseIcon, {
      onClick: resetSearchId,
      sx: {
        position: 'static'
      }
    }),
    startAdornment: /*#__PURE__*/React__default["default"].createElement(SvgSearch, null),
    onKeyDown: handleSearchId,
    height: 48
  }))), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    flexDirection: 'column',
    height: "100%",
    sx: {
      overflowY: 'auto',
      padding: '0 10px '
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    margin: '10px 0 20px',
    sx: {
      display: 'grid',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, null, "Collection:"), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      borderRadius: '8px',
      background: function background(theme) {
        return theme.palette.background.paper;
      },
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      height: 50,
      padding: '0px 23px'
    }
  }, collection === null || collection === void 0 ? void 0 : collection.name, /*#__PURE__*/React__default["default"].createElement(ExternalLink, {
    href: '#',
    showIcon: true,
    sx: {
      fontSize: 12
    }
  }, collection ? shortenAddress(collection.address) : '')), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    alignItems: "center",
    gap: 5,
    marginLeft: "auto"
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, null, "Select all"), /*#__PURE__*/React__default["default"].createElement(SwitchToggle, {
    checked: selectAll,
    onChange: function onChange() {
      setSelectAll(function (state) {
        if (!state) {
          setTokens(filteredAvailableTokens);
        } else {
          setTokens([]);
        }

        return !state;
      });
    }
  }))), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    flexDirection: "column",
    gap: 20
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      minHeight: 290,
      width: '100%',
      maxWidth: '100%'
    }
  }, loading || poolLoading ? /*#__PURE__*/React__default["default"].createElement(material.Box, {
    width: '100%',
    display: "flex",
    mt: 20,
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/React__default["default"].createElement(Loader, null)) : /*#__PURE__*/React__default["default"].createElement(material.Grid, {
    container: true,
    spacing: 6,
    width: "100%",
    maxWidth: "100%",
    flexBasis: 0
  }, (searchIdToken === null || (filteredAvailableTokens === null || filteredAvailableTokens === void 0 ? void 0 : filteredAvailableTokens.length) === 0 || !filteredAvailableTokens && !loading) && /*#__PURE__*/React__default["default"].createElement(material.Box, {
    width: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: 100
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    textAlign: "center",
    mb: "20px",
    fontSize: 16,
    fontWeight: 500,
    component: "div",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, "No results found.")), searchIdToken && /*#__PURE__*/React__default["default"].createElement(material.Grid, {
    item: true,
    xs: 6
  }, /*#__PURE__*/React__default["default"].createElement(NftCard$1, {
    selected: !!tokens.find(function (item) {
      return item.tokenId === searchIdToken.tokenId;
    }),
    token: searchIdToken,
    onClick: function onClick() {
      onToggleToken(searchIdToken);
      resetSearchId();
    },
    disabled: false
  })), searchIdToken === undefined && (filteredAvailableTokens === null || filteredAvailableTokens === void 0 ? void 0 : filteredAvailableTokens.map(function (token) {
    var selected = tokens.filter(function (item) {
      return item.tokenId === token.tokenId;
    });
    return /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      item: true,
      key: token.tokenId,
      xs: 6
    }, /*#__PURE__*/React__default["default"].createElement(NftCard$1, {
      selected: !!selected.length,
      token: token,
      onClick: function onClick() {
        onToggleToken(token);
        resetSearchId();
      },
      disabled: false
    }));
  })))))), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    margin: "15px 10px 20px",
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    ref: container
  }, /*#__PURE__*/React__default["default"].createElement(material.Button, {
    onClick: onConfirm,
    disabled: tokens.length === 0 // disabled={!!amount && tokens.length !== amount}

  }, tokens.length, " NFTs has been chosen"), tokens.length > 0 && /*#__PURE__*/React__default["default"].createElement(material.Button, {
    variant: "text",
    sx: {
      width: 85
    },
    onClick: function onClick() {
      setDetailsOpen(function (state) {
        return !state;
      });
    }
  }, detailsOpen ? /*#__PURE__*/React__default["default"].createElement(MuiCloseIcon__default["default"], null) : 'Details'), detailsOpen && /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      position: 'absolute',
      bottom: '100%',
      boxShadow: 'none',
      maxHeight: 200,
      height: 'max-content',
      padding: '20px 0',
      background: function background(theme) {
        return theme.palette.background.paper;
      },
      zIndex: 1200,
      width: '100%'
    }
  }, tokens.length > 0 && /*#__PURE__*/React__default["default"].createElement(material.Box, {
    width: "100%",
    mt: 0
  }, tokens.map(function (token, idx) {
    return /*#__PURE__*/React__default["default"].createElement(material.Box, {
      key: "".concat(token.symbol, "-").concat(idx),
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }
    }, /*#__PURE__*/React__default["default"].createElement(LogoText, {
      logo: /*#__PURE__*/React__default["default"].createElement(CurrencyLogo, {
        currency: token
      }),
      text: token.name + "#".concat(token.tokenId),
      fontSize: 12
    }), /*#__PURE__*/React__default["default"].createElement(ExternalLink, {
      href: '#',
      showIcon: true,
      sx: {
        fontSize: 10
      }
    }, shortenAddress(token.address)), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      sx: {
        fontSize: 12
      }
    }, "Quantity: 1"), /*#__PURE__*/React__default["default"].createElement(material.IconButton, {
      onClick: function onClick() {
        return onRemoveToken(token);
      }
    }, /*#__PURE__*/React__default["default"].createElement(SvgXcircle, null)));
  })))));
}

function NftCard$1(_ref3) {
  var _token$name, _token$name2, _token$tokenId, _shortenAddress;

  var token = _ref3.token,
      onClick = _ref3.onClick,
      disabled = _ref3.disabled,
      _ref3$selected = _ref3.selected,
      selected = _ref3$selected === void 0 ? false : _ref3$selected;
  var theme = material.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    onClick: disabled ? undefined : onClick,
    sx: {
      border: '1px solid transparent',
      borderColor: selected ? theme.palette.primary.main : 'transparnet',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: 8,
      boxSizing: 'border-box',
      alignItems: 'center',
      borderRadius: '8px',
      background: theme.palette.background.default,
      transition: '0.5s',
      cursor: 'pointer',
      opacity: disabled ? 0.8 : 1,
      '&:hover': disabled ? {} : {
        borderColor: theme.palette.primary.main,
        background: theme.palette.background.default,
        cursor: 'pointer'
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      maxWidth: '100%',
      height: 120,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Logo, {
    srcs: token !== null && token !== void 0 && token.uri ? [token.uri] : [],
    alt: (_token$name = token.name) !== null && _token$name !== void 0 ? _token$name : '',
    style: {
      borderRadius: '8px',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    sx: {
      color: theme.palette.text.secondary,
      fontSize: 12,
      fontWeight: 600,
      mt: 8,
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'center',
      whiteSpace: 'nowrap'
    }
  }, (_token$name2 = token.name) !== null && _token$name2 !== void 0 ? _token$name2 : ''), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    sx: {
      color: theme.palette.text.secondary,
      fontSize: 12,
      fontWeight: 600,
      mb: 8
    }
  }, "#", (_token$tokenId = token.tokenId) !== null && _token$tokenId !== void 0 ? _token$tokenId : ''), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    sx: {
      color: theme.palette.text.secondary,
      fontSize: 10,
      fontWeight: 400,
      mb: 4
    }
  }, (_shortenAddress = shortenAddress(token.address)) !== null && _shortenAddress !== void 0 ? _shortenAddress : ''), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    sx: {
      fontSize: 10,
      fontWeight: 600
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      color: theme.palette.text.secondary
    }
  }, "balance: "), " 1"));
}

var ModalContext = /*#__PURE__*/React__default["default"].createContext({
  isOpen: false,
  showModal: function showModal() {
    return undefined;
  },
  hideModal: function hideModal() {
    return undefined;
  }
});
function ModalProvider(_ref) {
  var children = _ref.children;

  var _useState = React.useState(null),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var hideModal = React.useCallback(function () {
    setModal(false);
    setIsOpen(false);
  }, []);
  var showModal = React.useCallback(function (modal) {
    setModal(modal);
    setIsOpen(true);
  }, []);
  var val = React.useMemo(function () {
    return {
      isOpen: isOpen,
      hideModal: hideModal,
      showModal: showModal
    };
  }, [hideModal, isOpen, showModal]);
  return /*#__PURE__*/React__default["default"].createElement(ModalContext.Provider, {
    value: val
  }, children, modal);
}

function useModal() {
  var context = React.useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModal must be used within a provider');
  }

  return context;
}

function getSymbol(token) {
  var _getChainInfo;

  return token ? token.symbol === 'ETH' ? (_getChainInfo = getChainInfo(NETWORK_CHAIN_ID)) === null || _getChainInfo === void 0 ? void 0 : _getChainInfo.nativeCurrency.symbol : token.symbol : '';
}
function getName(token) {
  var _getChainInfo2;

  return token ? token.symbol === 'ETH' ? (_getChainInfo2 = getChainInfo(NETWORK_CHAIN_ID)) === null || _getChainInfo2 === void 0 ? void 0 : _getChainInfo2.nativeCurrency.name : token.name : '';
}

/**
 * Debounces updates to a value.
 * Non-primitives *must* wrap the value in useMemo, or the value will be updated due to referential inequality.
 */
// modified from https://usehooks.com/useDebounce/

function useDebounce(value, delay) {
  var _useState = React.useState(value),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      debouncedValue = _useState2[0],
      setDebouncedValue = _useState2[1];

  React.useEffect(function () {
    // Update debounced value after delay
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay); // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.

    return function () {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

function filterTokens(tokens, search) {
  if (search.length === 0) return tokens;
  var searchingAddress = isAddress(search);

  if (searchingAddress) {
    return tokens.filter(function (token) {
      return token.address === searchingAddress;
    });
  }

  var lowerSearchParts = search.toLowerCase().split(/\s+/).filter(function (s) {
    return s.length > 0;
  });

  if (lowerSearchParts.length === 0) {
    return tokens;
  }

  var matchesSearch = function matchesSearch(s) {
    var sParts = s.toLowerCase().split(/\s+/).filter(function (s) {
      return s.length > 0;
    });
    return lowerSearchParts.every(function (p) {
      return p.length === 0 || sParts.some(function (sp) {
        return sp.startsWith(p) || sp.endsWith(p);
      });
    });
  };

  return tokens.filter(function (token) {
    var _tokenId;

    var symbol = token.symbol,
        name = token.name;
    var matchId = 'tokenId' in token ? matchesSearch((_tokenId = token.tokenId) !== null && _tokenId !== void 0 ? _tokenId : '') : false;
    return symbol && matchesSearch(symbol) || name && matchesSearch(name) || matchId;
  });
}
function useSortedTokensByQuery(tokens, searchQuery) {
  return React.useMemo(function () {
    if (!tokens) {
      return [];
    }

    var symbolMatch = searchQuery.toLowerCase().split(/\s+/).filter(function (s) {
      return s.length > 0;
    });

    if (symbolMatch.length > 1) {
      return tokens;
    }

    var exactMatches = [];
    var symbolSubtrings = [];
    var rest = []; // sort tokens by exact match -> subtring on symbol match -> rest

    tokens.map(function (token) {
      var _token$symbol, _token$symbol2;

      if (((_token$symbol = token.symbol) === null || _token$symbol === void 0 ? void 0 : _token$symbol.toLowerCase()) === symbolMatch[0]) {
        return exactMatches.push(token);
      } else if ((_token$symbol2 = token.symbol) !== null && _token$symbol2 !== void 0 && _token$symbol2.toLowerCase().startsWith(searchQuery.toLowerCase().trim())) {
        return symbolSubtrings.push(token);
      } else {
        return rest.push(token);
      }
    });
    return [].concat(exactMatches, symbolSubtrings, rest);
  }, [tokens, searchQuery]);
}

function balanceComparator(balanceA, balanceB) {
  if (balanceA && balanceB) {
    return balanceA.greaterThan(balanceB) ? -1 : balanceA.equalTo(balanceB) ? 0 : 1;
  } else if (balanceA && balanceA.greaterThan('0')) {
    return -1;
  } else if (balanceB && balanceB.greaterThan('0')) {
    return 1;
  }

  return 0;
}

function getTokenComparator(balances) {
  return function sortTokens(tokenA, tokenB) {
    // -1 = a is first
    // 1 = b is first
    // sort by balances
    var balanceA = balances[tokenA.address];
    var balanceB = balances[tokenB.address];
    var balanceComp = balanceComparator(balanceA, balanceB);
    if (balanceComp !== 0) return balanceComp;

    if (tokenA.symbol && tokenB.symbol) {
      // sort by symbol
      return tokenA.symbol.toLowerCase() < tokenB.symbol.toLowerCase() ? -1 : 1;
    } else {
      return tokenA.symbol ? -1 : tokenB.symbol ? -1 : 0;
    }
  };
}

function useTokenComparator(inverted) {
  var balances = useAllTokenBalances();
  var comparator = React.useMemo(function () {
    return getTokenComparator(balances !== null && balances !== void 0 ? balances : {});
  }, [balances]);
  return React.useMemo(function () {
    if (inverted) {
      return function (tokenA, tokenB) {
        return comparator(tokenA, tokenB) * -1;
      };
    } else {
      return comparator;
    }
  }, [inverted, comparator]);
}

function Spinner(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      _ref$thickness = _ref.thickness,
      thickness = _ref$thickness === void 0 ? 3 : _ref$thickness,
      marginLeft = _ref.marginLeft,
      marginRight = _ref.marginRight,
      _color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      position: 'relative',
      marginLeft: marginLeft !== null && marginLeft !== void 0 ? marginLeft : 0,
      marginRight: marginRight !== null && marginRight !== void 0 ? marginRight : 0,
      height: size,
      width: size
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.CircularProgress, {
    variant: "indeterminate",
    disableShrink: true,
    sx: {
      color: function color(theme) {
        return _color !== null && _color !== void 0 ? _color : theme.palette.primary.main;
      },
      animationDuration: '850ms',
      position: 'absolute',
      left: 0,
      top: 0
    },
    thickness: thickness,
    size: size
  }));
}

function CurrencyListComponent(_ref) {
  var onSelect = _ref.onSelect,
      options = _ref.options,
      showETH = _ref.showETH;

  var _useModal = useModal(),
      hideModal = _useModal.hideModal;

  var Rows = React.useCallback(function (_ref2) {
    var data = _ref2.data;
        _ref2.index;
    var currency = data;

    var onClickCurrency = function onClickCurrency() {
      onSelect && onSelect(currency);
      hideModal();
    };

    return /*#__PURE__*/React__default["default"].createElement(CurrencyRow, {
      currency: currency,
      onClick: onClickCurrency
    });
  }, [hideModal, onSelect]);
  var itemData = React.useMemo(function () {
    var formatted = showETH ? [sdk.ETHER].concat(_toConsumableArray__default["default"](options)) : options;
    return formatted;
  }, [options, showETH]);
  return /*#__PURE__*/React__default["default"].createElement(material.Box, null, itemData && itemData.map(function (data, index) {
    return /*#__PURE__*/React__default["default"].createElement(Rows, {
      data: data,
      index: index,
      key: JSON.stringify(data) + index
    });
  }));
}
function CollectionListComponent(_ref3) {
  var onSelect = _ref3.onSelect,
      options = _ref3.options;
  // const isDownMd = useBreakpoint('md')
  // const key = useCallback((collection: Token721): string => {
  //   return collection ? collection.tokenId?.toString() || idx + '' : ''
  // }, [])
  var Rows = React.useCallback(function (_ref4) {
    var data = _ref4.data;
    var collection = data;

    var onClickCollection = function onClickCollection() {
      onSelect && onSelect(collection);
    };

    return /*#__PURE__*/React__default["default"].createElement(CurrencyRow, {
      currency: collection,
      onClick: onClickCollection
    });
  }, [onSelect]);
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    width: "100%"
  }, options.map(function (item, index) {
    return /*#__PURE__*/React__default["default"].createElement(Rows, {
      data: item,
      key: (item === null || item === void 0 ? void 0 : item.symbol) + '' + index
    });
  }));
}
var StyledBalanceText = material.styled(material.Typography)("\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n");
var ListItem = material.styled('div')({
  display: 'flex',
  cursor: 'pointer',
  padding: '0 32px',
  height: '48px',
  justifyContent: 'space-between'
});

function CurrencyRow(_ref5) {
  var currency = _ref5.currency,
      onClick = _ref5.onClick,
      style = _ref5.style;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account;

  var balance = useCurrencyBalance(account !== null && account !== void 0 ? account : undefined, currency);
  return /*#__PURE__*/React__default["default"].createElement(ListItem, {
    onClick: onClick,
    style: style
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex"
  }, /*#__PURE__*/React__default["default"].createElement(CurrencyLogo, {
    currency: currency,
    style: {
      width: '30px',
      height: '30px'
    }
  }), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    flexDirection: "column",
    marginLeft: "16px"
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    variant: "inherit"
  }, getSymbol(currency)), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    variant: "caption"
  }, getName(currency)))), /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontWeight: 500
    }
  }, balance ? /*#__PURE__*/React__default["default"].createElement(StyledBalanceText, {
    title: balance.toExact(),
    sx: {}
  }, balance.toSignificant(6)) : account ? /*#__PURE__*/React__default["default"].createElement(Spinner, null) : null));
}

function CurrencyList(_ref) {
  var onSelectCurrency = _ref.onSelectCurrency,
      erc20List = _ref.erc20List;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 1),
      invertSearchOrder = _useState2[0];

  var _useState3 = React.useState(''),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      searchQuery = _useState4[0],
      setSearchQuery = _useState4[1];

  var fixedList = React.useRef();
  var debouncedQuery = useDebounce(searchQuery, 200);
  var tokenComparator = useTokenComparator(invertSearchOrder);
  var filteredTokens = React.useMemo(function () {
    if (!erc20List) return [];
    return filterTokens(Object.values(erc20List), debouncedQuery);
  }, [debouncedQuery, erc20List]);
  var showETH = React.useMemo(function () {
    var s = debouncedQuery.toLowerCase().trim();
    return s === '' || s === 'e' || s === 'et' || s === 'eth';
  }, [debouncedQuery]);
  var sortedTokens = React.useMemo(function () {
    return filteredTokens.sort(tokenComparator);
  }, [filteredTokens, tokenComparator]);
  var filteredSortedTokens = useSortedTokensByQuery(sortedTokens, debouncedQuery); //const filteredSortedTokensNFT = useSortedTokensByQuery(sortedTokens, debouncedQueryNFT)
  // manage focus on modal show

  var handleInput = React.useCallback(function (event) {
    var _fixedList$current;

    var input = event.target.value;
    var checksummedInput = utils$1.getAddress(input);
    setSearchQuery(checksummedInput || input);
    (_fixedList$current = fixedList.current) === null || _fixedList$current === void 0 ? void 0 : _fixedList$current.scrollTo({
      top: 0
    });
  }, []);
  var handleEnter = React.useCallback(function (e) {
    if (e.key === 'Enter') {
      var s = debouncedQuery.toLowerCase().trim();

      if (s === 'eth') {
        onSelectCurrency && onSelectCurrency(sdk.ETHER);
      } else if (filteredSortedTokens.length > 0) {
        var _filteredSortedTokens;

        if (((_filteredSortedTokens = filteredSortedTokens[0].symbol) === null || _filteredSortedTokens === void 0 ? void 0 : _filteredSortedTokens.toLowerCase()) === debouncedQuery.trim().toLowerCase() || filteredSortedTokens.length === 1) {
          onSelectCurrency && onSelectCurrency(filteredSortedTokens[0]);
        }
      }
    }
  }, [filteredSortedTokens, onSelectCurrency, debouncedQuery]);
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    flexDirection: 'column',
    height: "100%",
    sx: {
      overflow: 'auto',
      padding: '0 10px'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Input, {
    style: {
      marginTop: 2
    },
    value: searchQuery,
    onChange: handleInput,
    placeholder: "Search name or paste address",
    startAdornment: /*#__PURE__*/React__default["default"].createElement(SvgSearch, null),
    onKeyDown: handleEnter,
    height: 48
  }), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    paddingTop: '24px',
    position: "relative",
    ref: fixedList
  }, (filteredSortedTokens === null || filteredSortedTokens === void 0 ? void 0 : filteredSortedTokens.length) > 0 || (filteredSortedTokens === null || filteredSortedTokens === void 0 ? void 0 : filteredSortedTokens.length) > 0 ? /*#__PURE__*/React__default["default"].createElement(CurrencyListComponent, {
    onSelect: onSelectCurrency,
    options: filteredSortedTokens,
    showETH: showETH
  }) : /*#__PURE__*/React__default["default"].createElement(material.Box, {
    width: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "60%"
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    textAlign: "center",
    mb: "20px",
    fontSize: 16,
    fontWeight: 500
  }, "No results found"))), ' ');
}

function ERC721List(_ref) {
  var onSelectCurrency = _ref.onSelectCurrency,
      erc721List = _ref.erc721List;

  var _useState = React.useState(''),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      searchQueryNFT = _useState2[0],
      setSearchQueryNFT = _useState2[1];

  var _useModal = useModal(),
      hideModal = _useModal.hideModal;

  var debouncedQueryNFT = useDebounce(searchQueryNFT, 200);
  var filteredTokens = React.useMemo(function () {
    return filterTokens(Object.values(erc721List), debouncedQueryNFT);
  }, [debouncedQueryNFT, erc721List]);
  var handleInput = React.useCallback(function (event) {
    var input = event.target.value;
    var checksummedInput = isAddress(input);
    setSearchQueryNFT(checksummedInput || input);
  }, []);
  var onSelectCollection = React.useCallback(function (collection) {
    onSelectCurrency && onSelectCurrency(collection);
    hideModal();
  }, [hideModal, onSelectCurrency]);
  var handleEnter721 = React.useCallback(function (e) {
    if (e.key === 'Enter') {
      if (filteredTokens.length > 0) ;
    }
  }, [filteredTokens.length]);
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    flexDirection: 'column',
    height: "100%",
    sx: {
      overflow: 'auto',
      padding: '0 10px'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Input, {
    style: {
      marginTop: 2
    },
    value: searchQueryNFT,
    onChange: handleInput,
    placeholder: "Search name or paste address" // outlined
    ,
    startAdornment: /*#__PURE__*/React__default["default"].createElement(SvgSearch, null),
    onKeyDown: handleEnter721,
    height: 48
  }), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      overflow: 'auto'
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    paddingTop: '24px',
    position: "relative"
  }, filteredTokens.length === 0 ? /*#__PURE__*/React__default["default"].createElement(material.Box, {
    width: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: 100
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    textAlign: "center",
    mb: "20px",
    fontSize: 16,
    fontWeight: 500,
    component: "div",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, "No results found.")) : /*#__PURE__*/React__default["default"].createElement(CollectionListComponent, {
    onSelect: onSelectCollection,
    options: filteredTokens.length ? filteredTokens : []
  }))));
}

function NftList(_ref) {
  var _onClick = _ref.onClick,
      onSelectCurrency = _ref.onSelectCurrency,
      erc1155List = _ref.erc1155List;

  var _useState = React.useState(''),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      searchQueryNFT = _useState2[0],
      setSearchQueryNFT = _useState2[1];

  var List = React.useRef(null);

  var _useModal = useModal(),
      hideModal = _useModal.hideModal;

  var debouncedQueryNFT = useDebounce(searchQueryNFT, 200);
  var handleNFTInput = React.useCallback(function (event) {
    var _List$current;

    var input = event.target.value;
    var checksummedInput = isAddress(input);
    setSearchQueryNFT(checksummedInput || input);
    (_List$current = List.current) === null || _List$current === void 0 ? void 0 : _List$current.scrollTo({
      top: 0
    });
  }, []);
  var filteredTokens1155 = React.useMemo(function () {
    if (!erc1155List) return [];
    var idSearch = debouncedQueryNFT.match(/^#[0-9]+/) ? debouncedQueryNFT.slice(1) : false;
    return idSearch ? erc1155List.filter(function (item) {
      return item.tokenId == idSearch;
    }) : filterTokens(Object.values(erc1155List), debouncedQueryNFT);
  }, [debouncedQueryNFT, erc1155List]);

  var _useToken1155Balances = useToken1155Balances(filteredTokens1155),
      balances = _useToken1155Balances.balances,
      loading = _useToken1155Balances.loading;

  var sortedList = React.useMemo(function () {
    return balances === null || balances === void 0 ? void 0 : balances.sort(function (amount1, amount2) {
      return amount1.greaterThan(amount2) ? -1 : 1;
    });
  }, [balances]);
  var handleEnter1155 = React.useCallback(function (e) {
    if (e.key === 'Enter') {
      if (filteredTokens1155.length > 0) {
        var _filteredTokens1155$;

        if (((_filteredTokens1155$ = filteredTokens1155[0].symbol) === null || _filteredTokens1155$ === void 0 ? void 0 : _filteredTokens1155$.toLowerCase()) === debouncedQueryNFT.trim().toLowerCase() || filteredTokens1155.length === 1) {
          onSelectCurrency && onSelectCurrency(filteredTokens1155[0]);
        }
      }
    }
  }, [filteredTokens1155, debouncedQueryNFT, onSelectCurrency]);
  React.useEffect(function () {
    return function () {
      return setSearchQueryNFT('');
    };
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    flexDirection: 'column',
    height: "100%",
    sx: {
      overflow: 'auto',
      padding: '0 10px'
    },
    ref: List
  }, /*#__PURE__*/React__default["default"].createElement(Input, {
    style: {
      marginTop: 2
    },
    value: searchQueryNFT,
    onChange: handleNFTInput,
    placeholder: "Search name or paste address",
    startAdornment: /*#__PURE__*/React__default["default"].createElement(SvgSearch, null),
    onKeyDown: handleEnter1155,
    height: 48
  }), /*#__PURE__*/React__default["default"].createElement(material.Grid, {
    container: true,
    spacing: 10,
    paddingTop: '5px',
    position: "relative",
    flexGrow: 1,
    sx: {
      marginTop: 10,
      marginBottom: '10px'
    }
  }, filteredTokens1155.length === 0 ? /*#__PURE__*/React__default["default"].createElement(material.Box, {
    width: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "60%"
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    textAlign: "center",
    mb: "20px",
    fontSize: 16,
    fontWeight: 500
  }, "No results found")) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, loading && /*#__PURE__*/React__default["default"].createElement(material.Box, {
    width: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "60%"
  }, /*#__PURE__*/React__default["default"].createElement(Loader, null)), !loading && (sortedList === null || sortedList === void 0 ? void 0 : sortedList.map(function (_ref2, idx) {
    var token = _ref2.token;
    return /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      item: true,
      xs: 6,
      key: idx
    }, /*#__PURE__*/React__default["default"].createElement(NftCard, {
      key: idx,
      token: token,
      onClick: function onClick() {
        _onClick && _onClick(token);
        hideModal();
      }
    }));
  })))));
}

function NftCard(_ref3) {
  var _token$name;

  var token = _ref3.token,
      onClick = _ref3.onClick;
  var theme = material.useTheme();
  var balance = useToken1155Balance(token);
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    onClick: onClick,
    sx: {
      display: 'flex',
      flexDirection: 'column',
      padding: 5,
      alignItems: 'center',
      borderRadius: '8px',
      background: theme.palette.background.paper,
      transition: '0.5s',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '0px 0px 5px ' + theme.palette.primary.main,
        cursor: 'pointer'
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      width: '100%',
      height: 80,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Logo, {
    srcs: token !== null && token !== void 0 && token.uri ? [token.uri] : [],
    alt: (_token$name = token.name) !== null && _token$name !== void 0 ? _token$name : '',
    style: {
      borderRadius: '8px',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    sx: {
      color: theme.palette.text.secondary,
      fontSize: 12,
      fontWeight: 600,
      mt: 8,
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'center',
      whiteSpace: 'nowrap'
    }
  }, token.name), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    sx: {
      color: theme.palette.text.secondary,
      fontSize: 12,
      fontWeight: 600,
      mb: 8
    }
  }, "#", token.tokenId), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    sx: {
      color: theme.palette.text.secondary,
      fontSize: 10,
      fontWeight: 400,
      mb: 4
    }
  }, shortenAddress(token.address)), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    sx: {
      fontSize: 10,
      fontWeight: 600
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      color: theme.palette.text.secondary
    }
  }, "balance: "), balance === null || balance === void 0 ? void 0 : balance.toFixed(0)));
}

var Mode;

(function (Mode) {
  Mode["ERC20"] = "erc20";
  Mode["ERC1155"] = "erc1155";
  Mode["ERC721"] = "erc721";
})(Mode || (Mode = {}));
function SelectCurrencyModal(_ref) {
  var onSelectCurrency = _ref.onSelectCurrency,
      selectedTokenType = _ref.selectedTokenType,
      erc20Tokens = _ref.erc20Tokens,
      erc1155Tokens = _ref.erc1155Tokens,
      erc721Tokens = _ref.erc721Tokens;

  var _useState = React.useState(selectedTokenType === 'erc20' ? Mode.ERC1155 : Mode.ERC20),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      mode = _useState2[0],
      setMode = _useState2[1];

  var _useModal = useModal(),
      hideModal = _useModal.hideModal;

  React.useEffect(function () {
    if (selectedTokenType === 'erc20') {
      setMode(Mode.ERC1155);
    } else {
      setMode(Mode.ERC20);
    }
  }, [selectedTokenType]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Dialog, {
    onClose: hideModal
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "flex-start",
    maxHeight: '100%',
    flexGrow: 1
  }, /*#__PURE__*/React__default["default"].createElement(Header, {
    title: mode === Mode.ERC20 ? 'Select a Token' : 'Select a NFT'
  }), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    gap: 20,
    padding: "10px 10px 10px ",
    alignItems: "center"
  }, /*#__PURE__*/React__default["default"].createElement(ModeButton, {
    selected: mode === Mode.ERC20,
    onClick: function onClick() {
      setMode(Mode.ERC20);
    },
    disabled: selectedTokenType === 'erc20'
  }, "ERC20"), /*#__PURE__*/React__default["default"].createElement(ModeButton, {
    selected: mode === Mode.ERC1155,
    onClick: function onClick() {
      setMode(Mode.ERC1155);
    },
    disabled: selectedTokenType === 'erc1155'
  }, "ERC1155"), /*#__PURE__*/React__default["default"].createElement(ModeButton, {
    selected: mode === Mode.ERC721,
    onClick: function onClick() {
      setMode(Mode.ERC721);
    },
    disabled: selectedTokenType === 'erc721'
  }, "ERC721")), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    padding: '0 0 10px',
    position: "relative",
    height: "100%",
    sx: {
      overflowY: 'auto',
      overflowX: 'hidden'
    },
    flexGrow: 1,
    maxWidth: "100%"
  }, mode === Mode.ERC20 && /*#__PURE__*/React__default["default"].createElement(CurrencyList, {
    onSelectCurrency: onSelectCurrency,
    erc20List: erc20Tokens
  }), mode === Mode.ERC1155 && /*#__PURE__*/React__default["default"].createElement(NftList, {
    onSelectCurrency: onSelectCurrency,
    onClick: onSelectCurrency,
    erc1155List: erc1155Tokens
  }), mode === Mode.ERC721 && /*#__PURE__*/React__default["default"].createElement(ERC721List, {
    erc721List: erc721Tokens // searchToken={searchTokenNFT}
    // searchTokenIsAdded={searchTokenIsAddedNFT}
    ,
    onSelectCurrency: onSelectCurrency // onSelectSubTokens={onSelectSubTokens}
    // commonCollectionList={commonCollectionList}
    // collectionOptions={commonCollectionList}
    // selectedCollection={collection}
    // onSelectCollection={setCollection}
    // selectedCurrencies={filteredTokens1155}

  })))));
}

function ModeButton(_ref2) {
  var children = _ref2.children,
      selected = _ref2.selected,
      onClick = _ref2.onClick,
      disabled = _ref2.disabled;
  var theme = material.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(material.ButtonBase, {
    onClick: onClick,
    disabled: disabled,
    sx: {
      padding: {
        xs: '4px 12px',
        md: '7px 20px'
      },
      borderRadius: '18px',
      background: theme.palette.background.default,
      boxShadow: selected ? '0 0 5px ' + material.darken(theme.palette.background.default, 0.2) : 'inset 0px 2px 12px ' + material.darken(theme.palette.background.default, 0.2),
      '&:hover': {
        opacity: 0.8
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    sx: {
      color: selected ? material.lighten(theme.palette.text.primary, 0.5) : 'transparent',
      fontSize: {
        xs: 14,
        md: 16
      },
      background: selected ? theme.palette.primary.main : theme.palette.text.primary,
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, children));
}

var SwapType;

(function (SwapType) {
  SwapType["AUTO"] = "Auto";
  SwapType["MANUAL"] = "Choose by yourself";
})(SwapType || (SwapType = {}));

function SwapTypeButton(_ref) {
  var onClick = _ref.onClick,
      text = _ref.text,
      helperText = _ref.helperText,
      selected = _ref.selected,
      disabled = _ref.disabled;
  return /*#__PURE__*/React__default["default"].createElement(material.ButtonBase, {
    disabled: disabled,
    onClick: onClick,
    sx: {
      height: 22,
      padding: '0 12px',
      borderRadius: '10px',
      background: function background(theme) {
        return theme.palette.background.paper;
      },
      border: function border(theme) {
        return "1px solid ".concat(selected ? theme.palette.primary.main : 'none');
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    sx: {
      color: function color(theme) {
        return theme.palette.primary.main;
      },
      mr: 4,
      fontSize: 12
    }
  }, text), /*#__PURE__*/React__default["default"].createElement(QuestionHelper, {
    text: helperText
  }));
}

var trimBalance = function trimBalance(balance) {
  if (balance.length > 11) {
    var str = balance.slice(0, 10);
    return str + '...';
  }

  return balance;
};

function CurrencyInputPanel(_ref2) {
  var value = _ref2.value,
      disabled = _ref2.disabled,
      placeholder = _ref2.placeholder,
      selectActive = _ref2.selectActive,
      inputFocused = _ref2.inputFocused,
      disableCurrencySelect = _ref2.disableCurrencySelect,
      currency = _ref2.currency,
      onSelectCurrency = _ref2.onSelectCurrency,
      onChange = _ref2.onChange,
      selectedTokenType = _ref2.selectedTokenType,
      onMax = _ref2.onMax,
      disableInput = _ref2.disableInput,
      hideBalance = _ref2.hideBalance,
      onSelectSubTokens = _ref2.onSelectSubTokens,
      enableAuto = _ref2.enableAuto,
      pairAddress = _ref2.pairAddress;

  // const [isOpen, setIsOpen] = useState(false)
  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account;

  var is1155 = checkIs1155(currency);
  var is721 = filter721(currency);
  var selectedCurrencyBalance = useCurrencyBalance(account !== null && account !== void 0 ? account : undefined, currency !== null && currency !== void 0 ? currency : undefined);

  var _useState = React.useState(SwapType.AUTO),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      swapType = _useState2[0],
      setSwapType = _useState2[1];

  var _useModal = useModal(),
      hideModal = _useModal.hideModal,
      showModal = _useModal.showModal;

  var theme = material.useTheme();

  var _useTokenLists = useTokenLists(),
      erc1155List = _useTokenLists.erc1155List,
      erc20List = _useTokenLists.erc20List,
      erc721Map = _useTokenLists.erc721Map;

  var handleChange = React.useCallback(function (e) {
    onChange(e.target.value);
  }, [onChange]);
  var showCurrencySearch = React.useCallback(function () {
    if (!disableCurrencySelect) {
      showModal( /*#__PURE__*/React__default["default"].createElement(SelectCurrencyModal, {
        onSelectCurrency: onSelectCurrency,
        selectedTokenType: selectedTokenType,
        erc20Tokens: erc20List,
        erc1155Tokens: erc1155List,
        erc721Tokens: erc721Map // onSelectSubTokens={onSelectSubTokens}

      }));
    }
  }, [disableCurrencySelect, showModal, onSelectCurrency, selectedTokenType, erc20List, erc1155List, erc721Map]);
  var subTokenSelection = React.useCallback(function () {
    if (onSelectSubTokens) {
      showModal( /*#__PURE__*/React__default["default"].createElement(Erc721IdSelectionModal // amount={value ? +value : 0}
      , {
        onSelectSubTokens: onSelectSubTokens,
        collection: is721,
        pairAddress: pairAddress,
        setAmount: handleChange // isOpen={true}
        ,
        onDismiss: hideModal // onDismiss={() => {
        //   setIsOpen(false)
        // }}

      }));
    }
  }, [handleChange, hideModal, is721, onSelectSubTokens, pairAddress, showModal]);
  var handleOpenIdSelectionModal = React.useCallback(function () {
    subTokenSelection();
    setSwapType(SwapType.MANUAL);
  }, [subTokenSelection]);
  React.useEffect(function () {
    if (enableAuto && swapType === SwapType.AUTO && onSelectSubTokens) {
      onSelectSubTokens([]);
    }
  }, [enableAuto, onSelectSubTokens, swapType]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, is721 && onSelectSubTokens && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      paddingBottom: 8,
      margin: '0 auto',
      paddingLeft: 0,
      '&:hover': {
        opacity: 0.8
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      justifyContent: 'flex-end'
    }
  }, enableAuto && /*#__PURE__*/React__default["default"].createElement(SwapTypeButton, {
    selected: swapType === SwapType.AUTO,
    text: SwapType.AUTO,
    helperText: "You will receive non-selective/random NFT after each swap.",
    onClick: function onClick() {
      setSwapType(SwapType.AUTO);
      onSelectSubTokens && onSelectSubTokens([]);
    }
  }), /*#__PURE__*/React__default["default"].createElement(SwapTypeButton, {
    disabled: enableAuto && !pairAddress,
    selected: swapType === SwapType.MANUAL,
    text: SwapType.MANUAL,
    helperText: enableAuto && !pairAddress ? 'Choose the input token first' : 'You can choose specific NFTs from the pool.',
    onClick: handleOpenIdSelectionModal
  })))), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React__default["default"].createElement(SelectButton, {
    width: '100%',
    onClick: showCurrencySearch,
    disabled: disableCurrencySelect || disabled,
    primary: selectActive,
    height: '48px',
    selected: !!currency
  }, currency ? /*#__PURE__*/React__default["default"].createElement(LogoText, {
    logo: /*#__PURE__*/React__default["default"].createElement(CurrencyLogo, {
      currency: currency
    }),
    text: is1155 ? currency.name : getSymbol(currency)
  }) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, "Select Token")), is721 && !enableAuto ? /*#__PURE__*/React__default["default"].createElement(material.Box, {
    flexGrow: 1
  }, /*#__PURE__*/React__default["default"].createElement(SelectButton, {
    onClick: handleOpenIdSelectionModal,
    selected: !!value
  }, !!value ? value.toString() : 'Choose token Id')) : /*#__PURE__*/React__default["default"].createElement(material.Box, {
    flexGrow: 1
  }, /*#__PURE__*/React__default["default"].createElement(NumericalInput, {
    placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : 'Enter amount',
    value: value.toString(),
    onChange: handleChange,
    type: 'number',
    disabled: disabled || disableInput,
    focused: inputFocused,
    integer: !!is1155 || !!is721,
    height: 48
  })), ' ', /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mt: -6
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    fontSize: 12,
    sx: {
      color: theme.palette.text.secondary
    }
  }), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    alignItems: 'center'
  }, !hideBalance && /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    fontSize: 12,
    sx: {
      color: theme.palette.text.secondary
    }
  }, "Balance:", ' ', !!currency && selectedCurrencyBalance ? trimBalance(selectedCurrencyBalance === null || selectedCurrencyBalance === void 0 ? void 0 : selectedCurrencyBalance.toSignificant(6)) : '', !selectedCurrencyBalance && '-'), currency && onMax && /*#__PURE__*/React__default["default"].createElement(material.Button, {
    variant: "text",
    sx: {
      fontSize: 12,
      minWidth: 'unset',
      width: 'max-content',
      height: 'max-content',
      padding: '0 10px'
    },
    onClick: onMax
  }, "MAX")))));
}

var abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "Burn",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			}
		],
		name: "Mint",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0In",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1In",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0Out",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1Out",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "Swap",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint112",
				name: "reserve0",
				type: "uint112"
			},
			{
				indexed: false,
				internalType: "uint112",
				name: "reserve1",
				type: "uint112"
			}
		],
		name: "Sync",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		constant: true,
		inputs: [
		],
		name: "DOMAIN_SEPARATOR",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "MINIMUM_LIQUIDITY",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "pure",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "PERMIT_TYPEHASH",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "pure",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "burn",
		outputs: [
			{
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "pure",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "factory",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "getReserves",
		outputs: [
			{
				internalType: "uint112",
				name: "reserve0",
				type: "uint112"
			},
			{
				internalType: "uint112",
				name: "reserve1",
				type: "uint112"
			},
			{
				internalType: "uint32",
				name: "blockTimestampLast",
				type: "uint32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "initialize",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "kLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "mint",
		outputs: [
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "pure",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "nonces",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "permit",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "price0CumulativeLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "price1CumulativeLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "skim",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "uint256",
				name: "amount0Out",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amount1Out",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "swap",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "pure",
		type: "function"
	},
	{
		constant: false,
		inputs: [
		],
		name: "sync",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "token0",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "token1",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	}
];
var evm = {
	bytecode: {
		linkReferences: {
		},
		object: "",
		opcodes: "",
		sourceMap: ""
	},
	deployedBytecode: {
		linkReferences: {
		},
		object: "",
		opcodes: "",
		sourceMap: ""
	}
};
var bytecode = "";
var IUniswapV2PairABI = {
	abi: abi,
	evm: evm,
	"interface": [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "Burn",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			}
		],
		name: "Mint",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0In",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1In",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0Out",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1Out",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "Swap",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint112",
				name: "reserve0",
				type: "uint112"
			},
			{
				indexed: false,
				internalType: "uint112",
				name: "reserve1",
				type: "uint112"
			}
		],
		name: "Sync",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		constant: true,
		inputs: [
		],
		name: "DOMAIN_SEPARATOR",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "MINIMUM_LIQUIDITY",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "pure",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "PERMIT_TYPEHASH",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "pure",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "burn",
		outputs: [
			{
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "pure",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "factory",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "getReserves",
		outputs: [
			{
				internalType: "uint112",
				name: "reserve0",
				type: "uint112"
			},
			{
				internalType: "uint112",
				name: "reserve1",
				type: "uint112"
			},
			{
				internalType: "uint32",
				name: "blockTimestampLast",
				type: "uint32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "initialize",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "kLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "mint",
		outputs: [
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "pure",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "nonces",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "permit",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "price0CumulativeLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "price1CumulativeLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "skim",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "uint256",
				name: "amount0Out",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amount1Out",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "swap",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "pure",
		type: "function"
	},
	{
		constant: false,
		inputs: [
		],
		name: "sync",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "token0",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "token1",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	}
],
	bytecode: bytecode
};

function getHashAddress(token, id) {
  return utils$1.getAddress("0x".concat(utils$1.keccak256(utils$1.solidityPack(['address', 'uint256'], [token, id])).slice(-40)));
}
function generateErc20(token) {
  if (!token) return undefined;
  var token1155 = filter1155(token);
  return token1155 ? new sdk.Token(token1155.chainId, getHashAddress(token1155.address, +token1155.tokenId), 0, token1155.symbol, token1155.name) : token;
}

function wrappedCurrency(currency, chainId) {
  return chainId && currency === sdk.ETHER ? sdk.WETH[chainId] : currency instanceof sdk.Token ? currency : undefined;
}
function wrappedCurrencyAmount(currencyAmount, chainId) {
  var token = currencyAmount && chainId ? wrappedCurrency(currencyAmount.currency, chainId) : undefined;
  return token && currencyAmount ? new sdk.TokenAmount(token, currencyAmount.raw) : undefined;
}

var PAIR_INTERFACE = new abi$2.Interface(IUniswapV2PairABI.abi);
var PairState;

(function (PairState) {
  PairState[PairState["LOADING"] = 0] = "LOADING";
  PairState[PairState["NOT_EXISTS"] = 1] = "NOT_EXISTS";
  PairState[PairState["EXISTS"] = 2] = "EXISTS";
  PairState[PairState["INVALID"] = 3] = "INVALID";
})(PairState || (PairState = {}));

function usePairs(currencies) {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var tokens = React.useMemo(function () {
    return currencies.map(function (_ref) {
      var _ref2 = _slicedToArray__default["default"](_ref, 2),
          currencyA = _ref2[0],
          currencyB = _ref2[1];

      return [generateErc20(wrappedCurrency(currencyA, chainId)), generateErc20(wrappedCurrency(currencyB, chainId))];
    });
  }, [chainId, currencies]);
  var pairAddresses = React.useMemo(function () {
    return tokens.map(function (_ref3) {
      var _ref4 = _slicedToArray__default["default"](_ref3, 2),
          tokenA = _ref4[0],
          tokenB = _ref4[1];

      return tokenA && tokenB && !tokenA.equals(tokenB) ? sdk.Pair.getAddress(tokenA, tokenB) : undefined;
    });
  }, [tokens]);
  var results = useMultipleContractSingleData(pairAddresses, PAIR_INTERFACE, 'getReserves');
  return React.useMemo(function () {
    return results.map(function (result, i) {
      var reserves = result.result,
          loading = result.loading;
      var tokenA = tokens[i][0];
      var tokenB = tokens[i][1];
      if (loading) return [PairState.LOADING, null];
      if (!tokenA || !tokenB || tokenA.equals(tokenB)) return [PairState.INVALID, null];
      if (!reserves) return [PairState.NOT_EXISTS, null];
      var reserve0 = reserves.reserve0,
          reserve1 = reserves.reserve1;

      var _ref5 = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA],
          _ref6 = _slicedToArray__default["default"](_ref5, 2),
          token0 = _ref6[0],
          token1 = _ref6[1];

      return [PairState.EXISTS, new sdk.Pair(new sdk.TokenAmount(token0, reserve0.toString()), new sdk.TokenAmount(token1, reserve1.toString()))];
    });
  }, [results, tokens]);
}
function usePair(tokenA, tokenB) {
  var arg = React.useMemo(function () {
    return [[tokenA, tokenB]];
  }, [tokenA, tokenB]);
  return usePairs(arg)[0];
}

// or contract total supply cannot be fetched

function useTotalSupply(token) {
  var _useSingleCallResult, _useSingleCallResult$;

  var contract = useTokenContract(token === null || token === void 0 ? void 0 : token.address, false);
  var totalSupply = (_useSingleCallResult = useSingleCallResult(contract, 'totalSupply')) === null || _useSingleCallResult === void 0 ? void 0 : (_useSingleCallResult$ = _useSingleCallResult.result) === null || _useSingleCallResult$ === void 0 ? void 0 : _useSingleCallResult$[0];
  return token && totalSupply ? new sdk.TokenAmount(token, totalSupply.toString()) : undefined;
}

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$9(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var MintField;

(function (MintField) {
  MintField["CURRENCY_A"] = "CURRENCY_A";
  MintField["CURRENCY_B"] = "CURRENCY_B";
})(MintField || (MintField = {}));

var initialMint = {
  independentField: MintField.CURRENCY_A,
  typedValue: '',
  otherTypedValue: '',
  tokenIds: undefined
};
var controlledAtom$2 = jotai.atom(undefined);
var stateAtom$2 = immer.atomWithImmer(initialMint);
var mintAtom = jotai.atom(function (get) {
  var controlled = get(controlledAtom$2);
  return controlled ? controlled : get(stateAtom$2);
}, stateAtom$2.write);
function useMintActionHandlers(noLiquidity) {
  var setMint = utils.useUpdateAtom(mintAtom);
  var setMintState = React.useCallback(function (field, typedValue, noLiquidity) {
    setMint(function (state) {
      if (noLiquidity) {
        // they're typing into the field they've last typed in
        if (field === state.independentField) {
          return _objectSpread$9(_objectSpread$9({}, state), {}, {
            independentField: field,
            typedValue: typedValue
          });
        } // they're typing into a new field, store the other value
        else {
          return _objectSpread$9(_objectSpread$9({}, state), {}, {
            independentField: field,
            typedValue: typedValue,
            otherTypedValue: state.typedValue
          });
        }
      } else {
        return _objectSpread$9(_objectSpread$9({}, state), {}, {
          independentField: field,
          typedValue: typedValue,
          otherTypedValue: ''
        });
      }
    });
  }, [setMint]);
  var onFieldAInput = React.useCallback(function (typedValue) {
    setMintState(MintField.CURRENCY_A, typedValue, noLiquidity === true);
  }, [noLiquidity, setMintState]);
  var onFieldBInput = React.useCallback(function (typedValue) {
    setMintState(MintField.CURRENCY_B, typedValue, noLiquidity === true);
  }, [noLiquidity, setMintState]);
  var onSetTokenIds = React.useCallback(function (tokenIds) {
    setMint(function (state) {
      return _objectSpread$9(_objectSpread$9({}, state), {}, {
        tokenIds: tokenIds
      });
    });
  }, [setMint]);
  var onResetMintState = React.useCallback(function () {
    setMint(function (state) {
      return initialMint;
    });
  }, [setMint]);
  return {
    onFieldAInput: onFieldAInput,
    onFieldBInput: onFieldBInput,
    onSetTokenIds: onSetTokenIds,
    onResetMintState: onResetMintState
  };
}

/* eslint-disable @typescript-eslint/ban-types */
/**
 * Creates a derived atom whose value is the picked object property.
 * By default, the setter acts as a primitive atom's, changing the original atom.
 * A custom setter may also be passed, which uses an Immer Draft so that it may be mutated directly.
 */

function pickAtom(anAtom, key) {
  var setter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (draft, update) {
    return update;
  };
  return jotai.atom(function (get) {
    return get(anAtom)[key];
  }, function (get, set, update) {
    return set(immer.withImmer(anAtom), function (value) {
      var derived = setter(value[key], update);
      value[key] = derived;
    });
  });
}

var initialSettings = {
  slippage: {
    max: undefined
  },
  transactionTtl: undefined,
  userSingleHopOnly: false
};
var controlledAtom$1 = jotai.atom(undefined);
var stateAtom$1 = utils.atomWithReset(initialSettings);
var settingsAtom = jotai.atom(function (get) {
  var controlled = get(controlledAtom$1);
  return controlled ? controlled : get(stateAtom$1);
}, stateAtom$1.write);
var slippageAtom = pickAtom(settingsAtom, 'slippage');
var transactionTtlAtom = pickAtom(settingsAtom, 'transactionTtl');
var userSingleHopOnlyAtom = pickAtom(settingsAtom, 'userSingleHopOnly');

var DEFAULT_DEADLINE_FROM_NOW = 60 * 30;
var L2_DEADLINE_FROM_NOW = 60 * 5; // transaction popup dismisal amounts

sdk.JSBI.BigInt(60 * 60 * 24 * 7);
sdk.JSBI.BigInt(0); // one basis JSBI.BigInt

var BIPS_BASE = sdk.JSBI.BigInt(10000);
new sdk.Percent(sdk.JSBI.BigInt(1), BIPS_BASE); // used for warning states

new sdk.Percent(sdk.JSBI.BigInt(100), BIPS_BASE); // 1%

new sdk.Percent(sdk.JSBI.BigInt(300), BIPS_BASE); // 3%

new sdk.Percent(sdk.JSBI.BigInt(500), BIPS_BASE); // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute

new sdk.Percent(sdk.JSBI.BigInt(1000), BIPS_BASE); // 10%
// for non expert mode disable swaps above this

new sdk.Percent(sdk.JSBI.BigInt(1500), BIPS_BASE); // 15%

new sdk.Percent(sdk.JSBI.BigInt(50), BIPS_BASE);
var ZERO_PERCENT = new sdk.Percent('0');
new sdk.Percent(sdk.JSBI.BigInt(200), BIPS_BASE);
var ONE_HUNDRED_PERCENT$1 = new sdk.Percent('1');

function isTradeBetter(tradeA, tradeB) {
  var minimumDelta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ZERO_PERCENT;
  if (tradeA && !tradeB) return false;
  if (tradeB && !tradeA) return true;
  if (!tradeA || !tradeB) return undefined;

  if (tradeA.tradeType !== tradeB.tradeType || !sdk.currencyEquals(tradeA.inputAmount.currency, tradeB.inputAmount.currency) || !sdk.currencyEquals(tradeB.outputAmount.currency, tradeB.outputAmount.currency)) {
    throw new Error('Trades are not comparable');
  }

  if (minimumDelta.equalTo(ZERO_PERCENT)) {
    return tradeA.executionPrice.lessThan(tradeB.executionPrice);
  } else {
    return tradeA.executionPrice.raw.multiply(minimumDelta.add(ONE_HUNDRED_PERCENT$1)).lessThan(tradeB.executionPrice);
  }
}

var _BASES_TO_CHECK_TRADE2;

function useAllCommonPairs(currencyA, currencyB) {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var _useTokenLists = useTokenLists(),
      erc1155List = _useTokenLists.erc1155List,
      erc20List = _useTokenLists.erc20List,
      erc721List = _useTokenLists.erc721List;

  var _ref = chainId ? [wrappedCurrency(currencyA, chainId), wrappedCurrency(currencyB, chainId)] : [undefined, undefined],
      _ref2 = _slicedToArray__default["default"](_ref, 2),
      tokenA = _ref2[0],
      tokenB = _ref2[1];

  var bases = React.useMemo(function () {
    var _BASES_TO_CHECK_TRADE;

    if (!chainId) return [];
    var common = (_BASES_TO_CHECK_TRADE = BASES_TO_CHECK_TRADES_AGAINST[chainId]) !== null && _BASES_TO_CHECK_TRADE !== void 0 ? _BASES_TO_CHECK_TRADE : [];
    return [].concat(_toConsumableArray__default["default"](common), _toConsumableArray__default["default"](erc1155List), _toConsumableArray__default["default"](erc20List), _toConsumableArray__default["default"](erc721List));
  }, [chainId, erc1155List, erc20List, erc721List]);
  var basePairs = React.useMemo(function () {
    return flatMap__default["default"](bases, function (base) {
      return bases.map(function (otherBase) {
        return [base, otherBase];
      });
    });
  }, [bases]);
  var allPairCombinations = React.useMemo(function () {
    return tokenA && tokenB ? [// the direct pair
    [tokenA, tokenB]].concat(_toConsumableArray__default["default"](bases.map(function (base) {
      return [tokenA, base];
    })), _toConsumableArray__default["default"](bases.map(function (base) {
      return [tokenB, base];
    })), _toConsumableArray__default["default"](basePairs)).filter(function (tokens) {
      return Boolean(tokens[0] && tokens[1]);
    }).filter(function (_ref3) {
      var _ref4 = _slicedToArray__default["default"](_ref3, 2),
          t0 = _ref4[0],
          t1 = _ref4[1];

      return t0.address !== t1.address;
    }) : [];
  }, [tokenA, tokenB, bases, basePairs]);
  var allPairs = usePairs(allPairCombinations); // only pass along valid pairs, non-duplicated pairs

  return React.useMemo(function () {
    return Object.values(allPairs // filter out invalid pairs
    .filter(function (result) {
      return Boolean(result[0] === PairState.EXISTS && result[1]);
    }) // filter out duplicated pairs
    .reduce(function (memo, _ref5) {
      var _memo$curr$liquidityT;

      var _ref6 = _slicedToArray__default["default"](_ref5, 2),
          curr = _ref6[1];

      memo[curr.liquidityToken.address] = (_memo$curr$liquidityT = memo[curr.liquidityToken.address]) !== null && _memo$curr$liquidityT !== void 0 ? _memo$curr$liquidityT : curr;
      return memo;
    }, {}));
  }, [allPairs]);
}

var MAX_HOPS = 3;
/**
 * Returns the best trade for the exact amount of tokens in to the given token out
 */

function useTradeExactIn(currencyAmountIn, currencyOut) {
  var allowedPairs = useAllCommonPairs(currencyAmountIn === null || currencyAmountIn === void 0 ? void 0 : currencyAmountIn.currency, currencyOut);
  var singleHopOnly = utils.useAtomValue(userSingleHopOnlyAtom);
  return React.useMemo(function () {
    var is721Pair = checkIs721(currencyAmountIn === null || currencyAmountIn === void 0 ? void 0 : currencyAmountIn.currency) || checkIs721(currencyOut);

    if (currencyAmountIn && currencyOut && allowedPairs.length > 0) {
      if (is721Pair) {
        var _Trade$bestTradeExact;

        return (_Trade$bestTradeExact = sdk.Trade.bestTradeExactIn(allowedPairs, currencyAmountIn, currencyOut, {
          maxHops: 1,
          maxNumResults: 1
        })[0]) !== null && _Trade$bestTradeExact !== void 0 ? _Trade$bestTradeExact : null;
      }

      if (singleHopOnly) {
        var _Trade$bestTradeExact2;

        return (_Trade$bestTradeExact2 = sdk.Trade.bestTradeExactIn(allowedPairs, currencyAmountIn, currencyOut, {
          maxHops: 3,
          maxNumResults: 1
        })[0]) !== null && _Trade$bestTradeExact2 !== void 0 ? _Trade$bestTradeExact2 : null;
      } // search through trades with varying hops, find best trade out of them


      var bestTradeSoFar = null;

      for (var i = 1; i <= MAX_HOPS; i++) {
        var _Trade$bestTradeExact3;

        var currentTrade = (_Trade$bestTradeExact3 = sdk.Trade.bestTradeExactIn(allowedPairs, currencyAmountIn, currencyOut, {
          maxHops: i,
          maxNumResults: 1
        })[0]) !== null && _Trade$bestTradeExact3 !== void 0 ? _Trade$bestTradeExact3 : null; // if current trade is best yet, save it

        if (isTradeBetter(bestTradeSoFar, currentTrade, BETTER_TRADE_LESS_HOPS_THRESHOLD)) {
          bestTradeSoFar = currentTrade;
        }
      }

      return bestTradeSoFar;
    }

    return null;
  }, [allowedPairs, currencyAmountIn, currencyOut, singleHopOnly]);
}
/**
 * Returns the best trade for the token in to the exact amount of token out
 */

function useTradeExactOut(currencyIn, currencyAmountOut) {
  var allowedPairs = useAllCommonPairs(currencyIn, currencyAmountOut === null || currencyAmountOut === void 0 ? void 0 : currencyAmountOut.currency);
  var singleHopOnly = utils.useAtomValue(userSingleHopOnlyAtom);
  return React.useMemo(function () {
    var is721Pair = checkIs721(currencyAmountOut === null || currencyAmountOut === void 0 ? void 0 : currencyAmountOut.currency) || checkIs721(currencyIn);

    if (currencyIn && currencyAmountOut && allowedPairs.length > 0) {
      if (singleHopOnly || is721Pair) {
        var _Trade$bestTradeExact4;

        return (_Trade$bestTradeExact4 = sdk.Trade.bestTradeExactOut(allowedPairs, currencyIn, currencyAmountOut, {
          maxHops: 1,
          maxNumResults: 1
        })[0]) !== null && _Trade$bestTradeExact4 !== void 0 ? _Trade$bestTradeExact4 : null;
      } // search through trades with varying hops, find best trade out of them


      var bestTradeSoFar = null;

      for (var i = 1; i <= MAX_HOPS; i++) {
        var _Trade$bestTradeExact5;

        var currentTrade = (_Trade$bestTradeExact5 = sdk.Trade.bestTradeExactOut(allowedPairs, currencyIn, currencyAmountOut, {
          maxHops: i,
          maxNumResults: 1
        })[0]) !== null && _Trade$bestTradeExact5 !== void 0 ? _Trade$bestTradeExact5 : null;

        if (isTradeBetter(bestTradeSoFar, currentTrade, BETTER_TRADE_LESS_HOPS_THRESHOLD)) {
          bestTradeSoFar = currentTrade;
        }
      }

      return bestTradeSoFar;
    }

    return null;
  }, [currencyIn, currencyAmountOut, allowedPairs, singleHopOnly]);
}
var BETTER_TRADE_LESS_HOPS_THRESHOLD = new sdk.Percent(sdk.JSBI.BigInt(50), sdk.JSBI.BigInt(10000)); // used to construct intermediary pairs for trading

var BASES_TO_CHECK_TRADES_AGAINST = (_BASES_TO_CHECK_TRADE2 = {}, _defineProperty__default["default"](_BASES_TO_CHECK_TRADE2, sdk.ChainId.MAINNET, [sdk.WETH[sdk.ChainId.MAINNET]]), _defineProperty__default["default"](_BASES_TO_CHECK_TRADE2, sdk.ChainId.GÖRLI, [sdk.WETH[sdk.ChainId.GÖRLI]]), _BASES_TO_CHECK_TRADE2);

function useOnSupportedNetwork(chainId) {
  var _useWeb3React = core.useWeb3React(),
      activeChainId = _useWeb3React.chainId;

  chainId = chainId || activeChainId;
  return React.useMemo(function () {
    return Boolean(chainId && ALL_SUPPORTED_CHAIN_IDS.includes(chainId));
  }, [chainId]);
}

var ONE_TENTHS_PERCENT = new sdk.Percent(10 + '', 10000 + ''); // .10%

var DEFAULT_AUTO_SLIPPAGE = ONE_TENTHS_PERCENT;
function toPercent(maxSlippage) {
  if (!maxSlippage) return undefined;
  if (Number.isNaN(maxSlippage)) return undefined;
  var numerator = Math.floor(Number(maxSlippage) * 100);
  return new sdk.Percent(numerator.toString(), 10000 + '');
}
var DEFAULT_SLIPPAGE = {
  auto: true,
  allowed: DEFAULT_AUTO_SLIPPAGE
};
/** Returns the allowed slippage, and whether it is auto-slippage. */

function useSlippage(trade) {
  var slippage = utils.useAtomValue(slippageAtom);
  var maxSlippage = React.useMemo(function () {
    return toPercent(slippage.max);
  }, [slippage.max]);
  return React.useMemo(function () {
    var allowed = maxSlippage !== null && maxSlippage !== void 0 ? maxSlippage : DEFAULT_AUTO_SLIPPAGE;
    var warning = getSlippageWarning(allowed);

    if (allowed === DEFAULT_AUTO_SLIPPAGE) {
      return DEFAULT_SLIPPAGE;
    }

    return {
      allowed: allowed,
      warning: warning
    };
  }, [maxSlippage]);
}
var MAX_VALID_SLIPPAGE = new sdk.Percent(1 + '', 2 + '');
var MIN_HIGH_SLIPPAGE = new sdk.Percent(1 + '', 100 + '');
function getSlippageWarning(slippage) {
  if (slippage !== null && slippage !== void 0 && slippage.greaterThan(MAX_VALID_SLIPPAGE)) return 'error';
  if (slippage !== null && slippage !== void 0 && slippage.greaterThan(MIN_HIGH_SLIPPAGE)) return 'warning';
  return;
}

exports.Field = void 0;

(function (Field) {
  Field["INPUT"] = "INPUT";
  Field["OUTPUT"] = "OUTPUT";
})(exports.Field || (exports.Field = {}));

var initialSwap = {
  type: sdk.TradeType.EXACT_INPUT,
  amount: '',
  tokenIdsIn: undefined,
  tokenIdsOut: undefined
};
var controlledAtom = jotai.atom(undefined);
var stateAtom = immer.atomWithImmer(initialSwap);
var swapAtom = jotai.atom(function (get) {
  var controlled = get(controlledAtom);
  return controlled ? controlled : get(stateAtom);
}, stateAtom.write); // If set to a transaction hash, that transaction will display in a status dialog.

var displayTxHashAtom = jotai.atom(undefined);
var feeOptionsAtom = jotai.atom(undefined);
/** An integration hook called when the user resets settings. */

var swapEventHandlersAtom = jotai.atom({});

var BASE_FEE = new sdk.Percent(sdk.JSBI.BigInt(30), sdk.JSBI.BigInt(10000));
var ONE_HUNDRED_PERCENT = new sdk.Percent(sdk.JSBI.BigInt(10000), sdk.JSBI.BigInt(10000));
var INPUT_FRACTION_AFTER_FEE = ONE_HUNDRED_PERCENT.subtract(BASE_FEE); // computes price breakdown for the trade

function computeTradePriceBreakdown(trade) {
  // for each hop in our trade, take away the x*y=k price impact from 0.3% fees
  // e.g. for 3 tokens/2 hops: 1 - ((1 - .03) * (1-.03))
  var realizedLPFee = !trade ? undefined : ONE_HUNDRED_PERCENT.subtract(trade.route.pairs.reduce(function (currentFee) {
    return currentFee.multiply(INPUT_FRACTION_AFTER_FEE);
  }, ONE_HUNDRED_PERCENT)); // remove lp fees from price impact

  var priceImpactWithoutFeeFraction = trade && realizedLPFee ? trade.priceImpact.subtract(realizedLPFee) : undefined; // the x*y=k impact

  var priceImpactWithoutFeePercent = priceImpactWithoutFeeFraction ? new sdk.Percent(priceImpactWithoutFeeFraction === null || priceImpactWithoutFeeFraction === void 0 ? void 0 : priceImpactWithoutFeeFraction.numerator, priceImpactWithoutFeeFraction === null || priceImpactWithoutFeeFraction === void 0 ? void 0 : priceImpactWithoutFeeFraction.denominator) : undefined; // the amount of the input that accrues to LPs

  var realizedLPFeeAmount = realizedLPFee && trade && (trade.inputAmount instanceof sdk.TokenAmount ? new sdk.TokenAmount(trade.inputAmount.token, realizedLPFee.multiply(trade.inputAmount.raw).quotient) : sdk.CurrencyAmount.ether(realizedLPFee.multiply(trade.inputAmount.raw).quotient));
  return {
    priceImpactWithoutFee: priceImpactWithoutFeePercent,
    realizedLPFee: realizedLPFeeAmount
  };
} // computes the minimum amount out and maximum amount in for a trade given a user specified allowed slippage in bips

function computeSlippageAdjustedAmounts(trade, allowedSlippage) {
  var _ref;

  return _ref = {}, _defineProperty__default["default"](_ref, exports.Field.INPUT, trade === null || trade === void 0 ? void 0 : trade.maximumAmountIn(allowedSlippage)), _defineProperty__default["default"](_ref, exports.Field.OUTPUT, trade === null || trade === void 0 ? void 0 : trade.minimumAmountOut(allowedSlippage)), _ref;
}

var _DEFAULT_SWAP_INFO;
var ChainError;

(function (ChainError) {
  ChainError[ChainError["UNCONNECTED_CHAIN"] = 0] = "UNCONNECTED_CHAIN";
  ChainError[ChainError["ACTIVATING_CHAIN"] = 1] = "ACTIVATING_CHAIN";
  ChainError[ChainError["UNSUPPORTED_CHAIN"] = 2] = "UNSUPPORTED_CHAIN";
  ChainError[ChainError["MISMATCHED_TOKEN_CHAINS"] = 3] = "MISMATCHED_TOKEN_CHAINS";
  ChainError[ChainError["MISMATCHED_CHAINS"] = 4] = "MISMATCHED_CHAINS";
})(ChainError || (ChainError = {}));

function useComputeSwapInfo() {
  var _ref;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account,
      chainId = _useWeb3React.chainId,
      isActivating = _useWeb3React.isActivating,
      isActive = _useWeb3React.isActive;

  var isSupported = useOnSupportedNetwork();

  var _useAtomValue = utils.useAtomValue(swapAtom),
      type = _useAtomValue.type,
      amount = _useAtomValue.amount,
      currencyIn = _useAtomValue[exports.Field.INPUT],
      currencyOut = _useAtomValue[exports.Field.OUTPUT],
      tokenIdsIn = _useAtomValue.tokenIdsIn,
      tokenIdsOut = _useAtomValue.tokenIdsOut;

  var inputCurrency = currencyIn !== null && currencyIn !== void 0 && currencyIn.address && (currencyIn !== null && currencyIn !== void 0 && currencyIn.tokenId || (currencyIn === null || currencyIn === void 0 ? void 0 : currencyIn.tokenId) === 0) ? new sdk.Token(chainId !== null && chainId !== void 0 ? chainId : NETWORK_CHAIN_ID, getHashAddress(currencyIn.address, +currencyIn.tokenId), 0, currencyIn === null || currencyIn === void 0 ? void 0 : currencyIn.symbol, currencyIn === null || currencyIn === void 0 ? void 0 : currencyIn.name) : currencyIn;
  var outputCurrency = currencyOut !== null && currencyOut !== void 0 && currencyOut.address && currencyOut !== null && currencyOut !== void 0 && currencyOut.tokenId || (currencyOut === null || currencyOut === void 0 ? void 0 : currencyOut.tokenId) === 0 ? new sdk.Token(chainId !== null && chainId !== void 0 ? chainId : NETWORK_CHAIN_ID, getHashAddress(currencyOut === null || currencyOut === void 0 ? void 0 : currencyOut.address, +currencyOut.tokenId), 0, currencyOut === null || currencyOut === void 0 ? void 0 : currencyOut.symbol, currencyOut === null || currencyOut === void 0 ? void 0 : currencyOut.name) : currencyOut;
  var inputBalance = useCurrencyBalance(account !== null && account !== void 0 ? account : undefined, currencyIn !== null && currencyIn !== void 0 ? currencyIn : undefined);
  var outputBalance = useCurrencyBalance(account !== null && account !== void 0 ? account : undefined, currencyOut !== null && currencyOut !== void 0 ? currencyOut : undefined);
  var isExactIn = type === sdkCore.TradeType.EXACT_INPUT;
  var parsedAmount = tryParseAmount(amount, (_ref = isExactIn ? inputCurrency : outputCurrency) !== null && _ref !== void 0 ? _ref : undefined);
  var bestTradeExactIn = useTradeExactIn(isExactIn ? parsedAmount : undefined, outputCurrency !== null && outputCurrency !== void 0 ? outputCurrency : undefined);
  var bestTradeExactOut = useTradeExactOut(inputCurrency !== null && inputCurrency !== void 0 ? inputCurrency : undefined, !isExactIn ? parsedAmount : undefined);
  var v2Trade = isExactIn ? bestTradeExactIn : bestTradeExactOut;
  var parsedAmounts = React.useMemo(function () {
    var _ref2;

    return _ref2 = {}, _defineProperty__default["default"](_ref2, exports.Field.INPUT, isExactIn ? parsedAmount : v2Trade === null || v2Trade === void 0 ? void 0 : v2Trade.inputAmount), _defineProperty__default["default"](_ref2, exports.Field.OUTPUT, !isExactIn ? parsedAmount : v2Trade === null || v2Trade === void 0 ? void 0 : v2Trade.outputAmount), _ref2;
  }, [isExactIn, parsedAmount, v2Trade === null || v2Trade === void 0 ? void 0 : v2Trade.inputAmount, v2Trade === null || v2Trade === void 0 ? void 0 : v2Trade.outputAmount]);
  var currencies = React.useMemo(function () {
    var _ref3;

    return _ref3 = {}, _defineProperty__default["default"](_ref3, exports.Field.INPUT, currencyIn !== null && currencyIn !== void 0 ? currencyIn : undefined), _defineProperty__default["default"](_ref3, exports.Field.OUTPUT, currencyOut !== null && currencyOut !== void 0 ? currencyOut : undefined), _ref3;
  }, [currencyIn, currencyOut]);
  var is721Input = checkIs721(currencies[exports.Field.INPUT]);
  var is721Output = checkIs721(currencies[exports.Field.OUTPUT]);
  var selectedTokenIds = React.useMemo(function () {
    var _list$map;

    var list = is721Input ? tokenIdsIn : is721Output ? tokenIdsOut : undefined;
    var ids = (_list$map = list === null || list === void 0 ? void 0 : list.map(function (_ref4) {
      var tokenId = _ref4.tokenId;
      return tokenId;
    })) !== null && _list$map !== void 0 ? _list$map : undefined;
    return ids;
  }, [is721Input, is721Output, tokenIdsIn, tokenIdsOut]); // Compute slippage and impact off of the trade so that it refreshes with the trade.
  // Wait until the trade is valid to avoid displaying incorrect intermediate values.

  var slippage = useSlippage();
  var chainIdIn = currencyIn === null || currencyIn === void 0 ? void 0 : currencyIn.chainId;
  var chainIdOut = currencyOut === null || currencyOut === void 0 ? void 0 : currencyOut.chainId;
  var tokenChainId = chainIdIn || chainIdOut;
  var slippageAdjustedAmounts = React.useMemo(function () {
    return v2Trade && slippage ? computeSlippageAdjustedAmounts(v2Trade, slippage.allowed) : undefined;
  }, [slippage, v2Trade]);
  var error = React.useMemo(function () {
    if (!isActive) return isActivating ? ChainError.ACTIVATING_CHAIN : ChainError.UNCONNECTED_CHAIN;
    if (!isSupported) return ChainError.UNSUPPORTED_CHAIN;
    if (chainIdIn && chainIdOut && chainIdIn !== chainIdOut) return ChainError.MISMATCHED_TOKEN_CHAINS;
    if (chainId && tokenChainId && chainId !== tokenChainId) return ChainError.MISMATCHED_CHAINS;
    var inputError;

    if (!account) {
      inputError = 'Connect Wallet';
    }

    if (!parsedAmount) {
      var _inputError;

      inputError = (_inputError = inputError) !== null && _inputError !== void 0 ? _inputError : 'Enter an amount';
    }

    if (is721Input && (tokenIdsIn === null || tokenIdsIn === void 0 ? void 0 : tokenIdsIn.length) + '' !== (v2Trade === null || v2Trade === void 0 ? void 0 : v2Trade.inputAmount.toExact())) {
      var _inputError2;

      inputError = (_inputError2 = inputError) !== null && _inputError2 !== void 0 ? _inputError2 : 'Choose token Ids';
    }

    if (!currencies[exports.Field.INPUT] || !currencies[exports.Field.OUTPUT]) {
      inputError = 'Select a token';
    } // compare input balance to max input based on version


    var balanceIn = inputBalance,
        amountIn = slippageAdjustedAmounts ? slippageAdjustedAmounts[exports.Field.INPUT] : null;

    if (balanceIn && amountIn && balanceIn.lessThan(amountIn)) {
      inputError = 'Insufficient ' + amountIn.currency.symbol + ' balance';
    }

    if (is721Input && is721Output || is721Input && checkIs1155(currencies[exports.Field.OUTPUT]) || is721Output && checkIs1155(currencies[exports.Field.INPUT])) {
      inputError = 'Invalid Pair';
    }

    var userHasSpecifiedInputOutput = Boolean(currencies[exports.Field.INPUT] && currencies[exports.Field.OUTPUT] && (parsedAmount === null || parsedAmount === void 0 ? void 0 : parsedAmount.greaterThan(sdk.JSBI.BigInt(0))));

    if (!(v2Trade !== null && v2Trade !== void 0 && v2Trade.route) && userHasSpecifiedInputOutput) {
      inputError = 'Insufficient liquidity for this trade.'; // { singleHopOnly && 'Try enabling multi-hop trades.' }
    }

    return inputError;
  }, [account, chainId, chainIdIn, chainIdOut, currencies, inputBalance, is721Input, is721Output, isActivating, isActive, isSupported, parsedAmount, slippageAdjustedAmounts, tokenChainId, tokenIdsIn === null || tokenIdsIn === void 0 ? void 0 : tokenIdsIn.length, v2Trade === null || v2Trade === void 0 ? void 0 : v2Trade.inputAmount, v2Trade === null || v2Trade === void 0 ? void 0 : v2Trade.route]);
  var pair721Address = React.useMemo(function () {
    var tokenFrom = wrappedCurrency(currencyIn, chainId);
    var tokenTo = wrappedCurrency(currencyOut, chainId);
    return tokenFrom && tokenTo && checkIs721(currencyOut) ? sdk.Pair.getAddress(tokenFrom, tokenTo) : undefined;
  }, [chainId, currencyIn, currencyOut]);
  return React.useMemo(function () {
    var _ref5;

    return _ref5 = {}, _defineProperty__default["default"](_ref5, exports.Field.INPUT, {
      currency: currencyIn,
      amount: parsedAmounts[exports.Field.INPUT],
      balance: inputBalance,
      subTokens: tokenIdsIn
    }), _defineProperty__default["default"](_ref5, exports.Field.OUTPUT, {
      currency: currencyOut,
      amount: parsedAmounts[exports.Field.OUTPUT],
      balance: outputBalance,
      subTokens: tokenIdsOut
    }), _defineProperty__default["default"](_ref5, "independentField", type === sdkCore.TradeType.EXACT_INPUT ? exports.Field.INPUT : exports.Field.OUTPUT), _defineProperty__default["default"](_ref5, "error", error), _defineProperty__default["default"](_ref5, "trade", v2Trade), _defineProperty__default["default"](_ref5, "slippage", slippage), _defineProperty__default["default"](_ref5, "pair721Address", pair721Address), _defineProperty__default["default"](_ref5, "priceImpact", computeTradePriceBreakdown(v2Trade).priceImpactWithoutFee), _defineProperty__default["default"](_ref5, "slippageAdjustedAmounts", slippageAdjustedAmounts), _defineProperty__default["default"](_ref5, "tokenIdsForCb", selectedTokenIds), _ref5;
  }, [currencyIn, parsedAmounts, inputBalance, tokenIdsIn, currencyOut, outputBalance, tokenIdsOut, type, error, v2Trade, slippage, pair721Address, slippageAdjustedAmounts, selectedTokenIds]);
}

var DEFAULT_SWAP_INFO = (_DEFAULT_SWAP_INFO = {}, _defineProperty__default["default"](_DEFAULT_SWAP_INFO, exports.Field.INPUT, {}), _defineProperty__default["default"](_DEFAULT_SWAP_INFO, exports.Field.OUTPUT, {}), _defineProperty__default["default"](_DEFAULT_SWAP_INFO, "error", ChainError.UNCONNECTED_CHAIN), _defineProperty__default["default"](_DEFAULT_SWAP_INFO, "trade", undefined), _defineProperty__default["default"](_DEFAULT_SWAP_INFO, "slippage", DEFAULT_SLIPPAGE), _DEFAULT_SWAP_INFO);
var SwapContext = /*#__PURE__*/React.createContext(DEFAULT_SWAP_INFO);
function SwapProvider(_ref6) {
  var children = _ref6.children;
  var swapInfo = useComputeSwapInfo();
  return /*#__PURE__*/React__default["default"].createElement(SwapContext.Provider, {
    value: swapInfo
  }, children);
}
/** Requires that SwapInfoUpdater be installed in the DOM tree. **/

function useSwapInfo() {
  return React.useContext(SwapContext);
}
function tryParseAmount(value, currency) {
  if (!value || !currency) {
    return undefined;
  }

  try {
    var typedValueParsed = utils$1.parseUnits(value, currency.decimals).toString();

    if (typedValueParsed !== '0' || +typedValueParsed > 0) {
      return currency instanceof sdk.Token ? new sdk.TokenAmount(currency, sdk.JSBI.BigInt(typedValueParsed)) : sdk.CurrencyAmount.ether(sdk.JSBI.BigInt(typedValueParsed));
    }
  } catch (error) {
    // should fail if the user specifies too many decimal places of precision (or maybe exceed max uint?)
    console.debug("Failed to parse input amount: \"".concat(value, "\""), error);
  } // necessary for all paths to return a value


  return undefined;
}

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$8(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var ZERO = sdk.JSBI.BigInt(0);
var ONE_BIPS = new sdk.Percent(sdk.JSBI.BigInt(1), sdk.JSBI.BigInt(10000));
var MintContext = /*#__PURE__*/React__default["default"].createContext({
  dependentField: MintField.CURRENCY_B,
  currencies: {},
  currencyBalances: {},
  parsedAmounts: {},
  pairState: PairState.NOT_EXISTS,
  setCurrencyA: function setCurrencyA() {
    return undefined;
  },
  setCurrencyB: function setCurrencyB() {
    return undefined;
  }
});
var MintProvider = function MintProvider(_ref) {
  var children = _ref.children;

  var _useState = React.useState(undefined),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      currencyA = _useState2[0],
      setCurrencyA = _useState2[1];

  var _useState3 = React.useState(undefined),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      currencyB = _useState4[0],
      setCurrencyB = _useState4[1];

  var defivedInfo = useDerivedMintInfo(currencyA, currencyB);

  var _useAtomValue = utils.useAtomValue(mintAtom),
      typedValue = _useAtomValue.typedValue,
      otherTypedValue = _useAtomValue.otherTypedValue,
      tokenIds = _useAtomValue.tokenIds;

  return /*#__PURE__*/React__default["default"].createElement(MintContext.Provider, {
    value: _objectSpread$8(_objectSpread$8({}, defivedInfo), {}, {
      setCurrencyA: setCurrencyA,
      setCurrencyB: setCurrencyB,
      typedValue: typedValue,
      otherTypedValue: otherTypedValue,
      tokenIds: tokenIds,
      currencyA: currencyA,
      currencyB: currencyB
    })
  }, children);
};
var useMintContext = function useMintContext() {
  var context = React.useContext(MintContext);
  return context;
};
function useDerivedMintInfo(currencyA, currencyB) {
  var _currencyBalances$Fie, _currencyBalances$Fie2;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account,
      chainId = _useWeb3React.chainId;

  var _useAtomValue2 = utils.useAtomValue(mintAtom),
      independentField = _useAtomValue2.independentField,
      typedValue = _useAtomValue2.typedValue,
      otherTypedValue = _useAtomValue2.otherTypedValue,
      tokenIds = _useAtomValue2.tokenIds;

  var dependentField = independentField === MintField.CURRENCY_A ? MintField.CURRENCY_B : MintField.CURRENCY_A; // tokens

  var currencies = React.useMemo(function () {
    var _ref2;

    return _ref2 = {}, _defineProperty__default["default"](_ref2, MintField.CURRENCY_A, generateErc20(wrappedCurrency(currencyA, chainId))), _defineProperty__default["default"](_ref2, MintField.CURRENCY_B, generateErc20(wrappedCurrency(currencyB, chainId))), _ref2;
  }, [currencyA, currencyB, chainId]);
  var currenciesRaw = React.useMemo(function () {
    var _ref3;

    return _ref3 = {}, _defineProperty__default["default"](_ref3, MintField.CURRENCY_A, currencyA === sdk.ETHER ? sdk.ETHER : generateErc20(wrappedCurrency(currencyA, chainId))), _defineProperty__default["default"](_ref3, MintField.CURRENCY_B, currencyB === sdk.ETHER ? sdk.ETHER : generateErc20(wrappedCurrency(currencyB, chainId))), _ref3;
  }, [chainId, currencyA, currencyB]); // pair

  var _usePair = usePair(currencies[MintField.CURRENCY_A], currencies[MintField.CURRENCY_B]),
      _usePair2 = _slicedToArray__default["default"](_usePair, 2),
      pairState = _usePair2[0],
      pair = _usePair2[1];

  var totalSupply = useTotalSupply(pair === null || pair === void 0 ? void 0 : pair.liquidityToken);
  var lpBalance = useTokenBalance(account !== null && account !== void 0 ? account : undefined, pair === null || pair === void 0 ? void 0 : pair.liquidityToken);
  var noReserves = (pair === null || pair === void 0 ? void 0 : pair.token0Price.equalTo('0')) && (pair === null || pair === void 0 ? void 0 : pair.token1Price.equalTo('0'));
  var noLiquidity = pairState === PairState.NOT_EXISTS || Boolean(totalSupply && sdk.JSBI.equal(totalSupply.raw, ZERO)) || !!noReserves; // balances

  var balanceA = useCurrencyBalance(account !== null && account !== void 0 ? account : undefined, currencyA !== null && currencyA !== void 0 ? currencyA : undefined);
  var balanceB = useCurrencyBalance(account !== null && account !== void 0 ? account : undefined, currencyB !== null && currencyB !== void 0 ? currencyB : undefined);
  var currencyBalances = React.useMemo(function () {
    var _ref4;

    return _ref4 = {}, _defineProperty__default["default"](_ref4, MintField.CURRENCY_A, balanceA), _defineProperty__default["default"](_ref4, MintField.CURRENCY_B, balanceB), _ref4;
  }, [balanceA, balanceB]); // amounts

  var independentAmount = tryParseAmount(typedValue, currenciesRaw[independentField]);
  var dependentAmount = React.useMemo(function () {
    if (noLiquidity) {
      if (otherTypedValue && currencies[dependentField]) {
        return tryParseAmount(otherTypedValue, currenciesRaw[dependentField]);
      }

      return undefined;
    } else if (independentAmount) {
      // we wrap the currencies just to get the price in terms of the other token
      var wrappedIndependentAmount = wrappedCurrencyAmount(independentAmount, chainId);
      var _ref5 = [currencies[MintField.CURRENCY_A], currencies[MintField.CURRENCY_B]],
          tokenA = _ref5[0],
          tokenB = _ref5[1];

      if (tokenA && tokenB && wrappedIndependentAmount && pair) {
        var dependentCurrency = dependentField === MintField.CURRENCY_B ? currenciesRaw[MintField.CURRENCY_B] : currenciesRaw[MintField.CURRENCY_A];
        var dependentTokenAmount = dependentField === MintField.CURRENCY_B ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        pair.priceOf(tokenA).quote(wrappedIndependentAmount) : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        pair.priceOf(tokenB).quote(wrappedIndependentAmount);
        return dependentCurrency === sdk.ETHER ? sdk.CurrencyAmount.ether(dependentTokenAmount.raw) : dependentTokenAmount;
      }

      return undefined;
    } else {
      return undefined;
    }
  }, [noLiquidity, independentAmount, otherTypedValue, currencies, dependentField, chainId, pair, currenciesRaw]);
  var parsedAmounts = React.useMemo(function () {
    var _ref6;

    return _ref6 = {}, _defineProperty__default["default"](_ref6, MintField.CURRENCY_A, independentField === MintField.CURRENCY_A ? independentAmount : dependentAmount), _defineProperty__default["default"](_ref6, MintField.CURRENCY_B, independentField === MintField.CURRENCY_A ? dependentAmount : independentAmount), _ref6;
  }, [dependentAmount, independentAmount, independentField]);
  var price = React.useMemo(function () {
    if (noLiquidity) {
      var _currencyAAmount = parsedAmounts[MintField.CURRENCY_A],
          _currencyBAmount = parsedAmounts[MintField.CURRENCY_B];

      if (_currencyAAmount && _currencyBAmount) {
        return new sdk.Price(_currencyAAmount.currency, _currencyBAmount.currency, _currencyAAmount.raw, _currencyBAmount.raw);
      }

      return undefined;
    } else {
      var wrappedCurrencyA = wrappedCurrency(currencies[MintField.CURRENCY_A], chainId);
      return pair && wrappedCurrencyA ? pair.priceOf(wrappedCurrencyA) : undefined;
    }
  }, [chainId, currencies, noLiquidity, pair, parsedAmounts]); // liquidity minted

  var liquidityMinted = React.useMemo(function () {
    try {
      var _currencyAAmount2 = parsedAmounts[MintField.CURRENCY_A],
          _currencyBAmount2 = parsedAmounts[MintField.CURRENCY_B];
      var _ref7 = [wrappedCurrencyAmount(_currencyAAmount2, chainId), wrappedCurrencyAmount(_currencyBAmount2, chainId)],
          tokenAmountA = _ref7[0],
          tokenAmountB = _ref7[1];

      if (pair && totalSupply && tokenAmountA && tokenAmountB) {
        if (+(tokenAmountA === null || tokenAmountA === void 0 ? void 0 : tokenAmountA.toExact()) === 0 || +(tokenAmountB === null || tokenAmountB === void 0 ? void 0 : tokenAmountB.toExact()) === 0 || noReserves) {
          return undefined;
        }

        return pair.getLiquidityMinted(totalSupply, tokenAmountA, tokenAmountB);
      } else {
        return undefined;
      }
    } catch (e) {
      console.error(e);
      return undefined;
    }
  }, [parsedAmounts, chainId, pair, totalSupply, noReserves]);
  var poolTokenPercentage = React.useMemo(function () {
    if (totalSupply && pair !== null && pair !== void 0 && pair.liquidityToken) {
      var balance = lpBalance !== null && lpBalance !== void 0 ? lpBalance : new sdk.TokenAmount(pair === null || pair === void 0 ? void 0 : pair.liquidityToken, sdk.JSBI.BigInt(0));
      var amount = liquidityMinted ? balance === null || balance === void 0 ? void 0 : balance.add(liquidityMinted) : balance;
      var totalSupplyAmount = liquidityMinted ? totalSupply === null || totalSupply === void 0 ? void 0 : totalSupply.add(liquidityMinted) : totalSupply;
      return new sdk.Percent(amount.raw, totalSupplyAmount.raw);
    } else {
      return undefined;
    }
  }, [liquidityMinted, lpBalance, pair === null || pair === void 0 ? void 0 : pair.liquidityToken, totalSupply]);
  var shareOfPool = React.useMemo(function () {
    var _ref8;

    return noLiquidity && price ? '100' : (_ref8 = poolTokenPercentage !== null && poolTokenPercentage !== void 0 && poolTokenPercentage.lessThan(ONE_BIPS) ? '<0.01' : poolTokenPercentage === null || poolTokenPercentage === void 0 ? void 0 : poolTokenPercentage.toFixed(2)) !== null && _ref8 !== void 0 ? _ref8 : '0';
  }, [noLiquidity, poolTokenPercentage, price]);
  var error;

  if (!account) {
    error = 'Connect Wallet';
  }

  if (!currencyA || !currencyB) {
    var _error;

    error = (_error = error) !== null && _error !== void 0 ? _error : 'Select Currency and/or NFT';
  }

  if (pairState === PairState.INVALID) {
    var _error2;

    error = (_error2 = error) !== null && _error2 !== void 0 ? _error2 : 'Invalid pair';
  }

  if (!parsedAmounts[MintField.CURRENCY_A] || !parsedAmounts[MintField.CURRENCY_B]) {
    var _error3;

    error = (_error3 = error) !== null && _error3 !== void 0 ? _error3 : 'Enter an amount';
  }

  var currencyAAmount = parsedAmounts[MintField.CURRENCY_A],
      currencyBAmount = parsedAmounts[MintField.CURRENCY_B];

  if (currencyAAmount && currencyBalances !== null && currencyBalances !== void 0 && (_currencyBalances$Fie = currencyBalances[MintField.CURRENCY_A]) !== null && _currencyBalances$Fie !== void 0 && _currencyBalances$Fie.lessThan(currencyAAmount)) {
    var _currencies$Field$CUR;

    error = 'Insufficient ' + ((_currencies$Field$CUR = currencies[MintField.CURRENCY_A]) === null || _currencies$Field$CUR === void 0 ? void 0 : _currencies$Field$CUR.symbol) + ' balance';
  }

  if (currencyBAmount && currencyBalances !== null && currencyBalances !== void 0 && (_currencyBalances$Fie2 = currencyBalances[MintField.CURRENCY_B]) !== null && _currencyBalances$Fie2 !== void 0 && _currencyBalances$Fie2.lessThan(currencyBAmount)) {
    var _currencies$Field$CUR2;

    error = 'Insufficient ' + ((_currencies$Field$CUR2 = currencies[MintField.CURRENCY_B]) === null || _currencies$Field$CUR2 === void 0 ? void 0 : _currencies$Field$CUR2.symbol) + ' balance';
  }

  if (currencyBAmount !== null && currencyBAmount !== void 0 && currencyBAmount.equalTo('0')) {
    var _currencies$Field$CUR3;

    error = 'Insufficient ' + ((_currencies$Field$CUR3 = currencies[MintField.CURRENCY_B]) === null || _currencies$Field$CUR3 === void 0 ? void 0 : _currencies$Field$CUR3.symbol) + ' amount';
  }

  if (currencyAAmount !== null && currencyAAmount !== void 0 && currencyAAmount.equalTo('0')) {
    var _currencies$Field$CUR4;

    error = 'Insufficient ' + ((_currencies$Field$CUR4 = currencies[MintField.CURRENCY_A]) === null || _currencies$Field$CUR4 === void 0 ? void 0 : _currencies$Field$CUR4.symbol) + ' amount';
  }

  var isANft = checkIs1155(currencyA) || checkIs721(currencyA);
  var isBNft = checkIs1155(currencyB) || checkIs721(currencyB);

  if (isANft && isBNft) {
    error = 'Invalid pair';
  }

  if ((checkIs721(currencyA) || checkIs721(currencyB)) && (!tokenIds || tokenIds.length < 1)) {
    var _error4;

    error = (_error4 = error) !== null && _error4 !== void 0 ? _error4 : 'Please choose NFT token IDs';
  }

  return {
    dependentField: dependentField,
    independentField: independentField === MintField.CURRENCY_A ? MintField.CURRENCY_A : MintField.CURRENCY_B,
    currencies: currencies,
    pair: pair,
    pairState: pairState,
    currencyBalances: currencyBalances,
    parsedAmounts: parsedAmounts,
    price: price,
    noLiquidity: noLiquidity,
    liquidityMinted: liquidityMinted,
    poolTokenPercentage: poolTokenPercentage,
    error: error,
    shareOfPool: shareOfPool
  };
}

var MIN_ETH = sdk.JSBI.exponentiate(sdk.JSBI.BigInt(10), sdk.JSBI.BigInt(16)); // .01 ETH

/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */

function maxAmountSpend(currencyAmount) {
  if (!currencyAmount) return undefined;

  if (currencyAmount.currency === sdk.ETHER) {
    if (sdk.JSBI.greaterThan(currencyAmount.raw, MIN_ETH)) {
      return sdk.CurrencyAmount.ether(sdk.JSBI.subtract(currencyAmount.raw, MIN_ETH));
    } else {
      return sdk.CurrencyAmount.ether(sdk.JSBI.BigInt(0));
    }
  }

  return currencyAmount;
}

var _excluded$2 = ["color", "disabled", "action", "onClick", "children", "wrapperProps"];

var _templateObject$2, _templateObject2$1;

var StyledButton = /*#__PURE__*/_styled__default["default"](material.Button).withConfig({
  displayName: "ActionButton__StyledButton",
  componentId: "sc-ql33uw-0"
})(["border-radius:", "em;flex-grow:1;max-height:56px;transition:background-color 0.25s ease-out,border-radius 0.25s ease-out,flex-grow 0.25s ease-out;"], function (_ref) {
  var theme = _ref.theme;
  return theme.borderRadius * 0.75;
});

var ActionRow = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "ActionButton__ActionRow",
  componentId: "sc-ql33uw-1"
})([""]);

var grow = _styled.keyframes(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral__default["default"](["\n  from {\n    opacity: 0;\n    width: 0;\n  }\n  to {\n    opacity: 1;\n    width: max-content;\n  }\n"])));

var actionCss = _styled.css(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral__default["default"](["\n  background-color: ", ";\n  border: 1px solid ", ";\n  padding: calc(0.25em - 1px);\n  padding-left: calc(0.75em - 1px);\n\n  ", " {\n    animation: ", " 0.25s ease-in;\n    flex-grow: 1;\n    justify-content: flex-start;\n    white-space: nowrap;\n  }\n\n  ", " {\n    /* Subtract the padding from the borderRadius so that it nests properly. */\n    border-radius: ", "em;\n    flex-grow: 0;\n    padding: 0 1em;\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.container;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.outline;
}, ActionRow, grow, StyledButton, function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderRadius - 0.25;
});

var Overlay = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "ActionButton__Overlay",
  componentId: "sc-ql33uw-2"
})(["border-radius:", "em;flex-direction:row-reverse;margin-top:12px;min-height:3.5em;transition:padding 0.25s ease-out;", ""], function (_ref5) {
  var theme = _ref5.theme;
  return theme.borderRadius;
}, function (_ref6) {
  var hasAction = _ref6.hasAction;
  return hasAction && actionCss;
});
function ActionButton$1(_ref7) {
  var _ref7$color = _ref7.color,
      color = _ref7$color === void 0 ? 'accent' : _ref7$color,
      disabled = _ref7.disabled,
      action = _ref7.action,
      onClick = _ref7.onClick,
      children = _ref7.children,
      wrapperProps = _ref7.wrapperProps,
      rest = _objectWithoutProperties__default["default"](_ref7, _excluded$2);

  var textColor = React.useMemo(function () {
    return color === 'accent' ? 'onAccent' : 'currentColor';
  }, [color]);
  return /*#__PURE__*/React__default["default"].createElement(Overlay, _extends__default["default"]({
    hasAction: Boolean(action),
    flex: true,
    align: "stretch"
  }, wrapperProps), (action ? action.onClick : true) && /*#__PURE__*/React__default["default"].createElement(material.Button, _extends__default["default"]({
    disabled: disabled,
    onClick: (action === null || action === void 0 ? void 0 : action.onClick) || onClick
  }, rest), /*#__PURE__*/React__default["default"].createElement(TransitionButton, {
    buttonSize: action ? 'medium' : 'large',
    color: textColor
  }, (action === null || action === void 0 ? void 0 : action.children) || children)), action && /*#__PURE__*/React__default["default"].createElement(ActionRow, {
    gap: 0.5
  }, /*#__PURE__*/React__default["default"].createElement(LargeIcon, {
    color: "currentColor",
    icon: action.icon || AlertTriangle
  }), /*#__PURE__*/React__default["default"].createElement(Subhead2, null, action === null || action === void 0 ? void 0 : action.message)));
}

// https://eips.ethereum.org/EIPS/eip-1193#provider-errors
var ErrorCode;

(function (ErrorCode) {
  ErrorCode[ErrorCode["USER_REJECTED_REQUEST"] = 4001] = "USER_REJECTED_REQUEST";
  ErrorCode[ErrorCode["UNAUTHORIZED"] = 4100] = "UNAUTHORIZED";
  ErrorCode[ErrorCode["UNSUPPORTED_METHOD"] = 4200] = "UNSUPPORTED_METHOD";
  ErrorCode[ErrorCode["DISCONNECTED"] = 4900] = "DISCONNECTED";
  ErrorCode[ErrorCode["CHAIN_DISCONNECTED"] = 4901] = "CHAIN_DISCONNECTED";
  ErrorCode[ErrorCode["CHAIN_NOT_ADDED"] = 4902] = "CHAIN_NOT_ADDED";
})(ErrorCode || (ErrorCode = {}));

var _JSON_RPC_FALLBACK_EN;
/**
 * Fallback JSON RPC endpoints.
 * These are used if the integrator does not provide an endpoint, or if the endpoint does not work.
 *
 * MetaMask allows switching to any URL, but displays a warning if it is not on the "Safe" list:
 * https://github.com/MetaMask/metamask-mobile/blob/bdb7f37c90e4fc923881a07fca38d4e77c73a579/app/core/RPCMethods/wallet_addEthereumChain.js#L228-L235
 * https://chainid.network/chains.json
 *
 * These "Safe" URLs are listed first, followed by other fallback URLs, which are taken from chainlist.org.
 */

var JSON_RPC_FALLBACK_ENDPOINTS = (_JSON_RPC_FALLBACK_EN = {}, _defineProperty__default["default"](_JSON_RPC_FALLBACK_EN, exports.SupportedChainId.MAINNET, [// "Safe" URLs
'https://cloudflare-eth.com', // "Fallback" URLs
'https://rpc.ankr.com/eth', 'https://eth-mainnet.public.blastapi.io']), _defineProperty__default["default"](_JSON_RPC_FALLBACK_EN, exports.SupportedChainId.GOERLI, [// "Safe" URLs
'https://rpc.goerli.mudit.blog/', // "Fallback" URLs
'https://rpc.ankr.com/eth_goerli']), _defineProperty__default["default"](_JSON_RPC_FALLBACK_EN, exports.SupportedChainId.SEPOLIA, []), _JSON_RPC_FALLBACK_EN);

var JsonRpcUrlMapContext = /*#__PURE__*/React.createContext(undefined);
function Provider$2(_ref) {
  var jsonRpcMap = _ref.jsonRpcMap,
      children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement(JsonRpcUrlMapContext.Provider, {
    value: jsonRpcMap
  }, children);
}
function useJsonRpcUrlsMap() {
  var jsonRpcMap = React.useContext(JsonRpcUrlMapContext);
  return React.useMemo(function () {
    return toJsonRpcUrlsMap(jsonRpcMap);
  }, [jsonRpcMap]);
}

function toJsonRpcMap(getChainConnections) {
  var _ref2;

  return _ref2 = {}, _defineProperty__default["default"](_ref2, exports.SupportedChainId.MAINNET, getChainConnections(exports.SupportedChainId.MAINNET)), _defineProperty__default["default"](_ref2, exports.SupportedChainId.SEPOLIA, getChainConnections(exports.SupportedChainId.SEPOLIA)), _defineProperty__default["default"](_ref2, exports.SupportedChainId.GOERLI, getChainConnections(exports.SupportedChainId.GOERLI)), _ref2;
}

function getChainConnections(connectionMap, chainId) {
  var _filter;

  var value = connectionMap === null || connectionMap === void 0 ? void 0 : connectionMap[chainId];
  return (_filter = (Array.isArray(value) ? value : [value]).filter(function (value) {
    return Boolean(value);
  })).concat.apply(_filter, _toConsumableArray__default["default"](JSON_RPC_FALLBACK_ENDPOINTS[chainId]));
}

function toJsonRpcConnectionMap(connectionMap) {
  function getJsonRpcProvider(chainId) {
    var _getChainConnections = getChainConnections(connectionMap, chainId),
        _getChainConnections2 = _slicedToArray__default["default"](_getChainConnections, 1),
        connection = _getChainConnections2[0];

    return providers.JsonRpcProvider.isProvider(connection) ? connection : new providers.StaticJsonRpcProvider(connection, Number(chainId));
  }

  return toJsonRpcMap(getJsonRpcProvider);
}
function toJsonRpcUrlMap(connectionMap) {
  function getJsonRpcUrl(chainId) {
    var _getChainConnections3 = getChainConnections(connectionMap, chainId),
        _getChainConnections4 = _slicedToArray__default["default"](_getChainConnections3, 1),
        connection = _getChainConnections4[0];

    return providers.JsonRpcProvider.isProvider(connection) ? connection.connection.url : connection;
  }

  return toJsonRpcMap(getJsonRpcUrl);
}
function toJsonRpcUrlsMap(connectionMap) {
  function getJsonRpcUrls(chainId) {
    var connections = getChainConnections(connectionMap, chainId);
    return connections.map(function (connection) {
      return providers.JsonRpcProvider.isProvider(connection) ? connection.connection.url : connection;
    });
  }

  return toJsonRpcMap(getJsonRpcUrls);
}

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$7(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/** Defined by EIP-3085. */

var onSwitchChainAtom = jotai.atom(undefined);

function toHex(chainId) {
  return "0x".concat(chainId.toString(16));
}

function addChain(_x, _x2) {
  return _addChain.apply(this, arguments);
}

function _addChain() {
  _addChain = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(provider, addChainParameter) {
    var _iterator, _step, rpcUrl;

    return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _iterator = _createForOfIteratorHelper(addChainParameter.rpcUrls);
            _context2.prev = 1;

            _iterator.s();

          case 3:
            if ((_step = _iterator.n()).done) {
              _context2.next = 17;
              break;
            }

            rpcUrl = _step.value;
            _context2.prev = 5;
            _context2.next = 8;
            return provider.send('wallet_addEthereumChain', [_objectSpread$7(_objectSpread$7({}, addChainParameter), {}, {
              rpcUrls: [rpcUrl]
            })]);

          case 8:
            _context2.next = 15;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](5);

            if (!((_context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.code) !== ErrorCode.USER_REJECTED_REQUEST)) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("continue", 15);

          case 14:
            throw _context2.t0;

          case 15:
            _context2.next = 3;
            break;

          case 17:
            _context2.next = 22;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t1 = _context2["catch"](1);

            _iterator.e(_context2.t1);

          case 22:
            _context2.prev = 22;

            _iterator.f();

            return _context2.finish(22);

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 19, 22, 25], [5, 10]]);
  }));
  return _addChain.apply(this, arguments);
}

function switchChain(_x3, _x4, _x5) {
  return _switchChain.apply(this, arguments);
}

function _switchChain() {
  _switchChain = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3(provider, chainId, addChainParameter) {
    return _regeneratorRuntime__default["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return provider.send('wallet_switchEthereumChain', [{
              chainId: toHex(chainId)
            }]);

          case 3:
            _context3.next = 12;
            break;

          case 5:
            _context3.prev = 5;
            _context3.t0 = _context3["catch"](0);

            if (!((_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.code) === ErrorCode.CHAIN_NOT_ADDED && addChainParameter !== null && addChainParameter !== void 0 && addChainParameter.rpcUrls.length)) {
              _context3.next = 11;
              break;
            }

            _context3.next = 10;
            return addChain(provider, addChainParameter);

          case 10:
            return _context3.abrupt("return", switchChain(provider, chainId));

          case 11:
            throw _context3.t0;

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 5]]);
  }));
  return _switchChain.apply(this, arguments);
}

function useSwitchChain() {
  var _useWeb3React = core.useWeb3React(),
      connector = _useWeb3React.connector,
      provider = _useWeb3React.provider;

  var connectors = useConnectors();
  var urlMap = useJsonRpcUrlsMap();
  var onSwitchChain = utils.useAtomValue(onSwitchChainAtom);
  return React.useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(chainId) {
      var _getChainInfo, chainName, nativeCurrency, explorer, addChainParameter, switching;

      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _getChainInfo = getChainInfo(chainId), chainName = _getChainInfo.label, nativeCurrency = _getChainInfo.nativeCurrency, explorer = _getChainInfo.explorer;
              addChainParameter = {
                chainId: toHex(chainId),
                chainName: chainName,
                nativeCurrency: nativeCurrency,
                blockExplorerUrls: [explorer],
                rpcUrls: urlMap[chainId]
              };
              _context.prev = 2;

              if (!(connector === connectors.network)) {
                _context.next = 7;
                break;
              }

              _context.next = 6;
              return connector.activate(chainId);

            case 6:
              return _context.abrupt("return", _context.sent);

            case 7:
              if (!(connector === connectors.user)) {
                _context.next = 19;
                break;
              }

              _context.prev = 8;
              switching = onSwitchChain === null || onSwitchChain === void 0 ? void 0 : onSwitchChain(addChainParameter); // If onSwitchChain returns a Promise, the integrator is responsible for any chain switching. Await and return.

              if (!switching) {
                _context.next = 14;
                break;
              }

              _context.next = 13;
              return switching;

            case 13:
              return _context.abrupt("return", _context.sent);

            case 14:
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](8);
              return _context.abrupt("return");

            case 19:
              _context.prev = 19;

              if (provider) {
                _context.next = 22;
                break;
              }

              throw new Error();

            case 22:
              _context.next = 24;
              return Promise.all([// Await both the user action (switchChain) and its result (chainChanged)
              // so that the callback does not resolve before the chain switch has visibly occured.
              new Promise(function (resolve) {
                return provider.once('chainChanged', resolve);
              }), switchChain(provider, chainId, addChainParameter)]);

            case 24:
              _context.next = 32;
              break;

            case 26:
              _context.prev = 26;
              _context.t1 = _context["catch"](19);

              if (!((_context.t1 === null || _context.t1 === void 0 ? void 0 : _context.t1.code) === ErrorCode.USER_REJECTED_REQUEST)) {
                _context.next = 30;
                break;
              }

              return _context.abrupt("return");

            case 30:
              _context.next = 32;
              return connector.activate(chainId);

            case 32:
              _context.next = 37;
              break;

            case 34:
              _context.prev = 34;
              _context.t2 = _context["catch"](2);
              throw new Error("Failed to switch network: ".concat(_context.t2));

            case 37:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 34], [8, 16], [19, 26]]);
    }));

    return function (_x6) {
      return _ref.apply(this, arguments);
    };
  }(), [connector, connectors.network, connectors.user, onSwitchChain, provider, urlMap]);
}

/** A chain-switching ActionButton. */
function ChainSwitchButton(_ref) {
  var color = _ref.color,
      chainId = _ref.chainId;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      isPending = _useState2[0],
      setIsPending = _useState2[1];

  var switchChain = useSwitchChain();

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var onSwitchChain = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setIsPending(true);
            _context.prev = 1;
            _context.next = 4;
            return switchChain(chainId);

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            setError(_context.t0);

          case 9:
            _context.prev = 9;
            setIsPending(false);
            return _context.finish(9);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 6, 9, 12]]);
  })), [chainId, switchChain]);
  if (error) throw error;
  var actionProps = React.useMemo(function () {
    return isPending ? {
      message: account ? /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Switch network in your wallet"
      }) : /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Switching network"
      }),
      icon: Spinner$1
    } : {
      message: /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Switch network"
      }),
      onClick: onSwitchChain,
      children: /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Switch"
      })
    };
  }, [account, isPending, onSwitchChain]);
  return /*#__PURE__*/React__default["default"].createElement(ActionButton$1, {
    color: color,
    action: actionProps
  });
}

function ActionButton(_ref) {
  var error = _ref.error,
      pending = _ref.pending,
      success = _ref.success,
      onAction = _ref.onAction,
      actionText = _ref.actionText,
      pendingText = _ref.pendingText,
      height = _ref.height,
      width = _ref.width,
      disableAction = _ref.disableAction,
      successText = _ref.successText;
  var theme = material.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, error || pending ? /*#__PURE__*/React__default["default"].createElement(material.Button, {
    disabled: true,
    sx: {
      height: height,
      width: width,
      background: theme.palette.action.disabledBackground
    }
  }, pending ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Spinner, {
    marginRight: 16
  }), pendingText || 'Waiting Confirmation') : error) : success ? /*#__PURE__*/React__default["default"].createElement(material.Button, {
    disabled: true,
    sx: {
      height: height,
      width: width
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    variant: "inherit"
  }, successText !== null && successText !== void 0 ? successText : actionText)) : /*#__PURE__*/React__default["default"].createElement(material.Button, {
    sx: {
      height: height,
      width: width,
      background: theme.gradient.gradient1
    },
    onClick: onAction,
    disabled: disableAction
  }, actionText));
}

var ApprovalState;

(function (ApprovalState) {
  ApprovalState[ApprovalState["UNKNOWN"] = 0] = "UNKNOWN";
  ApprovalState[ApprovalState["NOT_APPROVED"] = 1] = "NOT_APPROVED";
  ApprovalState[ApprovalState["PENDING"] = 2] = "PENDING";
  ApprovalState[ApprovalState["APPROVED"] = 3] = "APPROVED";
})(ApprovalState || (ApprovalState = {}));

var oldestBlockMapAtom = immer.atomWithImmer({});
function useSetOldestValidBlock() {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var updateValidBlock = utils.useUpdateAtom(oldestBlockMapAtom);
  return React.useCallback(function (block) {
    if (!chainId) return;
    updateValidBlock(function (oldestBlockMap) {
      oldestBlockMap[chainId] = Math.max(block, oldestBlockMap[chainId] || 0);
    });
  }, [chainId, updateValidBlock]);
}

function useCurrentBlockTimestamp() {
  var _useSingleCallResult, _useSingleCallResult$, _useSingleCallResult$2;

  var multicall = useInterfaceMulticall();
  var resultStr = (_useSingleCallResult = useSingleCallResult(multicall, 'getCurrentBlockTimestamp')) === null || _useSingleCallResult === void 0 ? void 0 : (_useSingleCallResult$ = _useSingleCallResult.result) === null || _useSingleCallResult$ === void 0 ? void 0 : (_useSingleCallResult$2 = _useSingleCallResult$[0]) === null || _useSingleCallResult$2 === void 0 ? void 0 : _useSingleCallResult$2.toString();
  return React.useMemo(function () {
    return typeof resultStr === 'string' ? bignumber.BigNumber.from(resultStr) : undefined;
  }, [resultStr]);
}

/** Returns the default transaction TTL for the chain, in minutes. */

function useDefaultTransactionTtl() {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  if (chainId && L2_CHAIN_IDS.includes(chainId)) return L2_DEADLINE_FROM_NOW / 60;
  return DEFAULT_DEADLINE_FROM_NOW / 60;
}
/** Returns the user-inputted transaction TTL, in minutes. */

function useTransactionTtl() {
  var _useAtomValue = utils.useAtomValue(swapEventHandlersAtom),
      onTransactionDeadlineChange = _useAtomValue.onTransactionDeadlineChange;

  var _useAtom = jotai.useAtom(transactionTtlAtom),
      _useAtom2 = _slicedToArray__default["default"](_useAtom, 2),
      ttl = _useAtom2[0],
      setTtlBase = _useAtom2[1];

  var setTtl = React.useCallback(function (ttl) {
    onTransactionDeadlineChange === null || onTransactionDeadlineChange === void 0 ? void 0 : onTransactionDeadlineChange(ttl);
    setTtlBase(ttl);
  }, [onTransactionDeadlineChange, setTtlBase]);
  return [ttl, setTtl];
} // combines the block timestamp with the user setting to give the deadline that should be used for any submitted transaction

function useTransactionDeadline() {
  var _useTransactionTtl = useTransactionTtl(),
      _useTransactionTtl2 = _slicedToArray__default["default"](_useTransactionTtl, 1),
      ttl = _useTransactionTtl2[0];

  var defaultTtl = useDefaultTransactionTtl();
  var blockTimestamp = useCurrentBlockTimestamp();
  return React.useMemo(function () {
    if (!blockTimestamp) return undefined;
    return blockTimestamp.add((ttl || defaultTtl
    /* in seconds */
    ) * 60);
  }, [blockTimestamp, defaultTtl, ttl]);
}

exports.TransactionType = void 0;

(function (TransactionType) {
  TransactionType[TransactionType["APPROVAL"] = 0] = "APPROVAL";
  TransactionType[TransactionType["SWAP"] = 1] = "SWAP";
  TransactionType[TransactionType["WRAP"] = 2] = "WRAP";
  TransactionType[TransactionType["UNWRAP"] = 3] = "UNWRAP";
  TransactionType[TransactionType["MINT"] = 4] = "MINT";
})(exports.TransactionType || (exports.TransactionType = {}));

var transactionsAtom = immer.atomWithImmer({});

/**
 * Returns the gas value plus a margin for unexpected or variable gas costs
 * @param value the gas value to pad
 */

function calculateGasMargin(value) {
  return value.mul(120).div(100);
}
function calculateSlippageAmount(value, slippage) {
  if (slippage < 0 || slippage > 10000) {
    throw Error("Unexpected slippage value: ".concat(slippage));
  }

  return [sdk.JSBI.divide(sdk.JSBI.multiply(value.raw, sdk.JSBI.BigInt(10000 - slippage)), sdk.JSBI.BigInt(10000)), sdk.JSBI.divide(sdk.JSBI.multiply(value.raw, sdk.JSBI.BigInt(10000 + slippage)), sdk.JSBI.BigInt(10000))];
}

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function useMintCallback() {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId,
      library = _useWeb3React.provider,
      account = _useWeb3React.account;

  var _useMintContext = useMintContext(),
      parsedAmounts = _useMintContext.parsedAmounts,
      noLiquidity = _useMintContext.noLiquidity,
      currencies = _useMintContext.currencies,
      currencyA = _useMintContext.currencyA,
      currencyB = _useMintContext.currencyB,
      tokenIds = _useMintContext.tokenIds;

  var _useSlippage = useSlippage(),
      allowedSlippage = _useSlippage.allowed;

  var deadline = useTransactionDeadline();
  var setOldestValidBlock = useSetOldestValidBlock();

  var _useMintActionHandler = useMintActionHandlers(noLiquidity),
      onResetMintState = _useMintActionHandler.onResetMintState;

  var is721Pair = checkIs721(currencyA) || checkIs721(currencyB);
  var addLiquidityCb = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    var _amountsMin;

    var router, parsedAmountA, parsedAmountB, slippageRaw, amountsMin, estimate, method, args, value, isA1155, isB1155, _wrappedCurrency$addr, _wrappedCurrency, _wrappedCurrency$addr2, _wrappedCurrency2, _tokenId, _ref2, _filter, _tokenId2, _ref3, _filter2, tokenBIsETH, noNft, methodName, _filter3, _token1155$address, _address, _token1155$address2, _wrappedCurrency3, _token1155$tokenId, _wrappedCurrency$addr3, _wrappedCurrency4, tokenAIs1155, _noNft, _methodName, token1155, token, estimatedGasLimit;

    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!chainId || !library || !account || !currencyA || !currencyB)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            router = is721Pair ? getRouterContract721(chainId, library, account) : getRouterContract(chainId, library, account);
            parsedAmountA = parsedAmounts[MintField.CURRENCY_A], parsedAmountB = parsedAmounts[MintField.CURRENCY_B];

            if (!(!parsedAmountA || !parsedAmountB || !currencyA || !currencyB || !deadline)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            slippageRaw = Number.parseFloat(allowedSlippage.toFixed(5)) * 100;
            amountsMin = (_amountsMin = {}, _defineProperty__default["default"](_amountsMin, MintField.CURRENCY_A, calculateSlippageAmount(parsedAmountA, noLiquidity ? 0 : slippageRaw)[0]), _defineProperty__default["default"](_amountsMin, MintField.CURRENCY_B, calculateSlippageAmount(parsedAmountB, noLiquidity ? 0 : slippageRaw)[0]), _amountsMin);
            isA1155 = checkIs1155(currencyA) || checkIs721(currencyA);
            isB1155 = checkIs1155(currencyB) || checkIs721(currencyB);

            if (currencyA === sdk.ETHER || currencyB === sdk.ETHER) {
              tokenBIsETH = currencyB === sdk.ETHER;
              noNft = !isA1155 && !isB1155;
              methodName = noNft ? 'addLiquidityETH' : is721Pair ? 'addLiquidityETH721' : 'addLiquidityETH1155';
              estimate = router.estimateGas[methodName];
              method = router[methodName];
              args = is721Pair ? [(_wrappedCurrency$addr = (_wrappedCurrency = wrappedCurrency(tokenBIsETH ? currencyA : currencyB, chainId)) === null || _wrappedCurrency === void 0 ? void 0 : _wrappedCurrency.address) !== null && _wrappedCurrency$addr !== void 0 ? _wrappedCurrency$addr : '', //721 address
              tokenIds !== null && tokenIds !== void 0 ? tokenIds : [], //ids
              (tokenBIsETH ? parsedAmountA : parsedAmountB).raw.toString(), //721 amount
              (tokenBIsETH ? amountsMin[MintField.CURRENCY_B] : amountsMin[MintField.CURRENCY_A]).toString(), //eth min,
              account, deadline.toHexString()] : [(_wrappedCurrency$addr2 = (_wrappedCurrency2 = wrappedCurrency(tokenBIsETH ? currencyA : currencyB, chainId)) === null || _wrappedCurrency2 === void 0 ? void 0 : _wrappedCurrency2.address) !== null && _wrappedCurrency$addr2 !== void 0 ? _wrappedCurrency$addr2 : ''].concat(_toConsumableArray__default["default"](noNft ? [] : [tokenBIsETH ? (_tokenId = (_ref2 = (_filter = filter1155(currencyA)) !== null && _filter !== void 0 ? _filter : filter721(currencyA)) === null || _ref2 === void 0 ? void 0 : _ref2.tokenId) !== null && _tokenId !== void 0 ? _tokenId : '' : (_tokenId2 = (_ref3 = (_filter2 = filter1155(currencyB)) !== null && _filter2 !== void 0 ? _filter2 : filter721(currencyB)) === null || _ref3 === void 0 ? void 0 : _ref3.tokenId) !== null && _tokenId2 !== void 0 ? _tokenId2 : '']), [//tokenId
              (tokenBIsETH ? parsedAmountA : parsedAmountB).raw.toString(), // token desired
              amountsMin[tokenBIsETH ? MintField.CURRENCY_A : MintField.CURRENCY_B].toString(), // token min
              amountsMin[tokenBIsETH ? MintField.CURRENCY_B : MintField.CURRENCY_A].toString(), // eth min
              account, deadline.toHexString()]);
              value = bignumber.BigNumber.from((tokenBIsETH ? parsedAmountB : parsedAmountA).raw.toString());
            } else {
              tokenAIs1155 = checkIs1155(currencyA) || checkIs721(currencyA);
              _noNft = !isA1155 && !isB1155;
              _methodName = _noNft ? 'addLiquidity' : is721Pair ? 'addLiquidity721' : 'addLiquidity1155';
              token1155 = (_filter3 = filter1155(tokenAIs1155 ? currencyA : currencyB)) !== null && _filter3 !== void 0 ? _filter3 : filter721(tokenAIs1155 ? currencyA : currencyB);
              token = tokenAIs1155 ? currencyB : currencyA;
              estimate = router.estimateGas[_methodName];
              method = router[_methodName];
              args = is721Pair ? [(_token1155$address = token1155 === null || token1155 === void 0 ? void 0 : token1155.address) !== null && _token1155$address !== void 0 ? _token1155$address : '', //token721 address
              tokenIds, //nftIds
              (_address = (tokenAIs1155 ? currencyB : currencyA).address) !== null && _address !== void 0 ? _address : '', //tokenB address
              (tokenAIs1155 ? parsedAmountB : parsedAmountA).raw.toString(), //amountBDesired
              (tokenAIs1155 ? amountsMin[MintField.CURRENCY_B] : amountsMin[MintField.CURRENCY_A]).toString(), //amountBMin
              account, deadline.toHexString()] : [(_token1155$address2 = token1155 === null || token1155 === void 0 ? void 0 : token1155.address) !== null && _token1155$address2 !== void 0 ? _token1155$address2 : (_wrappedCurrency3 = wrappedCurrency(currencyB, chainId)) === null || _wrappedCurrency3 === void 0 ? void 0 : _wrappedCurrency3.address].concat(_toConsumableArray__default["default"](_noNft ? [] : [(_token1155$tokenId = token1155 === null || token1155 === void 0 ? void 0 : token1155.tokenId) !== null && _token1155$tokenId !== void 0 ? _token1155$tokenId : '']), [(_wrappedCurrency$addr3 = (_wrappedCurrency4 = wrappedCurrency(token, chainId)) === null || _wrappedCurrency4 === void 0 ? void 0 : _wrappedCurrency4.address) !== null && _wrappedCurrency$addr3 !== void 0 ? _wrappedCurrency$addr3 : '', (tokenAIs1155 ? parsedAmountA : parsedAmountB).raw.toString(), (tokenAIs1155 ? parsedAmountB : parsedAmountA).raw.toString(), amountsMin[tokenAIs1155 ? MintField.CURRENCY_A : MintField.CURRENCY_B].toString(), amountsMin[tokenAIs1155 ? MintField.CURRENCY_B : MintField.CURRENCY_A].toString(), account, deadline.toHexString()]);
              value = null;
            }

            _context.next = 13;
            return estimate.apply(void 0, _toConsumableArray__default["default"](args).concat([value ? {
              value: value
            } : {}]));

          case 13:
            estimatedGasLimit = _context.sent;
            return _context.abrupt("return", method.apply(void 0, _toConsumableArray__default["default"](args).concat([_objectSpread$6(_objectSpread$6({}, value ? {
              value: value
            } : {}), {}, {
              gasLimit: calculateGasMargin(estimatedGasLimit)
            })])).then(function (response) {
              var _parsedAmounts$Field$, _parsedAmounts$Field$2;

              onResetMintState();
              var summary = 'Add ' + ((_parsedAmounts$Field$ = parsedAmounts[MintField.CURRENCY_A]) === null || _parsedAmounts$Field$ === void 0 ? void 0 : _parsedAmounts$Field$.toSignificant(3)) + ' ' + getSymbol(currencies[MintField.CURRENCY_A]) + ' and ' + ((_parsedAmounts$Field$2 = parsedAmounts[MintField.CURRENCY_B]) === null || _parsedAmounts$Field$2 === void 0 ? void 0 : _parsedAmounts$Field$2.toSignificant(3)) + ' ' + getSymbol(currencies[MintField.CURRENCY_B]);
              response.blockNumber && setOldestValidBlock(response.blockNumber);
              return {
                response: response,
                summary: summary,
                type: exports.TransactionType.MINT
              };
            }).catch(function (error) {
              // if the user rejected the tx, pass this along
              if ((error === null || error === void 0 ? void 0 : error.code) === 4001) {
                throw new Error('Transaction rejected.');
              } else {
                // otherwise, the error was unexpected and we need to convey that
                console.error("Mint failed", error, args, value);
                throw new Error("Mint failed: ".concat(error.message));
              }
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [account, allowedSlippage, chainId, currencies, currencyA, currencyB, deadline, is721Pair, library, noLiquidity, onResetMintState, parsedAmounts, setOldestValidBlock, tokenIds]);
  return React.useMemo(function () {
    return {
      addLiquidityCb: addLiquidityCb
    };
  }, [addLiquidityCb]);
}

function MessageBox(_ref) {
  var type = _ref.type,
      children = _ref.children;
      _ref.width;
      var header = _ref.header,
      action = _ref.action,
      actionText = _ref.actionText;

  var _useModal = useModal(),
      hideModal = _useModal.hideModal;

  var icon = React.useMemo(function () {
    return type === 'success' ? /*#__PURE__*/React__default["default"].createElement("svg", {
      width: "32",
      height: "32",
      viewBox: "0 0 40 40",
      fill: theme.palette.text.primary
    }, /*#__PURE__*/React__default["default"].createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M29.432 14.0106C29.7949 14.3413 29.821 14.9035 29.4904 15.2664L18.7347 27.0713L11.7553 19.9794C11.411 19.6295 11.4155 19.0667 11.7654 18.7223C12.1153 18.378 12.6781 18.3825 13.0224 18.7324L18.685 24.4863L28.1763 14.069C28.5069 13.7062 29.0691 13.68 29.432 14.0106Z"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20 38.2222C30.0639 38.2222 38.2222 30.0639 38.2222 20C38.2222 9.93614 30.0639 1.77778 20 1.77778C9.93614 1.77778 1.77778 9.93614 1.77778 20C1.77778 30.0639 9.93614 38.2222 20 38.2222ZM20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
    })) : type === 'failure' ? /*#__PURE__*/React__default["default"].createElement("svg", {
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: theme.palette.text.primary
    }, /*#__PURE__*/React__default["default"].createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21.4807 10.8753C21.203 10.5976 20.7527 10.5976 20.475 10.8753L10.875 20.4753C10.5973 20.753 10.5973 21.2032 10.875 21.4809C11.1527 21.7586 11.603 21.7586 11.8807 21.4809L21.4807 11.8809C21.7584 11.6032 21.7584 11.153 21.4807 10.8753Z"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.5193 10.875C10.797 10.5973 11.2473 10.5973 11.525 10.875L21.125 20.475C21.4027 20.7527 21.4027 21.203 21.125 21.4807C20.8473 21.7584 20.397 21.7584 20.1193 21.4807L10.5193 11.8807C10.2416 11.603 10.2416 11.1527 10.5193 10.875Z"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16 30.5778C24.0511 30.5778 30.5778 24.0511 30.5778 16C30.5778 7.94892 24.0511 1.42222 16 1.42222C7.94892 1.42222 1.42222 7.94892 1.42222 16C1.42222 24.0511 7.94892 30.5778 16 30.5778ZM16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.0001 4.97789C9.9127 4.97789 4.97789 9.9127 4.97789 16.0001C4.97789 22.0875 9.9127 27.0223 16.0001 27.0223C22.0875 27.0223 27.0223 22.0875 27.0223 16.0001C27.0223 15.6074 27.3407 15.289 27.7334 15.289C28.1262 15.289 28.4446 15.6074 28.4446 16.0001C28.4446 22.873 22.873 28.4446 16.0001 28.4446C9.12723 28.4446 3.55566 22.873 3.55566 16.0001C3.55566 9.12723 9.12723 3.55566 16.0001 3.55566C16.3928 3.55566 16.7112 3.87404 16.7112 4.26678C16.7112 4.65951 16.3928 4.97789 16.0001 4.97789Z"
    })) : type === 'support' ? /*#__PURE__*/React__default["default"].createElement("svg", {
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: theme.palette.text.primary
    }, /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M19.7496 1.55106C18.7541 0.557811 17.4052 0 15.9989 0C14.5926 0 13.2438 0.557811 12.2482 1.55106L1.55106 12.2482C0.557811 13.2438 0 14.5926 0 15.9989C0 17.4052 0.557811 18.7541 1.55106 19.7496L12.2482 30.4467C13.2431 31.4413 14.5922 32 15.9989 32C17.4056 32 18.7547 31.4413 19.7496 30.4467L30.4467 19.7496C31.44 18.7541 31.9978 17.4052 31.9978 15.9989C31.9978 14.5926 31.44 13.2438 30.4467 12.2482L19.7496 1.55106ZM28.9433 18.2493L18.2493 28.9433C17.6524 29.54 16.8429 29.8752 15.9989 29.8752C15.1549 29.8752 14.3454 29.54 13.7485 28.9433L3.05452 18.2493C2.45779 17.6524 2.12257 16.8429 2.12257 15.9989C2.12257 15.1549 2.45779 14.3454 3.05452 13.7485L13.7485 3.05452C14.3454 2.45779 15.1549 2.12257 15.9989 2.12257C16.8429 2.12257 17.6524 2.45779 18.2493 3.05452L28.9433 13.7485C29.54 14.3454 29.8752 15.1549 29.8752 15.9989C29.8752 16.8429 29.54 17.6524 28.9433 18.2493Z"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M15.9988 25.5483C16.5847 25.5483 17.0598 25.0733 17.0598 24.4873C17.0598 23.9013 16.5847 23.4263 15.9988 23.4263C15.4128 23.4263 14.9377 23.9013 14.9377 24.4873C14.9377 25.0733 15.4128 25.5483 15.9988 25.5483Z"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M15.9987 7.51123C14.5922 7.51292 13.2438 8.07238 12.2493 9.06691C11.2548 10.0614 10.6953 11.4098 10.6936 12.8163C10.6936 13.0977 10.8054 13.3676 11.0044 13.5666C11.2033 13.7655 11.4732 13.8773 11.7546 13.8773C12.036 13.8773 12.3059 13.7655 12.5049 13.5666C12.7038 13.3676 12.8156 13.0977 12.8156 12.8163C12.8156 11.9721 13.151 11.1625 13.7479 10.5656C14.3449 9.96862 15.1545 9.63326 15.9987 9.63326C16.8429 9.63326 17.6525 9.96862 18.2494 10.5656C18.8464 11.1625 19.1817 11.9721 19.1817 12.8163C19.1817 13.7649 18.6586 14.2625 17.6549 15.1325C16.8226 15.7013 16.1406 16.4634 15.6673 17.3536C15.1941 18.2437 14.9437 19.2353 14.9377 20.2434C14.9377 20.5248 15.0494 20.7947 15.2484 20.9937C15.4474 21.1926 15.7173 21.3044 15.9987 21.3044C16.2801 21.3044 16.55 21.1926 16.7489 20.9937C16.9479 20.7947 17.0597 20.5248 17.0597 20.2434C17.0597 18.4535 17.9785 17.6567 19.0438 16.7357C20.1091 15.8147 21.3038 14.7792 21.3038 12.8163C21.3021 11.4098 20.7426 10.0614 19.7481 9.06691C18.7535 8.07238 17.4052 7.51292 15.9987 7.51123Z"
    })) : type === 'warning' ? /*#__PURE__*/React__default["default"].createElement("svg", {
      width: "32",
      height: "28",
      viewBox: "0 0 32 28",
      fill: theme.palette.text.primary
    }, /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M31.465 22.2115L19.3019 1.88462C18.5944 0.706731 17.3477 0 16 0C14.6523 0 13.4056 0.706731 12.6981 1.85096L0.534952 22.2115C-0.172599 23.3894 -0.172599 24.8365 0.501259 26.0481C1.17512 27.2596 2.42176 28 3.83686 28H28.1631C29.5446 28 30.7912 27.2596 31.4987 26.0481C32.1726 24.8365 32.1726 23.3894 31.465 22.2115ZM29.1739 24.7356C29.0729 24.9038 28.7696 25.3077 28.1631 25.3077H3.83686C3.23039 25.3077 2.92715 24.9038 2.82607 24.7356C2.72499 24.5673 2.52283 24.0962 2.82607 23.5913L15.0229 3.23077C15.3261 2.72596 15.7978 2.65865 16 2.65865C16.2022 2.65865 16.6739 2.72596 16.9771 3.23077L29.1402 23.5913C29.4435 24.0962 29.275 24.5673 29.1739 24.7356Z"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M15.9996 17.7692C16.8082 17.7692 17.4484 17.0962 17.4484 16.3221V10.1971C17.4484 9.38942 16.7745 8.75 15.9996 8.75C15.1909 8.75 14.5508 9.42308 14.5508 10.1971V16.2885C14.5508 17.0962 15.1909 17.7692 15.9996 17.7692Z"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M16.0006 22.6493C16.9868 22.6493 17.7863 21.8508 17.7863 20.8657C17.7863 19.8806 16.9868 19.082 16.0006 19.082C15.0143 19.082 14.2148 19.8806 14.2148 20.8657C14.2148 21.8508 15.0143 22.6493 16.0006 22.6493Z"
    })) : type === 'none' ? null : /*#__PURE__*/React__default["default"].createElement("svg", {
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: theme.palette.text.primary
    }, /*#__PURE__*/React__default["default"].createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21.4812 10.8753C21.2035 10.5976 20.7532 10.5976 20.4755 10.8753L10.8755 20.4753C10.5978 20.753 10.5978 21.2032 10.8755 21.4809C11.1532 21.7586 11.6035 21.7586 11.8812 21.4809L21.4812 11.8809C21.7589 11.6032 21.7589 11.153 21.4812 10.8753Z"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.5198 10.875C10.7975 10.5973 11.2478 10.5973 11.5255 10.875L21.1255 20.475C21.4032 20.7527 21.4032 21.203 21.1255 21.4807C20.8478 21.7584 20.3975 21.7584 20.1198 21.4807L10.5198 11.8807C10.2421 11.603 10.2421 11.1527 10.5198 10.875Z"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16 30.5778C24.0511 30.5778 30.5778 24.0511 30.5778 16C30.5778 7.94892 24.0511 1.42222 16 1.42222C7.94892 1.42222 1.42222 7.94892 1.42222 16C1.42222 24.0511 7.94892 30.5778 16 30.5778ZM16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
    }));
  }, [type]);
  return /*#__PURE__*/React__default["default"].createElement(Dialog, {
    type: "module"
  }, /*#__PURE__*/React__default["default"].createElement(Header, {
    title: header !== null && header !== void 0 ? header : 'Back'
  }), /*#__PURE__*/React__default["default"].createElement(material.Paper, {
    sx: {
      margin: '20px 10px 30px',
      boxShadow: 'none',
      height: '100%',
      display: 'flex'
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: 'grid',
    alignItems: 'center',
    padding: '40px 40px 100px',
    justifyItems: "center",
    gap: "20px",
    margin: "auto 0",
    width: "100%"
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, null, icon), header && /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    variant: "h6"
  }, header), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    fontSize: "18px",
    textAlign: "center",
    display: "grid",
    justifyItems: "center",
    width: "100%",
    sx: {
      wordBreak: 'break-word'
    }
  }, children), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    marginTop: "10px"
  }, /*#__PURE__*/React__default["default"].createElement(material.Button, {
    onClick: action !== null && action !== void 0 ? action : hideModal
  }, "Close"), type === 'failure' && actionText && /*#__PURE__*/React__default["default"].createElement(material.Button, {
    onClick: action
  }, actionText)))));
}

function TransacitonPendingModal(_ref) {
  var pendingText = _ref.pendingText;
  var theme = material.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(Dialog, {
    type: "dialog"
  }, /*#__PURE__*/React__default["default"].createElement(Header, {
    title: 'Waiting For Confirmation'
  }), /*#__PURE__*/React__default["default"].createElement(material.Paper, {
    sx: {
      margin: '20px 10px 30px',
      boxShadow: 'none',
      height: '100%'
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "grid",
    padding: "40px 24px",
    gap: "24px",
    justifyItems: "center",
    mt: '20%'
  }, /*#__PURE__*/React__default["default"].createElement(Spinner, {
    size: "40px"
  }), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    fontWeight: 400,
    fontSize: 18
  }, "Waiting For Confirmation"), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    fontWeight: 400,
    fontSize: 14,
    textAlign: "center",
    color: theme.palette.text.primary
  }, pendingText || 'Please initiate transaction in your wallet'))));
}

var _ETHERSCAN_PREFIXES;
var ETHERSCAN_PREFIXES = (_ETHERSCAN_PREFIXES = {}, _defineProperty__default["default"](_ETHERSCAN_PREFIXES, exports.SupportedChainId.MAINNET, 'https://etherscan.io'), _defineProperty__default["default"](_ETHERSCAN_PREFIXES, exports.SupportedChainId.GOERLI, 'https://goerli.etherscan.io'), _ETHERSCAN_PREFIXES);
var ExplorerDataType;
/**
 * Return the explorer link for the given data and data type
 * @param chainId the ID of the chain for which to return the data
 * @param data the data to return a link for
 * @param type the type of the data
 */

(function (ExplorerDataType) {
  ExplorerDataType["TRANSACTION"] = "transaction";
  ExplorerDataType["TOKEN"] = "token";
  ExplorerDataType["ADDRESS"] = "address";
  ExplorerDataType["BLOCK"] = "block";
})(ExplorerDataType || (ExplorerDataType = {}));

function getExplorerLink(chainId, data, type) {
  var _ETHERSCAN_PREFIXES$c;

  var prefix = (_ETHERSCAN_PREFIXES$c = ETHERSCAN_PREFIXES[chainId]) !== null && _ETHERSCAN_PREFIXES$c !== void 0 ? _ETHERSCAN_PREFIXES$c : 'https://etherscan.io';

  switch (type) {
    case ExplorerDataType.TRANSACTION:
      return "".concat(prefix, "/tx/").concat(data);

    case ExplorerDataType.TOKEN:
      return "".concat(prefix, "/token/").concat(data);

    case ExplorerDataType.BLOCK:
      // if (chainId === SupportedChainId.OPTIMISM || chainId === SupportedChainId.OPTIMISTIC_KOVAN) {
      //   return `${prefix}/tx/${data}`
      // }
      return "".concat(prefix, "/block/").concat(data);

    case ExplorerDataType.ADDRESS:
      return "".concat(prefix, "/address/").concat(data);

    default:
      return "".concat(prefix);
  }
}

function TransactionSubmittedModal(_ref) {
  var children = _ref.children,
      hash = _ref.hash;

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  return /*#__PURE__*/React__default["default"].createElement(MessageBox, {
    type: 'success',
    header: 'Transaction Submitted'
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "grid",
    gap: "20px",
    justifyContent: "center"
  }, children, chainId && hash && /*#__PURE__*/React__default["default"].createElement(ExternalLink, {
    underline: "always",
    href: getExplorerLink(chainId, hash, ExplorerDataType.TRANSACTION),
    style: {
      color: '#ffffff',
      fontSize: 12
    }
  }, "View on Etherscan")));
}

function useTokenAllowance(token, owner, spender) {
  var contract = useTokenContract(token === null || token === void 0 ? void 0 : token.address, false);
  var inputs = React.useMemo(function () {
    return [owner, spender];
  }, [owner, spender]);
  var allowance = useSingleCallResult(contract, 'allowance', inputs).result;
  return React.useMemo(function () {
    return token && allowance ? new sdk.TokenAmount(token, allowance.toString()) : undefined;
  }, [token, allowance]);
}

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function wait(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

function waitRandom(min, max) {
  return wait(min + Math.round(Math.random() * Math.max(0, max - min)));
}
/**
 * This error is thrown if the function is cancelled before completing
 */


var CancelledError = /*#__PURE__*/function (_Error) {
  _inherits__default["default"](CancelledError, _Error);

  var _super = _createSuper$3(CancelledError);

  function CancelledError() {
    var _this;

    _classCallCheck__default["default"](this, CancelledError);

    _this = _super.call(this, 'Cancelled');

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "isCancelledError", true);

    return _this;
  }

  return _createClass__default["default"](CancelledError);
}( /*#__PURE__*/_wrapNativeSuper__default["default"](Error));
/**
 * Throw this error if the function should retry
 */


var RetryableError = /*#__PURE__*/function (_Error2) {
  _inherits__default["default"](RetryableError, _Error2);

  var _super2 = _createSuper$3(RetryableError);

  function RetryableError() {
    var _this2;

    _classCallCheck__default["default"](this, RetryableError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this2), "isRetryableError", true);

    return _this2;
  }

  return _createClass__default["default"](RetryableError);
}( /*#__PURE__*/_wrapNativeSuper__default["default"](Error));

/**
 * Retries the function that returns the promise until the promise successfully resolves up to n retries
 * @param fn function to retry
 * @param n how many times to retry
 * @param minWait min wait between retries in ms
 * @param maxWait max wait between retries in ms
 */
function retry(fn, _ref) {
  var n = _ref.n,
      minWait = _ref.minWait,
      maxWait = _ref.maxWait;
  var completed = false;
  var rejectCancelled;
  var promise = new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(resolve, reject) {
      var result;
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              rejectCancelled = reject;

            case 1:

              result = void 0;
              _context.prev = 3;
              _context.next = 6;
              return fn();

            case 6:
              result = _context.sent;

              if (!completed) {
                resolve(result);
                completed = true;
              }

              return _context.abrupt("break", 24);

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](3);

              if (!completed) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("break", 24);

            case 15:
              if (!(n <= 0 || !_context.t0.isRetryableError)) {
                _context.next = 19;
                break;
              }

              reject(_context.t0);
              completed = true;
              return _context.abrupt("break", 24);

            case 19:
              n--;

            case 20:
              _context.next = 22;
              return waitRandom(minWait, maxWait);

            case 22:
              _context.next = 1;
              break;

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 11]]);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  return {
    promise: promise,
    cancel: function cancel() {
      if (completed) return;
      completed = true;
      rejectCancelled(new CancelledError());
    }
  };
}

function shouldCheck(lastBlockNumber, tx) {
  if (tx.receipt) return false;
  if (!tx.lastCheckedBlockNumber) return true;
  var blocksSinceCheck = lastBlockNumber - tx.lastCheckedBlockNumber;
  if (blocksSinceCheck < 1) return false;
  var minutesPending = (new Date().getTime() - tx.addedTime) / 60000;

  if (minutesPending > 60) {
    // every 10 blocks if pending longer than an hour
    return blocksSinceCheck > 9;
  } else if (minutesPending > 5) {
    // every 3 blocks if pending longer than 5 minutes
    return blocksSinceCheck > 2;
  } else {
    // otherwise every block
    return true;
  }
}
var DEFAULT_RETRY_OPTIONS = {
  n: 1,
  minWait: 0,
  maxWait: 0
};
function Updater(_ref) {
  var pendingTransactions = _ref.pendingTransactions,
      onCheck = _ref.onCheck,
      onReceipt = _ref.onReceipt;

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId,
      provider = _useWeb3React.provider;

  var lastBlockNumber = useBlockNumber();
  var fastForwardBlockNumber = useFastForwardBlockNumber();
  var getReceipt = React.useCallback(function (hash) {
    if (!provider || !chainId) throw new Error('No library or chainId');
    var retryOptions = DEFAULT_RETRY_OPTIONS;
    return retry(function () {
      return provider.getTransactionReceipt(hash).then(function (receipt) {
        if (receipt === null) {
          console.debug("Retrying tranasaction receipt for ".concat(hash));
          throw new RetryableError();
        }

        return receipt;
      });
    }, retryOptions);
  }, [chainId, provider]);
  React.useEffect(function () {
    if (!chainId || !provider || !lastBlockNumber) return;
    var cancels = Object.keys(pendingTransactions).filter(function (hash) {
      return shouldCheck(lastBlockNumber, pendingTransactions[hash]);
    }).map(function (hash) {
      var _getReceipt = getReceipt(hash),
          promise = _getReceipt.promise,
          cancel = _getReceipt.cancel;

      promise.then(function (receipt) {
        if (receipt) {
          onReceipt({
            chainId: chainId,
            hash: hash,
            receipt: receipt
          });
        } else {
          onCheck({
            chainId: chainId,
            hash: hash,
            blockNumber: lastBlockNumber
          });
        }
      }).catch(function (error) {
        if (!error.isCancelledError) {
          console.warn("Failed to get transaction receipt for ".concat(hash), error);
        }
      });
      return cancel;
    });
    return function () {
      cancels.forEach(function (cancel) {
        return cancel();
      });
    };
  }, [chainId, provider, lastBlockNumber, getReceipt, fastForwardBlockNumber, onReceipt, onCheck, pendingTransactions]);
  return null;
}

function isTransactionRecent(transaction) {
  return Date.now() - transaction.addedTime < 86400000;
}

function usePendingTransactions() {
  var _ref;

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var txs = utils.useAtomValue(transactionsAtom);
  return (_ref = chainId ? txs[chainId] : null) !== null && _ref !== void 0 ? _ref : {};
}
function useHasPendingApproval(tokenAddress, spender) {
  var _useWeb3React2 = core.useWeb3React(),
      chainId = _useWeb3React2.chainId;

  var allTransactions = utils.useAtomValue(transactionsAtom)[chainId !== null && chainId !== void 0 ? chainId : ''];
  return React.useMemo(function () {
    return typeof tokenAddress === 'string' && typeof spender === 'string' && Object.keys(allTransactions !== null && allTransactions !== void 0 ? allTransactions : {}).some(function (hash) {
      var tx = allTransactions[hash];
      if (!tx) return false;

      if (tx.receipt || tx.info.type !== exports.TransactionType.APPROVAL) {
        return false;
      } else {
        var approval = tx.info;
        if (!approval) return false;
        return approval.spenderAddress === spender && approval.tokenAddress === tokenAddress && isTransactionRecent(tx);
      }
    });
  }, [allTransactions, spender, tokenAddress]);
}
function useAddTransactionInfo() {
  var _useWeb3React3 = core.useWeb3React(),
      chainId = _useWeb3React3.chainId;

  var blockNumber = useBlockNumber();
  var updateTxs = utils.useUpdateAtom(transactionsAtom);
  return React.useCallback(function (info) {
    invariant__default["default"](chainId);
    var txChainId = chainId;
    var hash = info.response.hash;
    updateTxs(function (chainTxs) {
      var txs = chainTxs[txChainId] || {};
      txs[hash] = {
        addedTime: new Date().getTime(),
        lastCheckedBlockNumber: blockNumber,
        info: info
      };
      chainTxs[chainId] = txs;
    });
  }, [blockNumber, chainId, updateTxs]);
}
function TransactionsUpdater(_ref2) {
  var onTxSubmit = _ref2.onTxSubmit,
      onTxSuccess = _ref2.onTxSuccess,
      onTxFail = _ref2.onTxFail;
  var currentPendingTxs = usePendingTransactions();
  var updateTxs = utils.useUpdateAtom(transactionsAtom);
  var onCheck = React.useCallback(function (_ref3) {
    var chainId = _ref3.chainId,
        hash = _ref3.hash,
        blockNumber = _ref3.blockNumber;
    updateTxs(function (txs) {
      var _txs$chainId;

      var tx = (_txs$chainId = txs[chainId]) === null || _txs$chainId === void 0 ? void 0 : _txs$chainId[hash];

      if (tx) {
        tx.lastCheckedBlockNumber = tx.lastCheckedBlockNumber ? Math.max(tx.lastCheckedBlockNumber, blockNumber) : blockNumber;
      }
    });
  }, [updateTxs]);
  var onReceipt = React.useCallback(function (_ref4) {
    var chainId = _ref4.chainId,
        hash = _ref4.hash,
        receipt = _ref4.receipt;
    updateTxs(function (txs) {
      var _txs$chainId2;

      var tx = txs === null || txs === void 0 ? void 0 : (_txs$chainId2 = txs[chainId]) === null || _txs$chainId2 === void 0 ? void 0 : _txs$chainId2[hash];

      if (tx) {
        tx.receipt = receipt;
      }
    });

    if (receipt.status === 0) {
      onTxFail === null || onTxFail === void 0 ? void 0 : onTxFail(hash, receipt);
    } else {
      onTxSuccess === null || onTxSuccess === void 0 ? void 0 : onTxSuccess(hash, receipt);
    }
  }, [updateTxs, onTxFail, onTxSuccess]);
  var oldPendingTxs = React.useRef({});
  React.useEffect(function () {
    var newPendingTxHashes = Object.keys(currentPendingTxs);
    var oldPendingTxHashes = new Set(Object.keys(oldPendingTxs.current));

    if (newPendingTxHashes.length !== oldPendingTxHashes.size) {
      // if added new tx
      newPendingTxHashes.forEach(function (txHash) {
        if (!oldPendingTxHashes.has(txHash)) {
          onTxSubmit === null || onTxSubmit === void 0 ? void 0 : onTxSubmit(txHash, currentPendingTxs[txHash]);
        }
      });
      oldPendingTxs.current = currentPendingTxs;
    }
  }, [currentPendingTxs, onTxSubmit]);
  return /*#__PURE__*/React__default["default"].createElement(Updater, {
    pendingTransactions: currentPendingTxs,
    onCheck: onCheck,
    onReceipt: onReceipt
  });
}

function useGetApproved$1(contract, spender) {
  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account; // eslint-disable-next-line react-hooks/exhaustive-deps


  var arg = React.useMemo(function () {
    return [account !== null && account !== void 0 ? account : '', spender];
  }, [account, spender]);
  var res = useSingleCallResult(account ? contract : null, 'isApprovedForAll', arg);
  return React.useMemo(function () {
    var _res$result;

    if (res.loading) return undefined;
    return !!((_res$result = res.result) !== null && _res$result !== void 0 && _res$result[0]);
  }, [res.loading, res.result]);
} // returns a variable indicating the state of the approval and a function which approves if necessary or early returns


function useApproveERC721Callback(token721) {
  var _useWeb3React2 = core.useWeb3React(),
      chainId = _useWeb3React2.chainId;

  var contractAddress = token721 === null || token721 === void 0 ? void 0 : token721.address;
  var spender = chainId ? ROUTER_ADDRESSES_721[chainId] : undefined;

  var _useModal = useModal(),
      hideModal = _useModal.hideModal,
      showModal = _useModal.showModal;

  var contract = use721Contract(contractAddress);
  var isApproved = useGetApproved$1(contract, spender !== null && spender !== void 0 ? spender : '');
  var pendingApproval = useHasPendingApproval(contract === null || contract === void 0 ? void 0 : contract.address, spender !== null && spender !== void 0 ? spender : ''); // check the current approval status

  var approvalState = React.useMemo(function () {
    // if (!spender) return ApprovalState.UNKNOWN
    // we might not have enough data to know whether or not we need to approve
    if (isApproved) return ApprovalState.APPROVED;
    if (pendingApproval) return ApprovalState.PENDING;
    if (isApproved === undefined) return ApprovalState.UNKNOWN;
    return ApprovalState.NOT_APPROVED;
  }, [isApproved, pendingApproval]);
  var addTransaction = useAddTransactionInfo();
  var approve = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    var estimatedGas;
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(approvalState !== ApprovalState.NOT_APPROVED)) {
              _context.next = 3;
              break;
            }

            console.error('approve was called unnecessarily');
            return _context.abrupt("return");

          case 3:
            if (contract) {
              _context.next = 6;
              break;
            }

            console.error('Contract is null');
            return _context.abrupt("return");

          case 6:
            if (spender) {
              _context.next = 9;
              break;
            }

            console.error('no spender');
            return _context.abrupt("return");

          case 9:
            showModal( /*#__PURE__*/React__default["default"].createElement(TransacitonPendingModal, null));
            _context.next = 12;
            return contract.estimateGas.setApprovalForAll(spender, true).catch(function (error) {
              console.debug('Failed to approve nft', error);
              throw error;
            });

          case 12:
            estimatedGas = _context.sent;
            return _context.abrupt("return", contract.setApprovalForAll(spender, true, {
              gasLimit: calculateGasMargin(estimatedGas)
            }).then(function (response) {
              hideModal();
              addTransaction({
                response: response,
                type: exports.TransactionType.APPROVAL,
                summary: 'Approve NFT',
                tokenAddress: contract.address,
                spenderAddress: spender
              });
            }).catch(function (error) {
              hideModal();
              showModal( /*#__PURE__*/React__default["default"].createElement(MessageBox, {
                type: "error"
              }, "Failed to approve NFT"));
              console.debug('Failed to approve nft', error);
              throw error;
            }));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [approvalState, contract, spender, showModal, hideModal, addTransaction]);
  return [approvalState, approve];
}

function useGetApproved(contract, spender, tokenId) {
  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account; // eslint-disable-next-line react-hooks/exhaustive-deps


  var arg = React.useMemo(function () {
    return [account !== null && account !== void 0 ? account : '', spender];
  }, [account, spender, tokenId]);
  var res = useSingleCallResult(account ? contract : null, 'isApprovedForAll', arg);
  return React.useMemo(function () {
    var _res$result;

    if (res.loading) return undefined;
    return !!((_res$result = res.result) !== null && _res$result !== void 0 && _res$result[0]);
  }, [res.loading, res.result]);
} // returns a variable indicating the state of the approval and a function which approves if necessary or early returns


function useApproveERC1155Callback(token1155) {
  var _token1155$tokenId;

  var _useWeb3React2 = core.useWeb3React(),
      chainId = _useWeb3React2.chainId;

  var contractAddress = token1155 === null || token1155 === void 0 ? void 0 : token1155.address;
  var tokenId = (_token1155$tokenId = token1155 === null || token1155 === void 0 ? void 0 : token1155.tokenId) !== null && _token1155$tokenId !== void 0 ? _token1155$tokenId : '';
  var spender = chainId ? ROUTER_ADDRESSES[chainId] : undefined;

  var _useModal = useModal(),
      hideModal = _useModal.hideModal,
      showModal = _useModal.showModal;

  var contract = use1155Contract(contractAddress);
  var isApproved = useGetApproved(contract, spender !== null && spender !== void 0 ? spender : '', tokenId);
  var pendingApproval = useHasPendingApproval(contract === null || contract === void 0 ? void 0 : contract.address, spender !== null && spender !== void 0 ? spender : ''); // check the current approval status

  var approvalState = React.useMemo(function () {
    // if (!spender) return ApprovalState.UNKNOWN
    // we might not have enough data to know whether or not we need to approve
    if (isApproved) return ApprovalState.APPROVED;
    if (pendingApproval) return ApprovalState.PENDING;
    if (isApproved === undefined) return ApprovalState.UNKNOWN;
    return ApprovalState.NOT_APPROVED;
  }, [isApproved, pendingApproval]);
  var addTransaction = useAddTransactionInfo();
  var approve = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    var estimatedGas;
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(approvalState !== ApprovalState.NOT_APPROVED)) {
              _context.next = 3;
              break;
            }

            console.error('approve was called unnecessarily');
            return _context.abrupt("return");

          case 3:
            if (tokenId) {
              _context.next = 6;
              break;
            }

            console.error('no nft token id');
            return _context.abrupt("return");

          case 6:
            if (contract) {
              _context.next = 9;
              break;
            }

            console.error('Contract is null');
            return _context.abrupt("return");

          case 9:
            if (spender) {
              _context.next = 12;
              break;
            }

            console.error('no spender');
            return _context.abrupt("return");

          case 12:
            showModal( /*#__PURE__*/React__default["default"].createElement(TransacitonPendingModal, null));
            _context.next = 15;
            return contract.estimateGas.setApprovalForAll(spender, tokenId).catch(function (error) {
              console.debug('Failed to approve nft', error);
              throw error;
            });

          case 15:
            estimatedGas = _context.sent;
            return _context.abrupt("return", contract.setApprovalForAll(spender, true, {
              gasLimit: calculateGasMargin(estimatedGas)
            }).then(function (response) {
              hideModal();
              addTransaction({
                response: response,
                type: exports.TransactionType.APPROVAL,
                summary: 'Approve NFT',
                tokenAddress: contract.address,
                spenderAddress: spender
              });
            }).catch(function (error) {
              hideModal();
              showModal( /*#__PURE__*/React__default["default"].createElement(MessageBox, {
                type: "error"
              }, "Failed to approve token"));
              console.debug('Failed to approve nft', error);
              throw error;
            }));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [approvalState, tokenId, contract, spender, showModal, hideModal, addTransaction]);
  return [approvalState, approve];
}

function useApproveCallback(amountToApprove, spender) {
  var _useModal = useModal(),
      showModal = _useModal.showModal,
      hideModal = _useModal.hideModal;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account;

  var token = amountToApprove instanceof sdk.TokenAmount ? amountToApprove.token : undefined;
  var currentAllowance = useTokenAllowance(token, account !== null && account !== void 0 ? account : undefined, spender);
  var pendingApproval = useHasPendingApproval(token === null || token === void 0 ? void 0 : token.address, spender); // check the current approval status

  var approvalState = React.useMemo(function () {
    if (!amountToApprove || !spender) return ApprovalState.UNKNOWN;
    if (amountToApprove.currency === sdk.ETHER) return ApprovalState.APPROVED; // we might not have enough data to know whether or not we need to approve

    if (!currentAllowance) return ApprovalState.UNKNOWN; // amountToApprove will be defined if currentAllowance is

    return currentAllowance.lessThan(amountToApprove) ? pendingApproval ? ApprovalState.PENDING : ApprovalState.NOT_APPROVED : ApprovalState.APPROVED;
  }, [amountToApprove, currentAllowance, pendingApproval, spender]);
  var tokenContract = useTokenContract(token === null || token === void 0 ? void 0 : token.address);
  var addTransaction = useAddTransactionInfo();
  var approve = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    var estimatedGas;
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(approvalState !== ApprovalState.NOT_APPROVED)) {
              _context.next = 3;
              break;
            }

            console.error('approve was called unnecessarily');
            return _context.abrupt("return");

          case 3:
            if (token) {
              _context.next = 6;
              break;
            }

            console.error('no token');
            return _context.abrupt("return");

          case 6:
            if (tokenContract) {
              _context.next = 9;
              break;
            }

            console.error('tokenContract is null');
            return _context.abrupt("return");

          case 9:
            if (amountToApprove) {
              _context.next = 12;
              break;
            }

            console.error('missing amount to approve');
            return _context.abrupt("return");

          case 12:
            if (spender) {
              _context.next = 15;
              break;
            }

            console.error('no spender');
            return _context.abrupt("return");

          case 15:
            _context.next = 17;
            return tokenContract.estimateGas.approve(spender, amountToApprove.raw.toString());

          case 17:
            estimatedGas = _context.sent;
            showModal( /*#__PURE__*/React__default["default"].createElement(TransacitonPendingModal, null));
            return _context.abrupt("return", tokenContract.approve(spender, amountToApprove.raw.toString(), {
              // .approve(spender, useExact ? amountToApprove.raw.toString() : MaxUint256, {
              gasLimit: calculateGasMargin(estimatedGas)
            }).then(function (response) {
              hideModal();
              showModal( /*#__PURE__*/React__default["default"].createElement(TransactionSubmittedModal, null));
              addTransaction({
                response: response,
                type: exports.TransactionType.APPROVAL,
                summary: 'Approve ' + amountToApprove.currency.symbol,
                tokenAddress: token.address,
                spenderAddress: spender
              });
            }).catch(function (error) {
              hideModal();
              showModal( /*#__PURE__*/React__default["default"].createElement(MessageBox, {
                type: "error"
              }, "Failed to approve token"));
              console.debug('Failed to approve token', error);
              throw error;
            }));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [approvalState, token, tokenContract, amountToApprove, spender, hideModal, showModal, addTransaction]);
  return [approvalState, approve];
}
function useAllTokenApproveCallback(token, amount, is721Pair) {
  var _useWeb3React2 = core.useWeb3React(),
      chainId = _useWeb3React2.chainId;

  var is1155 = checkIs1155(token);
  var is721 = checkIs721(token);
  var erc20 = useApproveCallback(is1155 || is721 ? undefined : amount, chainId ? is721Pair ? ROUTER_ADDRESSES_721[chainId] : ROUTER_ADDRESSES[chainId] : undefined);
  var erc1155 = useApproveERC1155Callback(filter1155(token));
  var erc721 = useApproveERC721Callback(filter721(token));
  return is721 ? erc721 : is1155 ? erc1155 : erc20;
}

function invertTradeType(tradeType) {
  switch (tradeType) {
    case sdkCore.TradeType.EXACT_INPUT:
      return sdkCore.TradeType.EXACT_OUTPUT;

    case sdkCore.TradeType.EXACT_OUTPUT:
      return sdkCore.TradeType.EXACT_INPUT;
  }
}
function toTradeType(modifiedField) {
  switch (modifiedField) {
    case exports.Field.INPUT:
      return sdkCore.TradeType.EXACT_INPUT;

    case exports.Field.OUTPUT:
      return sdkCore.TradeType.EXACT_OUTPUT;
  }
}

function otherField(field) {
  switch (field) {
    case exports.Field.INPUT:
      return exports.Field.OUTPUT;

    case exports.Field.OUTPUT:
      return exports.Field.INPUT;
  }
}

function useSwitchSwapCurrencies() {
  var _useAtomValue = utils.useAtomValue(swapEventHandlersAtom),
      onSwitchTokens = _useAtomValue.onSwitchTokens;

  var setSwap = utils.useUpdateAtom(swapAtom);
  return React.useCallback(function () {
    setSwap(function (swap) {
      onSwitchTokens === null || onSwitchTokens === void 0 ? void 0 : onSwitchTokens();
      swap.type = invertTradeType(swap.type);
      var oldOutput = swap[exports.Field.OUTPUT];
      swap[exports.Field.OUTPUT] = swap[exports.Field.INPUT];
      swap[exports.Field.INPUT] = oldOutput;
      var to = swap.tokenIdsIn;
      swap.tokenIdsIn = swap.tokenIdsOut;
      swap.tokenIdsOut = to;
    });
  }, [onSwitchTokens, setSwap]);
}
var tokenIdsInAtom = pickAtom(swapAtom, 'tokenIdsIn');
var tokenIdsOutAtom = pickAtom(swapAtom, 'tokenIdsOut');
var amountAtom = pickAtom(swapAtom, 'amount');
function useSwapCurrency(field) {
  var currencyAtom = React.useMemo(function () {
    return pickAtom(swapAtom, field);
  }, [field]);

  var _useAtom = jotai.useAtom(tokenIdsInAtom),
      _useAtom2 = _slicedToArray__default["default"](_useAtom, 2),
      setTokenIdsIn = _useAtom2[1];

  var _useAtom3 = jotai.useAtom(tokenIdsOutAtom),
      _useAtom4 = _slicedToArray__default["default"](_useAtom3, 2),
      setTokenIdsOut = _useAtom4[1];

  var _useAtom5 = jotai.useAtom(amountAtom),
      _useAtom6 = _slicedToArray__default["default"](_useAtom5, 2),
      setAmount = _useAtom6[1];

  var _useAtom7 = jotai.useAtom(currencyAtom),
      _useAtom8 = _slicedToArray__default["default"](_useAtom7, 2),
      currency = _useAtom8[0],
      setCurrency = _useAtom8[1];

  var otherCurrencyAtom = React.useMemo(function () {
    return pickAtom(swapAtom, otherField(field));
  }, [field]);
  var otherCurrency = utils.useAtomValue(otherCurrencyAtom);

  var _useAtomValue2 = utils.useAtomValue(swapEventHandlersAtom),
      onTokenChange = _useAtomValue2.onTokenChange;

  var switchSwapCurrencies = useSwitchSwapCurrencies();
  var setOrSwitchCurrency = React.useCallback(function (update) {
    var is721 = checkIs721(update);

    if (!is721) {
      field === exports.Field.INPUT ? setTokenIdsIn(undefined) : setTokenIdsOut(undefined);
      setAmount('');
    }

    if (update === currency) return;

    if (update === otherCurrency) {
      switchSwapCurrencies();
    } else {
      onTokenChange === null || onTokenChange === void 0 ? void 0 : onTokenChange(field, update);
      setCurrency(update);
    }
  }, [currency, field, onTokenChange, otherCurrency, setAmount, setCurrency, setTokenIdsIn, setTokenIdsOut, switchSwapCurrencies]);
  return [currency, setOrSwitchCurrency];
}
var tradeTypeAtom = pickAtom(swapAtom, 'type');
function useIsSwapFieldIndependent(field) {
  var type = utils.useAtomValue(tradeTypeAtom);
  return type === toTradeType(field);
} // check if any amount has been entered by user
function useSwapAmount(field) {
  var value = utils.useAtomValue(amountAtom);
  var isFieldIndependent = useIsSwapFieldIndependent(field);
  var amount = isFieldIndependent ? value : undefined;

  var _useAtomValue3 = utils.useAtomValue(swapEventHandlersAtom),
      onAmountChange = _useAtomValue3.onAmountChange;

  var setSwap = utils.useUpdateAtom(swapAtom);
  var updateAmount = React.useCallback(function (update) {
    if (update === amount) return;
    onAmountChange === null || onAmountChange === void 0 ? void 0 : onAmountChange(field, update);
    setSwap(function (swap) {
      swap.type = toTradeType(field);
      swap.amount = update;
    });
  }, [amount, field, onAmountChange, setSwap]);
  return [amount, updateAmount];
}
function useSwapSubTokens() {
  var _useAtomValue4 = utils.useAtomValue(swapEventHandlersAtom),
      onSubTokenSwapChange = _useAtomValue4.onSubTokenSwapChange;

  var _useAtom9 = jotai.useAtom(tokenIdsInAtom),
      _useAtom10 = _slicedToArray__default["default"](_useAtom9, 2),
      tokenIdsIn = _useAtom10[0],
      setTokenIdsIn = _useAtom10[1];

  var _useAtom11 = jotai.useAtom(tokenIdsOutAtom),
      _useAtom12 = _slicedToArray__default["default"](_useAtom11, 2),
      tokenIdsOut = _useAtom12[0],
      setTokenIdsOut = _useAtom12[1];

  var updateTokenIds = React.useCallback(function (field, tokenList) {
    onSubTokenSwapChange === null || onSubTokenSwapChange === void 0 ? void 0 : onSubTokenSwapChange(field, tokenList);

    if (field === exports.Field.INPUT) {
      setTokenIdsIn(tokenList);
    } else {
      setTokenIdsOut(tokenList);
    }
  }, [onSubTokenSwapChange, setTokenIdsIn, setTokenIdsOut]);
  var updateTokenIdsIn = React.useCallback(function (tokenList) {
    updateTokenIds(exports.Field.INPUT, tokenList);
  }, [updateTokenIds]);
  var updateTokenIdsOut = React.useCallback(function (tokenList) {
    updateTokenIds(exports.Field.OUTPUT, tokenList);
  }, [updateTokenIds]);
  return {
    updateTokenIdsIn: updateTokenIdsIn,
    updateTokenIdsOut: updateTokenIdsOut,
    tokenIdsIn: tokenIdsIn,
    tokenIdsOut: tokenIdsOut
  };
}

/** Submits a transaction. Returns true if the transaction was submitted. */

function useOnSubmit$1() {
  var addTransactionInfo = useAddTransactionInfo();
  var setDisplayTxHash = utils.useUpdateAtom(displayTxHashAtom);

  var _useSwapAmount = useSwapAmount(exports.Field.INPUT),
      _useSwapAmount2 = _slicedToArray__default["default"](_useSwapAmount, 2),
      setInputAmount = _useSwapAmount2[1];

  var _useModal = useModal(),
      showModal = _useModal.showModal,
      hideModal = _useModal.hideModal;

  return React.useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(submit) {
      var info;
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              showModal( /*#__PURE__*/React__default["default"].createElement(TransacitonPendingModal, null));
              _context.next = 4;
              return submit();

            case 4:
              info = _context.sent;
              hideModal();
              _context.next = 13;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              hideModal();
              showModal( /*#__PURE__*/React__default["default"].createElement(MessageBox, {
                type: "error"
              }, _context.t0.message));
              console.error('Failed to submit', _context.t0);

            case 13:
              if (info) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return", false);

            case 15:
              addTransactionInfo(info);
              setDisplayTxHash(info.response.hash);

              if (!isAnimating(document)) {
                _context.next = 21;
                break;
              }

              return _context.abrupt("return", new Promise(function (resolve) {
                var onAnimationEnd = function onAnimationEnd() {
                  document.removeEventListener('animationend', onAnimationEnd);
                  setInputAmount('');
                };

                document.addEventListener('animationend', onAnimationEnd);
              }));

            case 21:
              setInputAmount('');

            case 22:
              return _context.abrupt("return", true);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [addTransactionInfo, hideModal, setDisplayTxHash, setInputAmount, showModal]);
}

var Wrapper = material.styled('div')({
  position: 'relative',
  flexDirection: 'row',
  display: 'flex'
});
function DoubleCurrencyLogo(_ref) {
  var currency0 = _ref.currency0,
      currency1 = _ref.currency1,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      margin = _ref.margin;
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, {
    sx: {
      marginRight: margin,
      width: size * 14 / 8,
      height: size
    }
  }, currency0 && /*#__PURE__*/React__default["default"].createElement(CurrencyLogo, {
    currency: currency0,
    size: size.toString() + 'px'
  }), currency1 && /*#__PURE__*/React__default["default"].createElement(CurrencyLogo, {
    currency: currency1,
    size: size.toString() + 'px',
    style: {
      position: 'absolute',
      right: 0,
      zIndex: 2
    }
  }));
}

function MintSummary(_ref) {
  var _liquidityMinted$toSi;

  var shareOfPool = _ref.shareOfPool,
      liquidityMinted = _ref.liquidityMinted,
      valA = _ref.valA,
      valB = _ref.valB,
      tokenA = _ref.tokenA,
      tokenB = _ref.tokenB,
      priceA = _ref.priceA,
      priceB = _ref.priceB;
  var theme = material.useTheme();

  var _getTokenText = getTokenText(tokenA, tokenB),
      Token1Text = _getTokenText.Token1Text,
      Token2Text = _getTokenText.Token2Text;

  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    padding: "33px 32px"
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    fontSize: 28,
    mb: {
      xs: 20,
      md: 39
    },
    fontWeight: 500
  }, "You will receive"), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    gap: 10
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    fontSize: {
      xs: 26,
      md: 32
    },
    fontWeight: 900,
    sx: {
      whiteSpace: 'wrap',
      wordBreak: 'break-all'
    }
  }, (_liquidityMinted$toSi = liquidityMinted === null || liquidityMinted === void 0 ? void 0 : liquidityMinted.toSignificant(6)) !== null && _liquidityMinted$toSi !== void 0 ? _liquidityMinted$toSi : '-'), /*#__PURE__*/React__default["default"].createElement(DoubleCurrencyLogo, {
    currency0: tokenA,
    currency1: tokenB,
    size: 28
  })), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    fontSize: 16,
    mt: 4,
    mb: 12
  }, /*#__PURE__*/React__default["default"].createElement(Token1Text, {
    fontSize: 16
  }), " /", /*#__PURE__*/React__default["default"].createElement(Token2Text, {
    fontSize: 16
  })), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    sx: {
      fontSize: 16,
      color: theme.palette.text.secondary,
      mb: 24
    }
  }, "Output is estimated.If the price changes by more than 5% your transaction will revert."), /*#__PURE__*/React__default["default"].createElement(AddLiquidityDetails, {
    token1: tokenA,
    token2: tokenB,
    token1Val: valA,
    token2Val: valB,
    rateToken1Token2: priceA,
    rateToken2Token1: priceB,
    shareOfPool: shareOfPool
  }));
}

function AddLiquidityDetails(_ref2) {
  var token1 = _ref2.token1,
      token2 = _ref2.token2,
      token1Val = _ref2.token1Val,
      token2Val = _ref2.token2Val,
      rateToken1Token2 = _ref2.rateToken1Token2,
      rateToken2Token1 = _ref2.rateToken2Token1,
      shareOfPool = _ref2.shareOfPool;
  var theme = material.useTheme();

  var _getTokenText2 = getTokenText(token1, token2),
      Token2Text = _getTokenText2.Token2Text,
      Token1Text = _getTokenText2.Token1Text;

  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      padding: 20,
      background: theme.palette.background.default,
      borderRadius: '8px',
      display: 'grid',
      gap: {
        xs: 20,
        md: 12
      },
      mb: 40
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: {
      xs: 'grid',
      md: 'flex'
    },
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    alignItems: "center",
    gap: 9
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, null, /*#__PURE__*/React__default["default"].createElement(Token1Text, null), " ", /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      color: theme.palette.text.primary
    }
  }, " Deposited"))), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    display: 'flex',
    alignItems: "center",
    gap: 8
  }, /*#__PURE__*/React__default["default"].createElement(CurrencyLogo, {
    currency: token1,
    size: '18px'
  }), token1Val)), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: {
      xs: 'grid',
      md: 'flex'
    },
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    alignItems: "center",
    gap: 9
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, null, /*#__PURE__*/React__default["default"].createElement(Token2Text, null), " ", /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      color: theme.palette.text.primary
    }
  }, "Deposited"))), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    display: 'flex',
    alignItems: "center",
    gap: 8
  }, /*#__PURE__*/React__default["default"].createElement(CurrencyLogo, {
    currency: token2,
    size: '18px'
  }), token2Val)), !rateToken1Token2 && !rateToken2Token1 || rateToken1Token2 === '0' && rateToken2Token1 === '0' ? null : /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: {
      xs: 'grid',
      md: 'flex'
    },
    justifyContent: "space-between",
    alignItems: "center",
    margin: {
      xs: 0,
      md: '20px 0'
    },
    gap: 8
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    alignItems: "center",
    gap: 9
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    sx: {
      color: theme.palette.text.secondary
    }
  }, "Rates")), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "grid",
    gap: 8
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, null, "1 ", /*#__PURE__*/React__default["default"].createElement(Token1Text, null), " = ", rateToken1Token2, " ", /*#__PURE__*/React__default["default"].createElement(Token2Text, null)), /*#__PURE__*/React__default["default"].createElement(material.Typography, null, "1 ", /*#__PURE__*/React__default["default"].createElement(Token2Text, null), " = ", rateToken2Token1, " ", /*#__PURE__*/React__default["default"].createElement(Token1Text, null)))), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    alignItems: "center",
    gap: 9
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    sx: {
      color: theme.palette.text.secondary
    }
  }, "Share of Pool")), /*#__PURE__*/React__default["default"].createElement(material.Typography, null, shareOfPool, "%")));
}

/**
 * A swapping ActionButton.
 * Should only be rendered if a valid swap exists.
 */

function MintButton() {
  var _parsedAmounts$depend, _parsedAmounts$depend2, _formattedAmounts, _pair$token0Price$toF, _pair$token0Price, _pair$token1Price$toF, _pair$token1Price, _address, _generateErc, _currencies$Field$CUR, _currencies$Field$CUR2, _currencies$Field$CUR3, _currencies$Field$CUR4, _currencies$Field$CUR5, _currencies$Field$CUR6, _currencies$Field$CUR7, _currencies$Field$CUR8, _formattedAmounts$Fie, _formattedAmounts$Fie2;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account,
      chainId = _useWeb3React.chainId;

  var _useMintContext = useMintContext(),
      currencyA = _useMintContext.currencyA,
      currencyB = _useMintContext.currencyB,
      currencies = _useMintContext.currencies,
      shareOfPool = _useMintContext.shareOfPool,
      error = _useMintContext.error,
      pair = _useMintContext.pair,
      noLiquidity = _useMintContext.noLiquidity,
      parsedAmounts = _useMintContext.parsedAmounts,
      dependentField = _useMintContext.dependentField,
      typedValue = _useMintContext.typedValue,
      otherTypedValue = _useMintContext.otherTypedValue,
      independentField = _useMintContext.independentField,
      liquidityMinted = _useMintContext.liquidityMinted;

  var submitCb = useOnSubmit$1();

  var _useMintCallback = useMintCallback(),
      mintCallback = _useMintCallback.addLiquidityCb;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1]; // check whether the user has approved the router on the tokens


  var _useAllTokenApproveCa = useAllTokenApproveCallback(currencyA, parsedAmounts[MintField.CURRENCY_A], checkIs721(currencyB)),
      _useAllTokenApproveCa2 = _slicedToArray__default["default"](_useAllTokenApproveCa, 2),
      approvalA = _useAllTokenApproveCa2[0],
      approveACallback = _useAllTokenApproveCa2[1];

  var _useAllTokenApproveCa3 = useAllTokenApproveCallback(currencyB, parsedAmounts[MintField.CURRENCY_B], checkIs721(currencyA)),
      _useAllTokenApproveCa4 = _slicedToArray__default["default"](_useAllTokenApproveCa3, 2),
      approvalB = _useAllTokenApproveCa4[0],
      approveBCallback = _useAllTokenApproveCa4[1]; // get formatted amounts


  var formattedAmounts = (_formattedAmounts = {}, _defineProperty__default["default"](_formattedAmounts, independentField !== null && independentField !== void 0 ? independentField : MintField.CURRENCY_A, typedValue), _defineProperty__default["default"](_formattedAmounts, dependentField, noLiquidity ? otherTypedValue : (_parsedAmounts$depend = (_parsedAmounts$depend2 = parsedAmounts[dependentField]) === null || _parsedAmounts$depend2 === void 0 ? void 0 : _parsedAmounts$depend2.toSignificant(6)) !== null && _parsedAmounts$depend !== void 0 ? _parsedAmounts$depend : ''), _formattedAmounts);
  var priceA = pair !== null && pair !== void 0 && pair.token0Price.equalTo('0') ? '0' : (_pair$token0Price$toF = pair === null || pair === void 0 ? void 0 : (_pair$token0Price = pair.token0Price) === null || _pair$token0Price === void 0 ? void 0 : _pair$token0Price.toFixed(6, undefined, 2).trimTrailingZero()) !== null && _pair$token0Price$toF !== void 0 ? _pair$token0Price$toF : '-';
  var priceB = pair !== null && pair !== void 0 && pair.token1Price.equalTo('0') ? '0' : (_pair$token1Price$toF = pair === null || pair === void 0 ? void 0 : (_pair$token1Price = pair.token1Price) === null || _pair$token1Price === void 0 ? void 0 : _pair$token1Price.toFixed(6, undefined, 2).trimTrailingZero()) !== null && _pair$token1Price$toF !== void 0 ? _pair$token1Price$toF : '-';
  var flipOrder = (pair === null || pair === void 0 ? void 0 : pair.token0.address) === ((_address = (_generateErc = generateErc20(wrappedCurrency(currencyA, chainId))) === null || _generateErc === void 0 ? void 0 : _generateErc.address) !== null && _address !== void 0 ? _address : '');
  var handleAdd = React.useCallback(function () {
    setOpen(true);
  }, []);
  var onMint = React.useCallback(function () {
    if (!mintCallback) {
      return;
    }

    submitCb(mintCallback);
    setOpen(false);
  }, [mintCallback, submitCb]); // Close the review modal on chain change.

  React.useEffect(function () {
    return setOpen(false);
  }, [chainId]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, !account ? /*#__PURE__*/React__default["default"].createElement(ConnectWallet, null) : /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "grid",
    gap: '6px'
  }, (approvalA === ApprovalState.NOT_APPROVED || approvalA === ApprovalState.PENDING || approvalB === ApprovalState.NOT_APPROVED || approvalB === ApprovalState.PENDING) && !error && /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    gap: 16
  }, approvalA !== ApprovalState.APPROVED && /*#__PURE__*/React__default["default"].createElement(ActionButton, {
    onAction: approveACallback,
    disableAction: approvalA === ApprovalState.PENDING,
    pending: approvalA === ApprovalState.PENDING,
    pendingText: "Approving" // pendingText={`Approving ${
    //   currencies[Field.CURRENCY_A]?.symbol ?? currencies[Field.CURRENCY_A]?.name
    // }`}
    ,
    actionText: 'Approve ' + ((_currencies$Field$CUR = (_currencies$Field$CUR2 = currencies[MintField.CURRENCY_A]) === null || _currencies$Field$CUR2 === void 0 ? void 0 : _currencies$Field$CUR2.symbol) !== null && _currencies$Field$CUR !== void 0 ? _currencies$Field$CUR : ((_currencies$Field$CUR3 = currencies[MintField.CURRENCY_A]) === null || _currencies$Field$CUR3 === void 0 ? void 0 : (_currencies$Field$CUR4 = _currencies$Field$CUR3.name) === null || _currencies$Field$CUR4 === void 0 ? void 0 : _currencies$Field$CUR4.slice(0, 8)) + '...')
  }), approvalB !== ApprovalState.APPROVED && /*#__PURE__*/React__default["default"].createElement(ActionButton, {
    onAction: approveBCallback,
    disableAction: approvalB === ApprovalState.PENDING,
    pending: approvalB === ApprovalState.PENDING,
    pendingText: "Approving" // pendingText={`Approving ${
    //   currencies[Field.CURRENCY_B]?.symbol ?? currencies[Field.CURRENCY_B]?.name
    // }`}
    ,
    actionText: 'Approve ' + ((_currencies$Field$CUR5 = (_currencies$Field$CUR6 = currencies[MintField.CURRENCY_B]) === null || _currencies$Field$CUR6 === void 0 ? void 0 : _currencies$Field$CUR6.symbol) !== null && _currencies$Field$CUR5 !== void 0 ? _currencies$Field$CUR5 : ((_currencies$Field$CUR7 = currencies[MintField.CURRENCY_B]) === null || _currencies$Field$CUR7 === void 0 ? void 0 : (_currencies$Field$CUR8 = _currencies$Field$CUR7.name) === null || _currencies$Field$CUR8 === void 0 ? void 0 : _currencies$Field$CUR8.slice(0, 8)) + '...')
  })), /*#__PURE__*/React__default["default"].createElement(material.Button, {
    onClick: handleAdd,
    disabled: !!error || approvalA !== ApprovalState.APPROVED || approvalB !== ApprovalState.APPROVED
  }, error !== null && error !== void 0 ? error : 'Supply')), open && /*#__PURE__*/React__default["default"].createElement(Dialog, {
    onClose: function onClose() {
      return setOpen(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement(Header, {
    title: "Swap Summary"
  }), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    maxHeight: '100%',
    sx: {
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React__default["default"].createElement(MintSummary, {
    liquidityMinted: liquidityMinted,
    tokenA: currencyA,
    tokenB: currencyB,
    priceA: flipOrder ? priceA : priceB,
    priceB: flipOrder ? priceB : priceA,
    valA: (_formattedAmounts$Fie = formattedAmounts[MintField.CURRENCY_A]) !== null && _formattedAmounts$Fie !== void 0 ? _formattedAmounts$Fie : '-',
    valB: (_formattedAmounts$Fie2 = formattedAmounts[MintField.CURRENCY_B]) !== null && _formattedAmounts$Fie2 !== void 0 ? _formattedAmounts$Fie2 : '-',
    shareOfPool: shareOfPool !== null && shareOfPool !== void 0 ? shareOfPool : '-'
  })), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    padding: "0 10px",
    margin: '15px 0'
  }, /*#__PURE__*/React__default["default"].createElement(material.Button, {
    onClick: onMint
  }, "Confirm Supply"))));
}

function MintActionButton() {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId,
      isActivating = _useWeb3React.isActivating,
      isActive = _useWeb3React.isActive;

  var isSupported = useOnSupportedNetwork();

  var _useMintContext = useMintContext(),
      _useMintContext$curre = _useMintContext.currencies,
      currencyA = _useMintContext$curre[MintField.CURRENCY_A],
      currencyB = _useMintContext$curre[MintField.CURRENCY_B];

  var _useTheme2 = _styled.useTheme(),
      tokenColorExtraction = _useTheme2.tokenColorExtraction;

  var color = tokenColorExtraction ? 'interactive' : 'accent';
  var chainError = React.useMemo(function () {
    var chainIdIn = currencyA === null || currencyA === void 0 ? void 0 : currencyA.chainId;
    var chainIdOut = currencyB === null || currencyB === void 0 ? void 0 : currencyB.chainId;
    var tokenChainId = chainIdIn || chainIdOut;
    if (!isActive) return isActivating ? ChainError.ACTIVATING_CHAIN : ChainError.UNCONNECTED_CHAIN;
    if (!isSupported) return ChainError.UNSUPPORTED_CHAIN;
    if (chainIdIn && chainIdOut && chainIdIn !== chainIdOut) return ChainError.MISMATCHED_TOKEN_CHAINS;
    if (chainId && tokenChainId && chainId !== tokenChainId) return ChainError.MISMATCHED_CHAINS;
    return undefined;
  }, [chainId, currencyA === null || currencyA === void 0 ? void 0 : currencyA.chainId, currencyB === null || currencyB === void 0 ? void 0 : currencyB.chainId, isActivating, isActive, isSupported]);

  if (chainError === ChainError.MISMATCHED_CHAINS) {
    var _ref, _currencyA$chainId;

    var tokenChainId = (_ref = (_currencyA$chainId = currencyA === null || currencyA === void 0 ? void 0 : currencyA.chainId) !== null && _currencyA$chainId !== void 0 ? _currencyA$chainId : currencyB === null || currencyB === void 0 ? void 0 : currencyB.chainId) !== null && _ref !== void 0 ? _ref : exports.SupportedChainId.MAINNET;
    return /*#__PURE__*/React__default["default"].createElement(ChainSwitchButton, {
      color: color,
      chainId: tokenChainId
    });
  } else {
    return /*#__PURE__*/React__default["default"].createElement(MintButton, null);
  }
}

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// since the wallet connection component exists within the Swap component.
// TODO(zzmp): refactor WalletConnection into Widget component

function Mint(props) {
  var _parsedAmounts$depend, _parsedAmounts$depend2, _formattedAmounts, _formattedAmounts$Fie, _formattedAmounts$Fie2;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account;

  var _useMintContext = useMintContext(),
      dependentField = _useMintContext.dependentField,
      currencyA = _useMintContext.currencyA,
      currencyB = _useMintContext.currencyB,
      currencyBalances = _useMintContext.currencyBalances,
      parsedAmounts = _useMintContext.parsedAmounts,
      noLiquidity = _useMintContext.noLiquidity,
      setCurrencyA = _useMintContext.setCurrencyA,
      setCurrencyB = _useMintContext.setCurrencyB,
      independentField = _useMintContext.independentField,
      typedValue = _useMintContext.typedValue,
      otherTypedValue = _useMintContext.otherTypedValue;

  var _useMintActionHandler = useMintActionHandlers(noLiquidity),
      onFieldAInput = _useMintActionHandler.onFieldAInput,
      onFieldBInput = _useMintActionHandler.onFieldBInput,
      onSetTokenIds = _useMintActionHandler.onSetTokenIds; // get formatted amounts


  var formattedAmounts = (_formattedAmounts = {}, _defineProperty__default["default"](_formattedAmounts, independentField !== null && independentField !== void 0 ? independentField : MintField.CURRENCY_A, typedValue), _defineProperty__default["default"](_formattedAmounts, dependentField, noLiquidity ? otherTypedValue : (_parsedAmounts$depend = (_parsedAmounts$depend2 = parsedAmounts[dependentField]) === null || _parsedAmounts$depend2 === void 0 ? void 0 : _parsedAmounts$depend2.toSignificant(6)) !== null && _parsedAmounts$depend !== void 0 ? _parsedAmounts$depend : ''), _formattedAmounts); // get the max amounts user can add

  var maxAmounts = [MintField.CURRENCY_A, MintField.CURRENCY_B].reduce(function (accumulator, field) {
    return _objectSpread$5(_objectSpread$5({}, accumulator), {}, _defineProperty__default["default"]({}, field, maxAmountSpend(currencyBalances[field])));
  }, {});
  var handleMaxInputA = React.useCallback(function () {
    var _maxAmounts$Field$CUR, _maxAmounts$Field$CUR2;

    onFieldAInput((_maxAmounts$Field$CUR = (_maxAmounts$Field$CUR2 = maxAmounts[MintField.CURRENCY_A]) === null || _maxAmounts$Field$CUR2 === void 0 ? void 0 : _maxAmounts$Field$CUR2.toFixed(6, undefined, 0)) !== null && _maxAmounts$Field$CUR !== void 0 ? _maxAmounts$Field$CUR : '');
  }, [maxAmounts, onFieldAInput]);
  var handleMaxInputB = React.useCallback(function () {
    var _maxAmounts$Field$CUR3, _maxAmounts$Field$CUR4;

    onFieldBInput((_maxAmounts$Field$CUR3 = (_maxAmounts$Field$CUR4 = maxAmounts[MintField.CURRENCY_B]) === null || _maxAmounts$Field$CUR4 === void 0 ? void 0 : _maxAmounts$Field$CUR4.toFixed(6, undefined, 0)) !== null && _maxAmounts$Field$CUR3 !== void 0 ? _maxAmounts$Field$CUR3 : '');
  }, [maxAmounts, onFieldBInput]);
  var handleTokenIds = React.useCallback(function (tokens) {
    var list = tokens.map(function (_ref) {
      var tokenId = _ref.tokenId;
      return tokenId;
    });
    onSetTokenIds(list);
  }, [onSetTokenIds]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(CurrencyInputPanel, {
    value: (_formattedAmounts$Fie = formattedAmounts[MintField.CURRENCY_A]) !== null && _formattedAmounts$Fie !== void 0 ? _formattedAmounts$Fie : '-',
    onChange: onFieldAInput,
    onSelectCurrency: setCurrencyA,
    currency: currencyA,
    onMax: handleMaxInputA,
    onSelectSubTokens: handleTokenIds,
    disabled: !account
  }), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      paddingBottom: 12,
      margin: '0 auto',
      width: 'max-content',
      '&:hover': {
        opacity: 0.8
      },
      display: 'flex',
      justifyContent: {
        xs: 'center',
        md: 'flex-start'
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement(SvgAddCircle, null)), /*#__PURE__*/React__default["default"].createElement(CurrencyInputPanel, {
    value: (_formattedAmounts$Fie2 = formattedAmounts[MintField.CURRENCY_B]) !== null && _formattedAmounts$Fie2 !== void 0 ? _formattedAmounts$Fie2 : '-',
    onChange: onFieldBInput,
    onSelectCurrency: setCurrencyB,
    currency: currencyB,
    onMax: handleMaxInputB,
    onSelectSubTokens: handleTokenIds,
    disabled: !account
  })), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    mt: 'auto'
  }, " ", account ? /*#__PURE__*/React__default["default"].createElement(MintActionButton, null) : /*#__PURE__*/React__default["default"].createElement(ConnectWallet, null)));
}

function EtherscanLink(_ref) {
  var data = _ref.data,
      type = _ref.type;
      _ref.color;
      var children = _ref.children;

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var url = React.useMemo(function () {
    return data && getExplorerLink(chainId || exports.SupportedChainId.MAINNET, data, type);
  }, [chainId, data, type]);
  return /*#__PURE__*/React__default["default"].createElement(ExternalLink, {
    href: url !== null && url !== void 0 ? url : '',
    target: "_blank",
    underline: "none"
  }, /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.25
  }, children, url && /*#__PURE__*/React__default["default"].createElement(Link, null)));
}

function ElapsedTime(_ref) {
  var tx = _ref.tx;

  var _useState = React.useState(0),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      elapsedMs = _useState2[0],
      setElapsedMs = _useState2[1];

  useInterval(function () {
    return setElapsedMs(Date.now() - tx.addedTime);
  }, tx.receipt ? null : 1000);
  var toElapsedTime = React.useCallback(function (ms) {
    var sec = Math.floor(ms / 1000);
    var min = Math.floor(sec / 60);
    sec = sec % 60;

    if (min) {
      return /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "{min}m {sec}s",
        values: {
          min: min,
          sec: sec
        }
      });
    } else {
      return /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "{sec}s",
        values: {
          sec: sec
        }
      });
    }
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.5
  }, /*#__PURE__*/React__default["default"].createElement(Clock, null), /*#__PURE__*/React__default["default"].createElement(Body2, null, toElapsedTime(elapsedMs)));
}

function TransactionStatus(_ref2) {
  var _tx$receipt2, _tx$receipt8, _tx$receipt9;

  var tx = _ref2.tx,
      onClose = _ref2.onClose;
  var Icon = React.useMemo(function () {
    var _tx$receipt;

    return (_tx$receipt = tx.receipt) !== null && _tx$receipt !== void 0 && _tx$receipt.status ? function () {
      return null;
    } : function () {
      return /*#__PURE__*/React__default["default"].createElement(Spinner, {
        size: '60px'
      });
    };
  }, [(_tx$receipt2 = tx.receipt) === null || _tx$receipt2 === void 0 ? void 0 : _tx$receipt2.status]);
  var heading = React.useMemo(function () {
    var _tx$receipt7;

    if (tx.info.type === exports.TransactionType.SWAP) {
      var _tx$receipt3;

      return (_tx$receipt3 = tx.receipt) !== null && _tx$receipt3 !== void 0 && _tx$receipt3.status ? /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Swap confirmed"
      }) : /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Swap pending"
      });
    } else if (tx.info.type === exports.TransactionType.MINT) {
      var _tx$receipt4;

      return (_tx$receipt4 = tx.receipt) !== null && _tx$receipt4 !== void 0 && _tx$receipt4.status ? /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Add Liquidity confirmed"
      }) : /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Add Liquidity pending"
      });
    } else if (tx.info.type === exports.TransactionType.WRAP) {
      var _tx$receipt5;

      return (_tx$receipt5 = tx.receipt) !== null && _tx$receipt5 !== void 0 && _tx$receipt5.status ? /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Unwrap confirmed"
      }) : /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Unwrap pending"
      });
    } else if (tx.info.type === exports.TransactionType.UNWRAP) {
      var _tx$receipt6;

      return (_tx$receipt6 = tx.receipt) !== null && _tx$receipt6 !== void 0 && _tx$receipt6.status ? /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Unwrap confirmed"
      }) : /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Unwrap pending"
      });
    }

    return (_tx$receipt7 = tx.receipt) !== null && _tx$receipt7 !== void 0 && _tx$receipt7.status ? /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Transaction confirmed"
    }) : /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Transaction pending"
    });
  }, [tx.info, (_tx$receipt8 = tx.receipt) === null || _tx$receipt8 === void 0 ? void 0 : _tx$receipt8.status]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(MessageBox, {
    type: (_tx$receipt9 = tx.receipt) !== null && _tx$receipt9 !== void 0 && _tx$receipt9.status ? 'success' : 'none',
    header: heading,
    actionText: "Close",
    action: onClose
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "grid",
    justifyItems: 'center',
    gap: 10,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Icon, null), /*#__PURE__*/React__default["default"].createElement(material.Typography, null, tx.info.summary), /*#__PURE__*/React__default["default"].createElement(EtherscanLink, {
    type: ExplorerDataType.TRANSACTION,
    data: tx.info.response.hash
  }, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "View on Etherscan"
  })), /*#__PURE__*/React__default["default"].createElement(ElapsedTime, {
    tx: tx
  }))));
}

function StatusDialog(_ref3) {
  var _tx$receipt10;

  var tx = _ref3.tx,
      onClose = _ref3.onClose;
  return ((_tx$receipt10 = tx.receipt) === null || _tx$receipt10 === void 0 ? void 0 : _tx$receipt10.status) === 0 ? /*#__PURE__*/React__default["default"].createElement(MessageBox, {
    type: 'error',
    header: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Try increasing your slippage tolerance.<0/>NOTE: Fee on transfer and rebase tokens are incompatible with Uniswap V3.",
      components: {
        0: /*#__PURE__*/React__default["default"].createElement("br", null)
      }
    }) // error={new Error('TODO(zzmp)')}
    ,
    actionText: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Dismiss"
    }),
    action: onClose
  }) : /*#__PURE__*/React__default["default"].createElement(TransactionStatus, {
    tx: tx,
    onClose: onClose
  });
}

function useInitialController(_ref) {
  var value = _ref.value;
  return [controlledAtom, value];
}
function useSyncController(_ref2) {
  var value = _ref2.value,
      settings = _ref2.settings;
  // Log an error if the component changes from uncontrolled to controlled (or vice versa).
  var isSwapControlled = React.useRef(Boolean(value));
  var isSettingsControlled = React.useRef(Boolean(settings));
  React.useEffect(function () {
    if (Boolean(value) !== isSwapControlled.current) {
      warnOnControlChange({
        state: 'swap',
        prop: 'value'
      });
    }

    if (Boolean(settings) !== isSettingsControlled.current) {
      warnOnControlChange({
        state: 'settings',
        prop: 'settings'
      });
    }
  }, [settings, value]);
  var setSwap = utils.useUpdateAtom(controlledAtom);
  React.useEffect(function () {
    return setSwap(value);
  }, [value, setSwap]);
  var setSettings = utils.useUpdateAtom(controlledAtom$1);
  React.useEffect(function () {
    return setSettings(settings);
  }, [settings, setSettings]);
}

function warnOnControlChange(_ref3) {
  var state = _ref3.state,
      prop = _ref3.prop;
  console.error("Warning: The SwapWidget component's ".concat(state, " state (controlled by the '").concat(prop, "' prop) is changing from uncontrolled to controlled (or vice versa). This should not happen. Decide between using a controlled or uncontrolled state for the lifetime of the component."));
}

function useSyncConvenienceFee(_ref) {
  var convenienceFee = _ref.convenienceFee,
      convenienceFeeRecipient = _ref.convenienceFeeRecipient;

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var updateFeeOptions = utils.useUpdateAtom(feeOptionsAtom);
  React.useEffect(function () {
    if (convenienceFee && convenienceFeeRecipient) {
      if (typeof convenienceFeeRecipient === 'string') {
        updateFeeOptions({
          fee: new sdkCore.Percent(convenienceFee, 10000),
          recipient: convenienceFeeRecipient
        });
        return;
      }

      if (chainId && convenienceFeeRecipient[chainId]) {
        updateFeeOptions({
          fee: new sdkCore.Percent(convenienceFee, 10000),
          recipient: convenienceFeeRecipient[chainId]
        });
        return;
      }
    }

    updateFeeOptions(undefined);
  }, [chainId, convenienceFee, convenienceFeeRecipient, updateFeeOptions]);
}

function useSyncSwapEventHandlers(handlers) {
  var setSwapEventHandlersAtom = utils.useUpdateAtom(swapEventHandlersAtom);
  React.useEffect(function () {
    return setSwapEventHandlersAtom(handlers);
  }, [handlers, setSwapEventHandlersAtom]);
}

var _path$1, _defs;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var SvgSwitchCircle = function SvgSwitchCircle(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$1({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19.2 14.4C18.7467 14.4 18.3669 14.5531 18.0608 14.8592C17.7536 15.1664 17.6 15.5467 17.6 16V21.04L16.16 19.64C15.84 19.3467 15.4667 19.2 15.04 19.2C14.6133 19.2 14.24 19.36 13.92 19.68C13.6267 19.9733 13.48 20.3467 13.48 20.8C13.48 21.2533 13.6267 21.6267 13.92 21.92L18.08 26.08C18.3733 26.3733 18.7467 26.52 19.2 26.52C19.6533 26.52 20.0267 26.3733 20.32 26.08L24.52 21.88C24.8133 21.5867 24.96 21.2267 24.96 20.8C24.96 20.3733 24.8 20 24.48 19.68C24.1867 19.3867 23.8133 19.2331 23.36 19.2192C22.9067 19.2064 22.5333 19.36 22.24 19.68L20.8 21.04V15.96C20.8 15.5067 20.6469 15.1333 20.3408 14.84C20.0336 14.5467 19.6533 14.4 19.2 14.4ZM12.8 17.6C13.2533 17.6 13.6336 17.4464 13.9408 17.1392C14.2469 16.8331 14.4 16.4533 14.4 16V10.96L15.84 12.36C16.16 12.6533 16.5333 12.8 16.96 12.8C17.3867 12.8 17.76 12.64 18.08 12.32C18.3733 12.0267 18.52 11.6533 18.52 11.2C18.52 10.7467 18.3733 10.3733 18.08 10.08L13.92 5.92C13.6267 5.62667 13.2533 5.48 12.8 5.48C12.3467 5.48 11.9733 5.62667 11.68 5.92L7.48 10.12C7.18667 10.4133 7.04 10.7733 7.04 11.2C7.04 11.6267 7.2 12 7.52 12.32C7.81333 12.6133 8.18667 12.7669 8.64 12.7808C9.09333 12.7936 9.46667 12.64 9.76 12.32L11.2 10.96V16.04C11.2 16.4933 11.3536 16.8667 11.6608 17.16C11.9669 17.4533 12.3467 17.6 12.8 17.6ZM16 32C13.7867 32 11.7067 31.5797 9.76 30.7392C7.81333 29.8997 6.12 28.76 4.68 27.32C3.24 25.88 2.10027 24.1867 1.2608 22.24C0.420267 20.2933 0 18.2133 0 16C0 13.7867 0.420267 11.7067 1.2608 9.76C2.10027 7.81333 3.24 6.12 4.68 4.68C6.12 3.24 7.81333 2.09973 9.76 1.2592C11.7067 0.419733 13.7867 0 16 0C18.2133 0 20.2933 0.419733 22.24 1.2592C24.1867 2.09973 25.88 3.24 27.32 4.68C28.76 6.12 29.8997 7.81333 30.7392 9.76C31.5797 11.7067 32 13.7867 32 16C32 18.2133 31.5797 20.2933 30.7392 22.24C29.8997 24.1867 28.76 25.88 27.32 27.32C25.88 28.76 24.1867 29.8997 22.24 30.7392C20.2933 31.5797 18.2133 32 16 32Z",
    fill: "url(#paint0_linear_7080_8769)"
  })), _defs || (_defs = /*#__PURE__*/React__default["default"].createElement("defs", null, /*#__PURE__*/React__default["default"].createElement("linearGradient", {
    id: "paint0_linear_7080_8769",
    x1: 10.1333,
    y1: 36.2667,
    x2: 22.4,
    y2: 1.6,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__default["default"].createElement("stop", {
    stopColor: "#CAF400"
  }), /*#__PURE__*/React__default["default"].createElement("stop", {
    offset: 1,
    stopColor: "#00E4DD"
  })))));
};

function ReverseButton() {
  var _useSwapInfo = useSwapInfo(),
      error = _useSwapInfo.error;

  var isDisabled = error !== undefined;
  var switchCurrencies = useSwitchSwapCurrencies();
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      paddingBottom: 12,
      margin: '0 auto',
      width: 'max-content',
      '&:hover': {
        opacity: 0.8
      },
      display: 'flex',
      justifyContent: {
        xs: 'center',
        md: 'flex-start'
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement(SvgSwitchCircle, {
    onClick: switchCurrencies,
    style: {
      cursor: isDisabled ? 'none' : 'pointer'
    }
  }));
}

/**
 * Does a lookup for an ENS name to find its address.
 */

function useENSAddress(ensName) {
  var _resolverAddress$resu;

  var debouncedName = useDebounce(ensName, 200);
  var ensNodeArgument = React.useMemo(function () {
    return [debouncedName === null ? undefined : safeNamehash(debouncedName)];
  }, [debouncedName]);
  var registrarContract = useENSRegistrarContract(false);
  var resolverAddress = useSingleCallResult(registrarContract, 'resolver', ensNodeArgument);
  var resolverAddressResult = (_resolverAddress$resu = resolverAddress.result) === null || _resolverAddress$resu === void 0 ? void 0 : _resolverAddress$resu[0];
  var resolverContract = useENSResolverContract(resolverAddressResult && !isZero(resolverAddressResult) ? resolverAddressResult : undefined, false);
  var addr = useSingleCallResult(resolverContract, 'addr', ensNodeArgument);
  var changed = debouncedName !== ensName;
  return React.useMemo(function () {
    var _addr$result$, _addr$result;

    return {
      address: changed ? null : (_addr$result$ = (_addr$result = addr.result) === null || _addr$result === void 0 ? void 0 : _addr$result[0]) !== null && _addr$result$ !== void 0 ? _addr$result$ : null,
      loading: changed || resolverAddress.loading || addr.loading
    };
  }, [addr.loading, addr.result, changed, resolverAddress.loading]);
}

/**
 * Does a reverse lookup for an address to find its ENS name.
 * Note this is not the same as looking up an ENS name to find an address.
 */

function useENSName(address) {
  var _resolverAddress$resu, _nameCallRes$result;

  var debouncedAddress = useDebounce(address, 200);
  var ensNodeArgument = React.useMemo(function () {
    if (!debouncedAddress || !isAddress(debouncedAddress)) return [undefined];
    return [hash.namehash("".concat(debouncedAddress.toLowerCase().substr(2), ".addr.reverse"))];
  }, [debouncedAddress]);
  var registrarContract = useENSRegistrarContract(false);
  var resolverAddress = useSingleCallResult(registrarContract, 'resolver', ensNodeArgument);
  var resolverAddressResult = (_resolverAddress$resu = resolverAddress.result) === null || _resolverAddress$resu === void 0 ? void 0 : _resolverAddress$resu[0];
  var resolverContract = useENSResolverContract(resolverAddressResult && !isZero(resolverAddressResult) ? resolverAddressResult : undefined, false);
  var nameCallRes = useSingleCallResult(resolverContract, 'name', ensNodeArgument);
  var name = (_nameCallRes$result = nameCallRes.result) === null || _nameCallRes$result === void 0 ? void 0 : _nameCallRes$result[0];
  /* ENS does not enforce that an address owns a .eth domain before setting it as a reverse proxy 
     and recommends that you perform a match on the forward resolution
     see: https://docs.ens.domains/dapp-developer-guide/resolving-names#reverse-resolution
  */

  var fwdAddr = useENSAddress(name);
  var checkedName = address === (fwdAddr === null || fwdAddr === void 0 ? void 0 : fwdAddr.address) ? name : null;
  var changed = debouncedAddress !== address;
  return React.useMemo(function () {
    return {
      ENSName: changed ? null : checkedName,
      loading: changed || resolverAddress.loading || nameCallRes.loading
    };
  }, [changed, nameCallRes.loading, checkedName, resolverAddress.loading]);
}

/**
 * Given a name or address, does a lookup to resolve to an address and name
 * @param nameOrAddress ENS name or address
 */

function useENS(nameOrAddress) {
  var validated = isAddress(nameOrAddress);
  var reverseLookup = useENSName(validated ? validated : undefined);
  var lookup = useENSAddress(nameOrAddress);
  return React.useMemo(function () {
    return {
      loading: reverseLookup.loading || lookup.loading,
      address: validated ? validated : lookup.address,
      name: reverseLookup.ENSName ? reverseLookup.ENSName : !validated && lookup.address ? nameOrAddress || null : null
    };
  }, [lookup.address, lookup.loading, nameOrAddress, reverseLookup.ENSName, reverseLookup.loading, validated]);
}

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var SwapCallbackState;

(function (SwapCallbackState) {
  SwapCallbackState[SwapCallbackState["INVALID"] = 0] = "INVALID";
  SwapCallbackState[SwapCallbackState["LOADING"] = 1] = "LOADING";
  SwapCallbackState[SwapCallbackState["VALID"] = 2] = "VALID";
})(SwapCallbackState || (SwapCallbackState = {}));

/**
 * Returns the swap calls that can be used to make the trade
 * @param trade trade to execute
 * @param allowedSlippage user allowed slippage
 * @param recipientAddressOrName
 */
function useSwapCallArguments(trade) {
  var allowedSlippage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_SLIPPAGE.allowed;
  var recipientAddressOrName = arguments.length > 2 ? arguments[2] : undefined;
  var tokenIds = arguments.length > 3 ? arguments[3] : undefined;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account,
      chainId = _useWeb3React.chainId,
      library = _useWeb3React.provider;

  var _useENS = useENS(recipientAddressOrName),
      recipientAddress = _useENS.address;

  var recipient = recipientAddressOrName === null ? account : recipientAddress;
  var deadline = useTransactionDeadline();
  return React.useMemo(function () {
    if (!trade || !recipient || !library || !account || !chainId || !deadline) return [];
    var contract1155 = getRouterContract(chainId, library, account);
    var contract721 = getRouterContract721(chainId, library, account);
    var contract = tokenIds ? contract721 : contract1155;

    if (!contract) {
      return [];
    }

    var swapMethods = [];
    swapMethods.push(sdk.Router.swapCallParameters(trade, {
      feeOnTransfer: false,
      allowedSlippage: allowedSlippage,
      recipient: recipient,
      deadline: deadline.toNumber(),
      tokenIds: tokenIds
    }));

    if (trade.tradeType === sdk.TradeType.EXACT_INPUT) {
      swapMethods.push(sdk.Router.swapCallParameters(trade, {
        feeOnTransfer: tokenIds ? false : true,
        allowedSlippage: allowedSlippage,
        recipient: recipient,
        deadline: deadline.toNumber(),
        tokenIds: tokenIds
      }));
    }

    return swapMethods.map(function (parameters) {
      return {
        parameters: parameters,
        contract: contract
      };
    });
  }, [account, allowedSlippage, chainId, deadline, library, recipient, tokenIds, trade]);
} // returns a function that will execute a swap, if the parameters are all valid
// and the user has approved the slippage adjusted input amount for the trade


function useSwapCallback(_ref) {
  var trade = _ref.trade,
      _ref$allowedSlippage = _ref.allowedSlippage,
      allowedSlippage = _ref$allowedSlippage === void 0 ? DEFAULT_SLIPPAGE.allowed : _ref$allowedSlippage,
      recipientAddressOrName = _ref.recipientAddressOrName,
      tokenIds = _ref.tokenIds;

  var _useWeb3React2 = core.useWeb3React(),
      account = _useWeb3React2.account,
      chainId = _useWeb3React2.chainId,
      library = _useWeb3React2.provider;

  var setOldestValidBlock = useSetOldestValidBlock();
  var swapCalls = useSwapCallArguments(trade, allowedSlippage, recipientAddressOrName, tokenIds);

  var _useENS2 = useENS(recipientAddressOrName),
      recipientAddress = _useENS2.address;

  var recipient = recipientAddressOrName === null ? account : recipientAddress;
  return React.useMemo(function () {
    if (!trade || !library || !account || !chainId) {
      return {
        state: SwapCallbackState.INVALID,
        callback: null,
        error: 'Missing dependencies'
      };
    }

    if (!recipient) {
      if (recipientAddressOrName !== null) {
        return {
          state: SwapCallbackState.INVALID,
          callback: null,
          error: 'Invalid recipient'
        };
      } else {
        return {
          state: SwapCallbackState.LOADING,
          callback: null,
          error: null
        };
      }
    }

    return {
      state: SwapCallbackState.VALID,
      callback: function () {
        var _onSwap = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
          var estimatedCalls, successfulEstimation, errorCalls, _successfulEstimation, contract, _successfulEstimation2, methodName, args, value, gasEstimate;

          return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all(swapCalls.map(function (call) {
                    var _contract$estimateGas;

                    var _call$parameters = call.parameters,
                        methodName = _call$parameters.methodName,
                        args = _call$parameters.args,
                        value = _call$parameters.value,
                        contract = call.contract;
                    var options = !value || isZero(value) ? {} : {
                      value: value
                    };
                    return (_contract$estimateGas = contract.estimateGas)[methodName].apply(_contract$estimateGas, _toConsumableArray__default["default"](args).concat([options])).then(function (gasEstimate) {
                      return {
                        call: call,
                        gasEstimate: gasEstimate
                      };
                    }).catch(function (gasError) {
                      var _contract$callStatic;

                      console.debug('Gas estimate failed, trying eth_call to extract error', call);
                      return (_contract$callStatic = contract.callStatic)[methodName].apply(_contract$callStatic, _toConsumableArray__default["default"](args).concat([options])).then(function (result) {
                        console.debug('Unexpected successful call after failed estimate gas', call, gasError, result);
                        return {
                          call: call,
                          error: new Error('Unexpected issue with estimating the gas. Please try again.')
                        };
                      }).catch(function (callError) {
                        console.debug('Call threw error', call, callError);
                        var errorMessage;

                        switch (callError.reason) {
                          case 'Router: INSUFFICIENT_OUTPUT_AMOUNT':
                          case '2Router: EXCESSIVE_INPUT_AMOUNT':
                            errorMessage = 'This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.';
                            break;

                          default:
                            errorMessage = "The transaction cannot succeed due to error: ".concat(callError.reason, ". This is probably an issue with one of the tokens you are swapping.");
                        }

                        return {
                          call: call,
                          error: new Error(errorMessage)
                        };
                      });
                    });
                  }));

                case 2:
                  estimatedCalls = _context.sent;
                  // a successful estimation is a bignumber gas estimate and the next call is also a bignumber gas estimate
                  successfulEstimation = estimatedCalls.find(function (el, ix, list) {
                    return 'gasEstimate' in el && (ix === list.length - 1 || 'gasEstimate' in list[ix + 1]);
                  });

                  if (successfulEstimation) {
                    _context.next = 9;
                    break;
                  }

                  errorCalls = estimatedCalls.filter(function (call) {
                    return 'error' in call;
                  });

                  if (!(errorCalls.length > 0)) {
                    _context.next = 8;
                    break;
                  }

                  throw errorCalls[errorCalls.length - 1].error;

                case 8:
                  throw new Error('Unexpected error. Please contact support: none of the calls threw an error');

                case 9:
                  _successfulEstimation = successfulEstimation.call, contract = _successfulEstimation.contract, _successfulEstimation2 = _successfulEstimation.parameters, methodName = _successfulEstimation2.methodName, args = _successfulEstimation2.args, value = _successfulEstimation2.value, gasEstimate = successfulEstimation.gasEstimate;
                  return _context.abrupt("return", contract[methodName].apply(contract, _toConsumableArray__default["default"](args).concat([_objectSpread$4({
                    gasLimit: calculateGasMargin(gasEstimate)
                  }, value && !isZero(value) ? {
                    value: value,
                    from: account
                  } : {
                    from: account
                  })])).then(function (response) {
                    var inputSymbol = getSymbol(trade.inputAmount.currency);
                    var outputSymbol = getSymbol(trade.outputAmount.currency);
                    var inputAmount = trade.inputAmount.toSignificant(3);
                    var outputAmount = trade.outputAmount.toSignificant(3);
                    var base = "Swap ".concat(inputAmount, " ").concat(inputSymbol, " for ").concat(outputAmount, " ").concat(outputSymbol);
                    var withRecipient = recipient === account ? base : "".concat(base, " to ").concat(recipientAddressOrName && utils$1.isAddress(recipientAddressOrName) ? shortenAddress(recipientAddressOrName) : recipientAddressOrName);
                    setOldestValidBlock(response.blockNumber);
                    return {
                      response: response,
                      summary: withRecipient,
                      type: exports.TransactionType.SWAP,
                      trade: trade
                    };
                  }).catch(function (error) {
                    // if the user rejected the tx, pass this along
                    if ((error === null || error === void 0 ? void 0 : error.code) === 4001) {
                      throw new Error('Transaction rejected.');
                    } else {
                      // otherwise, the error was unexpected and we need to convey that
                      console.error("Swap failed", error, methodName, args, value);
                      throw new Error("Swap failed: ".concat(error.message));
                    }
                  }));

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function onSwap() {
          return _onSwap.apply(this, arguments);
        }

        return onSwap;
      }(),
      error: null
    };
  }, [trade, library, account, chainId, recipient, recipientAddressOrName, swapCalls, setOldestValidBlock]);
}

var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGasStation = function SvgGasStation(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends({
    width: 23,
    height: 24,
    viewBox: "0 0 23 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18.9459 7.61869L18.9555 7.60911L15.3905 4.04411L14.3747 5.05994L16.3968 7.08202C15.4959 7.42702 14.8538 8.28952 14.8538 9.31494C14.8538 10.6374 15.9272 11.7108 17.2497 11.7108C17.5947 11.7108 17.9109 11.6341 18.208 11.5095V18.4191C18.208 18.9462 17.7768 19.3774 17.2497 19.3774C16.7226 19.3774 16.2913 18.9462 16.2913 18.4191V14.1066C16.2913 13.0524 15.4288 12.1899 14.3747 12.1899H13.4163V5.48161C13.4163 4.42744 12.5538 3.56494 11.4997 3.56494H5.74967C4.69551 3.56494 3.83301 4.42744 3.83301 5.48161V20.8149H13.4163V13.6274H14.8538V18.4191C14.8538 19.7416 15.9272 20.8149 17.2497 20.8149C18.5722 20.8149 19.6455 19.7416 19.6455 18.4191V9.31494C19.6455 8.65369 19.3772 8.04994 18.9459 7.61869ZM17.2497 10.2733C16.7226 10.2733 16.2913 9.84202 16.2913 9.31494C16.2913 8.78786 16.7226 8.35661 17.2497 8.35661C17.7768 8.35661 18.208 8.78786 18.208 9.31494C18.208 9.84202 17.7768 10.2733 17.2497 10.2733ZM7.66634 17.9399V13.6274H5.74967L9.58301 6.43994V11.2316H11.4997L7.66634 17.9399Z",
    fill: "#333333"
  })));
};

var _excluded$1 = ["extension", "orientation"];
function Divider(_ref) {
  var extension = _ref.extension,
      orientation = _ref.orientation,
      props = _objectWithoutProperties__default["default"](_ref, _excluded$1);

  var theme = material.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(material.Divider, _extends__default["default"]({}, props, {
    sx: {
      width: extension ? "calc(100% + ".concat(extension * 2, "px") : orientation === 'vertical' ? 1 : '100%',
      border: 'none',
      height: orientation === 'vertical' ? '100%' : '1px',
      backgroundColor: theme.palette.text.secondary,
      margin: extension ? "0 -".concat(extension, "px") : '0',
      opacity: 0.1
    }
  }));
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _Accordion(props) {
  var summary = props.summary,
      details = props.details,
      onChange = props.onChange,
      expanded = props.expanded,
      iconCssOverride = props.iconCssOverride,
      margin = props.margin,
      disabled = props.disabled;
  var theme = material.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(Accordion__default["default"], {
    onChange: disabled ? undefined : onChange,
    sx: {
      boxShadow: 'none',
      background: theme.palette.background.paper,
      borderRadius: '8px',
      padding: '10px',
      margin: margin || 0,
      '&:before': {
        display: 'none'
      },
      '&.Mui-expanded': {
        margin: "".concat(margin, " !important") || 0
      },
      '& .MuiAccordionSummary-content': {
        margin: 0,
        width: '100%',
        cursor: disabled ? 'auto' : 'pointer'
      },
      '& .MuiAccordionSummary-expandIconWrapper': _objectSpread$3(_objectSpread$3({}, iconCssOverride), {}, {
        display: disabled ? 'none' : 'inherit'
      })
    },
    expanded: expanded
  }, /*#__PURE__*/React__default["default"].createElement(AccordionSummary__default["default"], {
    sx: {
      fontSize: 14,
      userSelect: disabled ? 'none' : 'auto'
    },
    expandIcon: /*#__PURE__*/React__default["default"].createElement(KeyboardArrowDownIcon__default["default"], null)
  }, summary), /*#__PURE__*/React__default["default"].createElement(AccordionDetails__default["default"], {
    sx: {
      mt: 10
    }
  }, /*#__PURE__*/React__default["default"].createElement(Divider, null), details));
}

var HelperText = {
  expectedOuptut: 'The amount you expect to receive at the current market price.You may receive less or more if the market price changes while your transaction is pending.',
  priceImpact: 'The impact your trade has on the market price of this pool.',
  minReceived: 'The minimum amount you are guaranteed to receive.If the price slips any further,your transaction will revert.',
  networkFee: 'The fee paid to miners who process your transaction.This must be paid in ETH.',
  selectNft: 'selectNft',
  selectToken: 'selectToken'
};

var toggleSelection = function toggleSelection() {
  var selection = document.getSelection();

  if (!selection.rangeCount) {
    return function () {};
  }

  var active = document.activeElement;
  var ranges = [];

  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) {
    // .toUpperCase handles XHTML
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
    selection.type === 'Caret' && selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function (range) {
        selection.addRange(range);
      });
    }

    active && active.focus();
  };
};

var deselectCurrent = toggleSelection;
var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};
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
    mark.textContent = text; // reset user styles for span element

    mark.style.all = "unset"; // prevents scrolling to the end of the page

    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)"; // used to preserve spaces and line breaks

    mark.style.whiteSpace = "pre"; // do not inherit user-select (it may be `none`)

    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function (e) {
      e.stopPropagation();

      if (options.format) {
        e.preventDefault();

        if (typeof e.clipboardData === "undefined") {
          // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format, text);
        } else {
          // all other browsers
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

var copyToClipboard = copy;

function useCopyClipboard() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      isCopied = _useState2[0],
      setIsCopied = _useState2[1];

  var staticCopy = React.useCallback(function (text) {
    var didCopy = copyToClipboard(text);
    setIsCopied(didCopy);
  }, []);
  React.useEffect(function () {
    if (isCopied) {
      var hide = setTimeout(function () {
        setIsCopied(false);
      }, timeout);
      return function () {
        clearTimeout(hide);
      };
    }

    return undefined;
  }, [isCopied, setIsCopied, timeout]);
  return [isCopied, staticCopy];
}

function Copy(props) {
  var _useCopyClipboard = useCopyClipboard(),
      _useCopyClipboard2 = _slicedToArray__default["default"](_useCopyClipboard, 2),
      isCopied = _useCopyClipboard2[0],
      setCopied = _useCopyClipboard2[1];

  var toCopy = props.toCopy,
      children = props.children;
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      display: 'flex',
      cursor: 'pointer',
      height: 17,
      '& svg': {
        mr: '10px'
      }
    },
    onClick: function onClick(e) {
      e.stopPropagation();
      setCopied(toCopy);
    }
  }, isCopied ? /*#__PURE__*/React__default["default"].createElement(CheckIcon__default["default"], {
    sx: {
      opacity: 0.6,
      fontSize: 16
    }
  }) : /*#__PURE__*/React__default["default"].createElement(iconsMaterial.ContentCopy, {
    sx: {
      opacity: 0.6,
      fontSize: 16
    }
  }), children);
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Tag(_ref) {
  var children = _ref.children,
      sx = _ref.sx;
  var theme = material.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: _objectSpread$2({
      borderRadius: '10px',
      boxShadow: '0px 3px 10px rgba(0,0,0,0.15)',
      fontSize: 12,
      padding: '4px 12px',
      background: '#FFFFFF',
      '&:before': {
        content: "'".concat(children, "'"),
        background: theme.palette.primary.main,
        color: 'transparent',
        overflow: 'hidden',
        textFillColor: 'transparent',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }
    }, sx)
  });
}

function AssetAccordion(_ref) {
  var token = _ref.token,
      subTokens = _ref.subTokens;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var theme = material.useTheme();
  React.useEffect(function () {
    if (!subTokens) {
      setExpanded(false);
    }
  }, [subTokens]);
  var handleChange = React.useCallback(function () {
    setExpanded(function (prev) {
      return !prev;
    });
  }, []);
  var is1155 = checkIs1155(token);
  var is721 = checkIs721(token);
  var summary = React.useMemo(function () {
    var _getTokenText$token1T;

    return /*#__PURE__*/React__default["default"].createElement(material.Box, {
      sx: {
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row'
        },
        gap: 10,
        alignItems: {
          xs: 'flex-start',
          md: 'center'
        },
        width: '100%'
      }
    }, /*#__PURE__*/React__default["default"].createElement(CurrencyLogo, {
      currency: token,
      style: {
        width: 36
      }
    }), /*#__PURE__*/React__default["default"].createElement(material.Box, {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      width: "100%",
      sx: {
        '& *': {
          fontSize: 14
        }
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      color: theme.palette.text.secondary
    }, "Name: ", (_getTokenText$token1T = getTokenText(token).token1Text) !== null && _getTokenText$token1T !== void 0 ? _getTokenText$token1T : '-'), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      color: theme.palette.text.secondary,
      component: "div",
      sx: {
        wordWrap: 'break-word',
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        flexWrap: 'wrap'
      }
    }, "Contract:", ' ', token && 'address' in token && token !== null && token !== void 0 && token.address ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      sx: {
        wordWrap: 'break-word',
        maxWidth: '100%'
      }
    }, shortenAddress(token === null || token === void 0 ? void 0 : token.address)), /*#__PURE__*/React__default["default"].createElement(Copy, {
      toCopy: token === null || token === void 0 ? void 0 : token.address
    })) : '-'), is1155 && /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      color: theme.palette.text.secondary,
      sx: {
        wordWrap: 'break-word'
      }
    }, "Token Id: ", token && 'tokenId' in token ? token.tokenId : 'none')), /*#__PURE__*/React__default["default"].createElement(Tag, {
      sx: {
        position: 'absolute',
        right: 0,
        top: 0
      }
    }, is1155 ? 'ERC1155' : is721 ? 'ERC721' : 'ERC20'));
  }, [token, theme.palette.text.secondary, is1155, is721]);
  var details = React.useMemo(function () {
    return /*#__PURE__*/React__default["default"].createElement(material.Box, {
      sx: {
        display: 'grid',
        gap: 10,
        pt: 10
      }
    }, subTokens && subTokens.length > 0 && subTokens.map(function (token, idx) {
      return /*#__PURE__*/React__default["default"].createElement(material.Box, {
        key: idx,
        sx: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/React__default["default"].createElement(LogoText, {
        logo: /*#__PURE__*/React__default["default"].createElement(CurrencyLogo, {
          currency: token,
          style: {
            width: 28
          }
        }),
        text: getName(token) + "#".concat(token.tokenId),
        fontSize: 12
      }), /*#__PURE__*/React__default["default"].createElement(ExternalLink, {
        sx: {
          color: theme.palette.text.secondary,
          fontSize: 12
        },
        href: '#',
        showIcon: true
      }, shortenAddress(token.address)), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
        sx: {
          color: theme.palette.text.secondary,
          fontSize: 12
        }
      }, "Quantity: 1"));
    }));
  }, [subTokens, theme.palette.text.secondary]);
  return /*#__PURE__*/React__default["default"].createElement(_Accordion, {
    summary: summary,
    details: details,
    expanded: expanded,
    onChange: handleChange,
    margin: '0',
    disabled: subTokens && subTokens.length > 0 ? false : true,
    iconCssOverride: {
      right: 0,
      bottom: 0,
      position: 'absolute'
    }
  });
}

function SwapSummary(_ref) {
  var fromAsset = _ref.fromAsset,
      toAsset = _ref.toAsset,
      margin = _ref.margin,
      gasFee = _ref.gasFee,
      price = _ref.price,
      minReceiveQty = _ref.minReceiveQty,
      slippage = _ref.slippage,
      toVal = _ref.toVal,
      routerTokens = _ref.routerTokens,
      fromErc721SubTokens = _ref.fromErc721SubTokens,
      toErc721SubTokens = _ref.toErc721SubTokens,
      priceImpact = _ref.priceImpact;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var theme = material.useTheme();

  var _getTokenText = getTokenText(fromAsset, toAsset),
      Token1Text = _getTokenText.Token1Text,
      Token2Text = _getTokenText.Token2Text,
      token2Text = _getTokenText.token2Text;

  var handleExpand = React.useCallback(function () {
    setExpanded(function (prev) {
      return !prev;
    });
  }, []);
  var summary = React.useMemo(function () {
    return /*#__PURE__*/React__default["default"].createElement(material.Box, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%"
    }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React__default["default"].createElement(InfoIcon, {
      color: theme.palette.text.primary
    }), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      color: theme.palette.text.secondary
    }, "1 ", /*#__PURE__*/React__default["default"].createElement(Token1Text, null), " = ", price, " ", /*#__PURE__*/React__default["default"].createElement(Token2Text, null))), /*#__PURE__*/React__default["default"].createElement(material.Box, {
      display: "flex",
      gap: 5,
      alignItems: "center"
    }, /*#__PURE__*/React__default["default"].createElement(SvgGasStation, null), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      color: theme.palette.text.secondary
    }, "~$", gasFee || '-')));
  }, [theme.palette.text.primary, theme.palette.text.secondary, Token1Text, price, Token2Text, gasFee]);
  var details = React.useMemo(function () {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(material.Box, {
      display: "grid",
      gap: 8,
      padding: "12px 0"
    }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
      display: "flex",
      alignItems: "center",
      gap: 9
    }, /*#__PURE__*/React__default["default"].createElement(material.Typography, null, "Expected Output"), /*#__PURE__*/React__default["default"].createElement(QuestionHelper, {
      text: HelperText.expectedOuptut,
      style: {
        color: theme.palette.text.secondary,
        background: 'transparent',
        display: 'inline-block'
      }
    })), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      textAlign: 'right'
    }, toVal, " ", /*#__PURE__*/React__default["default"].createElement("span", {
      style: {
        color: theme.palette.text.secondary
      }
    }, token2Text, "s"))), /*#__PURE__*/React__default["default"].createElement(material.Box, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
      display: "flex",
      alignItems: "center",
      gap: 9
    }, /*#__PURE__*/React__default["default"].createElement(material.Typography, null, "Price Impact"), /*#__PURE__*/React__default["default"].createElement(QuestionHelper, {
      text: HelperText.priceImpact,
      style: {
        color: theme.palette.text.secondary,
        background: 'transparent',
        display: 'inline-block'
      }
    })), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      sx: {
        color: theme.palette.text.secondary
      },
      textAlign: 'right'
    }, priceImpact, "%"))), /*#__PURE__*/React__default["default"].createElement(Divider, null), /*#__PURE__*/React__default["default"].createElement(material.Box, {
      display: "grid",
      gap: 8,
      padding: "12px 0"
    }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
      display: "flex",
      alignItems: "center",
      gap: 9,
      sx: {
        maxWidth: 154
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Typography, null, "Minimum received after slippage (", slippage, "%)"), /*#__PURE__*/React__default["default"].createElement(QuestionHelper, {
      text: HelperText.minReceived,
      style: {
        color: theme.palette.text.secondary,
        background: 'transparent',
        display: 'inline-block'
      }
    })), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      textAlign: 'right'
    }, minReceiveQty, " ", /*#__PURE__*/React__default["default"].createElement("span", {
      style: {
        color: theme.palette.text.secondary
      }
    }, token2Text, "s"))), /*#__PURE__*/React__default["default"].createElement(material.Box, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
      display: "flex",
      alignItems: "center",
      gap: 9
    }, /*#__PURE__*/React__default["default"].createElement(material.Typography, null, "Network Fee"), /*#__PURE__*/React__default["default"].createElement(QuestionHelper, {
      text: HelperText.networkFee,
      style: {
        color: theme.palette.text.secondary,
        background: 'transparent'
      }
    })), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      sx: {
        color: theme.palette.text.secondary
      }
    }, "~$", gasFee || '-'))), /*#__PURE__*/React__default["default"].createElement(Divider, null), /*#__PURE__*/React__default["default"].createElement(material.Box, {
      padding: "12px 0"
    }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }, /*#__PURE__*/React__default["default"].createElement(material.Typography, null, "Router")), /*#__PURE__*/React__default["default"].createElement(RouterGraph, {
      tokens: routerTokens,
      fromAsset: fromAsset,
      toAsset: toAsset,
      fee: "0.3%"
    }), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      sx: {
        color: theme.palette.text.secondary,
        opacity: 0.5
      }
    }, "Best price route costs ~$", gasFee, " in gas.This route optimizes your total output by considering aplit routes,multiple hops,and the gas cost of each step.")));
  }, [theme.palette.text.secondary, toVal, token2Text, priceImpact, slippage, minReceiveQty, gasFee, routerTokens, fromAsset, toAsset]);
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    padding: "10px"
  }, /*#__PURE__*/React__default["default"].createElement(TokenInfo, {
    fromAsset: fromAsset,
    toAsset: toAsset,
    fromErc721SubTokens: fromErc721SubTokens,
    toErc721SubTokens: toErc721SubTokens
  }), /*#__PURE__*/React__default["default"].createElement(_Accordion, {
    summary: summary,
    details: details,
    expanded: expanded,
    onChange: handleExpand,
    margin: margin
  }));
}

function RouterGraph(_ref2) {
  var fromAsset = _ref2.fromAsset,
      toAsset = _ref2.toAsset,
      fee = _ref2.fee,
      tokens = _ref2.tokens;
  var theme = material.useTheme();
  var Dashline = material.styled(material.Box)({
    borderBottom: "1px dashed ".concat(theme.palette.text.secondary),
    position: 'absolute',
    width: 'calc(100% - 64px)'
  });
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 0",
    position: "relative"
  }, fromAsset && /*#__PURE__*/React__default["default"].createElement(CurrencyLogo, {
    currency: fromAsset,
    style: {
      width: 24
    }
  }), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      background: function background(theme) {
        return theme.palette.background.paper;
      },
      minWidth: 125,
      height: 38,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '10px',
      zIndex: 1
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      display: 'flex'
    }
  }, fromAsset && /*#__PURE__*/React__default["default"].createElement(CurrencyLogo, {
    currency: fromAsset,
    style: {
      width: 24
    }
  }), tokens === null || tokens === void 0 ? void 0 : tokens.map(function (token, idx) {
    var _token$symbol;

    return /*#__PURE__*/React__default["default"].createElement(CurrencyLogo, {
      currency: token,
      style: {
        width: 24,
        marginLeft: -5 * (idx + 1),
        zIndex: 2
      },
      key: (_token$symbol = token === null || token === void 0 ? void 0 : token.symbol) !== null && _token$symbol !== void 0 ? _token$symbol : '' + idx
    });
  }), toAsset && /*#__PURE__*/React__default["default"].createElement(CurrencyLogo, {
    currency: toAsset,
    style: {
      width: 24,
      marginLeft: -5,
      zIndex: 2
    }
  })), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    ml: 10
  }, fee)), toAsset && /*#__PURE__*/React__default["default"].createElement(CurrencyLogo, {
    currency: toAsset,
    style: {
      width: 24
    }
  }), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      position: 'absolute',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Dashline, null)));
}

function InfoIcon(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.16406 4.52311H9.83073V6.18978H8.16406V4.52311ZM8.16406 7.85645H9.83073V12.8564H8.16406V7.85645ZM8.9974 0.356445C4.3974 0.356445 0.664062 4.08978 0.664062 8.68978C0.664062 13.2898 4.3974 17.0231 8.9974 17.0231C13.5974 17.0231 17.3307 13.2898 17.3307 8.68978C17.3307 4.08978 13.5974 0.356445 8.9974 0.356445ZM8.9974 15.3564C5.3224 15.3564 2.33073 12.3648 2.33073 8.68978C2.33073 5.01478 5.3224 2.02311 8.9974 2.02311C12.6724 2.02311 15.6641 5.01478 15.6641 8.68978C15.6641 12.3648 12.6724 15.3564 8.9974 15.3564Z",
    fill: color
  }));
}

function TokenInfo(_ref4) {
  var fromAsset = _ref4.fromAsset,
      toAsset = _ref4.toAsset,
      fromErc721SubTokens = _ref4.fromErc721SubTokens,
      toErc721SubTokens = _ref4.toErc721SubTokens;
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    flexDirection: "column",
    gap: 12
  }, fromAsset && /*#__PURE__*/React__default["default"].createElement(AssetAccordion, {
    token: fromAsset,
    subTokens: fromErc721SubTokens
  }), toAsset && /*#__PURE__*/React__default["default"].createElement(AssetAccordion, {
    token: toAsset,
    subTokens: toErc721SubTokens
  }));
}

/** Submits a transaction. Returns true if the transaction was submitted. */

function useOnSubmit() {
  var addTransactionInfo = useAddTransactionInfo();
  var setDisplayTxHash = utils.useUpdateAtom(displayTxHashAtom);

  var _useSwapAmount = useSwapAmount(exports.Field.INPUT),
      _useSwapAmount2 = _slicedToArray__default["default"](_useSwapAmount, 2),
      setInputAmount = _useSwapAmount2[1];

  var _useModal = useModal(),
      showModal = _useModal.showModal,
      hideModal = _useModal.hideModal;

  return React.useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(submit) {
      var info;
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              showModal( /*#__PURE__*/React__default["default"].createElement(TransacitonPendingModal, null));
              _context.next = 4;
              return submit();

            case 4:
              info = _context.sent;
              hideModal();
              _context.next = 13;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              hideModal();
              showModal( /*#__PURE__*/React__default["default"].createElement(MessageBox, {
                type: "error"
              }, _context.t0.message));
              console.error('Failed to submit', _context.t0);

            case 13:
              if (info) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return", false);

            case 15:
              addTransactionInfo(info); // For actionable transactions, display the tx and reset the input.
              // switch (info.type) {
              // case TransactionType.SWAP:
              // case TransactionType.WRAP:
              // case TransactionType.UNWRAP:
              // default:

              setDisplayTxHash(info.response.hash);

              if (!isAnimating(document)) {
                _context.next = 21;
                break;
              }

              return _context.abrupt("return", new Promise(function (resolve) {
                var onAnimationEnd = function onAnimationEnd() {
                  document.removeEventListener('animationend', onAnimationEnd);
                  setInputAmount('');
                };

                document.addEventListener('animationend', onAnimationEnd);
              }));

            case 21:
              setInputAmount('');

            case 22:
              return _context.abrupt("return", true);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [addTransactionInfo, hideModal, setDisplayTxHash, setInputAmount, showModal]);
}

/**
 * A swapping ActionButton.
 * Should only be rendered if a valid swap exists.
 */

function SwapButton(_ref) {
  var _trade$executionPrice, _trade$executionPrice2, _toVal$toExact, _slippageAdjustedAmou, _slippageAdjustedAmou2;

  var disabled = _ref.disabled;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account,
      chainId = _useWeb3React.chainId;

  var _useSwapInfo = useSwapInfo(),
      trade = _useSwapInfo.trade,
      slippage = _useSwapInfo.slippage,
      _useSwapInfo$Field$IN = _useSwapInfo[exports.Field.INPUT],
      fromAsset = _useSwapInfo$Field$IN.currency,
      subTokensIn = _useSwapInfo$Field$IN.subTokens,
      _useSwapInfo$Field$OU = _useSwapInfo[exports.Field.OUTPUT],
      toAsset = _useSwapInfo$Field$OU.currency,
      toVal = _useSwapInfo$Field$OU.amount,
      subTokensOut = _useSwapInfo$Field$OU.subTokens,
      priceImpact = _useSwapInfo.priceImpact,
      slippageAdjustedAmounts = _useSwapInfo.slippageAdjustedAmounts,
      error = _useSwapInfo.error,
      tokenIdsForCb = _useSwapInfo.tokenIdsForCb;

  var submitCb = useOnSubmit();

  var _useSwapCallback = useSwapCallback({
    trade: trade !== null && trade !== void 0 ? trade : undefined,
    allowedSlippage: slippage.allowed,
    recipientAddressOrName: account !== null && account !== void 0 ? account : null,
    tokenIds: tokenIdsForCb
  }),
      swapCallback = _useSwapCallback.callback;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1]; // Close the review modal if there is no available trade.


  React.useEffect(function () {
    return setOpen(function (open) {
      return trade ? open : false;
    });
  }, [trade]); // Close the review modal on chain change.

  React.useEffect(function () {
    return setOpen(false);
  }, [chainId]);
  var onSwap = React.useCallback(function () {
    if (!swapCallback) {
      return;
    }

    submitCb(swapCallback);
  }, [submitCb, swapCallback]);

  var _useAllTokenApproveCa = useAllTokenApproveCallback(fromAsset, slippageAdjustedAmounts === null || slippageAdjustedAmounts === void 0 ? void 0 : slippageAdjustedAmounts[exports.Field.INPUT], checkIs721(toAsset)),
      _useAllTokenApproveCa2 = _slicedToArray__default["default"](_useAllTokenApproveCa, 2),
      approval = _useAllTokenApproveCa2[0],
      approveCallback = _useAllTokenApproveCa2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      approvalSubmitted = _useState4[0],
      setApprovalSubmitted = _useState4[1];

  var handleApprove = React.useCallback(function () {
    approveCallback();
  }, [approveCallback]);
  var onReviewSwapClick = useConditionalHandler(utils.useAtomValue(swapEventHandlersAtom).onReviewSwapClick);
  var onClick = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = setOpen;
            _context.next = 3;
            return onReviewSwapClick();

          case 3:
            _context.t1 = _context.sent;
            (0, _context.t0)(_context.t1);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [onReviewSwapClick]);
  var showApproveFlow = !error && (approval === ApprovalState.NOT_APPROVED || approval === ApprovalState.PENDING || approvalSubmitted && approval === ApprovalState.APPROVED);
  var formattedError = error && Object.values(ChainError).includes(error) ? 'Chain Error' : error ? error + '' : undefined;
  React.useEffect(function () {
    if (approval === ApprovalState.PENDING) {
      setApprovalSubmitted(true);
    } else {
      setApprovalSubmitted(false);
    }
  }, [approval, approvalSubmitted]);
  React.useEffect(function () {
    setApprovalSubmitted(false);
  }, [fromAsset]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, showApproveFlow ? /*#__PURE__*/React__default["default"].createElement(ActionButton, {
    onAction: handleApprove,
    actionText: approvalSubmitted && approval === ApprovalState.APPROVED ? 'Approved' : "Allow the Ladder to use your ".concat(fromAsset === null || fromAsset === void 0 ? void 0 : fromAsset.symbol),
    error: formattedError,
    disableAction: approval !== ApprovalState.NOT_APPROVED || approvalSubmitted,
    pending: approval === ApprovalState.PENDING,
    pendingText: "Approving"
  }) : /*#__PURE__*/React__default["default"].createElement(ActionButton, {
    onAction: onClick,
    disableAction: disabled,
    actionText: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Swap"
    }),
    error: formattedError
  }), open && trade && /*#__PURE__*/React__default["default"].createElement(Dialog, {
    onClose: function onClose() {
      return setOpen(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement(Header, {
    title: "Swap Summary"
  }), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    maxHeight: '100%',
    sx: {
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React__default["default"].createElement(SwapSummary, {
    price: (_trade$executionPrice = trade === null || trade === void 0 ? void 0 : (_trade$executionPrice2 = trade.executionPrice) === null || _trade$executionPrice2 === void 0 ? void 0 : _trade$executionPrice2.toFixed(6)) !== null && _trade$executionPrice !== void 0 ? _trade$executionPrice : '-',
    margin: "10px 0 0",
    gasFee: "8.23",
    routerTokens: trade === null || trade === void 0 ? void 0 : trade.route.path.slice(1, -1),
    fromAsset: fromAsset !== null && fromAsset !== void 0 ? fromAsset : undefined,
    toAsset: toAsset !== null && toAsset !== void 0 ? toAsset : undefined,
    toVal: (_toVal$toExact = toVal === null || toVal === void 0 ? void 0 : toVal.toExact()) !== null && _toVal$toExact !== void 0 ? _toVal$toExact : undefined,
    slippage: +slippage.allowed.toFixed(2),
    minReceiveQty: (_slippageAdjustedAmou = slippageAdjustedAmounts === null || slippageAdjustedAmounts === void 0 ? void 0 : (_slippageAdjustedAmou2 = slippageAdjustedAmounts.OUTPUT) === null || _slippageAdjustedAmou2 === void 0 ? void 0 : _slippageAdjustedAmou2.toFixed(6)) !== null && _slippageAdjustedAmou !== void 0 ? _slippageAdjustedAmou : '-',
    priceImpact: priceImpact === null || priceImpact === void 0 ? void 0 : priceImpact.toSignificant(4),
    fromErc721SubTokens: subTokensIn,
    toErc721SubTokens: subTokensOut
  })), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    padding: "0 10px",
    margin: '15px 0'
  }, /*#__PURE__*/React__default["default"].createElement(material.Button, {
    onClick: onSwap
  }, "Confirm"))));
}

function SwapActionButton() {
  var _useSwapInfo = useSwapInfo(),
      _useSwapInfo$Field$IN = _useSwapInfo[exports.Field.INPUT],
      inputCurrency = _useSwapInfo$Field$IN.currency,
      inputCurrencyAmount = _useSwapInfo$Field$IN.amount,
      inputCurrencyBalance = _useSwapInfo$Field$IN.balance,
      outputCurrency = _useSwapInfo[exports.Field.OUTPUT].currency,
      error = _useSwapInfo.error,
      trade = _useSwapInfo.trade;

  var isDisabled = React.useMemo(function () {
    return error !== undefined || !trade || !(inputCurrencyAmount && inputCurrencyBalance) || inputCurrencyBalance.lessThan(inputCurrencyAmount);
  }, [error, trade, inputCurrencyAmount, inputCurrencyBalance]);

  var _useTheme2 = _styled.useTheme(),
      tokenColorExtraction = _useTheme2.tokenColorExtraction;

  var color = tokenColorExtraction ? 'interactive' : 'accent';

  if (error === ChainError.MISMATCHED_CHAINS) {
    var _ref, _inputCurrency$chainI;

    var tokenChainId = (_ref = (_inputCurrency$chainI = inputCurrency === null || inputCurrency === void 0 ? void 0 : inputCurrency.chainId) !== null && _inputCurrency$chainI !== void 0 ? _inputCurrency$chainI : outputCurrency === null || outputCurrency === void 0 ? void 0 : outputCurrency.chainId) !== null && _ref !== void 0 ? _ref : exports.SupportedChainId.MAINNET;
    return /*#__PURE__*/React__default["default"].createElement(ChainSwitchButton, {
      color: color,
      chainId: tokenChainId
    });
  } else {
    return /*#__PURE__*/React__default["default"].createElement(SwapButton, {
      disabled: isDisabled
    });
  }
}

// since the wallet connection component exists within the Swap component.
// TODO(zzmp): refactor WalletConnection into Widget component

function Swap(props) {
  var _amountIn$toExact, _amountOut$toExact;

  useSyncController(props);
  useSyncConvenienceFee(props);
  useSyncSwapEventHandlers(props);

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account;

  var _useState = React.useState(null),
      _useState2 = _slicedToArray__default["default"](_useState, 2);
      _useState2[0];
      var setWrapper = _useState2[1];

  var _useSwapCurrency = useSwapCurrency(exports.Field.INPUT),
      _useSwapCurrency2 = _slicedToArray__default["default"](_useSwapCurrency, 2),
      onSelectInput = _useSwapCurrency2[1];

  var _useSwapCurrency3 = useSwapCurrency(exports.Field.OUTPUT),
      _useSwapCurrency4 = _slicedToArray__default["default"](_useSwapCurrency3, 2),
      onSelectOutput = _useSwapCurrency4[1];

  var _useSwapAmount = useSwapAmount(exports.Field.INPUT),
      _useSwapAmount2 = _slicedToArray__default["default"](_useSwapAmount, 2),
      typedIn = _useSwapAmount2[0],
      onAmountInput = _useSwapAmount2[1];

  var _useSwapAmount3 = useSwapAmount(exports.Field.OUTPUT),
      _useSwapAmount4 = _slicedToArray__default["default"](_useSwapAmount3, 2),
      typedOut = _useSwapAmount4[0],
      onAmountOutput = _useSwapAmount4[1];

  var _useSwapInfo = useSwapInfo(),
      _useSwapInfo$Field$IN = _useSwapInfo[exports.Field.INPUT],
      currencyIn = _useSwapInfo$Field$IN.currency,
      amountIn = _useSwapInfo$Field$IN.amount,
      _useSwapInfo$Field$OU = _useSwapInfo[exports.Field.OUTPUT],
      currencyOut = _useSwapInfo$Field$OU.currency,
      amountOut = _useSwapInfo$Field$OU.amount,
      independentField = _useSwapInfo.independentField,
      pair721Address = _useSwapInfo.pair721Address;

  var _useSwapSubTokens = useSwapSubTokens(),
      updateTokenIdsIn = _useSwapSubTokens.updateTokenIdsIn,
      updateTokenIdsOut = _useSwapSubTokens.updateTokenIdsOut;

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    ref: setWrapper
  }, /*#__PURE__*/React__default["default"].createElement(CurrencyInputPanel, {
    value: independentField === exports.Field.INPUT ? typedIn !== null && typedIn !== void 0 ? typedIn : '' : (_amountIn$toExact = amountIn === null || amountIn === void 0 ? void 0 : amountIn.toExact()) !== null && _amountIn$toExact !== void 0 ? _amountIn$toExact : '',
    onChange: onAmountInput,
    disabled: !account,
    currency: currencyIn,
    onSelectCurrency: onSelectInput,
    onSelectSubTokens: updateTokenIdsIn
  }), /*#__PURE__*/React__default["default"].createElement(ReverseButton, null), /*#__PURE__*/React__default["default"].createElement(CurrencyInputPanel, {
    enableAuto: true,
    currency: currencyOut,
    value: independentField === exports.Field.OUTPUT ? typedOut !== null && typedOut !== void 0 ? typedOut : '' : (_amountOut$toExact = amountOut === null || amountOut === void 0 ? void 0 : amountOut.toExact()) !== null && _amountOut$toExact !== void 0 ? _amountOut$toExact : '',
    onChange: onAmountOutput,
    disabled: !account,
    onSelectCurrency: onSelectOutput,
    onSelectSubTokens: updateTokenIdsOut,
    pairAddress: pair721Address
  })), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    mt: 'auto'
  }, " ", account ? /*#__PURE__*/React__default["default"].createElement(SwapActionButton, null) : /*#__PURE__*/React__default["default"].createElement(ConnectWallet, null)));
}

var Warning = /*#__PURE__*/React.memo(function Warning(_ref) {
  var state = _ref.state;
  var icon;

  switch (state) {
    case 'error':
      icon = XOctagon;
      break;

    case 'warning':
      icon = AlertTriangle;
      break;
  }

  return /*#__PURE__*/React__default["default"].createElement(LargeIcon, {
    icon: icon,
    color: state,
    size: 1.25
  });
});
function MaxSlippageSelect() {
  var _slippage$max;

  var _useAtomValue = utils.useAtomValue(swapEventHandlersAtom),
      onSlippageChange = _useAtomValue.onSlippageChange;

  var _useAtom = jotai.useAtom(slippageAtom),
      _useAtom2 = _slicedToArray__default["default"](_useAtom, 2),
      slippage = _useAtom2[0],
      setSlippageBase = _useAtom2[1];

  var setSlippage = React.useCallback(function (update) {
    onSlippageChange === null || onSlippageChange === void 0 ? void 0 : onSlippageChange(update);
    setSlippageBase(update);
  }, [onSlippageChange, setSlippageBase]);

  var _useState = React.useState(((_slippage$max = slippage.max) === null || _slippage$max === void 0 ? void 0 : _slippage$max.toString()) || ''),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      maxSlippageInput = _useState2[0],
      setMaxSlippageInput = _useState2[1];

  var _useState3 = React.useState(getSlippageWarning(toPercent(slippage.max))),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      warning = _useState4[0],
      setWarning = _useState4[1];

  React.useEffect(function () {
    var _slippage$max2;

    setMaxSlippageInput(((_slippage$max2 = slippage.max) === null || _slippage$max2 === void 0 ? void 0 : _slippage$max2.toString()) || '');
    setWarning(getSlippageWarning(toPercent(slippage.max)));
  }, [slippage.max]);
  var processInput = React.useCallback(function (max) {
    setMaxSlippageInput(max || '');
    setSlippage({
      max: max
    });
  }, [setSlippage]);
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    gap: 10,
    display: "grid",
    mt: 20
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    alignItems: 'center',
    gap: 10
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, null, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Max slippage"
  })), /*#__PURE__*/React__default["default"].createElement(QuestionHelper, {
    text: 'Your transaction will revert if the price changes unfavorably by more than this percentage.'
  })), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    alignItems: 'center',
    justifyItems: "center"
  }, /*#__PURE__*/React__default["default"].createElement(NumericalInput, {
    width: '100%',
    onChange: function onChange(e) {
      return processInput(e.target.value);
    },
    value: maxSlippageInput,
    placeholder: '0.10',
    endAdornment: /*#__PURE__*/React__default["default"].createElement(material.Box, {
      display: "flex",
      alignItems: "center",
      padding: "0 10px",
      gap: "10px"
    }, /*#__PURE__*/React__default["default"].createElement(material.Typography, null, " %"), warning && /*#__PURE__*/React__default["default"].createElement(Warning, {
      state: warning
    }))
  }), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    color: warning,
    fontSize: "12px",
    textAlign: 'right',
    mt: 8
  }, warning === 'error' && /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Please enter a valid slippage %"
  }), warning === 'warning' && /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "High slippage increases the risk of price movement"
  }))));
}

function TransactionTtlInput() {
  var _ttl$toString;

  var _useTransactionTtl = useTransactionTtl(),
      _useTransactionTtl2 = _slicedToArray__default["default"](_useTransactionTtl, 2),
      ttl = _useTransactionTtl2[0],
      setTtl = _useTransactionTtl2[1];

  var defaultTtl = useDefaultTransactionTtl();
  var placeholder = defaultTtl.toString();
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    gap: 10,
    display: "grid"
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    alignItems: 'center',
    gap: 10
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, null, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Transaction deadline"
  })), /*#__PURE__*/React__default["default"].createElement(QuestionHelper, {
    text: 'Your transaction will revert if it has been pending for longer than this period of time.'
  })), /*#__PURE__*/React__default["default"].createElement(NumericalInput, {
    width: '100%',
    integer: true,
    placeholder: placeholder,
    value: (_ttl$toString = ttl === null || ttl === void 0 ? void 0 : ttl.toString()) !== null && _ttl$toString !== void 0 ? _ttl$toString : '',
    onChange: function onChange(e) {
      return setTtl(e.target.value ? parseFloat(e.target.value) : undefined);
    },
    endAdornment: /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      padding: "0 10px"
    }, /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "minutes"
    }))
  }));
}

var _templateObject$1;
function SettingsDialog() {
  var _useAtomValue = utils.useAtomValue(swapEventHandlersAtom),
      onSettingsReset = _useAtomValue.onSettingsReset;

  var resetSettingsBase = utils.useResetAtom(settingsAtom);
  var resetSettings = React.useCallback(function () {
    onSettingsReset === null || onSettingsReset === void 0 ? void 0 : onSettingsReset();
    resetSettingsBase();
  }, [onSettingsReset, resetSettingsBase]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Header, {
    title: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Settings"
    }),
    ruled: true
  }), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "grid",
    gap: 30,
    style: {
      paddingTop: '1em'
    },
    padding: '10px'
  }, /*#__PURE__*/React__default["default"].createElement(MaxSlippageSelect, null), /*#__PURE__*/React__default["default"].createElement(TransactionTtlInput, null), /*#__PURE__*/React__default["default"].createElement(material.Button, {
    onClick: resetSettings,
    sx: {
      marginTop: 20
    }
  }, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Reset"
  }))));
}
var SettingsButton = material.styled(material.IconButton, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'hover';
  }
})(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral__default["default"](["\n  padding: 3px;\n  transform: ", ";\n  transition: ", ";\n  will-change: transform;\n"])), function (_ref) {
  var hover = _ref.hover;
  return hover && 'rotate(45deg)';
}, function (_ref2) {
  var hover = _ref2.hover;
  return hover && 'transform 0.25s';
});
function Settings(_ref3) {
  var disabled = _ref3.disabled;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      hover = _useState4[0],
      setHover = _useState4[1];

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(SettingsButton, {
    disabled: disabled,
    hover: hover,
    onClick: function onClick() {
      return setOpen(true);
    },
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement(Settings$1, null)), open && /*#__PURE__*/React__default["default"].createElement(Dialog, {
    onClose: function onClose() {
      return setOpen(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement(SettingsDialog, null)));
}

var disableBrandingAtom = jotai.atom(false);
function useBrandingSetting() {
  return utils.useAtomValue(disableBrandingAtom);
}
function useInitialBrandingSettings(_ref) {
  var disableBranding = _ref.disableBranding;
  return [disableBrandingAtom, disableBranding !== null && disableBranding !== void 0 ? disableBranding : false];
}
function useSyncBrandingSetting(_ref2) {
  var disableBranding = _ref2.disableBranding;
  var setDisableBranding = utils.useUpdateAtom(disableBrandingAtom);
  React.useEffect(function () {
    return setDisableBranding(disableBranding !== null && disableBranding !== void 0 ? disableBranding : false);
  }, [disableBranding, setDisableBranding]);
}

var _PageTitle;
var Page;

(function (Page) {
  Page[Page["SWAP"] = 0] = "SWAP";
  Page[Page["MINT"] = 1] = "MINT";
  Page[Page["BURN"] = 2] = "BURN";
})(Page || (Page = {}));

var PageTitle = (_PageTitle = {}, _defineProperty__default["default"](_PageTitle, Page.SWAP, 'Swap'), _defineProperty__default["default"](_PageTitle, Page.MINT, 'Add Liquidity'), _defineProperty__default["default"](_PageTitle, Page.BURN, 'Remove Liquidity'), _PageTitle);
function Ladder() {
  var _useState = React.useState(Page.SWAP),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      menuOpen = _useState4[0],
      setMenuOpen = _useState4[1];

  var _useAtom = jotai.useAtom(displayTxHashAtom),
      _useAtom2 = _slicedToArray__default["default"](_useAtom, 2),
      displayTxHash = _useAtom2[0],
      setDisplayTxHash = _useAtom2[1];

  var pendingTxs = usePendingTransactions();
  var displayTx = React.useMemo(function () {
    return displayTxHash && pendingTxs[displayTxHash];
  }, [displayTxHash, pendingTxs]);
  var disableBranding = useBrandingSetting();
  var handleClose = React.useCallback(function () {
    setDisplayTxHash(undefined);
  }, [setDisplayTxHash]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Header$1, {
    title: /*#__PURE__*/React__default["default"].createElement(material.Box, {
      display: "flex",
      alignItems: "center",
      gap: 5,
      sx: {
        '& svg': {
          height: 20,
          width: 20
        },
        maxWidth: 150,
        '& button': {
          padding: '3px',
          flexWrap: 'nowrap'
        }
      }
    }, PageTitle[page])
  }, /*#__PURE__*/React__default["default"].createElement(Wallet
  /*disabled={props.hideConnectionUI}*/
  , null), /*#__PURE__*/React__default["default"].createElement(Settings, null), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      position: 'relative',
      width: 'max-content',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React__default["default"].createElement(MenuButton, {
    onClick: function onClick() {
      setMenuOpen(function (open) {
        return !open;
      });
    }
  }), menuOpen && /*#__PURE__*/React__default["default"].createElement(DesktopMenu, {
    setPage: setPage,
    onDismiss: function onDismiss() {
      setMenuOpen(false);
    }
  }))), page === Page.SWAP && /*#__PURE__*/React__default["default"].createElement(Swap, {
    key: "swap"
  }), page === Page.MINT && /*#__PURE__*/React__default["default"].createElement(Mint, {
    key: "swap"
  }), !disableBranding && /*#__PURE__*/React__default["default"].createElement(BrandedFooter, null), displayTx && /*#__PURE__*/React__default["default"].createElement(StatusDialog, {
    tx: displayTx,
    onClose: handleClose
  }));
}

function MenuButton(_ref) {
  var onClick = _ref.onClick;
  var theme = material.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(material.IconButton, {
    sx: {
      height: 40,
      width: 40,
      padding: '2px',
      borderRadius: '8px',
      background: function background(theme) {
        return theme.palette.background.default;
      }
    },
    onClick: onClick
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21 10.7825H7",
    stroke: theme.palette.text.primary,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21 6H3",
    stroke: theme.palette.text.primary,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21 15.5652H3",
    stroke: theme.palette.text.primary,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21 20.3479H7",
    stroke: theme.palette.text.primary,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

function DesktopMenu(_ref2) {
  var setPage = _ref2.setPage,
      onDismiss = _ref2.onDismiss;
  var theme = material.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: {
      background: theme.palette.background.paper,
      borderRadius: '10px',
      width: '180px',
      position: 'absolute',
      right: 0,
      top: '40px',
      padding: '10px 0',
      zIndex: 2000,
      boxShadow: '0 0 5px #00000010'
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.MenuItem, {
    sx: {
      height: 33
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.ButtonBase, {
    onClick: function onClick() {
      setPage(Page.SWAP);
      onDismiss();
    },
    sx: {
      width: '100%',
      height: '100%',
      padding: 0
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "100%"
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    color: theme.palette.text.primary
  }, "Swap"), /*#__PURE__*/React__default["default"].createElement(iconsMaterial.AddCircle, null)))), /*#__PURE__*/React__default["default"].createElement(material.MenuItem, {
    sx: {
      height: 33
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.ButtonBase, {
    onClick: function onClick() {
      setPage(Page.MINT);
      onDismiss();
    },
    sx: {
      width: '100%',
      height: '100%',
      padding: 0
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "100%"
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    color: theme.palette.text.primary
  }, "Add Liquidity"), /*#__PURE__*/React__default["default"].createElement(iconsMaterial.AddCircle, null)))));
}

var overflowCss = /*#__PURE__*/_styled.css(["overflow-y:scroll;"]);
/** Customizes the scrollbar for vertical overflow. */


var scrollbarCss = function scrollbarCss(padded) {
  return _styled.css(["overflow-y:scroll;::-webkit-scrollbar{width:1.25em;}::-webkit-scrollbar-thumb{background:radial-gradient( closest-corner at 0.25em 0.25em,", " 0.25em,transparent 0.25em ),linear-gradient( to bottom,#ffffff00 0.25em,", " 0.25em,", " calc(100% - 0.25em),#ffffff00 calc(100% - 0.25em) ),radial-gradient( closest-corner at 0.25em calc(100% - 0.25em),", " 0.25em,#ffffff00 0.25em );background-clip:padding-box;border:none;", ":0.75em solid transparent;}@supports not selector(::-webkit-scrollbar-thumb){scrollbar-color:", " transparent;}"], function (_ref) {
    var theme = _ref.theme;
    return theme.interactive;
  }, function (_ref2) {
    var theme = _ref2.theme;
    return theme.interactive;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.interactive;
  }, function (_ref4) {
    var theme = _ref4.theme;
    return theme.interactive;
  }, padded ? 'border-right' : 'border-left', function (_ref5) {
    var theme = _ref5.theme;
    return theme.interactive;
  });
};

function useScrollbar(element) {
  var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref6$padded = _ref6.padded,
      padded = _ref6$padded === void 0 ? false : _ref6$padded;

  return React.useMemo( // NB: The css must be applied on an element's first render. WebKit will not re-apply overflow
  // properties until any transitions have ended, so waiting a frame for state would cause jank.
  function () {
    return hasOverflow(element) ? scrollbarCss(padded) : overflowCss;
  }, [element, padded]);

  function hasOverflow(element) {
    if (!element) return true;
    return element.scrollHeight > element.clientHeight;
  }
}

var _excluded = ["title", "open", "onExpand", "height", "children"];

var HeaderColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Expando__HeaderColumn",
  componentId: "sc-q9pumf-0"
})(["cursor:pointer;transition:gap 0.25s;"]);

var TitleRow = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "Expando__TitleRow",
  componentId: "sc-q9pumf-1"
})(["color:", ";cursor:pointer;font-size:14px;font-weight:500;line-height:20px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.secondary;
});

var TitleHeader = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "Expando__TitleHeader",
  componentId: "sc-q9pumf-2"
})(["align-items:center;display:flex;justify-content:center;"]);

var ExpandoColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Expando__ExpandoColumn",
  componentId: "sc-q9pumf-3"
})(["height:", "em;overflow:hidden;position:relative;transition:height 0.25s,padding 0.25s;:after{background:linear-gradient(transparent,", ");bottom:0;content:'';height:0.75em;pointer-events:none;position:absolute;width:calc(100% - 1em);}"], function (_ref2) {
  var height = _ref2.height,
      open = _ref2.open;
  return open ? height : 0;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.dialog;
});

var InnerColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Expando__InnerColumn",
  componentId: "sc-q9pumf-4"
})(["height:", "em;padding:0.5em 0;"], function (_ref4) {
  var height = _ref4.height;
  return height;
});

var _StyledInnerColumn = /*#__PURE__*/_styled__default["default"](InnerColumn).withConfig({
  displayName: "Expando___StyledInnerColumn",
  componentId: "sc-q9pumf-5"
})(["", ""], function (p) {
  return p.$_css;
});

/** A scrollable Expando with an absolute height. */
function Expando(_ref5) {
  var title = _ref5.title,
      open = _ref5.open,
      onExpand = _ref5.onExpand,
      height = _ref5.height,
      children = _ref5.children,
      rest = _objectWithoutProperties__default["default"](_ref5, _excluded);

  var _useState = React.useState(null),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      scrollingEl = _useState2[0],
      setScrollingEl = _useState2[1];

  var scrollbar = useScrollbar(scrollingEl);
  return /*#__PURE__*/React__default["default"].createElement(Column, rest, /*#__PURE__*/React__default["default"].createElement(HeaderColumn, {
    gap: open ? 0.5 : 0.75,
    onClick: onExpand
  }, /*#__PURE__*/React__default["default"].createElement(TitleRow, null, /*#__PURE__*/React__default["default"].createElement(TitleHeader, null, title), /*#__PURE__*/React__default["default"].createElement(material.IconButton, {
    color: "secondary"
  }, /*#__PURE__*/React__default["default"].createElement(Expando$1, {
    open: open
  })))), /*#__PURE__*/React__default["default"].createElement(ExpandoColumn, {
    open: open,
    height: height
  }, /*#__PURE__*/React__default["default"].createElement(_StyledInnerColumn, {
    flex: true,
    align: "stretch",
    height: height,
    ref: setScrollingEl,
    $_css: scrollbar
  }, children)));
}

function StatusHeader(_ref) {
  var Icon = _ref.icon,
      iconColor = _ref.iconColor,
      _ref$iconSize = _ref.iconSize,
      iconSize = _ref$iconSize === void 0 ? 4 : _ref$iconSize,
      children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    display: "grid",
    style: {
      flexGrow: 1,
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React__default["default"].createElement(LargeIcon, {
    icon: Icon,
    color: iconColor,
    size: iconSize
  }), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    gap: 10,
    display: "flex",
    style: {
      textAlign: 'center'
    }
  }, children)));
}

var ErrorHeader = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "ErrorDialog__ErrorHeader",
  componentId: "sc-1gwmcqp-0"
})(["transition:gap 0.25s;div:last-child{max-height:", "em;overflow-y:hidden;transition:max-height 0.25s;}"], function (_ref2) {
  var open = _ref2.open;
  return open ? 0 : 60 / 14;
});

function ErrorDialog(_ref3) {
  var header = _ref3.header,
      error = _ref3.error,
      action = _ref3.action,
      onClick = _ref3.onClick;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var onExpand = React.useCallback(function () {
    return setOpen(function (open) {
      return !open;
    });
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(Column, {
    flex: true,
    padded: true,
    gap: 0.75,
    align: "stretch",
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React__default["default"].createElement(StatusHeader, {
    icon: AlertTriangle,
    iconColor: "error",
    iconSize: open ? 3 : 4
  }, /*#__PURE__*/React__default["default"].createElement(ErrorHeader, {
    gap: open ? 0 : 0.75,
    open: open
  }, /*#__PURE__*/React__default["default"].createElement(Subhead1, null, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Something went wrong."
  })), /*#__PURE__*/React__default["default"].createElement(Body2, null, header))), /*#__PURE__*/React__default["default"].createElement(Column, {
    gap: open ? 0 : 0.75,
    style: {
      transition: 'gap 0.25s'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Expando, {
    title: /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Info, {
      style: {
        marginRight: '5px'
      },
      color: "secondary"
    }), /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Error details"
    })),
    open: open,
    onExpand: onExpand,
    height: 7.5
  }, /*#__PURE__*/React__default["default"].createElement(Body2, {
    userSelect: true
  }, error.name, error.message ? ": ".concat(error.message) : '')), /*#__PURE__*/React__default["default"].createElement(ActionButton$1, {
    color: "interactive",
    onClick: onClick
  }, action)));
}

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ErrorBoundary = /*#__PURE__*/function (_Component) {
  _inherits__default["default"](ErrorBoundary, _Component);

  var _super = _createSuper$2(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck__default["default"](this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      error: null
    };
    return _this;
  }

  _createClass__default["default"](ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      var _this$props$onError, _this$props;

      (_this$props$onError = (_this$props = this.props).onError) === null || _this$props$onError === void 0 ? void 0 : _this$props$onError.call(_this$props, error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.error) {
        return /*#__PURE__*/React__default["default"].createElement(Dialog, null, /*#__PURE__*/React__default["default"].createElement(ErrorDialog, {
          error: this.state.error,
          header: /*#__PURE__*/React__default["default"].createElement(Trans, {
            id: "Please refresh the page and try again."
          }),
          action: /*#__PURE__*/React__default["default"].createElement(Trans, {
            id: "Reload the page"
          }),
          onClick: function onClick() {
            return window.location.reload();
          }
        }));
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        error: error
      };
    }
  }]);

  return ErrorBoundary;
}(React.Component);

var SUPPORTED_LOCALES = [// order as they appear in the language dropdown
'en-US', 'af-ZA', 'ar-SA', 'ca-ES', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'es-ES', 'fi-FI', 'fr-FR', 'he-IL', 'hu-HU', 'id-ID', 'it-IT', 'ja-JP', 'ko-KR', 'nl-NL', 'no-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ro-RO', 'ru-RU', 'sr-SP', 'sv-SE', 'sw-TZ', 'tr-TR', 'uk-UA', 'vi-VN', 'zh-CN', 'zh-TW'];
var DEFAULT_LOCALE = 'en-US';

function useInitialAtomValues(props) {
  var brandingSettings = useInitialBrandingSettings(props); // TODO: Use a separate AtomProvider within Swap so that its configuration can be separated from general Widget configuration.

  var controller = useInitialController(props);
  return [brandingSettings, controller];
}

function useSyncWidgetEventHandlers(_ref) {
  var onConnectWalletClick = _ref.onConnectWalletClick,
      onSwitchChain = _ref.onSwitchChain;
  var setOnConnectWalletClick = utils.useUpdateAtom(onConnectWalletClickAtom);
  React.useEffect(function () {
    setOnConnectWalletClick(function () {
      return onConnectWalletClick;
    });
  }, [onConnectWalletClick, setOnConnectWalletClick]);
  var setOnSwitchChain = utils.useUpdateAtom(onSwitchChainAtom);
  React.useEffect(function () {
    setOnSwitchChain(function () {
      return onSwitchChain;
    });
  }, [onSwitchChain, setOnSwitchChain]);
}

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function parseChainId(chainId) {
  return Number.parseInt(chainId, 16);
}

var JsonRpcConnector = /*#__PURE__*/function (_Connector) {
  _inherits__default["default"](JsonRpcConnector, _Connector);

  var _super = _createSuper$1(JsonRpcConnector);

  function JsonRpcConnector(_ref) {
    var _this;

    var actions = _ref.actions,
        provider = _ref.provider,
        onError = _ref.onError;

    _classCallCheck__default["default"](this, JsonRpcConnector);

    _this = _super.call(this, actions, onError);
    _this.customProvider = provider.on('connect', function (_ref2) {
      var chainId = _ref2.chainId;

      _this.actions.update({
        chainId: parseChainId(chainId)
      });
    }).on('disconnect', function (error) {
      var _this$onError, _this2;

      (_this$onError = (_this2 = _this).onError) === null || _this$onError === void 0 ? void 0 : _this$onError.call(_this2, error);

      _this.actions.resetState();
    }).on('chainChanged', function (chainId) {
      _this.actions.update({
        chainId: parseChainId(chainId)
      });
    }).on('accountsChanged', function (accounts) {
      _this.actions.update({
        accounts: accounts
      });
    });
    return _this;
  }

  _createClass__default["default"](JsonRpcConnector, [{
    key: "activate",
    value: function () {
      var _activate = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
        var _yield$Promise$all, _yield$Promise$all2, chainId, accounts;

        return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.actions.startActivation();
                _context.prev = 1;
                _context.next = 4;
                return Promise.all([this.customProvider.getNetwork(), this.customProvider.listAccounts()]);

              case 4:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _slicedToArray__default["default"](_yield$Promise$all, 2);
                chainId = _yield$Promise$all2[0].chainId;
                accounts = _yield$Promise$all2[1];
                this.actions.update({
                  chainId: chainId,
                  accounts: accounts
                });
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                this.actions.resetState();
                throw _context.t0;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function activate() {
        return _activate.apply(this, arguments);
      }

      return activate;
    }()
  }]);

  return JsonRpcConnector;
}(types.Connector);

/**
 * Returns the input chain ID if chain is supported. If not, return undefined
 * @param chainId a chain ID, which will be returned if it is a supported chain ID
 */

function supportedChainId(chainId) {
  if (typeof chainId === 'number' && chainId in exports.SupportedChainId) {
    return chainId;
  }

  return undefined;
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var DEFAULT_CHAIN_ID = exports.SupportedChainId.MAINNET;
function Provider$1(_ref) {
  var _ref$defaultChainId = _ref.defaultChainId,
      chainId = _ref$defaultChainId === void 0 ? exports.SupportedChainId.MAINNET : _ref$defaultChainId,
      jsonRpcUrlMap = _ref.jsonRpcUrlMap,
      provider = _ref.provider,
      children = _ref.children;
  var defaultChainId = React.useMemo(function () {
    if (!supportedChainId(chainId)) {
      console.warn("Unsupported chainId: ".concat(chainId, ". Falling back to ").concat(DEFAULT_CHAIN_ID, " (").concat(exports.SupportedChainId[DEFAULT_CHAIN_ID], ")."));
      return DEFAULT_CHAIN_ID;
    }

    return chainId;
  }, [chainId]);
  var web3ReactConnectors = useWeb3ReactConnectors({
    provider: provider,
    jsonRpcUrlMap: jsonRpcUrlMap,
    defaultChainId: defaultChainId
  });
  var key = React.useRef(0);
  var prioritizedConnectors = React.useMemo(function () {
    // Re-key Web3ReactProvider before rendering new connectors, as it expects connectors to be
    // referentially static.
    key.current += 1;
    var prioritizedConnectors = [web3ReactConnectors.user, web3ReactConnectors.metaMask, web3ReactConnectors.walletConnect, web3ReactConnectors.walletConnectQR, web3ReactConnectors.network];
    return prioritizedConnectors.filter(function (connector) {
      return Boolean(connector);
    });
  }, [web3ReactConnectors]);
  var connectors = React.useMemo(function () {
    var _web3ReactConnectors$;

    return {
      user: (_web3ReactConnectors$ = web3ReactConnectors.user) === null || _web3ReactConnectors$ === void 0 ? void 0 : _web3ReactConnectors$[0],
      metaMask: web3ReactConnectors.metaMask[0],
      walletConnect: web3ReactConnectors.walletConnect[0],
      walletConnectQR: web3ReactConnectors.walletConnectQR[0],
      network: web3ReactConnectors.network[0]
    };
  }, [web3ReactConnectors]);
  var shouldEagerlyConnect = provider === undefined;
  React.useEffect(function () {
    // Ignore any errors during connection so they do not propagate to the widget.
    if (connectors.user) {
      connectors.user.activate().catch(function () {
        return undefined;
      });
      return;
    } else if (shouldEagerlyConnect) {
      var eagerConnectors = [connectors.metaMask, connectors.walletConnect];
      eagerConnectors.forEach(function (connector) {
        return connector.connectEagerly().catch(function () {
          return undefined;
        });
      });
    }

    connectors.network.activate().catch(function () {
      return undefined;
    });
  }, [connectors.metaMask, connectors.network, connectors.user, connectors.walletConnect, shouldEagerlyConnect]);
  return /*#__PURE__*/React__default["default"].createElement(core.Web3ReactProvider, {
    connectors: prioritizedConnectors,
    key: key.current
  }, /*#__PURE__*/React__default["default"].createElement(Provider$2, {
    jsonRpcMap: jsonRpcUrlMap
  }, /*#__PURE__*/React__default["default"].createElement(Provider$3, {
    connectors: connectors
  }, children)));
}

var onError = function onError(error) {
  return console.error(error);
};

function initializeWeb3ReactConnector(Constructor, options) {
  var _initializeConnector = core.initializeConnector(function (actions) {
    return new Constructor(_objectSpread$1({
      actions: actions,
      onError: onError
    }, options));
  }),
      _initializeConnector2 = _slicedToArray__default["default"](_initializeConnector, 2),
      connector = _initializeConnector2[0],
      hooks = _initializeConnector2[1];

  return [connector, hooks];
}

function useWeb3ReactConnectors(_ref2) {
  var defaultChainId = _ref2.defaultChainId,
      provider = _ref2.provider,
      jsonRpcUrlMap = _ref2.jsonRpcUrlMap;

  var _useMemo = React.useMemo(function () {
    return [toJsonRpcUrlMap(jsonRpcUrlMap), toJsonRpcConnectionMap(jsonRpcUrlMap)];
  }, [jsonRpcUrlMap]),
      _useMemo2 = _slicedToArray__default["default"](_useMemo, 2),
      urlMap = _useMemo2[0],
      connectionMap = _useMemo2[1];

  var user = React.useMemo(function () {
    if (!provider) return;

    if (providers.JsonRpcProvider.isProvider(provider)) {
      return initializeWeb3ReactConnector(JsonRpcConnector, {
        provider: provider
      });
    } else if (providers.JsonRpcProvider.isProvider(provider.provider)) {
      throw new Error('Eip1193Bridge is experimental: pass your ethers Provider directly');
    } else {
      return initializeWeb3ReactConnector(eip1193.EIP1193, {
        provider: provider
      });
    }
  }, [provider]);
  var metaMask = React.useMemo(function () {
    return initializeWeb3ReactConnector(metamask.MetaMask);
  }, []);
  var walletConnect = React.useMemo(function () {
    return initializeWeb3ReactConnector(WalletConnectPopup, {
      options: {
        rpc: urlMap
      },
      defaultChainId: defaultChainId
    });
  }, [defaultChainId, urlMap]);
  var walletConnectQR = React.useMemo(function () {
    return initializeWeb3ReactConnector(WalletConnectQR, {
      options: {
        rpc: urlMap
      },
      defaultChainId: defaultChainId
    });
  }, [defaultChainId, urlMap]);
  var network$1 = React.useMemo(function () {
    return initializeWeb3ReactConnector(network.Network, {
      urlMap: connectionMap,
      defaultChainId: defaultChainId
    });
  }, [connectionMap, defaultChainId]);
  return React.useMemo(function () {
    return {
      user: user,
      metaMask: metaMask,
      walletConnect: walletConnect,
      walletConnectQR: walletConnectQR,
      network: network$1
    };
  }, [metaMask, network$1, user, walletConnect, walletConnectQR]);
}

var i = function i(e) {
  return "string" == typeof e;
},
    s = function s(e) {
  return "function" == typeof e;
},
    u = new Map(),
    c = new Map();

function f(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
  return function (n) {
    if (i(n) && (n = new Date(n)), r) {
      var a = v(e, t),
          o = c.get(a);
      if (o) return o.format(n);
      var l = new Intl.DateTimeFormat(e, t);
      return c.set(a, l), l.format(n);
    }

    var s = new Intl.DateTimeFormat(e, t);
    return s.format(n);
  };
}

function h(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
  return function (n) {
    if (r) {
      var a = v(e, t),
          o = u.get(a);
      if (o) return o.format(n);
      var l = new Intl.NumberFormat(e, t);
      return u.set(a, l), l.format(n);
    }

    var i = new Intl.NumberFormat(e, t);
    return i.format(n);
  };
}

function v(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = Array.isArray(e) ? e.sort().join("-") : e;
  return "".concat(r, "-").concat(JSON.stringify(t));
}

var m = Object.freeze({
  __proto__: null,
  date: f,
  number: h
});

function g(e) {
  var t = e.locale,
      r = e.locales,
      n = e.values,
      a = e.formats,
      o = e.localeData,
      u = function (e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      plurals: void 0
    },
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    t = t || e;

    var a = r.plurals,
        o = function o(e) {
      return i(e) ? n[e] || {
        style: e
      } : e;
    },
        u = function u(e, r) {
      return function (n) {
        var a = s(r) ? r(n) : r,
            o = Array.isArray(a) ? a : [a],
            l = h(t)(e);
        return o.map(function (e) {
          return i(e) ? e.replace("#", l) : e;
        });
      };
    };

    return a || console.error("Plurals for locale ".concat(e, " aren't loaded. Use i18n.loadLocaleData method to load plurals for specific locale. Using other plural rule as a fallback.")), {
      plural: function plural(e, t) {
        var r = t.offset,
            n = void 0 === r ? 0 : r,
            o = _objectWithoutProperties__default["default"](t, ["offset"]),
            i = o[e] || o[null == a ? void 0 : a(e - n)] || o.other;
        return u(e - n, i);
      },
      selectordinal: function selectordinal(e, t) {
        var r = t.offset,
            n = void 0 === r ? 0 : r,
            o = _objectWithoutProperties__default["default"](t, ["offset"]),
            i = o[e] || o[null == a ? void 0 : a(e - n, !0)] || o.other;
        return u(e - n, i);
      },
      select: function select(e, t) {
        return t[e] || t.other;
      },
      number: function number(e, r) {
        return h(t, o(r))(e);
      },
      date: function date(e, r) {
        return f(t, o(r))(e);
      },
      undefined: function undefined$1(e) {
        return e;
      }
    };
  }(t, r, o, a);

  return function e(t, r, a) {
    var o = n[t],
        l = u[r](o, a),
        i = s(l) ? l(e) : l;
    return Array.isArray(i) ? i.join("") : i;
  };
}

function d(e, t, r, n) {
  return function (a) {
    var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        s = g({
      locale: t,
      locales: r,
      localeData: n,
      formats: l,
      values: a
    }),
        u = function e(t) {
      return Array.isArray(t) ? t.reduce(function (t, r) {
        if (i(r)) return t + r;
        var n = _slicedToArray__default["default"](r, 3),
            a = n[0],
            l = n[1],
            u = n[2],
            c = {};
        null == u || i(u) ? c = u : Object.keys(u).forEach(function (t) {
          c[t] = e(u[t]);
        });
        var f = s(a, l, c);
        return null == f ? t : t + f;
      }, "") : t;
    },
        c = u(e);

    return i(c) && /\\u[a-fA-F0-9]{4}/g.test(c) ? JSON.parse('"'.concat(c.trim(), '"')) : i(c) ? c.trim() : c;
  };
}

var p = function () {
  function r() {
    _classCallCheck__default["default"](this, r), this._events = {};
  }

  return _createClass__default["default"](r, [{
    key: "on",
    value: function value(e, t) {
      var r = this;
      return this._hasEvent(e) || (this._events[e] = []), this._events[e].push(t), function () {
        return r.removeListener(e, t);
      };
    }
  }, {
    key: "removeListener",
    value: function value(e, t) {
      if (this._hasEvent(e)) {
        var r = this._events[e].indexOf(t);

        ~r && this._events[e].splice(r, 1);
      }
    }
  }, {
    key: "emit",
    value: function value(e) {
      for (var t = this, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) {
        n[a - 1] = arguments[a];
      }

      this._hasEvent(e) && this._events[e].map(function (e) {
        return e.apply(t, n);
      });
    }
  }, {
    key: "_hasEvent",
    value: function value(e) {
      return Array.isArray(this._events[e]);
    }
  }]), r;
}();

function y(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var r,
        o = _getPrototypeOf__default["default"](e);

    if (t) {
      var l = _getPrototypeOf__default["default"](this).constructor;
      r = Reflect.construct(o, arguments, l);
    } else r = o.apply(this, arguments);

    return _possibleConstructorReturn__default["default"](this, r);
  };
}

var _ = function (n) {
  _inherits__default["default"](o, n);
  var a = y(o);

  function o(t) {
    var r;
    return _classCallCheck__default["default"](this, o), r = a.call(this), r._messages = {}, r._localeData = {}, null != t.missing && (r._missing = t.missing), null != t.messages && r.load(t.messages), null != t.localeData && r.loadLocaleData(t.localeData), null == t.locale && null == t.locales || r.activate(t.locale, t.locales), r;
  }

  return _createClass__default["default"](o, [{
    key: "_loadLocaleData",
    value: function value(e, t) {
      null == this._localeData[e] ? this._localeData[e] = t : Object.assign(this._localeData[e], t);
    }
  }, {
    key: "loadLocaleData",
    value: function value(e, t) {
      var r = this;
      null != t ? this._loadLocaleData(e, t) : Object.keys(e).forEach(function (t) {
        return r._loadLocaleData(t, e[t]);
      }), this.emit("change");
    }
  }, {
    key: "_load",
    value: function value(e, t) {
      null == this._messages[e] ? this._messages[e] = t : Object.assign(this._messages[e], t);
    }
  }, {
    key: "load",
    value: function value(e, t) {
      var r = this;
      null != t ? this._load(e, t) : Object.keys(e).forEach(function (t) {
        return r._load(t, e[t]);
      }), this.emit("change");
    }
  }, {
    key: "activate",
    value: function value(e, t) {
      this._locale = e, this._locales = t, this.emit("change");
    }
  }, {
    key: "_",
    value: function value(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = r.message,
          a = r.formats;
      i(e) || (t = e.values || t, n = e.message, e = e.id);
      var o = this.messages[e] || n || e,
          l = this._missing;
      return l && !this.messages[e] ? s(l) ? l(this.locale, e) : l : (this.messages[e] || this.emit("missing", {
        id: e,
        locale: this._locale
      }), i(o) && /\\u[a-fA-F0-9]{4}/g.test(o) ? JSON.parse('"'.concat(o, '"')) : i(o) ? o : d(o, this.locale, this.locales, this.localeData)(t, a));
    }
  }, {
    key: "date",
    value: function value(e, t) {
      return f(this.locales || this.locale, t)(e);
    }
  }, {
    key: "number",
    value: function value(e, t) {
      return h(this.locales || this.locale, t)(e);
    }
  }, {
    key: "locale",
    get: function get() {
      return this._locale;
    }
  }, {
    key: "locales",
    get: function get() {
      return this._locales;
    }
  }, {
    key: "messages",
    get: function get() {
      var e;
      return null !== (e = this._messages[this._locale]) && void 0 !== e ? e : {};
    }
  }, {
    key: "localeData",
    get: function get() {
      var e;
      return null !== (e = this._localeData[this._locale]) && void 0 !== e ? e : {};
    }
  }]), o;
}(p);

function b() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return new _(e);
}

var D = b();

/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

function peg$subclass(child, parent) {
  function ctor() {
    this.constructor = child;
  }

  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function (expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function literal(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },
    "class": function _class(expectation) {
      var escapedParts = "",
          i;

      for (i = 0; i < expectation.parts.length; i++) {
        escapedParts += expectation.parts[i] instanceof Array ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1]) : classEscape(expectation.parts[i]);
      }

      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },
    any: function any(expectation) {
      return "any character";
    },
    end: function end(expectation) {
      return "end of input";
    },
    other: function other(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }

  function classEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/\]/g, '\\]').replace(/\^/g, '\\^').replace(/-/g, '\\-').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i,
        j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }

      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},
      peg$startRuleFunctions = {
    start: peg$parsestart
  },
      peg$startRuleFunction = peg$parsestart,
      peg$c0 = "#",
      peg$c1 = peg$literalExpectation("#", false),
      peg$c2 = function peg$c2() {
    return inPlural[0];
  },
      peg$c3 = function peg$c3() {
    return {
      type: 'octothorpe'
    };
  },
      peg$c4 = function peg$c4(str) {
    return str.join('');
  },
      peg$c5 = "{",
      peg$c6 = peg$literalExpectation("{", false),
      peg$c7 = "}",
      peg$c8 = peg$literalExpectation("}", false),
      peg$c9 = function peg$c9(arg) {
    return {
      type: 'argument',
      arg: arg
    };
  },
      peg$c10 = ",",
      peg$c11 = peg$literalExpectation(",", false),
      peg$c12 = "select",
      peg$c13 = peg$literalExpectation("select", false),
      peg$c14 = function peg$c14(arg, m) {
    if (options.strict) {
      inPlural.unshift(false);
    }

    return m;
  },
      peg$c15 = function peg$c15(arg, cases) {
    if (options.strict) inPlural.shift();
    return {
      type: 'select',
      arg: arg,
      cases: cases
    };
  },
      peg$c16 = "plural",
      peg$c17 = peg$literalExpectation("plural", false),
      peg$c18 = "selectordinal",
      peg$c19 = peg$literalExpectation("selectordinal", false),
      peg$c20 = function peg$c20(arg, m) {
    inPlural.unshift(true);
    return m;
  },
      peg$c21 = function peg$c21(arg, type, offset, cases) {
    var ls = (type === 'selectordinal' ? options.ordinal : options.cardinal) || ['zero', 'one', 'two', 'few', 'many', 'other'];
    if (ls && ls.length) cases.forEach(function (c) {
      if (isNaN(c.key) && ls.indexOf(c.key) < 0) throw new Error('Invalid key `' + c.key + '` for argument `' + arg + '`.' + ' Valid ' + type + ' keys for this locale are `' + ls.join('`, `') + '`, and explicit keys like `=0`.');
    });
    inPlural.shift();
    return {
      type: type,
      arg: arg,
      offset: offset || 0,
      cases: cases
    };
  },
      peg$c22 = function peg$c22(arg, key, param) {
    return {
      type: 'function',
      arg: arg,
      key: key,
      param: param
    };
  },
      peg$c23 = peg$otherExpectation("identifier"),
      peg$c24 = /^[^\t-\r \x85\u200E\u200F\u2028\u2029!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,
      peg$c25 = peg$classExpectation([["\t", "\r"], " ", "\x85", "\u200E", "\u200F", "\u2028", "\u2029", ["!", "/"], [":", "@"], ["[", "^"], "`", ["{", "~"], ["\xA1", "\xA7"], "\xA9", "\xAB", "\xAC", "\xAE", "\xB0", "\xB1", "\xB6", "\xBB", "\xBF", "\xD7", "\xF7", ["\u2010", "\u2027"], ["\u2030", "\u203E"], ["\u2041", "\u2053"], ["\u2055", "\u205E"], ["\u2190", "\u245F"], ["\u2500", "\u2775"], ["\u2794", "\u2BFF"], ["\u2E00", "\u2E7F"], ["\u3001", "\u3003"], ["\u3008", "\u3020"], "\u3030", "\uFD3E", "\uFD3F", "\uFE45", "\uFE46"], true, false),
      peg$c26 = function peg$c26(key, tokens) {
    return {
      key: key,
      tokens: tokens
    };
  },
      peg$c27 = function peg$c27(tokens) {
    return tokens;
  },
      peg$c28 = peg$otherExpectation("plural offset"),
      peg$c29 = "offset",
      peg$c30 = peg$literalExpectation("offset", false),
      peg$c31 = ":",
      peg$c32 = peg$literalExpectation(":", false),
      peg$c33 = function peg$c33(d) {
    return d;
  },
      peg$c34 = "=",
      peg$c35 = peg$literalExpectation("=", false),
      peg$c36 = "number",
      peg$c37 = peg$literalExpectation("number", false),
      peg$c38 = "date",
      peg$c39 = peg$literalExpectation("date", false),
      peg$c40 = "time",
      peg$c41 = peg$literalExpectation("time", false),
      peg$c42 = "spellout",
      peg$c43 = peg$literalExpectation("spellout", false),
      peg$c44 = "ordinal",
      peg$c45 = peg$literalExpectation("ordinal", false),
      peg$c46 = "duration",
      peg$c47 = peg$literalExpectation("duration", false),
      peg$c48 = function peg$c48(key) {
    if (options.strict || /^\d/.test(key)) return false;

    switch (key.toLowerCase()) {
      case 'select':
      case 'plural':
      case 'selectordinal':
        return false;

      default:
        return true;
    }
  },
      peg$c49 = function peg$c49(key) {
    return key;
  },
      peg$c50 = function peg$c50(tokens) {
    return !options.strict;
  },
      peg$c51 = function peg$c51(tokens) {
    return {
      tokens: tokens
    };
  },
      peg$c52 = function peg$c52(parts) {
    return {
      tokens: [parts.join('')]
    };
  },
      peg$c53 = peg$otherExpectation("a valid (strict) function parameter"),
      peg$c54 = /^[^'{}]/,
      peg$c55 = peg$classExpectation(["'", "{", "}"], true, false),
      peg$c56 = function peg$c56(p) {
    return p.join('');
  },
      peg$c57 = "'",
      peg$c58 = peg$literalExpectation("'", false),
      peg$c59 = function peg$c59(quoted) {
    return quoted;
  },
      peg$c60 = function peg$c60(p) {
    return '{' + p.join('') + '}';
  },
      peg$c61 = peg$otherExpectation("doubled apostrophe"),
      peg$c62 = "''",
      peg$c63 = peg$literalExpectation("''", false),
      peg$c64 = function peg$c64() {
    return "'";
  },
      peg$c65 = /^[^']/,
      peg$c66 = peg$classExpectation(["'"], true, false),
      peg$c67 = "'{",
      peg$c68 = peg$literalExpectation("'{", false),
      peg$c69 = function peg$c69(str) {
    return "{" + str.join('');
  },
      peg$c70 = "'}",
      peg$c71 = peg$literalExpectation("'}", false),
      peg$c72 = function peg$c72(str) {
    return "}" + str.join('');
  },
      peg$c73 = peg$otherExpectation("escaped string"),
      peg$c74 = "'#",
      peg$c75 = peg$literalExpectation("'#", false),
      peg$c76 = function peg$c76(str) {
    return "#" + str.join('');
  },
      peg$c77 = function peg$c77(quotedOcto) {
    return quotedOcto[0];
  },
      peg$c78 = peg$otherExpectation("plain char"),
      peg$c79 = /^[^{}#\0-\x08\x0E-\x1F\x7F]/,
      peg$c80 = peg$classExpectation(["{", "}", "#", ["\0", "\b"], ["\x0E", "\x1F"], "\x7F"], true, false),
      peg$c81 = function peg$c81(octo) {
    return !inPlural[0];
  },
      peg$c82 = function peg$c82(octo) {
    return octo;
  },
      peg$c83 = peg$otherExpectation("integer"),
      peg$c84 = /^[0-9]/,
      peg$c85 = peg$classExpectation([["0", "9"]], false, false),
      peg$c86 = peg$otherExpectation("white space"),
      peg$c87 = /^[\t-\r \x85\u200E\u200F\u2028\u2029]/,
      peg$c88 = peg$classExpectation([["\t", "\r"], " ", "\x85", "\u200E", "\u200F", "\u2028", "\u2029"], false, false),
      peg$currPos = 0,
      peg$posDetailsCache = [{
    line: 1,
    column: 1
  }],
      peg$maxFailPos = 0,
      peg$maxFailExpected = [],
      peg$silentFails = 0,
      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function peg$literalExpectation(text, ignoreCase) {
    return {
      type: "literal",
      text: text,
      ignoreCase: ignoreCase
    };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return {
      type: "class",
      parts: parts,
      inverted: inverted,
      ignoreCase: ignoreCase
    };
  }

  function peg$endExpectation() {
    return {
      type: "end"
    };
  }

  function peg$otherExpectation(description) {
    return {
      type: "other",
      description: description
    };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos],
        p;

    if (details) {
      return details;
    } else {
      p = pos - 1;

      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails = peg$computePosDetails(endPos);
    return {
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
  }

  function peg$parsestart() {
    var s0, s1;
    s0 = [];
    s1 = peg$parsetoken();

    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parsetoken();
    }

    return s0;
  }

  function peg$parsetoken() {
    var s0, s1, s2;
    s0 = peg$parseargument();

    if (s0 === peg$FAILED) {
      s0 = peg$parseselect();

      if (s0 === peg$FAILED) {
        s0 = peg$parseplural();

        if (s0 === peg$FAILED) {
          s0 = peg$parsefunction();

          if (s0 === peg$FAILED) {
            s0 = peg$currPos;

            if (input.charCodeAt(peg$currPos) === 35) {
              s1 = peg$c0;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c1);
              }
            }

            if (s1 !== peg$FAILED) {
              s2 = peg$c2();

              if (s2) {
                s2 = void 0;
              } else {
                s2 = peg$FAILED;
              }

              if (s2 !== peg$FAILED) {
                s1 = peg$c3();
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }

            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = [];
              s2 = peg$parsechar();

              if (s2 !== peg$FAILED) {
                while (s2 !== peg$FAILED) {
                  s1.push(s2);
                  s2 = peg$parsechar();
                }
              } else {
                s1 = peg$FAILED;
              }

              if (s1 !== peg$FAILED) {
                s1 = peg$c4(s1);
              }

              s0 = s1;
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseargument() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c5;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c6);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();

      if (s2 !== peg$FAILED) {
        s3 = peg$parseid();

        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();

          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 125) {
              s5 = peg$c7;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c8);
              }
            }

            if (s5 !== peg$FAILED) {
              s1 = peg$c9(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseselect() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c5;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c6);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();

      if (s2 !== peg$FAILED) {
        s3 = peg$parseid();

        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();

          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c10;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c11);
              }
            }

            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();

              if (s6 !== peg$FAILED) {
                s7 = peg$currPos;

                if (input.substr(peg$currPos, 6) === peg$c12) {
                  s8 = peg$c12;
                  peg$currPos += 6;
                } else {
                  s8 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c13);
                  }
                }

                if (s8 !== peg$FAILED) {
                  s8 = peg$c14(s3, s8);
                }

                s7 = s8;

                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();

                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s9 = peg$c10;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c11);
                      }
                    }

                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse_();

                      if (s10 !== peg$FAILED) {
                        s11 = [];
                        s12 = peg$parseselectCase();

                        if (s12 !== peg$FAILED) {
                          while (s12 !== peg$FAILED) {
                            s11.push(s12);
                            s12 = peg$parseselectCase();
                          }
                        } else {
                          s11 = peg$FAILED;
                        }

                        if (s11 !== peg$FAILED) {
                          s12 = peg$parse_();

                          if (s12 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 125) {
                              s13 = peg$c7;
                              peg$currPos++;
                            } else {
                              s13 = peg$FAILED;

                              if (peg$silentFails === 0) {
                                peg$fail(peg$c8);
                              }
                            }

                            if (s13 !== peg$FAILED) {
                              s1 = peg$c15(s3, s11);
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseplural() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c5;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c6);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();

      if (s2 !== peg$FAILED) {
        s3 = peg$parseid();

        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();

          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c10;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c11);
              }
            }

            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();

              if (s6 !== peg$FAILED) {
                s7 = peg$currPos;

                if (input.substr(peg$currPos, 6) === peg$c16) {
                  s8 = peg$c16;
                  peg$currPos += 6;
                } else {
                  s8 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c17);
                  }
                }

                if (s8 === peg$FAILED) {
                  if (input.substr(peg$currPos, 13) === peg$c18) {
                    s8 = peg$c18;
                    peg$currPos += 13;
                  } else {
                    s8 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c19);
                    }
                  }
                }

                if (s8 !== peg$FAILED) {
                  s8 = peg$c20(s3, s8);
                }

                s7 = s8;

                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();

                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s9 = peg$c10;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c11);
                      }
                    }

                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse_();

                      if (s10 !== peg$FAILED) {
                        s11 = peg$parseoffset();

                        if (s11 === peg$FAILED) {
                          s11 = null;
                        }

                        if (s11 !== peg$FAILED) {
                          s12 = [];
                          s13 = peg$parsepluralCase();

                          if (s13 !== peg$FAILED) {
                            while (s13 !== peg$FAILED) {
                              s12.push(s13);
                              s13 = peg$parsepluralCase();
                            }
                          } else {
                            s12 = peg$FAILED;
                          }

                          if (s12 !== peg$FAILED) {
                            s13 = peg$parse_();

                            if (s13 !== peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 125) {
                                s14 = peg$c7;
                                peg$currPos++;
                              } else {
                                s14 = peg$FAILED;

                                if (peg$silentFails === 0) {
                                  peg$fail(peg$c8);
                                }
                              }

                              if (s14 !== peg$FAILED) {
                                s1 = peg$c21(s3, s7, s11, s12);
                                s0 = s1;
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsefunction() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c5;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c6);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();

      if (s2 !== peg$FAILED) {
        s3 = peg$parseid();

        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();

          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c10;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c11);
              }
            }

            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();

              if (s6 !== peg$FAILED) {
                s7 = peg$parsefunctionKey();

                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();

                  if (s8 !== peg$FAILED) {
                    s9 = peg$parsefunctionParam();

                    if (s9 === peg$FAILED) {
                      s9 = null;
                    }

                    if (s9 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 125) {
                        s10 = peg$c7;
                        peg$currPos++;
                      } else {
                        s10 = peg$FAILED;

                        if (peg$silentFails === 0) {
                          peg$fail(peg$c8);
                        }
                      }

                      if (s10 !== peg$FAILED) {
                        s1 = peg$c22(s3, s7, s9);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseid() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];

    if (peg$c24.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c25);
      }
    }

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);

        if (peg$c24.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c25);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c23);
      }
    }

    return s0;
  }

  function peg$parseselectCase() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$parse_();

    if (s1 !== peg$FAILED) {
      s2 = peg$parseid();

      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();

        if (s3 !== peg$FAILED) {
          s4 = peg$parsecaseTokens();

          if (s4 !== peg$FAILED) {
            s1 = peg$c26(s2, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsepluralCase() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$parse_();

    if (s1 !== peg$FAILED) {
      s2 = peg$parsepluralKey();

      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();

        if (s3 !== peg$FAILED) {
          s4 = peg$parsecaseTokens();

          if (s4 !== peg$FAILED) {
            s1 = peg$c26(s2, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecaseTokens() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c5;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c6);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = peg$parse_();

      if (s3 !== peg$FAILED) {
        s4 = peg$currPos;
        peg$silentFails++;

        if (input.charCodeAt(peg$currPos) === 123) {
          s5 = peg$c5;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c6);
          }
        }

        peg$silentFails--;

        if (s5 !== peg$FAILED) {
          peg$currPos = s4;
          s4 = void 0;
        } else {
          s4 = peg$FAILED;
        }

        if (s4 !== peg$FAILED) {
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsetoken();

        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsetoken();
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();

          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 125) {
              s5 = peg$c7;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c8);
              }
            }

            if (s5 !== peg$FAILED) {
              s1 = peg$c27(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseoffset() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parse_();

    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 6) === peg$c29) {
        s2 = peg$c29;
        peg$currPos += 6;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c30);
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();

        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s4 = peg$c31;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c32);
            }
          }

          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();

            if (s5 !== peg$FAILED) {
              s6 = peg$parsedigits();

              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();

                if (s7 !== peg$FAILED) {
                  s1 = peg$c33(s6);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c28);
      }
    }

    return s0;
  }

  function peg$parsepluralKey() {
    var s0, s1, s2;
    s0 = peg$parseid();

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 61) {
        s1 = peg$c34;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c35);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parsedigits();

        if (s2 !== peg$FAILED) {
          s1 = peg$c33(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsefunctionKey() {
    var s0, s1, s2, s3, s4, s5;

    if (input.substr(peg$currPos, 6) === peg$c36) {
      s0 = peg$c36;
      peg$currPos += 6;
    } else {
      s0 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c37);
      }
    }

    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 4) === peg$c38) {
        s0 = peg$c38;
        peg$currPos += 4;
      } else {
        s0 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c39);
        }
      }

      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c40) {
          s0 = peg$c40;
          peg$currPos += 4;
        } else {
          s0 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c41);
          }
        }

        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 8) === peg$c42) {
            s0 = peg$c42;
            peg$currPos += 8;
          } else {
            s0 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c43);
            }
          }

          if (s0 === peg$FAILED) {
            if (input.substr(peg$currPos, 7) === peg$c44) {
              s0 = peg$c44;
              peg$currPos += 7;
            } else {
              s0 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c45);
              }
            }

            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 8) === peg$c46) {
                s0 = peg$c46;
                peg$currPos += 8;
              } else {
                s0 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c47);
                }
              }

              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$currPos;
                peg$silentFails++;

                if (input.substr(peg$currPos, 6) === peg$c12) {
                  s2 = peg$c12;
                  peg$currPos += 6;
                } else {
                  s2 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c13);
                  }
                }

                peg$silentFails--;

                if (s2 === peg$FAILED) {
                  s1 = void 0;
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }

                if (s1 !== peg$FAILED) {
                  s2 = peg$currPos;
                  peg$silentFails++;

                  if (input.substr(peg$currPos, 6) === peg$c16) {
                    s3 = peg$c16;
                    peg$currPos += 6;
                  } else {
                    s3 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c17);
                    }
                  }

                  peg$silentFails--;

                  if (s3 === peg$FAILED) {
                    s2 = void 0;
                  } else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                  }

                  if (s2 !== peg$FAILED) {
                    s3 = peg$currPos;
                    peg$silentFails++;

                    if (input.substr(peg$currPos, 13) === peg$c18) {
                      s4 = peg$c18;
                      peg$currPos += 13;
                    } else {
                      s4 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c19);
                      }
                    }

                    peg$silentFails--;

                    if (s4 === peg$FAILED) {
                      s3 = void 0;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }

                    if (s3 !== peg$FAILED) {
                      s4 = peg$parseid();

                      if (s4 !== peg$FAILED) {
                        s5 = peg$c48(s4);

                        if (s5) {
                          s5 = void 0;
                        } else {
                          s5 = peg$FAILED;
                        }

                        if (s5 !== peg$FAILED) {
                          s1 = peg$c49(s4);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsefunctionParam() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$parse_();

    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 44) {
        s2 = peg$c10;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c11);
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsetoken();

        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsetoken();
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$c50();

          if (s4) {
            s4 = void 0;
          } else {
            s4 = peg$FAILED;
          }

          if (s4 !== peg$FAILED) {
            s1 = peg$c51(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parse_();

      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c10;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c11);
          }
        }

        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsestrictFunctionParamPart();

          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsestrictFunctionParamPart();
          }

          if (s3 !== peg$FAILED) {
            s1 = peg$c52(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsestrictFunctionParamPart() {
    var s0, s1, s2, s3;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];

    if (peg$c54.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c55);
      }
    }

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);

        if (peg$c54.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c55);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s1 = peg$c56(s1);
    }

    s0 = s1;

    if (s0 === peg$FAILED) {
      s0 = peg$parsedoubleapos();

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 39) {
          s1 = peg$c57;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c58);
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parseinapos();

          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 39) {
              s3 = peg$c57;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c58);
              }
            }

            if (s3 !== peg$FAILED) {
              s1 = peg$c59(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          s0 = peg$currPos;

          if (input.charCodeAt(peg$currPos) === 123) {
            s1 = peg$c5;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c6);
            }
          }

          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parsestrictFunctionParamPart();

            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parsestrictFunctionParamPart();
            }

            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 125) {
                s3 = peg$c7;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c8);
                }
              }

              if (s3 !== peg$FAILED) {
                s1 = peg$c60(s2);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c53);
      }
    }

    return s0;
  }

  function peg$parsedoubleapos() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 2) === peg$c62) {
      s1 = peg$c62;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c63);
      }
    }

    if (s1 !== peg$FAILED) {
      s1 = peg$c64();
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c61);
      }
    }

    return s0;
  }

  function peg$parseinapos() {
    var s0, s1, s2;
    s0 = peg$parsedoubleapos();

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];

      if (peg$c65.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c66);
        }
      }

      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);

          if (peg$c65.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c66);
            }
          }
        }
      } else {
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        s1 = peg$c4(s1);
      }

      s0 = s1;
    }

    return s0;
  }

  function peg$parsequotedCurly() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 2) === peg$c67) {
      s1 = peg$c67;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c68);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseinapos();

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseinapos();
      }

      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 39) {
          s3 = peg$c57;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c58);
          }
        }

        if (s3 !== peg$FAILED) {
          s1 = peg$c69(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;

      if (input.substr(peg$currPos, 2) === peg$c70) {
        s1 = peg$c70;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c71);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseinapos();

        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseinapos();
        }

        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s3 = peg$c57;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c58);
            }
          }

          if (s3 !== peg$FAILED) {
            s1 = peg$c72(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsequoted() {
    var s0, s1, s2, s3, s4, s5;
    peg$silentFails++;
    s0 = peg$parsequotedCurly();

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$currPos;

      if (input.substr(peg$currPos, 2) === peg$c74) {
        s3 = peg$c74;
        peg$currPos += 2;
      } else {
        s3 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c75);
        }
      }

      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parseinapos();

        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parseinapos();
        }

        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s5 = peg$c57;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c58);
            }
          }

          if (s5 !== peg$FAILED) {
            s3 = peg$c76(s4);
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$c2();

        if (s3) {
          s3 = void 0;
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        s1 = peg$c77(s1);
      }

      s0 = s1;

      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 39) {
          s0 = peg$c57;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c58);
          }
        }
      }
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c73);
      }
    }

    return s0;
  }

  function peg$parseplainChar() {
    var s0;
    peg$silentFails++;

    if (peg$c79.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c80);
      }
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {

      if (peg$silentFails === 0) {
        peg$fail(peg$c78);
      }
    }

    return s0;
  }

  function peg$parsechar() {
    var s0, s1, s2;
    s0 = peg$parsedoubleapos();

    if (s0 === peg$FAILED) {
      s0 = peg$parsequoted();

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 35) {
          s1 = peg$c0;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c1);
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$c81();

          if (s2) {
            s2 = void 0;
          } else {
            s2 = peg$FAILED;
          }

          if (s2 !== peg$FAILED) {
            s1 = peg$c82(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          s0 = peg$parseplainChar();
        }
      }
    }

    return s0;
  }

  function peg$parsedigits() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];

    if (peg$c84.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c85);
      }
    }

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);

        if (peg$c84.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c85);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c83);
      }
    }

    return s0;
  }

  function peg$parse_() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];

    if (peg$c87.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c88);
      }
    }

    while (s2 !== peg$FAILED) {
      s1.push(s2);

      if (peg$c87.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c88);
        }
      }
    }

    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c86);
      }
    }

    return s0;
  }

  var inPlural = [false];
  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
  }
}

var parser = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};

var isString = function isString(s) {
  return typeof s === "string";
};

var isFunction = function isFunction(f) {
  return typeof f === "function";
};
/** Memoized cache */


var numberFormats = new Map();
var dateFormats = new Map();

function date(locales) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var memoize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return function (value) {
    if (isString(value)) value = new Date(value);

    if (memoize) {
      var key = cacheKey(locales, format);
      var cachedFormatter = dateFormats.get(key);

      if (cachedFormatter) {
        return cachedFormatter.format(value);
      }

      var _formatter = new Intl.DateTimeFormat(locales, format);

      dateFormats.set(key, _formatter);
      return _formatter.format(value);
    }

    var formatter = new Intl.DateTimeFormat(locales, format);
    return formatter.format(value);
  };
}

function number(locales) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var memoize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return function (value) {
    if (memoize) {
      var key = cacheKey(locales, format);
      var cachedFormatter = numberFormats.get(key);

      if (cachedFormatter) {
        return cachedFormatter.format(value);
      }

      var _formatter2 = new Intl.NumberFormat(locales, format);

      numberFormats.set(key, _formatter2);
      return _formatter2.format(value);
    }

    var formatter = new Intl.NumberFormat(locales, format);
    return formatter.format(value);
  };
}
/** Memoize helpers */


function cacheKey(locales) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var localeKey = Array.isArray(locales) ? locales.sort().join('-') : locales;
  return "".concat(localeKey, "-").concat(JSON.stringify(options));
}

var formats = /*#__PURE__*/Object.freeze({
  __proto__: null,
  date: date,
  number: number
});

var defaultFormats = function defaultFormats(locale, locales) {
  var localeData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    plurals: undefined
  };
  var formats = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  locales = locales || locale;
  var plurals = localeData.plurals;

  var style = function style(format) {
    return isString(format) ? formats[format] || {
      style: format
    } : format;
  };

  var replaceOctothorpe = function replaceOctothorpe(value, message) {
    return function (ctx) {
      var msg = isFunction(message) ? message(ctx) : message;
      var norm = Array.isArray(msg) ? msg : [msg];
      var valueStr = number(locales)(value);
      return norm.map(function (m) {
        return isString(m) ? m.replace("#", valueStr) : m;
      });
    };
  };

  if (!plurals) {
    console.error("Plurals for locale ".concat(locale, " aren't loaded. Use i18n.loadLocaleData method to load plurals for specific locale. Using other plural rule as a fallback."));
  }

  return {
    plural: function plural(value, _ref) {
      var _ref$offset = _ref.offset,
          offset = _ref$offset === void 0 ? 0 : _ref$offset,
          rules = _objectWithoutProperties__default["default"](_ref, ["offset"]);

      var message = rules[value] || rules[plurals === null || plurals === void 0 ? void 0 : plurals(value - offset)] || rules.other;
      return replaceOctothorpe(value - offset, message);
    },
    selectordinal: function selectordinal(value, _ref2) {
      var _ref2$offset = _ref2.offset,
          offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
          rules = _objectWithoutProperties__default["default"](_ref2, ["offset"]);

      var message = rules[value] || rules[plurals === null || plurals === void 0 ? void 0 : plurals(value - offset, true)] || rules.other;
      return replaceOctothorpe(value - offset, message);
    },
    select: function select(value, rules) {
      return rules[value] || rules.other;
    },
    number: function number$1(value, format) {
      return number(locales, style(format))(value);
    },
    date: function date$1(value, format) {
      return date(locales, style(format))(value);
    },
    undefined: function undefined$1(value) {
      return value;
    }
  };
}; // Params -> CTX

/**
 * Creates a context object, which formats ICU MessageFormat arguments based on
 * argument type.
 *
 * @param locale     - Locale of message
 * @param locales      - Locales to be used when formatting the numbers or dates
 * @param values       - Parameters for variable interpolation
 * @param localeData - Locale data (e.g: plurals)
 * @param formats - Custom format styles
 * @returns {function(string, string, any)}
 */


function context(_ref3) {
  var locale = _ref3.locale,
      locales = _ref3.locales,
      values = _ref3.values,
      formats = _ref3.formats,
      localeData = _ref3.localeData;
  var formatters = defaultFormats(locale, locales, localeData, formats);

  var ctx = function ctx(name, type, format) {
    var value = values[name];
    var formatted = formatters[type](value, format);
    var message = isFunction(formatted) ? formatted(ctx) : formatted;
    return Array.isArray(message) ? message.join("") : message;
  };

  return ctx;
}

function interpolate(translation, locale, locales, localeData) {
  return function (values) {
    var formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var ctx = context({
      locale: locale,
      locales: locales,
      localeData: localeData,
      formats: formats,
      values: values
    });

    var formatMessage = function formatMessage(message) {
      if (!Array.isArray(message)) return message;
      return message.reduce(function (message, token) {
        if (isString(token)) return message + token;

        var _token = _slicedToArray__default["default"](token, 3),
            name = _token[0],
            type = _token[1],
            format = _token[2];

        var interpolatedFormat = {};

        if (format != null && !isString(format)) {
          Object.keys(format).forEach(function (key) {
            interpolatedFormat[key] = formatMessage(format[key]);
          });
        } else {
          interpolatedFormat = format;
        }

        var value = ctx(name, type, interpolatedFormat);
        if (value == null) return message;
        return message + value;
      }, "");
    };

    var result = formatMessage(translation);
    if (isString(result) && /\\u[a-fA-F0-9]{4}/g.test(result)) return JSON.parse("\"".concat(result.trim(), "\""));
    if (isString(result)) return result.trim();
    return result;
  };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty__default["default"](target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function processTokens(tokens) {
  if (!tokens.filter(function (token) {
    return !isString(token);
  }).length) {
    return tokens.join("");
  }

  return tokens.map(function (token) {
    if (isString(token)) {
      return token; // # in plural case
    } else if (token.type === "octothorpe") {
      return "#"; // simple argument
    } else if (token.type === "argument") {
      return [token.arg]; // argument with custom format (date, number)
    } else if (token.type === "function") {
      var _param = token.param && token.param.tokens[0];

      var param = typeof _param === "string" ? _param.trim() : _param;
      return [token.arg, token.key, param].filter(Boolean);
    }

    var offset = token.offset ? parseInt(token.offset) : undefined; // complex argument with cases

    var formatProps = {};
    token.cases.forEach(function (item) {
      formatProps[item.key] = processTokens(item.tokens);
    });
    return [token.arg, token.type, _objectSpread({
      offset: offset
    }, formatProps)];
  });
} // Message -> (Params -> String)


function compile(message) {
  try {
    return processTokens(parser.parse(message));
  } catch (e) {
    console.error("Message cannot be parsed due to syntax errors: ".concat(message));
    return message;
  }
}

var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck__default["default"](this, EventEmitter);

    this._events = {};
  }

  _createClass__default["default"](EventEmitter, [{
    key: "on",
    value: function on(event, listener) {
      var _this = this;

      if (!this._hasEvent(event)) this._events[event] = [];

      this._events[event].push(listener);

      return function () {
        return _this.removeListener(event, listener);
      };
    }
  }, {
    key: "removeListener",
    value: function removeListener(event, listener) {
      if (!this._hasEvent(event)) return;

      var index = this._events[event].indexOf(listener);

      if (~index) this._events[event].splice(index, 1);
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var _this2 = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (!this._hasEvent(event)) return;

      this._events[event].map(function (listener) {
        return listener.apply(_this2, args);
      });
    }
  }, {
    key: "_hasEvent",
    value: function _hasEvent(event) {
      return Array.isArray(this._events[event]);
    }
  }]);

  return EventEmitter;
}();

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf__default["default"](Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf__default["default"](this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn__default["default"](this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var I18n = /*#__PURE__*/function (_EventEmitter) {
  _inherits__default["default"](I18n, _EventEmitter);

  var _super = _createSuper(I18n);

  function I18n(params) {
    var _this;

    _classCallCheck__default["default"](this, I18n);

    _this = _super.call(this);
    _this._messages = {};
    _this._localeData = {};
    if (params.missing != null) _this._missing = params.missing;
    if (params.messages != null) _this.load(params.messages);
    if (params.localeData != null) _this.loadLocaleData(params.localeData);

    if (params.locale != null || params.locales != null) {
      _this.activate(params.locale, params.locales);
    }

    return _this;
  }

  _createClass__default["default"](I18n, [{
    key: "_loadLocaleData",
    value: function _loadLocaleData(locale, localeData) {
      if (this._localeData[locale] == null) {
        this._localeData[locale] = localeData;
      } else {
        Object.assign(this._localeData[locale], localeData);
      }
    }
  }, {
    key: "loadLocaleData",
    value: function loadLocaleData(localeOrAllData, localeData) {
      var _this2 = this;

      if (localeData != null) {
        // loadLocaleData('en', enLocaleData)
        // Loading locale data for a single locale.
        this._loadLocaleData(localeOrAllData, localeData);
      } else {
        // loadLocaleData(allLocaleData)
        // Loading all locale data at once.
        Object.keys(localeOrAllData).forEach(function (locale) {
          return _this2._loadLocaleData(locale, localeOrAllData[locale]);
        });
      }

      this.emit("change");
    }
  }, {
    key: "_load",
    value: function _load(locale, messages) {
      if (this._messages[locale] == null) {
        this._messages[locale] = messages;
      } else {
        Object.assign(this._messages[locale], messages);
      }
    }
  }, {
    key: "load",
    value: function load(localeOrMessages, messages) {
      var _this3 = this;

      if (messages != null) {
        // load('en', catalog)
        // Loading a catalog for a single locale.
        this._load(localeOrMessages, messages);
      } else {
        // load(catalogs)
        // Loading several locales at once.
        Object.keys(localeOrMessages).forEach(function (locale) {
          return _this3._load(locale, localeOrMessages[locale]);
        });
      }

      this.emit("change");
    }
  }, {
    key: "activate",
    value: function activate(locale, locales) {
      {
        if (!this._messages[locale]) {
          console.warn("Messages for locale \"".concat(locale, "\" not loaded."));
        }

        if (!this._localeData[locale]) {
          console.warn("Locale data for locale \"".concat(locale, "\" not loaded. Plurals won't work correctly."));
        }
      }
      this._locale = locale;
      this._locales = locales;
      this.emit("change");
    } // method for translation and formatting

  }, {
    key: "_",
    value: function _(id) {
      var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          message = _ref.message,
          formats = _ref.formats;

      if (!isString(id)) {
        values = id.values || values;
        message = id.message;
        id = id.id;
      }

      var translation = this.messages[id] || message || id; // replace missing messages with custom message for debugging

      var missing = this._missing;

      if (missing && !this.messages[id]) {
        return isFunction(missing) ? missing(this.locale, id) : missing;
      }

      if (!this.messages[id]) {
        this.emit("missing", {
          id: id,
          locale: this._locale
        });
      }

      {
        translation = isString(translation) ? compile(translation) : translation;
      } // hack for parsing unicode values inside a string to get parsed in react native environments

      if (isString(translation) && /\\u[a-fA-F0-9]{4}/g.test(translation)) return JSON.parse("\"".concat(translation, "\""));
      if (isString(translation)) return translation;
      return interpolate(translation, this.locale, this.locales, this.localeData)(values, formats);
    }
  }, {
    key: "date",
    value: function date$1(value, format) {
      return date(this.locales || this.locale, format)(value);
    }
  }, {
    key: "number",
    value: function number$1(value, format) {
      return number(this.locales || this.locale, format)(value);
    }
  }, {
    key: "locale",
    get: function get() {
      return this._locale;
    }
  }, {
    key: "locales",
    get: function get() {
      return this._locales;
    }
  }, {
    key: "messages",
    get: function get() {
      var _this$_messages$this$;

      return (_this$_messages$this$ = this._messages[this._locale]) !== null && _this$_messages$this$ !== void 0 ? _this$_messages$this$ : {};
    }
  }, {
    key: "localeData",
    get: function get() {
      var _this$_localeData$thi;

      return (_this$_localeData$thi = this._localeData[this._locale]) !== null && _this$_localeData$thi !== void 0 ? _this$_localeData$thi : {};
    }
  }]);

  return I18n;
}(EventEmitter);

function setupI18n() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new I18n(params);
}

var i18n$1 = setupI18n();

var i18n = process.env.NODE_ENV === 'production' ? D : i18n$1;
process.env.NODE_ENV === 'production' ? b : setupI18n;
process.env.NODE_ENV === 'production' ? m : formats;
process.env.NODE_ENV === 'production' ? _ : I18n;

var _plurals = {
  'af-ZA': plurals.af,
  'ar-SA': plurals.ar,
  'ca-ES': plurals.ca,
  'cs-CZ': plurals.cs,
  'da-DK': plurals.da,
  'de-DE': plurals.de,
  'el-GR': plurals.el,
  'en-US': plurals.en,
  'es-ES': plurals.es,
  'fi-FI': plurals.fi,
  'fr-FR': plurals.fr,
  'he-IL': plurals.he,
  'hu-HU': plurals.hu,
  'id-ID': plurals.id,
  'it-IT': plurals.it,
  'ja-JP': plurals.ja,
  'ko-KR': plurals.ko,
  'nl-NL': plurals.nl,
  'no-NO': plurals.no,
  'pl-PL': plurals.pl,
  'pt-BR': plurals.pt,
  'pt-PT': plurals.pt,
  'ro-RO': plurals.ro,
  'ru-RU': plurals.ru,
  'sr-SP': plurals.sr,
  'sv-SE': plurals.sv,
  'sw-TZ': plurals.sw,
  'tr-TR': plurals.tr,
  'uk-UA': plurals.uk,
  'vi-VN': plurals.vi,
  'zh-CN': plurals.zh,
  'zh-TW': plurals.zh,
  pseudo: plurals.en
};
function dynamicActivate(_x) {
  return _dynamicActivate.apply(this, arguments);
}

function _dynamicActivate() {
  _dynamicActivate = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(locale) {
    var catalog;
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i18n.loadLocaleData(locale, {
              plurals: function plurals() {
                return _plurals[locale];
              }
            });
            _context.prev = 1;
            _context.next = 4;
            return (function (t) { return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(t)); }); })("./locales/".concat(locale, ".js"));

          case 4:
            catalog = _context.sent;
            // Bundlers will either export it as default or as a named export named default.
            i18n.load(locale, catalog.messages || catalog.default.messages);
            _context.next = 10;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);

          case 10:
            i18n.activate(locale);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _dynamicActivate.apply(this, arguments);
}

function Provider(_ref) {
  var locale = _ref.locale,
      _ref$forceRenderAfter = _ref.forceRenderAfterLocaleChange,
      forceRenderAfterLocaleChange = _ref$forceRenderAfter === void 0 ? true : _ref$forceRenderAfter,
      onActivate = _ref.onActivate,
      children = _ref.children;
  React.useEffect(function () {
    dynamicActivate(locale).then(function () {
      return onActivate === null || onActivate === void 0 ? void 0 : onActivate(locale);
    }).catch(function (error) {
      console.error('Failed to activate locale', locale, error);
    });
  }, [locale, onActivate]); // Initialize the locale immediately if it is DEFAULT_LOCALE, so that keys are shown while the translation messages load.
  // This renders the translation _keys_, not the translation _messages_, which is only acceptable while loading the DEFAULT_LOCALE,
  // as [there are no "default" messages](https://github.com/lingui/js-lingui/issues/388#issuecomment-497779030).
  // See https://github.com/lingui/js-lingui/issues/1194#issuecomment-1068488619.

  if (i18n.locale === undefined && locale === DEFAULT_LOCALE) {
    i18n.loadLocaleData(DEFAULT_LOCALE, {
      plurals: function plurals() {
        return _plurals[DEFAULT_LOCALE];
      }
    });
    i18n.load(DEFAULT_LOCALE, {});
    i18n.activate(DEFAULT_LOCALE);
  }

  return /*#__PURE__*/React__default["default"].createElement(I18nProvider, {
    forceRenderOnLocaleChange: forceRenderAfterLocaleChange,
    i18n: i18n
  }, children);
}

var reducer = redux.combineReducers(_defineProperty__default["default"]({}, multicall.reducerPath, multicall.reducer));
var store = toolkit.configureStore({
  reducer: reducer,
  middleware: function middleware(getDefaultMiddleware) {
    return (// in routing, we pass in a non-serializable provider object to queryFn to avoid re-instantiating on every query
      // rtk-query stores original args in state, so we need to turn off serializableCheck
      // this is OK because we don't use time-travel debugging nor persistence
      getDefaultMiddleware({
        thunk: true,
        serializableCheck: {}
      })
    );
  }
});

function compileTokenLists(tokenLists) {
  if (!tokenLists) return {
    erc20: {},
    erc1155: {},
    erc721: {}
  };
  var list1155 = Object.keys(tokenLists.erc1155).reduce(function (acc, chainId) {
    var list = tokenLists === null || tokenLists === void 0 ? void 0 : tokenLists.erc1155[+chainId];
    if (!list) return acc;
    acc[+chainId] = list.map(function (_ref) {
      var address = _ref.address,
          tokenId = _ref.tokenId,
          metadata = _ref.metadata;
      return new Token1155(+chainId, address, tokenId, metadata);
    });
    return acc;
  }, {});
  var list721 = Object.keys(tokenLists.erc721).reduce(function (acc, chainId) {
    var list = tokenLists === null || tokenLists === void 0 ? void 0 : tokenLists.erc721[+chainId];
    if (!list) return acc;
    acc[+chainId] = list.map(function (_ref2) {
      var address = _ref2.address,
          tokenId = _ref2.tokenId,
          metadata = _ref2.metadata;
      return new Token721(+chainId, address, tokenId, metadata);
    });
    return acc;
  }, {});
  var list20 = Object.keys(tokenLists.erc20).reduce(function (acc, chainId) {
    var list = tokenLists === null || tokenLists === void 0 ? void 0 : tokenLists.erc20[+chainId];
    if (!list) return acc;
    acc[+chainId] = list.map(function (_ref3) {
      var address = _ref3.address,
          decimals = _ref3.decimals,
          symbol = _ref3.symbol,
          name = _ref3.name;
      return new sdk.Token(+chainId, address, decimals, symbol, name);
    });
    return acc;
  }, {});
  return {
    erc20: list20,
    erc1155: list1155,
    erc721: list721
  };
}

var _templateObject, _templateObject2, _templateObject3;
var WidgetWrapper = material.styled('div')(function (_ref) {
  var theme = _ref.theme,
      width = _ref.width;
  return "\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background-color: ".concat(theme.palette.background.default, ";\n  border-radius: ").concat(theme.shape.borderRadius, "px;\n  box-sizing: border-box;\n  color: ").concat(theme.palette.text.primary, ";\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  font-smooth: always;\n  font-variant: none;\n  min-height:  554px;\n  min-width: 300px;\n  padding: 10px;\n  position: relative;\n  user-select: none;\n  width: ").concat(width && (isNaN(Number(width)) ? width : "".concat(width, "px")), ";\n");
});

var slideInLeft = _styled.keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral__default["default"](["\n  from {\n    transform: translateY(calc(100% - 0.25em));\n  }\n"])));

var slideOutLeft = _styled.keyframes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral__default["default"](["\n  to {\n    transform: translateY(calc(0.25em - 100%));\n  }\n"])));

var slideOutRight = _styled.keyframes(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral__default["default"](["\n  to {\n    transform: translateY(calc(100% - 0.25em));\n  }\n"])));

var DialogWrapper = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "Widget__DialogWrapper",
  componentId: "sc-fqzg3f-0"
})(["border-radius:", "em;height:100%;left:0;margin:0;overflow:hidden;position:absolute;top:0;width:100%;@supports (overflow:clip){overflow:clip;}.modal{animation:", " 0.25s ease-in;&.", "{animation:", " 0.25s ease-in;}&.", "{animation:", " 0.25s ease-out;}}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius * 0.75;
}, slideInLeft, Animation.PAGING, slideOutLeft, Animation.CLOSING, slideOutRight);
function Widget(props) {
  return /*#__PURE__*/React__default["default"].createElement(TestableWidget, _extends__default["default"]({}, props, {
    initialAtomValues: undefined
  }));
}
function TestableWidget(props) {
  if (props.initialAtomValues && process.env.NODE_ENV !== 'test') {
    throw new Error('initialAtomValues may only be used for testing');
  } // UI configuration must be passed for the initial render, or the first frame will render incorrectly.


  var initialAtomValues = useInitialAtomValues(props);
  var width = React.useMemo(function () {
    var _props$width;

    if (props.width && props.width < 300) {
      console.warn("Widget width must be at least 300px (you set it to ".concat(props.width, "). Falling back to 300px."));
      return 300;
    }

    return (_props$width = props.width) !== null && _props$width !== void 0 ? _props$width : 360;
  }, [props.width]);
  var locale = React.useMemo(function () {
    var _props$locale;

    if (props.locale && ![].concat(_toConsumableArray__default["default"](SUPPORTED_LOCALES), ['pseudo']).includes(props.locale)) {
      console.warn("Unsupported locale: ".concat(props.locale, ". Falling back to ").concat(DEFAULT_LOCALE, "."));
      return DEFAULT_LOCALE;
    }

    return (_props$locale = props.locale) !== null && _props$locale !== void 0 ? _props$locale : DEFAULT_LOCALE;
  }, [props.locale]);

  var _useState = React.useState(props.dialog || null),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      dialog = _useState2[0],
      setDialog = _useState2[1];

  var compiledTokenList = React.useMemo(function () {
    return compileTokenLists(props.tokenLists);
  }, [props.tokenLists]);
  return /*#__PURE__*/React__default["default"].createElement(React.StrictMode, null, /*#__PURE__*/React__default["default"].createElement(ThemeProvider, null, /*#__PURE__*/React__default["default"].createElement(ThemeProvider$1, {
    theme: props.theme
  }, /*#__PURE__*/React__default["default"].createElement(WidgetWrapper, {
    width: width,
    className: props.className
  }, /*#__PURE__*/React__default["default"].createElement(Provider, {
    locale: locale
  }, /*#__PURE__*/React__default["default"].createElement(DialogWrapper, {
    ref: setDialog
  }), /*#__PURE__*/React__default["default"].createElement(Provider$4, {
    value: props.dialog || dialog
  }, /*#__PURE__*/React__default["default"].createElement(ErrorBoundary, {
    onError: props.onError
  }, /*#__PURE__*/React__default["default"].createElement(reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/React__default["default"].createElement(jotai.Provider, {
    initialValues: props.initialAtomValues || initialAtomValues
  }, /*#__PURE__*/React__default["default"].createElement(WidgetUpdater, props), /*#__PURE__*/React__default["default"].createElement(Provider$1, props, /*#__PURE__*/React__default["default"].createElement(BlockNumberProvider, null, /*#__PURE__*/React__default["default"].createElement(ModalProvider, null, /*#__PURE__*/React__default["default"].createElement(MulticallUpdater, null), /*#__PURE__*/React__default["default"].createElement(TransactionsUpdater, props), /*#__PURE__*/React__default["default"].createElement(TokenListsProvider, {
    erc1155List: compiledTokenList.erc1155,
    erc20List: compiledTokenList.erc20,
    erc721List: compiledTokenList.erc721
  }, /*#__PURE__*/React__default["default"].createElement(MintProvider, null, /*#__PURE__*/React__default["default"].createElement(SwapProvider, null, props.children)))))))))))))));
}
/** A component in the scope of AtomProvider to set Widget-scoped state. */

function WidgetUpdater(props) {
  useSyncBrandingSetting(props);
  useSyncWidgetEventHandlers(props);
  return null;
}

var LoadingWrapper = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "Skeleton__LoadingWrapper",
  componentId: "sc-1b5xfco-0"
})(["display:flex;flex-direction:column;height:100%;justify-content:space-between;"]);

var Blob = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "Skeleton__Blob",
  componentId: "sc-1b5xfco-1"
})(["background-color:", ";border-radius:", ";height:", ";width:", ";"], function (_ref) {
  var isModule = _ref.isModule,
      theme = _ref.theme;
  return isModule ? theme.outline : theme.module;
}, function (_ref2) {
  var theme = _ref2.theme,
      radius = _ref2.radius;
  return (radius !== null && radius !== void 0 ? radius : 0.25 * theme.borderRadius) + 'em';
}, function (_ref3) {
  var height = _ref3.height;
  return height;
}, function (_ref4) {
  var width = _ref4.width;
  return width;
});

var WideColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Skeleton__WideColumn",
  componentId: "sc-1b5xfco-2"
})(["width:100%;"]);

var TitleColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Skeleton__TitleColumn",
  componentId: "sc-1b5xfco-3"
})(["padding:0.5em;padding-bottom:1em;width:100%;"]);

var InputColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Skeleton__InputColumn",
  componentId: "sc-1b5xfco-4"
})(["background-color:", ";border-radius:", "em;display:flex;gap:1.875em;margin-bottom:0.25em;padding:0.75em;padding-bottom:3.25em;padding-top:1.25em;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.module;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.borderRadius - 0.25;
});

var OutputColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Skeleton__OutputColumn",
  componentId: "sc-1b5xfco-5"
})(["background-color:", ";border-radius:", "em;display:flex;"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.module;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.borderRadius - 0.25;
});

var OutputInnerTopColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Skeleton__OutputInnerTopColumn",
  componentId: "sc-1b5xfco-6"
})(["border-bottom:1px solid ", ";padding-bottom:2.75em;padding-left:0.75em;padding-right:0.75em;padding-top:1.5em;width:100%;"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.container;
});

var OutputInnerBottomColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Skeleton__OutputInnerBottomColumn",
  componentId: "sc-1b5xfco-7"
})(["padding-bottom:1em;padding-left:0.75em;padding-right:0.75em;padding-top:0.75em;width:100%;"]);

var ButtonColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Skeleton__ButtonColumn",
  componentId: "sc-1b5xfco-8"
})(["padding-bottom:0em;padding-top:0.75em;width:100%;"]);

function FloatingTitle() {
  return /*#__PURE__*/React__default["default"].createElement(TitleColumn, {
    gap: 0.75
  }, /*#__PURE__*/React__default["default"].createElement(Row, null, /*#__PURE__*/React__default["default"].createElement(Blob, {
    height: "1em",
    width: "2.5em",
    isModule: false
  })));
}

function FloatingInput() {
  return /*#__PURE__*/React__default["default"].createElement(WideColumn, {
    gap: 0.75
  }, /*#__PURE__*/React__default["default"].createElement(Row, null, /*#__PURE__*/React__default["default"].createElement(Blob, {
    height: "2em",
    width: "3.75em",
    isModule: true
  }), /*#__PURE__*/React__default["default"].createElement(Blob, {
    height: "2em",
    width: "7.25em",
    isModule: true
  })));
}

function FloatingOutput(_ref10) {
  var isModule = _ref10.isModule;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(OutputInnerTopColumn, null, /*#__PURE__*/React__default["default"].createElement(Row, null, /*#__PURE__*/React__default["default"].createElement(Blob, {
    height: "2em",
    width: "3.75em",
    isModule: isModule
  }), /*#__PURE__*/React__default["default"].createElement(Blob, {
    height: "2em",
    width: "7.25em",
    isModule: isModule
  }))), /*#__PURE__*/React__default["default"].createElement(OutputInnerBottomColumn, null, /*#__PURE__*/React__default["default"].createElement(Blob, {
    height: "1em",
    width: "7.5em",
    isModule: true
  })));
}

function FloatingButton() {
  return /*#__PURE__*/React__default["default"].createElement(ButtonColumn, {
    gap: 0.875
  }, /*#__PURE__*/React__default["default"].createElement(Blob, {
    height: "3.375em",
    width: "100%",
    radius: 0.75,
    isModule: true
  }));
}

function SwapWidgetSkeleton(_ref11) {
  var theme = _ref11.theme,
      width = _ref11.width;
  return /*#__PURE__*/React__default["default"].createElement(React.StrictMode, null, /*#__PURE__*/React__default["default"].createElement(ThemeProvider$1, {
    theme: theme
  }, /*#__PURE__*/React__default["default"].createElement(WidgetWrapper, {
    width: width
  }, /*#__PURE__*/React__default["default"].createElement(LoadingWrapper, null, /*#__PURE__*/React__default["default"].createElement(FloatingTitle, null), /*#__PURE__*/React__default["default"].createElement(InputColumn, null, /*#__PURE__*/React__default["default"].createElement(FloatingInput, null)), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(ReverseButton, null), /*#__PURE__*/React__default["default"].createElement(OutputColumn, null, /*#__PURE__*/React__default["default"].createElement(FloatingOutput, {
    isModule: true
  })), /*#__PURE__*/React__default["default"].createElement(FloatingButton, null))))));
}

function LadderWidget(props) {
  return /*#__PURE__*/React__default["default"].createElement(Widget, props, /*#__PURE__*/React__default["default"].createElement(Ladder, null));
}
function SwapWidget(props) {
  return /*#__PURE__*/React__default["default"].createElement(Widget, props, /*#__PURE__*/React__default["default"].createElement(Swap, props));
}

Object.defineProperty(exports, 'TradeType', {
  enumerable: true,
  get: function () { return sdkCore.TradeType; }
});
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
exports.LadderWidget = LadderWidget;
exports.SUPPORTED_LOCALES = SUPPORTED_LOCALES;
exports.SwapWidget = SwapWidget;
exports.SwapWidgetSkeleton = SwapWidgetSkeleton;
exports.darkTheme = darkTheme;
exports.defaultTheme = defaultTheme;
exports.invertTradeType = invertTradeType;
exports.lightTheme = lightTheme;
exports.toTradeType = toTradeType;
