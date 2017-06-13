import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
        <li><Link to="/My house is on fire." >house on fire!!!</Link></li>
        <li><Link to="/My landord painted a rainbow on my house." >Rainbow House</Link></li>
        <li><Link to="/The landlord's drunk friend showed up and slept in my room" >Drunk friend</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default App;
