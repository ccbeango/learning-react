import React, { PureComponent } from 'react'
import CssTransitionDemo from './transition/CssTransitionDemo';
import SwitchTransitionDemo from './transition/SwitchTransitionDemo';
import TransitionGroupDemo from './transition/TransitionGroupDemo';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <CssTransitionDemo/>
        <SwitchTransitionDemo/>
        <TransitionGroupDemo/>
      </div>
    )
  }
}
