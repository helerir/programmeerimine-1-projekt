
var countries = ["NIGERIA", "MOROCCO", "BOTSWANA", "ESTONIA"/*"FINLAND", "SWEDEN", 
"NETHERLANDS", "GERMANY", "BELGIUM"*/];

var randomCountry = Math.floor(Math.random()*countries.length);

/* stores the country name */
var temp = countries[randomCountry];
/* declaring and initializing tries */
var tries = 0;

/* the main function */
function guessIt() {
	var guess = document.getElementById("guess1").value;
	tries++;
	 
	window.status = "You have " + tries + "tries left!";
	switch(tries) {
	 	case 1:
	     	document.getElementById("hint").value = 
	     	"First Hint : The country name starts with " + temp.charAt(0);
	    break;
	    case 2:
	     	document.getElementById("hint").value = 
	     	"Second Hint : The country name ends with " + temp.charAt(temp.length - 1);
	    break;
	 	case 3:
	     	document.getElementById("hint").value = 
	     	"Last Hint : The country name has " + temp.length + " characters";
	    break;
	    default: document.getElementById("hint").value = "No hints are available anymore!";
	}
	 
	if(guess.toUpperCase() == temp) { /* if guess equals to temp */
	    if(window.confirm("Absolutely Right ! The country was " + temp + ".\nDo you want to play again?")) {
	      	window.location.reload();     /* reloads the page for a new game */
	     }
	} else {
	 	if(tries == 5) {/* game over */
		   	if(window.confirm("Sorry ! Your chances are over. The country was  " + temp +
		    ".\nDo you want to play again?")) {
		      	window.location.reload(); /* reloads the page for a new game */
		 	}
		}
	}
}

function catchKeyCode() {//calls when the user press the RETURN key
	if(event.keyCode == 13) {
	   	guessIt();
	}
}
	 
function showStatus() {
	window.status = "Tries : " + tries;
}

var currentFlag=temp;

function draw() {
	var g=document.getElementById("flag-board").getContext("2d");
	if(currentFlag=="NIGERIA") {
		g.clearRect(100, 100, 300, 150);
		g.fillStyle="#008753";
		g.fillRect(0, 0, 100, 150);
		g.fillRect(200, 0, 100, 150);
		g.fillStyle="#ffffff";
		g.fillRect(100, 0, 100, 150);
	}
	if(currentFlag=="BOTSWANA") {
	 	g.clearRect(100, 100, 250, 150);
	 	g.fillStyle="#ffffff";
	 	g.fillRect(25, 0, 250, 150);
	 	g.fillStyle="#75AADB";
	 	g.fillRect(25, 0, 250, 50);
	 	g.fillRect(25, 100, 250, 50);
	 	g.fillStyle="#000000";
	 	g.fillRect(25, 55, 250, 40);
	}
	if(currentFlag=="MOROCCO") {
		g.clearRect(100, 100, 300, 150);
		g.fillStyle="#c1272d";
		g.fillRect(25, 0, 250, 150);
		g.beginPath();
		g.lineWidth=4;
		g.strokeStyle="#006233";
		g.moveTo(150, 50);
		g.lineTo(135, 100);
		g.lineTo(175, 70);
		g.lineTo(125, 70);
		g.lineTo(165, 100);
		g.lineTo(150, 50);
		g.lineTo(147, 60);
		g.stroke();
	}
	if(currentFlag=="ESTONIA"){
		g.clearRect(100, 100, 300, 150);
		g.fillStyle="#0072CE";
		g.fillRect(25, 0, 250, 50);
		g.fillStyle="#000000";
		g.fillRect(25, 50, 250, 50);
		g.fillStyle="#ffffff";
		g.fillRect(25, 100, 250, 50);
	}
}

function nigeriaFlag(){
	currentFlag="NIGERIA"; draw();
}
function botswanaFlag(){
	currentFlag="BOTSWANA"; draw();
}
function moroccoFlag(){
	currentFlag="MOROCCO"; draw();
}
function estoniaFlag(){
	currentFlag="ESTONIA"; draw();
}

window.onload=draw;
