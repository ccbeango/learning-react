import React, { PureComponent } from 'react';
import style from './style.module.css';

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <h2 className={style.title}>我是Profile标题</h2>
        <span className={style.desc}>我是Profile中的span段落</span>
      </div>
    )
  }
}