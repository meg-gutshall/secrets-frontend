import { Component } from 'react';
import { connect } from 'react-redux';
import { postSecret } from '../actions/secretActions';
import Form from '../components/Form';

class FormContainer extends Component {
  state = {
    content: '',
    tag: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.postSecret(this.state);
    this.setState({
      content: '',
      tag: ''
    })
    // Create callback to clear form (local state)
      // A nice todo --> Only clear if the POST is successful (handleSuccess callback method to pass to the reducer)
  }

  render() {
    return (
      <div>
        <Form 
          formData={this.state}
          handleChange={this.handleChange}
          handleTagChange={this.handleTagChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default connect(null, { postSecret })(FormContainer);