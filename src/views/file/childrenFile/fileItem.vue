<template>
  <div class="col-xs-3 col-md-2 item">
    <div class="thumbnail">
      <input type="checkbox" class="checkbox" @click="checked">
      <a href="#"><span class="glyphicon glyphicon-folder-open"></span><h3>文件1</h3></a>
      <!-- <div class="caption">
        <p>2020-9-15</p>
        <p><a href="#" class="btn btn-primary" role="button">下载</a> <a href="#" class="btn btn-danger" role="button">删除</a></p>
      </div> -->
    </div>
  </div>
</template>

<script>
// import '../../../assets/js/file/item_base'
export default {
  name: 'fileItem',
  data(){
    return {
      flag: 0
    }
  },
  methods: {
    checked(){
      if(this.flag){
        $(this.$el.children[0]).css('background','');
        this.flag = 0;
      }else{
        $(this.$el.children[0]).css('background','#ddd');
        this.flag = 1
      }
    }
  }
}
</script>
<style>
.thumbnail{
  text-align: center;
  padding-top: 15px;
  margin-bottom: 10px;
  border: none;
  position: relative;
}

.thumbnail h3{
  font-size: 18px;
}

.thumbnail:hover,.thumbnail:focus{
  background-color: #ddd;
}

.thumbnail input[type='checkbox']{
  position: absolute;
  top: 10px;
  left: 10px;
  display: none;
}

.thumbnail:hover input[type='checkbox'],.thumbnail:focus input[type='checkbox']{
  display: block;
}

a:focus, a:hover{
  text-decoration: none;
}

.item .thumbnail .caption{
  padding: 0;
}
.thumbnail a:first-of-type h3{
  color: rgb(30, 49, 55);
}
.thumbnail a:first-of-type:hover{
  color: rgb(33, 43, 45);
}

.thumbnail a:first-of-type span{
  font-size: 45px;
  color: rgb(248, 201, 42)
}
</style>