/*
 *  hardware.js -- Hardware of 4-bit computer
 */

// The computer's internal registers and RAM
var pcounter = 0;
var pregister = 0;
var registerA = 0;
var registerB = 0;
var ram = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

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
  resetVisual();
}

// Implements the fetch/execute cycle.  Called when the Run button is clicked.
// Programs start a ram[0]
function fetchExecute() {
  updateState();
  pcounter = 0;
  document.getElementById("pctr").value = pad(decToBinary(pcounter),8);
  fetchNextInstruction();
  executeCurrentInstruction();
  var instrcode = pad(decToBinary(pregister),8).substring(0,4);
  while (binaryToDecimal(instrcode) != 0) {
    fetchNextInstruction();
    executeCurrentInstruction();
    instrcode = pad(decToBinary(pregister),8).substring(0,4);
  }
}

// Fetches the next machine instruction, setting the PCTR and PREG
function fetchNextInstruction() {
  updateState();
  var pctr = binaryToDecimal(document.getElementById("pctr").value);
  var instr = ram[pctr];
  document.getElementById("preg").value = pad(decToBinary(instr), 8);
  pregister = instr;
  pctr += 1;
  if (pctr > 7) 
    pctr = 0;
  pcounter = pctr;
  document.getElementById("pctr").value = pad(decToBinary(pctr), 4);
  document.getElementById("fetch").disabled=true;
  document.getElementById("exec").disabled=false;
}

// Executes the machine instruction in PREG
function executeCurrentInstruction() {
  document.getElementById("fetch").disabled=false;
  document.getElementById("exec").disabled=true;
  var preg =  document.getElementById("preg").value;
  var instr = binaryToDecimal(preg.substring(0,4));
  var addrbin = preg.substring(4)
  var addr = binaryToDecimal(addrbin);
  var operand = ram[addr];
      
  if (instr == 1)  {   // GET x and put in registerA
    registerA = ram[addr];
    document.getElementById("rega").value = pad(decToBinary(ram[addr]),8);
  }
  if (instr == 2)  {   // Put regA at x
    var rega = binaryToDecimal(document.getElementById("rega").value);
    ram[addr] = rega;
    document.getElementById("m"+addrbin).value = pad(decToBinary(ram[addr]),8);
  }
  if (instr == 3)  {   // Add x to register
    registerA = (registerA + operand)  % 256;
    document.getElementById("rega").value = pad(decToBinary(registerA),8);
  }
  if (instr == 4)  {   // Sub x from register
    registerA = (registerA - operand) % 256;
    document.getElementById("rega").value = pad(decToBinary(registerA),8);
  }
  if (instr == 5)  {   // Mult  register by x
    registerA = (registerA * operand) % 256;
    document.getElementById("rega").value = pad(decToBinary(registerA),8);
  }
  if (instr == 6)  {   // Div  register by x
    registerA = (Math.floor(registerA / operand)) % 256;
    document.getElementById("rega").value = pad(decToBinary(registerA),8);
  }
  if (instr == 8)  {   // Print x
    var monitor = document.getElementById("monitor");
    monitor.value = monitor.value + ram[addr] + "\n" ;
  }
  if (instr == 9)  {   // Read keyboard into x and echo it
    var input = prompt("Input a number at the keyboard: ");
    input = input % 256;
    var keyboard = document.getElementById("keyboard").value = input;
    var monitor = document.getElementById("monitor");
    monitor.value = monitor.value + ">" + keyboard + "\n";
    ram[addr] = keyboard;
    document.getElementById("m"+addrbin).value = pad(decToBinary(ram[addr]),8);
  }
}

// Copy all input elements to memory. Invoked before Run
// May no longer be needed given handleRAM() now.
function updateState() {
  for (var i=0; i < 16; i++) {
    var id = "m" + pad(decToBinary(i), 4);
    ram[i] = binaryToDecimal(document.getElementById(id).value);
  }
}

// Display the current visible state of the computer after reset
function resetVisual() {
  document.getElementById('exec').disabled=true;
  document.getElementById('fetch').disabled=false;

  document.getElementById("pctr").value = pad(decToBinary(pcounter), 4);
  document.getElementById("preg").value = pad(decToBinary(pregister), 8);
  document.getElementById("rega").value = pad(decToBinary(registerA), 8);
  for (var i=0; i < 16; i++) {
    var id = "m" + pad(decToBinary(i), 4);
    document.getElementById(id).value = pad(decToBinary(ram[i]), 8);
  }
}

// Updates RAM as user types. Restricts input to 0s and 1s.
// NOTE: Chrome, Firefox, and Safari may handle keyCode differently
function handleRAM(textfield, event) {
  textfield.value = textfield.value.replace(/[^0-1]/,'');
  var id = textfield.id;
  var addr = binaryToDecimal(id.substring(1));
  ram[addr] = binaryToDecimal(textfield.value);
}

