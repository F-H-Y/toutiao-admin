// 基于axios的请求模块
import axios from 'axios'

// 创建一个axios实例，赋值一个axios
// 我们通过这个实例去发送请求，把需要的配置给这个实例

const request = axios.create({
    baseUrl:''
})

// 到处请求方法
export default request
// 谁使用谁导入request

axios({
    method:'',
    url:'/'
})