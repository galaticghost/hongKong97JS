export default class Player{
    constructor(x,y,bulletController){
        this.x = x;
        this.y = y;
        this.width = 51;
        this.height = 128;
        this.speed = 4;
        this.bulletController = bulletController;
        this.sprite = new Image();
        this.sprite.src = "assets/player1.png";

        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup", this.keyup);
    }

    draw(context){
        this.move();
        context.drawImage(this.sprite,this.x,this.y,this.width,this.height);
        this.shoot();
    }

    move(){
        if (this.downPressed){
            this.y += this.speed;
        }
        if (this.upPressed){
            this.y -= this.speed;
        }
        if (this.leftPressed){
            this.x -= this.speed;
        }
        if (this.rightPressed){
            this.x += this.speed;
        }
    }

    shoot(){
        if (this.shotPressed){
            const speed = 10;
            const delay = 10;
            const damage = 1;
            const bulletX = this.x + this.width/2;
            const bulletY = this.y;
            this.bulletController.shoot(bulletX,bulletY,speed,damage,delay);
        }
    }

    keydown = (e) => {
        if (e.code === "ArrowUp"){
            this.upPressed = true;
        }
        if (e.code === "ArrowDown"){
            this.downPressed = true;
        }
        if (e.code === "ArrowRight"){
            this.rightPressed = true;
        }
        if (e.code === "ArrowLeft"){
            this.leftPressed = true;
        }
        if (e.code === "KeyZ"){
            this.shotPressed = true;
        }
    }

    keyup = (e) => {
        if (e.code === "ArrowUp"){
            this.upPressed = false;
        }
        if (e.code === "ArrowDown"){
            this.downPressed = false;
        }
        if (e.code === "ArrowRight"){
            this.rightPressed = false;
        }
        if (e.code === "ArrowLeft"){
            this.leftPressed = false;
        }
        if (e.code === "KeyZ"){
            this.shotPressed = false;
        }
    }
}



