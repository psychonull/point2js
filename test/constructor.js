/*global describe,it*/
'use strict';
var expect = require('chai').expect,
  Point2 = require('../lib/point2js.js');

describe('Constructor', function(){

  it('must initialize x and y in 0 if no args provided', function() {
    var p = new Point2();
    expect(p.x).to.equal(0);
    expect(p.y).to.equal(0);
  });

  it('must initialize x and y with provided args', function() {
    var p = new Point2(1,2);
    expect(p.x).to.equal(1);
    expect(p.y).to.equal(2);
  });

  it('must initialize x and y - default to 0 if one is not supplied', function() {
    var p = new Point2(1);
    var p2 = new Point2(null, 2);
    expect(p.x).to.equal(1);
    expect(p.y).to.equal(0);
    expect(p2.x).to.equal(0);
    expect(p2.y).to.equal(2);
  });

  it('must initialize x and y if obj literal passed', function() {
    var p = new Point2({ x: 1, y: 1 });
    expect(p.x).to.equal(1);
    expect(p.y).to.equal(1);
  });

  it('must initialize x and y if array passed', function() {
    var p = new Point2([1, 1]);
    expect(p.x).to.equal(1);
    expect(p.y).to.equal(1);
  });

  it('accepts another Point instance in the constructor', function() {
    var p = new Point2(new Point2(1,2));
    expect(p.x).to.equal(1);
    expect(p.y).to.equal(2);
  });

});
