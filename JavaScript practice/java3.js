function honorific(){
var age = parseInt(prompt("What is the person's age?"));
var gender  = prompt("What is the person's gender (male/female)?");
var honorific;
if (gender=="male"){
	if(age<18){
		honorific= "master";
	}else{
		honorific= "mister";
	}
}
if (gender=="female"){
	if(age<18){
		honorific= "miss";
	}else{
		honorific= "ms.";
	}
}



alert(" The person shall be called "+honorific);
}
