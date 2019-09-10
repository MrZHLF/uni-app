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
		<!-- <block v-for="(item,index) in list" :key="index">
			<userList :item="item" :index="index"></userList>
		</block> -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in newslist" :key="index">
					<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
						<template v-if="items.list.length > 0">
							<!-- 图文列表 -->
							<block v-for="(item,index1) in items.list" :key="index1">
								<userList :item="item" :index="index1"></userList>
							</block>
							<!-- 上拉加载更多 -->
							<loadMore :loadtext="items.loadtext"></loadMore>
						</template>
						<template v-else>
							<!-- 无内容显示 -->
							<view class="nothing u-f-ajc animated fadeIn">
								<image src="/static/common/nothing.png" mode="widthFix"></image>
							</view>
							<noThing></noThing>
						</template>
						
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import userList from "../../components/user-list/user-list";
	import loadMore from "../../components/common/load-more"
	import noThing from "../../components/common/no-thing"
	export default {
		components:{
			swiperTabHead,
			userList,
			loadMore,
			noThing
		},
		data() {
			return {
				swiperheight:500,//高度
				tabIndex:0,// 选中的
				tabBars:[
					{ name:"互关",id:"huguan",num:10 },
					{ name:"关注",id:"guanzhu",num:20  },
					{ name:"粉丝",id:"fensi",num:30  }
				],
				newslist:[
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"../../static/demo/userpic/1.jpg",
								username:"昵称",
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:"../../static/demo/userpic/2.jpg",
								username:"昵称",
								age:21,
								sex:1,
								isguanzhu:false
							},
							{
								userpic:"../../static/demo/userpic/9.jpg",
								username:"昵称",
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:"../../static/demo/userpic/10.jpg",
								username:"昵称",
								age:21,
								sex:1,
								isguanzhu:false
							},
							{
								userpic:"../../static/demo/userpic/14.jpg",
								username:"昵称",
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:"../../static/demo/userpic/15.jpg",
								username:"昵称",
								age:21,
								sex:1,
								isguanzhu:false
							},
							{
								userpic:"../../static/demo/userpic/16.jpg",
								username:"昵称",
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:"../../static/demo/userpic/17.jpg",
								username:"昵称",
								age:21,
								sex:1,
								isguanzhu:false
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"../../static/demo/userpic/3.jpg",
								username:"昵称",
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:"../../static/demo/userpic/4.jpg",
								username:"昵称",
								age:21,
								sex:1,
								isguanzhu:false
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"../../static/demo/userpic/5.jpg",
								username:"昵称",
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:"../../static/demo/userpic/6.jpg",
								username:"昵称",
								age:21,
								sex:1,
								isguanzhu:false
							}
						]
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
		onLoad() {
			uni.getSystemInfo({
				success:(res)=>{
					let height = res.windowHeight-uni.upx2px(100)
					this.swiperheight = height;
				}
			})
		},
		methods: {
			//滑动切换导航
			tabChange(e){
				this.tabIndex = e.detail.current;
			},
			//接受子组件传过来的值点击切换导航
			tabtap(index){
				this.tabIndex = index;
			},
			loadmore(index){
				if(this.newslist[index].loadtext !="上拉加载更多"){return}
				//修改状态
				this.newslist[index].loadtext="加载中..."
				//获取数据
				setTimeout(()=>{
					let obj = {
						userpic:"../../static/demo/userpic/12.jpg",
						username:"加载",
						age:22,
						sex:1,
						isguanzhu:false
					};
					this.newslist[index].list.push(obj);
					this.newslist[index].loadtext = "上拉加载更多";
				},1000)
			}
		}
	}
</script>

<style>

</style>
