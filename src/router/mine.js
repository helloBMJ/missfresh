export default {
    name: "mine",
    path: "/mine",
    component: ()=>import("@/views/Mine"),
    children: [
        // {path: "", redirect: "login"},
        {path: "login", component: ()=>import("@/views/Mine/login"), name: "list"}
    ]
}