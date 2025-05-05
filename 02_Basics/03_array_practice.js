/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors = ["Green Tea", "Black Tea", "Oolong Tea"]
const firstTea = teaFlavors[0]

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"]
let favoriteCity = cities[2]

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["herbal tea", "white tea", "masala chai"]
teaFlavors[1]="jasmine tea"

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"]
citiesVisited.push("Berlin")

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["Chai", "Iced Tea", "Matcha", "Earl Grey"]
let lastOrder = teaOrders.pop()

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["Green Tea", "Oolong Tea", "Chai"];
let softCopyTeas = popularTeas
popularTeas.pop()
console.log(popularTeas)
console.log(softCopyTeas)



/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin" , "Singapore", "New York"]
let hardCopyCities = [... topCities]
let hardCopyCities2 = topCities.slice()

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]
let worldCities = [...europeanCities, ...asianCities]
//or
let worldCities2 = europeanCities.concat(asianCities);

console.log(worldCities)
console.log(worldCities2)


/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["Masala Chai", "Oolong Tea", "Green Tea", "Earl Grey"]
let menuLength = teaMenu.length

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, and `"Cape Town"`.
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town"]
let isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList)

