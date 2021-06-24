import React, { Component } from 'react';

export default class NavBar2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-item nav-left">{this.props.leftSlot}</div>
        <div className="nav-item nav-middle">{this.props.middleSlot}</div>
        <div className="nav-item nav-right">{this.props.rightSlot}</div>
      </div>
    )
  }
}
