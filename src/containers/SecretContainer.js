import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSecrets } from '../actions/secretActions';

class SecretContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSecrets());
  }
  
  render() {
    return null
  }
}

export default connect()(SecretContainer);