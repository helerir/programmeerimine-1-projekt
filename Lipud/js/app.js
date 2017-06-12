
var countries = ["NIGERIA", "MOROCCO", "BOTSWANA", "ESTONIA"/*"FINLAND", "SWEDEN", 
"NETHERLANDS", "GERMANY", "BELGIUM"*/];

var randomCountry = Math.floor(Math.random()*countries.length);

/* stores the country name */
var currentFlag = countries[randomCountry];
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
	 
	if(guess.toUpperCase() == currentFlag) { /* if guess equals to currentFlag */
	  if(window.confirm("Absolutely Right ! The country was " + currentFlag + ".\nDo you want to play again?")) {
	      window.location.reload();     /* reloads the page for a new game */
	  }
	} else {
	 	if(tries == 5) {/* game over */
		  if(window.confirm("Sorry ! Your chances are over. The country was  " + currentFlag +
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

window.onload = new Flag(currentFlag);
