import React, { PureComponent } from 'react';
import { subAction, decreAction, getHomeMultidataAction } from '../store/actionCreators';
import { connect } from 'react-redux';

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultidataAction();
  }

  render() {
    return (
      <div>
        <h1>Home4</h1>
        <h2>计数：{this.props.counter}</h2>
        <button onClick={e => this.decrement()}>-1</button>
        <button onClick={e => this.subNumber()}>-5</button>
        <h1>Banners</h1>
        <ul>
          {
            this.props.banners.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
        <h1>Recommends</h1>
        <ul>
          {
            this.props.recommends.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
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
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends
  }),
  dispatch => ({
    decreAction() {
      dispatch(decreAction());
    },
    subAction(num) {
      dispatch(subAction(num));
    },
    getHomeMultidataAction() {
      dispatch(getHomeMultidataAction());
    }
  })
)(Home);
