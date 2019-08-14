<template>
	<view>
		<!-- 顶部导航 -->
		<swiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiperTabHead>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in newslist" :key="index">
					<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
						<template v-if="items.list.length > 0">
							<!-- 图文列表 -->
							<block v-for="(item,index1) in items.list" :key="index1">
								<indexList :item="item" :index="index1"></indexList>
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
	import indexList from "../../components/index/index-list.vue";
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import loadMore from "../../components/common/load-more"
	import noThing from "../../components/common/no-thing"
	export default {
		data() {
			return {
				swiperheight:500,//高度
				tabIndex:0,// 选中的
				tabBars:[
					{ name:"关注",id:"guanzhu" },
					{ name:"推荐",id:"tuijian" },
					{ name:"体育",id:"tiyu" 	  },
					{ name:"热点",id:"redian"  },
					{ name:"财经",id:"caijing" },
					{ name:"娱乐",id:"yule"    },
				],	
				newslist:[
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"/static/demo/userpic/2.jpg",
								username:"昵称",
								isguanzhu:false,
								title:"我是标题1",
								type:"img", // img:图文,video:视频
								titlepic:"/static/demo/datapic/1.jpg",
								infonum:{
									index:0,//0:没有操作，1:顶,2:踩；
									dingnum:11,
									cainum:11,
								},
								commentnum:10,
								sharenum:10,
							},
							{
								userpic:"/static/demo/userpic/3.jpg",
								username:"昵称",
								isguanzhu:true,
								title:"我是标题2",
								type:"video", // img:图文,video:视频
								titlepic:"/static/demo/datapic/2.jpg",
								playnum:"20w",
								long:"2:47",
								infonum:{
									index:1,//0:没有操作，1:顶,2:踩；
									dingnum:11,
									cainum:11,
								},
								commentnum:10,
								sharenum:10,
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"/static/demo/userpic/4.jpg",
								username:"昵称",
								isguanzhu:false,
								title:"我是标题3",
								type:"img", // img:图文,video:视频
								titlepic:"/static/demo/datapic/3.jpg",
								infonum:{
									index:0,//0:没有操作，1:顶,2:踩；
									dingnum:11,
									cainum:11,
								},
								commentnum:10,
								sharenum:10,
							},
							{
								userpic:"/static/demo/userpic/5.jpg",
								username:"昵称",
								isguanzhu:true,
								title:"我是标题4",
								type:"video", // img:图文,video:视频
								titlepic:"/static/demo/datapic/4.jpg",
								playnum:"20w",
								long:"2:47",
								infonum:{
									index:1,//0:没有操作，1:顶,2:踩；
									dingnum:11,
									cainum:11,
								},
								commentnum:10,
								sharenum:10,
							},
							{
								userpic:"/static/demo/userpic/6.jpg",
								username:"昵称",
								isguanzhu:false,
								title:"我是标题5",
								type:"img", // img:图文,video:视频
								titlepic:"/static/demo/datapic/5.jpg",
								infonum:{
									index:0,//0:没有操作，1:顶,2:踩；
									dingnum:11,
									cainum:11,
								},
								commentnum:10,
								sharenum:10,
							},
							{
								userpic:"/static/demo/userpic/7.jpg",
								username:"昵称",
								isguanzhu:true,
								title:"我是标题6",
								type:"video", // img:图文,video:视频
								titlepic:"/static/demo/datapic/6.jpg",
								playnum:"20w",
								long:"2:47",
								infonum:{
									index:1,//0:没有操作，1:顶,2:踩；
									dingnum:11,
									cainum:11,
								},
								commentnum:10,
								sharenum:10,
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"/static/demo/userpic/8.jpg",
								username:"昵称",
								isguanzhu:false,
								title:"我是标题7",
								type:"img", // img:图文,video:视频
								titlepic:"/static/demo/datapic/7.jpg",
								infonum:{
									index:0,//0:没有操作，1:顶,2:踩；
									dingnum:11,
									cainum:11,
								},
								commentnum:10,
								sharenum:10,
							},
							{
								userpic:"/static/demo/userpic/9.jpg",
								username:"昵称",
								isguanzhu:true,
								title:"我是标题8",
								type:"video", // img:图文,video:视频
								titlepic:"/static/demo/datapic/8.jpg",
								playnum:"20w",
								long:"2:47",
								infonum:{
									index:1,//0:没有操作，1:顶,2:踩；
									dingnum:11,
									cainum:11,
								},
								commentnum:10,
								sharenum:10,
							},
							{
								userpic:"/static/demo/userpic/10.jpg",
								username:"昵称",
								isguanzhu:false,
								title:"我是标题9",
								type:"img", // img:图文,video:视频
								titlepic:"/static/demo/datapic/9.jpg",
								infonum:{
									index:0,//0:没有操作，1:顶,2:踩；
									dingnum:11,
									cainum:11,
								},
								commentnum:10,
								sharenum:10,
							},
							{
								userpic:"/static/demo/userpic/11.jpg",
								username:"昵称",
								isguanzhu:true,
								title:"我是标题10",
								type:"video", // img:图文,video:视频
								titlepic:"/static/demo/datapic/10.jpg",
								playnum:"20w",
								long:"2:47",
								infonum:{
									index:1,//0:没有操作，1:顶,2:踩；
									dingnum:11,
									cainum:11,
								},
								commentnum:10,
								sharenum:10,
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"/static/demo/userpic/1.jpg",
								username:"昵称",
								isguanzhu:true,
								title:"我是标题10",
								type:"video", // img:图文,video:视频
								titlepic:"/static/demo/datapic/11.jpg",
								playnum:"20w",
								long:"2:47",
								infonum:{
									index:1,//0:没有操作，1:顶,2:踩；
									dingnum:11,
									cainum:11,
								},
								commentnum:10,
								sharenum:10,
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"/static/demo/userpic/13.jpg",
								username:"昵称",
								isguanzhu:true,
								title:"我是标题13",
								type:"video", // img:图文,video:视频
								titlepic:"/static/demo/datapic/12.jpg",
								playnum:"20w",
								long:"2:47",
								infonum:{
									index:1,//0:没有操作，1:顶,2:踩；
									dingnum:11,
									cainum:11,
								},
								commentnum:10,
								sharenum:10,
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[]
					}
				],
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
		onNavigationBarSearchInputClicked(){
			//监听搜索框点击事件
			uni.navigateTo({
				url:"/pages/search/search"
			})
		},
		onNavigationBarButtonTap(e){
			// 监听原生标题导航按钮事件
			switch(e.index){
				case 1:
					uni.navigateTo({
						url:"/pages/add-input/add-input"
					})
					break;
			}
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
						userpic:"/static/demo/userpic/20.jpg",
						username:"张三",
						isguanzhu:false,
						title:"模拟数据",
						type:"img", // img:图文,video:视频
						titlepic:"/static/demo/datapic/30.jpg",
						infonum:{
							index:0,//0:没有操作，1:顶,2:踩；
							dingnum:11,
							cainum:11,
						},
						commentnum:10,
						sharenum:10,
					};
					this.newslist[index].list.push(obj);
					this.newslist[index].loadtext = "上拉加载更多";
				},1000)
			}
		},
		components:{
			indexList,
			swiperTabHead,
			loadMore,
			noThing
		}
	}
</script>

<style>
	
</style>
