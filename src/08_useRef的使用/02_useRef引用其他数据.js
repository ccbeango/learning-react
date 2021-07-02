import React, { useRef, useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  return (
    <div>
      <h2>useRef中的值：{countRef.current}</h2>
      <h2>count中的值：{count}</h2>
      <button onClick={e => setCount(count + 10)}>+10</button>
    </div>
  )
}
