/*
 *  ui.js -- Computer's user interface.
 */



// Copy all input elements to memory. Invoked before Run
// May no longer be needed given handleRAM() now.
function updateState() {
  for (var i=0; i < 16; i++) {
    var id = "m" + pad(decToBinary(i), 4);
    ram[i] = binaryToDecimal(document.getElementById(id).value);
  }
}

function updateUI() {
  document.getElementById("pctr").value = pad(decToBinary(pcounter),8);

}



