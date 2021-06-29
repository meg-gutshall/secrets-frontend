import { Component } from 'react';
import Form from '../components/Form';

class FormContainer extends Component {
  state = {
    text: "",
    tag: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Form 
          formData={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default FormContainer;