<template>
  <div class="find">
      
      <Toptab></Toptab>
      <router-view></router-view>
      <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
// import Find from "@/components/Find"
// import Selection from "@/views/Find/Selection"
import Toptab from "@/views/Find/Toptab"

export default {
  components: {
    Tabbar,Toptab
  },
}
</script>

<style lang="scss">
  .find{
    margin-top: 40px;
  }
</style>