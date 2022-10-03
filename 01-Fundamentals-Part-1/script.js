//Js Fundamentals Part 1
//-----------------------------------------------------------------------------------//

/* 
let js = "amazing";
console.log(40 + 8 + 23 - 10);
 */

//Print multiple lines to the browser console
/* 
console.log("Jonas");
console.log(23);        
 */

//Js uses camel case
/* 
let first = "Jonas";
let firstName = "Matilda";
*/

/* 
Console.log is used to desplay to the browser console
console.log(firstName);
console.log(firstName);
console.log(firstName);
 */

//Conventions for variable names

/* 
let jonas_matilda = 'JM';
let $function = 27;

let person = "Jonas";
let PI = 3.1415;

//Good conventions for naming Variables
let myFirstJob = 'Programmer';
let myCurrentJob = 'Professor';

//Bad conventions for naming variables
let job1 = 'Programmer';
let job2 = 'Professor';

console.log(myFirstJob);
*/

//-----------------------------------------------------------------------------------//
//Data Types - Boolean

/* 
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof 23);
console.log(typeof 'Jonas');
console.log(typeof javascriptIsFun);
 */

//Data Types - Undefined
/* 
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year); 

//Data Types - Null
console.log(typeof null); */

//------------------------------------------------------------------------------------//
//Declarations

//Let
/* 
let age = 30;
age = 31;
 */

//Const
/* 
const birthYear = 1999; */
// birthYear = 1998; - Error - Assignment to constant variable.

//Var
/* 
var job = 'Programmer';
job = 'Teacher';
 */

//-----------------------------------------------------------------------------------//
//Basic Operators

//Substraction
/*
const now = 2022;
const ageJonas = now - 1999;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
*/

//Multiplication, Division, Power
/* 
console.log(ageJonas * 2, ageJonas / 10, ageJonas ** 3)
 */

//Addition
/* 
const nameFirst = "Jonas";
const nameLast = "Berg";
console.log(nameFirst + ' ' + nameLast);
 */

//Assignment Operator
/*
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x* 4 = 1000;
x++; // x = x + 1
x--; // x = x - 1
console.log(x);
*/

//Comparision Operators
/* 
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18; 
console.log(now - 1999 > now - 2018); */

//-----------------------------------------------------------------------------------//
// Operator Precedence

/* 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

//-----------------------------------------------------------------------------------//
//Template Literals

/* 
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`)
 */

//-----------------------------------------------------------------------------------//
//Taking Decisions

/* 
const age = 15;

if(age >= 18) {
    console.log('Sarah can start her driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah cannot start her driving license 😢.
    Wait another ${yearsLeft} years!`);
}

const birthYear = 1991;

let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

//-----------------------------------------------------------------------------------//
//Type Conversion

/* 
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23); 
*/

//Type Coercion

/* 
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3)
console.log('23' / '2');
*/

/* 
let n = '1' + 1; // '11'
n = n - 1;
console.log(n); 
*/

//-----------------------------------------------------------------------------------//
//Truthy and Falsy Values

//5 Falsy values
//0, '', undefined, null, NaN

/* 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean('Jonas'));
console.log(Boolean(''));
console.log(Boolean({ }));

const money = 100;
if(money) {
    console.log("Don't spend it all!");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('Yay! Height is defined');
} else {
    console.log('Height is Undefined');
}
*/


//-----------------------------------------------------------------------------------//
//Equality Operators

/* 
const age = '18';
if (age === 18) {
    console.log('You just became an adult! (Strict Equality)');
}

if (age == 18) {
    console.log('You just became an adult! (Loose Equality)')
}

// === Strict Equality operator - No Type Coercion
// == Loose Equality Operator - Type Coersion
*/

//Prompt

/* 
const favourite = Number(prompt("What's your favourite number? :"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log("Cool! 7 is an amazing number!");
} else if (favourite === 9) {
    console.log("Cool! 9 is an amazing number!");
} else {
    console.log('Number is not 23 or 7 or 9');
}
*/

//Not Equal Operator

/* 
if (favourite !==23) {
    console.log('Why not 23');
}
*/

//-----------------------------------------------------------------------------------//
//Boolean Logic

//-----------------------------------------------------------------------------------//
//Logical Operators

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if(hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive.')
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive.')
// }

