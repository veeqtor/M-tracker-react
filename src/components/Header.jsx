import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
  <div>
    <header>
      <Link className="brand" to="/">M-Tracker</Link>
      <nav>
        <ul>
          <li><Link className="btn btn-default" to="/login"><i className="fa fa-sign-in" /> Login</Link></li>
          <li><Link className="btn btn-default" to="/dashboard"><i className="fa fa-dashboard" /> Dashboard</Link></li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
