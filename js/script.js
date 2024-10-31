import Player from "./player.js";
import BulletController from "./bulletController.js";
import EnemyWen from "./enemyWen.js";
import EnemyZhou from "./enemyZhou.js";
import EnemyHao from "./enemyHao.js";
import Score from "./score.js";
import BulletControllerEnemy from "./bulletControllerEnemy.js";

// Variáveis globais
let game;
let backgroundChange;
let clearGame;
const start = document.getElementById("start");

function realGame(){
    const canvas = document.getElementById("jogo");
    const context = canvas.getContext("2d");
    
    canvas.width = 1000;
    canvas.height = 900;

    const bulletController = new BulletController(canvas);
    const player = new Player(canvas.width/2.1,canvas.height/1.2,bulletController);
    const enemies = [
        new EnemyWen(50,-140,1),
        new EnemyWen(285,-140,1)
    ]
    const chips = [

    ]

    const score = new Score();
    const gameOver = new Image();
    gameOver.src =  "assets/etc/gameOver.png";

    let background = new Image();
    let backgroundContador = 2;
    let enemyType;

    // códios BOLANEOS
    background.src = "assets/background/background1.png";
    background.onload = function(){
        context.drawImage(background,0,0,1000,900);
    }

    // Funções 
    function hongKong97(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(background,0,0,1000,900)
        score.draw(context);
        bulletController.draw(context);
        player.draw(context);
        enemies.forEach((enemy) => {
            console.log(enemy.bulletEnemyController);
            if (enemy.bulletEnemyController !== undefined){
                if (enemy.bulletEnemyController.colideWith(player)){
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    endGame();
                } else {
                    enemy.bulletEnemyController.draw(context);
                }
            }
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
                context.clearRect(0, 0, canvas.width, canvas.height);
                endGame();
            } else {
                enemy.draw(context);
            }
        });
        if (enemies.length === 0) {
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
        game = 0;
        backgroundChange = 0;
        clearGame = setInterval(function clear(){
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(gameOver,0,0,1000,900);
        },50);
    }

    function stopGame(){
        clearInterval(backgroundChange);
        clearInterval(game);
        clearInterval(clearGame);
        game = 0;
        backgroundChange = 0;
        clearGame = 0;
    }

    function startGame(){
        stopGame(backgroundChange,game);
        backgroundChange = setInterval(changeBackground, 10000);
        game = setInterval(hongKong97, 1000 / 60);
        music();
    }
    startGame();
}

start.onclick = realGame;

