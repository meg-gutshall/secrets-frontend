import { Component } from 'react';
import SecretContainer from './containers/SecretContainer';
import FormContainer from './containers/FormContainer';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <FormContainer />
        <SecretContainer />
      </div>
    );
  }
}

export default App;
