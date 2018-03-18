
var step = 0;

function readFunction(leftRight, steps) {
	console.log(leftRight + "/" + steps);
	
	var firstFade;
	if(leftRight == "left"){
		firstFade = "right";
	}else{
		firstFade = "left";
	}
	document.getElementById("q" + steps).getElementsByClassName(firstFade)[0].setAttribute("class", "fadeOut");
	    
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
    
    
    //images[i].addEventListener(transitionEvent, function() {
	//	console.log('Transition complete!  This is the callback, no library needed!');
	//});
}

document.getElementById("q" + step).style.visibility = "visible"; 
 
 