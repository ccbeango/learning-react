import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import './CssTransitionDemo.css'

export default class CssTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true
    };
  }

  changeShow() {
    this.setState({
      isShow: !this.state.isShow
    });
  }

  render() {
    return (
      <div>
        <button onClick={e => this.changeShow()}>显示隐藏</button>
        <CSSTransition
          in={this.state.isShow}
          classNames="card"
          appear
          timeout={1000}
          unmountOnExit={true}
          onEnter={el => console.log("进入动画前")}
          onEntering={el => console.log("进入动画")}
          onEntered={el => console.log("进入动画后")}
          onExit={el => console.log("退出动画前")}
          onExiting={el => console.log("退出动画")}
          onExited={el => console.log("退出动画后")}
        >
          <h2>Hello React</h2>
        </CSSTransition>
      </div>
    )
  }
}
