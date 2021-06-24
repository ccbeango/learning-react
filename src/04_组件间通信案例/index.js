import React, { Component } from 'react';
import TabControl from './TabControl';
import './style.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titles: ['流行', '精选', '新款'],
      currentIndex: 0
    };
  }

  render() {
    const { titles, currentIndex } = this.state;
 
    return (
      <div>
        <TabControl itemClick={this.itemClick.bind(this)} titles={['流行', '精选', '新款']}/>   
        <h2>{titles[currentIndex]}</h2>
      </div>
    )
  }

  itemClick(index) {
    this.setState({
      currentIndex: index
    });
  }
}
