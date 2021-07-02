import React, { useState, useEffect } from 'react'
import useLocalStorange from './hooks/local-storage'

export default function CustomDataStoreHook() {
  // const [name, setName] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem("name"))
  // });

  // useEffect(() => {
  //   window.localStorage.setItem("name", JSON.stringify(name));
  // }, [name])

  const [name, setName] = useLocalStorange('name')

  return (
    <div>
      <h2>CustomDataStoreHook: {name}</h2>
      <button onClick={e => setName("ccbean")}>设置name</button>
    </div>
  )
}
