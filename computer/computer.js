/*
 * computer.js -- script for 4-bit computer simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 *  Computer simulator. Simulates a 4-bit computer.
 *
 */
var base64bytes;
var rawData;
var rawUrl;
var START = 54;  // Start of stego block in image
var LEN = 24;    // Length of stego block in image
var bmphdr = "data:image/bmp;base64";

/**
 * Converts inputletter (textfield) to its ascii code in binary
 */
function convertAscii() {
   var input = document.getElementById("inputletter").value;
   var decimal = input.charCodeAt(0);
   document.getElementById("binary").innerHTML = pad(decToBinary(decimal), 8);
}

/**
 * Converts inputnumber (textfield) from decimal to binary
 */
function convertDecimal() {
   var input = document.getElementById("inputnumber").value;
   var binary = decToBinary(input);
   document.getElementById("decbinary").innerHTML = pad(binary,8);
}

/**
 * Returns a data block from raw image data
 * @param the raw image in BMP format
 * @return a string of 128 characters representing the
 *  bytes in the image.
 */
function getDataBlock(raw) {
  var str = "";
  var ctr = 0;
  var whitespace = "  ";
  for (var i = START; i < START+LEN; ++i) {
     whitespace = "  ";     
     ++ctr;
     if (ctr % 8 == 0)     // 8 bytes per row
        whitespace = "\n";
     str = str.concat(raw.charCodeAt(i) + whitespace);
     //     str = str.concat(decToHex(raw.charCodeAt(i)) + whitespace);
  }
  return str;
}

/**
 * Constructs the stegimg by inserting edited bytes into raw img.  Both 
 *  the raw image and the stegobytes returnd look something like this:
 *  "data:image/bmp;base64,Qk02QQAAAAAAADYAAAAoAAAAQAAAAL////8BACAAAAAAAAAAAAATC…0j/6+  ... gV4G/39cBv8="
 *
 * @param raw is the original image bytes
 * @param editblock is the textarea string containing START decimal numbers
 *   separated by spaces
 * @return the array of steg bytes
 */
function putDataBlock(raw, editblock) {
  // Stegoprefix is first START bytes
  var stegoprefix = raw.substring(0,START); 
  var stegobytes;

  // Replace all CRs with spaces
  var regex = new RegExp('\n', 'g');
  editblock = editblock.replace(regex, " ");

  // Iterate through the edited bytes
  while (editblock.length != 0) {
    editblock = editblock.trim();
    var ebyte = parseInt(editblock);
    stegoprefix = stegoprefix + String.fromCharCode(ebyte);
    var index = editblock.indexOf(" ");  // Remove the byte

    if (index == -1) {    // Last byte, no whitespace
      editblock = "";    
    }
    else 
      editblock = editblock.substring(index);
  }
  stegobytes = stegoprefix.concat(raw.substring(START+LEN));
  return stegobytes;
}

/**
 * Recovers the hidden 3-letter initials from the data 
 *  block of a BMP. 
 */
function getStego(datablock) {

  // Replace all CRs with spaces
  var regex = new RegExp('\n', 'g');
  datablock = datablock.replace(regex, " ");
  
  // Iterate through the edited bytes
  var word = "";
  var letter = "";
  var ctr = 0;
  while (datablock.length != 0) {
    datablock = datablock.trim();
    var ebyte = parseInt(datablock);
    var bbyte = pad(decToBinary(ebyte),8);     // Convert byte to a bitstring
    letter = letter + bbyte.charAt(7);  // Add the low order bit
    ++ctr;
    if (ctr % 8 == 0) {
      console.log(letter);
      word = word + String.fromCharCode(binaryToDecimal(letter,1)) + " ";
      letter = "";
    }

    var index = datablock.indexOf(" ");  // Remove the byte
    if (index == -1) {    // Last byte, no whitespace
      datablock = "";    
    }
    else 
      datablock = datablock.substring(index);
  }
  return word.trim();
}

/**
 * Invoked when the user wants to download the edited image. This
 *  splices the edited bytes into a clone of the original image
 *  giving the stegoimage, which is displayed.
 */
function download() {
  var stegimgbytes = putDataBlock(rawData, document.getElementById('editor').value);
  var stegDiv = document.getElementById('stegimgdiv');
  stegDiv.style.visibility="visible";
  var stegImage = document.getElementById("stegimg");
  stegImage.src = bmphdr + "," + btoa(stegimgbytes);
}

function decodeImg() {
  var datablock = getDataBlock(rawData);
  var msg = getStego(datablock);  
  document.getElementById("message").innerHTML = msg;
}

/**
 * Not working. Idea was to create a link that would download the stego image
 *  when clicked.
 */
function prepHref(linkElement) {
  var myImage = document.getElementById("rawimg");
  var url = myImage.src.replace(/^data:image\/bmp;base64[^;]/, 'data:application/octet-stream');
  window.open(url);
  //  linkElement.href = myImage;
//   var byteArray = new Uint8Array(rawData);
//   var b64img = Base64.encode(rawData);
//   //  linkElement.href = window.URL.createObjectURL(b64img,{type:'application/octet-stream'});
//   //  linkElement.href = window.URL.createObjectURL(new Blob([byteArray],{type:'data:image/bmp;base64'}));
//   linkElement.href = window.URL.createObjectURL(new Blob([b64img],{type:'data:image/bmp;base64'}));
//   var img = document.images[0];
//   img.onclick = function() {
//     // atob to base64_decode the data-URI
//     var image_data = atob(img.src.split(',')[1]);
//     // Use typed arrays to convert the binary data to a Blob
//     var arraybuffer = new ArrayBuffer(image_data.length);
//     var view = new Uint8Array(arraybuffer);
//     for (var i=0; i<image_data.length; i++) {
//       view[i] = image_data.charCodeAt(i) & 0xff;
//     }
//     //    var blob = new Blob([arraybuffer], {type: 'application/octet-stream'});
//     var blob = new Blob([arraybuffer], {type: 'data:image/bmp;base64'});
//     linkElement.href = blob;
//   }
}

/**
 * 
 */
function fileChangeHandler() {
  var file = fileInput.files[0];
  var textType = /image.bmp/;

  //  alert("Change event handler");

  if (file.type.match(textType)) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var editor = document.getElementById("editor");
      if (editor)
        editor.value = "";
      rawData = reader.result;    // We are ready as binary string
      rawUrl = bmphdr + "," + btoa(rawData);
       
      document.getElementById("rawimgdiv").style.visibility="visible";
      document.getElementById("rawimg").src = rawUrl;
      var decstr = getDataBlock(rawData);
      var download = document.getElementById("submit");
      if (download) 
         download.disabled = false;
      var decode = document.getElementById("decode");
      if (decode)
         decode.disabled = false;

      document.getElementById("stegimgdiv").style.visibility="hidden";
      var decstr = getDataBlock(rawData);
      var editor = document.getElementById("editor");
      if (editor) {
         editor.value = decstr;
         editor.cols = "50";
      }
    }
    reader.readAsBinaryString(file);	
 } else {
    alert('Sorry, currently only bitmap (.bmp) image files are supported.' +  
          'Go to \nhttp://image.online-convert.com/convert-to-bmp \nto convert your image.');
    //   fileDisplayArea.innerText = "File not supported!";
 }
}

/**
 *  Doesn't work in Firefox and Safari
 *  Invoked automatically when an image file is uploaded.  The file's bytes
 *   are read into rawData, a global variable and the image is displayed. 
 *   A data block of the images bytes is displayed in an editable TextArea. 
 *   Those are the bytes the user can edit. 
 */
window.onload = function() {
 var fileInput = document.getElementById('fileInput');
 var fileDisplayArea = document.getElementById('fileDisplayArea');

 if (window.File && window.FileReader && window.FileList && window.Blob) {
   // Great success! All the File APIs are supported.
 } else {
   alert('The File APIs are not fully supported in this browser. Try Chrome or Firefox or Safari');
 }
}
