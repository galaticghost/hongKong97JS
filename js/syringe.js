export default class Syringe{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.speed = 4;
        this.frame = 1;
        this.sprite = new Image();
        this.sprite.src = "assets/etc/syringe1.png";
        this.dead = false;
    }

    draw(context){
        this.move();
        this.spriteChanger();
        context.drawImage(this.sprite,this.x,this.y,this.width,this.height);
    }
    
    move(){
        this.y += this.speed;
    }

    spriteChanger(){
        if (this.frame === 25){
            this.frame = 1;
        }

        if ((this.frame === 1) || (this.frame < 7)){
            this.sprite.src = "assets/etc/syringe1.png";
        } else if ((this.frame === 7) || (this.frame < 13)){
            this.sprite.src = "assets/etc/syringe2.png";
        } else if ((this.frame === 13) || (this.frame < 19)){
            this.sprite.src = "assets/etc/syringe3.png";
        } else if ((this.frame === 19) || (this.frame < 25)){
            this.sprite.src = "assets/etc/syringe4.png";
        }
        this.frame += 1;
    }

    isSyringeOffScreen(){
        return this.y >= 870;
    }
}