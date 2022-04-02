import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";
import AuthForm from "./AuthForm";

const HeaderBackground = styled.div`
  display: flex;
  height: 3vh;
  background: #001529;
`;

const HeaderBlock = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
`;

const AuthBlock = styled.div`
  width: 60vw;
  border-bottom: 5px solid #afadad;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-style: italic;
    font-weight: 600;
    font-size: 2rem;
    color: #2e2e3b;
  }
  .user {
    img {
      width: 2.5rem;
      height: 2.5rem;
      object-fit: cover;
    }
  }
`;

/**Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성 */

/** 헤더가 fixed로 설정되어 있기 때문에 페이지의 콘텐츠가 4rem아래에 나타나도록
 * 해주는 컴포넌트
 */

const Spacer = styled.div`
  height: 4rem;
`;

const Header = ({ user, onLogin, onLogout }) => {
  return (
    <>
      <HeaderBackground />
      <HeaderBlock>
        <AuthBlock>
          <Link to="/" className="logo">
            For-Rest
          </Link>
          <div className="user">
            <AuthForm user={user} onLogin={onLogin} onLogout={onLogout} />
          </div>
        </AuthBlock>
      </HeaderBlock>
    </>
  );
};

export default Header;
