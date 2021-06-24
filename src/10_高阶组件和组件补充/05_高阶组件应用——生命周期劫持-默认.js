import React, { PureComponent } from 'react';

class Home extends PureComponent {
  UNSAFE_componentWillMount() {
    this.begin = Date.now();
  }

  componentDidMount() {
    this.end = Date.now();
    const interval = this.end - this.begin;
    console.log(`Home渲染使用时间:${interval}`)
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>我是home的元素,哈哈哈</p>
      </div>
    )
  }
}

class Detail extends PureComponent {
  UNSAFE_componentWillMount() {
    this.begin = Date.now();
  }

  componentDidMount() {
    this.end = Date.now();
    const interval = this.end - this.begin;
    console.log(`Detail渲染使用时间:${interval}`)
  }

  render() {
    return (
      <div>
        <h2>Detail</h2>
        <p>我是detail的元素,哈哈哈</p>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <Detail/>
      </div>
    )
  }
}