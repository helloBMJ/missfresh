import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from "./home"
import classify from "./classify"
import gooddetail from "./gooddetail"
import find from "./find"
import mine from "./mine"
import shoppingcart from "./shoppingcart"


const router = new VueRouter({
  routes: [
    {path: "/", redirect: "/home"},
    home,classify,find,mine,shoppingcart,gooddetail,
    {path: "/404", component: ()=>import("@/views/Notfound")},
    {path: "*", redirect: "/404"}
  ]
})

export default router
