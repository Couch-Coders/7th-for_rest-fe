import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AuthForm from "./../../components/AuthForm";
import { login, logout } from "./../../modules/auth";

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
      <AuthForm user={user} onLogin={onLogin} onLogout={onLogout} />
    </div>
  );
};

export default HeaderContainer;
