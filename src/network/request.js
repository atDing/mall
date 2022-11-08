/* import axios from "axios";
import { Toast } from "vant";
import Loading from "../store/index";

// 本接口为测试接口,真实接口请联系coderwhy001
const url = "xxx";

let config = {
  baseURL: url,
  timeout: 10000
};

const _axios = axios.create(config);

// 请求拦截
_axios.interceptors.request.use(
  req => {
    // 当getters里面的isLoading为true再显示请求加载
    if (Loading.getters.isLoading) {
      Toast.loading({
        forbidClick: true,
        message: "加载中..."
      });
    }
    return req;
  },
  err => {
    return Promise.reject(err);
  }
);

// 响应拦截
_axios.interceptors.response.use(
  res => {
    Toast.clear();
    return res.data;
  },
  err => {
    Toast.clear();
    return Promise.reject(err);
  }
);

// 全局注册axios
window.axios = _axios;
 */



import axios from "axios";

export function request(config) {
	const instance = axios.create({
		baseURL:'http://152.136.185.210:7878/api/hy66',
		timeout:5000
	})

	//axios拦截器
	//请求拦截
	instance.interceptors.request.use(config => { 
		return config
	}, err => { 
		console.log(err)
	})

	//响应拦截
	instance.interceptors.response.use(res => { 
		return res.data
	}, err => [
		console.log(err)
	])

	//真正发送
	return instance(config)
}




// import axios from 'axios'

// // ES6 Promise的封装
// export function request(options) {
//   return new Promise((resolve, reject) => {
//     // 1.创建axios的实例对象
//     const instance = axios.create({
//       baseURL: 'http://152.136.185.210:7878/api/hy66',
//       timeout: 5000
//     })

//     // 过滤器(拦截器)
//     instance.interceptors.response.use(res => {
//       return res.data
//     })

//     // 通过实例发送网络请求
//     instance(options)
//         .then(res => {
//           resolve(res)
//         }).catch(err => {
//           reject(err)
//     })
//   })
// }
