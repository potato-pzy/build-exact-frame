"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports2) {
    "use strict";
    var l = Symbol.for("react.element");
    var n = Symbol.for("react.portal");
    var p = Symbol.for("react.fragment");
    var q = Symbol.for("react.strict_mode");
    var r = Symbol.for("react.profiler");
    var t = Symbol.for("react.provider");
    var u = Symbol.for("react.context");
    var v = Symbol.for("react.forward_ref");
    var w = Symbol.for("react.suspense");
    var x = Symbol.for("react.memo");
    var y = Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = false;
      if (null === a) h = true;
      else switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
        return a2;
      })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a)) for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      }
      else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    function X() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    exports2.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports2.Component = E;
    exports2.Fragment = p;
    exports2.Profiler = r;
    exports2.PureComponent = G;
    exports2.StrictMode = q;
    exports2.Suspense = w;
    exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports2.act = X;
    exports2.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports2.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports2.createElement = M;
    exports2.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports2.createRef = function() {
      return { current: null };
    };
    exports2.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports2.isValidElement = O;
    exports2.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports2.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports2.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports2.unstable_act = X;
    exports2.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports2.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports2.useDebugValue = function() {
    };
    exports2.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports2.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports2.useId = function() {
      return U.current.useId();
    };
    exports2.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports2.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports2.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports2.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports2.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports2.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports2.useState = function(a) {
      return U.current.useState(a);
    };
    exports2.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports2.useTransition = function() {
      return U.current.useTransition();
    };
    exports2.version = "18.3.1";
  }
});

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.3.1";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState5(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef4(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect4(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module2 && module2[requireString];
              enqueueTaskImpl = nodeRequire.call(module2, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports2.Children = Children;
        exports2.Component = Component;
        exports2.Fragment = REACT_FRAGMENT_TYPE;
        exports2.Profiler = REACT_PROFILER_TYPE;
        exports2.PureComponent = PureComponent;
        exports2.StrictMode = REACT_STRICT_MODE_TYPE;
        exports2.Suspense = REACT_SUSPENSE_TYPE;
        exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports2.act = act;
        exports2.cloneElement = cloneElement$1;
        exports2.createContext = createContext;
        exports2.createElement = createElement$1;
        exports2.createFactory = createFactory;
        exports2.createRef = createRef;
        exports2.forwardRef = forwardRef;
        exports2.isValidElement = isValidElement;
        exports2.lazy = lazy;
        exports2.memo = memo;
        exports2.startTransition = startTransition;
        exports2.unstable_act = act;
        exports2.useCallback = useCallback;
        exports2.useContext = useContext;
        exports2.useDebugValue = useDebugValue;
        exports2.useDeferredValue = useDeferredValue;
        exports2.useEffect = useEffect4;
        exports2.useId = useId;
        exports2.useImperativeHandle = useImperativeHandle;
        exports2.useInsertionEffect = useInsertionEffect;
        exports2.useLayoutEffect = useLayoutEffect;
        exports2.useMemo = useMemo;
        exports2.useReducer = useReducer;
        exports2.useRef = useRef4;
        exports2.useState = useState5;
        exports2.useSyncExternalStore = useSyncExternalStore;
        exports2.useTransition = useTransition;
        exports2.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_production_min();
    } else {
      module2.exports = require_react_development();
    }
  }
});

// node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js
var require_react_dom_server_legacy_node_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js"(exports2) {
    "use strict";
    var ea = require_react();
    var fa = require("stream");
    var n = Object.prototype.hasOwnProperty;
    var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var ia = {};
    var ja = {};
    function ka(a) {
      if (n.call(ja, a)) return true;
      if (n.call(ia, a)) return false;
      if (ha.test(a)) return ja[a] = true;
      ia[a] = true;
      return false;
    }
    function q(a, b, c, d, f, e, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = f;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = e;
      this.removeEmptyString = g;
    }
    var r = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      r[a] = new q(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      r[b] = new q(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      r[a] = new q(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      r[a] = new q(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      r[a] = new q(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      r[a] = new q(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      r[a] = new q(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      r[a] = new q(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      r[a] = new q(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var la = /[\-:]([a-z])/g;
    function ma(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        la,
        ma
      );
      r[b] = new q(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(la, ma);
      r[b] = new q(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(la, ma);
      r[b] = new q(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      r[a] = new q(a, 1, false, a.toLowerCase(), null, false, false);
    });
    r.xlinkHref = new q("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      r[a] = new q(a, 1, false, a.toLowerCase(), null, true, true);
    });
    var t = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var na = ["Webkit", "ms", "Moz", "O"];
    Object.keys(t).forEach(function(a) {
      na.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        t[b] = t[a];
      });
    });
    var oa = /["'&<>]/;
    function u(a) {
      if ("boolean" === typeof a || "number" === typeof a) return "" + a;
      a = "" + a;
      var b = oa.exec(a);
      if (b) {
        var c = "", d, f = 0;
        for (d = b.index; d < a.length; d++) {
          switch (a.charCodeAt(d)) {
            case 34:
              b = "&quot;";
              break;
            case 38:
              b = "&amp;";
              break;
            case 39:
              b = "&#x27;";
              break;
            case 60:
              b = "&lt;";
              break;
            case 62:
              b = "&gt;";
              break;
            default:
              continue;
          }
          f !== d && (c += a.substring(f, d));
          f = d + 1;
          c += b;
        }
        a = f !== d ? c + a.substring(f, d) : c;
      }
      return a;
    }
    var pa = /([A-Z])/g;
    var qa = /^ms-/;
    var ra = Array.isArray;
    function v(a, b) {
      return { insertionMode: a, selectedValue: b };
    }
    function sa(a, b, c) {
      switch (b) {
        case "select":
          return v(1, null != c.value ? c.value : c.defaultValue);
        case "svg":
          return v(2, null);
        case "math":
          return v(3, null);
        case "foreignObject":
          return v(1, null);
        case "table":
          return v(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return v(5, null);
        case "colgroup":
          return v(7, null);
        case "tr":
          return v(6, null);
      }
      return 4 <= a.insertionMode || 0 === a.insertionMode ? v(1, null) : a;
    }
    var ta = /* @__PURE__ */ new Map();
    function ua(a, b, c) {
      if ("object" !== typeof c) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      b = true;
      for (var d in c) if (n.call(c, d)) {
        var f = c[d];
        if (null != f && "boolean" !== typeof f && "" !== f) {
          if (0 === d.indexOf("--")) {
            var e = u(d);
            f = u(("" + f).trim());
          } else {
            e = d;
            var g = ta.get(e);
            void 0 !== g ? e = g : (g = u(e.replace(pa, "-$1").toLowerCase().replace(qa, "-ms-")), ta.set(e, g), e = g);
            f = "number" === typeof f ? 0 === f || n.call(
              t,
              d
            ) ? "" + f : f + "px" : u(("" + f).trim());
          }
          b ? (b = false, a.push(' style="', e, ":", f)) : a.push(";", e, ":", f);
        }
      }
      b || a.push('"');
    }
    function w(a, b, c, d) {
      switch (c) {
        case "style":
          ua(a, b, d);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) {
        if (b = r.hasOwnProperty(c) ? r[c] : null, null !== b) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b.acceptsBooleans) return;
          }
          c = b.attributeName;
          switch (b.type) {
            case 3:
              d && a.push(" ", c, '=""');
              break;
            case 4:
              true === d ? a.push(" ", c, '=""') : false !== d && a.push(" ", c, '="', u(d), '"');
              break;
            case 5:
              isNaN(d) || a.push(" ", c, '="', u(d), '"');
              break;
            case 6:
              !isNaN(d) && 1 <= d && a.push(" ", c, '="', u(d), '"');
              break;
            default:
              b.sanitizeURL && (d = "" + d), a.push(" ", c, '="', u(d), '"');
          }
        } else if (ka(c)) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b) return;
          }
          a.push(" ", c, '="', u(d), '"');
        }
      }
    }
    function x(a, b, c) {
      if (null != b) {
        if (null != c) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if ("object" !== typeof b || !("__html" in b)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        b = b.__html;
        null !== b && void 0 !== b && a.push("" + b);
      }
    }
    function va(a) {
      var b = "";
      ea.Children.forEach(a, function(a2) {
        null != a2 && (b += a2);
      });
      return b;
    }
    function wa(a, b, c, d) {
      a.push(z(c));
      var f = c = null, e;
      for (e in b) if (n.call(b, e)) {
        var g = b[e];
        if (null != g) switch (e) {
          case "children":
            c = g;
            break;
          case "dangerouslySetInnerHTML":
            f = g;
            break;
          default:
            w(a, d, e, g);
        }
      }
      a.push(">");
      x(a, f, c);
      return "string" === typeof c ? (a.push(u(c)), null) : c;
    }
    var xa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var ya = /* @__PURE__ */ new Map();
    function z(a) {
      var b = ya.get(a);
      if (void 0 === b) {
        if (!xa.test(a)) throw Error("Invalid tag: " + a);
        b = "<" + a;
        ya.set(a, b);
      }
      return b;
    }
    function za(a, b, c, d, f) {
      switch (b) {
        case "select":
          a.push(z("select"));
          var e = null, g = null;
          for (l in c) if (n.call(c, l)) {
            var h = c[l];
            if (null != h) switch (l) {
              case "children":
                e = h;
                break;
              case "dangerouslySetInnerHTML":
                g = h;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                w(a, d, l, h);
            }
          }
          a.push(">");
          x(a, g, e);
          return e;
        case "option":
          g = f.selectedValue;
          a.push(z("option"));
          var k = h = null, m = null;
          var l = null;
          for (e in c) if (n.call(c, e)) {
            var p = c[e];
            if (null != p) switch (e) {
              case "children":
                h = p;
                break;
              case "selected":
                m = p;
                break;
              case "dangerouslySetInnerHTML":
                l = p;
                break;
              case "value":
                k = p;
              default:
                w(a, d, e, p);
            }
          }
          if (null != g) if (c = null !== k ? "" + k : va(h), ra(g)) for (d = 0; d < g.length; d++) {
            if ("" + g[d] === c) {
              a.push(' selected=""');
              break;
            }
          }
          else "" + g === c && a.push(' selected=""');
          else m && a.push(' selected=""');
          a.push(">");
          x(a, l, h);
          return h;
        case "textarea":
          a.push(z("textarea"));
          l = g = e = null;
          for (h in c) if (n.call(c, h) && (k = c[h], null != k)) switch (h) {
            case "children":
              l = k;
              break;
            case "value":
              e = k;
              break;
            case "defaultValue":
              g = k;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              w(a, d, h, k);
          }
          null === e && null !== g && (e = g);
          a.push(">");
          if (null != l) {
            if (null != e) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ra(l) && 1 < l.length) throw Error("<textarea> can only have at most one child.");
            e = "" + l;
          }
          "string" === typeof e && "\n" === e[0] && a.push("\n");
          null !== e && a.push(u("" + e));
          return null;
        case "input":
          a.push(z("input"));
          k = l = h = e = null;
          for (g in c) if (n.call(c, g) && (m = c[g], null != m)) switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              k = m;
              break;
            case "defaultValue":
              h = m;
              break;
            case "checked":
              l = m;
              break;
            case "value":
              e = m;
              break;
            default:
              w(a, d, g, m);
          }
          null !== l ? w(a, d, "checked", l) : null !== k && w(a, d, "checked", k);
          null !== e ? w(a, d, "value", e) : null !== h && w(a, d, "value", h);
          a.push("/>");
          return null;
        case "menuitem":
          a.push(z("menuitem"));
          for (var B in c) if (n.call(c, B) && (e = c[B], null != e)) switch (B) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              w(
                a,
                d,
                B,
                e
              );
          }
          a.push(">");
          return null;
        case "title":
          a.push(z("title"));
          e = null;
          for (p in c) if (n.call(c, p) && (g = c[p], null != g)) switch (p) {
            case "children":
              e = g;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              w(a, d, p, g);
          }
          a.push(">");
          return e;
        case "listing":
        case "pre":
          a.push(z(b));
          g = e = null;
          for (k in c) if (n.call(c, k) && (h = c[k], null != h)) switch (k) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            default:
              w(a, d, k, h);
          }
          a.push(">");
          if (null != g) {
            if (null != e) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if ("object" !== typeof g || !("__html" in g)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            c = g.__html;
            null !== c && void 0 !== c && ("string" === typeof c && 0 < c.length && "\n" === c[0] ? a.push("\n", c) : a.push("" + c));
          }
          "string" === typeof e && "\n" === e[0] && a.push("\n");
          return e;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a.push(z(b));
          for (var C in c) if (n.call(c, C) && (e = c[C], null != e)) switch (C) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              w(a, d, C, e);
          }
          a.push("/>");
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return wa(a, c, b, d);
        case "html":
          return 0 === f.insertionMode && a.push("<!DOCTYPE html>"), wa(a, c, b, d);
        default:
          if (-1 === b.indexOf("-") && "string" !== typeof c.is) return wa(a, c, b, d);
          a.push(z(b));
          g = e = null;
          for (m in c) if (n.call(c, m) && (h = c[m], null != h)) switch (m) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            case "style":
              ua(a, d, h);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ka(m) && "function" !== typeof h && "symbol" !== typeof h && a.push(" ", m, '="', u(h), '"');
          }
          a.push(">");
          x(a, g, e);
          return e;
      }
    }
    function Aa(a, b, c) {
      a.push('<!--$?--><template id="');
      if (null === c) throw Error("An ID must have been assigned before we can complete the boundary.");
      a.push(c);
      return a.push('"></template>');
    }
    function Ba(a, b, c, d) {
      switch (c.insertionMode) {
        case 0:
        case 1:
          return a.push('<div hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 2:
          return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 3:
          return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 4:
          return a.push('<table hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 5:
          return a.push('<table hidden><tbody id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 6:
          return a.push('<table hidden><tr id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 7:
          return a.push('<table hidden><colgroup id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ca(a, b) {
      switch (b.insertionMode) {
        case 0:
        case 1:
          return a.push("</div>");
        case 2:
          return a.push("</svg>");
        case 3:
          return a.push("</math>");
        case 4:
          return a.push("</table>");
        case 5:
          return a.push("</tbody></table>");
        case 6:
          return a.push("</tr></table>");
        case 7:
          return a.push("</colgroup></table>");
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Da = /[<\u2028\u2029]/g;
    function Ea(a) {
      return JSON.stringify(a).replace(Da, function(a2) {
        switch (a2) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function Fa(a, b) {
      b = void 0 === b ? "" : b;
      return { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: b + "P:", segmentPrefix: b + "S:", boundaryPrefix: b + "B:", idPrefix: b, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false, generateStaticMarkup: a };
    }
    function Ga() {
      return { insertionMode: 1, selectedValue: null };
    }
    function Ha(a, b, c, d) {
      if (c.generateStaticMarkup) return a.push(u(b)), false;
      "" === b ? a = d : (d && a.push("<!-- -->"), a.push(u(b)), a = true);
      return a;
    }
    var A = Object.assign;
    var Ia = Symbol.for("react.element");
    var Ja = Symbol.for("react.portal");
    var Ka = Symbol.for("react.fragment");
    var La = Symbol.for("react.strict_mode");
    var Ma = Symbol.for("react.profiler");
    var Na = Symbol.for("react.provider");
    var Oa = Symbol.for("react.context");
    var Pa = Symbol.for("react.forward_ref");
    var Qa = Symbol.for("react.suspense");
    var Ra = Symbol.for("react.suspense_list");
    var Sa = Symbol.for("react.memo");
    var Ta = Symbol.for("react.lazy");
    var Ua = Symbol.for("react.scope");
    var Va = Symbol.for("react.debug_trace_mode");
    var Wa = Symbol.for("react.legacy_hidden");
    var Xa = Symbol.for("react.default_value");
    var Ya = Symbol.iterator;
    function Za(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case Ka:
          return "Fragment";
        case Ja:
          return "Portal";
        case Ma:
          return "Profiler";
        case La:
          return "StrictMode";
        case Qa:
          return "Suspense";
        case Ra:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Oa:
          return (a.displayName || "Context") + ".Consumer";
        case Na:
          return (a._context.displayName || "Context") + ".Provider";
        case Pa:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Sa:
          return b = a.displayName || null, null !== b ? b : Za(a.type) || "Memo";
        case Ta:
          b = a._payload;
          a = a._init;
          try {
            return Za(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    var $a = {};
    function ab(a, b) {
      a = a.contextTypes;
      if (!a) return $a;
      var c = {}, d;
      for (d in a) c[d] = b[d];
      return c;
    }
    var D = null;
    function E(a, b) {
      if (a !== b) {
        a.context._currentValue2 = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (null === a) {
          if (null !== c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (null === c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
          E(a, c);
        }
        b.context._currentValue2 = b.value;
      }
    }
    function bb(a) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      null !== a && bb(a);
    }
    function cb(a) {
      var b = a.parent;
      null !== b && cb(b);
      a.context._currentValue2 = a.value;
    }
    function db(a, b) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === b.depth ? E(a, b) : db(a, b);
    }
    function eb(a, b) {
      var c = b.parent;
      if (null === c) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === c.depth ? E(a, c) : eb(a, c);
      b.context._currentValue2 = b.value;
    }
    function F(a) {
      var b = D;
      b !== a && (null === b ? cb(a) : null === a ? bb(b) : b.depth === a.depth ? E(b, a) : b.depth > a.depth ? db(b, a) : eb(b, a), D = a);
    }
    var fb = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a, b) {
      a = a._reactInternals;
      null !== a.queue && a.queue.push(b);
    }, enqueueReplaceState: function(a, b) {
      a = a._reactInternals;
      a.replace = true;
      a.queue = [b];
    }, enqueueForceUpdate: function() {
    } };
    function gb(a, b, c, d) {
      var f = void 0 !== a.state ? a.state : null;
      a.updater = fb;
      a.props = c;
      a.state = f;
      var e = { queue: [], replace: false };
      a._reactInternals = e;
      var g = b.contextType;
      a.context = "object" === typeof g && null !== g ? g._currentValue2 : d;
      g = b.getDerivedStateFromProps;
      "function" === typeof g && (g = g(c, f), f = null === g || void 0 === g ? f : A({}, f, g), a.state = f);
      if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && fb.enqueueReplaceState(a, a.state, null), null !== e.queue && 0 < e.queue.length) if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && 1 === b.length) a.state = b[0];
      else {
        e = g ? b[0] : a.state;
        f = true;
        for (g = g ? 1 : 0; g < b.length; g++) {
          var h = b[g];
          h = "function" === typeof h ? h.call(a, e, c, d) : h;
          null != h && (f ? (f = false, e = A({}, e, h)) : A(e, h));
        }
        a.state = e;
      }
      else e.queue = null;
    }
    var hb = { id: 1, overflow: "" };
    function ib(a, b, c) {
      var d = a.id;
      a = a.overflow;
      var f = 32 - G(d) - 1;
      d &= ~(1 << f);
      c += 1;
      var e = 32 - G(b) + f;
      if (30 < e) {
        var g = f - f % 5;
        e = (d & (1 << g) - 1).toString(32);
        d >>= g;
        f -= g;
        return { id: 1 << 32 - G(b) + f | c << f | d, overflow: e + a };
      }
      return { id: 1 << e | c << f | d, overflow: a };
    }
    var G = Math.clz32 ? Math.clz32 : jb;
    var kb = Math.log;
    var lb = Math.LN2;
    function jb(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (kb(a) / lb | 0) | 0;
    }
    function mb(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var nb = "function" === typeof Object.is ? Object.is : mb;
    var H = null;
    var ob = null;
    var I = null;
    var J = null;
    var K = false;
    var L = false;
    var M = 0;
    var N = null;
    var O = 0;
    function P() {
      if (null === H) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
      return H;
    }
    function rb() {
      if (0 < O) throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function sb() {
      null === J ? null === I ? (K = false, I = J = rb()) : (K = true, J = I) : null === J.next ? (K = false, J = J.next = rb()) : (K = true, J = J.next);
      return J;
    }
    function tb() {
      ob = H = null;
      L = false;
      I = null;
      O = 0;
      J = N = null;
    }
    function ub(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function vb(a, b, c) {
      H = P();
      J = sb();
      if (K) {
        var d = J.queue;
        b = d.dispatch;
        if (null !== N && (c = N.get(d), void 0 !== c)) {
          N.delete(d);
          d = J.memoizedState;
          do
            d = a(d, c.action), c = c.next;
          while (null !== c);
          J.memoizedState = d;
          return [d, b];
        }
        return [J.memoizedState, b];
      }
      a = a === ub ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
      J.memoizedState = a;
      a = J.queue = { last: null, dispatch: null };
      a = a.dispatch = wb.bind(null, H, a);
      return [J.memoizedState, a];
    }
    function xb(a, b) {
      H = P();
      J = sb();
      b = void 0 === b ? null : b;
      if (null !== J) {
        var c = J.memoizedState;
        if (null !== c && null !== b) {
          var d = c[1];
          a: if (null === d) d = false;
          else {
            for (var f = 0; f < d.length && f < b.length; f++) if (!nb(b[f], d[f])) {
              d = false;
              break a;
            }
            d = true;
          }
          if (d) return c[0];
        }
      }
      a = a();
      J.memoizedState = [a, b];
      return a;
    }
    function wb(a, b, c) {
      if (25 <= O) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (a === H) if (L = true, a = { action: c, next: null }, null === N && (N = /* @__PURE__ */ new Map()), c = N.get(b), void 0 === c) N.set(b, a);
      else {
        for (b = c; null !== b.next; ) b = b.next;
        b.next = a;
      }
    }
    function yb() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function Q() {
    }
    var zb = { readContext: function(a) {
      return a._currentValue2;
    }, useContext: function(a) {
      P();
      return a._currentValue2;
    }, useMemo: xb, useReducer: vb, useRef: function(a) {
      H = P();
      J = sb();
      var b = J.memoizedState;
      return null === b ? (a = { current: a }, J.memoizedState = a) : b;
    }, useState: function(a) {
      return vb(ub, a);
    }, useInsertionEffect: Q, useLayoutEffect: function() {
    }, useCallback: function(a, b) {
      return xb(function() {
        return a;
      }, b);
    }, useImperativeHandle: Q, useEffect: Q, useDebugValue: Q, useDeferredValue: function(a) {
      P();
      return a;
    }, useTransition: function() {
      P();
      return [false, yb];
    }, useId: function() {
      var a = ob.treeContext;
      var b = a.overflow;
      a = a.id;
      a = (a & ~(1 << 32 - G(a) - 1)).toString(32) + b;
      var c = R;
      if (null === c) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      b = M++;
      a = ":" + c.idPrefix + "R" + a;
      0 < b && (a += "H" + b.toString(32));
      return a + ":";
    }, useMutableSource: function(a, b) {
      P();
      return b(a._source);
    }, useSyncExternalStore: function(a, b, c) {
      if (void 0 === c) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return c();
    } };
    var R = null;
    var Ab = ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function Bb(a) {
      console.error(a);
      return null;
    }
    function S() {
    }
    function Cb(a, b, c, d, f, e, g, h, k) {
      var m = [], l = /* @__PURE__ */ new Set();
      b = { destination: null, responseState: b, progressiveChunkSize: void 0 === d ? 12800 : d, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: l, pingedTasks: m, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: void 0 === f ? Bb : f, onAllReady: void 0 === e ? S : e, onShellReady: void 0 === g ? S : g, onShellError: void 0 === h ? S : h, onFatalError: void 0 === k ? S : k };
      c = T(b, 0, null, c, false, false);
      c.parentFlushed = true;
      a = Db(b, a, null, c, l, $a, null, hb);
      m.push(a);
      return b;
    }
    function Db(a, b, c, d, f, e, g, h) {
      a.allPendingTasks++;
      null === c ? a.pendingRootTasks++ : c.pendingTasks++;
      var k = { node: b, ping: function() {
        var b2 = a.pingedTasks;
        b2.push(k);
        1 === b2.length && Eb(a);
      }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
      f.add(k);
      return k;
    }
    function T(a, b, c, d, f, e) {
      return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c, lastPushedText: f, textEmbedded: e };
    }
    function U(a, b) {
      a = a.onError(b);
      if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
      return a;
    }
    function V(a, b) {
      var c = a.onShellError;
      c(b);
      c = a.onFatalError;
      c(b);
      null !== a.destination ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
    }
    function Fb(a, b, c, d, f) {
      H = {};
      ob = b;
      M = 0;
      for (a = c(d, f); L; ) L = false, M = 0, O += 1, J = null, a = c(d, f);
      tb();
      return a;
    }
    function Gb(a, b, c, d) {
      var f = c.render(), e = d.childContextTypes;
      if (null !== e && void 0 !== e) {
        var g = b.legacyContext;
        if ("function" !== typeof c.getChildContext) d = g;
        else {
          c = c.getChildContext();
          for (var h in c) if (!(h in e)) throw Error((Za(d) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
          d = A({}, g, c);
        }
        b.legacyContext = d;
        W(a, b, f);
        b.legacyContext = g;
      } else W(a, b, f);
    }
    function Hb(a, b) {
      if (a && a.defaultProps) {
        b = A({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Ib(a, b, c, d, f) {
      if ("function" === typeof c) if (c.prototype && c.prototype.isReactComponent) {
        f = ab(c, b.legacyContext);
        var e = c.contextType;
        e = new c(d, "object" === typeof e && null !== e ? e._currentValue2 : f);
        gb(e, c, d, f);
        Gb(a, b, e, c);
      } else {
        e = ab(c, b.legacyContext);
        f = Fb(a, b, c, d, e);
        var g = 0 !== M;
        if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof) gb(f, c, d, e), Gb(a, b, f, c);
        else if (g) {
          d = b.treeContext;
          b.treeContext = ib(d, 1, 0);
          try {
            W(a, b, f);
          } finally {
            b.treeContext = d;
          }
        } else W(a, b, f);
      }
      else if ("string" === typeof c) {
        f = b.blockedSegment;
        e = za(f.chunks, c, d, a.responseState, f.formatContext);
        f.lastPushedText = false;
        g = f.formatContext;
        f.formatContext = sa(g, c, d);
        Jb(a, b, e);
        f.formatContext = g;
        switch (c) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f.chunks.push("</", c, ">");
        }
        f.lastPushedText = false;
      } else {
        switch (c) {
          case Wa:
          case Va:
          case La:
          case Ma:
          case Ka:
            W(a, b, d.children);
            return;
          case Ra:
            W(a, b, d.children);
            return;
          case Ua:
            throw Error("ReactDOMServer does not yet support scope components.");
          case Qa:
            a: {
              c = b.blockedBoundary;
              f = b.blockedSegment;
              e = d.fallback;
              d = d.children;
              g = /* @__PURE__ */ new Set();
              var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, k = T(a, f.chunks.length, h, f.formatContext, false, false);
              f.children.push(k);
              f.lastPushedText = false;
              var m = T(a, 0, null, f.formatContext, false, false);
              m.parentFlushed = true;
              b.blockedBoundary = h;
              b.blockedSegment = m;
              try {
                if (Jb(a, b, d), a.responseState.generateStaticMarkup || m.lastPushedText && m.textEmbedded && m.chunks.push("<!-- -->"), m.status = 1, X(h, m), 0 === h.pendingTasks) break a;
              } catch (l) {
                m.status = 4, h.forceClientRender = true, h.errorDigest = U(a, l);
              } finally {
                b.blockedBoundary = c, b.blockedSegment = f;
              }
              b = Db(a, e, c, k, g, b.legacyContext, b.context, b.treeContext);
              a.pingedTasks.push(b);
            }
            return;
        }
        if ("object" === typeof c && null !== c) switch (c.$$typeof) {
          case Pa:
            d = Fb(a, b, c.render, d, f);
            if (0 !== M) {
              c = b.treeContext;
              b.treeContext = ib(c, 1, 0);
              try {
                W(a, b, d);
              } finally {
                b.treeContext = c;
              }
            } else W(a, b, d);
            return;
          case Sa:
            c = c.type;
            d = Hb(c, d);
            Ib(a, b, c, d, f);
            return;
          case Na:
            f = d.children;
            c = c._context;
            d = d.value;
            e = c._currentValue2;
            c._currentValue2 = d;
            g = D;
            D = d = { parent: g, depth: null === g ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
            b.context = d;
            W(a, b, f);
            a = D;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            d = a.parentValue;
            a.context._currentValue2 = d === Xa ? a.context._defaultValue : d;
            a = D = a.parent;
            b.context = a;
            return;
          case Oa:
            d = d.children;
            d = d(c._currentValue2);
            W(a, b, d);
            return;
          case Ta:
            f = c._init;
            c = f(c._payload);
            d = Hb(c, d);
            Ib(a, b, c, d, void 0);
            return;
        }
        throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == c ? c : typeof c) + "."));
      }
    }
    function W(a, b, c) {
      b.node = c;
      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case Ia:
            Ib(a, b, c.type, c.props, c.ref);
            return;
          case Ja:
            throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Ta:
            var d = c._init;
            c = d(c._payload);
            W(a, b, c);
            return;
        }
        if (ra(c)) {
          Kb(a, b, c);
          return;
        }
        null === c || "object" !== typeof c ? d = null : (d = Ya && c[Ya] || c["@@iterator"], d = "function" === typeof d ? d : null);
        if (d && (d = d.call(c))) {
          c = d.next();
          if (!c.done) {
            var f = [];
            do
              f.push(c.value), c = d.next();
            while (!c.done);
            Kb(a, b, f);
          }
          return;
        }
        a = Object.prototype.toString.call(c);
        throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(c).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
      }
      "string" === typeof c ? (d = b.blockedSegment, d.lastPushedText = Ha(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : "number" === typeof c && (d = b.blockedSegment, d.lastPushedText = Ha(
        b.blockedSegment.chunks,
        "" + c,
        a.responseState,
        d.lastPushedText
      ));
    }
    function Kb(a, b, c) {
      for (var d = c.length, f = 0; f < d; f++) {
        var e = b.treeContext;
        b.treeContext = ib(e, d, f);
        try {
          Jb(a, b, c[f]);
        } finally {
          b.treeContext = e;
        }
      }
    }
    function Jb(a, b, c) {
      var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
      try {
        return W(a, b, c);
      } catch (k) {
        if (tb(), "object" === typeof k && null !== k && "function" === typeof k.then) {
          c = k;
          var g = b.blockedSegment, h = T(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
          g.children.push(h);
          g.lastPushedText = false;
          a = Db(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
          c.then(a, a);
          b.blockedSegment.formatContext = d;
          b.legacyContext = f;
          b.context = e;
          F(e);
        } else throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, F(e), k;
      }
    }
    function Lb(a) {
      var b = a.blockedBoundary;
      a = a.blockedSegment;
      a.status = 3;
      Mb(this, b, a);
    }
    function Nb(a, b, c) {
      var d = a.blockedBoundary;
      a.blockedSegment.status = 3;
      null === d ? (b.allPendingTasks--, 2 !== b.status && (b.status = 2, null !== b.destination && b.destination.push(null))) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, d.errorDigest = b.onError(void 0 === c ? Error("The render was aborted by the server without a reason.") : c), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
        return Nb(a2, b, c);
      }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (a = b.onAllReady, a()));
    }
    function X(a, b) {
      if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
        var c = b.children[0];
        c.id = b.id;
        c.parentFlushed = true;
        1 === c.status && X(a, c);
      } else a.completedSegments.push(b);
    }
    function Mb(a, b, c) {
      if (null === b) {
        if (c.parentFlushed) {
          if (null !== a.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
          a.completedRootSegment = c;
        }
        a.pendingRootTasks--;
        0 === a.pendingRootTasks && (a.onShellError = S, b = a.onShellReady, b());
      } else b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && X(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(Lb, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (X(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
      a.allPendingTasks--;
      0 === a.allPendingTasks && (a = a.onAllReady, a());
    }
    function Eb(a) {
      if (2 !== a.status) {
        var b = D, c = Ab.current;
        Ab.current = zb;
        var d = R;
        R = a.responseState;
        try {
          var f = a.pingedTasks, e;
          for (e = 0; e < f.length; e++) {
            var g = f[e];
            var h = a, k = g.blockedSegment;
            if (0 === k.status) {
              F(g.context);
              try {
                W(h, g, g.node), h.responseState.generateStaticMarkup || k.lastPushedText && k.textEmbedded && k.chunks.push("<!-- -->"), g.abortSet.delete(g), k.status = 1, Mb(h, g.blockedBoundary, k);
              } catch (y) {
                if (tb(), "object" === typeof y && null !== y && "function" === typeof y.then) {
                  var m = g.ping;
                  y.then(m, m);
                } else {
                  g.abortSet.delete(g);
                  k.status = 4;
                  var l = g.blockedBoundary, p = y, B = U(h, p);
                  null === l ? V(h, p) : (l.pendingTasks--, l.forceClientRender || (l.forceClientRender = true, l.errorDigest = B, l.parentFlushed && h.clientRenderedBoundaries.push(l)));
                  h.allPendingTasks--;
                  if (0 === h.allPendingTasks) {
                    var C = h.onAllReady;
                    C();
                  }
                }
              } finally {
              }
            }
          }
          f.splice(0, e);
          null !== a.destination && Ob(a, a.destination);
        } catch (y) {
          U(a, y), V(a, y);
        } finally {
          R = d, Ab.current = c, c === zb && F(b);
        }
      }
    }
    function Y(a, b, c) {
      c.parentFlushed = true;
      switch (c.status) {
        case 0:
          var d = c.id = a.nextSegmentId++;
          c.lastPushedText = false;
          c.textEmbedded = false;
          a = a.responseState;
          b.push('<template id="');
          b.push(a.placeholderPrefix);
          a = d.toString(16);
          b.push(a);
          return b.push('"></template>');
        case 1:
          c.status = 2;
          var f = true;
          d = c.chunks;
          var e = 0;
          c = c.children;
          for (var g = 0; g < c.length; g++) {
            for (f = c[g]; e < f.index; e++) b.push(d[e]);
            f = Z(a, b, f);
          }
          for (; e < d.length - 1; e++) b.push(d[e]);
          e < d.length && (f = b.push(d[e]));
          return f;
        default:
          throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Z(a, b, c) {
      var d = c.boundary;
      if (null === d) return Y(a, b, c);
      d.parentFlushed = true;
      if (d.forceClientRender) return a.responseState.generateStaticMarkup || (d = d.errorDigest, b.push("<!--$!-->"), b.push("<template"), d && (b.push(' data-dgst="'), d = u(d), b.push(d), b.push('"')), b.push("></template>")), Y(a, b, c), a = a.responseState.generateStaticMarkup ? true : b.push("<!--/$-->"), a;
      if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var f = a.responseState;
        var e = f.nextSuspenseID++;
        f = f.boundaryPrefix + e.toString(16);
        d = d.id = f;
        Aa(b, a.responseState, d);
        Y(a, b, c);
        return b.push("<!--/$-->");
      }
      if (d.byteSize > a.progressiveChunkSize) return d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), Aa(b, a.responseState, d.id), Y(a, b, c), b.push("<!--/$-->");
      a.responseState.generateStaticMarkup || b.push("<!--$-->");
      c = d.completedSegments;
      if (1 !== c.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
      Z(a, b, c[0]);
      a = a.responseState.generateStaticMarkup ? true : b.push("<!--/$-->");
      return a;
    }
    function Pb(a, b, c) {
      Ba(b, a.responseState, c.formatContext, c.id);
      Z(a, b, c);
      return Ca(b, c.formatContext);
    }
    function Qb(a, b, c) {
      for (var d = c.completedSegments, f = 0; f < d.length; f++) Rb(a, b, c, d[f]);
      d.length = 0;
      a = a.responseState;
      d = c.id;
      c = c.rootSegmentID;
      b.push(a.startInlineScript);
      a.sentCompleteBoundaryFunction ? b.push('$RC("') : (a.sentCompleteBoundaryFunction = true, b.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));
      if (null === d) throw Error("An ID must have been assigned before we can complete the boundary.");
      c = c.toString(16);
      b.push(d);
      b.push('","');
      b.push(a.segmentPrefix);
      b.push(c);
      return b.push('")</script>');
    }
    function Rb(a, b, c, d) {
      if (2 === d.status) return true;
      var f = d.id;
      if (-1 === f) {
        if (-1 === (d.id = c.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Pb(a, b, d);
      }
      Pb(a, b, d);
      a = a.responseState;
      b.push(a.startInlineScript);
      a.sentCompleteSegmentFunction ? b.push('$RS("') : (a.sentCompleteSegmentFunction = true, b.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));
      b.push(a.segmentPrefix);
      f = f.toString(16);
      b.push(f);
      b.push('","');
      b.push(a.placeholderPrefix);
      b.push(f);
      return b.push('")</script>');
    }
    function Ob(a, b) {
      try {
        var c = a.completedRootSegment;
        if (null !== c && 0 === a.pendingRootTasks) {
          Z(a, b, c);
          a.completedRootSegment = null;
          var d = a.responseState.bootstrapChunks;
          for (c = 0; c < d.length - 1; c++) b.push(d[c]);
          c < d.length && b.push(d[c]);
        }
        var f = a.clientRenderedBoundaries, e;
        for (e = 0; e < f.length; e++) {
          var g = f[e];
          d = b;
          var h = a.responseState, k = g.id, m = g.errorDigest, l = g.errorMessage, p = g.errorComponentStack;
          d.push(h.startInlineScript);
          h.sentClientRenderFunction ? d.push('$RX("') : (h.sentClientRenderFunction = true, d.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'));
          if (null === k) throw Error("An ID must have been assigned before we can complete the boundary.");
          d.push(k);
          d.push('"');
          if (m || l || p) {
            d.push(",");
            var B = Ea(m || "");
            d.push(B);
          }
          if (l || p) {
            d.push(",");
            var C = Ea(l || "");
            d.push(C);
          }
          if (p) {
            d.push(",");
            var y = Ea(p);
            d.push(y);
          }
          if (!d.push(")</script>")) {
            a.destination = null;
            e++;
            f.splice(0, e);
            return;
          }
        }
        f.splice(0, e);
        var aa = a.completedBoundaries;
        for (e = 0; e < aa.length; e++) if (!Qb(a, b, aa[e])) {
          a.destination = null;
          e++;
          aa.splice(0, e);
          return;
        }
        aa.splice(0, e);
        var ba = a.partialBoundaries;
        for (e = 0; e < ba.length; e++) {
          var pb = ba[e];
          a: {
            f = a;
            g = b;
            var ca = pb.completedSegments;
            for (h = 0; h < ca.length; h++) if (!Rb(f, g, pb, ca[h])) {
              h++;
              ca.splice(0, h);
              var qb = false;
              break a;
            }
            ca.splice(0, h);
            qb = true;
          }
          if (!qb) {
            a.destination = null;
            e++;
            ba.splice(0, e);
            return;
          }
        }
        ba.splice(0, e);
        var da = a.completedBoundaries;
        for (e = 0; e < da.length; e++) if (!Qb(a, b, da[e])) {
          a.destination = null;
          e++;
          da.splice(0, e);
          return;
        }
        da.splice(0, e);
      } finally {
        0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b.push(null);
      }
    }
    function Sb(a, b) {
      if (1 === a.status) a.status = 2, b.destroy(a.fatalError);
      else if (2 !== a.status && null === a.destination) {
        a.destination = b;
        try {
          Ob(a, b);
        } catch (c) {
          U(a, c), V(a, c);
        }
      }
    }
    function Tb(a, b) {
      try {
        var c = a.abortableTasks;
        c.forEach(function(c2) {
          return Nb(c2, a, b);
        });
        c.clear();
        null !== a.destination && Ob(a, a.destination);
      } catch (d) {
        U(a, d), V(a, d);
      }
    }
    function Ub() {
    }
    function Vb(a, b, c, d) {
      var f = false, e = null, g = "", h = false;
      a = Cb(a, Fa(c, b ? b.identifierPrefix : void 0), Ga(), Infinity, Ub, void 0, function() {
        h = true;
      }, void 0, void 0);
      Eb(a);
      Tb(a, d);
      Sb(a, { push: function(a2) {
        null !== a2 && (g += a2);
        return true;
      }, destroy: function(a2) {
        f = true;
        e = a2;
      } });
      if (f) throw e;
      if (!h) throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return g;
    }
    function Wb(a, b) {
      a.prototype = Object.create(b.prototype);
      a.prototype.constructor = a;
      a.__proto__ = b;
    }
    var Xb = (function(a) {
      function b() {
        var b2 = a.call(this, {}) || this;
        b2.request = null;
        b2.startedFlowing = false;
        return b2;
      }
      Wb(b, a);
      var c = b.prototype;
      c._destroy = function(a2, b2) {
        Tb(this.request);
        b2(a2);
      };
      c._read = function() {
        this.startedFlowing && Sb(this.request, this);
      };
      return b;
    })(fa.Readable);
    function Yb() {
    }
    function Zb(a, b) {
      var c = new Xb(), d = Cb(a, Fa(false, b ? b.identifierPrefix : void 0), Ga(), Infinity, Yb, function() {
        c.startedFlowing = true;
        Sb(d, c);
      }, void 0, void 0);
      c.request = d;
      Eb(d);
      return c;
    }
    exports2.renderToNodeStream = function(a, b) {
      return Zb(a, b);
    };
    exports2.renderToStaticMarkup = function(a, b) {
      return Vb(a, b, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
    };
    exports2.renderToStaticNodeStream = function(a, b) {
      return Zb(a, b);
    };
    exports2.renderToString = function(a, b) {
      return Vb(a, b, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
    };
    exports2.version = "18.3.1";
  }
});

// node_modules/react-dom/cjs/react-dom-server.node.production.min.js
var require_react_dom_server_node_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server.node.production.min.js"(exports2) {
    "use strict";
    var aa = require("util");
    var ba = require_react();
    var k = null;
    var l = 0;
    var q = true;
    function r(a, b) {
      if ("string" === typeof b) {
        if (0 !== b.length) if (2048 < 3 * b.length) 0 < l && (t(a, k.subarray(0, l)), k = new Uint8Array(2048), l = 0), t(a, u.encode(b));
        else {
          var c = k;
          0 < l && (c = k.subarray(l));
          c = u.encodeInto(b, c);
          var d = c.read;
          l += c.written;
          d < b.length && (t(a, k), k = new Uint8Array(2048), l = u.encodeInto(b.slice(d), k).written);
          2048 === l && (t(a, k), k = new Uint8Array(2048), l = 0);
        }
      } else 0 !== b.byteLength && (2048 < b.byteLength ? (0 < l && (t(a, k.subarray(0, l)), k = new Uint8Array(2048), l = 0), t(a, b)) : (c = k.length - l, c < b.byteLength && (0 === c ? t(
        a,
        k
      ) : (k.set(b.subarray(0, c), l), l += c, t(a, k), b = b.subarray(c)), k = new Uint8Array(2048), l = 0), k.set(b, l), l += b.byteLength, 2048 === l && (t(a, k), k = new Uint8Array(2048), l = 0)));
    }
    function t(a, b) {
      a = a.write(b);
      q = q && a;
    }
    function w(a, b) {
      r(a, b);
      return q;
    }
    function ca(a) {
      k && 0 < l && a.write(k.subarray(0, l));
      k = null;
      l = 0;
      q = true;
    }
    var u = new aa.TextEncoder();
    function x(a) {
      return u.encode(a);
    }
    var y = Object.prototype.hasOwnProperty;
    var da = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var ea = {};
    var fa = {};
    function ha(a) {
      if (y.call(fa, a)) return true;
      if (y.call(ea, a)) return false;
      if (da.test(a)) return fa[a] = true;
      ea[a] = true;
      return false;
    }
    function z(a, b, c, d, f, e, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = f;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = e;
      this.removeEmptyString = g;
    }
    var A = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      A[a] = new z(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      A[b] = new z(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      A[a] = new z(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      A[a] = new z(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      A[a] = new z(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      A[a] = new z(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      A[a] = new z(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      A[a] = new z(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      A[a] = new z(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ia = /[\-:]([a-z])/g;
    function ja(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        ia,
        ja
      );
      A[b] = new z(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ia, ja);
      A[b] = new z(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ia, ja);
      A[b] = new z(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      A[a] = new z(a, 1, false, a.toLowerCase(), null, false, false);
    });
    A.xlinkHref = new z("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      A[a] = new z(a, 1, false, a.toLowerCase(), null, true, true);
    });
    var B = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var ka = ["Webkit", "ms", "Moz", "O"];
    Object.keys(B).forEach(function(a) {
      ka.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        B[b] = B[a];
      });
    });
    var la = /["'&<>]/;
    function F(a) {
      if ("boolean" === typeof a || "number" === typeof a) return "" + a;
      a = "" + a;
      var b = la.exec(a);
      if (b) {
        var c = "", d, f = 0;
        for (d = b.index; d < a.length; d++) {
          switch (a.charCodeAt(d)) {
            case 34:
              b = "&quot;";
              break;
            case 38:
              b = "&amp;";
              break;
            case 39:
              b = "&#x27;";
              break;
            case 60:
              b = "&lt;";
              break;
            case 62:
              b = "&gt;";
              break;
            default:
              continue;
          }
          f !== d && (c += a.substring(f, d));
          f = d + 1;
          c += b;
        }
        a = f !== d ? c + a.substring(f, d) : c;
      }
      return a;
    }
    var ma = /([A-Z])/g;
    var pa = /^ms-/;
    var qa = Array.isArray;
    var ra = x("<script>");
    var sa = x("</script>");
    var ta = x('<script src="');
    var ua = x('<script type="module" src="');
    var va = x('" async=""></script>');
    var wa = /(<\/|<)(s)(cript)/gi;
    function xa(a, b, c, d) {
      return "" + b + ("s" === c ? "\\u0073" : "\\u0053") + d;
    }
    function G(a, b) {
      return { insertionMode: a, selectedValue: b };
    }
    function ya(a, b, c) {
      switch (b) {
        case "select":
          return G(1, null != c.value ? c.value : c.defaultValue);
        case "svg":
          return G(2, null);
        case "math":
          return G(3, null);
        case "foreignObject":
          return G(1, null);
        case "table":
          return G(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return G(5, null);
        case "colgroup":
          return G(7, null);
        case "tr":
          return G(6, null);
      }
      return 4 <= a.insertionMode || 0 === a.insertionMode ? G(1, null) : a;
    }
    var za = x("<!-- -->");
    function Aa(a, b, c, d) {
      if ("" === b) return d;
      d && a.push(za);
      a.push(F(b));
      return true;
    }
    var Ba = /* @__PURE__ */ new Map();
    var Ca = x(' style="');
    var Da = x(":");
    var Ea = x(";");
    function Fa(a, b, c) {
      if ("object" !== typeof c) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      b = true;
      for (var d in c) if (y.call(c, d)) {
        var f = c[d];
        if (null != f && "boolean" !== typeof f && "" !== f) {
          if (0 === d.indexOf("--")) {
            var e = F(d);
            f = F(("" + f).trim());
          } else {
            e = d;
            var g = Ba.get(e);
            void 0 !== g ? e = g : (g = x(F(e.replace(ma, "-$1").toLowerCase().replace(pa, "-ms-"))), Ba.set(e, g), e = g);
            f = "number" === typeof f ? 0 === f || y.call(
              B,
              d
            ) ? "" + f : f + "px" : F(("" + f).trim());
          }
          b ? (b = false, a.push(Ca, e, Da, f)) : a.push(Ea, e, Da, f);
        }
      }
      b || a.push(H);
    }
    var I = x(" ");
    var J = x('="');
    var H = x('"');
    var Ga = x('=""');
    function K(a, b, c, d) {
      switch (c) {
        case "style":
          Fa(a, b, d);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) {
        if (b = A.hasOwnProperty(c) ? A[c] : null, null !== b) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b.acceptsBooleans) return;
          }
          c = b.attributeName;
          switch (b.type) {
            case 3:
              d && a.push(I, c, Ga);
              break;
            case 4:
              true === d ? a.push(I, c, Ga) : false !== d && a.push(I, c, J, F(d), H);
              break;
            case 5:
              isNaN(d) || a.push(I, c, J, F(d), H);
              break;
            case 6:
              !isNaN(d) && 1 <= d && a.push(I, c, J, F(d), H);
              break;
            default:
              b.sanitizeURL && (d = "" + d), a.push(I, c, J, F(d), H);
          }
        } else if (ha(c)) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b) return;
          }
          a.push(I, c, J, F(d), H);
        }
      }
    }
    var L = x(">");
    var Ha = x("/>");
    function M(a, b, c) {
      if (null != b) {
        if (null != c) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if ("object" !== typeof b || !("__html" in b)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        b = b.__html;
        null !== b && void 0 !== b && a.push("" + b);
      }
    }
    function Ia(a) {
      var b = "";
      ba.Children.forEach(a, function(a2) {
        null != a2 && (b += a2);
      });
      return b;
    }
    var Ja = x(' selected=""');
    function Ka(a, b, c, d) {
      a.push(N(c));
      var f = c = null, e;
      for (e in b) if (y.call(b, e)) {
        var g = b[e];
        if (null != g) switch (e) {
          case "children":
            c = g;
            break;
          case "dangerouslySetInnerHTML":
            f = g;
            break;
          default:
            K(a, d, e, g);
        }
      }
      a.push(L);
      M(a, f, c);
      return "string" === typeof c ? (a.push(F(c)), null) : c;
    }
    var La = x("\n");
    var Ma = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var Na = /* @__PURE__ */ new Map();
    function N(a) {
      var b = Na.get(a);
      if (void 0 === b) {
        if (!Ma.test(a)) throw Error("Invalid tag: " + a);
        b = x("<" + a);
        Na.set(a, b);
      }
      return b;
    }
    var Oa = x("<!DOCTYPE html>");
    function Pa(a, b, c, d, f) {
      switch (b) {
        case "select":
          a.push(N("select"));
          var e = null, g = null;
          for (p in c) if (y.call(c, p)) {
            var h = c[p];
            if (null != h) switch (p) {
              case "children":
                e = h;
                break;
              case "dangerouslySetInnerHTML":
                g = h;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                K(a, d, p, h);
            }
          }
          a.push(L);
          M(a, g, e);
          return e;
        case "option":
          g = f.selectedValue;
          a.push(N("option"));
          var m = h = null, n = null;
          var p = null;
          for (e in c) if (y.call(c, e)) {
            var v = c[e];
            if (null != v) switch (e) {
              case "children":
                h = v;
                break;
              case "selected":
                n = v;
                break;
              case "dangerouslySetInnerHTML":
                p = v;
                break;
              case "value":
                m = v;
              default:
                K(a, d, e, v);
            }
          }
          if (null != g) if (c = null !== m ? "" + m : Ia(h), qa(g)) for (d = 0; d < g.length; d++) {
            if ("" + g[d] === c) {
              a.push(Ja);
              break;
            }
          }
          else "" + g === c && a.push(Ja);
          else n && a.push(Ja);
          a.push(L);
          M(a, p, h);
          return h;
        case "textarea":
          a.push(N("textarea"));
          p = g = e = null;
          for (h in c) if (y.call(c, h) && (m = c[h], null != m)) switch (h) {
            case "children":
              p = m;
              break;
            case "value":
              e = m;
              break;
            case "defaultValue":
              g = m;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              K(a, d, h, m);
          }
          null === e && null !== g && (e = g);
          a.push(L);
          if (null != p) {
            if (null != e) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (qa(p) && 1 < p.length) throw Error("<textarea> can only have at most one child.");
            e = "" + p;
          }
          "string" === typeof e && "\n" === e[0] && a.push(La);
          null !== e && a.push(F("" + e));
          return null;
        case "input":
          a.push(N("input"));
          m = p = h = e = null;
          for (g in c) if (y.call(c, g) && (n = c[g], null != n)) switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              m = n;
              break;
            case "defaultValue":
              h = n;
              break;
            case "checked":
              p = n;
              break;
            case "value":
              e = n;
              break;
            default:
              K(a, d, g, n);
          }
          null !== p ? K(a, d, "checked", p) : null !== m && K(a, d, "checked", m);
          null !== e ? K(a, d, "value", e) : null !== h && K(a, d, "value", h);
          a.push(Ha);
          return null;
        case "menuitem":
          a.push(N("menuitem"));
          for (var C in c) if (y.call(c, C) && (e = c[C], null != e)) switch (C) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              K(a, d, C, e);
          }
          a.push(L);
          return null;
        case "title":
          a.push(N("title"));
          e = null;
          for (v in c) if (y.call(c, v) && (g = c[v], null != g)) switch (v) {
            case "children":
              e = g;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              K(a, d, v, g);
          }
          a.push(L);
          return e;
        case "listing":
        case "pre":
          a.push(N(b));
          g = e = null;
          for (m in c) if (y.call(c, m) && (h = c[m], null != h)) switch (m) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            default:
              K(a, d, m, h);
          }
          a.push(L);
          if (null != g) {
            if (null != e) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if ("object" !== typeof g || !("__html" in g)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            c = g.__html;
            null !== c && void 0 !== c && ("string" === typeof c && 0 < c.length && "\n" === c[0] ? a.push(La, c) : a.push("" + c));
          }
          "string" === typeof e && "\n" === e[0] && a.push(La);
          return e;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a.push(N(b));
          for (var D in c) if (y.call(c, D) && (e = c[D], null != e)) switch (D) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              K(a, d, D, e);
          }
          a.push(Ha);
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Ka(a, c, b, d);
        case "html":
          return 0 === f.insertionMode && a.push(Oa), Ka(
            a,
            c,
            b,
            d
          );
        default:
          if (-1 === b.indexOf("-") && "string" !== typeof c.is) return Ka(a, c, b, d);
          a.push(N(b));
          g = e = null;
          for (n in c) if (y.call(c, n) && (h = c[n], null != h)) switch (n) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            case "style":
              Fa(a, d, h);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ha(n) && "function" !== typeof h && "symbol" !== typeof h && a.push(I, n, J, F(h), H);
          }
          a.push(L);
          M(a, g, e);
          return e;
      }
    }
    var Qa = x("</");
    var Ra = x(">");
    var Sa = x('<template id="');
    var Ta = x('"></template>');
    var Ua = x("<!--$-->");
    var Va = x('<!--$?--><template id="');
    var Wa = x('"></template>');
    var Xa = x("<!--$!-->");
    var Ya = x("<!--/$-->");
    var Za = x("<template");
    var $a = x('"');
    var ab = x(' data-dgst="');
    x(' data-msg="');
    x(' data-stck="');
    var bb = x("></template>");
    function cb(a, b, c) {
      r(a, Va);
      if (null === c) throw Error("An ID must have been assigned before we can complete the boundary.");
      r(a, c);
      return w(a, Wa);
    }
    var db = x('<div hidden id="');
    var eb = x('">');
    var fb = x("</div>");
    var gb = x('<svg aria-hidden="true" style="display:none" id="');
    var hb = x('">');
    var ib = x("</svg>");
    var jb = x('<math aria-hidden="true" style="display:none" id="');
    var kb = x('">');
    var lb = x("</math>");
    var mb = x('<table hidden id="');
    var nb = x('">');
    var ob = x("</table>");
    var pb = x('<table hidden><tbody id="');
    var qb = x('">');
    var rb = x("</tbody></table>");
    var sb = x('<table hidden><tr id="');
    var tb = x('">');
    var ub = x("</tr></table>");
    var vb = x('<table hidden><colgroup id="');
    var wb = x('">');
    var xb = x("</colgroup></table>");
    function yb(a, b, c, d) {
      switch (c.insertionMode) {
        case 0:
        case 1:
          return r(a, db), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, eb);
        case 2:
          return r(a, gb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, hb);
        case 3:
          return r(a, jb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, kb);
        case 4:
          return r(a, mb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, nb);
        case 5:
          return r(a, pb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, qb);
        case 6:
          return r(a, sb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, tb);
        case 7:
          return r(a, vb), r(
            a,
            b.segmentPrefix
          ), r(a, d.toString(16)), w(a, wb);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function zb(a, b) {
      switch (b.insertionMode) {
        case 0:
        case 1:
          return w(a, fb);
        case 2:
          return w(a, ib);
        case 3:
          return w(a, lb);
        case 4:
          return w(a, ob);
        case 5:
          return w(a, rb);
        case 6:
          return w(a, ub);
        case 7:
          return w(a, xb);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Ab = x('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("');
    var Bb = x('$RS("');
    var Cb = x('","');
    var Db = x('")</script>');
    var Fb = x('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("');
    var Gb = x('$RC("');
    var Hb = x('","');
    var Ib = x('")</script>');
    var Jb = x('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("');
    var Kb = x('$RX("');
    var Lb = x('"');
    var Mb = x(")</script>");
    var Nb = x(",");
    var Ob = /[<\u2028\u2029]/g;
    function Pb(a) {
      return JSON.stringify(a).replace(Ob, function(a2) {
        switch (a2) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var O = Object.assign;
    var Qb = Symbol.for("react.element");
    var Rb = Symbol.for("react.portal");
    var Sb = Symbol.for("react.fragment");
    var Tb = Symbol.for("react.strict_mode");
    var Ub = Symbol.for("react.profiler");
    var Vb = Symbol.for("react.provider");
    var Wb = Symbol.for("react.context");
    var Xb = Symbol.for("react.forward_ref");
    var Yb = Symbol.for("react.suspense");
    var Zb = Symbol.for("react.suspense_list");
    var $b = Symbol.for("react.memo");
    var ac = Symbol.for("react.lazy");
    var bc = Symbol.for("react.scope");
    var cc = Symbol.for("react.debug_trace_mode");
    var dc = Symbol.for("react.legacy_hidden");
    var ec = Symbol.for("react.default_value");
    var fc = Symbol.iterator;
    function gc(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case Sb:
          return "Fragment";
        case Rb:
          return "Portal";
        case Ub:
          return "Profiler";
        case Tb:
          return "StrictMode";
        case Yb:
          return "Suspense";
        case Zb:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Wb:
          return (a.displayName || "Context") + ".Consumer";
        case Vb:
          return (a._context.displayName || "Context") + ".Provider";
        case Xb:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case $b:
          return b = a.displayName || null, null !== b ? b : gc(a.type) || "Memo";
        case ac:
          b = a._payload;
          a = a._init;
          try {
            return gc(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    var hc = {};
    function ic(a, b) {
      a = a.contextTypes;
      if (!a) return hc;
      var c = {}, d;
      for (d in a) c[d] = b[d];
      return c;
    }
    var P = null;
    function Q(a, b) {
      if (a !== b) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (null === a) {
          if (null !== c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (null === c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
          Q(a, c);
        }
        b.context._currentValue = b.value;
      }
    }
    function jc(a) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      null !== a && jc(a);
    }
    function kc(a) {
      var b = a.parent;
      null !== b && kc(b);
      a.context._currentValue = a.value;
    }
    function lc(a, b) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === b.depth ? Q(a, b) : lc(a, b);
    }
    function mc(a, b) {
      var c = b.parent;
      if (null === c) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === c.depth ? Q(a, c) : mc(a, c);
      b.context._currentValue = b.value;
    }
    function nc(a) {
      var b = P;
      b !== a && (null === b ? kc(a) : null === a ? jc(b) : b.depth === a.depth ? Q(b, a) : b.depth > a.depth ? lc(b, a) : mc(b, a), P = a);
    }
    var oc = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a, b) {
      a = a._reactInternals;
      null !== a.queue && a.queue.push(b);
    }, enqueueReplaceState: function(a, b) {
      a = a._reactInternals;
      a.replace = true;
      a.queue = [b];
    }, enqueueForceUpdate: function() {
    } };
    function pc(a, b, c, d) {
      var f = void 0 !== a.state ? a.state : null;
      a.updater = oc;
      a.props = c;
      a.state = f;
      var e = { queue: [], replace: false };
      a._reactInternals = e;
      var g = b.contextType;
      a.context = "object" === typeof g && null !== g ? g._currentValue : d;
      g = b.getDerivedStateFromProps;
      "function" === typeof g && (g = g(c, f), f = null === g || void 0 === g ? f : O({}, f, g), a.state = f);
      if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && oc.enqueueReplaceState(a, a.state, null), null !== e.queue && 0 < e.queue.length) if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && 1 === b.length) a.state = b[0];
      else {
        e = g ? b[0] : a.state;
        f = true;
        for (g = g ? 1 : 0; g < b.length; g++) {
          var h = b[g];
          h = "function" === typeof h ? h.call(a, e, c, d) : h;
          null != h && (f ? (f = false, e = O({}, e, h)) : O(e, h));
        }
        a.state = e;
      }
      else e.queue = null;
    }
    var qc = { id: 1, overflow: "" };
    function rc(a, b, c) {
      var d = a.id;
      a = a.overflow;
      var f = 32 - sc(d) - 1;
      d &= ~(1 << f);
      c += 1;
      var e = 32 - sc(b) + f;
      if (30 < e) {
        var g = f - f % 5;
        e = (d & (1 << g) - 1).toString(32);
        d >>= g;
        f -= g;
        return { id: 1 << 32 - sc(b) + f | c << f | d, overflow: e + a };
      }
      return { id: 1 << e | c << f | d, overflow: a };
    }
    var sc = Math.clz32 ? Math.clz32 : tc;
    var uc = Math.log;
    var vc = Math.LN2;
    function tc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (uc(a) / vc | 0) | 0;
    }
    function wc(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var xc = "function" === typeof Object.is ? Object.is : wc;
    var R = null;
    var yc = null;
    var zc = null;
    var S = null;
    var T = false;
    var Ac = false;
    var U = 0;
    var V = null;
    var Bc = 0;
    function W() {
      if (null === R) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
      return R;
    }
    function Cc() {
      if (0 < Bc) throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function Dc() {
      null === S ? null === zc ? (T = false, zc = S = Cc()) : (T = true, S = zc) : null === S.next ? (T = false, S = S.next = Cc()) : (T = true, S = S.next);
      return S;
    }
    function Ec() {
      yc = R = null;
      Ac = false;
      zc = null;
      Bc = 0;
      S = V = null;
    }
    function Fc(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function Gc(a, b, c) {
      R = W();
      S = Dc();
      if (T) {
        var d = S.queue;
        b = d.dispatch;
        if (null !== V && (c = V.get(d), void 0 !== c)) {
          V.delete(d);
          d = S.memoizedState;
          do
            d = a(d, c.action), c = c.next;
          while (null !== c);
          S.memoizedState = d;
          return [d, b];
        }
        return [S.memoizedState, b];
      }
      a = a === Fc ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
      S.memoizedState = a;
      a = S.queue = { last: null, dispatch: null };
      a = a.dispatch = Hc.bind(null, R, a);
      return [S.memoizedState, a];
    }
    function Ic(a, b) {
      R = W();
      S = Dc();
      b = void 0 === b ? null : b;
      if (null !== S) {
        var c = S.memoizedState;
        if (null !== c && null !== b) {
          var d = c[1];
          a: if (null === d) d = false;
          else {
            for (var f = 0; f < d.length && f < b.length; f++) if (!xc(b[f], d[f])) {
              d = false;
              break a;
            }
            d = true;
          }
          if (d) return c[0];
        }
      }
      a = a();
      S.memoizedState = [a, b];
      return a;
    }
    function Hc(a, b, c) {
      if (25 <= Bc) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (a === R) if (Ac = true, a = { action: c, next: null }, null === V && (V = /* @__PURE__ */ new Map()), c = V.get(b), void 0 === c) V.set(b, a);
      else {
        for (b = c; null !== b.next; ) b = b.next;
        b.next = a;
      }
    }
    function Jc() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function Kc() {
    }
    var Mc = { readContext: function(a) {
      return a._currentValue;
    }, useContext: function(a) {
      W();
      return a._currentValue;
    }, useMemo: Ic, useReducer: Gc, useRef: function(a) {
      R = W();
      S = Dc();
      var b = S.memoizedState;
      return null === b ? (a = { current: a }, S.memoizedState = a) : b;
    }, useState: function(a) {
      return Gc(Fc, a);
    }, useInsertionEffect: Kc, useLayoutEffect: function() {
    }, useCallback: function(a, b) {
      return Ic(function() {
        return a;
      }, b);
    }, useImperativeHandle: Kc, useEffect: Kc, useDebugValue: Kc, useDeferredValue: function(a) {
      W();
      return a;
    }, useTransition: function() {
      W();
      return [false, Jc];
    }, useId: function() {
      var a = yc.treeContext;
      var b = a.overflow;
      a = a.id;
      a = (a & ~(1 << 32 - sc(a) - 1)).toString(32) + b;
      var c = Lc;
      if (null === c) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      b = U++;
      a = ":" + c.idPrefix + "R" + a;
      0 < b && (a += "H" + b.toString(32));
      return a + ":";
    }, useMutableSource: function(a, b) {
      W();
      return b(a._source);
    }, useSyncExternalStore: function(a, b, c) {
      if (void 0 === c) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return c();
    } };
    var Lc = null;
    var Nc = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function Oc(a) {
      console.error(a);
      return null;
    }
    function X() {
    }
    function Pc(a, b) {
      var c = a.pingedTasks;
      c.push(b);
      1 === c.length && setImmediate(function() {
        return Qc(a);
      });
    }
    function Rc(a, b, c, d, f, e, g, h) {
      a.allPendingTasks++;
      null === c ? a.pendingRootTasks++ : c.pendingTasks++;
      var m = { node: b, ping: function() {
        return Pc(a, m);
      }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
      f.add(m);
      return m;
    }
    function Sc(a, b, c, d, f, e) {
      return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c, lastPushedText: f, textEmbedded: e };
    }
    function Y(a, b) {
      a = a.onError(b);
      if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
      return a;
    }
    function Tc(a, b) {
      var c = a.onShellError;
      c(b);
      c = a.onFatalError;
      c(b);
      null !== a.destination ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
    }
    function Uc(a, b, c, d, f) {
      R = {};
      yc = b;
      U = 0;
      for (a = c(d, f); Ac; ) Ac = false, U = 0, Bc += 1, S = null, a = c(d, f);
      Ec();
      return a;
    }
    function Vc(a, b, c, d) {
      var f = c.render(), e = d.childContextTypes;
      if (null !== e && void 0 !== e) {
        var g = b.legacyContext;
        if ("function" !== typeof c.getChildContext) d = g;
        else {
          c = c.getChildContext();
          for (var h in c) if (!(h in e)) throw Error((gc(d) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
          d = O({}, g, c);
        }
        b.legacyContext = d;
        Z(a, b, f);
        b.legacyContext = g;
      } else Z(a, b, f);
    }
    function Wc(a, b) {
      if (a && a.defaultProps) {
        b = O({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Xc(a, b, c, d, f) {
      if ("function" === typeof c) if (c.prototype && c.prototype.isReactComponent) {
        f = ic(c, b.legacyContext);
        var e = c.contextType;
        e = new c(d, "object" === typeof e && null !== e ? e._currentValue : f);
        pc(e, c, d, f);
        Vc(a, b, e, c);
      } else {
        e = ic(c, b.legacyContext);
        f = Uc(a, b, c, d, e);
        var g = 0 !== U;
        if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof) pc(f, c, d, e), Vc(a, b, f, c);
        else if (g) {
          d = b.treeContext;
          b.treeContext = rc(d, 1, 0);
          try {
            Z(a, b, f);
          } finally {
            b.treeContext = d;
          }
        } else Z(a, b, f);
      }
      else if ("string" === typeof c) {
        f = b.blockedSegment;
        e = Pa(f.chunks, c, d, a.responseState, f.formatContext);
        f.lastPushedText = false;
        g = f.formatContext;
        f.formatContext = ya(g, c, d);
        Yc(a, b, e);
        f.formatContext = g;
        switch (c) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f.chunks.push(Qa, c, Ra);
        }
        f.lastPushedText = false;
      } else {
        switch (c) {
          case dc:
          case cc:
          case Tb:
          case Ub:
          case Sb:
            Z(a, b, d.children);
            return;
          case Zb:
            Z(
              a,
              b,
              d.children
            );
            return;
          case bc:
            throw Error("ReactDOMServer does not yet support scope components.");
          case Yb:
            a: {
              c = b.blockedBoundary;
              f = b.blockedSegment;
              e = d.fallback;
              d = d.children;
              g = /* @__PURE__ */ new Set();
              var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, m = Sc(a, f.chunks.length, h, f.formatContext, false, false);
              f.children.push(m);
              f.lastPushedText = false;
              var n = Sc(a, 0, null, f.formatContext, false, false);
              n.parentFlushed = true;
              b.blockedBoundary = h;
              b.blockedSegment = n;
              try {
                if (Yc(a, b, d), n.lastPushedText && n.textEmbedded && n.chunks.push(za), n.status = 1, Zc(h, n), 0 === h.pendingTasks) break a;
              } catch (p) {
                n.status = 4, h.forceClientRender = true, h.errorDigest = Y(a, p);
              } finally {
                b.blockedBoundary = c, b.blockedSegment = f;
              }
              b = Rc(a, e, c, m, g, b.legacyContext, b.context, b.treeContext);
              a.pingedTasks.push(b);
            }
            return;
        }
        if ("object" === typeof c && null !== c) switch (c.$$typeof) {
          case Xb:
            d = Uc(a, b, c.render, d, f);
            if (0 !== U) {
              c = b.treeContext;
              b.treeContext = rc(c, 1, 0);
              try {
                Z(a, b, d);
              } finally {
                b.treeContext = c;
              }
            } else Z(
              a,
              b,
              d
            );
            return;
          case $b:
            c = c.type;
            d = Wc(c, d);
            Xc(a, b, c, d, f);
            return;
          case Vb:
            f = d.children;
            c = c._context;
            d = d.value;
            e = c._currentValue;
            c._currentValue = d;
            g = P;
            P = d = { parent: g, depth: null === g ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
            b.context = d;
            Z(a, b, f);
            a = P;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            d = a.parentValue;
            a.context._currentValue = d === ec ? a.context._defaultValue : d;
            a = P = a.parent;
            b.context = a;
            return;
          case Wb:
            d = d.children;
            d = d(c._currentValue);
            Z(a, b, d);
            return;
          case ac:
            f = c._init;
            c = f(c._payload);
            d = Wc(c, d);
            Xc(a, b, c, d, void 0);
            return;
        }
        throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == c ? c : typeof c) + "."));
      }
    }
    function Z(a, b, c) {
      b.node = c;
      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case Qb:
            Xc(a, b, c.type, c.props, c.ref);
            return;
          case Rb:
            throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case ac:
            var d = c._init;
            c = d(c._payload);
            Z(a, b, c);
            return;
        }
        if (qa(c)) {
          $c(a, b, c);
          return;
        }
        null === c || "object" !== typeof c ? d = null : (d = fc && c[fc] || c["@@iterator"], d = "function" === typeof d ? d : null);
        if (d && (d = d.call(c))) {
          c = d.next();
          if (!c.done) {
            var f = [];
            do
              f.push(c.value), c = d.next();
            while (!c.done);
            $c(a, b, f);
          }
          return;
        }
        a = Object.prototype.toString.call(c);
        throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(c).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
      }
      "string" === typeof c ? (d = b.blockedSegment, d.lastPushedText = Aa(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : "number" === typeof c && (d = b.blockedSegment, d.lastPushedText = Aa(
        b.blockedSegment.chunks,
        "" + c,
        a.responseState,
        d.lastPushedText
      ));
    }
    function $c(a, b, c) {
      for (var d = c.length, f = 0; f < d; f++) {
        var e = b.treeContext;
        b.treeContext = rc(e, d, f);
        try {
          Yc(a, b, c[f]);
        } finally {
          b.treeContext = e;
        }
      }
    }
    function Yc(a, b, c) {
      var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
      try {
        return Z(a, b, c);
      } catch (m) {
        if (Ec(), "object" === typeof m && null !== m && "function" === typeof m.then) {
          c = m;
          var g = b.blockedSegment, h = Sc(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
          g.children.push(h);
          g.lastPushedText = false;
          a = Rc(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
          c.then(a, a);
          b.blockedSegment.formatContext = d;
          b.legacyContext = f;
          b.context = e;
          nc(e);
        } else throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, nc(e), m;
      }
    }
    function ad(a) {
      var b = a.blockedBoundary;
      a = a.blockedSegment;
      a.status = 3;
      bd(this, b, a);
    }
    function cd(a, b, c) {
      var d = a.blockedBoundary;
      a.blockedSegment.status = 3;
      null === d ? (b.allPendingTasks--, 2 !== b.status && (b.status = 2, null !== b.destination && b.destination.end())) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, d.errorDigest = b.onError(void 0 === c ? Error("The render was aborted by the server without a reason.") : c), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
        return cd(a2, b, c);
      }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (a = b.onAllReady, a()));
    }
    function Zc(a, b) {
      if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
        var c = b.children[0];
        c.id = b.id;
        c.parentFlushed = true;
        1 === c.status && Zc(a, c);
      } else a.completedSegments.push(b);
    }
    function bd(a, b, c) {
      if (null === b) {
        if (c.parentFlushed) {
          if (null !== a.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
          a.completedRootSegment = c;
        }
        a.pendingRootTasks--;
        0 === a.pendingRootTasks && (a.onShellError = X, b = a.onShellReady, b());
      } else b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && Zc(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(ad, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (Zc(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
      a.allPendingTasks--;
      0 === a.allPendingTasks && (a = a.onAllReady, a());
    }
    function Qc(a) {
      if (2 !== a.status) {
        var b = P, c = Nc.current;
        Nc.current = Mc;
        var d = Lc;
        Lc = a.responseState;
        try {
          var f = a.pingedTasks, e;
          for (e = 0; e < f.length; e++) {
            var g = f[e];
            var h = a, m = g.blockedSegment;
            if (0 === m.status) {
              nc(g.context);
              try {
                Z(h, g, g.node), m.lastPushedText && m.textEmbedded && m.chunks.push(za), g.abortSet.delete(g), m.status = 1, bd(h, g.blockedBoundary, m);
              } catch (E) {
                if (Ec(), "object" === typeof E && null !== E && "function" === typeof E.then) {
                  var n = g.ping;
                  E.then(n, n);
                } else {
                  g.abortSet.delete(g);
                  m.status = 4;
                  var p = g.blockedBoundary, v = E, C = Y(h, v);
                  null === p ? Tc(h, v) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = true, p.errorDigest = C, p.parentFlushed && h.clientRenderedBoundaries.push(p)));
                  h.allPendingTasks--;
                  if (0 === h.allPendingTasks) {
                    var D = h.onAllReady;
                    D();
                  }
                }
              } finally {
              }
            }
          }
          f.splice(0, e);
          null !== a.destination && dd(a, a.destination);
        } catch (E) {
          Y(a, E), Tc(a, E);
        } finally {
          Lc = d, Nc.current = c, c === Mc && nc(b);
        }
      }
    }
    function ed(a, b, c) {
      c.parentFlushed = true;
      switch (c.status) {
        case 0:
          var d = c.id = a.nextSegmentId++;
          c.lastPushedText = false;
          c.textEmbedded = false;
          a = a.responseState;
          r(b, Sa);
          r(b, a.placeholderPrefix);
          a = d.toString(16);
          r(b, a);
          return w(b, Ta);
        case 1:
          c.status = 2;
          var f = true;
          d = c.chunks;
          var e = 0;
          c = c.children;
          for (var g = 0; g < c.length; g++) {
            for (f = c[g]; e < f.index; e++) r(b, d[e]);
            f = fd(a, b, f);
          }
          for (; e < d.length - 1; e++) r(b, d[e]);
          e < d.length && (f = w(b, d[e]));
          return f;
        default:
          throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function fd(a, b, c) {
      var d = c.boundary;
      if (null === d) return ed(a, b, c);
      d.parentFlushed = true;
      if (d.forceClientRender) d = d.errorDigest, w(b, Xa), r(b, Za), d && (r(b, ab), r(b, F(d)), r(b, $a)), w(b, bb), ed(a, b, c);
      else if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var f = a.responseState;
        var e = f.nextSuspenseID++;
        f = x(f.boundaryPrefix + e.toString(16));
        d = d.id = f;
        cb(b, a.responseState, d);
        ed(a, b, c);
      } else if (d.byteSize > a.progressiveChunkSize) d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), cb(b, a.responseState, d.id), ed(a, b, c);
      else {
        w(b, Ua);
        c = d.completedSegments;
        if (1 !== c.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        fd(a, b, c[0]);
      }
      return w(b, Ya);
    }
    function gd(a, b, c) {
      yb(b, a.responseState, c.formatContext, c.id);
      fd(a, b, c);
      return zb(b, c.formatContext);
    }
    function hd(a, b, c) {
      for (var d = c.completedSegments, f = 0; f < d.length; f++) id(a, b, c, d[f]);
      d.length = 0;
      a = a.responseState;
      d = c.id;
      c = c.rootSegmentID;
      r(b, a.startInlineScript);
      a.sentCompleteBoundaryFunction ? r(b, Gb) : (a.sentCompleteBoundaryFunction = true, r(b, Fb));
      if (null === d) throw Error("An ID must have been assigned before we can complete the boundary.");
      c = c.toString(16);
      r(b, d);
      r(b, Hb);
      r(b, a.segmentPrefix);
      r(b, c);
      return w(b, Ib);
    }
    function id(a, b, c, d) {
      if (2 === d.status) return true;
      var f = d.id;
      if (-1 === f) {
        if (-1 === (d.id = c.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return gd(a, b, d);
      }
      gd(a, b, d);
      a = a.responseState;
      r(b, a.startInlineScript);
      a.sentCompleteSegmentFunction ? r(b, Bb) : (a.sentCompleteSegmentFunction = true, r(b, Ab));
      r(b, a.segmentPrefix);
      f = f.toString(16);
      r(b, f);
      r(b, Cb);
      r(b, a.placeholderPrefix);
      r(b, f);
      return w(b, Db);
    }
    function dd(a, b) {
      k = new Uint8Array(2048);
      l = 0;
      q = true;
      try {
        var c = a.completedRootSegment;
        if (null !== c && 0 === a.pendingRootTasks) {
          fd(a, b, c);
          a.completedRootSegment = null;
          var d = a.responseState.bootstrapChunks;
          for (c = 0; c < d.length - 1; c++) r(b, d[c]);
          c < d.length && w(b, d[c]);
        }
        var f = a.clientRenderedBoundaries, e;
        for (e = 0; e < f.length; e++) {
          var g = f[e];
          d = b;
          var h = a.responseState, m = g.id, n = g.errorDigest, p = g.errorMessage, v = g.errorComponentStack;
          r(d, h.startInlineScript);
          h.sentClientRenderFunction ? r(d, Kb) : (h.sentClientRenderFunction = true, r(d, Jb));
          if (null === m) throw Error("An ID must have been assigned before we can complete the boundary.");
          r(d, m);
          r(d, Lb);
          if (n || p || v) r(d, Nb), r(d, Pb(n || ""));
          if (p || v) r(d, Nb), r(d, Pb(p || ""));
          v && (r(d, Nb), r(d, Pb(v)));
          if (!w(d, Mb)) {
            a.destination = null;
            e++;
            f.splice(0, e);
            return;
          }
        }
        f.splice(0, e);
        var C = a.completedBoundaries;
        for (e = 0; e < C.length; e++) if (!hd(a, b, C[e])) {
          a.destination = null;
          e++;
          C.splice(0, e);
          return;
        }
        C.splice(0, e);
        ca(b);
        k = new Uint8Array(2048);
        l = 0;
        q = true;
        var D = a.partialBoundaries;
        for (e = 0; e < D.length; e++) {
          var E = D[e];
          a: {
            f = a;
            g = b;
            var na = E.completedSegments;
            for (h = 0; h < na.length; h++) if (!id(f, g, E, na[h])) {
              h++;
              na.splice(0, h);
              var Eb = false;
              break a;
            }
            na.splice(0, h);
            Eb = true;
          }
          if (!Eb) {
            a.destination = null;
            e++;
            D.splice(0, e);
            return;
          }
        }
        D.splice(0, e);
        var oa = a.completedBoundaries;
        for (e = 0; e < oa.length; e++) if (!hd(a, b, oa[e])) {
          a.destination = null;
          e++;
          oa.splice(0, e);
          return;
        }
        oa.splice(0, e);
      } finally {
        ca(b), "function" === typeof b.flush && b.flush(), 0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b.end();
      }
    }
    function jd(a) {
      setImmediate(function() {
        return Qc(a);
      });
    }
    function kd(a, b) {
      if (1 === a.status) a.status = 2, b.destroy(a.fatalError);
      else if (2 !== a.status && null === a.destination) {
        a.destination = b;
        try {
          dd(a, b);
        } catch (c) {
          Y(a, c), Tc(a, c);
        }
      }
    }
    function ld(a, b) {
      try {
        var c = a.abortableTasks;
        c.forEach(function(c2) {
          return cd(c2, a, b);
        });
        c.clear();
        null !== a.destination && dd(a, a.destination);
      } catch (d) {
        Y(a, d), Tc(a, d);
      }
    }
    function md(a, b) {
      return function() {
        return kd(b, a);
      };
    }
    function nd(a, b) {
      return function() {
        return ld(a, b);
      };
    }
    function od(a, b) {
      var c = b ? b.identifierPrefix : void 0, d = b ? b.nonce : void 0, f = b ? b.bootstrapScriptContent : void 0, e = b ? b.bootstrapScripts : void 0;
      var g = b ? b.bootstrapModules : void 0;
      c = void 0 === c ? "" : c;
      d = void 0 === d ? ra : x('<script nonce="' + F(d) + '">');
      var h = [];
      void 0 !== f && h.push(d, ("" + f).replace(wa, xa), sa);
      if (void 0 !== e) for (f = 0; f < e.length; f++) h.push(ta, F(e[f]), va);
      if (void 0 !== g) for (e = 0; e < g.length; e++) h.push(ua, F(g[e]), va);
      g = {
        bootstrapChunks: h,
        startInlineScript: d,
        placeholderPrefix: x(c + "P:"),
        segmentPrefix: x(c + "S:"),
        boundaryPrefix: c + "B:",
        idPrefix: c,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: false,
        sentCompleteBoundaryFunction: false,
        sentClientRenderFunction: false
      };
      e = b ? b.namespaceURI : void 0;
      e = G("http://www.w3.org/2000/svg" === e ? 2 : "http://www.w3.org/1998/Math/MathML" === e ? 3 : 0, null);
      f = b ? b.progressiveChunkSize : void 0;
      d = b ? b.onError : void 0;
      h = b ? b.onAllReady : void 0;
      var m = b ? b.onShellReady : void 0, n = b ? b.onShellError : void 0;
      b = [];
      c = /* @__PURE__ */ new Set();
      g = {
        destination: null,
        responseState: g,
        progressiveChunkSize: void 0 === f ? 12800 : f,
        status: 0,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: c,
        pingedTasks: b,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: void 0 === d ? Oc : d,
        onAllReady: void 0 === h ? X : h,
        onShellReady: void 0 === m ? X : m,
        onShellError: void 0 === n ? X : n,
        onFatalError: X
      };
      e = Sc(g, 0, null, e, false, false);
      e.parentFlushed = true;
      a = Rc(g, a, null, e, c, hc, null, qc);
      b.push(a);
      return g;
    }
    exports2.renderToPipeableStream = function(a, b) {
      var c = od(a, b), d = false;
      jd(c);
      return { pipe: function(a2) {
        if (d) throw Error("React currently only supports piping to one writable stream.");
        d = true;
        kd(c, a2);
        a2.on("drain", md(a2, c));
        a2.on("error", nd(c, Error("The destination stream errored while writing data.")));
        a2.on("close", nd(c, Error("The destination stream closed early.")));
        return a2;
      }, abort: function(a2) {
        ld(c, a2);
      } };
    };
    exports2.version = "18.3.1";
  }
});

// node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js
var require_react_dom_server_legacy_node_development = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js"(exports2) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var React5 = require_react();
        var stream = require("stream");
        var ReactVersion = "18.3.1";
        var ReactSharedInternals = React5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function scheduleWork(callback) {
          callback();
        }
        function beginWriting(destination) {
        }
        function writeChunk(destination, chunk) {
          writeChunkAndReturn(destination, chunk);
        }
        function writeChunkAndReturn(destination, chunk) {
          return destination.push(chunk);
        }
        function completeWriting(destination) {
        }
        function close(destination) {
          destination.push(null);
        }
        function stringToChunk(content) {
          return content;
        }
        function stringToPrecomputedChunk(content) {
          return content;
        }
        function closeWithError(destination, error2) {
          destination.destroy(error2);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkAttributeStringCoercion(value, attributeName) {
          {
            if (willCoercionThrow(value)) {
              error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", attributeName, typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function checkCSSPropertyStringCoercion(value, propName) {
          {
            if (willCoercionThrow(value)) {
              error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", propName, typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function checkHtmlStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED = 0;
        var STRING = 1;
        var BOOLEANISH_STRING = 2;
        var BOOLEAN = 3;
        var OVERLOADED_BOOLEAN = 4;
        var NUMERIC = 5;
        var POSITIVE_NUMERIC = 6;
        var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
        var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
        var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$");
        var illegalAttributeNameCache = {};
        var validatedAttributeNameCache = {};
        function isAttributeNameSafe(attributeName) {
          if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
            return true;
          }
          if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
            return false;
          }
          if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
            validatedAttributeNameCache[attributeName] = true;
            return true;
          }
          illegalAttributeNameCache[attributeName] = true;
          {
            error("Invalid attribute name: `%s`", attributeName);
          }
          return false;
        }
        function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
          if (propertyInfo !== null && propertyInfo.type === RESERVED) {
            return false;
          }
          switch (typeof value) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return true;
            case "boolean": {
              if (isCustomComponentTag) {
                return false;
              }
              if (propertyInfo !== null) {
                return !propertyInfo.acceptsBooleans;
              } else {
                var prefix2 = name.toLowerCase().slice(0, 5);
                return prefix2 !== "data-" && prefix2 !== "aria-";
              }
            }
            default:
              return false;
          }
        }
        function getPropertyInfo(name) {
          return properties.hasOwnProperty(name) ? properties[name] : null;
        }
        function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2, removeEmptyString) {
          this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
          this.attributeName = attributeName;
          this.attributeNamespace = attributeNamespace;
          this.mustUseProperty = mustUseProperty;
          this.propertyName = name;
          this.type = type;
          this.sanitizeURL = sanitizeURL2;
          this.removeEmptyString = removeEmptyString;
        }
        var properties = {};
        var reservedProps = [
          "children",
          "dangerouslySetInnerHTML",
          // TODO: This prevents the assignment of defaultValue to regular
          // elements (not just inputs). Now that ReactDOMInput assigns to the
          // defaultValue property -- do we need this?
          "defaultValue",
          "defaultChecked",
          "innerHTML",
          "suppressContentEditableWarning",
          "suppressHydrationWarning",
          "style"
        ];
        reservedProps.forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            RESERVED,
            false,
            // mustUseProperty
            name,
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
          var name = _ref[0], attributeName = _ref[1];
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            false,
            // mustUseProperty
            attributeName,
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEANISH_STRING,
            false,
            // mustUseProperty
            name.toLowerCase(),
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEANISH_STRING,
            false,
            // mustUseProperty
            name,
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        [
          "allowFullScreen",
          "async",
          // Note: there is a special case that prevents it from being written to the DOM
          // on the client side because the browsers are inconsistent. Instead we call focus().
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          // Microdata
          "itemScope"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEAN,
            false,
            // mustUseProperty
            name.toLowerCase(),
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        [
          "checked",
          // Note: `option.selected` is not updated if `select.multiple` is
          // disabled with `removeAttribute`. We have special logic for handling this.
          "multiple",
          "muted",
          "selected"
          // NOTE: if you add a camelCased prop to this list,
          // you'll need to set attributeName to name.toLowerCase()
          // instead in the assignment below.
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEAN,
            true,
            // mustUseProperty
            name,
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        [
          "capture",
          "download"
          // NOTE: if you add a camelCased prop to this list,
          // you'll need to set attributeName to name.toLowerCase()
          // instead in the assignment below.
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            OVERLOADED_BOOLEAN,
            false,
            // mustUseProperty
            name,
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        [
          "cols",
          "rows",
          "size",
          "span"
          // NOTE: if you add a camelCased prop to this list,
          // you'll need to set attributeName to name.toLowerCase()
          // instead in the assignment below.
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            POSITIVE_NUMERIC,
            false,
            // mustUseProperty
            name,
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        ["rowSpan", "start"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            NUMERIC,
            false,
            // mustUseProperty
            name.toLowerCase(),
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        var CAMELIZE = /[\-\:]([a-z])/g;
        var capitalize = function(token) {
          return token[1].toUpperCase();
        };
        [
          "accent-height",
          "alignment-baseline",
          "arabic-form",
          "baseline-shift",
          "cap-height",
          "clip-path",
          "clip-rule",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "dominant-baseline",
          "enable-background",
          "fill-opacity",
          "fill-rule",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "glyph-name",
          "glyph-orientation-horizontal",
          "glyph-orientation-vertical",
          "horiz-adv-x",
          "horiz-origin-x",
          "image-rendering",
          "letter-spacing",
          "lighting-color",
          "marker-end",
          "marker-mid",
          "marker-start",
          "overline-position",
          "overline-thickness",
          "paint-order",
          "panose-1",
          "pointer-events",
          "rendering-intent",
          "shape-rendering",
          "stop-color",
          "stop-opacity",
          "strikethrough-position",
          "strikethrough-thickness",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke-width",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "underline-position",
          "underline-thickness",
          "unicode-bidi",
          "unicode-range",
          "units-per-em",
          "v-alphabetic",
          "v-hanging",
          "v-ideographic",
          "v-mathematical",
          "vector-effect",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "word-spacing",
          "writing-mode",
          "xmlns:xlink",
          "x-height"
          // NOTE: if you add a camelCased prop to this list,
          // you'll need to set attributeName to name.toLowerCase()
          // instead in the assignment below.
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            false,
            // mustUseProperty
            attributeName,
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type"
          // NOTE: if you add a camelCased prop to this list,
          // you'll need to set attributeName to name.toLowerCase()
          // instead in the assignment below.
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            false,
            // mustUseProperty
            attributeName,
            "http://www.w3.org/1999/xlink",
            false,
            // sanitizeURL
            false
          );
        });
        [
          "xml:base",
          "xml:lang",
          "xml:space"
          // NOTE: if you add a camelCased prop to this list,
          // you'll need to set attributeName to name.toLowerCase()
          // instead in the assignment below.
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            false,
            // mustUseProperty
            attributeName,
            "http://www.w3.org/XML/1998/namespace",
            false,
            // sanitizeURL
            false
          );
        });
        ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(
            attributeName,
            STRING,
            false,
            // mustUseProperty
            attributeName.toLowerCase(),
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        var xlinkHref = "xlinkHref";
        properties[xlinkHref] = new PropertyInfoRecord(
          "xlinkHref",
          STRING,
          false,
          // mustUseProperty
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          true,
          // sanitizeURL
          false
        );
        ["src", "href", "action", "formAction"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(
            attributeName,
            STRING,
            false,
            // mustUseProperty
            attributeName.toLowerCase(),
            // attributeName
            null,
            // attributeNamespace
            true,
            // sanitizeURL
            true
          );
        });
        var isUnitlessNumber = {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageOutset: true,
          borderImageSlice: true,
          borderImageWidth: true,
          boxFlex: true,
          boxFlexGroup: true,
          boxOrdinalGroup: true,
          columnCount: true,
          columns: true,
          flex: true,
          flexGrow: true,
          flexPositive: true,
          flexShrink: true,
          flexNegative: true,
          flexOrder: true,
          gridArea: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowSpan: true,
          gridRowStart: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnSpan: true,
          gridColumnStart: true,
          fontWeight: true,
          lineClamp: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          tabSize: true,
          widows: true,
          zIndex: true,
          zoom: true,
          // SVG-related properties
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeDasharray: true,
          strokeDashoffset: true,
          strokeMiterlimit: true,
          strokeOpacity: true,
          strokeWidth: true
        };
        function prefixKey(prefix2, key) {
          return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
        }
        var prefixes = ["Webkit", "ms", "Moz", "O"];
        Object.keys(isUnitlessNumber).forEach(function(prop) {
          prefixes.forEach(function(prefix2) {
            isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
          });
        });
        var hasReadOnlyValue = {
          button: true,
          checkbox: true,
          image: true,
          hidden: true,
          radio: true,
          reset: true,
          submit: true
        };
        function checkControlledValueProps(tagName, props) {
          {
            if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
              error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
            }
            if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
              error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
            }
          }
        }
        function isCustomComponent(tagName, props) {
          if (tagName.indexOf("-") === -1) {
            return typeof props.is === "string";
          }
          switch (tagName) {
            // These are reserved SVG and MathML elements.
            // We don't mind this list too much because we expect it to never grow.
            // The alternative is to track the namespace in a few places which is convoluted.
            // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }
        var ariaProperties = {
          "aria-current": 0,
          // state
          "aria-description": 0,
          "aria-details": 0,
          "aria-disabled": 0,
          // state
          "aria-hidden": 0,
          // state
          "aria-invalid": 0,
          // state
          "aria-keyshortcuts": 0,
          "aria-label": 0,
          "aria-roledescription": 0,
          // Widget Attributes
          "aria-autocomplete": 0,
          "aria-checked": 0,
          "aria-expanded": 0,
          "aria-haspopup": 0,
          "aria-level": 0,
          "aria-modal": 0,
          "aria-multiline": 0,
          "aria-multiselectable": 0,
          "aria-orientation": 0,
          "aria-placeholder": 0,
          "aria-pressed": 0,
          "aria-readonly": 0,
          "aria-required": 0,
          "aria-selected": 0,
          "aria-sort": 0,
          "aria-valuemax": 0,
          "aria-valuemin": 0,
          "aria-valuenow": 0,
          "aria-valuetext": 0,
          // Live Region Attributes
          "aria-atomic": 0,
          "aria-busy": 0,
          "aria-live": 0,
          "aria-relevant": 0,
          // Drag-and-Drop Attributes
          "aria-dropeffect": 0,
          "aria-grabbed": 0,
          // Relationship Attributes
          "aria-activedescendant": 0,
          "aria-colcount": 0,
          "aria-colindex": 0,
          "aria-colspan": 0,
          "aria-controls": 0,
          "aria-describedby": 0,
          "aria-errormessage": 0,
          "aria-flowto": 0,
          "aria-labelledby": 0,
          "aria-owns": 0,
          "aria-posinset": 0,
          "aria-rowcount": 0,
          "aria-rowindex": 0,
          "aria-rowspan": 0,
          "aria-setsize": 0
        };
        var warnedProperties = {};
        var rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
        var rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        function validateProperty(tagName, name) {
          {
            if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
              return true;
            }
            if (rARIACamel.test(name)) {
              var ariaName = "aria-" + name.slice(4).toLowerCase();
              var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
              if (correctName == null) {
                error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name);
                warnedProperties[name] = true;
                return true;
              }
              if (name !== correctName) {
                error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName);
                warnedProperties[name] = true;
                return true;
              }
            }
            if (rARIA.test(name)) {
              var lowerCasedName = name.toLowerCase();
              var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
              if (standardName == null) {
                warnedProperties[name] = true;
                return false;
              }
              if (name !== standardName) {
                error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties[name] = true;
                return true;
              }
            }
          }
          return true;
        }
        function warnInvalidARIAProps(type, props) {
          {
            var invalidProps = [];
            for (var key in props) {
              var isValid = validateProperty(type, key);
              if (!isValid) {
                invalidProps.push(key);
              }
            }
            var unknownPropString = invalidProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (invalidProps.length === 1) {
              error("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            } else if (invalidProps.length > 1) {
              error("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            }
          }
        }
        function validateProperties(type, props) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnInvalidARIAProps(type, props);
        }
        var didWarnValueNull = false;
        function validateProperties$1(type, props) {
          {
            if (type !== "input" && type !== "textarea" && type !== "select") {
              return;
            }
            if (props != null && props.value === null && !didWarnValueNull) {
              didWarnValueNull = true;
              if (type === "select" && props.multiple) {
                error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type);
              } else {
                error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type);
              }
            }
          }
        }
        var possibleStandardNames = {
          // HTML
          accept: "accept",
          acceptcharset: "acceptCharset",
          "accept-charset": "acceptCharset",
          accesskey: "accessKey",
          action: "action",
          allowfullscreen: "allowFullScreen",
          alt: "alt",
          as: "as",
          async: "async",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autocorrect: "autoCorrect",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          autosave: "autoSave",
          capture: "capture",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          challenge: "challenge",
          charset: "charSet",
          checked: "checked",
          children: "children",
          cite: "cite",
          class: "className",
          classid: "classID",
          classname: "className",
          cols: "cols",
          colspan: "colSpan",
          content: "content",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          controls: "controls",
          controlslist: "controlsList",
          coords: "coords",
          crossorigin: "crossOrigin",
          dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
          data: "data",
          datetime: "dateTime",
          default: "default",
          defaultchecked: "defaultChecked",
          defaultvalue: "defaultValue",
          defer: "defer",
          dir: "dir",
          disabled: "disabled",
          disablepictureinpicture: "disablePictureInPicture",
          disableremoteplayback: "disableRemotePlayback",
          download: "download",
          draggable: "draggable",
          enctype: "encType",
          enterkeyhint: "enterKeyHint",
          for: "htmlFor",
          form: "form",
          formmethod: "formMethod",
          formaction: "formAction",
          formenctype: "formEncType",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          headers: "headers",
          height: "height",
          hidden: "hidden",
          high: "high",
          href: "href",
          hreflang: "hrefLang",
          htmlfor: "htmlFor",
          httpequiv: "httpEquiv",
          "http-equiv": "httpEquiv",
          icon: "icon",
          id: "id",
          imagesizes: "imageSizes",
          imagesrcset: "imageSrcSet",
          innerhtml: "innerHTML",
          inputmode: "inputMode",
          integrity: "integrity",
          is: "is",
          itemid: "itemID",
          itemprop: "itemProp",
          itemref: "itemRef",
          itemscope: "itemScope",
          itemtype: "itemType",
          keyparams: "keyParams",
          keytype: "keyType",
          kind: "kind",
          label: "label",
          lang: "lang",
          list: "list",
          loop: "loop",
          low: "low",
          manifest: "manifest",
          marginwidth: "marginWidth",
          marginheight: "marginHeight",
          max: "max",
          maxlength: "maxLength",
          media: "media",
          mediagroup: "mediaGroup",
          method: "method",
          min: "min",
          minlength: "minLength",
          multiple: "multiple",
          muted: "muted",
          name: "name",
          nomodule: "noModule",
          nonce: "nonce",
          novalidate: "noValidate",
          open: "open",
          optimum: "optimum",
          pattern: "pattern",
          placeholder: "placeholder",
          playsinline: "playsInline",
          poster: "poster",
          preload: "preload",
          profile: "profile",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rel: "rel",
          required: "required",
          reversed: "reversed",
          role: "role",
          rows: "rows",
          rowspan: "rowSpan",
          sandbox: "sandbox",
          scope: "scope",
          scoped: "scoped",
          scrolling: "scrolling",
          seamless: "seamless",
          selected: "selected",
          shape: "shape",
          size: "size",
          sizes: "sizes",
          span: "span",
          spellcheck: "spellCheck",
          src: "src",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          start: "start",
          step: "step",
          style: "style",
          summary: "summary",
          tabindex: "tabIndex",
          target: "target",
          title: "title",
          type: "type",
          usemap: "useMap",
          value: "value",
          width: "width",
          wmode: "wmode",
          wrap: "wrap",
          // SVG
          about: "about",
          accentheight: "accentHeight",
          "accent-height": "accentHeight",
          accumulate: "accumulate",
          additive: "additive",
          alignmentbaseline: "alignmentBaseline",
          "alignment-baseline": "alignmentBaseline",
          allowreorder: "allowReorder",
          alphabetic: "alphabetic",
          amplitude: "amplitude",
          arabicform: "arabicForm",
          "arabic-form": "arabicForm",
          ascent: "ascent",
          attributename: "attributeName",
          attributetype: "attributeType",
          autoreverse: "autoReverse",
          azimuth: "azimuth",
          basefrequency: "baseFrequency",
          baselineshift: "baselineShift",
          "baseline-shift": "baselineShift",
          baseprofile: "baseProfile",
          bbox: "bbox",
          begin: "begin",
          bias: "bias",
          by: "by",
          calcmode: "calcMode",
          capheight: "capHeight",
          "cap-height": "capHeight",
          clip: "clip",
          clippath: "clipPath",
          "clip-path": "clipPath",
          clippathunits: "clipPathUnits",
          cliprule: "clipRule",
          "clip-rule": "clipRule",
          color: "color",
          colorinterpolation: "colorInterpolation",
          "color-interpolation": "colorInterpolation",
          colorinterpolationfilters: "colorInterpolationFilters",
          "color-interpolation-filters": "colorInterpolationFilters",
          colorprofile: "colorProfile",
          "color-profile": "colorProfile",
          colorrendering: "colorRendering",
          "color-rendering": "colorRendering",
          contentscripttype: "contentScriptType",
          contentstyletype: "contentStyleType",
          cursor: "cursor",
          cx: "cx",
          cy: "cy",
          d: "d",
          datatype: "datatype",
          decelerate: "decelerate",
          descent: "descent",
          diffuseconstant: "diffuseConstant",
          direction: "direction",
          display: "display",
          divisor: "divisor",
          dominantbaseline: "dominantBaseline",
          "dominant-baseline": "dominantBaseline",
          dur: "dur",
          dx: "dx",
          dy: "dy",
          edgemode: "edgeMode",
          elevation: "elevation",
          enablebackground: "enableBackground",
          "enable-background": "enableBackground",
          end: "end",
          exponent: "exponent",
          externalresourcesrequired: "externalResourcesRequired",
          fill: "fill",
          fillopacity: "fillOpacity",
          "fill-opacity": "fillOpacity",
          fillrule: "fillRule",
          "fill-rule": "fillRule",
          filter: "filter",
          filterres: "filterRes",
          filterunits: "filterUnits",
          floodopacity: "floodOpacity",
          "flood-opacity": "floodOpacity",
          floodcolor: "floodColor",
          "flood-color": "floodColor",
          focusable: "focusable",
          fontfamily: "fontFamily",
          "font-family": "fontFamily",
          fontsize: "fontSize",
          "font-size": "fontSize",
          fontsizeadjust: "fontSizeAdjust",
          "font-size-adjust": "fontSizeAdjust",
          fontstretch: "fontStretch",
          "font-stretch": "fontStretch",
          fontstyle: "fontStyle",
          "font-style": "fontStyle",
          fontvariant: "fontVariant",
          "font-variant": "fontVariant",
          fontweight: "fontWeight",
          "font-weight": "fontWeight",
          format: "format",
          from: "from",
          fx: "fx",
          fy: "fy",
          g1: "g1",
          g2: "g2",
          glyphname: "glyphName",
          "glyph-name": "glyphName",
          glyphorientationhorizontal: "glyphOrientationHorizontal",
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphorientationvertical: "glyphOrientationVertical",
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          hanging: "hanging",
          horizadvx: "horizAdvX",
          "horiz-adv-x": "horizAdvX",
          horizoriginx: "horizOriginX",
          "horiz-origin-x": "horizOriginX",
          ideographic: "ideographic",
          imagerendering: "imageRendering",
          "image-rendering": "imageRendering",
          in2: "in2",
          in: "in",
          inlist: "inlist",
          intercept: "intercept",
          k1: "k1",
          k2: "k2",
          k3: "k3",
          k4: "k4",
          k: "k",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          kerning: "kerning",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          letterspacing: "letterSpacing",
          "letter-spacing": "letterSpacing",
          lightingcolor: "lightingColor",
          "lighting-color": "lightingColor",
          limitingconeangle: "limitingConeAngle",
          local: "local",
          markerend: "markerEnd",
          "marker-end": "markerEnd",
          markerheight: "markerHeight",
          markermid: "markerMid",
          "marker-mid": "markerMid",
          markerstart: "markerStart",
          "marker-start": "markerStart",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          mask: "mask",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          mathematical: "mathematical",
          mode: "mode",
          numoctaves: "numOctaves",
          offset: "offset",
          opacity: "opacity",
          operator: "operator",
          order: "order",
          orient: "orient",
          orientation: "orientation",
          origin: "origin",
          overflow: "overflow",
          overlineposition: "overlinePosition",
          "overline-position": "overlinePosition",
          overlinethickness: "overlineThickness",
          "overline-thickness": "overlineThickness",
          paintorder: "paintOrder",
          "paint-order": "paintOrder",
          panose1: "panose1",
          "panose-1": "panose1",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointerevents: "pointerEvents",
          "pointer-events": "pointerEvents",
          points: "points",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          prefix: "prefix",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          property: "property",
          r: "r",
          radius: "radius",
          refx: "refX",
          refy: "refY",
          renderingintent: "renderingIntent",
          "rendering-intent": "renderingIntent",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          resource: "resource",
          restart: "restart",
          result: "result",
          results: "results",
          rotate: "rotate",
          rx: "rx",
          ry: "ry",
          scale: "scale",
          security: "security",
          seed: "seed",
          shaperendering: "shapeRendering",
          "shape-rendering": "shapeRendering",
          slope: "slope",
          spacing: "spacing",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          speed: "speed",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stemh: "stemh",
          stemv: "stemv",
          stitchtiles: "stitchTiles",
          stopcolor: "stopColor",
          "stop-color": "stopColor",
          stopopacity: "stopOpacity",
          "stop-opacity": "stopOpacity",
          strikethroughposition: "strikethroughPosition",
          "strikethrough-position": "strikethroughPosition",
          strikethroughthickness: "strikethroughThickness",
          "strikethrough-thickness": "strikethroughThickness",
          string: "string",
          stroke: "stroke",
          strokedasharray: "strokeDasharray",
          "stroke-dasharray": "strokeDasharray",
          strokedashoffset: "strokeDashoffset",
          "stroke-dashoffset": "strokeDashoffset",
          strokelinecap: "strokeLinecap",
          "stroke-linecap": "strokeLinecap",
          strokelinejoin: "strokeLinejoin",
          "stroke-linejoin": "strokeLinejoin",
          strokemiterlimit: "strokeMiterlimit",
          "stroke-miterlimit": "strokeMiterlimit",
          strokewidth: "strokeWidth",
          "stroke-width": "strokeWidth",
          strokeopacity: "strokeOpacity",
          "stroke-opacity": "strokeOpacity",
          suppresscontenteditablewarning: "suppressContentEditableWarning",
          suppresshydrationwarning: "suppressHydrationWarning",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textanchor: "textAnchor",
          "text-anchor": "textAnchor",
          textdecoration: "textDecoration",
          "text-decoration": "textDecoration",
          textlength: "textLength",
          textrendering: "textRendering",
          "text-rendering": "textRendering",
          to: "to",
          transform: "transform",
          typeof: "typeof",
          u1: "u1",
          u2: "u2",
          underlineposition: "underlinePosition",
          "underline-position": "underlinePosition",
          underlinethickness: "underlineThickness",
          "underline-thickness": "underlineThickness",
          unicode: "unicode",
          unicodebidi: "unicodeBidi",
          "unicode-bidi": "unicodeBidi",
          unicoderange: "unicodeRange",
          "unicode-range": "unicodeRange",
          unitsperem: "unitsPerEm",
          "units-per-em": "unitsPerEm",
          unselectable: "unselectable",
          valphabetic: "vAlphabetic",
          "v-alphabetic": "vAlphabetic",
          values: "values",
          vectoreffect: "vectorEffect",
          "vector-effect": "vectorEffect",
          version: "version",
          vertadvy: "vertAdvY",
          "vert-adv-y": "vertAdvY",
          vertoriginx: "vertOriginX",
          "vert-origin-x": "vertOriginX",
          vertoriginy: "vertOriginY",
          "vert-origin-y": "vertOriginY",
          vhanging: "vHanging",
          "v-hanging": "vHanging",
          videographic: "vIdeographic",
          "v-ideographic": "vIdeographic",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          visibility: "visibility",
          vmathematical: "vMathematical",
          "v-mathematical": "vMathematical",
          vocab: "vocab",
          widths: "widths",
          wordspacing: "wordSpacing",
          "word-spacing": "wordSpacing",
          writingmode: "writingMode",
          "writing-mode": "writingMode",
          x1: "x1",
          x2: "x2",
          x: "x",
          xchannelselector: "xChannelSelector",
          xheight: "xHeight",
          "x-height": "xHeight",
          xlinkactuate: "xlinkActuate",
          "xlink:actuate": "xlinkActuate",
          xlinkarcrole: "xlinkArcrole",
          "xlink:arcrole": "xlinkArcrole",
          xlinkhref: "xlinkHref",
          "xlink:href": "xlinkHref",
          xlinkrole: "xlinkRole",
          "xlink:role": "xlinkRole",
          xlinkshow: "xlinkShow",
          "xlink:show": "xlinkShow",
          xlinktitle: "xlinkTitle",
          "xlink:title": "xlinkTitle",
          xlinktype: "xlinkType",
          "xlink:type": "xlinkType",
          xmlbase: "xmlBase",
          "xml:base": "xmlBase",
          xmllang: "xmlLang",
          "xml:lang": "xmlLang",
          xmlns: "xmlns",
          "xml:space": "xmlSpace",
          xmlnsxlink: "xmlnsXlink",
          "xmlns:xlink": "xmlnsXlink",
          xmlspace: "xmlSpace",
          y1: "y1",
          y2: "y2",
          y: "y",
          ychannelselector: "yChannelSelector",
          z: "z",
          zoomandpan: "zoomAndPan"
        };
        var validateProperty$1 = function() {
        };
        {
          var warnedProperties$1 = {};
          var EVENT_NAME_REGEX = /^on./;
          var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
          var rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
          var rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
          validateProperty$1 = function(tagName, name, value, eventRegistry) {
            if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
              return true;
            }
            var lowerCasedName = name.toLowerCase();
            if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
              error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (eventRegistry != null) {
              var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
              if (registrationNameDependencies.hasOwnProperty(name)) {
                return true;
              }
              var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
              if (registrationName != null) {
                error("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName);
                warnedProperties$1[name] = true;
                return true;
              }
              if (EVENT_NAME_REGEX.test(name)) {
                error("Unknown event handler property `%s`. It will be ignored.", name);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (EVENT_NAME_REGEX.test(name)) {
              if (INVALID_EVENT_NAME_REGEX.test(name)) {
                error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
              return true;
            }
            if (lowerCasedName === "innerhtml") {
              error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "aria") {
              error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value !== "string") {
              error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "number" && isNaN(value)) {
              error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name);
              warnedProperties$1[name] = true;
              return true;
            }
            var propertyInfo = getPropertyInfo(name);
            var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
            if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
              var standardName = possibleStandardNames[lowerCasedName];
              if (standardName !== name) {
                error("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (!isReserved && name !== lowerCasedName) {
              error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              if (value) {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name);
              } else {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (isReserved) {
              return true;
            }
            if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              warnedProperties$1[name] = true;
              return false;
            }
            if ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
              error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
              warnedProperties$1[name] = true;
              return true;
            }
            return true;
          };
        }
        var warnUnknownProperties = function(type, props, eventRegistry) {
          {
            var unknownProps = [];
            for (var key in props) {
              var isValid = validateProperty$1(type, key, props[key], eventRegistry);
              if (!isValid) {
                unknownProps.push(key);
              }
            }
            var unknownPropString = unknownProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (unknownProps.length === 1) {
              error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            } else if (unknownProps.length > 1) {
              error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            }
          }
        };
        function validateProperties$2(type, props, eventRegistry) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnUnknownProperties(type, props, eventRegistry);
        }
        var warnValidStyle = function() {
        };
        {
          var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
          var msPattern = /^-ms-/;
          var hyphenPattern = /-(.)/g;
          var badStyleValueWithSemicolonPattern = /;\s*$/;
          var warnedStyleNames = {};
          var warnedStyleValues = {};
          var warnedForNaNValue = false;
          var warnedForInfinityValue = false;
          var camelize = function(string) {
            return string.replace(hyphenPattern, function(_, character) {
              return character.toUpperCase();
            });
          };
          var warnHyphenatedStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error(
              "Unsupported style property %s. Did you mean %s?",
              name,
              // As Andi Smith suggests
              // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
              // is converted to lowercase `ms`.
              camelize(name.replace(msPattern, "ms-"))
            );
          };
          var warnBadVendoredStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1));
          };
          var warnStyleValueWithSemicolon = function(name, value) {
            if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
              return;
            }
            warnedStyleValues[value] = true;
            error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, ""));
          };
          var warnStyleValueIsNaN = function(name, value) {
            if (warnedForNaNValue) {
              return;
            }
            warnedForNaNValue = true;
            error("`NaN` is an invalid value for the `%s` css style property.", name);
          };
          var warnStyleValueIsInfinity = function(name, value) {
            if (warnedForInfinityValue) {
              return;
            }
            warnedForInfinityValue = true;
            error("`Infinity` is an invalid value for the `%s` css style property.", name);
          };
          warnValidStyle = function(name, value) {
            if (name.indexOf("-") > -1) {
              warnHyphenatedStyleName(name);
            } else if (badVendoredStyleNamePattern.test(name)) {
              warnBadVendoredStyleName(name);
            } else if (badStyleValueWithSemicolonPattern.test(value)) {
              warnStyleValueWithSemicolon(name, value);
            }
            if (typeof value === "number") {
              if (isNaN(value)) {
                warnStyleValueIsNaN(name, value);
              } else if (!isFinite(value)) {
                warnStyleValueIsInfinity(name, value);
              }
            }
          };
        }
        var warnValidStyle$1 = warnValidStyle;
        var matchHtmlRegExp = /["'&<>]/;
        function escapeHtml(string) {
          {
            checkHtmlStringCoercion(string);
          }
          var str = "" + string;
          var match = matchHtmlRegExp.exec(str);
          if (!match) {
            return str;
          }
          var escape;
          var html = "";
          var index;
          var lastIndex = 0;
          for (index = match.index; index < str.length; index++) {
            switch (str.charCodeAt(index)) {
              case 34:
                escape = "&quot;";
                break;
              case 38:
                escape = "&amp;";
                break;
              case 39:
                escape = "&#x27;";
                break;
              case 60:
                escape = "&lt;";
                break;
              case 62:
                escape = "&gt;";
                break;
              default:
                continue;
            }
            if (lastIndex !== index) {
              html += str.substring(lastIndex, index);
            }
            lastIndex = index + 1;
            html += escape;
          }
          return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
        }
        function escapeTextForBrowser(text) {
          if (typeof text === "boolean" || typeof text === "number") {
            return "" + text;
          }
          return escapeHtml(text);
        }
        var uppercasePattern = /([A-Z])/g;
        var msPattern$1 = /^ms-/;
        function hyphenateStyleName(name) {
          return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern$1, "-ms-");
        }
        var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
        var didWarn = false;
        function sanitizeURL(url) {
          {
            if (!didWarn && isJavaScriptProtocol.test(url)) {
              didWarn = true;
              error("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url));
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        var startInlineScript = stringToPrecomputedChunk("<script>");
        var endInlineScript = stringToPrecomputedChunk("</script>");
        var startScriptSrc = stringToPrecomputedChunk('<script src="');
        var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
        var endAsyncScript = stringToPrecomputedChunk('" async=""></script>');
        function escapeBootstrapScriptContent(scriptText) {
          {
            checkHtmlStringCoercion(scriptText);
          }
          return ("" + scriptText).replace(scriptRegex, scriptReplacer);
        }
        var scriptRegex = /(<\/|<)(s)(cript)/gi;
        var scriptReplacer = function(match, prefix2, s, suffix) {
          return "" + prefix2 + (s === "s" ? "\\u0073" : "\\u0053") + suffix;
        };
        function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
          var idPrefix = identifierPrefix === void 0 ? "" : identifierPrefix;
          var inlineScriptWithNonce = nonce === void 0 ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
          var bootstrapChunks = [];
          if (bootstrapScriptContent !== void 0) {
            bootstrapChunks.push(inlineScriptWithNonce, stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)), endInlineScript);
          }
          if (bootstrapScripts !== void 0) {
            for (var i = 0; i < bootstrapScripts.length; i++) {
              bootstrapChunks.push(startScriptSrc, stringToChunk(escapeTextForBrowser(bootstrapScripts[i])), endAsyncScript);
            }
          }
          if (bootstrapModules !== void 0) {
            for (var _i = 0; _i < bootstrapModules.length; _i++) {
              bootstrapChunks.push(startModuleSrc, stringToChunk(escapeTextForBrowser(bootstrapModules[_i])), endAsyncScript);
            }
          }
          return {
            bootstrapChunks,
            startInlineScript: inlineScriptWithNonce,
            placeholderPrefix: stringToPrecomputedChunk(idPrefix + "P:"),
            segmentPrefix: stringToPrecomputedChunk(idPrefix + "S:"),
            boundaryPrefix: idPrefix + "B:",
            idPrefix,
            nextSuspenseID: 0,
            sentCompleteSegmentFunction: false,
            sentCompleteBoundaryFunction: false,
            sentClientRenderFunction: false
          };
        }
        var ROOT_HTML_MODE = 0;
        var HTML_MODE = 1;
        var SVG_MODE = 2;
        var MATHML_MODE = 3;
        var HTML_TABLE_MODE = 4;
        var HTML_TABLE_BODY_MODE = 5;
        var HTML_TABLE_ROW_MODE = 6;
        var HTML_COLGROUP_MODE = 7;
        function createFormatContext(insertionMode, selectedValue) {
          return {
            insertionMode,
            selectedValue
          };
        }
        function getChildFormatContext(parentContext, type, props) {
          switch (type) {
            case "select":
              return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue);
            case "svg":
              return createFormatContext(SVG_MODE, null);
            case "math":
              return createFormatContext(MATHML_MODE, null);
            case "foreignObject":
              return createFormatContext(HTML_MODE, null);
            // Table parents are special in that their children can only be created at all if they're
            // wrapped in a table parent. So we need to encode that we're entering this mode.
            case "table":
              return createFormatContext(HTML_TABLE_MODE, null);
            case "thead":
            case "tbody":
            case "tfoot":
              return createFormatContext(HTML_TABLE_BODY_MODE, null);
            case "colgroup":
              return createFormatContext(HTML_COLGROUP_MODE, null);
            case "tr":
              return createFormatContext(HTML_TABLE_ROW_MODE, null);
          }
          if (parentContext.insertionMode >= HTML_TABLE_MODE) {
            return createFormatContext(HTML_MODE, null);
          }
          if (parentContext.insertionMode === ROOT_HTML_MODE) {
            return createFormatContext(HTML_MODE, null);
          }
          return parentContext;
        }
        var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
        function assignSuspenseBoundaryID(responseState) {
          var generatedID = responseState.nextSuspenseID++;
          return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
        }
        function makeId(responseState, treeId, localId) {
          var idPrefix = responseState.idPrefix;
          var id = ":" + idPrefix + "R" + treeId;
          if (localId > 0) {
            id += "H" + localId.toString(32);
          }
          return id + ":";
        }
        function encodeHTMLTextNode(text) {
          return escapeTextForBrowser(text);
        }
        var textSeparator = stringToPrecomputedChunk("<!-- -->");
        function pushTextInstance(target, text, responseState, textEmbedded) {
          if (text === "") {
            return textEmbedded;
          }
          if (textEmbedded) {
            target.push(textSeparator);
          }
          target.push(stringToChunk(encodeHTMLTextNode(text)));
          return true;
        }
        function pushSegmentFinale(target, responseState, lastPushedText, textEmbedded) {
          if (lastPushedText && textEmbedded) {
            target.push(textSeparator);
          }
        }
        var styleNameCache = /* @__PURE__ */ new Map();
        function processStyleName(styleName) {
          var chunk = styleNameCache.get(styleName);
          if (chunk !== void 0) {
            return chunk;
          }
          var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
          styleNameCache.set(styleName, result);
          return result;
        }
        var styleAttributeStart = stringToPrecomputedChunk(' style="');
        var styleAssign = stringToPrecomputedChunk(":");
        var styleSeparator = stringToPrecomputedChunk(";");
        function pushStyle(target, responseState, style) {
          if (typeof style !== "object") {
            throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
          }
          var isFirst = true;
          for (var styleName in style) {
            if (!hasOwnProperty.call(style, styleName)) {
              continue;
            }
            var styleValue = style[styleName];
            if (styleValue == null || typeof styleValue === "boolean" || styleValue === "") {
              continue;
            }
            var nameChunk = void 0;
            var valueChunk = void 0;
            var isCustomProperty = styleName.indexOf("--") === 0;
            if (isCustomProperty) {
              nameChunk = stringToChunk(escapeTextForBrowser(styleName));
              {
                checkCSSPropertyStringCoercion(styleValue, styleName);
              }
              valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
            } else {
              {
                warnValidStyle$1(styleName, styleValue);
              }
              nameChunk = processStyleName(styleName);
              if (typeof styleValue === "number") {
                if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName)) {
                  valueChunk = stringToChunk(styleValue + "px");
                } else {
                  valueChunk = stringToChunk("" + styleValue);
                }
              } else {
                {
                  checkCSSPropertyStringCoercion(styleValue, styleName);
                }
                valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
              }
            }
            if (isFirst) {
              isFirst = false;
              target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
            } else {
              target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
            }
          }
          if (!isFirst) {
            target.push(attributeEnd);
          }
        }
        var attributeSeparator = stringToPrecomputedChunk(" ");
        var attributeAssign = stringToPrecomputedChunk('="');
        var attributeEnd = stringToPrecomputedChunk('"');
        var attributeEmptyString = stringToPrecomputedChunk('=""');
        function pushAttribute(target, responseState, name, value) {
          switch (name) {
            case "style": {
              pushStyle(target, responseState, value);
              return;
            }
            case "defaultValue":
            case "defaultChecked":
            // These shouldn't be set as attributes on generic HTML elements.
            case "innerHTML":
            // Must use dangerouslySetInnerHTML instead.
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              return;
          }
          if (
            // shouldIgnoreAttribute
            // We have already filtered out null/undefined and reserved words.
            name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N")
          ) {
            return;
          }
          var propertyInfo = getPropertyInfo(name);
          if (propertyInfo !== null) {
            switch (typeof value) {
              case "function":
              // $FlowIssue symbol is perfectly valid here
              case "symbol":
                return;
              case "boolean": {
                if (!propertyInfo.acceptsBooleans) {
                  return;
                }
              }
            }
            var attributeName = propertyInfo.attributeName;
            var attributeNameChunk = stringToChunk(attributeName);
            switch (propertyInfo.type) {
              case BOOLEAN:
                if (value) {
                  target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                }
                return;
              case OVERLOADED_BOOLEAN:
                if (value === true) {
                  target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                } else if (value === false) ;
                else {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                return;
              case NUMERIC:
                if (!isNaN(value)) {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                break;
              case POSITIVE_NUMERIC:
                if (!isNaN(value) && value >= 1) {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                break;
              default:
                if (propertyInfo.sanitizeURL) {
                  {
                    checkAttributeStringCoercion(value, attributeName);
                  }
                  value = "" + value;
                  sanitizeURL(value);
                }
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
            }
          } else if (isAttributeNameSafe(name)) {
            switch (typeof value) {
              case "function":
              // $FlowIssue symbol is perfectly valid here
              case "symbol":
                return;
              case "boolean": {
                var prefix2 = name.toLowerCase().slice(0, 5);
                if (prefix2 !== "data-" && prefix2 !== "aria-") {
                  return;
                }
              }
            }
            target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
          }
        }
        var endOfStartTag = stringToPrecomputedChunk(">");
        var endOfStartTagSelfClosing = stringToPrecomputedChunk("/>");
        function pushInnerHTML(target, innerHTML, children) {
          if (innerHTML != null) {
            if (children != null) {
              throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            }
            if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
              throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            }
            var html = innerHTML.__html;
            if (html !== null && html !== void 0) {
              {
                checkHtmlStringCoercion(html);
              }
              target.push(stringToChunk("" + html));
            }
          }
        }
        var didWarnDefaultInputValue = false;
        var didWarnDefaultChecked = false;
        var didWarnDefaultSelectValue = false;
        var didWarnDefaultTextareaValue = false;
        var didWarnInvalidOptionChildren = false;
        var didWarnInvalidOptionInnerHTML = false;
        var didWarnSelectedSetOnOption = false;
        function checkSelectProp(props, propName) {
          {
            var value = props[propName];
            if (value != null) {
              var array = isArray(value);
              if (props.multiple && !array) {
                error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName);
              } else if (!props.multiple && array) {
                error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName);
              }
            }
          }
        }
        function pushStartSelect(target, props, responseState) {
          {
            checkControlledValueProps("select", props);
            checkSelectProp(props, "value");
            checkSelectProp(props, "defaultValue");
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultSelectValue) {
              error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components");
              didWarnDefaultSelectValue = true;
            }
          }
          target.push(startChunkForTag("select"));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        function flattenOptionChildren(children) {
          var content = "";
          React5.Children.forEach(children, function(child) {
            if (child == null) {
              return;
            }
            content += child;
            {
              if (!didWarnInvalidOptionChildren && typeof child !== "string" && typeof child !== "number") {
                didWarnInvalidOptionChildren = true;
                error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.");
              }
            }
          });
          return content;
        }
        var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');
        function pushStartOption(target, props, responseState, formatContext) {
          var selectedValue = formatContext.selectedValue;
          target.push(startChunkForTag("option"));
          var children = null;
          var value = null;
          var selected = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "selected":
                  selected = propValue;
                  {
                    if (!didWarnSelectedSetOnOption) {
                      error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.");
                      didWarnSelectedSetOnOption = true;
                    }
                  }
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                // eslint-disable-next-line-no-fallthrough
                case "value":
                  value = propValue;
                // We intentionally fallthrough to also set the attribute on the node.
                // eslint-disable-next-line-no-fallthrough
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (selectedValue != null) {
            var stringValue;
            if (value !== null) {
              {
                checkAttributeStringCoercion(value, "value");
              }
              stringValue = "" + value;
            } else {
              {
                if (innerHTML !== null) {
                  if (!didWarnInvalidOptionInnerHTML) {
                    didWarnInvalidOptionInnerHTML = true;
                    error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.");
                  }
                }
              }
              stringValue = flattenOptionChildren(children);
            }
            if (isArray(selectedValue)) {
              for (var i = 0; i < selectedValue.length; i++) {
                {
                  checkAttributeStringCoercion(selectedValue[i], "value");
                }
                var v = "" + selectedValue[i];
                if (v === stringValue) {
                  target.push(selectedMarkerAttribute);
                  break;
                }
              }
            } else {
              {
                checkAttributeStringCoercion(selectedValue, "select.value");
              }
              if ("" + selectedValue === stringValue) {
                target.push(selectedMarkerAttribute);
              }
            }
          } else if (selected) {
            target.push(selectedMarkerAttribute);
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        function pushInput(target, props, responseState) {
          {
            checkControlledValueProps("input", props);
            if (props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnDefaultChecked) {
              error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
              didWarnDefaultChecked = true;
            }
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultInputValue) {
              error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
              didWarnDefaultInputValue = true;
            }
          }
          target.push(startChunkForTag("input"));
          var value = null;
          var defaultValue = null;
          var checked = null;
          var defaultChecked = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                // eslint-disable-next-line-no-fallthrough
                case "defaultChecked":
                  defaultChecked = propValue;
                  break;
                case "defaultValue":
                  defaultValue = propValue;
                  break;
                case "checked":
                  checked = propValue;
                  break;
                case "value":
                  value = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (checked !== null) {
            pushAttribute(target, responseState, "checked", checked);
          } else if (defaultChecked !== null) {
            pushAttribute(target, responseState, "checked", defaultChecked);
          }
          if (value !== null) {
            pushAttribute(target, responseState, "value", value);
          } else if (defaultValue !== null) {
            pushAttribute(target, responseState, "value", defaultValue);
          }
          target.push(endOfStartTagSelfClosing);
          return null;
        }
        function pushStartTextArea(target, props, responseState) {
          {
            checkControlledValueProps("textarea", props);
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultTextareaValue) {
              error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components");
              didWarnDefaultTextareaValue = true;
            }
          }
          target.push(startChunkForTag("textarea"));
          var value = null;
          var defaultValue = null;
          var children = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "value":
                  value = propValue;
                  break;
                case "defaultValue":
                  defaultValue = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
                // eslint-disable-next-line-no-fallthrough
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (value === null && defaultValue !== null) {
            value = defaultValue;
          }
          target.push(endOfStartTag);
          if (children != null) {
            {
              error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
            }
            if (value != null) {
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            }
            if (isArray(children)) {
              if (children.length > 1) {
                throw new Error("<textarea> can only have at most one child.");
              }
              {
                checkHtmlStringCoercion(children[0]);
              }
              value = "" + children[0];
            }
            {
              checkHtmlStringCoercion(children);
            }
            value = "" + children;
          }
          if (typeof value === "string" && value[0] === "\n") {
            target.push(leadingNewline);
          }
          if (value !== null) {
            {
              checkAttributeStringCoercion(value, "value");
            }
            target.push(stringToChunk(encodeHTMLTextNode("" + value)));
          }
          return null;
        }
        function pushSelfClosing(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                // eslint-disable-next-line-no-fallthrough
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTagSelfClosing);
          return null;
        }
        function pushStartMenuItem(target, props, responseState) {
          target.push(startChunkForTag("menuitem"));
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
                // eslint-disable-next-line-no-fallthrough
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          return null;
        }
        function pushStartTitle(target, props, responseState) {
          target.push(startChunkForTag("title"));
          var children = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
                // eslint-disable-next-line-no-fallthrough
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          {
            var child = Array.isArray(children) && children.length < 2 ? children[0] || null : children;
            if (Array.isArray(children) && children.length > 1) {
              error("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
            } else if (child != null && child.$$typeof != null) {
              error("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
            } else if (child != null && typeof child !== "string" && typeof child !== "number") {
              error("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
            }
          }
          return children;
        }
        function pushStartGenericElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          if (typeof children === "string") {
            target.push(stringToChunk(encodeHTMLTextNode(children)));
            return null;
          }
          return children;
        }
        function pushStartCustomElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                case "style":
                  pushStyle(target, responseState, propValue);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  if (isAttributeNameSafe(propKey) && typeof propValue !== "function" && typeof propValue !== "symbol") {
                    target.push(attributeSeparator, stringToChunk(propKey), attributeAssign, stringToChunk(escapeTextForBrowser(propValue)), attributeEnd);
                  }
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        var leadingNewline = stringToPrecomputedChunk("\n");
        function pushStartPreformattedElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          if (innerHTML != null) {
            if (children != null) {
              throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            }
            if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
              throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            }
            var html = innerHTML.__html;
            if (html !== null && html !== void 0) {
              if (typeof html === "string" && html.length > 0 && html[0] === "\n") {
                target.push(leadingNewline, stringToChunk(html));
              } else {
                {
                  checkHtmlStringCoercion(html);
                }
                target.push(stringToChunk("" + html));
              }
            }
          }
          if (typeof children === "string" && children[0] === "\n") {
            target.push(leadingNewline);
          }
          return children;
        }
        var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
        var validatedTagCache = /* @__PURE__ */ new Map();
        function startChunkForTag(tag) {
          var tagStartChunk = validatedTagCache.get(tag);
          if (tagStartChunk === void 0) {
            if (!VALID_TAG_REGEX.test(tag)) {
              throw new Error("Invalid tag: " + tag);
            }
            tagStartChunk = stringToPrecomputedChunk("<" + tag);
            validatedTagCache.set(tag, tagStartChunk);
          }
          return tagStartChunk;
        }
        var DOCTYPE = stringToPrecomputedChunk("<!DOCTYPE html>");
        function pushStartInstance(target, type, props, responseState, formatContext) {
          {
            validateProperties(type, props);
            validateProperties$1(type, props);
            validateProperties$2(type, props, null);
            if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
              error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
            }
            if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
              if (type.indexOf("-") === -1 && typeof props.is !== "string" && type.toLowerCase() !== type) {
                error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
              }
            }
          }
          switch (type) {
            // Special tags
            case "select":
              return pushStartSelect(target, props, responseState);
            case "option":
              return pushStartOption(target, props, responseState, formatContext);
            case "textarea":
              return pushStartTextArea(target, props, responseState);
            case "input":
              return pushInput(target, props, responseState);
            case "menuitem":
              return pushStartMenuItem(target, props, responseState);
            case "title":
              return pushStartTitle(target, props, responseState);
            // Newline eating tags
            case "listing":
            case "pre": {
              return pushStartPreformattedElement(target, props, type, responseState);
            }
            // Omitted close tags
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr": {
              return pushSelfClosing(target, props, type, responseState);
            }
            // These are reserved SVG and MathML elements, that are never custom elements.
            // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": {
              return pushStartGenericElement(target, props, type, responseState);
            }
            case "html": {
              if (formatContext.insertionMode === ROOT_HTML_MODE) {
                target.push(DOCTYPE);
              }
              return pushStartGenericElement(target, props, type, responseState);
            }
            default: {
              if (type.indexOf("-") === -1 && typeof props.is !== "string") {
                return pushStartGenericElement(target, props, type, responseState);
              } else {
                return pushStartCustomElement(target, props, type, responseState);
              }
            }
          }
        }
        var endTag1 = stringToPrecomputedChunk("</");
        var endTag2 = stringToPrecomputedChunk(">");
        function pushEndInstance(target, type, props) {
          switch (type) {
            // Omitted close tags
            // TODO: Instead of repeating this switch we could try to pass a flag from above.
            // That would require returning a tuple. Which might be ok if it gets inlined.
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "input":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr": {
              break;
            }
            default: {
              target.push(endTag1, stringToChunk(type), endTag2);
            }
          }
        }
        function writeCompletedRoot(destination, responseState) {
          var bootstrapChunks = responseState.bootstrapChunks;
          var i = 0;
          for (; i < bootstrapChunks.length - 1; i++) {
            writeChunk(destination, bootstrapChunks[i]);
          }
          if (i < bootstrapChunks.length) {
            return writeChunkAndReturn(destination, bootstrapChunks[i]);
          }
          return true;
        }
        var placeholder1 = stringToPrecomputedChunk('<template id="');
        var placeholder2 = stringToPrecomputedChunk('"></template>');
        function writePlaceholder(destination, responseState, id) {
          writeChunk(destination, placeholder1);
          writeChunk(destination, responseState.placeholderPrefix);
          var formattedID = stringToChunk(id.toString(16));
          writeChunk(destination, formattedID);
          return writeChunkAndReturn(destination, placeholder2);
        }
        var startCompletedSuspenseBoundary = stringToPrecomputedChunk("<!--$-->");
        var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
        var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
        var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk("<!--$!-->");
        var endSuspenseBoundary = stringToPrecomputedChunk("<!--/$-->");
        var clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk("<template");
        var clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"');
        var clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="');
        var clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="');
        var clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="');
        var clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk("></template>");
        function writeStartCompletedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
        }
        function writeStartPendingSuspenseBoundary(destination, responseState, id) {
          writeChunk(destination, startPendingSuspenseBoundary1);
          if (id === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          writeChunk(destination, id);
          return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
        }
        function writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMesssage, errorComponentStack) {
          var result;
          result = writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
          writeChunk(destination, clientRenderedSuspenseBoundaryError1);
          if (errorDigest) {
            writeChunk(destination, clientRenderedSuspenseBoundaryError1A);
            writeChunk(destination, stringToChunk(escapeTextForBrowser(errorDigest)));
            writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
          }
          {
            if (errorMesssage) {
              writeChunk(destination, clientRenderedSuspenseBoundaryError1B);
              writeChunk(destination, stringToChunk(escapeTextForBrowser(errorMesssage)));
              writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
            }
            if (errorComponentStack) {
              writeChunk(destination, clientRenderedSuspenseBoundaryError1C);
              writeChunk(destination, stringToChunk(escapeTextForBrowser(errorComponentStack)));
              writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
            }
          }
          result = writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
          return result;
        }
        function writeEndCompletedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        function writeEndPendingSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
        var startSegmentHTML2 = stringToPrecomputedChunk('">');
        var endSegmentHTML = stringToPrecomputedChunk("</div>");
        var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
        var startSegmentSVG2 = stringToPrecomputedChunk('">');
        var endSegmentSVG = stringToPrecomputedChunk("</svg>");
        var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
        var startSegmentMathML2 = stringToPrecomputedChunk('">');
        var endSegmentMathML = stringToPrecomputedChunk("</math>");
        var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
        var startSegmentTable2 = stringToPrecomputedChunk('">');
        var endSegmentTable = stringToPrecomputedChunk("</table>");
        var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
        var startSegmentTableBody2 = stringToPrecomputedChunk('">');
        var endSegmentTableBody = stringToPrecomputedChunk("</tbody></table>");
        var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
        var startSegmentTableRow2 = stringToPrecomputedChunk('">');
        var endSegmentTableRow = stringToPrecomputedChunk("</tr></table>");
        var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
        var startSegmentColGroup2 = stringToPrecomputedChunk('">');
        var endSegmentColGroup = stringToPrecomputedChunk("</colgroup></table>");
        function writeStartSegment(destination, responseState, formatContext, id) {
          switch (formatContext.insertionMode) {
            case ROOT_HTML_MODE:
            case HTML_MODE: {
              writeChunk(destination, startSegmentHTML);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentHTML2);
            }
            case SVG_MODE: {
              writeChunk(destination, startSegmentSVG);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentSVG2);
            }
            case MATHML_MODE: {
              writeChunk(destination, startSegmentMathML);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentMathML2);
            }
            case HTML_TABLE_MODE: {
              writeChunk(destination, startSegmentTable);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTable2);
            }
            // TODO: For the rest of these, there will be extra wrapper nodes that never
            // get deleted from the document. We need to delete the table too as part
            // of the injected scripts. They are invisible though so it's not too terrible
            // and it's kind of an edge case to suspend in a table. Totally supported though.
            case HTML_TABLE_BODY_MODE: {
              writeChunk(destination, startSegmentTableBody);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTableBody2);
            }
            case HTML_TABLE_ROW_MODE: {
              writeChunk(destination, startSegmentTableRow);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTableRow2);
            }
            case HTML_COLGROUP_MODE: {
              writeChunk(destination, startSegmentColGroup);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentColGroup2);
            }
            default: {
              throw new Error("Unknown insertion mode. This is a bug in React.");
            }
          }
        }
        function writeEndSegment(destination, formatContext) {
          switch (formatContext.insertionMode) {
            case ROOT_HTML_MODE:
            case HTML_MODE: {
              return writeChunkAndReturn(destination, endSegmentHTML);
            }
            case SVG_MODE: {
              return writeChunkAndReturn(destination, endSegmentSVG);
            }
            case MATHML_MODE: {
              return writeChunkAndReturn(destination, endSegmentMathML);
            }
            case HTML_TABLE_MODE: {
              return writeChunkAndReturn(destination, endSegmentTable);
            }
            case HTML_TABLE_BODY_MODE: {
              return writeChunkAndReturn(destination, endSegmentTableBody);
            }
            case HTML_TABLE_ROW_MODE: {
              return writeChunkAndReturn(destination, endSegmentTableRow);
            }
            case HTML_COLGROUP_MODE: {
              return writeChunkAndReturn(destination, endSegmentColGroup);
            }
            default: {
              throw new Error("Unknown insertion mode. This is a bug in React.");
            }
          }
        }
        var completeSegmentFunction = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}";
        var completeBoundaryFunction = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
        var clientRenderFunction = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}';
        var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("');
        var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
        var completeSegmentScript2 = stringToPrecomputedChunk('","');
        var completeSegmentScript3 = stringToPrecomputedChunk('")</script>');
        function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentCompleteSegmentFunction) {
            responseState.sentCompleteSegmentFunction = true;
            writeChunk(destination, completeSegmentScript1Full);
          } else {
            writeChunk(destination, completeSegmentScript1Partial);
          }
          writeChunk(destination, responseState.segmentPrefix);
          var formattedID = stringToChunk(contentSegmentID.toString(16));
          writeChunk(destination, formattedID);
          writeChunk(destination, completeSegmentScript2);
          writeChunk(destination, responseState.placeholderPrefix);
          writeChunk(destination, formattedID);
          return writeChunkAndReturn(destination, completeSegmentScript3);
        }
        var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("');
        var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
        var completeBoundaryScript2 = stringToPrecomputedChunk('","');
        var completeBoundaryScript3 = stringToPrecomputedChunk('")</script>');
        function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentCompleteBoundaryFunction) {
            responseState.sentCompleteBoundaryFunction = true;
            writeChunk(destination, completeBoundaryScript1Full);
          } else {
            writeChunk(destination, completeBoundaryScript1Partial);
          }
          if (boundaryID === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          var formattedContentID = stringToChunk(contentSegmentID.toString(16));
          writeChunk(destination, boundaryID);
          writeChunk(destination, completeBoundaryScript2);
          writeChunk(destination, responseState.segmentPrefix);
          writeChunk(destination, formattedContentID);
          return writeChunkAndReturn(destination, completeBoundaryScript3);
        }
        var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("');
        var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
        var clientRenderScript1A = stringToPrecomputedChunk('"');
        var clientRenderScript2 = stringToPrecomputedChunk(")</script>");
        var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(",");
        function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID, errorDigest, errorMessage, errorComponentStack) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentClientRenderFunction) {
            responseState.sentClientRenderFunction = true;
            writeChunk(destination, clientRenderScript1Full);
          } else {
            writeChunk(destination, clientRenderScript1Partial);
          }
          if (boundaryID === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          writeChunk(destination, boundaryID);
          writeChunk(destination, clientRenderScript1A);
          if (errorDigest || errorMessage || errorComponentStack) {
            writeChunk(destination, clientRenderErrorScriptArgInterstitial);
            writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest || "")));
          }
          if (errorMessage || errorComponentStack) {
            writeChunk(destination, clientRenderErrorScriptArgInterstitial);
            writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorMessage || "")));
          }
          if (errorComponentStack) {
            writeChunk(destination, clientRenderErrorScriptArgInterstitial);
            writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorComponentStack)));
          }
          return writeChunkAndReturn(destination, clientRenderScript2);
        }
        var regexForJSStringsInScripts = /[<\u2028\u2029]/g;
        function escapeJSStringsForInstructionScripts(input) {
          var escaped = JSON.stringify(input);
          return escaped.replace(regexForJSStringsInScripts, function(match) {
            switch (match) {
              // santizing breaking out of strings and script tags
              case "<":
                return "\\u003c";
              case "\u2028":
                return "\\u2028";
              case "\u2029":
                return "\\u2029";
              default: {
                throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
              }
            }
          });
        }
        function createResponseState$1(generateStaticMarkup, identifierPrefix) {
          var responseState = createResponseState(identifierPrefix, void 0);
          return {
            // Keep this in sync with ReactDOMServerFormatConfig
            bootstrapChunks: responseState.bootstrapChunks,
            startInlineScript: responseState.startInlineScript,
            placeholderPrefix: responseState.placeholderPrefix,
            segmentPrefix: responseState.segmentPrefix,
            boundaryPrefix: responseState.boundaryPrefix,
            idPrefix: responseState.idPrefix,
            nextSuspenseID: responseState.nextSuspenseID,
            sentCompleteSegmentFunction: responseState.sentCompleteSegmentFunction,
            sentCompleteBoundaryFunction: responseState.sentCompleteBoundaryFunction,
            sentClientRenderFunction: responseState.sentClientRenderFunction,
            // This is an extra field for the legacy renderer
            generateStaticMarkup
          };
        }
        function createRootFormatContext() {
          return {
            insertionMode: HTML_MODE,
            // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
            selectedValue: null
          };
        }
        function pushTextInstance$1(target, text, responseState, textEmbedded) {
          if (responseState.generateStaticMarkup) {
            target.push(stringToChunk(escapeTextForBrowser(text)));
            return false;
          } else {
            return pushTextInstance(target, text, responseState, textEmbedded);
          }
        }
        function pushSegmentFinale$1(target, responseState, lastPushedText, textEmbedded) {
          if (responseState.generateStaticMarkup) {
            return;
          } else {
            return pushSegmentFinale(target, responseState, lastPushedText, textEmbedded);
          }
        }
        function writeStartCompletedSuspenseBoundary$1(destination, responseState) {
          if (responseState.generateStaticMarkup) {
            return true;
          }
          return writeStartCompletedSuspenseBoundary(destination);
        }
        function writeStartClientRenderedSuspenseBoundary$1(destination, responseState, errorDigest, errorMessage, errorComponentStack) {
          if (responseState.generateStaticMarkup) {
            return true;
          }
          return writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMessage, errorComponentStack);
        }
        function writeEndCompletedSuspenseBoundary$1(destination, responseState) {
          if (responseState.generateStaticMarkup) {
            return true;
          }
          return writeEndCompletedSuspenseBoundary(destination);
        }
        function writeEndClientRenderedSuspenseBoundary$1(destination, responseState) {
          if (responseState.generateStaticMarkup) {
            return true;
          }
          return writeEndClientRenderedSuspenseBoundary(destination);
        }
        var assign = Object.assign;
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_SCOPE_TYPE = Symbol.for("react.scope");
        var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode");
        var REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
        var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for("react.default_value");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeClassComponentFrame(ctor, source, ownerFn) {
          {
            return describeNativeComponentFrame(ctor, true);
          }
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var warnedAboutMissingGetChildContext;
        {
          warnedAboutMissingGetChildContext = {};
        }
        var emptyContextObject = {};
        {
          Object.freeze(emptyContextObject);
        }
        function getMaskedContext(type, unmaskedContext) {
          {
            var contextTypes = type.contextTypes;
            if (!contextTypes) {
              return emptyContextObject;
            }
            var context = {};
            for (var key in contextTypes) {
              context[key] = unmaskedContext[key];
            }
            {
              var name = getComponentNameFromType(type) || "Unknown";
              checkPropTypes(contextTypes, context, "context", name);
            }
            return context;
          }
        }
        function processChildContext(instance, type, parentContext, childContextTypes) {
          {
            if (typeof instance.getChildContext !== "function") {
              {
                var componentName = getComponentNameFromType(type) || "Unknown";
                if (!warnedAboutMissingGetChildContext[componentName]) {
                  warnedAboutMissingGetChildContext[componentName] = true;
                  error("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", componentName, componentName);
                }
              }
              return parentContext;
            }
            var childContext = instance.getChildContext();
            for (var contextKey in childContext) {
              if (!(contextKey in childContextTypes)) {
                throw new Error((getComponentNameFromType(type) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
              }
            }
            {
              var name = getComponentNameFromType(type) || "Unknown";
              checkPropTypes(childContextTypes, childContext, "child context", name);
            }
            return assign({}, parentContext, childContext);
          }
        }
        var rendererSigil;
        {
          rendererSigil = {};
        }
        var rootContextSnapshot = null;
        var currentActiveSnapshot = null;
        function popNode(prev) {
          {
            prev.context._currentValue2 = prev.parentValue;
          }
        }
        function pushNode(next) {
          {
            next.context._currentValue2 = next.value;
          }
        }
        function popToNearestCommonAncestor(prev, next) {
          if (prev === next) ;
          else {
            popNode(prev);
            var parentPrev = prev.parent;
            var parentNext = next.parent;
            if (parentPrev === null) {
              if (parentNext !== null) {
                throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
              }
            } else {
              if (parentNext === null) {
                throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
              }
              popToNearestCommonAncestor(parentPrev, parentNext);
            }
            pushNode(next);
          }
        }
        function popAllPrevious(prev) {
          popNode(prev);
          var parentPrev = prev.parent;
          if (parentPrev !== null) {
            popAllPrevious(parentPrev);
          }
        }
        function pushAllNext(next) {
          var parentNext = next.parent;
          if (parentNext !== null) {
            pushAllNext(parentNext);
          }
          pushNode(next);
        }
        function popPreviousToCommonLevel(prev, next) {
          popNode(prev);
          var parentPrev = prev.parent;
          if (parentPrev === null) {
            throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
          }
          if (parentPrev.depth === next.depth) {
            popToNearestCommonAncestor(parentPrev, next);
          } else {
            popPreviousToCommonLevel(parentPrev, next);
          }
        }
        function popNextToCommonLevel(prev, next) {
          var parentNext = next.parent;
          if (parentNext === null) {
            throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
          }
          if (prev.depth === parentNext.depth) {
            popToNearestCommonAncestor(prev, parentNext);
          } else {
            popNextToCommonLevel(prev, parentNext);
          }
          pushNode(next);
        }
        function switchContext(newSnapshot) {
          var prev = currentActiveSnapshot;
          var next = newSnapshot;
          if (prev !== next) {
            if (prev === null) {
              pushAllNext(next);
            } else if (next === null) {
              popAllPrevious(prev);
            } else if (prev.depth === next.depth) {
              popToNearestCommonAncestor(prev, next);
            } else if (prev.depth > next.depth) {
              popPreviousToCommonLevel(prev, next);
            } else {
              popNextToCommonLevel(prev, next);
            }
            currentActiveSnapshot = next;
          }
        }
        function pushProvider(context, nextValue) {
          var prevValue;
          {
            prevValue = context._currentValue2;
            context._currentValue2 = nextValue;
            {
              if (context._currentRenderer2 !== void 0 && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
                error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
              }
              context._currentRenderer2 = rendererSigil;
            }
          }
          var prevNode = currentActiveSnapshot;
          var newNode = {
            parent: prevNode,
            depth: prevNode === null ? 0 : prevNode.depth + 1,
            context,
            parentValue: prevValue,
            value: nextValue
          };
          currentActiveSnapshot = newNode;
          return newNode;
        }
        function popProvider(context) {
          var prevSnapshot = currentActiveSnapshot;
          if (prevSnapshot === null) {
            throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
          }
          {
            if (prevSnapshot.context !== context) {
              error("The parent context is not the expected context. This is probably a bug in React.");
            }
          }
          {
            var _value = prevSnapshot.parentValue;
            if (_value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
              prevSnapshot.context._currentValue2 = prevSnapshot.context._defaultValue;
            } else {
              prevSnapshot.context._currentValue2 = _value;
            }
            {
              if (context._currentRenderer2 !== void 0 && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
                error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
              }
              context._currentRenderer2 = rendererSigil;
            }
          }
          return currentActiveSnapshot = prevSnapshot.parent;
        }
        function getActiveContext() {
          return currentActiveSnapshot;
        }
        function readContext(context) {
          var value = context._currentValue2;
          return value;
        }
        function get(key) {
          return key._reactInternals;
        }
        function set(key, value) {
          key._reactInternals = value;
        }
        var didWarnAboutNoopUpdateForComponent = {};
        var didWarnAboutDeprecatedWillMount = {};
        var didWarnAboutUninitializedState;
        var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
        var didWarnAboutLegacyLifecyclesAndDerivedState;
        var didWarnAboutUndefinedDerivedState;
        var warnOnUndefinedDerivedState;
        var warnOnInvalidCallback;
        var didWarnAboutDirectlyAssigningPropsToState;
        var didWarnAboutContextTypeAndContextTypes;
        var didWarnAboutInvalidateContextType;
        {
          didWarnAboutUninitializedState = /* @__PURE__ */ new Set();
          didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = /* @__PURE__ */ new Set();
          didWarnAboutLegacyLifecyclesAndDerivedState = /* @__PURE__ */ new Set();
          didWarnAboutDirectlyAssigningPropsToState = /* @__PURE__ */ new Set();
          didWarnAboutUndefinedDerivedState = /* @__PURE__ */ new Set();
          didWarnAboutContextTypeAndContextTypes = /* @__PURE__ */ new Set();
          didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
          var didWarnOnInvalidCallback = /* @__PURE__ */ new Set();
          warnOnInvalidCallback = function(callback, callerName) {
            if (callback === null || typeof callback === "function") {
              return;
            }
            var key = callerName + "_" + callback;
            if (!didWarnOnInvalidCallback.has(key)) {
              didWarnOnInvalidCallback.add(key);
              error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
            }
          };
          warnOnUndefinedDerivedState = function(type, partialState) {
            if (partialState === void 0) {
              var componentName = getComponentNameFromType(type) || "Component";
              if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
                didWarnAboutUndefinedDerivedState.add(componentName);
                error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName);
              }
            }
          };
        }
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && getComponentNameFromType(_constructor) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnAboutNoopUpdateForComponent[warningKey]) {
              return;
            }
            error("%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", callerName, callerName, componentName);
            didWarnAboutNoopUpdateForComponent[warningKey] = true;
          }
        }
        var classComponentUpdater = {
          isMounted: function(inst) {
            return false;
          },
          enqueueSetState: function(inst, payload, callback) {
            var internals = get(inst);
            if (internals.queue === null) {
              warnNoop(inst, "setState");
            } else {
              internals.queue.push(payload);
              {
                if (callback !== void 0 && callback !== null) {
                  warnOnInvalidCallback(callback, "setState");
                }
              }
            }
          },
          enqueueReplaceState: function(inst, payload, callback) {
            var internals = get(inst);
            internals.replace = true;
            internals.queue = [payload];
            {
              if (callback !== void 0 && callback !== null) {
                warnOnInvalidCallback(callback, "setState");
              }
            }
          },
          enqueueForceUpdate: function(inst, callback) {
            var internals = get(inst);
            if (internals.queue === null) {
              warnNoop(inst, "forceUpdate");
            } else {
              {
                if (callback !== void 0 && callback !== null) {
                  warnOnInvalidCallback(callback, "setState");
                }
              }
            }
          }
        };
        function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
          var partialState = getDerivedStateFromProps(nextProps, prevState);
          {
            warnOnUndefinedDerivedState(ctor, partialState);
          }
          var newState = partialState === null || partialState === void 0 ? prevState : assign({}, prevState, partialState);
          return newState;
        }
        function constructClassInstance(ctor, props, maskedLegacyContext) {
          var context = emptyContextObject;
          var contextType = ctor.contextType;
          {
            if ("contextType" in ctor) {
              var isValid = (
                // Allow null for conditional declaration
                contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0
              );
              if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
                didWarnAboutInvalidateContextType.add(ctor);
                var addendum = "";
                if (contextType === void 0) {
                  addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
                } else if (typeof contextType !== "object") {
                  addendum = " However, it is set to a " + typeof contextType + ".";
                } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                  addendum = " Did you accidentally pass the Context.Provider instead?";
                } else if (contextType._context !== void 0) {
                  addendum = " Did you accidentally pass the Context.Consumer instead?";
                } else {
                  addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
                }
                error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(ctor) || "Component", addendum);
              }
            }
          }
          if (typeof contextType === "object" && contextType !== null) {
            context = readContext(contextType);
          } else {
            context = maskedLegacyContext;
          }
          var instance = new ctor(props, context);
          {
            if (typeof ctor.getDerivedStateFromProps === "function" && (instance.state === null || instance.state === void 0)) {
              var componentName = getComponentNameFromType(ctor) || "Component";
              if (!didWarnAboutUninitializedState.has(componentName)) {
                didWarnAboutUninitializedState.add(componentName);
                error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName);
              }
            }
            if (typeof ctor.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
              var foundWillMountName = null;
              var foundWillReceivePropsName = null;
              var foundWillUpdateName = null;
              if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
                foundWillMountName = "componentWillMount";
              } else if (typeof instance.UNSAFE_componentWillMount === "function") {
                foundWillMountName = "UNSAFE_componentWillMount";
              }
              if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
                foundWillReceivePropsName = "componentWillReceiveProps";
              } else if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
                foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
              }
              if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
                foundWillUpdateName = "componentWillUpdate";
              } else if (typeof instance.UNSAFE_componentWillUpdate === "function") {
                foundWillUpdateName = "UNSAFE_componentWillUpdate";
              }
              if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
                var _componentName = getComponentNameFromType(ctor) || "Component";
                var newApiName = typeof ctor.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                  didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                  error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles", _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : "", foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "", foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "");
                }
              }
            }
          }
          return instance;
        }
        function checkClassInstance(instance, ctor, newProps) {
          {
            var name = getComponentNameFromType(ctor) || "Component";
            var renderPresent = instance.render;
            if (!renderPresent) {
              if (ctor.prototype && typeof ctor.prototype.render === "function") {
                error("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name);
              } else {
                error("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name);
              }
            }
            if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
              error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
            }
            if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
            }
            if (instance.propTypes) {
              error("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name);
            }
            if (instance.contextType) {
              error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
            }
            {
              if (instance.contextTypes) {
                error("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name);
              }
              if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
                didWarnAboutContextTypeAndContextTypes.add(ctor);
                error("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name);
              }
            }
            if (typeof instance.componentShouldUpdate === "function") {
              error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
            }
            if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined") {
              error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(ctor) || "A pure component");
            }
            if (typeof instance.componentDidUnmount === "function") {
              error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
            }
            if (typeof instance.componentDidReceiveProps === "function") {
              error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
            }
            if (typeof instance.componentWillRecieveProps === "function") {
              error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
            }
            if (typeof instance.UNSAFE_componentWillRecieveProps === "function") {
              error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
            }
            var hasMutatedProps = instance.props !== newProps;
            if (instance.props !== void 0 && hasMutatedProps) {
              error("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name);
            }
            if (instance.defaultProps) {
              error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
            }
            if (typeof instance.getSnapshotBeforeUpdate === "function" && typeof instance.componentDidUpdate !== "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
              didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
              error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(ctor));
            }
            if (typeof instance.getDerivedStateFromProps === "function") {
              error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            }
            if (typeof instance.getDerivedStateFromError === "function") {
              error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            }
            if (typeof ctor.getSnapshotBeforeUpdate === "function") {
              error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
            }
            var _state = instance.state;
            if (_state && (typeof _state !== "object" || isArray(_state))) {
              error("%s.state: must be set to an object or null", name);
            }
            if (typeof instance.getChildContext === "function" && typeof ctor.childContextTypes !== "object") {
              error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
            }
          }
        }
        function callComponentWillMount(type, instance) {
          var oldState = instance.state;
          if (typeof instance.componentWillMount === "function") {
            {
              if (instance.componentWillMount.__suppressDeprecationWarning !== true) {
                var componentName = getComponentNameFromType(type) || "Unknown";
                if (!didWarnAboutDeprecatedWillMount[componentName]) {
                  warn(
                    // keep this warning in sync with ReactStrictModeWarning.js
                    "componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s",
                    componentName
                  );
                  didWarnAboutDeprecatedWillMount[componentName] = true;
                }
              }
            }
            instance.componentWillMount();
          }
          if (typeof instance.UNSAFE_componentWillMount === "function") {
            instance.UNSAFE_componentWillMount();
          }
          if (oldState !== instance.state) {
            {
              error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType(type) || "Component");
            }
            classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
          }
        }
        function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
          if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
            var oldQueue = internalInstance.queue;
            var oldReplace = internalInstance.replace;
            internalInstance.queue = null;
            internalInstance.replace = false;
            if (oldReplace && oldQueue.length === 1) {
              inst.state = oldQueue[0];
            } else {
              var nextState = oldReplace ? oldQueue[0] : inst.state;
              var dontMutate = true;
              for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
                var partial = oldQueue[i];
                var partialState = typeof partial === "function" ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;
                if (partialState != null) {
                  if (dontMutate) {
                    dontMutate = false;
                    nextState = assign({}, nextState, partialState);
                  } else {
                    assign(nextState, partialState);
                  }
                }
              }
              inst.state = nextState;
            }
          } else {
            internalInstance.queue = null;
          }
        }
        function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
          {
            checkClassInstance(instance, ctor, newProps);
          }
          var initialState = instance.state !== void 0 ? instance.state : null;
          instance.updater = classComponentUpdater;
          instance.props = newProps;
          instance.state = initialState;
          var internalInstance = {
            queue: [],
            replace: false
          };
          set(instance, internalInstance);
          var contextType = ctor.contextType;
          if (typeof contextType === "object" && contextType !== null) {
            instance.context = readContext(contextType);
          } else {
            instance.context = maskedLegacyContext;
          }
          {
            if (instance.state === newProps) {
              var componentName = getComponentNameFromType(ctor) || "Component";
              if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
                didWarnAboutDirectlyAssigningPropsToState.add(componentName);
                error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName);
              }
            }
          }
          var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
          if (typeof getDerivedStateFromProps === "function") {
            instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps);
          }
          if (typeof ctor.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
            callComponentWillMount(ctor, instance);
            processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
          }
        }
        var emptyTreeContext = {
          id: 1,
          overflow: ""
        };
        function getTreeId(context) {
          var overflow = context.overflow;
          var idWithLeadingBit = context.id;
          var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
          return id.toString(32) + overflow;
        }
        function pushTreeContext(baseContext, totalChildren, index) {
          var baseIdWithLeadingBit = baseContext.id;
          var baseOverflow = baseContext.overflow;
          var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
          var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
          var slot = index + 1;
          var length = getBitLength(totalChildren) + baseLength;
          if (length > 30) {
            var numberOfOverflowBits = baseLength - baseLength % 5;
            var newOverflowBits = (1 << numberOfOverflowBits) - 1;
            var newOverflow = (baseId & newOverflowBits).toString(32);
            var restOfBaseId = baseId >> numberOfOverflowBits;
            var restOfBaseLength = baseLength - numberOfOverflowBits;
            var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
            var restOfNewBits = slot << restOfBaseLength;
            var id = restOfNewBits | restOfBaseId;
            var overflow = newOverflow + baseOverflow;
            return {
              id: 1 << restOfLength | id,
              overflow
            };
          } else {
            var newBits = slot << baseLength;
            var _id = newBits | baseId;
            var _overflow = baseOverflow;
            return {
              id: 1 << length | _id,
              overflow: _overflow
            };
          }
        }
        function getBitLength(number) {
          return 32 - clz32(number);
        }
        function getLeadingBit(id) {
          return 1 << getBitLength(id) - 1;
        }
        var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
        var log = Math.log;
        var LN2 = Math.LN2;
        function clz32Fallback(x) {
          var asUint = x >>> 0;
          if (asUint === 0) {
            return 32;
          }
          return 31 - (log(asUint) / LN2 | 0) | 0;
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var currentlyRenderingComponent = null;
        var currentlyRenderingTask = null;
        var firstWorkInProgressHook = null;
        var workInProgressHook = null;
        var isReRender = false;
        var didScheduleRenderPhaseUpdate = false;
        var localIdCounter = 0;
        var renderPhaseUpdates = null;
        var numberOfReRenders = 0;
        var RE_RENDER_LIMIT = 25;
        var isInHookUserCodeInDev = false;
        var currentHookNameInDev;
        function resolveCurrentlyRenderingComponent() {
          if (currentlyRenderingComponent === null) {
            throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
          }
          {
            if (isInHookUserCodeInDev) {
              error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
            }
          }
          return currentlyRenderingComponent;
        }
        function areHookInputsEqual(nextDeps, prevDeps) {
          if (prevDeps === null) {
            {
              error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
            }
            return false;
          }
          {
            if (nextDeps.length !== prevDeps.length) {
              error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + nextDeps.join(", ") + "]", "[" + prevDeps.join(", ") + "]");
            }
          }
          for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
            if (objectIs(nextDeps[i], prevDeps[i])) {
              continue;
            }
            return false;
          }
          return true;
        }
        function createHook() {
          if (numberOfReRenders > 0) {
            throw new Error("Rendered more hooks than during the previous render");
          }
          return {
            memoizedState: null,
            queue: null,
            next: null
          };
        }
        function createWorkInProgressHook() {
          if (workInProgressHook === null) {
            if (firstWorkInProgressHook === null) {
              isReRender = false;
              firstWorkInProgressHook = workInProgressHook = createHook();
            } else {
              isReRender = true;
              workInProgressHook = firstWorkInProgressHook;
            }
          } else {
            if (workInProgressHook.next === null) {
              isReRender = false;
              workInProgressHook = workInProgressHook.next = createHook();
            } else {
              isReRender = true;
              workInProgressHook = workInProgressHook.next;
            }
          }
          return workInProgressHook;
        }
        function prepareToUseHooks(task, componentIdentity) {
          currentlyRenderingComponent = componentIdentity;
          currentlyRenderingTask = task;
          {
            isInHookUserCodeInDev = false;
          }
          localIdCounter = 0;
        }
        function finishHooks(Component, props, children, refOrContext) {
          while (didScheduleRenderPhaseUpdate) {
            didScheduleRenderPhaseUpdate = false;
            localIdCounter = 0;
            numberOfReRenders += 1;
            workInProgressHook = null;
            children = Component(props, refOrContext);
          }
          resetHooksState();
          return children;
        }
        function checkDidRenderIdHook() {
          var didRenderIdHook = localIdCounter !== 0;
          return didRenderIdHook;
        }
        function resetHooksState() {
          {
            isInHookUserCodeInDev = false;
          }
          currentlyRenderingComponent = null;
          currentlyRenderingTask = null;
          didScheduleRenderPhaseUpdate = false;
          firstWorkInProgressHook = null;
          numberOfReRenders = 0;
          renderPhaseUpdates = null;
          workInProgressHook = null;
        }
        function readContext$1(context) {
          {
            if (isInHookUserCodeInDev) {
              error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            }
          }
          return readContext(context);
        }
        function useContext(context) {
          {
            currentHookNameInDev = "useContext";
          }
          resolveCurrentlyRenderingComponent();
          return readContext(context);
        }
        function basicStateReducer(state, action) {
          return typeof action === "function" ? action(state) : action;
        }
        function useState5(initialState) {
          {
            currentHookNameInDev = "useState";
          }
          return useReducer(
            basicStateReducer,
            // useReducer has a special case to support lazy useState initializers
            initialState
          );
        }
        function useReducer(reducer, initialArg, init) {
          {
            if (reducer !== basicStateReducer) {
              currentHookNameInDev = "useReducer";
            }
          }
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          if (isReRender) {
            var queue = workInProgressHook.queue;
            var dispatch = queue.dispatch;
            if (renderPhaseUpdates !== null) {
              var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
              if (firstRenderPhaseUpdate !== void 0) {
                renderPhaseUpdates.delete(queue);
                var newState = workInProgressHook.memoizedState;
                var update = firstRenderPhaseUpdate;
                do {
                  var action = update.action;
                  {
                    isInHookUserCodeInDev = true;
                  }
                  newState = reducer(newState, action);
                  {
                    isInHookUserCodeInDev = false;
                  }
                  update = update.next;
                } while (update !== null);
                workInProgressHook.memoizedState = newState;
                return [newState, dispatch];
              }
            }
            return [workInProgressHook.memoizedState, dispatch];
          } else {
            {
              isInHookUserCodeInDev = true;
            }
            var initialState;
            if (reducer === basicStateReducer) {
              initialState = typeof initialArg === "function" ? initialArg() : initialArg;
            } else {
              initialState = init !== void 0 ? init(initialArg) : initialArg;
            }
            {
              isInHookUserCodeInDev = false;
            }
            workInProgressHook.memoizedState = initialState;
            var _queue = workInProgressHook.queue = {
              last: null,
              dispatch: null
            };
            var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
            return [workInProgressHook.memoizedState, _dispatch];
          }
        }
        function useMemo(nextCreate, deps) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var nextDeps = deps === void 0 ? null : deps;
          if (workInProgressHook !== null) {
            var prevState = workInProgressHook.memoizedState;
            if (prevState !== null) {
              if (nextDeps !== null) {
                var prevDeps = prevState[1];
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                  return prevState[0];
                }
              }
            }
          }
          {
            isInHookUserCodeInDev = true;
          }
          var nextValue = nextCreate();
          {
            isInHookUserCodeInDev = false;
          }
          workInProgressHook.memoizedState = [nextValue, nextDeps];
          return nextValue;
        }
        function useRef4(initialValue) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var previousRef = workInProgressHook.memoizedState;
          if (previousRef === null) {
            var ref = {
              current: initialValue
            };
            {
              Object.seal(ref);
            }
            workInProgressHook.memoizedState = ref;
            return ref;
          } else {
            return previousRef;
          }
        }
        function useLayoutEffect(create, inputs) {
          {
            currentHookNameInDev = "useLayoutEffect";
            error("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
          }
        }
        function dispatchAction(componentIdentity, queue, action) {
          if (numberOfReRenders >= RE_RENDER_LIMIT) {
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          }
          if (componentIdentity === currentlyRenderingComponent) {
            didScheduleRenderPhaseUpdate = true;
            var update = {
              action,
              next: null
            };
            if (renderPhaseUpdates === null) {
              renderPhaseUpdates = /* @__PURE__ */ new Map();
            }
            var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
            if (firstRenderPhaseUpdate === void 0) {
              renderPhaseUpdates.set(queue, update);
            } else {
              var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
              while (lastRenderPhaseUpdate.next !== null) {
                lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
              }
              lastRenderPhaseUpdate.next = update;
            }
          }
        }
        function useCallback(callback, deps) {
          return useMemo(function() {
            return callback;
          }, deps);
        }
        function useMutableSource(source, getSnapshot, subscribe) {
          resolveCurrentlyRenderingComponent();
          return getSnapshot(source._source);
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          if (getServerSnapshot === void 0) {
            throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
          }
          return getServerSnapshot();
        }
        function useDeferredValue(value) {
          resolveCurrentlyRenderingComponent();
          return value;
        }
        function unsupportedStartTransition() {
          throw new Error("startTransition cannot be called during server rendering.");
        }
        function useTransition() {
          resolveCurrentlyRenderingComponent();
          return [false, unsupportedStartTransition];
        }
        function useId() {
          var task = currentlyRenderingTask;
          var treeId = getTreeId(task.treeContext);
          var responseState = currentResponseState;
          if (responseState === null) {
            throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
          }
          var localId = localIdCounter++;
          return makeId(responseState, treeId, localId);
        }
        function noop() {
        }
        var Dispatcher = {
          readContext: readContext$1,
          useContext,
          useMemo,
          useReducer,
          useRef: useRef4,
          useState: useState5,
          useInsertionEffect: noop,
          useLayoutEffect,
          useCallback,
          // useImperativeHandle is not run in the server environment
          useImperativeHandle: noop,
          // Effects are not run in the server environment.
          useEffect: noop,
          // Debugging effect
          useDebugValue: noop,
          useDeferredValue,
          useTransition,
          useId,
          // Subscriptions are not setup in a server environment.
          useMutableSource,
          useSyncExternalStore
        };
        var currentResponseState = null;
        function setCurrentResponseState(responseState) {
          currentResponseState = responseState;
        }
        function getStackByComponentStackNode(componentStack) {
          try {
            var info = "";
            var node = componentStack;
            do {
              switch (node.tag) {
                case 0:
                  info += describeBuiltInComponentFrame(node.type, null, null);
                  break;
                case 1:
                  info += describeFunctionComponentFrame(node.type, null, null);
                  break;
                case 2:
                  info += describeClassComponentFrame(node.type, null, null);
                  break;
              }
              node = node.parent;
            } while (node);
            return info;
          } catch (x) {
            return "\nError generating stack: " + x.message + "\n" + x.stack;
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        var PENDING = 0;
        var COMPLETED = 1;
        var FLUSHED = 2;
        var ABORTED = 3;
        var ERRORED = 4;
        var OPEN = 0;
        var CLOSING = 1;
        var CLOSED = 2;
        var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;
        function defaultErrorHandler(error2) {
          console["error"](error2);
          return null;
        }
        function noop$1() {
        }
        function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError2, onAllReady, onShellReady, onShellError, onFatalError) {
          var pingedTasks = [];
          var abortSet = /* @__PURE__ */ new Set();
          var request = {
            destination: null,
            responseState,
            progressiveChunkSize: progressiveChunkSize === void 0 ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
            status: OPEN,
            fatalError: null,
            nextSegmentId: 0,
            allPendingTasks: 0,
            pendingRootTasks: 0,
            completedRootSegment: null,
            abortableTasks: abortSet,
            pingedTasks,
            clientRenderedBoundaries: [],
            completedBoundaries: [],
            partialBoundaries: [],
            onError: onError2 === void 0 ? defaultErrorHandler : onError2,
            onAllReady: onAllReady === void 0 ? noop$1 : onAllReady,
            onShellReady: onShellReady === void 0 ? noop$1 : onShellReady,
            onShellError: onShellError === void 0 ? noop$1 : onShellError,
            onFatalError: onFatalError === void 0 ? noop$1 : onFatalError
          };
          var rootSegment = createPendingSegment(
            request,
            0,
            null,
            rootFormatContext,
            // Root segments are never embedded in Text on either edge
            false,
            false
          );
          rootSegment.parentFlushed = true;
          var rootTask = createTask(request, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
          pingedTasks.push(rootTask);
          return request;
        }
        function pingTask(request, task) {
          var pingedTasks = request.pingedTasks;
          pingedTasks.push(task);
          if (pingedTasks.length === 1) {
            scheduleWork(function() {
              return performWork(request);
            });
          }
        }
        function createSuspenseBoundary(request, fallbackAbortableTasks) {
          return {
            id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
            rootSegmentID: -1,
            parentFlushed: false,
            pendingTasks: 0,
            forceClientRender: false,
            completedSegments: [],
            byteSize: 0,
            fallbackAbortableTasks,
            errorDigest: null
          };
        }
        function createTask(request, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
          request.allPendingTasks++;
          if (blockedBoundary === null) {
            request.pendingRootTasks++;
          } else {
            blockedBoundary.pendingTasks++;
          }
          var task = {
            node,
            ping: function() {
              return pingTask(request, task);
            },
            blockedBoundary,
            blockedSegment,
            abortSet,
            legacyContext,
            context,
            treeContext
          };
          {
            task.componentStack = null;
          }
          abortSet.add(task);
          return task;
        }
        function createPendingSegment(request, index, boundary, formatContext, lastPushedText, textEmbedded) {
          return {
            status: PENDING,
            id: -1,
            // lazily assigned later
            index,
            parentFlushed: false,
            chunks: [],
            children: [],
            formatContext,
            boundary,
            lastPushedText,
            textEmbedded
          };
        }
        var currentTaskInDEV = null;
        function getCurrentStackInDEV() {
          {
            if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) {
              return "";
            }
            return getStackByComponentStackNode(currentTaskInDEV.componentStack);
          }
        }
        function pushBuiltInComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 0,
              parent: task.componentStack,
              type
            };
          }
        }
        function pushFunctionComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 1,
              parent: task.componentStack,
              type
            };
          }
        }
        function pushClassComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 2,
              parent: task.componentStack,
              type
            };
          }
        }
        function popComponentStackInDEV(task) {
          {
            if (task.componentStack === null) {
              error("Unexpectedly popped too many stack frames. This is a bug in React.");
            } else {
              task.componentStack = task.componentStack.parent;
            }
          }
        }
        var lastBoundaryErrorComponentStackDev = null;
        function captureBoundaryErrorDetailsDev(boundary, error2) {
          {
            var errorMessage;
            if (typeof error2 === "string") {
              errorMessage = error2;
            } else if (error2 && typeof error2.message === "string") {
              errorMessage = error2.message;
            } else {
              errorMessage = String(error2);
            }
            var errorComponentStack = lastBoundaryErrorComponentStackDev || getCurrentStackInDEV();
            lastBoundaryErrorComponentStackDev = null;
            boundary.errorMessage = errorMessage;
            boundary.errorComponentStack = errorComponentStack;
          }
        }
        function logRecoverableError(request, error2) {
          var errorDigest = request.onError(error2);
          if (errorDigest != null && typeof errorDigest !== "string") {
            throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof errorDigest + '" instead');
          }
          return errorDigest;
        }
        function fatalError(request, error2) {
          var onShellError = request.onShellError;
          onShellError(error2);
          var onFatalError = request.onFatalError;
          onFatalError(error2);
          if (request.destination !== null) {
            request.status = CLOSED;
            closeWithError(request.destination, error2);
          } else {
            request.status = CLOSING;
            request.fatalError = error2;
          }
        }
        function renderSuspenseBoundary(request, task, props) {
          pushBuiltInComponentStackInDEV(task, "Suspense");
          var parentBoundary = task.blockedBoundary;
          var parentSegment = task.blockedSegment;
          var fallback = props.fallback;
          var content = props.children;
          var fallbackAbortSet = /* @__PURE__ */ new Set();
          var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
          var insertionIndex = parentSegment.chunks.length;
          var boundarySegment = createPendingSegment(
            request,
            insertionIndex,
            newBoundary,
            parentSegment.formatContext,
            // boundaries never require text embedding at their edges because comment nodes bound them
            false,
            false
          );
          parentSegment.children.push(boundarySegment);
          parentSegment.lastPushedText = false;
          var contentRootSegment = createPendingSegment(
            request,
            0,
            null,
            parentSegment.formatContext,
            // boundaries never require text embedding at their edges because comment nodes bound them
            false,
            false
          );
          contentRootSegment.parentFlushed = true;
          task.blockedBoundary = newBoundary;
          task.blockedSegment = contentRootSegment;
          try {
            renderNode(request, task, content);
            pushSegmentFinale$1(contentRootSegment.chunks, request.responseState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded);
            contentRootSegment.status = COMPLETED;
            queueCompletedSegment(newBoundary, contentRootSegment);
            if (newBoundary.pendingTasks === 0) {
              popComponentStackInDEV(task);
              return;
            }
          } catch (error2) {
            contentRootSegment.status = ERRORED;
            newBoundary.forceClientRender = true;
            newBoundary.errorDigest = logRecoverableError(request, error2);
            {
              captureBoundaryErrorDetailsDev(newBoundary, error2);
            }
          } finally {
            task.blockedBoundary = parentBoundary;
            task.blockedSegment = parentSegment;
          }
          var suspendedFallbackTask = createTask(request, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);
          {
            suspendedFallbackTask.componentStack = task.componentStack;
          }
          request.pingedTasks.push(suspendedFallbackTask);
          popComponentStackInDEV(task);
        }
        function renderHostElement(request, task, type, props) {
          pushBuiltInComponentStackInDEV(task, type);
          var segment = task.blockedSegment;
          var children = pushStartInstance(segment.chunks, type, props, request.responseState, segment.formatContext);
          segment.lastPushedText = false;
          var prevContext = segment.formatContext;
          segment.formatContext = getChildFormatContext(prevContext, type, props);
          renderNode(request, task, children);
          segment.formatContext = prevContext;
          pushEndInstance(segment.chunks, type);
          segment.lastPushedText = false;
          popComponentStackInDEV(task);
        }
        function shouldConstruct$1(Component) {
          return Component.prototype && Component.prototype.isReactComponent;
        }
        function renderWithHooks(request, task, Component, props, secondArg) {
          var componentIdentity = {};
          prepareToUseHooks(task, componentIdentity);
          var result = Component(props, secondArg);
          return finishHooks(Component, props, result, secondArg);
        }
        function finishClassComponent(request, task, instance, Component, props) {
          var nextChildren = instance.render();
          {
            if (instance.props !== props) {
              if (!didWarnAboutReassigningProps) {
                error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType(Component) || "a component");
              }
              didWarnAboutReassigningProps = true;
            }
          }
          {
            var childContextTypes = Component.childContextTypes;
            if (childContextTypes !== null && childContextTypes !== void 0) {
              var previousContext = task.legacyContext;
              var mergedContext = processChildContext(instance, Component, previousContext, childContextTypes);
              task.legacyContext = mergedContext;
              renderNodeDestructive(request, task, nextChildren);
              task.legacyContext = previousContext;
              return;
            }
          }
          renderNodeDestructive(request, task, nextChildren);
        }
        function renderClassComponent(request, task, Component, props) {
          pushClassComponentStackInDEV(task, Component);
          var maskedContext = getMaskedContext(Component, task.legacyContext);
          var instance = constructClassInstance(Component, props, maskedContext);
          mountClassInstance(instance, Component, props, maskedContext);
          finishClassComponent(request, task, instance, Component, props);
          popComponentStackInDEV(task);
        }
        var didWarnAboutBadClass = {};
        var didWarnAboutModulePatternComponent = {};
        var didWarnAboutContextTypeOnFunctionComponent = {};
        var didWarnAboutGetDerivedStateOnFunctionComponent = {};
        var didWarnAboutReassigningProps = false;
        var didWarnAboutDefaultPropsOnFunctionComponent = {};
        var didWarnAboutGenerators = false;
        var didWarnAboutMaps = false;
        var hasWarnedAboutUsingContextAsConsumer = false;
        function renderIndeterminateComponent(request, task, Component, props) {
          var legacyContext;
          {
            legacyContext = getMaskedContext(Component, task.legacyContext);
          }
          pushFunctionComponentStackInDEV(task, Component);
          {
            if (Component.prototype && typeof Component.prototype.render === "function") {
              var componentName = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutBadClass[componentName]) {
                error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName);
                didWarnAboutBadClass[componentName] = true;
              }
            }
          }
          var value = renderWithHooks(request, task, Component, props, legacyContext);
          var hasId = checkDidRenderIdHook();
          {
            if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
              var _componentName = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutModulePatternComponent[_componentName]) {
                error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName);
                didWarnAboutModulePatternComponent[_componentName] = true;
              }
            }
          }
          if (
            // Run these checks in production only if the flag is off.
            // Eventually we'll delete this branch altogether.
            typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0
          ) {
            {
              var _componentName2 = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutModulePatternComponent[_componentName2]) {
                error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2);
                didWarnAboutModulePatternComponent[_componentName2] = true;
              }
            }
            mountClassInstance(value, Component, props, legacyContext);
            finishClassComponent(request, task, value, Component, props);
          } else {
            {
              validateFunctionComponentInDev(Component);
            }
            if (hasId) {
              var prevTreeContext = task.treeContext;
              var totalChildren = 1;
              var index = 0;
              task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
              try {
                renderNodeDestructive(request, task, value);
              } finally {
                task.treeContext = prevTreeContext;
              }
            } else {
              renderNodeDestructive(request, task, value);
            }
          }
          popComponentStackInDEV(task);
        }
        function validateFunctionComponentInDev(Component) {
          {
            if (Component) {
              if (Component.childContextTypes) {
                error("%s(...): childContextTypes cannot be defined on a function component.", Component.displayName || Component.name || "Component");
              }
            }
            if (Component.defaultProps !== void 0) {
              var componentName = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutDefaultPropsOnFunctionComponent[componentName]) {
                error("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", componentName);
                didWarnAboutDefaultPropsOnFunctionComponent[componentName] = true;
              }
            }
            if (typeof Component.getDerivedStateFromProps === "function") {
              var _componentName3 = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
                error("%s: Function components do not support getDerivedStateFromProps.", _componentName3);
                didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
              }
            }
            if (typeof Component.contextType === "object" && Component.contextType !== null) {
              var _componentName4 = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
                error("%s: Function components do not support contextType.", _componentName4);
                didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
              }
            }
          }
        }
        function resolveDefaultProps(Component, baseProps) {
          if (Component && Component.defaultProps) {
            var props = assign({}, baseProps);
            var defaultProps = Component.defaultProps;
            for (var propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
            return props;
          }
          return baseProps;
        }
        function renderForwardRef(request, task, type, props, ref) {
          pushFunctionComponentStackInDEV(task, type.render);
          var children = renderWithHooks(request, task, type.render, props, ref);
          var hasId = checkDidRenderIdHook();
          if (hasId) {
            var prevTreeContext = task.treeContext;
            var totalChildren = 1;
            var index = 0;
            task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
            try {
              renderNodeDestructive(request, task, children);
            } finally {
              task.treeContext = prevTreeContext;
            }
          } else {
            renderNodeDestructive(request, task, children);
          }
          popComponentStackInDEV(task);
        }
        function renderMemo(request, task, type, props, ref) {
          var innerType = type.type;
          var resolvedProps = resolveDefaultProps(innerType, props);
          renderElement(request, task, innerType, resolvedProps, ref);
        }
        function renderContextConsumer(request, task, context, props) {
          {
            if (context._context === void 0) {
              if (context !== context.Consumer) {
                if (!hasWarnedAboutUsingContextAsConsumer) {
                  hasWarnedAboutUsingContextAsConsumer = true;
                  error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                }
              }
            } else {
              context = context._context;
            }
          }
          var render = props.children;
          {
            if (typeof render !== "function") {
              error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
            }
          }
          var newValue = readContext(context);
          var newChildren = render(newValue);
          renderNodeDestructive(request, task, newChildren);
        }
        function renderContextProvider(request, task, type, props) {
          var context = type._context;
          var value = props.value;
          var children = props.children;
          var prevSnapshot;
          {
            prevSnapshot = task.context;
          }
          task.context = pushProvider(context, value);
          renderNodeDestructive(request, task, children);
          task.context = popProvider(context);
          {
            if (prevSnapshot !== task.context) {
              error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
            }
          }
        }
        function renderLazyComponent(request, task, lazyComponent, props, ref) {
          pushBuiltInComponentStackInDEV(task, "Lazy");
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;
          var Component = init(payload);
          var resolvedProps = resolveDefaultProps(Component, props);
          renderElement(request, task, Component, resolvedProps, ref);
          popComponentStackInDEV(task);
        }
        function renderElement(request, task, type, props, ref) {
          if (typeof type === "function") {
            if (shouldConstruct$1(type)) {
              renderClassComponent(request, task, type, props);
              return;
            } else {
              renderIndeterminateComponent(request, task, type, props);
              return;
            }
          }
          if (typeof type === "string") {
            renderHostElement(request, task, type, props);
            return;
          }
          switch (type) {
            // TODO: LegacyHidden acts the same as a fragment. This only works
            // because we currently assume that every instance of LegacyHidden is
            // accompanied by a host component wrapper. In the hidden mode, the host
            // component is given a `hidden` attribute, which ensures that the
            // initial HTML is not visible. To support the use of LegacyHidden as a
            // true fragment, without an extra DOM node, we would have to hide the
            // initial HTML in some other way.
            // TODO: Add REACT_OFFSCREEN_TYPE here too with the same capability.
            case REACT_LEGACY_HIDDEN_TYPE:
            case REACT_DEBUG_TRACING_MODE_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_FRAGMENT_TYPE: {
              renderNodeDestructive(request, task, props.children);
              return;
            }
            case REACT_SUSPENSE_LIST_TYPE: {
              pushBuiltInComponentStackInDEV(task, "SuspenseList");
              renderNodeDestructive(request, task, props.children);
              popComponentStackInDEV(task);
              return;
            }
            case REACT_SCOPE_TYPE: {
              throw new Error("ReactDOMServer does not yet support scope components.");
            }
            // eslint-disable-next-line-no-fallthrough
            case REACT_SUSPENSE_TYPE: {
              {
                renderSuspenseBoundary(request, task, props);
              }
              return;
            }
          }
          if (typeof type === "object" && type !== null) {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE: {
                renderForwardRef(request, task, type, props, ref);
                return;
              }
              case REACT_MEMO_TYPE: {
                renderMemo(request, task, type, props, ref);
                return;
              }
              case REACT_PROVIDER_TYPE: {
                renderContextProvider(request, task, type, props);
                return;
              }
              case REACT_CONTEXT_TYPE: {
                renderContextConsumer(request, task, type, props);
                return;
              }
              case REACT_LAZY_TYPE: {
                renderLazyComponent(request, task, type, props);
                return;
              }
            }
          }
          var info = "";
          {
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
          }
          throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (type == null ? type : typeof type) + "." + info));
        }
        function validateIterable(iterable, iteratorFn) {
          {
            if (typeof Symbol === "function" && // $FlowFixMe Flow doesn't know about toStringTag
            iterable[Symbol.toStringTag] === "Generator") {
              if (!didWarnAboutGenerators) {
                error("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.");
              }
              didWarnAboutGenerators = true;
            }
            if (iterable.entries === iteratorFn) {
              if (!didWarnAboutMaps) {
                error("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
              }
              didWarnAboutMaps = true;
            }
          }
        }
        function renderNodeDestructive(request, task, node) {
          {
            try {
              return renderNodeDestructiveImpl(request, task, node);
            } catch (x) {
              if (typeof x === "object" && x !== null && typeof x.then === "function") ;
              else {
                lastBoundaryErrorComponentStackDev = lastBoundaryErrorComponentStackDev !== null ? lastBoundaryErrorComponentStackDev : getCurrentStackInDEV();
              }
              throw x;
            }
          }
        }
        function renderNodeDestructiveImpl(request, task, node) {
          task.node = node;
          if (typeof node === "object" && node !== null) {
            switch (node.$$typeof) {
              case REACT_ELEMENT_TYPE: {
                var element = node;
                var type = element.type;
                var props = element.props;
                var ref = element.ref;
                renderElement(request, task, type, props, ref);
                return;
              }
              case REACT_PORTAL_TYPE:
                throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
              // eslint-disable-next-line-no-fallthrough
              case REACT_LAZY_TYPE: {
                var lazyNode = node;
                var payload = lazyNode._payload;
                var init = lazyNode._init;
                var resolvedNode;
                {
                  try {
                    resolvedNode = init(payload);
                  } catch (x) {
                    if (typeof x === "object" && x !== null && typeof x.then === "function") {
                      pushBuiltInComponentStackInDEV(task, "Lazy");
                    }
                    throw x;
                  }
                }
                renderNodeDestructive(request, task, resolvedNode);
                return;
              }
            }
            if (isArray(node)) {
              renderChildrenArray(request, task, node);
              return;
            }
            var iteratorFn = getIteratorFn(node);
            if (iteratorFn) {
              {
                validateIterable(node, iteratorFn);
              }
              var iterator = iteratorFn.call(node);
              if (iterator) {
                var step = iterator.next();
                if (!step.done) {
                  var children = [];
                  do {
                    children.push(step.value);
                    step = iterator.next();
                  } while (!step.done);
                  renderChildrenArray(request, task, children);
                  return;
                }
                return;
              }
            }
            var childString = Object.prototype.toString.call(node);
            throw new Error("Objects are not valid as a React child (found: " + (childString === "[object Object]" ? "object with keys {" + Object.keys(node).join(", ") + "}" : childString) + "). If you meant to render a collection of children, use an array instead.");
          }
          if (typeof node === "string") {
            var segment = task.blockedSegment;
            segment.lastPushedText = pushTextInstance$1(task.blockedSegment.chunks, node, request.responseState, segment.lastPushedText);
            return;
          }
          if (typeof node === "number") {
            var _segment = task.blockedSegment;
            _segment.lastPushedText = pushTextInstance$1(task.blockedSegment.chunks, "" + node, request.responseState, _segment.lastPushedText);
            return;
          }
          {
            if (typeof node === "function") {
              error("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
            }
          }
        }
        function renderChildrenArray(request, task, children) {
          var totalChildren = children.length;
          for (var i = 0; i < totalChildren; i++) {
            var prevTreeContext = task.treeContext;
            task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i);
            try {
              renderNode(request, task, children[i]);
            } finally {
              task.treeContext = prevTreeContext;
            }
          }
        }
        function spawnNewSuspendedTask(request, task, x) {
          var segment = task.blockedSegment;
          var insertionIndex = segment.chunks.length;
          var newSegment = createPendingSegment(
            request,
            insertionIndex,
            null,
            segment.formatContext,
            // Adopt the parent segment's leading text embed
            segment.lastPushedText,
            // Assume we are text embedded at the trailing edge
            true
          );
          segment.children.push(newSegment);
          segment.lastPushedText = false;
          var newTask = createTask(request, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);
          {
            if (task.componentStack !== null) {
              newTask.componentStack = task.componentStack.parent;
            }
          }
          var ping = newTask.ping;
          x.then(ping, ping);
        }
        function renderNode(request, task, node) {
          var previousFormatContext = task.blockedSegment.formatContext;
          var previousLegacyContext = task.legacyContext;
          var previousContext = task.context;
          var previousComponentStack = null;
          {
            previousComponentStack = task.componentStack;
          }
          try {
            return renderNodeDestructive(request, task, node);
          } catch (x) {
            resetHooksState();
            if (typeof x === "object" && x !== null && typeof x.then === "function") {
              spawnNewSuspendedTask(request, task, x);
              task.blockedSegment.formatContext = previousFormatContext;
              task.legacyContext = previousLegacyContext;
              task.context = previousContext;
              switchContext(previousContext);
              {
                task.componentStack = previousComponentStack;
              }
              return;
            } else {
              task.blockedSegment.formatContext = previousFormatContext;
              task.legacyContext = previousLegacyContext;
              task.context = previousContext;
              switchContext(previousContext);
              {
                task.componentStack = previousComponentStack;
              }
              throw x;
            }
          }
        }
        function erroredTask(request, boundary, segment, error2) {
          var errorDigest = logRecoverableError(request, error2);
          if (boundary === null) {
            fatalError(request, error2);
          } else {
            boundary.pendingTasks--;
            if (!boundary.forceClientRender) {
              boundary.forceClientRender = true;
              boundary.errorDigest = errorDigest;
              {
                captureBoundaryErrorDetailsDev(boundary, error2);
              }
              if (boundary.parentFlushed) {
                request.clientRenderedBoundaries.push(boundary);
              }
            }
          }
          request.allPendingTasks--;
          if (request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
        function abortTaskSoft(task) {
          var request = this;
          var boundary = task.blockedBoundary;
          var segment = task.blockedSegment;
          segment.status = ABORTED;
          finishedTask(request, boundary, segment);
        }
        function abortTask(task, request, reason) {
          var boundary = task.blockedBoundary;
          var segment = task.blockedSegment;
          segment.status = ABORTED;
          if (boundary === null) {
            request.allPendingTasks--;
            if (request.status !== CLOSED) {
              request.status = CLOSED;
              if (request.destination !== null) {
                close(request.destination);
              }
            }
          } else {
            boundary.pendingTasks--;
            if (!boundary.forceClientRender) {
              boundary.forceClientRender = true;
              var _error = reason === void 0 ? new Error("The render was aborted by the server without a reason.") : reason;
              boundary.errorDigest = request.onError(_error);
              {
                var errorPrefix = "The server did not finish this Suspense boundary: ";
                if (_error && typeof _error.message === "string") {
                  _error = errorPrefix + _error.message;
                } else {
                  _error = errorPrefix + String(_error);
                }
                var previousTaskInDev = currentTaskInDEV;
                currentTaskInDEV = task;
                try {
                  captureBoundaryErrorDetailsDev(boundary, _error);
                } finally {
                  currentTaskInDEV = previousTaskInDev;
                }
              }
              if (boundary.parentFlushed) {
                request.clientRenderedBoundaries.push(boundary);
              }
            }
            boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
              return abortTask(fallbackTask, request, reason);
            });
            boundary.fallbackAbortableTasks.clear();
            request.allPendingTasks--;
            if (request.allPendingTasks === 0) {
              var onAllReady = request.onAllReady;
              onAllReady();
            }
          }
        }
        function queueCompletedSegment(boundary, segment) {
          if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
            var childSegment = segment.children[0];
            childSegment.id = segment.id;
            childSegment.parentFlushed = true;
            if (childSegment.status === COMPLETED) {
              queueCompletedSegment(boundary, childSegment);
            }
          } else {
            var completedSegments = boundary.completedSegments;
            completedSegments.push(segment);
          }
        }
        function finishedTask(request, boundary, segment) {
          if (boundary === null) {
            if (segment.parentFlushed) {
              if (request.completedRootSegment !== null) {
                throw new Error("There can only be one root segment. This is a bug in React.");
              }
              request.completedRootSegment = segment;
            }
            request.pendingRootTasks--;
            if (request.pendingRootTasks === 0) {
              request.onShellError = noop$1;
              var onShellReady = request.onShellReady;
              onShellReady();
            }
          } else {
            boundary.pendingTasks--;
            if (boundary.forceClientRender) ;
            else if (boundary.pendingTasks === 0) {
              if (segment.parentFlushed) {
                if (segment.status === COMPLETED) {
                  queueCompletedSegment(boundary, segment);
                }
              }
              if (boundary.parentFlushed) {
                request.completedBoundaries.push(boundary);
              }
              boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
              boundary.fallbackAbortableTasks.clear();
            } else {
              if (segment.parentFlushed) {
                if (segment.status === COMPLETED) {
                  queueCompletedSegment(boundary, segment);
                  var completedSegments = boundary.completedSegments;
                  if (completedSegments.length === 1) {
                    if (boundary.parentFlushed) {
                      request.partialBoundaries.push(boundary);
                    }
                  }
                }
              }
            }
          }
          request.allPendingTasks--;
          if (request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
        function retryTask(request, task) {
          var segment = task.blockedSegment;
          if (segment.status !== PENDING) {
            return;
          }
          switchContext(task.context);
          var prevTaskInDEV = null;
          {
            prevTaskInDEV = currentTaskInDEV;
            currentTaskInDEV = task;
          }
          try {
            renderNodeDestructive(request, task, task.node);
            pushSegmentFinale$1(segment.chunks, request.responseState, segment.lastPushedText, segment.textEmbedded);
            task.abortSet.delete(task);
            segment.status = COMPLETED;
            finishedTask(request, task.blockedBoundary, segment);
          } catch (x) {
            resetHooksState();
            if (typeof x === "object" && x !== null && typeof x.then === "function") {
              var ping = task.ping;
              x.then(ping, ping);
            } else {
              task.abortSet.delete(task);
              segment.status = ERRORED;
              erroredTask(request, task.blockedBoundary, segment, x);
            }
          } finally {
            {
              currentTaskInDEV = prevTaskInDEV;
            }
          }
        }
        function performWork(request) {
          if (request.status === CLOSED) {
            return;
          }
          var prevContext = getActiveContext();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = Dispatcher;
          var prevGetCurrentStackImpl;
          {
            prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
            ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
          }
          var prevResponseState = currentResponseState;
          setCurrentResponseState(request.responseState);
          try {
            var pingedTasks = request.pingedTasks;
            var i;
            for (i = 0; i < pingedTasks.length; i++) {
              var task = pingedTasks[i];
              retryTask(request, task);
            }
            pingedTasks.splice(0, i);
            if (request.destination !== null) {
              flushCompletedQueues(request, request.destination);
            }
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          } finally {
            setCurrentResponseState(prevResponseState);
            ReactCurrentDispatcher$1.current = prevDispatcher;
            {
              ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
            }
            if (prevDispatcher === Dispatcher) {
              switchContext(prevContext);
            }
          }
        }
        function flushSubtree(request, destination, segment) {
          segment.parentFlushed = true;
          switch (segment.status) {
            case PENDING: {
              var segmentID = segment.id = request.nextSegmentId++;
              segment.lastPushedText = false;
              segment.textEmbedded = false;
              return writePlaceholder(destination, request.responseState, segmentID);
            }
            case COMPLETED: {
              segment.status = FLUSHED;
              var r = true;
              var chunks = segment.chunks;
              var chunkIdx = 0;
              var children = segment.children;
              for (var childIdx = 0; childIdx < children.length; childIdx++) {
                var nextChild = children[childIdx];
                for (; chunkIdx < nextChild.index; chunkIdx++) {
                  writeChunk(destination, chunks[chunkIdx]);
                }
                r = flushSegment(request, destination, nextChild);
              }
              for (; chunkIdx < chunks.length - 1; chunkIdx++) {
                writeChunk(destination, chunks[chunkIdx]);
              }
              if (chunkIdx < chunks.length) {
                r = writeChunkAndReturn(destination, chunks[chunkIdx]);
              }
              return r;
            }
            default: {
              throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
            }
          }
        }
        function flushSegment(request, destination, segment) {
          var boundary = segment.boundary;
          if (boundary === null) {
            return flushSubtree(request, destination, segment);
          }
          boundary.parentFlushed = true;
          if (boundary.forceClientRender) {
            writeStartClientRenderedSuspenseBoundary$1(destination, request.responseState, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
            flushSubtree(request, destination, segment);
            return writeEndClientRenderedSuspenseBoundary$1(destination, request.responseState);
          } else if (boundary.pendingTasks > 0) {
            boundary.rootSegmentID = request.nextSegmentId++;
            if (boundary.completedSegments.length > 0) {
              request.partialBoundaries.push(boundary);
            }
            var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
            writeStartPendingSuspenseBoundary(destination, request.responseState, id);
            flushSubtree(request, destination, segment);
            return writeEndPendingSuspenseBoundary(destination, request.responseState);
          } else if (boundary.byteSize > request.progressiveChunkSize) {
            boundary.rootSegmentID = request.nextSegmentId++;
            request.completedBoundaries.push(boundary);
            writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id);
            flushSubtree(request, destination, segment);
            return writeEndPendingSuspenseBoundary(destination, request.responseState);
          } else {
            writeStartCompletedSuspenseBoundary$1(destination, request.responseState);
            var completedSegments = boundary.completedSegments;
            if (completedSegments.length !== 1) {
              throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
            }
            var contentSegment = completedSegments[0];
            flushSegment(request, destination, contentSegment);
            return writeEndCompletedSuspenseBoundary$1(destination, request.responseState);
          }
        }
        function flushClientRenderedBoundary(request, destination, boundary) {
          return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
        }
        function flushSegmentContainer(request, destination, segment) {
          writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
          flushSegment(request, destination, segment);
          return writeEndSegment(destination, segment.formatContext);
        }
        function flushCompletedBoundary(request, destination, boundary) {
          var completedSegments = boundary.completedSegments;
          var i = 0;
          for (; i < completedSegments.length; i++) {
            var segment = completedSegments[i];
            flushPartiallyCompletedSegment(request, destination, boundary, segment);
          }
          completedSegments.length = 0;
          return writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID);
        }
        function flushPartialBoundary(request, destination, boundary) {
          var completedSegments = boundary.completedSegments;
          var i = 0;
          for (; i < completedSegments.length; i++) {
            var segment = completedSegments[i];
            if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
              i++;
              completedSegments.splice(0, i);
              return false;
            }
          }
          completedSegments.splice(0, i);
          return true;
        }
        function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
          if (segment.status === FLUSHED) {
            return true;
          }
          var segmentID = segment.id;
          if (segmentID === -1) {
            var rootSegmentID = segment.id = boundary.rootSegmentID;
            if (rootSegmentID === -1) {
              throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
            }
            return flushSegmentContainer(request, destination, segment);
          } else {
            flushSegmentContainer(request, destination, segment);
            return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
          }
        }
        function flushCompletedQueues(request, destination) {
          try {
            var completedRootSegment = request.completedRootSegment;
            if (completedRootSegment !== null && request.pendingRootTasks === 0) {
              flushSegment(request, destination, completedRootSegment);
              request.completedRootSegment = null;
              writeCompletedRoot(destination, request.responseState);
            }
            var clientRenderedBoundaries = request.clientRenderedBoundaries;
            var i;
            for (i = 0; i < clientRenderedBoundaries.length; i++) {
              var boundary = clientRenderedBoundaries[i];
              if (!flushClientRenderedBoundary(request, destination, boundary)) {
                request.destination = null;
                i++;
                clientRenderedBoundaries.splice(0, i);
                return;
              }
            }
            clientRenderedBoundaries.splice(0, i);
            var completedBoundaries = request.completedBoundaries;
            for (i = 0; i < completedBoundaries.length; i++) {
              var _boundary = completedBoundaries[i];
              if (!flushCompletedBoundary(request, destination, _boundary)) {
                request.destination = null;
                i++;
                completedBoundaries.splice(0, i);
                return;
              }
            }
            completedBoundaries.splice(0, i);
            completeWriting(destination);
            beginWriting(destination);
            var partialBoundaries = request.partialBoundaries;
            for (i = 0; i < partialBoundaries.length; i++) {
              var _boundary2 = partialBoundaries[i];
              if (!flushPartialBoundary(request, destination, _boundary2)) {
                request.destination = null;
                i++;
                partialBoundaries.splice(0, i);
                return;
              }
            }
            partialBoundaries.splice(0, i);
            var largeBoundaries = request.completedBoundaries;
            for (i = 0; i < largeBoundaries.length; i++) {
              var _boundary3 = largeBoundaries[i];
              if (!flushCompletedBoundary(request, destination, _boundary3)) {
                request.destination = null;
                i++;
                largeBoundaries.splice(0, i);
                return;
              }
            }
            largeBoundaries.splice(0, i);
          } finally {
            if (request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0) {
              {
                if (request.abortableTasks.size !== 0) {
                  error("There was still abortable task at the root when we closed. This is a bug in React.");
                }
              }
              close(destination);
            }
          }
        }
        function startWork(request) {
          scheduleWork(function() {
            return performWork(request);
          });
        }
        function startFlowing(request, destination) {
          if (request.status === CLOSING) {
            request.status = CLOSED;
            closeWithError(destination, request.fatalError);
            return;
          }
          if (request.status === CLOSED) {
            return;
          }
          if (request.destination !== null) {
            return;
          }
          request.destination = destination;
          try {
            flushCompletedQueues(request, destination);
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          }
        }
        function abort(request, reason) {
          try {
            var abortableTasks = request.abortableTasks;
            abortableTasks.forEach(function(task) {
              return abortTask(task, request, reason);
            });
            abortableTasks.clear();
            if (request.destination !== null) {
              flushCompletedQueues(request, request.destination);
            }
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          }
        }
        function onError() {
        }
        function renderToStringImpl(children, options, generateStaticMarkup, abortReason) {
          var didFatal = false;
          var fatalError2 = null;
          var result = "";
          var destination = {
            push: function(chunk) {
              if (chunk !== null) {
                result += chunk;
              }
              return true;
            },
            destroy: function(error2) {
              didFatal = true;
              fatalError2 = error2;
            }
          };
          var readyToStream = false;
          function onShellReady() {
            readyToStream = true;
          }
          var request = createRequest(children, createResponseState$1(generateStaticMarkup, options ? options.identifierPrefix : void 0), createRootFormatContext(), Infinity, onError, void 0, onShellReady, void 0, void 0);
          startWork(request);
          abort(request, abortReason);
          startFlowing(request, destination);
          if (didFatal) {
            throw fatalError2;
          }
          if (!readyToStream) {
            throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          }
          return result;
        }
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          subClass.__proto__ = superClass;
        }
        var ReactMarkupReadableStream = /* @__PURE__ */ (function(_Readable) {
          _inheritsLoose(ReactMarkupReadableStream2, _Readable);
          function ReactMarkupReadableStream2() {
            var _this;
            _this = _Readable.call(this, {}) || this;
            _this.request = null;
            _this.startedFlowing = false;
            return _this;
          }
          var _proto = ReactMarkupReadableStream2.prototype;
          _proto._destroy = function _destroy(err, callback) {
            abort(this.request);
            callback(err);
          };
          _proto._read = function _read(size) {
            if (this.startedFlowing) {
              startFlowing(this.request, this);
            }
          };
          return ReactMarkupReadableStream2;
        })(stream.Readable);
        function onError$1() {
        }
        function renderToNodeStreamImpl(children, options, generateStaticMarkup) {
          function onAllReady() {
            destination.startedFlowing = true;
            startFlowing(request, destination);
          }
          var destination = new ReactMarkupReadableStream();
          var request = createRequest(children, createResponseState$1(false, options ? options.identifierPrefix : void 0), createRootFormatContext(), Infinity, onError$1, onAllReady, void 0, void 0);
          destination.request = request;
          startWork(request);
          return destination;
        }
        function renderToNodeStream(children, options) {
          {
            error("renderToNodeStream is deprecated. Use renderToPipeableStream instead.");
          }
          return renderToNodeStreamImpl(children, options);
        }
        function renderToStaticNodeStream(children, options) {
          {
            error("ReactDOMServer.renderToStaticNodeStream() is deprecated. Use ReactDOMServer.renderToPipeableStream() and wait to `pipe` until the `onAllReady` callback has been called instead.");
          }
          return renderToNodeStreamImpl(children, options);
        }
        function renderToString(children, options) {
          return renderToStringImpl(children, options, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
        }
        function renderToStaticMarkup(children, options) {
          return renderToStringImpl(children, options, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
        }
        exports2.renderToNodeStream = renderToNodeStream;
        exports2.renderToStaticMarkup = renderToStaticMarkup;
        exports2.renderToStaticNodeStream = renderToStaticNodeStream;
        exports2.renderToString = renderToString;
        exports2.version = ReactVersion;
      })();
    }
  }
});

// node_modules/react-dom/cjs/react-dom-server.node.development.js
var require_react_dom_server_node_development = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server.node.development.js"(exports2) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var React5 = require_react();
        var util = require("util");
        var ReactVersion = "18.3.1";
        var ReactSharedInternals = React5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function scheduleWork(callback) {
          setImmediate(callback);
        }
        function flushBuffered(destination) {
          if (typeof destination.flush === "function") {
            destination.flush();
          }
        }
        var VIEW_SIZE = 2048;
        var currentView = null;
        var writtenBytes = 0;
        var destinationHasCapacity = true;
        function beginWriting(destination) {
          currentView = new Uint8Array(VIEW_SIZE);
          writtenBytes = 0;
          destinationHasCapacity = true;
        }
        function writeStringChunk(destination, stringChunk) {
          if (stringChunk.length === 0) {
            return;
          }
          if (stringChunk.length * 3 > VIEW_SIZE) {
            if (writtenBytes > 0) {
              writeToDestination(destination, currentView.subarray(0, writtenBytes));
              currentView = new Uint8Array(VIEW_SIZE);
              writtenBytes = 0;
            }
            writeToDestination(destination, textEncoder.encode(stringChunk));
            return;
          }
          var target = currentView;
          if (writtenBytes > 0) {
            target = currentView.subarray(writtenBytes);
          }
          var _textEncoder$encodeIn = textEncoder.encodeInto(stringChunk, target), read = _textEncoder$encodeIn.read, written = _textEncoder$encodeIn.written;
          writtenBytes += written;
          if (read < stringChunk.length) {
            writeToDestination(destination, currentView);
            currentView = new Uint8Array(VIEW_SIZE);
            writtenBytes = textEncoder.encodeInto(stringChunk.slice(read), currentView).written;
          }
          if (writtenBytes === VIEW_SIZE) {
            writeToDestination(destination, currentView);
            currentView = new Uint8Array(VIEW_SIZE);
            writtenBytes = 0;
          }
        }
        function writeViewChunk(destination, chunk) {
          if (chunk.byteLength === 0) {
            return;
          }
          if (chunk.byteLength > VIEW_SIZE) {
            if (writtenBytes > 0) {
              writeToDestination(destination, currentView.subarray(0, writtenBytes));
              currentView = new Uint8Array(VIEW_SIZE);
              writtenBytes = 0;
            }
            writeToDestination(destination, chunk);
            return;
          }
          var bytesToWrite = chunk;
          var allowableBytes = currentView.length - writtenBytes;
          if (allowableBytes < bytesToWrite.byteLength) {
            if (allowableBytes === 0) {
              writeToDestination(destination, currentView);
            } else {
              currentView.set(bytesToWrite.subarray(0, allowableBytes), writtenBytes);
              writtenBytes += allowableBytes;
              writeToDestination(destination, currentView);
              bytesToWrite = bytesToWrite.subarray(allowableBytes);
            }
            currentView = new Uint8Array(VIEW_SIZE);
            writtenBytes = 0;
          }
          currentView.set(bytesToWrite, writtenBytes);
          writtenBytes += bytesToWrite.byteLength;
          if (writtenBytes === VIEW_SIZE) {
            writeToDestination(destination, currentView);
            currentView = new Uint8Array(VIEW_SIZE);
            writtenBytes = 0;
          }
        }
        function writeChunk(destination, chunk) {
          if (typeof chunk === "string") {
            writeStringChunk(destination, chunk);
          } else {
            writeViewChunk(destination, chunk);
          }
        }
        function writeToDestination(destination, view) {
          var currentHasCapacity = destination.write(view);
          destinationHasCapacity = destinationHasCapacity && currentHasCapacity;
        }
        function writeChunkAndReturn(destination, chunk) {
          writeChunk(destination, chunk);
          return destinationHasCapacity;
        }
        function completeWriting(destination) {
          if (currentView && writtenBytes > 0) {
            destination.write(currentView.subarray(0, writtenBytes));
          }
          currentView = null;
          writtenBytes = 0;
          destinationHasCapacity = true;
        }
        function close(destination) {
          destination.end();
        }
        var textEncoder = new util.TextEncoder();
        function stringToChunk(content) {
          return content;
        }
        function stringToPrecomputedChunk(content) {
          return textEncoder.encode(content);
        }
        function closeWithError(destination, error2) {
          destination.destroy(error2);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkAttributeStringCoercion(value, attributeName) {
          {
            if (willCoercionThrow(value)) {
              error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", attributeName, typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function checkCSSPropertyStringCoercion(value, propName) {
          {
            if (willCoercionThrow(value)) {
              error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", propName, typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function checkHtmlStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED = 0;
        var STRING = 1;
        var BOOLEANISH_STRING = 2;
        var BOOLEAN = 3;
        var OVERLOADED_BOOLEAN = 4;
        var NUMERIC = 5;
        var POSITIVE_NUMERIC = 6;
        var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
        var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
        var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$");
        var illegalAttributeNameCache = {};
        var validatedAttributeNameCache = {};
        function isAttributeNameSafe(attributeName) {
          if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
            return true;
          }
          if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
            return false;
          }
          if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
            validatedAttributeNameCache[attributeName] = true;
            return true;
          }
          illegalAttributeNameCache[attributeName] = true;
          {
            error("Invalid attribute name: `%s`", attributeName);
          }
          return false;
        }
        function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
          if (propertyInfo !== null && propertyInfo.type === RESERVED) {
            return false;
          }
          switch (typeof value) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return true;
            case "boolean": {
              if (isCustomComponentTag) {
                return false;
              }
              if (propertyInfo !== null) {
                return !propertyInfo.acceptsBooleans;
              } else {
                var prefix2 = name.toLowerCase().slice(0, 5);
                return prefix2 !== "data-" && prefix2 !== "aria-";
              }
            }
            default:
              return false;
          }
        }
        function getPropertyInfo(name) {
          return properties.hasOwnProperty(name) ? properties[name] : null;
        }
        function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2, removeEmptyString) {
          this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
          this.attributeName = attributeName;
          this.attributeNamespace = attributeNamespace;
          this.mustUseProperty = mustUseProperty;
          this.propertyName = name;
          this.type = type;
          this.sanitizeURL = sanitizeURL2;
          this.removeEmptyString = removeEmptyString;
        }
        var properties = {};
        var reservedProps = [
          "children",
          "dangerouslySetInnerHTML",
          // TODO: This prevents the assignment of defaultValue to regular
          // elements (not just inputs). Now that ReactDOMInput assigns to the
          // defaultValue property -- do we need this?
          "defaultValue",
          "defaultChecked",
          "innerHTML",
          "suppressContentEditableWarning",
          "suppressHydrationWarning",
          "style"
        ];
        reservedProps.forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            RESERVED,
            false,
            // mustUseProperty
            name,
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
          var name = _ref[0], attributeName = _ref[1];
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            false,
            // mustUseProperty
            attributeName,
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEANISH_STRING,
            false,
            // mustUseProperty
            name.toLowerCase(),
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEANISH_STRING,
            false,
            // mustUseProperty
            name,
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        [
          "allowFullScreen",
          "async",
          // Note: there is a special case that prevents it from being written to the DOM
          // on the client side because the browsers are inconsistent. Instead we call focus().
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          // Microdata
          "itemScope"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEAN,
            false,
            // mustUseProperty
            name.toLowerCase(),
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        [
          "checked",
          // Note: `option.selected` is not updated if `select.multiple` is
          // disabled with `removeAttribute`. We have special logic for handling this.
          "multiple",
          "muted",
          "selected"
          // NOTE: if you add a camelCased prop to this list,
          // you'll need to set attributeName to name.toLowerCase()
          // instead in the assignment below.
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEAN,
            true,
            // mustUseProperty
            name,
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        [
          "capture",
          "download"
          // NOTE: if you add a camelCased prop to this list,
          // you'll need to set attributeName to name.toLowerCase()
          // instead in the assignment below.
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            OVERLOADED_BOOLEAN,
            false,
            // mustUseProperty
            name,
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        [
          "cols",
          "rows",
          "size",
          "span"
          // NOTE: if you add a camelCased prop to this list,
          // you'll need to set attributeName to name.toLowerCase()
          // instead in the assignment below.
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            POSITIVE_NUMERIC,
            false,
            // mustUseProperty
            name,
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        ["rowSpan", "start"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            NUMERIC,
            false,
            // mustUseProperty
            name.toLowerCase(),
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        var CAMELIZE = /[\-\:]([a-z])/g;
        var capitalize = function(token) {
          return token[1].toUpperCase();
        };
        [
          "accent-height",
          "alignment-baseline",
          "arabic-form",
          "baseline-shift",
          "cap-height",
          "clip-path",
          "clip-rule",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "dominant-baseline",
          "enable-background",
          "fill-opacity",
          "fill-rule",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "glyph-name",
          "glyph-orientation-horizontal",
          "glyph-orientation-vertical",
          "horiz-adv-x",
          "horiz-origin-x",
          "image-rendering",
          "letter-spacing",
          "lighting-color",
          "marker-end",
          "marker-mid",
          "marker-start",
          "overline-position",
          "overline-thickness",
          "paint-order",
          "panose-1",
          "pointer-events",
          "rendering-intent",
          "shape-rendering",
          "stop-color",
          "stop-opacity",
          "strikethrough-position",
          "strikethrough-thickness",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke-width",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "underline-position",
          "underline-thickness",
          "unicode-bidi",
          "unicode-range",
          "units-per-em",
          "v-alphabetic",
          "v-hanging",
          "v-ideographic",
          "v-mathematical",
          "vector-effect",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "word-spacing",
          "writing-mode",
          "xmlns:xlink",
          "x-height"
          // NOTE: if you add a camelCased prop to this list,
          // you'll need to set attributeName to name.toLowerCase()
          // instead in the assignment below.
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            false,
            // mustUseProperty
            attributeName,
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type"
          // NOTE: if you add a camelCased prop to this list,
          // you'll need to set attributeName to name.toLowerCase()
          // instead in the assignment below.
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            false,
            // mustUseProperty
            attributeName,
            "http://www.w3.org/1999/xlink",
            false,
            // sanitizeURL
            false
          );
        });
        [
          "xml:base",
          "xml:lang",
          "xml:space"
          // NOTE: if you add a camelCased prop to this list,
          // you'll need to set attributeName to name.toLowerCase()
          // instead in the assignment below.
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            false,
            // mustUseProperty
            attributeName,
            "http://www.w3.org/XML/1998/namespace",
            false,
            // sanitizeURL
            false
          );
        });
        ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(
            attributeName,
            STRING,
            false,
            // mustUseProperty
            attributeName.toLowerCase(),
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        });
        var xlinkHref = "xlinkHref";
        properties[xlinkHref] = new PropertyInfoRecord(
          "xlinkHref",
          STRING,
          false,
          // mustUseProperty
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          true,
          // sanitizeURL
          false
        );
        ["src", "href", "action", "formAction"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(
            attributeName,
            STRING,
            false,
            // mustUseProperty
            attributeName.toLowerCase(),
            // attributeName
            null,
            // attributeNamespace
            true,
            // sanitizeURL
            true
          );
        });
        var isUnitlessNumber = {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageOutset: true,
          borderImageSlice: true,
          borderImageWidth: true,
          boxFlex: true,
          boxFlexGroup: true,
          boxOrdinalGroup: true,
          columnCount: true,
          columns: true,
          flex: true,
          flexGrow: true,
          flexPositive: true,
          flexShrink: true,
          flexNegative: true,
          flexOrder: true,
          gridArea: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowSpan: true,
          gridRowStart: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnSpan: true,
          gridColumnStart: true,
          fontWeight: true,
          lineClamp: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          tabSize: true,
          widows: true,
          zIndex: true,
          zoom: true,
          // SVG-related properties
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeDasharray: true,
          strokeDashoffset: true,
          strokeMiterlimit: true,
          strokeOpacity: true,
          strokeWidth: true
        };
        function prefixKey(prefix2, key) {
          return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
        }
        var prefixes = ["Webkit", "ms", "Moz", "O"];
        Object.keys(isUnitlessNumber).forEach(function(prop) {
          prefixes.forEach(function(prefix2) {
            isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
          });
        });
        var hasReadOnlyValue = {
          button: true,
          checkbox: true,
          image: true,
          hidden: true,
          radio: true,
          reset: true,
          submit: true
        };
        function checkControlledValueProps(tagName, props) {
          {
            if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
              error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
            }
            if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
              error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
            }
          }
        }
        function isCustomComponent(tagName, props) {
          if (tagName.indexOf("-") === -1) {
            return typeof props.is === "string";
          }
          switch (tagName) {
            // These are reserved SVG and MathML elements.
            // We don't mind this list too much because we expect it to never grow.
            // The alternative is to track the namespace in a few places which is convoluted.
            // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }
        var ariaProperties = {
          "aria-current": 0,
          // state
          "aria-description": 0,
          "aria-details": 0,
          "aria-disabled": 0,
          // state
          "aria-hidden": 0,
          // state
          "aria-invalid": 0,
          // state
          "aria-keyshortcuts": 0,
          "aria-label": 0,
          "aria-roledescription": 0,
          // Widget Attributes
          "aria-autocomplete": 0,
          "aria-checked": 0,
          "aria-expanded": 0,
          "aria-haspopup": 0,
          "aria-level": 0,
          "aria-modal": 0,
          "aria-multiline": 0,
          "aria-multiselectable": 0,
          "aria-orientation": 0,
          "aria-placeholder": 0,
          "aria-pressed": 0,
          "aria-readonly": 0,
          "aria-required": 0,
          "aria-selected": 0,
          "aria-sort": 0,
          "aria-valuemax": 0,
          "aria-valuemin": 0,
          "aria-valuenow": 0,
          "aria-valuetext": 0,
          // Live Region Attributes
          "aria-atomic": 0,
          "aria-busy": 0,
          "aria-live": 0,
          "aria-relevant": 0,
          // Drag-and-Drop Attributes
          "aria-dropeffect": 0,
          "aria-grabbed": 0,
          // Relationship Attributes
          "aria-activedescendant": 0,
          "aria-colcount": 0,
          "aria-colindex": 0,
          "aria-colspan": 0,
          "aria-controls": 0,
          "aria-describedby": 0,
          "aria-errormessage": 0,
          "aria-flowto": 0,
          "aria-labelledby": 0,
          "aria-owns": 0,
          "aria-posinset": 0,
          "aria-rowcount": 0,
          "aria-rowindex": 0,
          "aria-rowspan": 0,
          "aria-setsize": 0
        };
        var warnedProperties = {};
        var rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
        var rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        function validateProperty(tagName, name) {
          {
            if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
              return true;
            }
            if (rARIACamel.test(name)) {
              var ariaName = "aria-" + name.slice(4).toLowerCase();
              var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
              if (correctName == null) {
                error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name);
                warnedProperties[name] = true;
                return true;
              }
              if (name !== correctName) {
                error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName);
                warnedProperties[name] = true;
                return true;
              }
            }
            if (rARIA.test(name)) {
              var lowerCasedName = name.toLowerCase();
              var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
              if (standardName == null) {
                warnedProperties[name] = true;
                return false;
              }
              if (name !== standardName) {
                error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties[name] = true;
                return true;
              }
            }
          }
          return true;
        }
        function warnInvalidARIAProps(type, props) {
          {
            var invalidProps = [];
            for (var key in props) {
              var isValid = validateProperty(type, key);
              if (!isValid) {
                invalidProps.push(key);
              }
            }
            var unknownPropString = invalidProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (invalidProps.length === 1) {
              error("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            } else if (invalidProps.length > 1) {
              error("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            }
          }
        }
        function validateProperties(type, props) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnInvalidARIAProps(type, props);
        }
        var didWarnValueNull = false;
        function validateProperties$1(type, props) {
          {
            if (type !== "input" && type !== "textarea" && type !== "select") {
              return;
            }
            if (props != null && props.value === null && !didWarnValueNull) {
              didWarnValueNull = true;
              if (type === "select" && props.multiple) {
                error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type);
              } else {
                error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type);
              }
            }
          }
        }
        var possibleStandardNames = {
          // HTML
          accept: "accept",
          acceptcharset: "acceptCharset",
          "accept-charset": "acceptCharset",
          accesskey: "accessKey",
          action: "action",
          allowfullscreen: "allowFullScreen",
          alt: "alt",
          as: "as",
          async: "async",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autocorrect: "autoCorrect",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          autosave: "autoSave",
          capture: "capture",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          challenge: "challenge",
          charset: "charSet",
          checked: "checked",
          children: "children",
          cite: "cite",
          class: "className",
          classid: "classID",
          classname: "className",
          cols: "cols",
          colspan: "colSpan",
          content: "content",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          controls: "controls",
          controlslist: "controlsList",
          coords: "coords",
          crossorigin: "crossOrigin",
          dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
          data: "data",
          datetime: "dateTime",
          default: "default",
          defaultchecked: "defaultChecked",
          defaultvalue: "defaultValue",
          defer: "defer",
          dir: "dir",
          disabled: "disabled",
          disablepictureinpicture: "disablePictureInPicture",
          disableremoteplayback: "disableRemotePlayback",
          download: "download",
          draggable: "draggable",
          enctype: "encType",
          enterkeyhint: "enterKeyHint",
          for: "htmlFor",
          form: "form",
          formmethod: "formMethod",
          formaction: "formAction",
          formenctype: "formEncType",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          headers: "headers",
          height: "height",
          hidden: "hidden",
          high: "high",
          href: "href",
          hreflang: "hrefLang",
          htmlfor: "htmlFor",
          httpequiv: "httpEquiv",
          "http-equiv": "httpEquiv",
          icon: "icon",
          id: "id",
          imagesizes: "imageSizes",
          imagesrcset: "imageSrcSet",
          innerhtml: "innerHTML",
          inputmode: "inputMode",
          integrity: "integrity",
          is: "is",
          itemid: "itemID",
          itemprop: "itemProp",
          itemref: "itemRef",
          itemscope: "itemScope",
          itemtype: "itemType",
          keyparams: "keyParams",
          keytype: "keyType",
          kind: "kind",
          label: "label",
          lang: "lang",
          list: "list",
          loop: "loop",
          low: "low",
          manifest: "manifest",
          marginwidth: "marginWidth",
          marginheight: "marginHeight",
          max: "max",
          maxlength: "maxLength",
          media: "media",
          mediagroup: "mediaGroup",
          method: "method",
          min: "min",
          minlength: "minLength",
          multiple: "multiple",
          muted: "muted",
          name: "name",
          nomodule: "noModule",
          nonce: "nonce",
          novalidate: "noValidate",
          open: "open",
          optimum: "optimum",
          pattern: "pattern",
          placeholder: "placeholder",
          playsinline: "playsInline",
          poster: "poster",
          preload: "preload",
          profile: "profile",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rel: "rel",
          required: "required",
          reversed: "reversed",
          role: "role",
          rows: "rows",
          rowspan: "rowSpan",
          sandbox: "sandbox",
          scope: "scope",
          scoped: "scoped",
          scrolling: "scrolling",
          seamless: "seamless",
          selected: "selected",
          shape: "shape",
          size: "size",
          sizes: "sizes",
          span: "span",
          spellcheck: "spellCheck",
          src: "src",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          start: "start",
          step: "step",
          style: "style",
          summary: "summary",
          tabindex: "tabIndex",
          target: "target",
          title: "title",
          type: "type",
          usemap: "useMap",
          value: "value",
          width: "width",
          wmode: "wmode",
          wrap: "wrap",
          // SVG
          about: "about",
          accentheight: "accentHeight",
          "accent-height": "accentHeight",
          accumulate: "accumulate",
          additive: "additive",
          alignmentbaseline: "alignmentBaseline",
          "alignment-baseline": "alignmentBaseline",
          allowreorder: "allowReorder",
          alphabetic: "alphabetic",
          amplitude: "amplitude",
          arabicform: "arabicForm",
          "arabic-form": "arabicForm",
          ascent: "ascent",
          attributename: "attributeName",
          attributetype: "attributeType",
          autoreverse: "autoReverse",
          azimuth: "azimuth",
          basefrequency: "baseFrequency",
          baselineshift: "baselineShift",
          "baseline-shift": "baselineShift",
          baseprofile: "baseProfile",
          bbox: "bbox",
          begin: "begin",
          bias: "bias",
          by: "by",
          calcmode: "calcMode",
          capheight: "capHeight",
          "cap-height": "capHeight",
          clip: "clip",
          clippath: "clipPath",
          "clip-path": "clipPath",
          clippathunits: "clipPathUnits",
          cliprule: "clipRule",
          "clip-rule": "clipRule",
          color: "color",
          colorinterpolation: "colorInterpolation",
          "color-interpolation": "colorInterpolation",
          colorinterpolationfilters: "colorInterpolationFilters",
          "color-interpolation-filters": "colorInterpolationFilters",
          colorprofile: "colorProfile",
          "color-profile": "colorProfile",
          colorrendering: "colorRendering",
          "color-rendering": "colorRendering",
          contentscripttype: "contentScriptType",
          contentstyletype: "contentStyleType",
          cursor: "cursor",
          cx: "cx",
          cy: "cy",
          d: "d",
          datatype: "datatype",
          decelerate: "decelerate",
          descent: "descent",
          diffuseconstant: "diffuseConstant",
          direction: "direction",
          display: "display",
          divisor: "divisor",
          dominantbaseline: "dominantBaseline",
          "dominant-baseline": "dominantBaseline",
          dur: "dur",
          dx: "dx",
          dy: "dy",
          edgemode: "edgeMode",
          elevation: "elevation",
          enablebackground: "enableBackground",
          "enable-background": "enableBackground",
          end: "end",
          exponent: "exponent",
          externalresourcesrequired: "externalResourcesRequired",
          fill: "fill",
          fillopacity: "fillOpacity",
          "fill-opacity": "fillOpacity",
          fillrule: "fillRule",
          "fill-rule": "fillRule",
          filter: "filter",
          filterres: "filterRes",
          filterunits: "filterUnits",
          floodopacity: "floodOpacity",
          "flood-opacity": "floodOpacity",
          floodcolor: "floodColor",
          "flood-color": "floodColor",
          focusable: "focusable",
          fontfamily: "fontFamily",
          "font-family": "fontFamily",
          fontsize: "fontSize",
          "font-size": "fontSize",
          fontsizeadjust: "fontSizeAdjust",
          "font-size-adjust": "fontSizeAdjust",
          fontstretch: "fontStretch",
          "font-stretch": "fontStretch",
          fontstyle: "fontStyle",
          "font-style": "fontStyle",
          fontvariant: "fontVariant",
          "font-variant": "fontVariant",
          fontweight: "fontWeight",
          "font-weight": "fontWeight",
          format: "format",
          from: "from",
          fx: "fx",
          fy: "fy",
          g1: "g1",
          g2: "g2",
          glyphname: "glyphName",
          "glyph-name": "glyphName",
          glyphorientationhorizontal: "glyphOrientationHorizontal",
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphorientationvertical: "glyphOrientationVertical",
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          hanging: "hanging",
          horizadvx: "horizAdvX",
          "horiz-adv-x": "horizAdvX",
          horizoriginx: "horizOriginX",
          "horiz-origin-x": "horizOriginX",
          ideographic: "ideographic",
          imagerendering: "imageRendering",
          "image-rendering": "imageRendering",
          in2: "in2",
          in: "in",
          inlist: "inlist",
          intercept: "intercept",
          k1: "k1",
          k2: "k2",
          k3: "k3",
          k4: "k4",
          k: "k",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          kerning: "kerning",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          letterspacing: "letterSpacing",
          "letter-spacing": "letterSpacing",
          lightingcolor: "lightingColor",
          "lighting-color": "lightingColor",
          limitingconeangle: "limitingConeAngle",
          local: "local",
          markerend: "markerEnd",
          "marker-end": "markerEnd",
          markerheight: "markerHeight",
          markermid: "markerMid",
          "marker-mid": "markerMid",
          markerstart: "markerStart",
          "marker-start": "markerStart",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          mask: "mask",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          mathematical: "mathematical",
          mode: "mode",
          numoctaves: "numOctaves",
          offset: "offset",
          opacity: "opacity",
          operator: "operator",
          order: "order",
          orient: "orient",
          orientation: "orientation",
          origin: "origin",
          overflow: "overflow",
          overlineposition: "overlinePosition",
          "overline-position": "overlinePosition",
          overlinethickness: "overlineThickness",
          "overline-thickness": "overlineThickness",
          paintorder: "paintOrder",
          "paint-order": "paintOrder",
          panose1: "panose1",
          "panose-1": "panose1",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointerevents: "pointerEvents",
          "pointer-events": "pointerEvents",
          points: "points",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          prefix: "prefix",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          property: "property",
          r: "r",
          radius: "radius",
          refx: "refX",
          refy: "refY",
          renderingintent: "renderingIntent",
          "rendering-intent": "renderingIntent",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          resource: "resource",
          restart: "restart",
          result: "result",
          results: "results",
          rotate: "rotate",
          rx: "rx",
          ry: "ry",
          scale: "scale",
          security: "security",
          seed: "seed",
          shaperendering: "shapeRendering",
          "shape-rendering": "shapeRendering",
          slope: "slope",
          spacing: "spacing",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          speed: "speed",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stemh: "stemh",
          stemv: "stemv",
          stitchtiles: "stitchTiles",
          stopcolor: "stopColor",
          "stop-color": "stopColor",
          stopopacity: "stopOpacity",
          "stop-opacity": "stopOpacity",
          strikethroughposition: "strikethroughPosition",
          "strikethrough-position": "strikethroughPosition",
          strikethroughthickness: "strikethroughThickness",
          "strikethrough-thickness": "strikethroughThickness",
          string: "string",
          stroke: "stroke",
          strokedasharray: "strokeDasharray",
          "stroke-dasharray": "strokeDasharray",
          strokedashoffset: "strokeDashoffset",
          "stroke-dashoffset": "strokeDashoffset",
          strokelinecap: "strokeLinecap",
          "stroke-linecap": "strokeLinecap",
          strokelinejoin: "strokeLinejoin",
          "stroke-linejoin": "strokeLinejoin",
          strokemiterlimit: "strokeMiterlimit",
          "stroke-miterlimit": "strokeMiterlimit",
          strokewidth: "strokeWidth",
          "stroke-width": "strokeWidth",
          strokeopacity: "strokeOpacity",
          "stroke-opacity": "strokeOpacity",
          suppresscontenteditablewarning: "suppressContentEditableWarning",
          suppresshydrationwarning: "suppressHydrationWarning",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textanchor: "textAnchor",
          "text-anchor": "textAnchor",
          textdecoration: "textDecoration",
          "text-decoration": "textDecoration",
          textlength: "textLength",
          textrendering: "textRendering",
          "text-rendering": "textRendering",
          to: "to",
          transform: "transform",
          typeof: "typeof",
          u1: "u1",
          u2: "u2",
          underlineposition: "underlinePosition",
          "underline-position": "underlinePosition",
          underlinethickness: "underlineThickness",
          "underline-thickness": "underlineThickness",
          unicode: "unicode",
          unicodebidi: "unicodeBidi",
          "unicode-bidi": "unicodeBidi",
          unicoderange: "unicodeRange",
          "unicode-range": "unicodeRange",
          unitsperem: "unitsPerEm",
          "units-per-em": "unitsPerEm",
          unselectable: "unselectable",
          valphabetic: "vAlphabetic",
          "v-alphabetic": "vAlphabetic",
          values: "values",
          vectoreffect: "vectorEffect",
          "vector-effect": "vectorEffect",
          version: "version",
          vertadvy: "vertAdvY",
          "vert-adv-y": "vertAdvY",
          vertoriginx: "vertOriginX",
          "vert-origin-x": "vertOriginX",
          vertoriginy: "vertOriginY",
          "vert-origin-y": "vertOriginY",
          vhanging: "vHanging",
          "v-hanging": "vHanging",
          videographic: "vIdeographic",
          "v-ideographic": "vIdeographic",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          visibility: "visibility",
          vmathematical: "vMathematical",
          "v-mathematical": "vMathematical",
          vocab: "vocab",
          widths: "widths",
          wordspacing: "wordSpacing",
          "word-spacing": "wordSpacing",
          writingmode: "writingMode",
          "writing-mode": "writingMode",
          x1: "x1",
          x2: "x2",
          x: "x",
          xchannelselector: "xChannelSelector",
          xheight: "xHeight",
          "x-height": "xHeight",
          xlinkactuate: "xlinkActuate",
          "xlink:actuate": "xlinkActuate",
          xlinkarcrole: "xlinkArcrole",
          "xlink:arcrole": "xlinkArcrole",
          xlinkhref: "xlinkHref",
          "xlink:href": "xlinkHref",
          xlinkrole: "xlinkRole",
          "xlink:role": "xlinkRole",
          xlinkshow: "xlinkShow",
          "xlink:show": "xlinkShow",
          xlinktitle: "xlinkTitle",
          "xlink:title": "xlinkTitle",
          xlinktype: "xlinkType",
          "xlink:type": "xlinkType",
          xmlbase: "xmlBase",
          "xml:base": "xmlBase",
          xmllang: "xmlLang",
          "xml:lang": "xmlLang",
          xmlns: "xmlns",
          "xml:space": "xmlSpace",
          xmlnsxlink: "xmlnsXlink",
          "xmlns:xlink": "xmlnsXlink",
          xmlspace: "xmlSpace",
          y1: "y1",
          y2: "y2",
          y: "y",
          ychannelselector: "yChannelSelector",
          z: "z",
          zoomandpan: "zoomAndPan"
        };
        var validateProperty$1 = function() {
        };
        {
          var warnedProperties$1 = {};
          var EVENT_NAME_REGEX = /^on./;
          var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
          var rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
          var rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
          validateProperty$1 = function(tagName, name, value, eventRegistry) {
            if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
              return true;
            }
            var lowerCasedName = name.toLowerCase();
            if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
              error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (eventRegistry != null) {
              var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
              if (registrationNameDependencies.hasOwnProperty(name)) {
                return true;
              }
              var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
              if (registrationName != null) {
                error("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName);
                warnedProperties$1[name] = true;
                return true;
              }
              if (EVENT_NAME_REGEX.test(name)) {
                error("Unknown event handler property `%s`. It will be ignored.", name);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (EVENT_NAME_REGEX.test(name)) {
              if (INVALID_EVENT_NAME_REGEX.test(name)) {
                error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
              return true;
            }
            if (lowerCasedName === "innerhtml") {
              error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "aria") {
              error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value !== "string") {
              error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "number" && isNaN(value)) {
              error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name);
              warnedProperties$1[name] = true;
              return true;
            }
            var propertyInfo = getPropertyInfo(name);
            var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
            if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
              var standardName = possibleStandardNames[lowerCasedName];
              if (standardName !== name) {
                error("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (!isReserved && name !== lowerCasedName) {
              error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              if (value) {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name);
              } else {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (isReserved) {
              return true;
            }
            if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              warnedProperties$1[name] = true;
              return false;
            }
            if ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
              error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
              warnedProperties$1[name] = true;
              return true;
            }
            return true;
          };
        }
        var warnUnknownProperties = function(type, props, eventRegistry) {
          {
            var unknownProps = [];
            for (var key in props) {
              var isValid = validateProperty$1(type, key, props[key], eventRegistry);
              if (!isValid) {
                unknownProps.push(key);
              }
            }
            var unknownPropString = unknownProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (unknownProps.length === 1) {
              error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            } else if (unknownProps.length > 1) {
              error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            }
          }
        };
        function validateProperties$2(type, props, eventRegistry) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnUnknownProperties(type, props, eventRegistry);
        }
        var warnValidStyle = function() {
        };
        {
          var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
          var msPattern = /^-ms-/;
          var hyphenPattern = /-(.)/g;
          var badStyleValueWithSemicolonPattern = /;\s*$/;
          var warnedStyleNames = {};
          var warnedStyleValues = {};
          var warnedForNaNValue = false;
          var warnedForInfinityValue = false;
          var camelize = function(string) {
            return string.replace(hyphenPattern, function(_, character) {
              return character.toUpperCase();
            });
          };
          var warnHyphenatedStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error(
              "Unsupported style property %s. Did you mean %s?",
              name,
              // As Andi Smith suggests
              // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
              // is converted to lowercase `ms`.
              camelize(name.replace(msPattern, "ms-"))
            );
          };
          var warnBadVendoredStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1));
          };
          var warnStyleValueWithSemicolon = function(name, value) {
            if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
              return;
            }
            warnedStyleValues[value] = true;
            error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, ""));
          };
          var warnStyleValueIsNaN = function(name, value) {
            if (warnedForNaNValue) {
              return;
            }
            warnedForNaNValue = true;
            error("`NaN` is an invalid value for the `%s` css style property.", name);
          };
          var warnStyleValueIsInfinity = function(name, value) {
            if (warnedForInfinityValue) {
              return;
            }
            warnedForInfinityValue = true;
            error("`Infinity` is an invalid value for the `%s` css style property.", name);
          };
          warnValidStyle = function(name, value) {
            if (name.indexOf("-") > -1) {
              warnHyphenatedStyleName(name);
            } else if (badVendoredStyleNamePattern.test(name)) {
              warnBadVendoredStyleName(name);
            } else if (badStyleValueWithSemicolonPattern.test(value)) {
              warnStyleValueWithSemicolon(name, value);
            }
            if (typeof value === "number") {
              if (isNaN(value)) {
                warnStyleValueIsNaN(name, value);
              } else if (!isFinite(value)) {
                warnStyleValueIsInfinity(name, value);
              }
            }
          };
        }
        var warnValidStyle$1 = warnValidStyle;
        var matchHtmlRegExp = /["'&<>]/;
        function escapeHtml(string) {
          {
            checkHtmlStringCoercion(string);
          }
          var str = "" + string;
          var match = matchHtmlRegExp.exec(str);
          if (!match) {
            return str;
          }
          var escape;
          var html = "";
          var index;
          var lastIndex = 0;
          for (index = match.index; index < str.length; index++) {
            switch (str.charCodeAt(index)) {
              case 34:
                escape = "&quot;";
                break;
              case 38:
                escape = "&amp;";
                break;
              case 39:
                escape = "&#x27;";
                break;
              case 60:
                escape = "&lt;";
                break;
              case 62:
                escape = "&gt;";
                break;
              default:
                continue;
            }
            if (lastIndex !== index) {
              html += str.substring(lastIndex, index);
            }
            lastIndex = index + 1;
            html += escape;
          }
          return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
        }
        function escapeTextForBrowser(text) {
          if (typeof text === "boolean" || typeof text === "number") {
            return "" + text;
          }
          return escapeHtml(text);
        }
        var uppercasePattern = /([A-Z])/g;
        var msPattern$1 = /^ms-/;
        function hyphenateStyleName(name) {
          return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern$1, "-ms-");
        }
        var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
        var didWarn = false;
        function sanitizeURL(url) {
          {
            if (!didWarn && isJavaScriptProtocol.test(url)) {
              didWarn = true;
              error("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url));
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        var startInlineScript = stringToPrecomputedChunk("<script>");
        var endInlineScript = stringToPrecomputedChunk("</script>");
        var startScriptSrc = stringToPrecomputedChunk('<script src="');
        var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
        var endAsyncScript = stringToPrecomputedChunk('" async=""></script>');
        function escapeBootstrapScriptContent(scriptText) {
          {
            checkHtmlStringCoercion(scriptText);
          }
          return ("" + scriptText).replace(scriptRegex, scriptReplacer);
        }
        var scriptRegex = /(<\/|<)(s)(cript)/gi;
        var scriptReplacer = function(match, prefix2, s, suffix) {
          return "" + prefix2 + (s === "s" ? "\\u0073" : "\\u0053") + suffix;
        };
        function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
          var idPrefix = identifierPrefix === void 0 ? "" : identifierPrefix;
          var inlineScriptWithNonce = nonce === void 0 ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
          var bootstrapChunks = [];
          if (bootstrapScriptContent !== void 0) {
            bootstrapChunks.push(inlineScriptWithNonce, stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)), endInlineScript);
          }
          if (bootstrapScripts !== void 0) {
            for (var i = 0; i < bootstrapScripts.length; i++) {
              bootstrapChunks.push(startScriptSrc, stringToChunk(escapeTextForBrowser(bootstrapScripts[i])), endAsyncScript);
            }
          }
          if (bootstrapModules !== void 0) {
            for (var _i = 0; _i < bootstrapModules.length; _i++) {
              bootstrapChunks.push(startModuleSrc, stringToChunk(escapeTextForBrowser(bootstrapModules[_i])), endAsyncScript);
            }
          }
          return {
            bootstrapChunks,
            startInlineScript: inlineScriptWithNonce,
            placeholderPrefix: stringToPrecomputedChunk(idPrefix + "P:"),
            segmentPrefix: stringToPrecomputedChunk(idPrefix + "S:"),
            boundaryPrefix: idPrefix + "B:",
            idPrefix,
            nextSuspenseID: 0,
            sentCompleteSegmentFunction: false,
            sentCompleteBoundaryFunction: false,
            sentClientRenderFunction: false
          };
        }
        var ROOT_HTML_MODE = 0;
        var HTML_MODE = 1;
        var SVG_MODE = 2;
        var MATHML_MODE = 3;
        var HTML_TABLE_MODE = 4;
        var HTML_TABLE_BODY_MODE = 5;
        var HTML_TABLE_ROW_MODE = 6;
        var HTML_COLGROUP_MODE = 7;
        function createFormatContext(insertionMode, selectedValue) {
          return {
            insertionMode,
            selectedValue
          };
        }
        function createRootFormatContext(namespaceURI) {
          var insertionMode = namespaceURI === "http://www.w3.org/2000/svg" ? SVG_MODE : namespaceURI === "http://www.w3.org/1998/Math/MathML" ? MATHML_MODE : ROOT_HTML_MODE;
          return createFormatContext(insertionMode, null);
        }
        function getChildFormatContext(parentContext, type, props) {
          switch (type) {
            case "select":
              return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue);
            case "svg":
              return createFormatContext(SVG_MODE, null);
            case "math":
              return createFormatContext(MATHML_MODE, null);
            case "foreignObject":
              return createFormatContext(HTML_MODE, null);
            // Table parents are special in that their children can only be created at all if they're
            // wrapped in a table parent. So we need to encode that we're entering this mode.
            case "table":
              return createFormatContext(HTML_TABLE_MODE, null);
            case "thead":
            case "tbody":
            case "tfoot":
              return createFormatContext(HTML_TABLE_BODY_MODE, null);
            case "colgroup":
              return createFormatContext(HTML_COLGROUP_MODE, null);
            case "tr":
              return createFormatContext(HTML_TABLE_ROW_MODE, null);
          }
          if (parentContext.insertionMode >= HTML_TABLE_MODE) {
            return createFormatContext(HTML_MODE, null);
          }
          if (parentContext.insertionMode === ROOT_HTML_MODE) {
            return createFormatContext(HTML_MODE, null);
          }
          return parentContext;
        }
        var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
        function assignSuspenseBoundaryID(responseState) {
          var generatedID = responseState.nextSuspenseID++;
          return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
        }
        function makeId(responseState, treeId, localId) {
          var idPrefix = responseState.idPrefix;
          var id = ":" + idPrefix + "R" + treeId;
          if (localId > 0) {
            id += "H" + localId.toString(32);
          }
          return id + ":";
        }
        function encodeHTMLTextNode(text) {
          return escapeTextForBrowser(text);
        }
        var textSeparator = stringToPrecomputedChunk("<!-- -->");
        function pushTextInstance(target, text, responseState, textEmbedded) {
          if (text === "") {
            return textEmbedded;
          }
          if (textEmbedded) {
            target.push(textSeparator);
          }
          target.push(stringToChunk(encodeHTMLTextNode(text)));
          return true;
        }
        function pushSegmentFinale(target, responseState, lastPushedText, textEmbedded) {
          if (lastPushedText && textEmbedded) {
            target.push(textSeparator);
          }
        }
        var styleNameCache = /* @__PURE__ */ new Map();
        function processStyleName(styleName) {
          var chunk = styleNameCache.get(styleName);
          if (chunk !== void 0) {
            return chunk;
          }
          var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
          styleNameCache.set(styleName, result);
          return result;
        }
        var styleAttributeStart = stringToPrecomputedChunk(' style="');
        var styleAssign = stringToPrecomputedChunk(":");
        var styleSeparator = stringToPrecomputedChunk(";");
        function pushStyle(target, responseState, style) {
          if (typeof style !== "object") {
            throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
          }
          var isFirst = true;
          for (var styleName in style) {
            if (!hasOwnProperty.call(style, styleName)) {
              continue;
            }
            var styleValue = style[styleName];
            if (styleValue == null || typeof styleValue === "boolean" || styleValue === "") {
              continue;
            }
            var nameChunk = void 0;
            var valueChunk = void 0;
            var isCustomProperty = styleName.indexOf("--") === 0;
            if (isCustomProperty) {
              nameChunk = stringToChunk(escapeTextForBrowser(styleName));
              {
                checkCSSPropertyStringCoercion(styleValue, styleName);
              }
              valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
            } else {
              {
                warnValidStyle$1(styleName, styleValue);
              }
              nameChunk = processStyleName(styleName);
              if (typeof styleValue === "number") {
                if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName)) {
                  valueChunk = stringToChunk(styleValue + "px");
                } else {
                  valueChunk = stringToChunk("" + styleValue);
                }
              } else {
                {
                  checkCSSPropertyStringCoercion(styleValue, styleName);
                }
                valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
              }
            }
            if (isFirst) {
              isFirst = false;
              target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
            } else {
              target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
            }
          }
          if (!isFirst) {
            target.push(attributeEnd);
          }
        }
        var attributeSeparator = stringToPrecomputedChunk(" ");
        var attributeAssign = stringToPrecomputedChunk('="');
        var attributeEnd = stringToPrecomputedChunk('"');
        var attributeEmptyString = stringToPrecomputedChunk('=""');
        function pushAttribute(target, responseState, name, value) {
          switch (name) {
            case "style": {
              pushStyle(target, responseState, value);
              return;
            }
            case "defaultValue":
            case "defaultChecked":
            // These shouldn't be set as attributes on generic HTML elements.
            case "innerHTML":
            // Must use dangerouslySetInnerHTML instead.
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              return;
          }
          if (
            // shouldIgnoreAttribute
            // We have already filtered out null/undefined and reserved words.
            name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N")
          ) {
            return;
          }
          var propertyInfo = getPropertyInfo(name);
          if (propertyInfo !== null) {
            switch (typeof value) {
              case "function":
              // $FlowIssue symbol is perfectly valid here
              case "symbol":
                return;
              case "boolean": {
                if (!propertyInfo.acceptsBooleans) {
                  return;
                }
              }
            }
            var attributeName = propertyInfo.attributeName;
            var attributeNameChunk = stringToChunk(attributeName);
            switch (propertyInfo.type) {
              case BOOLEAN:
                if (value) {
                  target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                }
                return;
              case OVERLOADED_BOOLEAN:
                if (value === true) {
                  target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                } else if (value === false) ;
                else {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                return;
              case NUMERIC:
                if (!isNaN(value)) {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                break;
              case POSITIVE_NUMERIC:
                if (!isNaN(value) && value >= 1) {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                break;
              default:
                if (propertyInfo.sanitizeURL) {
                  {
                    checkAttributeStringCoercion(value, attributeName);
                  }
                  value = "" + value;
                  sanitizeURL(value);
                }
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
            }
          } else if (isAttributeNameSafe(name)) {
            switch (typeof value) {
              case "function":
              // $FlowIssue symbol is perfectly valid here
              case "symbol":
                return;
              case "boolean": {
                var prefix2 = name.toLowerCase().slice(0, 5);
                if (prefix2 !== "data-" && prefix2 !== "aria-") {
                  return;
                }
              }
            }
            target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
          }
        }
        var endOfStartTag = stringToPrecomputedChunk(">");
        var endOfStartTagSelfClosing = stringToPrecomputedChunk("/>");
        function pushInnerHTML(target, innerHTML, children) {
          if (innerHTML != null) {
            if (children != null) {
              throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            }
            if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
              throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            }
            var html = innerHTML.__html;
            if (html !== null && html !== void 0) {
              {
                checkHtmlStringCoercion(html);
              }
              target.push(stringToChunk("" + html));
            }
          }
        }
        var didWarnDefaultInputValue = false;
        var didWarnDefaultChecked = false;
        var didWarnDefaultSelectValue = false;
        var didWarnDefaultTextareaValue = false;
        var didWarnInvalidOptionChildren = false;
        var didWarnInvalidOptionInnerHTML = false;
        var didWarnSelectedSetOnOption = false;
        function checkSelectProp(props, propName) {
          {
            var value = props[propName];
            if (value != null) {
              var array = isArray(value);
              if (props.multiple && !array) {
                error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName);
              } else if (!props.multiple && array) {
                error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName);
              }
            }
          }
        }
        function pushStartSelect(target, props, responseState) {
          {
            checkControlledValueProps("select", props);
            checkSelectProp(props, "value");
            checkSelectProp(props, "defaultValue");
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultSelectValue) {
              error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components");
              didWarnDefaultSelectValue = true;
            }
          }
          target.push(startChunkForTag("select"));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        function flattenOptionChildren(children) {
          var content = "";
          React5.Children.forEach(children, function(child) {
            if (child == null) {
              return;
            }
            content += child;
            {
              if (!didWarnInvalidOptionChildren && typeof child !== "string" && typeof child !== "number") {
                didWarnInvalidOptionChildren = true;
                error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.");
              }
            }
          });
          return content;
        }
        var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');
        function pushStartOption(target, props, responseState, formatContext) {
          var selectedValue = formatContext.selectedValue;
          target.push(startChunkForTag("option"));
          var children = null;
          var value = null;
          var selected = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "selected":
                  selected = propValue;
                  {
                    if (!didWarnSelectedSetOnOption) {
                      error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.");
                      didWarnSelectedSetOnOption = true;
                    }
                  }
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                // eslint-disable-next-line-no-fallthrough
                case "value":
                  value = propValue;
                // We intentionally fallthrough to also set the attribute on the node.
                // eslint-disable-next-line-no-fallthrough
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (selectedValue != null) {
            var stringValue;
            if (value !== null) {
              {
                checkAttributeStringCoercion(value, "value");
              }
              stringValue = "" + value;
            } else {
              {
                if (innerHTML !== null) {
                  if (!didWarnInvalidOptionInnerHTML) {
                    didWarnInvalidOptionInnerHTML = true;
                    error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.");
                  }
                }
              }
              stringValue = flattenOptionChildren(children);
            }
            if (isArray(selectedValue)) {
              for (var i = 0; i < selectedValue.length; i++) {
                {
                  checkAttributeStringCoercion(selectedValue[i], "value");
                }
                var v = "" + selectedValue[i];
                if (v === stringValue) {
                  target.push(selectedMarkerAttribute);
                  break;
                }
              }
            } else {
              {
                checkAttributeStringCoercion(selectedValue, "select.value");
              }
              if ("" + selectedValue === stringValue) {
                target.push(selectedMarkerAttribute);
              }
            }
          } else if (selected) {
            target.push(selectedMarkerAttribute);
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        function pushInput(target, props, responseState) {
          {
            checkControlledValueProps("input", props);
            if (props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnDefaultChecked) {
              error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
              didWarnDefaultChecked = true;
            }
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultInputValue) {
              error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
              didWarnDefaultInputValue = true;
            }
          }
          target.push(startChunkForTag("input"));
          var value = null;
          var defaultValue = null;
          var checked = null;
          var defaultChecked = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                // eslint-disable-next-line-no-fallthrough
                case "defaultChecked":
                  defaultChecked = propValue;
                  break;
                case "defaultValue":
                  defaultValue = propValue;
                  break;
                case "checked":
                  checked = propValue;
                  break;
                case "value":
                  value = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (checked !== null) {
            pushAttribute(target, responseState, "checked", checked);
          } else if (defaultChecked !== null) {
            pushAttribute(target, responseState, "checked", defaultChecked);
          }
          if (value !== null) {
            pushAttribute(target, responseState, "value", value);
          } else if (defaultValue !== null) {
            pushAttribute(target, responseState, "value", defaultValue);
          }
          target.push(endOfStartTagSelfClosing);
          return null;
        }
        function pushStartTextArea(target, props, responseState) {
          {
            checkControlledValueProps("textarea", props);
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultTextareaValue) {
              error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components");
              didWarnDefaultTextareaValue = true;
            }
          }
          target.push(startChunkForTag("textarea"));
          var value = null;
          var defaultValue = null;
          var children = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "value":
                  value = propValue;
                  break;
                case "defaultValue":
                  defaultValue = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
                // eslint-disable-next-line-no-fallthrough
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (value === null && defaultValue !== null) {
            value = defaultValue;
          }
          target.push(endOfStartTag);
          if (children != null) {
            {
              error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
            }
            if (value != null) {
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            }
            if (isArray(children)) {
              if (children.length > 1) {
                throw new Error("<textarea> can only have at most one child.");
              }
              {
                checkHtmlStringCoercion(children[0]);
              }
              value = "" + children[0];
            }
            {
              checkHtmlStringCoercion(children);
            }
            value = "" + children;
          }
          if (typeof value === "string" && value[0] === "\n") {
            target.push(leadingNewline);
          }
          if (value !== null) {
            {
              checkAttributeStringCoercion(value, "value");
            }
            target.push(stringToChunk(encodeHTMLTextNode("" + value)));
          }
          return null;
        }
        function pushSelfClosing(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                // eslint-disable-next-line-no-fallthrough
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTagSelfClosing);
          return null;
        }
        function pushStartMenuItem(target, props, responseState) {
          target.push(startChunkForTag("menuitem"));
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
                // eslint-disable-next-line-no-fallthrough
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          return null;
        }
        function pushStartTitle(target, props, responseState) {
          target.push(startChunkForTag("title"));
          var children = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
                // eslint-disable-next-line-no-fallthrough
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          {
            var child = Array.isArray(children) && children.length < 2 ? children[0] || null : children;
            if (Array.isArray(children) && children.length > 1) {
              error("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
            } else if (child != null && child.$$typeof != null) {
              error("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
            } else if (child != null && typeof child !== "string" && typeof child !== "number") {
              error("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
            }
          }
          return children;
        }
        function pushStartGenericElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          if (typeof children === "string") {
            target.push(stringToChunk(encodeHTMLTextNode(children)));
            return null;
          }
          return children;
        }
        function pushStartCustomElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                case "style":
                  pushStyle(target, responseState, propValue);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  if (isAttributeNameSafe(propKey) && typeof propValue !== "function" && typeof propValue !== "symbol") {
                    target.push(attributeSeparator, stringToChunk(propKey), attributeAssign, stringToChunk(escapeTextForBrowser(propValue)), attributeEnd);
                  }
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        var leadingNewline = stringToPrecomputedChunk("\n");
        function pushStartPreformattedElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          if (innerHTML != null) {
            if (children != null) {
              throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            }
            if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
              throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            }
            var html = innerHTML.__html;
            if (html !== null && html !== void 0) {
              if (typeof html === "string" && html.length > 0 && html[0] === "\n") {
                target.push(leadingNewline, stringToChunk(html));
              } else {
                {
                  checkHtmlStringCoercion(html);
                }
                target.push(stringToChunk("" + html));
              }
            }
          }
          if (typeof children === "string" && children[0] === "\n") {
            target.push(leadingNewline);
          }
          return children;
        }
        var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
        var validatedTagCache = /* @__PURE__ */ new Map();
        function startChunkForTag(tag) {
          var tagStartChunk = validatedTagCache.get(tag);
          if (tagStartChunk === void 0) {
            if (!VALID_TAG_REGEX.test(tag)) {
              throw new Error("Invalid tag: " + tag);
            }
            tagStartChunk = stringToPrecomputedChunk("<" + tag);
            validatedTagCache.set(tag, tagStartChunk);
          }
          return tagStartChunk;
        }
        var DOCTYPE = stringToPrecomputedChunk("<!DOCTYPE html>");
        function pushStartInstance(target, type, props, responseState, formatContext) {
          {
            validateProperties(type, props);
            validateProperties$1(type, props);
            validateProperties$2(type, props, null);
            if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
              error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
            }
            if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
              if (type.indexOf("-") === -1 && typeof props.is !== "string" && type.toLowerCase() !== type) {
                error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
              }
            }
          }
          switch (type) {
            // Special tags
            case "select":
              return pushStartSelect(target, props, responseState);
            case "option":
              return pushStartOption(target, props, responseState, formatContext);
            case "textarea":
              return pushStartTextArea(target, props, responseState);
            case "input":
              return pushInput(target, props, responseState);
            case "menuitem":
              return pushStartMenuItem(target, props, responseState);
            case "title":
              return pushStartTitle(target, props, responseState);
            // Newline eating tags
            case "listing":
            case "pre": {
              return pushStartPreformattedElement(target, props, type, responseState);
            }
            // Omitted close tags
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr": {
              return pushSelfClosing(target, props, type, responseState);
            }
            // These are reserved SVG and MathML elements, that are never custom elements.
            // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": {
              return pushStartGenericElement(target, props, type, responseState);
            }
            case "html": {
              if (formatContext.insertionMode === ROOT_HTML_MODE) {
                target.push(DOCTYPE);
              }
              return pushStartGenericElement(target, props, type, responseState);
            }
            default: {
              if (type.indexOf("-") === -1 && typeof props.is !== "string") {
                return pushStartGenericElement(target, props, type, responseState);
              } else {
                return pushStartCustomElement(target, props, type, responseState);
              }
            }
          }
        }
        var endTag1 = stringToPrecomputedChunk("</");
        var endTag2 = stringToPrecomputedChunk(">");
        function pushEndInstance(target, type, props) {
          switch (type) {
            // Omitted close tags
            // TODO: Instead of repeating this switch we could try to pass a flag from above.
            // That would require returning a tuple. Which might be ok if it gets inlined.
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "input":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr": {
              break;
            }
            default: {
              target.push(endTag1, stringToChunk(type), endTag2);
            }
          }
        }
        function writeCompletedRoot(destination, responseState) {
          var bootstrapChunks = responseState.bootstrapChunks;
          var i = 0;
          for (; i < bootstrapChunks.length - 1; i++) {
            writeChunk(destination, bootstrapChunks[i]);
          }
          if (i < bootstrapChunks.length) {
            return writeChunkAndReturn(destination, bootstrapChunks[i]);
          }
          return true;
        }
        var placeholder1 = stringToPrecomputedChunk('<template id="');
        var placeholder2 = stringToPrecomputedChunk('"></template>');
        function writePlaceholder(destination, responseState, id) {
          writeChunk(destination, placeholder1);
          writeChunk(destination, responseState.placeholderPrefix);
          var formattedID = stringToChunk(id.toString(16));
          writeChunk(destination, formattedID);
          return writeChunkAndReturn(destination, placeholder2);
        }
        var startCompletedSuspenseBoundary = stringToPrecomputedChunk("<!--$-->");
        var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
        var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
        var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk("<!--$!-->");
        var endSuspenseBoundary = stringToPrecomputedChunk("<!--/$-->");
        var clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk("<template");
        var clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"');
        var clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="');
        var clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="');
        var clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="');
        var clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk("></template>");
        function writeStartCompletedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
        }
        function writeStartPendingSuspenseBoundary(destination, responseState, id) {
          writeChunk(destination, startPendingSuspenseBoundary1);
          if (id === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          writeChunk(destination, id);
          return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
        }
        function writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMesssage, errorComponentStack) {
          var result;
          result = writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
          writeChunk(destination, clientRenderedSuspenseBoundaryError1);
          if (errorDigest) {
            writeChunk(destination, clientRenderedSuspenseBoundaryError1A);
            writeChunk(destination, stringToChunk(escapeTextForBrowser(errorDigest)));
            writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
          }
          {
            if (errorMesssage) {
              writeChunk(destination, clientRenderedSuspenseBoundaryError1B);
              writeChunk(destination, stringToChunk(escapeTextForBrowser(errorMesssage)));
              writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
            }
            if (errorComponentStack) {
              writeChunk(destination, clientRenderedSuspenseBoundaryError1C);
              writeChunk(destination, stringToChunk(escapeTextForBrowser(errorComponentStack)));
              writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
            }
          }
          result = writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
          return result;
        }
        function writeEndCompletedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        function writeEndPendingSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
        var startSegmentHTML2 = stringToPrecomputedChunk('">');
        var endSegmentHTML = stringToPrecomputedChunk("</div>");
        var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
        var startSegmentSVG2 = stringToPrecomputedChunk('">');
        var endSegmentSVG = stringToPrecomputedChunk("</svg>");
        var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
        var startSegmentMathML2 = stringToPrecomputedChunk('">');
        var endSegmentMathML = stringToPrecomputedChunk("</math>");
        var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
        var startSegmentTable2 = stringToPrecomputedChunk('">');
        var endSegmentTable = stringToPrecomputedChunk("</table>");
        var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
        var startSegmentTableBody2 = stringToPrecomputedChunk('">');
        var endSegmentTableBody = stringToPrecomputedChunk("</tbody></table>");
        var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
        var startSegmentTableRow2 = stringToPrecomputedChunk('">');
        var endSegmentTableRow = stringToPrecomputedChunk("</tr></table>");
        var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
        var startSegmentColGroup2 = stringToPrecomputedChunk('">');
        var endSegmentColGroup = stringToPrecomputedChunk("</colgroup></table>");
        function writeStartSegment(destination, responseState, formatContext, id) {
          switch (formatContext.insertionMode) {
            case ROOT_HTML_MODE:
            case HTML_MODE: {
              writeChunk(destination, startSegmentHTML);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentHTML2);
            }
            case SVG_MODE: {
              writeChunk(destination, startSegmentSVG);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentSVG2);
            }
            case MATHML_MODE: {
              writeChunk(destination, startSegmentMathML);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentMathML2);
            }
            case HTML_TABLE_MODE: {
              writeChunk(destination, startSegmentTable);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTable2);
            }
            // TODO: For the rest of these, there will be extra wrapper nodes that never
            // get deleted from the document. We need to delete the table too as part
            // of the injected scripts. They are invisible though so it's not too terrible
            // and it's kind of an edge case to suspend in a table. Totally supported though.
            case HTML_TABLE_BODY_MODE: {
              writeChunk(destination, startSegmentTableBody);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTableBody2);
            }
            case HTML_TABLE_ROW_MODE: {
              writeChunk(destination, startSegmentTableRow);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTableRow2);
            }
            case HTML_COLGROUP_MODE: {
              writeChunk(destination, startSegmentColGroup);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentColGroup2);
            }
            default: {
              throw new Error("Unknown insertion mode. This is a bug in React.");
            }
          }
        }
        function writeEndSegment(destination, formatContext) {
          switch (formatContext.insertionMode) {
            case ROOT_HTML_MODE:
            case HTML_MODE: {
              return writeChunkAndReturn(destination, endSegmentHTML);
            }
            case SVG_MODE: {
              return writeChunkAndReturn(destination, endSegmentSVG);
            }
            case MATHML_MODE: {
              return writeChunkAndReturn(destination, endSegmentMathML);
            }
            case HTML_TABLE_MODE: {
              return writeChunkAndReturn(destination, endSegmentTable);
            }
            case HTML_TABLE_BODY_MODE: {
              return writeChunkAndReturn(destination, endSegmentTableBody);
            }
            case HTML_TABLE_ROW_MODE: {
              return writeChunkAndReturn(destination, endSegmentTableRow);
            }
            case HTML_COLGROUP_MODE: {
              return writeChunkAndReturn(destination, endSegmentColGroup);
            }
            default: {
              throw new Error("Unknown insertion mode. This is a bug in React.");
            }
          }
        }
        var completeSegmentFunction = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}";
        var completeBoundaryFunction = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
        var clientRenderFunction = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}';
        var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("');
        var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
        var completeSegmentScript2 = stringToPrecomputedChunk('","');
        var completeSegmentScript3 = stringToPrecomputedChunk('")</script>');
        function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentCompleteSegmentFunction) {
            responseState.sentCompleteSegmentFunction = true;
            writeChunk(destination, completeSegmentScript1Full);
          } else {
            writeChunk(destination, completeSegmentScript1Partial);
          }
          writeChunk(destination, responseState.segmentPrefix);
          var formattedID = stringToChunk(contentSegmentID.toString(16));
          writeChunk(destination, formattedID);
          writeChunk(destination, completeSegmentScript2);
          writeChunk(destination, responseState.placeholderPrefix);
          writeChunk(destination, formattedID);
          return writeChunkAndReturn(destination, completeSegmentScript3);
        }
        var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("');
        var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
        var completeBoundaryScript2 = stringToPrecomputedChunk('","');
        var completeBoundaryScript3 = stringToPrecomputedChunk('")</script>');
        function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentCompleteBoundaryFunction) {
            responseState.sentCompleteBoundaryFunction = true;
            writeChunk(destination, completeBoundaryScript1Full);
          } else {
            writeChunk(destination, completeBoundaryScript1Partial);
          }
          if (boundaryID === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          var formattedContentID = stringToChunk(contentSegmentID.toString(16));
          writeChunk(destination, boundaryID);
          writeChunk(destination, completeBoundaryScript2);
          writeChunk(destination, responseState.segmentPrefix);
          writeChunk(destination, formattedContentID);
          return writeChunkAndReturn(destination, completeBoundaryScript3);
        }
        var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("');
        var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
        var clientRenderScript1A = stringToPrecomputedChunk('"');
        var clientRenderScript2 = stringToPrecomputedChunk(")</script>");
        var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(",");
        function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID, errorDigest, errorMessage, errorComponentStack) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentClientRenderFunction) {
            responseState.sentClientRenderFunction = true;
            writeChunk(destination, clientRenderScript1Full);
          } else {
            writeChunk(destination, clientRenderScript1Partial);
          }
          if (boundaryID === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          writeChunk(destination, boundaryID);
          writeChunk(destination, clientRenderScript1A);
          if (errorDigest || errorMessage || errorComponentStack) {
            writeChunk(destination, clientRenderErrorScriptArgInterstitial);
            writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest || "")));
          }
          if (errorMessage || errorComponentStack) {
            writeChunk(destination, clientRenderErrorScriptArgInterstitial);
            writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorMessage || "")));
          }
          if (errorComponentStack) {
            writeChunk(destination, clientRenderErrorScriptArgInterstitial);
            writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorComponentStack)));
          }
          return writeChunkAndReturn(destination, clientRenderScript2);
        }
        var regexForJSStringsInScripts = /[<\u2028\u2029]/g;
        function escapeJSStringsForInstructionScripts(input) {
          var escaped = JSON.stringify(input);
          return escaped.replace(regexForJSStringsInScripts, function(match) {
            switch (match) {
              // santizing breaking out of strings and script tags
              case "<":
                return "\\u003c";
              case "\u2028":
                return "\\u2028";
              case "\u2029":
                return "\\u2029";
              default: {
                throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
              }
            }
          });
        }
        var assign = Object.assign;
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_SCOPE_TYPE = Symbol.for("react.scope");
        var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode");
        var REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
        var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for("react.default_value");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeClassComponentFrame(ctor, source, ownerFn) {
          {
            return describeNativeComponentFrame(ctor, true);
          }
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var warnedAboutMissingGetChildContext;
        {
          warnedAboutMissingGetChildContext = {};
        }
        var emptyContextObject = {};
        {
          Object.freeze(emptyContextObject);
        }
        function getMaskedContext(type, unmaskedContext) {
          {
            var contextTypes = type.contextTypes;
            if (!contextTypes) {
              return emptyContextObject;
            }
            var context = {};
            for (var key in contextTypes) {
              context[key] = unmaskedContext[key];
            }
            {
              var name = getComponentNameFromType(type) || "Unknown";
              checkPropTypes(contextTypes, context, "context", name);
            }
            return context;
          }
        }
        function processChildContext(instance, type, parentContext, childContextTypes) {
          {
            if (typeof instance.getChildContext !== "function") {
              {
                var componentName = getComponentNameFromType(type) || "Unknown";
                if (!warnedAboutMissingGetChildContext[componentName]) {
                  warnedAboutMissingGetChildContext[componentName] = true;
                  error("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", componentName, componentName);
                }
              }
              return parentContext;
            }
            var childContext = instance.getChildContext();
            for (var contextKey in childContext) {
              if (!(contextKey in childContextTypes)) {
                throw new Error((getComponentNameFromType(type) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
              }
            }
            {
              var name = getComponentNameFromType(type) || "Unknown";
              checkPropTypes(childContextTypes, childContext, "child context", name);
            }
            return assign({}, parentContext, childContext);
          }
        }
        var rendererSigil;
        {
          rendererSigil = {};
        }
        var rootContextSnapshot = null;
        var currentActiveSnapshot = null;
        function popNode(prev) {
          {
            prev.context._currentValue = prev.parentValue;
          }
        }
        function pushNode(next) {
          {
            next.context._currentValue = next.value;
          }
        }
        function popToNearestCommonAncestor(prev, next) {
          if (prev === next) ;
          else {
            popNode(prev);
            var parentPrev = prev.parent;
            var parentNext = next.parent;
            if (parentPrev === null) {
              if (parentNext !== null) {
                throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
              }
            } else {
              if (parentNext === null) {
                throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
              }
              popToNearestCommonAncestor(parentPrev, parentNext);
            }
            pushNode(next);
          }
        }
        function popAllPrevious(prev) {
          popNode(prev);
          var parentPrev = prev.parent;
          if (parentPrev !== null) {
            popAllPrevious(parentPrev);
          }
        }
        function pushAllNext(next) {
          var parentNext = next.parent;
          if (parentNext !== null) {
            pushAllNext(parentNext);
          }
          pushNode(next);
        }
        function popPreviousToCommonLevel(prev, next) {
          popNode(prev);
          var parentPrev = prev.parent;
          if (parentPrev === null) {
            throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
          }
          if (parentPrev.depth === next.depth) {
            popToNearestCommonAncestor(parentPrev, next);
          } else {
            popPreviousToCommonLevel(parentPrev, next);
          }
        }
        function popNextToCommonLevel(prev, next) {
          var parentNext = next.parent;
          if (parentNext === null) {
            throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
          }
          if (prev.depth === parentNext.depth) {
            popToNearestCommonAncestor(prev, parentNext);
          } else {
            popNextToCommonLevel(prev, parentNext);
          }
          pushNode(next);
        }
        function switchContext(newSnapshot) {
          var prev = currentActiveSnapshot;
          var next = newSnapshot;
          if (prev !== next) {
            if (prev === null) {
              pushAllNext(next);
            } else if (next === null) {
              popAllPrevious(prev);
            } else if (prev.depth === next.depth) {
              popToNearestCommonAncestor(prev, next);
            } else if (prev.depth > next.depth) {
              popPreviousToCommonLevel(prev, next);
            } else {
              popNextToCommonLevel(prev, next);
            }
            currentActiveSnapshot = next;
          }
        }
        function pushProvider(context, nextValue) {
          var prevValue;
          {
            prevValue = context._currentValue;
            context._currentValue = nextValue;
            {
              if (context._currentRenderer !== void 0 && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
                error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
              }
              context._currentRenderer = rendererSigil;
            }
          }
          var prevNode = currentActiveSnapshot;
          var newNode = {
            parent: prevNode,
            depth: prevNode === null ? 0 : prevNode.depth + 1,
            context,
            parentValue: prevValue,
            value: nextValue
          };
          currentActiveSnapshot = newNode;
          return newNode;
        }
        function popProvider(context) {
          var prevSnapshot = currentActiveSnapshot;
          if (prevSnapshot === null) {
            throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
          }
          {
            if (prevSnapshot.context !== context) {
              error("The parent context is not the expected context. This is probably a bug in React.");
            }
          }
          {
            var value = prevSnapshot.parentValue;
            if (value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
              prevSnapshot.context._currentValue = prevSnapshot.context._defaultValue;
            } else {
              prevSnapshot.context._currentValue = value;
            }
            {
              if (context._currentRenderer !== void 0 && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
                error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
              }
              context._currentRenderer = rendererSigil;
            }
          }
          return currentActiveSnapshot = prevSnapshot.parent;
        }
        function getActiveContext() {
          return currentActiveSnapshot;
        }
        function readContext(context) {
          var value = context._currentValue;
          return value;
        }
        function get(key) {
          return key._reactInternals;
        }
        function set(key, value) {
          key._reactInternals = value;
        }
        var didWarnAboutNoopUpdateForComponent = {};
        var didWarnAboutDeprecatedWillMount = {};
        var didWarnAboutUninitializedState;
        var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
        var didWarnAboutLegacyLifecyclesAndDerivedState;
        var didWarnAboutUndefinedDerivedState;
        var warnOnUndefinedDerivedState;
        var warnOnInvalidCallback;
        var didWarnAboutDirectlyAssigningPropsToState;
        var didWarnAboutContextTypeAndContextTypes;
        var didWarnAboutInvalidateContextType;
        {
          didWarnAboutUninitializedState = /* @__PURE__ */ new Set();
          didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = /* @__PURE__ */ new Set();
          didWarnAboutLegacyLifecyclesAndDerivedState = /* @__PURE__ */ new Set();
          didWarnAboutDirectlyAssigningPropsToState = /* @__PURE__ */ new Set();
          didWarnAboutUndefinedDerivedState = /* @__PURE__ */ new Set();
          didWarnAboutContextTypeAndContextTypes = /* @__PURE__ */ new Set();
          didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
          var didWarnOnInvalidCallback = /* @__PURE__ */ new Set();
          warnOnInvalidCallback = function(callback, callerName) {
            if (callback === null || typeof callback === "function") {
              return;
            }
            var key = callerName + "_" + callback;
            if (!didWarnOnInvalidCallback.has(key)) {
              didWarnOnInvalidCallback.add(key);
              error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
            }
          };
          warnOnUndefinedDerivedState = function(type, partialState) {
            if (partialState === void 0) {
              var componentName = getComponentNameFromType(type) || "Component";
              if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
                didWarnAboutUndefinedDerivedState.add(componentName);
                error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName);
              }
            }
          };
        }
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && getComponentNameFromType(_constructor) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnAboutNoopUpdateForComponent[warningKey]) {
              return;
            }
            error("%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", callerName, callerName, componentName);
            didWarnAboutNoopUpdateForComponent[warningKey] = true;
          }
        }
        var classComponentUpdater = {
          isMounted: function(inst) {
            return false;
          },
          enqueueSetState: function(inst, payload, callback) {
            var internals = get(inst);
            if (internals.queue === null) {
              warnNoop(inst, "setState");
            } else {
              internals.queue.push(payload);
              {
                if (callback !== void 0 && callback !== null) {
                  warnOnInvalidCallback(callback, "setState");
                }
              }
            }
          },
          enqueueReplaceState: function(inst, payload, callback) {
            var internals = get(inst);
            internals.replace = true;
            internals.queue = [payload];
            {
              if (callback !== void 0 && callback !== null) {
                warnOnInvalidCallback(callback, "setState");
              }
            }
          },
          enqueueForceUpdate: function(inst, callback) {
            var internals = get(inst);
            if (internals.queue === null) {
              warnNoop(inst, "forceUpdate");
            } else {
              {
                if (callback !== void 0 && callback !== null) {
                  warnOnInvalidCallback(callback, "setState");
                }
              }
            }
          }
        };
        function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
          var partialState = getDerivedStateFromProps(nextProps, prevState);
          {
            warnOnUndefinedDerivedState(ctor, partialState);
          }
          var newState = partialState === null || partialState === void 0 ? prevState : assign({}, prevState, partialState);
          return newState;
        }
        function constructClassInstance(ctor, props, maskedLegacyContext) {
          var context = emptyContextObject;
          var contextType = ctor.contextType;
          {
            if ("contextType" in ctor) {
              var isValid = (
                // Allow null for conditional declaration
                contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0
              );
              if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
                didWarnAboutInvalidateContextType.add(ctor);
                var addendum = "";
                if (contextType === void 0) {
                  addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
                } else if (typeof contextType !== "object") {
                  addendum = " However, it is set to a " + typeof contextType + ".";
                } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                  addendum = " Did you accidentally pass the Context.Provider instead?";
                } else if (contextType._context !== void 0) {
                  addendum = " Did you accidentally pass the Context.Consumer instead?";
                } else {
                  addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
                }
                error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(ctor) || "Component", addendum);
              }
            }
          }
          if (typeof contextType === "object" && contextType !== null) {
            context = readContext(contextType);
          } else {
            context = maskedLegacyContext;
          }
          var instance = new ctor(props, context);
          {
            if (typeof ctor.getDerivedStateFromProps === "function" && (instance.state === null || instance.state === void 0)) {
              var componentName = getComponentNameFromType(ctor) || "Component";
              if (!didWarnAboutUninitializedState.has(componentName)) {
                didWarnAboutUninitializedState.add(componentName);
                error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName);
              }
            }
            if (typeof ctor.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
              var foundWillMountName = null;
              var foundWillReceivePropsName = null;
              var foundWillUpdateName = null;
              if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
                foundWillMountName = "componentWillMount";
              } else if (typeof instance.UNSAFE_componentWillMount === "function") {
                foundWillMountName = "UNSAFE_componentWillMount";
              }
              if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
                foundWillReceivePropsName = "componentWillReceiveProps";
              } else if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
                foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
              }
              if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
                foundWillUpdateName = "componentWillUpdate";
              } else if (typeof instance.UNSAFE_componentWillUpdate === "function") {
                foundWillUpdateName = "UNSAFE_componentWillUpdate";
              }
              if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
                var _componentName = getComponentNameFromType(ctor) || "Component";
                var newApiName = typeof ctor.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                  didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                  error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles", _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : "", foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "", foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "");
                }
              }
            }
          }
          return instance;
        }
        function checkClassInstance(instance, ctor, newProps) {
          {
            var name = getComponentNameFromType(ctor) || "Component";
            var renderPresent = instance.render;
            if (!renderPresent) {
              if (ctor.prototype && typeof ctor.prototype.render === "function") {
                error("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name);
              } else {
                error("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name);
              }
            }
            if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
              error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
            }
            if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
            }
            if (instance.propTypes) {
              error("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name);
            }
            if (instance.contextType) {
              error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
            }
            {
              if (instance.contextTypes) {
                error("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name);
              }
              if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
                didWarnAboutContextTypeAndContextTypes.add(ctor);
                error("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name);
              }
            }
            if (typeof instance.componentShouldUpdate === "function") {
              error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
            }
            if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined") {
              error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(ctor) || "A pure component");
            }
            if (typeof instance.componentDidUnmount === "function") {
              error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
            }
            if (typeof instance.componentDidReceiveProps === "function") {
              error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
            }
            if (typeof instance.componentWillRecieveProps === "function") {
              error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
            }
            if (typeof instance.UNSAFE_componentWillRecieveProps === "function") {
              error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
            }
            var hasMutatedProps = instance.props !== newProps;
            if (instance.props !== void 0 && hasMutatedProps) {
              error("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name);
            }
            if (instance.defaultProps) {
              error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
            }
            if (typeof instance.getSnapshotBeforeUpdate === "function" && typeof instance.componentDidUpdate !== "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
              didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
              error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(ctor));
            }
            if (typeof instance.getDerivedStateFromProps === "function") {
              error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            }
            if (typeof instance.getDerivedStateFromError === "function") {
              error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            }
            if (typeof ctor.getSnapshotBeforeUpdate === "function") {
              error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
            }
            var _state = instance.state;
            if (_state && (typeof _state !== "object" || isArray(_state))) {
              error("%s.state: must be set to an object or null", name);
            }
            if (typeof instance.getChildContext === "function" && typeof ctor.childContextTypes !== "object") {
              error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
            }
          }
        }
        function callComponentWillMount(type, instance) {
          var oldState = instance.state;
          if (typeof instance.componentWillMount === "function") {
            {
              if (instance.componentWillMount.__suppressDeprecationWarning !== true) {
                var componentName = getComponentNameFromType(type) || "Unknown";
                if (!didWarnAboutDeprecatedWillMount[componentName]) {
                  warn(
                    // keep this warning in sync with ReactStrictModeWarning.js
                    "componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s",
                    componentName
                  );
                  didWarnAboutDeprecatedWillMount[componentName] = true;
                }
              }
            }
            instance.componentWillMount();
          }
          if (typeof instance.UNSAFE_componentWillMount === "function") {
            instance.UNSAFE_componentWillMount();
          }
          if (oldState !== instance.state) {
            {
              error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType(type) || "Component");
            }
            classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
          }
        }
        function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
          if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
            var oldQueue = internalInstance.queue;
            var oldReplace = internalInstance.replace;
            internalInstance.queue = null;
            internalInstance.replace = false;
            if (oldReplace && oldQueue.length === 1) {
              inst.state = oldQueue[0];
            } else {
              var nextState = oldReplace ? oldQueue[0] : inst.state;
              var dontMutate = true;
              for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
                var partial = oldQueue[i];
                var partialState = typeof partial === "function" ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;
                if (partialState != null) {
                  if (dontMutate) {
                    dontMutate = false;
                    nextState = assign({}, nextState, partialState);
                  } else {
                    assign(nextState, partialState);
                  }
                }
              }
              inst.state = nextState;
            }
          } else {
            internalInstance.queue = null;
          }
        }
        function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
          {
            checkClassInstance(instance, ctor, newProps);
          }
          var initialState = instance.state !== void 0 ? instance.state : null;
          instance.updater = classComponentUpdater;
          instance.props = newProps;
          instance.state = initialState;
          var internalInstance = {
            queue: [],
            replace: false
          };
          set(instance, internalInstance);
          var contextType = ctor.contextType;
          if (typeof contextType === "object" && contextType !== null) {
            instance.context = readContext(contextType);
          } else {
            instance.context = maskedLegacyContext;
          }
          {
            if (instance.state === newProps) {
              var componentName = getComponentNameFromType(ctor) || "Component";
              if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
                didWarnAboutDirectlyAssigningPropsToState.add(componentName);
                error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName);
              }
            }
          }
          var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
          if (typeof getDerivedStateFromProps === "function") {
            instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps);
          }
          if (typeof ctor.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
            callComponentWillMount(ctor, instance);
            processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
          }
        }
        var emptyTreeContext = {
          id: 1,
          overflow: ""
        };
        function getTreeId(context) {
          var overflow = context.overflow;
          var idWithLeadingBit = context.id;
          var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
          return id.toString(32) + overflow;
        }
        function pushTreeContext(baseContext, totalChildren, index) {
          var baseIdWithLeadingBit = baseContext.id;
          var baseOverflow = baseContext.overflow;
          var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
          var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
          var slot = index + 1;
          var length = getBitLength(totalChildren) + baseLength;
          if (length > 30) {
            var numberOfOverflowBits = baseLength - baseLength % 5;
            var newOverflowBits = (1 << numberOfOverflowBits) - 1;
            var newOverflow = (baseId & newOverflowBits).toString(32);
            var restOfBaseId = baseId >> numberOfOverflowBits;
            var restOfBaseLength = baseLength - numberOfOverflowBits;
            var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
            var restOfNewBits = slot << restOfBaseLength;
            var id = restOfNewBits | restOfBaseId;
            var overflow = newOverflow + baseOverflow;
            return {
              id: 1 << restOfLength | id,
              overflow
            };
          } else {
            var newBits = slot << baseLength;
            var _id = newBits | baseId;
            var _overflow = baseOverflow;
            return {
              id: 1 << length | _id,
              overflow: _overflow
            };
          }
        }
        function getBitLength(number) {
          return 32 - clz32(number);
        }
        function getLeadingBit(id) {
          return 1 << getBitLength(id) - 1;
        }
        var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
        var log = Math.log;
        var LN2 = Math.LN2;
        function clz32Fallback(x) {
          var asUint = x >>> 0;
          if (asUint === 0) {
            return 32;
          }
          return 31 - (log(asUint) / LN2 | 0) | 0;
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var currentlyRenderingComponent = null;
        var currentlyRenderingTask = null;
        var firstWorkInProgressHook = null;
        var workInProgressHook = null;
        var isReRender = false;
        var didScheduleRenderPhaseUpdate = false;
        var localIdCounter = 0;
        var renderPhaseUpdates = null;
        var numberOfReRenders = 0;
        var RE_RENDER_LIMIT = 25;
        var isInHookUserCodeInDev = false;
        var currentHookNameInDev;
        function resolveCurrentlyRenderingComponent() {
          if (currentlyRenderingComponent === null) {
            throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
          }
          {
            if (isInHookUserCodeInDev) {
              error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
            }
          }
          return currentlyRenderingComponent;
        }
        function areHookInputsEqual(nextDeps, prevDeps) {
          if (prevDeps === null) {
            {
              error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
            }
            return false;
          }
          {
            if (nextDeps.length !== prevDeps.length) {
              error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + nextDeps.join(", ") + "]", "[" + prevDeps.join(", ") + "]");
            }
          }
          for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
            if (objectIs(nextDeps[i], prevDeps[i])) {
              continue;
            }
            return false;
          }
          return true;
        }
        function createHook() {
          if (numberOfReRenders > 0) {
            throw new Error("Rendered more hooks than during the previous render");
          }
          return {
            memoizedState: null,
            queue: null,
            next: null
          };
        }
        function createWorkInProgressHook() {
          if (workInProgressHook === null) {
            if (firstWorkInProgressHook === null) {
              isReRender = false;
              firstWorkInProgressHook = workInProgressHook = createHook();
            } else {
              isReRender = true;
              workInProgressHook = firstWorkInProgressHook;
            }
          } else {
            if (workInProgressHook.next === null) {
              isReRender = false;
              workInProgressHook = workInProgressHook.next = createHook();
            } else {
              isReRender = true;
              workInProgressHook = workInProgressHook.next;
            }
          }
          return workInProgressHook;
        }
        function prepareToUseHooks(task, componentIdentity) {
          currentlyRenderingComponent = componentIdentity;
          currentlyRenderingTask = task;
          {
            isInHookUserCodeInDev = false;
          }
          localIdCounter = 0;
        }
        function finishHooks(Component, props, children, refOrContext) {
          while (didScheduleRenderPhaseUpdate) {
            didScheduleRenderPhaseUpdate = false;
            localIdCounter = 0;
            numberOfReRenders += 1;
            workInProgressHook = null;
            children = Component(props, refOrContext);
          }
          resetHooksState();
          return children;
        }
        function checkDidRenderIdHook() {
          var didRenderIdHook = localIdCounter !== 0;
          return didRenderIdHook;
        }
        function resetHooksState() {
          {
            isInHookUserCodeInDev = false;
          }
          currentlyRenderingComponent = null;
          currentlyRenderingTask = null;
          didScheduleRenderPhaseUpdate = false;
          firstWorkInProgressHook = null;
          numberOfReRenders = 0;
          renderPhaseUpdates = null;
          workInProgressHook = null;
        }
        function readContext$1(context) {
          {
            if (isInHookUserCodeInDev) {
              error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            }
          }
          return readContext(context);
        }
        function useContext(context) {
          {
            currentHookNameInDev = "useContext";
          }
          resolveCurrentlyRenderingComponent();
          return readContext(context);
        }
        function basicStateReducer(state, action) {
          return typeof action === "function" ? action(state) : action;
        }
        function useState5(initialState) {
          {
            currentHookNameInDev = "useState";
          }
          return useReducer(
            basicStateReducer,
            // useReducer has a special case to support lazy useState initializers
            initialState
          );
        }
        function useReducer(reducer, initialArg, init) {
          {
            if (reducer !== basicStateReducer) {
              currentHookNameInDev = "useReducer";
            }
          }
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          if (isReRender) {
            var queue = workInProgressHook.queue;
            var dispatch = queue.dispatch;
            if (renderPhaseUpdates !== null) {
              var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
              if (firstRenderPhaseUpdate !== void 0) {
                renderPhaseUpdates.delete(queue);
                var newState = workInProgressHook.memoizedState;
                var update = firstRenderPhaseUpdate;
                do {
                  var action = update.action;
                  {
                    isInHookUserCodeInDev = true;
                  }
                  newState = reducer(newState, action);
                  {
                    isInHookUserCodeInDev = false;
                  }
                  update = update.next;
                } while (update !== null);
                workInProgressHook.memoizedState = newState;
                return [newState, dispatch];
              }
            }
            return [workInProgressHook.memoizedState, dispatch];
          } else {
            {
              isInHookUserCodeInDev = true;
            }
            var initialState;
            if (reducer === basicStateReducer) {
              initialState = typeof initialArg === "function" ? initialArg() : initialArg;
            } else {
              initialState = init !== void 0 ? init(initialArg) : initialArg;
            }
            {
              isInHookUserCodeInDev = false;
            }
            workInProgressHook.memoizedState = initialState;
            var _queue = workInProgressHook.queue = {
              last: null,
              dispatch: null
            };
            var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
            return [workInProgressHook.memoizedState, _dispatch];
          }
        }
        function useMemo(nextCreate, deps) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var nextDeps = deps === void 0 ? null : deps;
          if (workInProgressHook !== null) {
            var prevState = workInProgressHook.memoizedState;
            if (prevState !== null) {
              if (nextDeps !== null) {
                var prevDeps = prevState[1];
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                  return prevState[0];
                }
              }
            }
          }
          {
            isInHookUserCodeInDev = true;
          }
          var nextValue = nextCreate();
          {
            isInHookUserCodeInDev = false;
          }
          workInProgressHook.memoizedState = [nextValue, nextDeps];
          return nextValue;
        }
        function useRef4(initialValue) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var previousRef = workInProgressHook.memoizedState;
          if (previousRef === null) {
            var ref = {
              current: initialValue
            };
            {
              Object.seal(ref);
            }
            workInProgressHook.memoizedState = ref;
            return ref;
          } else {
            return previousRef;
          }
        }
        function useLayoutEffect(create, inputs) {
          {
            currentHookNameInDev = "useLayoutEffect";
            error("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
          }
        }
        function dispatchAction(componentIdentity, queue, action) {
          if (numberOfReRenders >= RE_RENDER_LIMIT) {
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          }
          if (componentIdentity === currentlyRenderingComponent) {
            didScheduleRenderPhaseUpdate = true;
            var update = {
              action,
              next: null
            };
            if (renderPhaseUpdates === null) {
              renderPhaseUpdates = /* @__PURE__ */ new Map();
            }
            var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
            if (firstRenderPhaseUpdate === void 0) {
              renderPhaseUpdates.set(queue, update);
            } else {
              var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
              while (lastRenderPhaseUpdate.next !== null) {
                lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
              }
              lastRenderPhaseUpdate.next = update;
            }
          }
        }
        function useCallback(callback, deps) {
          return useMemo(function() {
            return callback;
          }, deps);
        }
        function useMutableSource(source, getSnapshot, subscribe) {
          resolveCurrentlyRenderingComponent();
          return getSnapshot(source._source);
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          if (getServerSnapshot === void 0) {
            throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
          }
          return getServerSnapshot();
        }
        function useDeferredValue(value) {
          resolveCurrentlyRenderingComponent();
          return value;
        }
        function unsupportedStartTransition() {
          throw new Error("startTransition cannot be called during server rendering.");
        }
        function useTransition() {
          resolveCurrentlyRenderingComponent();
          return [false, unsupportedStartTransition];
        }
        function useId() {
          var task = currentlyRenderingTask;
          var treeId = getTreeId(task.treeContext);
          var responseState = currentResponseState;
          if (responseState === null) {
            throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
          }
          var localId = localIdCounter++;
          return makeId(responseState, treeId, localId);
        }
        function noop() {
        }
        var Dispatcher = {
          readContext: readContext$1,
          useContext,
          useMemo,
          useReducer,
          useRef: useRef4,
          useState: useState5,
          useInsertionEffect: noop,
          useLayoutEffect,
          useCallback,
          // useImperativeHandle is not run in the server environment
          useImperativeHandle: noop,
          // Effects are not run in the server environment.
          useEffect: noop,
          // Debugging effect
          useDebugValue: noop,
          useDeferredValue,
          useTransition,
          useId,
          // Subscriptions are not setup in a server environment.
          useMutableSource,
          useSyncExternalStore
        };
        var currentResponseState = null;
        function setCurrentResponseState(responseState) {
          currentResponseState = responseState;
        }
        function getStackByComponentStackNode(componentStack) {
          try {
            var info = "";
            var node = componentStack;
            do {
              switch (node.tag) {
                case 0:
                  info += describeBuiltInComponentFrame(node.type, null, null);
                  break;
                case 1:
                  info += describeFunctionComponentFrame(node.type, null, null);
                  break;
                case 2:
                  info += describeClassComponentFrame(node.type, null, null);
                  break;
              }
              node = node.parent;
            } while (node);
            return info;
          } catch (x) {
            return "\nError generating stack: " + x.message + "\n" + x.stack;
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        var PENDING = 0;
        var COMPLETED = 1;
        var FLUSHED = 2;
        var ABORTED = 3;
        var ERRORED = 4;
        var OPEN = 0;
        var CLOSING = 1;
        var CLOSED = 2;
        var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;
        function defaultErrorHandler(error2) {
          console["error"](error2);
          return null;
        }
        function noop$1() {
        }
        function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError) {
          var pingedTasks = [];
          var abortSet = /* @__PURE__ */ new Set();
          var request = {
            destination: null,
            responseState,
            progressiveChunkSize: progressiveChunkSize === void 0 ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
            status: OPEN,
            fatalError: null,
            nextSegmentId: 0,
            allPendingTasks: 0,
            pendingRootTasks: 0,
            completedRootSegment: null,
            abortableTasks: abortSet,
            pingedTasks,
            clientRenderedBoundaries: [],
            completedBoundaries: [],
            partialBoundaries: [],
            onError: onError === void 0 ? defaultErrorHandler : onError,
            onAllReady: onAllReady === void 0 ? noop$1 : onAllReady,
            onShellReady: onShellReady === void 0 ? noop$1 : onShellReady,
            onShellError: onShellError === void 0 ? noop$1 : onShellError,
            onFatalError: onFatalError === void 0 ? noop$1 : onFatalError
          };
          var rootSegment = createPendingSegment(
            request,
            0,
            null,
            rootFormatContext,
            // Root segments are never embedded in Text on either edge
            false,
            false
          );
          rootSegment.parentFlushed = true;
          var rootTask = createTask(request, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
          pingedTasks.push(rootTask);
          return request;
        }
        function pingTask(request, task) {
          var pingedTasks = request.pingedTasks;
          pingedTasks.push(task);
          if (pingedTasks.length === 1) {
            scheduleWork(function() {
              return performWork(request);
            });
          }
        }
        function createSuspenseBoundary(request, fallbackAbortableTasks) {
          return {
            id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
            rootSegmentID: -1,
            parentFlushed: false,
            pendingTasks: 0,
            forceClientRender: false,
            completedSegments: [],
            byteSize: 0,
            fallbackAbortableTasks,
            errorDigest: null
          };
        }
        function createTask(request, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
          request.allPendingTasks++;
          if (blockedBoundary === null) {
            request.pendingRootTasks++;
          } else {
            blockedBoundary.pendingTasks++;
          }
          var task = {
            node,
            ping: function() {
              return pingTask(request, task);
            },
            blockedBoundary,
            blockedSegment,
            abortSet,
            legacyContext,
            context,
            treeContext
          };
          {
            task.componentStack = null;
          }
          abortSet.add(task);
          return task;
        }
        function createPendingSegment(request, index, boundary, formatContext, lastPushedText, textEmbedded) {
          return {
            status: PENDING,
            id: -1,
            // lazily assigned later
            index,
            parentFlushed: false,
            chunks: [],
            children: [],
            formatContext,
            boundary,
            lastPushedText,
            textEmbedded
          };
        }
        var currentTaskInDEV = null;
        function getCurrentStackInDEV() {
          {
            if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) {
              return "";
            }
            return getStackByComponentStackNode(currentTaskInDEV.componentStack);
          }
        }
        function pushBuiltInComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 0,
              parent: task.componentStack,
              type
            };
          }
        }
        function pushFunctionComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 1,
              parent: task.componentStack,
              type
            };
          }
        }
        function pushClassComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 2,
              parent: task.componentStack,
              type
            };
          }
        }
        function popComponentStackInDEV(task) {
          {
            if (task.componentStack === null) {
              error("Unexpectedly popped too many stack frames. This is a bug in React.");
            } else {
              task.componentStack = task.componentStack.parent;
            }
          }
        }
        var lastBoundaryErrorComponentStackDev = null;
        function captureBoundaryErrorDetailsDev(boundary, error2) {
          {
            var errorMessage;
            if (typeof error2 === "string") {
              errorMessage = error2;
            } else if (error2 && typeof error2.message === "string") {
              errorMessage = error2.message;
            } else {
              errorMessage = String(error2);
            }
            var errorComponentStack = lastBoundaryErrorComponentStackDev || getCurrentStackInDEV();
            lastBoundaryErrorComponentStackDev = null;
            boundary.errorMessage = errorMessage;
            boundary.errorComponentStack = errorComponentStack;
          }
        }
        function logRecoverableError(request, error2) {
          var errorDigest = request.onError(error2);
          if (errorDigest != null && typeof errorDigest !== "string") {
            throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof errorDigest + '" instead');
          }
          return errorDigest;
        }
        function fatalError(request, error2) {
          var onShellError = request.onShellError;
          onShellError(error2);
          var onFatalError = request.onFatalError;
          onFatalError(error2);
          if (request.destination !== null) {
            request.status = CLOSED;
            closeWithError(request.destination, error2);
          } else {
            request.status = CLOSING;
            request.fatalError = error2;
          }
        }
        function renderSuspenseBoundary(request, task, props) {
          pushBuiltInComponentStackInDEV(task, "Suspense");
          var parentBoundary = task.blockedBoundary;
          var parentSegment = task.blockedSegment;
          var fallback = props.fallback;
          var content = props.children;
          var fallbackAbortSet = /* @__PURE__ */ new Set();
          var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
          var insertionIndex = parentSegment.chunks.length;
          var boundarySegment = createPendingSegment(
            request,
            insertionIndex,
            newBoundary,
            parentSegment.formatContext,
            // boundaries never require text embedding at their edges because comment nodes bound them
            false,
            false
          );
          parentSegment.children.push(boundarySegment);
          parentSegment.lastPushedText = false;
          var contentRootSegment = createPendingSegment(
            request,
            0,
            null,
            parentSegment.formatContext,
            // boundaries never require text embedding at their edges because comment nodes bound them
            false,
            false
          );
          contentRootSegment.parentFlushed = true;
          task.blockedBoundary = newBoundary;
          task.blockedSegment = contentRootSegment;
          try {
            renderNode(request, task, content);
            pushSegmentFinale(contentRootSegment.chunks, request.responseState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded);
            contentRootSegment.status = COMPLETED;
            queueCompletedSegment(newBoundary, contentRootSegment);
            if (newBoundary.pendingTasks === 0) {
              popComponentStackInDEV(task);
              return;
            }
          } catch (error2) {
            contentRootSegment.status = ERRORED;
            newBoundary.forceClientRender = true;
            newBoundary.errorDigest = logRecoverableError(request, error2);
            {
              captureBoundaryErrorDetailsDev(newBoundary, error2);
            }
          } finally {
            task.blockedBoundary = parentBoundary;
            task.blockedSegment = parentSegment;
          }
          var suspendedFallbackTask = createTask(request, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);
          {
            suspendedFallbackTask.componentStack = task.componentStack;
          }
          request.pingedTasks.push(suspendedFallbackTask);
          popComponentStackInDEV(task);
        }
        function renderHostElement(request, task, type, props) {
          pushBuiltInComponentStackInDEV(task, type);
          var segment = task.blockedSegment;
          var children = pushStartInstance(segment.chunks, type, props, request.responseState, segment.formatContext);
          segment.lastPushedText = false;
          var prevContext = segment.formatContext;
          segment.formatContext = getChildFormatContext(prevContext, type, props);
          renderNode(request, task, children);
          segment.formatContext = prevContext;
          pushEndInstance(segment.chunks, type);
          segment.lastPushedText = false;
          popComponentStackInDEV(task);
        }
        function shouldConstruct$1(Component) {
          return Component.prototype && Component.prototype.isReactComponent;
        }
        function renderWithHooks(request, task, Component, props, secondArg) {
          var componentIdentity = {};
          prepareToUseHooks(task, componentIdentity);
          var result = Component(props, secondArg);
          return finishHooks(Component, props, result, secondArg);
        }
        function finishClassComponent(request, task, instance, Component, props) {
          var nextChildren = instance.render();
          {
            if (instance.props !== props) {
              if (!didWarnAboutReassigningProps) {
                error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType(Component) || "a component");
              }
              didWarnAboutReassigningProps = true;
            }
          }
          {
            var childContextTypes = Component.childContextTypes;
            if (childContextTypes !== null && childContextTypes !== void 0) {
              var previousContext = task.legacyContext;
              var mergedContext = processChildContext(instance, Component, previousContext, childContextTypes);
              task.legacyContext = mergedContext;
              renderNodeDestructive(request, task, nextChildren);
              task.legacyContext = previousContext;
              return;
            }
          }
          renderNodeDestructive(request, task, nextChildren);
        }
        function renderClassComponent(request, task, Component, props) {
          pushClassComponentStackInDEV(task, Component);
          var maskedContext = getMaskedContext(Component, task.legacyContext);
          var instance = constructClassInstance(Component, props, maskedContext);
          mountClassInstance(instance, Component, props, maskedContext);
          finishClassComponent(request, task, instance, Component, props);
          popComponentStackInDEV(task);
        }
        var didWarnAboutBadClass = {};
        var didWarnAboutModulePatternComponent = {};
        var didWarnAboutContextTypeOnFunctionComponent = {};
        var didWarnAboutGetDerivedStateOnFunctionComponent = {};
        var didWarnAboutReassigningProps = false;
        var didWarnAboutDefaultPropsOnFunctionComponent = {};
        var didWarnAboutGenerators = false;
        var didWarnAboutMaps = false;
        var hasWarnedAboutUsingContextAsConsumer = false;
        function renderIndeterminateComponent(request, task, Component, props) {
          var legacyContext;
          {
            legacyContext = getMaskedContext(Component, task.legacyContext);
          }
          pushFunctionComponentStackInDEV(task, Component);
          {
            if (Component.prototype && typeof Component.prototype.render === "function") {
              var componentName = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutBadClass[componentName]) {
                error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName);
                didWarnAboutBadClass[componentName] = true;
              }
            }
          }
          var value = renderWithHooks(request, task, Component, props, legacyContext);
          var hasId = checkDidRenderIdHook();
          {
            if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
              var _componentName = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutModulePatternComponent[_componentName]) {
                error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName);
                didWarnAboutModulePatternComponent[_componentName] = true;
              }
            }
          }
          if (
            // Run these checks in production only if the flag is off.
            // Eventually we'll delete this branch altogether.
            typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0
          ) {
            {
              var _componentName2 = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutModulePatternComponent[_componentName2]) {
                error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2);
                didWarnAboutModulePatternComponent[_componentName2] = true;
              }
            }
            mountClassInstance(value, Component, props, legacyContext);
            finishClassComponent(request, task, value, Component, props);
          } else {
            {
              validateFunctionComponentInDev(Component);
            }
            if (hasId) {
              var prevTreeContext = task.treeContext;
              var totalChildren = 1;
              var index = 0;
              task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
              try {
                renderNodeDestructive(request, task, value);
              } finally {
                task.treeContext = prevTreeContext;
              }
            } else {
              renderNodeDestructive(request, task, value);
            }
          }
          popComponentStackInDEV(task);
        }
        function validateFunctionComponentInDev(Component) {
          {
            if (Component) {
              if (Component.childContextTypes) {
                error("%s(...): childContextTypes cannot be defined on a function component.", Component.displayName || Component.name || "Component");
              }
            }
            if (Component.defaultProps !== void 0) {
              var componentName = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutDefaultPropsOnFunctionComponent[componentName]) {
                error("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", componentName);
                didWarnAboutDefaultPropsOnFunctionComponent[componentName] = true;
              }
            }
            if (typeof Component.getDerivedStateFromProps === "function") {
              var _componentName3 = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
                error("%s: Function components do not support getDerivedStateFromProps.", _componentName3);
                didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
              }
            }
            if (typeof Component.contextType === "object" && Component.contextType !== null) {
              var _componentName4 = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
                error("%s: Function components do not support contextType.", _componentName4);
                didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
              }
            }
          }
        }
        function resolveDefaultProps(Component, baseProps) {
          if (Component && Component.defaultProps) {
            var props = assign({}, baseProps);
            var defaultProps = Component.defaultProps;
            for (var propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
            return props;
          }
          return baseProps;
        }
        function renderForwardRef(request, task, type, props, ref) {
          pushFunctionComponentStackInDEV(task, type.render);
          var children = renderWithHooks(request, task, type.render, props, ref);
          var hasId = checkDidRenderIdHook();
          if (hasId) {
            var prevTreeContext = task.treeContext;
            var totalChildren = 1;
            var index = 0;
            task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
            try {
              renderNodeDestructive(request, task, children);
            } finally {
              task.treeContext = prevTreeContext;
            }
          } else {
            renderNodeDestructive(request, task, children);
          }
          popComponentStackInDEV(task);
        }
        function renderMemo(request, task, type, props, ref) {
          var innerType = type.type;
          var resolvedProps = resolveDefaultProps(innerType, props);
          renderElement(request, task, innerType, resolvedProps, ref);
        }
        function renderContextConsumer(request, task, context, props) {
          {
            if (context._context === void 0) {
              if (context !== context.Consumer) {
                if (!hasWarnedAboutUsingContextAsConsumer) {
                  hasWarnedAboutUsingContextAsConsumer = true;
                  error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                }
              }
            } else {
              context = context._context;
            }
          }
          var render = props.children;
          {
            if (typeof render !== "function") {
              error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
            }
          }
          var newValue = readContext(context);
          var newChildren = render(newValue);
          renderNodeDestructive(request, task, newChildren);
        }
        function renderContextProvider(request, task, type, props) {
          var context = type._context;
          var value = props.value;
          var children = props.children;
          var prevSnapshot;
          {
            prevSnapshot = task.context;
          }
          task.context = pushProvider(context, value);
          renderNodeDestructive(request, task, children);
          task.context = popProvider(context);
          {
            if (prevSnapshot !== task.context) {
              error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
            }
          }
        }
        function renderLazyComponent(request, task, lazyComponent, props, ref) {
          pushBuiltInComponentStackInDEV(task, "Lazy");
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;
          var Component = init(payload);
          var resolvedProps = resolveDefaultProps(Component, props);
          renderElement(request, task, Component, resolvedProps, ref);
          popComponentStackInDEV(task);
        }
        function renderElement(request, task, type, props, ref) {
          if (typeof type === "function") {
            if (shouldConstruct$1(type)) {
              renderClassComponent(request, task, type, props);
              return;
            } else {
              renderIndeterminateComponent(request, task, type, props);
              return;
            }
          }
          if (typeof type === "string") {
            renderHostElement(request, task, type, props);
            return;
          }
          switch (type) {
            // TODO: LegacyHidden acts the same as a fragment. This only works
            // because we currently assume that every instance of LegacyHidden is
            // accompanied by a host component wrapper. In the hidden mode, the host
            // component is given a `hidden` attribute, which ensures that the
            // initial HTML is not visible. To support the use of LegacyHidden as a
            // true fragment, without an extra DOM node, we would have to hide the
            // initial HTML in some other way.
            // TODO: Add REACT_OFFSCREEN_TYPE here too with the same capability.
            case REACT_LEGACY_HIDDEN_TYPE:
            case REACT_DEBUG_TRACING_MODE_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_FRAGMENT_TYPE: {
              renderNodeDestructive(request, task, props.children);
              return;
            }
            case REACT_SUSPENSE_LIST_TYPE: {
              pushBuiltInComponentStackInDEV(task, "SuspenseList");
              renderNodeDestructive(request, task, props.children);
              popComponentStackInDEV(task);
              return;
            }
            case REACT_SCOPE_TYPE: {
              throw new Error("ReactDOMServer does not yet support scope components.");
            }
            // eslint-disable-next-line-no-fallthrough
            case REACT_SUSPENSE_TYPE: {
              {
                renderSuspenseBoundary(request, task, props);
              }
              return;
            }
          }
          if (typeof type === "object" && type !== null) {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE: {
                renderForwardRef(request, task, type, props, ref);
                return;
              }
              case REACT_MEMO_TYPE: {
                renderMemo(request, task, type, props, ref);
                return;
              }
              case REACT_PROVIDER_TYPE: {
                renderContextProvider(request, task, type, props);
                return;
              }
              case REACT_CONTEXT_TYPE: {
                renderContextConsumer(request, task, type, props);
                return;
              }
              case REACT_LAZY_TYPE: {
                renderLazyComponent(request, task, type, props);
                return;
              }
            }
          }
          var info = "";
          {
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
          }
          throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (type == null ? type : typeof type) + "." + info));
        }
        function validateIterable(iterable, iteratorFn) {
          {
            if (typeof Symbol === "function" && // $FlowFixMe Flow doesn't know about toStringTag
            iterable[Symbol.toStringTag] === "Generator") {
              if (!didWarnAboutGenerators) {
                error("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.");
              }
              didWarnAboutGenerators = true;
            }
            if (iterable.entries === iteratorFn) {
              if (!didWarnAboutMaps) {
                error("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
              }
              didWarnAboutMaps = true;
            }
          }
        }
        function renderNodeDestructive(request, task, node) {
          {
            try {
              return renderNodeDestructiveImpl(request, task, node);
            } catch (x) {
              if (typeof x === "object" && x !== null && typeof x.then === "function") ;
              else {
                lastBoundaryErrorComponentStackDev = lastBoundaryErrorComponentStackDev !== null ? lastBoundaryErrorComponentStackDev : getCurrentStackInDEV();
              }
              throw x;
            }
          }
        }
        function renderNodeDestructiveImpl(request, task, node) {
          task.node = node;
          if (typeof node === "object" && node !== null) {
            switch (node.$$typeof) {
              case REACT_ELEMENT_TYPE: {
                var element = node;
                var type = element.type;
                var props = element.props;
                var ref = element.ref;
                renderElement(request, task, type, props, ref);
                return;
              }
              case REACT_PORTAL_TYPE:
                throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
              // eslint-disable-next-line-no-fallthrough
              case REACT_LAZY_TYPE: {
                var lazyNode = node;
                var payload = lazyNode._payload;
                var init = lazyNode._init;
                var resolvedNode;
                {
                  try {
                    resolvedNode = init(payload);
                  } catch (x) {
                    if (typeof x === "object" && x !== null && typeof x.then === "function") {
                      pushBuiltInComponentStackInDEV(task, "Lazy");
                    }
                    throw x;
                  }
                }
                renderNodeDestructive(request, task, resolvedNode);
                return;
              }
            }
            if (isArray(node)) {
              renderChildrenArray(request, task, node);
              return;
            }
            var iteratorFn = getIteratorFn(node);
            if (iteratorFn) {
              {
                validateIterable(node, iteratorFn);
              }
              var iterator = iteratorFn.call(node);
              if (iterator) {
                var step = iterator.next();
                if (!step.done) {
                  var children = [];
                  do {
                    children.push(step.value);
                    step = iterator.next();
                  } while (!step.done);
                  renderChildrenArray(request, task, children);
                  return;
                }
                return;
              }
            }
            var childString = Object.prototype.toString.call(node);
            throw new Error("Objects are not valid as a React child (found: " + (childString === "[object Object]" ? "object with keys {" + Object.keys(node).join(", ") + "}" : childString) + "). If you meant to render a collection of children, use an array instead.");
          }
          if (typeof node === "string") {
            var segment = task.blockedSegment;
            segment.lastPushedText = pushTextInstance(task.blockedSegment.chunks, node, request.responseState, segment.lastPushedText);
            return;
          }
          if (typeof node === "number") {
            var _segment = task.blockedSegment;
            _segment.lastPushedText = pushTextInstance(task.blockedSegment.chunks, "" + node, request.responseState, _segment.lastPushedText);
            return;
          }
          {
            if (typeof node === "function") {
              error("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
            }
          }
        }
        function renderChildrenArray(request, task, children) {
          var totalChildren = children.length;
          for (var i = 0; i < totalChildren; i++) {
            var prevTreeContext = task.treeContext;
            task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i);
            try {
              renderNode(request, task, children[i]);
            } finally {
              task.treeContext = prevTreeContext;
            }
          }
        }
        function spawnNewSuspendedTask(request, task, x) {
          var segment = task.blockedSegment;
          var insertionIndex = segment.chunks.length;
          var newSegment = createPendingSegment(
            request,
            insertionIndex,
            null,
            segment.formatContext,
            // Adopt the parent segment's leading text embed
            segment.lastPushedText,
            // Assume we are text embedded at the trailing edge
            true
          );
          segment.children.push(newSegment);
          segment.lastPushedText = false;
          var newTask = createTask(request, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);
          {
            if (task.componentStack !== null) {
              newTask.componentStack = task.componentStack.parent;
            }
          }
          var ping = newTask.ping;
          x.then(ping, ping);
        }
        function renderNode(request, task, node) {
          var previousFormatContext = task.blockedSegment.formatContext;
          var previousLegacyContext = task.legacyContext;
          var previousContext = task.context;
          var previousComponentStack = null;
          {
            previousComponentStack = task.componentStack;
          }
          try {
            return renderNodeDestructive(request, task, node);
          } catch (x) {
            resetHooksState();
            if (typeof x === "object" && x !== null && typeof x.then === "function") {
              spawnNewSuspendedTask(request, task, x);
              task.blockedSegment.formatContext = previousFormatContext;
              task.legacyContext = previousLegacyContext;
              task.context = previousContext;
              switchContext(previousContext);
              {
                task.componentStack = previousComponentStack;
              }
              return;
            } else {
              task.blockedSegment.formatContext = previousFormatContext;
              task.legacyContext = previousLegacyContext;
              task.context = previousContext;
              switchContext(previousContext);
              {
                task.componentStack = previousComponentStack;
              }
              throw x;
            }
          }
        }
        function erroredTask(request, boundary, segment, error2) {
          var errorDigest = logRecoverableError(request, error2);
          if (boundary === null) {
            fatalError(request, error2);
          } else {
            boundary.pendingTasks--;
            if (!boundary.forceClientRender) {
              boundary.forceClientRender = true;
              boundary.errorDigest = errorDigest;
              {
                captureBoundaryErrorDetailsDev(boundary, error2);
              }
              if (boundary.parentFlushed) {
                request.clientRenderedBoundaries.push(boundary);
              }
            }
          }
          request.allPendingTasks--;
          if (request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
        function abortTaskSoft(task) {
          var request = this;
          var boundary = task.blockedBoundary;
          var segment = task.blockedSegment;
          segment.status = ABORTED;
          finishedTask(request, boundary, segment);
        }
        function abortTask(task, request, reason) {
          var boundary = task.blockedBoundary;
          var segment = task.blockedSegment;
          segment.status = ABORTED;
          if (boundary === null) {
            request.allPendingTasks--;
            if (request.status !== CLOSED) {
              request.status = CLOSED;
              if (request.destination !== null) {
                close(request.destination);
              }
            }
          } else {
            boundary.pendingTasks--;
            if (!boundary.forceClientRender) {
              boundary.forceClientRender = true;
              var _error = reason === void 0 ? new Error("The render was aborted by the server without a reason.") : reason;
              boundary.errorDigest = request.onError(_error);
              {
                var errorPrefix = "The server did not finish this Suspense boundary: ";
                if (_error && typeof _error.message === "string") {
                  _error = errorPrefix + _error.message;
                } else {
                  _error = errorPrefix + String(_error);
                }
                var previousTaskInDev = currentTaskInDEV;
                currentTaskInDEV = task;
                try {
                  captureBoundaryErrorDetailsDev(boundary, _error);
                } finally {
                  currentTaskInDEV = previousTaskInDev;
                }
              }
              if (boundary.parentFlushed) {
                request.clientRenderedBoundaries.push(boundary);
              }
            }
            boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
              return abortTask(fallbackTask, request, reason);
            });
            boundary.fallbackAbortableTasks.clear();
            request.allPendingTasks--;
            if (request.allPendingTasks === 0) {
              var onAllReady = request.onAllReady;
              onAllReady();
            }
          }
        }
        function queueCompletedSegment(boundary, segment) {
          if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
            var childSegment = segment.children[0];
            childSegment.id = segment.id;
            childSegment.parentFlushed = true;
            if (childSegment.status === COMPLETED) {
              queueCompletedSegment(boundary, childSegment);
            }
          } else {
            var completedSegments = boundary.completedSegments;
            completedSegments.push(segment);
          }
        }
        function finishedTask(request, boundary, segment) {
          if (boundary === null) {
            if (segment.parentFlushed) {
              if (request.completedRootSegment !== null) {
                throw new Error("There can only be one root segment. This is a bug in React.");
              }
              request.completedRootSegment = segment;
            }
            request.pendingRootTasks--;
            if (request.pendingRootTasks === 0) {
              request.onShellError = noop$1;
              var onShellReady = request.onShellReady;
              onShellReady();
            }
          } else {
            boundary.pendingTasks--;
            if (boundary.forceClientRender) ;
            else if (boundary.pendingTasks === 0) {
              if (segment.parentFlushed) {
                if (segment.status === COMPLETED) {
                  queueCompletedSegment(boundary, segment);
                }
              }
              if (boundary.parentFlushed) {
                request.completedBoundaries.push(boundary);
              }
              boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
              boundary.fallbackAbortableTasks.clear();
            } else {
              if (segment.parentFlushed) {
                if (segment.status === COMPLETED) {
                  queueCompletedSegment(boundary, segment);
                  var completedSegments = boundary.completedSegments;
                  if (completedSegments.length === 1) {
                    if (boundary.parentFlushed) {
                      request.partialBoundaries.push(boundary);
                    }
                  }
                }
              }
            }
          }
          request.allPendingTasks--;
          if (request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
        function retryTask(request, task) {
          var segment = task.blockedSegment;
          if (segment.status !== PENDING) {
            return;
          }
          switchContext(task.context);
          var prevTaskInDEV = null;
          {
            prevTaskInDEV = currentTaskInDEV;
            currentTaskInDEV = task;
          }
          try {
            renderNodeDestructive(request, task, task.node);
            pushSegmentFinale(segment.chunks, request.responseState, segment.lastPushedText, segment.textEmbedded);
            task.abortSet.delete(task);
            segment.status = COMPLETED;
            finishedTask(request, task.blockedBoundary, segment);
          } catch (x) {
            resetHooksState();
            if (typeof x === "object" && x !== null && typeof x.then === "function") {
              var ping = task.ping;
              x.then(ping, ping);
            } else {
              task.abortSet.delete(task);
              segment.status = ERRORED;
              erroredTask(request, task.blockedBoundary, segment, x);
            }
          } finally {
            {
              currentTaskInDEV = prevTaskInDEV;
            }
          }
        }
        function performWork(request) {
          if (request.status === CLOSED) {
            return;
          }
          var prevContext = getActiveContext();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = Dispatcher;
          var prevGetCurrentStackImpl;
          {
            prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
            ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
          }
          var prevResponseState = currentResponseState;
          setCurrentResponseState(request.responseState);
          try {
            var pingedTasks = request.pingedTasks;
            var i;
            for (i = 0; i < pingedTasks.length; i++) {
              var task = pingedTasks[i];
              retryTask(request, task);
            }
            pingedTasks.splice(0, i);
            if (request.destination !== null) {
              flushCompletedQueues(request, request.destination);
            }
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          } finally {
            setCurrentResponseState(prevResponseState);
            ReactCurrentDispatcher$1.current = prevDispatcher;
            {
              ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
            }
            if (prevDispatcher === Dispatcher) {
              switchContext(prevContext);
            }
          }
        }
        function flushSubtree(request, destination, segment) {
          segment.parentFlushed = true;
          switch (segment.status) {
            case PENDING: {
              var segmentID = segment.id = request.nextSegmentId++;
              segment.lastPushedText = false;
              segment.textEmbedded = false;
              return writePlaceholder(destination, request.responseState, segmentID);
            }
            case COMPLETED: {
              segment.status = FLUSHED;
              var r = true;
              var chunks = segment.chunks;
              var chunkIdx = 0;
              var children = segment.children;
              for (var childIdx = 0; childIdx < children.length; childIdx++) {
                var nextChild = children[childIdx];
                for (; chunkIdx < nextChild.index; chunkIdx++) {
                  writeChunk(destination, chunks[chunkIdx]);
                }
                r = flushSegment(request, destination, nextChild);
              }
              for (; chunkIdx < chunks.length - 1; chunkIdx++) {
                writeChunk(destination, chunks[chunkIdx]);
              }
              if (chunkIdx < chunks.length) {
                r = writeChunkAndReturn(destination, chunks[chunkIdx]);
              }
              return r;
            }
            default: {
              throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
            }
          }
        }
        function flushSegment(request, destination, segment) {
          var boundary = segment.boundary;
          if (boundary === null) {
            return flushSubtree(request, destination, segment);
          }
          boundary.parentFlushed = true;
          if (boundary.forceClientRender) {
            writeStartClientRenderedSuspenseBoundary(destination, request.responseState, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
            flushSubtree(request, destination, segment);
            return writeEndClientRenderedSuspenseBoundary(destination, request.responseState);
          } else if (boundary.pendingTasks > 0) {
            boundary.rootSegmentID = request.nextSegmentId++;
            if (boundary.completedSegments.length > 0) {
              request.partialBoundaries.push(boundary);
            }
            var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
            writeStartPendingSuspenseBoundary(destination, request.responseState, id);
            flushSubtree(request, destination, segment);
            return writeEndPendingSuspenseBoundary(destination, request.responseState);
          } else if (boundary.byteSize > request.progressiveChunkSize) {
            boundary.rootSegmentID = request.nextSegmentId++;
            request.completedBoundaries.push(boundary);
            writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id);
            flushSubtree(request, destination, segment);
            return writeEndPendingSuspenseBoundary(destination, request.responseState);
          } else {
            writeStartCompletedSuspenseBoundary(destination, request.responseState);
            var completedSegments = boundary.completedSegments;
            if (completedSegments.length !== 1) {
              throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
            }
            var contentSegment = completedSegments[0];
            flushSegment(request, destination, contentSegment);
            return writeEndCompletedSuspenseBoundary(destination, request.responseState);
          }
        }
        function flushClientRenderedBoundary(request, destination, boundary) {
          return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
        }
        function flushSegmentContainer(request, destination, segment) {
          writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
          flushSegment(request, destination, segment);
          return writeEndSegment(destination, segment.formatContext);
        }
        function flushCompletedBoundary(request, destination, boundary) {
          var completedSegments = boundary.completedSegments;
          var i = 0;
          for (; i < completedSegments.length; i++) {
            var segment = completedSegments[i];
            flushPartiallyCompletedSegment(request, destination, boundary, segment);
          }
          completedSegments.length = 0;
          return writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID);
        }
        function flushPartialBoundary(request, destination, boundary) {
          var completedSegments = boundary.completedSegments;
          var i = 0;
          for (; i < completedSegments.length; i++) {
            var segment = completedSegments[i];
            if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
              i++;
              completedSegments.splice(0, i);
              return false;
            }
          }
          completedSegments.splice(0, i);
          return true;
        }
        function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
          if (segment.status === FLUSHED) {
            return true;
          }
          var segmentID = segment.id;
          if (segmentID === -1) {
            var rootSegmentID = segment.id = boundary.rootSegmentID;
            if (rootSegmentID === -1) {
              throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
            }
            return flushSegmentContainer(request, destination, segment);
          } else {
            flushSegmentContainer(request, destination, segment);
            return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
          }
        }
        function flushCompletedQueues(request, destination) {
          beginWriting();
          try {
            var completedRootSegment = request.completedRootSegment;
            if (completedRootSegment !== null && request.pendingRootTasks === 0) {
              flushSegment(request, destination, completedRootSegment);
              request.completedRootSegment = null;
              writeCompletedRoot(destination, request.responseState);
            }
            var clientRenderedBoundaries = request.clientRenderedBoundaries;
            var i;
            for (i = 0; i < clientRenderedBoundaries.length; i++) {
              var boundary = clientRenderedBoundaries[i];
              if (!flushClientRenderedBoundary(request, destination, boundary)) {
                request.destination = null;
                i++;
                clientRenderedBoundaries.splice(0, i);
                return;
              }
            }
            clientRenderedBoundaries.splice(0, i);
            var completedBoundaries = request.completedBoundaries;
            for (i = 0; i < completedBoundaries.length; i++) {
              var _boundary = completedBoundaries[i];
              if (!flushCompletedBoundary(request, destination, _boundary)) {
                request.destination = null;
                i++;
                completedBoundaries.splice(0, i);
                return;
              }
            }
            completedBoundaries.splice(0, i);
            completeWriting(destination);
            beginWriting(destination);
            var partialBoundaries = request.partialBoundaries;
            for (i = 0; i < partialBoundaries.length; i++) {
              var _boundary2 = partialBoundaries[i];
              if (!flushPartialBoundary(request, destination, _boundary2)) {
                request.destination = null;
                i++;
                partialBoundaries.splice(0, i);
                return;
              }
            }
            partialBoundaries.splice(0, i);
            var largeBoundaries = request.completedBoundaries;
            for (i = 0; i < largeBoundaries.length; i++) {
              var _boundary3 = largeBoundaries[i];
              if (!flushCompletedBoundary(request, destination, _boundary3)) {
                request.destination = null;
                i++;
                largeBoundaries.splice(0, i);
                return;
              }
            }
            largeBoundaries.splice(0, i);
          } finally {
            completeWriting(destination);
            flushBuffered(destination);
            if (request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0) {
              {
                if (request.abortableTasks.size !== 0) {
                  error("There was still abortable task at the root when we closed. This is a bug in React.");
                }
              }
              close(destination);
            }
          }
        }
        function startWork(request) {
          scheduleWork(function() {
            return performWork(request);
          });
        }
        function startFlowing(request, destination) {
          if (request.status === CLOSING) {
            request.status = CLOSED;
            closeWithError(destination, request.fatalError);
            return;
          }
          if (request.status === CLOSED) {
            return;
          }
          if (request.destination !== null) {
            return;
          }
          request.destination = destination;
          try {
            flushCompletedQueues(request, destination);
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          }
        }
        function abort(request, reason) {
          try {
            var abortableTasks = request.abortableTasks;
            abortableTasks.forEach(function(task) {
              return abortTask(task, request, reason);
            });
            abortableTasks.clear();
            if (request.destination !== null) {
              flushCompletedQueues(request, request.destination);
            }
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          }
        }
        function createDrainHandler(destination, request) {
          return function() {
            return startFlowing(request, destination);
          };
        }
        function createAbortHandler(request, reason) {
          return function() {
            return abort(request, reason);
          };
        }
        function createRequestImpl(children, options) {
          return createRequest(children, createResponseState(options ? options.identifierPrefix : void 0, options ? options.nonce : void 0, options ? options.bootstrapScriptContent : void 0, options ? options.bootstrapScripts : void 0, options ? options.bootstrapModules : void 0), createRootFormatContext(options ? options.namespaceURI : void 0), options ? options.progressiveChunkSize : void 0, options ? options.onError : void 0, options ? options.onAllReady : void 0, options ? options.onShellReady : void 0, options ? options.onShellError : void 0, void 0);
        }
        function renderToPipeableStream(children, options) {
          var request = createRequestImpl(children, options);
          var hasStartedFlowing = false;
          startWork(request);
          return {
            pipe: function(destination) {
              if (hasStartedFlowing) {
                throw new Error("React currently only supports piping to one writable stream.");
              }
              hasStartedFlowing = true;
              startFlowing(request, destination);
              destination.on("drain", createDrainHandler(destination, request));
              destination.on("error", createAbortHandler(
                request,
                // eslint-disable-next-line react-internal/prod-error-codes
                new Error("The destination stream errored while writing data.")
              ));
              destination.on("close", createAbortHandler(
                request,
                // eslint-disable-next-line react-internal/prod-error-codes
                new Error("The destination stream closed early.")
              ));
              return destination;
            },
            abort: function(reason) {
              abort(request, reason);
            }
          };
        }
        exports2.renderToPipeableStream = renderToPipeableStream;
        exports2.version = ReactVersion;
      })();
    }
  }
});

// node_modules/react-dom/server.node.js
var require_server_node = __commonJS({
  "node_modules/react-dom/server.node.js"(exports2) {
    "use strict";
    var l;
    var s;
    if (process.env.NODE_ENV === "production") {
      l = require_react_dom_server_legacy_node_production_min();
      s = require_react_dom_server_node_production_min();
    } else {
      l = require_react_dom_server_legacy_node_development();
      s = require_react_dom_server_node_development();
    }
    exports2.version = l.version;
    exports2.renderToString = l.renderToString;
    exports2.renderToStaticMarkup = l.renderToStaticMarkup;
    exports2.renderToNodeStream = l.renderToNodeStream;
    exports2.renderToStaticNodeStream = l.renderToStaticNodeStream;
    exports2.renderToPipeableStream = s.renderToPipeableStream;
  }
});

// node_modules/react/cjs/react-jsx-runtime.production.min.js
var require_react_jsx_runtime_production_min = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports2) {
    "use strict";
    var f = require_react();
    var k = Symbol.for("react.element");
    var l = Symbol.for("react.fragment");
    var m = Object.prototype.hasOwnProperty;
    var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
    var p = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      var b, d = {}, e = null, h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
    }
    exports2.Fragment = l;
    exports2.jsx = q;
    exports2.jsxs = q;
  }
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports2) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var React5 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx8 = jsxWithValidationDynamic;
        var jsxs8 = jsxWithValidationStatic;
        exports2.Fragment = REACT_FRAGMENT_TYPE;
        exports2.jsx = jsx8;
        exports2.jsxs = jsxs8;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_jsx_runtime_production_min();
    } else {
      module2.exports = require_react_jsx_runtime_development();
    }
  }
});

// scripts/empirical-stress-test.ts
var import_react6 = __toESM(require_react(), 1);
var import_server = __toESM(require_server_node(), 1);
var import_fs = __toESM(require("fs"), 1);
var import_path = __toESM(require("path"), 1);

// src/app/components/Navbar.tsx
var import_react5 = __toESM(require_react(), 1);

// src/imports/HomePage-1/index.tsx
var import_react4 = __toESM(require_react(), 1);

// src/imports/HomePage-1/svg-hsfh0kwwsp.ts
var svg_hsfh0kwwsp_default = {
  p10799380: "M100.686 18.3637V17.2904H101.14C101.476 17.2904 101.781 17.2493 102.049 17.1723C102.323 17.0953 102.54 16.9412 102.711 16.7204C102.881 16.4996 102.964 16.1812 102.964 15.7652V4.05685C102.964 3.56387 102.881 3.2044 102.711 2.98359C102.54 2.76277 102.323 2.60871 102.049 2.53168C101.776 2.45465 101.476 2.41357 101.14 2.41357H100.686V1.3403H113.135L113.233 5.58716H111.864L111.746 4.51389C111.684 3.97469 111.503 3.52279 111.208 3.15305C110.914 2.78845 110.418 2.60358 109.731 2.60358H105.748V8.85319H111.529V10.0908H105.748V17.1004H110.33C111.048 17.1004 111.575 16.9155 111.901 16.5407C112.226 16.1658 112.433 15.719 112.51 15.1952L112.681 14.122H114.049L113.879 18.3688H100.686V18.3637Z",
  p127d8f00: "M142.57 18.3637V17.2904H142.668C143.034 17.2904 143.365 17.2493 143.649 17.1723C143.938 17.0953 144.166 16.9309 144.331 16.6845C144.502 16.438 144.584 16.0682 144.584 15.5752V8.27804C144.584 7.80046 144.496 7.44613 144.321 7.21504C144.145 6.98395 143.918 6.83503 143.639 6.76314C143.36 6.69124 143.045 6.6553 142.694 6.6553H142.621V5.58203H146.604L147.084 7.91857H147.203C147.41 7.42558 147.647 6.97882 147.911 6.5834C148.174 6.18799 148.51 5.87987 148.918 5.66419C149.326 5.44851 149.874 5.34067 150.561 5.34067C151.455 5.34067 152.111 5.505 152.529 5.82852C152.942 6.15204 153.154 6.60394 153.154 7.17396C153.154 7.74397 152.958 8.1702 152.565 8.49885C152.173 8.82238 151.553 8.9867 150.706 8.9867C150.706 8.33453 150.618 7.85695 150.442 7.55397C150.267 7.25099 149.946 7.10206 149.481 7.10206C149.063 7.10206 148.712 7.26639 148.412 7.58991C148.118 7.91343 147.885 8.33453 147.715 8.84292C147.544 9.35131 147.42 9.88537 147.343 10.44C147.26 10.9946 147.224 11.503 147.224 11.9652V15.6831C147.224 16.1453 147.312 16.4893 147.487 16.7204C147.663 16.9515 147.89 17.1004 148.169 17.1723C148.448 17.2442 148.763 17.2801 149.115 17.2801H149.812V18.3534H142.57V18.3637Z",
  p12a71400: "M5.56874 2.47134C5.26159 2.9027 4.82535 3.26667 4.26893 3.57221C3.7125 3.87776 3.17387 4.03952 2.6486 4.06648C2.12779 4.08895 1.63813 4.01256 1.17963 3.83283C0.908093 3.72499 0.649912 3.58569 0.409534 3.41944L0 3.64411L5.71119 14.3023C5.94711 14.7427 6.24536 15.1336 6.61038 15.4796C6.9754 15.8256 7.38493 16.0862 7.84342 16.2659C8.07935 16.3603 8.32418 16.4232 8.57791 16.4636C8.81384 16.4996 9.05867 16.5131 9.30795 16.4996C9.83322 16.4771 10.3718 16.3109 10.9283 16.0053C11.4847 15.6998 11.9165 15.3358 12.2281 14.9044C12.375 14.6978 12.4996 14.4866 12.602 14.2664C12.7133 14.0282 12.7934 13.7856 12.8424 13.534C12.9448 13.0487 12.9492 12.5589 12.8646 12.0646C12.7801 11.5659 12.6198 11.0986 12.3839 10.6582L6.6727 0L6.26317 0.224668C6.27207 0.521229 6.24536 0.813297 6.18304 1.10087C6.08066 1.58615 5.87589 2.03998 5.56874 2.47134Z",
  p1358080: "M116.772 41.3748C115.558 41.3748 114.659 41.1026 114.075 40.5531C113.492 40.0037 113.202 39.0382 113.202 37.6569V29.7896H111.379V28.7626C111.73 28.7626 112.092 28.6907 112.458 28.5469C112.825 28.4031 113.14 28.1977 113.393 27.9255C113.667 27.6534 113.889 27.3196 114.065 26.9139C114.241 26.5082 114.385 26.0101 114.499 25.4247H115.842V28.3569H118.983V29.7896H115.842V37.6569C115.842 38.4374 115.997 39.0074 116.312 39.372C116.622 39.7366 117.061 39.9215 117.619 39.9215C117.908 39.9215 118.177 39.9061 118.435 39.8753C118.688 39.8445 118.947 39.8034 119.205 39.7572V40.928C118.983 41.041 118.642 41.1437 118.187 41.2361C117.733 41.3337 117.263 41.3799 116.782 41.3799L116.772 41.3748Z",
  p14a86400: "M50.4436 36.2029C49.3263 36.2029 48.4806 35.8749 47.9019 35.2234C47.3232 34.5718 47.0338 33.5339 47.0338 32.114V27.1893C47.0338 26.7714 46.9626 26.4613 46.8157 26.2591C46.6688 26.0569 46.4819 25.9221 46.2459 25.8503C46.01 25.7829 45.734 25.7469 45.418 25.7469H45.3556V24.8078H49.3041V31.8624C49.3041 32.46 49.3619 32.9767 49.4777 33.4081C49.5934 33.8394 49.8026 34.1674 50.0964 34.4011C50.3947 34.6303 50.7953 34.7471 51.3072 34.7471C51.8592 34.7471 52.3132 34.6078 52.6693 34.3292C53.0255 34.0506 53.2881 33.6597 53.4528 33.1609C53.6175 32.6622 53.7021 32.0825 53.7021 31.431V27.2162C53.7021 26.7849 53.6309 26.4658 53.484 26.2547C53.3371 26.048 53.1501 25.9087 52.9142 25.8458C52.6783 25.7828 52.4112 25.7514 52.1085 25.7514H52.0239V24.8123H55.9723V33.6822C55.9723 34.0866 56.0435 34.3831 56.1904 34.5808C56.3373 34.774 56.5332 34.9044 56.778 34.9673C57.0273 35.0302 57.2944 35.0616 57.5837 35.0616H57.6683V36.0007H54.1561L53.8445 34.3741H53.7421C53.3282 35.0976 52.8474 35.5829 52.2954 35.8345C51.7434 36.0861 51.1247 36.2119 50.4347 36.2119L50.4436 36.2029Z",
  p14ceaa00: "M10.7434 4.27767C10.2226 4.22375 9.68843 4.02604 9.14981 3.69353C8.61119 3.36103 8.20166 2.9701 7.91677 2.52526C7.63633 2.08042 7.45827 1.61311 7.38259 1.12783C7.33808 0.835764 7.32917 0.539202 7.35143 0.247134L6.95525 0L0.665382 10.3212C0.407199 10.7481 0.220238 11.2064 0.1045 11.6962C-0.011237 12.186 -0.0290424 12.6757 0.0421805 13.1655C0.0822434 13.4171 0.144562 13.6643 0.242494 13.9069C0.331522 14.1316 0.442808 14.3518 0.576351 14.563C0.861243 15.0078 1.27078 15.3987 1.8094 15.7312C2.34802 16.0637 2.87774 16.2614 3.40301 16.3154C3.65674 16.3423 3.90157 16.3423 4.1375 16.3199C4.39568 16.2974 4.64496 16.2435 4.88534 16.1671C5.35274 16.0143 5.77562 15.7762 6.15845 15.4481C6.54127 15.1246 6.86177 14.7517 7.12441 14.3248L13.4143 4.00358L13.0181 3.75644C12.7688 3.90921 12.5062 4.03503 12.2257 4.1249C11.7628 4.27767 11.2642 4.3271 10.7434 4.27318V4.27767Z",
  p15444590: "M80.4049 41.3748C79.191 41.3748 78.2921 41.1026 77.7084 40.5531C77.1247 40.0037 76.8354 39.0382 76.8354 37.6569V29.7896H75.0119V28.7626C75.3632 28.7626 75.7248 28.6907 76.0915 28.5469C76.4583 28.4031 76.7734 28.1977 77.0265 27.9255C77.3003 27.6534 77.5224 27.3196 77.6981 26.9139C77.8737 26.5082 78.0184 26.0101 78.132 25.4247H79.4751V28.3569H82.6159V29.7896H79.4751V37.6569C79.4751 38.4374 79.6301 39.0074 79.9452 39.372C80.2551 39.7366 80.6942 39.9215 81.2521 39.9215C81.5414 39.9215 81.81 39.9061 82.0683 39.8753C82.3214 39.8445 82.5797 39.8034 82.838 39.7572V40.928C82.6159 41.041 82.2749 41.1437 81.8203 41.2361C81.3657 41.3337 80.8957 41.3799 80.4153 41.3799L80.4049 41.3748Z",
  p169c08c0: "M136.561 21.0558C135.088 21.0558 133.979 20.7952 133.231 20.274C132.488 19.7528 132.114 19.0114 132.114 18.0498C132.114 17.5331 132.234 17.0927 132.475 16.7243C132.715 16.3558 133.035 16.0682 133.436 15.857C133.837 15.6503 134.277 15.511 134.758 15.4392C134.455 15.3133 134.171 15.1066 133.912 14.8236C133.65 14.5405 133.521 14.1675 133.521 13.7092C133.521 13.2779 133.641 12.9049 133.881 12.5949C134.122 12.2803 134.5 11.9793 135.007 11.6872C134.389 11.4491 133.904 11.0492 133.561 10.4785C133.218 9.90784 133.044 9.2563 133.044 8.5149C133.044 7.31967 133.378 6.37606 134.046 5.68858C134.714 5.0011 135.724 4.65511 137.073 4.65511C137.58 4.65511 138.057 4.72251 138.488 4.85282C138.925 4.98313 139.25 5.14039 139.472 5.32013C139.69 5.0685 139.975 4.81687 140.318 4.56075C140.661 4.30463 141.07 4.17432 141.538 4.17432C141.965 4.17432 142.281 4.28666 142.49 4.50683C142.695 4.7315 142.802 4.99211 142.802 5.29766C142.802 5.60321 142.713 5.85034 142.535 6.0795C142.357 6.30867 142.054 6.42549 141.627 6.42549C141.627 6.23228 141.573 6.05704 141.471 5.90426C141.369 5.75149 141.191 5.6751 140.946 5.6751C140.768 5.6751 140.612 5.69757 140.483 5.73801C140.354 5.77845 140.225 5.83686 140.1 5.90426C140.349 6.19633 140.554 6.54232 140.719 6.94672C140.883 7.35112 140.968 7.84988 140.968 8.4475C140.968 9.48996 140.652 10.3572 140.015 11.0447C139.383 11.7321 138.404 12.0781 137.082 12.0781C136.917 12.0781 136.721 12.0691 136.503 12.0467C136.281 12.0242 136.103 12.0017 135.965 11.9748C135.729 12.1006 135.519 12.2624 135.332 12.4646C135.145 12.6668 135.052 12.9184 135.052 13.2284C135.052 13.4801 135.132 13.6688 135.288 13.7901C135.448 13.9159 135.773 13.9788 136.272 13.9788H138.626C139.895 13.9788 140.803 14.2709 141.355 14.855C141.907 15.4392 142.183 16.1895 142.183 17.1107C142.183 18.3194 141.729 19.281 140.821 19.9909C139.913 20.7009 138.493 21.0558 136.561 21.0558ZM136.601 19.9685C137.554 19.9685 138.293 19.8651 138.822 19.6674C139.352 19.4652 139.73 19.1821 139.949 18.8226C140.167 18.4587 140.278 18.0453 140.278 17.569C140.278 16.9983 140.109 16.6074 139.771 16.3917C139.432 16.1761 138.938 16.0682 138.293 16.0682H136.165C135.804 16.0682 135.462 16.1177 135.132 16.2165C134.803 16.3154 134.531 16.4996 134.318 16.7692C134.104 17.0388 133.997 17.4387 133.997 17.9689C133.997 18.3464 134.082 18.6834 134.246 18.9934C134.411 19.2989 134.683 19.5371 135.061 19.7123C135.439 19.8876 135.951 19.9729 136.601 19.9729V19.9685ZM137.015 11.0177C137.456 11.0177 137.803 10.9233 138.061 10.7346C138.315 10.5459 138.497 10.2628 138.609 9.88088C138.72 9.49895 138.773 9.02265 138.773 8.45199C138.773 7.88134 138.72 7.35112 138.609 6.95121C138.497 6.54681 138.31 6.24576 138.052 6.04356C137.79 5.84136 137.438 5.7425 136.997 5.7425C136.557 5.7425 136.227 5.84585 135.965 6.05704C135.702 6.26373 135.515 6.57377 135.395 6.97368C135.279 7.37808 135.221 7.87684 135.221 8.47446C135.221 9.3237 135.359 9.96176 135.635 10.3841C135.911 10.811 136.374 11.0222 137.02 11.0222L137.015 11.0177Z",
  p16b8d480: "M89.9616 18.5999C88.1381 18.5999 86.7278 18.0299 85.7256 16.8847C84.7235 15.7396 84.2276 14.1322 84.2276 12.0679C84.2276 9.84429 84.708 8.15993 85.6688 7.02503C86.6297 5.89014 87.9779 5.32013 89.7239 5.32013C91.3253 5.32013 92.5806 5.80284 93.5001 6.76314C94.4196 7.72343 94.8794 9.15103 94.8794 11.0459V12.1654H86.9396C86.9706 13.8652 87.2805 15.1028 87.8643 15.8731C88.448 16.6434 89.3055 17.0285 90.442 17.0285C91.2737 17.0285 91.971 16.8488 92.5393 16.4945C93.1075 16.135 93.5363 15.7293 93.8204 15.2671C93.965 15.3133 94.0942 15.416 94.2026 15.5752C94.3163 15.7344 94.3731 15.9244 94.3731 16.1453C94.3731 16.479 94.2181 16.8385 93.903 17.2185C93.5879 17.5985 93.1127 17.9272 92.4618 18.1942C91.8161 18.4664 90.9792 18.5999 89.9564 18.5999H89.9616ZM92.1208 10.8046C92.1208 9.54645 91.9349 8.54507 91.5681 7.80046C91.2013 7.05585 90.5763 6.68097 89.6981 6.68097C88.8819 6.68097 88.2414 7.0353 87.7816 7.74397C87.3167 8.45264 87.0532 9.47455 86.9913 10.8097H92.126L92.1208 10.8046Z",
  p17b24d70: "M27.2597 41.1334V40.0602H27.4301C27.7969 40.0602 28.1275 40.0191 28.4116 39.942C28.7009 39.865 28.9282 39.7007 29.0935 39.4542C29.264 39.2077 29.3466 38.8482 29.3466 38.3707V31.0272C29.3466 30.5651 29.264 30.221 29.0935 29.9899C28.923 29.7588 28.7061 29.6099 28.4323 29.538C28.1585 29.4661 27.8486 29.4302 27.4973 29.4302H27.3785V28.3569H31.5782L31.8882 30.2159H32.007C32.4719 29.3891 33.004 28.8293 33.6136 28.5366C34.2231 28.2439 34.9256 28.095 35.7263 28.095C37.0074 28.095 37.9941 28.4647 38.6915 29.2042C39.3889 29.9437 39.735 31.1248 39.735 32.7475V38.3501C39.735 38.8431 39.8073 39.2128 39.9519 39.4593C40.0966 39.7058 40.298 39.8702 40.5615 39.9472C40.8249 40.0293 41.1349 40.0653 41.4862 40.0653H41.605V41.1386H37.0953V33.0043C37.0953 31.9875 36.9196 31.1916 36.5684 30.6216C36.2171 30.0515 35.5869 29.764 34.6725 29.764C34.0165 29.764 33.4896 29.9386 33.0918 30.2878C32.694 30.637 32.4099 31.1043 32.2395 31.6948C32.069 32.2854 31.9863 32.9119 31.9863 33.5795V38.4682C31.9863 38.9304 32.069 39.2745 32.2395 39.5055C32.4099 39.7366 32.6269 39.8856 32.9007 39.9575C33.1745 40.0293 33.4844 40.0653 33.8357 40.0653H33.9545V41.1386H27.2597V41.1334Z",
  p17cdf600: "M21.772 16.0682V15.1291H22.0836C22.3729 15.1291 22.64 15.0932 22.8893 15.0258C23.1385 14.9584 23.3389 14.8191 23.4902 14.6079C23.6416 14.4012 23.7172 14.0867 23.7172 13.6688V5.98964H21.8565V4.88427H23.7172V3.9227C23.7172 2.66905 24.0466 1.70298 24.7099 1.02448C25.3732 0.341494 26.3169 0 27.541 0C28.2978 0 28.8987 0.0673997 29.3394 0.197707C29.7801 0.328014 30.0917 0.507748 30.2697 0.727922C30.4478 0.95259 30.5368 1.19972 30.5368 1.47831C30.5368 1.72994 30.4656 1.94562 30.3321 2.13434C30.1941 2.32306 29.9893 2.46685 29.7133 2.57469C29.4373 2.67804 29.099 2.73196 28.6984 2.73196C28.6984 2.46685 28.6583 2.20174 28.5827 1.94113C28.507 1.67602 28.3779 1.45585 28.1998 1.2851C28.0218 1.10986 27.7636 1.02448 27.4342 1.02448C26.8956 1.02448 26.5216 1.24466 26.308 1.68051C26.0943 2.12086 25.9875 2.78138 25.9875 3.67107V4.87978H28.8809V5.98514H25.9875V13.6643C25.9875 14.0822 26.0631 14.3967 26.2145 14.6034C26.3658 14.8101 26.5706 14.9494 26.8243 15.0213C27.0781 15.0932 27.3452 15.1246 27.6211 15.1246H28.4669V16.0637H21.7675L21.772 16.0682Z",
  p1803a9f0: "M68.8414 36.2029C67.7953 36.2029 67.0208 35.9648 66.5178 35.484C66.0147 35.0032 65.7655 34.1585 65.7655 32.9497V26.0659H64.1941V25.1673C64.4968 25.1673 64.8084 25.1044 65.1245 24.9785C65.4405 24.8527 65.712 24.673 65.9302 24.4348C66.1661 24.1967 66.3575 23.9046 66.5088 23.5497C66.6602 23.1947 66.7848 22.7588 66.8828 22.2466H68.0401V24.8123H70.7466V26.0659H68.0401V32.9497C68.0401 33.6327 68.1737 34.1315 68.4452 34.4505C68.7123 34.7696 69.0907 34.9313 69.5714 34.9313C69.8207 34.9313 70.0522 34.9178 70.2748 34.8909C70.4929 34.8639 70.7155 34.828 70.938 34.7875V35.812C70.7466 35.9109 70.4528 36.0007 70.0611 36.0816C69.6694 36.167 69.2643 36.2074 68.8503 36.2074L68.8414 36.2029Z",
  p185c4240: "M72.6201 18.3637V17.2904H72.7183C73.0851 17.2904 73.4157 17.2493 73.6998 17.1723C73.9891 17.0953 74.2164 16.9309 74.3817 16.6845C74.5521 16.438 74.6348 16.0682 74.6348 15.5752V8.27804C74.6348 7.80046 74.547 7.44613 74.3713 7.21504C74.1957 6.98395 73.9684 6.83503 73.6894 6.76314C73.4105 6.69124 73.0954 6.6553 72.7441 6.6553H72.6718V5.58203H76.6546L77.135 7.91857H77.2538C77.4604 7.42558 77.6981 6.97882 77.9615 6.5834C78.225 6.18799 78.5608 5.87987 78.9688 5.66419C79.3769 5.44851 79.9245 5.34067 80.6116 5.34067C81.5052 5.34067 82.1613 5.505 82.5797 5.82852C82.993 6.15204 83.2048 6.60394 83.2048 7.17396C83.2048 7.74397 83.0085 8.1702 82.6159 8.49885C82.2233 8.82238 81.6034 8.9867 80.7562 8.9867C80.7562 8.33453 80.6684 7.85695 80.4927 7.55397C80.3171 7.25099 79.9968 7.10206 79.5319 7.10206C79.1135 7.10206 78.7622 7.26639 78.4626 7.58991C78.1681 7.91343 77.9357 8.33453 77.7652 8.84292C77.5947 9.35131 77.4708 9.88537 77.3933 10.44C77.3106 10.9946 77.2745 11.503 77.2745 11.9652V15.6831C77.2745 16.1453 77.3623 16.4893 77.5379 16.7204C77.7136 16.9515 77.9409 17.1004 78.2198 17.1723C78.4988 17.2442 78.8139 17.2801 79.1651 17.2801H79.8625V18.3534H72.6201V18.3637Z",
  p18627c80: "M2.67086 12.0585C3.19168 12.1124 3.72585 12.3101 4.26447 12.6426C4.8031 12.9752 5.21263 13.3661 5.49752 13.8109C5.77796 14.2558 5.95602 14.7231 6.03169 15.2083C6.07621 15.5004 6.08511 15.797 6.06285 16.089L6.45903 16.3362L12.7489 6.01495C13.0071 5.58808 13.194 5.12976 13.3098 4.63999C13.4255 4.15021 13.4433 3.66044 13.3721 3.17066C13.332 2.91903 13.2697 2.6719 13.1718 2.42926C13.0828 2.20459 12.9715 1.98441 12.8379 1.77323C12.553 1.32839 12.1435 0.937464 11.6049 0.604956C11.0663 0.272448 10.5365 0.0747404 10.0113 0.0208202C9.75754 -0.00613995 9.51271 -0.00614006 9.27679 0.0163267C9.0186 0.0387935 8.76932 0.0927137 8.52894 0.169101C8.06154 0.321875 7.63866 0.560022 7.25583 0.888037C6.87301 1.21156 6.55251 1.58451 6.28987 2.01138L0 12.3281L0.396177 12.5752C0.645458 12.4225 0.908092 12.2967 1.18853 12.2068C1.65148 12.054 2.15004 12.0046 2.67086 12.0585Z",
  p1922d800: "M16.5844 6.61614C16.3365 6.06154 16.2228 5.41963 16.2435 4.69042C16.2642 3.96122 16.414 3.32444 16.6929 2.79037C16.9719 2.25631 17.3335 1.80954 17.7777 1.45521C18.0464 1.24466 18.3305 1.06493 18.6352 0.921141L18.6507 0.387073L4.72905 0.00192868C4.15565 -0.0134771 3.59258 0.063553 3.03468 0.227881C2.47678 0.39221 1.98087 0.65411 1.53661 1.00844C1.30415 1.19331 1.09752 1.39872 0.911556 1.62981C0.73592 1.84549 0.586113 2.08171 0.451804 2.33847C0.172853 2.87768 0.0230472 3.50931 0.00238419 4.23852C-0.0182788 4.96772 0.0953676 5.60963 0.343324 6.16424C0.462136 6.43127 0.60161 6.67777 0.761748 6.90372C0.932218 7.15021 1.12852 7.36589 1.35064 7.56103C1.77424 7.9359 2.25982 8.22348 2.80222 8.42375C3.34979 8.62403 3.90769 8.72674 4.48109 8.74728L18.4028 9.13242L18.4183 8.59322C18.1187 8.43403 17.8449 8.23889 17.5918 8.01294C17.1682 7.63806 16.8324 7.17075 16.5844 6.61614Z",
  p1945f200: "M40.3344 36.2029C39.5777 36.2029 38.9278 36.1176 38.3892 35.9423C37.8505 35.7671 37.4454 35.511 37.1695 35.1695C36.8935 34.828 36.7555 34.4236 36.7555 33.9473C36.7555 33.5698 36.8356 33.2778 36.9914 33.0621C37.1517 32.8464 37.3386 32.6936 37.5612 32.6038C37.7793 32.5139 37.9974 32.469 38.2022 32.469C38.2022 33.2328 38.3713 33.8664 38.7097 34.3696C39.048 34.8684 39.6311 35.12 40.4546 35.12C41.1713 35.12 41.7144 34.9538 42.0883 34.6213C42.4622 34.2888 42.6447 33.8619 42.6447 33.3497C42.6447 33.0171 42.5691 32.7431 42.4177 32.5274C42.2664 32.3117 42.0082 32.1005 41.6431 31.8893C41.2781 31.6826 40.7707 31.4445 40.1252 31.1794C39.3952 30.8603 38.7898 30.5503 38.3179 30.2492C37.8416 29.9482 37.4855 29.5977 37.254 29.1843C37.0181 28.7754 36.9024 28.2632 36.9024 27.6521C36.9024 26.6635 37.2718 25.9087 38.0063 25.3874C38.7453 24.8662 39.7201 24.6056 40.9309 24.6056C41.6476 24.6056 42.2352 24.6955 42.6981 24.8752C43.1611 25.0549 43.5083 25.2931 43.7442 25.5851C43.9802 25.8772 44.0959 26.1962 44.0959 26.5467C44.0959 26.9376 43.9623 27.2477 43.6908 27.4858C43.4237 27.724 43.0186 27.8408 42.48 27.8408C42.48 27.1443 42.3287 26.6051 42.026 26.2232C41.7233 25.8413 41.2692 25.648 40.6638 25.648C40.0139 25.648 39.5421 25.7963 39.2394 26.0884C38.9367 26.3805 38.7853 26.7579 38.7853 27.2162C38.7853 27.715 38.9767 28.1059 39.364 28.3845C39.7513 28.6631 40.4056 28.9821 41.3271 29.3461C42.0705 29.6381 42.6759 29.9392 43.1477 30.2447C43.6151 30.5503 43.9623 30.9098 44.1938 31.3187C44.4208 31.7276 44.5366 32.2398 44.5366 32.8509C44.5366 33.9338 44.1627 34.7651 43.4104 35.3447C42.6581 35.9199 41.6343 36.2119 40.3389 36.2119L40.3344 36.2029Z",
  p1a0f03c0: "M167.215 22.8211C168.032 22.8211 168.734 22.703 169.328 22.477C169.917 22.2459 170.423 21.9327 170.842 21.5373C171.255 21.1419 171.606 20.6643 171.885 20.1199C172.164 19.5705 172.402 18.9799 172.593 18.3431L168.181 7.89803C168.052 7.56424 167.918 7.31261 167.773 7.13287C167.629 6.95828 167.463 6.83503 167.267 6.76314C167.076 6.69124 166.828 6.6553 166.523 6.6553H166.451V5.58203H172.521V6.6553H172.448C171.968 6.6553 171.606 6.74259 171.369 6.91719C171.131 7.09179 171.007 7.3691 171.007 7.75424C171.007 7.88262 171.023 8.02127 171.054 8.1702C171.085 8.31912 171.131 8.48345 171.198 8.65805L172.877 12.8073C173.037 13.1719 173.187 13.5622 173.321 13.9782C173.456 14.3941 173.585 14.7844 173.704 15.1593C173.822 15.5342 173.9 15.8474 173.931 16.099C174.044 15.6523 174.179 15.2055 174.339 14.7536C174.499 14.3017 174.649 13.8601 174.794 13.4287L176.374 8.82751C176.452 8.65291 176.509 8.46804 176.545 8.26777C176.576 8.06749 176.591 7.89803 176.591 7.75424C176.591 7.37423 176.462 7.09693 176.209 6.91719C175.951 6.74259 175.568 6.6553 175.057 6.6553H174.985V5.58203H180.021V6.6553H179.949C179.644 6.6553 179.391 6.70665 179.179 6.80935C178.973 6.91206 178.787 7.09693 178.627 7.35883C178.466 7.62072 178.301 8.00073 178.12 8.49372L174.473 18.4356C174.055 19.5807 173.657 20.5154 173.275 21.2394C172.893 21.9635 172.464 22.5284 171.994 22.9341C171.524 23.3398 170.924 23.6222 170.196 23.7814C169.468 23.9406 168.558 24.0176 167.474 24.0176H167.21V22.8262L167.215 22.8211Z",
  p1a207b00: "M38.3402 18.5999C37.462 18.5999 36.7078 18.5023 36.0828 18.3021C35.4577 18.1018 34.9876 17.8091 34.6674 17.4188C34.3471 17.0285 34.1869 16.5663 34.1869 16.022C34.1869 15.5906 34.2799 15.2569 34.4607 15.0104C34.6467 14.7639 34.8637 14.5893 35.1219 14.4866C35.3751 14.3839 35.6282 14.3325 35.8658 14.3325C35.8658 15.2055 36.0621 15.9296 36.4547 16.5047C36.8473 17.0747 37.524 17.3623 38.4797 17.3623C39.3114 17.3623 39.9416 17.1723 40.3755 16.7923C40.8094 16.4123 41.0212 15.9244 41.0212 15.339C41.0212 14.959 40.9334 14.6458 40.7578 14.3993C40.5821 14.1528 40.2825 13.9114 39.8589 13.6701C39.4353 13.4338 38.8465 13.1617 38.0974 12.8587C37.2502 12.4941 36.5477 12.1398 36.0001 11.7957C35.4474 11.4516 35.0341 11.0511 34.7655 10.5786C34.4917 10.1113 34.3574 9.52591 34.3574 8.82751C34.3574 7.69775 34.7862 6.83503 35.6385 6.23934C36.496 5.64365 37.6273 5.3458 39.0324 5.3458C39.8641 5.3458 40.546 5.44851 41.0832 5.65392C41.6205 5.85933 42.0234 6.1315 42.2972 6.46529C42.571 6.79908 42.7053 7.16369 42.7053 7.56424C42.7053 8.011 42.5503 8.36534 42.2352 8.63751C41.9252 8.90967 41.4552 9.04319 40.8301 9.04319C40.8301 8.24723 40.6545 7.63099 40.3032 7.1945C39.9519 6.758 39.425 6.53718 38.7225 6.53718C37.9683 6.53718 37.4207 6.70665 37.0694 7.04044C36.7182 7.37423 36.5425 7.80559 36.5425 8.32939C36.5425 8.8994 36.7647 9.34617 37.2141 9.66456C37.6635 9.98294 38.4229 10.3475 39.4922 10.7635C40.3548 11.0973 41.0574 11.4414 41.605 11.7906C42.1474 12.1398 42.5503 12.5506 42.8189 13.0179C43.0824 13.4852 43.2167 14.0706 43.2167 14.769C43.2167 16.0066 42.7828 16.9566 41.9097 17.6191C41.0367 18.2764 39.8486 18.6102 38.3454 18.6102L38.3402 18.5999Z",
  p1e216800: "M16.7525 18.3637V17.2904H17.1141C17.4499 17.2904 17.7599 17.2493 18.0491 17.1723C18.3384 17.0953 18.5709 16.9361 18.7465 16.6947C18.9222 16.4585 19.01 16.099 19.01 15.6215V6.8453H16.8507V5.58203H19.01V4.48308C19.01 3.05034 19.3922 1.94626 20.1619 1.17084C20.9316 0.39028 22.0268 0 23.4473 0C24.3255 0 25.0229 0.0770292 25.5343 0.225952C26.0457 0.374874 26.4073 0.580284 26.614 0.831912C26.8206 1.08867 26.9239 1.37111 26.9239 1.6895C26.9239 1.97708 26.8412 2.22357 26.6863 2.43925C26.5261 2.65493 26.2885 2.81926 25.9682 2.9425C25.648 3.06061 25.2554 3.12224 24.7904 3.12224C24.7904 2.81926 24.7439 2.51628 24.6561 2.21843C24.5683 1.91545 24.4185 1.66382 24.2119 1.46868C24.0053 1.26841 23.7056 1.17084 23.3234 1.17084C22.6983 1.17084 22.2644 1.42247 22.0164 1.92059C21.7685 2.42384 21.6445 3.17873 21.6445 4.19551V5.57689H25.0022V6.84016H21.6445V15.6163C21.6445 16.0939 21.7323 16.4534 21.908 16.6896C22.0836 16.9258 22.3212 17.085 22.6157 17.1672C22.9101 17.2493 23.2201 17.2853 23.5403 17.2853H24.5218V18.3586H16.7474L16.7525 18.3637Z",
  p1edb0800: "M46.5602 20.4066C43.9988 23.9377 40.3632 26.9761 35.6948 29.4397C31.0264 31.9443 26.5232 33.2993 22.144 33.5046C17.7648 33.7099 13.6748 33.0529 9.87395 31.5748C7.60171 30.6715 5.45343 29.5629 3.42907 28.1668L5.8672e-05 30.0145L47.717 117.718C49.7 121.331 52.1788 124.534 55.236 127.408C58.2932 130.241 61.7222 132.417 65.523 133.895C67.5061 134.675 69.5304 135.209 71.6787 135.497C73.6618 135.784 75.6861 135.907 77.7931 135.784C82.1723 135.579 86.6755 134.224 91.3439 131.719C95.971 129.214 99.6066 126.176 102.209 122.645C103.449 120.92 104.482 119.196 105.349 117.389C106.258 115.459 106.919 113.448 107.373 111.395C108.2 107.412 108.282 103.388 107.539 99.282C106.836 95.176 105.473 91.3164 103.531 87.7032L55.8144 0L52.3854 1.84768C52.468 4.27019 52.2201 6.69271 51.7244 9.07416C50.8981 13.0569 49.1629 16.7934 46.6015 20.3655L46.5602 20.4066Z",
  p2103ba00: "M25.2657 18.3637V17.2904H25.6273C25.9631 17.2904 26.273 17.2493 26.5623 17.1723C26.8516 17.0953 27.084 16.9361 27.2597 16.6947C27.4353 16.4585 27.5231 16.099 27.5231 15.6215V6.8453H25.3638V5.58203H27.5231V4.48308C27.5231 3.05034 27.9054 1.94626 28.6751 1.17084C29.4448 0.39028 30.5399 0 31.9605 0C32.8387 0 33.5361 0.0770292 34.0475 0.225952C34.5589 0.374874 34.9205 0.580284 35.1271 0.831912C35.3337 1.08867 35.4371 1.37111 35.4371 1.6895C35.4371 1.97708 35.3544 2.22357 35.1994 2.43925C35.0393 2.65493 34.8017 2.81926 34.4814 2.9425C34.1611 3.06061 33.7685 3.12224 33.3036 3.12224C33.3036 2.81926 33.2571 2.51628 33.1693 2.21843C33.0815 1.91545 32.9317 1.66382 32.725 1.46868C32.5184 1.26841 32.2188 1.17084 31.8365 1.17084C31.2115 1.17084 30.7776 1.42247 30.5296 1.92059C30.2816 2.42384 30.1577 3.17873 30.1577 4.19551V5.57689H33.5154V6.84016H30.1577V15.6163C30.1577 16.0939 30.2455 16.4534 30.4211 16.6896C30.5967 16.9258 30.8344 17.085 31.1288 17.1672C31.4233 17.2493 31.7332 17.2853 32.0535 17.2853H33.035V18.3586H25.2605L25.2657 18.3637Z",
  p215d7d80: "M14.2912 5.78913C14.0775 5.30384 13.9795 4.74218 13.9974 4.10412C14.0152 3.46606 14.1443 2.90889 14.3846 2.44158C14.625 1.97427 14.9366 1.58335 15.3194 1.27331C15.5509 1.08908 15.7957 0.931812 16.0584 0.805998L16.0717 0.338689L4.07511 0.00168759C3.58101 -0.0117925 3.0958 0.0556089 2.61504 0.199396C2.13429 0.343183 1.70695 0.572346 1.32413 0.882388C1.12381 1.04415 0.945757 1.22388 0.785506 1.42608C0.634157 1.6148 0.505066 1.8215 0.389329 2.04616C0.148951 2.51797 0.0198602 3.07065 0.00205451 3.7087C-0.0157512 4.34676 0.0821802 4.90843 0.295849 5.39371C0.398232 5.62736 0.51842 5.84305 0.656414 6.04075C0.803311 6.25643 0.972465 6.44515 1.16388 6.6159C1.52889 6.94392 1.94733 7.19554 2.41473 7.37078C2.88658 7.54603 3.36734 7.63589 3.86145 7.65387L15.8581 7.99087L15.8714 7.51907C15.6132 7.37977 15.3773 7.20903 15.1592 7.01132C14.7942 6.6833 14.5048 6.27441 14.2912 5.78913Z",
  p21cdc300: "M6.64154 16.2794C5.15476 16.2794 3.91726 15.9604 2.92904 15.3178C1.94528 14.6798 1.21079 13.7811 0.725586 12.6263C0.244831 11.4715 0 10.1235 0 8.57781C0 7.03209 0.24038 5.69308 0.725586 4.55176C1.20634 3.41045 1.94528 2.52526 2.93795 1.8917C3.93062 1.25814 5.17257 0.943603 6.65935 0.943603C8.14612 0.943603 9.28124 1.25814 10.265 1.8917C11.2488 2.52526 11.9966 3.41495 12.5085 4.56075C13.016 5.70656 13.2742 7.05456 13.2742 8.60027C13.2742 10.146 13.0204 11.4895 12.5085 12.6398C11.9966 13.7856 11.2488 14.6798 10.265 15.3223C9.28124 15.9604 8.07045 16.2839 6.63709 16.2839L6.64154 16.2794ZM6.64154 15.0887C7.63421 15.0887 8.42211 14.8326 9.0097 14.3158C9.59729 13.8036 10.0157 13.0622 10.2695 12.0916C10.5232 11.1255 10.6523 9.96176 10.6523 8.59578C10.6523 7.2298 10.5232 6.06602 10.2695 5.09995C10.0157 4.13388 9.59284 3.39697 9.0097 2.88922C8.42211 2.38148 7.64311 2.12985 6.6638 2.12985C5.19037 2.12985 4.14874 2.69601 3.54334 3.82833C2.93795 4.96066 2.63525 6.55131 2.63525 8.59578C2.63525 10.6403 2.93795 12.2354 3.54334 13.3722C4.14874 14.5135 5.18147 15.0842 6.64599 15.0842L6.64154 15.0887Z",
  p227f79f0: "M65.4501 18.5999C63.6731 18.5999 62.2731 18.0504 61.2503 16.9566C60.2275 15.8577 59.7161 14.1887 59.7161 11.9497C59.7161 9.71077 60.2017 8.06236 61.178 6.96341C62.1543 5.86447 63.6007 5.32013 65.5224 5.32013C67.2994 5.32013 68.6942 5.8696 69.7222 6.96341C70.745 8.06236 71.2564 9.72104 71.2564 11.9497C71.2564 14.1784 70.7708 15.8628 69.7945 16.9566C68.8181 18.0556 67.3717 18.5999 65.4501 18.5999ZM65.4966 17.2904C66.2456 17.2904 66.85 17.0901 67.2942 16.6845C67.7437 16.2788 68.0639 15.6779 68.2551 14.882C68.4462 14.086 68.5444 13.1103 68.5444 11.9497C68.5444 10.1832 68.3119 8.86346 67.847 7.98019C67.3821 7.09693 66.5917 6.6553 65.4707 6.6553C64.3498 6.6553 63.5646 7.09693 63.11 7.98019C62.6554 8.86346 62.4281 10.1884 62.4281 11.9497C62.4281 13.7111 62.6606 15.0258 63.1255 15.9296C63.5904 16.8334 64.3808 17.2904 65.5017 17.2904H65.4966Z",
  p23de0f00: "M6.49909 36.2029C5.09244 36.2029 3.9039 35.8839 2.93349 35.2414C1.96308 34.6033 1.23305 33.7091 0.752293 32.5588C0.271538 31.413 0.0267075 30.065 0.0267075 28.5193C0.0267075 26.9736 0.28044 25.693 0.792354 24.5427C1.29982 23.3969 2.06101 22.4982 3.06704 21.8512C4.07306 21.2041 5.31501 20.8806 6.78843 20.8806C7.76775 20.8806 8.57791 20.9795 9.21892 21.1817C9.85993 21.3839 10.3362 21.6669 10.6434 22.0264C10.955 22.3904 11.1063 22.7903 11.1063 23.2351C11.1063 23.7069 10.9194 24.0889 10.5499 24.3719C10.176 24.655 9.69522 24.7988 9.10318 24.7988C9.10318 24.354 9.02751 23.9226 8.87616 23.5047C8.72481 23.0868 8.47553 22.7409 8.13277 22.4623C7.79001 22.1837 7.31815 22.0444 6.72611 22.0444C5.73344 22.0444 4.93664 22.296 4.34015 22.7948C3.74365 23.2935 3.30742 24.0304 3.03588 24.9965C2.76879 25.9626 2.6308 27.1353 2.6308 28.5103C2.6308 29.7774 2.77769 30.8783 3.06704 31.8174C3.35638 32.7565 3.81488 33.4755 4.44253 33.9787C5.07018 34.4775 5.88034 34.7291 6.87301 34.7291C7.56298 34.7291 8.14612 34.6437 8.61797 34.4685C9.09428 34.2933 9.49491 34.0641 9.82876 33.781C10.1582 33.4979 10.4431 33.2014 10.6745 32.8958C10.7858 32.9812 10.8748 33.089 10.9416 33.2283C11.0084 33.3676 11.044 33.5339 11.044 33.7271C11.044 34.0057 10.9594 34.2888 10.7858 34.5718C10.6122 34.8549 10.3496 35.12 9.98902 35.3627C9.62845 35.6053 9.16105 35.803 8.58236 35.9558C8.00367 36.1086 7.30925 36.185 6.49464 36.185L6.49909 36.2029Z",
  p24e91a80: "M7.01151 13.4606C7.30431 13.0468 7.72016 12.6977 8.25059 12.4046C8.78102 12.1116 9.29447 11.9564 9.79519 11.9305C10.2917 11.909 10.7584 11.9823 11.1955 12.1547C11.4544 12.2581 11.7005 12.3917 11.9296 12.5512L12.32 12.3357L6.87572 2.11248C6.65082 1.69011 6.36652 1.31514 6.01856 0.983277C5.6706 0.651411 5.2802 0.401434 4.84313 0.229036C4.61823 0.138527 4.38484 0.0781867 4.14297 0.0393971C3.91807 0.00491752 3.68468 -0.00801148 3.44705 0.00491837C2.94633 0.0264681 2.43288 0.185936 1.90245 0.479012C1.37202 0.772089 0.960413 1.12119 0.663374 1.53495C0.523341 1.73321 0.404526 1.93577 0.306928 2.14696C0.200842 2.37539 0.124461 2.60813 0.0777836 2.84949C-0.0198148 3.31496 -0.0240582 3.78474 0.0565666 4.25884C0.137191 4.73724 0.289954 5.18548 0.514855 5.60785L5.95915 15.8311L6.34954 15.6156C6.34106 15.3311 6.36652 15.051 6.42592 14.7751C6.52352 14.3096 6.71872 13.8743 7.01151 13.4606Z",
  p25a6ed00: "M2.54605 11.5663C3.04252 11.618 3.55173 11.8077 4.06519 12.1266C4.57864 12.4456 4.96903 12.8205 5.24061 13.2472C5.50795 13.6739 5.67768 14.1221 5.74982 14.5876C5.79225 14.8677 5.80074 15.1522 5.77952 15.4324L6.15719 15.6694L12.1531 5.76944C12.3992 5.36 12.5775 4.92038 12.6878 4.4506C12.7981 3.98081 12.8151 3.51103 12.7472 3.04125C12.709 2.79989 12.6496 2.56284 12.5562 2.3301C12.4714 2.11461 12.3653 1.90342 12.238 1.70085C11.9664 1.27417 11.576 0.8992 11.0626 0.580264C10.5491 0.261328 10.0441 0.0716897 9.54343 0.0199704C9.30155 -0.00588934 9.06817 -0.00588944 8.84326 0.0156603C8.59715 0.0372101 8.35952 0.0889295 8.13037 0.162199C7.68481 0.308737 7.28169 0.537164 6.91676 0.85179C6.55182 1.16211 6.2463 1.51983 5.99594 1.92928L0 11.8249L0.377663 12.062C0.615294 11.9154 0.865655 11.7948 1.13299 11.7086C1.5743 11.562 2.04957 11.5146 2.54605 11.5663Z",
  p2753a400: "M37.9396 16.0682V15.1291H38.1043C38.407 15.1291 38.683 15.0932 38.9322 15.0258C39.1815 14.9584 39.3818 14.8146 39.5332 14.5989C39.6845 14.3832 39.7602 14.0687 39.7602 13.6508V2.52976C39.7602 2.12535 39.6756 1.82879 39.5109 1.63109C39.3462 1.43787 39.1414 1.30756 38.9011 1.24466C38.6607 1.18175 38.4025 1.1503 38.1265 1.1503H37.9396V0.211187H42.0304V4.5293C42.0304 4.79441 42.0215 5.07299 42.0082 5.36506C41.9948 5.65713 41.9815 5.90876 41.9681 6.11545C41.9548 6.32215 41.9458 6.44796 41.9458 6.49289H42.0482C42.253 6.10197 42.5023 5.76946 42.7916 5.49088C43.081 5.21229 43.4148 5.00559 43.7932 4.8663C44.1716 4.72701 44.6078 4.65961 45.1064 4.65961C46.2771 4.65961 47.1718 4.98313 47.7817 5.63017C48.396 6.27721 48.7031 7.31068 48.7031 8.73058V13.6328C48.7031 14.0642 48.7699 14.3877 48.899 14.6034C49.0281 14.8191 49.2106 14.9629 49.4376 15.0303C49.6646 15.1022 49.9317 15.1336 50.2344 15.1336H50.2967V16.0727H46.4329V8.95525C46.4329 8.06557 46.2771 7.3691 45.9699 6.87033C45.6583 6.37157 45.1108 6.11995 44.3274 6.11995C43.8021 6.11995 43.3703 6.26373 43.0231 6.54681C42.6803 6.82989 42.4266 7.22531 42.2708 7.72407C42.1106 8.22283 42.0349 8.80248 42.0349 9.45401V13.7317C42.0349 14.1361 42.1061 14.4371 42.253 14.6393C42.3999 14.8415 42.5958 14.9718 42.8406 15.0348C43.0899 15.0977 43.3659 15.1291 43.6686 15.1291H43.7309V16.0682H37.944H37.9396Z",
  p2801f480: "M12.4674 4.88877C11.863 4.82714 11.2431 4.60119 10.6181 4.22118C9.99302 3.84117 9.51777 3.39441 9.18716 2.88602C8.86172 2.37762 8.65509 1.84356 8.56727 1.28895C8.51561 0.955159 8.50528 0.616231 8.53111 0.282439L8.07136 0L0.772155 11.7957C0.472542 12.2835 0.255579 12.8073 0.121269 13.3671C-0.0130401 13.9268 -0.0337028 14.4866 0.0489492 15.0463C0.095441 15.3339 0.16776 15.6163 0.281406 15.8936C0.384721 16.1504 0.513865 16.402 0.668838 16.6434C0.999446 17.1518 1.4747 17.5985 2.09975 17.9785C2.72481 18.3586 3.33953 18.5845 3.94909 18.6461C4.24354 18.6769 4.52765 18.6769 4.80144 18.6513C5.10105 18.6256 5.39033 18.564 5.66929 18.4767C6.21169 18.3021 6.70244 18.0299 7.14669 17.655C7.59095 17.2853 7.96288 16.8591 8.26766 16.3712L15.5669 4.57552L15.1071 4.29307C14.8178 4.46767 14.5131 4.61146 14.1876 4.71417C13.6504 4.88877 13.0718 4.94525 12.4674 4.88363V4.88877Z",
  p28ea9d80: "M8.53553 16.0381C8.89197 15.5452 9.39821 15.1292 10.0439 14.78C10.6896 14.4308 11.3147 14.2459 11.9243 14.2151C12.5287 14.1894 13.0969 14.2767 13.629 14.4822C13.9441 14.6054 14.2437 14.7646 14.5226 14.9546L14.9979 14.6978L8.37022 2.517C8.09644 2.01374 7.75033 1.56698 7.32674 1.17156C6.90315 0.776149 6.4279 0.478304 5.89583 0.272894C5.62204 0.165053 5.33793 0.0931586 5.04348 0.0469412C4.7697 0.00585917 4.48558 -0.00954559 4.1963 0.00586019C3.58674 0.0315365 2.96168 0.22154 2.31596 0.570738C1.67024 0.919935 1.16917 1.33589 0.807564 1.82888C0.637094 2.0651 0.492453 2.30645 0.373641 2.55808C0.244497 2.83025 0.151514 3.10756 0.0946905 3.39513C-0.0241218 3.94974 -0.0292875 4.50948 0.0688618 5.07436C0.167011 5.64437 0.352978 6.17844 0.626763 6.68169L7.25442 18.8625L7.72967 18.6058C7.71934 18.2668 7.75033 17.933 7.82266 17.6044C7.94147 17.0498 8.17909 16.5311 8.53553 16.0381Z",
  p290a2900: "M158.475 24.0638C156.765 24.0638 155.479 23.766 154.611 23.1703C153.748 22.5746 153.314 21.7273 153.314 20.6283C153.314 20.0378 153.454 19.5345 153.733 19.1134C154.012 18.6923 154.384 18.3637 154.849 18.1223C155.313 17.8861 155.825 17.7269 156.383 17.6447C156.032 17.501 155.701 17.2647 155.401 16.9412C155.097 16.6177 154.947 16.1915 154.947 15.6677C154.947 15.1747 155.086 14.7485 155.365 14.3941C155.644 14.0347 156.083 13.6906 156.672 13.3568C155.954 13.0846 155.391 12.6276 154.993 11.9754C154.595 11.3232 154.394 10.5786 154.394 9.73131C154.394 8.36534 154.781 7.28693 155.556 6.50124C156.331 5.71554 157.504 5.32013 159.069 5.32013C159.658 5.32013 160.211 5.39716 160.712 5.54608C161.218 5.695 161.595 5.87474 161.853 6.08015C162.106 5.79257 162.437 5.505 162.835 5.21229C163.233 4.91958 163.708 4.77066 164.25 4.77066C164.746 4.77066 165.113 4.89904 165.356 5.15066C165.593 5.40743 165.717 5.70527 165.717 6.05447C165.717 6.40367 165.614 6.68611 165.407 6.94801C165.201 7.2099 164.849 7.34342 164.354 7.34342C164.354 7.1226 164.292 6.92233 164.173 6.74773C164.054 6.57313 163.847 6.48583 163.563 6.48583C163.357 6.48583 163.176 6.51151 163.026 6.55773C162.876 6.60394 162.726 6.6707 162.582 6.74773C162.871 7.08152 163.109 7.47694 163.3 7.93911C163.491 8.40128 163.589 8.9713 163.589 9.65429C163.589 10.8457 163.222 11.8368 162.484 12.6225C161.75 13.4082 160.614 13.8036 159.079 13.8036C158.888 13.8036 158.661 13.7933 158.408 13.7676C158.149 13.742 157.943 13.7163 157.783 13.6855C157.509 13.8293 157.266 14.0141 157.049 14.2452C156.832 14.4763 156.724 14.7639 156.724 15.1182C156.724 15.4058 156.817 15.6215 156.998 15.7601C157.183 15.9039 157.561 15.9758 158.139 15.9758H160.872C162.344 15.9758 163.398 16.3096 164.038 16.9772C164.679 17.6447 164.999 18.5023 164.999 19.5551C164.999 20.9365 164.472 22.0354 163.419 22.8468C162.365 23.6581 160.717 24.0638 158.475 24.0638ZM158.521 22.8211C159.627 22.8211 160.484 22.703 161.099 22.477C161.714 22.2459 162.153 21.9224 162.406 21.5116C162.659 21.0956 162.788 20.6232 162.788 20.0789C162.788 19.4267 162.592 18.9799 162.199 18.7334C161.807 18.4869 161.233 18.3637 160.484 18.3637H158.015C157.597 18.3637 157.199 18.4202 156.817 18.5332C156.434 18.6461 156.119 18.8567 155.871 19.1648C155.623 19.4729 155.499 19.9299 155.499 20.5359C155.499 20.9673 155.598 21.3524 155.789 21.7067C155.98 22.0559 156.295 22.3281 156.734 22.5284C157.173 22.7287 157.767 22.8262 158.521 22.8262V22.8211ZM159.002 12.5917C159.513 12.5917 159.916 12.4838 160.216 12.2681C160.51 12.0525 160.722 11.7289 160.851 11.2924C160.98 10.8559 161.042 10.3116 161.042 9.65942C161.042 9.00724 160.98 8.40128 160.851 7.94425C160.722 7.48207 160.505 7.13801 160.205 6.90692C159.901 6.67584 159.493 6.56286 158.981 6.56286C158.47 6.56286 158.087 6.68097 157.783 6.92233C157.478 7.15855 157.261 7.51288 157.121 7.96992C156.987 8.4321 156.92 9.00211 156.92 9.6851C156.92 10.6557 157.08 11.3849 157.4 11.8676C157.721 12.3554 158.258 12.5968 159.007 12.5968L159.002 12.5917Z",
  p2963b680: "M23.4902 35.9917V35.0526H23.6371C23.9532 35.0526 24.238 35.0167 24.4829 34.9493C24.7322 34.8819 24.928 34.7381 25.0705 34.5224C25.2174 34.3067 25.2886 33.9922 25.2886 33.5743V27.1488C25.2886 26.7444 25.2174 26.4434 25.0705 26.2412C24.9236 26.039 24.7366 25.9087 24.5007 25.8458C24.2648 25.7829 23.9977 25.7514 23.695 25.7514H23.5926V24.8123H27.2116L27.4787 26.4389H27.5811C27.9817 25.7154 28.4402 25.2257 28.9655 24.9696C29.4907 24.7134 30.0961 24.5831 30.7861 24.5831C31.8901 24.5831 32.7403 24.9066 33.3412 25.5537C33.9422 26.2007 34.2404 27.2342 34.2404 28.6541V33.5564C34.2404 33.9877 34.3027 34.3112 34.4274 34.5269C34.552 34.7426 34.7256 34.8864 34.9526 34.9538C35.1797 35.0257 35.4468 35.0571 35.7495 35.0571H35.8518V35.9962H31.9657V28.8788C31.9657 27.9891 31.8144 27.2926 31.5117 26.7939C31.209 26.2951 30.6659 26.0435 29.878 26.0435C29.3127 26.0435 28.8586 26.1962 28.5159 26.5018C28.1731 26.8073 27.9283 27.2162 27.7814 27.733C27.6345 28.2497 27.5633 28.7979 27.5633 29.382V33.6597C27.5633 34.0641 27.6345 34.3652 27.7814 34.5674C27.9283 34.7696 28.1152 34.8999 28.3512 34.9628C28.5871 35.0257 28.8542 35.0571 29.1569 35.0571H29.2593V35.9962H23.4902V35.9917Z",
  p2b241480: "M61.4883 115.425C64.0497 111.894 67.6853 108.855 72.3537 106.392C77.0221 103.928 81.5252 102.532 85.9045 102.327C90.2837 102.122 94.3737 102.779 98.1745 104.257C100.447 105.16 102.595 106.269 104.619 107.665L108.048 105.817L60.3315 18.1138C58.3484 14.5005 55.8696 11.2979 52.8125 8.42371C49.7553 5.59061 46.3263 3.41444 42.5254 1.9363C40.5424 1.15617 38.518 0.622395 36.3697 0.334979C34.3867 0.0475617 32.3623 -0.0756157 30.2554 0.0475629C25.8762 0.252861 21.373 1.60783 16.7046 4.11247C12.0362 6.6171 8.44192 9.6555 5.83918 13.1866C4.59977 14.9111 3.56694 16.6356 2.69936 18.4422C1.79047 20.372 1.12945 22.384 0.675006 24.4369C-0.151261 28.4197 -0.233888 32.4435 0.509753 36.5495C1.21208 40.6555 2.57542 44.5151 4.51715 48.1283L52.2341 135.832L55.6631 133.984C55.5805 131.561 55.8283 129.139 56.3241 126.757C57.1504 122.775 58.8855 119.038 61.4469 115.466L61.4883 115.425Z",
  p2b775380: "M117.545 16.2794C115.973 16.2794 114.758 15.7806 113.894 14.7786C113.031 13.7766 112.603 12.3702 112.603 10.5639C112.603 8.61825 113.017 7.14443 113.845 6.1514C114.673 5.15837 115.835 4.65961 117.34 4.65961C118.72 4.65961 119.801 5.08198 120.594 5.92224C121.386 6.76249 121.782 8.01165 121.782 9.66969V10.6492H114.94C114.967 12.1365 115.234 13.2194 115.737 13.8934C116.24 14.5674 116.979 14.9044 117.959 14.9044C118.675 14.9044 119.276 14.7472 119.766 14.4371C120.255 14.1226 120.625 13.7676 120.87 13.3632C120.994 13.4037 121.106 13.4935 121.199 13.6328C121.297 13.7721 121.346 13.9384 121.346 14.1316C121.346 14.4237 121.213 14.7382 120.941 15.0707C120.669 15.4032 120.26 15.6908 119.699 15.9244C119.143 16.1626 118.421 16.2794 117.54 16.2794H117.545ZM119.405 9.45401C119.405 8.35314 119.245 7.47694 118.929 6.8254C118.613 6.17387 118.074 5.84585 117.317 5.84585C116.614 5.84585 116.062 6.15589 115.666 6.77597C115.265 7.39606 115.038 8.29023 114.985 9.4585H119.41L119.405 9.45401Z",
  p2bc56c80: "M1.69736 2.11188C1.90105 2.57735 1.9944 3.11609 1.97743 3.72811C1.96045 4.34012 1.83739 4.87455 1.60825 5.32279C1.37911 5.77102 1.08207 6.14599 0.717136 6.44337C0.496478 6.62008 0.263091 6.77093 0.0127297 6.89161L0 7.33984L11.436 7.66309C11.907 7.67602 12.3695 7.61137 12.8278 7.47345C13.2861 7.33553 13.6935 7.11573 14.0584 6.81834C14.2494 6.66318 14.4191 6.49078 14.5719 6.29684C14.7161 6.11582 14.8392 5.91756 14.9495 5.70206C15.1787 5.24952 15.3017 4.71939 15.3187 4.10738C15.3357 3.49537 15.2423 2.95663 15.0386 2.49115C14.941 2.26703 14.8265 2.06016 14.6949 1.87052C14.5549 1.66364 14.3936 1.48262 14.2112 1.31884C13.8632 1.00422 13.4643 0.762861 13.0188 0.594773C12.569 0.426685 12.1107 0.340486 11.6397 0.323246L0.203683 0L0.190952 0.452545C0.43707 0.586153 0.661971 0.749931 0.869899 0.939569C1.21786 1.2542 1.49368 1.6464 1.69736 2.11188Z",
  p2d10940: "M87.6525 41.3748C86.9499 41.3748 86.3145 41.2361 85.7463 40.9588C85.1781 40.6815 84.7338 40.2604 84.4135 39.6956C84.0933 39.1307 83.9331 38.4117 83.9331 37.5387C83.9331 36.2652 84.3826 35.3254 85.2762 34.7144C86.1699 34.1033 87.5388 33.7643 89.3778 33.7027L91.346 33.6308V32.2494C91.346 31.6794 91.2995 31.1762 91.2013 30.7448C91.1032 30.3134 90.9069 29.9796 90.6124 29.7332C90.318 29.4867 89.8737 29.3634 89.2797 29.3634C88.7218 29.3634 88.293 29.4764 87.9986 29.6972C87.7041 29.918 87.5027 30.221 87.3994 30.601C87.296 30.981 87.2444 31.4381 87.2444 31.9619C86.4747 31.9619 85.9013 31.8437 85.519 31.6024C85.1368 31.3662 84.9456 30.9656 84.9456 30.411C84.9456 29.8564 85.1471 29.4045 85.5552 29.0656C85.9633 28.7215 86.5057 28.4801 87.1876 28.3261C87.8694 28.1772 88.6133 28.1001 89.4295 28.1001C90.9482 28.1001 92.0899 28.4083 92.8492 29.0296C93.6086 29.651 93.9908 30.714 93.9908 32.2238V38.3501C93.9908 38.7969 94.0373 39.1409 94.1355 39.3874C94.2336 39.6339 94.3886 39.8085 94.6159 39.9112C94.838 40.0139 95.1273 40.0653 95.4786 40.0653H95.5509V41.1386H91.9762L91.5423 39.2077H91.3512C91.0154 39.6391 90.6899 40.0139 90.3697 40.3426C90.0494 40.6713 89.6826 40.9229 89.2642 41.1077C88.8458 41.2926 88.3137 41.3799 87.6576 41.3799L87.6525 41.3748ZM88.417 39.8239C89.0266 39.8239 89.5431 39.6904 89.9771 39.4285C90.411 39.1666 90.7468 38.7866 90.9844 38.2936C91.222 37.8006 91.346 37.2306 91.346 36.5785V34.6938L89.9306 34.7657C89.0989 34.7965 88.4428 34.93 87.9624 35.1611C87.482 35.3922 87.1411 35.7157 86.9448 36.1265C86.7433 36.5425 86.6451 37.0509 86.6451 37.6517C86.6451 38.1293 86.7071 38.5247 86.8363 38.8431C86.9654 39.1615 87.1617 39.4028 87.4252 39.5723C87.6886 39.7418 88.0192 39.8239 88.4222 39.8239H88.417Z",
  p2dccbc00: "M46.8069 41.3748C45.9287 41.3748 45.1745 41.2772 44.5494 41.0769C43.9244 40.8767 43.4543 40.584 43.134 40.1937C42.8137 39.8034 42.6536 39.3412 42.6536 38.7969C42.6536 38.3655 42.7466 38.0317 42.9274 37.7852C43.1134 37.5387 43.3303 37.3641 43.5886 37.2614C43.8417 37.1587 44.0949 37.1074 44.3325 37.1074C44.3325 37.9804 44.5288 38.7044 44.9214 39.2796C45.314 39.8496 45.9907 40.1372 46.9464 40.1372C47.778 40.1372 48.4083 39.9472 48.8422 39.5672C49.2761 39.1872 49.4879 38.6993 49.4879 38.1139C49.4879 37.7339 49.4001 37.4206 49.2244 37.1741C49.0488 36.9276 48.7492 36.6863 48.3256 36.4449C47.902 36.2087 47.3131 35.9365 46.5641 35.6336C45.7169 35.269 45.0144 34.9146 44.4668 34.5706C43.9141 34.2265 43.5008 33.826 43.2322 33.3535C42.9584 32.8862 42.8241 32.3008 42.8241 31.6024C42.8241 30.4726 43.2528 29.6099 44.1052 29.0142C44.9627 28.4185 46.094 28.1207 47.4991 28.1207C48.3308 28.1207 49.0126 28.2234 49.5499 28.4288C50.0871 28.6342 50.4901 28.9064 50.7638 29.2402C51.0376 29.574 51.1719 29.9386 51.1719 30.3391C51.1719 30.7859 51.017 31.1402 50.7019 31.4124C50.3919 31.6845 49.9218 31.8181 49.2968 31.8181C49.2968 31.0221 49.1211 30.4059 48.7699 29.9694C48.4186 29.5329 47.8917 29.3121 47.1891 29.3121C46.4349 29.3121 45.8874 29.4815 45.5361 29.8153C45.1848 30.1491 45.0092 30.5805 45.0092 31.1043C45.0092 31.6743 45.2313 32.121 45.6807 32.4394C46.1302 32.7578 46.8895 33.1224 47.9588 33.5384C48.8215 33.8722 49.5241 34.2162 50.0716 34.5654C50.614 34.9146 51.017 35.3254 51.2856 35.7928C51.549 36.2601 51.6833 36.8455 51.6833 37.5439C51.6833 38.7815 51.2494 39.7315 50.3764 40.3939C49.5034 41.0513 48.3153 41.3851 46.812 41.3851L46.8069 41.3748Z",
  p2eabcdc0: "M14.8728 18.0251C16.6493 22.0079 17.4755 26.6476 17.3516 31.9033C17.2277 37.1589 16.1122 41.7165 14.1292 45.5761C12.1048 49.4357 9.50207 52.6383 6.32094 55.184C4.42052 56.7032 2.35486 57.9761 0.123935 59.0436L0 62.9032L100.267 65.6953C104.399 65.8185 108.448 65.2436 112.455 64.0529C116.462 62.8622 120.057 60.9734 123.238 58.4277C124.89 57.1138 126.378 55.6357 127.741 53.9522C128.98 52.392 130.096 50.7085 131.046 48.8609C133.07 45.0013 134.144 40.4437 134.268 35.188C134.392 29.9324 133.607 25.2927 131.79 21.3099C130.922 19.3801 129.931 17.6145 128.774 16.0132C127.534 14.2477 126.13 12.6874 124.56 11.2914C121.503 8.58145 118.032 6.48741 114.107 5.09138C110.183 3.6543 106.134 2.87417 102.003 2.79205L1.73515 0L1.61122 3.8596C3.75951 5.00926 5.74255 6.40529 7.56034 8.04767C10.6175 10.7576 13.0137 14.1245 14.8315 18.1073L14.8728 18.0251Z",
  p2fadd500: "M58.5383 41.3748C57.2417 41.3748 56.2602 40.9999 55.5887 40.2553C54.9171 39.5107 54.5813 38.3244 54.5813 36.7017V31.0735C54.5813 30.5959 54.4987 30.2415 54.3282 30.0105C54.1577 29.7794 53.9408 29.6253 53.667 29.5431C53.3932 29.4661 53.0729 29.425 52.7062 29.425H52.6338V28.3518H57.2159V36.4141C57.2159 37.0971 57.283 37.6877 57.4173 38.1807C57.5516 38.6736 57.7944 39.0485 58.1354 39.3155C58.4815 39.5774 58.9464 39.711 59.5404 39.711C60.181 39.711 60.7079 39.5518 61.1212 39.2334C61.5344 38.915 61.8392 38.4682 62.0303 37.8982C62.2215 37.3282 62.3196 36.6658 62.3196 35.9211V31.1043C62.3196 30.6113 62.237 30.2467 62.0665 30.0053C61.896 29.7691 61.6791 29.6099 61.4053 29.538C61.1315 29.4661 60.8216 29.4302 60.4703 29.4302H60.3721V28.3569H64.9542V38.4939C64.9542 38.9561 65.0368 39.295 65.2073 39.521C65.3777 39.7418 65.605 39.8907 65.8892 39.9626C66.1784 40.0345 66.4884 40.0704 66.8242 40.0704H66.9223V41.1437H62.8465L62.4849 39.2847H62.3661C61.8857 40.1115 61.3278 40.6661 60.6872 40.9537C60.0467 41.2413 59.3287 41.3851 58.528 41.3851L58.5383 41.3748Z",
  p30ce0880: "M3.09945 13.7812C3.70384 13.8428 4.32373 14.0687 4.94879 14.4487C5.57385 14.8287 6.0491 15.2755 6.3797 15.7839C6.70515 16.2923 6.91178 16.8264 6.99959 17.381C7.05125 17.7148 7.06158 18.0537 7.03575 18.3875L7.49551 18.6699L14.7947 6.87423C15.0943 6.38638 15.3113 5.86258 15.4456 5.30284C15.5799 4.7431 15.6006 4.18335 15.5179 3.62361C15.4714 3.33604 15.3991 3.0536 15.2855 2.77629C15.1821 2.51953 15.053 2.2679 14.898 2.02655C14.5674 1.51815 14.0922 1.07139 13.4671 0.691378C12.8421 0.311369 12.2273 0.0854176 11.6178 0.0237945C11.3233 -0.00701709 11.0392 -0.00701721 10.7654 0.0186591C10.4658 0.0443354 10.1765 0.105959 9.89758 0.193258C9.35518 0.367857 8.86443 0.640025 8.42017 1.0149C7.97592 1.38464 7.60399 1.81086 7.29921 2.29871L0 14.0893L0.459752 14.3717C0.749034 14.1971 1.05381 14.0533 1.37926 13.9506C1.91649 13.776 2.49506 13.7195 3.09945 13.7812Z",
  p31fc0100: "M106.647 36.2029C105.891 36.2029 105.241 36.1176 104.702 35.9423C104.164 35.7671 103.758 35.511 103.482 35.1695C103.206 34.828 103.068 34.4236 103.068 33.9473C103.068 33.5698 103.149 33.2778 103.304 33.0621C103.465 32.8464 103.652 32.6936 103.874 32.6038C104.092 32.5139 104.31 32.469 104.515 32.469C104.515 33.2328 104.684 33.8664 105.023 34.3696C105.361 34.8684 105.944 35.12 106.768 35.12C107.484 35.12 108.027 34.9538 108.401 34.6213C108.775 34.2888 108.958 33.8619 108.958 33.3497C108.958 33.0171 108.882 32.7431 108.731 32.5274C108.579 32.3117 108.321 32.1005 107.956 31.8893C107.591 31.6826 107.084 31.4445 106.438 31.1794C105.708 30.8603 105.103 30.5503 104.631 30.2492C104.155 29.9482 103.798 29.5977 103.567 29.1843C103.331 28.7754 103.215 28.2632 103.215 27.6521C103.215 26.6635 103.585 25.9087 104.319 25.3874C105.058 24.8662 106.033 24.6056 107.244 24.6056C107.961 24.6056 108.548 24.6955 109.011 24.8752C109.474 25.0549 109.821 25.2931 110.057 25.5851C110.293 25.8772 110.409 26.1962 110.409 26.5467C110.409 26.9376 110.275 27.2477 110.004 27.4858C109.737 27.724 109.332 27.8408 108.793 27.8408C108.793 27.1443 108.642 26.6051 108.339 26.2232C108.036 25.8413 107.582 25.648 106.977 25.648C106.327 25.648 105.855 25.7963 105.552 26.0884C105.25 26.3805 105.098 26.7579 105.098 27.2162C105.098 27.715 105.29 28.1059 105.677 28.3845C106.064 28.6631 106.719 28.9821 107.64 29.3461C108.383 29.6381 108.989 29.9392 109.461 30.2447C109.928 30.5503 110.275 30.9098 110.507 31.3187C110.734 31.7276 110.85 32.2398 110.85 32.8509C110.85 33.9338 110.476 34.7651 109.723 35.3447C108.971 35.9199 107.947 36.2119 106.652 36.2119L106.647 36.2029Z",
  p32d6d380: "M136.407 18.5999C134.583 18.5999 133.173 18.0299 132.171 16.8847C131.169 15.7396 130.673 14.1322 130.673 12.0679C130.673 9.84429 131.153 8.15993 132.114 7.02503C133.075 5.89014 134.423 5.32013 136.169 5.32013C137.771 5.32013 139.026 5.80284 139.945 6.76314C140.865 7.72343 141.325 9.15103 141.325 11.0459V12.1654H133.385C133.416 13.8652 133.726 15.1028 134.31 15.8731C134.893 16.6434 135.751 17.0285 136.887 17.0285C137.719 17.0285 138.416 16.8488 138.985 16.4945C139.553 16.135 139.982 15.7293 140.266 15.2671C140.41 15.3133 140.539 15.416 140.648 15.5752C140.762 15.7344 140.818 15.9244 140.818 16.1453C140.818 16.479 140.663 16.8385 140.348 17.2185C140.033 17.5985 139.558 17.9272 138.907 18.1942C138.261 18.4664 137.424 18.5999 136.402 18.5999H136.407ZM138.566 10.8046C138.566 9.54645 138.38 8.54507 138.013 7.80046C137.647 7.05585 137.022 6.68097 136.143 6.68097C135.327 6.68097 134.687 7.0353 134.227 7.74397C133.762 8.45264 133.499 9.47455 133.437 10.8097H138.571L138.566 10.8046Z",
  p33fa3980: "M7.542 41.3748C5.90962 41.3748 4.53036 41.0102 3.40423 40.2758C2.2781 39.5466 1.43092 38.5247 0.873014 37.2101C0.315113 35.9006 0.0309944 34.36 0.0309944 32.5935C0.0309944 30.827 0.325443 29.3634 0.919504 28.0488C1.5084 26.7393 2.39174 25.7122 3.5592 24.9728C4.72666 24.2333 6.16791 23.8635 7.87777 23.8635C9.01424 23.8635 9.95441 23.9765 10.6983 24.2076C11.4421 24.4387 11.9949 24.7622 12.3513 25.173C12.7129 25.589 12.8885 26.046 12.8885 26.5544C12.8885 27.0936 12.6716 27.5301 12.2428 27.8536C11.8089 28.1772 11.251 28.3415 10.564 28.3415C10.564 27.8331 10.4761 27.3401 10.3005 26.8625C10.1249 26.385 9.83559 25.9895 9.43783 25.6712C9.04007 25.3528 8.4925 25.1936 7.80545 25.1936C6.65349 25.1936 5.72882 25.4812 5.03661 26.0512C4.33923 26.6212 3.83816 27.4634 3.52305 28.5674C3.2131 29.6715 3.05296 31.0118 3.05296 32.5832C3.05296 34.0314 3.22343 35.2895 3.5592 36.3628C3.89498 37.436 4.42705 38.2577 5.15542 38.8328C5.88379 39.4028 6.82396 39.6904 7.97592 39.6904C8.77661 39.6904 9.45333 39.5928 10.0009 39.3926C10.5536 39.1923 11.0185 38.9304 11.406 38.6069C11.7882 38.2834 12.1189 37.9444 12.3875 37.5952C12.5166 37.6928 12.6199 37.816 12.6974 37.9752C12.7749 38.1344 12.8162 38.3244 12.8162 38.5453C12.8162 38.8636 12.7181 39.1872 12.5166 39.5107C12.3151 39.8342 12.0104 40.1372 11.5919 40.4145C11.1735 40.6918 10.6311 40.9177 9.95957 41.0923C9.28802 41.2669 8.48216 41.3542 7.53683 41.3542L7.542 41.3748Z",
  p34123900: "M1.78057 2.20174C1.99424 2.68702 2.09217 3.24869 2.07437 3.88675C2.05656 4.5248 1.92747 5.08198 1.68709 5.54929C1.44671 6.0166 1.13511 6.40752 0.752291 6.71756C0.520817 6.90179 0.275988 7.05906 0.0133538 7.18487L0 7.65218L11.9966 7.98918C12.4907 8.00266 12.9759 7.93526 13.4567 7.79147C13.9374 7.64768 14.3648 7.41852 14.7476 7.10848C14.9479 6.94672 15.126 6.76699 15.2862 6.56479C15.4376 6.37607 15.5667 6.16937 15.6824 5.9447C15.9228 5.4729 16.0519 4.92022 16.0697 4.28216C16.0875 3.64411 15.9895 3.08244 15.7759 2.59716C15.6735 2.3635 15.5533 2.14782 15.4153 1.95011C15.2684 1.73443 15.0993 1.54571 14.9078 1.37497C14.5428 1.04695 14.1244 0.795323 13.657 0.620083C13.1851 0.444842 12.7044 0.354975 12.2103 0.337001L0.213669 0L0.200313 0.471802C0.458496 0.611096 0.694423 0.781843 0.912543 0.979551C1.27756 1.30757 1.5669 1.71646 1.78057 2.20174Z",
  p342fe180: "M19.3536 13.3536C19.5488 13.1583 19.5488 12.8417 19.3536 12.6464L16.1716 9.46447C15.9763 9.2692 15.6597 9.2692 15.4645 9.46447C15.2692 9.65973 15.2692 9.97631 15.4645 10.1716L18.2929 13L15.4645 15.8284C15.2692 16.0237 15.2692 16.3403 15.4645 16.5355C15.6597 16.7308 15.9763 16.7308 16.1716 16.5355L19.3536 13.3536ZM9 13L9 13.5L19 13.5L19 13L19 12.5L9 12.5L9 13Z",
  p34958b00: "M119.416 47.6866C117.64 43.7038 116.813 39.0641 116.937 33.8084C117.061 28.5528 118.177 23.9952 120.16 20.1356C122.184 16.276 124.787 13.0734 127.968 10.5277C129.869 9.00848 131.934 7.73563 134.165 6.66808L134.289 2.80847L34.0215 0.0164218C29.8902 -0.106757 25.8415 0.468083 21.8341 1.65881C17.8267 2.84954 14.2324 4.73829 11.0513 7.28398C9.39878 8.59788 7.91151 10.076 6.54817 11.7595C5.30877 13.3197 4.1933 15.0032 3.24309 16.8508C1.21874 20.7104 0.144597 25.268 0.0206568 30.5237C-0.144597 35.7793 0.681664 40.419 2.49945 44.4018C3.36703 46.3316 4.35857 48.0971 5.51534 49.6985C6.75474 51.464 8.15938 53.0243 9.72929 54.4203C12.7865 57.1303 16.2568 59.2243 20.1816 60.6203C24.1063 62.0574 28.1551 62.8375 32.2864 62.9196L132.554 65.7117L132.678 61.8521C130.53 60.7025 128.546 59.3064 126.729 57.664C123.671 54.9541 121.275 51.5872 119.458 47.6045L119.416 47.6866Z",
  p35d4c00: "M86.7629 16.0682V15.1291H87.1546C87.4439 15.1291 87.7066 15.0932 87.938 15.0258C88.174 14.9584 88.3609 14.8236 88.5078 14.6304C88.6547 14.4371 88.7259 14.1586 88.7259 13.7946V3.54975C88.7259 3.11839 88.6547 2.80385 88.5078 2.61064C88.3609 2.41742 88.174 2.28262 87.938 2.21522C87.7021 2.14782 87.4439 2.11187 87.1546 2.11187H86.7629V1.17276H97.4908L97.5754 4.88877H96.3958L96.2934 3.94966C96.24 3.47785 96.0842 3.08244 95.8304 2.75892C95.5767 2.43989 95.1494 2.27813 94.5573 2.27813H91.1253V7.74654H96.1064V8.82944H91.1253V14.9629H95.0737C95.6924 14.9629 96.1465 14.8011 96.4269 14.4731C96.7074 14.1451 96.8854 13.7541 96.9522 13.2958L97.0991 12.3567H98.2787L98.1318 16.0727H86.7629V16.0682Z",
  p36a36a00: "M22.3505 99.3349C26.7297 99.7866 31.1503 101.388 35.6534 104.139C40.1566 106.89 43.5856 110.092 45.9404 113.747C48.2953 117.401 49.7826 121.261 50.4023 125.243C50.7741 127.666 50.8567 130.088 50.6502 132.511L53.9552 134.523L106.506 49.6118C108.654 46.1217 110.224 42.3442 111.174 38.2793C112.124 34.2555 112.29 30.1906 111.67 26.1668C111.339 24.0727 110.802 22.0608 110.017 20.0489C109.274 18.2012 108.365 16.3946 107.208 14.629C104.853 10.9747 101.424 7.77209 96.9211 4.98004C92.418 2.22905 87.9561 0.62773 83.6182 0.176075C81.5112 -0.029223 79.4456 -0.0702835 77.4625 0.135014C75.3142 0.299252 73.2486 0.750909 71.2242 1.40786C67.3408 2.68071 63.7878 4.65157 60.6067 7.32044C57.3842 9.98931 54.6989 13.0688 52.5506 16.5588L0 101.552L3.30507 103.564C5.37074 102.291 7.60166 101.306 9.91521 100.526C13.7987 99.2528 17.93 98.8422 22.3092 99.2938L22.3505 99.3349Z",
  p374ff400: "M77.5217 16.2794C75.9503 16.2794 74.7351 15.7806 73.8715 14.7786C73.0079 13.7766 72.5806 12.3702 72.5806 10.5639C72.5806 8.61825 72.9946 7.14443 73.8226 6.1514C74.6505 5.15837 75.8124 4.65961 77.3169 4.65961C78.6969 4.65961 79.7786 5.08198 80.5709 5.92224C81.3633 6.76249 81.7595 8.01165 81.7595 9.66969V10.6492H74.9176C74.9443 12.1365 75.2114 13.2194 75.7144 13.8934C76.2174 14.5674 76.9564 14.9044 77.9357 14.9044C78.6524 14.9044 79.2533 14.7472 79.743 14.4371C80.2326 14.1226 80.6021 13.7676 80.8469 13.3632C80.9716 13.4037 81.0828 13.4935 81.1763 13.6328C81.2743 13.7721 81.3232 13.9384 81.3232 14.1316C81.3232 14.4237 81.1897 14.7382 80.9181 15.0707C80.6466 15.4032 80.2371 15.6908 79.6762 15.9244C79.1198 16.1626 78.3986 16.2794 77.5172 16.2794H77.5217ZM79.3824 9.45401C79.3824 8.35314 79.2221 7.47694 78.9061 6.8254C78.59 6.17387 78.0514 5.84585 77.2947 5.84585C76.5913 5.84585 76.0394 6.15589 75.6432 6.77597C75.2426 7.39606 75.0155 8.29023 74.9621 9.4585H79.3868L79.3824 9.45401Z",
  p3a039f00: "M143.216 19.9685C143.919 19.9685 144.525 19.8651 145.037 19.6674C145.544 19.4652 145.98 19.1911 146.341 18.8451C146.697 18.4991 147 18.0812 147.24 17.6049C147.48 17.1242 147.685 16.6074 147.85 16.0503L144.048 6.91077C143.937 6.61871 143.821 6.39853 143.697 6.24126C143.572 6.08849 143.43 5.98065 143.26 5.91774C143.096 5.85484 142.882 5.82338 142.619 5.82338H142.557V4.88427H147.788V5.82338H147.725C147.311 5.82338 147 5.89977 146.795 6.05254C146.59 6.20532 146.483 6.44796 146.483 6.78496C146.483 6.89729 146.497 7.01861 146.523 7.14892C146.55 7.27923 146.59 7.42302 146.648 7.57579L148.095 11.2064C148.233 11.5254 148.362 11.8669 148.478 12.2309C148.593 12.5949 148.705 12.9364 148.807 13.2644C148.909 13.5924 148.976 13.8665 149.003 14.0867C149.101 13.6957 149.216 13.3048 149.354 12.9094C149.492 12.514 149.622 12.1276 149.746 11.7501L151.108 7.72407C151.175 7.5713 151.224 7.40954 151.255 7.2343C151.282 7.05906 151.295 6.91077 151.295 6.78496C151.295 6.45245 151.184 6.20981 150.966 6.05254C150.743 5.89977 150.414 5.82338 149.973 5.82338H149.911V4.88427H154.251V5.82338H154.189C153.926 5.82338 153.708 5.86832 153.525 5.95818C153.347 6.04805 153.187 6.20981 153.049 6.43897C152.911 6.66813 152.769 7.00064 152.613 7.432L149.47 16.1311C149.11 17.1331 148.767 17.9509 148.437 18.5845C148.108 19.2181 147.739 19.7123 147.333 20.0673C146.928 20.4223 146.412 20.6694 145.784 20.8087C145.157 20.948 144.373 21.0154 143.438 21.0154H143.211V19.9729L143.216 19.9685Z",
  p3ac0c780: "M2.0663 2.51628C2.31426 3.07088 2.4279 3.71279 2.40724 4.442C2.38658 5.17121 2.23677 5.80798 1.95782 6.34205C1.67887 6.87611 1.31727 7.32288 0.873011 7.67721C0.604392 7.88776 0.320276 8.06749 0.0154966 8.21128L0 8.74535L13.9217 9.13049C14.4951 9.1459 15.0582 9.06887 15.6161 8.90454C16.174 8.74021 16.6699 8.47831 17.1141 8.12398C17.3466 7.93911 17.5532 7.7337 17.7392 7.50261C17.9148 7.28693 18.0646 7.05071 18.1989 6.79395C18.4779 6.25475 18.6277 5.62311 18.6484 4.8939C18.669 4.16469 18.5554 3.52279 18.3074 2.96818C18.1886 2.70115 18.0491 2.45465 17.889 2.2287C17.7185 1.98221 17.5222 1.76653 17.3001 1.57139C16.8765 1.19652 16.3909 0.908941 15.8485 0.708666C15.301 0.508391 14.7431 0.405685 14.1697 0.385144L0.247956 0L0.232457 0.539202C0.532071 0.698395 0.805857 0.893535 1.05898 1.11949C1.48257 1.49436 1.81834 1.96167 2.0663 2.51628Z",
  p3c642000: "M62.5782 16.0682V15.1291H62.6628C62.9789 15.1291 63.2638 15.0932 63.5086 15.0258C63.7579 14.9584 63.9537 14.8146 64.0962 14.5989C64.2431 14.3832 64.3143 14.0597 64.3143 13.6283V7.24328C64.3143 6.8254 64.2386 6.51536 64.0873 6.31316C63.9359 6.11096 63.7401 5.98065 63.4997 5.91774C63.2593 5.85484 62.9878 5.82338 62.6851 5.82338H62.6228V4.88427H66.0548L66.4688 6.92875H66.5712C66.7492 6.49739 66.954 6.10646 67.181 5.76048C67.408 5.41449 67.6974 5.14489 68.0491 4.95617C68.4007 4.76745 68.8726 4.67309 69.4646 4.67309C70.2347 4.67309 70.8 4.81687 71.1606 5.09995C71.5167 5.38303 71.6992 5.77845 71.6992 6.27721C71.6992 6.77597 71.5301 7.14892 71.1918 7.4365C70.8535 7.71958 70.3193 7.86336 69.5892 7.86336C69.5892 7.29271 69.5136 6.87483 69.3622 6.60972C69.2109 6.34461 68.9349 6.2143 68.5343 6.2143C68.1737 6.2143 67.871 6.35809 67.6128 6.64117C67.3591 6.92425 67.1588 7.29271 67.0119 7.73755C66.865 8.18239 66.7581 8.6497 66.6914 9.13498C66.6201 9.62027 66.589 10.0651 66.589 10.4695V13.7227C66.589 14.1271 66.6646 14.4282 66.816 14.6304C66.9673 14.8326 67.1632 14.9629 67.4036 15.0258C67.644 15.0887 67.9155 15.1201 68.2182 15.1201H68.8191V16.0592H62.5782V16.0682Z",
  p3eb13100: "M10.2414 4.10307C9.74489 4.05135 9.23568 3.86171 8.72222 3.54278C8.20877 3.22384 7.81838 2.84888 7.5468 2.42219C7.27947 1.99551 7.10973 1.54727 7.03759 1.0818C6.99516 0.801652 6.98667 0.517194 7.00789 0.237047L6.63022 0L0.634287 9.89995C0.38817 10.3094 0.209945 10.749 0.0996168 11.2188C-0.0107118 11.6886 -0.0276852 12.1584 0.0402093 12.6282C0.0784 12.8695 0.137806 13.1066 0.231161 13.3393C0.31603 13.5548 0.422115 13.766 0.549417 13.9685C0.820995 14.3952 1.21139 14.7702 1.72484 15.0891C2.2383 15.4081 2.74326 15.5977 3.24398 15.6494C3.48586 15.6753 3.71924 15.6753 3.94414 15.6537C4.19026 15.6322 4.42789 15.5805 4.65704 15.5072C5.1026 15.3607 5.50572 15.1322 5.87065 14.8176C6.23559 14.5073 6.54111 14.1496 6.79147 13.7401L12.7874 3.84017L12.4097 3.60312C12.1721 3.74965 11.9218 3.87034 11.6544 3.95654C11.2131 4.10307 10.7378 4.15048 10.2414 4.09876V4.10307Z",
  p3f0d3630: "M5.30851 2.37047C5.01571 2.78423 4.59986 3.13333 4.06943 3.42641C3.53901 3.71949 3.02555 3.87464 2.52483 3.9005C2.02835 3.92205 1.56158 3.84878 1.1245 3.67639C0.865656 3.57295 0.61954 3.43934 0.390396 3.27987L0 3.49537L5.44429 13.7186C5.6692 14.1409 5.95351 14.5159 6.30147 14.8478C6.64943 15.1796 7.03982 15.4296 7.47689 15.602C7.70179 15.6925 7.93518 15.7529 8.17705 15.7917C8.40195 15.8261 8.63534 15.8391 8.87297 15.8261C9.37369 15.8046 9.88715 15.6451 10.4176 15.352C10.948 15.059 11.3596 14.7099 11.6566 14.2961C11.7967 14.0978 11.9155 13.8953 12.0131 13.6841C12.1192 13.4557 12.1956 13.2229 12.2422 12.9816C12.3398 12.5161 12.3441 12.0463 12.2635 11.5722C12.1828 11.0938 12.0301 10.6456 11.8052 10.2232L6.36087 0L5.97048 0.215497C5.97896 0.499954 5.9535 0.780101 5.8941 1.05594C5.7965 1.52141 5.6013 1.95672 5.30851 2.37047Z",
  p3f18c100: "M56.3996 16.2794C54.8684 16.2794 53.662 15.7986 52.7806 14.8415C51.8992 13.88 51.4586 12.4196 51.4586 10.4605C51.4586 8.50142 51.877 7.05905 52.7183 6.09748C53.5596 5.1359 54.806 4.65961 56.462 4.65961C57.9933 4.65961 59.1952 5.14039 60.081 6.09748C60.9624 7.05905 61.4031 8.51041 61.4031 10.4605C61.4031 12.4106 60.9846 13.8845 60.1433 14.8415C59.302 15.8031 58.0556 16.2794 56.3996 16.2794ZM56.4397 15.1291C57.0852 15.1291 57.606 14.9539 57.9888 14.5989C58.3761 14.2439 58.6521 13.7182 58.8168 13.0217C58.9815 12.3253 59.0661 11.4715 59.0661 10.456C59.0661 8.91032 58.8657 7.75552 58.4651 6.98267C58.0645 6.20981 57.3834 5.82338 56.4175 5.82338C55.4515 5.82338 54.7749 6.20981 54.3831 6.98267C53.9914 7.75552 53.7956 8.91481 53.7956 10.456C53.7956 11.9972 53.9959 13.1475 54.3965 13.9384C54.7971 14.7292 55.4782 15.1291 56.4442 15.1291H56.4397Z",
  p4ae3e00: "M100.179 36.2029C99.1334 36.2029 98.3588 35.9648 97.8558 35.484C97.3528 35.0032 97.1035 34.1585 97.1035 32.9497V26.0659H95.5322V25.1673C95.8349 25.1673 96.1465 25.1044 96.4625 24.9785C96.7786 24.8527 97.0501 24.673 97.2682 24.4348C97.5042 24.1967 97.6956 23.9046 97.8469 23.5497C97.9983 23.1947 98.1229 22.7588 98.2209 22.2466H99.3782V24.8123H102.085V26.0659H99.3782V32.9497C99.3782 33.6327 99.5118 34.1315 99.7833 34.4505C100.05 34.7696 100.429 34.9313 100.91 34.9313C101.159 34.9313 101.39 34.9178 101.613 34.8909C101.831 34.8639 102.054 34.828 102.276 34.7875V35.812C102.085 35.9109 101.791 36.0007 101.399 36.0816C101.007 36.167 100.602 36.2074 100.188 36.2074L100.179 36.2029Z",
  p6b9c500: "M44.0277 18.3637V17.2904H44.2188C44.5701 17.2904 44.8904 17.2493 45.1797 17.1723C45.4689 17.0953 45.7014 16.9309 45.877 16.6845C46.0527 16.438 46.1405 16.0785 46.1405 15.6009V2.89115C46.1405 2.42898 46.0423 2.09005 45.8512 1.8641C45.6601 1.64328 45.4225 1.49436 45.1435 1.42247C44.8646 1.35057 44.5649 1.31463 44.2447 1.31463H44.0277V0.241357H48.775V5.17634C48.775 5.47932 48.7647 5.79771 48.7492 6.1315C48.7337 6.46529 48.7182 6.75287 48.7027 6.98909C48.6872 7.22531 48.6769 7.3691 48.6769 7.42045H48.7957C49.0333 6.97368 49.3226 6.59367 49.6584 6.27529C49.9941 5.9569 50.3816 5.72068 50.8207 5.56149C51.2598 5.40229 51.766 5.32526 52.3446 5.32526C53.7032 5.32526 54.7415 5.695 55.4492 6.43448C56.162 7.17396 56.5185 8.35507 56.5185 9.97781V15.5804C56.5185 16.0734 56.596 16.4431 56.7458 16.6896C56.8956 16.9361 57.1074 17.1004 57.3708 17.1774C57.6343 17.2596 57.9442 17.2956 58.2955 17.2956H58.3678V18.3688H53.884V10.2346C53.884 9.21779 53.7032 8.42183 53.3467 7.85181C52.9851 7.2818 52.3497 6.99422 51.4406 6.99422C50.831 6.99422 50.3299 7.15855 49.927 7.48207C49.5292 7.80559 49.2348 8.2575 49.054 8.82751C48.868 9.39752 48.7802 10.06 48.7802 10.8046V15.6934C48.7802 16.1555 48.8628 16.4996 49.0333 16.7307C49.2038 16.9618 49.4311 17.1107 49.7152 17.1826C50.0045 17.2545 50.3248 17.2904 50.676 17.2904H50.7483V18.3637H44.0329H44.0277Z",
  p7661380: "M96.5272 41.1334V40.0602H96.6977C97.0645 40.0602 97.3951 40.0191 97.6792 39.942C97.9685 39.865 98.1958 39.7007 98.3611 39.4542C98.5315 39.2077 98.6142 38.8482 98.6142 38.3707V31.0272C98.6142 30.5651 98.5315 30.221 98.3611 29.9899C98.1906 29.7588 97.9736 29.6099 97.6998 29.538C97.4261 29.4661 97.1161 29.4302 96.7648 29.4302H96.646V28.3569H100.846L101.156 30.2159H101.275C101.739 29.3891 102.272 28.8293 102.881 28.5366C103.491 28.2439 104.193 28.095 104.994 28.095C106.275 28.095 107.262 28.4647 107.959 29.2042C108.656 29.9437 109.003 31.1248 109.003 32.7475V38.3501C109.003 38.8431 109.075 39.2128 109.219 39.4593C109.364 39.7058 109.566 39.8702 109.829 39.9472C110.092 40.0293 110.402 40.0653 110.754 40.0653H110.873V41.1386H106.363V33.0043C106.363 31.9875 106.187 31.1916 105.836 30.6216C105.485 30.0515 104.854 29.764 103.94 29.764C103.284 29.764 102.757 29.9386 102.359 30.2878C101.962 30.637 101.677 31.1043 101.507 31.6948C101.337 32.2854 101.254 32.9119 101.254 33.5795V38.4682C101.254 38.9304 101.337 39.2745 101.507 39.5055C101.677 39.7366 101.894 39.8856 102.168 39.9575C102.442 40.0293 102.752 40.0653 103.103 40.0653H103.222V41.1386H96.5272V41.1334Z",
  p7685200: "M17.3695 36.2029C15.8382 36.2029 14.6319 35.7221 13.7505 34.7651C12.8691 33.8035 12.4284 32.3431 12.4284 30.384C12.4284 28.4249 12.8468 26.9826 13.6882 26.021C14.5295 25.0594 15.7759 24.5831 17.4318 24.5831C18.9631 24.5831 20.165 25.0639 21.0508 26.021C21.9322 26.9826 22.3729 28.4339 22.3729 30.384C22.3729 32.3342 21.9545 33.808 21.1131 34.7651C20.2718 35.7266 19.0254 36.2029 17.3695 36.2029ZM17.414 35.0526C18.0595 35.0526 18.5803 34.8774 18.9631 34.5224C19.3504 34.1674 19.6264 33.6417 19.7911 32.9453C19.9558 32.2488 20.0404 31.395 20.0404 30.3796C20.0404 28.8338 19.84 27.679 19.4394 26.9062C19.0388 26.1333 18.3577 25.7469 17.3917 25.7469C16.4258 25.7469 15.7492 26.1333 15.3574 26.9062C14.9657 27.679 14.7699 28.8383 14.7699 30.3796C14.7699 31.9208 14.9702 33.0711 15.3708 33.8619C15.7714 34.6527 16.4525 35.0526 17.4185 35.0526H17.414Z",
  p777bd00: "M115.01 18.3637V17.2904H115.181C115.548 17.2904 115.878 17.2493 116.162 17.1723C116.452 17.0953 116.679 16.9309 116.844 16.6845C117.015 16.438 117.097 16.0785 117.097 15.6009V8.2575C117.097 7.79532 117.015 7.45126 116.844 7.22017C116.674 6.98909 116.457 6.84017 116.183 6.76827C115.909 6.69638 115.599 6.66043 115.248 6.66043H115.129V5.58716H119.329L119.639 7.44613H119.758C120.223 6.61935 120.755 6.05961 121.364 5.7669C121.974 5.47419 122.676 5.32526 123.477 5.32526C124.758 5.32526 125.745 5.695 126.442 6.43448C127.139 7.17396 127.486 8.35507 127.486 9.97781V15.5804C127.486 16.0734 127.558 16.4431 127.703 16.6896C127.847 16.9361 128.049 17.1004 128.312 17.1774C128.576 17.2596 128.886 17.2956 129.237 17.2956H129.356V18.3688H124.846V10.2346C124.846 9.21779 124.67 8.42183 124.319 7.85181C123.968 7.2818 123.337 6.99422 122.423 6.99422C121.767 6.99422 121.24 7.16882 120.842 7.51802C120.445 7.86722 120.161 8.33453 119.99 8.92508C119.82 9.51564 119.737 10.1421 119.737 10.8097V15.6985C119.737 16.1607 119.82 16.5047 119.99 16.7358C120.161 16.9669 120.378 17.1158 120.651 17.1877C120.925 17.2596 121.235 17.2956 121.586 17.2956H121.705V18.3688H115.01V18.3637Z",
  p8551e72: "M6.46236 2.82439C6.10592 3.31738 5.59968 3.73333 4.95396 4.08253C4.30824 4.43173 3.68318 4.6166 3.07362 4.64741C2.46923 4.67309 1.901 4.58579 1.36892 4.38038C1.05381 4.25713 0.754203 4.09794 0.475252 3.90793L0 4.16469L6.62766 16.3455C6.90144 16.8488 7.24755 17.2956 7.67114 17.691C8.09473 18.0864 8.56998 18.3842 9.10205 18.5896C9.37584 18.6975 9.65996 18.7694 9.9544 18.8156C10.2282 18.8567 10.5123 18.8721 10.8016 18.8567C11.4111 18.831 12.0362 18.641 12.6819 18.2918C13.3276 17.9426 13.8287 17.5266 14.1903 17.0337C14.3608 16.7974 14.5054 16.5561 14.6242 16.3044C14.7534 16.0323 14.8464 15.755 14.9032 15.4674C15.022 14.9128 15.0272 14.353 14.929 13.7882C14.8309 13.2182 14.6449 12.6841 14.3711 12.1808L7.74346 0L7.26821 0.256763C7.27854 0.59569 7.24755 0.929482 7.17523 1.25814C7.05642 1.81275 6.81879 2.33141 6.46236 2.82439Z",
  p86d8c70: "M20.1568 41.3748C18.3797 41.3748 16.9798 40.8253 15.957 39.7315C14.9342 38.6326 14.4228 36.9636 14.4228 34.7246C14.4228 32.4856 14.9084 30.8372 15.8847 29.7383C16.861 28.6393 18.3074 28.095 20.2291 28.095C22.0061 28.095 23.4009 28.6445 24.4288 29.7383C25.4517 30.8372 25.9631 32.4959 25.9631 34.7246C25.9631 36.9533 25.4775 38.6377 24.5012 39.7315C23.5248 40.8304 22.0784 41.3748 20.1568 41.3748ZM20.2084 40.0602C20.9575 40.0602 21.5619 39.8599 22.0061 39.4542C22.4555 39.0485 22.7758 38.4477 22.9669 37.6517C23.1581 36.8558 23.2562 35.8801 23.2562 34.7195C23.2562 32.953 23.0238 31.6332 22.5588 30.7499C22.0939 29.8667 21.3036 29.425 20.1826 29.425C19.0616 29.425 18.2764 29.8667 17.8218 30.7499C17.3673 31.6332 17.14 32.9581 17.14 34.7195C17.14 36.4809 17.3724 37.7955 17.8373 38.6993C18.3023 39.6031 19.0926 40.0602 20.2136 40.0602H20.2084Z",
  p88c6900: "M33.0385 16.2794C32.2818 16.2794 31.6319 16.194 31.0933 16.0188C30.5546 15.8436 30.1496 15.5874 29.8736 15.2459C29.5976 14.9044 29.4596 14.5 29.4596 14.0238C29.4596 13.6463 29.5397 13.3542 29.6955 13.1386C29.8558 12.9229 30.0427 12.7701 30.2653 12.6802C30.4834 12.5904 30.7015 12.5454 30.9063 12.5454C30.9063 13.3093 31.0755 13.9429 31.4138 14.4461C31.7521 14.9449 32.3352 15.1965 33.1587 15.1965C33.8754 15.1965 34.4185 15.0303 34.7924 14.6978C35.1663 14.3652 35.3488 13.9384 35.3488 13.4261C35.3488 13.0936 35.2732 12.8195 35.1218 12.6038C34.9705 12.3882 34.7123 12.177 34.3473 11.9658C33.9822 11.7591 33.4748 11.521 32.8293 11.2558C32.0993 10.9368 31.4939 10.6268 31.022 10.3257C30.5457 10.0247 30.1896 9.67419 29.9581 9.2608C29.7222 8.8519 29.6065 8.33966 29.6065 7.72856C29.6065 6.74003 29.9759 5.98514 30.7104 5.46391C31.4494 4.94269 32.4242 4.68207 33.635 4.68207C34.3517 4.68207 34.9393 4.77194 35.4022 4.95167C35.8652 5.13141 36.2124 5.36956 36.4483 5.66162C36.6843 5.95369 36.8 6.27272 36.8 6.6232C36.8 7.01412 36.6665 7.32416 36.3949 7.56231C36.1278 7.80046 35.7227 7.91729 35.1841 7.91729C35.1841 7.22082 35.0328 6.68161 34.7301 6.29968C34.4274 5.91774 33.9733 5.72453 33.3679 5.72453C32.718 5.72453 32.2462 5.87281 31.9435 6.16488C31.6408 6.45695 31.4894 6.83439 31.4894 7.29271C31.4894 7.79147 31.6808 8.18239 32.0681 8.46098C32.4554 8.73957 33.1098 9.0586 34.0312 9.42256C34.7746 9.71463 35.38 10.0157 35.8518 10.3212C36.3192 10.6268 36.6664 10.9862 36.8979 11.3951C37.1249 11.804 37.2407 12.3163 37.2407 12.9274C37.2407 14.0103 36.8668 14.8415 36.1145 15.4212C35.3622 15.9963 34.3383 16.2884 33.043 16.2884L33.0385 16.2794Z",
  p9342f00: "M7.35524 14.0334C7.66239 13.602 8.09863 13.238 8.65506 12.9325C9.21148 12.627 9.75011 12.4652 10.2754 12.4382C10.7962 12.4158 11.2859 12.4922 11.7443 12.6719C12.0159 12.7797 12.2741 12.919 12.5144 13.0853L12.924 12.8606L7.21279 2.20237C6.97687 1.76203 6.67862 1.37111 6.3136 1.02512C5.94858 0.679131 5.53905 0.418516 5.08056 0.238782C4.84463 0.144422 4.5998 0.0815138 4.34607 0.0410736C4.11014 0.00512677 3.86531 -0.00835239 3.61603 0.00512766C3.09076 0.0275944 2.55214 0.193848 1.99571 0.499396C1.43928 0.804944 1.00749 1.16891 0.695894 1.60027C0.548997 1.80696 0.424357 2.01815 0.321974 2.23832C0.210688 2.47647 0.130562 2.71911 0.0815967 2.97074C-0.0207862 3.45602 -0.0252376 3.9458 0.0593396 4.44007C0.143917 4.93883 0.304168 5.40613 0.540094 5.84648L6.25128 16.5047L6.66081 16.28C6.65191 15.9835 6.67862 15.6914 6.74094 15.4038C6.84332 14.9186 7.04809 14.4647 7.35524 14.0334Z",
  pa7ce080: "M14.436 16.0682V15.1291H14.7476C15.0369 15.1291 15.304 15.0932 15.5533 15.0258C15.8026 14.9584 16.0029 14.8191 16.1543 14.6079C16.3056 14.4012 16.3813 14.0867 16.3813 13.6688V5.98964H14.5206V4.88427H16.3813V3.9227C16.3813 2.66905 16.7107 1.70298 17.3739 1.02448C18.0372 0.341494 18.9809 0 20.2051 0C20.9618 0 21.5627 0.0673997 22.0034 0.197707C22.4441 0.328014 22.7557 0.507748 22.9338 0.727922C23.1118 0.95259 23.2009 1.19972 23.2009 1.47831C23.2009 1.72994 23.1296 1.94562 22.9961 2.13434C22.8581 2.32306 22.6533 2.46685 22.3774 2.57469C22.1014 2.67804 21.7631 2.73196 21.3624 2.73196C21.3624 2.46685 21.3224 2.20174 21.2467 1.94113C21.171 1.67602 21.0419 1.45585 20.8639 1.2851C20.6858 1.10986 20.4276 1.02448 20.0982 1.02448C19.5596 1.02448 19.1857 1.24466 18.972 1.68051C18.7583 2.12086 18.6515 2.78138 18.6515 3.67107V4.87978H21.5449V5.98514H18.6515V13.6643C18.6515 14.0822 18.7272 14.3967 18.8785 14.6034C19.0299 14.8101 19.2346 14.9494 19.4884 15.0213C19.7421 15.0932 20.0092 15.1246 20.2852 15.1246H21.1309V16.0637H14.4315L14.436 16.0682Z",
  pb10ac40: "M7.7073 18.5999C5.98194 18.5999 4.54586 18.2353 3.39907 17.501C2.25744 16.7718 1.40509 15.7447 0.842021 14.4249C0.28412 13.1052 1.183e-06 11.5646 1.183e-06 9.79807C1.183e-06 8.03154 0.278954 6.50124 0.842021 5.19688C1.39992 3.89253 2.25744 2.88088 3.4094 2.15681C4.56136 1.43274 6.00261 1.07327 7.72797 1.07327C9.45333 1.07327 10.7706 1.43274 11.9122 2.15681C13.0539 2.88088 13.9217 3.89766 14.5158 5.20715C15.1047 6.51664 15.4043 8.05722 15.4043 9.82375C15.4043 11.5903 15.1098 13.1257 14.5158 14.4403C13.9217 15.7498 13.0539 16.7718 11.9122 17.5061C10.7706 18.2353 9.36551 18.605 7.70214 18.605L7.7073 18.5999ZM7.7073 17.2442C8.85926 17.2442 9.7736 16.9515 10.4555 16.3609C11.1374 15.7755 11.6229 14.9282 11.9174 13.819C12.2118 12.7149 12.3616 11.3849 12.3616 9.82375C12.3616 8.26263 12.2118 6.9326 11.9174 5.82852C11.6229 4.72444 11.1322 3.88226 10.4555 3.30197C9.7736 2.72169 8.8696 2.43411 7.73313 2.43411C6.02327 2.43411 4.81448 3.08116 4.11194 4.37524C3.4094 5.66933 3.05812 7.48721 3.05812 9.82375C3.05812 12.1603 3.4094 13.9833 4.11194 15.2825C4.81448 16.5869 6.01294 17.2391 7.71247 17.2391L7.7073 17.2442Z",
  pb378770: "M89.6865 35.1881C85.3073 34.7364 80.8867 33.1351 76.3836 30.3841C71.8804 27.6331 68.4514 24.4305 66.0966 20.7762C63.7417 17.1219 62.2544 13.2623 61.6347 9.27953C61.2629 6.85701 61.1803 4.4345 61.3868 2.01198L58.0818 5.9306e-05L5.53118 84.9112C3.38288 88.4013 1.81299 92.1788 0.862782 96.2437C-0.0874254 100.267 -0.25269 104.332 0.36701 108.356C0.697517 110.45 1.2346 112.462 2.01955 114.474C2.76319 116.322 3.67209 118.128 4.82886 119.894C7.18372 123.548 10.6127 126.751 15.1159 129.543C19.619 132.335 24.0809 133.895 28.4188 134.347C30.5258 134.552 32.5914 134.593 34.5745 134.388C36.7228 134.224 38.7884 133.772 40.8128 133.115C44.6962 131.842 48.2492 129.871 51.4303 127.203C54.6528 124.534 57.3381 121.454 59.4864 117.964L112.037 33.053L108.732 31.0411C106.666 32.3139 104.435 33.2994 102.122 34.0795C98.2383 35.3523 94.107 35.7629 89.7278 35.3113L89.6865 35.1881Z",
  pb3a500: "M10.3536 4.03553C10.5488 3.84027 10.5488 3.52369 10.3536 3.32843L7.17157 0.146447C6.97631 -0.0488155 6.65973 -0.0488155 6.46447 0.146447C6.2692 0.341709 6.2692 0.658291 6.46447 0.853554L9.29289 3.68198L6.46447 6.51041C6.2692 6.70567 6.2692 7.02225 6.46447 7.21751C6.65973 7.41278 6.97631 7.41278 7.17157 7.21751L10.3536 4.03553ZM0 3.68198V4.18198H10V3.68198V3.18198H0V3.68198Z",
  pc66e200: "M13.6233 5.55284C13.4196 5.08736 13.3263 4.54862 13.3432 3.9366C13.3602 3.32459 13.4833 2.79016 13.7124 2.34192C13.9416 1.89369 14.2386 1.51872 14.6035 1.22134C14.8242 1.04463 15.0576 0.893779 15.3079 0.7731L15.3207 0.324865L3.88468 0.00161871C3.41366 -0.0113111 2.95113 0.0533392 2.49284 0.191258C2.03455 0.329176 1.62718 0.548985 1.26225 0.846372C1.0713 1.00153 0.901561 1.17393 0.748798 1.36788C0.604522 1.54889 0.481463 1.74715 0.371135 1.96265C0.141991 2.41519 0.0189321 2.94531 0.0019585 3.55733C-0.0150151 4.16934 0.0783398 4.70808 0.282023 5.17356C0.379622 5.39768 0.494193 5.60455 0.625739 5.79419C0.765771 6.00107 0.92702 6.18209 1.10949 6.34586C1.45745 6.66049 1.85633 6.90185 2.30189 7.06994C2.75169 7.23802 3.20998 7.32423 3.68099 7.34147L15.117 7.66471L15.1297 7.21217C14.8836 7.07856 14.6587 6.91478 14.4508 6.72514C14.1028 6.41052 13.827 6.01831 13.6233 5.55284Z",
  pcc93380: "M75.0868 36.2029C74.4814 36.2029 73.9338 36.0816 73.4442 35.839C72.9545 35.5963 72.5717 35.2279 72.2957 34.7336C72.0197 34.2393 71.8817 33.6103 71.8817 32.8464C71.8817 31.732 72.269 30.9098 73.0391 30.3751C73.8092 29.8403 74.9888 29.5438 76.5735 29.4899L78.2695 29.427V28.2182C78.2695 27.7195 78.2295 27.2791 78.1449 26.9017C78.0603 26.5243 77.8912 26.2322 77.6374 26.0165C77.3837 25.8008 77.0009 25.693 76.489 25.693C76.0082 25.693 75.6387 25.7918 75.385 25.985C75.1313 26.1783 74.9577 26.4434 74.8687 26.7759C74.7796 27.1084 74.7351 27.5083 74.7351 27.9666C74.0718 27.9666 73.5777 27.8633 73.2483 27.6521C72.9189 27.4454 72.7542 27.0949 72.7542 26.6096C72.7542 26.1243 72.9278 25.7289 73.2795 25.4324C73.6311 25.1313 74.0986 24.9201 74.6861 24.7853C75.2737 24.655 75.9147 24.5876 76.6181 24.5876C77.9268 24.5876 78.9105 24.8572 79.5649 25.4009C80.2193 25.9446 80.5487 26.8747 80.5487 28.1958V33.5563C80.5487 33.9473 80.5887 34.2483 80.6733 34.464C80.7579 34.6797 80.8914 34.8325 81.0873 34.9223C81.2787 35.0122 81.528 35.0571 81.8307 35.0571H81.893V35.9962H78.8126L78.4387 34.3067H78.274C77.9847 34.6842 77.7042 35.0122 77.4282 35.2998C77.1522 35.5873 76.8362 35.8075 76.4756 35.9693C76.115 36.131 75.6566 36.2074 75.0912 36.2074L75.0868 36.2029ZM75.7456 34.8459C76.2708 34.8459 76.716 34.7291 77.0899 34.5C77.4638 34.2708 77.7532 33.9383 77.9579 33.5069C78.1627 33.0756 78.2695 32.5768 78.2695 32.0061V30.3571L77.0499 30.42C76.3332 30.4469 75.7678 30.5638 75.3539 30.766C74.9399 30.9682 74.6461 31.2513 74.4769 31.6107C74.3033 31.9747 74.2187 32.4195 74.2187 32.9453C74.2187 33.3631 74.2721 33.7091 74.3834 33.9877C74.4947 34.2663 74.6639 34.4775 74.8909 34.6258C75.1179 34.774 75.4028 34.8459 75.75 34.8459H75.7456Z",
  pd025e00: "M99.1067 16.0682V15.1291H99.2536C99.5696 15.1291 99.8545 15.0932 100.099 15.0258C100.349 14.9584 100.545 14.8146 100.687 14.5989C100.834 14.3832 100.905 14.0687 100.905 13.6508V7.22531C100.905 6.82091 100.834 6.51985 100.687 6.31765C100.54 6.11545 100.353 5.98514 100.117 5.92224C99.8812 5.85933 99.6142 5.82788 99.3115 5.82788H99.2091V4.88877H102.828L103.095 6.51536H103.198C103.598 5.79193 104.057 5.30215 104.582 5.04603C105.107 4.78991 105.713 4.65961 106.403 4.65961C107.507 4.65961 108.357 4.98313 108.958 5.63017C109.559 6.27721 109.857 7.31068 109.857 8.73058V13.6328C109.857 14.0642 109.919 14.3877 110.044 14.6034C110.169 14.8191 110.342 14.9629 110.569 15.0303C110.796 15.1022 111.063 15.1336 111.366 15.1336H111.468V16.0727H107.582V8.95525C107.582 8.06557 107.431 7.3691 107.128 6.87033C106.825 6.37157 106.282 6.11995 105.494 6.11995C104.929 6.11995 104.475 6.27272 104.132 6.57827C103.79 6.88381 103.545 7.29271 103.398 7.80944C103.251 8.32618 103.18 8.87437 103.18 9.4585V13.7362C103.18 14.1406 103.251 14.4416 103.398 14.6438C103.545 14.846 103.732 14.9763 103.968 15.0392C104.204 15.1022 104.471 15.1336 104.773 15.1336H104.876V16.0727H99.1067V16.0682Z",
  pdcfc900: "M124.283 41.3748C123.405 41.3748 122.65 41.2772 122.025 41.0769C121.4 40.8767 120.93 40.584 120.61 40.1937C120.29 39.8034 120.13 39.3412 120.13 38.7969C120.13 38.3655 120.223 38.0317 120.403 37.7852C120.589 37.5387 120.806 37.3641 121.065 37.2614C121.318 37.1587 121.571 37.1074 121.808 37.1074C121.808 37.9804 122.005 38.7044 122.397 39.2796C122.79 39.8496 123.467 40.1372 124.422 40.1372C125.254 40.1372 125.884 39.9472 126.318 39.5672C126.752 39.1872 126.964 38.6993 126.964 38.1139C126.964 37.7339 126.876 37.4206 126.7 37.1741C126.525 36.9276 126.225 36.6863 125.802 36.4449C125.378 36.2087 124.789 35.9365 124.04 35.6336C123.193 35.269 122.49 34.9146 121.943 34.5706C121.39 34.2265 120.977 33.826 120.708 33.3535C120.434 32.8862 120.3 32.3008 120.3 31.6024C120.3 30.4726 120.729 29.6099 121.581 29.0142C122.439 28.4185 123.57 28.1207 124.975 28.1207C125.807 28.1207 126.489 28.2234 127.026 28.4288C127.563 28.6342 127.966 28.9064 128.24 29.2402C128.514 29.574 128.648 29.9386 128.648 30.3391C128.648 30.7859 128.493 31.1402 128.178 31.4124C127.868 31.6845 127.398 31.8181 126.773 31.8181C126.773 31.0221 126.597 30.4059 126.246 29.9694C125.895 29.5329 125.368 29.3121 124.665 29.3121C123.911 29.3121 123.363 29.4815 123.012 29.8153C122.661 30.1491 122.485 30.5805 122.485 31.1043C122.485 31.6743 122.707 32.121 123.157 32.4394C123.606 32.7578 124.365 33.1224 125.435 33.5384C126.297 33.8722 127 34.2162 127.548 34.5654C128.09 34.9146 128.493 35.3254 128.762 35.7928C129.025 36.2601 129.159 36.8455 129.159 37.5439C129.159 38.7815 128.725 39.7315 127.852 40.3939C126.979 41.0513 125.791 41.3851 124.288 41.3851L124.283 41.3748Z",
  pf16bc00: "M57.9488 35.9917V35.0526H58.2158C58.5185 35.0526 58.7945 35.0167 59.0438 34.9358C59.2931 34.8594 59.4889 34.7156 59.6314 34.4955C59.7783 34.2798 59.8495 33.9652 59.8495 33.5474V22.4488C59.8495 22.0444 59.7649 21.7478 59.6002 21.5501C59.4355 21.3569 59.2308 21.2266 58.9904 21.1637C58.75 21.1008 58.4918 21.0693 58.2158 21.0693H57.9488V20.1302H62.1242V33.5474C62.1242 33.9652 62.1954 34.2798 62.3423 34.4955C62.4892 34.7111 62.6851 34.8594 62.9433 34.9358C63.197 35.0122 63.4685 35.0526 63.7579 35.0526H64.025V35.9917H57.9488Z",
  pf82ba00: "M82.7343 35.9917V35.0526H82.8812C83.1973 35.0526 83.4822 35.0167 83.727 34.9493C83.9763 34.8819 84.1721 34.7381 84.3146 34.5224C84.4615 34.3067 84.5327 33.9922 84.5327 33.5743V27.1488C84.5327 26.7444 84.4615 26.4434 84.3146 26.2412C84.1677 26.039 83.9807 25.9087 83.7448 25.8458C83.5089 25.7829 83.2418 25.7514 82.9391 25.7514H82.8367V24.8123H86.4557L86.7228 26.4389H86.8252C87.2258 25.7154 87.6843 25.2257 88.2096 24.9696C88.7348 24.7134 89.3403 24.5831 90.0302 24.5831C91.1342 24.5831 91.9844 24.9066 92.5853 25.5537C93.1863 26.2007 93.4845 27.2342 93.4845 28.6541V33.5564C93.4845 33.9877 93.5469 34.3112 93.6715 34.5269C93.7961 34.7426 93.9697 34.8864 94.1968 34.9538C94.4238 35.0257 94.6909 35.0571 94.9936 35.0571H95.0959V35.9962H91.2099V28.8788C91.2099 27.9891 91.0585 27.2926 90.7558 26.7939C90.4531 26.2951 89.91 26.0435 89.1221 26.0435C88.5568 26.0435 88.1028 26.1962 87.76 26.5018C87.4172 26.8073 87.1724 27.2162 87.0255 27.733C86.8786 28.2497 86.8074 28.7979 86.8074 29.382V33.6597C86.8074 34.0641 86.8786 34.3652 87.0255 34.5674C87.1724 34.7696 87.3594 34.8999 87.5953 34.9628C87.8312 35.0257 88.0983 35.0571 88.401 35.0571H88.5034V35.9962H82.7343V35.9917Z",
  pfc0d200: "M67.7643 41.1334V40.0602H68.0743C68.4255 40.0602 68.7458 40.0191 69.0351 39.9266C69.3244 39.8393 69.5517 39.675 69.717 39.4234C69.8875 39.1769 69.9701 38.8174 69.9701 38.3398V25.6558C69.9701 25.1936 69.872 24.8547 69.6808 24.6287C69.4897 24.4079 69.2521 24.259 68.9731 24.1871C68.6942 24.1152 68.3946 24.0792 68.0743 24.0792H67.7643V23.006H72.6098V38.3398C72.6098 38.8174 72.6925 39.1769 72.8629 39.4234C73.0334 39.6699 73.2607 39.8393 73.5603 39.9266C73.8547 40.0139 74.1699 40.0602 74.5056 40.0602H74.8156V41.1334H67.7643Z",
  pfd7c580: "M122.855 16.0682V15.1291H122.94C123.256 15.1291 123.541 15.0932 123.785 15.0258C124.035 14.9584 124.231 14.8146 124.373 14.5989C124.52 14.3832 124.591 14.0597 124.591 13.6283V7.24328C124.591 6.8254 124.515 6.51536 124.364 6.31316C124.213 6.11096 124.017 5.98065 123.777 5.91774C123.536 5.85484 123.265 5.82338 122.962 5.82338H122.9V4.88427H126.332L126.746 6.92875H126.848C127.026 6.49739 127.231 6.10646 127.458 5.76048C127.685 5.41449 127.974 5.14489 128.326 4.95617C128.678 4.76745 129.149 4.67309 129.741 4.67309C130.512 4.67309 131.077 4.81687 131.437 5.09995C131.794 5.38303 131.976 5.77845 131.976 6.27721C131.976 6.77597 131.807 7.14892 131.469 7.4365C131.13 7.71958 130.596 7.86336 129.866 7.86336C129.866 7.29271 129.79 6.87483 129.639 6.60972C129.488 6.34461 129.212 6.2143 128.811 6.2143C128.451 6.2143 128.148 6.35809 127.89 6.64117C127.636 6.92425 127.436 7.29271 127.289 7.73755C127.142 8.18239 127.035 8.6497 126.968 9.13498C126.897 9.62027 126.866 10.0651 126.866 10.4695V13.7227C126.866 14.1271 126.941 14.4282 127.093 14.6304C127.244 14.8326 127.44 14.9629 127.68 15.0258C127.921 15.0887 128.192 15.1201 128.495 15.1201H129.096V16.0592H122.855V16.0682Z"
};

// src/imports/BrandStrengths/svg-wgo26ydiex.ts
var svg_wgo26ydiex_default = {
  p101ba180: "M50.3041 31.9878L42.175 30.9298L41.5736 30.851L41.2838 30.3202C40.2175 28.368 39.3458 26.3314 38.5036 24.3617C38.0744 23.3581 37.6368 22.3349 37.1706 21.3166L35.6814 24.6951C34.8062 26.6794 34.0032 28.4712 33.023 30.3181L32.7416 30.8489L32.1458 30.9375L25.746 31.8853H25.7425L22.4666 32.3603C23.0281 32.8757 23.6008 33.38 24.1896 33.8989C24.5481 34.2142 24.9177 34.5399 25.2853 34.8684L29.5798 38.7135L30.0986 39.1773L29.946 39.8546C29.1577 43.3545 28.4981 46.5377 27.9093 49.6923L28.3021 49.4699L35.6884 44.9844L36.4627 44.4613L37.0991 44.0317L37.7538 44.4327L41.1374 46.5042L41.1444 46.5084L41.1507 46.5126L45.2395 49.0918C45.5622 49.2948 45.892 49.4894 46.2399 49.6812L46.1202 49.0374L44.8971 42.7386L44.8957 42.7323V42.726L44.3664 39.8427L44.253 39.2269L44.7004 38.7868L49.6131 33.9463L49.6306 33.9289L49.6488 33.9129L51.5056 32.2292L50.3041 31.9878ZM46.1825 35.0825L44.5491 36.6713L44.5442 36.6762L44.5393 36.6811L42.509 38.611C42.873 40.1391 43.1846 41.7914 43.5011 43.8608L43.8924 46.4219L41.6905 45.043L41.0653 44.6518L37.09 42.1904C35.442 43.1459 34.0221 44.0512 32.6625 45.0109L29.9222 46.7546L30.5817 43.9885C30.9017 42.7944 31.0781 41.7566 31.2832 40.8073L31.7523 38.6424L27.9794 35.1013L26.2465 33.4755L28.592 33.0703L30.8926 32.6728L30.9283 32.6665L30.9633 32.663L33.9115 32.3331L34.571 30.8628L36.0273 27.5778L37.0627 25.2413L38.1857 27.5373L39.105 29.417L39.1127 29.4323L39.1197 29.4477L40.4401 32.3519L45.5167 33.0599L47.9181 33.3953L46.1832 35.0825H46.1825Z",
  p1046b800: "M102.817 40.3397C97.7963 39.8219 92.7286 37.9862 87.5662 34.8324C82.4038 31.6787 78.4728 28.0072 75.7731 23.8179C73.0735 19.6286 71.3685 15.2039 70.6581 10.6381C70.2318 7.86089 70.1371 5.08371 70.3739 2.30654L66.585 6.27665e-05L6.34086 97.3424C3.87805 101.343 2.07832 105.674 0.988996 110.334C-0.100323 114.947 -0.289783 119.607 0.420642 124.22C0.799536 126.62 1.41525 128.927 2.31512 131.233C3.16763 133.351 4.20959 135.423 5.53572 137.447C8.23533 141.636 12.1663 145.307 17.3288 148.508C22.4912 151.709 27.6063 153.498 32.5792 154.016C34.9947 154.251 37.3628 154.298 39.6361 154.063C42.0989 153.874 44.467 153.357 46.7878 152.603C51.2398 151.144 55.3129 148.885 58.9597 145.825C62.6539 142.766 65.7324 139.235 68.1952 135.234L128.439 37.892L124.65 35.5856C122.282 37.0448 119.725 38.1744 117.073 39.0688C112.621 40.528 107.884 40.9987 102.864 40.4809L102.817 40.3397Z",
  p10799380: "M100.686 18.3637V17.2904H101.14C101.476 17.2904 101.781 17.2493 102.049 17.1723C102.323 17.0953 102.54 16.9412 102.711 16.7204C102.881 16.4996 102.964 16.1812 102.964 15.7652V4.05685C102.964 3.56387 102.881 3.2044 102.711 2.98359C102.54 2.76277 102.323 2.60871 102.049 2.53168C101.776 2.45465 101.476 2.41357 101.14 2.41357H100.686V1.3403H113.135L113.233 5.58716H111.864L111.746 4.51389C111.684 3.97469 111.503 3.52279 111.208 3.15305C110.914 2.78845 110.418 2.60358 109.731 2.60358H105.748V8.85319H111.529V10.0908H105.748V17.1004H110.33C111.048 17.1004 111.575 16.9155 111.901 16.5407C112.226 16.1658 112.433 15.719 112.51 15.1952L112.681 14.122H114.049L113.879 18.3688H100.686V18.3637Z",
  p11164580: "M60.5931 32.0626C60.5931 32.2066 60.5615 32.3257 60.4934 32.3903L52.7861 39.6651C52.4774 39.9554 52.1005 39.9331 51.9571 39.8065C51.8404 39.6998 51.7674 39.5335 51.765 39.3598C51.765 39.263 51.782 39.0818 51.9303 38.9428L59.6983 31.6208C59.7786 31.5464 59.9147 31.5116 60.0509 31.5116C60.2016 31.5116 60.3524 31.5514 60.435 31.6208C60.508 31.6854 60.5882 31.8666 60.5931 32.0626Z",
  p127d8f00: "M142.57 18.3637V17.2904H142.668C143.034 17.2904 143.365 17.2493 143.649 17.1723C143.938 17.0953 144.166 16.9309 144.331 16.6845C144.502 16.438 144.584 16.0682 144.584 15.5752V8.27804C144.584 7.80046 144.496 7.44613 144.321 7.21504C144.145 6.98395 143.918 6.83503 143.639 6.76314C143.36 6.69124 143.045 6.6553 142.694 6.6553H142.621V5.58203H146.604L147.084 7.91857H147.203C147.41 7.42558 147.647 6.97882 147.911 6.5834C148.174 6.18799 148.51 5.87987 148.918 5.66419C149.326 5.44851 149.874 5.34067 150.561 5.34067C151.455 5.34067 152.111 5.505 152.529 5.82852C152.942 6.15204 153.154 6.60394 153.154 7.17396C153.154 7.74397 152.958 8.1702 152.565 8.49885C152.173 8.82238 151.553 8.9867 150.706 8.9867C150.706 8.33453 150.618 7.85695 150.442 7.55397C150.267 7.25099 149.946 7.10206 149.481 7.10206C149.063 7.10206 148.712 7.26639 148.412 7.58991C148.118 7.91343 147.885 8.33453 147.715 8.84292C147.544 9.35131 147.42 9.88537 147.343 10.44C147.26 10.9946 147.224 11.503 147.224 11.9652V15.6831C147.224 16.1453 147.312 16.4893 147.487 16.7204C147.663 16.9515 147.89 17.1004 148.169 17.1723C148.448 17.2442 148.763 17.2801 149.115 17.2801H149.812V18.3534H142.57V18.3637Z",
  p12a71400: "M5.56874 2.47134C5.26159 2.9027 4.82535 3.26667 4.26893 3.57221C3.7125 3.87776 3.17387 4.03952 2.6486 4.06648C2.12779 4.08895 1.63813 4.01256 1.17963 3.83283C0.908093 3.72499 0.649912 3.58569 0.409534 3.41944L0 3.64411L5.71119 14.3023C5.94711 14.7427 6.24536 15.1336 6.61038 15.4796C6.9754 15.8256 7.38493 16.0862 7.84342 16.2659C8.07935 16.3603 8.32418 16.4232 8.57791 16.4636C8.81384 16.4996 9.05867 16.5131 9.30795 16.4996C9.83322 16.4771 10.3718 16.3109 10.9283 16.0053C11.4847 15.6998 11.9165 15.3358 12.2281 14.9044C12.375 14.6978 12.4996 14.4866 12.602 14.2664C12.7133 14.0282 12.7934 13.7856 12.8424 13.534C12.9448 13.0487 12.9492 12.5589 12.8646 12.0646C12.7801 11.5659 12.6198 11.0986 12.3839 10.6582L6.6727 0L6.26317 0.224668C6.27207 0.521229 6.24536 0.813297 6.18304 1.10087C6.08066 1.58615 5.87589 2.03998 5.56874 2.47134Z",
  p13256900: "M37.0821 86.2822V87.6235C37.5101 87.6351 37.9382 87.6468 38.3606 87.6526C37.6566 87.6177 37.0933 87.0138 37.0821 86.2822ZM42.0047 87.7164C44.787 87.7571 47.5187 87.7513 50.2616 87.6932C47.5187 87.7513 44.787 87.7513 42.0047 87.7164ZM55.0547 87.5306C55.2969 87.5248 55.5447 87.5132 55.7925 87.5016L56.1417 86.7525C55.9389 87.188 55.5221 87.49 55.0547 87.5306Z",
  p1358080: "M116.772 41.3748C115.558 41.3748 114.659 41.1026 114.075 40.5531C113.492 40.0037 113.202 39.0382 113.202 37.6569V29.7896H111.379V28.7626C111.73 28.7626 112.092 28.6907 112.458 28.5469C112.825 28.4031 113.14 28.1977 113.393 27.9255C113.667 27.6534 113.889 27.3196 114.065 26.9139C114.241 26.5082 114.385 26.0101 114.499 25.4247H115.842V28.3569H118.983V29.7896H115.842V37.6569C115.842 38.4374 115.997 39.0074 116.312 39.372C116.622 39.7366 117.061 39.9215 117.619 39.9215C117.908 39.9215 118.177 39.9061 118.435 39.8753C118.688 39.8445 118.947 39.8034 119.205 39.7572V40.928C118.983 41.041 118.642 41.1437 118.187 41.2361C117.733 41.3337 117.263 41.3799 116.782 41.3799L116.772 41.3748Z",
  p14a86400: "M50.4436 36.2029C49.3263 36.2029 48.4806 35.8749 47.9019 35.2234C47.3232 34.5718 47.0338 33.5339 47.0338 32.114V27.1893C47.0338 26.7714 46.9626 26.4613 46.8157 26.2591C46.6688 26.0569 46.4819 25.9221 46.2459 25.8503C46.01 25.7829 45.734 25.7469 45.418 25.7469H45.3556V24.8078H49.3041V31.8624C49.3041 32.46 49.3619 32.9767 49.4777 33.4081C49.5934 33.8394 49.8026 34.1674 50.0964 34.4011C50.3947 34.6303 50.7953 34.7471 51.3072 34.7471C51.8592 34.7471 52.3132 34.6078 52.6693 34.3292C53.0255 34.0506 53.2881 33.6597 53.4528 33.1609C53.6175 32.6622 53.7021 32.0825 53.7021 31.431V27.2162C53.7021 26.7849 53.6309 26.4658 53.484 26.2547C53.3371 26.048 53.1501 25.9087 52.9142 25.8458C52.6783 25.7828 52.4112 25.7514 52.1085 25.7514H52.0239V24.8123H55.9723V33.6822C55.9723 34.0866 56.0435 34.3831 56.1904 34.5808C56.3373 34.774 56.5332 34.9044 56.778 34.9673C57.0273 35.0302 57.2944 35.0616 57.5837 35.0616H57.6683V36.0007H54.1561L53.8445 34.3741H53.7421C53.3282 35.0976 52.8474 35.5829 52.2954 35.8345C51.7434 36.0861 51.1247 36.2119 50.4347 36.2119L50.4436 36.2029Z",
  p14ceaa00: "M10.7434 4.27767C10.2226 4.22375 9.68843 4.02604 9.14981 3.69353C8.61119 3.36103 8.20166 2.9701 7.91677 2.52526C7.63633 2.08042 7.45827 1.61311 7.38259 1.12783C7.33808 0.835764 7.32917 0.539202 7.35143 0.247134L6.95525 0L0.665382 10.3212C0.407199 10.7481 0.220238 11.2064 0.1045 11.6962C-0.011237 12.186 -0.0290424 12.6757 0.0421805 13.1655C0.0822434 13.4171 0.144562 13.6643 0.242494 13.9069C0.331522 14.1316 0.442808 14.3518 0.576351 14.563C0.861243 15.0078 1.27078 15.3987 1.8094 15.7312C2.34802 16.0637 2.87774 16.2614 3.40301 16.3154C3.65674 16.3423 3.90157 16.3423 4.1375 16.3199C4.39568 16.2974 4.64496 16.2435 4.88534 16.1671C5.35274 16.0143 5.77562 15.7762 6.15845 15.4481C6.54127 15.1246 6.86177 14.7517 7.12441 14.3248L13.4143 4.00358L13.0181 3.75644C12.7688 3.90921 12.5062 4.03503 12.2257 4.1249C11.7628 4.27767 11.2642 4.3271 10.7434 4.27318V4.27767Z",
  p15444590: "M80.4049 41.3748C79.191 41.3748 78.2921 41.1026 77.7084 40.5531C77.1247 40.0037 76.8354 39.0382 76.8354 37.6569V29.7896H75.0119V28.7626C75.3632 28.7626 75.7248 28.6907 76.0915 28.5469C76.4583 28.4031 76.7734 28.1977 77.0265 27.9255C77.3003 27.6534 77.5224 27.3196 77.6981 26.9139C77.8737 26.5082 78.0184 26.0101 78.132 25.4247H79.4751V28.3569H82.6159V29.7896H79.4751V37.6569C79.4751 38.4374 79.6301 39.0074 79.9452 39.372C80.2551 39.7366 80.6942 39.9215 81.2521 39.9215C81.5414 39.9215 81.81 39.9061 82.0683 39.8753C82.3214 39.8445 82.5797 39.8034 82.838 39.7572V40.928C82.6159 41.041 82.2749 41.1437 81.8203 41.2361C81.3657 41.3337 80.8957 41.3799 80.4153 41.3799L80.4049 41.3748Z",
  p15495200: "M46.1726 1.24817C46.0599 1.21333 45.9473 1.20171 45.8346 1.20171H46.0092C46.0656 1.21333 46.1219 1.23075 46.1726 1.24817Z",
  p16571400: "M43.8735 7.7943L41.0368 0.323919C40.9701 0.207511 40.5803 0 40.411 0C40.2828 0.0253062 39.9442 0.263184 39.8827 0.379592L36.9896 8.16377C36.3945 9.73275 37.3846 11.3726 38.6157 12.1217C39.9596 12.9264 41.596 12.8201 42.7809 11.8585C43.7607 11.074 44.5198 9.4645 43.8786 7.7943H43.8735ZM41.9499 11.0335C41.4267 11.3574 40.7547 11.403 40.3956 11.403C40.0366 11.403 39.7083 11.3574 39.4467 11.2663C38.9183 11.0639 38.5131 10.6387 38.2566 10.0212C38.1181 9.6872 37.8257 8.81667 38.1694 8.04736L40.5546 2.77862L42.7604 7.99675C43.1041 8.76605 42.9194 10.4211 41.955 11.0335H41.9499Z",
  p167ab480: "M72.5092 52.3943L61.729 43.2022C61.4586 42.9699 61.284 42.6389 61.2446 42.2847C61.2446 42.2383 61.239 42.186 61.239 42.1338L61.1376 18.4713C61.1263 16.2879 59.3353 14.3601 57.2907 14.3311L51.0558 14.2381C51.0558 14.2381 51.0276 14.2381 51.0164 14.2381L49.7266 14.2207V12.8503L49.7153 3.5305C49.7153 1.61428 47.913 0 46.0938 0H26.9271C25.1191 0 23.2999 1.64331 23.2999 3.51889V12.8561C23.2943 13.6168 22.7085 14.2323 21.9763 14.2498H21.9538L16.299 14.2904C13.9841 14.3078 11.9114 15.8524 11.9002 18.5119L11.7932 42.1686V42.2034C11.7763 42.6041 11.596 42.9757 11.2975 43.2312L0.494809 52.4349C0.0104332 52.8472 -0.136006 53.5382 0.134343 54.1189L16.13 88.2045C16.3553 88.6864 16.8341 88.9884 17.3522 88.9884L55.832 88.8316C56.3501 88.8316 56.8176 88.5239 57.0429 88.0419L72.8696 54.0724C73.1343 53.4917 72.9879 52.8007 72.5092 52.3943ZM24.5897 3.65825C24.6066 3.5305 24.6348 3.40856 24.6742 3.28662C24.7193 3.12984 24.7812 2.97305 24.8657 2.82208C24.8995 2.7524 24.9389 2.68852 24.984 2.62465C25.0065 2.584 25.0347 2.54335 25.0628 2.50271C25.0966 2.45625 25.1304 2.41561 25.1642 2.37496C25.1924 2.33431 25.2262 2.29366 25.2656 2.25302C25.3163 2.19495 25.367 2.14269 25.4177 2.09043C25.5303 1.97429 25.6598 1.86977 25.7894 1.77106C25.857 1.7246 25.9189 1.67815 25.9865 1.6375C26.0541 1.59105 26.1217 1.5504 26.1949 1.51556C26.2625 1.47491 26.3301 1.44007 26.4033 1.41104C26.4709 1.3762 26.5385 1.35297 26.6061 1.32394C26.6286 1.31232 26.6455 1.30652 26.6624 1.30652C26.7187 1.28329 26.7807 1.26587 26.8426 1.24845C26.8989 1.23103 26.9553 1.21361 27.0116 1.202H46.0093C46.0656 1.21361 46.1219 1.23103 46.1726 1.24845C46.1782 1.24264 46.1839 1.24845 46.1839 1.24845C46.2571 1.27168 46.3303 1.2949 46.3979 1.32394C46.4486 1.34136 46.5049 1.36459 46.5556 1.38781C46.6514 1.42265 46.7415 1.46911 46.826 1.52137C46.8935 1.55621 46.9611 1.59686 47.0287 1.64331C47.1076 1.68976 47.1864 1.74202 47.254 1.80009C47.3047 1.84074 47.3554 1.87558 47.4005 1.91623C47.4737 1.9801 47.5413 2.03817 47.6032 2.10785C47.6483 2.1485 47.6933 2.19495 47.7328 2.2414C47.851 2.36915 47.9524 2.50271 48.0369 2.64207C48.082 2.70594 48.1157 2.76401 48.1495 2.82789C48.234 2.98467 48.3016 3.14145 48.3467 3.30404C48.3636 3.3563 48.3748 3.40275 48.3861 3.44921C48.4199 3.59438 48.4368 3.74535 48.4368 3.89052L48.3805 12.9432V14.3311L26.0034 14.3194C25.2599 14.3194 24.6573 13.7039 24.6517 12.9432L24.5784 3.90213C24.5784 3.82084 24.5841 3.73954 24.5897 3.65825ZM16.3272 15.5969H56.6881C58.5411 15.533 59.9886 17.1647 59.983 19.081L59.9041 38.6671C59.8985 39.8285 58.5974 40.4672 57.7188 39.753L37.9101 23.076C36.9413 22.2573 35.4375 22.7973 34.6377 23.4709L15.3415 39.7356C14.4798 40.4672 13.1843 39.8575 13.1393 38.7194V38.702C13.1393 38.702 13.1336 38.6729 13.1336 38.6613L13.0886 18.5584C13.0886 16.9325 14.8121 15.4982 16.3272 15.5969ZM35.9444 87.6354H34.6095L18.1633 87.6238H17.3184L16.9692 86.8805L4.49936 60.3031C4.24591 59.734 4.38672 59.0662 4.84856 58.6598L33.7084 34.103C34.5926 33.3714 35.905 34.0159 35.905 35.1889L35.9444 86.265V87.6354ZM68.499 60.2856L56.1418 86.7528L55.7925 87.5019C55.5447 87.5135 55.2969 87.5251 55.0547 87.5309C55.0322 87.5309 55.004 87.5425 54.9815 87.5425C54.8182 87.5425 54.6605 87.5541 54.5028 87.5599C54.1367 87.5774 53.7706 87.5948 53.4045 87.6064C53.3256 87.6064 53.2411 87.6122 53.1566 87.6122C52.6272 87.6354 52.1034 87.6528 51.574 87.6586C51.1347 87.6761 50.6953 87.6877 50.2616 87.6935C47.5187 87.7516 44.7871 87.7574 42.0047 87.7167C40.7994 87.7051 39.5885 87.6819 38.3606 87.6528C37.9382 87.647 37.5102 87.6354 37.0821 87.6238V86.2825L37.1215 35.2005C37.1215 34.0217 38.4451 33.3772 39.3238 34.1262L68.1836 58.6423C68.6285 59.0546 68.7637 59.7282 68.499 60.2856ZM71.3883 53.4801C71.3207 53.7066 71.2532 53.9273 71.1799 54.1421C71.1124 54.3395 71.0448 54.537 70.9715 54.7344C70.8702 55.0073 70.7632 55.2744 70.6449 55.559C70.5322 55.8203 70.4083 56.0932 70.2675 56.3835L70.2506 56.4183C69.8676 57.2197 68.8651 57.4461 68.1892 56.8945L68.1723 56.8829L37.375 30.6306C36.8793 30.2009 36.1528 30.2009 35.6571 30.6306L4.8373 56.9003C4.16142 57.481 3.13072 57.2429 2.75899 56.4183L1.81276 54.3511C1.54805 53.7763 1.70012 53.0853 2.17886 52.6846L35.6515 24.3825L36.5076 23.6567L37.3412 24.3651L70.7575 52.5743L71.2475 52.9866C71.3827 53.1085 71.4447 53.3059 71.3883 53.4801Z",
  p169c08c0: "M136.561 21.0558C135.088 21.0558 133.979 20.7952 133.231 20.274C132.488 19.7528 132.114 19.0114 132.114 18.0498C132.114 17.5331 132.234 17.0927 132.475 16.7243C132.715 16.3558 133.035 16.0682 133.436 15.857C133.837 15.6503 134.277 15.511 134.758 15.4392C134.455 15.3133 134.171 15.1066 133.912 14.8236C133.65 14.5405 133.521 14.1675 133.521 13.7092C133.521 13.2779 133.641 12.9049 133.881 12.5949C134.122 12.2803 134.5 11.9793 135.007 11.6872C134.389 11.4491 133.904 11.0492 133.561 10.4785C133.218 9.90784 133.044 9.2563 133.044 8.5149C133.044 7.31967 133.378 6.37606 134.046 5.68858C134.714 5.0011 135.724 4.65511 137.073 4.65511C137.58 4.65511 138.057 4.72251 138.488 4.85282C138.925 4.98313 139.25 5.14039 139.472 5.32013C139.69 5.0685 139.975 4.81687 140.318 4.56075C140.661 4.30463 141.07 4.17432 141.538 4.17432C141.965 4.17432 142.281 4.28666 142.49 4.50683C142.695 4.7315 142.802 4.99211 142.802 5.29766C142.802 5.60321 142.713 5.85034 142.535 6.0795C142.357 6.30867 142.054 6.42549 141.627 6.42549C141.627 6.23228 141.573 6.05704 141.471 5.90426C141.369 5.75149 141.191 5.6751 140.946 5.6751C140.768 5.6751 140.612 5.69757 140.483 5.73801C140.354 5.77845 140.225 5.83686 140.1 5.90426C140.349 6.19633 140.554 6.54232 140.719 6.94672C140.883 7.35112 140.968 7.84988 140.968 8.4475C140.968 9.48996 140.652 10.3572 140.015 11.0447C139.383 11.7321 138.404 12.0781 137.082 12.0781C136.917 12.0781 136.721 12.0691 136.503 12.0467C136.281 12.0242 136.103 12.0017 135.965 11.9748C135.729 12.1006 135.519 12.2624 135.332 12.4646C135.145 12.6668 135.052 12.9184 135.052 13.2284C135.052 13.4801 135.132 13.6688 135.288 13.7901C135.448 13.9159 135.773 13.9788 136.272 13.9788H138.626C139.895 13.9788 140.803 14.2709 141.355 14.855C141.907 15.4392 142.183 16.1895 142.183 17.1107C142.183 18.3194 141.729 19.281 140.821 19.9909C139.913 20.7009 138.493 21.0558 136.561 21.0558ZM136.601 19.9685C137.554 19.9685 138.293 19.8651 138.822 19.6674C139.352 19.4652 139.73 19.1821 139.949 18.8226C140.167 18.4587 140.278 18.0453 140.278 17.569C140.278 16.9983 140.109 16.6074 139.771 16.3917C139.432 16.1761 138.938 16.0682 138.293 16.0682H136.165C135.804 16.0682 135.462 16.1177 135.132 16.2165C134.803 16.3154 134.531 16.4996 134.318 16.7692C134.104 17.0388 133.997 17.4387 133.997 17.9689C133.997 18.3464 134.082 18.6834 134.246 18.9934C134.411 19.2989 134.683 19.5371 135.061 19.7123C135.439 19.8876 135.951 19.9729 136.601 19.9729V19.9685ZM137.015 11.0177C137.456 11.0177 137.803 10.9233 138.061 10.7346C138.315 10.5459 138.497 10.2628 138.609 9.88088C138.72 9.49895 138.773 9.02265 138.773 8.45199C138.773 7.88134 138.72 7.35112 138.609 6.95121C138.497 6.54681 138.31 6.24576 138.052 6.04356C137.79 5.84136 137.438 5.7425 136.997 5.7425C136.557 5.7425 136.227 5.84585 135.965 6.05704C135.702 6.26373 135.515 6.57377 135.395 6.97368C135.279 7.37808 135.221 7.87684 135.221 8.47446C135.221 9.3237 135.359 9.96176 135.635 10.3841C135.911 10.811 136.374 11.0222 137.02 11.0222L137.015 11.0177Z",
  p16b8d480: "M89.9616 18.5999C88.1381 18.5999 86.7278 18.0299 85.7256 16.8847C84.7235 15.7396 84.2276 14.1322 84.2276 12.0679C84.2276 9.84429 84.708 8.15993 85.6688 7.02503C86.6297 5.89014 87.9779 5.32013 89.7239 5.32013C91.3253 5.32013 92.5806 5.80284 93.5001 6.76314C94.4196 7.72343 94.8794 9.15103 94.8794 11.0459V12.1654H86.9396C86.9706 13.8652 87.2805 15.1028 87.8643 15.8731C88.448 16.6434 89.3055 17.0285 90.442 17.0285C91.2737 17.0285 91.971 16.8488 92.5393 16.4945C93.1075 16.135 93.5363 15.7293 93.8204 15.2671C93.965 15.3133 94.0942 15.416 94.2026 15.5752C94.3163 15.7344 94.3731 15.9244 94.3731 16.1453C94.3731 16.479 94.2181 16.8385 93.903 17.2185C93.5879 17.5985 93.1127 17.9272 92.4618 18.1942C91.8161 18.4664 90.9792 18.5999 89.9564 18.5999H89.9616ZM92.1208 10.8046C92.1208 9.54645 91.9349 8.54507 91.5681 7.80046C91.2013 7.05585 90.5763 6.68097 89.6981 6.68097C88.8819 6.68097 88.2414 7.0353 87.7816 7.74397C87.3167 8.45264 87.0532 9.47455 86.9913 10.8097H92.126L92.1208 10.8046Z",
  p17b24d70: "M27.2597 41.1334V40.0602H27.4301C27.7969 40.0602 28.1275 40.0191 28.4116 39.942C28.7009 39.865 28.9282 39.7007 29.0935 39.4542C29.264 39.2077 29.3466 38.8482 29.3466 38.3707V31.0272C29.3466 30.5651 29.264 30.221 29.0935 29.9899C28.923 29.7588 28.7061 29.6099 28.4323 29.538C28.1585 29.4661 27.8486 29.4302 27.4973 29.4302H27.3785V28.3569H31.5782L31.8882 30.2159H32.007C32.4719 29.3891 33.004 28.8293 33.6136 28.5366C34.2231 28.2439 34.9256 28.095 35.7263 28.095C37.0074 28.095 37.9941 28.4647 38.6915 29.2042C39.3889 29.9437 39.735 31.1248 39.735 32.7475V38.3501C39.735 38.8431 39.8073 39.2128 39.9519 39.4593C40.0966 39.7058 40.298 39.8702 40.5615 39.9472C40.8249 40.0293 41.1349 40.0653 41.4862 40.0653H41.605V41.1386H37.0953V33.0043C37.0953 31.9875 36.9196 31.1916 36.5684 30.6216C36.2171 30.0515 35.5869 29.764 34.6725 29.764C34.0165 29.764 33.4896 29.9386 33.0918 30.2878C32.694 30.637 32.4099 31.1043 32.2395 31.6948C32.069 32.2854 31.9863 32.9119 31.9863 33.5795V38.4682C31.9863 38.9304 32.069 39.2745 32.2395 39.5055C32.4099 39.7366 32.6269 39.8856 32.9007 39.9575C33.1745 40.0293 33.4844 40.0653 33.8357 40.0653H33.9545V41.1386H27.2597V41.1334Z",
  p17cdf600: "M21.772 16.0682V15.1291H22.0836C22.3729 15.1291 22.64 15.0932 22.8893 15.0258C23.1385 14.9584 23.3389 14.8191 23.4902 14.6079C23.6416 14.4012 23.7172 14.0867 23.7172 13.6688V5.98964H21.8565V4.88427H23.7172V3.9227C23.7172 2.66905 24.0466 1.70298 24.7099 1.02448C25.3732 0.341494 26.3169 0 27.541 0C28.2978 0 28.8987 0.0673997 29.3394 0.197707C29.7801 0.328014 30.0917 0.507748 30.2697 0.727922C30.4478 0.95259 30.5368 1.19972 30.5368 1.47831C30.5368 1.72994 30.4656 1.94562 30.3321 2.13434C30.1941 2.32306 29.9893 2.46685 29.7133 2.57469C29.4373 2.67804 29.099 2.73196 28.6984 2.73196C28.6984 2.46685 28.6583 2.20174 28.5827 1.94113C28.507 1.67602 28.3779 1.45585 28.1998 1.2851C28.0218 1.10986 27.7636 1.02448 27.4342 1.02448C26.8956 1.02448 26.5216 1.24466 26.308 1.68051C26.0943 2.12086 25.9875 2.78138 25.9875 3.67107V4.87978H28.8809V5.98514H25.9875V13.6643C25.9875 14.0822 26.0631 14.3967 26.2145 14.6034C26.3658 14.8101 26.5706 14.9494 26.8243 15.0213C27.0781 15.0932 27.3452 15.1246 27.6211 15.1246H28.4669V16.0637H21.7675L21.772 16.0682Z",
  p1803a9f0: "M68.8414 36.2029C67.7953 36.2029 67.0208 35.9648 66.5178 35.484C66.0147 35.0032 65.7655 34.1585 65.7655 32.9497V26.0659H64.1941V25.1673C64.4968 25.1673 64.8084 25.1044 65.1245 24.9785C65.4405 24.8527 65.712 24.673 65.9302 24.4348C66.1661 24.1967 66.3575 23.9046 66.5088 23.5497C66.6602 23.1947 66.7848 22.7588 66.8828 22.2466H68.0401V24.8123H70.7466V26.0659H68.0401V32.9497C68.0401 33.6327 68.1737 34.1315 68.4452 34.4505C68.7123 34.7696 69.0907 34.9313 69.5714 34.9313C69.8207 34.9313 70.0522 34.9178 70.2748 34.8909C70.4929 34.8639 70.7155 34.828 70.938 34.7875V35.812C70.7466 35.9109 70.4528 36.0007 70.0611 36.0816C69.6694 36.167 69.2643 36.2074 68.8503 36.2074L68.8414 36.2029Z",
  p185c4240: "M72.6201 18.3637V17.2904H72.7183C73.0851 17.2904 73.4157 17.2493 73.6998 17.1723C73.9891 17.0953 74.2164 16.9309 74.3817 16.6845C74.5521 16.438 74.6348 16.0682 74.6348 15.5752V8.27804C74.6348 7.80046 74.547 7.44613 74.3713 7.21504C74.1957 6.98395 73.9684 6.83503 73.6894 6.76314C73.4105 6.69124 73.0954 6.6553 72.7441 6.6553H72.6718V5.58203H76.6546L77.135 7.91857H77.2538C77.4604 7.42558 77.6981 6.97882 77.9615 6.5834C78.225 6.18799 78.5608 5.87987 78.9688 5.66419C79.3769 5.44851 79.9245 5.34067 80.6116 5.34067C81.5052 5.34067 82.1613 5.505 82.5797 5.82852C82.993 6.15204 83.2048 6.60394 83.2048 7.17396C83.2048 7.74397 83.0085 8.1702 82.6159 8.49885C82.2233 8.82238 81.6034 8.9867 80.7562 8.9867C80.7562 8.33453 80.6684 7.85695 80.4927 7.55397C80.3171 7.25099 79.9968 7.10206 79.5319 7.10206C79.1135 7.10206 78.7622 7.26639 78.4626 7.58991C78.1681 7.91343 77.9357 8.33453 77.7652 8.84292C77.5947 9.35131 77.4708 9.88537 77.3933 10.44C77.3106 10.9946 77.2745 11.503 77.2745 11.9652V15.6831C77.2745 16.1453 77.3623 16.4893 77.5379 16.7204C77.7136 16.9515 77.9409 17.1004 78.2198 17.1723C78.4988 17.2442 78.8139 17.2801 79.1651 17.2801H79.8625V18.3534H72.6201V18.3637Z",
  p18627c80: "M2.67086 12.0585C3.19168 12.1124 3.72585 12.3101 4.26447 12.6426C4.8031 12.9752 5.21263 13.3661 5.49752 13.8109C5.77796 14.2558 5.95602 14.7231 6.03169 15.2083C6.07621 15.5004 6.08511 15.797 6.06285 16.089L6.45903 16.3362L12.7489 6.01495C13.0071 5.58808 13.194 5.12976 13.3098 4.63999C13.4255 4.15021 13.4433 3.66044 13.3721 3.17066C13.332 2.91903 13.2697 2.6719 13.1718 2.42926C13.0828 2.20459 12.9715 1.98441 12.8379 1.77323C12.553 1.32839 12.1435 0.937464 11.6049 0.604956C11.0663 0.272448 10.5365 0.0747404 10.0113 0.0208202C9.75754 -0.00613995 9.51271 -0.00614006 9.27679 0.0163267C9.0186 0.0387935 8.76932 0.0927137 8.52894 0.169101C8.06154 0.321875 7.63866 0.560022 7.25583 0.888037C6.87301 1.21156 6.55251 1.58451 6.28987 2.01138L0 12.3281L0.396177 12.5752C0.645458 12.4225 0.908092 12.2967 1.18853 12.2068C1.65148 12.054 2.15004 12.0046 2.67086 12.0585Z",
  p191f2880: "M136.899 54.668C134.863 50.1021 133.915 44.7831 134.057 38.7581C134.199 32.733 135.478 27.5082 137.752 23.0835C140.072 18.6589 143.056 14.9874 146.703 12.069C148.882 10.3274 151.25 8.86815 153.807 7.64431L153.949 3.21965L39.0024 0.01884C34.2663 -0.122372 29.6248 0.536625 25.0307 1.90168C20.4366 3.26673 16.3162 5.432 12.6693 8.35038C10.7749 9.85665 9.06985 11.5512 7.50691 13.4811C6.08606 15.2698 4.80728 17.1997 3.71796 19.3178C1.39723 23.7425 0.165835 28.9674 0.0237499 34.9924C-0.165697 41.0175 0.78153 46.3365 2.86545 50.9023C3.86004 53.1147 4.99674 55.1387 6.32287 56.9744C7.74372 58.9985 9.354 60.7872 11.1537 62.3876C14.6585 65.4942 18.6369 67.8949 23.1363 69.4953C27.6356 71.1427 32.2771 72.0371 37.0133 72.1312L151.96 75.332L152.102 70.9074C149.639 69.5894 147.366 67.989 145.282 66.1062C141.777 62.9995 139.03 59.1397 136.946 54.5739L136.899 54.668Z",
  p1922d800: "M16.5844 6.61614C16.3365 6.06154 16.2228 5.41963 16.2435 4.69042C16.2642 3.96122 16.414 3.32444 16.6929 2.79037C16.9719 2.25631 17.3335 1.80954 17.7777 1.45521C18.0464 1.24466 18.3305 1.06493 18.6352 0.921141L18.6507 0.387073L4.72905 0.00192868C4.15565 -0.0134771 3.59258 0.063553 3.03468 0.227881C2.47678 0.39221 1.98087 0.65411 1.53661 1.00844C1.30415 1.19331 1.09752 1.39872 0.911556 1.62981C0.73592 1.84549 0.586113 2.08171 0.451804 2.33847C0.172853 2.87768 0.0230472 3.50931 0.00238419 4.23852C-0.0182788 4.96772 0.0953676 5.60963 0.343324 6.16424C0.462136 6.43127 0.60161 6.67777 0.761748 6.90372C0.932218 7.15021 1.12852 7.36589 1.35064 7.56103C1.77424 7.9359 2.25982 8.22348 2.80222 8.42375C3.34979 8.62403 3.90769 8.72674 4.48109 8.74728L18.4028 9.13242L18.4183 8.59322C18.1187 8.43403 17.8449 8.23889 17.5918 8.01294C17.1682 7.63806 16.8324 7.17075 16.5844 6.61614Z",
  p1945f200: "M40.3344 36.2029C39.5777 36.2029 38.9278 36.1176 38.3892 35.9423C37.8505 35.7671 37.4454 35.511 37.1695 35.1695C36.8935 34.828 36.7555 34.4236 36.7555 33.9473C36.7555 33.5698 36.8356 33.2778 36.9914 33.0621C37.1517 32.8464 37.3386 32.6936 37.5612 32.6038C37.7793 32.5139 37.9974 32.469 38.2022 32.469C38.2022 33.2328 38.3713 33.8664 38.7097 34.3696C39.048 34.8684 39.6311 35.12 40.4546 35.12C41.1713 35.12 41.7144 34.9538 42.0883 34.6213C42.4622 34.2888 42.6447 33.8619 42.6447 33.3497C42.6447 33.0171 42.5691 32.7431 42.4177 32.5274C42.2664 32.3117 42.0082 32.1005 41.6431 31.8893C41.2781 31.6826 40.7707 31.4445 40.1252 31.1794C39.3952 30.8603 38.7898 30.5503 38.3179 30.2492C37.8416 29.9482 37.4855 29.5977 37.254 29.1843C37.0181 28.7754 36.9024 28.2632 36.9024 27.6521C36.9024 26.6635 37.2718 25.9087 38.0063 25.3874C38.7453 24.8662 39.7201 24.6056 40.9309 24.6056C41.6476 24.6056 42.2352 24.6955 42.6981 24.8752C43.1611 25.0549 43.5083 25.2931 43.7442 25.5851C43.9802 25.8772 44.0959 26.1962 44.0959 26.5467C44.0959 26.9376 43.9623 27.2477 43.6908 27.4858C43.4237 27.724 43.0186 27.8408 42.48 27.8408C42.48 27.1443 42.3287 26.6051 42.026 26.2232C41.7233 25.8413 41.2692 25.648 40.6638 25.648C40.0139 25.648 39.5421 25.7963 39.2394 26.0884C38.9367 26.3805 38.7853 26.7579 38.7853 27.2162C38.7853 27.715 38.9767 28.1059 39.364 28.3845C39.7513 28.6631 40.4056 28.9821 41.3271 29.3461C42.0705 29.6381 42.6759 29.9392 43.1477 30.2447C43.6151 30.5503 43.9623 30.9098 44.1938 31.3187C44.4208 31.7276 44.5366 32.2398 44.5366 32.8509C44.5366 33.9338 44.1627 34.7651 43.4104 35.3447C42.6581 35.9199 41.6343 36.2119 40.3389 36.2119L40.3344 36.2029Z",
  p195f200: "M9.20349 3.72819C9.06589 3.41567 9.00282 3.05396 9.01428 2.64305C9.02575 2.23214 9.10889 1.87332 9.26369 1.57237C9.41849 1.27143 9.61916 1.01968 9.8657 0.820009C10.0148 0.701366 10.1724 0.600086 10.3416 0.519062L10.3502 0.218115L2.62437 0.00108681C2.30616 -0.00759434 1.99369 0.0358121 1.68409 0.128411C1.37448 0.22101 1.09928 0.368591 0.852738 0.568257C0.723735 0.672431 0.609067 0.788179 0.505865 0.918396C0.408397 1.03993 0.325262 1.17304 0.250727 1.31773C0.0959245 1.62157 0.01279 1.97749 0.0013231 2.3884C-0.0101438 2.79931 0.052924 3.16102 0.190526 3.47354C0.256461 3.62402 0.333862 3.76292 0.42273 3.89024C0.517332 4.02914 0.626267 4.15067 0.749536 4.26064C0.984606 4.47188 1.25408 4.63393 1.55508 4.74678C1.85896 4.85964 2.16856 4.91751 2.48677 4.92909L10.2126 5.14611L10.2212 4.84227C10.0549 4.75257 9.90297 4.64261 9.7625 4.51528C9.52743 4.30404 9.34109 4.04071 9.20349 3.72819Z",
  p19d09f71: "M4.73677 9.03748C4.93457 8.75968 5.21551 8.52529 5.57385 8.32852C5.93219 8.13175 6.27906 8.02758 6.61734 8.01021C6.95274 7.99574 7.26808 8.04494 7.56335 8.16068C7.73822 8.23013 7.90449 8.31984 8.0593 8.42691L8.32303 8.28222L4.64503 1.41833C4.4931 1.13474 4.30103 0.882992 4.06596 0.660176C3.83088 0.43736 3.56715 0.269524 3.27187 0.153776C3.11994 0.0930075 2.96227 0.0524948 2.79887 0.0264514C2.64693 0.00330164 2.48926 -0.00537893 2.32872 0.00330221C1.99045 0.0177708 1.64358 0.124838 1.28524 0.32161C0.926898 0.518383 0.648826 0.752774 0.448155 1.03057C0.353554 1.16368 0.273286 1.29969 0.207351 1.44148C0.135683 1.59484 0.0840822 1.75111 0.0525482 1.91315C-0.0133863 2.22568 -0.016253 2.54109 0.0382147 2.8594C0.0926823 3.1806 0.195884 3.48155 0.34782 3.76513L4.02582 10.629L4.28956 10.4843C4.28383 10.2934 4.30103 10.1053 4.34116 9.92006C4.4071 9.60754 4.53896 9.31528 4.73677 9.03748Z",
  p1a0f03c0: "M167.215 22.8211C168.032 22.8211 168.734 22.703 169.328 22.477C169.917 22.2459 170.423 21.9327 170.842 21.5373C171.255 21.1419 171.606 20.6643 171.885 20.1199C172.164 19.5705 172.402 18.9799 172.593 18.3431L168.181 7.89803C168.052 7.56424 167.918 7.31261 167.773 7.13287C167.629 6.95828 167.463 6.83503 167.267 6.76314C167.076 6.69124 166.828 6.6553 166.523 6.6553H166.451V5.58203H172.521V6.6553H172.448C171.968 6.6553 171.606 6.74259 171.369 6.91719C171.131 7.09179 171.007 7.3691 171.007 7.75424C171.007 7.88262 171.023 8.02127 171.054 8.1702C171.085 8.31912 171.131 8.48345 171.198 8.65805L172.877 12.8073C173.037 13.1719 173.187 13.5622 173.321 13.9782C173.456 14.3941 173.585 14.7844 173.704 15.1593C173.822 15.5342 173.9 15.8474 173.931 16.099C174.044 15.6523 174.179 15.2055 174.339 14.7536C174.499 14.3017 174.649 13.8601 174.794 13.4287L176.374 8.82751C176.452 8.65291 176.509 8.46804 176.545 8.26777C176.576 8.06749 176.591 7.89803 176.591 7.75424C176.591 7.37423 176.462 7.09693 176.209 6.91719C175.951 6.74259 175.568 6.6553 175.057 6.6553H174.985V5.58203H180.021V6.6553H179.949C179.644 6.6553 179.391 6.70665 179.179 6.80935C178.973 6.91206 178.787 7.09693 178.627 7.35883C178.466 7.62072 178.301 8.00073 178.12 8.49372L174.473 18.4356C174.055 19.5807 173.657 20.5154 173.275 21.2394C172.893 21.9635 172.464 22.5284 171.994 22.9341C171.524 23.3398 170.924 23.6222 170.196 23.7814C169.468 23.9406 168.558 24.0176 167.474 24.0176H167.21V22.8262L167.215 22.8211Z",
  p1a207b00: "M38.3402 18.5999C37.462 18.5999 36.7078 18.5023 36.0828 18.3021C35.4577 18.1018 34.9876 17.8091 34.6674 17.4188C34.3471 17.0285 34.1869 16.5663 34.1869 16.022C34.1869 15.5906 34.2799 15.2569 34.4607 15.0104C34.6467 14.7639 34.8637 14.5893 35.1219 14.4866C35.3751 14.3839 35.6282 14.3325 35.8658 14.3325C35.8658 15.2055 36.0621 15.9296 36.4547 16.5047C36.8473 17.0747 37.524 17.3623 38.4797 17.3623C39.3114 17.3623 39.9416 17.1723 40.3755 16.7923C40.8094 16.4123 41.0212 15.9244 41.0212 15.339C41.0212 14.959 40.9334 14.6458 40.7578 14.3993C40.5821 14.1528 40.2825 13.9114 39.8589 13.6701C39.4353 13.4338 38.8465 13.1617 38.0974 12.8587C37.2502 12.4941 36.5477 12.1398 36.0001 11.7957C35.4474 11.4516 35.0341 11.0511 34.7655 10.5786C34.4917 10.1113 34.3574 9.52591 34.3574 8.82751C34.3574 7.69775 34.7862 6.83503 35.6385 6.23934C36.496 5.64365 37.6273 5.3458 39.0324 5.3458C39.8641 5.3458 40.546 5.44851 41.0832 5.65392C41.6205 5.85933 42.0234 6.1315 42.2972 6.46529C42.571 6.79908 42.7053 7.16369 42.7053 7.56424C42.7053 8.011 42.5503 8.36534 42.2352 8.63751C41.9252 8.90967 41.4552 9.04319 40.8301 9.04319C40.8301 8.24723 40.6545 7.63099 40.3032 7.1945C39.9519 6.758 39.425 6.53718 38.7225 6.53718C37.9683 6.53718 37.4207 6.70665 37.0694 7.04044C36.7182 7.37423 36.5425 7.80559 36.5425 8.32939C36.5425 8.8994 36.7647 9.34617 37.2141 9.66456C37.6635 9.98294 38.4229 10.3475 39.4922 10.7635C40.3548 11.0973 41.0574 11.4414 41.605 11.7906C42.1474 12.1398 42.5503 12.5506 42.8189 13.0179C43.0824 13.4852 43.2167 14.0706 43.2167 14.769C43.2167 16.0066 42.7828 16.9566 41.9097 17.6191C41.0367 18.2764 39.8486 18.6102 38.3454 18.6102L38.3402 18.5999Z",
  p1b691800: "M46.4161 57.9848L45.5141 57.749L46.3334 57.2973C49.0954 55.7708 51.021 53.125 51.6167 50.0374C52.2075 46.9696 51.427 43.81 49.4723 41.3752C47.5102 38.9304 44.6096 37.528 41.5146 37.5231H41.5049C38.4049 37.5231 35.4971 38.9254 33.5277 41.3727C31.573 43.8001 30.7901 46.9498 31.3785 50.02C31.9693 53.1151 33.8997 55.7708 36.6714 57.3022L37.4908 57.754L36.5888 57.9898C27.2598 60.4296 20.8582 68.8585 20.9627 78.5284L21.5633 79H61.4343L62.0373 78.5284C62.1369 68.8684 55.7353 60.437 46.4161 57.9848ZM32.2926 48.0145C32.2926 42.8445 36.4234 38.6375 41.5 38.6375C46.5766 38.6375 50.7049 42.8445 50.7049 48.0145C50.7049 53.1846 46.5766 57.3941 41.5 57.3941C36.4234 57.3941 32.2926 53.1871 32.2926 48.0145ZM22.0568 77.7714L22.0763 77.3792C22.5941 66.8505 31.0867 58.5681 41.41 58.5259H41.4927C51.8209 58.5259 60.3499 66.7885 60.9261 77.3718L60.948 77.764L22.0568 77.7714Z",
  p1c87de80: "M71.2475 52.9863L70.7575 52.574C71.2081 52.9514 71.3714 53.5786 71.1799 54.1418C71.2531 53.927 71.3207 53.7063 71.3883 53.4799C71.4446 53.3056 71.3827 53.1082 71.2475 52.9863ZM55.0547 87.5306C55.2969 87.5248 55.5447 87.5132 55.7925 87.5016L56.1417 86.7525C55.9389 87.188 55.5222 87.49 55.0547 87.5306ZM49.7265 12.8442V14.2146L51.0163 14.2321C50.2954 14.203 49.7265 13.5933 49.7265 12.8442ZM47.0287 14.325H26.0034L48.3748 14.3308V12.943C48.3804 13.7094 47.7721 14.3308 47.0287 14.325ZM42.0047 87.7164C44.787 87.7571 47.5187 87.7513 50.2616 87.6932C47.5187 87.7513 44.787 87.7513 42.0047 87.7164ZM46.0092 1.20171H45.8346C45.9473 1.20171 46.0599 1.21333 46.1726 1.24817C46.1219 1.23075 46.0656 1.21333 46.0092 1.20171ZM37.0821 86.2822V87.6235C37.5101 87.6351 37.9382 87.6468 38.3606 87.6526C37.6566 87.6177 37.0933 87.0138 37.0821 86.2822ZM36.5076 23.6564L35.6515 24.3822C36.1415 23.9642 36.8399 23.9584 37.3412 24.3648L36.5076 23.6564ZM34.6095 87.6351H35.9443V86.2647C35.9331 87.0138 35.3361 87.6235 34.6095 87.6351ZM27.0115 1.20171C26.9552 1.21333 26.8989 1.23075 26.8426 1.24817C26.9552 1.21333 27.0679 1.20171 27.1805 1.20171H27.0115ZM16.9692 86.8803L17.3184 87.6235H18.1632C17.662 87.6235 17.2057 87.3332 16.9692 86.8803Z",
  p1e216800: "M16.7525 18.3637V17.2904H17.1141C17.4499 17.2904 17.7599 17.2493 18.0491 17.1723C18.3384 17.0953 18.5709 16.9361 18.7465 16.6947C18.9222 16.4585 19.01 16.099 19.01 15.6215V6.8453H16.8507V5.58203H19.01V4.48308C19.01 3.05034 19.3922 1.94626 20.1619 1.17084C20.9316 0.39028 22.0268 0 23.4473 0C24.3255 0 25.0229 0.0770292 25.5343 0.225952C26.0457 0.374874 26.4073 0.580284 26.614 0.831912C26.8206 1.08867 26.9239 1.37111 26.9239 1.6895C26.9239 1.97708 26.8412 2.22357 26.6863 2.43925C26.5261 2.65493 26.2885 2.81926 25.9682 2.9425C25.648 3.06061 25.2554 3.12224 24.7904 3.12224C24.7904 2.81926 24.7439 2.51628 24.6561 2.21843C24.5683 1.91545 24.4185 1.66382 24.2119 1.46868C24.0053 1.26841 23.7056 1.17084 23.3234 1.17084C22.6983 1.17084 22.2644 1.42247 22.0164 1.92059C21.7685 2.42384 21.6445 3.17873 21.6445 4.19551V5.57689H25.0022V6.84016H21.6445V15.6163C21.6445 16.0939 21.7323 16.4534 21.908 16.6896C22.0836 16.9258 22.3212 17.085 22.6157 17.1672C22.9101 17.2493 23.2201 17.2853 23.5403 17.2853H24.5218V18.3586H16.7474L16.7525 18.3637Z",
  p1f2f9d00: "M60.4342 26.708C59.1579 23.7026 57.3306 21.0027 55.0034 18.6843C52.6762 16.3659 49.966 14.5455 46.9492 13.2741C43.8259 11.9586 40.5081 11.2912 37.0866 11.2912C33.6651 11.2912 30.3472 11.9586 27.224 13.2741C24.2071 14.5455 21.497 16.3659 19.1697 18.6843C16.8425 21.0027 15.0152 23.7026 13.7389 26.708C12.4185 29.8194 11.7485 33.1247 11.7485 36.5332C11.7485 39.9417 12.4185 43.247 13.7389 46.3584C15.0152 49.3638 16.8425 52.0637 19.1697 54.382C21.497 56.7004 24.2071 58.5208 27.224 59.7923C30.3472 61.1077 33.6651 61.7752 37.0866 61.7752C40.5081 61.7752 43.8259 61.1077 46.9492 59.7923C49.966 58.5208 52.6762 56.7004 55.0034 54.382C57.3306 52.0637 59.1579 49.3638 60.4342 46.3584C61.7547 43.247 62.4247 39.9417 62.4247 36.5332C62.4247 33.1247 61.7547 29.8194 60.4342 26.708ZM59.0242 45.7104C57.8256 48.5338 56.1096 51.0691 53.9245 53.2466C51.7387 55.4234 49.1938 57.1329 46.3597 58.3269C43.4248 59.5635 40.3078 60.1905 37.0957 60.1905C33.8835 60.1905 30.7666 59.5635 27.8317 58.3269C24.9976 57.1329 22.4526 55.4234 20.2668 53.2466C18.0818 51.0691 16.3658 48.5338 15.1671 45.7104C13.9258 42.7867 13.2964 39.6815 13.2964 36.4816C13.2964 33.2816 13.9258 30.1765 15.1671 27.2527C16.3658 24.4293 18.0818 21.894 20.2668 19.7166C22.4526 17.5398 24.9976 15.8303 27.8317 14.6362C30.7666 13.3996 33.8835 12.7726 37.0957 12.7726C40.3078 12.7726 43.4248 13.3996 46.3597 14.6362C49.1938 15.8303 51.7387 17.5398 53.9245 19.7166C56.1096 21.894 57.8256 24.4293 59.0242 27.2527C60.2655 30.1765 60.8949 33.2816 60.8949 36.4816C60.8949 39.6815 60.2655 42.7867 59.0242 45.7104Z",
  p2103ba00: "M25.2657 18.3637V17.2904H25.6273C25.9631 17.2904 26.273 17.2493 26.5623 17.1723C26.8516 17.0953 27.084 16.9361 27.2597 16.6947C27.4353 16.4585 27.5231 16.099 27.5231 15.6215V6.8453H25.3638V5.58203H27.5231V4.48308C27.5231 3.05034 27.9054 1.94626 28.6751 1.17084C29.4448 0.39028 30.5399 0 31.9605 0C32.8387 0 33.5361 0.0770292 34.0475 0.225952C34.5589 0.374874 34.9205 0.580284 35.1271 0.831912C35.3337 1.08867 35.4371 1.37111 35.4371 1.6895C35.4371 1.97708 35.3544 2.22357 35.1994 2.43925C35.0393 2.65493 34.8017 2.81926 34.4814 2.9425C34.1611 3.06061 33.7685 3.12224 33.3036 3.12224C33.3036 2.81926 33.2571 2.51628 33.1693 2.21843C33.0815 1.91545 32.9317 1.66382 32.725 1.46868C32.5184 1.26841 32.2188 1.17084 31.8365 1.17084C31.2115 1.17084 30.7776 1.42247 30.5296 1.92059C30.2816 2.42384 30.1577 3.17873 30.1577 4.19551V5.57689H33.5154V6.84016H30.1577V15.6163C30.1577 16.0939 30.2455 16.4534 30.4211 16.6896C30.5967 16.9258 30.8344 17.085 31.1288 17.1672C31.4233 17.2493 31.7332 17.2853 32.0535 17.2853H33.035V18.3586H25.2605L25.2657 18.3637Z",
  p215d7d80: "M14.2912 5.78913C14.0775 5.30384 13.9795 4.74218 13.9974 4.10412C14.0152 3.46606 14.1443 2.90889 14.3846 2.44158C14.625 1.97427 14.9366 1.58335 15.3194 1.27331C15.5509 1.08908 15.7957 0.931812 16.0584 0.805998L16.0717 0.338689L4.07511 0.00168759C3.58101 -0.0117925 3.0958 0.0556089 2.61504 0.199396C2.13429 0.343183 1.70695 0.572346 1.32413 0.882388C1.12381 1.04415 0.945757 1.22388 0.785506 1.42608C0.634157 1.6148 0.505066 1.8215 0.389329 2.04616C0.148951 2.51797 0.0198602 3.07065 0.00205451 3.7087C-0.0157512 4.34676 0.0821802 4.90843 0.295849 5.39371C0.398232 5.62736 0.51842 5.84305 0.656414 6.04075C0.803311 6.25643 0.972465 6.44515 1.16388 6.6159C1.52889 6.94392 1.94733 7.19554 2.41473 7.37078C2.88658 7.54603 3.36734 7.63589 3.86145 7.65387L15.8581 7.99087L15.8714 7.51907C15.6132 7.37977 15.3773 7.20903 15.1592 7.01132C14.7942 6.6833 14.5048 6.27441 14.2912 5.78913Z",
  p21cdc300: "M6.64154 16.2794C5.15476 16.2794 3.91726 15.9604 2.92904 15.3178C1.94528 14.6798 1.21079 13.7811 0.725586 12.6263C0.244831 11.4715 0 10.1235 0 8.57781C0 7.03209 0.24038 5.69308 0.725586 4.55176C1.20634 3.41045 1.94528 2.52526 2.93795 1.8917C3.93062 1.25814 5.17257 0.943603 6.65935 0.943603C8.14612 0.943603 9.28124 1.25814 10.265 1.8917C11.2488 2.52526 11.9966 3.41495 12.5085 4.56075C13.016 5.70656 13.2742 7.05456 13.2742 8.60027C13.2742 10.146 13.0204 11.4895 12.5085 12.6398C11.9966 13.7856 11.2488 14.6798 10.265 15.3223C9.28124 15.9604 8.07045 16.2839 6.63709 16.2839L6.64154 16.2794ZM6.64154 15.0887C7.63421 15.0887 8.42211 14.8326 9.0097 14.3158C9.59729 13.8036 10.0157 13.0622 10.2695 12.0916C10.5232 11.1255 10.6523 9.96176 10.6523 8.59578C10.6523 7.2298 10.5232 6.06602 10.2695 5.09995C10.0157 4.13388 9.59284 3.39697 9.0097 2.88922C8.42211 2.38148 7.64311 2.12985 6.6638 2.12985C5.19037 2.12985 4.14874 2.69601 3.54334 3.82833C2.93795 4.96066 2.63525 6.55131 2.63525 8.59578C2.63525 10.6403 2.93795 12.2354 3.54334 13.3722C4.14874 14.5135 5.18147 15.0842 6.64599 15.0842L6.64154 15.0887Z",
  p227f79f0: "M65.4501 18.5999C63.6731 18.5999 62.2731 18.0504 61.2503 16.9566C60.2275 15.8577 59.7161 14.1887 59.7161 11.9497C59.7161 9.71077 60.2017 8.06236 61.178 6.96341C62.1543 5.86447 63.6007 5.32013 65.5224 5.32013C67.2994 5.32013 68.6942 5.8696 69.7222 6.96341C70.745 8.06236 71.2564 9.72104 71.2564 11.9497C71.2564 14.1784 70.7708 15.8628 69.7945 16.9566C68.8181 18.0556 67.3717 18.5999 65.4501 18.5999ZM65.4966 17.2904C66.2456 17.2904 66.85 17.0901 67.2942 16.6845C67.7437 16.2788 68.0639 15.6779 68.2551 14.882C68.4462 14.086 68.5444 13.1103 68.5444 11.9497C68.5444 10.1832 68.3119 8.86346 67.847 7.98019C67.3821 7.09693 66.5917 6.6553 65.4707 6.6553C64.3498 6.6553 63.5646 7.09693 63.11 7.98019C62.6554 8.86346 62.4281 10.1884 62.4281 11.9497C62.4281 13.7111 62.6606 15.0258 63.1255 15.9296C63.5904 16.8334 64.3808 17.2904 65.5017 17.2904H65.4966Z",
  p22eac800: "M6.91876 2.75482C6.58335 2.72009 6.23934 2.59277 5.89247 2.37863C5.5456 2.1645 5.28186 1.91275 5.09839 1.62627C4.91779 1.33979 4.80312 1.03884 4.75438 0.726323C4.72572 0.538232 4.71998 0.347246 4.73432 0.159154L4.47918 0L0.428505 6.64686C0.262236 6.92177 0.141833 7.21693 0.0672981 7.53234C-0.00723659 7.84776 -0.0187033 8.16317 0.0271642 8.47859C0.0529647 8.64063 0.0930979 8.79979 0.156166 8.95605C0.2135 9.10073 0.285168 9.24253 0.37117 9.37853C0.55464 9.66501 0.818379 9.91676 1.16525 10.1309C1.51213 10.345 1.85326 10.4724 2.19154 10.5071C2.35494 10.5244 2.51261 10.5244 2.66455 10.51C2.83081 10.4955 2.99135 10.4608 3.14615 10.4116C3.44716 10.3132 3.7195 10.1598 3.96604 9.94859C4.21257 9.74025 4.41898 9.50007 4.58811 9.22516L8.63879 2.5783L8.38365 2.41914C8.22312 2.51753 8.05398 2.59856 7.87337 2.65643C7.57523 2.75482 7.25416 2.78665 6.91876 2.75192V2.75482Z",
  p232c1d80: "M24.1278 59.5189C21.047 59.5189 18.5519 62.0913 18.5519 65.2675C18.5519 68.4438 21.047 71.0162 24.1278 71.0162C27.2087 71.0162 29.7094 68.4438 29.7094 65.2675C29.7094 62.0913 27.2087 59.5189 24.1278 59.5189ZM24.1391 69.6458C21.7904 69.6458 19.8867 67.6831 19.8867 65.2675C19.8867 62.8519 21.7904 60.8834 24.1391 60.8834C26.4877 60.8834 28.3914 62.8461 28.3914 65.2675C28.3914 67.689 26.4877 69.6458 24.1391 69.6458Z",
  p2394a6c0: "M37.3412 24.3648C36.8399 23.9584 36.1415 23.9642 35.6515 24.3822L36.5076 23.6564L37.3412 24.3648Z",
  p23c9bc00: "M58.7583 60.7635C57.8104 61.897 56.3632 62.6395 54.4572 62.9688L53.9157 63.0614L53.8955 63.6204L53.8112 66.0382C53.7555 66.1617 53.4654 66.3572 53.3338 66.3795C53.3153 66.3812 53.2849 66.3829 53.2444 66.3829C52.9341 66.3829 52.6608 66.2663 52.6052 66.1977C52.4196 65.5375 52.4095 64.867 52.3977 64.0902C52.3977 63.9719 52.3943 63.8536 52.3926 63.7318L52.3808 63.154L51.8191 63.0682C50.2724 62.8281 48.7763 62.0016 47.7187 60.7996C46.6359 59.5718 46.1383 58.1073 46.3154 56.6686C46.3795 56.5469 46.6645 56.3171 46.8197 56.2674C46.8265 56.2674 46.8551 56.2622 46.9057 56.2622C47.098 56.2622 47.3072 56.3154 47.4067 56.36C47.5602 56.7184 47.6327 57.087 47.7103 57.4763C47.8891 58.3697 48.0915 59.3814 49.2722 60.3366C50.3905 61.2385 51.8057 61.7358 53.2596 61.7358C54.7136 61.7358 55.9634 61.302 57.075 60.4823C58.0819 59.7381 58.7094 58.5137 58.7532 57.2088C58.7954 55.9724 58.3096 54.8304 57.4224 54.0759C56.1692 53.0127 54.6461 52.656 53.0336 52.277C51.3755 51.8895 49.6601 51.4882 48.1809 50.2502C46.2344 48.6228 45.698 46.1673 46.7826 43.8437C47.6614 41.954 49.5185 40.6371 51.8731 40.2307L52.4247 40.1363L52.4348 39.567L52.4753 37.355C52.4803 37.0446 52.8632 36.8405 53.1331 36.8302H53.15C53.3929 36.8302 53.7707 37.0171 53.7825 37.3018L53.8871 39.579L53.9141 40.1346L54.4538 40.2238C55.987 40.4759 57.4764 41.2835 58.5407 42.4393C59.6388 43.6294 60.1583 45.0509 60.0014 46.4399C59.9812 46.6371 59.632 46.7743 59.3318 46.7743C59.3048 46.7743 59.2795 46.7743 59.2542 46.7709C58.9725 46.7469 58.8983 46.6646 58.679 45.766C58.4362 44.7714 58.0701 43.2693 56.2451 42.3073C55.2887 41.8031 54.2109 41.5356 53.1264 41.5356C51.7483 41.5356 50.4546 41.9557 49.3852 42.7514C47.8301 43.9055 47.1857 45.9289 47.8554 47.5614C48.3749 48.8286 49.6028 49.8661 51.0584 50.2725L55.4355 51.49C56.6077 51.8158 58.2253 52.5377 59.2745 54.1256C60.6036 56.137 60.3961 58.8035 58.7583 60.7635Z",
  p23de0f00: "M6.49909 36.2029C5.09244 36.2029 3.9039 35.8839 2.93349 35.2414C1.96308 34.6033 1.23305 33.7091 0.752293 32.5588C0.271538 31.413 0.0267075 30.065 0.0267075 28.5193C0.0267075 26.9736 0.28044 25.693 0.792354 24.5427C1.29982 23.3969 2.06101 22.4982 3.06704 21.8512C4.07306 21.2041 5.31501 20.8806 6.78843 20.8806C7.76775 20.8806 8.57791 20.9795 9.21892 21.1817C9.85993 21.3839 10.3362 21.6669 10.6434 22.0264C10.955 22.3904 11.1063 22.7903 11.1063 23.2351C11.1063 23.7069 10.9194 24.0889 10.5499 24.3719C10.176 24.655 9.69522 24.7988 9.10318 24.7988C9.10318 24.354 9.02751 23.9226 8.87616 23.5047C8.72481 23.0868 8.47553 22.7409 8.13277 22.4623C7.79001 22.1837 7.31815 22.0444 6.72611 22.0444C5.73344 22.0444 4.93664 22.296 4.34015 22.7948C3.74365 23.2935 3.30742 24.0304 3.03588 24.9965C2.76879 25.9626 2.6308 27.1353 2.6308 28.5103C2.6308 29.7774 2.77769 30.8783 3.06704 31.8174C3.35638 32.7565 3.81488 33.4755 4.44253 33.9787C5.07018 34.4775 5.88034 34.7291 6.87301 34.7291C7.56298 34.7291 8.14612 34.6437 8.61797 34.4685C9.09428 34.2933 9.49491 34.0641 9.82876 33.781C10.1582 33.4979 10.4431 33.2014 10.6745 32.8958C10.7858 32.9812 10.8748 33.089 10.9416 33.2283C11.0084 33.3676 11.044 33.5339 11.044 33.7271C11.044 34.0057 10.9594 34.2888 10.7858 34.5718C10.6122 34.8549 10.3496 35.12 9.98902 35.3627C9.62845 35.6053 9.16105 35.803 8.58236 35.9558C8.00367 36.1086 7.30925 36.185 6.49464 36.185L6.49909 36.2029Z",
  p2441900: "M71.3883 53.4798C71.3207 53.7063 71.2531 53.927 71.1799 54.1418C71.3714 53.5786 71.2081 52.9514 70.7575 52.574L71.2475 52.9863C71.3827 53.1082 71.4446 53.3056 71.3883 53.4798Z",
  p244b6800: "M1.72003 7.76567C2.05544 7.8004 2.39944 7.92772 2.74632 8.14185C3.09319 8.35599 3.35693 8.60774 3.5404 8.89422C3.721 9.1807 3.83567 9.48164 3.8844 9.79417C3.91307 9.98226 3.91881 10.1732 3.90447 10.3613L4.15961 10.5205L8.21028 3.87362C8.37655 3.59872 8.49696 3.30356 8.57149 2.98815C8.64603 2.67273 8.65749 2.35732 8.61163 2.0419C8.58582 1.87985 8.54569 1.7207 8.48262 1.56444C8.42529 1.41975 8.35362 1.27796 8.26762 1.14196C8.08415 0.855479 7.82041 0.603726 7.47354 0.389591C7.12666 0.175456 6.78552 0.0481327 6.44725 0.0134082C6.28385 -0.00395413 6.12618 -0.00395419 5.97424 0.0105144C5.80797 0.024983 5.64744 0.0597076 5.49263 0.108901C5.19163 0.207287 4.91929 0.360654 4.67275 0.571895C4.42621 0.780243 4.21981 1.02042 4.05067 1.29532L0 7.93929L0.255138 8.09845C0.415674 8.00006 0.584811 7.91904 0.765414 7.86116C1.06355 7.76278 1.38463 7.73095 1.72003 7.76567Z",
  p26c94300: "M53.3768 23.3942C50.4404 27.4422 46.2725 30.9255 40.9207 33.7497C35.5688 36.621 30.4064 38.1744 25.386 38.4097C20.3657 38.6451 15.6769 37.8919 11.3196 36.1974C8.7147 35.1618 6.2519 33.8909 3.93118 32.2905L0.000146661 34.4087L54.7029 134.952C56.9763 139.094 59.818 142.766 63.3228 146.061C66.8275 149.308 70.7586 151.803 75.1158 153.498C77.3892 154.392 79.7099 155.004 82.1727 155.333C84.4461 155.663 86.7668 155.804 89.1823 155.663C94.2026 155.428 99.365 153.874 104.717 151.003C110.021 148.132 114.189 144.648 117.173 140.6C118.594 138.623 119.778 136.646 120.773 134.575C121.814 132.363 122.572 130.056 123.093 127.703C124.04 123.137 124.135 118.524 123.283 113.817C122.478 109.11 120.915 104.685 118.689 100.543L63.9858 0L60.0548 2.11818C60.1495 4.89536 59.8653 7.67253 59.297 10.4026C58.3498 14.9685 56.3606 19.2519 53.4242 23.3471L53.3768 23.3942Z",
  p26fa2380: "M48.3804 12.943V14.3308L26.0034 14.3192H47.0287C47.7721 14.3308 48.3804 13.7094 48.3804 12.943Z",
  p2753a400: "M37.9396 16.0682V15.1291H38.1043C38.407 15.1291 38.683 15.0932 38.9322 15.0258C39.1815 14.9584 39.3818 14.8146 39.5332 14.5989C39.6845 14.3832 39.7602 14.0687 39.7602 13.6508V2.52976C39.7602 2.12535 39.6756 1.82879 39.5109 1.63109C39.3462 1.43787 39.1414 1.30756 38.9011 1.24466C38.6607 1.18175 38.4025 1.1503 38.1265 1.1503H37.9396V0.211187H42.0304V4.5293C42.0304 4.79441 42.0215 5.07299 42.0082 5.36506C41.9948 5.65713 41.9815 5.90876 41.9681 6.11545C41.9548 6.32215 41.9458 6.44796 41.9458 6.49289H42.0482C42.253 6.10197 42.5023 5.76946 42.7916 5.49088C43.081 5.21229 43.4148 5.00559 43.7932 4.8663C44.1716 4.72701 44.6078 4.65961 45.1064 4.65961C46.2771 4.65961 47.1718 4.98313 47.7817 5.63017C48.396 6.27721 48.7031 7.31068 48.7031 8.73058V13.6328C48.7031 14.0642 48.7699 14.3877 48.899 14.6034C49.0281 14.8191 49.2106 14.9629 49.4376 15.0303C49.6646 15.1022 49.9317 15.1336 50.2344 15.1336H50.2967V16.0727H46.4329V8.95525C46.4329 8.06557 46.2771 7.3691 45.9699 6.87033C45.6583 6.37157 45.1108 6.11995 44.3274 6.11995C43.8021 6.11995 43.3703 6.26373 43.0231 6.54681C42.6803 6.82989 42.4266 7.22531 42.2708 7.72407C42.1106 8.22283 42.0349 8.80248 42.0349 9.45401V13.7317C42.0349 14.1361 42.1061 14.4371 42.253 14.6393C42.3999 14.8415 42.5958 14.9718 42.8406 15.0348C43.0899 15.0977 43.3659 15.1291 43.6686 15.1291H43.7309V16.0682H37.944H37.9396Z",
  p2801f480: "M12.4674 4.88877C11.863 4.82714 11.2431 4.60119 10.6181 4.22118C9.99302 3.84117 9.51777 3.39441 9.18716 2.88602C8.86172 2.37762 8.65509 1.84356 8.56727 1.28895C8.51561 0.955159 8.50528 0.616231 8.53111 0.282439L8.07136 0L0.772155 11.7957C0.472542 12.2835 0.255579 12.8073 0.121269 13.3671C-0.0130401 13.9268 -0.0337028 14.4866 0.0489492 15.0463C0.095441 15.3339 0.16776 15.6163 0.281406 15.8936C0.384721 16.1504 0.513865 16.402 0.668838 16.6434C0.999446 17.1518 1.4747 17.5985 2.09975 17.9785C2.72481 18.3586 3.33953 18.5845 3.94909 18.6461C4.24354 18.6769 4.52765 18.6769 4.80144 18.6513C5.10105 18.6256 5.39033 18.564 5.66929 18.4767C6.21169 18.3021 6.70244 18.0299 7.14669 17.655C7.59095 17.2853 7.96288 16.8591 8.26766 16.3712L15.5669 4.57552L15.1071 4.29307C14.8178 4.46767 14.5131 4.61146 14.1876 4.71417C13.6504 4.88877 13.0718 4.94525 12.4674 4.88363V4.88877Z",
  p28ea9d80: "M8.53553 16.0381C8.89197 15.5452 9.39821 15.1292 10.0439 14.78C10.6896 14.4308 11.3147 14.2459 11.9243 14.2151C12.5287 14.1894 13.0969 14.2767 13.629 14.4822C13.9441 14.6054 14.2437 14.7646 14.5226 14.9546L14.9979 14.6978L8.37022 2.517C8.09644 2.01374 7.75033 1.56698 7.32674 1.17156C6.90315 0.776149 6.4279 0.478304 5.89583 0.272894C5.62204 0.165053 5.33793 0.0931586 5.04348 0.0469412C4.7697 0.00585917 4.48558 -0.00954559 4.1963 0.00586019C3.58674 0.0315365 2.96168 0.22154 2.31596 0.570738C1.67024 0.919935 1.16917 1.33589 0.807564 1.82888C0.637094 2.0651 0.492453 2.30645 0.373641 2.55808C0.244497 2.83025 0.151514 3.10756 0.0946905 3.39513C-0.0241218 3.94974 -0.0292875 4.50948 0.0688618 5.07436C0.167011 5.64437 0.352978 6.17844 0.626763 6.68169L7.25442 18.8625L7.72967 18.6058C7.71934 18.2668 7.75033 17.933 7.82266 17.6044C7.94147 17.0498 8.17909 16.5311 8.53553 16.0381Z",
  p290a2900: "M158.475 24.0638C156.765 24.0638 155.479 23.766 154.611 23.1703C153.748 22.5746 153.314 21.7273 153.314 20.6283C153.314 20.0378 153.454 19.5345 153.733 19.1134C154.012 18.6923 154.384 18.3637 154.849 18.1223C155.313 17.8861 155.825 17.7269 156.383 17.6447C156.032 17.501 155.701 17.2647 155.401 16.9412C155.097 16.6177 154.947 16.1915 154.947 15.6677C154.947 15.1747 155.086 14.7485 155.365 14.3941C155.644 14.0347 156.083 13.6906 156.672 13.3568C155.954 13.0846 155.391 12.6276 154.993 11.9754C154.595 11.3232 154.394 10.5786 154.394 9.73131C154.394 8.36534 154.781 7.28693 155.556 6.50124C156.331 5.71554 157.504 5.32013 159.069 5.32013C159.658 5.32013 160.211 5.39716 160.712 5.54608C161.218 5.695 161.595 5.87474 161.853 6.08015C162.106 5.79257 162.437 5.505 162.835 5.21229C163.233 4.91958 163.708 4.77066 164.25 4.77066C164.746 4.77066 165.113 4.89904 165.356 5.15066C165.593 5.40743 165.717 5.70527 165.717 6.05447C165.717 6.40367 165.614 6.68611 165.407 6.94801C165.201 7.2099 164.849 7.34342 164.354 7.34342C164.354 7.1226 164.292 6.92233 164.173 6.74773C164.054 6.57313 163.847 6.48583 163.563 6.48583C163.357 6.48583 163.176 6.51151 163.026 6.55773C162.876 6.60394 162.726 6.6707 162.582 6.74773C162.871 7.08152 163.109 7.47694 163.3 7.93911C163.491 8.40128 163.589 8.9713 163.589 9.65429C163.589 10.8457 163.222 11.8368 162.484 12.6225C161.75 13.4082 160.614 13.8036 159.079 13.8036C158.888 13.8036 158.661 13.7933 158.408 13.7676C158.149 13.742 157.943 13.7163 157.783 13.6855C157.509 13.8293 157.266 14.0141 157.049 14.2452C156.832 14.4763 156.724 14.7639 156.724 15.1182C156.724 15.4058 156.817 15.6215 156.998 15.7601C157.183 15.9039 157.561 15.9758 158.139 15.9758H160.872C162.344 15.9758 163.398 16.3096 164.038 16.9772C164.679 17.6447 164.999 18.5023 164.999 19.5551C164.999 20.9365 164.472 22.0354 163.419 22.8468C162.365 23.6581 160.717 24.0638 158.475 24.0638ZM158.521 22.8211C159.627 22.8211 160.484 22.703 161.099 22.477C161.714 22.2459 162.153 21.9224 162.406 21.5116C162.659 21.0956 162.788 20.6232 162.788 20.0789C162.788 19.4267 162.592 18.9799 162.199 18.7334C161.807 18.4869 161.233 18.3637 160.484 18.3637H158.015C157.597 18.3637 157.199 18.4202 156.817 18.5332C156.434 18.6461 156.119 18.8567 155.871 19.1648C155.623 19.4729 155.499 19.9299 155.499 20.5359C155.499 20.9673 155.598 21.3524 155.789 21.7067C155.98 22.0559 156.295 22.3281 156.734 22.5284C157.173 22.7287 157.767 22.8262 158.521 22.8262V22.8211ZM159.002 12.5917C159.513 12.5917 159.916 12.4838 160.216 12.2681C160.51 12.0525 160.722 11.7289 160.851 11.2924C160.98 10.8559 161.042 10.3116 161.042 9.65942C161.042 9.00724 160.98 8.40128 160.851 7.94425C160.722 7.48207 160.505 7.13801 160.205 6.90692C159.901 6.67584 159.493 6.56286 158.981 6.56286C158.47 6.56286 158.087 6.68097 157.783 6.92233C157.478 7.15855 157.261 7.51288 157.121 7.96992C156.987 8.4321 156.92 9.00211 156.92 9.6851C156.92 10.6557 157.08 11.3849 157.4 11.8676C157.721 12.3554 158.258 12.5968 159.007 12.5968L159.002 12.5917Z",
  p2963b680: "M23.4902 35.9917V35.0526H23.6371C23.9532 35.0526 24.238 35.0167 24.4829 34.9493C24.7322 34.8819 24.928 34.7381 25.0705 34.5224C25.2174 34.3067 25.2886 33.9922 25.2886 33.5743V27.1488C25.2886 26.7444 25.2174 26.4434 25.0705 26.2412C24.9236 26.039 24.7366 25.9087 24.5007 25.8458C24.2648 25.7829 23.9977 25.7514 23.695 25.7514H23.5926V24.8123H27.2116L27.4787 26.4389H27.5811C27.9817 25.7154 28.4402 25.2257 28.9655 24.9696C29.4907 24.7134 30.0961 24.5831 30.7861 24.5831C31.8901 24.5831 32.7403 24.9066 33.3412 25.5537C33.9422 26.2007 34.2404 27.2342 34.2404 28.6541V33.5564C34.2404 33.9877 34.3027 34.3112 34.4274 34.5269C34.552 34.7426 34.7256 34.8864 34.9526 34.9538C35.1797 35.0257 35.4468 35.0571 35.7495 35.0571H35.8518V35.9962H31.9657V28.8788C31.9657 27.9891 31.8144 27.2926 31.5117 26.7939C31.209 26.2951 30.6659 26.0435 29.878 26.0435C29.3127 26.0435 28.8586 26.1962 28.5159 26.5018C28.1731 26.8073 27.9283 27.2162 27.7814 27.733C27.6345 28.2497 27.5633 28.7979 27.5633 29.382V33.6597C27.5633 34.0641 27.6345 34.3652 27.7814 34.5674C27.9283 34.7696 28.1152 34.8999 28.3512 34.9628C28.5871 35.0257 28.8542 35.0571 29.1569 35.0571H29.2593V35.9962H23.4902V35.9917Z",
  p2a68a770: "M74.3429 28.9355H60.3443C59.8031 28.9355 59.7229 29.3616 59.7229 29.6155V83.903H58.8342L55.99 83.912H55.0968V83.0054V49.8087C55.0946 49.4324 54.8563 49.1899 54.4843 49.1899L40.3766 49.1944C40.0536 49.1944 39.8175 49.4437 39.8175 49.7905V82.9759L39.8153 83.8848H38.9221L36.0734 83.8758H35.1847V82.9691L35.1803 35.2117C35.1803 34.9012 34.8729 34.7312 34.6613 34.7312H20.5023C19.9611 34.7289 19.9032 35.1936 19.9032 35.3953V83.9007L19.0145 83.9052L16.1725 83.9143H15.2793V83.0076V55.5568C15.2771 55.2395 15.041 54.9811 14.7514 54.9811H0.559053C0.247231 54.9811 0.0022273 55.2327 0.0022273 55.5545V82.4093V82.4115L0.0155911 82.9963L0.0579099 85L74.9978 84.9592V82.9782H75V29.6155C75 29.1508 74.7906 28.9355 74.3429 28.9355ZM14.2169 83.9211H1.06242V56.0622H14.2169V83.9211ZM34.1201 83.9211H20.9678V35.7988H34.1201V83.9211ZM54.0322 83.9211H40.8799V50.2711H54.0322V83.9211ZM73.9376 83.9211H60.7831V30.0167H73.9376V83.9211Z",
  p2b775380: "M117.545 16.2794C115.973 16.2794 114.758 15.7806 113.894 14.7786C113.031 13.7766 112.603 12.3702 112.603 10.5639C112.603 8.61825 113.017 7.14443 113.845 6.1514C114.673 5.15837 115.835 4.65961 117.34 4.65961C118.72 4.65961 119.801 5.08198 120.594 5.92224C121.386 6.76249 121.782 8.01165 121.782 9.66969V10.6492H114.94C114.967 12.1365 115.234 13.2194 115.737 13.8934C116.24 14.5674 116.979 14.9044 117.959 14.9044C118.675 14.9044 119.276 14.7472 119.766 14.4371C120.255 14.1226 120.625 13.7676 120.87 13.3632C120.994 13.4037 121.106 13.4935 121.199 13.6328C121.297 13.7721 121.346 13.9384 121.346 14.1316C121.346 14.4237 121.213 14.7382 120.941 15.0707C120.669 15.4032 120.26 15.6908 119.699 15.9244C119.143 16.1626 118.421 16.2794 117.54 16.2794H117.545ZM119.405 9.45401C119.405 8.35314 119.245 7.47694 118.929 6.8254C118.613 6.17387 118.074 5.84585 117.317 5.84585C116.614 5.84585 116.062 6.15589 115.666 6.77597C115.265 7.39606 115.038 8.29023 114.985 9.4585H119.41L119.405 9.45401Z",
  p2d10940: "M87.6525 41.3748C86.9499 41.3748 86.3145 41.2361 85.7463 40.9588C85.1781 40.6815 84.7338 40.2604 84.4135 39.6956C84.0933 39.1307 83.9331 38.4117 83.9331 37.5387C83.9331 36.2652 84.3826 35.3254 85.2762 34.7144C86.1699 34.1033 87.5388 33.7643 89.3778 33.7027L91.346 33.6308V32.2494C91.346 31.6794 91.2995 31.1762 91.2013 30.7448C91.1032 30.3134 90.9069 29.9796 90.6124 29.7332C90.318 29.4867 89.8737 29.3634 89.2797 29.3634C88.7218 29.3634 88.293 29.4764 87.9986 29.6972C87.7041 29.918 87.5027 30.221 87.3994 30.601C87.296 30.981 87.2444 31.4381 87.2444 31.9619C86.4747 31.9619 85.9013 31.8437 85.519 31.6024C85.1368 31.3662 84.9456 30.9656 84.9456 30.411C84.9456 29.8564 85.1471 29.4045 85.5552 29.0656C85.9633 28.7215 86.5057 28.4801 87.1876 28.3261C87.8694 28.1772 88.6133 28.1001 89.4295 28.1001C90.9482 28.1001 92.0899 28.4083 92.8492 29.0296C93.6086 29.651 93.9908 30.714 93.9908 32.2238V38.3501C93.9908 38.7969 94.0373 39.1409 94.1355 39.3874C94.2336 39.6339 94.3886 39.8085 94.6159 39.9112C94.838 40.0139 95.1273 40.0653 95.4786 40.0653H95.5509V41.1386H91.9762L91.5423 39.2077H91.3512C91.0154 39.6391 90.6899 40.0139 90.3697 40.3426C90.0494 40.6713 89.6826 40.9229 89.2642 41.1077C88.8458 41.2926 88.3137 41.3799 87.6576 41.3799L87.6525 41.3748ZM88.417 39.8239C89.0266 39.8239 89.5431 39.6904 89.9771 39.4285C90.411 39.1666 90.7468 38.7866 90.9844 38.2936C91.222 37.8006 91.346 37.2306 91.346 36.5785V34.6938L89.9306 34.7657C89.0989 34.7965 88.4428 34.93 87.9624 35.1611C87.482 35.3922 87.1411 35.7157 86.9448 36.1265C86.7433 36.5425 86.6451 37.0509 86.6451 37.6517C86.6451 38.1293 86.7071 38.5247 86.8363 38.8431C86.9654 39.1615 87.1617 39.4028 87.4252 39.5723C87.6886 39.7418 88.0192 39.8239 88.4222 39.8239H88.417Z",
  p2dccbc00: "M46.8069 41.3748C45.9287 41.3748 45.1745 41.2772 44.5494 41.0769C43.9244 40.8767 43.4543 40.584 43.134 40.1937C42.8137 39.8034 42.6536 39.3412 42.6536 38.7969C42.6536 38.3655 42.7466 38.0317 42.9274 37.7852C43.1134 37.5387 43.3303 37.3641 43.5886 37.2614C43.8417 37.1587 44.0949 37.1074 44.3325 37.1074C44.3325 37.9804 44.5288 38.7044 44.9214 39.2796C45.314 39.8496 45.9907 40.1372 46.9464 40.1372C47.778 40.1372 48.4083 39.9472 48.8422 39.5672C49.2761 39.1872 49.4879 38.6993 49.4879 38.1139C49.4879 37.7339 49.4001 37.4206 49.2244 37.1741C49.0488 36.9276 48.7492 36.6863 48.3256 36.4449C47.902 36.2087 47.3131 35.9365 46.5641 35.6336C45.7169 35.269 45.0144 34.9146 44.4668 34.5706C43.9141 34.2265 43.5008 33.826 43.2322 33.3535C42.9584 32.8862 42.8241 32.3008 42.8241 31.6024C42.8241 30.4726 43.2528 29.6099 44.1052 29.0142C44.9627 28.4185 46.094 28.1207 47.4991 28.1207C48.3308 28.1207 49.0126 28.2234 49.5499 28.4288C50.0871 28.6342 50.4901 28.9064 50.7638 29.2402C51.0376 29.574 51.1719 29.9386 51.1719 30.3391C51.1719 30.7859 51.017 31.1402 50.7019 31.4124C50.3919 31.6845 49.9218 31.8181 49.2968 31.8181C49.2968 31.0221 49.1211 30.4059 48.7699 29.9694C48.4186 29.5329 47.8917 29.3121 47.1891 29.3121C46.4349 29.3121 45.8874 29.4815 45.5361 29.8153C45.1848 30.1491 45.0092 30.5805 45.0092 31.1043C45.0092 31.6743 45.2313 32.121 45.6807 32.4394C46.1302 32.7578 46.8895 33.1224 47.9588 33.5384C48.8215 33.8722 49.5241 34.2162 50.0716 34.5654C50.614 34.9146 51.017 35.3254 51.2856 35.7928C51.549 36.2601 51.6833 36.8455 51.6833 37.5439C51.6833 38.7815 51.2494 39.7315 50.3764 40.3939C49.5034 41.0513 48.3153 41.3851 46.812 41.3851L46.8069 41.3748Z",
  p2fadd500: "M58.5383 41.3748C57.2417 41.3748 56.2602 40.9999 55.5887 40.2553C54.9171 39.5107 54.5813 38.3244 54.5813 36.7017V31.0735C54.5813 30.5959 54.4987 30.2415 54.3282 30.0105C54.1577 29.7794 53.9408 29.6253 53.667 29.5431C53.3932 29.4661 53.0729 29.425 52.7062 29.425H52.6338V28.3518H57.2159V36.4141C57.2159 37.0971 57.283 37.6877 57.4173 38.1807C57.5516 38.6736 57.7944 39.0485 58.1354 39.3155C58.4815 39.5774 58.9464 39.711 59.5404 39.711C60.181 39.711 60.7079 39.5518 61.1212 39.2334C61.5344 38.915 61.8392 38.4682 62.0303 37.8982C62.2215 37.3282 62.3196 36.6658 62.3196 35.9211V31.1043C62.3196 30.6113 62.237 30.2467 62.0665 30.0053C61.896 29.7691 61.6791 29.6099 61.4053 29.538C61.1315 29.4661 60.8216 29.4302 60.4703 29.4302H60.3721V28.3569H64.9542V38.4939C64.9542 38.9561 65.0368 39.295 65.2073 39.521C65.3777 39.7418 65.605 39.8907 65.8892 39.9626C66.1784 40.0345 66.4884 40.0704 66.8242 40.0704H66.9223V41.1437H62.8465L62.4849 39.2847H62.3661C61.8857 40.1115 61.3278 40.6661 60.6872 40.9537C60.0467 41.2413 59.3287 41.3851 58.528 41.3851L58.5383 41.3748Z",
  p2fdba380: "M1.14669 1.41792C1.28429 1.73044 1.34736 2.09216 1.33589 2.50306C1.32442 2.91397 1.24129 3.27279 1.08649 3.57374C0.931683 3.87468 0.731013 4.12644 0.484475 4.3261C0.335406 4.44475 0.177736 4.54603 0.0085998 4.62705L0 4.928L7.7258 5.14503C8.04401 5.15371 8.35648 5.1103 8.66609 5.0177C8.97569 4.9251 9.2509 4.77752 9.49744 4.57786C9.62644 4.47368 9.74111 4.35793 9.84431 4.22772C9.94178 4.10618 10.0249 3.97307 10.0994 3.82838C10.2542 3.52454 10.3374 3.16862 10.3489 2.75771C10.3603 2.3468 10.2973 1.98509 10.1596 1.67257C10.0937 1.52209 10.0163 1.3832 9.92744 1.25587C9.83284 1.11697 9.72391 0.995438 9.60064 0.885477C9.36557 0.674236 9.0961 0.512188 8.79509 0.399333C8.49122 0.286478 8.18161 0.228603 7.86341 0.217029L0.137602 0L0.129001 0.30384C0.295271 0.393545 0.447208 0.503506 0.587677 0.63083C0.822748 0.842071 1.00908 1.1054 1.14669 1.41792Z",
  p30ce0880: "M3.09945 13.7812C3.70384 13.8428 4.32373 14.0687 4.94879 14.4487C5.57385 14.8287 6.0491 15.2755 6.3797 15.7839C6.70515 16.2923 6.91178 16.8264 6.99959 17.381C7.05125 17.7148 7.06158 18.0537 7.03575 18.3875L7.49551 18.6699L14.7947 6.87423C15.0943 6.38638 15.3113 5.86258 15.4456 5.30284C15.5799 4.7431 15.6006 4.18335 15.5179 3.62361C15.4714 3.33604 15.3991 3.0536 15.2855 2.77629C15.1821 2.51953 15.053 2.2679 14.898 2.02655C14.5674 1.51815 14.0922 1.07139 13.4671 0.691378C12.8421 0.311369 12.2273 0.0854176 11.6178 0.0237945C11.3233 -0.00701709 11.0392 -0.00701721 10.7654 0.0186591C10.4658 0.0443354 10.1765 0.105959 9.89758 0.193258C9.35518 0.367857 8.86443 0.640025 8.42017 1.0149C7.97592 1.38464 7.60399 1.81086 7.29921 2.29871L0 14.0893L0.459752 14.3717C0.749034 14.1971 1.05381 14.0533 1.37926 13.9506C1.91649 13.776 2.49506 13.7195 3.09945 13.7812Z",
  p30e4cc80: "M17.0502 20.6641C19.0868 25.2299 20.034 30.5489 19.8919 36.574C19.7498 42.599 18.4711 47.8239 16.1977 52.2485C13.877 56.6732 10.8932 60.3447 7.24634 63.2631C5.0677 65.0047 2.69961 66.4639 0.142079 67.6877L0 72.1124L114.947 75.3132C119.683 75.4544 124.324 74.7954 128.919 73.4304C133.513 72.0653 137.633 69.9001 141.28 66.9817C143.174 65.4754 144.88 63.7809 146.442 61.851C147.863 60.0623 149.142 58.1324 150.231 56.0142C152.552 51.5895 153.783 46.3647 153.926 40.3396C154.068 34.3146 153.168 28.9956 151.084 24.4297C150.089 22.2174 148.953 20.1934 147.626 18.3576C146.206 16.3335 144.595 14.5449 142.796 12.9445C139.291 9.83779 135.312 7.43718 130.813 5.83677C126.314 4.1893 121.672 3.29495 116.936 3.20081L1.98918 0L1.8471 4.42465C4.30991 5.74263 6.58327 7.34304 8.66718 9.22587C12.172 12.3325 14.9189 16.1923 17.0029 20.7582L17.0502 20.6641Z",
  p30fe8300: "M70.4903 132.323C73.4267 128.275 77.5945 124.792 82.9464 121.968C88.2983 119.144 93.4607 117.543 98.481 117.308C103.501 117.072 108.19 117.826 112.547 119.52C115.152 120.556 117.615 121.827 119.936 123.427L123.867 121.309L69.1641 20.7657C66.8908 16.6234 64.0491 12.9519 60.5443 9.65696C57.0395 6.40908 53.1085 3.91432 48.7513 2.21978C46.4779 1.32543 44.1572 0.713515 41.6944 0.38402C39.421 0.0545248 37.1003 -0.086686 34.6848 0.0545262C29.6645 0.28988 24.502 1.84322 19.1502 4.71454C13.7983 7.58586 9.67783 11.0691 6.69404 15.1172C5.27319 17.0941 4.08915 19.0711 3.09455 21.1422C2.0526 23.3545 1.29481 25.661 0.773828 28.0145C-0.173406 32.5804 -0.268129 37.1934 0.584382 41.9004C1.38953 46.6075 2.95247 51.0322 5.17847 55.1744L59.8813 155.718L63.8123 153.599C63.7176 150.822 64.0017 148.045 64.5701 145.315C65.5173 140.749 67.5065 136.466 70.4429 132.37L70.4903 132.323Z",
  p31fc0100: "M106.647 36.2029C105.891 36.2029 105.241 36.1176 104.702 35.9423C104.164 35.7671 103.758 35.511 103.482 35.1695C103.206 34.828 103.068 34.4236 103.068 33.9473C103.068 33.5698 103.149 33.2778 103.304 33.0621C103.465 32.8464 103.652 32.6936 103.874 32.6038C104.092 32.5139 104.31 32.469 104.515 32.469C104.515 33.2328 104.684 33.8664 105.023 34.3696C105.361 34.8684 105.944 35.12 106.768 35.12C107.484 35.12 108.027 34.9538 108.401 34.6213C108.775 34.2888 108.958 33.8619 108.958 33.3497C108.958 33.0171 108.882 32.7431 108.731 32.5274C108.579 32.3117 108.321 32.1005 107.956 31.8893C107.591 31.6826 107.084 31.4445 106.438 31.1794C105.708 30.8603 105.103 30.5503 104.631 30.2492C104.155 29.9482 103.798 29.5977 103.567 29.1843C103.331 28.7754 103.215 28.2632 103.215 27.6521C103.215 26.6635 103.585 25.9087 104.319 25.3874C105.058 24.8662 106.033 24.6056 107.244 24.6056C107.961 24.6056 108.548 24.6955 109.011 24.8752C109.474 25.0549 109.821 25.2931 110.057 25.5851C110.293 25.8772 110.409 26.1962 110.409 26.5467C110.409 26.9376 110.275 27.2477 110.004 27.4858C109.737 27.724 109.332 27.8408 108.793 27.8408C108.793 27.1443 108.642 26.6051 108.339 26.2232C108.036 25.8413 107.582 25.648 106.977 25.648C106.327 25.648 105.855 25.7963 105.552 26.0884C105.25 26.3805 105.098 26.7579 105.098 27.2162C105.098 27.715 105.29 28.1059 105.677 28.3845C106.064 28.6631 106.719 28.9821 107.64 29.3461C108.383 29.6381 108.989 29.9392 109.461 30.2447C109.928 30.5503 110.275 30.9098 110.507 31.3187C110.734 31.7276 110.85 32.2398 110.85 32.8509C110.85 33.9338 110.476 34.7651 109.723 35.3447C108.971 35.9199 107.947 36.2119 106.652 36.2119L106.647 36.2029Z",
  p32675230: "M34.6095 87.6351H35.9443V86.2647C35.9331 87.0138 35.3361 87.6235 34.6095 87.6351ZM16.9692 86.8803L17.3184 87.6235H18.1632C17.662 87.6235 17.2057 87.3332 16.9692 86.8803Z",
  p32cc17f1: "M77.8359 3.60388C74.984 1.13428 71.354 -0.141475 67.6268 0.0124101C59.6813 0.337554 53.4256 6.93475 53.3818 15.0286C53.338 23.115 59.5136 29.7866 67.4396 30.216C75.1834 30.638 82.0202 24.7854 83 16.8926V13.3433C82.5283 9.53341 80.6951 6.07597 77.8359 3.60388ZM68.2322 29.114C60.6563 29.114 54.4905 22.8345 54.4905 15.1155C54.4905 7.3964 60.6563 1.11939 68.2322 1.11939C75.8082 1.11939 81.974 7.39888 81.974 15.1155C81.974 22.832 75.8106 29.114 68.2322 29.114Z",
  p32d6d380: "M136.407 18.5999C134.583 18.5999 133.173 18.0299 132.171 16.8847C131.169 15.7396 130.673 14.1322 130.673 12.0679C130.673 9.84429 131.153 8.15993 132.114 7.02503C133.075 5.89014 134.423 5.32013 136.169 5.32013C137.771 5.32013 139.026 5.80284 139.945 6.76314C140.865 7.72343 141.325 9.15103 141.325 11.0459V12.1654H133.385C133.416 13.8652 133.726 15.1028 134.31 15.8731C134.893 16.6434 135.751 17.0285 136.887 17.0285C137.719 17.0285 138.416 16.8488 138.985 16.4945C139.553 16.135 139.982 15.7293 140.266 15.2671C140.41 15.3133 140.539 15.416 140.648 15.5752C140.762 15.7344 140.818 15.9244 140.818 16.1453C140.818 16.479 140.663 16.8385 140.348 17.2185C140.033 17.5985 139.558 17.9272 138.907 18.1942C138.261 18.4664 137.424 18.5999 136.402 18.5999H136.407ZM138.566 10.8046C138.566 9.54645 138.38 8.54507 138.013 7.80046C137.647 7.05585 137.022 6.68097 136.143 6.68097C135.327 6.68097 134.687 7.0353 134.227 7.74397C133.762 8.45264 133.499 9.47455 133.437 10.8097H138.571L138.566 10.8046Z",
  p33fa3980: "M7.542 41.3748C5.90962 41.3748 4.53036 41.0102 3.40423 40.2758C2.2781 39.5466 1.43092 38.5247 0.873014 37.2101C0.315113 35.9006 0.0309944 34.36 0.0309944 32.5935C0.0309944 30.827 0.325443 29.3634 0.919504 28.0488C1.5084 26.7393 2.39174 25.7122 3.5592 24.9728C4.72666 24.2333 6.16791 23.8635 7.87777 23.8635C9.01424 23.8635 9.95441 23.9765 10.6983 24.2076C11.4421 24.4387 11.9949 24.7622 12.3513 25.173C12.7129 25.589 12.8885 26.046 12.8885 26.5544C12.8885 27.0936 12.6716 27.5301 12.2428 27.8536C11.8089 28.1772 11.251 28.3415 10.564 28.3415C10.564 27.8331 10.4761 27.3401 10.3005 26.8625C10.1249 26.385 9.83559 25.9895 9.43783 25.6712C9.04007 25.3528 8.4925 25.1936 7.80545 25.1936C6.65349 25.1936 5.72882 25.4812 5.03661 26.0512C4.33923 26.6212 3.83816 27.4634 3.52305 28.5674C3.2131 29.6715 3.05296 31.0118 3.05296 32.5832C3.05296 34.0314 3.22343 35.2895 3.5592 36.3628C3.89498 37.436 4.42705 38.2577 5.15542 38.8328C5.88379 39.4028 6.82396 39.6904 7.97592 39.6904C8.77661 39.6904 9.45333 39.5928 10.0009 39.3926C10.5536 39.1923 11.0185 38.9304 11.406 38.6069C11.7882 38.2834 12.1189 37.9444 12.3875 37.5952C12.5166 37.6928 12.6199 37.816 12.6974 37.9752C12.7749 38.1344 12.8162 38.3244 12.8162 38.5453C12.8162 38.8636 12.7181 39.1872 12.5166 39.5107C12.3151 39.8342 12.0104 40.1372 11.5919 40.4145C11.1735 40.6918 10.6311 40.9177 9.95957 41.0923C9.28802 41.2669 8.48216 41.3542 7.53683 41.3542L7.542 41.3748Z",
  p34123900: "M1.78057 2.20174C1.99424 2.68702 2.09217 3.24869 2.07437 3.88675C2.05656 4.5248 1.92747 5.08198 1.68709 5.54929C1.44671 6.0166 1.13511 6.40752 0.752291 6.71756C0.520817 6.90179 0.275988 7.05906 0.0133538 7.18487L0 7.65218L11.9966 7.98918C12.4907 8.00266 12.9759 7.93526 13.4567 7.79147C13.9374 7.64768 14.3648 7.41852 14.7476 7.10848C14.9479 6.94672 15.126 6.76699 15.2862 6.56479C15.4376 6.37607 15.5667 6.16937 15.6824 5.9447C15.9228 5.4729 16.0519 4.92022 16.0697 4.28216C16.0875 3.64411 15.9895 3.08244 15.7759 2.59716C15.6735 2.3635 15.5533 2.14782 15.4153 1.95011C15.2684 1.73443 15.0993 1.54571 14.9078 1.37497C14.5428 1.04695 14.1244 0.795323 13.657 0.620083C13.1851 0.444842 12.7044 0.354975 12.2103 0.337001L0.213669 0L0.200313 0.471802C0.458496 0.611096 0.694423 0.781843 0.912543 0.979551C1.27756 1.30757 1.5669 1.71646 1.78057 2.20174Z",
  p35d4c00: "M86.7629 16.0682V15.1291H87.1546C87.4439 15.1291 87.7066 15.0932 87.938 15.0258C88.174 14.9584 88.3609 14.8236 88.5078 14.6304C88.6547 14.4371 88.7259 14.1586 88.7259 13.7946V3.54975C88.7259 3.11839 88.6547 2.80385 88.5078 2.61064C88.3609 2.41742 88.174 2.28262 87.938 2.21522C87.7021 2.14782 87.4439 2.11187 87.1546 2.11187H86.7629V1.17276H97.4908L97.5754 4.88877H96.3958L96.2934 3.94966C96.24 3.47785 96.0842 3.08244 95.8304 2.75892C95.5767 2.43989 95.1494 2.27813 94.5573 2.27813H91.1253V7.74654H96.1064V8.82944H91.1253V14.9629H95.0737C95.6924 14.9629 96.1465 14.8011 96.4269 14.4731C96.7074 14.1451 96.8854 13.7541 96.9522 13.2958L97.0991 12.3567H98.2787L98.1318 16.0727H86.7629V16.0682Z",
  p371ae6c1: "M25.6227 113.878C30.643 114.396 35.7107 116.231 40.8732 119.385C46.0356 122.539 49.9666 126.21 52.6662 130.4C55.3658 134.589 57.0709 139.014 57.7813 143.579C58.2075 146.357 58.3023 149.134 58.0655 151.911L61.8544 154.217L122.098 56.875C124.561 52.874 126.361 48.5435 127.45 43.8835C128.54 39.2706 128.729 34.6106 128.019 29.9977C127.64 27.597 127.024 25.2906 126.124 22.9841C125.272 20.8659 124.23 18.7948 122.904 16.7708C120.204 12.5815 116.273 8.90996 111.111 5.70914C105.948 2.5554 100.833 0.719644 95.8601 0.201866C93.4447 -0.0334877 91.0766 -0.0805596 88.8032 0.154794C86.3404 0.343077 83.9723 0.860857 81.6516 1.61399C77.1996 3.07318 73.1265 5.33258 69.4796 8.39218C65.7854 11.4518 62.7069 14.9821 60.2441 18.9831L0 116.42L3.78894 118.726C6.15702 117.267 8.71456 116.137 11.3668 115.243C15.8188 113.784 20.555 113.313 25.5753 113.831L25.6227 113.878Z",
  p374ff400: "M77.5217 16.2794C75.9503 16.2794 74.7351 15.7806 73.8715 14.7786C73.0079 13.7766 72.5806 12.3702 72.5806 10.5639C72.5806 8.61825 72.9946 7.14443 73.8226 6.1514C74.6505 5.15837 75.8124 4.65961 77.3169 4.65961C78.6969 4.65961 79.7786 5.08198 80.5709 5.92224C81.3633 6.76249 81.7595 8.01165 81.7595 9.66969V10.6492H74.9176C74.9443 12.1365 75.2114 13.2194 75.7144 13.8934C76.2174 14.5674 76.9564 14.9044 77.9357 14.9044C78.6524 14.9044 79.2533 14.7472 79.743 14.4371C80.2326 14.1226 80.6021 13.7676 80.8469 13.3632C80.9716 13.4037 81.0828 13.4935 81.1763 13.6328C81.2743 13.7721 81.3232 13.9384 81.3232 14.1316C81.3232 14.4237 81.1897 14.7382 80.9181 15.0707C80.6466 15.4032 80.2371 15.6908 79.6762 15.9244C79.1198 16.1626 78.3986 16.2794 77.5172 16.2794H77.5217ZM79.3824 9.45401C79.3824 8.35314 79.2221 7.47694 78.9061 6.8254C78.59 6.17387 78.0514 5.84585 77.2947 5.84585C76.5913 5.84585 76.0394 6.15589 75.6432 6.77597C75.2426 7.39606 75.0155 8.29023 74.9621 9.4585H79.3868L79.3824 9.45401Z",
  p37a0ff00: "M27.1805 1.20171C27.0679 1.20171 26.9552 1.21333 26.8426 1.24817C26.8989 1.23075 26.9552 1.21333 27.0115 1.20171H27.1805Z",
  p39077f00: "M22.2781 10.3674C22.2854 10.5287 22.227 10.6801 22.1176 10.7918L12.8203 20.2632C12.6428 20.4443 12.2368 20.4319 12.0447 20.2383L7.42522 15.5399C7.31581 15.4282 7.25989 15.2619 7.26718 15.0832C7.27447 14.9268 7.33283 14.7804 7.41549 14.7109C7.5176 14.624 7.64646 14.5843 7.78019 14.5843C7.95281 14.5843 8.12786 14.6513 8.25915 14.7854L12.4434 19.0519L21.3347 9.99507C21.5535 9.77417 21.9353 9.8114 22.086 9.94543C22.2003 10.0447 22.2732 10.2036 22.2781 10.3674Z",
  p39e71000: "M66.3536 33.7368C62.6883 30.9022 57.9605 29.2097 53.7082 29.2097C53.6003 29.2097 53.494 29.2114 53.3861 29.2131L52.6979 29.2269V28.5272L52.6844 9.92177C52.6827 7.44047 50.6991 5.35357 46.6223 3.54447C40.0289 0.613894 32.2498 0 26.886 0C22.396 0 17.8081 0.430412 13.62 1.24494C9.6663 2.01316 6.32997 3.23924 3.42375 4.99175C2.2616 5.6931 0.757044 6.93975 0.19368 8.89289C-0.035714 9.68684 -0.0104132 10.4825 0.0182611 11.4033C0.0283814 11.7086 0.0385017 12.0241 0.0385017 12.3516L0.0975369 64.4075C0.0992236 66.3143 1.83148 67.8662 2.86376 68.6207C5.43938 70.5053 9.18727 71.9285 14.0012 72.8477C18.6515 73.7376 23.2967 73.9606 26.3749 73.9914C26.5824 73.9914 26.7899 73.9949 26.9957 73.9949C32.5028 73.9949 37.8598 73.2695 43.3703 71.7759L43.6115 71.7108L43.8359 71.8205C46.7994 73.2678 49.935 74 53.1584 74C56.9805 74 60.7925 72.9368 64.1828 70.9237C67.2458 69.1043 69.8569 66.4927 71.7359 63.3735C73.5862 60.304 74.6944 56.7972 74.9424 53.2373C75.4754 45.5997 72.2638 38.3101 66.3536 33.7368ZM1.43848 47.0247L1.43173 45.6957L2.50111 46.4605C4.90806 48.1787 7.68946 49.4168 11.2535 50.3582C16.1315 51.5517 20.9572 52.1313 26.0106 52.1313C27.5219 52.1313 29.0703 52.0781 30.6103 51.9701L31.2816 51.9238L31.3288 52.6063C31.5194 55.3379 32.1132 57.9033 33.1438 60.448L33.4996 61.3277L32.5652 61.3929C30.2477 61.5541 28.1325 61.6329 26.1 61.6329C22.1497 61.6329 18.5148 61.3311 14.9879 60.7087H14.9778C7.55115 59.2905 3.22303 57.1556 1.74715 54.177C1.40474 53.4843 1.43005 52.5291 1.45197 51.7626C1.45703 51.5826 1.46041 51.4111 1.46041 51.2636L1.43848 47.0247ZM31.3592 50.5263L30.7908 50.5657C29.2441 50.6754 27.6822 50.7303 26.1472 50.7303C21.4177 50.7303 16.6831 50.2039 12.0699 49.163C8.07235 48.2644 4.93336 46.7914 2.74231 44.7834L2.71364 44.7577L2.69003 44.7286L2.60738 44.636C2.13172 44.0924 1.48065 43.3499 1.47559 42.4839L1.43679 36.1169L1.42836 34.7931L2.49774 35.551C4.49988 36.9726 6.54587 38.0014 8.75378 38.6976C12.7378 39.9529 16.9749 40.7279 21.7095 41.064C23.1752 41.1532 24.6326 41.1961 26.1607 41.1961C28.2624 41.1961 30.4652 41.1121 32.8907 40.9389L34.0816 40.8548L33.5384 41.9352C32.3881 44.2295 31.7337 46.7006 31.4149 49.9501L31.3592 50.5263ZM26.1827 39.7968C18.4659 39.7968 11.547 38.6085 6.70104 36.4496C4.84397 35.6213 3.42544 34.613 2.23798 33.2789L2.21268 33.2498L2.19076 33.2189C1.53631 32.2878 1.45872 31.3155 1.45703 30.6656L1.44691 25.2297V23.9282L2.50111 24.6621C5.11215 26.4712 8.07066 27.7556 11.547 28.5907C16.1534 29.695 21.3165 30.2797 26.4778 30.2797C32.6428 30.2797 38.5767 29.4566 43.6368 27.8979C46.3727 27.0542 48.417 26.0408 50.2606 24.6072L51.3637 23.7498L51.3451 25.1611L51.2979 28.6696L51.2895 29.256L50.7211 29.34C45.337 30.1374 40.648 32.581 37.1598 36.4067L35.0076 39.0646L34.8355 39.2772L34.5657 39.3098C31.9243 39.6288 29.0248 39.7968 26.1827 39.7968ZM1.53462 9.27186C2.05076 6.82486 5.93359 5.10493 6.7061 4.78598C13.5559 1.94971 21.217 1.35468 26.4374 1.35468C29.3959 1.35468 32.3341 1.54502 35.1729 1.91713C39.4234 2.47787 43.2135 3.51875 46.7606 5.10321C48.2011 5.74454 50.7649 7.3393 51.222 9.24271C51.4008 9.98522 51.2423 10.7003 50.7615 11.3073C48.336 14.3699 43.3501 15.8344 40.5957 16.4328C35.9049 17.4548 31.1113 17.9727 26.3496 17.9727C22.6119 17.9727 18.8184 17.6538 15.0722 17.0244C8.96294 15.9955 4.65505 14.1813 2.26497 11.6331C1.43679 10.75 1.41149 9.86175 1.53462 9.27186ZM2.48256 13.7698C4.36831 15.0747 6.13599 15.9818 8.04536 16.6197C13.3754 18.4031 19.6601 19.3462 26.2198 19.3462C30.3725 19.3462 34.5488 18.981 38.6307 18.2608C42.2571 17.4531 46.764 16.4448 50.2673 13.7372L51.362 12.8901L51.3502 14.2876L51.2962 20.6632C51.2844 22.0076 50.1628 23.0039 49.3194 23.6349C47.1334 25.2777 44.5089 26.4386 41.2974 27.1863C36.416 28.3197 31.3811 28.8959 26.3328 28.8959C21.2844 28.8959 16.6965 28.3729 11.9839 27.344C9.23281 26.7438 6.74321 25.7373 4.14735 24.1785L4.09338 24.1477L4.04615 24.1065C3.90784 23.983 3.75772 23.8579 3.59917 23.7258C2.75075 23.021 1.69655 22.1448 1.5633 20.8004C1.43173 19.4731 1.44017 18.139 1.4486 16.8495C1.45366 16.0367 1.45872 15.1947 1.42836 14.3596L1.38113 13.005L2.48256 13.7698ZM40.3916 71.0763C35.9741 72.0846 31.3373 72.5956 26.6077 72.5956C23.241 72.5956 19.7259 72.3366 16.1619 71.8256C8.75041 70.7625 5.40733 68.7802 3.53845 67.3809L3.50134 67.3535L3.46929 67.3226C3.35628 67.2111 3.22809 67.0945 3.08978 66.9711C2.39316 66.3417 1.52619 65.5581 1.51101 64.392L1.43679 57.9101L1.42161 56.5692L2.49943 57.3408C4.51843 58.7847 6.67574 59.8633 9.09619 60.6418C12.7125 61.7581 16.4216 62.4543 20.7632 62.8247C22.5832 62.9705 24.3981 63.0408 26.3092 63.0408C28.6503 63.0408 31.1011 62.9328 33.7982 62.7098L34.2064 62.6772L34.424 63.0305C36.1411 65.8256 38.1719 68.0548 40.6362 69.8502L41.8607 70.7419L40.3916 71.0763ZM67.7131 66.3623C63.8336 70.3063 58.6773 72.4773 53.1921 72.4773C47.7069 72.4773 42.5489 70.3063 38.6694 66.3623C34.79 62.4183 32.6546 57.1745 32.6546 51.598C32.6546 46.0215 34.79 40.7777 38.6694 36.8354C42.5489 32.8914 47.7069 30.7187 53.1921 30.7187C58.6773 30.7187 63.8336 32.8914 67.7131 36.8354C71.5925 40.7777 73.7279 46.0215 73.7279 51.598C73.7279 57.1745 71.5925 62.4183 67.7131 66.3623Z",
  p3a039f00: "M143.216 19.9685C143.919 19.9685 144.525 19.8651 145.037 19.6674C145.544 19.4652 145.98 19.1911 146.341 18.8451C146.697 18.4991 147 18.0812 147.24 17.6049C147.48 17.1242 147.685 16.6074 147.85 16.0503L144.048 6.91077C143.937 6.61871 143.821 6.39853 143.697 6.24126C143.572 6.08849 143.43 5.98065 143.26 5.91774C143.096 5.85484 142.882 5.82338 142.619 5.82338H142.557V4.88427H147.788V5.82338H147.725C147.311 5.82338 147 5.89977 146.795 6.05254C146.59 6.20532 146.483 6.44796 146.483 6.78496C146.483 6.89729 146.497 7.01861 146.523 7.14892C146.55 7.27923 146.59 7.42302 146.648 7.57579L148.095 11.2064C148.233 11.5254 148.362 11.8669 148.478 12.2309C148.593 12.5949 148.705 12.9364 148.807 13.2644C148.909 13.5924 148.976 13.8665 149.003 14.0867C149.101 13.6957 149.216 13.3048 149.354 12.9094C149.492 12.514 149.622 12.1276 149.746 11.7501L151.108 7.72407C151.175 7.5713 151.224 7.40954 151.255 7.2343C151.282 7.05906 151.295 6.91077 151.295 6.78496C151.295 6.45245 151.184 6.20981 150.966 6.05254C150.743 5.89977 150.414 5.82338 149.973 5.82338H149.911V4.88427H154.251V5.82338H154.189C153.926 5.82338 153.708 5.86832 153.525 5.95818C153.347 6.04805 153.187 6.20981 153.049 6.43897C152.911 6.66813 152.769 7.00064 152.613 7.432L149.47 16.1311C149.11 17.1331 148.767 17.9509 148.437 18.5845C148.108 19.2181 147.739 19.7123 147.333 20.0673C146.928 20.4223 146.412 20.6694 145.784 20.8087C145.157 20.948 144.373 21.0154 143.438 21.0154H143.211V19.9729L143.216 19.9685Z",
  p3a433500: "M74.1671 20.3823C74.4272 20.6454 74.4831 21.0152 74.3956 21.2063C74.3032 21.3379 73.8559 21.5042 73.71 21.4645L68.2201 15.8998L62.9952 21.2262C62.7861 21.4396 62.4238 21.5315 62.1613 21.2857C62.0762 21.2063 62.0275 21.0773 62.0251 20.9333C62.0202 20.7521 62.0932 20.5734 62.222 20.4419L67.4567 15.1155L62.2172 9.78658C61.9886 9.55575 61.9911 9.16359 62.1005 9.0246C62.2172 8.87816 62.3606 8.79874 62.5114 8.79129C62.6791 8.78384 62.8493 8.85831 62.9952 9.00723L68.2201 14.3386L73.6249 8.83349C73.7537 8.7764 74.1865 8.83349 74.3032 8.9278C74.347 8.97 74.4369 9.15863 74.4442 9.37953C74.4467 9.521 74.4151 9.58553 74.4053 9.59546L68.9884 15.1204L74.1671 20.3823Z",
  p3ac0c780: "M2.0663 2.51628C2.31426 3.07088 2.4279 3.71279 2.40724 4.442C2.38658 5.17121 2.23677 5.80798 1.95782 6.34205C1.67887 6.87611 1.31727 7.32288 0.873011 7.67721C0.604392 7.88776 0.320276 8.06749 0.0154966 8.21128L0 8.74535L13.9217 9.13049C14.4951 9.1459 15.0582 9.06887 15.6161 8.90454C16.174 8.74021 16.6699 8.47831 17.1141 8.12398C17.3466 7.93911 17.5532 7.7337 17.7392 7.50261C17.9148 7.28693 18.0646 7.05071 18.1989 6.79395C18.4779 6.25475 18.6277 5.62311 18.6484 4.8939C18.669 4.16469 18.5554 3.52279 18.3074 2.96818C18.1886 2.70115 18.0491 2.45465 17.889 2.2287C17.7185 1.98221 17.5222 1.76653 17.3001 1.57139C16.8765 1.19652 16.3909 0.908941 15.8485 0.708666C15.301 0.508391 14.7431 0.405685 14.1697 0.385144L0.247956 0L0.232457 0.539202C0.532071 0.698395 0.805857 0.893535 1.05898 1.11949C1.48257 1.49436 1.81834 1.96167 2.0663 2.51628Z",
  p3c5ef6d0: "M88.7216 109.596C88.7268 109.682 88.7114 109.743 88.6755 109.778C87.1981 111.21 85.2592 112 83.2176 112C81.176 112 79.3396 111.261 77.8161 109.925C76.4824 108.766 74.8871 108.153 73.1995 108.153C71.5118 108.153 69.7831 108.806 68.3417 110.036C65.3204 112.623 60.9448 112.617 57.9338 110.021C55.0868 107.576 51.2345 107.511 48.562 109.869C45.397 112.643 40.8111 112.653 37.6564 109.884C34.989 107.566 31.1213 107.571 28.459 109.9C25.3505 112.612 20.8313 112.633 17.7074 109.95C17.5843 109.849 17.5125 109.722 17.5022 109.581C17.4868 109.409 17.5843 109.267 17.6612 109.176C17.8254 108.994 18.1639 109.029 18.4307 109.247C21.0981 111.529 24.935 111.529 27.5614 109.247C30.7109 106.498 35.2609 106.473 38.3746 109.191C41.0317 111.494 44.9559 111.55 47.5104 109.328C50.7164 106.519 55.3279 106.473 58.4826 109.232C61.1911 111.585 65.0126 111.565 67.7775 109.181C70.8911 106.478 75.4308 106.504 78.5753 109.242C81.2581 111.575 85.0899 111.534 87.8958 109.14C87.9984 109.075 88.3985 109.09 88.5626 109.216C88.6344 109.272 88.7114 109.409 88.7165 109.55V109.601L88.7216 109.596Z",
  p3c642000: "M62.5782 16.0682V15.1291H62.6628C62.9789 15.1291 63.2638 15.0932 63.5086 15.0258C63.7579 14.9584 63.9537 14.8146 64.0962 14.5989C64.2431 14.3832 64.3143 14.0597 64.3143 13.6283V7.24328C64.3143 6.8254 64.2386 6.51536 64.0873 6.31316C63.9359 6.11096 63.7401 5.98065 63.4997 5.91774C63.2593 5.85484 62.9878 5.82338 62.6851 5.82338H62.6228V4.88427H66.0548L66.4688 6.92875H66.5712C66.7492 6.49739 66.954 6.10646 67.181 5.76048C67.408 5.41449 67.6974 5.14489 68.0491 4.95617C68.4007 4.76745 68.8726 4.67309 69.4646 4.67309C70.2347 4.67309 70.8 4.81687 71.1606 5.09995C71.5167 5.38303 71.6992 5.77845 71.6992 6.27721C71.6992 6.77597 71.5301 7.14892 71.1918 7.4365C70.8535 7.71958 70.3193 7.86336 69.5892 7.86336C69.5892 7.29271 69.5136 6.87483 69.3622 6.60972C69.2109 6.34461 68.9349 6.2143 68.5343 6.2143C68.1737 6.2143 67.871 6.35809 67.6128 6.64117C67.3591 6.92425 67.1588 7.29271 67.0119 7.73755C66.865 8.18239 66.7581 8.6497 66.6914 9.13498C66.6201 9.62027 66.589 10.0651 66.589 10.4695V13.7227C66.589 14.1271 66.6646 14.4282 66.816 14.6304C66.9673 14.8326 67.1632 14.9629 67.4036 15.0258C67.644 15.0887 67.9155 15.1201 68.2182 15.1201H68.8191V16.0592H62.5782V16.0682Z",
  p3f18c100: "M56.3996 16.2794C54.8684 16.2794 53.662 15.7986 52.7806 14.8415C51.8992 13.88 51.4586 12.4196 51.4586 10.4605C51.4586 8.50142 51.877 7.05905 52.7183 6.09748C53.5596 5.1359 54.806 4.65961 56.462 4.65961C57.9933 4.65961 59.1952 5.14039 60.081 6.09748C60.9624 7.05905 61.4031 8.51041 61.4031 10.4605C61.4031 12.4106 60.9846 13.8845 60.1433 14.8415C59.302 15.8031 58.0556 16.2794 56.3996 16.2794ZM56.4397 15.1291C57.0852 15.1291 57.606 14.9539 57.9888 14.5989C58.3761 14.2439 58.6521 13.7182 58.8168 13.0217C58.9815 12.3253 59.0661 11.4715 59.0661 10.456C59.0661 8.91032 58.8657 7.75552 58.4651 6.98267C58.0645 6.20981 57.3834 5.82338 56.4175 5.82338C55.4515 5.82338 54.7749 6.20981 54.3831 6.98267C53.9914 7.75552 53.7956 8.91481 53.7956 10.456C53.7956 11.9972 53.9959 13.1475 54.3965 13.9384C54.7971 14.7292 55.4782 15.1291 56.4442 15.1291H56.4397Z",
  p4ae3e00: "M100.179 36.2029C99.1334 36.2029 98.3588 35.9648 97.8558 35.484C97.3528 35.0032 97.1035 34.1585 97.1035 32.9497V26.0659H95.5322V25.1673C95.8349 25.1673 96.1465 25.1044 96.4625 24.9785C96.7786 24.8527 97.0501 24.673 97.2682 24.4348C97.5042 24.1967 97.6956 23.9046 97.8469 23.5497C97.9983 23.1947 98.1229 22.7588 98.2209 22.2466H99.3782V24.8123H102.085V26.0659H99.3782V32.9497C99.3782 33.6327 99.5118 34.1315 99.7833 34.4505C100.05 34.7696 100.429 34.9313 100.91 34.9313C101.159 34.9313 101.39 34.9178 101.613 34.8909C101.831 34.8639 102.054 34.828 102.276 34.7875V35.812C102.085 35.9109 101.791 36.0007 101.399 36.0816C101.007 36.167 100.602 36.2074 100.188 36.2074L100.179 36.2029Z",
  p4d14a80: "M31.1062 39.747C31.0308 39.8338 30.9068 39.8909 30.7658 39.8984C30.5859 39.9083 30.4035 39.8388 30.2698 39.7122L22.6014 32.4796C22.3632 32.2538 22.3632 31.8666 22.5212 31.6705C22.5966 31.5787 22.7498 31.5141 22.9102 31.5017H22.9564C23.0974 31.5017 23.2214 31.5439 23.3041 31.6209L31.0211 38.8907C31.2909 39.1438 31.2812 39.5385 31.1062 39.747Z",
  p5311af0: "M73.6717 39.6301C74.4474 38.3516 74.6827 36.859 74.3711 35.1935C74.1492 34.0085 73.6934 32.9197 72.8925 31.6643L71.696 29.7888C71.096 28.85 70.7837 27.8317 70.7662 26.7625L70.7074 23.1949C70.6899 22.1467 70.657 21.3418 70.3839 20.5285C69.9352 19.1922 69.1965 17.9918 68.1884 16.9617C67.4847 16.2426 66.674 15.7014 65.6378 15.2592C63.3078 14.2632 61.4287 12.4874 60.2014 10.1237L59.084 7.96995C58.3166 6.49062 57.1313 5.38374 55.5624 4.6793C54.4268 4.17015 53.3948 3.93301 52.3138 3.93301C52.2305 3.93301 52.1458 3.93441 52.0624 3.9372L49.5483 4.02368C49.4272 4.02787 49.3047 4.02996 49.1842 4.02996C47.1938 4.02996 45.2734 3.4678 43.4761 2.35953L41.2722 0.99947C40.2626 0.377329 39.2306 0.05231 38.2056 0.0348733L36.1872 0C34.962 0.137401 33.79 0.56425 32.702 1.26799L30.6632 2.5883C29.1418 3.57242 27.4532 4.07181 25.6433 4.07181C25.5593 4.07181 25.4739 4.07181 25.3899 4.06832L23.0417 4.00834L20.8181 4.06344C20.0081 4.15272 19.2288 4.41636 18.3691 4.89133C17.0864 5.59996 16.1189 6.61896 15.4937 7.91904L14.3854 10.2249C13.5816 11.896 12.4362 13.1452 10.98 13.9368L8.12559 15.4872C7.30154 15.9357 6.36758 16.4435 5.67866 17.1521C4.35963 18.5073 3.64061 20.3681 3.65461 22.3922L3.67281 25.0593C3.68681 27.2005 3.0462 29.196 1.76848 30.9905C0.141397 33.2747 -0.386495 35.9544 0.282822 38.5364C0.491458 39.3413 0.911531 40.045 1.43942 40.882L3.11341 43.5352C3.81634 44.6497 4.11599 45.8152 4.00467 47.0009L3.76873 49.509C3.66511 50.6033 3.6294 51.5226 3.78833 52.4495C4.03618 53.8925 4.71039 55.1271 5.79278 56.1189C6.50831 56.7738 7.32955 57.2362 8.42104 57.7705L10.4885 58.7811L10.5312 58.802L10.5718 58.8257C11.6192 59.4451 12.4859 60.2681 13.1469 61.2724L13.1742 61.3136L13.198 61.3575L14.155 63.1172L14.4883 63.731L14.1123 64.3197L12.3298 67.1054L3.45928 81.4564L1.60955 84.4423C1.46043 84.6829 1.41142 84.9717 1.47583 85.2339C1.51784 85.4034 1.62636 85.6405 1.9064 85.8072C1.91481 85.8114 1.98692 85.8498 2.26417 85.8498C2.33908 85.8498 2.41749 85.8477 2.48961 85.8442L8.84671 84.8503L16.2281 83.5739L17.118 83.4205L17.5065 84.2323L20.1873 89.8351L23.4597 96.6242L23.7992 97.1215C24.192 96.8439 24.4986 96.5147 24.7108 96.1423L26.2896 93.381L26.2924 93.3754L26.2952 93.3705L30.2067 86.6818L30.2109 86.6749L30.2151 86.6686L32.7146 82.5229L36.0044 77.061C36.2565 76.6432 36.699 76.3838 37.1603 76.3838C37.5601 76.3838 37.934 76.5783 38.1608 76.9034L38.2483 77.0289L38.2679 77.0568L38.2861 77.0861L38.9807 78.2132L38.9828 78.216L38.9842 78.2195L45.314 88.6334L45.3175 88.6389L45.3203 88.6438L50.0034 96.5259C50.1819 96.8265 50.4627 97.0134 50.6202 97.0134C50.6265 97.0134 50.6321 97.0127 50.6384 97.012C50.7756 96.996 50.9836 96.9709 51.1859 96.5147L54.2069 89.7012L56.574 84.3837C56.7953 83.885 57.3127 83.5746 57.9225 83.5746C57.9988 83.5746 58.0737 83.5795 58.1465 83.59L64.6954 84.5204L64.7066 84.5218L70.8418 85.4543C71.2269 85.5129 71.6309 85.5701 71.9753 85.5701C72.5865 85.5701 72.6726 85.4145 72.7714 85.1397C72.8295 84.9793 72.8085 84.9403 72.7812 84.8914L71.2598 82.1316L67.7921 76.789L67.7879 76.7834L67.7837 76.7771L62.4859 68.3957L59.9094 64.3406L59.5552 63.7833L59.8436 63.1898C60.8483 61.1225 62.4446 59.4932 64.4602 58.4784L66.3211 57.541C67.5701 56.9119 68.5636 56.0003 69.359 54.7532C70.1361 53.5368 70.5135 52.5283 70.5828 51.4835C70.6437 50.5754 70.6269 49.6575 70.5331 48.6762C70.3195 46.4541 70.8348 44.3003 72.0649 42.2755L73.6717 39.6301ZM22.8148 91.6652C22.7994 91.629 22.7868 91.5983 22.7749 91.5739L18.2339 82.1051L18.0197 81.7473L15.1618 82.1553L6.42919 83.6032L3.95006 84.014L5.20188 81.8428L6.73025 79.1918L6.74075 79.1736L6.75195 79.1555L10.8785 72.5582L12.9627 69.0645L12.9711 69.0499L12.9802 69.0359L14.496 66.6541L15.2297 65.5012L16.2729 66.3863C18.6015 68.3608 20.2475 69.3631 22.7805 69.3631C23.4506 69.3631 24.1815 69.2954 25.0167 69.1559C25.4263 69.0883 25.8401 69.0534 26.2475 69.0534C27.526 69.0534 28.7708 69.3861 29.9463 70.0431L29.9757 70.0591L30.0037 70.0773L32.5234 71.6745C33.4658 72.2715 34.2723 72.6746 35.0621 72.9431L36.5449 73.4467L35.66 74.7349L34.6728 76.1724L32.7125 79.5377L32.7111 79.5405L32.7097 79.5433L25.2282 92.2344L24.0324 94.2626M47.8477 89.9432C47.798 89.8602 47.749 89.7772 47.6986 89.6935L40.6778 77.967L38.6341 74.7098L37.899 73.5381L39.1739 72.992L40.138 72.5791C40.864 72.268 41.6411 71.9081 42.4022 71.3836L44.3016 70.0731C45.3497 69.3491 46.6001 68.9662 47.917 68.9662C48.0759 68.9662 48.2384 68.9718 48.3987 68.9829L52.171 69.2431C52.3306 69.2542 52.4888 69.2598 52.6414 69.2598C53.721 69.2598 54.6368 68.9906 55.4391 68.4375L57.7509 66.3946L58.6702 65.5821L59.4564 66.5244L60.0788 67.2707L60.1286 67.3299L60.1699 67.3955L62.364 70.8612V70.8633L62.3661 70.8647L66.2378 77.0282L67.7725 79.401L67.7921 79.4317L67.8096 79.4631L69.1377 81.8205L70.7627 84.1514L67.8621 83.5628L62.8485 82.8228L56.0671 81.7438C55.6121 82.518 55.2445 83.2378 54.9294 83.968L53.1224 88.157L53.121 88.1598V88.1626L51.4351 92.0175L50.6405 94.1385M71.9095 39.5743L71.8941 39.5987L70.3279 42.0803C69.4899 43.4096 69.0572 44.7306 69.0054 46.1172L69.0467 49.0326L69.0488 49.1993C69.0768 51.0706 69.1083 53.1909 67.4224 54.7574C66.8021 55.3342 66.1811 55.7869 65.5244 56.1398L62.7526 57.6324C61.0611 58.5426 60.0298 59.865 58.8214 61.8409L56.8877 65.0011L56.8702 65.029L56.852 65.0555C55.7717 66.6199 54.1348 67.5462 52.2424 67.664L52.1927 67.6668H52.1423L49.6897 67.6131H49.6736L49.6568 67.6117L47.2484 67.4931C47.177 67.4897 47.1056 67.4876 47.0349 67.4876C46.3214 67.4876 45.5744 67.6703 44.8148 68.0295L42.9083 69.1099L40.3823 70.7022C39.7116 71.1256 38.6789 71.6989 37.4572 71.7972C37.3347 71.8077 37.2087 71.8126 37.084 71.8126C35.9974 71.8126 34.8653 71.431 33.811 70.7085L31.3633 69.0318C29.8588 68.0009 28.1673 67.4785 26.3358 67.4785C26.2847 67.4785 26.2328 67.4785 26.1817 67.4799L23.9077 67.6654C23.4569 67.7024 23.0879 67.7191 22.7469 67.7191C21.8753 67.7191 21.1178 67.6013 20.4323 67.3571C18.215 66.5697 17.1138 64.764 16.142 63.1702C15.9852 62.9136 15.8374 62.6709 15.6848 62.4323L13.9961 59.784C13.1154 58.6172 12.0211 57.7837 10.6516 57.2369L10.6166 57.2229L10.583 57.2069L8.54566 56.2395C7.79233 55.881 7.22243 55.3265 6.71834 54.7797C5.99652 53.9979 5.55054 53.0786 5.35451 51.9703C5.18858 51.0364 5.22358 50.076 5.28589 49.1777L5.47073 46.528C5.53794 45.5599 5.3363 44.6246 4.85392 43.6705L3.15892 40.732C2.56242 39.6984 2.08354 38.8301 1.79509 37.8459C1.43592 36.6191 1.46323 35.4473 1.8784 34.2637C2.22286 33.2838 2.69054 32.4475 3.10221 31.7577L4.43595 29.5259C5.10876 28.3994 5.40631 27.2054 5.3461 25.8746L5.22358 23.1608C5.17667 22.1299 5.2978 21.1842 5.58275 20.3514C5.93211 19.3296 6.51811 18.5017 7.32465 17.8893C8.09548 17.3034 8.90832 16.8403 9.69456 16.3919L9.72397 16.3751L12.131 15.0032C13.812 14.0449 15.0813 12.6221 15.8017 10.8875L16.6433 8.8662C17.2195 7.47684 18.2837 6.50248 19.7196 6.04773C20.8398 5.69272 22.0965 5.53509 23.7936 5.53509C24.4503 5.53509 25.1028 5.55741 25.7337 5.57973C25.9479 5.5874 26.16 5.59508 26.3701 5.60135C26.4387 5.60345 26.5087 5.60414 26.5773 5.60414C27.8991 5.60414 29.2112 5.21566 30.4763 4.44914L33.0485 2.891C34.502 2.0108 36.0009 1.56442 37.502 1.56442C37.6259 1.56442 37.7505 1.56721 37.8745 1.57348C38.8294 1.62091 39.8208 1.94872 40.8206 2.54785L43.6617 4.25106C45.1984 5.17241 46.7604 5.63971 48.3056 5.63971C48.4701 5.63971 48.6367 5.63413 48.8013 5.62367L51.6697 5.44303C51.8216 5.43396 51.9742 5.42908 52.1227 5.42908H52.1234C53.2155 5.42908 54.2223 5.69133 55.1143 6.20885C55.9348 6.68522 56.6538 7.36315 57.3127 8.28172C57.9491 9.16959 58.4896 10.1314 58.9649 11.2222C59.9577 13.5057 61.2235 14.4403 63.6796 15.8932L66.4009 17.5029C68.147 18.5366 69.1769 20.6722 69.0894 23.0771L69.0054 25.3787C68.9543 26.7862 69.1573 27.9489 69.646 29.0327L71.0603 31.6008C71.1541 31.771 71.2514 31.9433 71.3459 32.11C71.7044 32.744 72.0754 33.3989 72.3597 34.1438C72.7048 35.0484 72.8393 35.9781 72.7594 36.9071C72.6817 37.8166 72.4003 38.7059 71.9235 39.5491L71.9095 39.5743Z",
  p65d7a40: "M48.8873 59.5189C45.8065 59.5189 43.3114 62.0971 43.3114 65.2675C43.3114 68.438 45.8065 71.0162 48.8873 71.0162C51.9682 71.0162 54.4633 68.4438 54.4633 65.2675C54.4633 62.0913 51.9682 59.5189 48.8873 59.5189ZM48.8817 69.6458C46.5387 69.6458 44.635 67.6831 44.635 65.2675C44.635 62.8519 46.5387 60.8834 48.8817 60.8834C51.2247 60.8834 53.1341 62.8461 53.1341 65.2675C53.1341 67.689 51.2304 69.6458 48.8817 69.6458Z",
  p6b9c500: "M44.0277 18.3637V17.2904H44.2188C44.5701 17.2904 44.8904 17.2493 45.1797 17.1723C45.4689 17.0953 45.7014 16.9309 45.877 16.6845C46.0527 16.438 46.1405 16.0785 46.1405 15.6009V2.89115C46.1405 2.42898 46.0423 2.09005 45.8512 1.8641C45.6601 1.64328 45.4225 1.49436 45.1435 1.42247C44.8646 1.35057 44.5649 1.31463 44.2447 1.31463H44.0277V0.241357H48.775V5.17634C48.775 5.47932 48.7647 5.79771 48.7492 6.1315C48.7337 6.46529 48.7182 6.75287 48.7027 6.98909C48.6872 7.22531 48.6769 7.3691 48.6769 7.42045H48.7957C49.0333 6.97368 49.3226 6.59367 49.6584 6.27529C49.9941 5.9569 50.3816 5.72068 50.8207 5.56149C51.2598 5.40229 51.766 5.32526 52.3446 5.32526C53.7032 5.32526 54.7415 5.695 55.4492 6.43448C56.162 7.17396 56.5185 8.35507 56.5185 9.97781V15.5804C56.5185 16.0734 56.596 16.4431 56.7458 16.6896C56.8956 16.9361 57.1074 17.1004 57.3708 17.1774C57.6343 17.2596 57.9442 17.2956 58.2955 17.2956H58.3678V18.3688H53.884V10.2346C53.884 9.21779 53.7032 8.42183 53.3467 7.85181C52.9851 7.2818 52.3497 6.99422 51.4406 6.99422C50.831 6.99422 50.3299 7.15855 49.927 7.48207C49.5292 7.80559 49.2348 8.2575 49.054 8.82751C48.868 9.39752 48.7802 10.06 48.7802 10.8046V15.6934C48.7802 16.1555 48.8628 16.4996 49.0333 16.7307C49.2038 16.9618 49.4311 17.1107 49.7152 17.1826C50.0045 17.2545 50.3248 17.2904 50.676 17.2904H50.7483V18.3637H44.0329H44.0277Z",
  p7661380: "M96.5272 41.1334V40.0602H96.6977C97.0645 40.0602 97.3951 40.0191 97.6792 39.942C97.9685 39.865 98.1958 39.7007 98.3611 39.4542C98.5315 39.2077 98.6142 38.8482 98.6142 38.3707V31.0272C98.6142 30.5651 98.5315 30.221 98.3611 29.9899C98.1906 29.7588 97.9736 29.6099 97.6998 29.538C97.4261 29.4661 97.1161 29.4302 96.7648 29.4302H96.646V28.3569H100.846L101.156 30.2159H101.275C101.739 29.3891 102.272 28.8293 102.881 28.5366C103.491 28.2439 104.193 28.095 104.994 28.095C106.275 28.095 107.262 28.4647 107.959 29.2042C108.656 29.9437 109.003 31.1248 109.003 32.7475V38.3501C109.003 38.8431 109.075 39.2128 109.219 39.4593C109.364 39.7058 109.566 39.8702 109.829 39.9472C110.092 40.0293 110.402 40.0653 110.754 40.0653H110.873V41.1386H106.363V33.0043C106.363 31.9875 106.187 31.1916 105.836 30.6216C105.485 30.0515 104.854 29.764 103.94 29.764C103.284 29.764 102.757 29.9386 102.359 30.2878C101.962 30.637 101.677 31.1043 101.507 31.6948C101.337 32.2854 101.254 32.9119 101.254 33.5795V38.4682C101.254 38.9304 101.337 39.2745 101.507 39.5055C101.677 39.7366 101.894 39.8856 102.168 39.9575C102.442 40.0293 102.752 40.0653 103.103 40.0653H103.222V41.1386H96.5272V41.1334Z",
  p7685200: "M17.3695 36.2029C15.8382 36.2029 14.6319 35.7221 13.7505 34.7651C12.8691 33.8035 12.4284 32.3431 12.4284 30.384C12.4284 28.4249 12.8468 26.9826 13.6882 26.021C14.5295 25.0594 15.7759 24.5831 17.4318 24.5831C18.9631 24.5831 20.165 25.0639 21.0508 26.021C21.9322 26.9826 22.3729 28.4339 22.3729 30.384C22.3729 32.3342 21.9545 33.808 21.1131 34.7651C20.2718 35.7266 19.0254 36.2029 17.3695 36.2029ZM17.414 35.0526C18.0595 35.0526 18.5803 34.8774 18.9631 34.5224C19.3504 34.1674 19.6264 33.6417 19.7911 32.9453C19.9558 32.2488 20.0404 31.395 20.0404 30.3796C20.0404 28.8338 19.84 27.679 19.4394 26.9062C19.0388 26.1333 18.3577 25.7469 17.3917 25.7469C16.4258 25.7469 15.7492 26.1333 15.3574 26.9062C14.9657 27.679 14.7699 28.8383 14.7699 30.3796C14.7699 31.9208 14.9702 33.0711 15.3708 33.8619C15.7714 34.6527 16.4525 35.0526 17.4185 35.0526H17.414Z",
  p777bd00: "M115.01 18.3637V17.2904H115.181C115.548 17.2904 115.878 17.2493 116.162 17.1723C116.452 17.0953 116.679 16.9309 116.844 16.6845C117.015 16.438 117.097 16.0785 117.097 15.6009V8.2575C117.097 7.79532 117.015 7.45126 116.844 7.22017C116.674 6.98909 116.457 6.84017 116.183 6.76827C115.909 6.69638 115.599 6.66043 115.248 6.66043H115.129V5.58716H119.329L119.639 7.44613H119.758C120.223 6.61935 120.755 6.05961 121.364 5.7669C121.974 5.47419 122.676 5.32526 123.477 5.32526C124.758 5.32526 125.745 5.695 126.442 6.43448C127.139 7.17396 127.486 8.35507 127.486 9.97781V15.5804C127.486 16.0734 127.558 16.4431 127.703 16.6896C127.847 16.9361 128.049 17.1004 128.312 17.1774C128.576 17.2596 128.886 17.2956 129.237 17.2956H129.356V18.3688H124.846V10.2346C124.846 9.21779 124.67 8.42183 124.319 7.85181C123.968 7.2818 123.337 6.99422 122.423 6.99422C121.767 6.99422 121.24 7.16882 120.842 7.51802C120.445 7.86722 120.161 8.33453 119.99 8.92508C119.82 9.51564 119.737 10.1421 119.737 10.8097V15.6985C119.737 16.1607 119.82 16.5047 119.99 16.7358C120.161 16.9669 120.378 17.1158 120.651 17.1877C120.925 17.2596 121.235 17.2956 121.586 17.2956H121.705V18.3688H115.01V18.3637Z",
  p8551e72: "M6.46236 2.82439C6.10592 3.31738 5.59968 3.73333 4.95396 4.08253C4.30824 4.43173 3.68318 4.6166 3.07362 4.64741C2.46923 4.67309 1.901 4.58579 1.36892 4.38038C1.05381 4.25713 0.754203 4.09794 0.475252 3.90793L0 4.16469L6.62766 16.3455C6.90144 16.8488 7.24755 17.2956 7.67114 17.691C8.09473 18.0864 8.56998 18.3842 9.10205 18.5896C9.37584 18.6975 9.65996 18.7694 9.9544 18.8156C10.2282 18.8567 10.5123 18.8721 10.8016 18.8567C11.4111 18.831 12.0362 18.641 12.6819 18.2918C13.3276 17.9426 13.8287 17.5266 14.1903 17.0337C14.3608 16.7974 14.5054 16.5561 14.6242 16.3044C14.7534 16.0323 14.8464 15.755 14.9032 15.4674C15.022 14.9128 15.0272 14.353 14.929 13.7882C14.8309 13.2182 14.6449 12.6841 14.3711 12.1808L7.74346 0L7.26821 0.256763C7.27854 0.59569 7.24755 0.929482 7.17523 1.25814C7.05642 1.81275 6.81879 2.33141 6.46236 2.82439Z",
  p86d8c70: "M20.1568 41.3748C18.3797 41.3748 16.9798 40.8253 15.957 39.7315C14.9342 38.6326 14.4228 36.9636 14.4228 34.7246C14.4228 32.4856 14.9084 30.8372 15.8847 29.7383C16.861 28.6393 18.3074 28.095 20.2291 28.095C22.0061 28.095 23.4009 28.6445 24.4288 29.7383C25.4517 30.8372 25.9631 32.4959 25.9631 34.7246C25.9631 36.9533 25.4775 38.6377 24.5012 39.7315C23.5248 40.8304 22.0784 41.3748 20.1568 41.3748ZM20.2084 40.0602C20.9575 40.0602 21.5619 39.8599 22.0061 39.4542C22.4555 39.0485 22.7758 38.4477 22.9669 37.6517C23.1581 36.8558 23.2562 35.8801 23.2562 34.7195C23.2562 32.953 23.0238 31.6332 22.5588 30.7499C22.0939 29.8667 21.3036 29.425 20.1826 29.425C19.0616 29.425 18.2764 29.8667 17.8218 30.7499C17.3673 31.6332 17.14 32.9581 17.14 34.7195C17.14 36.4809 17.3724 37.7955 17.8373 38.6993C18.3023 39.6031 19.0926 40.0602 20.2136 40.0602H20.2084Z",
  p88c6900: "M33.0385 16.2794C32.2818 16.2794 31.6319 16.194 31.0933 16.0188C30.5546 15.8436 30.1496 15.5874 29.8736 15.2459C29.5976 14.9044 29.4596 14.5 29.4596 14.0238C29.4596 13.6463 29.5397 13.3542 29.6955 13.1386C29.8558 12.9229 30.0427 12.7701 30.2653 12.6802C30.4834 12.5904 30.7015 12.5454 30.9063 12.5454C30.9063 13.3093 31.0755 13.9429 31.4138 14.4461C31.7521 14.9449 32.3352 15.1965 33.1587 15.1965C33.8754 15.1965 34.4185 15.0303 34.7924 14.6978C35.1663 14.3652 35.3488 13.9384 35.3488 13.4261C35.3488 13.0936 35.2732 12.8195 35.1218 12.6038C34.9705 12.3882 34.7123 12.177 34.3473 11.9658C33.9822 11.7591 33.4748 11.521 32.8293 11.2558C32.0993 10.9368 31.4939 10.6268 31.022 10.3257C30.5457 10.0247 30.1896 9.67419 29.9581 9.2608C29.7222 8.8519 29.6065 8.33966 29.6065 7.72856C29.6065 6.74003 29.9759 5.98514 30.7104 5.46391C31.4494 4.94269 32.4242 4.68207 33.635 4.68207C34.3517 4.68207 34.9393 4.77194 35.4022 4.95167C35.8652 5.13141 36.2124 5.36956 36.4483 5.66162C36.6843 5.95369 36.8 6.27272 36.8 6.6232C36.8 7.01412 36.6665 7.32416 36.3949 7.56231C36.1278 7.80046 35.7227 7.91729 35.1841 7.91729C35.1841 7.22082 35.0328 6.68161 34.7301 6.29968C34.4274 5.91774 33.9733 5.72453 33.3679 5.72453C32.718 5.72453 32.2462 5.87281 31.9435 6.16488C31.6408 6.45695 31.4894 6.83439 31.4894 7.29271C31.4894 7.79147 31.6808 8.18239 32.0681 8.46098C32.4554 8.73957 33.1098 9.0586 34.0312 9.42256C34.7746 9.71463 35.38 10.0157 35.8518 10.3212C36.3192 10.6268 36.6664 10.9862 36.8979 11.3951C37.1249 11.804 37.2407 12.3163 37.2407 12.9274C37.2407 14.0103 36.8668 14.8415 36.1145 15.4212C35.3622 15.9963 34.3383 16.2884 33.043 16.2884L33.0385 16.2794Z",
  p9342f00: "M7.35524 14.0334C7.66239 13.602 8.09863 13.238 8.65506 12.9325C9.21148 12.627 9.75011 12.4652 10.2754 12.4382C10.7962 12.4158 11.2859 12.4922 11.7443 12.6719C12.0159 12.7797 12.2741 12.919 12.5144 13.0853L12.924 12.8606L7.21279 2.20237C6.97687 1.76203 6.67862 1.37111 6.3136 1.02512C5.94858 0.679131 5.53905 0.418516 5.08056 0.238782C4.84463 0.144422 4.5998 0.0815138 4.34607 0.0410736C4.11014 0.00512677 3.86531 -0.00835239 3.61603 0.00512766C3.09076 0.0275944 2.55214 0.193848 1.99571 0.499396C1.43928 0.804944 1.00749 1.16891 0.695894 1.60027C0.548997 1.80696 0.424357 2.01815 0.321974 2.23832C0.210688 2.47647 0.130562 2.71911 0.0815967 2.97074C-0.0207862 3.45602 -0.0252376 3.9458 0.0593396 4.44007C0.143917 4.93883 0.304168 5.40613 0.540094 5.84648L6.25128 16.5047L6.66081 16.28C6.65191 15.9835 6.67862 15.6914 6.74094 15.4038C6.84332 14.9186 7.04809 14.4647 7.35524 14.0334Z",
  p9e83080: "M73.3562 4.53095C72.7192 2.20767 70.6701 0.394389 68.2446 0.00226661H66.5941C64.5851 0.303725 62.7877 1.56849 61.8968 3.30924C60.8032 5.43985 60.9056 7.74499 62.1863 9.80307L62.5672 10.4151L62.0638 10.9273L51.9919 21.186L51.4864 21.7005L50.885 21.3106C49.8181 20.6238 48.622 20.2612 47.426 20.2612C45.7911 20.2612 44.2209 20.9434 43.0048 22.1855L42.4524 22.7499L41.8332 22.2649L33.492 15.7529L32.9418 15.3245L33.2136 14.6763C34.4096 11.8317 33.5321 8.6403 31.082 6.91995C30.0352 6.1833 28.8102 5.79344 27.5406 5.79344C25.9214 5.79344 24.3979 6.42129 23.2464 7.55913C21.0681 9.71467 20.7095 13.0171 22.3733 15.592L22.772 16.2085L22.2597 16.7321L12.1767 26.9885L11.6644 27.5075L11.0586 27.1041C10.0295 26.4196 8.84908 26.0592 7.64411 26.0592C5.7509 26.0592 3.98019 26.9295 2.78413 28.4459C1.83753 29.6472 1.36534 31.1658 1.4522 32.7207C1.53907 34.2801 2.18276 35.7421 3.263 36.8369C4.43456 38.0246 5.98922 38.6796 7.63965 38.6796C9.07849 38.6796 10.4305 38.1855 11.553 37.2562C14.0231 35.2072 14.5688 31.6101 12.8204 28.8879L12.4261 28.2736L12.9362 27.7523L23.0214 17.4891L23.5337 16.9678L24.1395 17.3713C25.1774 18.0603 26.3624 18.4252 27.5651 18.4252C29.1153 18.4252 30.6098 17.8201 31.7769 16.7208L32.3293 16.2017L32.9262 16.6686L41.3833 23.2939L41.9067 23.7019L41.6729 24.332C40.6438 27.1131 41.6038 30.1957 44.0071 31.8277C45.0428 32.5303 46.2388 32.8998 47.4683 32.8998C49.0653 32.8998 50.5754 32.2878 51.7224 31.1726C53.9297 29.0307 54.3039 25.7101 52.6356 23.1012L52.2414 22.4847L52.7515 21.9657L62.8189 11.7138L63.3178 11.2038L63.9192 11.5846C65.0016 12.2669 66.2088 12.6295 67.4116 12.6295C68.7079 12.6295 69.9641 12.2079 71.0421 11.4101C73.1625 9.8416 74.0712 7.14208 73.3562 4.53095ZM12.7736 32.3558C12.7736 35.2367 10.4706 37.5826 7.63742 37.5826C4.80429 37.5826 2.50126 35.2367 2.50126 32.3558C2.50126 29.4749 4.80652 27.129 7.63742 27.129C10.4683 27.129 12.7736 29.4727 12.7736 32.3558ZM27.5473 17.3395C24.7119 17.3395 22.4044 14.9913 22.4044 12.1059C22.4044 9.22055 24.7119 6.87235 27.5473 6.87235C30.3826 6.87235 32.6901 9.22055 32.6901 12.1059C32.6901 14.9913 30.3826 17.3395 27.5473 17.3395ZM52.5911 26.5692C52.5911 29.45 50.2881 31.7959 47.4549 31.7959C44.6218 31.7959 42.3188 29.45 42.3188 26.5692C42.3188 23.6883 44.624 21.3401 47.4549 21.3401C50.2858 21.3401 52.5911 23.686 52.5911 26.5692ZM67.3581 11.5552C64.5228 11.5552 62.2153 9.20695 62.2153 6.32156C62.2153 3.43617 64.5228 1.08797 67.3581 1.08797C70.1935 1.08797 72.5032 3.43617 72.5032 6.32156C72.5032 9.20695 70.1957 11.5552 67.3581 11.5552Z",
  pa7ce080: "M14.436 16.0682V15.1291H14.7476C15.0369 15.1291 15.304 15.0932 15.5533 15.0258C15.8026 14.9584 16.0029 14.8191 16.1543 14.6079C16.3056 14.4012 16.3813 14.0867 16.3813 13.6688V5.98964H14.5206V4.88427H16.3813V3.9227C16.3813 2.66905 16.7107 1.70298 17.3739 1.02448C18.0372 0.341494 18.9809 0 20.2051 0C20.9618 0 21.5627 0.0673997 22.0034 0.197707C22.4441 0.328014 22.7557 0.507748 22.9338 0.727922C23.1118 0.95259 23.2009 1.19972 23.2009 1.47831C23.2009 1.72994 23.1296 1.94562 22.9961 2.13434C22.8581 2.32306 22.6533 2.46685 22.3774 2.57469C22.1014 2.67804 21.7631 2.73196 21.3624 2.73196C21.3624 2.46685 21.3224 2.20174 21.2467 1.94113C21.171 1.67602 21.0419 1.45585 20.8639 1.2851C20.6858 1.10986 20.4276 1.02448 20.0982 1.02448C19.5596 1.02448 19.1857 1.24466 18.972 1.68051C18.7583 2.12086 18.6515 2.78138 18.6515 3.67107V4.87978H21.5449V5.98514H18.6515V13.6643C18.6515 14.0822 18.7272 14.3967 18.8785 14.6034C19.0299 14.8101 19.2346 14.9494 19.4884 15.0213C19.7421 15.0932 20.0092 15.1246 20.2852 15.1246H21.1309V16.0637H14.4315L14.436 16.0682Z",
  pb10ac40: "M7.7073 18.5999C5.98194 18.5999 4.54586 18.2353 3.39907 17.501C2.25744 16.7718 1.40509 15.7447 0.842021 14.4249C0.28412 13.1052 1.183e-06 11.5646 1.183e-06 9.79807C1.183e-06 8.03154 0.278954 6.50124 0.842021 5.19688C1.39992 3.89253 2.25744 2.88088 3.4094 2.15681C4.56136 1.43274 6.00261 1.07327 7.72797 1.07327C9.45333 1.07327 10.7706 1.43274 11.9122 2.15681C13.0539 2.88088 13.9217 3.89766 14.5158 5.20715C15.1047 6.51664 15.4043 8.05722 15.4043 9.82375C15.4043 11.5903 15.1098 13.1257 14.5158 14.4403C13.9217 15.7498 13.0539 16.7718 11.9122 17.5061C10.7706 18.2353 9.36551 18.605 7.70214 18.605L7.7073 18.5999ZM7.7073 17.2442C8.85926 17.2442 9.7736 16.9515 10.4555 16.3609C11.1374 15.7755 11.6229 14.9282 11.9174 13.819C12.2118 12.7149 12.3616 11.3849 12.3616 9.82375C12.3616 8.26263 12.2118 6.9326 11.9174 5.82852C11.6229 4.72444 11.1322 3.88226 10.4555 3.30197C9.7736 2.72169 8.8696 2.43411 7.73313 2.43411C6.02327 2.43411 4.81448 3.08116 4.11194 4.37524C3.4094 5.66933 3.05812 7.48721 3.05812 9.82375C3.05812 12.1603 3.4094 13.9833 4.11194 15.2825C4.81448 16.5869 6.01294 17.2391 7.71247 17.2391L7.7073 17.2442Z",
  pb3a500: "M10.3536 4.03553C10.5488 3.84027 10.5488 3.52369 10.3536 3.32843L7.17157 0.146447C6.97631 -0.0488155 6.65973 -0.0488155 6.46447 0.146447C6.2692 0.341709 6.2692 0.658291 6.46447 0.853554L9.29289 3.68198L6.46447 6.51041C6.2692 6.70567 6.2692 7.02225 6.46447 7.21751C6.65973 7.41278 6.97631 7.41278 7.17157 7.21751L10.3536 4.03553ZM0 3.68198V4.18198H10V3.68198V3.18198H0V3.68198Z",
  pc2af670: "M15.5385 0.0197787C11.7748 -0.1763 8.10841 1.07712 5.22002 3.5492C2.32919 6.02377 0.474105 9.50107 0 13.3407V16.8925C0.469242 20.6999 2.30488 24.1598 5.16896 26.6369C8.03304 29.1139 11.6703 30.3872 15.4096 30.2234C23.3308 29.8784 29.5696 23.2812 29.6158 15.2023C29.662 7.09848 23.4791 0.429311 15.5385 0.0197787ZM14.7653 29.1139C7.18938 29.1139 1.02358 22.8344 1.02358 15.1154C1.02358 7.39632 7.18938 1.11931 14.7653 1.11931C22.3413 1.11931 28.5095 7.3988 28.5095 15.1154C28.5095 22.832 22.3437 29.1139 14.7653 29.1139Z",
  pcc93380: "M75.0868 36.2029C74.4814 36.2029 73.9338 36.0816 73.4442 35.839C72.9545 35.5963 72.5717 35.2279 72.2957 34.7336C72.0197 34.2393 71.8817 33.6103 71.8817 32.8464C71.8817 31.732 72.269 30.9098 73.0391 30.3751C73.8092 29.8403 74.9888 29.5438 76.5735 29.4899L78.2695 29.427V28.2182C78.2695 27.7195 78.2295 27.2791 78.1449 26.9017C78.0603 26.5243 77.8912 26.2322 77.6374 26.0165C77.3837 25.8008 77.0009 25.693 76.489 25.693C76.0082 25.693 75.6387 25.7918 75.385 25.985C75.1313 26.1783 74.9577 26.4434 74.8687 26.7759C74.7796 27.1084 74.7351 27.5083 74.7351 27.9666C74.0718 27.9666 73.5777 27.8633 73.2483 27.6521C72.9189 27.4454 72.7542 27.0949 72.7542 26.6096C72.7542 26.1243 72.9278 25.7289 73.2795 25.4324C73.6311 25.1313 74.0986 24.9201 74.6861 24.7853C75.2737 24.655 75.9147 24.5876 76.6181 24.5876C77.9268 24.5876 78.9105 24.8572 79.5649 25.4009C80.2193 25.9446 80.5487 26.8747 80.5487 28.1958V33.5563C80.5487 33.9473 80.5887 34.2483 80.6733 34.464C80.7579 34.6797 80.8914 34.8325 81.0873 34.9223C81.2787 35.0122 81.528 35.0571 81.8307 35.0571H81.893V35.9962H78.8126L78.4387 34.3067H78.274C77.9847 34.6842 77.7042 35.0122 77.4282 35.2998C77.1522 35.5873 76.8362 35.8075 76.4756 35.9693C76.115 36.131 75.6566 36.2074 75.0912 36.2074L75.0868 36.2029ZM75.7456 34.8459C76.2708 34.8459 76.716 34.7291 77.0899 34.5C77.4638 34.2708 77.7532 33.9383 77.9579 33.5069C78.1627 33.0756 78.2695 32.5768 78.2695 32.0061V30.3571L77.0499 30.42C76.3332 30.4469 75.7678 30.5638 75.3539 30.766C74.9399 30.9682 74.6461 31.2513 74.4769 31.6107C74.3033 31.9747 74.2187 32.4195 74.2187 32.9453C74.2187 33.3631 74.2721 33.7091 74.3834 33.9877C74.4947 34.2663 74.6639 34.4775 74.8909 34.6258C75.1179 34.774 75.4028 34.8459 75.75 34.8459H75.7456Z",
  pd025e00: "M99.1067 16.0682V15.1291H99.2536C99.5696 15.1291 99.8545 15.0932 100.099 15.0258C100.349 14.9584 100.545 14.8146 100.687 14.5989C100.834 14.3832 100.905 14.0687 100.905 13.6508V7.22531C100.905 6.82091 100.834 6.51985 100.687 6.31765C100.54 6.11545 100.353 5.98514 100.117 5.92224C99.8812 5.85933 99.6142 5.82788 99.3115 5.82788H99.2091V4.88877H102.828L103.095 6.51536H103.198C103.598 5.79193 104.057 5.30215 104.582 5.04603C105.107 4.78991 105.713 4.65961 106.403 4.65961C107.507 4.65961 108.357 4.98313 108.958 5.63017C109.559 6.27721 109.857 7.31068 109.857 8.73058V13.6328C109.857 14.0642 109.919 14.3877 110.044 14.6034C110.169 14.8191 110.342 14.9629 110.569 15.0303C110.796 15.1022 111.063 15.1336 111.366 15.1336H111.468V16.0727H107.582V8.95525C107.582 8.06557 107.431 7.3691 107.128 6.87033C106.825 6.37157 106.282 6.11995 105.494 6.11995C104.929 6.11995 104.475 6.27272 104.132 6.57827C103.79 6.88381 103.545 7.29271 103.398 7.80944C103.251 8.32618 103.18 8.87437 103.18 9.4585V13.7362C103.18 14.1406 103.251 14.4416 103.398 14.6438C103.545 14.846 103.732 14.9763 103.968 15.0392C104.204 15.1022 104.471 15.1336 104.773 15.1336H104.876V16.0727H99.1067V16.0682Z",
  pd806500: "M3.58627 1.59154C3.38846 1.86934 3.10752 2.10373 2.74918 2.3005C2.39084 2.49728 2.04397 2.60145 1.7057 2.61881C1.37029 2.63328 1.05495 2.58409 0.759681 2.46834C0.584811 2.39889 0.418543 2.30918 0.26374 2.20212L0 2.3468L3.678 9.21069C3.82994 9.49428 4.02201 9.74603 4.25708 9.96885C4.49215 10.1917 4.75589 10.3595 5.05116 10.4752C5.2031 10.536 5.36077 10.5765 5.52417 10.6026C5.6761 10.6257 5.83377 10.6344 5.99431 10.6257C6.33258 10.6113 6.67946 10.5042 7.0378 10.3074C7.39614 10.1106 7.67421 9.87625 7.87488 9.59845C7.96948 9.46534 8.04975 9.32934 8.11568 9.18755C8.18735 9.03418 8.23895 8.87792 8.27049 8.71587C8.33642 8.40335 8.33929 8.08793 8.28482 7.76962C8.23035 7.44842 8.12715 7.14748 7.97521 6.86389L4.29721 0L4.03347 0.144686C4.03921 0.335671 4.02201 0.523762 3.98187 0.70896C3.91594 1.02148 3.78407 1.31375 3.58627 1.59154Z",
  pdcfc900: "M124.283 41.3748C123.405 41.3748 122.65 41.2772 122.025 41.0769C121.4 40.8767 120.93 40.584 120.61 40.1937C120.29 39.8034 120.13 39.3412 120.13 38.7969C120.13 38.3655 120.223 38.0317 120.403 37.7852C120.589 37.5387 120.806 37.3641 121.065 37.2614C121.318 37.1587 121.571 37.1074 121.808 37.1074C121.808 37.9804 122.005 38.7044 122.397 39.2796C122.79 39.8496 123.467 40.1372 124.422 40.1372C125.254 40.1372 125.884 39.9472 126.318 39.5672C126.752 39.1872 126.964 38.6993 126.964 38.1139C126.964 37.7339 126.876 37.4206 126.7 37.1741C126.525 36.9276 126.225 36.6863 125.802 36.4449C125.378 36.2087 124.789 35.9365 124.04 35.6336C123.193 35.269 122.49 34.9146 121.943 34.5706C121.39 34.2265 120.977 33.826 120.708 33.3535C120.434 32.8862 120.3 32.3008 120.3 31.6024C120.3 30.4726 120.729 29.6099 121.581 29.0142C122.439 28.4185 123.57 28.1207 124.975 28.1207C125.807 28.1207 126.489 28.2234 127.026 28.4288C127.563 28.6342 127.966 28.9064 128.24 29.2402C128.514 29.574 128.648 29.9386 128.648 30.3391C128.648 30.7859 128.493 31.1402 128.178 31.4124C127.868 31.6845 127.398 31.8181 126.773 31.8181C126.773 31.0221 126.597 30.4059 126.246 29.9694C125.895 29.5329 125.368 29.3121 124.665 29.3121C123.911 29.3121 123.363 29.4815 123.012 29.8153C122.661 30.1491 122.485 30.5805 122.485 31.1043C122.485 31.6743 122.707 32.121 123.157 32.4394C123.606 32.7578 124.365 33.1224 125.435 33.5384C126.297 33.8722 127 34.2162 127.548 34.5654C128.09 34.9146 128.493 35.3254 128.762 35.7928C129.025 36.2601 129.159 36.8455 129.159 37.5439C129.159 38.7815 128.725 39.7315 127.852 40.3939C126.979 41.0513 125.791 41.3851 124.288 41.3851L124.283 41.3748Z",
  pec3d700: "M93.2254 81.1164H84.0178V70.503L92.9433 70.5333C93.7025 70.5333 94 70.2398 94 69.4806L93.9897 61.909C93.9897 61.4029 93.7025 60.8816 93.2254 60.8816H75.7848L75.8002 54.4589L93.4152 54.4437C93.4768 54.4437 93.5537 54.3931 93.6358 54.307C93.8102 54.1248 93.8871 53.8667 93.882 53.7756C93.8666 53.477 93.6717 53.0468 93.1793 53.0468L56.913 53.0265C56.6616 53.0265 56.4513 53.1075 56.3077 53.2594C56.1794 53.4011 56.1127 53.6086 56.1281 53.8211C56.1538 54.0843 56.4462 54.4538 56.9335 54.4538H74.3228L74.2972 60.8816H46.269L41.2215 18.4381C41.1651 17.9066 40.8163 17.6991 40.5085 17.6839C40.1853 17.6688 39.8827 17.9269 39.739 18.3419L34.6813 60.8816H22.8011V41.578L26.9202 42.9142C26.992 42.9344 27.0946 42.8889 27.1664 42.8433C27.3921 42.7016 27.546 42.4233 27.5665 42.2815C27.6075 41.9475 27.3613 41.5932 26.9817 41.4464L22.7857 39.8167L22.8011 34.7251C22.8011 34.2544 22.5138 33.9406 22.0727 33.9204C21.9137 33.9103 21.7341 33.9811 21.5905 34.1127C21.4469 34.2494 21.3699 34.4113 21.3648 34.6087L21.2109 39.2499L0.769441 31.7491C0.692497 31.7238 0.595034 31.739 0.482183 31.8048C0.220573 31.9516 0.0359072 32.235 0.0102592 32.3818C-0.0564256 32.7614 0.189795 33.1005 0.671978 33.2776L21.3238 40.9606L21.3545 60.8107L12.9112 60.9069C12.7676 60.9221 12.4188 61.3118 12.4188 61.6154L12.429 69.759C12.429 70.4777 13.2139 70.5333 13.455 70.5333L22.401 70.503V81.1366L13.455 81.1113C13.2857 81.1113 12.4444 81.1467 12.4444 81.8199L12.4188 89.933C12.4136 90.181 12.4957 90.4037 12.6496 90.5606C12.783 90.6922 12.9625 90.7631 13.1882 90.7631H22.401L22.4164 104.18C22.4164 104.449 22.5344 104.616 22.6369 104.707C22.7908 104.848 22.996 104.924 23.1909 104.914C23.4628 104.899 23.8629 104.611 23.8629 104.191V90.7631H42.4629V104.206C42.4629 104.398 42.5347 104.555 42.6886 104.697C42.8476 104.843 43.0733 104.919 43.2939 104.904C43.6375 104.879 43.9145 104.514 43.9145 104.094L43.9248 90.7631L62.5196 90.7783V103.927C62.5094 104.292 62.6017 104.595 62.7658 104.762C62.8787 104.864 63.0377 104.919 63.2531 104.914C63.4942 104.914 63.961 104.611 63.961 104.221V90.7631L82.5559 90.7783L82.5712 104.191C82.5712 104.388 82.6533 104.57 82.8021 104.712C82.9457 104.854 83.1406 104.924 83.3458 104.914C83.6433 104.899 84.0178 104.555 84.0178 104.191V90.7631H93.2306C93.4563 90.7631 93.6358 90.6922 93.7692 90.5606C93.9231 90.4037 94.0051 90.1861 94 89.9482L93.9897 81.7996C93.9897 81.42 93.5691 81.1164 93.2254 81.1164ZM40.6111 22.7958L43.2939 48.0362L37.6616 48.0159L38.0617 44.6198M37.4512 49.4938H43.4118L44.7404 60.8461L36.1124 60.8816L37.4512 49.4938ZM13.891 69.0858V62.2886H92.456V69.0858H13.891ZM82.4635 70.6093V81.2227H63.8738V70.6093H82.4635ZM62.417 70.5182V81.1366H43.9145V70.5182H62.417ZM42.4629 70.5182V81.1164H23.8629V70.5182H42.4629ZM92.456 89.4269H13.891V82.6499H92.456V89.4269Z",
  pf16bc00: "M57.9488 35.9917V35.0526H58.2158C58.5185 35.0526 58.7945 35.0167 59.0438 34.9358C59.2931 34.8594 59.4889 34.7156 59.6314 34.4955C59.7783 34.2798 59.8495 33.9652 59.8495 33.5474V22.4488C59.8495 22.0444 59.7649 21.7478 59.6002 21.5501C59.4355 21.3569 59.2308 21.2266 58.9904 21.1637C58.75 21.1008 58.4918 21.0693 58.2158 21.0693H57.9488V20.1302H62.1242V33.5474C62.1242 33.9652 62.1954 34.2798 62.3423 34.4955C62.4892 34.7111 62.6851 34.8594 62.9433 34.9358C63.197 35.0122 63.4685 35.0526 63.7579 35.0526H64.025V35.9917H57.9488Z",
  pf82ba00: "M82.7343 35.9917V35.0526H82.8812C83.1973 35.0526 83.4822 35.0167 83.727 34.9493C83.9763 34.8819 84.1721 34.7381 84.3146 34.5224C84.4615 34.3067 84.5327 33.9922 84.5327 33.5743V27.1488C84.5327 26.7444 84.4615 26.4434 84.3146 26.2412C84.1677 26.039 83.9807 25.9087 83.7448 25.8458C83.5089 25.7829 83.2418 25.7514 82.9391 25.7514H82.8367V24.8123H86.4557L86.7228 26.4389H86.8252C87.2258 25.7154 87.6843 25.2257 88.2096 24.9696C88.7348 24.7134 89.3403 24.5831 90.0302 24.5831C91.1342 24.5831 91.9844 24.9066 92.5853 25.5537C93.1863 26.2007 93.4845 27.2342 93.4845 28.6541V33.5564C93.4845 33.9877 93.5469 34.3112 93.6715 34.5269C93.7961 34.7426 93.9697 34.8864 94.1968 34.9538C94.4238 35.0257 94.6909 35.0571 94.9936 35.0571H95.0959V35.9962H91.2099V28.8788C91.2099 27.9891 91.0585 27.2926 90.7558 26.7939C90.4531 26.2951 89.91 26.0435 89.1221 26.0435C88.5568 26.0435 88.1028 26.1962 87.76 26.5018C87.4172 26.8073 87.1724 27.2162 87.0255 27.733C86.8786 28.2497 86.8074 28.7979 86.8074 29.382V33.6597C86.8074 34.0641 86.8786 34.3652 87.0255 34.5674C87.1724 34.7696 87.3594 34.8999 87.5953 34.9628C87.8312 35.0257 88.0983 35.0571 88.401 35.0571H88.5034V35.9962H82.7343V35.9917Z",
  pfc0d200: "M67.7643 41.1334V40.0602H68.0743C68.4255 40.0602 68.7458 40.0191 69.0351 39.9266C69.3244 39.8393 69.5517 39.675 69.717 39.4234C69.8875 39.1769 69.9701 38.8174 69.9701 38.3398V25.6558C69.9701 25.1936 69.872 24.8547 69.6808 24.6287C69.4897 24.4079 69.2521 24.259 68.9731 24.1871C68.6942 24.1152 68.3946 24.0792 68.0743 24.0792H67.7643V23.006H72.6098V38.3398C72.6098 38.8174 72.6925 39.1769 72.8629 39.4234C73.0334 39.6699 73.2607 39.8393 73.5603 39.9266C73.8547 40.0139 74.1699 40.0602 74.5056 40.0602H74.8156V41.1334H67.7643Z",
  pfd7c580: "M122.855 16.0682V15.1291H122.94C123.256 15.1291 123.541 15.0932 123.785 15.0258C124.035 14.9584 124.231 14.8146 124.373 14.5989C124.52 14.3832 124.591 14.0597 124.591 13.6283V7.24328C124.591 6.8254 124.515 6.51536 124.364 6.31316C124.213 6.11096 124.017 5.98065 123.777 5.91774C123.536 5.85484 123.265 5.82338 122.962 5.82338H122.9V4.88427H126.332L126.746 6.92875H126.848C127.026 6.49739 127.231 6.10646 127.458 5.76048C127.685 5.41449 127.974 5.14489 128.326 4.95617C128.678 4.76745 129.149 4.67309 129.741 4.67309C130.512 4.67309 131.077 4.81687 131.437 5.09995C131.794 5.38303 131.976 5.77845 131.976 6.27721C131.976 6.77597 131.807 7.14892 131.469 7.4365C131.13 7.71958 130.596 7.86336 129.866 7.86336C129.866 7.29271 129.79 6.87483 129.639 6.60972C129.488 6.34461 129.212 6.2143 128.811 6.2143C128.451 6.2143 128.148 6.35809 127.89 6.64117C127.636 6.92425 127.436 7.29271 127.289 7.73755C127.142 8.18239 127.035 8.6497 126.968 9.13498C126.897 9.62027 126.866 10.0651 126.866 10.4695V13.7227C126.866 14.1271 126.941 14.4282 127.093 14.6304C127.244 14.8326 127.44 14.9629 127.68 15.0258C127.921 15.0887 128.192 15.1201 128.495 15.1201H129.096V16.0592H122.855V16.0682Z"
};

// src/app/components/brand/Logo.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function Logo({
  variant = "dark",
  className = ""
}) {
  if (variant === "light") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "svg",
      {
        className,
        fill: "none",
        viewBox: "0 0 254 56",
        role: "img",
        "aria-label": "Offshore Energy Consultants",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p1922d800, fill: "#F25B17", transform: "translate(18.64 46.87)" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p28ea9d80, fill: "#F25B17", transform: "translate(1.17 30.4)" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p30ce0880, fill: "#F25B17", transform: "translate(0 7.17)" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p3ac0c780, fill: "#F25B17", transform: "translate(19.94 0)" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p8551e72, fill: "#F25B17", transform: "translate(41.05 6.74)" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p2801f480, fill: "#F25B17", transform: "translate(41.66 30.16)" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { transform: "translate(73.94 7.31)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.pb10ac40, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p1e216800, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p2103ba00, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p1a207b00, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p6b9c500, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p227f79f0, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p185c4240, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p16b8d480, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p10799380, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p777bd00, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p32d6d380, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p127d8f00, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p290a2900, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p1a0f03c0, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p33fa3980, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p86d8c70, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p17b24d70, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p2dccbc00, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p2fadd500, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.pfc0d200, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p15444590, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p2d10940, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p7661380, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p1358080, fill: "#F1F1F1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.pdcfc900, fill: "#F1F1F1" })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      className,
      fill: "none",
      viewBox: "0 0 218 49",
      role: "img",
      "aria-label": "Offshore Energy Consultants",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p215d7d80, fill: "#F25B17", transform: "translate(16.07 41.01)" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p9342f00, fill: "#F25B17", transform: "translate(1 26.6)" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p18627c80, fill: "#F25B17", transform: "translate(0 6.27)" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p34123900, fill: "#F25B17", transform: "translate(17.18 0)" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p12a71400, fill: "#F25B17", transform: "translate(35.36 5.9)" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p14ceaa00, fill: "#F25B17", transform: "translate(35.88 26.39)" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { transform: "translate(63.75 8.93)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p21cdc300, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.pa7ce080, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p17cdf600, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p88c6900, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p2753a400, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p3f18c100, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p3c642000, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p374ff400, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p35d4c00, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.pd025e00, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p2b775380, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.pfd7c580, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p169c08c0, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p3a039f00, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p23de0f00, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p7685200, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p2963b680, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p1945f200, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p14a86400, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.pf16bc00, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p1803a9f0, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.pcc93380, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.pf82ba00, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p4ae3e00, fill: "#182D57" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: svg_wgo26ydiex_default.p31fc0100, fill: "#182D57" })
        ] })
      ]
    }
  );
}

// src/app/components/brand/FooterFlare.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var stops = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { stopColor: "#173E63" }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { offset: "1", stopColor: "#1D2D55" })
] });
function FooterFlare({ className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { className, fill: "none", viewBox: "0 0 472.4 458.4", "aria-hidden": true, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { transform: "translate(153.8 383.1)", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: svg_wgo26ydiex_default.p191f2880, fill: "url(#oec-flare-1)" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { transform: "translate(9.7 248.9)", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: svg_wgo26ydiex_default.p30fe8300, fill: "url(#oec-flare-2)" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { transform: "translate(0 58.1)", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: svg_wgo26ydiex_default.p371ae6c1, fill: "url(#oec-flare-3)" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { transform: "translate(164.5 0)", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: svg_wgo26ydiex_default.p30e4cc80, fill: "url(#oec-flare-4)" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { transform: "translate(338.8 55)", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: svg_wgo26ydiex_default.p26c94300, fill: "url(#oec-flare-5)" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { transform: "translate(343.9 247.2)", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: svg_wgo26ydiex_default.p1046b800, fill: "url(#oec-flare-6)" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("defs", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("linearGradient", { gradientUnits: "userSpaceOnUse", id: "oec-flare-1", x1: "76.97", x2: "76.97", y1: "0", y2: "75.332", children: stops }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("linearGradient", { gradientUnits: "userSpaceOnUse", id: "oec-flare-2", x1: "61.93", x2: "61.93", y1: "0", y2: "155.718", children: stops }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("linearGradient", { gradientUnits: "userSpaceOnUse", id: "oec-flare-3", x1: "64.22", x2: "64.22", y1: "0", y2: "154.217", children: stops }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("linearGradient", { gradientUnits: "userSpaceOnUse", id: "oec-flare-4", x1: "76.97", x2: "76.97", y1: "0", y2: "75.332", children: stops }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("linearGradient", { gradientUnits: "userSpaceOnUse", id: "oec-flare-5", x1: "61.93", x2: "61.93", y1: "0", y2: "155.717", children: stops }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("linearGradient", { gradientUnits: "userSpaceOnUse", id: "oec-flare-6", x1: "64.22", x2: "64.22", y1: "0", y2: "154.217", children: stops })
    ] })
  ] });
}

// src/app/components/Footer.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function Footer({ onNavigate }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("footer", { className: "relative w-full min-h-[380px] h-auto bg-[#122446] overflow-hidden pb-8 md:pb-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute right-0 md:left-[64%] w-[60%] md:w-[30%] bottom-[-80px] pointer-events-none opacity-40 md:opacity-60 z-0", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FooterFlare, { className: "w-full h-auto" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        className: "absolute left-0 bottom-0 w-full h-[177px] pointer-events-none z-[1]",
        style: {
          background: "linear-gradient(180deg, rgba(18, 36, 70, 0) 0%, rgba(18, 36, 70, 1) 100%)"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative w-full h-full px-[5%] md:px-[7%] mx-auto z-10 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "pt-[32px] md:pt-[54px]", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "div",
        {
          onClick: () => onNavigate?.("home"),
          className: "w-[254px] h-[56px] cursor-pointer hover:opacity-90 transition-opacity",
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Logo, { variant: "light", className: "w-[254px] h-[56px]" })
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col sm:flex-row mt-[32px] md:mt-[48px] pl-[4px] md:pl-[9px] gap-6 sm:gap-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col gap-[16px] md:gap-[24px] w-full sm:w-[240px]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "button",
            {
              onClick: () => onNavigate?.("home"),
              className: "text-left text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer min-h-[44px] inline-flex items-center",
              children: "HOME"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "button",
            {
              onClick: () => onNavigate?.("about"),
              className: "text-left text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer min-h-[44px] inline-flex items-center",
              children: "ABOUT"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "button",
            {
              onClick: () => onNavigate?.("delivery"),
              className: "text-left text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer min-h-[44px] inline-flex items-center",
              children: "DELIVERY"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col gap-[16px] md:gap-[24px]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "button",
            {
              onClick: () => onNavigate?.("full-circle-fuel"),
              className: "text-left text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer min-h-[44px] inline-flex items-center",
              children: "ONE STOP SOLUTION"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "button",
            {
              onClick: () => onNavigate?.("contact"),
              className: "text-left text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer min-h-[44px] inline-flex items-center",
              children: "CONTACT"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-full h-[0.5px] bg-[#5a629f] mt-[32px] md:mt-[52px]" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center mt-[14px] pl-[4px] md:pl-[9px] gap-3 md:gap-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-wrap items-center gap-4 sm:gap-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-auto sm:w-[240px]", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "button",
            {
              onClick: () => onNavigate?.("about"),
              className: "text-left text-[#5a629f] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer min-h-[44px] inline-flex items-center",
              children: "TERMS & CONDITIONS"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "button",
            {
              onClick: () => onNavigate?.("about"),
              className: "text-left text-[#5a629f] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer min-h-[44px] inline-flex items-center",
              children: "PRIVACY POLICY"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-[#5a629f] text-[11px] md:text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight", children: "OFFSHORE ENERGY CONSULTANTS PVT LTD 2026 \u2013 ALL RIGHTS RESERVED" })
      ] })
    ] })
  ] });
}

// src/app/components/RevealText.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);

// src/app/components/CountUp.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);

// src/app/components/FillButton.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
function FillButton({
  squareSize = 36,
  height = 44,
  width = 160,
  squareColor = "#f25b17",
  restBg = "#f4f4f4",
  text,
  textColor = "#f25b17",
  hoverTextColor = "#ffffff",
  fontSize = 16,
  fontFamily = "'Merriweather', serif",
  fontWeight = 400,
  letterSpacing = "-0.32px",
  rounded = 4,
  icon,
  onClick,
  type = "button",
  className = "",
  style = {}
}) {
  const [hovered, setHovered] = (0, import_react3.useState)(false);
  const arrowIcon = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { width: "14", height: "12", viewBox: "0 0 14 12", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "path",
    {
      d: "M1 6h12M8 1l5 5-5 5",
      stroke: "white",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "button",
    {
      type,
      onClick,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      className: `fill-button-root ${className}`,
      style: {
        position: "relative",
        width,
        height,
        minHeight: 44,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        borderRadius: rounded,
        overflow: "hidden",
        border: "none",
        padding: 0,
        outline: "none",
        background: restBg,
        ...style
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              background: squareColor,
              width: hovered ? "100%" : squareSize,
              borderRadius: rounded,
              transition: "width 380ms cubic-bezier(0.4, 0, 0.2, 1)",
              pointerEvents: "none"
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "span",
          {
            style: {
              position: "relative",
              zIndex: 2,
              width: squareSize,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              flexShrink: 0,
              transform: hovered ? `translateX(calc(100% - ${squareSize}px + 8px))` : "translateX(0)",
              transition: "transform 380ms cubic-bezier(0.4, 0, 0.2, 1)"
            },
            children: icon ?? arrowIcon
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "span",
          {
            style: {
              position: "relative",
              zIndex: 2,
              paddingLeft: 10,
              paddingRight: 14,
              color: hovered ? hoverTextColor : textColor,
              fontSize,
              fontFamily,
              fontWeight,
              letterSpacing,
              whiteSpace: "nowrap",
              transform: hovered ? "translateX(-8px)" : "translateX(0)",
              transition: "color 200ms ease, transform 380ms cubic-bezier(0.4, 0, 0.2, 1)"
            },
            children: text
          }
        )
      ]
    }
  );
}

// src/imports/HomePage-1/index.tsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
function LtRadialRepeatGt6() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "absolute inset-[83.69%_85.26%_0_7.37%]", "data-name": "<Radial Repeat>", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { className: "absolute block inset-0 size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 16.0717 7.99087", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("g", { id: "<Radial Repeat>", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p215d7d80, fill: "var(--fill-0, #F25B17)", id: "Vector" }) }) }) });
}
function LtRadialRepeatGt7() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "absolute inset-[54.28%_93.61%_12.04%_0.46%]", "data-name": "<Radial Repeat>", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { className: "absolute block inset-0 size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 12.924 16.5047", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("g", { id: "<Radial Repeat>", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p9342f00, fill: "var(--fill-0, #F25B17)", id: "Vector" }) }) }) });
}
function LtRadialRepeatGt8() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "absolute inset-[12.8%_93.85%_53.86%_0]", "data-name": "<Radial Repeat>", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { className: "absolute block inset-0 size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 13.4143 16.3362", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("g", { id: "<Radial Repeat>", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p18627c80, fill: "var(--fill-0, #F25B17)", id: "Vector" }) }) }) });
}
function LtRadialRepeatGt9() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "absolute inset-[0_84.75%_83.69%_7.88%]", "data-name": "<Radial Repeat>", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { className: "absolute block inset-0 size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 16.0717 7.99087", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("g", { id: "<Radial Repeat>", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p34123900, fill: "var(--fill-0, #F25B17)", id: "Vector" }) }) }) });
}
function LtRadialRepeatGt10() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "absolute inset-[12.04%_77.85%_54.28%_16.22%]", "data-name": "<Radial Repeat>", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { className: "absolute block inset-0 size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 12.924 16.5047", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("g", { id: "<Radial Repeat>", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p12a71400, fill: "var(--fill-0, #F25B17)", id: "Vector" }) }) }) });
}
function LtRadialRepeatGt11() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "absolute inset-[53.86%_77.38%_12.8%_16.46%]", "data-name": "<Radial Repeat>", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { className: "absolute block inset-0 size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 13.4143 16.3362", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("g", { id: "<Radial Repeat>", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p14ceaa00, fill: "var(--fill-0, #F25B17)", id: "Vector" }) }) }) });
}
function Group() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "absolute contents inset-[0_77.38%_0_0]", "data-name": "Group", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(LtRadialRepeatGt6, {}),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(LtRadialRepeatGt7, {}),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(LtRadialRepeatGt8, {}),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(LtRadialRepeatGt9, {}),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(LtRadialRepeatGt10, {}),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(LtRadialRepeatGt11, {})
  ] });
}
function Group1() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "absolute inset-[18.22%_0_7.88%_29.24%]", "data-name": "Group", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { className: "absolute block inset-0 size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 154.251 36.2119", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("g", { id: "Group", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p21cdc300, fill: "var(--fill-0, #182D57)", id: "Vector" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.pa7ce080, fill: "var(--fill-0, #182D57)", id: "Vector_2" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p17cdf600, fill: "var(--fill-0, #182D57)", id: "Vector_3" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p88c6900, fill: "var(--fill-0, #182D57)", id: "Vector_4" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p2753a400, fill: "var(--fill-0, #182D57)", id: "Vector_5" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p3f18c100, fill: "var(--fill-0, #182D57)", id: "Vector_6" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p3c642000, fill: "var(--fill-0, #182D57)", id: "Vector_7" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p374ff400, fill: "var(--fill-0, #182D57)", id: "Vector_8" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p35d4c00, fill: "var(--fill-0, #182D57)", id: "Vector_9" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.pd025e00, fill: "var(--fill-0, #182D57)", id: "Vector_10" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p2b775380, fill: "var(--fill-0, #182D57)", id: "Vector_11" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.pfd7c580, fill: "var(--fill-0, #182D57)", id: "Vector_12" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p169c08c0, fill: "var(--fill-0, #182D57)", id: "Vector_13" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p3a039f00, fill: "var(--fill-0, #182D57)", id: "Vector_14" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p23de0f00, fill: "var(--fill-0, #182D57)", id: "Vector_15" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p7685200, fill: "var(--fill-0, #182D57)", id: "Vector_16" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p2963b680, fill: "var(--fill-0, #182D57)", id: "Vector_17" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p1945f200, fill: "var(--fill-0, #182D57)", id: "Vector_18" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p14a86400, fill: "var(--fill-0, #182D57)", id: "Vector_19" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.pf16bc00, fill: "var(--fill-0, #182D57)", id: "Vector_20" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p1803a9f0, fill: "var(--fill-0, #182D57)", id: "Vector_21" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.pcc93380, fill: "var(--fill-0, #182D57)", id: "Vector_22" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.pf82ba00, fill: "var(--fill-0, #182D57)", id: "Vector_23" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p4ae3e00, fill: "var(--fill-0, #182D57)", id: "Vector_24" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: svg_hsfh0kwwsp_default.p31fc0100, fill: "var(--fill-0, #182D57)", id: "Vector_25" })
  ] }) }) });
}
function Layer() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "absolute h-[49px] left-[67px] overflow-clip top-[28px] w-[218px]", "data-name": "Layer_1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Group, {}),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Group1, {})
  ] });
}

// src/app/components/Navbar.tsx
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function Navbar({ onNavigate, currentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react5.useState)(false);
  const handleNavClick = (page) => {
    setMobileMenuOpen(false);
    onNavigate?.(page);
  };
  (0, import_react5.useEffect)(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);
  (0, import_react5.useEffect)(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "div",
      {
        className: `nav-backdrop ${mobileMenuOpen ? "open" : ""}`,
        onClick: () => setMobileMenuOpen(false),
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("nav", { className: "main-navbar", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "nav-inner", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "div",
        {
          className: "logo",
          onClick: () => handleNavClick("home"),
          children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Layer, {})
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
        "button",
        {
          className: `mobile-hamburger ${mobileMenuOpen ? "open" : ""}`,
          onClick: () => setMobileMenuOpen(!mobileMenuOpen),
          "aria-label": "Toggle navigation menu",
          "aria-expanded": mobileMenuOpen,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "hamburger-line" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "hamburger-line" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "hamburger-line" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("ul", { className: `nav-links ${mobileMenuOpen ? "mobile-open" : ""}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "a",
          {
            href: "#",
            className: currentPage === "home" ? "active-link" : "",
            onClick: (e) => {
              e.preventDefault();
              handleNavClick("home");
            },
            children: "HOME"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "a",
          {
            href: "#",
            className: currentPage === "about" ? "active-link" : "",
            onClick: (e) => {
              e.preventDefault();
              handleNavClick("about");
            },
            children: "ABOUT"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "a",
          {
            href: "#",
            className: currentPage === "delivery" ? "active-link" : "",
            onClick: (e) => {
              e.preventDefault();
              handleNavClick("delivery");
            },
            children: "DELIVERY"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "a",
          {
            href: "#",
            className: currentPage === "full-circle-fuel" ? "active-link" : "",
            onClick: (e) => {
              e.preventDefault();
              handleNavClick("full-circle-fuel");
            },
            children: "FULL CIRCLE FUEL"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          "a",
          {
            href: "#",
            className: `btn-contact-wipe ${currentPage === "contact" ? "active" : ""}`,
            onClick: (e) => {
              e.preventDefault();
              handleNavClick("contact");
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "btn-contact-bg-text", children: "CONTACT" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "btn-contact-wipe-layer", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "btn-contact-wipe-text", children: "CONTACT" }) })
            ]
          }
        ) })
      ] })
    ] }) })
  ] });
}

// scripts/empirical-stress-test.ts
var listeners = {};
var bodyStyle = { overflow: "" };
if (typeof window === "undefined") {
  global.window = {
    addEventListener: (event, fn) => {
      listeners[event] = listeners[event] || [];
      listeners[event].push(fn);
    },
    removeEventListener: (event, fn) => {
      if (listeners[event]) {
        listeners[event] = listeners[event].filter((f) => f !== fn);
      }
    },
    dispatchEvent: (event) => {
      const type = event.type || event;
      if (listeners[type]) {
        listeners[type].forEach((fn) => fn(event));
      }
      return true;
    },
    innerWidth: 375,
    innerHeight: 667,
    location: { hash: "#home", href: "http://localhost/#home" },
    scrollTo: () => {
    }
  };
  global.document = {
    body: {
      style: bodyStyle
    },
    addEventListener: global.window.addEventListener,
    removeEventListener: global.window.removeEventListener,
    dispatchEvent: global.window.dispatchEvent
  };
  global.KeyboardEvent = class KeyboardEvent {
    type;
    key;
    constructor(type, init) {
      this.type = type;
      this.key = init.key;
    }
  };
}
var projectRoot = import_path.default.resolve(__dirname, "..");
var navbarCss = import_fs.default.readFileSync(import_path.default.join(projectRoot, "src/app/components/Navbar.css"), "utf-8");
var contactCss = import_fs.default.readFileSync(import_path.default.join(projectRoot, "src/app/components/ContactPage.css"), "utf-8");
var deliveryCss = import_fs.default.readFileSync(import_path.default.join(projectRoot, "src/app/components/DeliveryPage.css"), "utf-8");
var totalTests = 0;
var passedTests = 0;
var failedTests = 0;
var findings = [];
function assert(condition, testName, detailOnFail, findingInfo) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  \x1B[32m\u2713\x1B[0m ${testName}`);
  } else {
    failedTests++;
    console.error(`  \x1B[31m\u2717\x1B[0m ${testName}`);
    if (detailOnFail) console.error(`    \x1B[33mDetail: ${detailOnFail}\x1B[0m`);
    if (findingInfo) findings.push(findingInfo);
  }
}
async function runEmpiricalStressTest() {
  console.log(`
\x1B[1m\x1B[35m\u{1F52C} EXECUTING EMPIRICAL INTERACTION ERGONOMICS STRESS TEST\x1B[0m
`);
  console.log(`\x1B[36m--- Section 1: Tap Target Dimensions (>= 44px) ---\x1B[0m`);
  const fillButtonHtml = import_server.default.renderToString(import_react6.default.createElement(FillButton, { text: "Test" }));
  assert(
    fillButtonHtml.includes("height:44px") && fillButtonHtml.includes("min-height:44px"),
    "T1.1: FillButton default height enforces minHeight: 44px",
    "FillButton root inline styles do not enforce 44px minHeight"
  );
  assert(
    fillButtonHtml.includes("width:160px"),
    "T1.2: FillButton default width specifies 160px (>= 44px)",
    "FillButton default width is less than 44px"
  );
  assert(
    navbarCss.includes(".mobile-hamburger") && navbarCss.includes("width: 44px") && navbarCss.includes("height: 44px"),
    "T1.3: Mobile hamburger toggle element bounding box is 44px x 44px",
    "Mobile hamburger button dimensions are less than 44px"
  );
  const mediaQuerySplit = navbarCss.split("@media (max-width: 840px)");
  const baseNavbarCss = mediaQuerySplit[0];
  const mobileNavbarCss = mediaQuerySplit[1] || "";
  assert(
    mobileNavbarCss.includes(".main-navbar .nav-links a") && mobileNavbarCss.includes("min-height: 48px") && mobileNavbarCss.includes("padding: 12px 16px"),
    "T1.4: Mobile drawer nav links specify min-height: 48px and full width padding (>= 44px x 44px)",
    "Mobile nav link tap targets do not meet 44px target requirements"
  );
  const baseNavLinksRule = baseNavbarCss.match(/\.main-navbar\s+\.nav-links\s+a\s*\{([^}]+)\}/);
  const baseNavLinksContent = baseNavLinksRule ? baseNavLinksRule[1] : "";
  const desktopNavHasMinHeightOrPadding = baseNavLinksContent.includes("min-height") || baseNavLinksContent.includes("padding");
  assert(
    desktopNavHasMinHeightOrPadding,
    "T1.5: Desktop Navbar links specify explicit min-height or padding",
    "Desktop navbar links (.main-navbar .nav-links a) lack min-height or padding in base CSS rule (font-size: 13px without vertical padding results in ~18px hit target height on desktop >840px)",
    {
      category: "Tap Target Ergonomics",
      severity: "LOW",
      description: "Desktop navbar navigation links (.main-navbar .nav-links a) do not specify vertical padding or min-height in the base CSS rule. Relying solely on inline 13px font-size results in ~18px hit target height on desktop viewports (>840px).",
      impact: "Mobile drawer nav links set explicit `min-height: 48px; padding: 12px 16px;` (exceeding 44px), but desktop viewports have reduced target height (~18px).",
      mitigation: "Add `padding: 12px 8px; min-height: 44px; display: inline-flex; align-items: center;` to `.main-navbar .nav-links a` in base CSS."
    }
  );
  const footerHtml = import_server.default.renderToString(import_react6.default.createElement(Footer));
  const footerButtonsHaveMinHeight = footerHtml.includes("min-h-[44px]");
  assert(
    footerButtonsHaveMinHeight,
    "T1.6: Footer buttons specify min-height >= 44px",
    "Footer buttons do not specify min-height >= 44px"
  );
  const footerButtonClassesMatch = footerHtml.match(/<button[^>]*class="([^"]*)"[^>]*>\s*HOME\s*<\/button>/);
  const homeButtonClass = footerButtonClassesMatch ? footerButtonClassesMatch[1] : "";
  const footerButtonsHaveMinWidth = homeButtonClass.includes("min-w-") || homeButtonClass.includes("px-") || homeButtonClass.includes("w-");
  assert(
    footerButtonsHaveMinWidth,
    "T1.7: Footer buttons specify min-width >= 44px or horizontal padding",
    "Footer link buttons ('HOME', 'ABOUT') specify `min-h-[44px]` and `p-0` but no `min-w-[44px]`. Short text like 'HOME' (4 chars, 12px font) computes to ~35px width, violating 44px tap target width.",
    {
      category: "Tap Target Ergonomics",
      severity: "MEDIUM",
      description: "Footer navigation buttons ('HOME', 'ABOUT') specify `min-h-[44px]` and `p-0` without `min-w-[44px]` or horizontal padding. Computed text width for 'HOME' at 12px font size is ~35px, falling short of the 44px minimum tap target width.",
      impact: "On touch devices (e.g. tablets or small mobile screens in portrait view), tapping 'HOME' or 'ABOUT' in the footer may miss due to narrow hit target width (~35px < 44px).",
      mitigation: "Add `min-w-[44px]` or horizontal padding (e.g. `px-2`) to footer navigation buttons in `Footer.tsx`."
    }
  );
  assert(
    contactCss.includes("height: 44px") || contactCss.includes("min-height: 44px") || fillButtonHtml.includes("min-height:44px"),
    "T1.8: ContactPage submit button height is >= 44px",
    "ContactPage submit button height is less than 44px"
  );
  assert(
    deliveryCss.includes(".delivery-cta-link") && deliveryCss.includes("min-height: 44px"),
    "T1.9: DeliveryPage CTA links (.delivery-cta-link) specify min-height: 44px",
    "DeliveryPage CTA links lack 44px min-height"
  );
  console.log(`
\x1B[36m--- Section 2: ContactPage Form Input Font-Size (>= 16px) ---\x1B[0m`);
  const inputFontSizeMatch = contactCss.match(/\.contact-page-container\s+\.field\s+input\s*\{[^}]*font-size:\s*(\d+)px/s);
  const textareaFontSizeMatch = contactCss.match(/\.contact-page-container\s+\.field\s+textarea\s*\{[^}]*font-size:\s*(\d+)px/s);
  const inputFontSize = inputFontSizeMatch ? parseInt(inputFontSizeMatch[1], 10) : 0;
  const textareaFontSize = textareaFontSizeMatch ? parseInt(textareaFontSizeMatch[1], 10) : 0;
  assert(
    inputFontSize >= 16,
    `T2.1: ContactPage form <input> font-size is >= 16px (Actual: ${inputFontSize}px)`,
    "Form text input font-size is below 16px, causing iOS Safari auto-zoom"
  );
  assert(
    textareaFontSize >= 16,
    `T2.2: ContactPage form <textarea> font-size is >= 16px (Actual: ${textareaFontSize}px)`,
    "Form textarea font-size is below 16px, causing iOS Safari auto-zoom"
  );
  const mediaQueryBlocks = contactCss.split("@media").slice(1);
  let mobileInputFontSizeReduced = false;
  for (const block of mediaQueryBlocks) {
    if (block.includes("input") || block.includes("textarea")) {
      const match = block.match(/font-size:\s*(\d+)px/);
      if (match && parseInt(match[1], 10) < 16) {
        mobileInputFontSizeReduced = true;
      }
    }
  }
  assert(
    !mobileInputFontSizeReduced,
    "T2.3: Mobile media queries (<= 600px / 900px) do NOT reduce form input font-size below 16px",
    "Mobile media query reduces input font-size below 16px"
  );
  console.log(`
\x1B[36m--- Section 3: Mobile Navbar Drawer Toggle, Backdrop, & Escape Key Logic ---\x1B[0m`);
  listeners["keydown"] = [];
  bodyStyle.overflow = "";
  const initialNavRender = import_server.default.renderToString(import_react6.default.createElement(Navbar, { currentPage: "home" }));
  assert(
    initialNavRender.includes('aria-expanded="false"') && !initialNavRender.includes("mobile-open"),
    "T3.1: Mobile navbar drawer initializes in closed state (aria-expanded=false)",
    "Navbar drawer did not initialize closed"
  );
  const navbarTsxPath = import_path.default.join(projectRoot, "src/app/components/Navbar.tsx");
  const navbarCode = import_fs.default.readFileSync(navbarTsxPath, "utf-8");
  assert(
    navbarCode.includes("setMobileMenuOpen(!mobileMenuOpen)") || navbarCode.includes("setMobileMenuOpen(false)"),
    "T3.2: Hamburger button toggles mobileMenuOpen state on click",
    "Hamburger button missing click handler"
  );
  assert(
    navbarCode.includes("onClick={() => setMobileMenuOpen(false)}") && navbarCode.includes("className={`nav-backdrop"),
    "T3.3: Backdrop overlay contains onClick handler to close drawer",
    "Backdrop overlay missing onClick handler"
  );
  assert(
    navbarCode.includes('e.key === "Escape"') && navbarCode.includes("setMobileMenuOpen(false)"),
    "T3.4: Keyboard event listener triggers setMobileMenuOpen(false) on Escape key press",
    "Escape key handler missing or incomplete in Navbar.tsx"
  );
  assert(
    navbarCode.includes('document.body.style.overflow = "hidden"') && navbarCode.includes('document.body.style.overflow = ""'),
    "T3.5: Body scroll locking effect activates overflow: hidden on open and restores overflow: '' on close",
    "Body scroll locking logic missing"
  );
  const getZIndex = (selector, css) => {
    const regex = new RegExp(`${selector.replace(".", "\\.")}[^{]*\\{[^}]*z-index:\\s*(\\d+)`, "s");
    const match = css.match(regex);
    return match ? parseInt(match[1], 10) : -1;
  };
  const zHamburger = getZIndex(".mobile-hamburger", navbarCss);
  const zNavbar = getZIndex(".main-navbar", navbarCss);
  const zLinks = getZIndex(".main-navbar .nav-links", navbarCss);
  const zBackdrop = getZIndex(".nav-backdrop", navbarCss);
  console.log(`  z-index stack: Hamburger=${zHamburger}, Navbar=${zNavbar}, DrawerLinks=${zLinks}, Backdrop=${zBackdrop}`);
  assert(
    zHamburger === 1001 && zNavbar === 1e3 && zLinks === 999 && zBackdrop === 998,
    "T3.6: Strict z-index layering structure verified (Hamburger 1001 > Navbar 1000 > DrawerLinks 999 > Backdrop 998)",
    "Z-Index values do not match standard layering stack"
  );
  console.log(`
\x1B[36m==================================================\x1B[0m`);
  console.log(`\x1B[1m\x1B[35mEMPIRICAL STRESS TEST SUMMARY\x1B[0m`);
  console.log(`\x1B[36m==================================================\x1B[0m`);
  console.log(`Total Assertions Evaluated : \x1B[1m${totalTests}\x1B[0m`);
  console.log(`Passed Assertions         : \x1B[32m${passedTests}\x1B[0m`);
  console.log(`Failed Assertions / Findings: \x1B[33m${failedTests}\x1B[0m`);
  console.log(`
\x1B[1mDiscovered Findings Count: ${findings.length}\x1B[0m`);
  for (const f of findings) {
    console.log(`- [${f.severity}] ${f.category}: ${f.description}`);
  }
}
runEmpiricalStressTest().catch((err) => {
  console.error("Fatal error during empirical stress test:", err);
  process.exit(1);
});
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server-legacy.node.production.min.js:
  (**
   * @license React
   * react-dom-server-legacy.node.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server.node.production.min.js:
  (**
   * @license React
   * react-dom-server.node.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server-legacy.node.development.js:
  (**
   * @license React
   * react-dom-server-legacy.node.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server.node.development.js:
  (**
   * @license React
   * react-dom-server.node.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
