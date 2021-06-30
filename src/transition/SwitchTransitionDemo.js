import React, { PureComponent } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './SwitchTransitionDemo.css'

export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOn: true
    };
  }

  render() {
    return (
      <div>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={this.state.isOn ? 'on' : 'off'}
            classNames="btn"
            timeout={800}
          >
            <button onClick={e => this.setState({ isOn: !this.state.isOn })}>
              { this.state.isOn ? 'on' : 'off' }
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}
