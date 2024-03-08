function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,100,300,400,2500,500));

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
const user = {
    username: "hitesh",
    prices: 199
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

// This keyword

const user1 = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user1.welcomeMessage()
user1.username = "sam"
// user1.welcomeMessage()

console.log(this);  // ->gives empty object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  //this doesnt work for function
// }

// chai();



// arrow function
const chai =  () => {
        let username = "hitesh"
        console.log(this);
    }
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) =>  num1 + num2

// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')