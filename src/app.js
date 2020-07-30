console.log("App.js is running!")

// if statements
// ternary operator eg: user.name ? user.name : 'Anonymous'
// logical 'And' operator eg: app.subtitle && <p>{app.subtitle}</p>

// only render the subtitle (and p tag) if subtitle exist - logical 'and' operator
// render new p tag - if options.length > 0 'Here are your options' 'No Options'
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  option: []
};

// function
const onFormSubmit = (e) => {
  // Prevents the entire page from reloading
  e.preventDefault()
  // Get the user inputed value
  const option = e.target.elements.option.value
  // Check if there is a value typed in
  if (option) {
    // Pushes the user inputed value into the option array in app
    app.option.push(option)
    // Clears the input typed in
    e.target.elements.option.value = ''
    render()
  }
}

// Create "Remove All" button above list
// On click -> wipe the array -> rerender
const onRemoveAll = () => {
  app.option = []
  render()
}

const appRoot = document.getElementById('app');

// JSX - JavaScript XML
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.option.length > 0 ? 'Here are your options:' : 'No Options'}</p>
      <p>{app.option.length}</p>
      <button onClick ={onRemoveAll}>Remove All</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

render()
