export default {
    name: "shoppingcart",
    path: "/shoppingcart",
    component: ()=>import("@/views/ShoppingCart"),
    children:[
        {path:"",redirect:"select"},
        {path:"select",component:()=>import("@/views/ShoppingCart/select"),name:"select"},
        {path:"car",component:()=>import("@/views/ShoppingCart/car"),name:"car"}
    ]
} 