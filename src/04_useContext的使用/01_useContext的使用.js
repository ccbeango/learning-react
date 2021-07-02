import React, { useContext } from 'react'
import { UserContext, ThemeContext } from './index';

export default function App() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2>user: {JSON.stringify(user)}</h2>
      <h2>theme: {JSON.stringify(theme)}</h2>
    </div>
  );
}
