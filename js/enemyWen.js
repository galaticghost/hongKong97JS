import Enemy from "./enemy.js";

export default class EnemyWen extends Enemy{
    constructor(x,y,health){
        super(x,y,health);
        this.sprite.src = "assets/enemy/enemy1.png";
        this.speed = 6;
    }

    move(){
        this.y += this.speed;
    }

    spriteChanger(){
        if (this.left === true){
            this.sprite.src = "assets/enemy/enemy1Right.png";
        } else {
            this.sprite.src = "assets/enemy/enemy1.png";
        }
        this.left = !this.left;
    }

}