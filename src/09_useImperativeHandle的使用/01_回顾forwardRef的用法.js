import React, { forwardRef, useRef } from 'react';

const HYInput = forwardRef((props, ref) => {
  return (
    <input ref={ref} type="text"/>
  );
})

export default function App() {
  const inputRef = useRef();

  return (
    <div>
      <HYInput ref={inputRef}/>
      <button onClick={e => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
