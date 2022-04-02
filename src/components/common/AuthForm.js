import React, { useState } from "react";
import { signInGoogle } from "../../lib/fireBaseAuth";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";

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
  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={oAuthLogOut}>
        <a> Logout &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </a>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/myPage">myPage</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      {user ? (
        <Dropdown overlay={menu} trigger={["click"]}>
          <img src={user.img} alt="`user.name`" />
        </Dropdown>
      ) : (
        <Avatar onClick={oAuthLogin} size={40} icon={<UserOutlined />} />
      )}
    </div>
  );
};

export default AuthForm;
