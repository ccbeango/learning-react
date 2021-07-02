import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);
  const [friends, setFriends] = useState(['tom', 'jack'])
  const [students, setStudents] = useState([
    { id: 1, name: 'ccbean', score: 96 },
    { id: 1, name: 'jack', score: 99 },
    { id: 1, name: 'tom', score: 97 }
  ])

  function addFriend() {
    friends.push('lily');
    setFriends(friends);
  }

  function setStudentAgeWithIndex(index) {
    const newStudents = [...students];
    newStudents[index].score += 1;

    setStudents(newStudents);
  }


  return (
    <div>
      <h2>当前计数：{count}</h2>
      <h2>我的年龄：{age}</h2>
      <h2>好友列表</h2>
      <ul>
        {
          friends.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
      <button onClick={e => setFriends([...friends, 'penny'])}>新增好友</button>
      {/* 错误方法 */}
      <button onClick={addFriend}>新增好友2</button>
      <h2>学生列表</h2>
      {
        students.map((item, index) => (
          <li key={item.id}>
            学生：{item.name}
            分数：{item.score}
            <button onClick={e => setStudentAgeWithIndex(index)}>score + 1</button>
          </li>
        ))
      }
    </div>
  )
}
