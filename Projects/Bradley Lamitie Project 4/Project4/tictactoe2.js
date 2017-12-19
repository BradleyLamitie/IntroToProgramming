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
	 var num0 = document.getElementById(0).value;
	 var num1 = document.getElementById(1).value;
	 var num2 = document.getElementById(2).value;
	 var num3 = document.getElementById(3).value;
	 var num4 = document.getElementById(4).value;
	 var num5 = document.getElementById(5).value;
	 var num6 = document.getElementById(6).value;
	 var num7 = document.getElementById(7).value;
	 var num8 = document.getElementById(8).value;
	 var num9 = document.getElementById(9).value;
	 var num10 = document.getElementById(10).value;
	 var num11 = document.getElementById(11).value;
	 var num12 = document.getElementById(12).value;
	 var num13 = document.getElementById(13).value;
	 var num14 = document.getElementById(14).value;
	 var num15 = document.getElementById(15).value;

	 // Check every possible wining combination
	if(num0 ==  num1 && num1 ==  num2 &&num2 == num3 && num1 == player){ 
    		alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)"; //check if win has been achieved for this set of #s
  	}else if(num4 ==  num5 && num5 ==  num6 &&num6 == num7 && num4 == player){ 
    		alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)"; //check if win has been achieved for this set of #s
  	}else if(num8 ==  num9 && num9 ==  num10 &&num10 == num11 && num8 == player){ 
    		alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)"; //check if win has been achieved for this set of #s
  	}else if(num12 ==  num13 && num13 ==  num14 &&num14 == num15 && num12 == player){ 
    		alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)"; //check if win has been achieved for this set of #s
  	}else if(num0 ==  num4 && num4 ==  num8 &&num8 == num12 && num12 == player){ 
    		alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)"; //check if win has been achieved for this set of #s
  	}else if(num1 ==  num5 && num5 ==  num9 &&num9 == num13 && num13 == player){ 
    		alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)"; //check if win has been achieved for this set of #s
  	}else if(num2 ==  num6 && num6 ==  num10 &&num10 == num14 && num14 == player){ 
    		alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)"; //check if win has been achieved for this set of #s
  	}else if(num3 ==  num7 && num7 ==  num11 &&num11 == num15 && num15 == player){ 
    		alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)"; //check if win has been achieved for this set of #s
  	}else if(num0 ==  num5 && num5 ==  num10 &&num10 == num15 && num0 == player){ 
    		alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)"; //check if win has been achieved for this set of #s
  	}else if(num3 ==  num6 && num6 ==  num9 &&num9 == num12 && num12 == player){ 
    		alert("You win! The winner is "+ player);
			document.getElementById("sam").innerHTML = "Victory Song (Victorious by Patd!)"; //check if win has been achieved for this set of #s
  	}else{
		changeplayer(); // nobody wins, change player
	}

 }