<template>
<div class="changePw">
  <div class="form-group">
    <label for="old-pw" class="col-sm-2 control-label">新密码</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="old-pw" placeholder="请输入旧密码">
    </div>
  </div>
  <div class="form-group">
    <label for="new-pw" class="col-sm-2 control-label">旧密码</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="new-pw" placeholder="请输入新密码">
    </div>
  </div>
  <div class="form-group">
    <label for="confirm-pw" class="col-sm-2 control-label">确认密码</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="confirm-pw" placeholder="请输入确认密码">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'changePw'
}
</script>
<style scoped>
</style>