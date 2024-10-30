import Enemy from "./enemy.js";

export default class EnemyZhou extends Enemy{
    constructor(x,y,health){
        super(x,y,health);
        this.sprite.src = "assets/enemy/enemy2.png";
        this.moveRight = true;
        this.lastX = this.x;
        this.speed = 4;
    }

    move(){
        this.y += this.speed;
        if (this.moveRight){
            this.x += this.speed;
            if (this.x === this.lastX);{
                this.lastX = this.x - 1000;
                console.log(this.lastX);
                this.moveRight = !this.moveRight;
            }
        } else {
            this.x -= this.speed;
            if (this.x === this.lastX);{
                this.lastX = this.x + 1000;
                console.log(this.lastX);
                this.moveRight = !this.moveRight;
            }
        }
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