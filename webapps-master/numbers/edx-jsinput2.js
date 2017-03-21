  <!-- This is the custom script that establishes the UI and gives the platform the state when requested. -->
var BinaryOdometer = (function() {
   var channel,
   // The above wrapper function and channel variable are both necessary,
   // REQUIRED --- DO NOT REMOVE/CHANGE!!
                
   // The "state" JSON dictionary below is passed to the platform for grading and saving.
   // Pass through whatever you wish
      state = {
         result: true
      };
            
   // Establish a channel only if this application is embedded in an iframe.
   // This will let the parent window communicate with this application using
   // RPC and bypass SOP restrictions.
   //
   // REQUIRED --- DO NOT REMOVE/CHANGE!!
   if (window.parent !== window) {
      console.log("RAM -------- building channel");
      channel = Channel.build({
        window: window.parent,
        origin: "*",
        scope: "JSInput"
      });
      channel.bind("getGrade", getGrade);
   }

  function getGrade() {
    console.log("RAM ----- getGrade() ");
    return JSON.stringify(state);
  }

  function getState() {
    console.log("RAM ----- getState() ");
    return JSON.stringify(state);
  }

  // return that gives the platform the names of the functions it has available.
  //
  // REQUIRED --- DO NOT REMOVE/CHANGE!!
  return {
     getGrade: getGrade
  };
}());
