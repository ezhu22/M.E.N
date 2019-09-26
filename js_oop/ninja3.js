class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength =3;
    }

    sayName(){
        console.log(`My ninja name is ${this.name}.` )
    }

    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    }

    drinkSake(){
        this.health += 10
        console.log(`${this.name} downed the sake and recovered 10 hp!`)
        return this
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("One is never too old to enjoy a good drink.")
    }
}

ninja1 = new Ninja('Ted')

console.log(ninja1)

ninja1.sayName()

ninja1.showStats()

ninja1.drinkSake().showStats()

sensei1 = new Sensei('Bob')

sensei1.speakWisdom()

sensei1.showStats()