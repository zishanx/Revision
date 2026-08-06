function outer (){
    let counter = 0 

    return function inner(){
        counter++
        console.log(counter)
    }

    console.log(counter)
}

let increase = outer()

increase()
increase()
increase()