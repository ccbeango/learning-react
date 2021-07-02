import { useContext } from 'react';
import { UserContext, TokenContext } from '../'

export default function useUserToken() {
  const user = useContext(UserContext);
  const token = useContext(TokenContext);

  return [user, token];
}