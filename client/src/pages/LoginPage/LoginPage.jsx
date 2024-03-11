import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Space } from "antd";
import './LoginPage.css'
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [loginData, setLoginData] = useState({ iin: "", password: "", showPassword: false });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'iin') {
      if (/^\d*$/.test(value) && value.length <= 12) {
        setLoginData((prevData) => ({ ...prevData, [name]: value }));
      }
    } else if (name === 'password') {
      setLoginData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const togglePasswordVisibility = () => {
    setLoginData((prevData) => ({ ...prevData, showPassword: !prevData.showPassword }));
  };

  const handleSubmit = () => {
    console.log("Login Data:", loginData);
    navigate('/')
  };

  return (
    <div className="login-container">
      <h2>Войти</h2>
      <p>Добро пожаловать!</p>
      <div className="form">
        <div className={`input-group`}>
          <input
            name="iin"
            type="text"
            pattern="\d{12}"
            value={loginData.iin}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="iin">ИИН*</label>
        </div>

        <div className={`input-group`}>
          
          <input
            name="password"
            type={loginData.showPassword ? 'text' : 'password'}
            value={loginData.password}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          />
          <label htmlFor="password">Пароль*</label>

          <Space
            onClick={togglePasswordVisibility}
            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
          >
            {loginData.showPassword ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
          </Space>
        </div>
        <button onClick={handleSubmit} className="login-button">
          Войти
        </button>
      </div>
    </div>
  );
};