import React, { PureComponent } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './TransitionGroupDemo.css';

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [1, 2],
    };
  }

  addNumber() {
    this.setState({
      numbers: [...this.state.numbers, this.state.numbers.length + 1]
    });
  }

  render() {
    return (
      <TransitionGroup>
        <button onClick={e => this.addNumber()}>+number</button>
        {this.state.numbers.map((item) => (
          <CSSTransition key={item} timeout={300} classNames="num">
            <div>{item}</div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}
