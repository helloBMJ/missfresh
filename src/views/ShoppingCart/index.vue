<template>
  <div class="shoppingcart">
      <!-- <router-link to="/list">list</router-link> -->
      <router-view></router-view>
      <!-- <div id = "base"> -->
        <mt-tabbar>
          <mt-tab-item
            v-for="nav in navs"
            :key="nav.id"
          >
            <router-link active-class = "active" :to="{name:nav.name}">
              {{nav.title}}
            </router-link>
          </mt-tab-item>
      </mt-tabbar>
      <!-- </div> -->
      <Tabbar></Tabbar>
      <!-- <mt-button type="default">default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button> -->
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
export default {
  components: {
    Tabbar
  },
  data(){
    return {
      navs:[
          {id:1,title:"列表",name:"select"},
          {id:2,title:"购物",name:"car"}
      ]
    }
  },
  beforeRouteLeave(to,from,next){
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      next()
  },
  activated(){
      window.scrollTo(0,this.scrollTop)
  }
 
}
</script>

<style lang="scss">
      .mint-tabbar{
        height:.3rem;
        width:100%;
        position: fixed;
        bottom:.59rem;
        z-index: 10;
        // margin-bottom:.59rem;
        // padding:.14rem;
        .mint-tab-item-label{
          font-size:.16rem;
          font-weight:900;
          color:#425467;
        }
        .router-link-exact-active{
          font-size:.16rem;
          font-weight:900;
          color:#425467;
        }
        .active{
          color:red;
        }
    }
</style>