
const mySym = Symbol('OP')

const myObj = {

    userName: "Ayush",
    location: "Gwalior",
    "Fav Book": "Sherlock Holmes",
    isLoggedIn: false,
    // mySym: "Noice"  -> THIS WILL NOT WORK FOR SYMBOL
    [mySym]:"NOICE"
} 



console.log(myObj);
// console.log(myObj["userName"]); // -> we can also do this as string is searched to find obj properties
// console.log(myObj["Fav Book"]);

// console.log(typeof myObj.mySym); -> .Notation wont work for symbol inside a object
console.log(myObj[mySym]); // -> square brackets notation

myObj.contact = 123445;
// Object.freeze(myObj); -> Freezes the object so that no changes can occur in it but its still accessible
myObj.contact = 123125415;

console.log(myObj);

myObj.message = function(){
    console.log("Greetings fellow JS users");
}

myObj.messageTwo = function(mssg){
    console.log(`Hello ${mssg}, my biggest fan `);
}

myObj.message();
myObj.messageTwo("Thanos");


