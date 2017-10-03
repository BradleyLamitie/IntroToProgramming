 function grade(){
	var one= parseInt(prompt("whats your grade"));
	if (one>=90){
		alert("A");
	}else if (one>=80&&one<90){
		alert("B");
	}else if (one>=70&&one<80){
		alert("C");
	}else if (one>=60&&one<70){
		alert("D");
	}else if (one<60){
		alert("F");
	}
 }
function grade2(){
	var one= parseInt(prompt("whats your 1st grade"));
	var two= parseInt(prompt("whats your 2nd grade"));
	if (one>90&&two>90){
		alert("WAY TO GO!!!");
	}else if (one<70||two<70){
		alert("STUDY MORE!!!");
	}else{
		alert("KEEP IT UP!");
	}

}
