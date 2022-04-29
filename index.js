(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-native')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-native'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Example = {}, global.React, global.reactNative));
})(this, (function (exports, React, reactNative) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var UIButton = function UIButton(_ref) {
    var type = _ref.type,
        value = _ref.value,
        loading = _ref.loading,
        children = _ref.children;
    var style = getStyle$1(type);
    return /*#__PURE__*/React__default["default"].createElement(reactNative.TouchableOpacity, {
      disabled: loading,
      style: [defaultStyle$1.wrapper, style.container, loading ? LoadingStyle$1.container : {}],
      testID: "ui-button"
    }, /*#__PURE__*/React__default["default"].createElement(reactNative.Text, {
      style: [defaultStyle$1.text, style.text]
    }, loading ? "Loading . . ." : children || value));
  };

  var getStyle$1 = function getStyle(type) {
    switch (type) {
      case "primary":
        return PrimaryStyle$1;

      case "secondary":
        return SecondaryStyle$1;

      default:
        return defaultStyle$1;
    }
  };

  var defaultStyle$1 = reactNative.StyleSheet.create({
    wrapper: {
      paddingHorizontal: 8,
      paddingVertical: 12,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#d9d9d9",
      backgroundColor: "white"
    },
    text: {
      fontWeight: "bold",
      color: "#000000d9"
    }
  });
  var PrimaryStyle$1 = reactNative.StyleSheet.create({
    container: {
      backgroundColor: "#ff3d00",
      borderColor: "#ff3d00"
    },
    text: {
      color: "white"
    }
  });
  var SecondaryStyle$1 = reactNative.StyleSheet.create({
    container: {
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#ff3d00",
      backgroundColor: "white"
    },
    text: {
      color: "#ff3d00"
    }
  });
  var LoadingStyle$1 = reactNative.StyleSheet.create({
    container: {
      opacity: 0.4
    }
  });

  var UIButton2 = function UIButton2(_ref) {
    var type = _ref.type,
        value = _ref.value,
        loading = _ref.loading,
        children = _ref.children;
    var style = getStyle(type);
    return /*#__PURE__*/React__default["default"].createElement(reactNative.TouchableOpacity, {
      disabled: loading,
      style: [defaultStyle.wrapper, style.container, loading ? LoadingStyle.container : {}],
      testID: "ui-button"
    }, /*#__PURE__*/React__default["default"].createElement(reactNative.Text, {
      style: [defaultStyle.text, style.text]
    }, loading ? "Loading . . ." : children || value));
  };

  var getStyle = function getStyle(type) {
    switch (type) {
      case "primary":
        return PrimaryStyle;

      case "secondary":
        return SecondaryStyle;

      default:
        return defaultStyle;
    }
  };

  var defaultStyle = reactNative.StyleSheet.create({
    wrapper: {
      paddingHorizontal: 8,
      paddingVertical: 12,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#d9d9d9",
      backgroundColor: "white"
    },
    text: {
      fontWeight: "bold",
      color: "#000000d9"
    }
  });
  var PrimaryStyle = reactNative.StyleSheet.create({
    container: {
      backgroundColor: "#ff3d00",
      borderColor: "#ff3d00"
    },
    text: {
      color: "white"
    }
  });
  var SecondaryStyle = reactNative.StyleSheet.create({
    container: {
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#ff3d00",
      backgroundColor: "white"
    },
    text: {
      color: "#ff3d00"
    }
  });
  var LoadingStyle = reactNative.StyleSheet.create({
    container: {
      opacity: 0.4
    }
  });

  exports.UIButton = UIButton;
  exports.UIButton2 = UIButton2;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
