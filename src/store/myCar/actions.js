export default {

    //初始化购物车
    initCars(ctx){
        let cars = getCars()
        ctx.commit("changeCars",cars)
    },

    //添加商品到购物车
    addGoodInCar(ctx,good){
        setTimeout( ()=> {
            //获取下面模拟后端传递来的购物车
            let cars = getCars()
            let isHas = cars.some(item => {
                if(item.CommodityId === good.CommodityId){  //把当前购物车内部的数据与外面传入进来的想要添加
                    item.num++    //如果有的话那么就把其中新添加的num属性加一
                    good.__v = item.num
                    return true
                }
            })
            if(!isHas){   //如果购物车内部没有传入进来的想要添加进购物车内的数据。
                good.num = 1   //添加一个num属性 并且设置为1
                cars.push(good)  //添加到数组内部
                good.__v = good.num
            }

            //通知后台更改cars
            localStorage.cars = JSON.stringify(cars)
            //更改vuex里面的cars
            ctx.commit("changeCars",cars)
            // console.log(this)
        },500)
    },
    reduceGoodInCar(ctx,good){
        let cars = getCars()
        cars = cars.filter(item=>{
            if(item.CommodityId === good.CommodityId){
                item.num--
                if(item.num <= 0) return false  //filter如果返回false，就直接过滤掉商品了
            }
            return true
        })
        localStorage.cars = JSON.stringify(cars)
        ctx.commit("changeCars",cars)
    }
}

//通过localStorage模拟后端
function getCars(){
    return JSON.parse(localStorage.cars ? localStorage.cars : "[]")
}