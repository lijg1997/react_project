import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Modal } from 'antd';
import screenfull from 'screenfull';
import dayjs from 'dayjs';

import { createDeleteUserInfoAction } from '../../../redux/action_creators/login';
import { reqWeatherData } from '../../../api';

import './css/header.less';

const { confirm } = Modal;

@connect(state => ({ userInfo: state.userInfo }), { deleteUserInfo: createDeleteUserInfoAction })
class Header extends Component {
  state = {
    isFull: false,
    date: dayjs().format('YYYY年 MM月 DD日 HH:mm:ss'),
    weatherData: {}
  };

  handleDeleteUserInfo = () => {
    confirm({
      title: '您确定要退出登录吗？',
      content: '您退出登录下次需要再次登录！',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        this.props.deleteUserInfo();
      }
    });
  };

  handleFullScreen = () => {
    screenfull.toggle();
  };

  handleGetWeatherData = async () => {
    let weatherData = await reqWeatherData('北京');
    this.setState({ weatherData });
    // console.log(this.state);
  };

  componentDidMount() {
    screenfull.on('change', () => {
      // console.log('Am I fullscreen?', screenfull.isFullscreen ? 'Yes' : 'No');
      const isFull = !this.state.isFull;
      this.setState({ isFull });
      console.log(this.state.isFull);
    });

    this.dateId = setInterval(() => {
      this.setState({ date: dayjs().format('YYYY年 MM月 DD日 HH:mm:ss') });
    }, 1000);

    this.handleGetWeatherData();
  }

  componentWillUnmount() {
    clearInterval(this.dateId);
  }

  render() {
    const { dayPictureUrl, temperature } = this.state.weatherData;
    return (
      <div id="header">
        <div className="header-top">
          <Button size="small" onClick={this.handleFullScreen}>
            <Icon type={this.state.isFull ? 'fullscreen-exit' : 'fullscreen'} />
          </Button>
          <span>欢迎登录：{this.props.userInfo.user.username}</span>
          <Button type="link" onClick={this.handleDeleteUserInfo}>
            退出登录
          </Button>
        </div>
        <div className="header-bottom">
          <div className="bottom-left">
            <span>首页</span>
          </div>
          <div className="bottom-right">
            <span>{this.state.date}</span>

            <img src={dayPictureUrl} alt="weather" />
            <span>温度：{temperature}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
