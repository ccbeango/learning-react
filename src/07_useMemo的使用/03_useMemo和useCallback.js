import React, { memo, useState, useCallback, useMemo } from 'react'

const HYButton = memo((props) => {
  console.log('HyButton渲染' + props.title)
  return (
    <button onClick={props.increment}>HYButton + 1</button>
  );
});

export default function App() {
  console.log('CallbackHookDemo重新渲染');
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const increment1 = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  // useMemo实现useCallback
  const increment2 = useMemo(() => {
    return () => {
      setCount(count + 1);
    }
  }, [count]);

  return (
    <div>
      <button onClick={e => setShow(!show)}>切换</button>
      <h2>当前计数: {count}</h2>
      <HYButton title='btn1' increment={increment1} />
      <HYButton title='btn2' increment={increment2} />
    </div>
  )
}
