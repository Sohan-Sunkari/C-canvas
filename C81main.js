var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");
color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mouseDown);
function my_mouseDown(e){
    mousex = e.clientX - canvas.offsetLeft;
    mousey = e.clientY - canvas.offsetTop;

    circle(mousex,mousey);
}

function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mousex, mousey, 40, 0, 2 * Math.PI);
    ctx.stroke();

}
