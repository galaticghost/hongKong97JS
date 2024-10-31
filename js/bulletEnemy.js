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
    }

    colideWith(player){
        if (this.x < player.x + player.width 
            && this.x + this.width > player.x 
            && this.y < player.y + player.height
            && this.y + this.height > player.y
            && player.invincible === false){
                return true;
            }
        return false;
    }
}