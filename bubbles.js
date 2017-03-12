//OG + MW softdev pd 6
/*
	document.getElementById(<ID>)           **SINGLE ELEMENT**
	document.getElementsByTagName(<TAG>)
	document.getElementsByClassName(<CLASS>)

Create an html/js program with the following features
An svg container
2 buttons, one labeled clear, the other labeled move
Enable the following event listeners for the svg area
Clicking on a blank section of the sag area should create a circle at that position
Clicking on a circle once should change its color, no new circles should be added to the svg container
Clicking on a circle a second time should remove the circle and add a new one to the svg container at a random location
Don't put this all in a single event listener
When the "move" button is clicked, the circles should start to move around the svg container, bouncing off the walls
The other event listeners should still function as described above.
*/


var container = document.getElementById("vimage");
var clearBtn = document.getElementById("og");
var moveBtn = document.getElementById("move");
var reqId;
var x = container.getAttribute("width")/2;
var y = container.getAttribute("height")/2;


var change = function(e) {
	console.log("haha");
	if (this.getAttribute("fill") == "pink") {
		container.removeChild(this);
		var c = createCircle(Math.random()*500,Math.random()*500);	
		container.appendChild(c);
		e.stopPropagation();
	}
	else {
		this.setAttribute("fill", "pink");
		e.stopPropagation();
	}
	
	
}

var createCircle = function (x,y) {
	var c =	document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("fill", "blue");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 20);
    c.setAttribute("right", 1);
    c.setAttribute("down", 1);
    c.addEventListener("click", change);
    return c;
}
var drawCicle = function(e) {
	var f = createCircle(event.offsetX, event.offsetY);
	container.appendChild(f);
}

var clear = function() {
	var list = document.getElementsByTagName("circle");
	while (list.length != 0) {
		container.removeChild(list[0]);
	}
}

var clearOne = function(e) {
	container.removeChild(e)
}


var move = function() {
	window.cancelAnimationFrame( reqId );

  	var floatyBubbbles = function(){
	    var bubbles = document.getElementsByTagName("circle");
	    var i = 0;
		while (i < bubbles.length && bubbles.length > 0) {
			var x = bubbles[i].getAttribute("cx");
			var y = bubbles[i].getAttribute("cy");
			var rad = bubbles[i].getAttribute("r");
			var newRad = Math.round(.5 * bubbles[i].getAttribute("r"));
			var right = bubbles[i].getAttribute("right");
			var down = bubbles[i].getAttribute("down");

			if (newRad <= 1) {
				container.removeChild(bubbles[i]);
				i--;}

			else {
				//split bubble
				if (x == 250) {
					if (right==1){var newOne = createCircle(x-1,y);
					newOne.setAttribute("right", 0);}
					else{var newOne = createCircle(x-(-1),y);
					newOne.setAttribute("right", 1);}
					if (down==1){newOne.setAttribute("down", 1);}
					else{newOne.setAttribute("down", 0);}
					bubbles[i].setAttribute("r",newRad);
					newOne.setAttribute("r", newRad);
					container.appendChild(newOne);
				}

				//boundaries
		    	if (x >= 500) { bubbles[i].setAttribute("right", 0); }
		    	if (x <= 0) { bubbles[i].setAttribute("right", 1);  }
		    	if (y <= 0) { bubbles[i].setAttribute("down", 1); }
		    	if (y >= 500) { bubbles[i].setAttribute("down", 0);  }

		    	//moving
		    	if (right == 1) { x++; }
		    	else  { x--; }
		    	if (down == 1) { y++; }
		    	else { y--; }
		    	bubbles[i].setAttribute("cx",x);
		    	bubbles[i].setAttribute("cy",y);
	    	}
	    	i++;
		}
	    reqId = window.requestAnimationFrame(floatyBubbbles);
	  }
	  floatyBubbbles();
}


container.addEventListener("click", drawCicle);
clearBtn.addEventListener("click", clear);
moveBtn.addEventListener("click", move);

