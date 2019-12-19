<template>
  <div class="mine">
      <div class="use-login">
          <span class="login">用户登录</span>
      </div>
      <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
export default {
  components: {
    Tabbar
  }
}
</script>

<style lang="scss">
  .use-login{
    background: url(../../assets/my-bg.95ae718.png) no-repeat 100%;
    width: 3.75rem;
    height: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .login{
      display: block;
      height: 45px;
      width: 95px;
      line-height: 45px;
      color: #ff4891;
      text-align: center;
      border: 1px solid #ff4891;
      border-radius: 10px;
    }
  }
</style>