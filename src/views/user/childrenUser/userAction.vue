<template>
<div class="userAction">
  <div class="action">
    <a class="btn btn-default" id="btn-upload" data-toggle='modal' :data-target="'#'+addOne"><span class="iconfont icontianjiayonghu" ></span>单个增加</a>
    <a class="btn btn-default" id="btn-download" data-toggle='modal' :data-target="'#'+addMore"><span class="iconfont iconpiliangdaoru"></span>批量导入</a>
  </div>
  <modal :myModal='addOne'>
    <span slot="modal-name">单个添加</span>
    <addOne slot="modal-body"></addOne>
    <span slot="submit">添加</span>
  </modal>
  <modal :myModal='addMore'>
    <span slot="modal-name">批量</span>
    <addMore slot="modal-body"></addMore>
    <span slot="submit">上传</span>
  </modal>
</div>
</template>

<script>
import modal from '../../../components/common/modal'
import addOne from '../childrenUser/addOne'
import addMore from '../childrenUser/addMore'
export default {
  name: "userAction",
  data(){
    return {
      addOne: 'addOne',
      addMore: 'addMore'
    }
  },
  components: {
    modal,
    addOne,
    addMore
  }
}
</script>
<style scoped>
.userAction{
  height: 50px;
  background-color: #fff;
  border: 1px solid rgb(33, 43, 45);
  border-radius: 5px;
  margin-bottom: 10px;
  line-height: 45px;
  padding-left: 20px;
}

.userAction .btn{
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

.userAction span{
  margin-right: 5px;
}
</style>