import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


const Homepage = () => (
  <div>
    <Header />
    <div className="landingPage">
      <div className="welcome">
        <h1>M-tracker</h1>
        <p>Maintenance/repairs at your convenience</p><br />
        <Link className="btn-landing" to="/register"> Get started</Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default Homepage;
