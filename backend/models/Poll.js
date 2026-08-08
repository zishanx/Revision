const user = {
    name: "Zizzy",
    greet: function(){
        console.log(this.name);
    }
};

user.greet(); 

const greetFn = user.greet; 

greetFn();