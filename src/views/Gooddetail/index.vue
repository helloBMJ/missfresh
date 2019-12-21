<template>
  <div class="gooddetail">
      <div class="top">
          <div class="detail">商品详情</div>
          <i class = "fa fa-share-square-o"></i>
      </div>
      <div class="bottom">
        <div class="imgBox">
          <img :src="good.SmallPic" alt="">
        </div>
        <div class="info">
          <p style="fontSize:18px;fontWeight:700;margin-top:10px;">{{good.CommodityName}}</p>
          <p style="fontSize:14px;margin-top:5px">{{good.SubTitle}}</p>
        </div>
        <div class="sell">
          <p style="color:red;font-size:12px">¥{{good.SellPrice}}</p>
          <p>已售{{good.MaxLimitCount}}份</p>
        </div>
        <div class="product-describe">
          <li v-for="describe in describes" :key="describe.id">
            <span class="promotion-img"></span>
            {{describe.title}}
            
          </li>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      good:[],
      describes:[
        {title:"产地中国",id:0},
        {title:"2小时送达",id:1},
        {title:"实付满0包元邮",id:2}
      ]
    }
  },
  created() {
    // console.log(this.$route.params.id)
    let goodId = this.$route.params.id
    this.$http.get(`/api/sk/navs/`).then(res=>{
      let list = res.data.data.object_list
      let good= list.filter((currentvalue)=>{
        return currentvalue.CommodityId === goodId
      })
      this.good = good[0]
      // console.log(this.good)
      
    })
  },
}
</script>

<style lang="scss" scoped>
.gooddetail{
  height: 800px;
}
  .top{
    position: fixed;
    top: 0;
    z-index: 1;
    height: 40px;
    width: 100%;
    background: white;
    // line-height: 40px;
    // text-align: center;
    // font-size: 16px;
    .detail{
      height: 38px;
      font-size: 16px;
      font-weight: 700;
      color: #ff4891;
      width: 70px;
      margin-left:154px;
      line-height: 38px;
      text-align: center;
    }
    &::after{
      content: "";
      position: absolute;
      top: 38px;
      left:41%;
      width: 70px;
      height: 2px;
      background: #ff4891;
    }
  }
  .fa-share-square-o{
    position: absolute;
    top: 10px;
    right: 10px; 
    display: block;
  }
  .bottom{
    margin-top: 40px;
    .imgBox{
      font-size: 0;
      width: 3.75rem;
      height: 320px;
      position: relative;
      img{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
    .info{
      width: 100%;
      padding: 10px 30px;
      height: 80px;
      p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .sell{
      display: flex;
      margin-top:10px;
      padding: 5px 50px;
      justify-content: space-between;
    }
    .product-describe{
      display: flex;
      padding:0.15rem 0;
      margin-top: 0.15rem;
      border-top: .5px solid #f5f5f5;
      overflow: hidden;
      li{
        margin-left: .2rem;
      }
      .promotion-img{
            height: 0.05rem;
    width: 0.05rem;
    border-radius: 50%;
    background: #474245;
    vertical-align: middle;
    display: inline-block;
      }
    }
  }
</style>