let player = document.getElementById("player");
let movimento = 20;
let tela = document.getElementById("jogo");
let contaFundo = 2
const enemyOne = document.getElementById("enemy-one");
let left = true;
let spriteChange = true;

function music(){
    let x = document.getElementById("som");
    x.loop = true;
    x.play();
}

function Enemy(id){
    this.id = id;
}

let enemyUno = new Enemy(enemyOne)
function useEnemy(enemy){


}

/*setInterval(function movement(enemy){
    if (enemyOne.style.left === "940px"){
        left = false;
    } else if (enemyOne.style.left === "0px"){
        left = true;
    }
    if (enemyOne.style.left !== "940px" & left === true){
        enemyOne.style.left = parseInt(enemyOne.style.left) + movimento + "px";
    }
    else if (enemyOne.style.left !== "0px" & left === false){
        enemyOne.style.left = parseInt(enemyOne.style.left) - movimento + "px";
    }
},100);*/

enemyOne.style.top = 0;
enemyOne.style.left = 0;
useEnemy(enemyOne);
let moviment = setInterval(function movement(enemy){
    enemyOne.style.top = parseInt(enemyOne.style.top) + movimento + "px";
    if (spriteChange === true){
        enemyOne.src = "assets/enemy1.png";
        spriteChange = false;
        enemyOne.style.display = "inline";
    }
    else{
        enemyOne.src = "assets/enemy1Right.png";
        spriteChange = true;
    }
    if (enemyOne.style.top === "760px"){
        enemyOne.style.display = "none";
        enemyOne.style.top = "0px";
    }
},100)


function createEnemy(){
    let enemie = "bola";
}



setInterval(function changeBackground(){
    tela.style.backgroundImage = "url('assets/background" + contaFundo + ".png')";
    if (contaFundo === 3){
        contaFundo = 1;
    }
    else{
        contaFundo += 1;
    }
},10000);


player.style.top = "770px";
player.style.left = "500px";

window.addEventListener("keydown", (event) => {
    switch (event.key){
        case "ArrowLeft":
            if (player.style.left !== "0px"){
                player.style.left = parseInt(player.style.left) - movimento + "px";
            }
            player.src = "assets/player2.png";
            break;
        case "ArrowRight":
            if (player.style.left !== "940px"){
                player.style.left = parseInt(player.style.left) + movimento + "px";
            }
            player.src = "assets/player2Right.png";
            break;
        case "ArrowUp":
            if (player.style.top !== "10px"){
            player.style.top = parseInt(player.style.top) - movimento + "px";
            }
            break;
        case "ArrowDown":
            if (player.style.top !== "770px"){    
                player.style.top = parseInt(player.style.top) + movimento + "px";
            }
            break;
    }
    music();
});

window.addEventListener("keyup", (event) => {
    switch (event.key){
        case "ArrowLeft":
            player.src = "assets/player1.png";
            break;
        case "ArrowRight":
            player.src = "assets/player1.png";
            break;
    }
});

window.addEventListener("keypress", (event) => {
    switch (event.key){
        case "z":
            console.log(event);
            break;
    }
});