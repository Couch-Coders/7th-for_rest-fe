import React from "react";
import GoogleLogin from "react-google-login";

const AuthForm = ({ user, onLogin }) => {
  const googleClientId = process.env.REACT_APP_OAUTH_CLIENT_ID || "";
  //사용자 정보를 담아둘 userObj

  //로그인 성공시 res처리
  const onLoginSuccess = (res) => {
    const token = res.accessToken;
    onLogin({ token });
  };

  return (
    <div>
      <GoogleLogin
        clientId={googleClientId}
        buttonText="Google"
        onSuccess={onLoginSuccess}
        onFailure={(result) => console.log(result)}
      />
    </div>
  );
};

export default AuthForm;
