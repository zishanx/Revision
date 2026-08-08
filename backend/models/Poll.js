const user = {
    name: "Zizzy",
    greet: function(){
        console.log(this.name);
    }
};

setTimeout(user.greet.bind(user), 1000);

