<template>
<div class="left">
    <li 
        v-for="nav in navs"
        :key="nav.internalId"
    >
        <router-link 
        active-class="active"
            :to="nav.categoryType"
        >{{nav.name}}</router-link>
    </li>
</div>
</template>

<script>

  export default {
      data(){
          return {
              navs:[	{"categoryType": "hot","internalId": "10","name": "热销爆款"},
					{"categoryType": "vip","internalId": "19","name": "会员精选"},
    				{"categoryType": "asd","internalId": "190","name": "时令水果"},
					{"categoryType": "asd","internalId": "143","name": "新鲜蔬菜"},
					{"categoryType": "asd","internalId": "87","name": "肉蛋熟食"},
					{"categoryType": "asd", "internalId": "112","name": "活鲜水产"},
					{"categoryType": "asd","internalId": "68","name": "品质乳品"},
					{"categoryType": "asd","internalId": "56","name": "休闲食品"},
					{"categoryType": "asd","internalId": "166","name": "酒水饮料"},
					{"categoryType": "asd","internalId": "103","name": "粮油速食"},
					{"categoryType": "asd","internalId": "1480","name": "日用百货"},
					{"categoryType": "asd","internalId": "1981","name": "在家火锅"},
					{"categoryType": "asd","internalId": "1757","name": "鲜花绿植"}
				]
          }
      }
  }

</script>
<style lang='scss' scoped>
    .left{
        width: 1rem;
        position: fixed;
        top: 60px;
        li{
            margin-top: 10px;
            a{
                padding: 5px;
                font-size: 12px;
                font-weight: 800;
                padding-left: 15px;
            }
        }
    }
</style>