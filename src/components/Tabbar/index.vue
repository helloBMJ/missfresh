<template>
    <div class="tabbar border-1px">
        <item
            :txt="nav.txt" 
            :mark="nav.mark" 
            :selected="selected"
            v-for="nav in navs"
            :key="nav.id"
        >
            <img slot="activeImg" :src="nav.activeImg" alt="">
            <img slot="normalImg" :src="nav.normalImg" alt="">
        </item>
    </div>
</template>

<script>
    import item from "./item"
export default {
    methods: {
        changeSelected(selected){
            this.selected = selected
        }
    },
    data(){
        return {
            selected: this.$route.name,
            navs: [
                {id:1, txt: "首页", mark: "home", activeImg: require("../../assets/home-active.5f430fd.png"), normalImg: require("../../assets/mis_img_20181012182954811.png")},
                {id:2, txt: "分类", mark: "classify", activeImg: require("../../assets/mis_img_20181012183131974.png"), normalImg: require("../../assets/classify.png")},
                {id:3, txt: "发现", mark: "find", activeImg: require("../../assets/mis_img_20181012183038805.png"), normalImg: require("../../assets/mis_img_20181012183035687.png")},
                {id:4, txt: "购物", mark: "shoppingcart", activeImg: require("../../assets/mis_img_20181012183104130.png"), normalImg: require("../../assets/mis_img_20181012183056107.png")},
                {id:5, txt: "我的", mark: "mine", activeImg: require("../../assets/mis_img_20181012183118867.png"), normalImg: require("../../assets/mis_img_20181012183115125.png")},
            ]
        }
    },
    components: {
        item,
    },
}
</script>

<style lang="scss">
    //引入border文件
    @import "@/stylesheets/_border.scss";
    .tabbar{
        @include border-top(1px, #ccc);
        position: fixed;
        width: 100%;
        height: 60px;
        // line-height: 1;
        left: 0;
        bottom: 0;
        display: flex;
        background: rgba(247, 247, 250, 0.95);
    }
</style>