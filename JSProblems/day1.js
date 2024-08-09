/*
Excercise 1:
------------
    Write a JS prog to check two num and return true if one of the number is 100 or if the sum of the two is 100.

*/

function isSum100 (a,b) {
    return a===100|| b===100 || (a+b)===100
}

/*
Excercise 2:
------------
    Write a JS program to get the extension of a filename.

*/

const getFileExtensionName = (str) => str.slice(str.lastIndexOf('.'));

// console.log(getFileExtensionName('index.html'));
// console.log(getFileExtensionName('gta5.exe'));
// console.log(getFileExtensionName('marks.csv'));


/*
Excercise 3:
------------
    Write a JS program to replace every character in a given string with the character following it in the alphabet

*/

const moveCharsForward = (str) => str
    .split('')
    .map(char=> String.fromCharCode(char.charCodeAt(0)+1))
    .join('')

// console.log(moveCharsForward('abcdef'));

/*
Excercise 4:
------------
    Write a JS program to get the current date.

*/

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth()+1 ;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`
}

// console.log(formatDate());

/*
Excercise 5:
------------
    Write a JS program to gcreate a new string adding "New!" in front of a given string. If the given string begins with "New!" already
    then return the og string.

*/

const newStr = (str) => {
    if(str.includes("New!")) return str;
    return "New!" + str;
}

console.log(newStr("New! Game"));
console.log(newStr(" GoodGame"));


