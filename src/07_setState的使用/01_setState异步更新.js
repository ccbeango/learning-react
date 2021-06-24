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
      </div>
    )
  }

  changeText() {
    console.log('test', this.refs.test)
    this.setState({
      message: 'Hello React'
    });

    console.log(this.state.message);
  }
}
