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

let count = 0
const addOne = () => {
  count++
  renderCounterApp()
}

const minusOne = () => {
  // subtract 1 from count - rerender
  count--
  renderCounterApp()
}

const reset = () => {
  // set count to 0 - rerender
  count = 0
  renderCounterApp()
}

// Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )

  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp()
