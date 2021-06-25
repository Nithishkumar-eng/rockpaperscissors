let x;
let player=prompt("Enter player Name","player1");
document.getElementById("playername").innerHTML=player+"'s"+" "+"SCORE";
document.getElementById("playername").style.fontWeight="bold";
document.getElementById("playerid").innerHTML=player+"'s"+" "+"move";
document.getElementById("playerid").style.fontStyle="italic";

function computer(){
	x=Math.floor(Math.random()*3);
	resultbox();
	changevalue(x);
	return;
}
var moves;
let val=0;
moves=Number(document.getElementById('turns').innerHTML);
function rock(n) {
	y=n;
	++val;
	if(val==10)
	{	
	change();
	}
	document.getElementById("playervalue").innerHTML="Rock";
	document.getElementById('turns').innerHTML=--moves;
	computer();
	// body...
}
function paper(n)
{

	y=n;
	++val;
	if(val==10)
	{
	change();
	}
	document.getElementById("playervalue").innerHTML="Paper";
	document.getElementById('turns').innerHTML=--moves;
	computer();
}
function scissor(n)
{
	y=n;
	++val;
	if(val==10)
	{
	change();
	}
	document.getElementById("playervalue").innerHTML="Scissor";
	document.getElementById('turns').innerHTML=--moves;
	computer();
	
}

function resultbox(){
	if((x==0&&y==0)||((x==1)&&(y==1))||(x==2&&y==2))
	{
		document.getElementById('result').innerHTML="TIE";
	}
	else if((x==0)&&(y==2)){
		document.getElementById('result').innerHTML="Computer Wins"
		++cscore;
		document.getElementById('computerscore').innerHTML=cscore;
	}
	else if((x==1)&&(y==0)){
	 document.getElementById('result').innerHTML="Computer Wins";
	 ++cscore;
	 document.getElementById('computerscore').innerHTML=cscore;
	}
	else if((x==2)&&(y==1)){
	document.getElementById('result').innerHTML="Computer Wins";
	++cscore;
	document.getElementById('computerscore').innerHTML=cscore;
	}
	else if((y==0)&&(x==2)){
		document.getElementById('result').innerHTML="You WINS!!"
		++pscore;
		document.getElementById('playerscore').innerHTML=pscore;
	}
	else if((y==1)&&(x==0)){
	 document.getElementById('result').innerHTML="You WINS!!";
	 ++pscore;
	 document.getElementById('playerscore').innerHTML=pscore;
	}
	else if((y==2)&&(x==1)){
	document.getElementById('result').innerHTML="You WINS!!";
	++pscore;
	document.getElementById('playerscore').innerHTML=pscore;
	}
	return;
}
function changevalue(x){
	if(x==0){
		document.getElementById("computervalue").innerHTML="Rock";
	}
	else if(x==1){
		document.getElementById("computervalue").innerHTML="Paper";
	}
	else if(x==2){
		document.getElementById("computervalue").innerHTML="Scissor";
	}

}	
function change(){
	
	document.getElementById('head').innerHTML="Game Over!!";
	document.getElementById('head').style.fontSize="40px";
	
	document.getElementById('option').style.textAlign="center";
	document.getElementById('option').style.fontSize="30px";
	document.getElementById('option').style.color="floralwhite";
	document.getElementById('option').style.fontFamily="fantasy";
	document.getElementById('refresh').style.display="block";
	winner(cscore,pscore);
}

let cscore=Number(document.getElementById('computerscore').innerHTML);
let pscore=Number(document.getElementById('playerscore').innerHTML);
let score=document.getElementById('result').innerHTML;

function winner(cscore,pscore){
	if(cscore>pscore){
		document.getElementById("option").innerHTML="Computer Wins";
	}
	else if(pscore>cscore){
		document.getElementById("option").innerHTML="You Wins";
		
	}
	else if(pscore==cscore){
		document.getElementById("option").innerHTML="Match Drawn";
	}
}
function refresh(){
	window.location.reload();
}
