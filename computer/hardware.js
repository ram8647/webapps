/*
 *  hardware.js -- Hardware of 4-bit computer
 */

// Settings that control the architecture are in the HTML file

var icounter = 0;
var iregister = 0;
var accumulator = 0;
var registerB = 0;
var registerC = 0;
var registerD = 0;

// RAM
var ram = new Array(RAM_LEN);
for (var i = 0; i < RAM_LEN; i++) 
  ram[i] = 0;

// Pointers to the start of the data and prog segments of RAM
var INSTR_SEG = 0;
var DATA_SEG = VIS_RAM_LEN / 2;


//Resets the CPU without resetting RAM
function reset () {
  var result = prompt("Resetting the CPU.  This will restart your program. It will not reset RAM. \n\nAre you sure (Y/N)?");
  if (result == 'Y' || result == 'y') {
    //    alert("Resetting the CPU ...");
    instr_counter = 0;  // Counts how many instructions, max = DATA_SEG -1
    icounter = 0;
    iregister = 0;
    accumulator = 0;
    registerB = 0;
    registerC = 0;
    registerD = 0;

    uiReset();
  }
}

//  Restart the computer  resets the registers and memory
function restart() {
  var result = prompt('This will perform a complete restart, reinitializing RAM and CPU. All data and instructions will be lost. \n\nAre you sure (Y/N)?');
  if (result=='Y' || result=='y') {
    //    alert("Restarting...");
    instr_counter = 0;  // Counts how many instructions, max = DATA_SEG -1
    icounter = 0;
    iregister = 0;
    accumulator = 0;
    registerB = 0;
    registerC = 0;
    registerD = 0;

    for (var i = 0; i < RAM_LEN; i++) 
      ram[i] = 0;

    uiReset();
  }
}

// Implements the fetch/execute cycle.  Called when the Run button is clicked.
// Programs start a ram[0]
function fetchExecute() {
  icounter = 0;
  instr_counter = 0;
  fetchNextInstruction();
  executeCurrentInstruction();
  var instrcode = pad(decToBinary(iregister),WORD_LEN).substring(0,INSTR_LEN);
  while (binaryToDecimal(instrcode) != 0 && instr_counter < DATA_SEG) {
    instr_counter += 1;
    fetchNextInstruction();
    executeCurrentInstruction();
    instrcode = pad(decToBinary(iregister),WORD_LEN).substring(0,INSTR_LEN);
    uiUpdateHwDisplay();
  }
}

// Fetches the next machine instruction from memory, setting the ICTR and IREG
// NOTE: To allow hovering over all buttons, we no longer disable fetch and
//  execute. We just change their background color. grey==disabled
function fetchNextInstruction() {
  var btn = document.getElementById("fetch");
  if (btn.style.backgroundColor != "grey") { // Grey would be disabled
    iregister = ram[icounter];
    icounter += 1; 
    uiUpdateAfterFetch();
  }
}

// Executes the machine instruction in IREG
function executeCurrentInstruction() {
  var btn = document.getElementById("exec");
  if (btn.style.backgroundColor == "grey") {
    return;
  }
  var pregBin = pad(decToBinary(iregister), WORD_LEN);
  var instr = binaryToDecimal(pregBin.substring(0,INSTR_LEN));
  var addrbin = pregBin.substring(INSTR_LEN)
  var addr = binaryToDecimal(addrbin);
  var operand = ram[addr];
      
  if (instr == 1)  {   // GET x and put in accumulator
    accumulator = ram[addr];
  }
  if (instr == 2)  {   // Put regA at x
    ram[addr] = accumulator;
  }
  if (instr == 3)  {   // Add x to register
    accumulator = (accumulator + operand)  % Math.pow(2,WORD_LEN);
  }
  if (instr == 4)  {   // Sub x from register
    accumulator = (accumulator - operand) % Math.pow(2,WORD_LEN);
  }
  if (instr == 5)  {   // Mult  register by x
    accumulator = (accumulator * operand) % Math.pow(2,WORD_LEN);
  }
  if (instr == 6)  {   // Div  register by x
    accumulator = (Math.floor(accumulator / operand)) % Math.pow(2,WORD_LEN);
  }
  if (instr == 8)  {   // Print x
    var monitor = uiGetMonitor(); //document.getElementById("monitor");
    monitor.value = monitor.value + ram[addr] + "\n" ;
  }
  if (instr == 9)  {   // Read keyboard into x and echo it
    var input = prompt("Input a number at the keyboard: ");
    input = input % Math.pow(2,WORD_LEN);
    uiSetKeyboard(input);
    var monitor = uiGetMonitor(); 
    monitor.value = monitor.value + ">" + input + "\n";
    ram[addr] = input;
  }
  uiUpdateAfterExecute();
}



