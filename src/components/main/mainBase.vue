<template>
<div class="main">
  <navigation></navigation>
  <div class="main_container">
    <div class="path_nav">
      <slot name="path_nav"></slot>
    </div>
    <slot name="action_bar"></slot>
    <scroll id="wrapper" ref="wrapper">
      <div class="main_content">
        <slot name="main_sort"></slot>
        <div class="main_data">
          <slot name="data_items"></slot>
        </div>
        <!-- <div class="page">
          <page></page>
      </div>   -->
    </div>
    </scroll>
  </div>
</div>
</template>

<script>
// import '../../assets/js/main/main'
import navigation from '../../views/navigation/navigation'
import page from '../common/page'
import scroll from '../common/bscroll'

export default {
  name: 'Main',
  components: {
    navigation,
    page,
    scroll,

  },
  methods: {
    
  },
}
</script>
<style>
.main {
  background-color: rgb(244, 244, 244);
  height: 100%;
  padding-top: 70px;
  /* min-width: 742px; */
}
.main .navbar {
    border: none;
}


.main_container{
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 742px;
  /* margin-top: 10px; */
  /* overflow: hidden */
}

.main_container .main_content{
  flex: 1;
  /* height: 100%; */
  background-color: #fff;
  /* margin: 0 10px; */
  border: 1px solid rgb(33, 43, 45);
  border-radius: 5px;
  position: relative;
  
  /* overflow: hidden; */
}

.main_container .page{
  margin-left: 40%;
  margin-top: -50px;
  /* transform: translateX(-50%); */
}

</style>