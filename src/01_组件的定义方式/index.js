import React, { Component } from 'react'
import App from './01_类组件';
import App2 from './02_函数组件';

export default class Com01 extends Component {
  render() {
    return (
      <div>
        <App />
        <App2 />
      </div>
    )
  }
}
