<template>
  <div class="mine">
    <!-- 用户登录 -->
      <div class="use-login">
          <router-link 
            to="/login" 
            class="login"
            tag="span"
          >用户登录</router-link>
      </div>
      <!-- 花里胡哨用户东西 -->
      <ul class="user-item">
        <li
          class="item-box"
          v-for="userItem in userItems"
          :key="userItem.id"
        >
          <span>
            {{userItem.num}} 
            <i class="box-img"><img :src="userItem.img" alt=""></i>
          </span>
          <span>{{userItem.txt}}</span>
        </li>
      </ul>
      <!-- 会员权益 -->
      <div class="equities">
        <div class="equities-box">
          <p class="nav">
            <span class="nav-left">会员权益</span>
            <span class="nav-right">开通会员</span>
          </p>
          <p class="plus-money">
            <span class="txt-left">成为优享会员，预计1年将为你</span>
            <span class="txt-right">节省1121.30元</span>
          </p>
        </div>
      </div>
      <!-- 分类 -->
      <div class="plus-items">
        <ul class="plus-items-box">
          <li 
              class="plus-list"
              v-for="plusBox in plusBoxs"
              :key="plusBox.id"
            ><p><i class="plus-img"><img :src="plusBox.img" alt=""></i><span>{{plusBox.txt}}</span></p>
          </li>
        </ul>
      </div>
      <!-- 俩图片 -->
      <div class="activities-wrap clear">
        <div 
          class="activities-img"
          v-for="imgBox in imgBoxs"
          :key="imgBox.id"
        >
          <img :src="imgBox.img" alt="">
        </div>
      </div>
      <!-- 滚动 -->
      <div class="loadmore-box" topDistance="200">
        <mt-loadmore>
          <ul class="loadmore-item">
            <li class="loadmore-list">我的订单</li>
            <li class="loadmore-list">我的地址</li>
            <li class="loadmore-list">账户与安全</li>
            <li class="loadmore-list">客户与帮助 </li>
            <li class="loadmore-list">意见反馈</li>
            <li class="loadmore-list">关于我们</li>
          </ul>
        </mt-loadmore>
      </div>
      
      <Tabbar></Tabbar>
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
      userItems: [
        {id:1, num: 0, txt: "余额", name: "ˈbæləns", img: require("../../assets/img_20180205201631182.gif")},
        {id:2, num: 0, txt: "红包", name: "redbag"},
        {id:3, num: 0, txt: "商品券", name: "goods"},
      ],
      plusBoxs: [
        {id:1,img: require("../../assets/img_20171103161358679.png"), txt: "会员专享价"},
        {id:2,img: require("../../assets/img_20171028202735028.png"), txt: "1小时送达"},
        {id:3,img: require("../../assets/img_20171028202909231.png"), txt: "专属客服"},
        {id:4,img: require("../../assets/img_20180105021607945.png"), txt: "敬请期待"}
      ],
      imgBoxs: [
        {id:1, img: require("../../assets/img_20191128143553558.jpg")},
        {id:2, img: require("../../assets/img_20191218000219169.jpg")}
      ]
    }
  }
}
</script>

<style lang="scss">
.mine{
  margin-bottom: 30px;
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
  .user-item{
    height: 100px;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    .item-box{
      flex-direction: column;
      display: flex;
      align-items: center;
      font-size: 14px;
      margin-top: 10px;
      position: relative;
      .box-img{
        width: 30px;
        height: 20px;
        display: block;
        position: absolute;
        top: 6px;
        left: 29px;
        img{
          width: 100%;
        }
      }
    }
  }
  .equities{
    width: 3.3rem;
    height: 66px;
    margin: 0 auto;
    .equities-box{
      color: #969696;
    .nav{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .nav-left{
        font-size: 25px;
        color: #333;
      }
    }
    .plus-money{
      margin-top: 10px;
      font-size: 12px;
      .txt-right{
        color: #ff4891;
      }
    }
  }
}
.plus-items{
  width: 3.3rem;
  height: 78px;
  margin: 10px auto;
  .plus-items-box{
    display: flex;
    justify-content: space-around;
    .plus-list{
      align-items: center;
      .plus-img{
        display:block;
        width: 30px;
        height: 30px;
        font-size: 10px;
        margin: 0 auto;
        img{
          width: 100%;
        }
      }
    }
  }
}
.activities-wrap{
  width: 3.3rem;
  margin: 0 auto;
  .activities-img{
    width: 173px;
    height: 100px;
    float: left;
    display: flex;
    margin-right: 5px;
    justify-content: flex-start;
    img{
      width: 100%;
    }
  }
}
.loadmore-box{
  width: 3.3rem;
  margin: 0 auto;
  font-size: 18px;
  padding-bottom: 30px;
  .loadmore-item{
    .loadmore-list{
      padding: 20px 0;
      border-bottom: 1px solid #f0f0f0;
    }
  }
}
}
</style>