import axios from 'axios';
import qs from 'qs';
 
// 创建axios实例
const instance = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 10000, // 请求超时时间
});
 
// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在请求发送之前可以做一些处理，比如添加请求头等
    return config;
  },
  error => {
    // 请求错误处理
    return Promise.reject(error);
  }
);
 
// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 在这里可以对响应数据进行处理
    return response.data;
  },
  error => {
    // 响应错误处理
    return Promise.reject(error);
  }
);
 
// 封装get请求
export function get(url, params) {
  return instance.get(url, {
    params,
  });
}
 
// 封装post请求
export function post(url, data) {
  return instance.post(url, qs.stringify(data));
}