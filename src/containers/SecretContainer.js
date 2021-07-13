import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSecrets } from '../actions/allActions';
import SecretList from '../components/SecretList';

class SecretContainer extends Component {
  componentDidMount() {
    this.props.fetchSecrets();
  }
  
  render() {
    const { isLoading, allSecrets } = this.props;

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

    // SecretList can take care of filtering as well
    return (
      <div>
        <SecretList allSecrets={allSecrets} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    allSecrets: state.secrets.byId,
    isLoading: state.secrets.isLoading
  }
}

export default connect(mapStateToProps, { fetchSecrets })(SecretContainer);