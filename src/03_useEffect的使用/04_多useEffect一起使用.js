import React, { useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    console.log('修改dom');
  }, [count]);

  useEffect(() => {
    console.log('订阅事件')
  }, []);

  useEffect(() => {
    console.log('网络请求')
  }, [isLogin]);

  return (
    <div>
      <h2>计数：{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <h2>{ isLogin ? 'ccbean' : '请登录' }</h2>
      <button onClick={e => setIsLogin(!isLogin)}>登录/注销</button>
    </div>
  )
}
