import React, { useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(10);
  
  useEffect(() => {
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
