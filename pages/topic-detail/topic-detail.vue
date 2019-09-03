<template>
	<view>
		<topicInfo :item="topicInfo"></topicInfo>
		<!-- tab切换 -->
		<swiperTabHead 
			:tabBars="tabBars" 
			:tabIndex="tabIndex" 
			@tabtap="tabtap" 
			scrollStyle="border-bottom:0;"
			scrollItemStyle="width:50%"
			></swiperTabHead>
			
			<!-- 列表 -->
			<view class="topic-detail-info">
				<block v-for="(item,index) in tablist" :key="index">
					<template v-if="tabIndex==index">
						<block v-for="(list,listIndex) in item.list" :key="listIndex">
							<commonList :item="list" :index="listIndex"></commonList>
						</block>
						<!-- 上拉加载 -->
						<loadMore :loadtext="item.loadtext"></loadMore>
					</template>
				</block>
			</view>
	</view>
</template>

<script>
	import topicInfo from '../../components/topic/topic-info.vue';
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import commonList from "../../components/common/common-list";
	import loadMore from "../../components/common/load-more";
	export default {
		data() {
			return {
				topicInfo:{
					titlepic:"/static/demo/topicpic/13.jpeg",
					title:"忆往事，敬余生",
					desc:"我是描述",
					totalnum:1000,
					todaynum:1000,
				},
				tabIndex:0,// 选中的
				tabBars:[
					{ name:"默认",id:"moren" },
					{ name:"最新",id:"zuixin" }
				],	
				tablist:[
					{
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
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							// 文字
							{
								userpic:"../../static/demo/userpic/8.jpg",
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
								userpic:"../../static/demo/userpic/9.jpg",
								username:"哈哈",
								sex:0, //0 男 1 女
								age:25,
								isguanzhu:false,
								title:"我是标题",
								titlepic:"../../static/demo/datapic/10.jpg",
								video:false,
								share:false,
								path:"深圳 龙岗",
								sharenum:20,
								commentnum:30,
								goodnum:20
							},
							// 视频
							{
								userpic:"../../static/demo/userpic/18.jpg",
								username:"哈哈",
								sex:1, //0 男 1 女
								age:25,
								isguanzhu:false,
								title:"我是标题",
								titlepic:"../../static/demo/datapic/16.jpg",
								video:{
									looknum:"20w",
									long:"2:47"
								},
								share:false,
								path:"深圳 龙岗",
								sharenum:20,
								commentnum:30,
								goodnum:20
							}
						]
					}
				]
			}
		},
		components:{
			topicInfo,
			swiperTabHead,
			commonList,
			loadMore
		},
		onPullDownRefresh() {
			// 下拉刷新
			this.getdata()
		},
		onReachBottom() {
			//上拉
			this.loadmore();
		},
		methods: {
			getdata(){
				//下拉刷新功能
				setTimeout(()=>{
					let arr = [
						{
							userpic:"../../static/demo/userpic/8.jpg",
							username:"刷新",
							sex:0, //0 男 1 女
							age:20,
							isguanzhu:false,
							title:"我是刷新",
							titlepic:"",
							video:false,
							share:false,
							path:"深圳 龙岗",
							sharenum:20,
							commentnum:30,
							goodnum:20
						}
					];
					this.tablist[this.tabIndex].list=arr;
					uni.stopPullDownRefresh()
				},2000)
			},
			//接受子组件传过来的值点击切换导航
			tabtap(index){
				this.tabIndex = index;
			},
			loadmore(){
				//上拉加载
				if(this.tablist[this.tabIndex].loadtext !="上拉加载更多"){return}
				//修改状态
				this.tablist[this.tabIndex].loadtext="加载中..."
				//获取数据
				setTimeout(()=>{
					let obj = {
						userpic:"../../static/demo/userpic/16.jpg",
						username:"哈哈",
						sex:1, //0 男 1 女
						age:22,
						isguanzhu:false,
						title:"上拉加载",
						titlepic:"../../static/demo/datapic/15.jpg",
						video:false,
						share:false,
						path:"深圳 龙岗",
						sharenum:20,
						commentnum:30,
						goodnum:20
					};
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].loadtext = "上拉加载更多";
				},1000)
				
			}
		}
	}
</script>

<style>

</style>
