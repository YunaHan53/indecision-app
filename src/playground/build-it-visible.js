let visibility = false;

// Create button to toggle the visibility of the details
const onToggle = () => {
  // Sets the current state of visibility to its opposite (visible : invisible)
  visibility = !visibility
  render()
}

const appRoot = document.getElementById('app');

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>
        {/* Using ternary operator to change button text*/}
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {/* Using JSX to write AND operator to toggle visibility on click*/}
      {visibility && (
        <div>
          <p>These are the details you can now see!</p>
        </div>
      )}
    </div>
  )
  ReactDOM.render(jsx, appRoot)
}

render()
