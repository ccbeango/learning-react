import React, { useState, useReducer } from 'react';
import reducer from './reducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 100 });

  return (
    <div>
      <h2>计数：{state.count}</h2>      
      <button onClick={e => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={e => dispatch({ type: 'decrement' })}>-1</button>
    </div>
  )
}
