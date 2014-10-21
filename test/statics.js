/*global describe,it*/
'use strict';
var expect = require('chai').expect,
  sinon = require('sinon'),
  Point2 = require('../lib/point2js.js');

describe('Statics', function(){

  describe('random()', function(){
    var rnd = sinon.stub(Math, 'random');
    it('must return a Point2 instance with raw Math.random calls', function() {
      rnd.returns(1);
      var p = Point2.random();
      expect(p).to.be.an.instanceof(Point2);
      expect(p.x).to.equal(1);
      expect(p.y).to.equal(1);
    });
    it('must allow to pass a [min,max]', function(){
      rnd.returns(1);
      var p = Point2.random([1, 10]);
      expect(p).to.be.an.instanceof(Point2);
      expect(p.x).to.equal(10);
      expect(p.y).to.equal(10);
      rnd.returns(0);
      var p2 = Point2.random([1, 10]);
      expect(p2.x).to.equal(1);
      expect(p2.y).to.equal(1);
    });
    it('must allow to pass a [min,max] for x and one [min,max] for y', function(){
      rnd.returns(1);
      var p = Point2.random([1, 10], [0, 100]);
      expect(p).to.be.an.instanceof(Point2);
      expect(p.x).to.equal(10);
      expect(p.y).to.equal(100);
      rnd.returns(0);
      var p2 = Point2.random([1, 10], [0, 100]);
      expect(p2.x).to.equal(1);
      expect(p2.y).to.equal(0);
    });

  });

});
