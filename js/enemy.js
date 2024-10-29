export default class Enemy{
    constructor(x,y,health){
        this.x = x;
        this.y = y;
        this.health = health;
        this.width = 51;
        this.height = 128;
        this.speed = 3;
        
        this.left = true;

        this.sprite = new Image();
        setInterval(this.spriteChanger.bind(this),100);
    }

    draw(context){
        this.y += this.speed;
        context.drawImage(this.sprite,this.x,this.y,this.width,this.height);
    }

    spriteChanger(){

    }

    takeDamage(damage){
        this.health -= damage;
    }
}