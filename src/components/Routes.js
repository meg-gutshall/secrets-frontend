import { BrowserRouter as Router, Route } from 'react-router-dom';
import Secrets from './Secrets';
import NewSecret from './NewSecret';
import About from './About';
import Nav from './Nav';
import WordCounter from './WordCounter';

const Routes = () => (
  <Router>
    <Nav />
    <Route exact path='/' component={Secrets} /> 
    <Route path='/secrets/about' component={About} />
    <Route path='/secrets/new' component={NewSecret} />
    <Route exact path='/secrets' component={Secrets} />
    <Route exact path='/word-counter' component={WordCounter} />
  </Router>
)

export default Routes;