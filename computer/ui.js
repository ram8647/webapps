/*
 *  ui.js -- Computer's user interface.
 */

// Initializes the UI.
function uiInit() {
  document.getElementById("monitor").cols = "10";
  document.getElementById("keyboard").size = "75";
  var ed = document.getElementById("editor");
  if (ed) 
    ed.cols = "15";
  var mc = document.getElementById("machinecode");
  if (mc) {
    mc.cols = "1";
    document.getElementById("monitor").cols = "10";
  }

  // Testing the ids of ram elements
  for (var i=0; i < VIS_RAM_LEN; i++) {
    var id = "m" + pad(decToBinary(i),ADDR_LEN);
    document.getElementById(id).value = pad(decToBinary(0),WORD_LEN);
    document.getElementById(id).size = WORD_LEN;
    document.getElementById(id).maxlength = WORD_LEN;
  }

  // For generation 0 we put a program in memory
  if (GEN == 0) {
    ram[8] = 1;  // A
    ram[9] = 2;  // B
    ram[0] = 24; // LDA A
    ram[1] = 57; //  ADD B
    ram[2] = 42; // STA C 
    ram[3] = 138 // PRN C
    uiUpdateHwDisplay();
  }
}

//  Returns link to Monitor element
function uiGetMonitor() {
  return document.getElementById("monitor");
}

// Sets the Keyboard value
function uiSetKeyboard(val) {
  document.getElementById("keyboard").value = val;
}

// Display the current visible state of the computer after reset
function uiReset() {
  document.getElementById('exec').backgroundColor = "grey";  // disabled
  document.getElementById('fetch').backgroundColor = "lightgrey"; // enabled;
  uiUpdateHwDisplay();
  document.getElementById("monitor").value = "";
}

// Displays the registers and RAM
function uiUpdateHwDisplay() {
  // CPU
  var field = document.getElementById("pctr");
  field.value = pad(decToBinary(icounter),ADDR_LEN);
  field = document.getElementById("preg");
  field.value = pad(decToBinary(iregister), WORD_LEN);
  nibblefy(field);
  field = document.getElementById("rega");
  field.value = pad(decToBinary(accumulator),WORD_LEN);
  //  nibblefy(field);

  // RAM
  for (var i=0; i < VIS_RAM_LEN; i++) {
    var id = "m" + pad(decToBinary(i), ADDR_LEN);
    var field = document.getElementById(id);
    field.value = pad(decToBinary(ram[i]), WORD_LEN);
    //    nibblefy(field);
  }
}

// Breaks into nibbles 
function nibblefy(textfield) {
    var val = textfield.value;
    textfield.value = val.substring(0,INSTR_LEN) + ' ' + val.substring(INSTR_LEN);
}


// Updates RAM as user types. Restricts input to 0s and 1s.
// NOTE: Chrome, Firefox, and Safari may handle keyCode differently
function uiHandleRamDisplay(textfield, event) {
  textfield.value = textfield.value.replace(/[^0-1]/,'');
  var id = textfield.id;
  var addr = binaryToDecimal(id.substring(1));
  ram[addr] = binaryToDecimal(textfield.value);
}

function uiUpdateAfterFetch() {
  //  document.getElementById("fetch").disabled=true;
  //  document.getElementById("exec").disabled=false;
  document.getElementById("fetch").style.backgroundColor ="grey";;
  document.getElementById("exec").style.backgroundColor ="lightgrey";
  uiUpdateHwDisplay();
}

function uiUpdateAfterExecute() {
  //  document.getElementById("fetch").disabled=false;
  //  document.getElementById("exec").disabled=true;
  document.getElementById("exec").style.backgroundColor ="grey";
  document.getElementById("fetch").style.backgroundColor ="lightgrey";
  uiUpdateHwDisplay();
}



