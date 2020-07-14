'use strict';

console.log("App.js is running!");

// if statements
// ternary operator eg: user.name ? user.name : 'Anonymous'
// logical 'And' operator eg: app.subtitle && <p>{app.subtitle}</p>

// only render the subtitle (and p tag) if subtitle exist - logical 'and' operator
// render new p tag - if options.length > 0 'Here are your options' 'No Options'
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  option: ['One', 'Two']
};

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.option.length > 0 ? 'Here are your options:' : 'No Options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

// User template
var user = {
  name: 'Mike',
  age: 27,
  location: 'Los Angeles'
  // Finding out if location property exists in User
};function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}
// Show the Location line only if the location exists
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
