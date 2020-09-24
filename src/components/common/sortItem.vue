<template>
<div class="dropdown sort_dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    <slot name="sort_name"></slot>
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li><slot name='sort_type1'></slot></li>
    <li><slot name='sort_type2'></slot></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'sortItem'
}
</script>
<style>
.sort_dropdown{
  float: left;
  margin: 10px;
}
.sort_dropdown .btn{
  border: 1px solid rgb(33, 43, 45);
}
.sort_dropdown .dropdown-menu{
  border: 1px solid rgb(33, 43, 45);
}
</style>