import React, { Component } from 'react';
import logo from '../assets/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1 className="title">
          <img src={logo} className="logo" alt="" />
          David Leger
        </h1>
        <p className="lead">Web developer and designer.</p>
        <button className="button">Contact</button>
      </header>
    );
  }
}

export default Header;
