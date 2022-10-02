//Js Fundamentals Part 1
//-----------------------------------------------------------------------------------//

let js = "amazing";
console.log(40 + 8 + 23 - 10);

//Print multiple lines to the browser console
console.log("Jonas");
console.log(23);        


//Js uses camel case
let first = "Jonas";
let firstName = "Matilda";

//Console.log is used to desplay to the browser console
console.log(firstName);
console.log(firstName);
console.log(firstName);

//Conventions for variable names
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

//-----------------------------------------------------------------------------------//
//Data Types - Boolean

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof 23);
console.log(typeof 'Jonas');
console.log(typeof javascriptIsFun);


//Data Types - Undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year); 

//Data Types - Null
console.log(typeof null);

//------------------------------------------------------------------------------------//
//Declarations

//Let
let age = 30;
age = 31;

//Const
const birthYear = 1999;
// birthYear = 1998; - Error - Assignment to constant variable.

//Var
var job = 'Programmer';
job = 'Teacher';

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

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);