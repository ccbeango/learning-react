import React, { Component } from 'react';
import App1 from './01_组件间嵌套';
import App2 from './02_父传子通信';
import App3 from './03_属性验证';
import App4 from './04_子传父通信';

export default class Com03 extends Component {
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
