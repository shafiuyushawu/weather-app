import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar bg-neutral text-neutral-content">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        Weather
      </Link>
    </div>
  </nav>
);

export default Navbar;
