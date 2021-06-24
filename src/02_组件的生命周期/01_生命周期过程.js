import React, { Component } from 'react';

class TipCom extends Component {
  render() {
    return (
      <div>你好，你来了</div>
    );
  }

  componentWillUnmount() {
    console.log('调用TipCom组件的componentWillUnmount方法');
  }
}

export default class App extends Component {
  constructor() {
    super();
    console.log('执行组件的constructor方法');

    this.state = {
      counter: 0,
      isShowTip: true
    };
  }

  increment() {
    console.log('点击+1按钮更新');
    this.setState({
      counter: this.state.counter + 1
    });
  }

  changeTipShow() {
    console.log('点击切换按钮更新');

    this.setState({
      isShowTip: !this.state.isShowTip
    });
  }

  render() {
    console.log('执行组件的render方法');

    return (
      <div>
        我是生命周期过程组件 | {this.state.counter}
        <button onClick={() => this.increment()}>+</button> 
        <hr/>
        <button onClick={() => this.changeTipShow()}>切换</button>
        { this.state.isShowTip && <TipCom/> }
      </div>
    )
  }
  
  componentDidMount() {
    console.log('执行组件的componentDidMount方法');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('执行组件的shouldComponentUpdate方法');
    
    return true;
  }

  componentDidUpdate() {
    console.log('执行组件的componentDidUpdate方法');
  }
}
