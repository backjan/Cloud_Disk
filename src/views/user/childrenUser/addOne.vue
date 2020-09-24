<template>
<div class="addOne">
  <div class="form-group">
    <label for="add-email" class="control-label">Email</label>
    <div>
      <input type="email" class="form-control" id="add-email" placeholder="请输入邮箱">
    </div>
  </div>
  <div class="form-group">
    <label for="add-password" class="control-label">密码</label>
    <div>
      <input type="password" class="form-control" id="add-password" placeholder="请输入密码">
    </div>
  </div>
  <div class="form-group">
    <label for="add-confirm" class="control-label">确认密码</label>
    <div>
      <input type="password" class="form-control" id="add-confirm" placeholder="请输入确认密码">
    </div>
  </div>
  <div class="form-group">
    <label for="role" class="control-label">用户身份</label>
    <div>
      <select name="" id="role" class="form-control">
        <option value="1">普通用户</option>
        <option value="2">文件管理员</option>
      </select>
    </div>
  </div>
  <div class="form-group">
    <label for="department" class="control-label">部门</label>
    <div>
      <select name="" id="department" class="form-control">
        <option value="1">技术部</option>
        <option value="2">营销部</option>
        <option value="3">运营部</option>
        <option value="3">宣传部</option>
      </select>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'addOne',
}
</script>
<style scoped>
/* select{
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  padding: 5px;
} */
</style>