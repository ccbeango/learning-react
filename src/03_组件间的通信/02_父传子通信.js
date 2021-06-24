import React, { Component } from 'react';

class ChildCpn extends Component {
  // 可省略
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h2>类子组件展示数据： { this.props.name}</h2>
    );
  }
}

function ChildCpn2(props) {
  return (
    <h2>函数子组件展示数据： { props.name}</h2>
  );
}

export default class Com02 extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="Ccbean" />
        <ChildCpn2 name="Ccbean" />
      </div>
    )
  }
}
