<template>
  <div id="loginEdRebackPsw">
    旧密码：<input type="password" name="oldPassword" v-model="oldPassword">
    <br>
    新密码：<input type="password" name="newPassword" v-model="newPassword">
    <br>
    确定新密码：<input type="password" name="sureNewPassword" v-model="sureNewPassword">
    <br>
    <button @click="sureBtn">确定</button>
    <button @click="cancelBtn">取消</button>
  </div>
</template>

<script>
import { post } from '../../network/base'
export default {
  name: 'loginEdRebackPsw',
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      sureNewPassword: ''
    }
  },
  methods: {
    sureBtn(){
      if(this.oldPassword!=null && this.newPassword!=null &&this.sureNewPassword!=null){
        if(this.newPassword !== this.sureNewPassword){
          alert("修改密码不一致")
        }else{
          let submitInfo = {}
          submitInfo['oldPassword'] = this.oldPassword
          submitInfo['newPassword'] = this.newPassword
          submitInfo['email'] = JSON.parse(localStorage.getItem('userInfo')).email
          submitInfo = JSON.stringify(submitInfo)
          post('/account/loginResetPassword',submitInfo)
          .then(res => {
            if(res.code == 0){
              alert(res.data)
              this.$router.go(-1)
            }else{
              alert(res.msg)
            }
          })
          .catch(err => {
            console.log(err);
          })
        }
      }else{
        alert('请将表单信息填写完整')
      }
    },
    cancelBtn(){}
  }
}

</script>
<style scoped>
</style>