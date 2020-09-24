<template>
<div class="modal fade" :id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop='false'>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"><slot name="modal-name"></slot></h4>
      </div>
      <div class="modal-body">
        <slot name="modal-body">...</slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal"><slot name="submit">保存</slot></button>
        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    myModal: {
      type: String,
      default: 'myModal'
    }
  }
}
</script>
<style scoped>
</style>