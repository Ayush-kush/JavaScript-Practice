/*

Excercise 1:
------------

Write a javascript prog to create a new string from a given string taking the first three characters and the last 3 characters of a string and adding them together. The String length must be 3 or more, if not, the og array is returned.

*/

const makeNewString = (str) => 
    str.length >= 3 ? str.slice(0,3) + str.slice(-3) : str

// console.log(makeNewString("Avengers EndGame"));


/*

Excercise 2:
------------

Write a javascript prog to extract the first half of a string of even length

*/

const firstHalfOfString = (str) => {
    return str.slice(0,(str.length)/2);
}

// console.log(firstHalfOfString("Thanos"));


/*

Excercise 3:
------------

Write a javascript prog to concatenate two strings except their first character

*/

const conTwoStr = (str1,str2) =>  str1.slice(1) + str2.slice(1)


// console.log(conTwoStr("Thanos","Hulk"));

/*

Excercise 4:
------------

Write a javascript prog to check a given string contains 2 to 4 occurreences of a specified character.

*/

const countChars = (str,char) =>

    str.split('').filter( ch => ch === char).length;

const contains2To4 = (str,char) =>
    countChars(str,char) >=2 && countChars(str,char)<=4 ;

// console.log(contains2To4("hi",'i'));
// console.log(contains2To4("Goodbye",'o'));
// console.log(contains2To4("Fasterrrr",'r'));


// Part 3



/*

Excercise 1:
------------

Write a javascript prog to find the number of even digits in a array of integers

*/

const countEvenInArray = (arr) =>{
    return arr.filter((item) => item = item % 2 === 0).length
}

const arrEx = [1, 2, 3, 4 , 5, 6, 8]

// console.log(arrEx);
// console.log(countEvenInArray(arrEx));

const countEvenInArrayUptoN = (arr, n) =>{
    return arr.filter((item) => (item % 2 === 0) && item<=n).length
}

console.log(countEvenInArrayUptoN(arrEx,6));


/*

Excercise 3:
------------

Write a javascript prog to get the largest even number from an array of integers

*/

const largestEvenInArray = (arr) => 
    Math.max(...arr.filter(num => num%2 ===0))

console.log(largestEvenInArray(arrEx));



/*

Excercise 4:
------------

Write a javascript prog to replace the first digit in a string with $ character. 

*/

const replaceFirstDigitBy$ = (str) => str.replace(/[0-9]/, '$') 

// const replaceFirstDigitBy$ = (str) => str.replace(/[\d]/, '$') 


// Using REGEX
