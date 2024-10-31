export default class Bullet{
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
        this.y -= this.speed;
        context.drawImage(this.sprite,this.x,this.y,this.width,this.height);
    }

    colideWith(sprite){
        if (this.x < sprite.x + sprite.width 
            && this.x + this.width > sprite.x 
            && this.y < sprite.y + sprite.height
            && this.y + this.height > sprite.y
            && sprite.dead === false){
                sprite.takeDamage(this.damage);
                return true;
            }
        return false;
    }
}