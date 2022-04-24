import { client } from './clients';

export const login = ({ token }) =>
  client.get('/members/login', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const logout = () => client.get('/logout');
