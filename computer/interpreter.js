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
var BUFFER = 15;    // For partial results

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
  while (line != "") {
    if (line.startsWith("print")) {
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
          return;
        } else {
          bAddr = pad(decToBinary(varaddr),ADDR_LEN);
        }
        machine_prog += "1000" + bAddr + "\n";  // PRN <x>
      }  else {  // Math expression so result is in REGA (sideeffect)
	var result = infixTraverse(tree,""); 
	if (result == "") {
	  alert("Syntax Error on line " + ctr);
	  return;
	} else if (result == "REGA") {
	  //	  machine_prog += bitcode + "\n";
          machine_prog += "00101111" + "\n";  // PUT REGA in BUFFER
          machine_prog += "10001111" + "\n";  // PRN BUFFER
	}
      }
      //      var val = math.floor(math.eval(expr, scope));
      //      var monitor = uiGetMonitor();
      //      monitor.value = monitor.value + val + "\n";
    } else if (line.startsWith("read")) {
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
      machine_prog += "1001" + bAddr + "\n";   // INP <baddr>
      //      var input = prompt("Input a number at the keyboard: ");
      //      scope[variable] = parseInt(input);
    } else {  // must be an assignment operator
      var assgn = parseAssignment(line, ctr);
      if (assgn == "") {
        return;  // ERROR
      } else {
        machine_prog += assgn + "\n"
      }
      //      var variable = line.substring(0, line.indexOf(" ")).trim();
      //      var eq = line.indexOf("=");
      //      if (eq >= 0) {
      //        var expr = line.substring(eq + 1).trim();
      //        scope[variable] = math.eval(expr,scope);
      //      } else {
      //        alert("Syntax error. Missing '=' in line " + ctr);
      //        return;
      //      }
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

// Parses and evals the expr generating machine code 
// and returning the addr where the result is stored
// The assycode stores the generated assembly language code
function infixTraverse(tree, assycode) {
  if (tree.value) {  // base case -- a literal
    var addr = getOperandAddr(tree.name);
    var bAddr = "";
    if (addr == -1) { // First occurence, declare and get
      var addr = DATA_SEG + symbolctr;
      symboltable.push([tree.value, addr]);
      symbolctr += 1;
      bAddr = pad(decToBinary(addr), ADDR_LEN);
      var decl =  bAddr  + ": " + pad(decToBinary(tree.value), WORD_LEN);
      //      assycode += decl + "\n" + "0001" + pad(decToBinary(addr), ADDR_LEN) + "\n";
      machine_prog += decl + "\n" + "0001" + pad(decToBinary(addr), ADDR_LEN) + "\n";
      //      return assycode;
      return bAddr;;
    } else {
      bAddr = pad(decToBinary(addr), ADDR_LEN);
      machine_prog += "0001" + bAddr;
      //      assycode += "0001" + bAddr;
      //      return assycode;
      return bAddr;
    }
    //    var decl = pad(decToBinary(addr), ADDR_LEN)  + ": " + pad(decToBinary(tree.value), WORD_LEN);
      //    return assycode + pad(decToBinary(addr), ADDR_LEN);
    //  return assycode + decl;
  } else if (tree.name) {  // base case -- a variable
    var addr = getOperandAddr(tree.name);
    if (addr == -1) { 
      alert("Undefinedvariable: " + tree.name);
      return;
    } else {
      var bAddr = pad(decToBinary(addr), ADDR_LEN);
      machine_prog += "0001" + bAddr + "\n";
      return bAddr;
      //      assycode += "0001" + bAddr;
      //      return assycode;
      //      var decl = pad(decToBinary(addr), ADDR_LEN)  + ": " + pad(decToBinary(tree.value), WORD_LEN);
      //      return assycode + pad(decToBinary(addr), ADDR_LEN);
    }
  } else {  // recursive case -- an operator
    var op = tree.op;
    var addrA = infixTraverse(tree.args[0],assycode);
    var buffer = 0;
    if (addrA == "REGA") {
      buffer = BUFFER - buffctr; 
      machine_prog += "0010" + pad(decToBinary(buffer),ADDR_LEN) + "\n"; // PUT BUFFER
      buffctr += 1;
    } 
    var addrB = infixTraverse(tree.args[1],assycode);
    if (addrB == "REGA") {
      buffer = BUFFER - buffctr; 
      machine_prog += "0010" + pad(decToBinary(buffer),ADDR_LEN) + "\n"; // PUT BUFFER
    } 

    machine_prog += "0001" + addrA + "\n"; // GET A
    machine_prog += "0011" + addrB + "\n"; // ADD B
    //    assycode += "0001" + addrA + "\n"; // GET A
    //    assycode += "0011" + addrB + "\n"; // ADD B
    return "REGA";  // Result left in REGA
  }
  return assycode;      
}

function parseAssignment(line, ctr) {
  var eq = line.indexOf("=");
  if (eq == -1) {
    alert("Syntax error. Missing '=' on line " + ctr);
    return "";
  }
  // Generate:  GET RHS, PUT LHS
  var varname = line.substring(0, eq).trim();
  var expr = line.substring(eq+1).trim();
  
  // Result of expr should be in REGA
  // Should be sequence of ADD, SUB, operations
  var tree = math.parse(expr);

  // RHS ends with a GET
  var rhs = infixTraverse(tree, "") + "\n";

  // Get variable to store the result
  var varaddr = getOperandAddr(varname);
  var bAddr = "";

  if (varaddr == -1) {  // New variable
    symboltable.push([varname, DATA_SEG + symbolctr]);
    bAddr = pad(decToBinary(DATA_SEG + symbolctr),ADDR_LEN);
    symbolctr += 1;
  } else {
    bAddr = pad(decToBinary(varaddr),ADDR_LEN);
  }

  // Finish with a PUT
  //  return rhs +  "0010" + bAddr;
  return "0010" + bAddr;
}


function isVariable(expr) {
  return  (getOperandAddr(expr) != -1);
}