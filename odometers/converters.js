// Convert binary to decimal
function binaryToDecimal(str, place) {
   if (str.length == 0)
      return 0;
   else if (str.charAt(str.length-1) == 0)
      return 0 + binaryToDecimal(str.substring(0,str.length-1), place * 2);
   else 
      return place + binaryToDecimal(str.substring(0,str.length-1), place * 2);
}

// Convert decimal value to binary
function decToBinary(n) {
   if (n == 0)
      return "";
   else if (n % 2 == 1) 
      return decToBinary(Math.floor(n/2)) + "1";
   else
      return decToBinary(Math.floor(n/2)) + "0";
}

// Pad the binary number to 5 places
function pad(str) {
  var len = str.length;
  for (k=len; k < 5; k++)
     str = "0" + str;
  return str;; 
}

// Pad the binary number to 5 places
function pad(str, ndigits) {
  var len = str.length;
  for (k=len; k < ndigits; k++)
     str = "0" + str;
  return str;; 
}

function decToHexDigit(d) {
   if (d < 10)
     return d;
   else {
     d = d - 10;
     return "ABCDEF".charAt(d);
   }
}

//Convert decimal value to binary
function decToHex(n) {
   if (n == 0)
      return "";
   var rmdr = n % 16;
   return decToHex(Math.floor(n/16)) + decToHexDigit(rmdr);
}

    function decToAltDigit(d, base) {
       if (base <= 10)
	 return d;
       if (d < 10)
	 return d;
       else {
	 d = d - 10;
	 return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(d);
       }
    }

    function decToAltBase(n, base) {
       if (n == 0)
	 return "";
       var rmdr = n % base;
       return decToAltBase(Math.floor(n/base), base) + decToAltDigit(rmdr, base);
    }

    function padLen(base) {
       if (base >= 10)
	 return 2;
       else if (base >= 3)
	 return 4;
       else if (base >= 2)
	 return 8;
    }

    // Pad the number to  places
   function padForBase(str, base) {
      var len = str.length;
      var padlen = padLen(base);
      for (k=len; k < padlen; k++)
	 str = "0" + str;
      return str;; 
   }

    function limit(base) {
       if (base >= 10)
	 return Math.pow(base,2) - 1;
       else if (base >= 3)
	 return Math.pow(base,4) - 1;
       else
	 return Math.pow(base,8) - 1;     
    }



