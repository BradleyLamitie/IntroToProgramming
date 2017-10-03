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
	 check_win();
	 }else{
		 alert("A player has already selected this button!")
	 }
	 
	 
 }
 
 function changeplayer(){
	 
	 if (document.getElementById("currentplayer").innerHTML=="X"){
		 document.getElementById("currentplayer").innerHTML= "0";
	 }else{
		 document.getElementById("currentplayer").innerHTML= "X";
	 }
 }
 
 function check_win(){
	var player;
	if (document.getElementById("currentplayer").innerHTML=="X"){
		 player= "X";
		}else{
		 player="O";
		}
	 var win =0;
	 // Check every possible wining combination
	if(document.getElementById(0).value ==  document.getElementById(1).value && document.getElementById(1).value ==  document.getElementById(2).value &&document.getElementById(1).value == player){ 
    		alert("You win! The winner is "+ player);
win=1;
	}else if(document.getElementById(3).value ==  document.getElementById(4).value && document.getElementById(4).value ==  document.getElementById(5).value &&document.getElementById(4).value == player){
			alert("You win! The winner is "+ player);
			win=1;
	}else if(document.getElementById(6).value ==  document.getElementById(7).value && document.getElementById(7).value ==  document.getElementById(8).value &&document.getElementById(7).value == player){
			alert("You win! The winner is "+ player);
win=1;
	}else if(document.getElementById(0).value ==  document.getElementById(3).value && document.getElementById(3).value ==  document.getElementById(6).value &&document.getElementById(3).value == player){
			alert("You win! The winner is "+ player);
win=1;
	}else if(document.getElementById(1).value ==  document.getElementById(4).value && document.getElementById(4).value ==  document.getElementById(7).value &&document.getElementById(4).value == player){
			alert("You win! The winner is "+ player);
win=1;
	}else if(document.getElementById(2).value ==  document.getElementById(5).value && document.getElementById(5).value ==  document.getElementById(8).value &&document.getElementById(5).value == player){
			alert("You win! The winner is "+ player);
win=1;
	}else if(document.getElementById(0).value ==  document.getElementById(4).value && document.getElementById(4).value ==  document.getElementById(8).value &&document.getElementById(4).value == player){
			alert("You win! The winner is "+ player);
win=1;
	}else if(document.getElementById(2).value ==  document.getElementById(4).value && document.getElementById(4).value ==  document.getElementById(6).value &&document.getElementById(4).value == player){
			alert("You win! The winner is "+ player);
win=1;
	}else if((document.getElementById(0).value != "")&&(document.getElementById(1).value != "")&&(document.getElementById(2).value != "")&&(document.getElementById(3).value != "")&&(document.getElementById(4).value != "")&&
(document.getElementById(5).value != "")&&(document.getElementById(6).value != "")&&(document.getElementById(7).value != "")&&(document.getElementById(8).value != "")){
		alert("Tie!!! Noone Wins!!!");
document.getElementById("reset").innerHTML = "RESET BUTTON!";
	}else if((document.getElementById(0).value != "")||(document.getElementById(1).value != "")||(document.getElementById(2).value != "")||(document.getElementById(3).value != "")||(document.getElementById(4).value != "")||
(document.getElementById(5).value != "")||(document.getElementById(6).value != "")||(document.getElementById(7).value != "")||(document.getElementById(8).value != "")){
		changeplayer(); // nobody wins, change player
	
	}
	
	if(win>0){
		victory();
document.getElementById("reset").innerHTML = "RESET BUTTON!";
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
		 alert("Good job SHANSY!!! BTW Panic is batter");
	 }else if(winner=="Mommom"){
		 alert("LOVE YOU MOMMOM!!!");
	 }else if(winner=="Poppop"){
		 alert("WOOO POPPOP Cheese my boy!!");
	 }else if(winner=="Trump"){
		  document.getElementById("Trump").innerHTML= "Victory for Trump";
	 }else if(winner=="Hillary"){
		 alert("BOOOO!!!!");
 document.getElementById("Hillary").innerHTML= "Victory for Hillary";
	 }else
		 alert("I DONT RECOGNIZE THAT FOOKIN NAME!");
	 }
 
 function taylor(){
	 document.getElementById("tay2").innerHTML="JK TBONE HERES YOUR REAL MUSIC";
 }