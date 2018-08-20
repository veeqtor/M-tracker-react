import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => (
  <div className="form-wrapper">
    <h2 className="form-title">Register</h2>
    <div className="form-inner">
      <span id="alert-box" className="alert alert-warning" />
      <form>
        <div className="input-group">
          <input type="text" id="name" name="name" placeholder="Enter your name" />
          <span id="error-name" className="error" />
        </div>
        <div className="input-group">
          <input type="email" id="email" name="email" placeholder="Enter your email" />
          <span id="error-email" className="error" />
        </div>
        <div className="input-group">
          <input type="password" id="password" name="password" placeholder="Enter your password" />
          <span id="error-password" className="error" />
        </div>
        <div className="input-group">
          <input className="btn btn-default" type="submit" value="Sign up" />
          <p>Already have an account?&nbsp; <Link to="/login">Log In</Link></p>
        </div>
      </form>
    </div>
  </div>
);

export default RegisterForm;
