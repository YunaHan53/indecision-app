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
  handlePick() {
    alert('handlePick')
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

// Add RemoveAll button
// Setup handleRemoveAll => alert some message
// setup onClick to fire the method

// Options class => Options component here
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  
  handleRemoveAll() {
    console.log(this.props.options)
    // alert('handleRemoveAll')
  }
  render() {
    return (
      <div>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    if (option) {
      alert(option)
    }
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
