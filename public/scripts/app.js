'use strict';

var visibility = false;

// Create button to toggle the visibility of the details
var onToggle = function onToggle() {
  // Sets the current state of visibility to its opposite (visible : invisible)
  visibility = !visibility;
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var jsx = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: onToggle },
      visibility ? 'Hide Details' : 'Show Details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'These are the details you can now see!'
      )
    )
  );
  ReactDOM.render(jsx, appRoot);
};

render();
