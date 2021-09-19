import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import color from '../color';

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2 style={{ color: color.smoothBlack }}>Welcome to Chat n' Chill</h2>
        <button className="login-button google">
          <GoogleOutlined /> Sign In with Google
        </button>
        <br />
        <br />
        <button className="login-button facebook">
          <FacebookOutlined /> Sign In with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
