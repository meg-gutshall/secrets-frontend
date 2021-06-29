import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSecrets } from '../actions/secretActions';
import SecretList from '../components/SecretList';

class SecretContainer extends Component {
  componentDidMount() {
    this.props.fetchSecrets();
  }
  
  render() {
    debugger
    return <SecretList secrets={this.props.list} />
  }
}

const mapStateToProps = (state) => {
  return { secrets: state.secrets }
}

export default connect(mapStateToProps, { fetchSecrets })(SecretContainer);