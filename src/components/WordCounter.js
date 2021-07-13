import { Component } from 'react';
// PSEUDOCODE
// Textbox in which user enters text
// Underneath a "Click Me" button
// Once clicked, the number of characters (incl. whitespace) in the textbox appears to the right of the button
// Reset textbox on click
// Repeat above, and keep adding character total to grand total

class WordCounter extends Component {
  state = {
    content: '',
    totalChars: 0
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.handleInput(this.state);
  }

  handleInput = () => {
    this.setState({
      content: '',
      totalChars: this.state.totalChars + this.state.content.length
    })
  }

  render () {
    return (
      <div>
        <h1>Word Counter</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="content">Type words here!</label><br/>
          <input
            required
            id="content"
            name="content"
            onChange={this.handleChange}
            value={this.state.content}
          /><br/><br/>
          <button
            type="submit"
          >Click Me!</button>
        </form>
        <h2>Total characters typed: {this.state.totalChars}</h2>
      </div>
    )
  }
}

export default WordCounter;