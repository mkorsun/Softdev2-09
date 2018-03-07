var pic = document.getElementById("svg_id");

var clears = function(e) {
    while (pic.hasChildNodes()){
	pic.removeChild(pic.firstChild)
    }
}



var cbutton = document.getElementById("clear");
cbutton.addEventListener("click",clears);





var circle = function(cx,cy,rad){
    var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circ.setAttribute("cx",cx+"" );
    circ.setAttribute("cy",cy+"");
    circ.setAttribute("r",rad+"");
    circ.setAttribute("fill","black");
    circ.setAttribute("stroke","black");
    circ.addEventListener("click", click2);
    pic.appendChild(circ);
}

var click1 = function(e){
    circle(e.offsetX, e.offsetY, 25);
}


var click2 = function(e){
    this.setAttribute("fill", "red" );
    this.setAttribute("stroke" , "red");
    this.addEventListener("click",click3);
    e.stopPropagation();
}

var click3 = function(e){
    this.setAttribute("cx", Math.random() * 500);
    this.setAttribute("cy", Math.random() * 500);
    this.setAttribute("fill","black");
    this.setAttribute("stroke","black");    
    this.addEventListener("click", click2);
    e.stopPropagation();
    this.removeEventListener("click",click3)
}
    

pic.addEventListener("click",click1);
