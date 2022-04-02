import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./../../modules/auth";

import Header from "./../../components/common/Header";

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
        localStorage.setItem("user", JSON.stringify(user));
      } catch (error) {
        console.log("localStorage is not working");
      }
    }
  }, [user]);

  return (
    <div>
      <Header user={user} onLogin={onLogin} onLogout={onLogout}></Header>
    </div>
  );
};

export default HeaderContainer;
