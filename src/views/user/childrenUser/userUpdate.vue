<template>
<div class="userUpdate form-horizontal">
  <div class="form-group">
    <label for="update-email" class="col-xs-2 control-label">Email</label>
    <div class="col-xs-10">
      <input type="email" class="form-control" id="update-email" placeholder="请输入邮箱">
    </div>
  </div>
  <div class="form-group">
    <label for="update-password" class="col-xs-2 control-label">密码</label>
    <div class="col-xs-10">
      <input type="password" class="form-control" id="update-password" placeholder="请输入密码">
    </div>
  </div>
  <div class="form-group">
    <label for="update-confirm" class="col-xs-2 control-label">确认密码</label>
    <div class="col-xs-10">
      <input type="password" class="form-control" id="update-confirm" placeholder="请输入确认密码">
    </div>
  </div>
  <div class="form-group">
    <label for="role" class="col-xs-2 control-label">用户身份</label>
    <div class="col-xs-10">
      <select name="" id="role" class="form-control">
        <option value="1">普通用户</option>
        <option value="2">文件管理员</option>
      </select>
    </div>
  </div>
  <div class="form-group">
    <label for="department" class="col-xs-2 control-label">部门</label>
    <div  class="col-xs-10">
      <select name="" id="department" class="form-control">
        <option value="1">技术部</option>
        <option value="2">营销部</option>
        <option value="3">运营部</option>
        <option value="3">宣传部</option>
      </select>
    </div>
  </div>
  <div class="form-group">
    <label for="department" class="col-xs-2 control-label">是否禁用</label>
    <div class="col-xs-10">
      <label for="yes">
        <input type="radio" name="isDisable" id="yes">是
      </label>
      <label for="no">
        <input type="radio" name="isDisable" id="no">否
      </label>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'userUpdate',
}
</script>
<style scoped>
.userUpdate{
  text-align: left;
}
</style>