/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/pingcrm-ziggy-polyfill.js":
/*!************************************************!*\
  !*** ./resources/js/pingcrm-ziggy-polyfill.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Ziggy = {
  namedRoutes: {
    'ignition.healthCheck': {
      'uri': '_ignition\/health-check',
      'methods': ['GET', 'HEAD'],
      'domain': null
    },
    'ignition.executeSolution': {
      'uri': '_ignition\/execute-solution',
      'methods': ['POST'],
      'domain': null
    },
    'ignition.shareReport': {
      'uri': '_ignition\/share-report',
      'methods': ['POST'],
      'domain': null
    },
    'ignition.scripts': {
      'uri': '_ignition\/scripts\/{script}',
      'methods': ['GET', 'HEAD'],
      'domain': null
    },
    'ignition.styles': {
      'uri': '_ignition\/styles\/{style}',
      'methods': ['GET', 'HEAD'],
      'domain': null
    },
    'login': {
      'uri': 'login',
      'methods': ['GET', 'HEAD'],
      'domain': null
    },
    'login.attempt': {
      'uri': 'login',
      'methods': ['POST'],
      'domain': null
    },
    'logout': {
      'uri': 'logout',
      'methods': ['POST'],
      'domain': null
    },
    'dashboard': {
      'uri': '\/',
      'methods': ['GET', 'HEAD'],
      'domain': null
    },
    'users': {
      'uri': 'users',
      'methods': ['GET', 'HEAD'],
      'domain': null
    },
    'users.create': {
      'uri': 'users\/create',
      'methods': ['GET', 'HEAD'],
      'domain': null
    },
    'users.store': {
      'uri': 'users',
      'methods': ['POST'],
      'domain': null
    },
    'users.edit': {
      'uri': 'users\/{user}\/edit',
      'methods': ['GET', 'HEAD'],
      'domain': null
    },
    'users.update': {
      'uri': 'users\/{user}',
      'methods': ['PUT'],
      'domain': null
    },
    'users.destroy': {
      'uri': 'users\/{user}',
      'methods': ['DELETE'],
      'domain': null
    },
    'users.restore': {
      'uri': 'users\/{user}\/restore',
      'methods': ['PUT'],
      'domain': null
    },
    'organizations': {
      'uri': 'organizations',
      'methods': ['GET', 'HEAD'],
      'domain': null
    },
    'organizations.create': {
      'uri': 'organizations\/create',
      'methods': ['GET', 'HEAD'],
      'domain': null
    },
    'organizations.store': {
      'uri': 'organizations',
      'methods': ['POST'],
      'domain': null
    },
    'organizations.edit': {
      'uri': 'organizations\/{organization}\/edit',
      'methods': ['GET', 'HEAD'],
      'domain': null
    },
    'organizations.update': {
      'uri': 'organizations\/{organization}',
      'methods': ['PUT'],
      'domain': null
    },
    'organizations.destroy': {
      'uri': 'organizations\/{organization}',
      'methods': ['DELETE'],
      'domain': null
    },
    'organizations.restore': {
      'uri': 'organizations\/{organization}\/restore',
      'methods': ['PUT'],
      'domain': null
    },
    'contacts': {
      'uri': 'contacts',
      'methods': ['GET', 'HEAD'],
      'domain': null
    },
    'contacts.create': {
      'uri': 'contacts\/create',
      'methods': ['GET', 'HEAD'],
      'domain': null
    },
    'contacts.store': {
      'uri': 'contacts',
      'methods': ['POST'],
      'domain': null
    },
    'contacts.edit': {
      'uri': 'contacts\/{contact}\/edit',
      'methods': ['GET', 'HEAD'],
      'domain': null
    },
    'contacts.update': {
      'uri': 'contacts\/{contact}',
      'methods': ['PUT'],
      'domain': null
    },
    'contacts.destroy': {
      'uri': 'contacts\/{contact}',
      'methods': ['DELETE'],
      'domain': null
    },
    'contacts.restore': {
      'uri': 'contacts\/{contact}\/restore',
      'methods': ['PUT'],
      'domain': null
    },
    'reports': {
      'uri': 'reports',
      'methods': ['GET', 'HEAD'],
      'domain': null
    }
  },
  baseUrl: 'https://pingcrm.test/',
  baseProtocol: 'https',
  baseDomain: 'pingcrm.test',
  basePort: false,
  defaultParameters: []
};
!function (e, t) {
  'object' == ( false ? undefined : _typeof(exports)) && 'object' == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  return function (e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var o = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }

    return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (e) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: 'Module'
      }), Object.defineProperty(e, '__esModule', {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && 'object' == _typeof(e) && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, 'default', {
        enumerable: !0,
        value: e
      }), 2 & t && 'string' != typeof e) for (var o in e) {
        r.d(n, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
      return n;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return r.d(t, 'a', t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = '', r(r.s = 5);
  }([function (e, t, r) {
    'use strict';

    var n = Object.prototype.hasOwnProperty,
        o = Array.isArray,
        i = function () {
      for (var e = [], t = 0; t < 256; ++t) {
        e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase());
      }

      return e;
    }(),
        a = function a(e, t) {
      for (var r = t && t.plainObjects ? Object.create(null) : {}, n = 0; n < e.length; ++n) {
        void 0 !== e[n] && (r[n] = e[n]);
      }

      return r;
    };

    e.exports = {
      arrayToObject: a,
      assign: function assign(e, t) {
        return Object.keys(t).reduce(function (e, r) {
          return e[r] = t[r], e;
        }, e);
      },
      combine: function combine(e, t) {
        return [].concat(e, t);
      },
      compact: function compact(e) {
        for (var t = [{
          obj: {
            o: e
          },
          prop: 'o'
        }], r = [], n = 0; n < t.length; ++n) {
          for (var i = t[n], a = i.obj[i.prop], u = Object.keys(a), c = 0; c < u.length; ++c) {
            var l = u[c],
                s = a[l];
            'object' == _typeof(s) && null !== s && -1 === r.indexOf(s) && (t.push({
              obj: a,
              prop: l
            }), r.push(s));
          }
        }

        return function (e) {
          for (; e.length > 1;) {
            var t = e.pop(),
                r = t.obj[t.prop];

            if (o(r)) {
              for (var n = [], i = 0; i < r.length; ++i) {
                void 0 !== r[i] && n.push(r[i]);
              }

              t.obj[t.prop] = n;
            }
          }
        }(t), e;
      },
      decode: function decode(e, t, r) {
        var n = e.replace(/\+/g, ' ');
        if ('iso-8859-1' === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);

        try {
          return decodeURIComponent(n);
        } catch (e) {
          return n;
        }
      },
      encode: function encode(e, t, r) {
        if (0 === e.length) return e;
        var n = e;
        if ('symbol' == _typeof(e) ? n = Symbol.prototype.toString.call(e) : 'string' != typeof e && (n = String(e)), 'iso-8859-1' === r) return escape(n).replace(/%u[0-9a-f]{4}/gi, function (e) {
          return '%26%23' + parseInt(e.slice(2), 16) + '%3B';
        });

        for (var o = '', a = 0; a < n.length; ++a) {
          var u = n.charCodeAt(a);
          45 === u || 46 === u || 95 === u || 126 === u || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 ? o += n.charAt(a) : u < 128 ? o += i[u] : u < 2048 ? o += i[192 | u >> 6] + i[128 | 63 & u] : u < 55296 || u >= 57344 ? o += i[224 | u >> 12] + i[128 | u >> 6 & 63] + i[128 | 63 & u] : (a += 1, u = 65536 + ((1023 & u) << 10 | 1023 & n.charCodeAt(a)), o += i[240 | u >> 18] + i[128 | u >> 12 & 63] + i[128 | u >> 6 & 63] + i[128 | 63 & u]);
        }

        return o;
      },
      isBuffer: function isBuffer(e) {
        return !(!e || 'object' != _typeof(e) || !(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e)));
      },
      isRegExp: function isRegExp(e) {
        return '[object RegExp]' === Object.prototype.toString.call(e);
      },
      merge: function e(t, r, i) {
        if (!r) return t;

        if ('object' != _typeof(r)) {
          if (o(t)) t.push(r);else {
            if (!t || 'object' != _typeof(t)) return [t, r];
            (i && (i.plainObjects || i.allowPrototypes) || !n.call(Object.prototype, r)) && (t[r] = !0);
          }
          return t;
        }

        if (!t || 'object' != _typeof(t)) return [t].concat(r);
        var u = t;
        return o(t) && !o(r) && (u = a(t, i)), o(t) && o(r) ? (r.forEach(function (r, o) {
          if (n.call(t, o)) {
            var a = t[o];
            a && 'object' == _typeof(a) && r && 'object' == _typeof(r) ? t[o] = e(a, r, i) : t.push(r);
          } else t[o] = r;
        }), t) : Object.keys(r).reduce(function (t, o) {
          var a = r[o];
          return n.call(t, o) ? t[o] = e(t[o], a, i) : t[o] = a, t;
        }, u);
      }
    };
  }, function (e, t, r) {
    'use strict';

    var n = String.prototype.replace,
        o = /%20/g,
        i = r(0),
        a = {
      RFC1738: 'RFC1738',
      RFC3986: 'RFC3986'
    };
    e.exports = i.assign({
      "default": a.RFC3986,
      formatters: {
        RFC1738: function RFC1738(e) {
          return n.call(e, o, '+');
        },
        RFC3986: function RFC3986(e) {
          return String(e);
        }
      }
    }, a);
  }, function (e, t, r) {
    'use strict';

    var n = r(3),
        o = r(4),
        i = r(1);
    e.exports = {
      formats: i,
      parse: o,
      stringify: n
    };
  }, function (e, t, r) {
    'use strict';

    var n = r(0),
        o = r(1),
        i = Object.prototype.hasOwnProperty,
        a = {
      brackets: function brackets(e) {
        return e + '[]';
      },
      comma: 'comma',
      indices: function indices(e, t) {
        return e + '[' + t + ']';
      },
      repeat: function repeat(e) {
        return e;
      }
    },
        u = Array.isArray,
        c = Array.prototype.push,
        l = function l(e, t) {
      c.apply(e, u(t) ? t : [t]);
    },
        s = Date.prototype.toISOString,
        f = o["default"],
        p = {
      addQueryPrefix: !1,
      allowDots: !1,
      charset: 'utf-8',
      charsetSentinel: !1,
      delimiter: '&',
      encode: !0,
      encoder: n.encode,
      encodeValuesOnly: !1,
      format: f,
      formatter: o.formatters[f],
      indices: !1,
      serializeDate: function serializeDate(e) {
        return s.call(e);
      },
      skipNulls: !1,
      strictNullHandling: !1
    },
        d = function e(t, r, o, i, a, c, s, f, d, y, h, m, b) {
      var g,
          v = t;

      if ('function' == typeof s ? v = s(r, v) : v instanceof Date ? v = y(v) : 'comma' === o && u(v) && (v = v.join(',')), null === v) {
        if (i) return c && !m ? c(r, p.encoder, b) : r;
        v = '';
      }

      if ('string' == typeof (g = v) || 'number' == typeof g || 'boolean' == typeof g || 'symbol' == _typeof(g) || 'bigint' == typeof g || n.isBuffer(v)) return c ? [h(m ? r : c(r, p.encoder, b)) + '=' + h(c(v, p.encoder, b))] : [h(r) + '=' + h(String(v))];
      var O,
          w = [];
      if (void 0 === v) return w;
      if (u(s)) O = s;else {
        var j = Object.keys(v);
        O = f ? j.sort(f) : j;
      }

      for (var P = 0; P < O.length; ++P) {
        var x = O[P];
        a && null === v[x] || (u(v) ? l(w, e(v[x], 'function' == typeof o ? o(r, x) : r, o, i, a, c, s, f, d, y, h, m, b)) : l(w, e(v[x], r + (d ? '.' + x : '[' + x + ']'), o, i, a, c, s, f, d, y, h, m, b)));
      }

      return w;
    };

    e.exports = function (e, t) {
      var r,
          n = e,
          c = function (e) {
        if (!e) return p;
        if (null !== e.encoder && void 0 !== e.encoder && 'function' != typeof e.encoder) throw new TypeError('Encoder has to be a function.');
        var t = e.charset || p.charset;
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var r = o["default"];

        if (void 0 !== e.format) {
          if (!i.call(o.formatters, e.format)) throw new TypeError('Unknown format option provided.');
          r = e.format;
        }

        var n = o.formatters[r],
            a = p.filter;
        return ('function' == typeof e.filter || u(e.filter)) && (a = e.filter), {
          addQueryPrefix: 'boolean' == typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
          allowDots: void 0 === e.allowDots ? p.allowDots : !!e.allowDots,
          charset: t,
          charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
          delimiter: void 0 === e.delimiter ? p.delimiter : e.delimiter,
          encode: 'boolean' == typeof e.encode ? e.encode : p.encode,
          encoder: 'function' == typeof e.encoder ? e.encoder : p.encoder,
          encodeValuesOnly: 'boolean' == typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
          filter: a,
          formatter: n,
          serializeDate: 'function' == typeof e.serializeDate ? e.serializeDate : p.serializeDate,
          skipNulls: 'boolean' == typeof e.skipNulls ? e.skipNulls : p.skipNulls,
          sort: 'function' == typeof e.sort ? e.sort : null,
          strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling
        };
      }(t);

      'function' == typeof c.filter ? n = (0, c.filter)('', n) : u(c.filter) && (r = c.filter);
      var s,
          f = [];
      if ('object' != _typeof(n) || null === n) return '';
      s = t && t.arrayFormat in a ? t.arrayFormat : t && 'indices' in t ? t.indices ? 'indices' : 'repeat' : 'indices';
      var y = a[s];
      r || (r = Object.keys(n)), c.sort && r.sort(c.sort);

      for (var h = 0; h < r.length; ++h) {
        var m = r[h];
        c.skipNulls && null === n[m] || l(f, d(n[m], m, y, c.strictNullHandling, c.skipNulls, c.encode ? c.encoder : null, c.filter, c.sort, c.allowDots, c.serializeDate, c.formatter, c.encodeValuesOnly, c.charset));
      }

      var b = f.join(c.delimiter),
          g = !0 === c.addQueryPrefix ? '?' : '';
      return c.charsetSentinel && ('iso-8859-1' === c.charset ? g += 'utf8=%26%2310003%3B&' : g += 'utf8=%E2%9C%93&'), b.length > 0 ? g + b : '';
    };
  }, function (e, t, r) {
    'use strict';

    var n = r(0),
        o = Object.prototype.hasOwnProperty,
        i = {
      allowDots: !1,
      allowPrototypes: !1,
      arrayLimit: 20,
      charset: 'utf-8',
      charsetSentinel: !1,
      comma: !1,
      decoder: n.decode,
      delimiter: '&',
      depth: 5,
      ignoreQueryPrefix: !1,
      interpretNumericEntities: !1,
      parameterLimit: 1e3,
      parseArrays: !0,
      plainObjects: !1,
      strictNullHandling: !1
    },
        a = function a(e) {
      return e.replace(/&#(\d+);/g, function (e, t) {
        return String.fromCharCode(parseInt(t, 10));
      });
    },
        u = function u(e, t, r) {
      if (e) {
        var n = r.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
            i = /(\[[^[\]]*])/g,
            a = r.depth > 0 && /(\[[^[\]]*])/.exec(n),
            u = a ? n.slice(0, a.index) : n,
            c = [];

        if (u) {
          if (!r.plainObjects && o.call(Object.prototype, u) && !r.allowPrototypes) return;
          c.push(u);
        }

        for (var l = 0; r.depth > 0 && null !== (a = i.exec(n)) && l < r.depth;) {
          if (l += 1, !r.plainObjects && o.call(Object.prototype, a[1].slice(1, -1)) && !r.allowPrototypes) return;
          c.push(a[1]);
        }

        return a && c.push('[' + n.slice(a.index) + ']'), function (e, t, r) {
          for (var n = t, o = e.length - 1; o >= 0; --o) {
            var i,
                a = e[o];
            if ('[]' === a && r.parseArrays) i = [].concat(n);else {
              i = r.plainObjects ? Object.create(null) : {};
              var u = '[' === a.charAt(0) && ']' === a.charAt(a.length - 1) ? a.slice(1, -1) : a,
                  c = parseInt(u, 10);
              r.parseArrays || '' !== u ? !isNaN(c) && a !== u && String(c) === u && c >= 0 && r.parseArrays && c <= r.arrayLimit ? (i = [])[c] = n : i[u] = n : i = {
                0: n
              };
            }
            n = i;
          }

          return n;
        }(c, t, r);
      }
    };

    e.exports = function (e, t) {
      var r = function (e) {
        if (!e) return i;
        if (null !== e.decoder && void 0 !== e.decoder && 'function' != typeof e.decoder) throw new TypeError('Decoder has to be a function.');
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
        var t = void 0 === e.charset ? i.charset : e.charset;
        return {
          allowDots: void 0 === e.allowDots ? i.allowDots : !!e.allowDots,
          allowPrototypes: 'boolean' == typeof e.allowPrototypes ? e.allowPrototypes : i.allowPrototypes,
          arrayLimit: 'number' == typeof e.arrayLimit ? e.arrayLimit : i.arrayLimit,
          charset: t,
          charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : i.charsetSentinel,
          comma: 'boolean' == typeof e.comma ? e.comma : i.comma,
          decoder: 'function' == typeof e.decoder ? e.decoder : i.decoder,
          delimiter: 'string' == typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : i.delimiter,
          depth: 'number' == typeof e.depth || !1 === e.depth ? +e.depth : i.depth,
          ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
          interpretNumericEntities: 'boolean' == typeof e.interpretNumericEntities ? e.interpretNumericEntities : i.interpretNumericEntities,
          parameterLimit: 'number' == typeof e.parameterLimit ? e.parameterLimit : i.parameterLimit,
          parseArrays: !1 !== e.parseArrays,
          plainObjects: 'boolean' == typeof e.plainObjects ? e.plainObjects : i.plainObjects,
          strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : i.strictNullHandling
        };
      }(t);

      if ('' === e || null == e) return r.plainObjects ? Object.create(null) : {};

      for (var c = 'string' == typeof e ? function (e, t) {
        var r,
            u = {},
            c = t.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
            l = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
            s = c.split(t.delimiter, l),
            f = -1,
            p = t.charset;
        if (t.charsetSentinel) for (r = 0; r < s.length; ++r) {
          0 === s[r].indexOf('utf8=') && ('utf8=%E2%9C%93' === s[r] ? p = 'utf-8' : 'utf8=%26%2310003%3B' === s[r] && (p = 'iso-8859-1'), f = r, r = s.length);
        }

        for (r = 0; r < s.length; ++r) {
          if (r !== f) {
            var d,
                y,
                h = s[r],
                m = h.indexOf(']='),
                b = -1 === m ? h.indexOf('=') : m + 1;
            -1 === b ? (d = t.decoder(h, i.decoder, p), y = t.strictNullHandling ? null : '') : (d = t.decoder(h.slice(0, b), i.decoder, p), y = t.decoder(h.slice(b + 1), i.decoder, p)), y && t.interpretNumericEntities && 'iso-8859-1' === p && (y = a(y)), y && t.comma && y.indexOf(',') > -1 && (y = y.split(',')), o.call(u, d) ? u[d] = n.combine(u[d], y) : u[d] = y;
          }
        }

        return u;
      }(e, r) : e, l = r.plainObjects ? Object.create(null) : {}, s = Object.keys(c), f = 0; f < s.length; ++f) {
        var p = s[f],
            d = u(p, c[p], r);
        l = n.merge(l, d, r);
      }

      return n.compact(l);
    };
  }, function (e, t, r) {
    'use strict';

    function n(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    r.r(t);

    var o = function () {
      function e(t, r, n) {
        if (function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }(this, e), this.name = t, this.ziggy = n, this.route = this.ziggy.namedRoutes[this.name], void 0 === this.name) throw new Error('Ziggy Error: You must provide a route name');
        if (void 0 === this.route) throw new Error('Ziggy Error: route \''.concat(this.name, '\' is not found in the route list'));
        this.absolute = void 0 === r || r, this.domain = this.setDomain(), this.path = this.route.uri.replace(/^\//, '');
      }

      var t, r;
      return t = e, (r = [{
        key: 'setDomain',
        value: function value() {
          if (!this.absolute) return '/';
          if (!this.route.domain) return this.ziggy.baseUrl.replace(/\/?$/, '/');
          var e = (this.route.domain || this.ziggy.baseDomain).replace(/\/+$/, '');
          return this.ziggy.basePort && e.replace(/\/+$/, '') === this.ziggy.baseDomain.replace(/\/+$/, '') && (e = this.ziggy.baseDomain + ':' + this.ziggy.basePort), this.ziggy.baseProtocol + '://' + e + '/';
        }
      }, {
        key: 'construct',
        value: function value() {
          return this.domain + this.path;
        }
      }]) && n(t.prototype, r), e;
    }(),
        i = r(2);

    function a() {
      return (a = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];

          for (var n in r) {
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function u(e) {
      return (u = 'function' == typeof Symbol && 'symbol' == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : _typeof(e);
      })(e);
    }

    function c(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function l(e) {
      var t = 'function' == typeof Map ? new Map() : void 0;
      return (l = function l(e) {
        if (null === e || (r = e, -1 === Function.toString.call(r).indexOf('[native code]'))) return e;
        var r;
        if ('function' != typeof e) throw new TypeError('Super expression must either be null or a function');

        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, n);
        }

        function n() {
          return function (e, t, r) {
            return (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;

              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (e) {
                return !1;
              }
            }() ? Reflect.construct : function (e, t, r) {
              var n = [null];
              n.push.apply(n, t);
              var o = new (Function.bind.apply(e, n))();
              return r && s(o, r.prototype), o;
            }).apply(null, arguments);
          }(e, arguments, f(this).constructor);
        }

        return n.prototype = Object.create(e.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), s(n, e);
      })(e);
    }

    function s(e, t) {
      return (s = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function f(e) {
      return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    r.d(t, 'default', function () {
      return d;
    });

    var p = function (e) {
      function t(e, r, n) {
        var i,
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }(this, t), (i = function (e, t) {
          return !t || 'object' !== u(t) && 'function' != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e;
          }(e) : t;
        }(this, f(t).call(this))).name = e, i.absolute = n, i.ziggy = a || Ziggy, i.urlBuilder = i.name ? new o(e, n, i.ziggy) : null, i.template = i.urlBuilder ? i.urlBuilder.construct() : '', i.urlParams = i.normalizeParams(r), i.queryParams = {}, i.hydrated = '', i;
      }

      var r, n;
      return function (e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && s(e, t);
      }(t, l(String)), r = t, (n = [{
        key: 'normalizeParams',
        value: function value(e) {
          return void 0 === e ? {} : ((e = 'object' !== u(e) ? [e] : e).hasOwnProperty('id') && -1 == this.template.indexOf('{id}') && (e = [e.id]), this.numericParamIndices = Array.isArray(e), a({}, e));
        }
      }, {
        key: 'with',
        value: function value(e) {
          return this.urlParams = this.normalizeParams(e), this;
        }
      }, {
        key: 'withQuery',
        value: function value(e) {
          return a(this.queryParams, e), this;
        }
      }, {
        key: 'hydrateUrl',
        value: function value() {
          var e = this;
          if (this.hydrated) return this.hydrated;
          var t = this.template.replace(/{([^}]+)}/gi, function (t, r) {
            var n,
                o,
                i = e.trimParam(t);
            if (e.ziggy.defaultParameters.hasOwnProperty(i) && (n = e.ziggy.defaultParameters[i]), n && !e.urlParams[i]) return delete e.urlParams[i], n;

            if (e.numericParamIndices ? (e.urlParams = Object.values(e.urlParams), o = e.urlParams.shift()) : (o = e.urlParams[i], delete e.urlParams[i]), void 0 === o) {
              if (-1 === t.indexOf('?')) throw new Error('Ziggy Error: \'' + i + '\' key is required for route \'' + e.name + '\'');
              return '';
            }

            return o.id ? encodeURIComponent(o.id) : encodeURIComponent(o);
          });
          return null != this.urlBuilder && '' !== this.urlBuilder.path && (t = t.replace(/\/+$/, '')), this.hydrated = t, this.hydrated;
        }
      }, {
        key: 'matchUrl',
        value: function value() {
          var e = window.location.hostname + (window.location.port ? ':' + window.location.port : '') + window.location.pathname,
              t = this.template.replace(/(\/\{[^\}]*\?\})/g, '/').replace(/(\{[^\}]*\})/gi, '[^/?]+').replace(/\/?$/, '').split('://')[1],
              r = this.template.replace(/(\{[^\}]*\})/gi, '[^/?]+').split('://')[1],
              n = e.replace(/\/?$/, '/'),
              o = new RegExp('^' + r + '/$').test(n),
              i = new RegExp('^' + t + '/$').test(n);
          return o || i;
        }
      }, {
        key: 'constructQuery',
        value: function value() {
          if (0 === Object.keys(this.queryParams).length && 0 === Object.keys(this.urlParams).length) return '';
          var e = a(this.urlParams, this.queryParams);
          return Object(i.stringify)(e, {
            encodeValuesOnly: !0,
            skipNulls: !0,
            addQueryPrefix: !0,
            arrayFormat: 'indices'
          });
        }
      }, {
        key: 'current',
        value: function value() {
          var e = this,
              r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              n = Object.keys(this.ziggy.namedRoutes),
              o = n.filter(function (r) {
            return -1 !== e.ziggy.namedRoutes[r].methods.indexOf('GET') && new t(r, void 0, void 0, e.ziggy).matchUrl();
          })[0];

          if (r) {
            var i = new RegExp('^' + r.replace('*', '.*').replace('.', '.') + '$', 'i');
            return i.test(o);
          }

          return o;
        }
      }, {
        key: 'check',
        value: function value(e) {
          return Object.keys(this.ziggy.namedRoutes).includes(e);
        }
      }, {
        key: 'extractParams',
        value: function value(e, t, r) {
          var n = this,
              o = e.split(r);
          return t.split(r).reduce(function (e, t, r) {
            return 0 === t.indexOf('{') && -1 !== t.indexOf('}') && o[r] ? a(e, (i = {}, u = n.trimParam(t), c = o[r], u in i ? Object.defineProperty(i, u, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : i[u] = c, i)) : e;
            var i, u, c;
          }, {});
        }
      }, {
        key: 'parse',
        value: function value() {
          this["return"] = this.hydrateUrl() + this.constructQuery();
        }
      }, {
        key: 'url',
        value: function value() {
          return this.parse(), this["return"];
        }
      }, {
        key: 'toString',
        value: function value() {
          return this.url();
        }
      }, {
        key: 'trimParam',
        value: function value(e) {
          return e.replace(/{|}|\?/g, '');
        }
      }, {
        key: 'valueOf',
        value: function value() {
          return this.url();
        }
      }, {
        key: 'params',
        get: function get() {
          var e = this.ziggy.namedRoutes[this.current()];
          return a(this.extractParams(window.location.hostname, e.domain || '', '.'), this.extractParams(window.location.pathname.slice(1), e.uri, '/'));
        }
      }]) && c(r.prototype, n), t;
    }();

    function d(e, t, r, n) {
      return new p(e, t, r, n);
    }
  }])["default"];
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ 1:
/*!******************************************************!*\
  !*** multi ./resources/js/pingcrm-ziggy-polyfill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/claudio/Code/github-as-personal/claudiodekker/pingcrm/resources/js/pingcrm-ziggy-polyfill.js */"./resources/js/pingcrm-ziggy-polyfill.js");


/***/ })

/******/ });