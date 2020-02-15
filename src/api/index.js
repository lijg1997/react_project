import jsonp from 'jsonp';
import { message } from 'antd';

import myAxios from './myAxios';
import { WEATHER_BASE_URL, WEATHER_AK } from '../config';
//请求登录的axios方法
export const reqLogin = ({ username, password }) => myAxios.post('/login', { username, password });
//请求天气信息的jsonp方法
export const reqWeatherData = (city = '大同') => {
  const url = `${WEATHER_BASE_URL}?location=${city}&output=json&${WEATHER_AK}`;
  return new Promise((resolve, reject) => {
    jsonp(url, (err, data) => {
      if (!err) {
        // console.log(data.results[0].weather_data[0]);
        const { dayPictureUrl, temperature } = data.results[0].weather_data[0];
        resolve({ dayPictureUrl, temperature });
      } else message.error('获取天气信息失败，请联系关系源');
    });
  });
};
