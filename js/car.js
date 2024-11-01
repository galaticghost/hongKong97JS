export default class Car{
    constructor(y){
        this.y = y;
        this.x = 1020;
        this.height = 100;
        this.width = 128;
        this.speed = 5;
        this.sprite = new Image();
        this.sprite.src = "assets/enemy/car.png";
        this.frame = 0;
        this.dead = false;
    }

    draw(context){
        this.move();
        context.drawImage(this.sprite,this.x,this.y,this.width,this.height);
    }

    move(){
        if (this.frame <= 60){
            this.x -= this.speed;
        }
        else{
            this.x -= this.speed + 10;
        }
        this.frame += 1;
    }
}