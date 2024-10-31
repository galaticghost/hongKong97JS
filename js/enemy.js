export default class Enemy{
    constructor(x,y,health){
        this.x = x;
        this.y = y;
        this.health = health;
        this.width = 51;
        this.height = 128;
        this.speed = 3;
        
        this.left = true;
        this.deathFrame = 1;
        this.dead = false;

        this.sprite = new Image();
        setInterval(this.spriteChanger.bind(this),100);
    }

    draw(context){
        this.move();
        context.drawImage(this.sprite,this.x,this.y,this.width,this.height);
    }

    spriteChanger(){

    }

    move(){
        
    }

    takeDamage(damage){
        this.health -= damage;
    }

    deathAnimation(context){
        if ((this.deathFrame === 1) || (this.deathFrame < 7)){
            this.sprite.src = "assets/etc/explosion1.png";
        } else if ((this.deathFrame === 7) || (this.deathFrame < 13)){
            this.sprite.src =  "assets/etc/explosion2.png"
        } else if ((this.deathFrame === 13) || (this.deathFrame < 19)){
            this.sprite.src = "assets/etc/explosion3.png";
        } else if ((this.deathFrame === 19) || (this.deathFrame < 25)){
            this.sprite.src =  "assets/etc/explosion4.png";
        } else if ((this.deathFrame === 25) || (this.deathFrame < 31)){
            this.sprite.src =  "assets/etc/explosion5.png";
        } else if ((this.deathFrame === 31) || (this.deathFrame < 61)){
            this.sprite.src =  "assets/etc/death.png";
        }
        context.drawImage(this.sprite,this.x,this.y,this.width,this.height)
        this.deathFrame += 1;
        return this.deathFrame;
    }

    isEnemyOffScreen(){
        return this.y >= 870;
    }
}