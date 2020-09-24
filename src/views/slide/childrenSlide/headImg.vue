<template>
  <div class="head_img">
    <div class="img">
      <img src="../../../assets/img/test2.jpg" alt="">
    </div>
    <div class="text">
      <span>头像</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head'
}
</script>
<style>
.head_img{
  height: 200px;
  width: 100%;
  background-color: rgb(33, 43, 45);
}
.head_img .img{
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 50px;
    overflow: hidden;
    border-radius: 50%;
}
.head_img img{
  width: 100%;;
  height: 100%;
}
.head_img .text{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 170px
}

</style>