import React, { PureComponent } from 'react'
import { HashRouter, BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';

export function AboutMsg () {
  return (
    <div>About</div>
  )
}

export function CultureMsg () {
  return (
    <div>Culture</div>
  )
}

export function ContactMsg () {
  return (
    <div>Contact</div>
  )
}

export function JoinMsg () {
  return (
    <div>JoinUs</div>
  )
}

export default class Index extends PureComponent {
  render() {
    return (
      <div>
        <NavLink to="/about" exact activeClassName="about-active">关于我们</NavLink>
        <NavLink to="/about/culture" exact activeClassName="about-active">企业文化</NavLink>
        <NavLink to="/about/contact" exact activeClassName="about-active">联系我们</NavLink>
        <button onClick={e => this.joinUs()}>加入我们</button>

        {renderRoutes(this.props.route.routes)}
        {/* <Switch>
          <Route exact path="/about" component={AboutMsg}></Route>
          <Route path="/about/culture" component={CultureMsg}></Route>
          <Route path="/about/contact" component={ContactMsg}></Route>
          <Route path="/about/join" component={JoinMsg}></Route>
        </Switch> */}
      </div>
    )
  }

  joinUs () {
    console.log(this.props.history)
    console.log(this.props.location)
    console.log(this.props.match)

    this.props.history.push('/about/join')
  }
}
