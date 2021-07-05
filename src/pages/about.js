import React, { PureComponent } from 'react';
import store from '../store'; 
import { subAction, decreAction } from '../store/actionCreators';

export default class About extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().counter
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      });
    });
  }  

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>计数：{this.state.counter}</h2>
        <button onClick={e => this.decrement()}>-1</button>
        <button onClick={e => this.subNumber()}>-5</button>
      </div>
    )
  }

  decrement() {
    store.dispatch(decreAction())
  }

  subNumber() {
    store.dispatch(subAction(5))
  }
}
