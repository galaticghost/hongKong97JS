export default class BulletEnemy{
    constructor(x,y,speed,damage){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;
    
        this.width = 15;
        this.height = 20;

        this.sprite = new Image();
        this.sprite.src = "assets/player/balita.png";
    }

    draw(context){
        this.y += this.speed;
        context.drawImage(this.sprite,this.x,this.y,this.width,this.height);
        if (this.isBulletOffScreen()){
            //del this;
        }
    }

    isBulletOffScreen(bullet){
        return this.y >= 870;
    }
}