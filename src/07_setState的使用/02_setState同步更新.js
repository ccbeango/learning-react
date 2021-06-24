import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello World'
    };
  }

  render() {
    return (
      <div ref="test">
        <h2>{this.state.message}</h2>
        <button onClick={() => this.changeText()}>改变文本</button>
        <button id="btn">改变文本</button>
      </div>
    )
  }

  componentDidMount () {
    // 情况二 setState放入原生事件中
    document.getElementById('btn').addEventListener('click', () => {
      this.setState({
        message: '你好啊，李银河'
      })
      console.log(this.state.message);
    })
  }

  changeText() {
    // 情况一 将setState放入定时器中
    setTimeout(() => {
      this.setState({
        message: 'Hello React'
      });
  
      console.log(this.state.message);
    })
  }
}
