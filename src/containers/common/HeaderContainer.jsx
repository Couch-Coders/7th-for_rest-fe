import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/common/auth';
import { login } from './../../modules/common/auth';

const HeaderContainer = () => {
  const { user } = useSelector(({ auth }) => ({ user: auth.user }));
  const dispatch = useDispatch();
  const onLogin = ({ token }) => {
    dispatch(login({ token }));
  };
  const onLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (error) {
        console.log('localStorage is not working');
      }
    }
  }, [user]);

  return (
    <>
      <Header user={user} onLogin={onLogin} onLogout={onLogout}></Header>
    </>
  );
};

export default HeaderContainer;
