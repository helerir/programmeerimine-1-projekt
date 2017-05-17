	
	var country = ["NIGERIA", "MOROCCO", "BOTSWANA", "ESTONIA", "FINLAND", "SWEDEN", 
	"NETHERLANDS", "GERMANY", "BELGIUM"];

	var randomCountry = country[Math.floor(Math.random()*country.length)];


	/* stores the country name */
 	var temp = country[randomCountry];
	/* declaring and initializing tries */
 	var tries = 0;

 	/* the main function */
 	function guessIt() {
 		var guess = document.input.guess.value;
 		tries++;
 
   		window.status = "You have " + tries + "tries left!"
   		switch(tries) {
 			case 1:
     			document.input.hint.value = 
     			"First Hint : The country name starts with " + temp.charAt(0);
     		break;
     		case 2:
     			document.input.hint.value = 
     			"Second Hint : The country name ends with " + temp.charAt(temp.length - 1);
     		break;
 			case 3:
     			document.input.hint.value = 
     			"Last Hint : The country name has " + temp.length + " characters";
     		break;
     		default: document.input.hint.value = "No hints are available anymore!";
     	}
 
   		if(guess.toUpperCase() == temp) { /* if guess equals to temp */
     		if(window.confirm("Absolutely Right ! The country was " + temp + "\nDo you want to play again?")) {
      			window.location.reload();     /* reloads the page for a new game */
     		}
      	}	else	{
 			if(tries == 5) {/* game over */
    			if(window.confirm("Sorry ! Your chances are over. The country was  " + temp + 
    			"\nDo you want to play again?")) {
      				window.location.reload(); /* reloads the page for a new game */
 				}
 			}
   		}
 	}


		/* var currentFlag="nigeria";
		function draw() {
			var g=document.getElementById("board").getContext("2d");
			if(currentFlag=="nigeria") {
				g.clearRect(100, 100, 500, 300);
				g.fillStyle="#008753";
				g.fillRect(100, 100, 150, 200);
				g.fillRect(400, 100, 150, 200);
				g.fillStyle="#ffffff";
				g.fillRect(250, 100, 150, 200);
 			}
 			if(currentFlag=="botswana"){
 				g.clearRect(100, 100, 500, 300);
 				g.fillStyle="#ffffff";
 				g.fillRect(100, 200, 450, 50);
 				g.fillStyle="#75AADB";
 				g.fillRect(100, 100, 450, 100);
 				g.fillRect(100, 250, 450, 100);
 				g.fillStyle="#000000";
 				g.fillRect(100, 208, 450, 35);
			}
			if(currentFlag=="morocco"){
				g.clearRect(100, 100, 500, 300);
				g.fillStyle="#c1272d";
				g.fillRect(100, 100, 450, 250);
				g.beginPath();
				g.lineWidth=10;
				g.strokeStyle="#006233";
				g.moveTo(325, 170);
				g.lineTo(295, 270);
				g.lineTo(375, 210);
				g.lineTo(275, 210);
				g.lineTo(355, 270);
				g.lineTo(325, 170);
				g.lineTo(316, 200);
				g.stroke();
			}
		}

		function nigeriaFlag(){
			currentFlag="nigeria"; draw();
		}
		function botswanaFlag(){
			currentFlag="botswana"; draw();
		}
		function moroccoFlag(){
			currentFlag="morocco"; draw();
		}
		window.onload=draw;
		*/