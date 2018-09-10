import axios from '@/config/axios'

const initpage = () => axios.post('/models/initData'); // 初始化流程部署页面数据

const deployment = params => axios.post('/models/deployment', params); // 流程定义

const createModel = params => axios.post('/models/createModel', params); // 开启流程实例

const findTask = params => axios.post('/models/findTask', params); // 获取我的任务和待办任务

export default {initpage, deployment, createModel, findTask}
