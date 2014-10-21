/*
 *
 * https://github.com/psychonull/point2js
 *
 * Copyright (c) 2014 psychonull
 * Licensed under the MIT license.
 */

'use strict';

var Point2 = function(){
  this.set.apply(this, arguments);
};

Point2.prototype = {

  clone: function() {
    return new Point2(this.x, this.y);
  },

  equals: function(point){
    return this === point || this.x === point.x && this.y === point.y;
  },

  set: function() {
    var x, y, arg0;
    if (arguments.length === 1){
      arg0 = arguments[0];

      if(Array.isArray(arg0)){
        x = arg0[0];
        y = arg0[1];
      }
      else if(typeof arg0 === 'object'){
        if(Object.prototype.toString.call(arg0) === '[object Arguments]'){
          x = arg0[0];
          y = arg0[1];
        }
        else {
          x = arg0.x;
          y = arg0.y;
        }
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
    return this;
  },

  add: function(){
    var point = new Point2(arguments);
    return point.set(this.x + point.x, this.y + point.y);
  },

  subtract: function(){
    var point = new Point2(arguments);
    return point.set(this.x - point.x, this.y - point.y);
  },

  multiply: function(){
    var point = new Point2(arguments);
    return point.set(this.x * point.x, this.y * point.y);
  },

  divide: function(){
    var point = new Point2(arguments);
    return point.set(this.x / point.x, this.y / point.y);
  }


};

Point2.random = function(){
  var getRandom = function(min,max){
    return Math.random()*(max-min)+min;
  };
  if (arguments.length === 1){
    var min = arguments[0][0];
    var max = arguments[0][1];
    return new Point2(getRandom(min, max), getRandom(min, max));
  }
  else if (arguments.length === 2){
    var xRange = arguments[0];
    var yRange = arguments[1];
    return new Point2(getRandom(xRange[0], xRange[1]), getRandom(yRange[0], yRange[1]));
  }
  return new Point2(Math.random(), Math.random());
};

module.exports = Point2;
