import React, { PureComponent } from 'react';
import styled from 'styled-components';

/**
 * 特点
 *  1.props穿透
 *  2.attrs的使用
 *  3.传入state作为props属性
 */

const MyInput = styled.input.attrs({
  placeholder: '请输入密码',
  bColor: 'green'
})`
  background-color: lightblue;
  border-color: ${props => props.bColor};
  color: ${props => props.color};
`;

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      color: 'red'
    };
  }

  render() {
    return (
      <div className="home">
        <MyInput type="password" color={this.state.color} />
        <h2>我是Profile标题</h2>
        <span>我是Profile中的span段落</span>
      </div>
    )
  }
}