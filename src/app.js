class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer.'
    const options = ['Thing one', 'Thing two', 'Thing four']

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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

// Setup options prop for Options component
// Render the length of the array {this.props.options.length}


// Render new p tag for each option (set text, set key)
// {this.props.options.map((option) => <p key={option}>{option}</p>)}


// Options class => Options component here
class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    )
  }
}

// Option => Option component here
class Option extends React.Component {
  render() {
    return (
      <div>
        Option: {this.props.optionText}
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
