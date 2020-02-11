import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

import Logo from './images/logo.png';
import './login.less';
const { Item } = Form;

class Login extends Component {
  // { required: true, message: '您的密码不能为空！' },
  // { max: 16, message: '密码不能超过16个字符！' },
  // { min: 6, message: '密码不能小于6个字符！' }
  passwordValidator = (rule, value, callback) => {
    console.log(rule, value, callback);
    if (!value) callback('请输入您的密码！');
    else if (value.length > 16) callback('密码长度不能超过16位！');
    else if (value.length < 6) callback('密码长度不能小于6位！');
    // else if (!/^\w+$/.test(value)) callback('密码只能由字母数字下划线组成！');
    else callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="login">
        <div className="header">
          <img src={Logo} alt="商品管理" />
          <h1>商品管理系统</h1>
        </div>
        <div className="content">
          <h2>用户登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: '您的用户名不能为空！' },
                  { max: 12, message: '用户名不能超过12个字符！' },
                  { min: 4, message: '用户名不能小于4个字符！' },
                  { pattern: /^\w+$/, message: '用户名只能由字母数字下划线组成！' }
                ]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="请输入您的用户名"
                />
              )}
            </Item>
            <Item>
              {getFieldDecorator('password', {
                rules: [{ validator: this.passwordValidator }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="请输入您的密码"
                />
              )}
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default Form.create()(Login);
