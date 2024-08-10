/*

Excercise 1:
------------

Write a javascript prog to create a new string from a given string taking the first three characters and the last 3 characters of a string and adding them together. The String length must be 3 or more, if not, the og array is returned.

*/

const makeNewString = (str) => 
    str.length >= 3 ? str.slice(0,3) + str.slice(-3) : str

console.log(makeNewString("Avengers EndGame"));


/*

Excercise 2:
------------

Write a javascript prog to extract the first half of a string of even length

*/

const firstHalfOfString = (str) => {
    return str.slice(0,(str.length)/2);
}

console.log(firstHalfOfString("Thanos"));


/*

Excercise 3:
------------

Write a javascript prog to concatenate two strings except their first character

*/

const conTwoStr = (str1,str2) =>  str1.slice(1) + str2.slice(1)


console.log(conTwoStr("Thanos","Hulk"));

/*

Excercise 4:
------------

Write a javascript prog to check a given string contains 2 to 4 occurreences of a specified character.

*/

const countChars = (str,char) =>

    str.split('').filter( ch => ch === char).length;

const contains2To4 = (str,char) =>
    countChars(str,char) >=2 && countChars(str,char)<=4 ;

console.log(contains2To4("hi",'i'));
console.log(contains2To4("Goodbye",'o'));
console.log(contains2To4("Fasterrrr",'r'));


