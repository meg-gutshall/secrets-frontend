import { Link } from 'react-router-dom';

const Nav = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/secrets">Secrets</Link>
    </li>
    <li>
      <Link to="/secrets/new">New Secret</Link>
    </li>
  </ul>
);

export default Nav;