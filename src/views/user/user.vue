<template>
<mainBase>
  <pathNav slot="path_nav">
    <li><a href="#">Home</a></li>
    <li><a href="#">Library</a></li>
    <li class="active">Data</li>
  </pathNav>
  <sortUser slot="main_sort"></sortUser>
  <userAction slot="action_bar"></userAction>
  <div slot="data_items" class="data_item">
      <table class="table table-hover table-responsive">
        <thead>
          <td><input type="checkbox">全选</td>
          <td>编号</td>
          <td>姓名</td>
          <td>生日</td>
          <td>创建时间</td>
          <td>所属部门</td>
          <td>操作</td>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox"></td>
            <td>1</td>
            <td>张三</td>
            <td>132</td>
            <td>123</td>
            <td>123</td>
            <td>
              <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#'+myModal">修改</button>
              <modal :myModal='myModal'>
                <span slot="modal-name">修改用户信息</span>
                <userUpdate slot="modal-body"></userUpdate>
                <span slot="submit">修改</span>
              </modal>
              <button type="button" class="btn btn-danger" @click="confirm">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</mainBase>
</template>

<script>

import mainBase from '../../components/main/mainBase'
import pathNav from '../../components/common/path'
import sortUser from './childrenUser/userSort'
import modal from '../../components/common/modal'
import userAction from './childrenUser/userAction'
import userUpdate from './childrenUser/userUpdate'
export default {
  name: 'mainUser',
  data(){
    return {
      myModal: 'user_update'
    }
  },
  methods: {
    confirm(){
      if(confirm('你确定要删除吗')){
        console.log('确定')
      }else{
        console.log('取消')
      }
    }
  },
  components: {
    mainBase,
    sortUser,
    pathNav,
    modal,
    userAction,
    userUpdate
  }
}
</script>
<style>
.data_item{
  padding: 10px;
  text-align: center;
  /* position: absolute; */
}
</style>