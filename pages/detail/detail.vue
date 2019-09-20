<template>
	<view>
		<detail-info :item="detail"></detail-info>
		<!-- 评论 -->
		<view class="u-comment-title">最新评论{{comment.count}}</view>
		
		<view class="uni-comment u-comment">
			<block v-for="(item,index) in comment.list" :key="index">
				<comment-list :item="item" :index="index"></comment-list>
			</block>
		</view>
		<view style="height: 120upx;"></view>
		<!-- 输入框 -->
		<userChatBottom @submit="submit"></userChatBottom>
		<!-- 分享 -->
		<more-share :show="shareshow" @togle='togle'></more-share>
	</view>
</template>

<script>
	import detailInfo from '../../components/detail/detail-info.vue'
	import commentList from '../../components/detail/comment-list.vue'
	import userChatBottom from "../../components/user-chat/user-chat-bottom";
	import time from "../../common/time.js";
	import moreShare from '../../components/common/more-share.vue'
	export default {
		data() {
			return {
				shareshow:false, //是否显示分享
				comment:{
					count:20,
					list:[]
				},
				detail:{
					userpic:"../../static/demo/userpic/1.jpg",
					username:"哈哈",
					sex:0, //0 男 1 女
					age:25,
					isguanzhu:false,
					title:"我是标题",
					titlepic:"../../static/demo/datapic/13.jpg",
					morepic:["../../static/demo/datapic/3.jpg","../../static/demo/datapic/4.jpg"],
					video:false,
					share:false,
					path:"深圳 龙岗",
					sharenum:20,
					commentnum:30,
					goodnum:20
				},
			}
		},
		components:{
			detailInfo,
			commentList,
			userChatBottom,
			moreShare
		},
		onLoad(e) {
			this.initdata(JSON.parse(e.detailData));
			this.getcomment()
		},
		onNavigationBarButtonTap(e) {
			//监听原生导航右边事件
			if(e.index == 0) {
				// 点击分享
				this.togle();
			}
		},
		methods: {
			togle(){
				this.shareshow = !this.shareshow
			},
			submit(data){
				// 发布评论
				let obj ={
					id:1,
					fid:0,
					userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					username:"小猫咪",
					time:time.gettime.gettime(new Date().getTime()),
					data:data,
				}
				this.comment.list.push(obj)
			},
			initdata(obj) {
				//修改标题窗口
				uni.setNavigationBarTitle({
					title:obj.title
				})
			},
			getcomment(){
				//获取评论信息
				let arr = [
					// 一级评论
					{
						id:1,
						fid:0,
						userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						username:"小猫咪",
						time:"1555400035",
						data:"uni-app不错",
					},
					// 子级评论
					{
						id:2,
						fid:1,
						userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						username:"小猫咪",
						time:"1555400035",
						data:"那是当然的",
					},
					{
						id:3,
						fid:1,
						userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						username:"小猫咪",
						time:"1555400035",
						data:"肯定的",
					},
					{
						id:4,
						fid:0,
						userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						username:"小猫咪",
						time:"1555400035",
						data:"支持国产，支持DCloud!",
					},
				]
				for (let i = 0; i < arr.length; i++) {
					arr[i].time=time.gettime.gettime(arr[i].time);
				}
				this.comment.list=arr;
			}
		}
	}
</script>

<style>
.u-comment{
	padding: 0 20upx;
}
.u-comment-title{
	padding: 20upx;
	font-size: 30upx;
	font-weight: bold;
}

</style>
