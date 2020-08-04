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

// Create an extension of an existing class
// `super` refers to the parent class
// Call the parent constructor function using `super()`
class Student extends Person {
  constructor(name, age,  major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    // `!!this.major` = if major exists, return `true`, if not, return `false`
    return !!this.major
  }
  // this overrides the parent method
  getDescription() {
    let description = super.getDescription()

    // Checks if `this.hasMajor` is defined
    if (this.hasMajor()) {
      description = description + `Their major is ${ this.major }`
    }
    return description
  }
}

// Challenge 2
// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am Andrew Mead. I'm visiting from Philadelphia
// 2. Hi. I am Andrew Mead.
class Traveler extends Person {
  constructor(name, age, major, location) {
    super(name, age)
    this.location = location
  }

  homeLocation() {
    return !!this.location
  }

  getGreeting() {
    let greeting = super.getGreeting()

    if (this.homeLocation()) {
      greeting += `I'm visiting from ${this.location}.`
    }
    return greeting
  }
}


const me = new Traveler('Andrew Mead', 26, 'Computer Science', 'Philadelphia')
console.log(me.getGreeting())

const other = new Traveler()
console.log(other.getGreeting())
