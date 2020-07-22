// var allows you to reassign AND redefine variables
var nameVar = 'Andrew'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

// let variables - can reassign but CANNOT redefine variables
let nameLet = 'Jen'
nameLet = 'Julie'
console.log('nameLet', nameLet)

// const variables - CANNOT reassign OR redefine variables
const nameConst = 'Frank'
console.log('nameConst', nameConst)

// Block scoping (eg. let and const)
const fullName = 'Jen Mead'
const firstName

if (fullName) {
  firstName = fullName.split(' ')[0]
  console.log(firstName)
}

console.log(firstName)
