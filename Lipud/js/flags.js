class Flag {
  constructor(currentFlag) {
		var g=document.getElementById("flag-board").getContext("2d");
		g.clearRect(0, 0, g.canvas.width, g.canvas.height);
		if(currentFlag=="NIGERIA") {
			g.fillStyle="#008753";
			g.fillRect(0, 0, 100, 150);
			g.fillRect(200, 0, 100, 150);
			g.fillStyle="#ffffff";
			g.fillRect(100, 0, 100, 150);
		}
		if(currentFlag=="BOTSWANA") {
		 	g.fillStyle="#ffffff";
		 	g.fillRect(25, 0, 250, 150);
		 	g.fillStyle="#75AADB";
		 	g.fillRect(25, 0, 250, 50);
		 	g.fillRect(25, 100, 250, 50);
		 	g.fillStyle="#000000";
		 	g.fillRect(25, 55, 250, 40);
		}
		if(currentFlag=="MOROCCO") {
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
			g.fillStyle="#0072CE";
			g.fillRect(25, 0, 250, 50);
			g.fillStyle="#000000";
			g.fillRect(25, 50, 250, 50);
			g.fillStyle="#ffffff";
			g.fillRect(25, 100, 250, 50);
		}
		if(currentFlag=="GERMANY"){
			g.fillStyle="#000000";
			g.fillRect(25, 0, 250, 50);
			g.fillStyle="#ff0000";
			g.fillRect(25, 50, 250, 50);
			g.fillStyle="#ffcc00";
			g.fillRect(25, 100, 250, 50);
		}
		if(currentFlag=="NETHERLANDS"){
			g.fillStyle="#ae1c28";
			g.fillRect(25, 0, 250, 50);
			g.fillStyle="#ffffff";
			g.fillRect(25, 50, 250, 50);
			g.fillStyle="#21468b";
			g.fillRect(25, 100, 250, 50);
		}
		if(currentFlag=="RUSSIA"){
			g.fillStyle="#ffffff";
			g.fillRect(25, 0, 250, 50);
			g.fillStyle="#0039a6";
			g.fillRect(25, 50, 250, 50);
			g.fillStyle="#d52b1e";
			g.fillRect(25, 100, 250, 50);
		}
		if(currentFlag=="LITHUANIA"){
			g.fillStyle="#fdb913";
			g.fillRect(25, 0, 250, 50);
			g.fillStyle="#006a44";
			g.fillRect(25, 50, 250, 50);
			g.fillStyle="#c1272d";
			g.fillRect(25, 100, 250, 50);
		}
  }
}