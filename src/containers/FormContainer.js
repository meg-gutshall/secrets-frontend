import { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { POST_SECRET_SUCCESS } from '../constants/ActionTypes';

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
    this.props.fetchSecrets(this.state);
    // Create dispatch(action) to send off formData
    // Add connect() at bottom
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

const mapDispatchToProps = dispatch => {
  return {
    fetchSecrets: formData => { dispatch({ type: POST_SECRET_SUCCESS, payload: formData }) }
  }
}

export default connect(null, mapDispatchToProps)(FormContainer);