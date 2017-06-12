class Flag {
  constructor(currentFlag) {
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
}