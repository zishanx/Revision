const user = {
    name: "Zizzy",
    greet: function(){
        console.log(this.name);
    }
};

setTimeout(user.greet.bind(user), 1000);

user.greet.call(user) // This will call the function right now 

user.greet.apply(user) // This will also call it . 