const X_BAR = Math.random() * window.innerWidth;
const Y_BAR = Math.random() * window.innerHeight;
const BAR_COLOR = "red";
const BAR_WIDTH = 30;
const BAR_HEIGHT = 10;


class Barrier {
    constructor() {
        this.x =  X_BAR
        this.y = Y_BAR
        this.width = BAR_WIDTH;
        this.height = BAR_HEIGHT;
        this.color = BAR_COLOR;
    }
    drawBar(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    moveBar(){
        this.x += 3
        if (this.x > canvas.width)
        {
            this.x = 0;
        }
    }
}