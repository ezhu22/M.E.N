var eeyore = { character: 'Eeyore', greet:  function(){console.log("eeyore's greet")}}
var heffalumps = { character: 'Heffalumps', greet:  function(){console.log("Heffalumps's greet")}}
var kanga = { character: 'Kanga', greet:  function(){console.log("Kanga's greet")}}
var owl = { character: 'Owl', greet:  function(){console.log("Owl's greet")}}
var chris = { character: 'Christopher Robin', greet:  function(){console.log("Christopher Robin's greet")}}
var rabbit = { character: 'Rabbit', greet:  function(){console.log("Rabbit's greet")}}
var gopher = { character: 'Gopher', greet:  function(){console.log("Gopher's greet")}}
var piglet = { character: 'Piglet', greet:  function(){console.log("Piglet's greet")}}
var pooh = { character: 'Winnie the Pooh', greet:  function(){console.log("Winnie the Pooh's greet")}}
var bees = { character: 'Bees', greet:  function(){console.log("Bees's greet")}}
var tigger = { character: 'Tigger', greet:  function(){console.log("Tigger's greet")}}
eeyore.east = heffalumps
eeyore.south = kanga
heffalumps.west = eeyore
kanga.north = eeyore
kanga.south = chris
chris.north = kanga
chris.east = rabbit
chris.west = owl
chris.south = pooh
rabbit.west = chris
rabbit.east = gopher
rabbit.south = bees
gopher.west = rabbit
owl.east = chris
owl.south = piglet
piglet.north = owl
piglet.east = pooh
pooh.north = chris
pooh.east = bees
pooh.south = tigger
pooh.west = piglet
tigger.north = pooh
bees.west = pooh
bees.north = rabbit


var player = {location: tigger, honey: false}

function move( str){
    if (str == 'north'){
        if (player.location.north != null){
            console.log("You are now on " + player.location.north.character + "'s house.")
            player.location = player.location.north
            player.location.greet()
            return
        }
        else{
            console.log('You cannot move in that direction.')
            return
        }
    }
    if (str == 'east'){
        if (player.location.east != null){
            console.log("You are now on " + player.location.east.character + "'s house.")
            player.location = player.location.east
            player.location.greet()
            return

        }
        else{
            console.log('You cannot move in that direction.')
            return
        }
    }
    if (str == 'west'){
        if (player.location.west != null){
            console.log("You are now on " + player.location.west.character + "'s house.")
            player.location = player.location.west
            player.location.greet()
            return

        }
        else{
            console.log('You cannot move in that direction.')
            return
        }
    }
    if (str == 'south'){
        if (player.location.south != null){
            console.log("You are now on " + player.location.south.character + "'s house.")
            player.location = player.location.south
            player.location.greet()
            return

        }
        else{
            console.log('You cannot move in that direction.')
            return
        }
    }
}

function pickUp(){
    if (player.location == bees){
        if (player.honey == false){
            player.honey = true;
            console.log("You picked up some honey.")
            return
        }
        else{
            console.log('You already have honey.')
            return
        }
    }
    else{
        console.log('No honey here.')
        return
    }
}

function mission(){
    switch( Math.floor(Math.random() * 10)){
        case 0:
            eeyore.mission = true
            player.location = eeyore
            console.log("You are at Eeyore's house and Eeyore needs honey! Can you help?")
            break;
        case 1:
            heffalumps.mission = true
            player.location = heffalumps
            console.log("You are at Heffalumps's house and Heffalumps needs honey! Can you help?")
            break;
        case 2:
            kanga.mission = true
            player.location = kanga
            console.log("You are at Kanga's house and Kanga needs honey! Can you help?")
            break;
        case 3:
            owl.mission = true
            player.location = owl
            console.log("You are at Owl's house and Owl needs honey! Can you help?")
            break;
        case 4:
            chris.mission = true
            player.location = chris
            console.log("You are at Christopher Robin's house and Christopher Robin needs honey! Can you help?")
            break;
        case 5:
            rabbit.mission = true
            player.location = rabbit
            console.log("You are at Rabbit's house and Rabbit needs honey! Can you help?")
            break;
        case 6:
            gopher.mission = true
            player.location = gopher
            console.log("You are at Gopher's house and Gopher needs honey! Can you help?")
            break;
        case 7:
            piglet.mission = true
            player.location = piglet
            console.log("You are at Piglet's house and Piglet needs honey! Can you help?")
            break;
        case 8:
            pooh.mission = true
            player.location = pooh
            console.log("You are at Winnie the Pooh's house and Winnie the Pooh needs honey! Can you help?")
            break;
        case 9:
            tigger.mission = true
            player.location = tigger
            console.log("You are at Tigger's house and Tigger needs honey! Can you help?")
            break;
    }
}

function drop(){
    if (player.location.mission == true && player.honey == true){
        console.log('Congrats! you delivered honey to ' + player.location.character + '!')
        player.location.mission = false
        player.honey = false
        return
    }
    if(player.location.mission == true && player.honey == false){
        console.log('You have no honey.')
        return
    }
    if(player.location.mission == false && player.honey == true){
        console.log('You are at the wrong house.')
        return
    }
    if(player.location.mission == false && player.honey == false){
        console.log('You have no honey and are at the wrong house.')
        return
    }
}

mission()