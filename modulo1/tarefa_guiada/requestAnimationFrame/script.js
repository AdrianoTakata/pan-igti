const cv = document.getElementById("cv");
const ctx = cv.getContext("2d");

const pos = [50, 50]; // posição 
const speed = [40, 40]; // velocidade-x, velocidade-y em pix/s
const size = 500;
let lastTime;

function draw(time) {
    if (!lastTime) {
        lastTime = time;
    }
    const ellapsedTimeS = (time - lastTime) / 1000;
    lastTime = time;

    ctx.fillStyle = "rgb(20, 100, 100)"
    ctx.clearRect(0, 0, size, size);
    // ctx.fillRect(60, 80, 60, 30) // position-x, position-y, width, height
    ctx.beginPath();
    pos[0] += ellapsedTimeS * speed[0];
    pos[1] += ellapsedTimeS * speed[1];

    pos[0] = pos[0] >= size ? pos[0] % size : pos[0];
    pos[1] = pos[1] >= size ? pos[1] % size : pos[1];
    ctx.arc(pos[0], pos[1], 20, 0, 2*Math.PI, true);
    ctx.fill();

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
