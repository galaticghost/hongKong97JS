import Enemy from "./enemy.js";

export default class EnemyZhou extends Enemy{
    constructor(x,y,health){
        super(x,y,health);
        this.sprite.src = "assets/enemy2.png";
    }

    spriteChanger(){
        if (this.left === true){
            this.sprite.src = "assets/enemy2Right.png";
        } else {
            this.sprite.src = "assets/enemy2.png";
        }
        this.left = !this.left;
    }
}