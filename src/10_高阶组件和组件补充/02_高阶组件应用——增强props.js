import React, { PureComponent } from 'react';

function enhanceComponent(WrapperComponent, otherProps) {
  class NewComponent extends PureComponent {
    render() {
      return <WrapperComponent {...this.props} {...otherProps} />
    }
  }

  // NewComponent.displayName = 'Ccbeango';
  return NewComponent;
}

class Person extends PureComponent {
  render () {
    return (
      <h2>Home: {this.props.name}-年龄：{this.props.age}-身高{this.props.height}</h2>
    );
  }
}

const EnhancePerson = enhanceComponent(Person, { height: '1.83' });
const EnhancePerson2 = enhanceComponent(Person, { height: '1.77' });

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhancePerson name="ccbean" age="18" />
        <EnhancePerson2 name="tom" age="20" />
      </div>
    )
  }
}

export default App;