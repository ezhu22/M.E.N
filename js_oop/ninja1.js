function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    
    this.sayName = function(){
        console.log("My ninja name is " + this.name + "!")
    }
    
    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength)
    }
    
    this.drinkSake = function(){
        this.health += 10;
        console.log(this.name + " downed the sake! Feeling refreshed, your health is now " + this.health + "!")
        return this
    }

    this.punch = function(ninja){
        if (ninja instanceof Ninja){
            ninja.health -= 15;
            console.log(ninja.name + " was punched by " + this.name + " and lost 10 hp!")
        }  
        else{
            console.log("You are not a ninja!")
        }
    
    }
    
    this.kick = function(ninja){
        if (ninja instanceof Ninja){
            ninja.health -= strength * 15
            console.log(ninja.name + " was kicked by " + this.name + " with a strength of " + strength + " and lost " + (strength * 15)+ " hp!")
        }
        else{
            console.log("You are not a ninja!")
        }
    }
}

ninja1 = new Ninja('Ted')
ninja2 = new Ninja('Bob')
ninja = 'str'
ninja1.sayName()
ninja1.showStats()
ninja1.punch(ninja)
ninja2.kick(ninja1)
ninja2.drinkSake().showStats()
ninja1.drinkSake().showStats()