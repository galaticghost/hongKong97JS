import Bullet from "./bullet.js";

export default class BulletController{
    bullets = [];
    timerNextBullet = 0;

    constructor(canvas){
        this.canvas = canvas;
    }

    shoot(x,y,speed,damage,delay){
        if (this.timerNextBullet <= 0){
            this.bullets.push(new Bullet(x,y,speed,damage));
            this.timerNextBullet = delay;
        }
        this.timerNextBullet--;
    }

    draw(context){
        this.bullets.forEach((bullet) => {
            if (this.isBulletOffScreen(bullet)){
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index,1);
            }
            bullet.draw(context)});
    }

    isBulletOffScreen(bullet){
        return bullet.y <= -bullet.height;
    }

    colideWith(enemy){
        return this.bullets.some((bullet) => {
            if (bullet.colideWith(enemy)){
                this.bullets.splice(this.bullets.indexOf(bullet),1);
                return true;
            }
            return false;
        });
    }
}