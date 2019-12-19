import Vue from "vue"



//一些与dom相关的业务业务逻辑，可以封装到自定义指令上面去，实现通用

// v-backtop

//自定义指令的钩子函数，bind inserted updata componentUpdata unbind

//钩子函数的参数    el binding vnode
Vue.directive("backtop",{
    inserted(el,binding,vnode){
        let eventClick = binding.arg || "click"
        // console.log(eventClick)
        el.addEventListener(eventClick,e=>{
            window.scrollTo(0,0)
        })
    }
})