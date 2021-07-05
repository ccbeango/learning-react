import React, { PureComponent } from 'react';
import connect from '../utils/connect';
import { addAction, increAction } from '../store/actionCreators';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Home2</h1>
        <h2>计数：{this.props.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.addNumber()}>+5</button>
      </div>
    )
  }

  increment() {
    this.props.increAction();
  }

  addNumber() {
    this.props.addAction(5);
  }
}

const mapStateToProp = state => {
  return {
    counter: state.counter
  };
}

const mapDispatchToProp = dispatch => {
  return {
    increAction() {
      dispatch(increAction());
    },
    addAction(num) {
      dispatch(addAction(num))
    }
  };
}


export default connect(mapStateToProp, mapDispatchToProp)(Home);