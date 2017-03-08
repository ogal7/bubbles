//OG softdev pd 6
/*
	document.getElementById(<ID>)           **SINGLE ELEMENT**
	document.getElementsByTagName(<TAG>)
	document.getElementsByClassName(<CLASS>)

an html file with an svg element and a clear button
a hs function that will create and return a circle svg element
a js function tht will call the funtion above and add the returned circle to the svg element
attach this draw cirlce function to the svg elemet
a js function that will clear an svg element

*/




var container = document.getElementById("vimage");
var clearBtn = document.getElementById("og");
var moveBtn = document.getElementById("move");

var change = function(e) {
	console.log("haha")
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

var move = function() {
    var bubbles = document.getElementsByTagName("circle");
    for (var i = 0, max = bubbles.length; i<max; i++){
	var currX = bubbles[i].getAttribute("cx");
	var currY = bubbles[i].getAttribute("cy");
	bubbles[i].setAttribute("cx",currX++);
	bubbles[i].setAttribute("cy",currY++);
}
}
    


container.addEventListener("click", drawCicle);
clearBtn.addEventListener("click", clear);
moveBtn.addEventListener("click", move);

