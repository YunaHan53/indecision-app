// Sample ES5 function
const square = function (x) {
  return x * x
}

// Sample ES6 arrow function
const squareArrow = (x) => {
  return x * x
}

// Arrow function expression shorthand syntax
// allows us to create much more concise functions
const squareArrow2 = x => x * x

console.log(squareArrow2(5))


// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> 'Mike'
// Create regular arrow function
// Create arrow function using shorthand syntax

// Regular Arrow Function
const getFirstName = (fullName) => {
  return fullName.split(' ')[0]
}
// Shorthand Arrow Function
const getFirstName2 = fullName => fullName.split(' ')[0]

console.log(getFirstName2('Mike Smith'))
