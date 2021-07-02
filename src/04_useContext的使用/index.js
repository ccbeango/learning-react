import React, { createContext } from 'react';
import App01 from './01_useContext的使用';

export const UserContext = createContext();
export const ThemeContext = createContext();

export default function App() {
  return (
    <ThemeContext.Provider value={{ color: 'red' }}>
      <UserContext.Provider value={{ name: 'ccbean' }}>
        <App01/>
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}
