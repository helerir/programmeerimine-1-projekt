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
		if(currentFlag=="SIERRA LEONE"){
			g.fillStyle="#1EB53A";
			g.fillRect(25, 0, 250, 50);
			g.fillStyle="#FFFFFF";
			g.fillRect(25, 50, 250, 50);
			g.fillStyle="#0072C6";
			g.fillRect(25, 100, 250, 50);
		}
		if(currentFlag=="BELGIUM"){
			g.fillStyle="#000000";
			g.fillRect(75, 0, 50, 150);
			g.fillStyle="#FFE936";
			g.fillRect(125, 0, 50, 150);
			g.fillStyle="#FF0F21";
			g.fillRect(175, 0, 50, 150);
		}
		if(currentFlag=="REPUBLIC OF THE CONGO"){
			g.fillStyle="#009543";
			g.beginPath();
    		g.moveTo(0, 0);
    		g.lineTo(185, 0);
    		g.lineTo(0, 150);
    		g.fill();
			g.fillStyle="#FBDE4A";
			g.beginPath();
    		g.moveTo(185, 0);
    		g.lineTo(0, 150);
			g.lineTo(100, 150);
    		g.lineTo(300, 0);	
    		g.fill();
			g.fillStyle="#DC241F";
			g.beginPath();
    		g.moveTo(300, 0);
    		g.lineTo(100, 150);
			g.lineTo(300, 150);
    		g.lineTo(300, 0);	
    		g.fill();
		}
  	}
}