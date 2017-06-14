
var countries = ["NIGERIA", "MOROCCO", "BOTSWANA", "ESTONIA", "GERMANY", "NETHERLANDS", 
"RUSSIA", "LITHUANIA"/*"FINLAND", "SWEDEN", "BELGIUM"*/];
var randomCountries = Math.floor(Math.random() * countries.length);
var currentFlag = countries[randomCountries];
countries.splice();
console.log(currentFlag);
var tries = 0;
var score = 0;

function drawNewFlag() {
	var randomCountries = Math.floor(Math.random() * countries.length);
	currentFlag = countries.splice(randomCountries, 1)[0];
	new Flag(currentFlag);
	tries = 0;
	score += 10;
	document.getElementById("score").innerHTML = "Score: " + score;
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
	    score -= 5;
	  break;
	 	case 3:
	    document.getElementById("hint").value = 
	    "Last Hint : The country name has " + currentFlag.length + " characters";
	    score -= 9;
	  break;
	  default: document.getElementById("hint").value = "No hints are available anymore!";
	}

 	if(countries.length == 0) {
 		document.getElementById("hint").value = "";
		document.getElementById("gameover").innerHTML = '<span>You won!</span><br/><br/>You guessed all flags right.<br/>Press NEW GAME to start again. <br/><br/>YOUR SCORE: ' + score;
	 	document.getElementById("guess1").readOnly = true;
	 
	} else if(guess.toUpperCase() == currentFlag) {
		document.getElementById("hint").value = "You guessed right! The country is " + currentFlag + 
		". Do You know next one as well?";
		document.getElementById("guess1").placeholder ="Which countries' flag is it?";  
		document.getElementById("guess1").value = "";
		drawNewFlag();

	} else {
	 	if(tries == 4) {
	 		document.getElementById("gameover").innerHTML = '<span>Game over</span><br/><br/>You did not guess the flag right, it was ' 
	 		+ currentFlag + '. <br/>Press NEW GAME to start again. <br/><br/>YOUR SCORE: ' + score;
	 		document.getElementById("guess1").readOnly = true;
		}
	}
}

function catchKeyCode() {
	if(event.keyCode == 13) {
	  guessIt();
	}
}

window.onload = new Flag(currentFlag);
