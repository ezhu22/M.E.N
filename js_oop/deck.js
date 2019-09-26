class Card{
    constructor(suit, stringValue, numValue){
        this.suit = suit;
        this.stringValue = stringValue;
        this.numValue = numValue;
    }

    show(){
        console.log(`Suit: ${this.suit}, Card: ${this.stringValue}, Value: ${this.numValue}`)
    }
}

a = new Card('Hearts', 'King', 13)

a.show()