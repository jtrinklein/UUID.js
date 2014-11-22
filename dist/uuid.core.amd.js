/*
 Version: core-1.0
 The MIT License: Copyright (c) 2012 LiosK.
*/
(function() {
    // Establish the root object, `window` in the browser, or `exports` on the server.
    var root = this;

    function UUID(){}UUID.generate=function(){var a=UUID._gri,b=UUID._ha;return b(a(32),8)+"-"+b(a(16),4)+"-"+b(16384|a(12),4)+"-"+b(32768|a(14),4)+"-"+b(a(48),12)};UUID._gri=function(a){return 0>a?NaN:30>=a?0|Math.random()*(1<<a):53>=a?(0|1073741824*Math.random())+1073741824*(0|Math.random()*(1<<a-30)):NaN};UUID._ha=function(a,b){for(var c=a.toString(16),d=b-c.length,e="0";0<d;d>>>=1,e+=e)d&1&&(c=e+c);return c};

    // Export the uuid object for **Node.js**, with
    // backwards-compatibility for the old `require()` API. If we're in
    // the browser, add `uuid` as a global object via a string identifier,
    // for Closure Compiler "advanced" mode.
    if (typeof exports !== 'undefined') {
      if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = UUID;
      }
      exports.uuid = UUID;
    } else {
      root.uuid = UUID;
    }
}).call(this);
