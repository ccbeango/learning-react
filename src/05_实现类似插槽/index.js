import React, { Component } from 'react';
import NavBar from './NavBar';
import NavBar2 from './NavBar2';
import './style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar>
          <span>left</span>
          <strong>middle</strong>
          <span>right</span>
        </NavBar>

        <NavBar2
          leftSlot={<span>left</span>}
          middleSlot={<strong>middle</strong>}
          rightSlot={<span>right</span>}
        />
      </div>
    )
  }
}
