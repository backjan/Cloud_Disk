import axios from 'axios'
//设置全局基本url 以及请求超时
const instance = axios.create({
<<<<<<< HEAD
  baseURL: '/api',
  timeout: 10000
=======
<<<<<<< HEAD
  baseURL: '/api',
  timeout: 10000
=======
  baseURL: 'http://152.136.185.210:8000/api/z8',
  timeout: 5000
>>>>>>> 0408787... xty2.0
>>>>>>> 2cae486... xty2.0
})
//请求拦截器
instance.interceptors.request.use(
  config=>{
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2cae486... xty2.0
    console.log("请求成功");
    return config},
  err=>{
    // console.log(err);
    console.log("请求失败");
  })
//响应拦截器
instance.interceptors.response.use(
  res=>{
    console.log("响应成功");
    return res.data},
  err=>{
    // console.log(err);
    console.log("响应失败");
  }
<<<<<<< HEAD
=======
=======
    console.log(config);
    return config},
  err=>{
    console.log(err);})
//响应拦截器
instance.interceptors.response.use(
  res=>{
    console.log(res.data);
    return res.data},
  err=>{
    console.log(err);}
>>>>>>> 0408787... xty2.0
>>>>>>> 2cae486... xty2.0
)
//get请求 提交数据
export function get(url,params) {
  return instance.get(url,{
    params
  })
  }
//post请求 提交数据
export function post(url,data) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2cae486... xty2.0
  return instance.post(url,data
    ,{
    headers:{
      'Content-Type':'application/json; charset=utf-8'
    }}
    )
<<<<<<< HEAD
=======
=======
  return instance.post(url,data)
>>>>>>> 0408787... xty2.0
>>>>>>> 2cae486... xty2.0
  }
//通过接口参数 拿去接口数据
export function request(config){
  return new Promise((resolve,reject)=>{
    // const instance = axios.create({
    //   baseURL: 'http://152.136.185.210:8000/api/z8',
    //   timeout: 5000
    // })
    // instance.interceptors.request.use(
    //   config=>{
    //     console.log(config);
    //     return config},
    //   err=>{
    //     console.log(err);})
    // instance.interceptors.response.use(
    //   res=>{
    //     console.log(res.data);
    //     return res.data},
    //   err=>{
    //     console.log(err);}
    // )
    instance(config).then(res=>resolve(res)).catch(err=>reject(err))
  })
}


