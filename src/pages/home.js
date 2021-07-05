import React, { PureComponent } from 'react';
import store from '../store'; 
import { addAction, increAction } from '../store/actionCreators';

export default class Home extends PureComponent {
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
        <h1>Home</h1>
        <h2>计数：{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.addNumber()}>+5</button>
      </div>
    )
  }

  increment() {
    store.dispatch(increAction())
  }

  addNumber() {
    store.dispatch(addAction(5))
  }
}
