  function game(){
	 var one= prompt("Player 1: Pick rock paper or scissors");
	 var two= prompt("Player 2: Pick rock paper or scissors");
	 if(one==two){
		 alert("TIE!");
	 }else if(one=="rock"&&two=="scissors"){
		 alert("rock beats scissors. Player 1 Wins!");
	 }else if(one=="scissors"&&two=="paper"){
		 alert("scissors beats paper. Player 1 Wins!");
	 }else if(one=="paper"&&two=="rock"){
		 alert("paper beats rock. Player 1 Wins!");
	}else if(one=="rock"&&two=="paper"){
		 alert("paper beats rock. Player 2 Wins!"); 
	}else if(one=="paper"&&two=="scissors"){
		 alert("scissors beats paper. Player 2 Wins!");
	}else if(one=="scissors"&&two=="rock"){
		 alert("rock beats scissors. Player 2 Wins!");
	}else{
		alert("Somebody chose an incorrect option!!!");
	}
  }