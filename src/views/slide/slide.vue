<template>
<div>
  <div class="slide">
    <Head></Head>
    <Menu></Menu>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
import Head from './childrenSlide/headImg'
import Menu from './childrenSlide/slideMenu'
export default {
  name: 'Slide',
  components: {
    Head,
    Menu
  },
  computed: {
  }
}
</script>
<style>
.slide {
    background-color: rgb(30, 49, 55);
    width: 250px;
    position: fixed;
    top: 0;
    bottom: 0;
    color: #fff;
    /* display: flex;
    flex-direction: column; */
    height: 100%;
}
</style>