<template>
  <div id="loginRebackPsw">
   新密码：<input type="password" name="password" v-model="password">
   <br>
   确认密码：<input type="password" name="newpassword" v-model="newPassword">
   <br>
   邮箱<input type="text" name="email" v-model="email">
   <br>
   <input type="text" name="vCode" v-model="vCode"><button @click="vCodeBtn">发送验证码</button>
   <div>{{message}}</div>
   <br>
   <button @click="sureBtn">确定</button>   <button @click="cancelBtn">取消</button>
  </div>
</template>

<script>
import {post} from '../../network/base'

export default {
  name: 'loginRebackPsw',
  data() {
    return {
      password: '',      //新密码
      newPassword: '',   //确认新密码
      email: '',         //邮箱
      vCode: '',         //验证码
      message: '',       //发送验证码成功后得到的回馈信息
    }
  },
  methods:{
    vCodeBtn(){
      let sendEmail = {}     //用于保存发送JSON格式的数据
      sendEmail['email'] = this.email
      sendEmail = JSON.stringify(sendEmail)
      post('/account/sendEmail',sendEmail)
      .then(res => {
        if(res.code == 0)   //发送成功时
        {
          this.message = res.data  //显示成功回馈信息
        }else{              //邮箱不存在
          alert("该邮箱不存在，请重新输入正确邮箱")
        }
      })
      .catch(err => {        //请求失败
        console.log(err);
      })
    },
    sureBtn(){
      if( this.password != null && this.newPassword != null && this.email != null && this.vCode != null){  //确认表单信息都有填写
        if(this.password !== this.newPassword ){      //排除密码不一致情况
          alert('请确认密码一致')
        }else{
          let sendInfo = {}  //用于保存发送JSON格式的数据
          sendInfo['vCode'] = this.vCode
          sendInfo['newPassword'] = this.newPassword
          sendInfo['email'] = this.email
          sendInfo = JSON.stringify(sendInfo)
          console.log(sendInfo);
          post('/account/resetPassword',sendInfo)
          .then(res => {
            if(res.code == 0){ //发送成功时
              alert(res.data)  //返回修改成功反馈信息
              this.$router.push('/login')  //修改成功后页面跳转到登录页面
            }else{
              alert(res.msg)   //修改失败反馈信息
            }
          })
        }
      }else{         //表单信息填写不完整
        alert('请把表格填写完整')  
      }
    },
    cancelBtn(){     //取消修改密码
      this.$router.go(-1) 
    }
  }
}

</script>
<style scoped>
</style>