import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const handleFinish = (event: { username: string; password: string }) => {
    console.log(event);
  };
  return (
    <Form onFinish={handleFinish}>
      <Form.Item name="username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true }]}>
        <Input type="password" />
      </Form.Item>
      <Button htmlType="submit">submit</Button>
    </Form>
  );
};

export default LoginPage;
