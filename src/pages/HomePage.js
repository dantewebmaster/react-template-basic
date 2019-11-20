import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home-page">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>React Template Basic</p>
        <Link to="/users" className="link">Go to Users Page</Link>
      </header>
    </div>
  );
}
