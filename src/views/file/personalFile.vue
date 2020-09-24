<template>
<mainBase>
  <pathNav slot="path_nav">
    <li><a href="#">Home</a></li>
    <li><a href="#">Library</a></li>
    <li class="active">Data</li>
  </pathNav>
  <fileAction slot="action_bar"></fileAction>
  <fileSort slot="main_sort"></fileSort>
  <div slot="data_items" class="data_item">
    <div class="row">
    <fileItem ></fileItem>
    <fileItem></fileItem>
    <fileItem></fileItem>
    <fileItem></fileItem>
    <fileItem></fileItem>
    <fileItem></fileItem>
    <fileItem></fileItem>
    <fileItem></fileItem>
    </div>
  </div>
</mainBase>
</template>

<script>
import mainBase from '../../components/main/mainBase'
import pathNav from '../../components/common/path'
import fileSort from './childrenFile/fileSort'
import fileItem from './childrenFile/fileItem'
import fileAction from './childrenFile/fileAction'
export default {
  name: 'mainFile',
  components: {
    mainBase,
    fileSort,
    pathNav,
    fileItem,
    fileAction
  }
}
</script>
<style>
.data_item{
  padding: 10px;
}
</style>