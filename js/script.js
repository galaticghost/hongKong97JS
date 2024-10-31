import Player from "./player.js";
import BulletController from "./bulletController.js";
import EnemyWen from "./enemyWen.js";
import EnemyZhou from "./enemyZhou.js";
import EnemyHao from "./enemyHao.js";
import Score from "./score.js";

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
const chips = [

]
const score = new Score();

let background = new Image();
let backgroundContador = 2;
let enemyType;
let game;
let backgroundChange;

// códios BOLANEOS
background.src = "assets/background/background1.png";
background.onload = function(){
    context.drawImage(background,0,0,1000,900);
}

canvas.width = 1000;
canvas.height = 900;


// Funções 
function hongKong97(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(background,0,0,1000,900)
    score.draw(context);
    bulletController.draw(context);
    player.draw(context);
    enemies.forEach((enemy) => {
        if (bulletController.colideWith(enemy)){
            if(enemy.health <= 0){
                createEnemy();
                randomEnemy();
                score.score += 1;
                enemy.height = 75;
                enemy.width = 100;
                enemy.dead = true;
            }
        } else if (enemy.isEnemyOffScreen()){
            createEnemy();
            const index = enemies.indexOf(enemy);
            enemies.splice(index,1);
        } else if (enemy.dead === true){
            if(enemy.deathAnimation(context) === 61){
                const index = enemies.indexOf(enemy);
                enemies.splice(index,1);
            }
        } else if (player.colideWith(enemy) /*|| player.colideWith(chip)*/){
            endGame();
        } else {
            enemy.draw(context);
        }
    });
    if (enemies.length === 0) {
        console.log(enemies.length);
        createEnemy();
        createEnemy();
    }
}

function xRandom(){
    return randomIntFromInterval(0,954.75);
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomEnemy(){
    let x = randomIntFromInterval(1,6);
    if (x === 1){
        enemies.pop();
    } else if (x === 6) {
        createEnemy();
    }
}

function changeBackground(){
    if (backgroundContador === 4){
        backgroundContador = 1;
    }

    background.src = "assets/background/background" + backgroundContador + ".png";
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

function endGame(){
    clearInterval(backgroundChange);
    clearInterval(game);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(background,0,0,1000,900)
    alert("ACABOU");
}

function startGame(){
    backgroundChange = setInterval(changeBackground, 10000);
    game = setInterval(hongKong97, 1000 / 60);
    music();
}

start.onclick = startGame;

