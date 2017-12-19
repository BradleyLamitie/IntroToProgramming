var question = 0;
var total =0;
var right = 0;
function truefalse(option){
	if(question==0){
		if (option==true){
			total=total+1;
			document.getElementById("correct").innerHTML="Incorrect!";
		}else{
			right=total +1;
			total=total+1;
			document.getElementById('correct').innerHTML="Correct!";

		}
		document.getElementById('current').innerHTML=("Current score: " + right + "out of " + total + "("+ ((right/total)*100) +"%)");

		document.getElementById('correction').innerHTML="He says it looks like An abandoned theme park.";

		question=question+1;
	}else if(question==1){
		if (option==false){
			total=total+1;
			document.getElementById('correct').innerHTML="Incorrect!";
		}else{
			right=right +1;
			total=total+1;
			document.getElementById('correct').innerHTML="Correct!";

		}
		document.getElementById('current').innerHTML=("Current score: "+ right + "out of " + total+ "("+ ((right/total)*100) +"%)");

		document.getElementById('correction').innerHTML="Inside the jar is mustard";
		question=question+1;
	}else if(question==2){
		if (option==true){
			total=total+1;
			document.getElementById('correct').innerHTML="Incorrect!";
		}else{
			right=right +1;
			total=total+1;
			document.getElementById('correct').innerHTML="Correct!";

		}
		document.getElementById('current').innerHTML=("Current score: "+ right + "out of " + total+ "("+ ((right/total)*100) +"%)");

		document.getElementById('correction').innerHTML="Haku's eyes are green";
		question=question+1;
		}else if(question==3){
		if (option==true){
			total=total+1;
			document.getElementById('correct').innerHTML="Incorrect!";
		}else{
			right=right +1;
			total=total+1;
			document.getElementById('correct').innerHTML="Correct!";

		}
		document.getElementById('current').innerHTML=("Current score: "+ right + "out of " + total+ "("+ ((right/total)*100) +"%)");

		document.getElementById('correction').innerHTML="He has 3 fingers";
		question=question+1;
		}else if(question==4){
		if (option==false){
			total=total+1;
			document.getElementById('correct').innerHTML="Incorrect!";
		}else{
			right=right +1;
			total=total+1;
			document.getElementById('correct').innerHTML="Correct!";

		}
		document.getElementById('current').innerHTML=("Current score: "+ right + "out of " + total+ "("+ ((right/total)*100) +"%)");

		document.getElementById('correction').innerHTML="A bicycle was stuck in the river spirit";
		question=question+1;
	
	}
	document.getElementById("true").disabled='disabled';
	document.getElementById("false").disabled='disabled';
	console.log(question);

}
function next1(){
	if(question == 1){
		document.getElementById("image").src="2nd.jpg";
		document.getElementById("question").innerHTML="Mustard is inside the little cup.";


	}else if(question == 2){
		document.getElementById("image").src="3rd.jpg";
		document.getElementById("question").innerHTML="Haku's eyes are blue";
		

	}else if(question == 3){
		document.getElementById("image").src="4th.jpg";
		document.getElementById("question").innerHTML="Kamaji has 5 fingers.";

	}else if(question == 4){
		document.getElementById("image").src="5th.jpg";
		document.getElementById("question").innerHTML="A bicycle is stuck in the River Spirit.";

	}else if(question ==5){
		document.getElementById("image").src="";
		document.getElementById("question").innerHTML="";
	document.getElementById("quest").innerHTML="Quiz Complete!";

	}
		document.getElementById('correction').innerHTML="";

	document.getElementById("quest").innerHTML="Question "+ (question+1);
	document.getElementById("true").disabled=false;
	document.getElementById("false").disabled=false;
	console.log(question);
	if(question ==5){
		document.getElementById("image").src="";
		document.getElementById("question").innerHTML="";
	document.getElementById("quest").innerHTML="Quiz Complete!";
	document.getElementById("true").disabled=true;
	document.getElementById("false").disabled=true;
	document.getElementById("next").disabled=true;
	document.getElementById('correct').innerHTML="";
	document.getElementById('current').innerHTML=("Final score: "+ right + " out of " + total+ "("+ ((right/total)*100) +"%)");
	}
}