import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="header navbar navbar-expand-lg navbar-dark bg-dark">
    <NavLink className="navbar-brand" exact to="/">Github User Explorer</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header;
