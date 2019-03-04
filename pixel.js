// https://stackoverflow.com/questions/23744605/javascript-get-x-and-y-coordinates-on-mouse-click
// https://codeclubprojects.org/en-GB/webdev/pixel-art/


///////////////////////////////////////////////////////////////
///                       pixel.js                          ///
///////////////////////////////////////////////////////////////


// Initial Mouse Color
var mouseColor = 'black';

var binaryArray = [      0,
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


function setMouseColor(mouse) { 
    mouseColor = mouse; 
}

function setPixelColor(pixel) { 
    // console.log("Previous pixel colour is: " + pixel.style.backgroundColor);
    pixel.style.backgroundColor = mouseColor;
    // console.log("New pixel colour is: " + pixel.style.backgroundColor);
}

function changeBinaryValue(event) {
    console.log("X coordinate: "            + event.clientX);
    console.log("Y coordinate: "            + event.clientY);
    console.log("Current mosue color is: "  + mouseColor);
    console.log(binaryArray);

    /*
    if(10 <= event.clientX < 60 && 65 <= event.clientY < 115) {
        if(mouseColor = 'black') {
            binaryArray[1] = 1;
        } 

        else {
            binaryArray[1] = 0;
        }
    }

    console.log(binaryArray);
    */
}
  
document.addEventListener("click", changeBinaryValue);


/* 
function bin2Hex() {
    var lookupTable = {
        '0': '0000', '1': '0001', '2': '0010', '3': '0011', '4': '0100',
        '5': '0101', '6': '0110', '7': '0111', '8': '1000', '9': '1001',
        'a': '1010', 'b': '1011', 'c': '1100', 'd': '1101',
        'e': '1110', 'f': '1111',
        'A': '1010', 'B': '1011', 'C': '1100', 'D': '1101',
        'E': '1110', 'F': '1111'
    };
} 
*/