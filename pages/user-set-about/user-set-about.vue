<template>
	<view style="padding: 20upx;">
		<view class="user-sex-about-t u-f-ajc u-f-column">
			<image src="../../static/common/logo.png" mode="widthFix" lazy-load></image>
			<view>version 1.0.0</view>
		</view>
		<block v-for="(item,index) in list" :key="index">
			<home-list-item :item="item" :index="index"></home-list-item>
		</block>
	</view>
</template>

<script>
	import homeListItem from '../../components/home/home-list-item'
	export default {
		data() {
			return {
				list:[
					{ icon:"",name:"新版本检测",clicktype:"",url:"" },
					{ icon:"",name:"仿糗事百科用户协议",clicktype:"",url:"" },
				]
			}
		},
		components:{
			homeListItem
		},
		methods: {
			
		}
	}
</script>

<style>
.user-sex-about-t{
	padding: 40upx 0;
}
.user-sex-about-t>view{
	color: #CCCCCC;
}
.user-sex-about-t>image{
	margin-top: 50upx;
	margin-bottom: 30upx;
	width: 65%;
}
</style>
