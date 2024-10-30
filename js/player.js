export default class Player{
    constructor(x,y,bulletController){
        this.x = x;
        this.y = y;
        this.width = 51;
        this.height = 128;
        this.speed = 6;
        this.bulletController = bulletController;
        this.sprite = new Image();
        this.sprite.src = "assets/player/player1.png";
        this.counterLeft = 1;
        this.counterRight = 1;

        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup", this.keyup);
    }

    draw(context){
        this.move();
        this.spriteChanger();
        context.drawImage(this.sprite,this.x,this.y,this.width,this.height);
        this.shoot();
    }

    spriteChanger(){
        if ((!this.leftPressed && !this.rightPressed) && (this.upPressed)){
            if (this.interval !== undefined){clearInterval(this.interval);}
            this.sprite.src = "assets/player/player1Back.png";
        } else if ((!this.leftPressed && !this.rightPressed) || (this.leftPressed && this.rightPressed)){
            if (this.interval !== undefined){clearInterval(this.interval);}
            this.sprite.src = "assets/player/player1.png";
        } else if (this.leftPressed){
            if (this.interval !== undefined && this.interval === setInterval(this.rightAnimation.bind(this),300)){clearInterval(this.interval);}
                this.leftAnimation();
        } else if (this.rightPressed){
            if (this.interval !== undefined && this.interval === setInterval(this.leftAnimation.bind(this),300)){clearInterval(this.interval);}
                this.rightAnimation();
        }
    }

    leftAnimation(){
        if (this.counterRight !== 1){
            this.counterRight = 1;
        }
        if (this.counterLeft === 31){
            this.counterLeft = 1;
        }

        if ((this.counterLeft === 1) || (this.counterLeft < 7)){
            this.sprite.src = "assets/player/player2.png";
        } else if ((this.counterLeft === 7) || (this.counterLeft < 13)){
            this.sprite.src = "assets/player/player3.png";
        } else if ((this.counterLeft === 13) || (this.counterLeft < 19)){
            this.sprite.src = "assets/player/player4.png";
        } else if ((this.counterLeft === 19) || (this.counterLeft < 25)){
            this.sprite.src = "assets/player/player5.png";
        } else if ((this.counterLeft === 25) || (this.counterLeft < 31)){
            this.sprite.src = "assets/player/player6.png";
        }

        this.counterLeft += 1;
    }

    rightAnimation(){
        if (this.counterLeft !== 1){
            this.counterLeft = 1;
        }
        if (this.counterRight === 31){
            this.counterRight = 1;
        }

        if ((this.counterRight === 1) || (this.counterRight < 7)){
            this.sprite.src = "assets/player/player2Right.png";
        } else if ((this.counterRight === 7) || (this.counterRight < 13)){
            this.sprite.src = "assets/player/player3Right.png";
        } else if ((this.counterRight === 13) || (this.counterRight < 19)){
            this.sprite.src = "assets/player/player4Right.png";
        } else if ((this.counterRight === 19) || (this.counterRight < 25)){
            this.sprite.src = "assets/player/player5Right.png";
        } else if ((this.counterRight === 25) || (this.counterRight < 31)){
            this.sprite.src = "assets/player/player6Right.png";
        }
        this.counterRight += 1;
    }

    move(){
        if (this.downPressed && this.y !== 774){
            this.y += this.speed;
        }
        if (this.upPressed && this.y !== 0){
            this.y -= this.speed;
        }
        if (this.leftPressed && this.x !== 0.75){
            this.x -= this.speed;
        }
        if (this.rightPressed && this.x !== 954.75){
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



