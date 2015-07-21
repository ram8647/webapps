/*
 *  ui.js -- Computer's user interface.
 */

// Initializes the UI.
function uiInit() {
  document.getElementById("monitor").cols = "15";
  document.getElementById("keyboard").size = "75";
  var ed = document.getElementById("editor");
  if (ed) 
    ed.cols = "30";
  var mc = document.getElementById("machinecode");
  if (mc) 
    mc.cols = "1";
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
  document.getElementById('exec').disabled=true;
  document.getElementById('fetch').disabled=false;
  uiUpdateHwDisplay();
}

// Displays the registers and RAM
function uiUpdateHwDisplay() {
  // CPU
  document.getElementById("pctr").value = pad(decToBinary(pcounter),4);
  document.getElementById("preg").value = pad(decToBinary(pregister), 8);
  document.getElementById("rega").value = pad(decToBinary(registerA),8);

  // RAM
  for (var i=0; i < 16; i++) {
    var id = "m" + pad(decToBinary(i), 4);
    document.getElementById(id).value = pad(decToBinary(ram[i]), 8);
  }
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
  document.getElementById("fetch").disabled=true;
  document.getElementById("exec").disabled=false;
  uiUpdateHwDisplay();
}

function uiUpdateAfterExecute() {
  document.getElementById("fetch").disabled=false;
  document.getElementById("exec").disabled=true;
  uiUpdateHwDisplay();
}



