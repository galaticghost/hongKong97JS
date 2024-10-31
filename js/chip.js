export default class Chip{
    constructor(){
        this.x;
        this.y;
    }
    
    isChipOffScreen(){
        return this.y >= 870;
    }
}