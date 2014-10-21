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

  describe('equals()', function(){
    it('must return true if same x and y', function(){
      var p1 = new Point2(0,0),
        p2 = p1.clone();
      expect(p1.equals(p2)).to.equal(true);
    });
    it('must return false if different x or y', function(){
      var p1 = new Point2(0,0),
        p2 = new Point2(0,1);
      expect(p1.equals(p2)).to.equal(false);
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
    it('must return a new instance with the added values (passing another Point2)', function(){
      var p = new Point2(1,1);
      var result = p.add(new Point2(1,1));
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

  describe('length()', function(){
    it('must return the ||Point|| (vector length)', function(){
      var p = new Point2(1,1);
      expect(p.length()).to.equal(Math.sqrt(2));
      expect(new Point2(-1,0).length()).to.equal(1);
    });
  });

  describe('normalize()', function(){
    it('must return the normalized Point to 1 if no param is passed (||Point|| === 1)', function(){
      var p = new Point2(1123,143);
      var normalized = p.normalize();
      expect(p).to.not.equal(normalized);
      expect(normalized.length()).to.be.within(0.9999, 1.0001);
    });
    it('must return the normalized Point to the passed param', function(){
      var p = new Point2(1,-0.2);
      var normalized = p.normalize(100);
      expect(p).to.not.equal(normalized);
      expect(normalized.length()).to.be.within(99.9999, 100.0001);
    });
  });

  describe('dot()', function(){
    it('must return the dot product with the passed point', function(){
      var p = new Point2(2,1);
      expect(p.dot(new Point2(3,2))).to.equal(8);
    });
    it('can receive a point with the set() notation', function(){
      expect(new Point2(1,1).dot(2,3)).to.equal(5);
      expect(new Point2(2,1).dot([100,3])).to.equal(203);
    });
  });

  describe('cross()', function(){
    it('must return the cross product with the passed point', function(){
      var p = new Point2(2,1);
      expect(p.cross(new Point2(3,2))).to.equal(1);
    });
    it('can receive a point with the set() notation', function(){
      expect(new Point2(1,1).cross(2,3)).to.equal(1);
      expect(new Point2(2,1).cross([100,3])).to.equal(-94);
    });
  });

});
