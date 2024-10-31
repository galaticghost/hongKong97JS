import BulletEnemy from "./bulletEnemy.js";

export default class BulletControllerEnemy{
    bullets = [];
    timerNextBullet = 0;

    shoot(x,y,speed,damage,delay){
        if (this.timerNextBullet <= 0){
            this.bullets.push(new BulletEnemy(x,y,speed,damage));
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
        return bullet.y >= 870;
    }

    colideWith(player){
        return this.bullets.some((bullet) => {
            if (bullet.colideWith(player)){
                this.bullets.splice(this.bullets.indexOf(bullet),1);
                return true;
            }
            return false;
        });
    }
}