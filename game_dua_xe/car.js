const X_CAR = 390;
const Y_CAR = 560;
const SPEED = 1;
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d")
let img = document.getElementById("img");

class Car{
    constructor() {
        this.x = X_CAR;
        this.y = Y_CAR;
        this.img = img;
        this.speed = SPEED
        this.isLeft = false;
        this.isRight = false;
        this.isUp = false;
        this.isDown = false;
    }
    drawCar(){

        ctx.drawImage(this.img,this.x,this.y,180,100)
    }
    moveLeft(){
        if (this.isLeft){
            this.x -= this.speed;
        }
    }
    moveRight(){
        if (this.isRight){
            this.x += this.speed;
        }
    }
    moveUp(){
        if (this.isUp){
            this.y -= this.speed;
        }
    }
    moveDown(){
        if (this.isDown){
            this.y += this.speed;
        }
    }
    moveCar(){
        this.moveUp();
        this.moveRight();
        this.moveLeft();
        this.moveDown();
        if (this.y <= 0){
            clearInterval(startGame);
            alert("thanh cong");
        }
    }


}
let car = new Car();
car.drawCar();

let barriers = [];

 function drawBars(){
     for (let i = 0; i < 10; i++) {
         let barrier = new Barrier();
         barriers.push(barrier);
     }
 }
 // function moveBar(){
 //     // ctx.clearRect(0,0,canvas.width, canvas.height)
 //     for (let i = 0; i < barriers.length ; i++) {
 //         barriers[i].moveBar();
 //         barriers[i].drawBar();
 //     }
 // }
 

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

function onKeyDown(e){
    switch (e.which){
        case 37:
            car.isLeft = true;
            break;
        case 38:
            car.isUp = true;
            break;
        case 39:
            car.isRight = true;
            break;
        case 40:
            car.isDown = true;
    }
}
function onKeyUp(e){
    switch (e.which){
        case 37:
            car.isLeft = false;
            break;
        case 38:
            car.isUp = false;
            break;
        case 39:
            car.isRight = false;
            break;
        case 40:
            car.isDown = false;
            break;
    }
}
drawBars(10);
startGame = setInterval(function (){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    car.drawCar();
    car.moveCar();
    for (let i = 0; i < barriers.length; i++) {
        barriers[i].drawBar();
        barriers[i].moveBar();
    }

}, 1)