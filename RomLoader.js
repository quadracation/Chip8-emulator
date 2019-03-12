//1: Pass in cpu's this.memory
//2: Make Div with ID for RomLoader
//3: Make function: loadRom(memory)
//4: get the Rom Element to utilize inside the div
let ROM = document.getElementById("rom"); 										//Access the HTML Element with variable name ROM.

//Event Listener: One time use for user action. It "Listens" for a user action.
ROM.addEventListener('change', (event) => {										//Whenever someone changes the input file (or selects one), take the event (arbitrary name "event" and maps it to the function.

	let chosenFile = ROM.files[0]; 												//Get the first choice. "Files" is pre-defined for input "file" types.
	let fileRead = new FileReader(chosenFile); 									//Pre-defined "FileReader" that takes in a chosen file. Initiate and Define for usage.

	fileRead.onload = (readEvent) => {											//Upon loading the chosen file (on the fileReader), assign it to [readEvent] mapped to the function. "Arrow Function" or "Lamba"
																				//Confusing. Look it up (:
		let fileData = new Uint8Array(fileRead.result);							//Variable name fileData is the collection of data parsed by fileRead.result. ROM array type must match memory.
		let dataTrimmed = fileData.slice(0, cpu.getMemory().length - 0x200);	//Sometimes, the loaded file will exceed the maximum length of our ROM/Memory array. Trim it to a certain side.

		cpu.getMemory().fill(0); 												//Fill the array with 0s. Initializing the array for use.
		cpu.reset();															//Begin CPU's startup. Reset/Initialize CPU as an object.
		cpu.startup();															//Re-define CPU's memory and HEX Table.
		cpu.getMemory().set(dataTrimmed, 0x200);								//.set(...) does not care about the file length, and will most likely overload the Uint8Array. That is why we trimmed.
																//Load the game that has been stored into the Chip8 System's memory.
		console.log(dataTrimmed);
		cpu.paused = false;
		cpu.hasROM = true;
	};																			//Map this entire sequence to "readEvent" which is then assigned to what happens after a File Load. Helps with Processing.

	fileRead.readAsArrayBuffer(chosenFile); 									//You can't really read in Uint8Array. It's a bunch of stuff. Look it up for more info. (:

}); //event Listener

