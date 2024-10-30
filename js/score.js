export default class Score{
    constructor(){
        this.score = 0;
        this.width = 40;
        this.height = 40;

        this.spriteOne = new Image();
        this.spriteOne.src = "assets/numbers/zero.png";

        this.spriteTwo = new Image();
        this.spriteTwo.src = "assets/numbers/zero.png";

        this.spriteThree = new Image();
        this.spriteThree.src = "assets/numbers/zero.png";

        this.spriteFour = new Image();
        this.spriteFour.src = "assets/numbers/zero.png";

        this.spriteFive = new Image();
        this.spriteFive.src = "assets/numbers/zero.png";

        this.spriteSix = new Image();
        this.spriteSix.src = "assets/numbers/zero.png";

        this.spriteSeven = new Image();
        this.spriteSeven.src = "assets/numbers/zero.png";

        this.spriteEight = new Image();
        this.spriteEight.src = "assets/numbers/zero.png";

        this.spriteNine = new Image();
        this.spriteNine.src = "assets/numbers/zero.png";

        this.valuesIndividual;
    }

    draw(context){
        context.drawImage(this.spriteOne,880.75,18,this.width,this.height);
        context.drawImage(this.spriteTwo,840.75,18,this.width,this.height);
        context.drawImage(this.spriteThree,800.75,18,this.width,this.height);
        context.drawImage(this.spriteFour,760.75,18,this.width,this.height);
        context.drawImage(this.spriteFive,720.75,18,this.width,this.height);
        context.drawImage(this.spriteSix,680.75,18,this.width,this.height);
        context.drawImage(this.spriteSeven,640.75,18,this.width,this.height);
        context.drawImage(this.spriteEight,600.75,18,this.width,this.height);
        context.drawImage(this.spriteNine,560.75,18,this.width,this.height);
        
        this.updateScore();

        if (this.score >= 1000000000){
            alert("Você venceu!");
        }
    }

    updateScore(){
        this.valuesIndividual = Array.from(String(this.score),Number);
        this.valuesIndividual.reverse();
        if (this.valuesIndividual[0] !== undefined){
            switch (this.valuesIndividual[0]){
                case 0:
                    this.spriteOne.src = "assets/numbers/zero.png";
                    break;
                case 1:
                    this.spriteOne.src = "assets/numbers/one.png";
                    break;
                case 2:
                    this.spriteOne.src = "assets/numbers/two.png";
                    break;
                case 3:
                    this.spriteOne.src = "assets/numbers/three.png";
                    break;
                case 4:
                    this.spriteOne.src = "assets/numbers/four.png";
                    break;
                case 5:
                    this.spriteOne.src = "assets/numbers/five.png";
                    break;
                case 6:
                    this.spriteOne.src = "assets/numbers/six.png";
                    break;
                case 7:
                    this.spriteOne.src = "assets/numbers/seven.png";
                    break;
                case 8:
                    this.spriteOne.src = "assets/numbers/eight.png";
                    break;
                case 9:
                    this.spriteOne.src = "assets/numbers/nine.png";
                    break;
            }
        }

        if (this.valuesIndividual[1] !== undefined){
            switch (this.valuesIndividual[1]){
                case 0:
                    this.spriteTwo.src = "assets/numbers/zero.png";
                    break;
                case 1:
                    this.spriteTwo.src = "assets/numbers/one.png";
                    break;
                case 2:
                    this.spriteTwo.src = "assets/numbers/two.png";
                    break;
                case 3:
                    this.spriteTwo.src = "assets/numbers/three.png";
                    break;
                case 4:
                    this.spriteTwo.src = "assets/numbers/four.png";
                    break;
                case 5:
                    this.spriteTwo.src = "assets/numbers/five.png";
                    break;
                case 6:
                    this.spriteTwo.src = "assets/numbers/six.png";
                    break;
                case 7:
                    this.spriteTwo.src = "assets/numbers/seven.png";
                    break;
                case 8:
                    this.spriteTwo.src = "assets/numbers/eight.png";
                    break;
                case 9:
                    this.spriteTwo.src = "assets/numbers/nine.png";
                    break;
            }
        }
        if (this.valuesIndividual[2] !== undefined){
            switch (this.valuesIndividual[2]){
                case 0:
                    this.spriteThree.src = "assets/numbers/zero.png";
                    break;
                case 1:
                    this.spriteThree.src = "assets/numbers/one.png";
                    break;
                case 2:
                    this.spriteThree.src = "assets/numbers/two.png";
                    break;
                case 3:
                    this.spriteThree.src = "assets/numbers/three.png";
                    break;
                case 4:
                    this.spriteThree.src = "assets/numbers/four.png";
                    break;
                case 5:
                    this.spriteThree.src = "assets/numbers/five.png";
                    break;
                case 6:
                    this.spriteThree.src = "assets/numbers/six.png";
                    break;
                case 7:
                    this.spriteThree.src = "assets/numbers/seven.png";
                    break;
                case 8:
                    this.spriteThree.src = "assets/numbers/eight.png";
                    break;
                case 9:
                    this.spriteThree.src = "assets/numbers/nine.png";
                    break;
            }
        }

        if (this.valuesIndividual[3] !== undefined){
            switch (this.valuesIndividual[3]){
                case 0:
                    this.spriteFour.src = "assets/numbers/zero.png";
                    break;
                case 1:
                    this.spriteFour.src = "assets/numbers/one.png";
                    break;
                case 2:
                    this.spriteFour.src = "assets/numbers/two.png";
                    break;
                case 3:
                    this.spriteFour.src = "assets/numbers/three.png";
                    break;
                case 4:
                    this.spriteFour.src = "assets/numbers/four.png";
                    break;
                case 5:
                    this.spriteFour.src = "assets/numbers/five.png";
                    break;
                case 6:
                    this.spriteFour.src = "assets/numbers/six.png";
                    break;
                case 7:
                    this.spriteFour.src = "assets/numbers/seven.png";
                    break;
                case 8:
                    this.spriteFour.src = "assets/numbers/eight.png";
                    break;
                case 9:
                    this.spriteFour.src = "assets/numbers/nine.png";
                    break;
            }
        }

        if (this.valuesIndividual[4] !== undefined){
            switch (this.valuesIndividual[4]){
                case 0:
                    this.spriteFive.src = "assets/numbers/zero.png";
                    break;
                case 1:
                    this.spriteFive.src = "assets/numbers/one.png";
                    break;
                case 2:
                    this.spriteFive.src = "assets/numbers/two.png";
                    break;
                case 3:
                    this.spriteFive.src = "assets/numbers/three.png";
                    break;
                case 4:
                    this.spriteFive.src = "assets/numbers/four.png";
                    break;
                case 5:
                    this.spriteFive.src = "assets/numbers/five.png";
                    break;
                case 6:
                    this.spriteFive.src = "assets/numbers/six.png";
                    break;
                case 7:
                    this.spriteFive.src = "assets/numbers/seven.png";
                    break;
                case 8:
                    this.spriteFive.src = "assets/numbers/eight.png";
                    break;
                case 9:
                    this.spriteFive.src = "assets/numbers/nine.png";
                    break;
            }
        }

        if (this.valuesIndividual[5] !== undefined){
            switch (this.valuesIndividual[5]){
                case 0:
                    this.spriteSix.src = "assets/numbers/zero.png";
                    break;
                case 1:
                    this.spriteSix.src = "assets/numbers/one.png";
                    break;
                case 2:
                    this.spriteSix.src = "assets/numbers/two.png";
                    break;
                case 3:
                    this.spriteSix.src = "assets/numbers/three.png";
                    break;
                case 4:
                    this.spriteSix.src = "assets/numbers/four.png";
                    break;
                case 5:
                    this.spriteSix.src = "assets/numbers/five.png";
                    break;
                case 6:
                    this.spriteSix.src = "assets/numbers/six.png";
                    break;
                case 7:
                    this.spriteSix.src = "assets/numbers/seven.png";
                    break;
                case 8:
                    this.spriteSix.src = "assets/numbers/eight.png";
                    break;
                case 9:
                    this.spriteSix.src = "assets/numbers/nine.png";
                    break;
            }
        }

        if (this.valuesIndividual[6] !== undefined){
            switch (this.valuesIndividual[6]){
                case 0:
                    this.spriteSeven.src = "assets/numbers/zero.png";
                    break;
                case 1:
                    this.spriteSeven.src = "assets/numbers/one.png";
                    break;
                case 2:
                    this.spriteSeven.src = "assets/numbers/two.png";
                    break;
                case 3:
                    this.spriteSeven.src = "assets/numbers/three.png";
                    break;
                case 4:
                    this.spriteSeven.src = "assets/numbers/four.png";
                    break;
                case 5:
                    this.spriteSeven.src = "assets/numbers/five.png";
                    break;
                case 6:
                    this.spriteSeven.src = "assets/numbers/six.png";
                    break;
                case 7:
                    this.spriteSeven.src = "assets/numbers/seven.png";
                    break;
                case 8:
                    this.spriteSeven.src = "assets/numbers/eight.png";
                    break;
                case 9:
                    this.spriteSeven.src = "assets/numbers/nine.png";
                    break;
            }
        }

        if (this.valuesIndividual[7] !== undefined){
            switch (this.valuesIndividual[7]){
                case 0:
                    this.spriteEight.src = "assets/numbers/zero.png";
                    break;
                case 1:
                    this.spriteEight.src = "assets/numbers/one.png";
                    break;
                case 2:
                    this.spriteEight.src = "assets/numbers/two.png";
                    break;
                case 3:
                    this.spriteEight.src = "assets/numbers/three.png";
                    break;
                case 4:
                    this.spriteEight.src = "assets/numbers/four.png";
                    break;
                case 5:
                    this.spriteEight.src = "assets/numbers/five.png";
                    break;
                case 6:
                    this.spriteEight.src = "assets/numbers/six.png";
                    break;
                case 7:
                    this.spriteEight.src = "assets/numbers/seven.png";
                    break;
                case 8:
                    this.spriteEight.src = "assets/numbers/eight.png";
                    break;
                case 9:
                    this.spriteEight.src = "assets/numbers/nine.png";
                    break;
            }
        }

        if (this.valuesIndividual[8] !== undefined){
            switch (this.valuesIndividual[8]){
                case 0:
                    this.spriteNine.src = "assets/numbers/zero.png";
                    break;
                case 1:
                    this.spriteNine.src = "assets/numbers/one.png";
                    break;
                case 2:
                    this.spriteNine.src = "assets/numbers/two.png";
                    break;
                case 3:
                    this.spriteNine.src = "assets/numbers/three.png";
                    break;
                case 4:
                    this.spriteNine.src = "assets/numbers/four.png";
                    break;
                case 5:
                    this.spriteNine.src = "assets/numbers/five.png";
                    break;
                case 6:
                    this.spriteNine.src = "assets/numbers/six.png";
                    break;
                case 7:
                    this.spriteNine.src = "assets/numbers/seven.png";
                    break;
                case 8:
                    this.spriteNine.src = "assets/numbers/eight.png";
                    break;
                case 9:
                    this.spriteNine.src = "assets/numbers/nine.png";
                    break;
            }
        }
    }
}