<template>
	<div class="classify">
		<top></top>
		<left></left>
		<div class="top">
			<ul v-if="!isHeight">
				<li 
					v-for="nav in navs"
					:key="nav.internalId"
				>
					{{nav.name}}
				</li>
			</ul>
		</div>
		<div class="right">
			<div class="bottom">
				<hot></hot>
			</div>
		</div>
		<Tabbar></Tabbar>
	</div>
</template>
<script>
import hot from "./hot"
import left from "./left"
import top from "@/components/Head"
import Tabbar from "@/components/Tabbar"
export default {
	data(){
		return {
			isHeight:false,
			list : [],
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
	},
  components: {
    Tabbar,hot,top,left
  },
  created(){
  	this.$http.get("/api/list.json").then((res)=>{
		console.log(res.data)
		this.list = res.data
	})
  }
}
</script>

<style lang="scss" scoped>
	.classify{
		display: flex;
		// .top{
		// 	// display:none;
		// }
		ul{
			display: flex;
			height: 170px;
			flex-wrap: wrap;
			width: 2.75rem;
			background: white;
			margin-left: 10px;
			position: fixed;
			top: 60px;
			right: 0;
			z-index: 1;
			li{
				font-size: 12px;
				height: 24px;
				line-height: 24px;
				display: block;
				width: 60px;
				margin: 5px;
				border: 1px solid gray;
				border-radius: 5px;
				text-align: center;
			}
		}
		.right{
			flex: 1;
			// position: fixed;
			// overflow: hidden;
			// text-overflow: ellipsis;
			// white-space: nowrap;
			// width: 2.75rem;
			position: absolute;
			top: 120px;
			right: 0;
			// padding-top: 5px;
			margin-bottom: 50px;
			// .bottom{
			// 	// margin-top: 220px;
			// }
		}
		.active{
			background: orange;
		}
	}

</style>