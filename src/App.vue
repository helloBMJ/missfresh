<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  
  export default {
      components: {
      },
      created(){
          this.$store.dispatch("initCars")
          console.log(this.$store.dispatch) 
      }
  }
</script>
<style lang="scss">
  // #app{
  //   display: flex;
  //   flex: 1;
  // }
</style>
 