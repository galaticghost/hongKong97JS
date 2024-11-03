import Enemy from "./enemy.js";

export default class TongShauPing extends Enemy{
    constructor(x,y,health){
        super(x,y,health);
        this.width = 300;
        this.height = 250;
        this.moveRight = false;
        this.moveUp = false;
        this.frameAttack = 1;
        this.atackStatus = 0;
        this.cooldown = 0;
        this.sprite.src = "assets/enemy/tongShauPing.png";
    }

    draw(context,player){
        this.move();
        this.atack(player);
        context.drawImage(this.sprite,this.x,this.y,this.width,this.height);
    }

    move(){
        if(this.moveRight === false && this.atackStatus !== 2){
            this.x -= this.speed;
            if (this.x <= 25){
                this.moveRight = true;
            }
        } else if (this.moveRight === true && this.atackStatus !== 2) {
            this.x += this.speed;
            if (this.x >= 650){
                this.moveRight = false;
            }
        }

        if (this.moveUp === false && this.atackStatus === 0){
            this.y += this.speed + 3;
            if (this.y >= 300){
                this.moveUp = true;
            }
        } else if (this.moveUp === true && this.atackStatus === 0) {
            this.y -= this.speed + 3;
            if (this.y < 150){
                this.moveUp = false;
            }
        }
    }

    atack(player){
        if (this.frameAttack >= 160 && this.atackStatus === 2){
            if (this.moveRight === true){
                this.moveRight = false;
            } else {
                this.moveRight = true;
            }
            this.atackStatus = 0;
            this.frameAttack = 1;
            this.cooldown = 300;
        }

        if (this.cooldown !== 0){
            this.cooldown -= 1;
        }

        console.log(player.y + " " + this.y);
        console.log(player.x + " " + this.x);
        console.log(this.atackStatus + "AtackSattus");
        console.log(this.cooldown + "Cooldown"); 

        if ((player.x > this.x && player.x < (this.x + this.width)) && this.cooldown === 0 && this.atackStatus === 0){
            this.atackStatus = 1;
        }
        
        if (this.atackStatus === 1 || this.atackStatus === 2){
            if (this.frameAttack >= 31 && this.frameAttack <= 60){
                this.atackStatus = 2;
            }
            if (this.atackStatus === 1 && this.frameAttack <= 30){
                this.y -= this.speed + 3;
            } else if (this.atackStatus === 2 && this.y <= 840){
                this.y += this.speed + 20;
            }

            console.log(this.frameAttack);
            this.frameAttack += 1;
        }

    }
}