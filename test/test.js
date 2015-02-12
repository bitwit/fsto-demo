/*global describe, it */
'use strict';
var assert = require('assert');
var fstoDemo = require('../');

describe('fsto-demo node module', function () {
  it('must have at least one test', function () {
    assert(fstoDemo(), 'Rainbow');
  });
});
