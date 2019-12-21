export default {
    name: "classify",
    path: "/classify",
    component: () => import ("@/views/Classify"),
	children:[
		{path:"",redirect:"hot"},
		{path:"hot",name:"host",component:()=>import("@/views/Classify/hot")},
		{path:"vip",name:"vip",component:()=>import("@/views/Classify/vip")}
	]
}