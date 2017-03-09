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
    c.setAttribute("r", "20");
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
    var x = Math.random() * 300 + 100;
    var y = Math.random() * 300 + 100;
    var right = true;
    var down = true;

  	var floatyBubbbles = function(){
	    var bubbles = document.getElementsByTagName("circle");
		for (var i = 0, max = bubbles.length; i<max; i++){
			var x = bubbles[i].getAttribute("cx");
			var y = bubbles[i].getAttribute("cy");

	    if (x >= 480) { right = false; }
	    else if (x <= 0) { right = true; }
	    if (y <= 0) { down = true; }
	    else if (y >= 480) { down = false; }

	    if (right) { x++; }
	    else  { x--; }
	    if (down) { y++; }
	    else { y--; }
	    bubbles[i].setAttribute("cx",x);
	    bubbles[i].setAttribute("cy",y);
	}
	    reqId = window.requestAnimationFrame(floatyBubbbles);
	  }
	  floatyBubbbles();
}


container.addEventListener("click", drawCicle);
clearBtn.addEventListener("click", clear);
moveBtn.addEventListener("click", move);

