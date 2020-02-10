<Form className="login-form">
  <Item>
    {getFieldDecorator('username', {
      rules: [{ required: true, message: '请输入您的用户名！' }]
    })(
      <Input
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Username"
      />
    )}
  </Item>
  <Item>
    {getFieldDecorator('password', {
      rules: [{ required: true, message: '请输入您的密码！' }]
    })(
      <Input
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        type="password"
        placeholder="Password"
      />
    )}
  </Item>
  <Item>
    <Button type="primary" htmlType="submit" className="login-form-button">
      Log in
    </Button>
  </Item>
</Form>;
