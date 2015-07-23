/*
 *  hardware.js -- Hardware of 4-bit computer
 */

// Settings that control the architecture are in the HTML file

var pcounter = 0;
var pregister = 0;
var registerA = 0;
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


//  Reset the computer -- like restarting -- resets the registers and memory
function reset() {
  alert("Restarting...");
  pcounter = 0;
  pregister = 0;
  registerA = 0;
  registerB = 0;
  registerC = 0;
  registerD = 0;

  for (var i = 0; i < RAM_LEN; i++) 
    ram[i] = 0;
  
  uiReset();
}

// Implements the fetch/execute cycle.  Called when the Run button is clicked.
// Programs start a ram[0]
function fetchExecute() {
  pcounter = 0;
  fetchNextInstruction();
  executeCurrentInstruction();
  var instrcode = pad(decToBinary(pregister),WORD_LEN).substring(0,INSTR_LEN);
  while (binaryToDecimal(instrcode) != 0) {
    fetchNextInstruction();
    executeCurrentInstruction();
    instrcode = pad(decToBinary(pregister),WORD_LEN).substring(0,INSTR_LEN);
    uiUpdateHwDisplay();
  }
}

// Fetches the next machine instruction from memory, setting the PCTR and PREG
function fetchNextInstruction() {
  pregister = ram[pcounter];
  if (pcounter < DATA_SEG-1)          // Stop advance pcounter at the end of PROG SEGMENT
    pcounter += 1; 
  uiUpdateAfterFetch();
}

// Executes the machine instruction in PREG
function executeCurrentInstruction() {
  var pregBin = pad(decToBinary(pregister), WORD_LEN);
  var instr = binaryToDecimal(pregBin.substring(0,INSTR_LEN));
  var addrbin = pregBin.substring(INSTR_LEN)
  var addr = binaryToDecimal(addrbin);
  var operand = ram[addr];
      
  if (instr == 1)  {   // GET x and put in registerA
    registerA = ram[addr];
  }
  if (instr == 2)  {   // Put regA at x
    ram[addr] = registerA;
  }
  if (instr == 3)  {   // Add x to register
    registerA = (registerA + operand)  % Math.pow(2,WORD_LEN);
  }
  if (instr == 4)  {   // Sub x from register
    registerA = (registerA - operand) % Math.pow(2,WORD_LEN);
  }
  if (instr == 5)  {   // Mult  register by x
    registerA = (registerA * operand) % Math.pow(2,WORD_LEN);
  }
  if (instr == 6)  {   // Div  register by x
    registerA = (Math.floor(registerA / operand)) % Math.pow(2,WORD_LEN);
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



