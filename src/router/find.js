export default {
    // name: "find",
    path: "/find",
    component: ()=>import("@/views/Find"),
    children:[
        {path:"",redirect:"selection"},
        {path:"selection",component: ()=>import("@/views/Find/Selection")},
        {path:"food",component: ()=>import("@/views/Find/Food"),name:"food"}
    ]
}