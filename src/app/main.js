const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.beginPath();
context.moveTo(50, 100);
context.lineTo(250, 100);
context.stroke();
