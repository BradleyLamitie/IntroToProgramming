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
	 
	 
 }
 
 function changeplayer(){
	 
	 var player;
	 
	 if (document.getElementById("currentplayer").innerHTML=="X"){
		 document.getElementById("currentplayer").innerHTML= "0";
	 }else{
		 document.getElementById("currentplayer").innerHTML= "X";
	 }
 }