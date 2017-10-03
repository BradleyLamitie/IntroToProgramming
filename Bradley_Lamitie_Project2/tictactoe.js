 function set(idvalue){
	 // find the button clicked by id
	 
	 var buttonclicked = document.getElementById(idvalue);
	 
	 var player;
	 
	 if(buttonclicked.value==""||buttonclicked.value==null){
		 if (document.getElementById("currentplayer").innerHTML=="X"){
		 player= "X";
		}else{
		 player="O";
	 }
	 buttonclicked.value=player;
	 
	 buttonclicked.innerHTML=player;
	 changeplayer();
	 }else{
		 alert("A player has already selected this button!")
	 }
	 
	 win();
 }
 
 function changeplayer(){
	 
	 var player;
	 
	 if (document.getElementById("currentplayer").innerHTML=="X"){
		 document.getElementById("currentplayer").innerHTML= "0";
	 }else{
		 document.getElementById("currentplayer").innerHTML= "X";
	 }
 }
 
 function win(){
	 var zero = document.getElementById("0").innerHTML;
	 var one = document.getElementById("1").innerHTML;
	 var two = document.getElementById("2").innerHTML;
	 var three = document.getElementById("3").innerHTML;
	 var four = document.getElementById("4").innerHTML;
	 var five = document.getElementById("5").innerHTML;
	 var six = document.getElementById("6").innerHTML;
	 var seven = document.getElementById("7").innerHTML;
	 var eight = document.getElementById("8").innerHTML;
	console.log(zero);
	if ((zero!="")&&(two!="")&&(four!="")&&(six!="")&&(eight!="")&&
	((zero==one&&one==two)||(three==four&&four==five)||(six==seven&&seven==eight)||
	(zero==four&&four==eight)||(two==four&&four==six)||(zero==three&&three==six)||(one==four&&four==seven)||
	(two==five&&five==eight))){
				if(document.getElementById("currentplayer").innerHTML=="O"){
					alert("O wins!!!");
					alert("hit ctrl and R to replay or just press the reset button below");
			document.getElementById("reset").innerHTML="RESET BUTTON!";
	
				}else{
					alert("X wins!!!")
					alert("hit ctrl and R to replay or just press the reset button below");
			document.getElementById("reset").innerHTML="RESET BUTTON!";
			victory();
	
				
	}else if((zero==null||zero=="")||(one==null||one=="")||(two==null||two=="")||(three==null||three=="")
			||(four==null||four=="")||(five==null||five=="")||(six==null||six=="")||(seven==null||seven=="")||
			(eight==null||eight=="")){
				console.log("Miss you guys a bunch!");
				console.log("KEEP PLAYING!!! SECRETLY CHEERING FOR SAM OR CAITLIN OR TBONE ,even though she smells!!!!!!");
	}else{
			alert("TIE!!! hit ctrl and R to replay or just press the reset button below");
			document.getElementById("reset").innerHTML="RESET BUTTON!";
	}
		
 }
 
 function victory(){
	 var winner= prompt("WHO WON?");
	 if (winner=="Sam"||winner=="doodlebug"){
		 document.getElementById("sam").innerHTML= "Victory for SAM";
	 }else if (winner=="Faff"||winner=="Chris"){
		 document.getElementById("faff").innerHTML= "Victory for Faff";
	 }else if (winner=="Josh"){
		 document.getElementById("josh").innerHTML= "Victory for Josh";
	 }else if (winner=="Cait"||winner=="Caitlin"){
		 document.getElementById("cait").innerHTML= "Victory for Caitlin... Somehow?";
	 }else if (winner=="Taylor"||winner=="Tbone"){
		 document.getElementById("tay").innerHTML= "Victory for TBONE! Stand up and take a bow!";
	 }else if (winner=="Erin"){
		 alert("Good job Erin!");
	 }else if (winner=="Shannon"){
		 alert("Good job SHANSY!!! BTW Panic is better");
	 }else if(winner=="Mommom"){
		 alert("LOVE YOU MOMMOM!!!");
	 }else if(winner=="Poppop"){
		 alert("WOOO POPPOP Cheese my boy!!");
	 }else
		 alert("I DONT RECOGNIZE THAT FOOKIN NAME!");
	 }
 
 function taylor(){
	 document.getElementById("tay2").innerHTML="JK TBONE HERES YOUR REAL MUSIC";
 }