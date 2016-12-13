/* global app, $on */
(function(window) {
  'use strict'
  debugger;
  console.log('dasfd')
  $on(window, 'load', app.onLoad)
  $on(window, 'hashchange', app.onLoad)
})(window)
