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

});
