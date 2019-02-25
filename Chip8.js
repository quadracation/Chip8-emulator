class CPU {
    constructor() {

        this.memory = new Uint8Array(4096); 										//Initiate Memory Array to store actions

        this.V = new Array(16); 													//Register Array (V0 to VF); this.V[0xF] = VF
        this.I = null;

        this.pc     = 0x200; 														//The starting location ("public" section (location 512))
        this.opcode = undefined;                                                    //Opcode to tell us which instruction set to use (:

        this.stack        = new Array(16); 											//Used for callbacks (and storing function calls)
        this.stackPointer = 0; 														//The pointer is not currently at any location (ints)

        this.delayTimer = 0; 													    //For any timing functions (primarily sound)
        this.soundTimer = 0; 													    //Works congruently with delayTimer

        this.keys = new Array(16); 											        //Stores what keys we press on the keyboard


        this.displayWidth  = 64 ; //64x32
        this.displayHeight = 32;
        this.display       = new Array(this.displayHeight * this.displayWidth); 	//2048
        this.drawFlag      = false;                                                 //When to draw (trigger boolean)
        this.renderer      = undefined;
        this.boolean       = true;

        this.paused = false;
        this.running = true;

    } //function CONSTRUCTOR()


    // GETTERS & SETTERS (inline & small)
    getDisplayArray()      { return this.display;                              }
    getMemory()            { return this.memory;                               }
    getWidth()             { return this.displayWidth;                         }
    getHeight()            { return this.displayHeight;                        }
    getRenderer()          { return this.renderer;                             }
    getOpcode()            { return this.opcode.toString(16).padStart(4, '0'); }
    getProgramCounter()    { return this.pc;                                   }
    setRenderer(renderer)  { this.renderer = renderer;                         }                             //new Object

    updateTimers() {
        if(this.delayTimer > 0) {
            console.log("BLINK!");
            this.delayTimer--;
        }

        if(this.soundTimer > 0) {
            console.log("SOUND!");
            this.soundTimer--;
        }
    }

    setPixel(x,y){
        var location;
        var width= displayWidth;
        var height= displayHeight;
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

        return !this.display[location]; //0 or 1

    }

    setRenderer(renderer) {
        this.renderer = renderer;
    }

    pause(){
        this.paused = !this.paused;
    }

    reset() { //Reset: Startup & reset all values to 0/false
        this.startup();

        this.pc           = 0x200;
        this.stackPointer = 0;

        this.drawFlag     = false;
        this.paused       = false;

        this.delayTimer   = 0;
        this.soundTimer   = 0;


        var memo = document.getElementById("memory");
        memo.textContent = "";
        this.renderer.clear();
        this.cycle();
    } //function RESET()

    randomizeMemory(){
        for(let i=0x200; i< 0x1000;i++){
            var num = Math.floor(Math.random() * 0xFF); //Special Thanks to: Ethan P. for "*0xFF"
            // console.log("Num: " + num);
            this.memory[i] = num;
            // console.log("Memory["+i+"]: " + this.memory[i]);
        }

    }

    //Cannot be used yet.
    loadGame(gameName) {
        //load memory of game starting from memory location 0x200 (512)
        for(let i = 0; i < gameName.length; i++) {
            memory[i + 0x200] = gameName[i];
        }
    }

    // loadIntoDisplayArray(arr) {
    //     for(let i = 0; i < arr.length; i++) {
    //         this.display[i] = arr[i];
    //         console.log("Display["+i+"]: " + arr[i])
    //     }
    //     // this.drawFlag = true;
    // }

    Hex2Bin(hex) {
        return parseInt(hex, 16).toString(2).padStart(8, '0');
    }

    drawIntoDisplayArray(hexArr, x, y, h) {
        for (let i = 0, end = y + h; y < end; i++, y++) {
            //Separate each hex into a binary string. Each bit of each hex index is put into the next this.display index.
            //Example: hexArr[0] = 0x96 => Binary: 10010110 => "1,0,0,1,0,1,1,0" => d[0]="1", d[1] = "0", d[2] = "0", d[3] = "0", d[4] = "1", ...
            let binary = this.Hex2Bin(hexArr[i].toString(16));
            console.log("Binary: " + binary + ", Hex: " + hexArr[i].toString(16));//Confirmed to work

            //Each row
            for (let pixel = 0; pixel < 8; pixel++) {
                this.display[y * this.displayWidth + x + pixel] = binary[pixel];
            }
        }

        this.drawOntoScreen();
        this.drawFlag = false;
    }

    initRegisters() {
        for(let r = 0; r < this.V.length; r++) { //Initializing Registers V0 to VF
            this.V[r] = 0;
        }
    }


    startup() { //Start up the program; Initializer
        this.running = true;

        let hexChars = [ //Defining the FONT Sets (79 indexes)
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

        for(let i = 0; i < this.memory.length; i++) { //Initializing/Defining Memory Array
            this.memory[i] = 0; //Must do this first before hexChars or else other indexes = -1, not 0
        }

        for (let j = 0; j < hexChars.length; j++) { //Initializing locations 0 to 79 of memory
            this.memory[j] = hexChars[j];
        }

        this.initRegisters();

        for(let k = 0; k < this.stack.length; k++) { //Initializing/Defining Stack
            this.stack[k] = 0;
        }


        for(let l = 0; l < this.keys.length; l++) { //Initializing/Defining Keys (store)
            this.keys[l] = false;
        }

        for(let m = 0; m < this.display.length; m++) { //Initializing/Defining Display array
           this.display[m] = 0;
        }



    } //function: STARTUP()


    //DO NOT DELETE THIS. THIS *WILL* BE USED.
    // emulate() {
    //     this.reset();

    //     //loadGame()....

    //     for(;;) {
    //         this.cycle();

    //         if(this.drawFlag === true) {
    //             drawOntoScreen();
    //         }

    //         //Get User Input through Keys
    //     }
    // }

    drawOntoScreen() {
        //<somehow> load all HEX values from the .ch8 file

        //Parse and draw
        if(this.renderer !== null || this.renderer !== undefined) {
            this.renderer.render(this.display);
        }
    }


    cycle() { //Running the program. Initialized outside of this file in an infinite loop

        if (this.paused === true){

        }else{


        this.opcode = this.memory[this.pc] << 8 | this.memory[this.pc+1];

        //Special thanks to: ETHAN P. for these console logs
        console.log("OpCode: " + this.opcode.toString(16).padStart(4, '0'));
        console.log("OpCode Type: " + typeof(this.opcode));
        console.log("Opcode & 0xF000: " + (this.opcode & 0xf000).toString(16).padStart(4, '0'));
        console.log("Opcode & 0x000F: " + (this.opcode & 0x000f).toString(16).padStart(4, '0'));
        console.log("DrawFlag: " + this.drawFlag);


        //Refer to these. Let vs. var (?) Use Let for now.
        let NNN = this.opcode & 0xFFF;
        let  NN = this.opcode & 0xFF;
        //skipped N (this.opcode & 0x000F) since it became less clear
        let   X = (this.opcode & 0x0F00) >> 8; //takes out last 2 0's
        let   Y = (this.opcode & 0x00F0) >> 4; //takes out last 0

        //Decode Opcode
        //Now that you have your this.opcode, you need to figure out which instruction set and operation you need to do.
        //Because there are 35 distinct this.opcodes, we will use a switch statement to keep things simple.
        //Use this.opcode & 0xF000 to find the first nibble.
        //If you need to check the back (e.g., repeated operation( 0 ) or repeated instructions (F series)), make another inner switch statement to check
        //... the last nibble(s) using either 0x000F or 0x0FF. Think of "F" as "keep" and "0" as "throw away".
        //Similar to a while-loop, we must iterate pc onto th next code (2bytes) after eachnon-jump/set nstruction.
        switch(this.opcode & 0xF000){
            case 0x0000:
                //Since we have multiple 0's...
                switch(this.opcode & 0x00FF) {
                    case 0x00E0: // [00E0]: Clears display
                        for(let i = 0; i < this.display.length; i++) {
                            this.display[i] = 0;
                        }
                        this.pc += 2;
                        break;
                    case 0x00EE: // [00EE]: Returns from subroutine
                        if(this.stackpointer >= 0)
                            this.pc = this.stack[--this.stackpointer];
                        else
                            throw new Error("Invalid stackpointer: -1");
                        break;
                    default:
                        //No such code:
                        console.log("[0000]: Operation Code not Supported.");
                        // throw new Error("User inputted"+ this.opcode.toString(16)+",Terminating");
                        this.pc+=2;
                        break;
                } break;

            case 0x1000: // [1NNN]: Jump to address 0x0FFF
                this.pc = NNN;
                break;
            case 0x2000: //[2NNN]: Calls subroutine(fx) at address NNN.
                this.stack[this.stackpointer] = this.pc; //Place it in stack to unwind later
                this.stackpointer++; //increment stack last position.
                this.pc = NNN; //again, first nibble is not needed.
                break;
            case 0x3000: // [3XNN]: If VX == NN, then skip 1 operation.
                //program counter(pc) is the one that tracks the instructions in memory.
                if( this.V[X] === NN)
                    this.this.pc += 4; //increment to the next 2 bytes (next this.opcode)
                else
                    this.pc +=2;
                break;

            case 0x4000: // [4XNN]: If VX != NN, then skip 1 operation.
                if( this.V[X] !== NN)
                    this.pc += 4;
                else
                    this.pc += 2;
                break;

            case 0x5000: // [5XY0]: If VX === VY, skip 1 operation.
                if( this.V[X] === this.V[Y])
                    this.pc += 4;
                else
                    this.pc += 2;
                break;
            case 0x6000: // [6XNN]: Sets VX to NN.
                this.V[X] = NN;
                this.pc += 2;
                break;
            case 0x7000: // [7XNN]: Adds NN to VX (i.e., VX += NN); no carry flag.
                let newLoc = this.V[X] + NN;
                //I don't think you need this; from Cowgod's guide.
                // if(newLoc > 255) { //In case you access the wrong area of memory
                //     newLoc -= 256; //0 is included, so bound 255+1
                // }
                this.V[X] = newLoc;
                this.pc += 2;
                break;
            case 0x8000:
                //We have multiple.
                switch(this.opcode & 0x000f) {
                    case 0x0000: // [8XY0]: Sets VX to the value of VY
                        this.V[X] = this.V[Y];
                        this.pc += 2;
                        break;
                    case 0x0001: // [8XY1]: Sets VX to the value of VX|VY
                        this.V[X] = ( this.V[X] | this.V[Y]); // |=
                        this.pc += 2;
                        break;
                    case 0x0002: // [8XY2]: Sets VX to VX & VY
                        this.V[X] = ( this.V[X] & this.V[Y]); // &=
                        this.pc += 2;
                        break;
                    case 0x0003: // [8XY3]: Sets VX to VX xor VY
                        this.V[X] = ( this.V[X] ^ this.V[Y] ); // ^=
                        this.pc += 2;
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
                        let newLoc2 = this.V[X] - this.V[Y];
                        if (this.V[Y] > this.V[X]){
                            this.V[0xF] = 0;
                        }else{
                            this.V[0xF] = 1;
                        }

                        this.V[X] = newLoc2;
                        if (this.V[X] < 0){
                            this.V[X] += 256;
                        }
                        this.pc += 2;
                        break;
                    case 0x0006: //[8XY6]: Stores the least significant bit of VX in VF and then shifts VX to the right by 1.
                        this.V[0xF] = this.V[X] & 0xFF;
                        this.V[X] >>=1;
                        this.pc += 2;
                        break;
                    case 0x0007:
                        this.V[X] = this.V[Y] - this.V[X];
                        if (this.V[X] > this.V[X]){
                        this.V[0xF] = 0;
                        }else{
                        this.V[0xF] = 1;
                        }
                        if (this.V[X] < 0){
                        this.V[X] += 256;
                        }
                        this.pc += 2;
                        break;
                    case 0x000E:
                        this.V[0xF] = this.V[X] & 0x000F;
                        this.V[X] <<= 1;
                        this.pc += 2;
                        break;
                    default:
                        //No such code:
                        console.log("Operation Code not Supported.");
                        // throw new Error("User inputted"+ this.opcode.toString(16)+",Terminating");
                        this.pc+=2;
                        break;
                }
                break;

            case 0x9000: //[9XY0]: If(Vx != Vy), then skip next instruction (Add 2 to this.pc).
                if(this.V[X] != this.V[Y])
                    this.pc += 4;
                else
                    this.pc += 2;

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
                this.pc += 2;
                break;

            case 0xD000: // [DXYN]: Draw pixels onto screen in location (Y,X) with height N. 1<=Height<=F; Max Width = 8bits (1byte)
                let pixel = 0;
                let height = this.opcode & 0x000F;
                this.V[0xF] = 0;
                for (let yline = 0; yline < height; yline++)
                {
                    pixel = this.display[this.I + yline];
                    for(let xline = 0; xline < 8; xline++)
                    {
                        if((pixel & (0x80 >> xline)) != 0)
                        {
                            if(this.display[(this.X + xline + ((this.Y + yline) * 64))] == 1)
                            {
                                this.V[0xF] = 1;
                            }
                            this.display[this.X + xline + ((this.Y + yline) * 64)] ^= 1;
                        }
                    }
                }
                this.drawFlag = true;
                this.pc += 2;
                break;
                //Similar as above. Works the same. KEEP
                // let heightN = this.opcode & 0x000F;
                // let pixel = 0;
                // this.V[0xF] = 0;
                // for(let row = 0; row < heightN; row++) {
                //     pixel = this.memory[this.I + row];
                //     for(let col = 0; col < 8; col++) {
                //         if( (pixel & (0x80 >> col)) != 0 ) {
                //             if(this.display[ (this.X + col + ((this.Y + row)*64)) ]) {
                //                 this.V[0xF] = 1;
                //             }
                //             this.display[ this.X + col + ((this.Y + row)*64) ] ^= 1;
                //         }
                //     }
                // }
                // this.drawFlag = true;
                // this.pc += 2;
                // //Courtesy of multigesture.net on How to make a Chip8 Interpreter
                // break;
                // // Invert the bit value (pixel shade) upon collision (you check ful 15x8 sprite).
                // //Since Javascript doesn't really have a preference between Column vs. Row Ordering, we assume (Y,X) and not (X,Y).
                // //i.e., Y=x-axis(col), X=y-axis(row).
                // let xCoord = this.V[X];
                // let yCoord = this.V[Y];
                // let pixHeight = this.V[this.opcode&0x000f];
                // //VF is set to 1 when there is a pixel Collision; 0 when there is not. i.e., VF = 0 by default.
                // this.V[0xF] = 0;
                // //Parsing through your display array, check to see if the requested pixel location is 1 and the existing area is 1.
                // for(let row = 0; row < pixHeight; row++) { //[...][Y]
                //     //Pixel: Start in memory at location I. Parsing through the rows, so I+i
                //     pixel = memory[I + row];
                //     //[X][...]
                //     for(let col = 0; col < 8; j++) { //Check through the max width (1-byte). Chip8 images are full sprites of 15x8 pixels.
                //         //Check if the pixel and the row collide (a^b, a=b -> FALSE).
                //         //Do this by having pixel AND with (8-bit binary string >> current(i)) be checked for 1 (1^1 = FALSE) -> VFflag.
                //         if((pixel & 0x80) == 1) { //If already drawn somewhere. 1 here is 'a' in a^b
                //             //If the FILLED area (think of area formula) of the current display field is still 1(b)
                //             //a^b, a=b=1 -> FALSE. Flag triggered. We're using locations via bit addition. Ask for more info!
                //             if( this.setPixel(xCoord+col, yCoord+ row)){
                //                 //If (X + xDisplacement, Y + yDisplacement * fillWidth(64)) == filled (1):
                //                 this.V[0xF] = 1; // Set flag if 1^1 (FALSE)
                //             }
                //         } // if
                //     } // for(col)
                // } // for(row)
                // this.drawFlag = true; //Not signalling? -> Will fix later
                // this.pc+=2; //Looping solution(?) -> Will fix later
                // break;
            case 0xE000:
                //Has multiple this.opcodes.
                switch(this.opcode & 0x000f) {
                    case 0x000E: // [EX9E]: Skip next instruction if the key stored in this.V[X] is pressed.
                        // if(this.keys[this.V[X]]) then this.pc += 2
                        if (this.keys[this.V[X]]){
                          this.pc += 2;
                        }
                        break;
                    case 0x0001: // [EXA1]: Skip next instruction if the key stored in this.V[X] is NOT pressed.
                        // if(!this.keys[this.V[X]]) then this.pc += 2
                        if (!this.keys[this.V[X]]){
                          this.pc += 2;
                        }
                        break;
                    default:
                        //No such code:
                        console.log("Operation Code not Supported.");
                        // throw new Error("User inputted"+ this.opcode.toString(16)+",Terminating");
                        this.pc+=2;
                        break;
                }
                break;
            case 0xF000:
                //Lots of mutliple this.opcodes.
                switch(this.opcode & 0x00FF) {
                    case 0x0007: // [FX07]: Set this.V.[X] to the value of the delay timer.
                        this.V[X] = this.delaytimer;
                        break;
                    case 0x000A: // [FX0A]: A key press is awaited. Once pressed store in this.V[X]. Pls send Halp.
                        //Stop all instructions until a key is pressed, then store the key value in Register x
                        //Method: Check all key indexes to search for at least one TRUE key. If none are true, then skip this function and try again next time.
                        //If there exists at least one keypress, then we will increment pc. Otherwise, we will loop this pc location.
                        let keyPressed = false;
                        for(let i = 0; i < this.keys.length; i++) {
                            if(this.keys[i] === true){
                                keyPressed = true;
                                this.V[X] = this.currentKey; //'i'
                            }
                        }
                        if(!keyPressed) return; //get out of this function
                        else this.pc +=2;
                        break;
                    case 0x0015: // [FX15]: Set this.delaytimer to this.V[X].
                        this.delaytimer = this.V[X];
                        break;
                    case 0x0018: // [FX18]: Set this.soundertimer to this.V[X].
                        this.soundtimer = this.V[X];
                        break;
                    case 0x001E: // [FX1E]: Add VX to I.
                        this.I = (this.I + this.V[X]);
                        break;
                    case 0x0029: // [FX29]: Set I to location of spirte for character in this.V[X]. Characters 0-F (hexdex) represented by a 4x5 font.
                        this.I = this.V[X] * 5;
                        break;
                    case 0x0033: // [FX33]: Stores the binary-coded decimal representation of VX
                        //working backwards: Get ones, tens, then hundreds respectively.
                        let val = this.V[X];
                        this.memory[I+2] = val%10;
                        val /= 10;
                        this.memory[I+1] = val%10;
                        val /= 10;
                        this.memory[I] = val%10;
                        break;
                    case 0x0055: //stores registers V0 to VX in memory from location I
                        for (var i=0; i<=X;i++){
                            this.memory[this.I+i]=this.V[i];
                        }
                        break;
                    case 0x0065:
                        for (var i=0; i<=X; i++){
                            this.V[i] = this.memory[this.I+i];
                        }
                        break;

                    default:
                        //No such code:
                        console.log("Operation Code not Supported.");
                        // throw new Error("User inputted"+ this.opcode.toString(16)+",Terminating");
                        this.pc+=2;
                        break;

                    }
                default:
                    console.log("ERROR: Unknown Opcode: " + this.opcode);
                    this.pc += 2;
                    break;


            } //switch{...}
          }

    }//function CYCLE()


    updateKeys(keyCode, mode) {
        if (mode == 1) { //Updates the keys if pressed
            if (keyCode == 49) { this.keys[0]  = true;   this.currentKey = 0;  }
            if (keyCode == 50) { this.keys[1]  = true;   this.currentKey = 1;  }
            if (keyCode == 51) { this.keys[2]  = true;   this.currentKey = 2;  }
            if (keyCode == 52) { this.keys[3]  = true;   this.currentKey = 3;  }
            if (keyCode == 81) { this.keys[4]  = true;   this.currentKey = 4;  }
            if (keyCode == 87) { this.keys[5]  = true;   this.currentKey = 5;  }
            if (keyCode == 69) { this.keys[6]  = true;   this.currentKey = 6;  }
            if (keyCode == 82) { this.keys[7]  = true;   this.currentKey = 7;  }
            if (keyCode == 65) { this.keys[8]  = true;   this.currentKey = 8;  }
            if (keyCode == 83) { this.keys[9]  = true;   this.currentKey = 9;  }
            if (keyCode == 68) { this.keys[10] = true;   this.currentKey = 10; }
            if (keyCode == 70) { this.keys[11] = true;   this.currentKey = 11; }
            if (keyCode == 90) { this.keys[12] = true;   this.currentKey = 12; }
            if (keyCode == 88) { this.keys[13] = true;   this.currentKey = 13; }
            if (keyCode == 67) { this.keys[14] = true;   this.currentKey = 14; }
            if (keyCode == 86) { this.keys[15] = true;   this.currentKey = 15; }
            }

        else { //Updates the keys if released

            this.currentKey = -1; //deleted
            if (keyCode == 49)  this.keys[0]   =  false;
            if (keyCode == 50)  this.keys[1]   =  false;
            if (keyCode == 51)  this.keys[2]   =  false;
            if (keyCode == 52)  this.keys[3]   =  false;
            if (keyCode == 81)  this.keys[4]   =  false;
            if (keyCode == 87)  this.keys[5]   =  false;
            if (keyCode == 69)  this.keys[6]   =  false;
            if (keyCode == 82)  this.keys[7]   =  false;
            if (keyCode == 65)  this.keys[8]   =  false;
            if (keyCode == 83)  this.keys[9]   =  false;
            if (keyCode == 68)  this.keys[10]  =  false;
            if (keyCode == 70)  this.keys[11]  =  false;
            if (keyCode == 90)  this.keys[12]  =  false;
            if (keyCode == 88)  this.keys[13]  =  false;
            if (keyCode == 67)  this.keys[14]  =  false;
            if (keyCode == 86)  this.keys[15]  =  false;

		}

	}




} //class CPU

// //special thanks to: ETHAN P.
// function draw() {
//     window.requestAnimationFrame(draw); // This MUST be called recursively
// }

// window.requestAnimationFrame(draw);
