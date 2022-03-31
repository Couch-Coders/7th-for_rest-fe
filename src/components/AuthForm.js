import React from "react";

import { signInGoogle } from "./../lib/fireBaseAuth";

const AuthForm = ({ user, onLogin, onLogout }) => {
  const oAuthLogin = async () => {
    try {
      const token = await signInGoogle();
      onLogin({ token });
    } catch (e) {
      console.log(e);
    }
  };
  const oAuthLogOut = () => {
    onLogout();
  };

  return (
    <div>
      {user ? (
        <div>
          <p> {`hello ${user.name}`}</p>
          <button onClick={oAuthLogOut}> logout</button>
        </div>
      ) : (
        <button onClick={oAuthLogin}>로그인</button>
      )}
    </div>
  );
};

export default AuthForm;
