/**
 *  interpreter.js implements a simple high-level language that can interpret
 *   math expressions and assignment statements.  Here's the syntax.
 * 
    all math operators:  +, -, *, /, % 
    assignment = <expr>
    print <expr> 
    read <var>
 *
 */

// Math library for parsing math expressions
//var math = require('mathjs');


// Symbol table and pointer needed to keep track of where to load instructions and data
var symboltable = [];
var symbolctr = 0;
var instrctr = 0;
var buffctr = 0;

// Pointers to the start of the data and prog segments of RAM
var BUFFER  = Math.pow(2, ADDR_LEN) - 1;    // For partial results, grows downward

// Machine language program, produced by assembler or compiler
var machine_prog;

// List of assembly language op names
var op = ["NOP", "GET", "PUT", "ADD", "SUB", "MUL", "DIV", "UND","PRN", "INP", "UND","UND","UND","UND","UND","UND"];

// Dictionary to store variables and values
var scope = {};

// Interprest the program in the Editor
function interpretProgram() {
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
  scope = {};
  var ok = true;
  while (line != "") {
    if (line.startsWith("print")) {
      ok = parsePrint(line, ctr);
      if (!ok) return;
    } else if (line.startsWith("read")) {
      ok = parseRead(line, ctr);
      if (!ok) return;
    } else {  // must be an assignment operator
      ok = parseAssignment(line, ctr);
      if (!ok) return;
//       var assgn = parseAssignment(line, ctr);
//       if (assgn == "") {
//         return;  // ERROR
//       } else {
//         machine_prog += assgn + "\n"
//       }
    }      
    code = code.substring(cr+1);
    cr = code.indexOf('\n');
    line = code.substring(0,cr).trim();
    ctr += 1;
  }
  // SUCCESS
  displayMachineCode(machine_prog);
  document.getElementById("load").disabled = false;
  return;                 
}

function parseRead(line,ctr) {
  var varname = line.substring(line.indexOf(" ")).trim();
  var varaddr = getOperandAddr(varname);
  var bAddr = "";

  if (varaddr == -1) {  // New variable
    symboltable.push([varname, DATA_SEG + symbolctr]);
    bAddr = pad(decToBinary(DATA_SEG + symbolctr),ADDR_LEN);
    symbolctr += 1;
  } else {
    bAddr = pad(decToBinary(varaddr),ADDR_LEN);
  }
  var opcode = pad(decToBinary(opcodes['INP']),INSTR_LEN);
  machine_prog += opcode + bAddr + "\n";   // INP <baddr>
  return true;
}

function parsePrint(line,ctr) {
  var expr = line.substring(line.indexOf(" ")).trim();
  var tree = math.parse(expr);

  // Can we only print a Var? THe result of
  // any expression will be in REGA. The assembler
  //  does PRN <var> so pulls directly from a ram[addr]
  //  and its result is not necessarily in REGA.
  // I guess we need to distinguish print VAR and print EXPR.

  if (isVariable(expr)) { // Must be pre-declared so in symbol table
    var varaddr = getOperandAddr(expr);
    var bAddr = "";

    if (varaddr == -1) {  // Undeclared variable
      alert("Error: uninitialized variable on line " + ctr);
      return false;
    } else {
      bAddr = pad(decToBinary(varaddr),ADDR_LEN);
    }
    var opcode = pad(decToBinary(opcodes["PRN"]),INSTR_LEN);
    machine_prog += opcode + bAddr + "\n";  // PRN <x>
  } 
  return true;
}

function parseAssignment(line, ctr) {
  var eq = line.indexOf("=");
  if (eq == -1) {
    alert("Syntax error. Missing '=' on line " + ctr);
    return "";
  }
  // Get RHS and parse it
  var expr = line.substring(eq+1).trim();
  var tree = math.parse(expr);
  var rhsAddr = traverse(tree, ctr);
  if (rhsAddr == "ERR") 
    return false;  
  var opcode = pad(decToBinary(opcodes["GET"]),INSTR_LEN);
  machine_prog += opcode + rhsAddr + "\n";

  // GET LHS, should be a variable, including initializer
  var varname = line.substring(0, eq).trim();
  var varaddr = getOperandAddr(varname);
  var bAddr = "";
  if (varaddr == -1) {  // New variable
    symboltable.push([varname, DATA_SEG + symbolctr]);
    bAddr = pad(decToBinary(DATA_SEG + symbolctr),ADDR_LEN);
    symbolctr += 1;
  } else {
    bAddr = pad(decToBinary(varaddr),ADDR_LEN);
  }

  opcode = pad(decToBinary(opcodes["PUT"]),INSTR_LEN);
  machine_prog += opcode + bAddr + "\n";
  return true;
}

function isVariable(expr) {
  return  (getOperandAddr(expr) != -1);
}

// Parses and evals the expr generating machine intermediate
// machine code if necessary
//  and returning the addr where the result is stored
function traverse(tree, ctr) {
  if (tree.value) {  // base case -- a literal
    var addr = getOperandAddr(tree.name);
    var bAddr = "";
    if (addr == -1) { // First occurence, declare and get
      var addr = DATA_SEG + symbolctr;
      symboltable.push([tree.value, addr]);
      symbolctr += 1;
      bAddr = pad(decToBinary(addr), ADDR_LEN);
      var decl =  bAddr  + ": " + pad(decToBinary(tree.value), WORD_LEN);
      machine_prog += decl + "\n";
      return bAddr;;
    } else {
      bAddr = pad(decToBinary(addr), ADDR_LEN);
      return bAddr;
    }
  } else if (tree.name) {  // base case -- a variable
    var addr = getOperandAddr(tree.name);
    if (addr == -1) { 
      alert("Undefinedvariable: " + tree.name);
      return "ERR";
    } else {
      var bAddr = pad(decToBinary(addr), ADDR_LEN);
      return bAddr;
    }
  } else {  // recursive case -- an operator
    return "ERR";
//     var op = tree.op;
//     var addrA = traverse(tree.args[0],assycode);
//     var buffer = 0;
//     if (addrA == "REGA") {
//       buffer = BUFFER - buffctr; 
//       machine_prog += "0010" + pad(decToBinary(buffer),ADDR_LEN) + "\n"; // PUT BUFFER
//       buffctr += 1;
//     } 
//     var addrB = traverse(tree.args[1],assycode);
//     if (addrB == "REGA") {
//       buffer = BUFFER - buffctr; 
//       machine_prog += "0010" + pad(decToBinary(buffer),ADDR_LEN) + "\n"; // PUT BUFFER
//     } 

//     machine_prog += "0001" + addrA + "\n"; // GET A
//     machine_prog += "0011" + addrB + "\n"; // ADD B
//     //    assycode += "0001" + addrA + "\n"; // GET A
//     //    assycode += "0011" + addrB + "\n"; // ADD B
//     return "REGA";  // Result left in REGA
  }
}

