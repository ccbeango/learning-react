import React, { PureComponent } from 'react';
import style from './style.module.css';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      color: 'purple'
    };
  }

  render() {
    return (
      <div className="home">
        <h2 className={style.title} style={{ color: this.state.color }} >我是Home标题</h2>
        <span className={style.desc}>我是Home中的span段落</span>
      </div>
    )
  }
}