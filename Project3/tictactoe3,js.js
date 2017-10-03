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
	 var num16 = document.getElementById(16).value;
	 var num17 = document.getElementById(17).value;
	 var num18 = document.getElementById(18).value;
	 var num19 = document.getElementById(19).value;
	 var num20 = document.getElementById(20).value;
	 var num21 = document.getElementById(21).value;
	 var num22 = document.getElementById(22).value;
	 var num23 = document.getElementById(23).value;
	 var num24 = document.getElementById(24).value;

	 // Check every possible wining combination
	if(num0 ==  num1 && num1 ==  num2 &&num2 == num3 && num3== num4 && num1 == player){ 
    		alert("You win! The winner is "+ player); //check if win has been achieved for this set of #s
  	}else if(num5 ==  num6 && num6 ==  num7 &&num7 == num8 && num8== num9 && num5 == player){ 
    		alert("You win! The winner is "+ player); //check if win has been achieved for this set of #s
  	}elseif(num10 ==  num11 && num11 ==  num12 &&num12 == num13 && num13== num14 && num10 == player){ 
    		alert("You win! The winner is "+ player); //check if win has been achieved for this set of #s
  	}elseif(num15 ==  num16 && num16 ==  num17 &&num17 == num18 && num18== num19 && num15 == player){ 
    		alert("You win! The winner is "+ player); //check if win has been achieved for this set of #s
  	}elseif(num20 ==  num21 && num21 ==  num22 &&num22 == num23 && num23== num24 && num21 == player){ 
    		alert("You win! The winner is "+ player); //check if win has been achieved for this set of #s
  	}elseif(num0 ==  num5 && num5 ==  num10 &&num10 == num15 && num15== num20 && num10 == player){ 
    		alert("You win! The winner is "+ player); //check if win has been achieved for this set of #s
  	}elseif(num1 ==  num6 && num6 ==  num11 &&num11 == num16 && num16== num21 && num21 == player){ 
    		alert("You win! The winner is "+ player); //check if win has been achieved for this set of #s
  	}elseif(num2 ==  num7 && num7 ==  num12 &&num12 == num17 && num17== num22 && num22 == player){ 
    		alert("You win! The winner is "+ player); //check if win has been achieved for this set of #s
  	}elseif(num3 ==  num8 && num8 ==  num13 &&num13 == num18 && num18== num23 && num23 == player){ 
    		alert("You win! The winner is "+ player); //check if win has been achieved for this set of #s
  	}elseif(num4 ==  num9 && num9 ==  num14 &&num14 == num19 && num19== num24 && num24 == player){ 
    		alert("You win! The winner is "+ player); //check if win has been achieved for this set of #s
  	}elseif(num0 ==  num6 && num6 ==  num12 &&num12 == num18 && num18== num24 && num24 == player){ 
    		alert("You win! The winner is "+ player); //check if win has been achieved for this set of #s
  	}elseif(num4 ==  num8 && num8 ==  num12 &&num12 == num16 && num16== num20 && num20 == player){ 
    		alert("You win! The winner is "+ player); //check if win has been achieved for this set of #s
  	}else{
		changeplayer(); // nobody wins, change player
	}

 }