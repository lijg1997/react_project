import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './admin.less';
import Logo from './images/logo.png';

const { SubMenu } = Menu;
const { Item } = Menu;

export default class Admin extends Component {
  state = {
    collapsed: false
  };
  render() {
    return (
      <div id="admin">
        <div className="ant-layout-sider-children">
          <div>
            <div className="nav-header">
              <img src={Logo} alt="logo" />
              <h1>商品管理系统</h1>
            </div>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}>
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
          </div>
        </div>
      </div>
    );
  }
}
