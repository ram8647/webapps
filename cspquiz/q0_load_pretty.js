var quiz_data = [
    {
        "description": "Caesar cipher encryption",
        "feedback": "That's right! With a Caesar shift of 3, the word 'alphabet' is encrypted into 'doskdehw'.",
        "response": "doskdehw",
        "score": "1.0",
        "hint": "In Caesar cipher encryption with shift 3, each letter is replaced with a letter 3 letters down in the alphabet, so a becomes c.",
        "heading": "Cryptography",
        "question": "Encrypt the word <i><b>alphabet</b></i> using a Caesar cipher with a \nshift of 3. Type your answer into the Textbox. ",
        "cspcode":"6.3.1K",
        "source":"mcsp-7",
        "type": "Fi",
        "wrongfeedback": "Sorry, that's not right. In Caesar cipher encryption with shift 3, each letter is replaced with a letter 3 letters down in the alphabet, so a becomes c. "
    },
    {
        "choices": [
            {
                "feedback": "Sorry, that is not correct. An OR gate would be TRUE (or ON) when either A or B is TRUE (or ON).",
                "score": 0.0,
                "text": "the gate will be TRUE (or ON) when either A or B is TRUE (or ON)."
            },
            {
                "feedback": "",
                "score": 1.0,
                "text": "the gate will be TRUE (or ON) when both A and B are TRUE (or ON)."
            },
            {
                "feedback": "Sorry, that is not correct. For the AND gate to be TRUE (or ON) B would also have to be TRUE (or ON).",
                "score": 0.0,
                "text": "the gate will be TRUE (or ON) when A is TRUE (or ON)."
            },
            {
                "feedback": "Sorry, that is not correct. For the AND gate to be TRUE (or ON) A would also have to be TRUE (or ON).",
                "score": 0.0,
                "text": "the gate will be TRUE (or ON) when B is TRUE (or ON)."
            }
        ],
        "description": "AND gate",
        "cspcode": "2.2.3F",
        "question": "An AND gate is an electronic component that takes two inputs, A and B, such that ____________",
        "heading": "Hardware: Logic Gates",
        "type": "Mc",
        "source":"mcsp-2",
        "wrongfeedback": ""
    },
    {
        "choices": [
            {
                "feedback": "Yes, the correct answer is 0. This would be an example of an <b>overflow error</b>. But it would not crash the machine.",
                "score": 1.0,
                "text": "0"
            },
            {
                "feedback": "That is not correct. You would get 255 if you added 0 to 255. ",
                "score": 0.0,
                "text": "255"
            },
            {
                "feedback": "That is not correct. The value 256 cannot be represented at all in 8 bits.  In 8 bits you can represent 256 different values, ranging from 00000000 to 11111111,  decimal 0 to decimal 255. ",
                "score": 0.0,
                "text": "256"
            },
            {
                "feedback": "That is not completely correct. Adding 1 to 255 in 8 bits causes an overflow error, but it would not crash the machine. ",
                "score": 0.0,
                "text": "No value.  The machine would crash."
            }
        ],
        "description": "Binary Overflow",
        "cspcode": "2.2.1B",
        "question": "Suppose a computer uses 8-bit bytes to represent its data. An 8-bit byte can store values ranging from 0 to 255 -- i.e., 00000000 to 11111111.  What do you suppose would happen if you added 1 to a byte storing the value 11111111?\n<br><br>",
        "hint": "<br><hr>To help answer this question, you might want to use the Mobile CSP <a target=\"_blank\" href=\"http://appinventor.cs.trincoll.edu/csp/webapps/computer/gen0.html\">4-bit simulator</a> to write a little machine language program to see what happens. By default, the 4-bit computer adds the values in locations 1000 and 1001 and prints the sum. So here is how you would set up the machine to add 11111111 and 00000001:\n<br>\n\n<ul>\n  <li>Put the value 11111111 (decimal 255) in memory location 1000.</li>\n  <li>Put the value 00000001 (decimal 1) in memory location 1001.</li>\n  <li>Run the program and observe the output.</li>\n</ul>What decimal value do you get when you add binary 1 to binary 11111111?<hr>",
        "heading": "Binary Data",
        "type": "Mc",
        "source":"mcsp-2",
        "wrongfeedback": ""
    },
    {
        "choices": [
            {
                "feedback": "Answer A is correct -- if the student's original grade (gradeList[i]) is 97, this code would assign 100 as the new grade.",
                "score": 0.5,
                "text": "(A) <pre>gradeList[i] \u2190 min (gradeList[i] + 5, 100)</pre>"
            },
            {
                "feedback": "Sorry answer B is not correct. For example, if the student's original grade (gradeList[i]) is 92, this code would assign 100 as the new grade instead of 92. Give this another try.",
                "score": -1.0,
                "text": "(B) <pre>gradeList[i] \u2190 max (gradeList[i] + 5, 100)</pre>"
            },
            {
                "feedback": "Sorry answer C is not correct. For example, if the student's original grade (gradeList[i]) is 97, this code would assign 97 as the new grade instead of 100. Give this another try.",
                "score": -1.0,
                "text": "(C) <pre>gradeList[i] \u2190 gradeList[i] + 5\nIF (gradeList[i] > 100) \n {\n\tgradeList[i] \u2190 gradeList[i] - 5 \n }</pre>"
            },
            {
                "feedback": "Answer D is correct -- if the student's original grade (gradeList[i]) is 97, this code would assign 100 as the new grade.",
                "score": 0.5,
                "text": "(D) <pre>gradeList[i] \u2190 gradeList[i] + 5\nIF (gradeList[i] > 100) \n { \n\tgradeList[i] \u2190 100 \n }</pre>"
            }
        ],
        "description": "AP CS P Exam Prep Grade Procedures",
        "cspcode": "4.4.1E",
        "question": "A teacher uses the following program to adjust student grades on an assignment by adding&nbsp;<span style=\"line-height: 1.22;\">5 points to each student\u2019s original grade. However, if adding 5 points to a student\u2019s original </span><span style=\"line-height: 1.22;\">grade causes the grade to exceed 100 points, the student will receive the maximum possible&nbsp;</span><span style=\"line-height: 1.22;\">score of 100 points. The students\u2019 original grades are stored in the list <i>gradeList</i>, which is&nbsp;</span><span style=\"line-height: 1.22;\">indexed from 1 to <i>n</i>.</span><blockquote>&nbsp;i \u2190 1<br>&nbsp;REPEAT n TIMES</blockquote><blockquote><span class=\"Apple-tab-span\" style=\"white-space:pre\">\t</span>&nbsp;{<br><span class=\"Apple-tab-span\" style=\"white-space:pre\">\t</span>&nbsp;<i>&lt;MISSING CODE&gt;</i><br><span class=\"Apple-tab-span\" style=\"white-space:pre\">\t</span>&nbsp;i \u2190 i + 1<br><span class=\"Apple-tab-span\" style=\"white-space:pre\">\t</span>&nbsp;}</blockquote><div>The teacher has the following procedures available.<br><br><div style=\"text-align: left;\"><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q30Table.PNG\" class=\"yui-img\" title=\"\" alt=\"\" width=100% style=\"line-height: 1.22;\"><div style=\"text-align: left;\"><br><div>Which of the following code segments can replace <i>&lt;MISSING CODE&gt;</i> so that the program&nbsp;<span style=\"line-height: 1.22;\">works as intended?</span></div></div></div></div>",
        "heading": "College Board Sample Question: Algorithms",
        "type": "Ma",
        "source":"cb-x",
        "wrongfeedback": ""
    },
    {
        "choices": [
            {
                "feedback": "Both an online database and a database on the device itself are able to persist data between different uses of the app.  So this is not the best answer.",
                "score": 0.0,
                "text": "When the data needs to persist between uses of the app."
            },
            {
                "feedback": "Right.  The online database stores data on the Web and retrieves it over the Internet. So it can be shared among many devices.  A database on the device stores data on the device.  So it can't be shared among different devices. ",
                "score": 1.0,
                "text": "When the data needs to be shared among different devices running the app."
            },
            {
                "feedback": "It is true that data stored on the device is retrieved instantaneously, which will always be faster than data retrieved asynchronously from an online database. But we are talking about a difference of a few milliseconds, assuming the app has a reasonable Internet connection.  So this is not a main reason to choose between an online and on-device database.",
                "score": 0.0,
                "text": "When you need to retrieve the data quickly. "
            },
            {
                "feedback": "Both types of database, online and on-device, can store lists of data.  So this is not a distinguishing feature. ",
                "score": 0.0,
                "text": "When you need to store lists of data."
            }
        ],
        "description": "Online or on-device data",
        "cspcode": "3.3.1",
        "question": "When should an app's data be stored in an online database, such as Google's Firebase, as opposed to a database on the mobile device itself?",
        "heading": "Using Data",
        "type": "Mc",
        "source":"mcsp-6",
        "wrongfeedback": ""
    },
    {
        "choices": [
            {
                "feedback": "Remember, a physical circuit is a low-level component.",
                "score": 0.0,
                "text": "RAM chip, motherboard, logic gate, physical circuit "
            },
            {
                "feedback": "Remember, a motherboard would contain RAM chips which would contain low-level logic gates.",
                "score": 0.0,
                "text": "Physical circuit, motherboard, logic gate, RAM chip "
            },
            {
                "feedback": "Yes, that is correct. ",
                "score": 1.0,
                "text": "Physical circuit, logic gate,  RAM chip, motherboard,"
            },
            {
                "feedback": "Remember, a logic gate is made up of physical circuits. ",
                "score": 0.0,
                "text": "RAM chip, logic gate, physical circuit, motherboard."
            }
        ],
        "description": "Hardware abstraction layers",
        "cspcode": "2.2.3I",
        "question": "Which of the following lists arranges hardware components from the lowest to the highest abstraction level? ",
        "heading": "Hardware Abstractions",
        "type": "Mc",
        "source":"mcsp-2",
        "wrongfeedback": ""
    },
    {
        "choices": [
            {
                "feedback": "Remember, synchronous means \"at the same time\".  So synchronous operations are performed instantaneously, whereas asynchronous operations are not.  Operations over the Internet are asynchronous.",
                "score": 0.0,
                "text": "that it can be completed immediately. "
            },
            {
                "feedback": "Right.  Synchronous means \"at the same time\".  So synchronous operations are performed instantaneously, whereas asynchronous operations are not.  Operations over the Internet are asynchronous.",
                "score": 1.0,
                "text": "that the request cannot be completed at the same time as it was made and may take an unpredictable amount of time. "
            },
            {
                "feedback": "Remember, synchronous means \"at the same time\".  So synchronous operations are performed instantaneously, whereas asynchronous operations are not.  Operations over the Internet are asynchronous.",
                "score": 0.0,
                "text": "that it must be performed on a clock."
            },
            {
                "feedback": "Remember, synchronous means \"at the same time\".  So synchronous operations are performed instantaneously, whereas asynchronous operations are not.  Operations over the Internet are asynchronous.",
                "score": 0.0,
                "text": "that it cannot be performed on a clock."
            }
        ],
        "description": "Asynchronous Definition",
        "cspcode": "5.2.1H",
        "question": "To say that the operation of requesting data from an online database, such as Google's Firebase, is <i><b>asynchronous</b></i> means __________________.",
        "heading": "Asynchronous Processing",
        "type": "Mc",
        "source":"mcsp-6",
        "wrongfeedback": "",
        "hint": "Synchronous means \"at the same time\"."
    },
    {
        "choices": [
            {
                "feedback": "Correct! There are two loops in this algorithm.  In the inner loop the robot forward <i>n</i> times.  And in the other loop the value of <i>n</i> is decreased by one each time. So the robot will move forward 3 times then turn left, then move forward 2 times and turn left, then move forward 1 time.",
                "score": 1.0,
                "text": "<img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q17A1.PNG\" class=\"yui-img\" title=\"\" alt=\"\" style=\"line-height: 1.22;\">"
            },
            {
                "feedback": "Not quite. Try that again!  There are two loops in this algorithm.  In the inner loop the robot forward <i>n</i> times.  And in the other loop the value of <i>n</i> is decreased by one each time. So the robot will move forward 3 times then turn left, then move forward 2 times and turn left, then move forward 1 time.",
                "score": 0.0,
                "text": "<img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q17A2.PNG\" class=\"yui-img\" title=\"\" alt=\"\"><br>"
            },
            {
                "feedback": "Not quite. Try that again! There are two loops in this algorithm.  In the inner loop the robot forward <i>n</i> times.  And in the other loop the value of <i>n</i> is decreased by one each time. So the robot will move forward 3 times then turn left, then move forward 2 times and turn left, then move forward 1 time.",
                "score": 0.0,
                "text": "<img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q17A3.PNG\" class=\"yui-img\" title=\"\" alt=\"\"><br>"
            },
            {
                "feedback": "Not quite.  Try that again!. There are two loops in this algorithm.  In the inner loop the robot forward <i>n</i> times.  And in the other loop the value of <i>n</i> is decreased by one each time. So the robot will move forward 3 times then turn left, then move forward 2 times and turn left, then move forward 1 time.",
                "score": 0.0,
                "text": "<img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q17A4.PNG\" class=\"yui-img\" title=\"\" alt=\"\"><br>"
            }
        ],
        "description": "AP CS P Exam Prep Move Robot Loop",
        "cspcode": "4.1.1D",
        "question": "The following question uses a robot in a grid of squares. The robot is represented as a triangle, which is initially in the bottom left square of the grid and facing right.<br><br><div style=\"text-align: left;\"><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q17SquareQuestion.PNG\" class=\"yui-img selected\" title=\"\" alt=\"\" style=\"line-height: 1.22;\"><span style=\"line-height: 1.22;\">&nbsp; &nbsp;<br><br></span></div>Consider the following code segment, which moves the robot in the grid.\n\n<br><br><div style=\"text-align: left;\"><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q17Code.PNG\" class=\"yui-img\" title=\"\" alt=\"\" style=\"line-height: 1.22;\"><br><br></div>Which of the following shows the location of the robot after running the code segment?\n",
        "heading": "College Board Sample Question: Algorithms",
        "hint": "To answer this type of question, it sometimes help to get a piece of paper and pencil and trace the robot's movements.",
        "type": "Mc",
        "source":"cb-x",
        "wrongfeedback": ""
    },
    {
        "choices": [
            {
                "feedback": "This is not a correct choice.  This algorithm will result in all occurrences of both words being changed to \"goats\".",
                "score": 0.0,
                "text": "<div style='border:1px solid black'>First, change all occurrences of \u201cgoats\u201d to \u201csheep.\u201d<br>Then, change all occurrences of \u201csheep\u201d to \u201cgoats.\u201d</div>"
            },
            {
                "feedback": "This is not a correct choice.  This algorithm will result in all occurrences of both words being changed to \"goats\".",
                "score": 0.0,
                "text": "<div style='border:1px solid black'>First, change all occurrences of \u201cgoats\u201d to \u201csheep.\u201d <br>Then, change all occurrences of \u201csheep\u201d to \u201cgoats.\u201d<br>Last, change all occurrences of \u201cfoxes\u201d to \u201csheep.\u201d</div>"
            },
            {
                "feedback": "That's correct! Very good!",
                "score": 1.0,
                "text": "<div style='border:1px solid black'>First, change all occurrences of \u201cgoats\u201d to \u201cfoxes.\u201d<br>Then, change all occurrences of \u201csheep\u201d to \u201cgoats.\u201d<br>Last, change all occurrences of \u201cfoxes\u201d to \u201csheep.\u201d</div>"
            },
            {
                "feedback": "This is not a correct choice.  This algorithm will result in all occurrences of both words being changed to \"goats\".",
                "score": 0.0,
                "text": "<div style='border:1px solid black'>First, change all occurrences of \u201cgoats\u201d to \u201cfoxes.\u201d<br>Then, change all occurrences of \u201cfoxes\u201d to \u201csheep.\u201d<br>Last, change all occurrences of \u201csheep\u201d to \u201cgoats.\u201d</div>"
            }
        ],
        "description": "AP CS P Exam Prep Replacing Text Algorithm",
        "cspcode": "4.1.1G",
        "question": "A programmer completes the user manual for a video game she has developed and realizes she has reversed the roles of goats and sheep throughout the text. Consider the programmer\u2019s goal of changing all occurrences of \u201cgoats\u201d to \u201csheep,\u201d and all occurrences of \u201csheep\u201d to \u201cgoats.\u201d The programmer will use the fact that the word \u201cfoxes\u201d does not appear anywhere in the original text.\n<br>\nWhich of the following algorithms can be used to accomplish the programmer\u2019s goal?",
        "heading": "College Board Sample Question: Algorithms",
        "hint": "To help see the correct algorithm, try each algorithm on a list containing multiple occurrences of \"sheep\" and \"goats\".", 
        "type": "Mc",
        "source":"cb-x",
        "wrongfeedback": ""
    },
    {
        "choices": [
            {
                "feedback": "This is not correct. In the Caesar cipher the same key is used in both encryption and decrption.  So it is a <i>symmetric</i> cipher.",
                "score": 0,
                "text": "is exemplified by the Caesar Cipher."
            },
            {
                "feedback": "This is not correct. The concept of an asymmetric cipher is very recent, first conceived by British cryptographer, James Ellis, in 1970.  But his work was classified. Diffie-Hellman independently came up with the idea in 1976.",
                "score": 0,
                "text": "was first discovered by Euclid 5 B.C."
            },
            {
                "feedback": "This is not the best answer because it could also be true of symmetric ciphers. An asymmetric cipher is one that uses a different key for encryption and decryption.",
                "score": 0,
                "text": "uses a different key for every transaction."
            },
            {
                "feedback": "Correct. An asymmetric cipher uses different keys for encryption and decryption, which allows for one of the keys to remain private while the other is public. The Diffie-Hellman cipher was the first asymmetric cipher to solve the key exchange problem. RSA is widely used today to solve the key exchange problem for Internet transations.",
                "score": 1,
                "text": "Can be used to solve the <i>key exchange problem</i>."
            }
        ],
        "description": "Asymmetric definition",
        "cspcode": "6.3.1L",
        "question": "An <i>asymmetric cipher</i>________________ ",
        "heading": "Cryptography",
        "hint": "Remember, a <i>symmetric</i> cipher is one that uses the same key of encryption and decryption.",
        "type": "Mc",
        "source":"mcsp-7",
        "wrongfeedback": ""
    },
    {
        "choices": [
            {
                "feedback": "Remember, it is best to give buttons names that help you understand their function. ",
                "score": 0.0,
                "text": "Button1"
            },
            {
                "feedback": "Not quite. Tis choice tells us what is happening, but it doesn't tell us what is making something clear. Therefore a better option would also tell us that it was a button. ",
                "score": 0.0,
                "text": "Clear"
            },
            {
                "feedback": "Correct! That is a nice descriptive name for the button's function. And more generally, it's a good idea to make your code as readable and descriptive as possible.",
                "score": 1.0,
                "text": "ClearButton"
            },
            {
                "feedback": "Remember, it is best to give buttons names that help you understand their function.",
                "score": 0.0,
                "text": "ButtonA"
            }
        ],
        "description": "Coding Best Practice",
        "cspcode": "5.1.2F",
        "question": "Suppose you are creating an app that uses several different buttons on the User Interface. Which of the following is the best name for a button whose function is to clear another component?",
        "heading": "Programming Best Practices",
        "hint": "Remember, one of the goals in writing good code is to make it as descriptive and readable as possible.",
        "type": "Mc",
        "source":"mcsp-2",
        "wrongfeedback": ""
    },
    {
        "choices": [
            {
                "feedback": "This may be a challenging problem. Here's something to think about. The number 8 in binary is represented as 1000.  Additional numbers can be represented by turning some of the 0s into 1s.  For example, the number 9 would be represented as 1001. ",
                "score": 0.0,
                "text": "5"
            },
            {
                "feedback": "This may be a challenging problem. Here's something to think about. The number 12 in binary is represented as 1100.  Additional numbers can be represented by turning some of the 0s into 1s.  For example, the number 13 would be represented as 1101.",
                "score": 0.0,
                "text": "12"
            },
            {
                "feedback": "Yes. The largest number that can be represented in 4 bits would be 1111, which is 1 + 2 + 4 + 8, which equals 15. ",
                "score": 1.0,
                "text": "15"
            },
            {
                "feedback": "This may be a challenging problem. Here's something to think about. To represent 16 in binary, you would need 5 bits.  It's representation is 10000.  ",
                "score": 0.0,
                "text": "16"
            }
        ],
        "description": "Largest number in 4 bits",
        "cspcode": "2.2.1A",
        "question": "What is the largest decimal value that can be represented in 4 bits?  ",
        "heading": "Binary Numbers",
        "type": "Mc",
        "source":"mcsp-2",
        "wrongfeedback": ""
    },
    {
        "choices": [
            {
                "feedback": "This is challenging, but rewarding! This would not cause an overflow.  15 is represented as 1111 in 4 bits. ",
                "score": -1.0,
                "text": "Trying to represent 15 in 4 bits. "
            },
            {
                "feedback": "This is challenging, but rewarding! This would not cause an overflow.  Representing 60 in 6 bits would give 11 1100.",
                "score": -1.0,
                "text": "Trying to represent 60 in 6 bits."
            },
            {
                "feedback": "This is challenging, but rewarding! This would not cause an overflow.  31 is represented as 1 1111 in 5 bits. ",
                "score": -1.0,
                "text": "Trying to represent 31 in 5 bits. "
            },
            {
                "feedback": "Yes.  The largest number that can be represented in 5 bits is 31, which is 1 1111.  To represent 32 you would need a 6th bit,  10 0000.",
                "score": 1.0,
                "text": "Trying to represent 32 in 5 bits "
            }
        ],
        "description": "Binary number overflow error",
        "cspcode": "2.2.1B",
        "question": "An <i><b>overflow error</b></i> occurs when there aren't enough bits to represent a given number.  Which of following would cause an overflow error to occur.",
        "heading": "Binary Overflow",
        "type": "Mc",
        "source":"mcsp-2",
        "wrongfeedback": ""
    },
    {
        "choices": [
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything!",
                "score": 0.0,
                "text": "That data needs to persist between different uses of the app."
            },
            {
                "feedback": "Right. To share data among different devices it is necessary to store it an online location that is accessible to the devices. The decision doesn't really depend on the amount or type of data and storing the person's name can be done in a TinyDb",
                "score": 1.0,
                "text": "The data needs to be shared among users running the app on different devices."
            },
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything!",
                "score": 0.0,
                "text": "The data is very large, more that 10 Mb"
            },
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything!",
                "score": 0.0,
                "text": "The data are organized into a list."
            }
        ],
        "description": "Online or on-devices data",
        "cspcode": "3.3.1A",
        "question": "Suppose you are creating an app that uses a certain piece of data and you are trying to decide whether to store the data on the device itself or in an online database. For which of the following would storing the data online be the correct design choice?",
        "heading": "Using Data",
        "type": "Mc",
        "source":"mcsp-6",
        "wrongfeedback": ""
    },
    {
        "choices": [
            {
                "feedback": "This is challenging, but rewarding! Decryption is actually the process of converting cipher text back into plain text. For example: khoor ----> hello",
                "score": 0.0,
                "text": "decryption"
            },
            {
                "feedback": "That's right! Frequency analysis is the technique whereby you count the letters in the secret message. In English, the letter with the highest frequency is 'e'. By counting letter frequencies you can identify the shift that was used to encrypt the message. That is why the Caesar cipher is not a secure cipher.",
                "score": 1.0,
                "text": "frequency analysis"
            },
            {
                "feedback": "This is challenging, but rewarding! Encryption is actually the process of converting plain text into cipher text. For example: hello ---->khoor",
                "score": 0.0,
                "text": "encryption"
            },
            {
                "feedback": "This is challenging, but rewarding!",
                "score": 0.0,
                "text": "cryptography analysis"
            }
        ],
        "description": "How to break a Caesar cipher",
        "cspcode": "6.3.1I",
        "question": "One technique that can be used to break a Caesar cipher is called _________________________. ",
        "heading": "Cryptography",
        "type": "Mc",
        "source":"mcsp-7",
        "wrongfeedback": ""
    },
    {
        "choices": [
            {
                "feedback": "This is not correct. An IPv4 address is one type of Internet address, the other being IPv6.",
                "score": 0,
                "text": "An IPv4 address is a string of bits that provides a computer's Internet address. "
            },
            {
                "feedback": "This is not correct. Internet addresses are used to route packets through the Internet.",
                "score": 0,
                "text": "An IPv4 address is used to route packets of data through the Internet "
            },
            {
                "feedback": "This is not correct. IPv4 address do indeed consist of 32 bits.",
                "score": 0,
                "text": "An IPv4 address consists of 32 bits "
            },
            {
                "feedback": "This is challenging, but rewarding! IPv4 addresses consist of 32 bits. ",
                "score": 1.0,
                "text": "An IPv4 address consists of 64 bits "
            }
        ],
        "description": "IPv4",
        "cspcode": "6.1.1H",
        "question": "Which of the following is <b>not true</b> about IPv4 addresses?",
        "heading": "Internet",
        "type": "Mc",
        "source":"mcsp-7",
        "wrongfeedback": ""
    },
    {
        "choices": [
            {
                "feedback": "This answer is correct. Collaboration doesn't necessarily imply that all parties be involved in every activity.",
                "score": 1.0,
                "text": "All students must participate in all steps in the process of creating the video."
            },
            {
                "feedback": "The more eyes the better at finding mistakes and bugs.  So this is part of the collaborative process.",
                "score": 0.0,
                "text": "Flaws in the video are likely to be detected during the process, since team members will be reviewing the video regularly."
            },
            {
                "feedback": "Collaborations often involve disagreements.  Resolving them is part of the process",
                "score": 0.0,
                "text": "In order to collaborate effectively, the students may need a method to resolve differences of opinion."
            },
            {
                "feedback": "One of the advantages of a collaborative process is the ability to involve multiple perspectives.",
                "score": 0.0,
                "text": "The process facilitates the inclusion of multiple team members\u2019 perspectives."
            }
        ],
        "description": "AP CS P EXAM PREP Collaborative Process",
        "cspcode": "1.2.4A",
        "question": "A team of students is creating a video to advertise an upcoming school activity. While working\non the video, the students plan to meet every day to review their progress and plan next steps.  Which of the following is a FALSE statement about the described collaborative process?",
        "heading": "College Board Sample Question: Collaboration",
        "type": "Mc",
        "source":"cb-x",
        "wrongfeedback": ""
    },
    {
        "choices": [
            {
                "feedback": "",
                "score": 1.0,
                "text": "True"
            },
            {
                "feedback": "Don\u2019t worry, it\u2019s hard! Let\u2019s go back and try it again.",
                "score": 0.0,
                "text": "False"
            }
        ],
        "description": "Client Server Model",
        "cspcode": "6.2.2H",
        "question": "True or False.  Cloud computing is made possible by the Internet and the World Wide Web and employs a computation model known as client-server computing. ",
        "heading": "Cloud Computing",
        "type": "Mc",
        "source":"mcsp-2",
        "wrongfeedback": ""
    }
];
