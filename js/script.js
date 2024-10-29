import Player from "./player.js";
import BulletController from "./bulletController.js";
import EnemyWen from "./enemyWen.js";

// Variáveis globais

const canvas = document.getElementById("jogo");
const context = canvas.getContext("2d");

const bulletController = new BulletController(canvas);
const player = new Player(canvas.width/0.64,canvas.height/0.2,bulletController);
const enemies = [
    new EnemyWen(50,20,1)
]

let background = new Image();
let backgroundContador = 2;

// códios BOLANEOS
background.src = "assets/background1.png";
background.onload = function(){
    context.drawImage(background,0,0,1000,900);
}

canvas.width = 1000;
canvas.height = 900;

function hongKong97(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(background,0,0,1000,900)
    bulletController.draw(context);
    player.draw(context);
    enemies.forEach((enemy) => {
        if (bulletController.colideWith(enemy)){
            const index = enemies.indexOf(enemy);
            enemies.splice(index,1);
        } else {
            enemy.draw(context);
        }
    });
}

function changeBackground(){
    if (backgroundContador === 4){
        backgroundContador = 1;
    }

    background.src = "assets/background" + backgroundContador + ".png";
    backgroundContador += 1;
}
 
setInterval(changeBackground, 10000);
setInterval(hongKong97, 1000 / 60);