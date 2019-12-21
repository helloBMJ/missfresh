<template>
<div>
    <Foodcopy
        v-for="bbb in listdata"
        :key="bbb.articleId"
        :bbb="bbb"
    ></Foodcopy>
</div>
    
</template>

<script>
import Foodcopy from "@/views/Find/Foodcopy"
export default {
    components: {
        Foodcopy
    },
    data(){
    return {
      listdata: []
    }
  },
  created(){
    this.$http.get("https://as-vip.missfresh.cn/as/disc/index/multiLis?device_id=0d6ef4a0-1ff7-11ea-8025-470e64a44826&env=web&platform=web&uuid=0d6ef4a0-1ff7-11ea-8025-470e64a44826&version=8.2.0&screen_height=375&screen_width=667&category=1")
      .then(res=>{
        // console.log(res.data.data[2].articles);
        this.listdata = res.data.data[2].articles;
    })
  }
}
</script>

<style>

</style>
