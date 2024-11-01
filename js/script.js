import Player from "./player.js";
import BulletController from "./bulletController.js";
import EnemyWen from "./enemyWen.js";
import EnemyZhou from "./enemyZhou.js";
import EnemyHao from "./enemyHao.js";
import Syringe from "./syringe.js";
import Score from "./score.js";
import Chip from "./chip.js";
import Car from "./car.js";

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
    const syringes = []
    const enemies = []
    const chips = []
    const car = []

    const score = new Score();
    const gameOver = new Image();
    gameOver.src =  "assets/etc/gameOver.png";

    let background = new Image();
    let backgroundContador = 2;
    let enemyType;

    background.src = "assets/background/background1.png";
    background.onload = function(){
        context.drawImage(background,0,0,1000,900);
    }

    function hongKong97(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(background,0,0,1000,900)
        createCar();
        score.draw(context);
        bulletController.draw(context);
        player.draw(context);
        if (car.length === 1){
            if (player.colideWith(car[0])) {
                endGame();
            }
            if (car[0].isCarOffScreen()){
                car.pop();
            } else {
                car[0].draw(context);
            }
        }
        enemies.forEach((enemy) => {
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
                    randomDrop(enemy);
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
            } else if (player.colideWith(enemy)){
                context.clearRect(0, 0, canvas.width, canvas.height);
                endGame();
            } else {
                enemy.draw(context);
            }
        });
        chips.forEach((chip) => {
            if (player.colideWith(chip)){
                context.clearRect(0, 0, canvas.width, canvas.height);
                endGame();
            } else if (chip.isChipOffScreen()){
                const index = chips.indexOf(chip);
                chips.splice(index,1);
            } else {
                chip.draw(context);
            }
        })

        syringes.forEach((syringe) => {
            if (player.colideWith(syringe)){
                player.invincible = true;
                const index = syringes.indexOf(syringe);
                syringes.splice(index,1);
            } else if (syringe.isSyringeOffScreen()){
                const index = syringes.indexOf(syringe);
                syringes.splice(index,1);
            } else {
                syringe.draw(context);
            }
        })
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

    function randomDrop(enemy){
        let x = randomIntFromInterval(1,12);
        if (x === 1){
            chips.push(new Chip(enemy.x, enemy.y));
        } else if (x === 12){
            console.log("afsa");
            syringes.push(new Syringe(enemy.x,enemy.y));
        }
    }

    function createCar(){
        let x = randomIntFromInterval(1,1000)
        if (x === 999 && car.length === 0){
            car.push(new Car(randomIntFromInterval(0,899)));
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

    createEnemy();
    createEnemy();
    startGame();
}

start.onclick = realGame;

