import { signInGoogle } from '../../lib/fireBaseAuth';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';

export const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const AuthForm = ({ user, onLogin, onLogout }) => {
  const oAuthLogin = async () => {
    try {
      const token = await signInGoogle();
      onLogin({ token });
      defaultHeaders.Authorization = `Bearer ${token}`;
    } catch (e) {}
  };
  const oAuthLogOut = () => {
    onLogout();
    delete defaultHeaders.Authorizations;
  };
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

export default AuthForm;
