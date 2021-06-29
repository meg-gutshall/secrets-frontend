import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SecretContainer from './containers/SecretContainer';
import FormContainer from './containers/FormContainer';
import Home from './components/Home';
import Nav from './components/Nav';
import './App.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          {/* <Switch> */}
          <Route exact path='/' component={Home} />
          <Route path='/secrets/new' component={FormContainer} />
          <Route path='/secrets' component={SecretContainer} />
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;
