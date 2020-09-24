<template>
<div id="login">
    账号：<input type="text" name="id" v-model="id">
    <br>
    密码：<input type="password" name="psw" v-model="password">
    <br>
    <button @click="clickBtn">登录</button>
    <button @click="test">测试</button>
</div>
</template>

<script>
import {post} from '../../network/base' //引入封装post
 
export default {
  name : 'login',
  data(){
    return {
      id : '729465084@qq.com',  //存储登录用户账号
      password : '123456',      //存储登录用户密码
      data : {}                 //存储登录信息
    }
  },
  computed: {
    getData(){      //存储JSON格式的登录信息
      this.data['id'] = this.id
      this.data['password'] = this.password
      return this.data = JSON.stringify(this.data)  //转换为JSON字符串
    }
  },
  methods: {
    clickBtn(){  //通过按钮触发 向接口提交登录数据
      post('#',this.getData)   //请求方式post  参数为接口url和提交的数据
      .then(res=>{             //请求成功时
        if(res.data.token){         //登录成功时
          sessionStorage.setItem('token',res.data.token)
          this.$router.push('/slide')
        }
        else{                  //登录失败时
          alert("账号或密码错误")
        }
      })
      .catch(err=>{             //请求失败时
        console.log(err);
      })
    },
    test(){
      localStorage.setItem('token','jijibiao')
      console.log(localStorage.getItem('token'));
    }
  },
}
</script>
<style scoped>
</style>