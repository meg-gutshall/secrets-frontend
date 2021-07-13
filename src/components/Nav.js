import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <Link to="/secrets">Secrets</Link><br/>
    <Link to="/secrets/new">Come Clean!</Link><br/>
    <Link to="/secrets/about">About</Link><br/>
  </div>
);

export default Nav;