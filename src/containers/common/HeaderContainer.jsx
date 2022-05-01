import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/common/auth';
import { login } from './../../modules/common/auth';
import { Outlet } from 'react-router-dom';

const HeaderContainer = () => {
  const { user } = useSelector(({ auth }) => ({ user: auth.user }));
  const dispatch = useDispatch();

  const onLogin = useCallback(
    ({ token }) => {
      dispatch(login({ token }));
    },
    [dispatch],
  );

  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <>
      <Header user={user} onLogin={onLogin} onLogout={onLogout}></Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HeaderContainer;
