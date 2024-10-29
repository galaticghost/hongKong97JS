import Player from "./player.js";
import BulletController from "./bulletController.js";
import EnemyWen from "./enemyWen.js";
import EnemyZhou from "./enemyZhou.js";
import EnemyHao from "./enemyHao.js";

// Variáveis globais

const canvas = document.getElementById("jogo");
const context = canvas.getContext("2d");
const start = document.getElementById("start");

const bulletController = new BulletController(canvas);
const player = new Player(canvas.width/0.64,canvas.height/0.2,bulletController);
const enemies = [
    new EnemyWen(50,-140,1),
    new EnemyWen(285,-140,1)
]

let background = new Image();
let backgroundContador = 2;
let enemyType;

// códios BOLANEOS
background.src = "assets/background1.png";
background.onload = function(){
    context.drawImage(background,0,0,1000,900);
}

canvas.width = 1000;
canvas.height = 900;


// Funções 
function hongKong97(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(background,0,0,1000,900)
    bulletController.draw(context);
    player.draw(context);
    enemies.forEach((enemy) => {
        if (bulletController.colideWith(enemy)){
            if(enemy.health <= 0){
                createEnemy();
                const index = enemies.indexOf(enemy);
                enemies.splice(index,1);
            }
        } else {
            enemy.draw(context);
        }
    });
}

function xRandom(){
    return randomIntFromInterval(0,954.75);
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeBackground(){
    if (backgroundContador === 4){
        backgroundContador = 1;
    }

    background.src = "assets/background" + backgroundContador + ".png";
    backgroundContador += 1;
}

function createEnemy(){
    let random = randomIntFromInterval(1,3);
    if (random === 1){
        enemyType = EnemyWen;
    }
    else if (random === 2){
        enemyType = EnemyZhou;
    }
    else{
        enemyType = EnemyHao;
    }
    enemies.push(new enemyType(xRandom(),-140,1));
}

function music(){
    let x = document.getElementById("som");
    x.loop = true;
    x.play();
}

function startGame(){
    setInterval(changeBackground, 10000);
    setInterval(hongKong97, 1000 / 60);
    music();
}

start.onclick = startGame;

