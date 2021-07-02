import React, { memo, useState, useCallback, useMemo } from 'react'

const calcTotal = (count) => {
  console.log('计算总数')
  return (1 + count) * count / 2; 
}

export default function CallbackHookDemo() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // 点击切换也会计算
  // const total = calcTotal(count);
  // 只在必要时更新
  const total = useMemo(() => {
    return calcTotal(count); 
  }, [count]);


  return (
    <div>
      <button onClick={e => setShow(!show)}>切换</button>
      <h2>总计: {total}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
}