/*
 *
 * https://github.com/psychonull/point2js
 *
 * Copyright (c) 2014 psychonull
 * Licensed under the MIT license.
 */

'use strict';

var Point2 = function(){
  var x, y, arg0;
  if (arguments.length === 1){
    arg0 = arguments[0];

    if(Array.isArray(arg0)){
      x = arg0[0];
      y = arg0[1];
    }
    else if(typeof arg0 === 'object'){
      x = arg0.x;
      y = arg0.y;
    }
    else if(typeof arg0 === 'number'){
      x = arg0;
    }
  }
  else {
    x = arguments[0];
    y = arguments[1];
  }
  this.x = x || 0;
  this.y = y || 0;
};

Point2.prototype = {

  clone: function() {
    return new Point2(this.x, this.y);
  }

};

module.exports = Point2;
