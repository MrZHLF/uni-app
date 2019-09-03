<template>
	<view class="body">
		<!-- tab切换 -->
		<swiperTabHead 
			:tabBars="tabBars" 
			:tabIndex="tabIndex" 
			@tabtap="tabtap" 
			scrollStyle="border-bottom:0;"
			scrollItemStyle="width:33%"
			></swiperTabHead>
			
		<!-- 好友列表 -->
		<view class="user-list u-f-ac">
			<image src="../../static/demo/userpic/8.jpg" mode="widthFix" lazy-load></image>
			<view>
				<view>昵称</view>
				<view style="display: inline-block;">
					<tagSexAge age="20" sex="1"></tagSexAge>
				</view>
				
			</view>
			<!-- <view class="icon iconfont icon-xuanze-yixuan u-f-ajc"></view> -->
			<view class="icon iconfont icon-zengjia1 u-f-ajc"></view>
		</view>
	</view>
</template>

<script>
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import tagSexAge from "../../components/common/tag-sex-age"
	export default {
		components:{
			swiperTabHead,
			tagSexAge
		},
		data() {
			return {
				tabIndex:0,// 选中的
				tabBars:[
					{ name:"互关",id:"huguan",num:10 },
					{ name:"关注",id:"guanzhu",num:20  },
					{ name:"粉丝",id:"fensi",num:30  }
				],
				list:[
					{
						userpic:"../../static/demo/userpic/11.jpg",
						username:"昵称",
						age:20,
						sex:0,
						isguanzhu:true
					},
					{
						userpic:"../../static/demo/userpic/11.jpg",
						username:"昵称",
						age:21,
						sex:1,
						isguanzhu:false
					}
				]
			}
		},
		// 监听原生导航事件
		onNavigationBarButtonTap(e) {
			if(e.index == 0) {
				//返回上一级
				uni.navigateBack({
					delta:1
				})
			}
		},
		methods: {
			//接受子组件传过来的值点击切换导航
			tabtap(index){
				this.tabIndex = index;
			},
		}
	}
</script>

<style>
.body{
	padding: 0 20upx;
}
.user-list{
	padding: 20upx 0;
	border-bottom: 1px solid #EEEEEE;
}
.user-list>image{
	width: 100upx;
	height: 100upx;
	border-radius: 100%;
	margin-right: 20upx;
	flex-shrink: 0;
}
.user-list>view:first-of-type{
	flex: 1;
}
.user-list>view:first-of-type>view:first-child{
	font-size: 35upx;
}
.user-list>view:last-of-type{
	width: 80upx;
	color: #CCCCCC;
}
.icon-zengjia1{
	color: #F8F918 !important;
}
</style>
