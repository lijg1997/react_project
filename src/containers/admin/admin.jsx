import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

import Header from './herder/header';
import check from '../check/check';
import Logo from './images/logo.png';
import './css/admin.less';

const { Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Item } = Menu;

@check
class Admin extends Component {
  render() {
    return (
      <Layout id="admin">
        <Sider>
          <div className="nav-header">
            <img src={Logo} alt="logo" />
            <h1>商品管理系统</h1>
          </div>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            // inlineCollapsed={this.state.collapsed}
          >
            <Item>
              <Icon type="home" />
              <span>首页</span>
            </Item>
            <SubMenu
              title={
                <span>
                  <Icon type="appstore" />
                  <span>商品</span>
                </span>
              }>
              <Item>
                <Icon type="unordered-list" />
                <span>分类管理</span>
              </Item>
              <Item>
                <Icon type="tool" />
                <span>商品管理</span>
              </Item>
            </SubMenu>
            <Item>
              <Icon type="user" />
              <span>用户管理</span>
            </Item>
            <Item>
              <Icon type="safety-certificate" />
              <span>角色管理</span>
            </Item>
            <SubMenu
              title={
                <span>
                  <Icon type="area-chart" />
                  <span>图形图表</span>
                </span>
              }>
              <Item>
                <Icon type="bar-chart" />
                <span>柱形图</span>
              </Item>
              <Item>
                <Icon type="line-chart" />
                <span>折线图</span>
              </Item>
              <Item>
                <Icon type="pie-chart" />
                <span>饼图</span>
              </Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header />
          <Content>Content</Content>
          <Footer style={{ textAlign: 'center' }}>
            为了您更好的体验效果，请下载谷歌浏览器最新版
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;
