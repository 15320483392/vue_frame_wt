import axios from 'axios'
import qs from 'qs'
import config from '@/config'

// 创建 axios 实例
const {baseURL, timeout} = config;
const ax = axios.create({
  // 是否跨站点访问控制请求使用凭证(Cookie)
  withCredentials: true,
  baseURL: baseURL, // 配置接口地址
  // 修改请求的数据再发送到服务器
  transformRequest: [
    (data, headers) => qs.stringify(data) // 序列化请求的数据
  ],
  timeout: timeout // 配置请求超时
});

// 配置默认请求头
// ax.defaults.headers.post['Content-Type'] = headers.ContentType

// 添加 axios 实例响应拦截器
ax.interceptors.response.use(response => {
  // console.log(response.data) // 控制台输出响应数据
  return response // 响应正确的数据
}, error => {
  const {response} = error;
  if (response) {
    console.log(response) // 响应错误数据
  } else {
    console.log({content: '服务器断开连接, 请检查网络状态!'})
  }
});

/*
  // 配置默认参数
  const ConfigDefaults = AUTH_TOKEN => {
    // 配置用户 AUTH_TOKEN
    ax.defaults.headers.common['Authorization'] = AUTH_TOKEN
  }

  // 刷新重新配置默认参数
  const user = JSON.parse(sessionStorage.getItem('user'))
  if (user) {
    ConfigDefaults(user['auth_token'])
  }
 */

export default ax
