import { Button, Form, Input, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const BACKEND_LOGIN_URL = 'http://localhost:3010/login';

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const history = useHistory();
  const [formError, setFormError] = useState('');

  const handleFinish = (formData: { username: string; password: string }) => {
    setFormError('');

    fetch(BACKEND_LOGIN_URL, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.status === 401) {
          setFormError('invalid credentials');
        }
        if (res.ok) {
          return res.text();
        }
      })
      .then((authToken) => {
        window.localStorage.setItem('authToken', authToken as string);
        history.push('/');
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 200 }}>
      <Form onFinish={handleFinish} style={{ maxWidth: 600 }}>
        <Form.Item label="Username" name="username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
          <Input type="password" />
        </Form.Item>
        <Button htmlType="submit">submit</Button>
        <div>
          <Typography.Text type="danger">{formError}</Typography.Text>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
