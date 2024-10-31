import Enemy from "./enemy.js";
import BulletEnemyController from "./bulletControllerEnemy.js";

export default class EnemyHao extends Enemy{
    constructor(x,y,health){
        super(x,y,health);
        this.sprite.src = "assets/enemy/enemy3.png";
        this.speed = 3;
        this.shot;
        this.bulletEnemyController = new BulletEnemyController();
        this.moveLeft = false;
    }

    draw(context){
        this.move();
        context.drawImage(this.sprite,this.x,this.y,this.width,this.height);
        this.shoot();
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

    shoot(){
        const speed = 8;
        const delay = 40;
        const damage = 1;
        const bulletX = this.x + this.width/2;
        const bulletY = this.y;
        this.bulletEnemyController.shoot(bulletX,bulletY,speed,damage,delay);
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