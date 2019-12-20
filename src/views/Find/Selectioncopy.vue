<template>
    <div class="container-box">
        <div class="container">
            <div class="left-img">
                <img :src="aaa.titlePic" alt="">
            </div>
            <div class="right-tip">
                <div class="title">
                    <div class="logo"><img :src="aaa.authorPhoto" alt=""></div>
                    <div class="font">{{aaa.nickname}}</div>
                </div>
                <div class="content">
                    {{aaa.shareInfoVO.title}}
                </div>
                <div class="bottom"><span>浏览</span><span>{{aaa.fontReadNo}}</span></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        aaa: Object
    }
}
</script>

<style lang="scss">
    .container-box{
        .container{
            width: 100%;
            height: 1.1rem;
            background: #fff;
            padding: 0 10px;
            margin-top: 20px;
        }
        .left-img{
            float: left;
            width: 150px;
            height: 103px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }
        .right-tip{
            float: right;
            width: 2rem;
            height: 1rem;
            background: #fff;
            padding: 0 3px;
            .title{
                overflow: hidden;
                margin-bottom: 5px;
                div{
                    float: left;
                }
                .font{
                    font-size: 12px;
                    line-height: 22px;
                }
                .logo{
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    display: inline-block;
                    margin: 0 10px;
                    margin-top: 2px;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
            }
            .content{
                font-size: 16px;
                color: #474346;
                line-height: 20px;
                margin-bottom: 15px;
            }
        }
    }
</style>
