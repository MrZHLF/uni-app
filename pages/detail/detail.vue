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
	</view>
</template>

<script>
	import detailInfo from '../../components/detail/detail-info.vue'
	import commentList from '../../components/detail/comment-list.vue'
	import time from "../../common/time.js";
	export default {
		data() {
			return {
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
			commentList
		},
		onLoad(e) {
			this.initdata(JSON.parse(e.detailData));
			this.getcomment()
		},
		onNavigationBarButtonTap(e) {
			//监听原生导航右边事件
			if(e.index == 0) {
				console.log("分享")
			}
		},
		methods: {
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
