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

//var moveBubbles = function(bubble,right,down) {

/*
var dvd = function() {
	var yDec = false;
	var xDec = false;
	window.cancelAnimationFrame( reqId );

	var bounceySquare = function () {
		Astop();
		//c.clearRect(0,0,canvas.width,canvas.height);
		//c.beginPath();
		//c.drawImage(img, xcor, ycor);
		drawImg(xcor,ycor);

		//c.fillRect(xcor,ycor,50,5
		if (xDec) {
			xcor --;
		}
		else {
			xcor ++;
		}
		if (yDec) {
			ycor --;
		}
		else {
			ycor++;
		}
		if (ycor + 60 >= 2*y) {
			yDec = true;
			console.log("ugh");
		}
		if (xcor + 60 >= 2*x) {
			xDec = true;
			console.log("ughh");
		}
		if (ycor <= 0) {
			yDec = false;
			console.log("ughhh");
		}
		if (xcor <= 0) {
			xDec = false;
			console.log("ughhhh");
		}
		reqId = window.requestAnimationFrame (bounceySquare)
	}
	bounceySquare();
}

*/





var move = function() {
	var yDec = false;
	var xDec = false;
	//var xcor;
	//var ycor;
	window.cancelAnimationFrame( reqId );

	var floatyBubbbles = function() {
		//clear();
		var bubbles = document.getElementsByTagName("circle");
		for (var i = 0, max = bubbles.length; i<max; i++){
			var xcor = bubbles[i].getAttribute("cx");
			var ycor = bubbles[i].getAttribute("cy");
			if (xDec) {
				xcor --;
			}
			else {
				xcor ++;
			}
			if (yDec) {
				ycor --;
			}
			else {
				ycor++;
			}
			if (ycor + 60 >= 2*y) {
				yDec = true;
				console.log("ugh");
			}
			if (xcor + 60 >= 2*x) {
				xDec = true;
				console.log("ughh");
			}
			if (ycor <= 0) {
				yDec = false;
				console.log("ughhh");
			}
			if (xcor <= 0) {
				xDec = false;
				console.log("ughhhh");
			}
			bubbles[i].setAttribute("cx",xcor);
			bubbles[i].setAttribute("cy",ycor);
		}
		reqId = window.requestAnimationFrame(floatyBubbbles);
	}
	floatyBubbbles()
}


  


container.addEventListener("click", drawCicle);
clearBtn.addEventListener("click", clear);
moveBtn.addEventListener("click", move);

