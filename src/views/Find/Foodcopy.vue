<template>
    <div class="container-box">
        <div class="big-wrap">
            <div class="title">
                <div class="logo"><img :src="bbb.authorPhoto" alt=""></div>
                <div class="font">{{bbb.nickname}}</div>
            </div>
            <div class="images"><img :src="bbb.titlePic" alt=""></div>
            <div class="content">
                {{bbb.shareInfoVO.title}}
            </div>
            <div class="bottom">
                <div class="left">
                    <span>浏览</span>
                    <span>{{bbb.fontReadNo}}</span>
                </div>
                <div class="right">
                    分享
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        bbb: Object
    }
}
</script>

<style lang="scss">
    .container-box{
        // margin-top: 50px;
        .big-wrap{
            width: 100%;
            height: 330px;
            background: #fff;
            padding: 0 .1rem;
            .title{
                overflow: hidden;
                margin-bottom: 5px;
                div{
                    float: left;
                }
                .font{
                    font-size: 14px;
                    line-height: 22px;
                    color: #474245;
                    padding: 0 7px;
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
            .images{
                width: 345px;
                height: 194px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
            }
            .content{
                padding: 0;
                margin: 10px 0 12px;
                font-size: 20px;
                font-weight: 700;
                line-height: 25px;
                color: #474245;
            }
            .bottom{
                .left{
                    float: left;
                    span{
                        margin: 0 5px;
                        color: #969696;
                        font-size: 12px;
                    }
                }
                .right{
                    float: right;
                    color: #969696;
                    font-size: 12px;
                }
            }
        }
    }
</style>
