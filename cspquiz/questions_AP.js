var quiz_data = [
      {"choices":[
          {"feedback":"Sorry, data compression is useful to save space on a single computer too.","score":"0","text":"(A) Data compression is only useful for files being transmitted over the Internet."},
                  {"feedback":"No, compressed data can be restored.","score":"0","text":"(B) No matter what compression technique is used, once a data file is compressed, it cannot be restored to its original state."},
                  {"feedback":"No, compression algorithms do not involve encryption.","score":"0","text":"(C) Sending a compressed version of a file ensures that the contents of the file cannot be intercepted by an unauthorized user."},
          {     "feedback":"That's correct! Lossy and lossless compression techniques have trade offs. Lossy data compression produces much smaller files, but loses some data bits.",
        "score":"1",
        "text":"(D) There are trade-offs involved in choosing a compression technique for storing and transmitting data."}],
   "cspcode":"3.3.1C",
   "description":"AP CS P Exam Prep Data Compression",
   "question":"Which of the following is a true statement about data compression?",
   "source":"cb-x",
   "type":"Mc",
   "wrongfeedback":"",
   "hint":"Think about lossy vs. lossless data compression.",
   "heading":"College Board Sample Question: Data"},
       {"choices":[{"feedback":"No, the license is only for a single user.","score":"0","text":"(A) When the application is only shared with students at the same school"},{"feedback":"No, the license is only for a single user.","score":"0","text":"(B) When the application is shared on a peer-to-peer network"},{"feedback":"","score":"1","text":"(C) When the student gets permission from the copyright owner of the application"},{"feedback":"No, the license is only for a single user.","score":"0","text":"(D) When the student makes a copy of the application for another student to use only once"}],
   "cspcode":"7.3.1N",
   "description":"AP CS P Exam Prep Copyright",
   "question":"A student purchases a single-user license of a copyrighted application and wants other students to be able to use it at the same time. Under which of the following conditions is it considered acceptable for the student to share the application?",
   "source":"cb-x",
   "type":"Mc",
   "wrongfeedback":"",
   "hint":"A single user license is only for one user.",
   "heading":"College Board Sample Question: Copyright"
  }, {"choices":[{"feedback":"Sorry, II is true, but there is another true statement above too.","score":"0","text":"(A) II only"},
    {"feedback":"I is not true. Many people in the world do not have access to the internet. There is a digital divide based on socioeconomic levels.","score":"0","text":"(B) I and III only"},
    {"feedback":"That is correct!","score":"1","text":"(C) II and III only"},
    {"feedback":"I is not true. Many people in the world do not have access to the internet. There is a digital divide based on socioeconomic levels.","score":"0","text":"(D) I, II, and III"}],
    "cspcode":"7.4.1A",
    "description":"AP CS P Exam Prep Benefits of The Internet",
    "question":"Which of the following are true statements regarding the benefits of using the Internet to communicate?<br><br><span class=\"Apple-tab-span\" style=\"white-space:pre\">\t</span>I. The Internet provides equal access to information across all socioeconomic groups&nbsp;<span style=\"line-height: 14.4182px;\">globally.<br></span><br><span class=\"Apple-tab-span\" style=\"white-space:pre\">\t</span>II. The Internet allows information to be disseminated to many people very quickly.<br><br><span class=\"Apple-tab-span\" style=\"white-space:pre\">\t</span>III. The Internet fosters new ways to communicate and collaborate.",
    "source":"cb-x",
    "type":"Mc",
    "wrongfeedback":"",
    "hint":"Think about the digital divide.",
    "heading":"College Board Sample Question: Internet Benefits"
   },{
         "choices":
         [
         {"feedback":"No, try tracing Algorithm B again.","score":"0","text":"(A) Algorithm A always calculates the correct average, but Algorithm B does not."},
                 {"feedback":"No, try tracing Algorithm A again.","score":"0","text":"(B) Algorithm B always calculates the correct average, but Algorithm A does not."},
                 {"feedback":"Yes, different algorithms can be used to solve the same problem.","score":"1","text":"(C) Both Algorithm A and Algorithm B always calculate the correct average."},
                 {"feedback":"No, try tracing through the algorithms with 2 students instead of 32.","score":"0","text":"(D) Neither Algorithm A nor Algorithm B calculates the correct average."}],
      "cspcode":"4.1.1H",
      "description":"AP CS P Exam Prep Average Height Algorithm",
      "question":"There are 32 students standing in a classroom. Two different algorithms are given for findingthe average height of the students.<br><br><b>Algorithm A</b><br>Step 1: All students stand.<br>Step 2: A randomly selected student writes his or her height on a card and is seated.<br>Step 3: A randomly selected standing student adds his or her height to the value on the card,records the new value on the card, and is seated. The previous value on the card is erased.<br>Step 4: Repeat step 3 until no students remain standing.<br>Step 5: The sum on the card is divided by 32. The result is given to the teacher.<br><br><b>Algorithm B</b><br>Step 1: All students stand.<br>Step 2: Each student is given a card. Each student writes his or her height on the card.<br>Step 3: Standing students form random pairs at the same time. Each pair adds the numberswritten on their cards and writes the result on one student’s card; the other student isseated. The previous value on the card is erased.<br>Step 4: Repeat step 3 until one student remains standing.<br>Step 5: The sum on the last student’s card is divided by 32. The result is given to the teacher.<br><br>Which of the following statements is true?",
      "source":"cb-x",
      "type":"Mc",
      "wrongfeedback":"",
      "hint":"Try tracing through the algorithms with just 2 students instead of 32.",
      "heading":"College Board Sample Question: Algorithms"},
    { 'choices': [ { 'feedback': '',
                   'score': 0.0,
                   'text': '(A)&nbsp;<br><div style="text-align: left;" class="yui-wk-div"><img src="https://ram8647.appspot.com/mobileCSP/assets/img/Q18A1.PNG" class="yui-img selected" title="" alt="" style="line-height: 1.22;"></div>'},
                 { 'feedback': 'No, this one is close! But it needs more turn right commands after the second move forward blocks.',
                   'score': 0.0,
                   'text': '(B)&nbsp;<br><img src="https://ram8647.appspot.com/mobileCSP/assets/img/Q18A2.PNG" class="yui-img selected" title="" alt=""><br>'},
                 { 'feedback': '',
                   'score': 1.0,
                   'text': '(C) <br><img src="https://ram8647.appspot.com/mobileCSP/assets/img/Q18A3.PNG" class="yui-img selected" title="" alt=""><br>'},
                 { 'feedback': '',
                   'score': 0.0,
                   'text': '(D) <br><img src="https://ram8647.appspot.com/mobileCSP/assets/img/Q18A4.PNG" class="yui-img selected" title="" alt=""><br>'}],
    'cspcode': '5.3.1',
    'description': 'AP CS P Exam Prep Robot MoveAndTurn Procedure',
    'heading': "College Board Sample Question: Algorithms",
    'hint': "Try following the commands in each answer below. In MoveAndTurn(), the first number is the number of forward moves and the second number is the number of times the robot turns right afterwards.",     
    'question': 'The figure below shows a robot in a grid of squares. The robot is represented as a triangle, which is initially facing upward. The robot can move into a white or gray square but cannot move into a black region.<br><br><div style="text-align: center;" class="yui-wk-div"><img src="https://ram8647.appspot.com/mobileCSP/assets/img/Q18SquareQuestion.PNG" class="yui-img" title="" alt="" style="line-height: 1.22;"><span style="line-height: 1.22;">&nbsp; &nbsp;<br><br></span></div>Consider the procedure <i>MoveAndTurn</i> below.<br><br><div style="text-align: center;" class="yui-wk-div"><img src="https://ram8647.appspot.com/mobileCSP/assets/img/Q18Code.PNG" class="yui-img" title="" alt="" style="line-height: 1.22;"><br><br></div>Which of the following code segments will move the robot to the gray square?',
    'source': 'cb-x',
    'type': "Mc",
    'wrongfeedback': ''},
     { 'choices': [ { 'feedback': 'Sorry, II is not correct.',
                   'score': 0.0,
                   'text': 'I and II only'},
                 { 'feedback': 'This is correct. Only I and III are true.',
                   'score': 1.0,
                   'text': 'I and III only'},
                 { 'feedback': 'Sorry, II is not correct.',
                   'score': 0.0,
                   'text': 'II and III only'},
                 { 'feedback': 'Sorry, II is not correct.',
                   'score': 0.0,
                   'text': 'I, II, and III'}],
    'cspcode': '1.2.1A',
    'description': 'AP CS P EXAM PREP Creating Computational Artifacts',
    'heading': "College Board Sample Question: Computational Artifacts",
      'hint' : "Decide which statements are true before reading the answers.",
    'question': 'Which of the following are true statements about creating computational artifacts?<br><br>I. A computational artifact must be created using a computer or computing device.<br>II. A computational artifact must be created using a traditional, prescribed technique.<br>III. Some computational artifacts are created by combining existing computational artifacts.',
    'source': 'cb-x',
    'type': "Mc",
    'wrongfeedback': ''},
    { 'choices': [ { 'feedback': '',
                   'score': 0.0,
                   'text': '(A) Computer simulations can only be built after the real-world object or system has been created.'},
                 { 'feedback': '',
                   'score': 0.0,
                   'text': '(B) Computer simulations only run on very powerful computers that are not available to the general public. '},
                 { 'feedback': 'This is correct',
                   'score': 1.0,
                   'text': '(C) Computer simulations usually make some simplifying assumptions about the real-world object or system being.'},
                 { 'feedback': '',
                   'score': 0.0,
                   'text': '(D) It is difficult to change input parameters or conditions when using computer simulations. '}],
    'cspcode': '2.3.1',
    'description': 'AP CS P EXAM PREP Computer Simulations',
    'heading': "College Board Sample Question: Computer Simulations",
    'hint' : "",
    'question': 'Which of the following statements describes a limitation of using a computer simulation to model a real-world object or system?<br>',
    'source': 'cb-x',
    'type': "Mc",
    'wrongfeedback': ''},
    { 'choices': [ { 'feedback': 'The elevator cannot be onFloor1 and onFloor2 at the same time.',
                   'score': 0.0,
                   'text': '(A) (onFloor1 AND callTo2) AND (onFloor2 AND callTo1)'},
                 { 'feedback': "That's correct! The elevator will move if it is onFloor1 and gets a callTo2, or if it is onFloor2 and gets a callTo1.",
                   'score': 1.0,
                   'text': '(B) (onFloor1 AND callTo2) OR (onFloor2 AND callTo1)'},
                 { 'feedback': 'The elevator cannot be onFloor1 and onFloor2 at the same time.',
                   'score': 0.0,
                   'text': '(C) (onFloor1 OR callTo2) AND (onFloor2 OR callTo1)'},
                 { 'feedback': 'No, the elevator would move even without a call with this logic.',
                   'score': 0.0,
                   'text': '(D) (onFloor1 OR callTo2) OR (onFloor2 OR callTo1)'}],
    'cspcode': '5.5.1',
    'description': 'AP CS P Exam Prep Elevator Boolean',
    'heading': "College Board Sample Question: Logic",
    'hint' : "callTo1 or callTo2 will make the elevator move if it is on the other floor.",
    'question': 'An office building has two floors. A computer program is used to control an elevator that travels between the two floors. Physical sensors are used to set the following Boolean variables.<br><br><div style="text-align: center;"><img src="https://ram8647.appspot.com/mobileCSP/assets/img/Q21Table.PNG" class="yui-img" width="100%" style="max-width:600px" title="" alt="" style="line-height: 1.22;"><br><br></div>The elevator moves when the door is closed and the elevator is called to the floor that it is not currently on. Which of the following Boolean expressions can be used in a selection statement to cause the elevator to move?',
    'source': 'cb-x',
    'type': "Mc",
    'wrongfeedback': ''},
    { 'choices': [ { 'feedback': '(A) Sorry, this would require selection but not iteration (a loop). ',
                   'score': -1.0,
                   'text': '(A) An algorithm that, given two integers, displays the greater of the two integers'},
                 { 'feedback': '(B) Yes, you would need a loop to go through the list and an if statement to see if an element is even.',
                   'score': 0.5,
                   'text': '(B) An algorithm that, given a list of integers, displays the number of even integers in the list'},
                 { 'feedback': '(C) Yes, you would need a loop to go through the list and an if statement to see if an element is negative.',
                   'score': 0.5,
                   'text': '(C) An algorithm that, given a list of integers, displays only the negative integers in the list'},
                 { 'feedback': '(D) Sorry, this would require iteration but not selection.',
                   'score': -1.0,
                   'text': '(D) An algorithm that, given a list of integers, displays the sum of the integers in the list'}],
    'cspcode': '4.1.1',
    'description': 'AP CS P Exam Prep Algorithm',
    'heading': "College Board Sample Question: Algorithms",
    'hint' : "Which problems require both the use of if statements and loops?",
    'question': 'Which of the following algorithms require both selection and iteration?\n\n<br><br>Select <u>two</u> answers.\n',
    'source': 'cb-x',
    'type': 'Ma',
    'wrongfeedback': ''},
          { 'choices': [ { 'feedback': 'Not quite. Adding just one extra bit (binary digit) allows for 2 times as many values. In this case you are adding 32 extra bits.</span>',
                   'score': 0.0,
                   'text': '(A) 2 times as many values can be represented.'},
                 { 'feedback': 'Not quite. Each extra bit doubles the values you can represent.',
                   'score': 0.0,
                   'text': '(B) 32 times as many values can be represented.'},
                 { 'feedback': 'This is correct! Each of the 32 extra bits doubles the number of values you can represent.',
                   'score': 1.0,
                   'text': '(C) 2^32 times as many values can be represented.'},
                 { 'feedback': 'Not quite. This would only give you 32x32 extra values.',
                   'score': 0.0,
                   'text': '(D) 32^2 times as many values can be represented.'}],
    'cspcode': '2.1.1',
    'description': 'AP CS P EXAM PREP Base 2',
    'heading': "College Board Sample Question: Abstraction",
    'hint' : "Each extra bit doubles the number of values you can represent.",
    'question': 'A video-streaming Web site uses 32-bit integers to count the number of times each video has been played. In anticipation of some videos being played more times than can be represented with 32 bits, the Web site is planning to change to 64-bit integers for the counter. Which of the following best describes the result of using 64-bit integers instead of 32-bit integers?',
    'source': 'cb-x',
    'type': 'Mc',
    'wrongfeedback': ''},
        { 'choices': [ { 'feedback': 'II is not true. Emails are not guaranteed to be secure and confidential.',
                   'score': 0.0,
                   'text': '(A) I and II only'},
                 { 'feedback': "That's correct!",
                   'score': 1.0,
                   'text': '(B) I and III only'},
                 { 'feedback': 'II is not true. Emails are not guaranteed to be secure and confidential.',
                   'score': 0.0,
                   'text': '(C) II and III only'},
                 { 'feedback': 'II is not true. Emails are not guaranteed to be secure and confidential.',
                   'score': 0.0,
                   'text': '(D) I, II, and III'}],
    'cspcode': '7.1.1A',
    'description': 'AP CS P Exam Prep Benefits of Email',
    'heading': "College Board Sample Question: Email ",
    'hint' : "",
    'question': 'Which of the following are true statements regarding the benefits of using e-mail to send messages?<div><br></div><div><span class="Apple-tab-span" style="white-space:pre">\t</span>I. E-mail can be used to disseminate information to multiple recipients at once.</div><div><br></div><div><span class="Apple-tab-span" style="white-space:pre">\t</span>II. E-mail is designed to be a completely secure way of sending confidential information.</div><div><br></div><div><span class="Apple-tab-span" style="white-space:pre">\t</span>III. E-mail fosters communication and collaboration between people in distant locations.</div>',
    'source': 'cb-x',
    'type': 'Mc',
    'wrongfeedback': ''},
        { 'choices': [ { 'feedback': 'No, if the problem can be solved in a reasonable time, there is no reason to use a heuristic algorithm.',
                   'score': 0.0,
                   'text': '(A) When the problem can be solved in a reasonable time and an approximate solution is acceptable.'},
                 { 'feedback': 'No,  heuristic algorithms are not guaranteed to give an exact solution.',
                   'score': 0.0,
                   'text': '(B) When the problem can be solved in a reasonable time and an exact solution is needed.'},
                 { 'feedback': 'Correct! If the problem cannot be solved in a reasonable time and an approximate solution is okay, we can use a heuristic algorithm!',
                   'score': 1.0,
                   'text': '(C) When the problem cannot be solved in a reasonable time and an approximate solution is acceptable.'},
                 { 'feedback': 'No,  heuristic algorithms are not guaranteed to give an exact solution.',
                   'score': 0.0,
                   'text': '(D) When the problem cannot be solved in a reasonable time and an exact solution is needed.'}],
    'cspcode': '4.2.2B',
    'description': 'AP CS P Exam Prep Heuristic Algorithm',
     'heading': "College Board Sample Question: Algorithms",
    'hint' : "Heuristic algorithms are often faster but are not guaranteed to find the best solution.",
    'question': 'Under which of the following conditions is it most beneficial to use a heuristic approach to solve a problem?',
    'source': 'cb-x',
    'type': 'Mc',
    'wrongfeedback': ''},
         { 'choices': [ { 'feedback': 'No, we could count the number of posts by user name using the meta-data.',
                   'score': 0.0,
                   'text': '(A) To determine the users who post messages most frequently'},
                 { 'feedback': 'No, the time of posts is stored in the meta-data.',
                   'score': 0.0,
                   'text': '(B) To determine the time of day that the site is most active'},
                 { 'feedback': 'That is correct! The topics of the posts are not stored in the meta-data.',
                   'score': 1.0,
                   'text': '(C) To determine the topics that many users are posting about'},
                 { 'feedback': 'No, we could count the number of commenter names in the meta-data.',
                   'score': 0.0,
                   'text': '(D) To determine which posts from a particular user have received the greatest number of comments'}],
    'cspcode': '3.2.1',
    'description': 'AP CS P EXAM PREP Data vs Metadata',
      'heading': "College Board Sample Question: Data",
    'hint' : "Are there any answers below that cannot be solved just by looking at the meta-data (the time of the post, the name of the user for the post, the commenters' names and the times of the comments)?",
    'question': 'A certain social media Web site allows users to post messages and to comment on other messages that have been posted. When a user posts a message, the message itself is considered data. In addition to the data, the site stores the following metadata.\n<ul>\n<li>The time the message was posted\n</li><li>The name of the user who posted the message\n</li><li>The names of any users who comment on the message and the times the comments were made\n</li></ul>\nFor which of the following goals would it be more useful to analyze the data instead of the\nmetadata?\n',
    'source': 'cb-x',
    'type': 'Mc',
    'wrongfeedback': ''},
         { 'choices': [ { 'feedback': 'No, the robot can get to the gray square following the code above.',
                   'score': 0.0,
                   'text': '(A)&nbsp;<img src="https://ram8647.appspot.com/mobileCSP/assets/img/APExamPrepQ14ChoiceA.PNG" class="yui-img selected" title="" alt="" align="center" style="display: block;">'},
                 { 'feedback': 'No, the robot can get to the gray square following the code above.',
                   'score': 0.0,
                   'text': '(B) <img src="https://ram8647.appspot.com/mobileCSP/assets/img/APExamPrepQ14ChoiceB.PNG" class="yui-img selected" title="" alt="" align="center" style="display: block;">'},
                 { 'feedback': 'No, the robot can get to the gray square following the code above.',
                   'score': 0.0,
                   'text': '(C)&nbsp;<img src="https://ram8647.appspot.com/mobileCSP/assets/img/APExamPrepQ14ChoiceC.PNG" class="yui-img" align="center" style="display: block;" title="" alt="">'},
                 { 'feedback': 'Correct! The robot will not reach the gray square here because it will get stuck in the top right corner. It cannot turn from there because it cannot move left or right from there.',
                   'score': 1.0,
                   'text': '(D)&nbsp;<img src="https://ram8647.appspot.com/mobileCSP/assets/img/APExamPrepQ14ChoiceD.PNG" class="yui-img" align="center" style="display: block;" title="" alt="">'}],
    'cspcode': '4.2.4B',
    'description': 'AP CS P Exam Prep Robot',
     'heading': "College Board Sample Question: Algorithms",
    'hint' : "Follow the code for the robot grid in each answer to see if it can reach the gray square. One of them will not be able to reach the gray square..",
    'question': 'The program segment below is intended to move a robot in a grid to a gray square. The program segment uses the procedure <i>GoalReached</i>, which evaluates to <i>true</i> if the robot is in the gray square and evaluates to <i>false</i> otherwise. The robot in each grid is represented as a triangle and is initially facing left. The robot can move into a white or gray square, but cannot move into a black region.<br><br><img src="https://ram8647.appspot.com/mobileCSP/assets/img/APExamPrepQ14.PNG" class="yui-img" title="" alt="" style="width: 200px;"><br><br>\nFor which of the following grids does the program NOT correctly move the robot to the gray square?',
    'source': 'cb-x',
    'type': 'Mc',
    'wrongfeedback': ''},
        { 'choices': [ { 'feedback': 'Correct! The loop will go through the morningList of children, and this code will put the morning child on the lunchlist if the child is found on the afternoonlist as well.',
                   'score': 1.0,
                   'text': '(A)&nbsp;IF (IsFound (afternoonList, child))<blockquote>{<br>APPEND (lunchList, child)<br>}</blockquote>'},
                 { 'feedback': 'No, we are trying to create the lunchList.',
                   'score': 0.0,
                   'text': '(B)&nbsp;IF (IsFound (lunchList, child))<blockquote>{<br>APPEND (afternoonList, child)<br>}</blockquote>'},
                 { 'feedback': 'No, we need to check if the child is on the afternoonList too.',
                   'score': 0.0,
                   'text': '(C)&nbsp;IF (IsFound (morningList, child))<blockquote>{<br>APPEND (lunchList, child)<br>}</blockquote>'},
                 { 'feedback': 'No, the child needs to be on both the morningList <b>and</b> the afternoonList.',
                   'score': 0.0,
                   'text': '(D)&nbsp;IF ((IsFound (morningList, child)) OR&nbsp;<br><span style="line-height: 1;"><span class="Apple-tab-span" style="white-space:pre">\t</span>&nbsp; (IsFound (afternoonList, child)))</span><blockquote>{<br>APPEND (lunchList, child)<br>}</blockquote>'}],
    'cspcode': '5.3.1',
    'description': 'AP CS P Exam Prep Summer Camp Lists',
    'heading': "College Board Sample Question: Algorithms",
    'hint' : "Notice that the code in the answers go inside a <b>loop</b> in the question which goes through the morningList children.",
    'question': 'A summer camp offers a morning session and an afternoon session. The list <i>morningList</i> contains the names of all children attending the morning session, and the list <i>afternoonList</i> contains the names of all children attending the afternoon session. <br>Only children who attend both sessions eat lunch at the camp. The camp director wants to create <i>lunchList</i>, which will contain the names of children attending both sessions. <br>The following code segment is intended to create <i>lunchList</i>, which is initially empty. It uses the procedure <i>IsFound (list, name)</i>, which returns <i>true</i> if <i>name</i> is found in <i>list</i> and returns <i>false</i> otherwise.<br><blockquote>FOR EACH child IN <i>morningList</i><br>{<br>\n\n <missing code="">&nbsp; &lt;MISSING CODE&gt;&nbsp;<br></missing><missing code="">}\n</missing></blockquote><missing code=""><br>Which of the following could replace&nbsp;<span style="line-height: 14.4182px;">&lt;MISSING CODE&gt;</span><missing code="">&nbsp;so that the code segment works as intended?</missing></missing>',
    'source': 'cb-x',
    'type': 'Mc',
    'wrongfeedback': ''},
        { 'choices': [ { 'feedback': "Not quite - According to the table, backing up data for a company with 100,000 would take over 2,000 hours (200 x 10). Even though that's a long time, there is another task that would take even longer.",
                   'score': 0.0,
                   'text': '(A) Backing up data\n\n\n'},
                 { 'feedback': 'Nice try, but according to this table deleting entries for a company with approximately 100,000 customers would only take 400 hours.',
                   'score': 0.0,
                   'text': '(B) Deleting entries from data'},
                 { 'feedback': 'Nice try, but the question is asking about 100,000 customers.',
                   'score': 0.0,
                   'text': '(C) Searching through data'},
                 { 'feedback': 'That is correct!',
                   'score': 1.0,
                   'text': '(D) Sorting data'}],
    'cspcode': '3.2.2',
    'description': 'AP CS P EXAM PREP Internet Communication -- replaced <img src="https://ram8647.appspot.com/mobileCSP/assets/img/SampleExamQuestion10EfficiencyAlgorithms.PNG" class="yui-img" width="100%">',
    'heading': "College Board Sample Question: Data and Algorithms",
    'hint' : "Look at all the columns of the table and think about the function in each row to predict how the numbers will grow.",
    'question': 'The table below shows the time a computer system takes to complete the specified task on the customer data of different sized companies. <br> <table border width=100% style="font-size:small; border: 1px solid black;"><tr"> <th style="border: 1px solid black;">Task</th><th style="border: 1px solid black;">Small Company (approx. 100 customers)</th><th style="border: 1px solid black;">Medium Company (approx. 1,000 customers)</th><th style="border: 1px solid black;">Large Company (approx. 10,000 customers)</th></tr><tr><td style="border: 1px solid black;">Backing up data</td><td style="border: 1px solid black;">2 hours</td><td style="border: 1px solid black;">20 hours</td><td style="border: 1px solid black;">200 hours</td></tr><tr><td style="border: 1px solid black;">Deleting entries from data</td><td style="border: 1px solid black;">100 hours</td><td style="border: 1px solid black;">200 hours</td><td style="border: 1px solid black;">300 hours</td></tr><tr><td style="border: 1px solid black;">Searching through data</td><td style="border: 1px solid black;">250 hours</td><td style="border: 1px solid black;">300 hours</td><td style="border: 1px solid black;">350 hours</td></tr><tr><td style="border: 1px solid black;">Sorting data</td><td style="border: 1px solid black;">0.01 hour</td><td style="border: 1px solid black;">1 hour</td><td style="border: 1px solid black;">100 hours</td></tr></table><br>Based on the information in the table, which of the following tasks is likely to take the longest amount of time when scaled for a very large company of approximately 100,000 customers? <br>',
    'source': 'cb-x',
    'type': 'Mc',
    'wrongfeedback': ''},
        { 'choices': [ { 'feedback': 'No, the location and date in the tracking data would provide this information.',
                   'score': 0.0,
                   'text': '(A) Approximately how many miles did the animal travel in one week?'},
                 { 'feedback': 'No, the location tracking data would provide this information.',
                   'score': 0.0,
                   'text': '(B) Does the animal travel in groups with other tracked animals?'},
                 { 'feedback': 'This is correct. You would need additional information about the weather on each date.',
                   'score': 1.0,
                   'text': '(C) Do the movement patterns of the animal vary according to the weather?'},
                 { 'feedback': 'No, the location tracking data would provide this information.',
                   'score': 0.0,
                   'text': '(D) In what geographic locations does the animal typically travel?'}],
    'cspcode': '3.1.1E',
    'description': 'AP CS P EXAM PREP Data Analysis',
    'heading': "College Board Sample Question: Data",
    'hint' : "Which of the answers cannot be solved with just the time, date, and location tracking data of the animal?",
    'question': 'Biologists often attach tracking collars to wild animals. For each animal, the following geolocation data is collected at frequent intervals.\n<br>\n<ul>\n<li>The time\n</li><li>The date\n</li><li> The location of the animal</li></ul>\nWhich of the following questions about a particular animal could <b>NOT</b> be answered using <u>only</u> the data collected from the tracking collars?',
    'source': 'cb-x',
    'type': 'Mc',
    'wrongfeedback': ''},
         { 'choices': [ { 'feedback': 'Yes, about is the subdomain of the domain example.com.',
                   'score': 1.0,
                   'text': '(A) about.example.com'},
                 { 'feedback': 'No, URLs are often of this form: http://subdomain.domain.com',
                   'score': 0.0,
                   'text': '(B) example.co.uk'},
                 { 'feedback': 'No, URLs are often of this form: http://subdomain.domain.com',
                   'score': 0.0,
                   'text': '(C) example.com.org'},
                 { 'feedback': 'No, URLs are often of this form: http://subdomain.domain.com',
                   'score': 0.0,
                   'text': '(D) example.org'}],
    'cspcode': '6.2.1B',
    'description': 'AP CS P Exam Prep DNS',
    'heading': "College Board Sample Question: Internet",
    'hint' : "URLs are often of this form: http://subdomain.domain.com",
    'question': 'According to the domain name system (DNS), which of the following is a subdomain of the domain <i>example.com</i>?',
    'source': 'cb-x',
    'type': 'Mc',
    'wrongfeedback': ''},
         { 'choices': [ { 'feedback': 'No, that is malware.',
                   'score': 0.0,
                   'text': '(A) A computer program that attempts to steal passwords and infect other computers'},
                 { 'feedback': 'No, that is a Denial of Service (DOS) attack.',
                   'score': 0.0,
                   'text': '(B) A computer program that overloads a Web server with requests for resources'},
                 { 'feedback': 'Yes, phishing attacks try to fool users into giving out confidential information.',
                   'score': 1.0,
                   'text': '(C) An e-mail request for personal information from a user'},
                 { 'feedback': 'No, that is a packet sniffer. ',
                   'score': 0.0,
                   'text': '(D) Software that looks for passwords by intercepting packets that are traveling across a network'}],
    'cspcode': '6.3.1F',
    'description': 'AP CS P Exam Prep Phishing - not in booklet',
    'heading': "College Board Sample Question: Internet",
    'hint' : "Phishing sounds like fishing.",
    'question': 'Which of the following is most likely to be part of a phishing attack?',
    'source': 'cb-x',
    'type': 'Mc',
    'wrongfeedback': ''}
];