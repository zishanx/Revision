// Closure and this . c

const person = {
    name: "Zizzy",
    greet: () => { console.log(this.name);}
}
 

const timer = {
    seconds = 10 ,
    start: function() {
        setTimeout(() => {
            console.log(this.seconds)
        },1000)
    }
}