<template>
<div product-box>
  <div class="product-item" 
  v-for="product in products"
  :key="product._id"
  >
    <img :src="product.SmallPic" alt="">
    <div class="p-content">
      <div class="c1 ellipsis">{{product.CommodityName}}</div>
      <div class="c2">{{product.SubTitle}}</div>
      <div class="price">￥{{product.SellPrice}}</div>
    </div>
    <img class="sc" src="@/assets/home/sc.png" alt="">
  </div>
</div>
  

</template>

<script>

export default {
  data () {
    return {
      products:[]
    }
  },
  created () {
    this.$http.get("api/sk/navs").then(res=>{
      this.products = res.data.data.object_list
    })
  }
}
</script>

<style lang="scss">
  .product-item{
    position:relative;
    display:flex;
    img{
      width:1.2rem;
      height:1.2rem;
    }
    .p-content{
      margin-top:0.25rem;
      .c1{
        width:2rem
      }
      .price{
        margin-top:0.2rem;
        color:rgb(255, 72, 145);
      }
    }
    .sc{
      position:absolute;
      width:0.45rem;
      height:0.45rem;
      right:0.1rem;
      bottom:0;
    }
  }
</style>