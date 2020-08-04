// Challenge
// 1. Set up constructor to take name and age (default age to 0)
// 2. getDescription - Andrew Mead is 26 years old.

class Person {
  // Define the class
  // Defaulting the arguments syntax: `name = 'Anonymous'`
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    // return 'Hi, I am ' + this.name + '!'
    return `Hi, I am ${ this.name }!`
  }
  getDescription() {
    return `${ this.name } is ${ this.age } year(s) old.`
  }
}

const me = new Person('Andrew Mead', 26)
console.log(me.getGreeting())
console.log(me.getDescription())

const other = new Person()
console.log(other.getGreeting())
console.log(other.getDescription())
