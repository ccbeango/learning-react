import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.titleEl = null;
  }

  render() {
    return (
      <div>
        {/* 字符串方式 不推荐 */}
        <h2 ref="titleRef">Hello React StringRef</h2>
        {/* 传入对象方式 推荐方式 */}
        <h2 ref={this.titleRef}>Hello React createRef</h2>
        {/* 函数方式 */}
        <h2 ref={element => this.titleEl = element}>Hello React createRef</h2>

        <button onClick={this.changeText.bind(this)}>改变文本</button>
      </div>
    )
  }

  changeText() {
    this.refs.titleRef.innerHTML = 'Hello Ref';

    this.titleRef.current.innerHTML = 'Hello Ref';

    this.titleEl.innerHTML = 'Hello Ref';
  }
}
