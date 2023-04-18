import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar bg-neutral text-neutral-content">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        Weather
      </Link>
    </div>
    <div className="flex-none">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-sm" />
      </div>
    </div>
  </nav>
);

export default Navbar;
