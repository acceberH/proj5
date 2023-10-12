function getColor(value) {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'orange');
    gradient.addColorStop(0.25, 'magenta');
    gradient.addColorStop(0.5, 'cyan');
    gradient.addColorStop(0.75, 'yellow');
    gradient.addColorStop(1, 'lime');
    ctx.fillStyle = gradient;
    return gradient;
}
function getYPosition(i, canvasHeight, barHeight) {
    return canvasHeight - barHeight / 2 + Math.sin(i / bufferLength * Math.PI * 2) * 50;
}
function draw() {
    requestAnimationFrame(draw);

    analyser.getByteFrequencyData(dataArray);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / bufferLength) * 2.5;
    let x = 0;

    for(let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];
        const y = getYPosition(i, canvas.height, barHeight);
        ctx.fillStyle = getColor(barHeight);
        ctx.fillRect(x, y, barWidth, barHeight / 2);
        x += barWidth + 1;
    }
}

draw();
