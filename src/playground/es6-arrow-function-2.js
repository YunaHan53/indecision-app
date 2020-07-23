// Arguments Object - no longer bound with arrow functions in ES6

const add = (a, b) => {
  // console.log(arguments)
  return a + b
}
console.log(add(55, 1, 1001))


// this keyword - no longer bound in ES6

// ES5 version
const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  // arrow functions does NOT work on a method:
  printPlacesLived: function () {
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' +city)
    })
  }
}
user.printPlacesLived()


// ES6 version
const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map(city => this.name + ' has lived in ' + city)
  }
}
console.log(user.printPlacesLived())

// Challenge Area

const multiplier = {
  // number - array of numbers
  // multiplyBy - single number
  // multiply - return a new array where the number have been multiplied
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(num => num * this.multiplyBy)
  }
}

console.log(multiplier.multiply()) //[1, 2, 3] 2 [2, 4, 6]
