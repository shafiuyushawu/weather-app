import { Link } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';

const Navbar = () => (
  <nav className="navbar bg-neutral text-neutral-content" data-test="navbar">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost normal-case text-xl p-2">
        <FcHome className="inline text-4xl mr-4" />
        Weather Forecast
      </Link>
    </div>
  </nav>
);

export default Navbar;
