import React, { Component } from 'react';
import Header from './components/Header';
import './main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <footer className="Footer">
            Copyright © {(new Date()).getFullYear()}, David Leger. All rights. reserved.
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
