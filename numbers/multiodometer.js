
    // ------------- Multibase Odometer ---------------
    var value = 0;
    base = 10;
    var odometer = "00";

    //Sets the base from drop-down 
    function setBase(n) {
      if (n == 0) {
	 document.getElementById("basediv").style.visibility="visible";
	 var val = document.getElementById("baseinput").value;
	 if (val > 32) {
	    alert("Sorry, I can only handle bases up to 32.");
    //        document.getElementById("basediv").style.visibility="hidden";
	    document.getElementById("baseinput").value = base;
	    return;    // ignore bases above 32
	 }
	 base = val;
	 value = 0;
	 document.getElementById("odometer").innerHTML = "00";
	 document.getElementById("decimal").innerHTML = value;
	 setOdoLabel(base);
	 return;
      }
    }

    function setOdoLabel(base) {
       var label = document.getElementById("odolabel")
       if (base == 2)
	 label.innerHTML = "binary";
       else if (base == 8)
	 label.innerHTML = "octal";
       else if (base == 10)
	 label.innerHTML = "decimal";
       else if (base == 16)
	 label.innerHTML = "hex";
       else
	 label.innerHTML = "base " + base;
    }

    // Advance the odometer
    function advance() {
       value += 1;
       if (value > limit(base)) {
	 value = 0;
       }
       odometer =  padForBase(decToAltBase(value, base), base);
       document.getElementById("odometer").innerHTML = odometer;
       document.getElementById("decimal").innerHTML = value;
    }
