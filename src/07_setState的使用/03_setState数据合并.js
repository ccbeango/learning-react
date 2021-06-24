import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  increment() {
    console.log("点击+1按钮更新");
    // 1.setState本身会被合并 更新+1
    this.setState({
      counter: this.state.counter + 1,
    });
    this.setState({
      counter: this.state.counter + 1,
    });
    this.setState({
      counter: this.state.counter + 1,
    });

    // 2.传入函数可以更新为+3
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+</button>
      </div>
    );
  }
}
