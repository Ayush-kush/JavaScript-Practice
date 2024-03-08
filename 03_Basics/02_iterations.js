
// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

const map = new Map();
map.set("Luffy","Zoro")
map.set("Goku","Vegeta")
map.set("Nami","Robin")

for (const [key,value] of map){
    // console.log(key,'-',value);
}




// wont work for objects

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) { 
//     // console.log(key, ':-', value);
    
// }


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject)   // This will work for objects
{     
    // console.log(`${key} : ${myObject[key]}`);
}

// For arrays we con do this

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}


// For in does'nt work for maps

// const map2 = new Map()
// map2.set('IN', "India")
// map2.set('USA', "United States of America")
// map2.set('Fr', "France")
// map2.set('IN', "India")

// for (const key in map2) {
//     console.log(key);
// }