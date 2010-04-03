/**
 * jQuery.styleEval plugin
 * http://github.com/furf/jquery-styleEval
 *
 * Copyright 2010, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
jQuery.styleEval = function (data) {
  var rnotwhite = /\S/;    
  if (data && rnotwhite.test(data)) {

    var head  = document.getElementsByTagName('head')[0] || document.documentElement,
        style = document.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = data;
    } else {
      style.textContent = data;
    }

    head.insertBefore(style, head.firstChild);
  }
};
