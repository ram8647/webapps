var quiz_data = [
    {
        "choices": [
            {
                "feedback": "Let me add new information to help you solve this question. There are 26 possible 1-letter words, 26 &times; 26 2 letter words, 26 &times; 26 &times; 26 3-letter words, and so on.  So there would be 26<sup>N</sup> N-letter words.  This is <i>exponential</i>. ", 
                "score": 0.0, 
                "text": "Tractable"
            }, 
            {
                "feedback": "Yes. If the string has <i>N</i> letters 'a' to 'z', then there are 26<sup>N</sup> possible strings, which is <i>exponential</i>.  This is similar to trying to crack a long password made up of lowercase letters. In this case, each letter in the password can be one of 26 possible letters.   If you made such a password long enough (e.g., more than 15 letters), it would be fairly secure from brute force attack. ", 
                "score": 1.0, 
                "text": "Intractable"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Tractable or Intractable", 
        "permute": false, 
        "question": "Tractable or intractable?   For any length string of letters using any combination of the letters 'a' through 'z', write down all possible strings.", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "cspcode": "0.0.0X", 
        "description": "Dotsize value", 
        "graders": [
            {
                "feedback": "<img src=\"assets/img/dotsizesequence.png\" class=\"yui-img\"><br>This sequence of blocks performs the following actions on <i style=\"font-weight: bold;\">dotsize.</i>&nbsp;When the variable is created (initialized) its initial value is 5. &nbsp;Its value is then set to 10 by the second block in the sequence. &nbsp;Its value is then set to 20 (10 + 10) by the third block in the sequence. &nbsp;Its value is then set to 18 (20 - 2) by the last block in the sequence.&nbsp;", 
                "matcher": "numeric", 
                "response": "18", 
                "score": "1.0"
            }
        ], 
        "hint": "", 
        "question": "What value will the variable<i style=\"font-weight: bold;\">&nbsp;dotsize</i>&nbsp;have after the following sequence of blocks are executed?<br><img src=\"assets/img/dotsizesequence.png\" class=\"yui-img\"><br>", 
        "source": "mcsp-", 
        "type": 1, 
        "wrongfeedback": ""
    }, 
    {
        "cspcode": "0.0.0X", 
        "description": "List Picker requires a list of elements", 
        "graders": [
            {
                "feedback": "Good. That's right! This statement assumes that global destinations is a <b>list</b> of strings.  When the List Picker is clicked, the list will be presented to the user, who may then\nselect one of the items on the list.", 
                "matcher": "case_insensitive", 
                "response": "list", 
                "score": "1.0"
            }
        ], 
        "hint": "Try thinking about the name of the App Inventor component that the variable's values are being\nassigned to.", 
        "question": "In order for this block to work, the global destinations variable must be what type of data (number, string, list, etc.)? Type your answer into the text box. Spelling counts. \n<br>\n<img src=\"assets/img/listpickerelements.png\">", 
        "source": "mcsp-", 
        "type": 1, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "", 
                "score": 3.0, 
                "text": "Works exactly as intended"
            }, 
            {
                "feedback": "", 
                "score": 2.0, 
                "text": "Works as intended, but with some small bugs"
            }, 
            {
                "feedback": "", 
                "score": 1.0, 
                "text": "Doesn't accomplish intended tasks"
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "Did not complete"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "CP1 - Does it work", 
        "question": "Does the app work?", 
        "source": "mcsp-", 
        "type": 0
    }, 
    {
        "choices": [
            {
                "feedback": "This is part of the correct answer.", 
                "score": 0.5, 
                "text": "Symmetric"
            }, 
            {
                "feedback": "This is challenging, but rewarding!", 
                "score": -1.0, 
                "text": "Alphabetic"
            }, 
            {
                "feedback": "This is challenging, but rewarding! Transposition ciphers rearrange the letters in the plaintext message. These ciphers do not do that.", 
                "score": -1.0, 
                "text": "Transposition"
            }, 
            {
                "feedback": "Yes this is part of the correct answer.", 
                "score": 0.5, 
                "text": "Substitution"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Substitution cipher examples", 
        "permute": false, 
        "question": "<i>Caesar</i> cipher, <i>simple substitution</i> cipher, and <i>Vigener</i> cipher are all examples of __________ ciphers.", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "Let me add new information to help you solve this question. When you arrange items or objects you are <i>sorting</i> through them. Therefore, a search algorithm is not appropriate for this problem.", 
                "score": -1.0, 
                "text": "Arranging a deck of cards from the lowest to the highest value cards."
            }, 
            {
                "feedback": "True. A phone book is arranged <i> in order </i> by last name. If you know the person's full name this includes their last name and you can then perform a binary search to find their phone number.", 
                "score": 0.5, 
                "text": "Looking up a phone number in the phone book given the person's full (unique) name."
            }, 
            {
                "feedback": "True. A dictionary is arranged <i> in order </i> alphabetically. Thus, a binary search can be used to find any word in a dictionary.", 
                "score": 0.5, 
                "text": "Looking up a word in a dictionary. "
            }, 
            {
                "feedback": "Let me add new information to help you solve this question. A phone book is arranged in order, but it is in order <i> by last name <i>. In order to solve this problem using a binary search, the phone book would need to be in order by phone number.", 
                "score": -1.0, 
                "text": "Looking up a person's name in the phone book given the person's phone number. "
            }, 
            {
                "feedback": "Let me add new information to help you solve this. A binary search is only appropriate when the collection you are searching is arranged <i>in order </i>.", 
                "score": -1.0, 
                "text": "Finding the smallest number in a list of numbers arranged randomly. "
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Binary Search", 
        "permute": false, 
        "question": "For which of the problems would the <i><b>binary search</b></i> algorithm be useful? \n<br>\nChoose all that apply.", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "We\u2019re in the learning zone today. Mistakes are our friends!\n", 
                "score": 0.0, 
                "text": "how fast your computer can connect to the Internet "
            }, 
            {
                "feedback": "We\u2019re in the learning zone today. Mistakes are our friends!\n", 
                "score": 0.0, 
                "text": "the amount of time it takes to send data over the Internet "
            }, 
            {
                "feedback": "We\u2019re in the learning zone today. Mistakes are our friends!\n", 
                "score": 0.0, 
                "text": "the average length of e-mails that you can send on a daily basis"
            }, 
            {
                "feedback": "That's right. Bandwidth measures how much data you can send in a given amount of time.", 
                "score": 1.0, 
                "text": "the amount of data that can be sent in a fixed amount of time"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Bandwidth Definition", 
        "permute": false, 
        "question": "Bandwidth measures ___________________. \n", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(A) Data compression is only useful for files being transmitted over the Internet."
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(B) No matter what compression technique is used, once a data file is compressed, it cannot be restored to its original state."
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(C) Sending a compressed version of a file ensures that the contents of the file cannot be intercepted by an unauthorized user."
            }, 
            {
                "feedback": "That's correct!", 
                "score": 1.0, 
                "text": "(D) There are trade-offs involved in choosing a compression technique for storing and transmitting data."
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "AP CS P Exam Prep Data Compression", 
        "permute": false, 
        "question": "Which of the following is a true statement about data compression?", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "This is challenging, but rewarding! The <i>one-time pad</i> has been proved mathematically to be an unbreakable cipher.  The properties of an unbreakable cipher is that is has a completely <i>random key</i> that is as long as its message and that is used only once.", 
                "score": 0.0, 
                "text": "True"
            }, 
            {
                "feedback": "RIght. The <i>one-time pad</i> has been proved mathematically to be an unbreakable cipher.  The properties of an unbreakable cipher is that is has a completely <i>random key</i> that is as long as its message and that is used only once.", 
                "score": 1.0, 
                "text": "False"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "7 Unbreakable cipher T/F", 
        "question": "True or false. There is no such thing as an unbreakable cipher.  No matter what the cipher, analysts will always find a way to break it.", 
        "source": "mcsp-", 
        "type": 0
    }, 
    {
        "choices": [
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything! Unfortunately the app would probably crash because you did not use a valid index.", 
                "score": 0.0, 
                "text": "It would give you the last item in the list. \n"
            }, 
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything! Unfortunately the app would probably crash because you did not use a valid index.", 
                "score": 0.0, 
                "text": "It would give you the first item in the list. "
            }, 
            {
                "feedback": "That's right! When you are referring to an item in a list using an index, you must make sure to use a valid index. For this list the valid indexes are 1 through 8. Using any other index is sometimes called an Index out of bounds error.", 
                "score": 1.0, 
                "text": "It would crash because there is no item with that index. "
            }, 
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything! Since there is no index of 10, App Inventor wouldn't ignore your request. Instead it would unfortunately probably crash the app because you did not use a valid index.", 
                "score": 0.0, 
                "text": "It would ignore your request. "
            }, 
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything! Unfortunately the app would probably crash because you did not use a valid index.", 
                "score": 0.0, 
                "text": "It would give you a random item from the list. "
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Item at index 10", 
        "permute": false, 
        "question": "What do you suppose would happen if your app asked App Inventor for the item at index 10 in the list shown here? <br><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/makealist8.png\" class=\"yui-img\">", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(A) Algorithm A always calculates the correct average, but Algorithm B does not."
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(B) Algorithm B always calculates the correct average, but Algorithm A does not."
            }, 
            {
                "feedback": "", 
                "score": 1.0, 
                "text": "(C) Both Algorithm A and Algorithm B always calculate the correct average."
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(D) Neither Algorithm A nor Algorithm B calculates the correct average."
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "AP CS P Exam Prep Average Height Algorithm", 
        "permute": false, 
        "question": "There are 32 students standing in a classroom. Two different algorithms are given for finding\nthe average height of the students.\n<br><br><b>Algorithm A</b>\n<br>Step 1: All students stand.\n<br>Step 2: A randomly selected student writes his or her height on a card and is seated.\n<br>Step 3: A randomly selected standing student adds his or her height to the value on the card,\nrecords the new value on the card, and is seated. The previous value on the card is erased.\n<br>Step 4: Repeat step 3 until no students remain standing.\n<br>Step 5: The sum on the card is divided by 32. The result is given to the teacher.\n<br><br><b>Algorithm B</b>\n<br>Step 1: All students stand.\n<br>Step 2: Each student is given a card. Each student writes his or her height on the card.<br>Step 3: Standing students form random pairs at the same time. Each pair adds the numbers\nwritten on their cards and writes the result on one student\u2019s card; the other student is\nseated. The previous value on the card is erased.\n<br>Step 4: Repeat step 3 until one student remains standing.\n<br>Step 5: The sum on the last student\u2019s card is divided by 32. The result is given to the teacher.\n<br><br>Which of the following statements is true?", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "Yes, displaying a location on a Google map can be done with Activity Starter.", 
                "score": 0.25, 
                "text": "Start Google maps and display a location. "
            }, 
            {
                "feedback": "Yes, displaying directions from point A to point B can be done with Activity Starter", 
                "score": 0.25, 
                "text": "Start Google maps and display directions. "
            }, 
            {
                "feedback": "Yes, if it's on your device, you can start the Hello Purr app.", 
                "score": 0.25, 
                "text": "Start PaintPot (assuming it's on your device)."
            }, 
            {
                "feedback": "Yes, if it's on your device you can start the Barcode Scanner app, or any other app contained on your device&nbsp;<span style=\"font-size: 13.3333339691162px; line-height: 17.6222229003906px;\">whether built-in or installed from the Play store,&nbsp;</span>although it does take a deeper understanding to do. See <a href=\"http://ram8647-appinventor.appspot.com/learn/reference/other/activitystarter.html\">here</a> for more information.", 
                "score": 0.25, 
                "text": "Start the Barcode Scanner (assuming it's on your device). "
            }, 
            {
                "feedback": "This is challenging, but rewarding! You wouldn't use an Activity Starter to access TinyDb.  For that you would use the TinyDb component. ", 
                "score": -1.0, 
                "text": "Access the TinyDb on the device. "
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Activity Starter Tasks", 
        "permute": false, 
        "question": "Which of the following tasks can be started by an ActivityStarter. <br>\nChoose all that apply. ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(A) When the application is only shared with students at the same school"
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(B) When the application is shared on a peer-to-peer network"
            }, 
            {
                "feedback": "", 
                "score": 1.0, 
                "text": "(C) When the student gets permission from the copyright owner of the application"
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(D) When the student makes a copy of the application for another student to use only once"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "AP CS P Exam Prep Copyright", 
        "permute": false, 
        "question": "A student purchases a single-user license of a copyrighted application and wants other students to be able to use it at the same time. Under which of the following conditions is it considered acceptable for the student to share the application?<br><br>", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "cspcode": "0.0.0X", 
        "description": "Bubble sort passes to sort 13 cards", 
        "graders": [
            {
                "feedback": "Right.  For a deck of 13 cards, this version of bubble sorts makes 13 passes through the deck.   On the last pass, there was only 1 card left in the unsorted deck, but we can still consider that a pass. There are different versions of bubble sort, some of which would say that N-1 passes are made through the deck to sort N cards.", 
                "matcher": "case_insensitive", 
                "response": "13", 
                "score": "1.0"
            }
        ], 
        "hint": "A <i>pass</i> is when the sorter goes through the deck. Each time through the deck is one pass.  Notice in this demo that the unsorted part of the deck is getting smaller and smaller on each pass. ", 
        "question": "In the <i>bubble sort</i> demo, 13 cards are being sorted.  How many passes does this version of the algorithm require to sort the cards?", 
        "source": "mcsp-", 
        "type": 1, 
        "wrongfeedback": "For a deck of 13 cards, this version of bubble sorts makes 13 passes through the deck if we count placing the last card on the sorted pile as a pass. There are different versions of bubble sort, some of which would say that N-1 passes are made through the deck to sort N cards."
    }, 
    {
        "choices": [
            {
                "feedback": "This is challenging, but rewarding! An algorithm is indeed a sequence of precise instructions. So this is not the correct answer.", 
                "score": 0.0, 
                "text": "An algorithm is a sequence of precise instructions. "
            }, 
            {
                "feedback": "Yes, by process of elimation, this is the correct answer.  As we will learn more fully later in the course, it has been proved that there are problems for which it is impossible to write a correct algorithm.  Such problems are called <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Undecidable_problem\">undecidable problems</a>.  A surpisingly simple example is the <i>halting problem</i>,  which can be stated as:  Given a description of an arbitrary computer program and a finite set of inputs to the program, determine whether the program will eventually stop or run forever.", 
                "score": 1.0, 
                "text": "Algorithms can be written to solve every problem. "
            }, 
            {
                "feedback": "This is challenging, but rewarding! Algorithms do proceed step-by-step.  So this is not the correct answer.", 
                "score": 0.0, 
                "text": "Algorithms are step-by-step procedures."
            }, 
            {
                "feedback": "This is challenging, but rewarding! Algorithms are indeed constructed by combinations of three control structures,  sequence, selection, and repetition.  So this is not the correct answer. ", 
                "score": 0.0, 
                "text": "Algorithms consist of a combination of sequences, selections, and/or repetitions. "
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "What an algorithm is not", 
        "permute": false, 
        "question": "Which of the following is <b><i>not true</i></b> about algorithms: ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "", 
                "score": 0.25, 
                "text": "A button that appears on the screen. "
            }, 
            {
                "feedback": "", 
                "score": 0.25, 
                "text": "An audible click that happens when the user taps the button. "
            }, 
            {
                "feedback": "", 
                "score": 0.25, 
                "text": " An error message that appears when something goes wrong."
            }, 
            {
                "feedback": "Let me add new information to help you solve this information. An app does store information in component properties and variables, but this data is hidden and not part of the UI (unless you display the information explicitly).", 
                "score": -1.0, 
                "text": "The app's memory usage. "
            }, 
            {
                "feedback": "", 
                "score": 0.25, 
                "text": "The color of the app's background screen."
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "User interface elements", 
        "permute": false, 
        "question": "Which of the following elements would be considered part of the user interface (UI) for an app? \n<br>\nChoose all that apply. ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "True. Bubble sort is a comparison-based sorting algorithm, meaning that it is based on comparing pairs of values.", 
                "score": 0.5, 
                "text": "A comparison-based algorithm. "
            }, 
            {
                "feedback": "Of course it\u2019s tough \u2013 school is here to makes our brains stronger! A bubble sort can also be used to sort items other than numbers, including cards and money.", 
                "score": -1.0, 
                "text": "Useful only for sorting numbers. "
            }, 
            {
                "feedback": "True. Bubble sort is a quadratic algorithm, which means that the amount of time it takes to sort a data set grows like a quadratic (x2) curve as the number of items to be sorted grows. ", 
                "score": 0.5, 
                "text": "An N<sup>2</sup> algorithm. "
            }, 
            {
                "feedback": "Of course it\u2019s tough \u2013 school is here to makes our brains stronger! This isn't always true. Depending on the number of items being sorted, the bucket sort may actually be faster.", 
                "score": -1.0, 
                "text": "More efficient than bucket sort. "
            }, 
            {
                "feedback": "Of course it\u2019s tough \u2013 school is here to makes our brains stronger! For sorting large data sets, a bucket sort is faster and therefore more widely used for sorting large data sets.", 
                "score": -1.0, 
                "text": "Widely used to sort large data sets. "
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Bubble Sort Characteristics", 
        "permute": false, 
        "question": "Which of the following characteristics is true of <i><b>bubble sort</b></i>? \n<br>\nChoose all that apply. ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "Don\u2019t worry, it\u2019s hard! Let\u2019s go back and try it again. Notice that there are two forwards followed by a turn followed by one forward and so on.  This algorithm draws a rectangle.", 
                "score": 0.0, 
                "text": "A square "
            }, 
            {
                "feedback": "Don\u2019t worry, it\u2019s hard! Let\u2019s go back and try it again. This algorithm draws a rectangle.", 
                "score": 0.0, 
                "text": "A right angle "
            }, 
            {
                "feedback": "That's right. This algorithm would draw a rectangle whose length is twice as long as its width. ", 
                "score": 1.0, 
                "text": "A rectangle"
            }, 
            {
                "feedback": "Don\u2019t worry, it\u2019s hard! Let\u2019s go back and try it again. This algorithm draws a rectangle.", 
                "score": 0.0, 
                "text": "A circle "
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Algorithm to draw a rectangle", 
        "permute": false, 
        "question": "Assuming that forward tells the Android to move forward by 10 pixels and turn tells it to turn right by 90 degrees, what shape would be drawn by this algorithm?\n      forward\n      forward\n      turn\n      forward\n      turn\n      forward\n      forward\n      turn\n      forward\n      turn", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "Here are some strategies to figure this out. The programmer should not rebuild their entire app just because there is a bug in it. They should take their time to examine the code and form a hypothesis about what the bug may be. Then they should design and implement an experiment, and then debug and retest their app.", 
                "score": 0.0, 
                "text": "Rebuild the app and then retest the app "
            }, 
            {
                "feedback": "That's right! When debugging a program, a programmer should form a hypothesis about what the bug might be, then design and implement an experiment to test their hypothesis. If their hypothesis was correct, then the programmer should debug the app and retest. If their hypothesis was wrong, the programmer should form a new hypothesis", 
                "score": 1.0, 
                "text": "Form a hypothesis about what might be wrong, design an experiment to test their hypothesis, perform the experiment, debug, and then retest the app. \n"
            }, 
            {
                "feedback": "Here are some strategies to figure this out. He/she should form a hypothesis about what could possible be wrong with the code, however, just forming a hypothesis and then retesting the app is not enough.", 
                "score": 0.0, 
                "text": "Form a hypothesis and then retest the app. "
            }, 
            {
                "feedback": "Here are some strategies to figure this out. It is not recommended that he/she start changing code without first thinking about, and forming an hypothesis, about what could possible be wrong. The programmer should take their time, form a hypothesis, design and implement an experiment, and then debug and retest theirapp.", 
                "score": 0.0, 
                "text": "Immediately start changing code and retest the app. "
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Debugging a Program", 
        "permute": false, 
        "question": "Your classmate discovers that their MoleMash app has a bug in it. What should he/she do to debug their app? ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(A) II only"
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(B) I and III only"
            }, 
            {
                "feedback": "", 
                "score": 1.0, 
                "text": "(C) II and III only"
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(D) I, II, and III"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "AP CS P Exam Prep Benefits of The Internet", 
        "permute": false, 
        "question": "Which of the following are true statements regarding the benefits of using the Internet to\n\ncommunicate?\n\n<br><br><span class=\"Apple-tab-span\" style=\"white-space:pre\">\t</span>I. The Internet provides equal access to information across all socioeconomic groups&nbsp;<span style=\"line-height: 14.4182px;\">globally.<br></span><br><span class=\"Apple-tab-span\" style=\"white-space:pre\">\t</span>II. The Internet allows information to be disseminated to many people very quickly.\n\n<br><br><span class=\"Apple-tab-span\" style=\"white-space:pre\">\t</span>III. The Internet fosters new ways to communicate and collaborate.<br><br>", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "", 
                "score": 3.0, 
                "text": "Interface is appropriate and effective/attractive"
            }, 
            {
                "feedback": "", 
                "score": 2.0, 
                "text": "Interface is appropriate but has minor problems"
            }, 
            {
                "feedback": "", 
                "score": 1.0, 
                "text": "Interface is inappropriate for this app"
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "Did not complete"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "CP1 - User Interface", 
        "question": "User Interface", 
        "source": "mcsp-", 
        "type": 0
    }, 
    {
        "choices": [
            {
                "feedback": "This will be a challenging concept to learn, but we can all reach this goal. A Button component only generates events for buttons, such as a click, not events for shaking the entire phone.", 
                "score": 0.0, 
                "text": "Button"
            }, 
            {
                "feedback": "That's right! The Accelerometer component, in the Sensors drawer, generates the Shaking event and can be used to detect when the device is shaken. The Accelerometer also generates the AccelerationChanged event, which can be used more generally to detect how fast the device is being moved.", 
                "score": 1.0, 
                "text": "Accelerometer Sensor"
            }, 
            {
                "feedback": "This will be a challenging concept to learn, but we can all reach this goal. GPS is not a component. The component used for GPS and location changes is called Location Sensor.", 
                "score": 0.0, 
                "text": "GPS"
            }, 
            {
                "feedback": "This will be a challenging concept to learn, but we can all reach this goal. The Orientation Sensor does generate events for the movement of the phone, but those are for movements in specific directions, not shaking.", 
                "score": 0.0, 
                "text": "Orientation Sensor"
            }, 
            {
                "feedback": "This will be a challenging concept to learn, but we can all reach this goal. The Screen is not a component and does not generate events for when you shake the entire phone.", 
                "score": 0.0, 
                "text": "Screen"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Shaking with Accelerometer", 
        "permute": false, 
        "question": "The <i>Magic8Ball</i> app handles only one event, the <i>Shaking</i> event. Which component generates that event? ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "Try asking a classmate for advice\u2014s/he may be able to explain/suggest some ideas or recommend some strategies.", 
                "score": 0.0, 
                "text": "<table>\n<tr><td>1</td><td>0</td><td>0</td><td>1</td></tr>\n<tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>\n<tr><td>0</td><td>0</td><td>1</td><td>1</td></tr>\n<tr><td>0</td><td>1</td><td>0</td><td>0</td></tr>\n</table>\n"
            }, 
            {
                "feedback": "Try asking a classmate for advice\u2014s/he may be able to explain/suggest some ideas or recommend some strategies.", 
                "score": 0.0, 
                "text": "<table>\n<tr><td>1</td><td>0</td><td>0</td><td>1</td></tr>\n<tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>\n<tr><td>0</td><td>0</td><td>1</td><td>1</td></tr>\n<tr><td>0</td><td>1</td><td>1</td><td>1</td></tr>\n</table>\n"
            }, 
            {
                "feedback": "Try asking a classmate for advice\u2014s/he may be able to explain/suggest some ideas or recommend some strategies.", 
                "score": 0.0, 
                "text": "<table>\n<tr><td>1</td><td>0</td><td>0</td><td>1</td></tr>\n<tr><td>1</td><td>1</td><td>1</td><td>0</td></tr>\n<tr><td>0</td><td>0</td><td>1</td><td>1</td></tr>\n<tr><td>0</td><td>1</td><td>0</td><td>1</td></tr>\n</table>\n"
            }, 
            {
                "feedback": "", 
                "score": 1.0, 
                "text": "<table>\n<tr><td>1</td><td>0</td><td>0</td><td>1</td></tr>\n<tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>\n<tr><td>0</td><td>0</td><td>1</td><td>1</td></tr>\n<tr><td>0</td><td>1</td><td>0</td><td>1</td></tr>\n</table>\n"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Error Detection Trick", 
        "permute": false, 
        "question": "<table>\n<tr>\n<td>\n<b>Complete the trick.</b>\n<br>For this 3 x 3 table of bits, which of the choices below would be the correct 4 x 4 \ntable for being able to detect when bit is flipped.\n</td>\n<td>\n<table>\n<tr><td>1</td><td>0</td><td>0</td></tr>\n<tr><td>1</td><td>1</td><td>1</td></tr>\n<tr><td>0</td><td>0</td><td>1</td></tr>\n</table>\n</td>\n</tr>\n</table>\n<br>\n", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "That's right! For searching an unordered list the sequential search algorithm is the better choice.  ", 
                "score": 1.0, 
                "text": "Sequential search"
            }, 
            {
                "feedback": "This is challenging, but rewarding! A binary search is only appropriate when the collection you are searching is ordered.", 
                "score": 0.0, 
                "text": "Binary search"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Choosing a search algorithm", 
        "permute": false, 
        "question": "For searching an <i><b>unordered list</b></i>, which search algorithm is the better choice? ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything!", 
                "score": 0.0, 
                "text": "A picture that shows up on the app's user interface"
            }, 
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything!", 
                "score": 0.0, 
                "text": "The person the app is about."
            }, 
            {
                "feedback": "", 
                "score": 1.0, 
                "text": "The picture that appears on the device when you install the app."
            }, 
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything!", 
                "score": 0.0, 
                "text": "The title that appears above the screen"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "App Icon", 
        "permute": false, 
        "question": "What is the app's icon?", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "OK, so you didn\u2019t get it right this time. Let\u2019s look at this as an opportunity to learn. Try reviewing this information. High-level languages are easier for humans to understand.", 
                "score": 0.0, 
                "text": "low-level languages are easier for humans to understand"
            }, 
            {
                "feedback": "OK, so you didn\u2019t get it right this time. Let\u2019s look at this as an opportunity to learn. Try reviewing this information. This statement would be true of low-level machine languages.  High level languages are designed to make it easy of humans to program the computer. ", 
                "score": 0.0, 
                "text": "high-level languages provide abstractions that closely match the machine's architecture."
            }, 
            {
                "feedback": "Correct.  For example, the blocks in our App Inventor apps have to be translated into machine language statements that can be understood by the CPU.  ", 
                "score": 1.0, 
                "text": "high-level languages must be translated by software programs into low-level machine languages before then can be run on a computer"
            }, 
            {
                "feedback": "OK, so you didn\u2019t get it right this time. Let\u2019s look at this as an opportunity to learn. Try reviewing this information. Computers can only understand their own low-level machine language.  Each type of CPU, such as Intel or Motorola, has its own machine language.", 
                "score": 0.0, 
                "text": "low-level languages cannot be understood by computers. "
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "High vs Low language", 
        "permute": false, 
        "question": "The main difference between <i>low-level</i> and <i>high-level</i> programming languages is ______. ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "", 
                "score": 1.0, 
                "text": "A set of conditional blocks consisting of events that might or might not occur"
            }, 
            {
                "feedback": "Of course it\u2019s tough \u2013 school is here to makes our brains stronger!", 
                "score": 0.0, 
                "text": "A set of events, a set of conditions, and a set of operations"
            }, 
            {
                "feedback": "Of course it\u2019s tough \u2013 school is here to makes our brains stronger!", 
                "score": 0.0, 
                "text": "A set of event handlers where each event handler consists of an event and a sequence operations, some of which are only executed under certain conditions."
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Extended event handler definition", 
        "permute": false, 
        "question": "Which best describes an app's behavior:", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "Try asking a classmate for advice\u2014s/he may be able to explain/suggest some ideas or recommend some strategies.", 
                "score": 0.0, 
                "text": "[apple, banana, lemon, tomato, orange, squash, papaya, pumpkin] "
            }, 
            {
                "feedback": "Try asking a classmate for advice\u2014s/he may be able to explain/suggest some ideas or recommend some strategies.", 
                "score": 0.0, 
                "text": "[apple, banana, lemon, squash, tomato, orange, papaya, pumpkin] "
            }, 
            {
                "feedback": "Try asking a classmate for advice\u2014s/he may be able to explain/suggest some ideas or recommend some strategies.", 
                "score": 0.0, 
                "text": "[apple, banana, lemon, orange, papaya, pumpkin, tomato, squash] "
            }, 
            {
                "feedback": "That's right! The two largest values, squash and tomato, would 'bubble up' to the right of the list after two passes. ", 
                "score": 1.0, 
                "text": "[apple, banana, lemon, orange, papaya, pumpkin, squash, tomato] "
            }, 
            {
                "feedback": "Try asking a classmate for advice\u2014s/he may be able to explain/suggest some ideas or recommend some strategies.", 
                "score": 0.0, 
                "text": "[apple, banana, lemon, orange, papaya, squash, tomato, pumpkin] "
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Bubble Sort Word List 2 Passes", 
        "permute": false, 
        "question": "Suppose you are sorting the following list of words <i><b>in alphabetical order using bubble sort</b></i>: [apple, banana, lemon, tomato, orange, squash, papaya, pumpkin]. Which of the following gives the correct order of the list after <i>two</i> passes through the list? ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "A computational artifact is any object created by a human that uses computation in some way.  Mobile apps surely count as such.", 
                "score": 0.25, 
                "text": "A mobile app"
            }, 
            {
                "feedback": "A computational artifact is any object created by a human that uses computation in some way. Computer software is used to create a <i>mash-up</i>, a digital recording that fuses together two tracks of music.", 
                "score": 0.25, 
                "text": "A digital recording that mixes together two separate tracks of music."
            }, 
            {
                "feedback": "A computational artifact is any object created by a human that uses computation in some way.   A spread sheet is an example of an electronic document, created and manipulated using computer software. ", 
                "score": 0.25, 
                "text": "A spread sheet created with Microsoft excel"
            }, 
            {
                "feedback": "A computational artifact is any object created by a human that uses computation in some way.  Mobile apps surely count as such.  A Google sites portfolio is a web site that one uses software to create. ", 
                "score": 0.25, 
                "text": "A Google sites portfolio"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Computational Artifact Examples", 
        "permute": false, 
        "question": "Which of the following would be considered a <i>computational artifact</i>?   \n<br>\nChoose all that apply.", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "Try asking a classmate for advice\u2014s/he may be able to explain/suggest some ideas or recommend some strategies.", 
                "score": 0.0, 
                "text": "True"
            }, 
            {
                "feedback": "That's correct! In order to use an ImageSprite component, you must have a Canvas component to put it on.", 
                "score": 1.0, 
                "text": "False"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "ImageSprite requires a Canvas", 
        "permute": false, 
        "question": "True or False: You can drag and drop the ImageSprite Component from Animation tab directly onto the screen? ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "cspcode": "0.0.0X", 
        "description": "PRNG Next 3 Numbers", 
        "graders": [
            {
                "feedback": "Good job.  Now you see how we can use a simple mathematical formula to generate a sequence of numbers.  But does the sequence look random enough?", 
                "matcher": "regex", 
                "response": " /21\\s*,\\s*43\\s*,\\s*87\\s*/", 
                "score": "1.0"
            }
        ], 
        "hint": "You already know from the previous exercise that if we start with 10, the next number will be  10 * 2 + 1 = 21.  So the next number is 21.  <br><br>Now plug 21 into the formula as&nbsp;<span style=\"text-align: center; font-size: 15px; font-family: Arial; font-style: italic; vertical-align: baseline; white-space: pre-wrap;\">X</span><span style=\"text-align: center; font-size: 10px; font-family: Arial; font-style: italic; vertical-align: sub; white-space: pre-wrap;\">i </span>and calculate&nbsp;<span style=\"text-align: center; font-size: 15px; font-family: Arial; font-style: italic; vertical-align: baseline; white-space: pre-wrap;\">X</span><span style=\"text-align: center; font-size: 10px; font-family: Arial; font-style: italic; vertical-align: sub; white-space: pre-wrap;\">i+1</span>&nbsp;. &nbsp;And so on.", 
        "question": "Suppose your PRNG uses the following formula:<br><br><span id=\"docs-internal-guid-4aba59a5-b0d6-0acd-bc53-d89eb6012a9b\"><p dir=\"ltr\" style=\"line-height: 1; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"><span style=\"font-size: 15px; font-family: Arial; font-style: italic; vertical-align: baseline; white-space: pre-wrap;\">X</span><span style=\"font-size: 10px; font-family: Arial; font-style: italic; vertical-align: sub; white-space: pre-wrap;\">i+1</span><span style=\"font-size: 15px; font-family: Arial; font-style: italic; vertical-align: baseline; white-space: pre-wrap;\"> = X</span><span style=\"font-size: 10px; font-family: Arial; font-style: italic; vertical-align: sub; white-space: pre-wrap;\">i</span><span style=\"font-size: 15px; font-family: Arial; font-style: italic; vertical-align: baseline; white-space: pre-wrap;\"> * 2 + 1\n\n</span></p><div class=\"yui-wk-div\"><span class=\"yui-tag-span yui-tag\" tag=\"span\" style=\"font-size: 12px;\">And suppose that&nbsp;</span><span style=\"text-align: center; font-size: 15px; font-family: Arial; font-style: italic; vertical-align: baseline; white-space: pre-wrap;\">X</span><span style=\"text-align: center; font-size: 10px; font-family: Arial; font-style: italic; vertical-align: sub; white-space: pre-wrap;\">1 </span><span style=\"font-size: 12px; line-height: 11.711999893188477px;\">is 10. &nbsp;What are the <b>next three numbers</b> that the formula would generate? &nbsp;&nbsp;Type your answers into the text box, separating the numbers by a single comma.</span></div></span>", 
        "source": "mcsp-", 
        "type": 1, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "", 
                "score": 0.33, 
                "text": "creating maps"
            }, 
            {
                "feedback": "", 
                "score": 0.33, 
                "text": "filtering data"
            }, 
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything!", 
                "score": -1.0, 
                "text": "translating data"
            }, 
            {
                "feedback": "", 
                "score": 0.34, 
                "text": "customizing data tables"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Uses of fusion tables", 
        "permute": false, 
        "question": "A Fusion Table can be used for __________________. \n<br>\nChoose all that apply.", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything! When you arrange a collection you are <i>sorting</i>. Therefore, a search algorithm cannot be used to solve this problem.", 
                "score": -1.0, 
                "text": "Arranging a deck of cards from the lowest to the highest value cards. "
            }, 
            {
                "feedback": "True. A sequential search can be used to look up someone's phone number in the phone book. However, a sequential search would not be the most efficient search algorithm to use. Since the phone book is arranged in order by last name, you could solve this problem more efficiently using a binary search.", 
                "score": 0.25, 
                "text": "Looking up a phone number in the phone book given the person's full (unique) name."
            }, 
            {
                "feedback": "True. A sequential search can be used to look up a word in the dictionary. However, a sequential search would not be the most efficient search algorithm to use. Since a dictionary is in alphabetical order, you could solve this problem more efficiently using a binary search.", 
                "score": 0.25, 
                "text": "Looking up a word in a dictionary. "
            }, 
            {
                "feedback": "True. A phone book is arranged in order by last name, not by phone number. Therefore, you would need to start at one end of the phone book and check each phone number individually, in order, until you find the phone number you were given and then you can find the last name associated with the phone number.", 
                "score": 0.25, 
                "text": "Looking up a person's name in the phone book given the person's phone number. "
            }, 
            {
                "feedback": "True. A sequential search can be used to guess a secret number between 1 and 100. However, a sequential search would not be the most efficient search algorithm to use. Since the numbers 1 to 100 are ordered numerically, you could solve this problem more efficiently using a binary search.", 
                "score": 0.25, 
                "text": "Guessing a secret number between 1 and 100. "
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Sequential Search", 
        "permute": false, 
        "question": "For which of the problems could the <b><i>sequential search</i></b> algorithm be used? \n<br>\nChoose all that apply. ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "Let me add new information to help you solve this. <i>A memory chip</i> is a piece of hardware that contains electronic circuits that store information.", 
                "score": 0.0, 
                "text": "Memory chip"
            }, 
            {
                "feedback": "That's correct.  An operating system is an example of software, not hardware.", 
                "score": 1.0, 
                "text": "WIndows Operating System"
            }, 
            {
                "feedback": "Let me add new information to help you solve this. A computer's <i>motherboard </i>is a device that contains all of the computer's main hardware components, such as its main memory (RAM) and its central processing unit (CPU).", 
                "score": 0.0, 
                "text": "Motherboard"
            }, 
            {
                "feedback": "Let me add new information to help you solve this. An <i>integrated circuit </i>is a hardware device that contains many millions of electronic elements such as transistors and gates. ICs are used for storing and processing information.&nbsp;", 
                "score": 0.0, 
                "text": "Integrated circuit"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Not an example of hardware", 
        "permute": false, 
        "question": "Which of the following is <u>not</u> an example of <i>hardware</i>? \n", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "Right.  Hypertext documents are those that follow the HypterText Transfer Protocol (HTTP).", 
                "score": 0.33, 
                "text": "is a system of interlinked hypertext documents "
            }, 
            {
                "feedback": "Yes, the HyperText Transfer Protocol (HTTP) controls the WWW. It was first proposed by Tim Berners-Lee.", 
                "score": 0.33, 
                "text": "uses the HTTP protocol "
            }, 
            {
                "feedback": "Let me add new information to help you solve this question. The WWW is not maintained by any one company.  Its content is contributed by its billions of\nusers throughout the world.", 
                "score": -1.0, 
                "text": " is maintained by Google and Facebook "
            }, 
            {
                "feedback": "Right.  Tim Berners-Lee is credited with inventing the WWW and making it a free and open resource.", 
                "score": 0.34, 
                "text": "was invented by Tim Berners-Lee "
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Definition of The WWW", 
        "permute": false, 
        "question": "The World Wide Web (WWW) _______________.   \n<br>\nChoose all that apply. ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything!", 
                "score": 0.0, 
                "text": "Docs"
            }, 
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything!", 
                "score": 0.0, 
                "text": "Presentation"
            }, 
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything!", 
                "score": 0.0, 
                "text": "Spreadsheets"
            }, 
            {
                "feedback": "", 
                "score": 1.0, 
                "text": "Fusion tables"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Fusion tables", 
        "permute": false, 
        "question": "Google __________________ is a cloud application that can be used to process and visualize Big Data. ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "Mistakes are welcome here! Try reviewing this. 10 is a number.  It is a value not a variable.", 
                "score": -1.0, 
                "text": "10"
            }, 
            {
                "feedback": "Yes, <i>paintBrush</i>&nbsp;is an abstract symbol for some particular value -- although we don't know what value it is referring to here.", 
                "score": 0.5, 
                "text": "paintBrush"
            }, 
            {
                "feedback": "Mistakes are welcome here! Try reviewing this. \"hello\" is a text value.  It is not a variable.  Text values are always represented in quote marks.", 
                "score": -1.0, 
                "text": "\"hello\""
            }, 
            {
                "feedback": "Mistakes are welcome here! Try reviewing this. <i>true &nbsp;</i>is a <i>boolean value. &nbsp;</i>So it cannot be used as the name of a variable. &nbsp;The other boolean value is <i>false. &nbsp;</i>", 
                "score": -1.0, 
                "text": "true"
            }, 
            {
                "feedback": "Yes. <i>x</i>&nbsp;is an abstract symbol that could be used for a variable name. &nbsp;We don't know what value it is referring to here.&nbsp;", 
                "score": 0.5, 
                "text": "x"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Variables are abstract symbols", 
        "permute": false, 
        "question": "A <i style=\"font-weight: bold;\">variable</i>&nbsp;is an abstract symbol that refers to some particular value. &nbsp;Which of the following symbols is a variable?", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "cspcode": "0.0.0X", 
        "description": "Index of No Way", 
        "graders": [
            {
                "feedback": "That's right! The text \"No way\" occurs as the third item in the list, so its index is 3.", 
                "matcher": "numeric", 
                "response": "3", 
                "score": "1.0"
            }
        ], 
        "hint": "Starting with the first item, count how many items down the list \"No way\" is.", 
        "question": "Lists are <i>indexed</i>, or numbered, starting with 1, which means that you can retrieve any item from a list by giving its index. For the list below, what is the index of \"No way\"? Type your answer into the text box. <br><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/makealist8.png\" class=\"yui-img\"><br>", 
        "source": "mcsp-", 
        "type": 1, 
        "wrongfeedback": "The text \"No way\" occurs as the third item in the list, so its index is 3."
    }, 
    {
        "choices": [
            {
                "feedback": "This is challenging, but rewarding! 1 and 3 are two of the possible values, but not all of them.", 
                "score": 0.0, 
                "text": "1 or 3"
            }, 
            {
                "feedback": "This <i>random integer</i> block will return a random value between\n1 and 3, inclusive.", 
                "score": 1.0, 
                "text": "1, 2, or 3"
            }, 
            {
                "feedback": "This is challenging, but rewarding! 1 and 2 are two of the possible values but not all of them.", 
                "score": 0.0, 
                "text": "1 or 2"
            }, 
            {
                "feedback": "This is challenging, but rewarding! 1 is one of the possible values but not all of them.", 
                "score": 0.0, 
                "text": "1"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Choose random 1 to 3", 
        "permute": false, 
        "question": "<span style=\"font-family: Times; font-size: large; line-height: normal;\">For the following block what possible values would be assigned to X?&nbsp;</span><br style=\"font-family: Times; font-size: large; line-height: normal;\"><img src=\"assets/img/setxtorandomint.png\" class=\"yui-img\">\n", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything! The DNS is a lookup service.  It doesn't create IP addresses.", 
                "score": 0.0, 
                "text": "creates IP addresses for clients and servers "
            }, 
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything! The DNS is a service that pairs domain names (www.trincoll.edu) with IP addresses (157.252.176.180).", 
                "score": 0.0, 
                "text": "divides the Internet up into distinct and separate networks "
            }, 
            {
                "feedback": "If it were easy, you wouldn\u2019t be learning anything! The DNS is a de-centralized system.  DNS servers are distributed around the Internet and they work together to resolve domain names (www.trincoll.edu) into IP addresses (157.252.176.180).", 
                "score": 0.0, 
                "text": "is managed by a centralized server that knows all of the Internet's domain names "
            }, 
            {
                "feedback": "That's right! When we type www.google.com into the address bar, the DNS translates www.google.com into Google's IP address (64.233.160.0) for us. It's much easier for us to remember www.google.com than for us to remember Google's IP address (64.233.160.0)!", 
                "score": 1.0, 
                "text": "translates easy-to-remember domain names into IP addresses "
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "DNS Definition", 
        "permute": false, 
        "question": "The Domain Name System __________________. ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "True. A possible type of Big Data set you could find could include data on credit card transactions.", 
                "score": 0.25, 
                "text": "credit card transactions "
            }, 
            {
                "feedback": "True. It is possible to find Big Data sets that contain measurement data, such as heights of trees.", 
                "score": 0.25, 
                "text": "measurements "
            }, 
            {
                "feedback": "True. If you searched for Big Data sets, you might find Big Data sets that include sound files.", 
                "score": 0.25, 
                "text": "sound files"
            }, 
            {
                "feedback": "True. It is possible to find Big Data sets that contain images.", 
                "score": 0.25, 
                "text": "images "
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Types of Big Data", 
        "permute": false, 
        "question": "Big Data could include which of the following types of data? \n<br>\nChoose all that apply. ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "Don\u2019t worry, it\u2019s hard! Let\u2019s go back and try it again.", 
                "score": -1.0, 
                "text": "Complexing"
            }, 
            {
                "feedback": "Don\u2019t worry, it\u2019s hard! Let\u2019s go back and try it again.", 
                "score": -1.0, 
                "text": "Complicating"
            }, 
            {
                "feedback": "", 
                "score": 0.5, 
                "text": "Condensing"
            }, 
            {
                "feedback": "", 
                "score": 0.5, 
                "text": "Simplifying"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Abstraction in CS", 
        "permute": false, 
        "question": "In Computer Science, the process of abstracting also means:", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "", 
                "score": 0.33, 
                "text": "Button"
            }, 
            {
                "feedback": "", 
                "score": 0.33, 
                "text": "Label"
            }, 
            {
                "feedback": "This is challenging, but rewarding! This is a property of a component, not a component", 
                "score": -1.0, 
                "text": "Player.IsPlaying"
            }, 
            {
                "feedback": "", 
                "score": 0.34, 
                "text": "Player"
            }, 
            {
                "feedback": "This is challenging, but rewarding! This is a property of a component, not a component", 
                "score": -1.0, 
                "text": "Button.Image"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Examples of Components", 
        "permute": false, 
        "question": "Which of the following are components?", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "Mistakes are welcome here! Try reviewing this; the programmer's knowledge can be used to determine if statements are formulated correctly, this is not what is meant by syntax.", 
                "score": 0.0, 
                "text": "programmer's knowledge "
            }, 
            {
                "feedback": "Mistakes are welcome here! Try reviewing this; the compiler runs the program statements whether or not they are formulated correctly. If there is a syntax error, the compiler will inform you that there is an error.", 
                "score": 0.0, 
                "text": "compiler "
            }, 
            {
                "feedback": "Mistakes are welcome here! Try reviewing this; the programming language is the language the statements are written in. The programming language itself does not determine if the statements are formulated correctly. The programming language's syntax does this.", 
                "score": 0.0, 
                "text": "programming language "
            }, 
            {
                "feedback": "That's right! Programming languages all have syntax, a set of rules, that must be followed when writing code.", 
                "score": 1.0, 
                "text": "set of rules"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Definition of Syntax", 
        "permute": false, 
        "question": "In computer programming, <b><i>syntax</i></b> is the __________ that determines whether statements are correctly formulated. ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "OK, so you didn\u2019t get it right this time. Let\u2019s look at this as an opportunity to learn. Try reviewing this...The Blockly Maze language is an example of a <i>programming language</i>. It is more formal\nthan pseudocode and its instructions can be executed (run) on a computer.", 
                "score": 0.0, 
                "text": "True"
            }, 
            {
                "feedback": "Right.  The Blockly Maze language is an example of a <i>programming language</i>. It is more formal than pseudocode and its instructions can be executed (run) on a computer.", 
                "score": 1.0, 
                "text": "False"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Blockly Language is pseudocode", 
        "permute": false, 
        "question": "True or False: The Blockly Maze language is an example of pseudocode. ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "Let me add new information to help you solve this...Logarithmic algorithms usually involve a \"divide and conquer\" step.  This one does not.", 
                "score": 0.0, 
                "text": "Logarithmic"
            }, 
            {
                "feedback": "Yes.  In the worst case, when N is prime,  the loop goes through N/2 calculations, each one testing whether N is divisible by K (i.e., whether N/K leaves a remainder of 0).   So this is linear. Remember in analysis, we \"abstract away\" factors like 1/2 in the N/2 expression.", 
                "score": 1.0, 
                "text": "Linear"
            }, 
            {
                "feedback": "Let me add new information to help you solve this...Usually N Log N algorithms combine a linear loop with a \"divide and conquer\" loop. This one does not.", 
                "score": 0.0, 
                "text": "N Log N"
            }, 
            {
                "feedback": "Let me add new information to help you solve this...This algorithm is much more efficient than quadratic, which usually combines two nested linear loops.", 
                "score": 0.0, 
                "text": "Quadratic"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "5 Analysis Is a Prime", 
        "question": "How would you classify this algorithm?\n<blockquote>\n<pre>Is N a prime\n   For each number K from 2 to N/2\n      if N is divisible by K \n         Output False\n   Output True\n</pre>\n</blockquote>", 
        "source": "mcsp-", 
        "type": 0
    }, 
    {
        "choices": [
            {
                "feedback": "Let me add new information to help you solve this. The definition contains details about chairs, so is not as abstract as the word 'chair' itself.", 
                "score": 0.0, 
                "text": "The dictionary definition of the word 'chair'."
            }, 
            {
                "feedback": "That's correct.  Good.", 
                "score": 1.0, 
                "text": "The word 'chair' itself."
            }, 
            {
                "feedback": "Let me add new information to help you solve this. The picture contains details about a chair, so it is not as abstract as the word 'chair' itself.", 
                "score": 0.0, 
                "text": "A picture of a chair."
            }, 
            {
                "feedback": "Let me add new information to help you solve this. The physical chair itself is very detailed and concrete.  It's the very opposite of abstract.", 
                "score": 0.0, 
                "text": "The chair itself."
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Most abstract - chair", 
        "permute": false, 
        "question": "In general, which of the following is the most abstract when it comes to talking about chairs?", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "cspcode": "0.0.0X", 
        "description": "Caesar cipher decryption", 
        "graders": [
            {
                "feedback": "That's right! With a shift of 2, the letter 'c' becomes 'e'. The letter 'a' becomes 'c', and so on giving caesar as the secret word.", 
                "matcher": "case_insensitive", 
                "response": "caesar", 
                "score": "1.0"
            }
        ], 
        "hint": "This Caesar cipher shifts to the left", 
        "question": "The following word was encrypted using a Caesar cipher with a shift of 2: <b>ecguct</b>. What word is it? Type your answer into the text box. ", 
        "source": "mcsp-", 
        "type": 1, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(A) (onFloor1 AND callTo2) AND (onFloor2 AND callTo1)"
            }, 
            {
                "feedback": "That's correct!", 
                "score": 1.0, 
                "text": "(B) (onFloor1 AND callTo2) OR (onFloor2 AND callTo1)"
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(C) (onFloor1 OR callTo2) AND (onFloor2 OR callTo1)"
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(D) (onFloor1 OR callTo2) OR (onFloor2 OR callTo1)"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "AP CS P Exam Prep Elevator Boolean", 
        "permute": false, 
        "question": "An office building has two floors. A computer program is used to control an elevator that travels between the two floors. Physical sensors are used to set the following Boolean variables.<br><br><div style=\"text-align: center;\"><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q21Table.PNG\" class=\"yui-img\" title=\"\" alt=\"\" style=\"line-height: 1.22;\"><br><br></div>The elevator moves when the door is closed and the elevator is called to the floor that it is not currently on. Which of the following Boolean expressions can be used in a selection statement to cause the elevator to move?<br><br>", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "cspcode": "0.0.0X", 
        "description": "CP2 - Directions to submit", 
        "graders": [
            {
                "feedback": "Thank you for submitting! You should now be able to access the peer reviews. (Go back to the main course page and a link to peer reviews will appear below this assessment.)", 
                "matcher": "regex", 
                "response": "/.*/i", 
                "score": "36"
            }
        ], 
        "hint": "URL for the Create Performance Task page of your portfolio:<br>\nExample: http://www.mysite.com/project1writeup.pdf", 
        "question": "<h2>To Submit:</h2>\nMake sure you review the following documents before submitting:\n<br><a href=\"\" target=\"_blank\">How To: Create a Portfolio Write-Up</a>\n<br><a href=\"https://docs.google.com/a/css.edu/document/d/14noR7S7w-ghgnV2cmKXuO4KbYt3RL3vPVJLnvoWr3bk/edit\" target=\"_blank\">How To: Share Your App</a>\n<br><a href=\"https://docs.google.com/a/css.edu/document/d/1MVJ9gV2MEeOWan4Gu2dEwA5B9sJ3eMo7rVw97SnAqOk/edit\" target=\"_blank\">How To: Create an App Video</a>\n<br><a href=\"https://drive.google.com/file/d/0B86iRIPU8oQlT0tHYXctNmJPSlk/view\" target=\"_blank\">Grading Rubric</a>\n\n\n<ul>\n   <li>Create a page on your portfolio called Create #2. Follow the directions for the write-up given above. Also include a link to your video, your app's aia file and a QR code to install your app (see above link).</li>\n   <li>Copy and paste the link to your portfolio in the textbox below.</li><li><span id=\"docs-internal-guid-d39b6bb0-0c13-e140-af1f-7d491afb8bbb\"><span class=\"yui-tag-span yui-tag\" tag=\"span\" style=\"font-size: 13px;\">One portfolio page or pdf per student</span></span><br></li>\n</ul>", 
        "source": "mcsp-", 
        "type": 1, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(A) Computer simulations can only be built after the real-world object or system has been created. <br>"
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(B) Computer simulations only run on very powerful computers that are not available to the general public. "
            }, 
            {
                "feedback": "This is correct", 
                "score": 1.0, 
                "text": "(C) Computer simulations usually make some simplifying assumptions about the real-world object or system being <span class=\"Apple-tab-span\" style=\"white-space:pre\">\t</span>modeled. \n"
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(D) It is difficult to change input parameters or conditions when using computer simulations. "
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "AP CS P EXAM PREP Computer Simulations", 
        "permute": false, 
        "question": "Which of the following statements describes a limitation of using a computer simulation to model a real-world object or system?\n<br>", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "", 
                "score": 3.0, 
                "text": "Good \u2013 2 to 5 reliable sources, 2 of which are recent (within the last 2 years)"
            }, 
            {
                "feedback": "", 
                "score": 2.0, 
                "text": "Adequate with some problems"
            }, 
            {
                "feedback": "", 
                "score": 1.0, 
                "text": "Poor quality sources, not recent or did not include enough sources"
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "Missing sources"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "EPT - References Selection", 
        "question": "Paper included two to five references/citations to sources used to formulate responses to the performance task.", 
        "source": "mcsp-", 
        "type": 0
    }, 
    {
        "choices": [
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(A)&nbsp;<br><div style=\"text-align: left;\" class=\"yui-wk-div\"><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q18A1.PNG\" class=\"yui-img selected\" title=\"\" alt=\"\" style=\"line-height: 1.22;\"></div>"
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(B)&nbsp;<br><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q18A2.PNG\" class=\"yui-img selected\" title=\"\" alt=\"\"><br>"
            }, 
            {
                "feedback": "", 
                "score": 1.0, 
                "text": "(C) <br><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q18A3.PNG\" class=\"yui-img selected\" title=\"\" alt=\"\"><br>"
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "(D) <br><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q18A4.PNG\" class=\"yui-img selected\" title=\"\" alt=\"\"><br>"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "AP CS P Exam Prep Robot MoveAndTurn Procedure", 
        "permute": false, 
        "question": "The figure below shows a robot in a grid of squares. The robot is represented as a triangle, which is initially facing upward. The robot can move into a white or gray square but cannot move into a black region.<br><br><div style=\"text-align: center;\" class=\"yui-wk-div\"><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q18SquareQuestion.PNG\" class=\"yui-img\" title=\"\" alt=\"\" style=\"line-height: 1.22;\"><span style=\"line-height: 1.22;\">&nbsp; &nbsp;<br><br></span></div>Consider the procedure <i>MoveAndTurn</i> below.\n\n<br><br><div style=\"text-align: center;\" class=\"yui-wk-div\"><img src=\"https://ram8647.appspot.com/mobileCSP/assets/img/Q18Code.PNG\" class=\"yui-img\" title=\"\" alt=\"\" style=\"line-height: 1.22;\"><br><br></div>Which of the following code segments will move the robot to the gray square?\n", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "Yes. Because the symbol contains fewer details than the truth table it is <i><b>more abstract</b></i>.", 
                "score": 1.0, 
                "text": "True"
            }, 
            {
                "feedback": "Mistakes are welcome here! Try reviewing this; the symbol contains fewer details than the truth table so it is <i><b>more abstract</b></i>.", 
                "score": 0.0, 
                "text": "False"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "T/F AND symbol more abstract", 
        "permute": false, 
        "question": "True or False.  The symbol for an AND gate is more abstract than the <i>truth table</i> that \ndefines its behavior. ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "", 
                "score": 1.0, 
                "text": "a. client"
            }, 
            {
                "feedback": "Of course it\u2019s tough \u2013 school is here to makes our brains stronger!", 
                "score": 0.0, 
                "text": "b. server"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Client Example", 
        "permute": false, 
        "question": "A phone is an example of a __________. ", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "Try asking a classmate for advice\u2014s/he may be able to explain/suggest some ideas or recommend some strategies.", 
                "score": 0.0, 
                "text": "I and II only"
            }, 
            {
                "feedback": "This is correct. Only I and III are true.", 
                "score": 1.0, 
                "text": "I and III only"
            }, 
            {
                "feedback": "Try asking a classmate for advice\u2014s/he may be able to explain/suggest some ideas or recommend some strategies.", 
                "score": 0.0, 
                "text": "II and III only"
            }, 
            {
                "feedback": "Try asking a classmate for advice\u2014s/he may be able to explain/suggest some ideas or recommend some strategies.", 
                "score": 0.0, 
                "text": "I, II, and III"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "AP CS P EXAM PREP Creating Computational Artifacts", 
        "permute": false, 
        "question": "Which of the following are true statements about creating computational artifacts?\n<br><br>I. A computational artifact must be created using a computer or computing device.\n\n<br>II. A computational artifact must be created using a traditional, prescribed technique.\n\n<br>III. Some computational artifacts are created by combining existing computational artifacts.", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }, 
    {
        "choices": [
            {
                "feedback": "", 
                "score": 3.0, 
                "text": "Good, easy to follow and read for content"
            }, 
            {
                "feedback": "", 
                "score": 2.0, 
                "text": "A few sections unclear"
            }, 
            {
                "feedback": "", 
                "score": 1.0, 
                "text": "Writing gets in the way of understanding the content"
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "Did not complete report"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "EPT - Clarity", 
        "question": "Writing Clarity - The report is clearly written and easy to follow/read for content.", 
        "source": "mcsp-", 
        "type": 0
    }, 
    {
        "choices": [
            {
                "feedback": "", 
                "score": 3.0, 
                "text": "Technology behind innovation well described"
            }, 
            {
                "feedback": "", 
                "score": 2.0, 
                "text": "Description adequate but with weaknesses"
            }, 
            {
                "feedback": "", 
                "score": 1.0, 
                "text": "Poorly described"
            }, 
            {
                "feedback": "", 
                "score": 0.0, 
                "text": "Missing"
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "EPT - Technical Description", 
        "question": "Technical Details - Report includes an explanation of the technical details of innovation in terms that someone completely unfamiliar with the innovation would understand.", 
        "source": "mcsp-", 
        "type": 0
    }, 
    {
        "choices": [
            {
                "feedback": "That's right! E-mail, SMS, Facebook, and Twitter have all given us new ways to communicate with one another.", 
                "score": 0.33, 
                "text": "a. fostering new ways for individuals to communicate"
            }, 
            {
                "feedback": "That's right! E-mail, SMS, Facebook, and Twitter have all raised concerns about our privacy. ", 
                "score": 0.33, 
                "text": "b. changing our beliefs and practices about the privacy of personal information "
            }, 
            {
                "feedback": "Of course it\u2019s tough \u2013 school is here to makes our brains stronger!", 
                "score": -1.0, 
                "text": "c. improving our reading and writing skills "
            }, 
            {
                "feedback": "That's right! E-mail, SMS, Facebook, and Twitter all allow us to spread information quickly and widely. ", 
                "score": 0.34, 
                "text": "d. allowing individuals to spread information quickly and widely "
            }
        ], 
        "cspcode": "0.0.0X", 
        "description": "Societal Impacts", 
        "permute": false, 
        "question": "E-mail, SMS, and social media, such as Facebook and Twitter, have impacted our society by _______________. \n<br>\n<b>Choose all that apply. </b>", 
        "source": "mcsp-", 
        "type": 0, 
        "wrongfeedback": ""
    }
];