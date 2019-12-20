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
      }
  }
</script>
<style lang="scss">

</style>
 