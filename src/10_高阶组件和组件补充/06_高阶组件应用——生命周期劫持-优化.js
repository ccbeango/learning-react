import React, { PureComponent } from 'react';

function withRenderTime(WrappedComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.begin = Date.now();
    }

    componentDidMount() {
      this.end = Date.now();
      const interval = this.end - this.begin;
      console.log(`${WrappedComponent.name}渲染使用时间:${interval}`)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>我是home的元素,哈哈哈</p>
      </div>
    )
  }
}

const LogHome = withRenderTime(Home);


class Detail extends PureComponent {
  render() {
    return (
      <div>
        <h2>Detail</h2>
        <p>我是detail的元素,哈哈哈</p>
      </div>
    )
  }
}

const LogDetail = withRenderTime(Detail);


export default class App extends PureComponent {
  render() {
    return (
      <div>
        <LogHome/>
        <LogDetail/>
      </div>
    )
  }
}