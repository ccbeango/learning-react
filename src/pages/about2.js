import React, { PureComponent } from 'react';
import { subAction, decreAction } from '../store/actionCreators';
import connect from '../utils/connect';

class About extends PureComponent {
  render() {
    return (
      <div>
        <h1>About2</h1>
        <h2>计数：{this.props.counter}</h2>
        <button onClick={e => this.decrement()}>-1</button>
        <button onClick={e => this.subNumber()}>-5</button>
      </div>
    )
  }

  decrement() {
    this.props.decreAction();
  }

  subNumber() {
    this.props.subAction(5);
  }
}

export default connect(
  state => ({
    counter: state.counter
  }),
  dispatch => ({
    decreAction() {
      dispatch(decreAction());
    },
    subAction(num) {
      dispatch(subAction(num));
    }
  })
)(About);
