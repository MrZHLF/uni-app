<template>
	<view>
		<!-- 顶部导航 -->
		<swiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiperTabHead>
		
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in newslist" :key="index">
					<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
						<template v-if="items.list.length > 0">
							<!-- 话题列表 -->
							<view class="topic-view">
								<block v-for="(item,index1) in items.list" :key="index1">
									<topicList :item="item" :index="index1"></topicList>
								</block>
							</view>
							
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
	import noThing from "../../components/common/no-thing";
	import loadMore from "../../components/common/load-more";
	import topicList from "../../components/news/topic-list";
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
								titlepic:"/static/demo/topicpic/1.jpeg",
								title:"话题名称1",
								desc:"我是话题描述1",
								totalnum:50,
								todaynum:10
							},
							{
								titlepic:"/static/demo/topicpic/2.jpeg",
								title:"话题名称1",
								desc:"我是话题描述1",
								totalnum:50,
								todaynum:10
							},
							{
								titlepic:"/static/demo/topicpic/3.jpeg",
								title:"话题名称1",
								desc:"我是话题描述1",
								totalnum:50,
								todaynum:10
							},
							{
								titlepic:"/static/demo/topicpic/4.jpeg",
								title:"话题名称1",
								desc:"我是话题描述1",
								totalnum:50,
								todaynum:10
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								titlepic:"/static/demo/topicpic/3.jpeg",
								title:"话题名称1",
								desc:"我是话题描述1",
								totalnum:50,
								todaynum:10
							},
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[{
								titlepic:"/static/demo/topicpic/10.jpeg",
								title:"话题名称5",
								desc:"我是话题描述1",
								totalnum:50,
								todaynum:10
							},
							{
								titlepic:"/static/demo/topicpic/8.jpeg",
								title:"话题名称1",
								desc:"我是话题描述1",
								totalnum:50,
								todaynum:10
							}]
					},
					{
						loadtext:"上拉加载更多",
						list:[]
					},
					{
						loadtext:"上拉加载更多",
						list:[]
					},
					{
						loadtext:"上拉加载更多",
						list:[]
					}
				],
			}
		},
		components:{
			swiperTabHead,
			noThing,
			loadMore,
			topicList
		},
		onLoad() {
			uni.getSystemInfo({
				success:(res)=>{
					let height = res.windowHeight-uni.upx2px(100)
					this.swiperheight = height;
				}
			})
		},
		methods:{
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
						titlepic:"/static/demo/topicpic/11.jpeg",
						title:"话题名称1",
						desc:"我是话题描述1",
						totalnum:50,
						todaynum:10
					};
					this.newslist[index].list.push(obj);
					this.newslist[index].loadtext = "上拉加载更多";
				},1000)
			}
		}
	}
</script>

<style>
.topic-view{
	padding: 0 20upx;
}
</style>
