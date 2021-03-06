  /*
    The JavaScript code in this page is free software: you can redistribute 
    it and/or modify it under the terms of the GNU General Public License 
    (GNU GPL) as published by the Free Software Foundation, either version 3 
    of the License, or (at your option) any later version.  The code is distributed 
    WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY 
    or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 
  Authors: Ralph Morelli, Beryl Hoffman
  Mobile CSP
  
// This is code shared by index.html and editor.html to display the quiz
//  Questions and answers are run through APML converter before being displayed.
 */

  // Quiz data are stored in global quiz_data as a json array
  var IDEAS = ["creativity", "abstraction", "data", "algorithms", "programming", "internet", "impact"];
  var COURSES = ["mcsp", "cb", "tracing"];     // Could be expanded to other curricula -- e.g., bjc, uteach
  var COURSE_NAMES = {mcsp:"Mobile CSP", cb:"College Board Sample Question", tracing:"Tracing Code"};
  var Q_TYPES  = ["Mc", "Ma", "Fi"];  // multiple choice, muliple answer, fill-in
  var UNITS = ["1","2","3","4","5","6","7","8","9","10","11"];  // unit or chapter keywords

  var q_index = 0;         // Pointer into the quiz_index
  var q_id = 0;            // Pointer into the quiz_data 
  var q_length = 0;        // Number of questions in the quiz
  var quiz_index = [];     // Array of quiz numbers
  var curr_question;
  var choices;          // Multiple choices text, score, feedback
  var user_choices = []; // A list of user choices for multiple answer questions
  
  // scoring
  var completed = []; // keeps track of whether questions are completed (-1 not attempted, 0 attempted, 1 correct)
  var points = 0; 
  var filtered_points = 0; 
  var attempts = 0;  
 

  function initQuizData() {
    //console.log('Starting');

    q_length = quiz_data.length;

    // Create a default index (non-filtered)
    for (var k = 0; k < quiz_data.length; k++) {
      quiz_index.push(k);
      completed[k] = -1;    
    }
    randomize(quiz_index);   // Shuffle the quiz questions

      // see if any scores stored in local storage
   if(localStorage != undefined && 
      localStorage.getItem("completed") != null) {
            completed = JSON.parse(localStorage.getItem("completed"));
           // console.log("Got completed from LocalStorage " + completed);
            attempts = parseInt(localStorage.getItem("attempts"));
            points = parseInt(localStorage.getItem("points"));
           // console.log(points + "/" + attempts);
    }
    curr_question = quiz_data[quiz_index[q_index]];
//    console.log(curr_question['description']);
    displayQuestion();
  }

  function setChoice(n) {
    user_choices = [];
    user_choices.push(n);
  }
 
  function setMaChoice(n) {  // Multiple answer (checkbox)
    var i = user_choices.indexOf(n);
    if ( i == -1) {
      user_choices.push(n);
    } else {
      user_choices.splice(i,1);
    }
  }
 
  function processFillinAnswer() {
    var user_answer = document.getElementById("textanswer").value.toLowerCase();
    var correct_answer = curr_question['response'].toLowerCase();
    var score = (user_answer == correct_answer) ? 1 : 0;
    var feedback_txt = "";
    feedback_txt = (score >= 1) ? curr_question['feedback'] : curr_question['wrongfeedback'];
    displayFeedback(feedback_txt, score);
  }

  function processAnswer() {
    if (curr_question['type'] == "Fi") {
      processFillinAnswer();
      return;
    }
    if (user_choices == [])    // No choice selected
      return;

    var feedback = "";
    var feedback_txt = "";
    var score = 0;
    for (var i=0; i < user_choices.length; i++) {
      score += choices[user_choices[i]]['score'];
      feedback_txt += choices[user_choices[i]]['feedback'] + "<br>";
    }
    displayFeedback(feedback_txt, score);
  }

  function displayFeedback(txt, score) {
    var feedback_element = document.getElementById("feedback");
    // scoring - count attempt
    document.getElementById("completedImage").src = "in_progress.png";
    if (completed[quiz_index[q_index]] == -1)  // never tried
    {
        attempts++;
        completed[quiz_index[q_index]] = 0; // attempted  
    }
      // make visible again 
    feedback_element.style.display="inline";
    
      
    var feedback_div = document.getElementById('feedback-div');
    feedback_div.style.display="block"; // visible
      
    if (score >= 1) { //correct
        if (txt == "" || txt == "<br>") 
           txt = "Correct -- good job!";
        console.log(completed[quiz_index[q_index]]+ " " + points);
        if (completed[quiz_index[q_index]] != 1) {
            points++;  // if not already counted correct
            filtered_points++;
        }
        document.getElementById("completedImage").src = "completed.png";
        completed[quiz_index[q_index]] = 1; 
        feedback_div.style.backgroundColor="#ADCF2F";
      } else { // incorrect
         if (txt == "" || txt == "<br>") 
             txt = "Sorry, that's not correct -- try again!";
         feedback_div.style.backgroundColor="#FFCCCC";
         if (completed[quiz_index[q_index]] == 1) // previously correct
             {
                 points--; // remove correct points but not attempts
                 completed[quiz_index[q_index]] = 0; // set back to attempted but not correct
             }
      }
    
    if (curr_question['type'] == "Ma" && user_choices.length != 2) {
      txt += "For this question you need <u>exactly two</u> choices.";
    }
   
    feedback_element.innerHTML = txt;
     // display points
    document.getElementById("points").innerHTML = 
        getPoints() + "/"+ quiz_index.length ; // using filtered points and quiz_index instead of total q_length; 
    
   // window.scrollTo(0,document.body.scrollHeight);
      
      // update points in localStorage
      localStorage.setItem("completed", JSON.stringify(completed));
      localStorage.setItem("attempts", attempts);
       localStorage.setItem("points", points);
  }

  function displayChoices() {  // Multiple choice question
     //document.getElementById('choices_container').style.visibility="visible";
     choices = curr_question['choices'];
     randomize(choices);
     var choice_form = '';
     choice_form += '<hr>';
     choice_form += '<i>Select the <u>best</u> choice.</i><br />';
     for (var i=0; i < choices.length; i++) {
       choice_form += '<input type="radio" name="choice"  value="' + i + '"';
       choice_form += ' onclick=setChoice(' + i  + ') >';
       choice_form += '&nbsp;<span class="radio_text">' + // choices[i]["text"] + '</span>';
                    //  run through convertAPML(input) first
                    convertAPML(choices[i]["text"]) + '</span>';
       choice_form += '<br />';
     }
     choice_form += '<hr>';
     var choice_table = document.getElementById('choices_table');
     choice_table.innerHTML = choice_form;
  
            
  }

  function displayMaChoices() {  // Multiple answer question
     //document.getElementById('choices_container').style.visibility="visible";
     choices = curr_question['choices'];
     var choice_form = '';
     choice_form += '<hr>';
     choice_form += '<i>Select <u>two</u> answers.</i><br />';
     for (var i=0; i < choices.length; i++) {
       choice_form += '<input type="checkbox" name="choice"  value="' + i + '"';
       choice_form += ' onclick=setMaChoice(' + i  + ') >';
       choice_form += '&nbsp;<span class="checkbox_text">' + // choices[i]["text"] + '</span>';
                    //  run through convertAPML(input) first
                    convertAPML(choices[i]["text"]) + '</span>';
       choice_form += '<br />';
     }
     choice_form += '<hr>';
     var choice_table = document.getElementById('choices_table');
     choice_table.innerHTML = choice_form;
  }

  function displayFillin() {  // Fillin answer type
     //document.getElementById('choices_container').style.visibility="visible";
     var choice_form = '';
     choice_form += '<hr>';
     choice_form += '<i>Input your answer into the text box and click \'Check Answer\'.</i><br />';
     choice_form += '<input type="text" id="textanswer" name="textanswer"  value=""';
     choice_form += '<br />';
     choice_form += '<hr>';
     var choice_table = document.getElementById('choices_table');
     choice_table.innerHTML = choice_form;
  }


  function displayControls() {
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
    if (curr_question['type'] == "Mc") {  // Multiple choice - radio
      displayQuestionData();
      displayChoices();
      displayControls();
    } else if (curr_question['type'] == "Ma") {   // Multiple answer - checkbox
      displayQuestionData();
      displayMaChoices();
      displayControls();
    } else if (curr_question['type'] == "Fi") {   // Fillin answer
      displayQuestionData();
      displayFillin();
      displayControls();
    } else {
      nextQuestion();
    }
  
  }
  
 
  function displayQuestionData() {
    user_choices = [];
    document.getElementById('hint-div').style.display="none"; 
    document.getElementById('hint').innerHTML="";
    document.getElementById('feedback-div').style.display="none";
    var feedback = document.getElementById("feedback");
    feedback.style.display="none";
    var question = document.getElementById('question');

     //  question.innerHTML = curr_question['question'];
     //  run through convertAPML(input)
   // question.innerHTML = convertAPML(curr_question['question']);
      
    var question_txt = "<b>"+curr_question['heading']+".</b>&nbsp;" + curr_question['question'];
    question.innerHTML = convertAPML(question_txt); // convertAPML
     
      // display stored completion info
     if ( completed[quiz_index[q_index]] == 1)   
         document.getElementById("completedImage").src = "completed.png";
     else if ( completed[quiz_index[q_index]] == 0)   
         document.getElementById("completedImage").src = "in_progress.png";
     else 
           document.getElementById("completedImage").src = "not_started.png";
      // display completed/total
      document.getElementById("points").innerHTML =  
          getPoints()+"/"+ quiz_index.length ; // using filtered quiz_index instead of total q_length;
  }

function getPoints()
{
    if (quiz_index.length == q_length) { //not filtered
        return points;
    }
    else 
        return filtered_points;
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
    var type = curr_question['type'];
    if (Q_TYPES.indexOf(type) == -1) {
      previousQuestion();
    } else {
      displayQuestion();
    }
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
    var type = curr_question['type'];
    if (Q_TYPES.indexOf(type) == -1) {
      nextQuestion();
    } else {
      displayQuestion();
    }
  }

  function giveHint() {
    document.getElementById('hint-div').style.display="block";
    document.getElementById('hint-div').style.backgroundColor="#ADCF2F";
    var hint = document.getElementById('hint');
    if (curr_question['hint']  != undefined &&
       curr_question['hint']  != "" ) {
      hint.innerHTML = curr_question['hint'];
    } else {
      hint.innerHTML = 'Sorry, no hint available.';
    }
  }

 // reset localStorage and completed array for scoring
  function resetScore() {
          localStorage.clear();
          for (var k = 0; k < quiz_data.length; k++) {
            completed[k] = -1;    
          }
          attempts = 0;
          points = 0;
          filtered_points = 0;
          document.getElementById("completedImage").src = "not_started.png";
          // display completed/total
          document.getElementById("points").innerHTML = 
              getPoints()+"/"+ quiz_index.length ; // using filtered quiz_index instead of total q_length;
  }

  /*
   *  Handles the filter select component. 
   */
  function filter() {
    var option = document.getElementById('filter').value;
    if (option == "resetScore") {
        open_modal("Are you sure you want to delete your scores permanently for all questions? <br><button onClick='resetScore();document.getElementById(\"myModal\").style.display=\"none\";'>Yes</button> <button onClick='document.getElementById(\"myModal\").style.display=\"none\";'>No</button>");
        document.getElementById('filter').selectedIndex = 0;
        return;
    }
    if (IDEAS.indexOf(option) != -1) {
      bigidea_filter(option);  
    }
    if (COURSES.indexOf(option) != -1) {
      course_filter(option);  
    }
    if (option == "keyword") {
        document.getElementById('keyword-span').style.display="inline";
        return;
    }
    if (option == "unanswered") {
        points_filter();
        return;
    }
    if (option == "unfilter") {
        quiz_index = [];
        for (var k = 0; k < quiz_data.length; k++) {
          quiz_index.push(k);
        }
        open_modal('There are currently ' + (quiz_index.length - points)  + ' unanswered questions in the complete set of ' + quiz_index.length + ' questions.');
    }
    if (option == "random") {
      randomize(quiz_index);
      open_modal('There are currently ' + (quiz_index.length - getPoints())  + ' unanswered questions in the set of ' + quiz_index.length + ' questions.');
    }
    q_index = 0;
    curr_question = quiz_data[quiz_index[q_index]];
    displayQuestion();
    document.getElementById('keyword-span').style.display="none";
  }

   // Shuffles the quiz questions and answer choices
  function randomize(array) {
    var len = array.length;
    // Shuffle the array
    for (var k = 0; k < len / 2; k++) {
      var i1 = Math.floor(Math.random() * len);
      var i2 = Math.floor(Math.random() * len);
      var temp = array[i1];
      array[i1] = array[i2];
      array[i2] = temp;   
    } 
  }

  // Updates the quiz_index after filtering. 
  function update_index(new_index, text) {
    if (new_index.length > 0) {
      quiz_index = [];
      quiz_index = new_index;
      q_index = 0;
      curr_question = quiz_data[quiz_index[q_index]];
      displayQuestion();
    } else {
      open_modal("Sorry, no matches were found for " + text + "."); 
    }
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
    update_index(new_index, 'Keyword&nbsp;<i>' + keyword + '</i>');
    calculate_filtered_points();
    open_modal('There are currently ' + (quiz_index.length - filtered_points)  + ' unanswered questions in this set of ' + quiz_index.length + " " + keyword  + ' questions.');
  }
 
  // Filters for unanswered questions  
  function points_filter() {
    var new_index = [];
    for (var k=0; k < quiz_data.length; k++) {
      //      if (completed[quiz_index[k]] < 1) {
      if (completed[k] < 1) {
        new_index.push(k);
      }
    }
    filtered_points = 0;
    open_modal('There are currently ' + new_index.length + ' unanswered questions in this set of ' + q_length + ' questions.');
    if (new_index.length > 0) {
      update_index(new_index, '<i>unanswered questions</i>');
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
    update_index(new_index, 'Big Idea<i> ' + idea + '</i>');
    calculate_filtered_points();
    open_modal('There are currently ' + (quiz_index.length - filtered_points)  + ' unanswered questions in this set of ' + quiz_index.length + " " + idea  + ' questions.');
  }

function calculate_filtered_points()
{
  filtered_points = 0;    
  for (var k = 0; k < quiz_index.length; k++) {
      if (completed[quiz_index[k]] == 1)
          filtered_points++;
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
    update_index(new_index, '<i> ' + COURSE_NAMES[course] + '</i>');
    calculate_filtered_points();
    if (course == "cb")
        course = "College Board AP";
    else if (course == "tracing")
        course = "tracing";
    else
        course = "Mobile CSP"
    open_modal('There are currently ' + (quiz_index.length - filtered_points)  + ' unanswered questions in this set of ' + quiz_index.length + " " + course  + ' questions.');
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
    var msg = "This is a free quiz app for the CS Principles course created by the Mobile CSP Project.<br />";
    msg += "Visit us at <a target='_blank' href='http://mobile-csp.org'>http:mobile-csp.org</a> <br> <a style='font-size:70%' href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).</a>";
    open_modal(msg);
  }

// jQuery swipe controls in custom build jquery mobile download
$(document).ready(function(){
    $("#quiz_section").on("swiperight",function(){
                nextQuestion();
    });
    
     $("#quiz_section").on("swipeleft",function(){
                previousQuestion();
    });
});