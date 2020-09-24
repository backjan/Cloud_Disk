<template>
<div class="pathNav">
  <ol class="breadcrumb">
  <slot></slot>
</ol>
</div>
</template>

<script>
export default {
  name: 'pathNav',

}
</script>
<style>
.pathNav{
  height: 50px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid rgb(33, 43, 45);
  border-radius: 5px;
}
.pathNav .breadcrumb{
  background-color: #fff;
  line-height: 32px;
}
</style>