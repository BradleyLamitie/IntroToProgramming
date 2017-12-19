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
	 
	 // Check every possible wining combination
	if(document.getElementById(0).value ==  document.getElementById(1).value && document.getElementById(1).value ==  document.getElementById(2).value &&document.getElementById(1).value == player){ 
    		alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)"; // Check if (0,1,2) has been achieved
  	}else if(document.getElementById(3).value ==  document.getElementById(4).value && document.getElementById(4).value ==  document.getElementById(5).value &&document.getElementById(4).value == player){
			alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)";
	}else if(document.getElementById(6).value ==  document.getElementById(7).value && document.getElementById(7).value ==  document.getElementById(8).value &&document.getElementById(7).value == player){
			alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)";
	}else if(document.getElementById(0).value ==  document.getElementById(3).value && document.getElementById(3).value ==  document.getElementById(6).value &&document.getElementById(3).value == player){
			alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)";
	}else if(document.getElementById(1).value ==  document.getElementById(4).value && document.getElementById(4).value ==  document.getElementById(7).value &&document.getElementById(4).value == player){
			alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)";
	}else if(document.getElementById(2).value ==  document.getElementById(5).value && document.getElementById(5).value ==  document.getElementById(8).value &&document.getElementById(5).value == player){
			alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)";
	}else if(document.getElementById(0).value ==  document.getElementById(4).value && document.getElementById(4).value ==  document.getElementById(8).value &&document.getElementById(4).value == player){
			alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)";
	}else if(document.getElementById(2).value ==  document.getElementById(4).value && document.getElementById(4).value ==  document.getElementById(6).value &&document.getElementById(4).value == player){
			alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)";
	}else{
		changeplayer(); // nobody wins, change player
	}

 }