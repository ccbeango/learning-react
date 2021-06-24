import React, { Component } from 'react';

function ProfileHeader(props) {
  return (
    <div>
      <h2>昵称：{props.nickname}</h2>
      <h2>等级：{props.level}</h2>
    </div>
  );
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader nickname={props.nickname} level={props.level} />
      {/* <ProfileHeader {...props} /> */}
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
  render() {
    return (
      <div>
        <Profile nickname={'ccbean'} level={99} />
      </div>
    )
  }
}
