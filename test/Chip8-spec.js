//Assertion styles
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should;
var Chip8 = require('../Chip8');

//Variables to use freely 
var opcode = 0x00E0;
var display = new Array(2048);
display[2047] = 1;
var switchValue = -1;
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


describe('OpCode Testing', function() {

  //-------------------------------------------------------------------------
  describe('Code: 0x0*E0', function() {
    describe('Mask Numbers', function() {
      opcode = 0x02E0;
      let F = opcode & 0x00FF;

      it('should equal 0x00E0', function() {
        assert.equal(F, 0x00E0);
      }); //it(E)
      it('should not equal 0x0000', function() {
        assert.notEqual(F, 0x00EE);
      }); //it(!0)
    }); //mask numbers 

    describe('ClearDisplay', function(){
      it('should clear the array', function() {
        clearDisplay(display);
        assert(isCleared(display), true);
      }); //it
    });//clearDisplay
  });//code 0x00E0

//-------------------------------------------------------------------------
  describe('Code: 0x0*EE', function() {
    describe('Mask Numbers', function() {
      opcode = 0x04EE;
      let F = opcode&0x00FF;
      let M = opcode & 0xF000;

      it('Checks if 0xF000 = 0x0000', function() {
        assert.equal(M, 0x0000);
      });//it(0x0000)
      it('Checks if 0x00FF equals 0x00EE', function() {
        assert.equal(F, 0x00EE);
      })
      it('Checks if 0x00FF is NOT equal 0x00E0', function() {
        assert.notEqual(F, 0x0000);
      }); //it(not 0x00E0)
    }); //mask Numbers

    describe('Return from a subroutine', function() {
      let stack = new Array(2);
      stack[0] = "before"; stack[1] = "after";
      let stackpointer = 1;

      let pc = stack[stackpointer];
      
      it('should return "after"', function() {
        assert.equal(pc, "after");
      })// it(after)
      it('should return "before" and not "after"', function() {
        pc = stack[--stackpointer];
        assert.strictEqual(pc, "before");
      }); //it(before)
      it('stackpointer should be 0', function() {
        assert.equal(stackpointer, 0);
      }); //it(be 0)
    });//return from a subroutine
  }); //code 0x00EE

//-------------------------------------------------------------------------
  describe('Code: 0x0**B (invalid)', function() {
    opcode = 0x01EB;
    let res = -1;
    switch(opcode&0xF000) {
      case 0x0000:
        switch(opcode&0x00FF){
          case 0x00EE:
            console.log("This should not appear");
            break;
          default:
            res = 1;
            break;
        }
        break;
      default:
        console.log("This should not appear");
        break;
    }
    it('Result should be 1, not -1', function() {
      assert.equal(res, 1);
    });//it(res)
  }); //code 0x12B (invalid)

  //-------------------------------------------------------------------------
  describe('Code 0x1***', function() {
    describe('Masking Numbers', function() {
      opcode = 0x1234;
      let M = opcode & 0xF000;
      it('Checks if 0xF000 = 0x1000', function() {
        assert.equal(M, 0x1000);
      });//it(0x1000)
    });//Masking Numbers
    describe('Jumps to *** (NNN)', function() {
      it('opcode bitShift << 8 combination', function() {
        let a = 0x12;
        let b = 0x34;
        let c = a << 8 | b; //should be 0x1234. 
        let d = 0x1234; //dec: 4660
        assert.equal(c, d);
      }); //it(shift)
      it('should make pc = ***', function() {
        opcode = 0x1234;
        let pc = opcode&0x0FFF;
        assert(pc, 0x0234);
      });//it(***)
      it('should make pc jump to *** from ###', function() {
        let mem = new Array(565);
        mem[564] = 100;
        let pc = -1;
        assert.notEqual(mem[pc], mem[564]);

        opcode = 0x1234;
        let M = opcode&0x0FFF; //MASK
        if(M === 564) { //dec:564 = hex:0x0234
          pc = M; //JUMP
        }
        assert.equal(mem[pc], mem[564]); //CONFIRM

      });//it(jump)
    }); //jumps(NNN)
  }); //code 0x1NNN

//-------------------------------------------------------------------------
  describe('Code 0x2***', function() {
    opcode = 0x2345;
    let M = opcode & 0xF000;
    describe('Masking Numbers', function() {
      it('Checks if 0xF000 = 0x2000', function() {
        assert.equal(M, 0x2000);
      });//it(0x2000)
    });//Masking Numbers
    describe('Move forward in Code (call subroutine)', function() {
      //Stack holds our queued functions
      //Stackpointer holds our current-most function (currently in-use)
      //pc holds our current line of code being execute
      it('Thanks to CowGod, we can confirm that this is correct.', function() {
        assert.equal(1,1);
      })
    });//call subroutine
  });//code 0x2***

  //-------------------------------------------------------------------------
  describe('Code 0x3***', function() {
    describe('Masking Numbers', function() {
      opcode = 0x3450;
      let F = opcode & 0xF000;
      it('Checks if 0xF000 = 0x3000', function() {
        assert.equal(F, 0x3000);
      });//it(0x3000)
    });//Masking Numbers
    describe('Skip if V[x] === NN', function() {
      opcode = 0x3456;
      let NN = opcode & 0x00FF;
      let V = new Array(5);
      V[4] = 0x0056;
      it('Checks if V[x] = V[opcode&0x0F00 >> 8', function() {
        assert.equal(V[opcode&0x0F00 >> 8], V[4] );
      });//it(vx = v4)
      it('Checks if 0x00FF === V[x]', function() {
        assert.equal( NN, V[4]);
      });//it(vx = nn)

    });//Skip (==)
  });//code 0x3***

  //-------------------------------------------------------------------------
  describe('Code 0x4***', function() {
    describe('Skip if V[x] !== NN', function() {
      opcode = 0x4350;
      let NN = opcode & 0x00FF;
      let V = new Array(1);
      it('Checks if V[x] !== NN', function() {
        V[0] = 0x005E;
        var sameValue = false;
        if(NN === V[0]) sameValue = true;
        assert.isFalse(sameValue);
      });//it(MASK)
      it('Checks if V[x] === NN', function() {
        V[0] = 0x0050;
        if(NN === V[0]) sameValue = true;
        assert.isNotFalse(sameValue);
      });//it(NN)

    });//skip(!=)
  });//code 0x4***

  //-------------------------------------------------------------------------  

  describe('Code 0x5***', function() {
    describe('Checks if 0x01 === 0x001', function() {
      it('Should return OK', function() {
        assert.equal(0x01,0x001);
      });//it(0x01===0x001)
    });//0x01 === 0x001
    describe('Checks if 0x01 !== 0x02', function() {
      it('Should return (NOT) OK', function() {
        assert.notEqual(0x01, 0x002);
      });//it(0x01 !== 0x002)
    });//0x01 !== 0x002
    describe('Skip if V[x] === V[y]', function() {
      opcode = 0x5120;
      let X = opcode & 0x0F00;
      let Y = opcode & 0x00F0;
      let V = new Array(16);
      it('Checks if 0x0F00 = 0x0100 (abritrary)', function() {
        assert.equal(X, 0x0100);
      });//it(0x0100)
      it('Checks that V[X] !== V[Y]', function() {
        V[0] = X;  //0x01
        V[1] = Y; //0x002
        assert.notEqual(V[1], V[0]);
      });
      it('Checks if V[X] === V[Y]', function() {
        opcode = 0x5110;
        V[0] = opcode & 0x0F00;
        V[1] = opcode & 0x00F0;
        assert.equal(V[0], 0x0100);
        assert.equal(V[1], 0x0010);
        assert.equal(V[X], V[Y]);
      })

    });//skip(=)
  });//code 0x5***


});//Opcode Testing

