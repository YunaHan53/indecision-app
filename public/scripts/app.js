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
  option: []
};

// Function
var onFormSubmit = function onFormSubmit(e) {
  // Prevents the entire page from reloading
  e.preventDefault();
  // Get the user inputed value
  var option = e.target.elements.option.value;
  // Check if there is a value typed in
  if (option) {
    // Pushes the user inputed value into the option array in app
    app.option.push(option);
    // Clears the input typed in
    e.target.elements.option.value = '';
    render();
  }
};

// Create "Remove All" button above list
// On click -> wipe the array -> rerender
var onRemoveAll = function onRemoveAll() {
  app.option = [];
  render();
};

// Create "What should I do?" button
// Generates a random option to user on click
var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.option.length);
  var option = app.option[randomNum];
  alert(option);
};

var appRoot = document.getElementById('app');

// JSX - JavaScript XML
var render = function render() {
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
      'button',
      { disabled: app.option.length === 0, onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.option.map(function (opt) {
        return React.createElement(
          'li',
          { key: opt },
          opt
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();

// [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
