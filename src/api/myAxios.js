import axios from 'axios';
import qs from 'querystring';
import { message } from 'antd';
import { BASE_URL } from '../config';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use(config => {
  NProgress.start();
  // console.log(config);
  const { method, data } = config;
  // console.log(data);
  if (method.toLocaleUpperCase() === 'POST' && data instanceof Object) {
    config.data = qs.stringify(data);
  }
  // console.log(config);
  return config;
});

axios.interceptors.response.use(
  response => {
    NProgress.done();
    // console.log(response);
    return response.data;
  },
  err => {
    NProgress.done();
    // console.log(err);
    message.error('登录失败，请联系管理员');
    return new Promise(() => {});
  }
);

export default axios;
