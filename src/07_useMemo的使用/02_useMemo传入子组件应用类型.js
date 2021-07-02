import React, { memo, useState, useMemo } from 'react'

function calcNum(count) {
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += i;
  }
  console.log("计算一遍");
  return total
}

const ShowCounter = memo((props) => {
  console.log("重新渲染");
  return <h1>Counter: {props.total}</h1>
})

const ShowInfo = memo((props) => {
  console.log("ShowInfo重新渲染");
  return <h2>名字：{props.info.name} 年龄：{props.info.age}</h2>
})

export default function MemoHookDemo() {
  const [count, setCount] = useState(10);
  const [isLogin, setIsLogin] = useState(true);

  const total = useMemo(() => {
    return calcNum(count);
  }, [count]);

  // 局部变量 每次点击切换都会渲染 可以使用useState解决
  // const info = { name: 'ccbean', age: 18 };
  // 使用useMemo
  const info = useMemo(() => {
    return { name: 'ccbean', age: 18 };
  }, [])

  return (
    <div>
      <button onClick={e => setIsLogin(!isLogin)}>切换</button>
      <h2>数字和: {total}</h2>
      <ShowCounter total={total} />
      <ShowInfo info={info}/>
      <button onClick={e => setCount(count + 1)}>+1</button>
      {isLogin && <h2>Coderwhy</h2>}
    </div>
  )
}