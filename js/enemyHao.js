import Enemy from "./enemy.js";

export default class EnemyHao extends Enemy{
    constructor(x,y,health){
        super(x,y,health);
        this.sprite.src = "assets/enemy/enemy3.png";
    }

    spriteChanger(){
        if (this.left === true){
            this.sprite.src = "assets/enemy/enemy3.png";
        } else {
            this.sprite.src = "assets/enemy/enemy3Right.png";
        }
        this.left = !this.left;
    }
}