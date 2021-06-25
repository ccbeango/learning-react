import React, { PureComponent } from 'react';
import { HomeWrapper, TitleWrapper } from './style'

export default class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      color: 'purple'
    };
  }

  render() {
    return (
      <HomeWrapper className="home">
        <TitleWrapper>我是Home标题</TitleWrapper>
        <ul className="banner">
          <li>我是Home中的span段落2</li>
          <li className="active">我是Home中的span段落3</li>
          <li>我是Home中的span段落4</li>
        </ul>
      </HomeWrapper>
    )
  }
}