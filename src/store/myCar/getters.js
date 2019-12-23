export default {
    //获取当前购物车的总数量和总价格
    computeTotal(state){
        let cars = state.cars
        let total = {price:0,num:0}
        cars.forEach(item=>{
            total.price += item.OriginalPrice*item.num
            total.num += item.num
        })
        total.price = total.price.toFixed(2)
        return total
    }
}