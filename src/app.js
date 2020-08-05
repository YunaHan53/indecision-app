class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer.</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

// Options class => Options component here
class Options extends React.Component {
  render() {
    return (
      <div>
        Options
        <Option />
      </div>
    )
  }
}

// Option => Option component here
class Option extends React.Component {
  render() {
    return (
      <div>
        Option
      </div>
    )
  }
}

// AddOption => AddOption component Here
class AddOption extends React.Component {
  render() {
    return (
    <div>
      <button>Add Option</button>
    </div>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
