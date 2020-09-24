<template>
<div class="fileSort clearfix">
<sortItem>
  <span slot="sort_name">按文件名</span>
  <a href="" slot="sort_type1">从高到低</a>
  <a href="" slot="sort_type2">从低到高</a>
</sortItem>
<sortItem>
  <span slot="sort_name">按日期</span>
  <a href="" slot="sort_type1">从高到低</a>
  <a href="" slot="sort_type2">从低到高</a>
</sortItem>
<form action="">
  <input type="text" placeholder="请输入查询信息">
  <input type="submit" value="查询">
</form>
</div>
</template>

<script>
import sortItem from '../../../components/common/sortItem'
export default {
  name: 'sortUser',
  components: {
    sortItem
  }
}
</script>
<style>
.fileSort form{
  position: absolute;
  right: 30px;
  top: 15px;
}

.fileSort form input[type='text']{
  border: 1px solid rgb(33, 43, 45);
  border-radius: 5px;
  height: 30px;
  width: 200px;
}

.fileSort form input[type='submit']{
  border: 1px solid rgb(33, 43, 45);
  border-radius: 5px;
  background-color: rgb(51, 122, 183);
  height: 30px;
  width: 50px;
  margin-left: 10px;
  color: #fff
}
</style>