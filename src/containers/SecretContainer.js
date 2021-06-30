import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSecrets } from '../actions/secretActions';
import SecretList from '../components/SecretList';

class SecretContainer extends Component {
  componentDidMount() {
    this.props.fetchSecrets();
  }
  
  render() {
    const { isLoading, secretsList } = this.props;

    if (isLoading) {
      return (
        <div>
          <iframe
            src="https://giphy.com/embed/QPQ3xlJhqR1BXl89RG"
            width="480"
            height="400"
            frameBorder="0"
            className="giphy-embed"
            alt="Stanley from The Office"
            title="Stanley from The Office"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/QPQ3xlJhqR1BXl89RG">via GIPHY</a>
          </p>
        </div>
      )
    }

    return (
      <div>
        <SecretList secrets={secretsList} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    secretsList: state.secrets.list,
    isLoading: state.secrets.isLoading
  }
}

export default connect(mapStateToProps, { fetchSecrets })(SecretContainer);