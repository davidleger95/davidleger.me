import React, { Component } from 'react';
import Button from './Button';
import SocialLinks from './SocialLinks';
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
        <Button type="link" href="mailto:davidleger95@me.com">Contact</Button>
        <SocialLinks />
      </header>
    );
  }
}

export default Header;
