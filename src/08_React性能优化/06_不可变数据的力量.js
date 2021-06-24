import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      friends: [
        { name: "lilei", age: 20, height: 1.76 },
        { name: "lucy", age: 18, height: 1.65 },
        { name: "tom", age: 30, height: 1.78 }
      ]
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.friends !== nextState.friends) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <div>
        <h2>朋友列表</h2>
        <ul>
          {
            this.state.friends.map((item, index) => {
              return (
                <li key={item.name}>
                  <span>{`姓名:${item.name} 年龄: ${item.age}`}</span>
                  <button onClick={e => this.incrementAge(index)}>年龄+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={e => this.insertFriend()}>添加新数据</button>
      </div>
    )
  }


  insertFriend() {
    // 前后比较无变化，访问的是对象的引用而非对象本身
    // this.state.friends.push({name: "why", age: 18, height: 1.88});
    // this.setState({
    //   friends: this.state.friends
    // })

    this.setState({
      friends: [...this.state.friends, {name: "why", age: 18, height: 1.88}]
    })
  }

  incrementAge(index) {
    // 无变化
    // this.state.friends[index].age += 1;
    // this.setState({
    //   friends: this.state.friends
    // })

    // 正确
    const newFriends = [...this.state.friends];
    newFriends[index].age += 1;
    this.setState({
      friends: newFriends
    })
  }
}
