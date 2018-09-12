(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.colorConverter = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = {
    toHex: function toHex(rgb) {
      var red = rgb[0].toString(16);
      var green = rgb[1].toString(16);
      var blue = rgb[2].toString(16);

      if (red.length == 1) red = 0 + red;
      if (green.length == 1) green = 0 + green;
      if (blue.length == 1) blue = 0 + blue;

      return "#" + red + green + blue;
    },
    toRgb: function toRgb(hex) {
      if (hex.startsWith("#")) hex = hex.substring(1, hex.length);

      var red = parseInt(hex.substring(0, 2), 16);
      var green = parseInt(hex.substring(2, 4), 16);
      var blue = parseInt(hex.substring(4, 6), 16);

      return [red, green, blue];
    }
  };
});
