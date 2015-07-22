/*
 *  hardware.js -- Hardware of 4-bit computer
 */

// The computer's internal registers and RAM
var ADDR_LEN = 4;
var pcounter = 0;
var pregister = 0;
var registerA = 0;
var registerB = 0;
var RAM_LEN = Math.pow(2,ADDR_LEN);
var ram = new Array(RAM_LEN);

// RAM
for (var i = 0; i < RAM_LEN; i++) 
  ram[i] = 0;
//var ram = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//  Reset the computer -- like restarting -- resets the registers and memory
function reset() {
  alert("Restarting...");
  pcounter = 0;
  pregister = 0;
  registerA = 0;
  registerB = 0;
  for (var i=0; i < 16; i++) {
     ram[i] = 0;
  }
  uiReset();
}

// Implements the fetch/execute cycle.  Called when the Run button is clicked.
// Programs start a ram[0]
function fetchExecute() {
  pcounter = 0;
  fetchNextInstruction();
  executeCurrentInstruction();
  var instrcode = pad(decToBinary(pregister),8).substring(0,ADDR_LEN);
  while (binaryToDecimal(instrcode) != 0) {
    fetchNextInstruction();
    executeCurrentInstruction();
    instrcode = pad(decToBinary(pregister),8).substring(0,ADDR_LEN);
    uiUpdateHwDisplay();
  }
}

// Fetches the next machine instruction from memory, setting the PCTR and PREG
function fetchNextInstruction() {
  pregister = ram[pcounter];
  if (pcounter < 7)          // Stop advance pcounter at the end of PROG SEGMENT
    pcounter += 1; 
  uiUpdateAfterFetch();
}

// Executes the machine instruction in PREG
function executeCurrentInstruction() {
  var pregBin = pad(decToBinary(pregister), 8);
  var instr = binaryToDecimal(pregBin.substring(0,ADDR_LEN));
  var addrbin = pregBin.substring(ADDR_LEN)
  var addr = binaryToDecimal(addrbin);
  var operand = ram[addr];
      
  if (instr == 1)  {   // GET x and put in registerA
    registerA = ram[addr];
  }
  if (instr == 2)  {   // Put regA at x
    ram[addr] = registerA;
  }
  if (instr == 3)  {   // Add x to register
    registerA = (registerA + operand)  % 256;
  }
  if (instr == 4)  {   // Sub x from register
    registerA = (registerA - operand) % 256;
  }
  if (instr == 5)  {   // Mult  register by x
    registerA = (registerA * operand) % 256;
  }
  if (instr == 6)  {   // Div  register by x
    registerA = (Math.floor(registerA / operand)) % 256;
  }
  if (instr == 8)  {   // Print x
    var monitor = uiGetMonitor(); //document.getElementById("monitor");
    monitor.value = monitor.value + ram[addr] + "\n" ;
  }
  if (instr == 9)  {   // Read keyboard into x and echo it
    var input = prompt("Input a number at the keyboard: ");
    input = input % 256;
    uiSetKeyboard(input);
    var monitor = uiGetMonitor(); 
    monitor.value = monitor.value + ">" + input + "\n";
    ram[addr] = input;
  }
  uiUpdateAfterExecute();
}



