var quiz_data = [{"description": "AND gate", "wrongfeedback": "", "question": "An AND gate is an electronic component that takes two inputs, A and B, such that", "choices": [{"text": "the gate will be TRUE (or ON) when either A or B is TRUE (or ON).", "score": 0.0, "feedback": "OK, so you didn\u2019t get it right this time. Let\u2019s look at this as an opportunity to learn. An OR gate would be TRUE (or ON) when either A or B is TRUE (or ON)."}, {"text": "the gate will be TRUE (or ON) when both A and B are TRUE (or ON).", "score": 1.0, "feedback": ""}, {"text": "the gate will be TRUE (or ON) when A is TRUE (or ON).", "score": 0.0, "feedback": "OK, so you didn\u2019t get it right this time. Let\u2019s look at this as an opportunity to learn. For the AND gate to be TRUE (or ON) B would also have to be TRUE (or ON)."}, {"text": "the gate will be TRUE (or ON) when B is TRUE (or ON).", "score": 0.0, "feedback": "OK, so you didn\u2019t get it right this time. Let\u2019s look at this as an opportunity to learn. For the AND gate to be TRUE (or ON) A would also have to be TRUE (or ON)."}], "type": 0, "permute": false}, {"type": 0, "question": "Documentation of Code", "description": "CP1 - Documentation of Code", "choices": [{"text": "Very well documented", "score": 3.0, "feedback": ""}, {"text": "Fairly well documented \u2013 some problems", "score": 2.0, "feedback": ""}, {"text": "Not well documented \u2013 no comments/poor names ", "score": 1.0, "feedback": ""}, {"text": "Did not complete", "score": 0.0, "feedback": ""}]}, {"description": "Binary Overflow", "wrongfeedback": "", "question": "<h3>What's the Output?</h3>\n\nOur 4-bit computer uses 8-bit bytes to represent its data. An 8-bit byte can store values ranging from 0 to 255 -- i.e., 00000000 to 11111111.  What do you suppose would happen if you added 1 to 11111111?\n<br><br>\nTo help answer this question, you might want to use the <a target=\"_blank\" href=\"http://appinventor.cs.trincoll.edu/csp/webapps/computer/gen0.html\">4-bit simulator</a> to write a little machine language program to see what happens. By default, the 4-bit computer adds the values in locations 1000 and 1001 and prints the sum. So here is how you would set up the machine to add 11111111 and 00000001:\n<br>\n\n<ul>\n  <li>Put the value 11111111 (decimal 255) in memory location 1000.</li>\n  <li>Put the value 00000001 (decimal 1) in memory location 1001.</li>\n  <li>Run the program and observe the output.</li>\n</ul>\n<br>\n\nWhat decimal value do you get when you add binary 1 to binary 11111111?\n<br>\n<br>\n\n", "choices": [{"text": "0", "score": 1.0, "feedback": "Yes, the correct answer is 0. This would be an example of an <b>overflow error</b>. But it would not crash the machine."}, {"text": "255", "score": 0.0, "feedback": "No. You would get 255 if you added 0 to 255. "}, {"text": "256", "score": 0.0, "feedback": "No.  The value 256 cannot be represented at all in 8 bits.  In 8 bits you can represent 256 different values, ranging from 00000000 to 11111111,  decimal 0 to decimal 255. "}, {"text": "No value.  The machine would crash.", "score": 0.0, "feedback": "No.  Adding 1 to 255 in 8 bits causes an overflow error, but it would not crash the machine. "}], "type": 0, "permute": false}, {"description": "AP CS P Exam Prep Grade Procedures", "wrongfeedback": "", "question": "A teacher uses the following program to adjust student grades on an assignment by adding&nbsp;<span style=\"line-height: 1.22;\">5 points to each student\u2019s original grade. However, if adding 5 points to a student\u2019s original </span><span style=\"line-height: 1.22;\">grade causes the grade to exceed 100 points, the student will receive the maximum possible&nbsp;</span><span style=\"line-height: 1.22;\">score of 100 points. The students\u2019 original grades are stored in the list <i>gradeList</i>, which is&nbsp;</span><span style=\"line-height: 1.22;\">indexed from 1 to <i>n</i>.</span><div><br></div><blockquote>&nbsp;i \u2190 1<br>&nbsp;REPEAT n TIMES</blockquote><blockquote><span class=\"Apple-tab-span\" style=\"white-space:pre\">\t</span>&nbsp;{<br><span class=\"Apple-tab-span\" style=\"white-space:pre\">\t</span>&nbsp;<i>&lt;MISSING CODE&gt;</i><br><span class=\"Apple-tab-span\" style=\"white-space:pre\">\t</span>&nbsp;i \u2190 i + 1<br><span class=\"Apple-tab-span\" style=\"white-space:pre\">\t</span>&nbsp;}</blockquote><div><br></div><div>The teacher has the following procedures available.<br><br><div style=\"text-align: center;\"><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q30Table.PNG\" class=\"yui-img\" title=\"\" alt=\"\" style=\"line-height: 1.22;\"><br><div style=\"text-align: left;\"><br><div>Which of the following code segments can replace <i>&lt;MISSING CODE&gt;</i> so that the program&nbsp;<span style=\"line-height: 1.22;\">works as intended?</span></div><div><br></div><div>Select <u>two</u> answers.<br><br></div></div></div></div>", "choices": [{"text": "(A) gradeList[i] \u2190 min (gradeList[i] + 5, 100)", "score": 0.5, "feedback": ""}, {"text": "(B) gradeList[i] \u2190 max (gradeList[i] + 5, 100)", "score": -1.0, "feedback": ""}, {"text": "(C) gradeList[i] \u2190 gradeList[i] + 5\n\nIF (gradeList[i] > 100)\n\n{\n\ngradeList[i] \u2190 gradeList[i] - 5\n\n}", "score": -1.0, "feedback": ""}, {"text": "(D) gradeList[i] \u2190 gradeList[i] + 5\n\nIF (gradeList[i] > 100)\n\n{\n\ngradeList[i] \u2190 100\n\n}", "score": 0.5, "feedback": ""}], "type": 0, "permute": false}, {"description": "FirebaseDb vs TinyDb", "wrongfeedback": "", "question": "When should an app's data be stored in a <i><b>FirebaseDb</b></i> as opposed to a <i><b>TinyDb</b></i>?", "choices": [{"text": "a. When the data needs to persist between uses of the app.", "score": 0.0, "feedback": "Both FirebaseDB and TinyDb are able to persist data between different uses of the app.  So this is not the best answer."}, {"text": "b. When the data needs to be shared among different devices running the app.", "score": 1.0, "feedback": "Right.  FirebaseDb stores data on the Web and retrieves it over the Internet. So it can be shared among many devices.  TinyDb stores data on the device.  So it can't be shared among different devices. "}, {"text": "c. When you need to retrieve the data quickly. ", "score": 0.0, "feedback": "It is true that data stored on a TinyDb is retrieved instantaneously, which will always be faster than data retrieved asynchronously from a FirebaseDB. But we are talking about a difference of a few milliseconds, assuming the app has a reasonable Internet connection.  So this is not a main reason to choose between TinyDb and FirebaseDB."}, {"text": "d. When you need to store lists of data.", "score": 0.0, "feedback": "Both TinyDb and FirebaseDB can store lists of data.  So this is not a distinguishing feature. "}], "type": 0, "permute": false}, {"type": 0, "question": "Data (variables and/or databases)", "description": "CP1 - Data", "choices": [{"text": "Uses data appropriately and effectively", "score": 3.0, "feedback": ""}, {"text": "Makes appropriate use of data but with minor lapses", "score": 2.0, "feedback": ""}, {"text": "Fails to use variables and/or databases", "score": 1.0, "feedback": ""}, {"text": "Did not complete", "score": 0.0, "feedback": ""}]}, {"description": "Hardware abstraction layers", "wrongfeedback": "", "question": "Which of the following lists arranges hardware components from the lowest to the highest abstraction level? ", "choices": [{"text": "RAM chip, motherboard, logic gate, physical circuit ", "score": 0.0, "feedback": "Let me add new information to help you solve this; a physical circuit is a low-level component."}, {"text": "Physical circuit, motherboard, logic gate, RAM chip ", "score": 0.0, "feedback": "Let me add new information to help you solve this; a motherboard would contain RAM chips which would contain low-level logic gates."}, {"text": "Physical circuit, logic gate,  RAM chip, motherboard,", "score": 1.0, "feedback": "Yes, that is correct. "}, {"text": "RAM chip, logic gate, physical circuit, motherboard.", "score": 0.0, "feedback": "Let me add new information to help you solve this; a logic gate is made up of physical circuits. "}], "type": 0, "permute": false}, {"description": "Asynchronous Definition", "wrongfeedback": "", "question": "To say that the operation of requesting data from a FirebaseDB is <i><b>asynchronous</b></i> means ", "choices": [{"text": "that it can be completed immediately. ", "score": 0.0, "feedback": "OK, so you didn\u2019t get it right this time. Let\u2019s look at this as an opportunity to learn. Try reviewing this; synchronous means \"at the same time\".  So synchronous operations are performed instantaneously, whereas asynchronous operations are not.  Operations over the Internet are asynchronous."}, {"text": "that the request cannot be completed at the same time as it was made and may take an unpredictable amount of time. ", "score": 1.0, "feedback": "Right.  Synchronous means \"at the same time\".  So synchronous operations are performed instantaneously, whereas asynchronous operations are not.  Operations over the Internet are asynchronous."}, {"text": "that it must be performed on a clock.", "score": 0.0, "feedback": "OK, so you didn\u2019t get it right this time. Let\u2019s look at this as an opportunity to learn. Try reviewing this; synchronous means \"at the same time\".  So synchronous operations are performed instantaneously, whereas asynchronous operations are not.  Operations over the Internet are asynchronous."}, {"text": "that it cannot be performed on a clock.", "score": 0.0, "feedback": "OK, so you didn\u2019t get it right this time. Let\u2019s look at this as an opportunity to learn. Try reviewing this; synchronous means \"at the same time\".  So synchronous operations are performed instantaneously, whereas asynchronous operations are not.  Operations over the Internet are asynchronous."}], "type": 0, "permute": false}, {"description": "AP CS P Exam Prep Move Robot Loop", "wrongfeedback": "", "question": "The following question uses a robot in a grid of squares. The robot is represented as a triangle, which is initially in the bottom left square of the grid and facing right.<br><br><div style=\"text-align: center;\"><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q17SquareQuestion.PNG\" class=\"yui-img selected\" title=\"\" alt=\"\" style=\"line-height: 1.22;\"><span style=\"line-height: 1.22;\">&nbsp; &nbsp;<br><br></span></div>Consider the following code segment, which moves the robot in the grid.\n\n<br><br><div style=\"text-align: center;\"><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q17Code.PNG\" class=\"yui-img\" title=\"\" alt=\"\" style=\"line-height: 1.22;\"><br><br></div>Which of the following shows the location of the robot after running the code segment?\n", "choices": [{"text": "(A)&nbsp;<br><div style=\"text-align: left;\"><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q17A1.PNG\" class=\"yui-img\" title=\"\" alt=\"\" style=\"line-height: 1.22;\"></div>", "score": 1.0, "feedback": ""}, {"text": "(B)&nbsp;<br><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q17A2.PNG\" class=\"yui-img\" title=\"\" alt=\"\"><br>", "score": 0.0, "feedback": ""}, {"text": "(C) <br><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q17A3.PNG\" class=\"yui-img\" title=\"\" alt=\"\"><br>", "score": 0.0, "feedback": ""}, {"text": "(D) <br><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q17A4.PNG\" class=\"yui-img\" title=\"\" alt=\"\"><br>", "score": 0.0, "feedback": ""}], "type": 0, "permute": false}, {"description": "AP CS P Exam Prep Replacing Text Algorithm", "wrongfeedback": "", "question": "A programmer completes the user manual for a video game she has developed and realizes she has reversed the roles of goats and sheep throughout the text. Consider the programmer\u2019s goal of changing all occurrences of \u201cgoats\u201d to \u201csheep,\u201d and all occurrences of \u201csheep\u201d to \u201cgoats.\u201d The programmer will use the fact that the word \u201cfoxes\u201d does not appear anywhere in the original text.\n<br>\nWhich of the following algorithms can be used to accomplish the programmer\u2019s goal?", "choices": [{"text": "(A) First, change all occurrences of \u201cgoats\u201d to \u201csheep.\u201d\n<br>Then, change all occurrences of \u201csheep\u201d to \u201cgoats.\u201d", "score": 0.0, "feedback": ""}, {"text": "(B) First, change all occurrences of \u201cgoats\u201d to \u201csheep.\u201d\n<br>Then, change all occurrences of \u201csheep\u201d to \u201cgoats.\u201d\n<br>Last, change all occurrences of \u201cfoxes\u201d to \u201csheep.\u201d", "score": 0.0, "feedback": ""}, {"text": "(C) First, change all occurrences of \u201cgoats\u201d to \u201cfoxes.\u201d\n<br>Then, change all occurrences of \u201csheep\u201d to \u201cgoats.\u201d\n<br>Last, change all occurrences of \u201cfoxes\u201d to \u201csheep.\u201d", "score": 1.0, "feedback": "That's correct!"}, {"text": "(D) First, change all occurrences of \u201cgoats\u201d to \u201cfoxes.\u201d\n<br>Then, change all occurrences of \u201cfoxes\u201d to \u201csheep.\u201d\n<br>Last, change all occurrences of \u201csheep\u201d to \u201cgoats.\u201d", "score": 0.0, "feedback": ""}], "type": 0, "permute": false}, {"description": "Asymmetric definition", "wrongfeedback": "", "question": "An <i>asymmetric cipher</i>________________ ", "choices": [{"text": "is exemplified by RSA and Diffie-Hellman.", "score": 0.33, "feedback": "Right."}, {"text": "was first discovered by Euclid 5 B.C.", "score": -1.0, "feedback": "Let me add new information to help you solve this; the idea of an asymmetric cipher was first conceived by British cryptographer, James Ellis, in 1970.  But his work was classified. Diffie-Hellman independently came up with the idea in 1976."}, {"text": "Uses different keys for encryption and decryption.", "score": 0.33, "feedback": "Right. In RSA Bob would use Alice's <i>pubic key</i> is used to encrypt messages to her and Alice would use her <i>private key</i> to decrypt the message."}, {"text": "Can be used to solve the <i>key exchange problem</i>.", "score": 0.34, "feedback": "Yes. The Diffie-Hellman algorithm was the first algorithm to be used solve the key exchange problem."}], "type": 0, "permute": false}, {"description": "Data Info Knowledge Wisdom", "wrongfeedback": "", "question": "What is the appropriate classification for the following statement?<br>\n\"Over 80% of Africans own a cell phone.\"", "choices": [{"text": "Data", "score": 0.0, "feedback": "We\u2019re in the learning zone today. Mistakes are our friends!"}, {"text": "Information", "score": 1.0, "feedback": ""}, {"text": "Knowledge", "score": 0.0, "feedback": "We\u2019re in the learning zone today. Mistakes are our friends!"}, {"text": "Wisdom", "score": 0.0, "feedback": "We\u2019re in the learning zone today. Mistakes are our friends!"}], "type": 0, "permute": false}, {"description": "Component naming", "wrongfeedback": "", "question": "Which of the following is the best name for a button whose function is to clear another component?", "choices": [{"text": "Button1", "score": 0.0, "feedback": "Mistakes are welcome here! Try reviewing this; it is best to give buttons names that help you understand their function. "}, {"text": "Clear", "score": 0.0, "feedback": "Mistakes are welcome here! Try reviewing this; this choice tells us what is happening, but it doesn't tell us what is making something clear. Therefore a better option would also tell us that it was a button. "}, {"text": "ClearButton", "score": 1.0, "feedback": "Correct! "}, {"text": "ButtonA", "score": 0.0, "feedback": "Mistakes are welcome here! Try reviewing this; it is best to give buttons names that help you understand their function."}], "type": 0, "permute": false}, {"description": "Largest number in 4 bits", "wrongfeedback": "", "question": "What's the largest number that can be represented in 4 bits?  ", "choices": [{"text": "5", "score": 0.0, "feedback": "This will be a challenging concept to learn, but we can all reach this goal. The number 8 in binary is represented as 1000.  Additional numbers can be represented by turning some of the 0s into 1s.  For example, the number 9 would be represented as 1001. "}, {"text": "12", "score": 0.0, "feedback": "This will be a challenging concept to learn, but we can all reach this goal. The number 12 in binary is represented as 1100.  Additional numbers can be represented by turning some of the 0s into 1s.  For example, the number 13 would be represented as 1101."}, {"text": "15", "score": 1.0, "feedback": "Yes. The largest number that can be represented in 4 bits would be 1111, which is 1 + 2 + 4 + 8, which equals 15. "}, {"text": "16", "score": 0.0, "feedback": "This will be a challenging concept to learn, but we can all reach this goal. To represent 16 in binary, you would need 5 bits.  It's representation is 10000.  "}], "type": 0, "permute": false}, {"type": 0, "question": "Visual Artifact Explanation: Included a written summary to describe how the visual artifact created illustrates the benefit or harm of the innovation.", "description": "EPT - Artifact Explanation", "choices": [{"text": "Clear and well described", "score": 3.0, "feedback": ""}, {"text": "Adequately described, some problems", "score": 2.0, "feedback": ""}, {"text": "Poorly describe", "score": 1.0, "feedback": ""}, {"text": "Missing", "score": 0.0, "feedback": ""}]}, {"description": "Binary number overflow error", "wrongfeedback": "", "question": "An <i><b>overflow error</b></i> occurs when there aren't enough bits to represent a given number.  Which of following would cause an overflow error to occur. (Choose all that apply.)", "choices": [{"text": "Trying to represent 15 in 4 bits. ", "score": -1.0, "feedback": "This is challenging, but rewarding! This would not cause an overflow.  15 is represented as 1111 in 4 bits. "}, {"text": "Trying to represent 16 in 4 bits.", "score": 0.5, "feedback": "Yes.  The largest number that can be represented in 4 bits is 15, which is 1111.  To represent 16 you would need an additional bit, 1 0000."}, {"text": "Trying to represent 31 in 5 bits. ", "score": -1.0, "feedback": "This is challenging, but rewarding! This would not cause an overflow.  31 is represented as 1 1111 in 5 bits. "}, {"text": "Trying to represent 32 in 5 bits ", "score": 0.5, "feedback": "Yes.  The largest number that can be represented in 5 bits is 31, which is 1 1111.  To represent 32 you would need a 6th bit,  10 0000."}], "type": 0, "permute": false}, {"description": "TinyWebDb vs TinyDb", "wrongfeedback": "", "question": "When should you use a <i><b>TinyWebDb</b></i> instead of a <i><b>TinyDb</b></i>?", "choices": [{"text": "a. To store a person's name in an app to be retrieved later.", "score": 0.0, "feedback": "If it were easy, you wouldn\u2019t be learning anything!"}, {"text": "b. To allow users of a mobile app to share data among themselves.", "score": 1.0, "feedback": "Right. TinyWebDb is useful for sharing data among several players of a multiplayer game. The decision doesn't really depend on the amount or type of data and storing the person's name can be done in a TinyDb"}, {"text": "c. To store a large amount of data.", "score": 0.0, "feedback": "If it were easy, you wouldn\u2019t be learning anything!"}, {"text": "d. To store a list of data.", "score": 0.0, "feedback": "If it were easy, you wouldn\u2019t be learning anything!"}], "type": 0, "permute": false}, {"description": "How to break a Caesar cipher", "wrongfeedback": "", "question": "One technique that can be used to break a Caesar cipher is called _________________________. ", "choices": [{"text": "decryption", "score": 0.0, "feedback": "This is challenging, but rewarding! Decryption is actually the process of converting cipher text back into plain text. For example: khoor ----> hello"}, {"text": "frequency analysis", "score": 1.0, "feedback": "That's right! Frequency analysis is the technique whereby you count the letters in the secret message. In English, the letter with the highest frequency is 'e'. By counting letter frequencies you can identify the shift that was used to encrypt the message. That is why the Caesar cipher is not a secure cipher."}, {"text": "encryption", "score": 0.0, "feedback": "This is challenging, but rewarding! Encryption is actually the process of converting plain text into cipher text. For example: hello ---->khoor"}, {"text": "cryptography analysis", "score": 0.0, "feedback": "This is challenging, but rewarding!"}], "type": 0, "permute": false}, {"description": "IPv4", "wrongfeedback": "", "question": "An IPv4 address ____________________. \n<br>\nChoose all that apply.", "choices": [{"text": "is a string of bits that provides a computer's Internet address. ", "score": 0.33, "feedback": ""}, {"text": "is used to route data through the Internet ", "score": 0.33, "feedback": ""}, {"text": "consists of 32 bits ", "score": 0.34, "feedback": ""}, {"text": "consists of 64 bits ", "score": -1.0, "feedback": "This is challenging, but rewarding! IPv4 addresses consist of 32 bits. "}], "type": 0, "permute": false}, {"description": "AP CS P EXAM PREP Collaborative Process", "wrongfeedback": "", "question": "A team of students is creating a video to advertise an upcoming school activity. While working\non the video, the students plan to meet every day to review their progress and plan next steps.\n\n\n<br><br>Which of the following is a FALSE statement about the described collaborative process?", "choices": [{"text": "All students must participate in all steps in the process of creating the video.", "score": 1.0, "feedback": "This answer is correct."}, {"text": "Flaws in the video are likely to be detected during the process, since team members will be reviewing the video regularly.", "score": 0.0, "feedback": ""}, {"text": "In order to collaborate effectively, the students may need a method to resolve differences of opinion.", "score": 0.0, "feedback": ""}, {"text": "The process facilitates the inclusion of multiple team members\u2019 perspectives.", "score": 0.0, "feedback": ""}], "type": 0, "permute": false}, {"description": "TinyDB Component", "wrongfeedback": "", "question": "Which of the following statements are true for a TinyDb component. <br>\nChoose all that apply. ", "choices": [{"text": "a. Data stored in a TinyDb can easily be shared with other devices and users.", "score": -1.0, "feedback": "This is challenging, but rewarding!"}, {"text": "b. Data stored in a TinyDb will persist between different uses of the app.", "score": 1.0, "feedback": "That's right! Data stored in a TinyDb persist between uses of the app, but these data are stored on the device (not in the cloud) and cannot be shared with other devices or users. A TinyDb can store strings or numbers or lists."}, {"text": "c. Data stored in a TinyDb disappears when you quit the app. ", "score": -1.0, "feedback": "This is challenging, but rewarding!"}, {"text": "d. Data stored in a TinyDb is stored in the cloud. ", "score": -1.0, "feedback": "This is challenging, but rewarding!"}, {"text": "e. Only strings (text) can be stored in a TinyDb. ", "score": -1.0, "feedback": "This is challenging, but rewarding!"}], "type": 0, "permute": false}, {"description": "Client Server Model", "wrongfeedback": "", "question": "<b>True or False: </b>Cloud computing is made possible by the Internet and the World Wide Web and employs a computation model known as client-server computing. ", "choices": [{"text": "True", "score": 1.0, "feedback": ""}, {"text": "False", "score": 0.0, "feedback": "Don\u2019t worry, it\u2019s hard! Let\u2019s go back and try it again."}], "type": 0, "permute": false}, {"type": 0, "question": "Writing Organization - The report is well organized in a way that is easy to follow.", "description": "EPT - Organization", "choices": [{"text": "Well organized, easy to follow", "score": 3.0, "feedback": ""}, {"text": "Adequately organized", "score": 2.0, "feedback": ""}, {"text": "Poorly organized", "score": 1.0, "feedback": ""}, {"text": "Did not complete a report", "score": 0.0, "feedback": ""}]}, {"wrongfeedback": "You're not quite there, yet. Give it another try; with a little more work you can figure this out! ", "description": "Caesar cipher encryption", "hint": "Try writing the alphabet out, A to Z, and then writing the shifted letters below it.", "graders": [{"matcher": "case_insensitive", "score": "1.0", "response": "doskdehw", "feedback": "That's right! With a Caesar shift of 3, the 'alphabet' is encrypted into 'doskdehw'."}], "question": "Encrypt the word <i><b>alphabet</b></i> using a Caesar cipher with a \nshift of 3. Type your answer into the Textbox. ", "type": 1}];