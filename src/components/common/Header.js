import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import AuthForm from "./AuthForm";
import Responsive from "./Responsive";

const HeaderBackground = styled.div`
  display: flex;
  height: 3vh;
  background: #001529;
`;

const HeaderWrapper = styled(Responsive)`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
`;

const HeaderBlock = styled.div`
  width: 1440px;
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

const Header = ({ user, onLogin, onLogout }) => {
  return (
    <>
      <HeaderBackground />
      <HeaderWrapper>
        <HeaderBlock>
          <Link to="/" className="logo">
            For-Rest
          </Link>
          <div className="user">
            <AuthForm user={user} onLogin={onLogin} onLogout={onLogout} />
          </div>
        </HeaderBlock>
      </HeaderWrapper>
    </>
  );
};

export default Header;
