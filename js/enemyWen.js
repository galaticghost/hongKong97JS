export default class EnemyWen{
    constructor(x,y,health){
        this.x = x;
        this.y = y;
        this.health = health;
        this.width = 51;
        this.height = 128;
        this.speed = 3;
        
        this.left = true;

        this.sprite = new Image();
        this.sprite.src = "assets/enemy1.png";
    }

    draw(context){
        this.y += this.speed;
        context.drawImage(this.sprite,this.x,this.y,this.width,this.height);
    }

    spriteChanger(){
        if (this.left === true){
            this.sprite.src = "assets/enemy1Right.png";
        } else {
            this.sprite.src = "assets/enemy1.png";
        }
        this.left = !this.left;
    }

    takeDamage(damage){
        this.health -= damage;
    }
}