/*global describe,it*/
'use strict';
var expect = require('chai').expect,
  Point2 = require('../lib/point2js.js');

describe('Operations', function(){

  describe('clone()', function(){
    it('must return a different instance with same values', function() {
      var p = new Point2(1,2),
        cloned = p.clone();
      expect(cloned).to.not.equal(p);
      expect(cloned.x).to.equal(1);
      expect(cloned.y).to.equal(2);
    });
  });

  describe('set()', function(){
    it('must change values with the same behavior as the constructor', function() {
      var p = new Point2(1,2);
      p.set(6,6);
      expect(p.x).to.equal(6);
      expect(p.y).to.equal(6);
      p.set({x: 0, y: 0});
      expect(p.x).to.equal(0);
      expect(p.y).to.equal(0);
      p.set([100,100]);
      expect(p.x).to.equal(100);
      expect(p.y).to.equal(100);
    });
    it('must allow chaining', function() {
      var p = new Point2();
      p.set(1,1).set({x: 0, y: 10.2});
      expect(p.x).to.equal(0);
      expect(p.y).to.equal(10.2);
    });
  });

  describe('add()', function(){
    it('must return a new instance with the added values', function(){
      var p = new Point2(1,1);
      var result = p.add(1,1);
      expect(result).to.not.equal(p);
      expect(result.x).to.equal(2);
      expect(result.y).to.equal(2);
    });
    it('must allow chaining', function(){
      var p = new Point2();
      var result = p.add(1,2).add(43, 42).add(-2, -2);
      expect(result.x).to.equal(42);
      expect(result.y).to.equal(42);
    });
  });

  describe('subtract()', function(){
    it('must return a new instance with the result', function(){
      var p = new Point2(1,1);
      var result = p.subtract(1,1).subtract(100,-100);
      expect(result).to.not.equal(p);
      expect(result.x).to.equal(-100);
      expect(result.y).to.equal(100);
    });
  });

  describe('multiply()', function(){
    it('must return a new instance with the result', function(){
      var p = new Point2(1,1);
      var result = p.multiply(0.5,4).multiply(0.5,2);
      expect(result).to.not.equal(p);
      expect(result.x).to.equal(0.25);
      expect(result.y).to.equal(8);
    });
  });

  describe('divide()', function(){
    it('must return a new instance with the result', function(){
      var p = new Point2(1,1);
      var result = p.divide(2,4);
      expect(result).to.not.equal(p);
      expect(result.x).to.equal(0.5);
      expect(result.y).to.equal(0.25);
    });
  });
});
