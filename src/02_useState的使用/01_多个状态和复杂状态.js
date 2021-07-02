import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);
  const [friends, setFriends] = useState(['tom', 'jack'])

  return (
    <div>
      <h2>当前计数：{count}</h2>
      <h2>我的年龄：{age}</h2>
      <ul>
        {
          friends.map(item => (
            <li>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}
