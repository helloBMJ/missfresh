<template>
    <div class="top-nav">
        <div class="logo"><img src="https://static-as.missfresh.cn/frontend/discovery/static/img/author-default.3af07f7.png" alt=""></div>
        <div class="tab-tip">
            <div
                v-for="nav in navs"
                :key="nav.id"
                :class="[{active:category === nav.category}]"
                @click="category = nav.category"
            ><router-link
                :to="{name:nav.name}"
            >{{nav.title}}</router-link></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            category:1,
            navs: [
                {id:1,title:"精选",category:1,name:"selection"},
                {id:2,title:"快手食谱",category:2,name:"food"},
                // {id:3,title:"甜点饮品",category:3},
                // {id:4,title:"生活百科",category:4}
            ]
        }
    }
}
</script>

<style lang="scss">
@import "@/stylesheets/_border.scss";
    .top-nav{
        width: 100%;
        height: 40px;
        background: #fff;
        padding: 0 10px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        @include border-bottom(1px, #ccc);
        position: fixed;
        top: 0;
        left: 0;
        // position: fixed;
        // left: 0;
        // top: 0;
        .tab-tip{
            background: #fff;
            display: flex;
            justify-content: space-around;
            width: 3rem;
            height: 100%;
            line-height: 40px;
        }
        div{
            float: left;
        }
        .logo{
            width: 24px;
            height: 24px;
            border-radius: 50%;
            margin-right: 8px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
    }
    .active{
        color: #ff4891;
        border-bottom: 3px solid #ff4891;
    }
</style>
