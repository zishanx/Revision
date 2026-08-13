
class Dog {
    constructor(name){
        this.name = name;
    }

    bark() {
        console.log(this.name + "says woof!")
    }
}


const d1 = new Dog("Tommy")
const d2 = new Dog("Rocky")

d1.bark()
d2.bark()

console.log(typeof Dog);
console.log(Dog.prototype.bark)