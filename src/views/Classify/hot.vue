<template>
	<div class="hot">
		<!-- <mt-cell
			v-for="nav in navs"
			:key="nav.CommodityId"
		>
			<img slot="icon" v-lazy="nav.SmallPic" width="100" height="120">
			<p>{{nav.CommodityName}}</p>
			<p>{{nav.SubTitle}}</p>
			<p style="font-size:12px;color:black;margin:5px 0;">会员价：{{nav.SellPrice}}</p>
			<p style="font-size:14px;color:red">{{nav.OriginalPrice}}</p>
		</mt-cell> -->
		<goodItem
			v-for="nav in navs"
			:key="nav.CommodityId"
			:nav="nav"
		>
		</goodItem>
	</div>
</template>

<script>
import goodItem from "./item"
	export default {
		components: {
			goodItem
		},
		data() {
			return {
				navs:[],
			}
		},
		created() {
			this.$http.get("/api/sk/navs",{
				params:{
					limit:6,
					// page:1
				}
			}).then(res=>{
				// console.log(res.data.data.object_list)
				this.navs = res.data.data.object_list
				// console.log(this.navs)
			})
		},
	}
</script>

<style lang="scss">
	// .goodItem{
	// 	margin-top:10px; 
	// }
</style>
