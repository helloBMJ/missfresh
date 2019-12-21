<template>
  

    <div class="swiper-container banner">
      <div class="swiper-wrapper">
        <div 
          class="swiper-slide" 
          v-for="product in products"
          :key="product._id"
        >
          <img :src = "product.SmallPic" alt="">
        </div>
       
      </div>
    </div>

  
</template>

<script>
import Swiper from "swiper"
export default {
  data () {
    return {
      products:[]  
    }
  },
  created () {
    this.$http.get("/api/sk/navs",{
          params:{
            
          }
      }).then(res=>{
        this.products = res.data.data.object_list.slice(0,6);
        //实例化swiper
        this.$nextTick(()=>{
          new Swiper(".banner",{    
            loop:true,
          })
        })
       
         
      })
  }
}
</script>

<style lang="scss">
  .swiper-slide{
    height:2rem;

    img{
      display:block;
      height:100%;
      width:3rem;
      margin:0 auto
    }
  }
    
    
</style>