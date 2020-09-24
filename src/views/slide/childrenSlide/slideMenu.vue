<template>
<div class="slide_menu">
  <ul class="nav nav-pills nav-stacked">
  <li role="presentation"><router-link to="/slide/user" tag="a"><span class="iconfont iconyonghuguanli">&nbsp;用户管理</span></router-link></li>
  <li role="presentation"><a data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  <span class="iconfont iconwenjianguanli">&nbsp;文件管理</span>
</a>
    <ul class="collapse nav nav-pills nav-stacked" id="collapseExample">
      <li><router-link to="/slide/personal" tag="a"><span>个人文件</span></router-link></li>
      <li><a href="#"><span>群组文件</span></a></li>
    </ul>
  </li>
  <li role="presentation"><a href="#"><span class="iconfont iconzuzhiqunzu">&nbsp;群组管理</span></a></li>
  <li role="presentation"><a href="#"><span class="iconfont iconhuishouzhan">&nbsp;回收站</span></a></li>
</ul>
</div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>
<style>
.slide_menu{
  /* flex: 1; */
  /* padding-top: 200px; */
  /* height: 100%; */
  margin-top: 30px;
  /* text-align: center; */
}

.slide_menu a{
  color: #fff;
}
.slide_menu a span{
  padding-left: 50px;
}

.slide_menu #collapseExample>li>a span{
  padding-left: 70px;
}
.slide_menu .nav>li>a:focus,.slide_menu .nav>li>a:hover{
  background-color: rgb(33, 43, 45);
  color: #fff;
}
</style>