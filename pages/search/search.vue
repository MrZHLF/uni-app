<template>
	<view>
		<template v-if="list.length > 0">
			<block v-for="(item,index) in list" :key="index">
				<indx-list :item="item"  :index="index"></indx-list>
			</block>
			<!-- 上拉加载更多 -->
			<loadMore :loadtext="loadtext"></loadMore>
		</template>
		<template v-else-if="issearch && list.length < 1">
			<no-thing></no-thing>
		</template>
	</view>
</template>

<script>
	import indxList from '../../components/index/index-list.vue';
	import noThing from "../../components/common/no-thing"
	import loadMore from "../../components/common/load-more"
	export default {
		data() {
			return {
				issearch:false, //搜索是否有内容
				loadtext:"上拉加载更多",
				list:[],
				searchtext:"", 搜索内容
			}
		},
		components:{
			indxList,
			noThing,
			loadMore
		},
		onNavigationBarButtonTap(e){
			// 监听原生标题导航按钮取消事件
			if(e.index==0){
				uni.navigateBack({
					delta:1
				})
			}
		},
		onNavigationBarSearchInputChanged(e){
			// 监听搜索框文本变化
			console.log(JSON.stringify(e.text),'监听搜索框文本变化');
			this.searchtext = e.text;
		},
		onNavigationBarSearchInputConfirmed(e){
			// 监听点击搜索按钮事件
			console.log(JSON.stringify(e.text),'监听点击搜索按钮事件')
			if(this.searchtext){
				this.getdata()
			}
		},
		onReachBottom() {
			//上拉加载
			this.loadmore()
		},
		onPullDownRefresh() {
			this.getdata();
			uni.stopPullDownRefresh()
		},
		methods: {
			// 搜索
			getdata(){
				//请求服务器,返回数据
				uni.showLoading()
				setTimeout(() =>{
					let arr = [
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
					this.list = arr;
					uni.hideLoading();
					this.issearch = true;
				},1000)
			},
			//上拉加载
			loadmore(){
				if(this.loadtext !="上拉加载更多"){return}
				//修改状态
				this.loadtext="加载中..."
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
					this.list.push(obj);
					this.loadtext = "上拉加载更多";
				},1000)
			},
			
		}
	}
</script>

<style>

</style>
