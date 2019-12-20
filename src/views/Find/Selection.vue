<template>
<div class="container-box">
    <Selectioncopy
        v-for="aaa in datalist"
        :key="aaa.articleId"
        :aaa="aaa"
    >
    </Selectioncopy>
</div>
</template>
<script>
import Selectioncopy from  "@/views/Find/Selectioncopy"
export default {
    components: {
        Selectioncopy
    },
    data(){
    return {
      datalist: []
    }
  },
  created(){
    this.$http.get("https://as-vip.missfresh.cn/as/disc/index/multiLis?device_id=0d6ef4a0-1ff7-11ea-8025-470e64a44826&env=web&platform=web&uuid=0d6ef4a0-1ff7-11ea-8025-470e64a44826&version=8.2.0&screen_height=375&screen_width=667&category=1")
      .then(res=>{
        // console.log(res.data.data[0].articles);
        this.datalist = res.data.data[0].articles;
    })
  }
}
</script>

<style lang="scss">
    .container-box{
        margin-top:50px;
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
