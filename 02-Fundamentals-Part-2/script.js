//-----------------------------------------------------------------------------------//
// Activating Strict Mode

'use strict';

/* 
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
*/

// const interface = 'Audio';
// const private = 534;

//-----------------------------------------------------------------------------------//
// Functions

/* 
function logger() {
    console.log('My name is Jonas');
}
*/

// Calling / Running / Invoking Function

/* 
logger();
logger();
logger();  

function fruitprocessors(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitprocessors(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitprocessors(2, 4);
console.log(appleOrangeJuice);
*/

//-----------------------------------------------------------------------------------//
//Function Declaration vs Function Expression

//Function Declaration

/* 
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(1991);
*/

//Function Expression

/* 
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
*/

//-----------------------------------------------------------------------------------//
//Arrow Functionmm

/* 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
*/

/* 
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

*/

//-----------------------------------------------------------------------------------//
//Function Calling Other Function

/* 
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitprocessors(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}
console.log(fruitprocessors(2,3));
*/

//-----------------------------------------------------------------------------------//
//Reviewing Functions

/* 
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement}`);  
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

    //return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));
*/

//-----------------------------------------------------------------------------------//
// Introduction to Arrays

/* 
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1994, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends.length - 1);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const Jonas = [firstName, 'Schmidtmann', 2037 - 1991, 'teacher', friends];
console.log(Jonas);
console.log(Jonas.length);
*/

// Exercise
















