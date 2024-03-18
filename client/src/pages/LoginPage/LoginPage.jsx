import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import styles from './LoginPage.module.css'
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../App";
import {
  Button, 
  Form,
  Input,
  Select,
  Space
} from 'antd'
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export const LoginPage = ({ onLogin, selectedRole }) => {
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

  // const handleSubmit = () => {
  //   navigate('/question_base')
  // };
  
  const onFinish = (values) => {
    console.log("Login Data:", values);
    onLogin()

    switch (selectedRole) {
      case ROLES.Student:
        navigate('/test');
        break;
      case ROLES.Teacher:
        navigate('/question_base');
        break;
      case ROLES.Admin:
        navigate('/exam');
        break;
      default:
        navigate('*');
        break;
    }
    console.log(selectedRole);
  };

  const handleLogin = () => {
    console.log("Login Data:", loginData);
    onLogin()

    switch (selectedRole) {
      case ROLES.Student:
        navigate('/test');
        break;
      case ROLES.Teacher:
        navigate('/question_base');
        break;
      case ROLES.Admin:
        navigate('/exam');
        break;
      default:
        navigate('*');
        break;
    }
    console.log(selectedRole);
  }

  return (
    <div className={styles.login_container}>
      <h2>Войти</h2>
      <p>Добро пожаловать!</p>
      <div className="form">
      <Form
        {...formItemLayout}
        variant="filled"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          name="ИИН"
          rules={[
            {
              required: true,
              message: 'Please input your iin!',
            },
          ]}
        >
          <div className="input_group">
            <Input
              id="email_input"
              placeholder=''
              onChange={handleInputChange}
              className={styles.form_input}
              required
              pattern="\d{12}"
            />
            <label
              htmlFor="email_input"
              className={styles.form_input_label}
            >
              Email*
            </label>
          </div>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        > 
          <div className="input_group">
            <Input.Password
              id={styles.password_input}
              placeholder=''
              onChange={handleInputChange}
              className={styles.form_input}
            />
            <label
              style={{zIndex: '10'}}
              htmlFor="password_input"
              className={styles.form_input_label}
            >
              Password*
            </label>
          </div>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
        {/* <div className={styles.input_group}>
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

        <div className={styles.input_group}>
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
        </div> */}
        {/* <button onClick={handleLogin} className={styles.login_button}>
          Войти
        </button> */}
      </div>
    </div>
  );
};