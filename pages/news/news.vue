<template>
	<view>
		<!-- 自定义导航 -->
		<newsNavBar :tabBars="tabBars" :tabIndex="tabIndex" @chang-tab="changTab"></newsNavBar>
		<!-- 列表 -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item>
					<scroll-view scroll-y class="list" @scrolltolower="loadmore">
						<block v-for="(item,index) in guanzhu.list" :key="index">
							<commonList :item="item" :index="index"></commonList>
						</block>
						<!-- 上拉加载 -->
						<loadMore :loadtext="guanzhu.loadtext"></loadMore>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y class="list">
						<!-- 搜索框 -->
						<view class="search-input">
							<input class="uni-input" placeholder="搜索内容" placeholder-class="icon iconfont icon-sousuo topic-search" />
						</view>
						<!-- 轮播图 -->
						<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="topic-swiper">
							<block v-for="(item,index) in topic.swiper" :key="index">
								<swiper-item>
									<image :src="item.src" mode="widthFix" lazy-load></image>
								</swiper-item>
							</block>
						</swiper>
						<!-- 热门分类 -->
						<topicNav :nav="topic.nav"></topicNav>
						<!-- 最近更新 -->
						<view class="topic-new">
							<view>最近更新</view>
							<view class="topic-list u-f">
								<image src="../../static/demo/topicpic/15.jpeg" mode="widthFix" lazy-load></image>
								<view>
									<view>#话题名称#</view>
									<view>话题描述</view>
									<view>动态 10 今日 5</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import newsNavBar from "../../components/news/news-nav-bar"
	import topicNav from "../../components/news/topic-nav"
	import loadMore from "../../components/common/load-more"
	import commonList from "../../components/common/common-list"
	export default {
		data() {
			return {
				swiperheight:500,//屏幕高度
				tabIndex:1,//tab索引
				tabBars:[
					{name:"关注",id:"guanzhu"},
					{name:"话题",id:"huati"}
				],
				topic:{
					swiper:[
						{src:"/static/demo/banner1.jpg"},
						{src:"/static/demo/banner2.jpg"},
						{src:"/static/demo/banner3.jpg"}
					],
					nav:[
						{name:"最新"},
						{name:"游戏"},
						{name:"打开"},
						{name:"情感"},
						{name:"故事"},
						{name:"喜爱"},
					]
				},
				guanzhu:{
					loadtext:"上拉加载更多",
					list:[
						// 文字
						{
							userpic:"../../static/demo/userpic/2.jpg",
							username:"哈哈",
							sex:1, //0 男 1 女
							age:25,
							isguanzhu:false,
							title:"我是标题",
							titlepic:"",
							video:false,
							share:false,
							path:"深圳 龙岗",
							sharenum:20,
							commentnum:30,
							goodnum:20
						},
						// 图文
						{
							userpic:"../../static/demo/userpic/1.jpg",
							username:"哈哈",
							sex:0, //0 男 1 女
							age:25,
							isguanzhu:false,
							title:"我是标题",
							titlepic:"../../static/demo/datapic/13.jpg",
							video:false,
							share:false,
							path:"深圳 龙岗",
							sharenum:20,
							commentnum:30,
							goodnum:20
						},
						// 视频
						{
							userpic:"../../static/demo/userpic/12.jpg",
							username:"哈哈",
							sex:1, //0 男 1 女
							age:25,
							isguanzhu:false,
							title:"我是标题",
							titlepic:"../../static/demo/datapic/13.jpg",
							video:{
								looknum:"20w",
								long:"2:47"
							},
							share:false,
							path:"深圳 龙岗",
							sharenum:20,
							commentnum:30,
							goodnum:20
						},
						// 分享
						{
							userpic:"../../static/demo/userpic/12.jpg",
							username:"哈哈",
							sex:0, //0 男 1 女
							age:25,
							isguanzhu:false,
							title:"我是标题",
							titlepic:"",
							video:false,
							share:{
								title:"我是分享的标题",
								titlepic:"../../static/demo/datapic/14.jpg"
							},
							path:"深圳 龙岗",
							sharenum:20,
							commentnum:30,
							goodnum:20
						},
					]
				},
			}
		},
		onLoad() {
			uni.getSystemInfo({
				//动态拿到手机机型高度
				success:(res)=>{
					let height = res.windowHeight-uni.upx2px(100)
					this.swiperheight = height;
				}
			})
		},
		components:{
			newsNavBar,
			commonList,
			loadMore,
			topicNav
		},
		methods: {
			//点击切换
			changTab(index){
				this.tabIndex = index;
			},
			//滑动切换
			tabChange(e){
				this.tabIndex = e.detail.current;
			},
			loadmore(){
				//上拉加载
				if(this.guanzhu.loadtext !="上拉加载更多"){return}
				//修改状态
				this.guanzhu.loadtext="加载中..."
				//获取数据
				setTimeout(()=>{
					let obj = {
						userpic:"../../static/demo/userpic/12.jpg",
						username:"哈哈",
						sex:0, //0 男 1 女
						age:25,
						isguanzhu:false,
						title:"我是标题",
						titlepic:"../../static/demo/datapic/13.jpg",
						video:false,
						share:false,
						path:"深圳 龙岗",
						sharenum:20,
						commentnum:30,
						goodnum:20
					};
					this.guanzhu.list.push(obj);
					this.guanzhu.loadtext = "上拉加载更多";
				},1000)
				
			}
		}
	}
</script>

<style>
	.search-input{
		padding: 20upx;
	}
	.search-input input{
		background: #F4F4F4;
		border-radius: 10upx;
	}
	.topic-search{
		display: flex;
		justify-content: center;
		font-size: 27upx;
	}
	.topic-swiper{
		padding: 0 20upx 20upx 20upx;
	}
	.topic-swiper image{
		width: 100%;
		border-radius: 10upx;
	}
	.topic-new{
		padding: 20upx;
	}
	.topic-new>view:first-child{
		padding-bottom: 10upx;
		font-size: 32upx;
		
	}
	.topic-list{
		padding: 10upx 0;
		border-bottom: 1upx solid #EEEEEE;
	}
	.topic-list image {
		width: 150upx;
		height: 150upx;
		border-radius: 10upx;
		margin-right: 10upx;
	}
	.topic-list>view>view{
		color: #A4A4A4;
	}
	.topic-list>view>view:first-child{
		color: #333333;
		font-size: 32upx;
	}
</style>
