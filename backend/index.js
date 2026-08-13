function Dog(name) {
    this.name = name
}

Dog.prototype.bark = function () {
    console.log(this.name + " says Woof!")
}

const d1 = new Dog()

d1.bark()



