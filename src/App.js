import { Component } from 'react';
import SecretContainer from './containers/SecretContainer';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <SecretContainer />
      </div>
    );
  }
}

export default App;
