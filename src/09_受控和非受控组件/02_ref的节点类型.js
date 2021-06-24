import React, { PureComponent, createRef } from 'react';

class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

function Greeting() {
  return (
    <h2>Hello!</h2>
  );
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.counterRef = createRef();
    this.greetingRef = createRef();
  }

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello Ref</h2>
        <Greeting ref={this.greetingRef}/>
        <Counter ref={this.counterRef}/>
        <button onClick={e => this.increment()}>app +1</button>
      </div>
    )
  }

  increment() {
    console.log('titleRef', this.titleRef)
    console.log('counterRef', this.counterRef)
    console.log('greetingRef', this.greetingRef)
    this.counterRef.current.increment();
  }
}