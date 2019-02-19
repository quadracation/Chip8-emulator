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

//0x8XY2
describe('Code 0x8XY2', function(){
  describe('Sets VX to VX & VY', function(){
    var opcode = 0x8442;
    var X = (opcode & 0x0F00) >> 8; //4
    var Y = (opcode & 0x00F0) >> 4; //4
    let V = new Array(5);
    V[4] = 0x0056;
    var Z = V[X] & V[Y];
    it('Checks if V[X] = V[opcode & 0x0F00 >> 8]', function(){
      assert.equal(V[X],V[4]);
    });
    it('Checks that V[X] = V[X] & V[Y]', function(){
      assert.equal(Z,V[4]);
    });
  });
});


//0x8XY3
describe('Code 0x8XY3', function(){
  describe('Sets V[X] to V[X] xor V[Y]', function(){
    var opcode = 0x8443;
    var X = (opcode & 0x0F00) >> 8;
    var Y = (opcode & 0x00F0) >> 4;
    let V = new Array(5);
    V[4] = 0;
    var Z = V[X] ^ V[Y];
    it('Checks if V[X] = V[opcode & 0x0F00 >> 8]', function(){
      assert.equal(V[X], V[4]);
    });
    it('Checks that V[X] = V[X] ^ V[Y]', function(){
      assert.equal(Z,V[4]);
    });
  });
});

//0x8XY4
var isOne = function(number){
  if (number == 1){
    return true;
  }else{
    return false;
  }
}
var removeNum = function(number){
  number = number - 256;
}
var boolCheck = function(number){
  if (number > 255){
    return true;
  }else{
    return false;
  }
}

describe('Code 0x8XY4', function(){
  describe('Adds V[X] to V[Y] and checks if the sum is larger than 255 or not', function(){
    var opcode = 0x8444;
    var X = (opcode & 0x0F00) >> 8; //4
    var Y = (opcode & 0x00F0) >> 4; //4
    let V = new Array(16);
    V[4] = 0x0056;
    V[0xF] = 1;
    var newLoc = V[X] + V[Y];
    var actans = 172; //actual sum of vx and vy
    it('Checks requirements if newLoc > 255', function(){
      if (boolCheck(newLoc) == true){
        assert.equal(boolCheck(actans),true);
        assert.equal(removeNum(actans), removeNum(actans));
        assert.equal(V[0xF],1);
      }
    });
    it('Checks requirements if newLoc <= 255', function(){
      if (boolCheck(newLoc) == false){
        assert.equal(boolCheck(actans), false);
        assert.equal(isOne(actans), false);
      }
    });
  });
});

//0x8XY5
var addNum = function(n1){
  n1 = n1 + 256;
}

var boolCheck2 = function(n1,n2){
  if (n1 > n2){
    return true;
  }else{
    return false;
  }
}

var lessthanZero = function(n1){
  if (n1 < 0){
    return true;
  }else{
    return false;
  }
}

describe('Code 0x8XY5', function(){
  describe('V[Y] is subtracted from V[X]. VF is set to 0 when theres a borrow, and 1 when there isnt', function(){
    var opcode = 0x8445;
    var X = (opcode & 0x0F00) >> 8; //4
    var Y = (opcode & 0x00F0) >> 4; //4
    let V = new Array(16);
    V[4] = 0x0056;
    V[0xF] = 1;
    var newLoc = V[X] - V[Y]; //0
    var actans = 0; //actual difference of vx and vy
    it('Checks requirements if V[Y] > V[X]', function(){
      if (boolCheck2(V[Y], V[X]) == true){
        assert.equal(V[0xF],0);
        assert.equal(newLoc, 0);
      }
    });
    it('Checks requirements if V[Y] <= V[X]', function(){
      if (boolCheck2(V[Y], V[X]) == false){
        assert.equal(V[0xF],1);
        assert.equal(newLoc,0);
      }
    });
    it('Checks requirements if V[X] < 0', function(){
      if (lessthanZero(V[X]) == true){
        assert.equal(addNum(V[X]),V[4]+256);
      }
    });
  });
});

//0x8XY6
describe('Code 0x8XY6', function(){
  describe('Stores the least significant bit of VX in VF and then shifts VX to the right by 1.', function(){
    var opcode = 0x8446;
    var X = (opcode & 0x0F00) >> 8; //4
    let V = new Array(16);
    V[4] = 0x0056;
    V[0xF] = V[X] & 0xFF; //86
    V[X] >>= 1; //43
    it('Stores the least significant bit of V[X] in V[F]', function(){
      assert.equal(V[0xF],86);
    });
    it('Shifts V[X] to the right by 1', function(){
      assert.equal(V[X], 43);
    });
  });
});

//0x8XY7
describe('Code 0x8XY7', function(){
  describe('V[X] is subtracted from V[Y], stored in V[X], VF is set to 0 when theres a borrow, and 1 when there isnt', function(){
    var opcode = 0x8447;
    var X = (opcode & 0x0F00) >> 8; //4
    var Y = (opcode & 0x00F0) >> 4; //4
    let V = new Array(16);
    V[4] = 0x0056;
    V[0xF] = 1;
    var newLoc = V[Y] - V[X]; //0
    var actans = 0; //actual difference of vy and vx
    it('Checks requirements if V[Y] > V[X]', function(){
      if (boolCheck2(V[Y], V[X]) == true){
        assert.equal(V[0xF], 0);
        assert.equal(newLoc,0);
      }
    });
    it('Checks requirements if V[Y] <= V[X]]', function(){
      if (boolCheck2(V[Y], V[X]) == false){
        assert.equal(V[0xF],1);
        assert.equal(newLoc,0);
      }
    });
    it('Checks requirements if V[X] < 0', function(){
      if (lessthanZero(V[X]) == true){
        assert.equal(addNum(V[X]), V[4]+256);
      }
    });
  });
});

//0x8XYE
describe('Code 0x8XYE', function(){
  describe('Stores the significant bits of VX in VF and then shifts VX to the right by 1.', function(){
    var opcode = 0x844E;
    var X = (opcode & 0x0F00) >> 8; //4
    let V = new Array(16);
    V[4] = 0x0056;
    V[0xF] = V[X] & 0x000F; //6
    V[X] >>= 1; //43
    it('Stores the significant bits of of V[X] in V[F]', function(){
      assert.equal(V[0xF], 6);
    });
    it('Shifts V[X] to the right by 1', function(){
      assert.equal(V[X],43);
    });
  });
});

//0x9XY0
var checkEqual = function(n1,n2){
  if (n1 == n2){
    return true;
  }else{
    return false;
  }
}

describe('Code 0x9XY0', function(){
  describe('If(Vx != Vy), then skip next instruction (Add 2 to this.pc)', function(){
    var opcode = 0x9440;
    var X = (opcode & 0x0F00) >> 8; //4
    var Y = (opcode & 0x00F0) >> 4; //4
    let V = new Array(16);
    V[4] = 0x0056;
    var pc = 0;
    it('Checks pc is incremented by 4 when V[X] != V[Y]', function(){
      if (checkEqual(V[X], V[Y]) == false){
        pc += 4;
        assert.equal(pc,4);
      }
    });
    it('Checks pc is incremented by 2 when V[X] == V[Y]', function(){
      if (checkEqual(V[X], V[Y]) == true){
        pc += 2;
        assert.equal(pc,2);
      }
    });
  });
});

//0xANNN
describe('Code 0xANNN', function(){
  describe('Sets I to the address NNN', function(){
    var opcode = 0xA442; //42050
    var NNN = opcode & 0x0FFF; //1090
    var I = NNN;
    it('Check to see if I is set to address NNN', function(){
      assert.equal(I,1090);
    });
  });
});

//0xBNNN
describe('Code 0xBNNN', function(){
  describe('Jump to address NNN + V0 (Set this.pc to NNN + V0)', function(){
    var opcode = 0xB442; //46146
    var NNN = opcode & 0x0FFF; //1090
    let V = new Array(16);
    V[0] = 5;
    it('Check to see if pc increments to NNN + V[0]', function(){
      var pc = NNN + V[0];
      assert.equal(pc,1095);
    });
  });
});

//0xCXNN
var checkTruth = function(n1){
  if (0 <= n1 && n1 <= 255){
    return true;
  }else{
    return false;
  }
}

var randoBro = function(n1){
  var bro = (Math.floor(Math.random() * 0xFF) & n1);
  return bro;
}

describe('Code 0xCXNN', function(){
  describe('Set V[X] = Random number from 0 to 255 & NN', function(){
    var opcode = 0xC442; //50242
    var NN = opcode & 0x00FF; //66
    var X = (opcode & 0x0F00) >> 8; //4
    let V = new Array(16);
    it('Check that V[X] is set to a random number from 0 to 255 & NN', function(){
      assert.equal(checkTruth(randoBro(NN)), true);
    });
  });
});

// skipped key pressed case 0xE000;

describe('Code 0xFX07', function(){
  describe('Sets VX to the value of the delay timer', function(){
    var opcode = 0xF407;
    var X = (opcode & 0x0F00) >> 8;
    let V = new Array(16);
    var soundtimer;
    V[X] = soundtimer;
    it('Check if soundtimer is equal to VX', function(){
      assert.equal(soundtimer,V[X]);
    });
  });
});

describe('Code 0xFX15', function(){
  describe('Sets the delay timer to VX.', function(){
    var opcode = 0xF415;
    var X = (opcode & 0x0F00) >> 8;
    let V = new Array(16);
    var delaytimer;
    V[X] = delaytimer;
    it('Check if delaytimer is equal to VX', function(){
      assert.equal(delaytimer,V[X]);
    });
  });
});

describe('Code 0xFX18', function(){
  describe('Sets the sound timer to VX.', function(){
    var opcode = 0xF418;
    var X = (opcode & 0x0F00) >> 8;
    let V = new Array(16);
    V[X] = soundtimer;
    it('Check if soundtimer is equal to VX', function(){
      assert.equal(soundtimer,V[X]);
    });
  });
});

describe('Code 0xFX1E', function(){
  describe('Adds VX to I', function(){
    var opcode = 0xF41E;
    var X = (opcode & 0x0F00) >> 8;
    let V = new Array(16);
    var I = 0;
    V[4] = 3;
    it('Check if V[X] is equal to V[4]', function(){
      assert.equal(V[4], V[X]);
    });
  });
});

describe('Code 0XFX55', function(){
  describe('Stores V0 to VX (including VX) in memory starting at address I.', function(){
    var opcode = 0xF455;
    var V = new Array(16);
    var I = 0;
    let memory = new Array(16);
    var X = (opcode & 0x0F00) >> 8;
    for(let idx = 0; idx <= X; idx++){
      memory[I + idx] = V[idx];
    }
    it('Check if V0 to VX is equal to the memory index', function(){
      for(let idx = 0; idx <= memory.length; idx++){
          assert.equal(V[idx],memory[i + idx]);
      }
    });
  });
});

describe('Code 0xFX65', function(){
  describe('Fills V0 to VX (including VX) with values from memory starting at address I. ', function(){
    var opcode = 0xF465;
    var V = new Array(16);
    var I = 0;
    let memory = new Array(16);
    var X = (opcode & 0x0F00) >> 8;
    for(let idx = 0; idx <= X; idx++){
      V[idx] = memory[I + idx];
    }
    it('Check if V0 to VX is equal to the memory index', function(){
      for(let idx = 0; idx <= memory.length; idx++){
          assert.equal(V[idx],memory[i + idx]);
      }
    });
  });
});

