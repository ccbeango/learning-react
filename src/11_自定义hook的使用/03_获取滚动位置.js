import React, { useEffect, useState } from 'react'
import useScrollPosition from './hooks/scroll-position'

export default function CustomScrollPositionHook() {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //   }
  //   document.addEventListener("scroll", handleScroll);

  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   }
  // }, []);

  const scrollPosition = useScrollPosition();
  console.log(scrollPosition)

  return (
    <div style={{padding: "1000px 0"}}>
      <h2 style={{position: "fixed", top: 0, left: 0}}>CustomScrollPositionHook: {scrollPosition}</h2>
    </div>
  )
}