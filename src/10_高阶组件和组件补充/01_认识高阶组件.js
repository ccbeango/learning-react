import React, { PureComponent } from 'react';

function higherOrderComponent(WrapperComponent) {
  class NewComponent extends PureComponent {
    render() {
      // this.props扩展接收传递的参数
      return <WrapperComponent {...this.props}/>
    }
  }

  // NewComponent.displayName = 'Ccbeango';
  return NewComponent;
}

class App extends PureComponent {
  render() {
    return (
      <div>
        App
      </div>
    )
  }
}

export default higherOrderComponent(App);