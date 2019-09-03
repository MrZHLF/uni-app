<template>
	<view class="body">
		
		<!-- 操作菜单 -->
		<paperLeftPopup 
			:show="show"
			@hide="hidepopup"
			@addfriend="addfriend"
			@clear="clear"
		>
		</paperLeftPopup>
		<!-- 小纸条列表 -->
		<block v-for="(item,index) in list" :key="index">
			<paperList :item="item" :index="index"></paperList>
		</block>
		<!-- 上拉加载 -->
		<loadMore :loadtext="loadtext"></loadMore>
	</view>
</template>

<script>
	
	import paperLeftPopup from '../../components/paper/paper-left-popup'
	import paperList from '../../components/paper/paper-list'
	import loadMore from "../../components/common/load-more";
	export default {
		data() {
			return {
				show:false,//是否显示菜单
				loadtext:"上拉加载更多",
				list:[
						{
							userpic:"../../static/demo/userpic/1.jpg",
							username:"昵称",
							time:"10:21",
							data:"我是信息",
							noreadnum:2
						},
						{
							userpic:"../../static/demo/userpic/2.jpg",
							username:"昵称",
							time:"10:21",
							data:"我是信息",
							noreadnum:0
						},
						{
							userpic:"../../static/demo/userpic/3.jpg",
							username:"昵称",
							time:"10:21",
							data:"我是信息",
							noreadnum:0
						},
						{
							userpic:"../../static/demo/userpic/4.jpg",
							username:"昵称",
							time:"10:21",
							data:"我是信息",
							noreadnum:11
						},
						{
							userpic:"../../static/demo/userpic/5.jpg",
							username:"昵称",
							time:"10:21",
							data:"我是信息",
							noreadnum:2
						},
						{
							userpic:"../../static/demo/userpic/6.jpg",
							username:"昵称",
							time:"10:21",
							data:"我是信息",
							noreadnum:0
						},
						{
							userpic:"../../static/demo/userpic/7.jpg",
							username:"昵称",
							time:"10:21",
							data:"我是信息",
							noreadnum:0
						},
						{
							userpic:"../../static/demo/userpic/8.jpg",
							username:"昵称",
							time:"10:21",
							data:"我是信息",
							noreadnum:11
						}
					]
			}
		},
		components:{
			paperList,
			loadMore,
			paperLeftPopup
		},
		onPullDownRefresh() {
			this.getdata()
		},
		onReachBottom() {
			//上拉加载更多
			this.loadmore()
		},
		// 监听原生点击方法
		onNavigationBarButtonTap(e) {
			switch (e.index){
				case 0:
				uni.navigateTo({
					url:'../user-list/user-list'
				})
				this.hidepopup()
					break;
				case 1:
				this.showpopup()
					break;
			}
		},
		methods: {
			// 操作菜单
			addfriend(){
				// 加糗友
				this.hidepopup()
			},
			clear(){
				// 清缓存
				this.hidepopup()
			},
			hidepopup(){
				this.show = false;
			},
			showpopup(){
				this.show = true;
			},
			getdata(){
				// 开启下拉刷新
				setTimeout(() =>{
					let arr = [
						{
							userpic:"../../static/demo/userpic/11.jpg",
							username:"昵称111",
							time:"10:21",
							data:"我是信息111",
							noreadnum:2
						},
						{
							userpic:"../../static/demo/userpic/2.jpg",
							username:"昵称",
							time:"10:21",
							data:"我是信息",
							noreadnum:0
						},
						{
							userpic:"../../static/demo/userpic/3.jpg",
							username:"昵称",
							time:"10:21",
							data:"我是信息",
							noreadnum:0
						},
						{
							userpic:"../../static/demo/userpic/4.jpg",
							username:"昵称",
							time:"10:21",
							data:"我是信息",
							noreadnum:11
						},
						{
							userpic:"../../static/demo/userpic/5.jpg",
							username:"昵称",
							time:"10:21",
							data:"我是信息",
							noreadnum:2
						},
						{
							userpic:"../../static/demo/userpic/6.jpg",
							username:"昵称",
							time:"10:21",
							data:"我是信息",
							noreadnum:0
						},
						{
							userpic:"../../static/demo/userpic/7.jpg",
							username:"昵称",
							time:"10:21",
							data:"我是信息",
							noreadnum:0
						},
						{
							userpic:"../../static/demo/userpic/8.jpg",
							username:"昵称",
							time:"10:21",
							data:"我是信息",
							noreadnum:11
						}
					]
					this.list =arr;
					uni.stopPullDownRefresh()
				},2000)
			},
			loadmore(){
				// 上拉加载更多
				if(this.loadtext != '上拉加载更多') {return}
				this.loadtext = '加载中...'
				setTimeout(()=>{
					let obj ={
						userpic:"../../static/demo/userpic/18.jpg",
						username:"上拉加载",
						time:"10:21",
						data:"我是信息111",
						noreadnum:20
					};
					this.list.push(obj)
					this.loadtext == '上拉加载更多'
				},1000)
			}
		}
	}
</script>

<style>
	.body{
		padding: 0 20upx;
	}
</style>
