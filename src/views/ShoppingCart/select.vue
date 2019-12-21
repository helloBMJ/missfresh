<template>
    <div class = "select">
        <!-- <div
            class = "hint"
            v-for="car in hh"
            :key="car._id"
        >{{car.num}}</div> -->
        <mt-cell
        v-for="good in goods"
        :key="good._id"
        :title="good.CommodityName"
        :label="good.SubTitle"
        >
            <div><mt-button @click="addGoodInCar(good)" id="btn" type="danger" size="small">+</mt-button>
                <span>{{good.__v}}</span>
            </div>
            <img slot="icon" v-lazy="good.SmallPic" width="150" height="150">
        </mt-cell>
    </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
export default {
    data(){
        return {
            goods:[]
        }
    },
    methods:{
        ...mapActions(["addGoodInCar"]),
        // equal(){
        //     if()
        // }
    },
    computed:{
        ...mapState({
            hh:state=>state.myCar.cars
        })
    },
    created(){
        // console.log("myCar",this.$store.state.myCar.cars)    拿到购物车内的数据
        this.$http.get("/api/sk/navs").then(res=>{
            // console.log(res.data.data.object_list)
            this.goods = res.data.data.object_list
        })
        
    }, 
    
}
</script> 

<style lang="scss">

    .select{
        position:relative;
        padding:2px 0 0 0;
        margin-bottom:100px;
        // .hint{
        //     width:10px;
        //     height:10px;
        //     position:absolute;
        //     left:92%;
        //     z-index: 20;
        //     margin-top:30px;
        //     // letter-spacing:10px;
        // }
    }
    .mint-cell{
        width: 100%;
        display: inline-block;
        // margin:5px;
        img{
            float:left;
        }
    }
    #btn{
        width:25px;
        height:25px;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content: center;
    }
    // .shoppingcart{
    //     display:flex;
    //     .select{
    //     // display:flex;
    //     .mint-cell-wrapper{
    //      width:49%;
    //      display: flex;
    //      justify-content: space-between;
    //     //  align-items: center;
    // }
    // }
    // }
    
</style>