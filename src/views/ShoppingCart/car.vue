<template>
    <div class = "car">
        <div class="big"
            v-for="good in goods"
            :key="good._id"
        >
            <div class = "top">
            <span class = "top1"></span>
            <span class = "top2">{{good.CommodityName}}</span>
            <span>可用优惠卷></span>
        </div>
        <ul>
            <li>
                <div class = "one">O</div>
                <div class = "two"><img v-lazy="good.SmallPic" alt=""></div>
                <div class = "three">
                    <div class = "three1">{{good.SubTitle}}</div>
                    <div class = "three2">
                        <div>￥{{good.OriginalPrice}}</div>
                        <div class = "price">
                            <span>{{good.num+"*"+good.OriginalPrice}}</span>
                            <mt-button @click="addGoodInCar(good)" class="btn" type="danger">+</mt-button>
                            <span>{{good.num}}</span>
                            <mt-button @click="reduceGoodInCar(good)" class="btn" type="danger">-</mt-button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        
        </div>
        <div id = "aggregate">
            <p>总数目为:{{computeTotal.num}}</p>
            <p class="price-txt">总价为:{{computeTotal.price}}</p>
        </div>

    </div>
</template>

<script>
import {mapActions,mapState,mapGetters} from  "vuex"
export default {
    computed:{
        ...mapState({
            goods:state=>state.mycar.cars
        }),
        ...mapGetters(["computeTotal"])
    },
    methods:{
        ...mapActions(["addGoodInCar","reduceGoodInCar"]),
        // equal(){
        //     if()
        // }
    },
}
</script>

<style lang="scss">
    #aggregate{
            font-size:16px;
            font-weight:900;
            width:120px;
            height:40px;
            background:#d9d9d9;
            color:#000;
            .price-txt{
                color: #ff4891;
            }
        }
    .big{
        margin-bottom:20px;
        border-top:5px solid black;
       
    }
    .car{
        padding-bottom:100px;
        .top{
            width:100%;
            height:40px;
            // background:red;
            display:flex;
            justify-content: space-between;
            .top2{
                float:left;
            }
        }
        ul{
            li{
                
                // background:yellow;
                width:100%;
                height:80px;
                div{
                    float:left;
                }
                .one{
                    height:100%;
                    width:20px;
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    // background:blue;
                    // color:white;
                }
                .two{
                    margin:0 10px;
                    width:50px;
                    height:100%;
                    display:flex;
                    align-items:center;
                    img{
                        width:100%;
                        height:50px;
                    }
                }
                .three{
                    width:200px;
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;
                    .three2{
                        display:flex;
                        justify-content: space-between;
                        .price{
                            width:60px;
                            // background:pink;
                            display:flex;
                            justify-content: space-around;
                            .btn{
                                width:16px;
                                height:20px;
                                border-radius:100%;
                                display:flex;
                                justify-content: center;
                                align-items: center;
                                // background:white;
                                border:1px solid black;
                            }
                        }

                    }
                }
            }
        }
    }
</style>