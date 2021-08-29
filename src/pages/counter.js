import React, { PureComponent } from 'react';
import { subAction, decreAction, increAction, increActionAsync } from '../store/counter/actionCreators';
import { connect } from '../lib/react-redux';

class Home extends PureComponent {

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>计数：{this.props.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.incrementAsync()}>Async +1</button>
        <button onClick={e => this.decrement()}>-1</button>
        <button onClick={e => this.subNumber()}>-5</button>
      </div>
    )
  }

  increment() {
    this.props.increAction();
  }

  incrementAsync() {
    this.props.increActionAsync();
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
    counter: state.counterInfo.counter,
    banners: state.homeInfo.banners,
    recommends: state.homeInfo.recommends
  }),
  // {
  //   increAction
  //   increActionAsync
  //   decreAction,
  //   subAction
  // }
  dispatch => ({
    increAction() {
      dispatch(increAction());
    },
    increActionAsync () {
      dispatch(increActionAsync());
    },
    decreAction() {
      dispatch(decreAction());
    },
    subAction(num) {
      dispatch(subAction(num));
    }
  })
)(Home);
