import React, { useRef, useState } from 'react';

class TestCpn extends React.Component {
  render() {
    return (
      <h2>TestCpn</h2>
    );
  }
}

function TestCpn2() {
  return (
    <h2>TestCpn2</h2>
  );
}

export default function App() {
  const [show, setShow] = useState(true);
  const titleRef = useRef();
  const inputRef = useRef();
  const testCpnRef = useRef();
  const testCpnRef2 = useRef(); // 报错

  function changeDOM() {
    titleRef.current.innerHTML = 'Hello React';
    inputRef.current.focus();
    console.log(testCpnRef);
  }

  return (
    <div>
      <button onClick={e => setShow(!show)}>切换</button>
      <h2 ref={titleRef}>Hello World</h2>
      <input ref={inputRef} type="text" />
      <TestCpn ref={testCpnRef}/>
      <TestCpn2 ref={testCpnRef2}/>
      <button onClick={changeDOM}>修改DOM</button>
    </div>
  )
}
