/*
 *  assembler.js -- Assembler code for the 4-bit computer.
 */

// Symbol table and pointer needed to keep track of where to load instructions and data
var symboltable = [];
var symbolctr = 0;
var instrctr = 0;

// Pointers to the start of the data and prog segments of RAM
var DATA_SEG = 8;
var INSTR_SEG = 0;

// Machine language program, produced by assembler or compiler
var machine_prog;

// List of assembly language op names
var op = ["NOP", "GET", "PUT", "ADD", "SUB", "MUL", "DIV", "UND","PRN", "INP", "UND","UND","UND","UND","UND","UND"];

// Loads the program currently typed into the Editor, parsing
//  both VAR declarations and executable statements. 
function assembleProgram() {
  machine_prog = "";
  var code = document.getElementById("editor").value;
  symboltable = [];
  symbolctr = 0;
  instrctr = 0;
  code = code.trim();        
  if (!code.endsWith('\n')) {  // Add a CR if necessary
    code += '\n';
  }
  var ctr = 1;
  var cr = code.indexOf('\n');
  var line = code.substring(0, cr).trim();
  while (line != "") {
    var op = line.substring(0,3);
    if (op == "VAR") {
      var decl = parseVarDeclaration(line, ctr);
      if (decl == "") {
         return;  // ERROR
      } else {
        machine_prog += decl + "\n";
      }
    } else if (op == "NOP") {              // SUCCESS end of program
      machine_prog += "00000000" + "\n";
      displayMachineCode(machine_prog);
      document.getElementById("load").disabled = false;
      return;                 
    } else if ("GETPUTADDSUBMULDIVPRNINP".indexOf(op) != -1) {
      var instr = parseInstruction(line, op, ctr);
      if (instr == "") {
        return;  // ERROR
      } else {
        machine_prog += instr + "\n";
      }
    } else {
      alert("Illegal symbol in line " + ctr);
      return;
    }
    code = code.substring(cr+1);
    cr = code.indexOf('\n');
    line = code.substring(0,cr).trim();
    ctr += 1;
  }
}

// Parses an assembly language instruction, op, in line.
// Ctr gives the current line number for error messages.
function parseInstruction(line, op, ctr) {
  var bitcode = "";
  var opcode = getOpCode(op);
  if (opcode == -1) {
    alert("Illegal operation:" + op);
    return "";
  }
  var operand = line.substring(3).trim();
  var addr = getOperandAddr(operand);
  if (addr == -1) {
    alert("Illegal operand: " + operand);
    return "";
  }
  var bOpcode = pad(decToBinary(opcode),4);
  bitcode += bOpcode;
  var bAddr = pad(decToBinary(addr), 4);
  bitcode += bAddr;
  return bitcode;
}

// Looks up the address of a symbolic operand returning its 4-bit addr.
function getOperandAddr(operand) {
  for (var i = 0; i < symboltable.length; i++) {
     if (symboltable[i][0] == operand) {
       return symboltable[i][1];
     }
  }
  return -1;   // Error, symbol not found
}     

// Looks up the opcode of a symbolic operator (e.g., GET)
function getOpCode(opstr) {
  for (var i = 0; i < op.length; i++) {
     if (op[i] == opstr)
       return i;
  }
  return -1;  // Error, illegal opcode
}

// Parses assembly language variable declaractions: VAR A = 52 
function parseVarDeclaration(line, ctr) {
  var bitcode = "";
  var assignment = line.substring(3).trim();
  var op = assignment.indexOf('=');
  if (op == -1) {
    alert("Syntax error in line " + ctr);
    return "";
  }
  var symbol = assignment.substring(0, op).trim();
  var value = assignment.substring(op + 1).trim();
  value = parseInt(value);
  if (value == NaN) {
    alert("Syntax error in line " + ctr);
    return "";
  }          
  symboltable.push([symbol, DATA_SEG + symbolctr]);
       
  // Returns something like 1001: 00010001
  var addr = pad(decToBinary(DATA_SEG + symbolctr), 4);
  symbolctr += 1;
  bitcode = addr + ": " + pad(decToBinary(value), 8);
  return bitcode;
}

// Displays the assembled machine language program
function displayMachineCode(prog) {
  var mc = document.getElementById("machinecode");
  mc.cols = "15";
  mc.value = prog;
  mc.style.visibility="visible";
  document.getElementById("editor").cols = "20";     
}