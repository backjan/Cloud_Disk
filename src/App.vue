<template>
<!--这是git注释         -->
  <div id="app">
    <!-- <Slide></Slide> -->
    <!-- <Main></Main>           -->
    <!-- <navigation></navigation> -->
    <router-view/>
  </div>
</template>

<script>
// import navigation from './components/header/navigation'
// import Slide from './components/slide/slide'
import router from './router/index'
// import Main from './components/main/main'
export default {
  name: 'APP',
  router,
  components: {
    // navigation
    // Slide,
    // Main
  }
}
</script>

<style>
@import url('./assets/css/reset.css');
@import url('./assets/css/base.css');
#app {
    height: 100%;
    width: 100%;
}

.main {
    margin-left: 250px;
}
</style>
