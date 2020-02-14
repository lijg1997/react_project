import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { createSaveUserInfoAction } from '../../redux/action_creators/login';
import { reqLogin } from '../../api';
import Logo from './images/logo.png';
import './css/login.less';
const { Item } = Form;

class Login extends Component {
  passwordValidator = (rule, value, callback) => {
    // { required: true, message: '您的密码不能为空！' },
    // { max: 16, message: '密码不能超过16个字符！' },
    // { min: 6, message: '密码不能小于6个字符！' }
    // console.log(callback);
    if (!value) callback('请输入您的密码！');
    else if (value.length > 12) callback('密码长度不能超过12位！');
    else if (value.length < 4) callback('密码长度不能小于4位！');
    // else if (!/^\w+$/.test(value)) callback('密码只能由字母数字下划线组成！');
    else callback();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        // const { username, password } = values;
        // console.log('用户名，密码是', values);
        // myAxios.post('/login', values).then(
        //   response => {
        //     console.log(response);
        //     message.success('登陆成功');
        //   }
        // );
        const result = await reqLogin(values);
        // console.log(result);
        const { status, data, msg } = result;
        if (!status) {
          message.success('登录成功');
          this.props.saveUserInfo(data);
          this.props.history.replace('/admin');
        } else message.warning(msg);
      }
    });
  };

  render() {
    const { isLogin } = this.props.userInfo;
    if (isLogin) return <Redirect to="/admin" />;
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
                登录
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default connect(state => ({ userInfo: state.userInfo }), {
  saveUserInfo: createSaveUserInfoAction
})(Form.create()(Login));
