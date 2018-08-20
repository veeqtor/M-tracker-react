import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './forms/LoginForm';


const LoginPage = () => (
  <div>
    <Header />
    <LoginForm />
    <Footer />
  </div>
);

export default LoginPage;
