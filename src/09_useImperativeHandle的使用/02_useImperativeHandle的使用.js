import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const HYInput = forwardRef((props, ref) => {
  // 子组件的ref
  const inputRef = useRef();
  // 只对外暴露需要的focus方法
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    printHello: () => {
      console.log('hello world')
    }
  }), [ inputRef.current ]);

  return (
    <input ref={inputRef} type="text"/>
  );
})

export default function App() {
  const inputRef = useRef();

  return (
    <div>
      <HYInput ref={inputRef}/>
      <button onClick={e => inputRef.current.focus()}>聚焦</button>
      <button onClick={e => inputRef.current.printHello()}>Hello World</button>
    </div>
  )
}
