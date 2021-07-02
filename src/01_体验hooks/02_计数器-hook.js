import React, { useState } from 'react'

export default function App() {
  const [ counter, setCounter ] = useState(0);

  function increment10() {
    // +40最终只会+10 react会对state进行合并
    // setCounter(counter + 10);
    // setCounter(counter + 10);
    // setCounter(counter + 10);
    // setCounter(counter + 10);

    // 使用函数写法可以实现+40
    setCounter((prevCount) => prevCount + 10);
    setCounter((prevCount) => prevCount + 10);
    setCounter((prevCount) => prevCount + 10);
    setCounter((prevCount) => prevCount + 10);
  }

  return (
    <div>
      <h2>当前计数 {counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <button onClick={increment10}>+10</button>
      <button onClick={e => setCounter(counter - 1)}>-1</button>
    </div>
  )
}
