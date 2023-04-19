const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const x = canvas.getBoundingClientRect().width / 2;
const y = canvas.getBoundingClientRect().height / 2;
const width = canvas.getBoundingClientRect().width;
const height = canvas.getBoundingClientRect().height;

let isDrawing = false;

const draw = (x, y) => {
    context.beginPath();
    context.arc(x, y, 30, 0, Math.PI * 2, false);
    context.stroke();
}

draw(x, y);

document.addEventListener("mouseup", () => {
    isDrawing = false;
});

document.addEventListener("mousedown", (e) => {
    if (context.isPointInPath(e.clientX, e.clientY)) {
        isDrawing = true;
    }
});

document.addEventListener("mousemove", e => {
    if (isDrawing) {
        context.clearRect(0, 0, width, height);
        draw(e.clientX, e.clientY);
    }
});

