<template>
  <div class="home">
    <homehead></homehead>
    <Banner></Banner>
    <div class="recommond-box">
      <div ><i class="fa fa-diamond"></i>优鲜严选</div>
      <div><i class="fa fa-diamond"></i>安心检测</div>
      <div><i class="fa fa-diamond"></i>赔付保障</div>
    </div>
    <!-- lantern -->
    <div class="lantern">
      <div class="lan-item" 
        v-for="item in lantern"
        :key="item.id"
        >
        <img :src="item.img" alt="">
        <p>{{item.content}}</p>
      </div>
    </div>
   
    <!-- card-wrap -->
    <div class="card-wrap">
      <img src="https://j-image.missfresh.cn/img_20181213003703821.jpg" alt="">
      <img src="https://j-image.missfresh.cn/img_20181213004855362.jpg" alt="">
    </div>
    <p class="title1">新客首单全场包邮</p>
    <p class="title2">新客专享</p>

    <products></products>

    <img class="red-icon" src="https://j-image.missfresh.cn/img_20191218000159174.gif" alt="">
    <Tabbar></Tabbar>
  </div>

</template>

<script>
import Tabbar from "@/components/Tabbar"
import homehead from "@/components/Head"

//引入轮播图组件
import Banner from "@/components/Banner"

//引入商品组件
import products from "./products"
export default {
  data () {
    return {
     lantern:[
        {id:1,img:"https://j-image.missfresh.cn/img_20181118234116965.png",content:"0元吃水果"},
        {id:2,img:"https://j-image.missfresh.cn/img_20181118234315430.png",content:"水果美容院"},
        {id:3,img:"https://j-image.missfresh.cn/img_20181118234340173.png",content:"加入会员"},
        {id:4,img:"https://j-image.missfresh.cn/img_20181118234537451.png",content:"本周上新"},
        {id:5,img:"https://j-image.missfresh.cn/img_20181118234837331.png",content:"每日签到"},
        
      ]  
    }
  },
  components: {
    Tabbar,
    homehead,
    Banner,
    products
  }
}
</script>

<style lang="scss">
.home{
  margin-bottom:1.2rem;
}
  .recommond-box{
    display:flex;
    justify-content: space-around;
    align-items:center;
    height:0.49rem;
    font-size:0.12rem;
    i{
      margin-right:0.05rem;
    }
  }

//lantern
.lantern{
  margin-top:0.24rem;
  display:flex;
  justify-content: space-around;
  .lan-item{
    width:0.75rem;
    height:85px;
    display:flex;
    flex-direction: column;
    align-items: center;
    img{
      width:0.4rem;
      height:0.4rem;
      margin-bottom:0.03rem;
    }
    p{
      font-size:0.12rem;
    }
  }
}

//card
.card-wrap{
  display:flex;
  margin:0 0.15rem;
  justify-content: space-between;
  img{
    width:1.7rem;
    height:1rem;
  }
}
.title1{
  font-size:0.18rem;
  padding-left:0.18rem;
  margin-bottom:0.02rem;
  margin-top:0.25rem;
  color:#000;
}
.title2{
  font-size:0.12rem;
  padding-left:0.18rem;
}


// 商品
// .product-list{

// }

//红包
.red-icon{
  width:0.5rem;
  height:0.66rem;
  position:fixed;
  right:0.1rem;
  bottom:0.7rem;
  
}
</style>