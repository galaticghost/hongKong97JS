import Enemy from "./enemy.js";

export default class EnemyZhou extends Enemy{
    constructor(x,y,health){
        super(x,y,health);
        this.sprite.src = "assets/enemy/enemy2.png";
        this.moveRight = true;
        this.speed = 4;
        this.counter = 0;
    }

    move(){
        if (this.counter === 81) {
            this.counter = 0;
        }

        if (this.counter < 40){
            this.moveRight = true;
        } else {
            this.moveRight = false;
        }

        this.y += this.speed;
        if (this.moveRight){
            this.x += this.speed;  
        } else if (!this.moveRight) {
            this.x -= this.speed;
        }
        this.counter += 1;
    }

    spriteChanger(){
        if (this.left === true){
            this.sprite.src = "assets/enemy/enemy2Right.png";
        } else {
            this.sprite.src = "assets/enemy/enemy2.png";
        }
        this.left = !this.left;
    }
}