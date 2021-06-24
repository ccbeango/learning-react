import React, { createRef, forwardRef, PureComponent } from "react";

class Home extends PureComponent {
  render() {
    return <div>Home</div>;
  }
}


const Profile = forwardRef((props, ref) => {
  return <div ref={ref}>Profile</div>
})

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.homeRef = createRef();
    this.profileRef = createRef();
  }

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello React</h2>
        <Home ref={this.homeRef} />
        <Profile ref={this.profileRef}/>
        <button onClick={e => this.printRef()}>打印ref</button>
      </div>
    );
  }

  printRef() {
    console.log(this.titleRef)
    console.log(this.homeRef)
    console.log(this.profileRef)
  }
}
