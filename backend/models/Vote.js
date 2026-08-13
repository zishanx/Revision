class Dog {
    constructor(name) {
        this.name = name
    }

    bark() {
        console.log(this.name + " says Woof!")
    }
}


const d1 = new Dog("Max")

d1.bark()