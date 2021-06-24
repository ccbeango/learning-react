import React, { PureComponent, createContext } from 'react';

const PersonContext = createContext({
  name: 'default',
  age: -1,
  height: -1,
});

/**
 * 利用高阶组件来共享Context
 */

function enhanceComponent(WrapperComponent) {
  return props => {
    return (
      <PersonContext.Consumer>
        {
          user => (
            <WrapperComponent {...props} {...user} />
          )
        }
      </PersonContext.Consumer>
    );
  }
}

class Person extends PureComponent {
  render () {
    return (
      <h2>Home: {this.props.name}-年龄：{this.props.name}-身高{this.props.name}</h2>
    );
  }
}

const EnhancePerson = enhanceComponent(Person);

function Profile(props) {
  return (
    <h2>Home: {props.name}-年龄：{props.name}-身高{props.name}</h2>
  );
}
const EnhanceProfile = enhanceComponent(Profile);

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <PersonContext.Provider value={{ name: 'ccbean', age: 18, height: 183 }}>
          <EnhancePerson />
          <EnhanceProfile />
        </PersonContext.Provider>
      </div>
    )
  }
}

export default App;