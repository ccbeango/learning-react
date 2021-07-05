import React, { PureComponent } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addAction, increAction, changeBannersAction, changeRecommendsAction } from '../store/actionCreators';

class Home extends PureComponent {
  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const data = res.data.data;
      this.props.changeBanners(data.banner.list);
      this.props.changeRecommends(data.recommend.list);
    })
  }

  render() {
    return (
      <div>
        <h1>Home3</h1>
        <h2>计数：{this.props.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.addNumber()}>+5</button>
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

  increment() {
    this.props.increAction();
  }

  addNumber() {
    this.props.addAction(5);
  }
}

const mapStateToProp = state => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends
  };
}

const mapDispatchToProp = dispatch => {
  return {
    increAction() {
      dispatch(increAction());
    },
    addAction(num) {
      dispatch(addAction(num))
    },
    changeBanners(banners) {
      dispatch(changeBannersAction(banners));
    },
    changeRecommends(recommends) {
      dispatch(changeRecommendsAction(recommends));
    }
  };
}


export default connect(mapStateToProp, mapDispatchToProp)(Home);