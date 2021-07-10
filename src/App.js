import React, { PureComponent } from 'react'
import { HashRouter, BrowserRouter, Route, Link, NavLink, Switch, withRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router'
import "./app.css"
import Home from './pages/home'
import About from './pages/about'
import Profile from './pages/profile'
import User from './pages/user'
import Login from './pages/login'
import NoMatch from './pages/noMatch'
import Product from './pages/product'
import Detail from './pages/detail'

class App extends PureComponent {
  render() {
    const id = '123';
    return (
      <div>
      {/* <HashRouter> */}
      {/* <BrowserRouter> */}
        {/* <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Link to="/profile">我的</Link> */}
        <NavLink to="/" exact activeClassName="link-active" activeStyle={{ color: 'red' }}>首页</NavLink>
        <NavLink to="/about" activeClassName="link-active" activeStyle={{ color: 'red' }}>关于</NavLink>
        <NavLink to="/profile" activeClassName="link-active" activeStyle={{ color: 'red' }}>我的</NavLink>
        <NavLink to="/user" activeClassName="link-active" activeStyle={{ color: 'red' }}>用户</NavLink>
        <NavLink to={`/detail/${id}`} activeClassName="link-active" activeStyle={{ color: 'red' }}>详情</NavLink>
        <button onClick={e => this.jumpToProduct()}>商品</button>
        <NavLink to="/no" activeClassName="link-active" activeStyle={{ color: 'red' }}>no</NavLink>
        
        {renderRoutes(routes)}
        {/* <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          <Route component={NoMatch}></Route>
        </Switch> */}
      {/* </BrowserRouter> */}
      {/* </HashRouter> */}
      </div>
    )
  }

  jumpToProduct () {
    console.log(this.props.history)
    this.props.history.push('/product')
  }
}

export default withRouter(App)
