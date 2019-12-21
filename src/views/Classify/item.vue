<template>
  <router-link 
    class="goodItem"
    tag="div"
    :to="{name:'gooddetail',params:{id:nav.CommodityId}}"
>
      
      <!-- <img slot="icon" v-lazy="nav.SmallPic" width="100" height="120"> -->
    <div class = "img-box">
        <img v-lazy="nav.SmallPic" width="100" height="120">
    </div>
    <div class="info">
        <p>{{nav.CommodityName}}</p>
        <p>{{nav.SubTitle}}</p>
        <p style="font-size:12px;color:black;margin:5px 0;">会员价：{{nav.SellPrice}}</p>
        <p style="font-size:14px;color:red">{{nav.OriginalPrice}}</p>
    </div>
  </router-link>
</template>

<script>

  export default {
      props:["nav"]
  }

</script>
<style lang='scss' scoped>
.goodItem{
    display: flex;
    // flex-direction:column; 
}
    .img-box{
        width: 120px;
        float: left;
    }
    .info{
        width: 150px;
        float: right;
        p{
            margin-top:3px;
            overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
        }
    }
</style>