import React, { useEffect, useState } from 'react';

function ChildCpn1(params) {
  useLogging('ChildCpn1');
  return (
    <h2>子组件1</h2>
  );
}

function ChildCpn2() {
  useLogging('ChildCpn2');
  return (
    <h2>子组件2</h2>
  );
}

export default function App() {
  const [show, setShow] = useState(true);

  useLogging('App');
  return (
    <div>
      <button onClick={e => setShow(!show)}>切换</button>
      <h2>父组件</h2>
      { show && <ChildCpn1/>}
      { show && <ChildCpn2/>}
    </div>
  )
}

function useLogging(name) {
  useEffect(() => {
    console.log(`${name}组件挂载了`);

    return () => {
      console.log(`${name}组件卸载了`);
    }
  }, []);
}
