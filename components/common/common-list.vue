<template>
	<view class="common-list u-f animated fadeInLeft fast">
		<!-- 左边 -->
		<view class="common-list-l">
			<image :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
		<view class="common-list-r">
			<view class="u-f-ac u-f-jsb">
				<!-- 左 -->
				<view class="u-f-ac">
					{{item.username}}
					<tagSexAge :sex="item.sex" :age="item.age"></tagSexAge>
				</view>
				<!-- 右 -->
				<view v-show="!isguanzhu" @tap="guanzhu" class="icon iconfont icon-zengjia">关注</view>
			</view>
			<view>{{item.title}}</view>
			<view class="u-f-ajc">
				<!-- 图片 -->
				<image v-if="item.titlepic" :src="item.titlepic" mode="widthFix" lazy-load></image>
				<!-- 视频 -->
				<template v-if="item.video">
					<view class="common-list-play icon iconfont icon-bofang"></view>
					<view class="common-list-playinfo">
						{{item.video.looknum}} 万次播放 {{item.video.long}}
					</view>
				</template>
				
				
				<!-- 分享 -->
				<template v-if="item.share">
					<view class="common-list-share u-f-ac">
						<image :src="item.share.titlepic" mode="widthFix" lazy-load></image>
						<view>{{item.share.title}}</view>
					</view>
				</template>
			</view>
			<view class="u-f-ac u-f-jsb">
				<view>{{item.path}}</view>
				<view class="u-f-ac">
					<view class="icon iconfont icon-zhuanfa">{{item.sharenum}}</view>
					<view class="icon iconfont icon-pinglun1">{{item.commentnum}}</view>
					<view class="icon iconfont icon-dianzan1">{{item.goodnum}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from "./tag-sex-age"
	export default {
		props:{
			item:Object,
			index:Number
		},
		data() {
			return {
				isguanzhu:this.item.isguanzhu
			}
		},
		methods:{
			guanzhu(){
				this.isguanzhu = true;
				uni.showToast({
					title: "关注成功"
				})
			}
		},
		components:{
			tagSexAge
		}
	}
</script>

<style scoped>
	@import "../../common/list.css";
</style>
