//Assertion styles
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should;
var Chip8 = require('../Chip8');
var opcode = 0x00E0;
var display = new Array(2048);
display[2047] = 1;

//Tests
var clearDisplay= function(d) {
  for(let i = 0; i < d.length; i++) {
      d[i] = 0;
  }
}

var isCleared= function(d) {
  for(let i = 0; i < d.length; i++) {
    if(d[i] != 0) return false;
  }
  return true;
}

describe('#clearDisplay', function(){
  it('should clear the array', function() {
    clearDisplay(display);
    expect(isCleared(display), true);
  });
});
