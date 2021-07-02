import React, { createContext } from 'react';
// import App01 from './01_认识自定义hook';
// import App02 from './02_Context的获取';
// import App03 from './03_获取滚动位置';
import App04 from './04_localStorage的使用';

export const UserContext = createContext();
export const TokenContext = createContext();

export default function App() {
  return (
    <div>
      {/* <App01/> */}
      {/* <UserContext.Provider value={{ name: 'ccbean', age: 18 }}>
        <TokenContext.Provider value="hfjshfjsktfgdf">
          <App02/>
        </TokenContext.Provider>
      </UserContext.Provider> */}
      {/* <App03/> */}
      <App04/>
    </div>
  )
}
