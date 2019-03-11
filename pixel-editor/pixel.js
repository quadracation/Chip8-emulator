///////////////////////////////////////////////////////////////
///              Binary + Hex Representations               ///
///////////////////////////////////////////////////////////////

// Store in 2 seperate nibbles as empty strings
// Store hexadecimal value as empty string
var binaryStringFirst, binaryStringSecond, hexadecimalValue = "";

// Binary representation of 15 x 8 sprite
var binaryArray = [      
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
];

// Lookup Table from 4-digit Binary to Hexadecimal
var lookupTable = {
    "0000": "0",
    "0001": "1",
    "0010": "2",
    "0011": "3",
    "0100": "4",
    "0101": "5",
    "0110": "6",
    "0111": "7",
    "1000": "8",
    "1001": "9",
    "1010": "A",
    "1011": "B",
    "1100": "C",
    "1101": "D",
    "1110": "E",
    "1111": "F"
};

// Look up function to get converted value
function lookup(binaryString) {
    var result = "";
        result = lookupTable[binaryString];
    
 return result;
}

// Function takes binary array as input
// Each line is seperated into 2 string of length 4
// Each string is converted into hexadecimal using a lookup table
// The hexadecimal value is added to a 0x string
function bin2Hex() {
    for(i = 0; i < 120; i += 8) {
        hexadecimalValue   = "0x";

        binaryStringFirst  = "" + binaryArray[  i  ] + binaryArray[i + 1] + binaryArray[i + 2] + binaryArray[i + 3];
        hexadecimalValue  += lookup(binaryStringFirst);
        // console.log(binaryStringFirst);

        binaryStringSecond = "" + binaryArray[i + 4] + binaryArray[i + 5] + binaryArray[i + 6] + binaryArray[i + 7];
        hexadecimalValue  += lookup(binaryStringSecond);
        // console.log(binaryStringSecond);

        var x              = document.createElement("bin2Hex"); 
        x.textContent      = hexadecimalValue + "\n";        
        document.body.appendChild(x);        
    }// for loop
  }// function


///////////////////////////////////////////////////////////////
///                      Pixel Editor                       ///
///////////////////////////////////////////////////////////////

// Initial mouse color
var mouseColor = 'black';

// Click on the black or white square to change mouse color
function setMouseColor(mouse) { 
    mouseColor = mouse; 
}

// The way our pixel grid is set up
// We need to have 120 seperate setPixelColor functions for each individual pixel
// Row 1
function setPixelColor1(pixel1) { 
    pixel1.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[0] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[0] = 0;
     }
     console.log(binaryArray);
}

function setPixelColor2(pixel2) { 
   pixel2.style.backgroundColor = mouseColor;
    if(mouseColor == 'black') {
        binaryArray[1] = 1;
    }
    if(mouseColor == 'white') {
        binaryArray[1] = 0;
    }
    console.log(binaryArray);
}

function setPixelColor3(pixel3) { 
   pixel3.style.backgroundColor = mouseColor;
    if(mouseColor == 'black') {
        binaryArray[2] = 1;
    }
    if(mouseColor == 'white') {
        binaryArray[2] = 0;
    }
    console.log(binaryArray);
}

function setPixelColor4(pixel4) { 
   pixel4.style.backgroundColor = mouseColor;
    if(mouseColor == 'black') {
        binaryArray[3] = 1;
    }
    if(mouseColor == 'white') {
        binaryArray[3] = 0;
    }
    console.log(binaryArray);
}

function setPixelColor5(pixel5) { 
   pixel5.style.backgroundColor = mouseColor;
    if(mouseColor == 'black') {
        binaryArray[4] = 1;
    }
    if(mouseColor == 'white') {
        binaryArray[4] = 0;
    }
    console.log(binaryArray);
}

function setPixelColor6(pixel6) { 
   pixel6.style.backgroundColor = mouseColor;
    if(mouseColor == 'black') {
        binaryArray[5] = 1;
    }
    if(mouseColor == 'white') {
        binaryArray[5] = 0;
    }
    console.log(binaryArray);
}

function setPixelColor7(pixel7) { 
   pixel7.style.backgroundColor = mouseColor;
    if(mouseColor == 'black') {
        binaryArray[6] = 1;
    }
    if(mouseColor == 'white') {
        binaryArray[6] = 0;
    }
    console.log(binaryArray);
}

function setPixelColor8(pixel8) { 
   pixel8.style.backgroundColor = mouseColor;
    if(mouseColor == 'black') {
        binaryArray[7] = 1;
    }
    if(mouseColor == 'white') {
        binaryArray[7] = 0;
    }
    console.log(binaryArray);
}

// Row 2
function setPixelColor9(pixel9) { 
   pixel9.style.backgroundColor = mouseColor;
    if(mouseColor == 'black') {
        binaryArray[8] = 1;
    }
    if(mouseColor == 'white') {
        binaryArray[8] = 0;
    }
    console.log(binaryArray);
}

function setPixelColor10(pixel10) { 
   pixel10.style.backgroundColor = mouseColor;
    if(mouseColor == 'black') {
        binaryArray[9] = 1;
    }
    if(mouseColor == 'white') {
        binaryArray[9] = 0;
    }
    console.log(binaryArray);
}

function setPixelColor11(pixel11) { 
   pixel11.style.backgroundColor = mouseColor;
    if(mouseColor == 'black') {
        binaryArray[10] = 1;
    }
    if(mouseColor == 'white') {
        binaryArray[10] = 0;
    }
    console.log(binaryArray);
}

function setPixelColor12(pixel12) { 
   pixel12.style.backgroundColor = mouseColor;
    if(mouseColor == 'black') {
        binaryArray[11] = 1;
    }
    if(mouseColor == 'white') {
        binaryArray[11] = 0;
    }
    console.log(binaryArray);
}

function setPixelColor13(pixel13) { 
   pixel13.style.backgroundColor = mouseColor;
    if(mouseColor == 'black') {
        binaryArray[12] = 1;
    }
    if(mouseColor == 'white') {
        binaryArray[12] = 0;
    }
    console.log(binaryArray);
}

function setPixelColor14(pixel14) { 
   pixel14.style.backgroundColor = mouseColor;
    if(mouseColor == 'black') {
        binaryArray[13] = 1;
    }
    if(mouseColor == 'white') {
        binaryArray[13] = 0;
    }
    console.log(binaryArray);
}

function setPixelColor15(pixel15) { 
   pixel15.style.backgroundColor = mouseColor;
    if(mouseColor == 'black') {
        binaryArray[14] = 1;
    }
    if(mouseColor == 'white') {
        binaryArray[14] = 0;
    }
    console.log(binaryArray);
}

function setPixelColor16(pixel16) { 
   pixel16.style.backgroundColor = mouseColor;
    if(mouseColor == 'black') {
        binaryArray[15] = 1;
    }
    if(mouseColor == 'white') {
        binaryArray[15] = 0;
    }
    console.log(binaryArray);
}

// Row 3
function setPixelColor17(pixel17) { 
    pixel17.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[16] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[16] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor18(pixel18) { 
    pixel18.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[17] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[17] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor19(pixel19) { 
    pixel19.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[18] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[18] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor20(pixel20) { 
    pixel20.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[19] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[19] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor21(pixel21) { 
    pixel21.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[20] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[20] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor22(pixel22) { 
    pixel22.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[21] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[21] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor23(pixel23) { 
    pixel23.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[22] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[22] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor24(pixel24) { 
    pixel24.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[23] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[23] = 0;
     }
     console.log(binaryArray);
 }
 
 // Row 4
function setPixelColor25(pixel25) { 
    pixel25.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[24] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[24] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor26(pixel26) { 
    pixel26.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[25] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[25] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor27(pixel27) { 
    pixel27.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[26] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[26] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor28(pixel28) { 
    pixel28.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[27] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[27] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor29(pixel29) { 
    pixel29.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[28] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[28] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor30(pixel30) { 
    pixel30.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[29] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[29] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor31(pixel31) { 
    pixel31.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[30] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[30] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor32(pixel32) { 
    pixel32.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[31] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[31] = 0;
     }
     console.log(binaryArray);
 }
 
 // Row 5
function setPixelColor33(pixel33) { 
    pixel33.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[32] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[32] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor34(pixel34) { 
    pixel34.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[33] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[33] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor35(pixel35) { 
    pixel35.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[34] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[34] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor36(pixel36) { 
    pixel36.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[35] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[35] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor37(pixel37) { 
    pixel37.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[36] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[36] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor38(pixel38) { 
    pixel38.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[37] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[37] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor39(pixel39) { 
    pixel39.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[38] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[38] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor40(pixel40) { 
    pixel40.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[39] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[39] = 0;
     }
     console.log(binaryArray);
 }
 
 // Row 6
function setPixelColor41(pixel41) { 
    pixel41.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[40] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[40] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor42(pixel42) { 
    pixel42.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[41] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[41] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor43(pixel43) { 
    pixel43.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[42] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[42] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor44(pixel44) { 
    pixel44.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[43] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[43] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor45(pixel45) { 
    pixel45.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[44] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[44] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor46(pixel46) { 
    pixel46.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[45] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[45] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor47(pixel47) { 
    pixel47.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[46] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[46] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor48(pixel48) { 
    pixel48.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[47] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[47] = 0;
     }
     console.log(binaryArray);
 }
 
 // Row 7
function setPixelColor49(pixel49) { 
    pixel49.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[48] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[48] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor50(pixel50) { 
    pixel50.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[49] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[49] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor51(pixel51) { 
    pixel51.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[50] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[50] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor52(pixel52) { 
    pixel52.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[51] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[51] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor53(pixel53) { 
    pixel53.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[52] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[52] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor54(pixel54) { 
    pixel54.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[53] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[53] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor55(pixel55) { 
    pixel55.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[54] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[54] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor56(pixel56) { 
    pixel56.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[55] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[55] = 0;
     }
     console.log(binaryArray);
 }
 
 // Row 8
function setPixelColor57(pixel57) { 
    pixel57.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[56] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[56] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor58(pixel58) { 
    pixel58.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[57] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[57] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor59(pixel59) { 
    pixel59.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[58] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[58] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor60(pixel60) { 
    pixel60.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[59] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[59] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor61(pixel61) { 
    pixel61.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[60] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[60] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor62(pixel62) { 
    pixel62.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[61] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[61] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor63(pixel63) { 
    pixel63.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[62] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[62] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor64(pixel64) { 
    pixel64.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[63] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[63] = 0;
     }
     console.log(binaryArray);
 }
 
 // Row 9
function setPixelColor65(pixel65) { 
    pixel65.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[64] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[64] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor66(pixel66) { 
    pixel66.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[65] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[65] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor67(pixel67) { 
    pixel67.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[66] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[66] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor68(pixel68) { 
    pixel68.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[67] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[67] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor69(pixel69) { 
    pixel69.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[68] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[68] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor70(pixel70) { 
    pixel70.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[69] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[69] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor71(pixel71) { 
    pixel71.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[70] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[70] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor72(pixel72) { 
    pixel72.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[71] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[71] = 0;
     }
     console.log(binaryArray);
 }
 
 // Row 10
function setPixelColor73(pixel73) { 
    pixel73.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[72] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[72] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor74(pixel74) { 
    pixel74.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[73] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[73] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor75(pixel75) { 
    pixel75.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[74] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[74] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor76(pixel76) { 
    pixel76.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[75] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[75] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor77(pixel77) { 
    pixel77.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[76] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[76] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor78(pixel78) { 
    pixel78.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[77] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[77] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor79(pixel79) { 
    pixel79.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[78] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[78] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor80(pixel80) { 
    pixel80.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[79] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[79] = 0;
     }
     console.log(binaryArray);
 }
 
 // Row 11
function setPixelColor81(pixel81) { 
    pixel81.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[80] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[80] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor82(pixel82) { 
    pixel82.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[81] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[81] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor83(pixel83) { 
    pixel83.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[82] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[82] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor84(pixel84) { 
    pixel84.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[83] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[83] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor85(pixel85) { 
    pixel85.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[84] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[84] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor86(pixel86) { 
    pixel86.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[85] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[85] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor87(pixel87) { 
    pixel87.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[86] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[86] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor88(pixel88) { 
    pixel88.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[87] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[87] = 0;
     }
     console.log(binaryArray);
 }
 
 // Row 12
function setPixelColor89(pixel89) { 
    pixel89.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[88] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[88] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor90(pixel90) { 
    pixel90.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[89] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[89] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor91(pixel91) { 
    pixel91.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[90] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[90] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor92(pixel92) { 
    pixel92.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[91] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[91] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor93(pixel93) { 
    pixel93.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[92] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[92] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor94(pixel94) { 
    pixel94.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[93] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[93] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor95(pixel95) { 
    pixel95.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[94] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[94] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor96(pixel96) { 
    pixel96.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[95] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[95] = 0;
     }
     console.log(binaryArray);
 }
 
 // Row 13
function setPixelColor97(pixel97) { 
    pixel97.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[96] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[96] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor98(pixel98) { 
    pixel98.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[97] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[97] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor99(pixel99) { 
    pixel99.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[98] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[98] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor100(pixel100) { 
    pixel100.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[99] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[99] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor101(pixel101) { 
    pixel101.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[100] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[100] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor102(pixel102) { 
    pixel102.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[101] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[101] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor103(pixel103) { 
    pixel103.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[102] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[102] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor104(pixel104) { 
    pixel104.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[103] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[103] = 0;
     }
     console.log(binaryArray);
 }
 
 // Row 14
function setPixelColor105(pixel105) { 
    pixel105.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[104] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[104] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor106(pixel106) { 
    pixel106.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[105] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[105] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor107(pixel107) { 
    pixel107.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[106] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[106] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor108(pixel108) { 
    pixel108.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[107] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[107] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor109(pixel109) { 
    pixel109.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[108] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[108] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor110(pixel110) { 
    pixel110.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[109] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[109] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor111(pixel111) { 
    pixel111.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[110] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[110] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor112(pixel112) { 
    pixel112.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[111] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[111] = 0;
     }
     console.log(binaryArray);
 }
 
 // Row 15
function setPixelColor113(pixel113) { 
    pixel113.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[112] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[112] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor114(pixel114) { 
    pixel114.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[113] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[113] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor115(pixel115) { 
    pixel115.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[114] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[114] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor116(pixel116) { 
    pixel116.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[115] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[115] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor117(pixel117) { 
    pixel117.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[116] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[116] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor118(pixel118) { 
    pixel118.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[117] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[117] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor119(pixel119) { 
    pixel119.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[118] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[118] = 0;
     }
     console.log(binaryArray);
 }
 
 function setPixelColor120(pixel120) { 
    pixel120.style.backgroundColor = mouseColor;
     if(mouseColor == 'black') {
         binaryArray[119] = 1;
     }
     if(mouseColor == 'white') {
         binaryArray[119] = 0;
     }
     console.log(binaryArray);
 }


