import React, { useState } from 'react'; 
import styles from './RegisterTeacher.module.css'; // Make sure to create a CSS file with this name 
import { useNavigate } from 'react-router-dom';
import { ChooseSubject } from '../../components/atoms/CustomSelect';
import { group, literal, subjectArr } from '../../data/data';
import { registerTeacherPage } from '../../data/page_text';

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
 
export const RegistrationForm = () => { 
  const [info, setInfo] = useState({
    email: '',
    fullname: '',
    password: '',
    
    literal: '',
    group: '',
    subject: '',
  });
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validatePassword2 = (_, value) => {
    if (value !== password) {
      return Promise.reject(new Error('The two passwords do not match!'));
    }
    return Promise.resolve();
  };

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const onFinish = () => {
    console.log(info);
    navigate('/role')
  };
 
  return ( 
    <div className={styles.registration_form}> 
      <h1>{registerTeacherPage.title}</h1>
      <p className={styles.welcome_text}>{registerTeacherPage.miniTitle}</p> 
      <Form
        {...formItemLayout}
        variant="filled"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >       
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <div className="input_group">
            <Input
              id={styles.email_input}
              placeholder=''
              onChange={(e) => setEmail(e.target.value)}
              className={styles.form_input}
            />
            <label
              htmlFor="email_input"
              className={styles.form_input_label}
            >
              Email*
            </label>
          </div>
        </Form.Item>

        {/* <Form.Item
          name="fullname"
          rules={[
            {
              required: true,
              message: 'Please input your full name!',
            },
          ]}
        >
          <div className="input_group">
            <Input
              id={styles.fullname_input}
              placeholder=''
              onChange={handleInputChange}
              className={styles.form_input}
            />
            <label
              htmlFor="fullname_input"
              className={styles.form_input_label}
            >
              ФИО*
            </label>
          </div>
        </Form.Item> */}

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
              onChange={(e) => setPassword(e.target.value)}
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

        <Form.Item
          name="password2"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Please input your password again!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            })
          ]}
        > 
          <div className="input_group">
            <Input.Password
              id={styles.password2_input}
              placeholder=''
              onChange={handleInputChange}
              className={styles.form_input}
            />
            <label
              style={{zIndex: '10'}}
              htmlFor="password2_input"
              className={styles.form_input_label}
            >
              Password again*
            </label>
          </div>
        </Form.Item>

        <div className={styles.class_literal}>
          <Form.Item
            name="class"
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
          >
            <Select 
              style={{width: '200px'}} 
              placeholder='Выберите группу' 
              allowClear
            >
              {group.map(option => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="literal"
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
          >
            <Select 
              style={{width: '200px'}} 
              placeholder='Выберите литерал'
              allowClear
            >
              {literal.map(option => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>
 
        <Form.Item
            name="subject"
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
          >
            <Select 
              style={{width: '200px'}} 
              placeholder='Выберите предмет'
              allowClear
            >
              {subjectArr.map(option => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button className={styles.submit} type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
      </Form>

      <p className={styles.sing_in}>{registerTeacherPage.alreadyRegister} <a href="/login">{registerTeacherPage.logInText}</a></p> 
    </div> 
  ); 
}
