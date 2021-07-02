import React, { useContext } from 'react'
import { UserContext, TokenContext } from './index'
import useUserToken from './hooks/user-hook'; 

export default function CustomHookContextDemo() {
  const user = useContext(UserContext);
  const token = useContext(TokenContext);

  console.log(user, token);

  const a = useUserToken();
  console.log(a);

  return (
    <div>
      <h2>CustomHookContextDemo</h2>
    </div>
  )
}