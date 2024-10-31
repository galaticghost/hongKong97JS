export default class Car{
    constructor(y){
        this.y = y;
        this.x = 1020;
        this.height = 100;
        this.width = 128;
        this.speed = 5;
        this.sprite = new Image();
        this.sprite.src = "assets/enemy/car.png";
    }

    draw(context){
        this.move();
        context.drawImage(this.sprite,this.x,this.y,this.width,this.height);
    }

    move(){

    }
}