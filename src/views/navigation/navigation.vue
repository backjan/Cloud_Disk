<template>
<nav class="navbar navbar-default" id="my_nav">
  <span class="title">企业云盘</span>
  <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
  <span class="sr-only">Toggle navigation</span>
  <span class="icon-bar"></span>
  <span class="icon-bar"></span>
  <span class="icon-bar"></span>
</button>
    </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#" data-toggle="modal" :data-target="'#'+myModel">
                  <span class="glyphicon glyphicon-bell"></span>
                  信息中心<span class="badge">4</span></a>
                  <modal :myModal='myModel'>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                    <span slot="modal-name">信息中心</span>
>>>>>>> 0408787... xty2.0
>>>>>>> 2cae486... xty2.0
                    <message slot="modal-body"></message>
                  </modal>
                  </li>
                <li><router-link to="/slide/account" tag="a"><span class="glyphicon glyphicon-user"></span>个人中心</router-link></li>
                <li><a href="#"><span class="glyphicon glyphicon-log-out"></span>退出</a></li>
                <!-- <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">更多<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">注册</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">退出</a></li>
                    </ul>
                </li> -->
            </ul>
        </div>
        <!-- /.navbar-collapse -->

    <!-- /.container-fluid -->
</nav>
</template>

<script>
import modal from '../../components/common/modal'
import message from './childrenNav/message'
export default {
  name: 'navigation',
  data(){
    return {
      myModel: 'message'
    }
  },
  components: {
    modal,
    message
  }
}
</script>
<style>
#my_nav {
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  left: 250px;
  background: #fff;
  color:rgb(33, 43, 45);
  /* height: 60px; */
  margin-bottom: 0px;
  line-height: 60px;
  border-radius: 5px;
  border-bottom: 1px solid rgb(33, 43, 45);
}

#my_nav .title {
    float: left;
    font-size: 30px;
    font-weight: bolder;
    margin-left: 15px;
    font-family: '华文彩云';
}


#my_nav .navbar-nav>li {
    height: 60px;
}

#my_nav .navbar-nav>li>a {
    font-size: 15px;
    color: rgb(33, 43, 45);
    line-height: 30px;
}

#my_nav .navbar-nav>li>a:hover {
    background-color: rgb(212, 212, 212);
    color: rgb(33, 43, 45);
}

#my_nav .navbar-right .open>a {
    background-color: rgb(212, 212, 212);
    color: rgb(33, 43, 45);
}
.nav .badge{
  margin-top: -20px;
  background-color: rgb(201, 22, 35)
}
</style>