import React, { Component } from 'react';
import App1 from './01_跨组件通信-props';
import App2 from './02_跨组件通信-context';
import App3 from './03_跨组件通信-context函数组件';
import App4 from './04_跨组件通信-多个context';

export default class Com06 extends Component {
  render() {
    return (
      <div>
        <App1 />
        <App2 />
        <App3 />
        <App4 />
      </div>
    )
  }
}
