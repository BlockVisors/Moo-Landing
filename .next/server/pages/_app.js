module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MyApp; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__("KNus");
var config_default = /*#__PURE__*/__webpack_require__.n(config_);

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./node_modules/bootstrap-scss/bootstrap.scss
var bootstrap = __webpack_require__("bkMU");

// EXTERNAL MODULE: ./public/assets/scss/flaticon.scss
var flaticon = __webpack_require__("GqKw");

// EXTERNAL MODULE: ./public/assets/scss/font-awesome.scss
var font_awesome = __webpack_require__("7qSi");

// EXTERNAL MODULE: ./public/assets/scss/color-1.scss
var color_1 = __webpack_require__("EIO+");

// EXTERNAL MODULE: ./public/assets/scss/themify.scss
var themify = __webpack_require__("6FEr");

// EXTERNAL MODULE: ./public/assets/scss/slick.scss
var slick = __webpack_require__("AQPv");

// EXTERNAL MODULE: ./public/assets/scss/slick-theme.scss
var slick_theme = __webpack_require__("HmUi");

// CONCATENATED MODULE: ./containers/customizer.js
var __jsx = external_react_default.a.createElement;


const Customizer = () => {
  const {
    0: divName,
    1: setDivName
  } = Object(external_react_["useState"])('RTL');
  const {
    0: themeLayout,
    1: setThemeLayout
  } = Object(external_react_["useState"])(false);

  const ChangeRtl = divName => {
    if (divName === 'RTL') {
      if (false) {}

      setDivName('LTR');
    } else {
      if (false) {}

      setDivName('RTL');
    }
  };

  const changeThemeLayout = () => {
    setThemeLayout(!themeLayout);
  };

  if (themeLayout) {
    if (false) {}
  } else {
    if (false) {}
  }

  return __jsx("div", {
    className: "theme-pannel-main"
  }, __jsx("ul", null, __jsx("li", {
    id: "rtl_btn"
  }, __jsx("a", {
    href: null,
    className: "btn setting_btn",
    onClick: () => ChangeRtl(divName)
  }, __jsx("span", {
    className: "rtl-txt"
  }, divName))), __jsx("li", {
    className: "sidebar-btn dark-light-btn"
  }, __jsx("a", {
    href: null,
    className: "dark-light",
    onClick: () => changeThemeLayout()
  }, __jsx("span", {
    className: "theme-layout-version"
  }, themeLayout ? 'Light' : 'Dark')))));
};

/* harmony default export */ var customizer = (Customizer);
// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;














const {
  publicRuntimeConfig = {}
} = config_default()() || {};
external_nprogress_default.a.configure({
  showSpinner: publicRuntimeConfig.NProgressShowSpinner
});

router_default.a.onRouteChangeStart = () => {
  external_nprogress_default.a.start();
};

router_default.a.onRouteChangeComplete = () => {
  external_nprogress_default.a.done();
};

router_default.a.onRouteChangeError = () => {
  external_nprogress_default.a.done();
};

function MyFunctionComponent({
  children
}) {
  const {
    0: loader,
    1: setLoader
  } = Object(external_react_["useState"])(true);
  const {
    0: goingUp,
    1: setGoingUp
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    // Page Loader
    setTimeout(() => {
      setLoader(false);
    }, 1500); // Tap to Top Scroll 

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 500) setGoingUp(true);else setGoingUp(false);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const tapToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  };

  return _app_jsx(external_react_default.a.Fragment, null, _app_jsx(head_default.a, null, _app_jsx("title", null, "Unice")), loader && _app_jsx("div", {
    className: "loader-wrapper"
  }, _app_jsx("div", {
    className: "loader"
  }, _app_jsx("div", null), _app_jsx("div", null), _app_jsx("div", null), _app_jsx("div", null), _app_jsx("div", null), _app_jsx("div", null), _app_jsx("div", null), _app_jsx("div", null), _app_jsx("div", null))), _app_jsx(external_react_default.a.Fragment, null, children), _app_jsx("div", {
    className: "tap-top",
    style: goingUp ? {
      display: 'block'
    } : {
      display: 'none'
    },
    onClick: tapToTop
  }, _app_jsx("div", null, _app_jsx("i", {
    className: "fa fa-angle-double-up"
  }))));
}

function MyApp({
  Component,
  pageProps,
  graphql
}) {
  return _app_jsx("div", null, _app_jsx(MyFunctionComponent, null, _app_jsx(Component, pageProps), _app_jsx(customizer, null)), _app_jsx(external_react_toastify_["ToastContainer"], null));
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6FEr":
/***/ (function(module, exports) {



/***/ }),

/***/ "7qSi":
/***/ (function(module, exports) {



/***/ }),

/***/ "AQPv":
/***/ (function(module, exports) {



/***/ }),

/***/ "EIO+":
/***/ (function(module, exports) {



/***/ }),

/***/ "GqKw":
/***/ (function(module, exports) {



/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "HmUi":
/***/ (function(module, exports) {



/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "bkMU":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });