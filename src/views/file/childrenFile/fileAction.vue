<template>
<div class="fileAction">
  <div class="action">
    <button class="btn btn-default" id="btn-upload"><span class="glyphicon glyphicon-cloud-download"></span>上传</button>
    <button class="btn btn-default" id="btn-download"><span class="glyphicon glyphicon-cloud-upload"></span>下载</button>
    <button class="btn btn-default" id="btn-share"><span class="glyphicon glyphicon-share"></span>分享</button>
    <button class="btn btn-default" id="btn-delete"><span class="glyphicon glyphicon-trash"></span>删除</button>
    <button class="btn btn-default" id="btn-create"><span class="glyphicon glyphicon-plus-sign"></span>新建文件夹</button>
  </div>
</div>
</template>

<script>
export default {
  name: "fileAction"
}
</script>
<style scoped>
.fileAction{
  height: 50px;
  background-color: #fff;
  border: 1px solid rgb(33, 43, 45);
  border-radius: 5px;
  margin-bottom: 10px;
  line-height: 45px;
  padding-left: 20px;
}

.fileAction .btn{
  margin: 0 10px;
}

.btn-default{
  border: none;
  box-sizing: border-box;
}
.btn-default:hover,.btn-default:focus{
  border: 1px solid rgb(33, 43, 45);
  background-color: transparent;
  outline:none;
  outline-offset: 0;
}

.fileAction span{
  margin-right: 5px;
}
</style>