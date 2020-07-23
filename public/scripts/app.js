'use strict';

// Sample ES5 function
var square = function square(x) {
  return x * x;
};

// Sample ES6 arrow function
var squareArrow = function squareArrow(x) {
  return x * x;
};

// Arrow function expression shorthand syntax
// allows us to create much more concise functions
var squareArrow2 = function squareArrow2(x) {
  return x * x;
};

console.log(squareArrow2(5));

// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> 'Mike'
// Create regular arrow function
// Create arrow function using shorthand syntax

// Regular Arrow Function
var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};
// Shorthand Arrow Function
var getFirstName2 = function getFirstName2(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName2('Mike Smith'));
