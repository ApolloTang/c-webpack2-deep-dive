/* global app, $on */
(function(window) {
  'use strict'
  console.log('dasfd')
  $on(window, 'load', app.onLoad)
  $on(window, 'hashchange', app.onLoad)
})(window)
