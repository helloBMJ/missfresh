<template>
  <div id = "head">
      <div class="search">
        <input type="text" value="特仑苏两箱79.8">
        <i class="fa fa-search"></i>
    </div>
  </div>
</template>

<script>

  export default {

  }

</script>
<style lang='scss'>
  #head{
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    z-index: 5;
    width:3.75rem;
    background:url(../../assets/home/icon.png) white no-repeat 0.16rem center;
    background-size: 0.55rem 0.14rem;
  }
  .search{
    margin-top:0.08rem;
    margin-right:0.1rem;
    float:right;
    position: relative;
    i.fa{
      position:absolute;
      width:0.18rem;
      height:0.18rem;
      line-height:0.18rem;
      text-align:center;
      left:0.1rem;
      top:0.06rem;
      color:#c6c6c6
     
    }
    input{
      text-indent:0.35rem;
      background:#F5F5F5;
      height:0.3rem;
      width:1.5rem;
      border:1px solid #fff;
      border-radius: 0.3rem;
      color:#c6c6c6;
    }
  }
</style>
