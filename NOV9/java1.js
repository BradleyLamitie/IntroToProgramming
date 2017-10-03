 function largethan(){
	 var one= parseInt(prompt("Pick an integer"));
	 var two= parseInt(prompt("Pick an integer"));
	 if(one>10&&two>10){
		 alert("both numbers are greater than ten");
	 }else if(one>10||two>10){
		 alert("one of your numbers is greater than ten");
	 }else{
		 alert("none of your numbers are greater than ten");
	 }
 }