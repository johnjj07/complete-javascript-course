// Data types
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
job = 'Teacher';
console.log(job);
*/

// Type coercion
/*
var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'Driver';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName)
*/

// Basic Operators
/*
var year, yearJohn, yearMark
year = 2018;
ageJohn = 28
ageMark = 33
yearJohn = year - ageJohn;
yearMark = year - ageMark;
console.log(yearJohn);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'a string');
var x
console.log(typeof x);
*/

/**********************************
 * CODING CHALLENGE 1
 */
var markMass = prompt("What is Mark's mass?");
var markHeight = prompt("What is Mark's height?");
var johnMass = prompt("What is John's mass?");
var johnHeight = prompt("What is John's height");
var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);
var isMarksBmiHigher = markBmi > johnBmi;
console.log("Is Mark's BMI higher than John's? " + isMarksBmiHigher);
