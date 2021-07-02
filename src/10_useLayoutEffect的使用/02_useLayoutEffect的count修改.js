import React, { useState, useLayoutEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(10);
  
  useLayoutEffect(() => {
    if (count === 8) {
      setCount(Math.random());
    }
  });
  
  return (
    <div>
      <h2>数字：{count}</h2>
      <button onClick={e => setCount(8)}>修改</button>
    </div>
  )
}
