import React, { PureComponent } from 'react';
import Home from './home';
import Profile from './profile';
import styled, { ThemeProvider } from 'styled-components';

const HYButton = styled.button`
  padding: 8px 30px;
  border-radius: 5px;
`

const HYWarnButton = styled(HYButton)`
  background-color: red;
  color: #fff;
`

const HYPrimaryButton = styled(HYButton)`
  background-color: green;
  color: #fff;
  // 使用主题
  border-color: ${props => props.theme.themeColor};
`

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{ themeColor: 'blue', fontSize: '30px' }}>
        <Home/>
        <Profile/>
        <HYButton>我是普通按钮</HYButton>
        <HYWarnButton>我是警告按钮</HYWarnButton>
        <HYPrimaryButton>我是主要按钮</HYPrimaryButton>
      </ThemeProvider>
    )
  }
}