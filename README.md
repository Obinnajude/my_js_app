# my_js_app
# This app contains a full js enabled objective exam questions, that can be used to conduct exams for three classes at a time
# with auto marking capacity 
# and printable results sheet with student name, subject and class captured on the result sheet 
# no storage of result and the app runs only using a browser, no need for additional installations

# markings is done 2 marks per a question
To alter the markings pattern go to the checkAnswersss3() function for ss3 class and do same for each class on the questions.js file and look for score+=2 and change it to your desirable marking pattern.

# To upload new questions
Just open the arrays for each class (like ss1qs.js) and input the questions using the pattern ["You selected SS1 as your class?","Yes","No","i dont know","Maybe","Yes"] the last index stand for the answer.

# To modify the GUI of the app, you can use the index.html and mystyle.css to achieve that

# To modify the timing for the exam, open the time.js file and modify the variable values for time

# the app can be used by right clicking on the index.html file and creating a shortcut for it on the desktop
# once laod the shortcut, the app will start running, enter your fullname and select your class (we have three class ss3, ss2 and ss1) and input your passwords

# If you selected SS3 Class The PASSWORD is 334455
# If you selected SS2 Class The PASSWORD is 12345
# If you selected SS1 Class The PASSWORD is 54321


# We need some contribution on how we can store the result in an excel sheet.
