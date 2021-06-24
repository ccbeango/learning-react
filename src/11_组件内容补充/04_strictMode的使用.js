import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    console.log("home constructor");
  }

  UNSAFE_componentWillMount() {

  }

  render() {
    return <h2 ref="home">Home</h2>
  }
}

