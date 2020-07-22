console.log("App.js is running!")

// if statements
// ternary operator eg: user.name ? user.name : 'Anonymous'
// logical 'And' operator eg: app.subtitle && <p>{app.subtitle}</p>

// only render the subtitle (and p tag) if subtitle exist - logical 'and' operator
// render new p tag - if options.length > 0 'Here are your options' 'No Options'
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  option: ['One', 'Two']
};

// JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.option.length > 0 ? 'Here are your options:' : 'No Options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);


// User template
const user = {
  name: 'Mike',
  age: 27,
  location: 'Los Angeles'
}
// Finding out if location property exists in User
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>
  }
}
// Show the Location line only if the location exists
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
