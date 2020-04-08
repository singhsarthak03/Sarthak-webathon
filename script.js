const click = document.getElementById("dropdown");

document.addEventListener("click",op) 
console.log("ahjksnjn");
var counter=false ;

function op(){
	if(counter===false)
	{
		click.style.display="block" ;
		counter=true ;
	}
	else{
		click.style.display="none" ;
		counter=false;
	}
};