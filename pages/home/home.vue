<template>
	<view>
		<template v-if="!islogin">
			<!-- 未登录 -->
			<view class="u-f-ajc">登录仿糗百科，体验更多功能</view>
			<!-- 第三方登录 -->
			<other-login></other-login>
			<!-- 账号密码登录 -->
			<view class="u-f-ajc" @tap="openLogin">账号密码登录<view class="icon iconfont icon-jinru"></view></view>
		</template>
		<template v-else>
			<!-- 登录 -->
			<home-info :homeinfo="homeinfo"></home-info>
		</template>
		
		<!-- 数据 -->
		<home-data :homedata="homedata"></home-data>
		
		<!-- 广告位 -->
		<view class="home-adv u-f-ajc">
			<image src="../../static/demo/demo20.jpg" mode="widthFix" lazy-load></image>
		</view>
		<!-- 功能列表 -->
		<view class="home-list" >
			<block v-for="(item,index) in list" :key="index">
				<home-list-item :item="item" :index="index"></home-list-item>
			</block>
			
		</view>
	</view>
</template>

<script>
	import homeListItem from '../../components/home/home-list-item'
	import homeInfo from '../../components/home/home-info'
	import otherLogin from "../../components/home/other-login.vue";
	import homeData from "../../components/home/home-data.vue";
	export default {
		data() {
			return {
				islogin:true,
				list:[
					{ icon:"liulan",name:"浏览历史",clicktype:"",url:""},
					{ icon:"huiyuanvip",name:"糗百认证",clicktype:"",url:"" },
					{ icon:"keyboard",name:"审核糗事",clicktype:"",url:"" },
				],
				homeinfo:{
					userpic:"../../static/demo/userpic/11.jpg",
					username:"昵称",
					totalnum:0,
					todaynum:0,
				},
				homedata:[
					{ name:"糗事", num:0 },
					{ name:"动态", num:0 },
					{ name:"评论", num:0 },
					{ name:"收藏", num:0 },
				],
			}
		},
		components:{
			homeListItem,
			homeInfo,
			otherLogin,
			homeData
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				uni.navigateTo({
					url: '../user-set/user-set',
				});
			}
		},
		methods: {
			openLogin(){
				uni.navigateTo({
					url: '../login/login',
				});
			}
		}
	}
</script>

<style>
.home-list{
	padding: 20upx;
}
.home-adv{
	padding: 20upx;
}
.home-adv>image{
	border-radius: 20upx;
	height: 150upx;
}
</style>
