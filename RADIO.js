	
function afficherRadio() {
 var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");
ctx.beginPath();
ctx.lineWidth = "6";
ctx.strokeStyle = "red";
ctx.rect(5, 20, 255, 100);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(15, 30, 235, 30);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "blue";
ctx.arc(230, 100, 10, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "blue";
ctx.arc(190, 100, 10, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "blue";
ctx.arc(150, 100, 10, 0, 2 * Math.PI);
ctx.stroke();
 }
function enleverRadio() {
    var d = document.getElementById("myCanvas");
var ctx = d.getContext("2d");
ctx.beginPath();
ctx.lineWidth = "100";
ctx.strokeStyle = "grey";
ctx.rect(5, 20, 255, 100);
ctx.stroke();
}

		
