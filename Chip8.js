var Chip_Initialize= function(comment){
	//buffer of 0x1000, 4096 in decimal
	this.memory=new Array(4096); 

	//v and i
	this.V= new Array(16);
	this.I= 0x0;
	//program counter for instructions. 
    this.pc= 0x200;
    
    //Opcode:
    this.opcode = 0;


	//stack and its pointer
	this.stack= new Array(16);
	this.stackpointer= 0;

	//timers
	this.delaytimer= 0;
	this.soundtimer= 0;

	this.keys= new Array(16);
	//display is 64*32 in dimension
	this.display= new Array(64*32);
	
	//this.reset();	

	//
	console.log("Memory Length = " + memory.length);
	console.log("V Length: " + V.length);
	console.log("I Location: " + I);
	console.log("PC Location: " + pc);
	console.log("Stack Length: " + stack.length);
	console.log("Key Length: " + keys.length);
	console.log("Display Dimensions: " + display.length);


};
//To simulate a class. You set this via ._proto_
//Cannot be used yet.
var Chip8_Prototype= {
    loadGame: function(gameName) {
        //load memory of game starting from memory location 0x200 (512)
        for(let i = 0; i < gameName.length; i++) {
            memory[i + 0x200] = gameName[i];
        }
    },
    setkey: function(key) {
        this.keys[key]=true;
        //function sets the key into keys array to true
    },
    deletekey: function(key){
        delete this.keys[key];
        //removes the key from the array
    },
    setrenderer: function(renderer){
        this.renderer= renderer; 
    },
    
    setpixel: function(x,y){
        var curr_location;
        var width= 64;
        var height= 32;
        if(x>width){
            x=x-width;
        }
        else if(x<width){
            x=x+width;
        }
        //corner case when X is out of range

        if(y>height){
            y=y-height;
        }
        else if(y<height){
            y=y+height;
        }
        //corner case when Y is out of range
        
        location=x+(y*width);
        this.display[location] ^= 1;
        
        return !this.display[location];


    }

};

var Chip_Reset= function() {
    var hexChars = [
        0xF0, 0x90, 0x90, 0x90, 0xF0, // 0
        0x20, 0x60, 0x20, 0x20, 0x70, // 1
        0xF0, 0x10, 0xF0, 0x80, 0xF0, // 2
        0xF0, 0x10, 0xF0, 0x10, 0xF0, // 3
        0x90, 0x90, 0xF0, 0x10, 0x10, // 4
        0xF0, 0x80, 0xF0, 0x10, 0xF0, // 5
        0xF0, 0x80, 0xF0, 0x90, 0xF0, // 6
        0xF0, 0x10, 0x20, 0x40, 0x40, // 7
        0xF0, 0x90, 0xF0, 0x90, 0xF0, // 8
        0xF0, 0x90, 0xF0, 0x10, 0xF0, // 9
        0xF0, 0x90, 0xF0, 0x90, 0x90, // A
        0xE0, 0x90, 0xE0, 0x90, 0xE0, // B
        0xF0, 0x80, 0x80, 0x80, 0xF0, // C
        0xE0, 0x90, 0x90, 0x90, 0xE0, // D
        0xF0, 0x80, 0xF0, 0x80, 0xF0, // E
        0xF0, 0x80, 0xF0, 0x80, 0x80  // F
    ];

    for (i = 0; i < hexChars.length; i++) {
        this.memory[i] = hexChars[i];
    }
}


var Chip_Run= function() {
	//Fetch Opcode
	//To fetch the opcode, keep in mind that opcodes are 16 bits long (2 bytes) where 1byte = 8. 
	//We need to shift the memory locations (4 bits) 8 to the left in order to make room for the operation.
	//start emulation from 0x200(512) and use binary OR operation to merge after shifting. This will give you 16 bits (2 bytes).
    opcode = memory[pc] >> 8 | memory[pc+1];
    console.log("OpCode: " + opcode);

    //Refer to these. Let vs. var (?) Use Let for now. 
    let NNN = opcode & 0x0FFF;
    let  NN = opcode & 0x00FF;
    //skipped N (opcode & 0x000F) since it became less clear 
    let   X = (opcode & 0x0F00) >> 8; //takes out last 2 0's
    let   Y = (opcode & 0x00F0) >> 4; //takes out last 0 

	//Decode Opcode
	//Now that you have your opcode, you need to figure out which instruction set and operation you need to do.
	//Because there are 35 distinct opcodes, we will use a switch statement to keep things simple.
	//Use opcode & 0xF000 to find the first nibble.
	//If you need to check the back (e.g., repeated operation( 0 ) or repeated instructions (F series)), make another inner switch statement to check
	//... the last nibble(s) using either 0x000F or 0x0FF. Think of "F" as "keep" and "0" as "throw away".
	switch(opcode & 0xF000){
		case 0x0000:
            //Since we have multiple 0's...
            switch(opcode & 0x000F) {
                case 0x0000: // [00E0]: Clears display
                    console.log("EMPTY (0NNN)");
                    break;
                case 0x000E: // [00EE]: Returns from subroutine
                    this.pc = this.stack[this.stackpointer];
                    --this.stackpointer;
                    break;
            }break;

        case 0x1000: // [1NNN]: Jump to address 0x0FFF
            this.pc = NNN;
            break;
        case 0x2000: //[2NNN]: Calls subroutine(fx) at address NNN.
            this.stack[this.stackpointer] = this.pc; //Place it in stack to unwind later
            ++this.stackpointer; //increment stack last position.
            this.pc = NNN; //again, first nibble is not needed. 
            break;
        case 0x3000: // [3XNN]: If VX == NN, then skip 1 operation. 
            //program counter(pc) is the one that tracks the instructions in memory. 
            if( this.V[X] === NN) 
               this.pc += 2; //increment to the next 2 bytes (next opcode) 
            break;
        case 0x4000: // [4XNN]: If VX != NN, then skip 1 operation. 
            if( this.V[X] !== NN) 
            this.pc += 2;
            break;
        case 0x5000: // [5XY0]: If VX === VY, skip 1 operation.
            if( this.V[X] === this.V[Y]) 
                this.pc += 2;
            break;
        case 0x6000: // [6XNN]: Sets VX to NN. 
            this.V[X] = NN;
            break;
        case 0x7000: // [7XNN]: Adds NN to VX (i.e., VX += NN); no carry flag.
            let newLoc = this.V[X] + this.V[NN];
            if(newLoc > 255) {
                newLoc -= 256; //0 is included, so bound 255+1
            }
            this.V[X] = newLoc;
            break;
        case 0x8000:
            //We have multiple.
            switch(opcode & 0x000F) {
                case 0x0000: // [8XY0]: Sets VX to the value of VY
                    this.V[X] = this.V[Y];
                    break;
                case 0x0001: // [8XY1]: Sets VX to the value of VX|VY
                    this.V[X] = ( this.V[X] | this.V[Y]); // |=
                    break;
                case 0x0002: // [8XY2]: Sets VX to VX & VY
                    this.V[X] = ( this.V[X] & this.V[Y]); // &=
                    break;
                case 0x0003: // [8XY3]: Sets VX to VX xor VY
                    this.V[X] = ( this.V[X] ^ this.V[Y] ); // ^=
                    break;
                case 0x0004: // [8XY4]: Add VY to VX (i.e., VX += VY), where VX and VY are registers for X,Y
                    //Add first. See if the sum is larger than 255. If so, carry 0xF = 1. 
                    let newLoc = this.V[X]  +  this.V[Y];
                    if(newLoc > 255) {
                        this.V[0xF] = 1;
                        newLoc -= 256; //0 is included so bound 255+1 
                    } 
                    this.V[X] = newLoc;
                    this.pc+=2; //next 2 bytes
                    break;
                case 0x0005: //[8XY5]: VY is subtracted from VX. VF is set to 0 when there's a borrow, and 1 when there isn't. 
                    //

                    break;
                case 0x0006:
                    //
                    break;
                case 0x0007:
                    //
                    break;
                case 0x000E:
                    //
                    break;

            } 
            break;
        
        case 0x9000: //[9XY0]: If(Vx != Vy), then skip next instruction (Add 2 to this.pc). 
            if(this.V[X] != this.V[Y]) {
                this.pc += 2;
            }
            break;

        case 0xA000: // [ANNN]: Sets I to the address NNN. 
            this.I = NNN; //since the first nibble is not needed. 
            this.pc += 2; //Since each take up 16 bits (2bytes), we skip 2 places in memory 
            break;

        case 0xB000: // [BNNN]: Jump to address NNN + V0 (Set this.pc to NNN + V0). 
            this.pc = (NNN + this.V[0]);
            break;

        case 0xC000: // [CXNN]: Set V[X] = Random number from 0 to 255 & NN 
            this.V[X] = (Math.floor(Math.random() * 0xFF) & NN) // 0xFF == int(255) Found this from: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
            break;

        case 0xD000: // [DXYN]: Draw. No idea how to do this. Pls Send Halp.
            //
            break;

        case 0xE000:
            //Has multiple opcodes.
            switch(opcode & 0x000F) {
                case 0x000E: // [EX9E]: Skip next instruction if the key stored in this.V[X] is pressed. Pls send Halp.
                    // if(this.keys[this.V[X]]) then this.pc += 2
                    break;
                case 0x0001: // [EXA1]: Skip next instruction if the key stored in this.V[X] is NOT pressed. Pls send Halp.
                    // if(this.keys[this.V[X]]) then this.pc += 2
                    break;
            }
            break;
        case 0xF000:
            //Lots of mutliple opcodes.
            switch(opcode & 0x00FF) {
                case 0x0007: // [FX07]: Set this.V.[X] to the value of the delay timer.
                    this.V[X] = this.delaytimer;
                    break;
                case 0x000A: // [FX0A]: A key press is awaired. Once pressed store in this.V[X]. Pls send Halp.
                    //
                    break;
                case 0x0015: // [FX15]: Set this.delaytimer to this.V[X].
                    this.delaytimer = this.V[X];
                    break;
                case 0x0018: // [FX18]: Set this.soundertimer to this.V[X].
                    this.soundtimer = this.V[X];
                    break;
                case 0x001E: // [FX1E]: Add VX to I. 
                    this.I = (this.I + this.V[X]); // Double-Check this pls.
                    break;
                case 0x0029: // [FX29]: Set I to location of spirte for character in this.V[X]. Characters 0-F (hexdex) represented by a 4x5 font. Pls send Halp.
                    // this.I = this.V[X];
                    break;
                case 0x0033: // [FX33]: Stores the binary-coded decimal representation of VX
                    //working backwards: Get ones, tens, then hundreds respectively. 
                    let val = this.V[X];
                    this.memory[I+2] = val%10;
                    val /= 10;
                    this.memory[I+1] = val%10;
                    val /= 10;
                    this.memory[I] = val%10;

                    //HARDER WAY (also works):
                    // // take the decimal representation of VX, 
                    // // place the hundreds digit in memory at location in I, 
                    // // the tens digit at location I+1, and the ones digit at location I+2
                    // memory[I]   = V[ (X) >> 8 ] / 100; 
                    // memory[I+1] = (V[ (X) >> 8 ] / 10) % 10; //Get tens place and % for digit
                    // memory[I+2] = (V[ (X) >> 8 ] % 100) % 10; //Take out 100s, take out 10s, % for digit
                    break;
                case 0x0055: //stores registers V0 to VX in memory from location I
                    for (var i=0; i<=X;i++){
                        this.memory[this.I+i]=this.V[i];
                    }
                    break;
                case 0x0065:
                    //
                    break;
            }
            break;
            
		default:
			//No such code:
            console.log("Operation Code not Supported.");
            break;
        
	}

}






//Wasn't able to create a class. Will have to use this for our constructor outside of a class. Be careful of this! 
var Chip8_Constructor = function() {
    Chip_Initialize();
    Chip_Reset();

	Chip_Run(); 
}

function main() {
	Chip8_Constructor();

	// console.log("\n");
	// Chip_Initialize();
	// console.log("\n");
}
main();