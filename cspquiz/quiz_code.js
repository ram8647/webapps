 /*
    The JavaScript code in this page is free software: you can redistribute 
    it and/or modify it under the terms of the GNU General Public License 
    (GNU GPL) as published by the Free Software Foundation, either version 3 
    of the License, or (at your option) any later version.  The code is distributed 
    WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY 
    or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
  */

  // Quiz data are stored in global quiz_data as a json array
  var IDEAS = ["creativity", "abstraction", "data", "algorithms", "programming", "internet", "impact"];
  var COURSES = ["mcsp", "cb"];  // Could be expanded to other curricula -- e.g., bjc, uteach
  var UNITS = ["1","2","3","4","5","6","7","8","9","10","11"];  // unit or chapter keywords

  var q_index = 0;         // Pointer into the quiz_index
  var q_id = 0;            // Pointer into the quiz_data 
  var quiz_index = [];     // Array of quiz numbers
  var curr_question;
  var choices;          // Multiple choices text, score, feedback
  var user_choice = -1; // Set when user clicks answer choice; 
  

  function initQuizData() {
    console.log('Starting');
    // Create a default index (non-filtered)
    for (var k = 0; k < quiz_data.length; k++) {
      quiz_index.push(k);
    }
    curr_question = quiz_data[quiz_index[q_index]];
   //   console.log(quiz_data.length)
    displayQuestion();
  }

  function setChoice(n) {
    user_choice = n;
  }
 
  function processAnswer() {
    if (user_choice == -1)    // No choice selected
      return;
    var feedback_element = document.getElementById("feedback");
    feedback_element.style.visibility="visible";
    var choice = choices[user_choice];
    var score = choice['score'];
    var feedback = choice['feedback'];
    var feedback_txt = "";
    if (feedback != "") {
      feedback_txt = feedback;
    } else if (score >= 1) {
      feedback_txt = "Correct -- good job!";
    } else {
      feedback_txt = "Sorry, that's not correct -- try again!";
    }
    var feedback_div = document.getElementById('feedback-div');
    feedback_div.style.visibility="visible";
    if (score >= 1) {
      feedback_div.style.backgroundColor="#ADCF2F";
    } else {
      feedback_div.style.backgroundColor="#FFCCCC";
    }
    feedback_element.innerHTML = feedback_txt;
    window.scrollTo(0,document.body.scrollHeight);
  }

  function displayChoices() {
     document.getElementById('choices_container').style.visibility="visible";
     choices = curr_question['choices'];
     var choice_form = '';
     choice_form += '<hr>';
     choice_form += '<i>Select the <u>best</u> choice.</i><br />';
     for (var i=0; i < choices.length; i++) {
       choice_form += '<input type="radio" name="choice"  value="' + i + '"';
       choice_form += ' onclick=setChoice(' + i  + ') >';
       choice_form += '&nbsp;<span class="radio_text">' +  
      //  run through convertAPML(input)
       convertAPML(choices[i]["text"]) + '</span>';
       choice_form += '<br />';
     }
     choice_form += '<hr>';
     var choice_table = document.getElementById('choices_table');
     choice_table.innerHTML = choice_form;
     var choice_controls = document.getElementById('choice-controls');
     var controls = '<br>';
     controls += '<button class="gcb-button" id="prev_button_2" onclick="previousQuestion()"><< Previous </button>';
     controls += '&nbsp;';
     controls += '<button class="gcb-button" id="next_button_2" onclick="nextQuestion()">Next >></button>';
     controls += '&nbsp;&nbsp; | &nbsp;&nbsp;';
     controls += '<button class="gcb-button" id="answer_button" onclick="processAnswer()">Check Answer</button>';
     choice_controls.innerHTML = controls;
  }

 function displayQuestion() {
    if (curr_question['type'] != 0) {
      nextQuestion();
    }
    user_choice = -1;
    document.getElementById('hint-div').style.visibility="hidden";
    document.getElementById('hint').innerHTML="";
    document.getElementById('feedback-div').style.visibility="hidden";
    var feedback = document.getElementById("feedback");
    feedback.style.visibility="hidden";
          
    var question = document.getElementById('question');
    //  run through convertAPML(input)
    question.innerHTML = convertAPML(curr_question['question']);
   
    if (curr_question['type'] == 0) {  // multiple choices
        displayChoices();
    }
  }
 
  /*
   *  Uses quiz_index to select the previous question from quiz_data, wrapping
   *   around if necessary.
   *  By default the index contains the quiz numbers for all quizzes in quiz_data.
   *  Filtering changes the index.
   */ 
  function previousQuestion() {
    q_index -= 1;
    if (q_index < 0) {
      q_index = quiz_index.length -1;
    }
    curr_question = quiz_data[quiz_index[q_index]];
    displayQuestion();
  }

  /*
   *  Uses quiz_index to select the next question from quiz_data, wrapping around
   *   it necessary. 
   *  By default the index contains the quiz numbers for all quizzes in quiz_data.
   *  Filtering changes the index.
   */ 
  function nextQuestion() {
     q_index += 1;
     if (q_index >= quiz_index.length) {
       q_index = 0;
     }
    curr_question = quiz_data[quiz_index[q_index]];
    displayQuestion();
  }

     
  function giveHint() {
    document.getElementById('hint-div').style.visibility="visible";
    document.getElementById('hint-div').style.backgroundColor="#ADCF2F";
    var hint = document.getElementById('hint');
    if (curr_question['hint']  != undefined) {
      hint.innerHTML = curr_question['hint'];
    } else {
      hint.innerHTML = 'Sorry, no hint available.';
    }
  }

  /*
   *  Handles the filter select component. 
   */
  function filter() {
    var option = document.getElementById('filter').value;
    if (IDEAS.indexOf(option) != -1) {
      bigidea_filter(option);  
    }
    if (COURSES.indexOf(option) != -1) {
      course_filter(option);  
    }
    if (option == "keyword") {
        document.getElementById('keyword-span').style.visibility="visible";
        return;
    }
    if (option == "unfilter") {
        quiz_index = [];
        for (var k = 0; k < quiz_data.length; k++) {
          quiz_index.push(k);
        }
    }
    if (option == "random") {
      var len = quiz_index.length;
      // Shuffle the index
      for (var k = 1; k < len / 2; k++) {
        var i1 = Math.floor(Math.random() * len);
        var i2 = Math.floor(Math.random() * len);
        var temp = quiz_index[i1];
        quiz_index[i1] = quiz_index[i2];
        quiz_index[i2] = temp;   
      }
    }
    q_index = 0;
    curr_question = quiz_data[quiz_index[q_index]];
    displayQuestion();
    document.getElementById('keyword-span').style.visibility="hidden";
  }

  /*
   *  Handles the keyword filter.  Searches the quiz_data JSON object
   *   for a case-insensitive keyword match.  The entire JSON question is
   *   converted to string and all of its fields are included in the search.
   */
  function keyword_filter() {
    var keyword = document.getElementById('keyword-input').value.toLowerCase();
    var new_index = [];
    if (UNITS.indexOf(keyword) != -1) {
      // Search the source field
      for (var k = 0; k < quiz_data.length; k++) {
	var question = quiz_data[k]; 
        var source = question['source'];
        var unit_id = source.substring(source.indexOf('-')+1);
	if (unit_id == keyword) {
	  new_index.push(k);
	}    
      }
    } else { 
      // Search each quiz_data question object, including all its fields
      for (var k = 0; k < quiz_data.length; k++) {
	var question = JSON.stringify(quiz_data[k]).toLowerCase(); 
	if (question.indexOf(keyword) != -1) {
	  new_index.push(k);
	}    
      }
    }
    if (new_index.length > 0) {
      quiz_index = [];
      quiz_index = new_index;
      q_index = 0;
      curr_question = quiz_data[quiz_index[q_index]];
      displayQuestion();
    } else {
      open_modal("Sorry, no matches were found for keyword <i>" + keyword + "</i>."); 
    }
  }

  function bigidea_filter(idea) {
    var new_index = [];
    var op_code = "" + (IDEAS.indexOf(idea) + 1);
    for (var k=0; k < quiz_data.length; k++) {
      var question = quiz_data[k];
      if (question['cspcode'] != undefined) {
        var idea_code = question['cspcode'].substring(0,1);  // e.g. 2.2.2K
        if (idea_code == op_code) {
          new_index.push(k);
        }
      }
    }     
    if (new_index.length > 0) {
      quiz_index = [];
      quiz_index = new_index;
      q_index = 0;
      curr_question = quiz_data[quiz_index[q_index]];
      displayQuestion();
    } else {
      open_modal("Sorry, no matches were found for Big Idea <i>" + idea + "</i>."); 
    }
  }

  function course_filter(course) {
    var new_index = [];
    for (var k=0; k < quiz_data.length; k++) {
      var question = quiz_data[k];
      if (question['source'] != undefined) {
        var source = question['source'];
        var course_code = source.substring(0,source.indexOf('-'));  // mcsp-1
        if (course_code == course) {
          new_index.push(k);
        }
      }
    }     
    if (new_index.length > 0) {
      quiz_index = [];
      quiz_index = new_index;
      q_index = 0;
      curr_question = quiz_data[quiz_index[q_index]];
      displayQuestion();
    } else {
      open_modal("Sorry, no matches were found for Course <i>" + course + "</i>."); 
    }
  }


  function open_modal(html) {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    modal.style.display = "block";
    var msg = document.getElementById("msg");
    msg.innerHTML = html;
  }

  /*
   * Information about the app.
   */
  function about() {
    var msg = "A free quiz app for the CS Principles course.<br />";
    msg += "Created by the Mobile CSP Project.<br />";
    msg += "Visit us at <a target='_blank' href='http://mobile-csp.org'>http:mobile-csp.org</a> ";
    open_modal(msg);
  }