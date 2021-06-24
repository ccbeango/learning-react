import React, { Component } from 'react';

const UserContext = React.createContext({
  nickname: 'aaa',
  level: -1
});

class ProfileHeader extends Component {
  static contextType = UserContext

  render() {
    return (
      <div>
        <h2>昵称：{this.context.nickname}</h2>
        <h2>等级：{this.context.level}</h2>
      </div>
    )
  }
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: 'ccbean',
      level: 99
    };
  }

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
        {/* <Profile /> */}
      </div>
    )
  }
}
