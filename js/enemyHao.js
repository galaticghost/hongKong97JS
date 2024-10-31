import Enemy from "./enemy.js";
import BulletEnemy from "./bulletEnemy.js";

export default class EnemyHao extends Enemy{
    constructor(x,y,health){
        super(x,y,health);
        this.sprite.src = "assets/enemy/enemy3.png";
        this.speed = 3;
        this.shot;
        this.BulletEnemy;
        this.moveLeft = false;
    }

    draw(context){
        this.move();
        this.shoot(context);
        context.drawImage(this.sprite,this.x,this.y,this.width,this.height);
    }

    move(){
        this.y += this.speed;
        if (this.moveLeft === false){
            this.x += this.speed + 3;
        } else {
            this.x -= this.speed + 3;
        }
        if (this.x >= 900){
            this.moveLeft = true;
        } else if (this.x <= 100){
            this.moveLeft = false;
        }
    }

    shoot(context){
        if (true){
            const speed = 10;
            const delay = 10;
            const damage = 1;
            const bulletX = this.x + this.width/2;
            const bulletY = this.y;
            this.BulletEnemy = new BulletEnemy(bulletX,bulletY,speed,damage,delay);
            this.BulletEnemy.draw(context);
        }
    }

    spriteChanger(){
        if (this.left === true){
            this.sprite.src = "assets/enemy/enemy3.png";
        } else {
            this.sprite.src = "assets/enemy/enemy3Right.png";
        }
        this.left = !this.left;
    }

    isEnemyOffScreen(){
        return this.y >= 870 || this.x >= 1000;
    }
}