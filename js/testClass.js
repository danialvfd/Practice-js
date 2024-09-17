class Parent {
    constructor (name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    firstMethod(params) {
        console.log(params)
    }
}

class Child extends Parent {
    constructor (name, lastName, hairColor, eyeColor){
        super(name, lastName)     // method super constructor father seda mizanad
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
    }
}

var parent = new Parent ("ali", "vafaei");
var child = new Child ("reza", "vafaei", "black", "green");

child.firstMethod(child.lastName);
console.log(ali);
console.log(child);