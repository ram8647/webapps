/*
 *  loader.js -- Loader code for the 4-bit computer
 */

// Loads the program currently stored in machine_prog (after compilation)
// But for Gen1, it sets machine_prog from the Editor.

function loadProgram() {
  if (GEN == 1) {  // i.e., no assembler involved
    machine_prog = document.getElementById('editor').value;
  }

  var instrctr = 0;
  // Safari 8.0 doesn't support endsWith, only 9.0
  //  if (!machine_prog.endsWith('\n')) 
  if (machine_prog.indexOf('\n') != machine_prog.length)
    machine_prog += '\n'; 
  var cr = machine_prog.indexOf('\n');
  var line = machine_prog.substring(0, cr).trim();
  while (line != "") {
    var colon = line.indexOf(":");
    if (colon == -1) {      // It's an INSTR line
      ram[INSTR_SEG + instrctr] = binaryToDecimal(line);        // Put it in RAM
      var id = "m" + pad(decToBinary(INSTR_SEG + instrctr), ADDR_LEN); 
      document.getElementById(id).value = line;
      instrctr += 1;
    } else {   // A VAR line
       var addr = line.substring(0,colon);
       var dAddr = binaryToDecimal(addr);
       var id = "m" + addr;
       var bValue = line.substring(colon+1).trim();
       ram[dAddr] = binaryToDecimal(bValue);
       document.getElementById(id).value = bValue;
    }
    machine_prog = machine_prog.substring(cr+1);
    cr = machine_prog.indexOf('\n');
    line = machine_prog.substring(0,cr).trim();
  }
  document.getElementById("fetch").disabled = false;
  document.getElementById("run").disabled = false;
}
