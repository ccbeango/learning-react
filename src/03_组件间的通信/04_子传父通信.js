import React, { Component } from 'react';

class CounterButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={() => this.props.increment(-1)}>-1</button>
    );
  }
}

export default class Com04 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  increment(count) {
    this.setState({
      counter: this.state.counter + count
    });
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <CounterButton increment={this.increment.bind(this)}/>
        <button onClick={() => this.increment(1)}>+1</button>
      </div>
    )
  }
}
