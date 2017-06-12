
var countries = ["NIGERIA", "MOROCCO", "BOTSWANA", "ESTONIA"/*"FINLAND", "SWEDEN", 
"NETHERLANDS", "GERMANY", "BELGIUM"*/];
var randomCountry = Math.floor(Math.random()*countries.length);
var currentFlag = countries[randomCountry];
var tries = 0;
var score = 0;

document.getElementById("score").innerHTML = "Score: " + score;

function drawNewFlag() {
	randomCountry = Math.floor(Math.random()*countries.length);
	currentFlag = countries[randomCountry];
	new Flag(currentFlag);
	tries = 0;
	score += 10;
}

function guessIt() {
	var guess = document.getElementById("guess1").value;
	tries++;	
	 
	switch(tries) {
	 	case 1:
	    document.getElementById("hint").value = 
	    "First Hint : The country name starts with " + currentFlag.charAt(0);
	  break;
	  case 2:
	    document.getElementById("hint").value = 
	    "Second Hint : The country name ends with " + currentFlag.charAt(currentFlag.length - 1);
	  break;
	 	case 3:
	    document.getElementById("hint").value = 
	    "Last Hint : The country name has " + currentFlag.length + " characters";
	  break;
	  default: document.getElementById("hint").value = "No hints are available anymore!";
	}
	 
	if(guess.toUpperCase() == currentFlag) {
		document.getElementById("hint").value = "You guessed right! The country is " + currentFlag + ".";
		drawNewFlag();

	
	} else {
	 	if(tries == 4) {
		  if(window.confirm("Sorry ! Your chances are over. The country was  " + currentFlag +
		  ".\nDo you want to play again?")) {
		    window.location.reload();
		 	}
		}
	}
}


function catchKeyCode() {
	if(event.keyCode == 13) {
	  guessIt();
	}
}

window.onload = new Flag(currentFlag);
