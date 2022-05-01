import { signInGoogle } from '../../lib/fireBaseAuth';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import { client } from '../../lib/api/clients';
import React, { useCallback, useEffect } from 'react';

export const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: '',
};

const AuthForm = ({ user, onLogin, onLogout }) => {
  const oAuthLogOut = useCallback(() => {
    client.defaults.headers.Authorization = '';
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('loginTime');
    onLogout();
  }, [onLogout]);

  const oAuthLogin = useCallback(async () => {
    try {
      const token = await signInGoogle();
      onLogin({ token });
      client.defaults.headers.Authorization = `Bearer ${token}`;
      localStorage.setItem('token', `Bearer ${token}`);
      setTimeout(() => {
        oAuthLogOut();
      }, 1000 * 60 * 60);
    } catch (e) {}
  }, [onLogin, oAuthLogOut]);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('loginTime', new Date().getTime());
  }, [user]);

  const menu = (
    <Menu style={{ background: 'rgb(216 216 216)', width: '100px' }}>
      <Menu.Item key="0" onClick={oAuthLogOut} style={{ hover: 'pointer' }}>
        Logout
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/myPage">myPage</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      {user ? (
        <Dropdown overlay={menu} trigger={['click']}>
          <img src={user.picture} alt={`${user.name}`} />
        </Dropdown>
      ) : (
        <Avatar onClick={oAuthLogin} size={40} icon={<UserOutlined />} />
      )}
    </div>
  );
};

export default React.memo(AuthForm);
