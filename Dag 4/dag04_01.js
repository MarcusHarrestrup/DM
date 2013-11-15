window.addEventListener("load", drawTrails, true)

function createCanopyPath(context) {
// Optegning af træet
context.beginPath();
context.moveTo(-25, -50);
context.lineTo(-10, -80);
context.lineTo(-20, -80);
context.lineTo(-5, -110);
context.lineTo(-15, -110);
context.lineTo(0, -140);
context.lineTo(15, -110);
context.lineTo(5, -110);
context.lineTo(20, -80);
context.lineTo(10, -80);
context.lineTo(25, -50);
// Lukker stien tilbage til oprindelseskoordinatet.
context.closePath();
}

function drawTrails() {
var canvas = document.getElementById('trails');
var context = canvas.getContext('2d');
context.save();
context.translate(130, 250);
// Create the shape for our canopy path
createCanopyPath(context);
// Stroke the current path
context.fillStyle='#FF0000';
context.fill();
context.stroke();    

context.restore();
}