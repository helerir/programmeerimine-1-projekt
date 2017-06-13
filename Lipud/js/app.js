
var countries = ["NIGERIA", "MOROCCO", "BOTSWANA", "ESTONIA", "GERMANY", "NETHERLANDS", 
"RUSSIA", "LITHUANIA"/*"FINLAND", "SWEDEN", "BELGIUM"*/];
var randomCountries = Math.floor(Math.random() * countries.length);
//var randomCountries = shuffle(countries);
var currentFlag = countries[randomCountries];
console.log(currentFlag);
var tries = 0;
var score = 0;

function drawNewFlag() {
	var randomCountries = Math.floor(Math.random() * countries.length);
	currentFlag = countries[randomCountries];
	new Flag(currentFlag);
	tries = 0;
	score += 10;
	document.getElementById("score").innerHTML = "Score: " + score;
}
/*
function shuffle(array) {
       
    var ctr = array.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = array[ctr];
        array[ctr] = array[index];
        array[index] = temp;

        
    }

    return array;
}
*/
/*function noRepeat() {

var myList = new Array();
for (var i = countries[0]; i <= countries.length; i++) {
	myList.push(i);
}

	myList.sort(function (a, b) {
		return Math.floor(Math.random() * 2) - 1;
	});

	var myNums = myList.splice(0, );
	alert(myNums)

}*/

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
		document.getElementById("hint").value = "You guessed right! The country is " + currentFlag + 
		". Do You know next one as well?";
		document.getElementById("guess1").placeholder ="Which countries' flag is it?";  
		document.getElementById("guess1").value = "";
		drawNewFlag();
		countryList();

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
