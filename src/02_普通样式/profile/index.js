import React, { PureComponent } from 'react';

import './style.css';

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <h2 className="title">我是Profile标题</h2>
        <span className="desc">我是Profile中的span段落</span>
      </div>
    )
  }
}