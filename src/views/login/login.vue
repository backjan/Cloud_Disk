<template>
<div id="login">
    账号：<input type="text" name="email" v-model="email">
    <br>
    密码：<input type="password" name="password" v-model="password">
    <br>
    <button @click="loginBtn">登录</button>
    <br>
    <router-link to="/rbPsw">找回密码</router-link>
    
    <button @click="test">测试</button>
</div>
</template>

<script>
import {post} from '../../network/base' //引入封装post

export default {
  name : 'login',
  data(){
    return {
      email : '',  //存储登录用户账号
      password : '',      //存储登录用户密码
      data : {}                 //存储登录信息
    }
  },
  computed: {
    getData(){      //存储JSON格式的登录信息
      this.data['email'] = this.email
      this.data['password'] = this.password
      return this.data = JSON.stringify(this.data)  //转换为JSON字符串
    }
  },
  methods: {

    loginBtn(){  //通过按钮触发 向接口提交登录数据
      post('/account/login',this.getData)   //请求方式post  参数为接口url和提交的数据
      .then(res=>{             //请求成功时
        console.log(res);
        if(res.data){         //登录成功时
          localStorage.setItem('userInfo',JSON.stringify(res.data))
          console.log(JSON.parse(localStorage.getItem('userInfo')));

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
      // console.log(this.getData);

      console.log(JSON.parse(localStorage.getItem('userInfo')).email);
    }
  },
}
</script>
<style scoped>
</style>