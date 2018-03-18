
var step = 0;

function readFunction(leftRight, steps) {
	console.log(leftRight + "/" + steps);
	
	var firstFade;
	if(leftRight == "left"){
		firstFade = "right";
	}else{
		firstFade = "left";
	}
	
	//first fade
	document.getElementById("q" + steps).getElementsByClassName(firstFade)[0].childNodes[0].style.opacity = "0";
	
	//fade out selected
	document.getElementById("q" + steps).getElementsByClassName(firstFade)[0].childNodes[0].addEventListener("transitionend", function(event) {
		document.getElementById("q" + steps).getElementsByClassName(leftRight)[0].style.opacity = "0";
	}, false);
	
	//grow selected
	document.getElementById("q" + steps).getElementsByClassName(leftRight)[0].addEventListener("transitionend", function(event) {
		//alert("kk")
		document.getElementById("q" + steps).getElementsByClassName(leftRight)[0].style.width = "0%";
	}, false);
	    
};

var images = document.getElementsByClassName("image");

for (var i = 0; i < images.length; i++) {
	images[i].id = i;
    images[i].addEventListener('click', function(event) {
    	console.log("clicked" + this.getAttribute('id'));
    	
    	var leftRight;
    	if(this.parentNode.className == "left"){
    		leftRight = "left";
	    }else{
    		leftRight = "right";
    	}
    	
    	readFunction(leftRight, step);
    	
    	step++;
    	
    }, false);
    
}

document.getElementById("q" + step).style.visibility = "visible"; 
 
 