<template>
	<view>
		<!-- 背景图 -->
		<user-space-head :userinfo="userinfo"></user-space-head>
		<!-- 统计 -->
		<view class="user-space-data">
			<home-data :homedata="spacedata"></home-data>
		</view>
		<view style="height: 20upx; background: #F4F4F4;"></view>
		<!-- tab -->
		<!-- tab切换 -->
		<swiperTabHead 
			:tabBars="tabBars" 
			:tabIndex="tabIndex" 
			@tabtap="tabtap" 
			scrollStyle="border-bottom:0;"
			scrollItemStyle="width:33.33%"
			></swiperTabHead>
		
		<block v-for="(item,index) in tablist" :key="index">
				<!-- 主页	 -->
			<template v-if="tabIndex == 0">
				<user-space-userinfo :userinfo="userinfo"></user-space-userinfo>
			</template>
			<template v-if="tabIndex==index">
				<block v-for="(list,listIndex) in item.list" :key="listIndex">
					<commonList :item="list" :index="listIndex"></commonList>
				</block>
				<!-- 上拉加载 -->
				<loadMore :loadtext="item.loadtext"></loadMore>
			</template>
		</block>
		<!-- 操作菜单 -->
		<user-space-popup 
			:show="show"
			@hide="togleShow"
			@lahei="lahei"
			@beizhu="beizhu"
		></user-space-popup>
	</view>
</template>

<script>
	import userSpaceHead from "../../components/user-space/user-space-head.vue";
	import userSpaceUserinfo from "../../components/user-space/user-space-userinfo.vue";
	import userSpacePopup from "../../components/user-space/user-space-popup.vue";
	import homeData from "../../components/home/home-data.vue";
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import commonList from "../../components/common/common-list.vue";
	import loadMore from "../../components/common/load-more.vue";
	
	export default {
		components:{
			userSpaceHead,
			homeData,
			swiperTabHead,
			userSpaceUserinfo,
			commonList,
			loadMore,
			userSpacePopup
		},
		data() {
			return {
				show:false,//是否显示蒙版
				userinfo:{
					bgimg:1,
					userpic:"../../static/demo/userpic/12.jpg",//头像
					username:"昵称",//名字
					sex:0, //性别 0男 1女
					age:20,//年龄
					isguanzhu:false, //关注
					regtime:"2019-04-11",//糗龄
					id:1213,//糗百科ID
					birthday:"1987-02-07",//星座
					job:"IT",//职业
					path:"广东广州",//故乡
					qg:"已婚"//情感状态
				},
				spacedata:[
					{ name:"获赞", num:"10k" },
					{ name:"关注", num:11 },
					{ name:"粉丝", num:12 },
				],
				tabIndex:0,
				tabBars:[
					{ name:"主页",id:"zhuye" },
					{ name:"糗事",id:"qiushi" },
					{ name:"动态",id:"dongtai" },
				],
				tablist:[ {},
					{
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
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							// 文字
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"动态",
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
						]
					}
				]
			}
		},
		// 上拉触底事件
		onReachBottom(){
			// 上拉加载
			this.loadmore();
		},
		onNavigationBarButtonTap(e) {
			if(e.index == 0){
				this.togleShow()
			}
		},
		methods: {
			// 操作菜单显示和隐藏
			togleShow(){
				this.show = !this.show;
			},
			lahei(){
				// 拉黑
				this.togleShow()
			},
			beizhu(){
				// 备注
				this.togleShow()
			},
			tabtap(index){
				this.tabIndex = index;
			},
			// 上拉加载更多
			loadmore(){
				if(this.tablist[this.tabIndex].loadtext!="上拉加载更多"){ return; }
				// 修改状态
				this.tablist[this.tabIndex].loadtext="加载中...";
				// 获取数据
				setTimeout(()=> {
					//获取完成
					let obj={
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
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].loadtext="上拉加载更多";
				}, 1000);
				//this.tablist[this.tabIndex].loadtext="没有更多数据了";
			},
		}
	}
</script>

<style>
.user-space-margin{
	margin: 15upx 0;
}

.user-space-data{
	background: #FFFFFF;
	position: relative;
	z-index: 10;
	border-top-left-radius: 20upx;
	border-top-right-radius: 20upx;
	margin-top: -15upx;
}
</style>
