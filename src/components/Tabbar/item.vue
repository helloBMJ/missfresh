<template>
  <div class="item">
        <span v-if="flag"><slot name="activeImg"></slot></span>
        <span v-else @click="clickme"><slot name="normalImg"></slot></span>
        <span :class="{active:flag}">{{txt}}</span>
  </div>
</template>

<script>
export default {
    props: ["txt", "mark", "selected"],
    computed:  {
        flag(){
            if(this.mark === this.selected){
                return true
            }
            return false
        }
    },
    methods: {
        clickme(){
            // this.$emit("changeSelected", this.mark)
            this.$router.push("/" + this.mark)
        }
    }
}
</script>

<style lang="scss">
    .item{
        flex: 1;
        display: flex;
        margin-top: 10px;
        flex-direction: column;
        align-items: center;
        img{
            width: 30px;
            height: 30px;

        }
        .active{
            color: rgb(255, 72, 145);
        }
    }
</style>