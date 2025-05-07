const { populate } = require("dotenv");

let chaiMenu = ["green tea", "black tea", "chai", "oolong tea" ]
let selectedMenu = []

for (let i = 0; i < chaiMenu.length; i++) {
   
    if(chaiMenu[i] === "chai")
        break;
    selectedMenu.push(chaiMenu[i]);
    
}

/*
5. Use a 'for-in' loop to loop through an obj containing city populations.
    Stop the loop when the population of "Berlin" is found and store all previous cities populations in a new obj called cityPopulations.
    
    let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
*/

let citiesPopulation = {
    "London": 8900000,
    "NewYork": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

let cityPopulations = {}

for (city in citiesPopulation){
    if(city==="Berlin") break;
cityPopulations[city] = citiesPopulation[city]; 

}
cityPopulations["Indore"] = 10292000
console.log(cityPopulations)


/*

6.
Use a for-in loop to loop through an object containing city populations.
    Skip any city with a population below 3 million and store the rest in a new object named "largeCities".

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
    };

*/
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
    };

let largeCities = {}

for (const city in worldCities) {

    if(worldCities[city]<3000000)
        continue;

    largeCities[city]=worldCities[city]
}

console.log(largeCities);


/*
7. Write a 'forEach' loop that iterates through the array ["earl grey", "green tea", "chai", "ooloong tea"].
    Stop the loop when "chai" is found and store all previous tea types in an array named 'availableTeas'
*/

let teaCollection = ["earl grey", "green tea", "chai", "ooloong tea"];

let availableTeas = []

teaCollection.forEach((tea) => {
    console.log(tea);
    
})
