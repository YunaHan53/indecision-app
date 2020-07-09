console.log("App.js is running!")

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
};

// JSX - JavaScript XML
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);


// User template
var user = {
  name: 'Mike',
  age: 27,
  location: 'Los Angeles'
}

// var userName = 'Mike'
// var userAge = '27'
// var userLocation = 'Los Angeles'

var templateTwo = (
  <div>
    <h1>{user.name.toUpperCase() + '!'}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
