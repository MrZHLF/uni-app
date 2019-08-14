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
						话题
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import newsNavBar from "../../components/news/news-nav-bar"
	import loadMore from "../../components/common/load-more"
	import commonList from "../../components/common/common-list"
	export default {
		data() {
			return {
				swiperheight:500,//屏幕高度
				tabIndex:0,//tab索引
				tabBars:[
					{name:"关注",id:"guanzhu"},
					{name:"话题",id:"huati"}
				],
				guanzhu:{
					loadtext:"上拉加载更多",
					list:[
						// 文字
						{
							userpic:"../../static/demo/userpic/12.jpg",
							username:"哈哈",
							sex:0, //0 男 1 女
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
						},
						// 视频
						{
							userpic:"../../static/demo/userpic/12.jpg",
							username:"哈哈",
							sex:0, //0 男 1 女
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
			loadMore
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
</style>
