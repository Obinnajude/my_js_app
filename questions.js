
var pos = 0,unam,pass3="334455",pass2="12345",options,logout,claz="SS1",clas="SS2",clasis="SS3", pass1="54321",q,question1,question2,question3,score=0,s,r,questnum,test,choice1,choice2,choice3,right,chA,chB,y,x=0,chC,chD;

//this carries out login check.

function passCheck(){
options=document.getElementById("clas").value;
p=document.getElementById("pass").value;
unam=document.getElementById("uname");
if(pass1===p&& options==claz&& unam.value!=="" ){ 
myDetail();
instruct();
myStudent();
login();

}else if(pass2===p&& options==clas && unam.value!==""){ 
myDetail();
instruct();
myStudent();
login();}
else if(pass3===p&& options==clasis&& unam.value!==""){ 
myDetail();
instruct();
myStudent();
login();}else if (unam.value==""){
 document.getElementById("error").innerHTML="Enter Your Full Name" }else{document.getElementById("error").innerHTML= "Password or Username is Incorrect"}}

 //these functions toggles questions and login displays.

function myQuestion(){
var q =document.getElementById("exam");
if(q.style.display === "none"){q.style.display = "block";
}else{q.style.display="none";}}

function myDetail(){
var l =document.getElementById("log");
if(l.style.display === "block"){l.style.display = "none";
}else{l.style.display="block";}}

function instruct(){
var instru =document.getElementById("instruction");
if(instru.style.display === "block"){instru.style.display = "none";
}else{instru.style.display="block";}}

//this kick starts the exam.

function start(){
options=document.getElementById("clas").value;	
	if(options==clas){
myQuestion();
questionDisplayss2();
instruct();
myStudent();
questdet();
quizCount();
	}else if(options==claz){
myQuestion();
questionDisplayss1();
instruct();
myStudent();
questdet();
quizCount();
	}else if(options==clasis){
myQuestion();
questionDisplayss3();
instruct();
myStudent();
questdet();
quizCount();
	}}

//this help to display students info on the pages.

function myStudent(){
s=document.getElementById("uname").value;
r=document.getElementById("uname").value;
options=document.getElementById("clas").value;
document.getElementById("std").innerHTML= s;
document.getElementById("st").innerHTML= r;
document.getElementById("ident").innerHTML= "<b>SUBJECT:</b> "+subject+"<br/><b>CLASS:</b> "+options;
}
function questdet(){
	s=document.getElementById("uname").value;
	options=document.getElementById("clas").value;
	document.getElementById("iden").innerHTML= "<b>SUBJECT:</b> "+subject+"<br/><b>CLASS:</b> "+options;
}

// this display questions and result.

function questionDisplayss3(){
	questnum=document.getElementById("num");
	test=document.getElementById("ques");
	
	if(pos >= questionsss3.length ){
		clearTimeout(q)
		questnum.innerHTML="Exam Completed:<i> Congratulations</i>";
		test.innerHTML="<b> Your Result is: </b> " +x+" Marks  <br><br> <b>Thanks for Writing</b>";
		pos=0;
		correct=0;
		return false
	} 
		
questnum.innerHTML="Question "  +(pos+1)+" of "  +questionsss3.length;
question=questionsss3[pos][0];
chA=questionsss3[pos][1];
chB=questionsss3[pos][2];
chC=questionsss3[pos][3];
chD=questionsss3[pos][4];
test.innerHTML="<h2>"+question+"</h2> <hr>";
test.innerHTML+=" A) <input type='radio' name='choices' id='AA' value=''>"+chA+"<br/>";
test.innerHTML+=" B) <input type='radio' name='choices' id='BB' value=''>"+chB+"<br/>";
test.innerHTML+=" C) <input type='radio' name='choices'  id='CC' value=''>"+chC+"<br/>";
test.innerHTML+=" D) <input type='radio' name='choices'  id='DD' value=''>"+chD+"<br/>";
test.innerHTML+="<button onclick='checkAnswerss3()' id='btn'>Submit</button>";
document.getElementById('AA').value=chA;
document.getElementById('BB').value=chB;
document.getElementById('CC').value=chC;
document.getElementById('DD').value=chD;
}


//this checks if the answer is correct.

function checkAnswerss3(){
	test=document.getElementById("ques");
choices=document.getElementsByName("choices");
for(var i=0;i<choices.length; i++){
	if(choices[i].checked ){
		choice3 = choices[i].value;
	}
}
	if(choice3==questionsss3[pos][5]){
	score+=2;
	x=score;
	}
		pos++;
questionDisplayss3()

}
			
//Ss1 class question calc
			
			function questionDisplayss1(){
	questnum=document.getElementById("num");
	test=document.getElementById("ques");
	
	if(pos >= questionsss1.length ){
		clearTimeout(q)
		questnum.innerHTML="Exam Completed: <i>Congratulations</i>";
		test.innerHTML="<b> Your Result is: </b> " +x+" Marks  <br><br> <b>Thanks for Writing</b>";
		pos=0;
		correct=0;
		return false
	} 
		
questnum.innerHTML="Question "  +(pos+1)+" of "  +questionsss1.length;
question=questionsss1[pos][0];
chA=questionsss1[pos][1];
chB=questionsss1[pos][2];
chC=questionsss1[pos][3];
chD=questionsss1[pos][4];
test.innerHTML="<h2>"+question+"</h2> <hr>";
test.innerHTML+=" A) <input type='radio' name='choices' id='AA' value=''>"+chA+"<br/>";
test.innerHTML+=" B) <input type='radio' name='choices' id='BB' value=''>"+chB+"<br/>";
test.innerHTML+=" C) <input type='radio' name='choices'  id='CC' value=''>"+chC+"<br/>";
test.innerHTML+=" D) <input type='radio' name='choices'  id='DD' value=''>"+chD+"<br/>";
test.innerHTML+="<button onclick='checkAnswerss1()' id='btn'>Submit</button>";
document.getElementById('AA').value=chA;
document.getElementById('BB').value=chB;
document.getElementById('CC').value=chC;
document.getElementById('DD').value=chD;
}
function checkAnswerss1(){
	test=document.getElementById("ques");
choices=document.getElementsByName("choices");
for(var i=0;i<choices.length; i++){
	if(choices[i].checked ){
		choice1 = choices[i].value;
	}
}
	if(choice1==questionsss1[pos][5]){
	score+=2;
	x=score;
	}
		pos++;
questionDisplayss1()

}
		
		
		function questionDisplayss2(){
	questnum=document.getElementById("num");
	test=document.getElementById("ques");
	
	if(pos >= questionsss2.length ){
		clearTimeout(q)
		questnum.innerHTML="Exam Completed: <i>Congratulations</i>";
		test.innerHTML="<b> Your Result is: </b> " +x+" Marks  <br><br> <b>Thanks for Writing</b>";
		pos=0;
		correct=0;
		return false
	} 
		
questnum.innerHTML="Question "  +(pos+1)+" of "  +questionsss2.length;
question=questionsss2[pos][0];
chA=questionsss2[pos][1];
chB=questionsss2[pos][2];
chC=questionsss2[pos][3];
chD=questionsss2[pos][4];
test.innerHTML="<h2>"+question+"</h2> <hr>";
test.innerHTML+=" A) <input type='radio' name='choices' id='AA' value=''>"+chA+"<br/>";
test.innerHTML+=" B) <input type='radio' name='choices' id='BB' value=''>"+chB+"<br/>";
test.innerHTML+=" C) <input type='radio' name='choices'  id='CC' value=''>"+chC+"<br/>";
test.innerHTML+=" D) <input type='radio' name='choices'  id='DD' value=''>"+chD+"<br/>";
test.innerHTML+="<button onclick='checkAnswerss2()' id='btn'>Submit</button>";
document.getElementById('AA').value=chA;
document.getElementById('BB').value=chB;
document.getElementById('CC').value=chC;
document.getElementById('DD').value=chD;
}
function checkAnswerss2(){
	test=document.getElementById("ques");
choices=document.getElementsByName("choices");
for(var i=0;i<choices.length; i++){
	if(choices[i].checked ){
		choice2 = choices[i].value;
	}
}
	if(choice2==questionsss2[pos][5]){
	score+=2;
	x=score;
	}
		pos++;
questionDisplayss2()

}
		function login(){
			logout=document.getElementById("logout");
			logout.innerHTML="LOGOUT";
			
			
		}