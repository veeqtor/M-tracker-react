import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => (
  <div className="form-wrapper">
    <h2 className="form-title">Login</h2>
    <div className="form-inner">
      <span id="alert-box" className="alert alert-warning" />
      <form>
        <div className="input-group">
          <input type="email" id="email" name="email" placeholder="Enter your email" />
          <span id="error-email" className="error" />
        </div>
        <div className="input-group">
          <input type="password" id="password" name="password" placeholder="Enter your password" />
          <span id="error-password" className="error" />
        </div>
        <div className="input-group">
          <input type="submit" className="btn btn-default" value="Log in" />
          <p>Do not have an account?&nbsp; <Link to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  </div>
);

export default LoginForm;
