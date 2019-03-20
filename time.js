var sec=00;
var m=1;
var h=0;
var q;
function quizCount(){ 
document.getElementById("time").innerHTML= "Time: "+h+" Hr: " +m+" Mins : "+sec+"Secs";
sec=sec-1;
q=setTimeout("quizCount()",1000)
if(sec<0){
m=m-1;sec=59;}
if(h<0||m<0||sec<0){
	quizStop();
}else if(m<1&&h>=1){
	h=h-1;m=59;
} 
}
function quizStop(){
clearTimeout(q)
questnum.innerHTML="Sorry,Your Time Has Elapsed:<i> Congratulations</i>";
		test.innerHTML="<b> Your Result is: </b> " +x+" Marks  <br><br> <b>Thanks for Writing</b>";
		pos=0;
		correct=0;
		return false
}
