<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<indexList :item="item" :index="index"></indexList>
		</block>
		
	</view>
</template>

<script>
	import indexList from "../../components/index/index-list/index-list.vue";
	export default {
		data() {
			return {
				list:[
					{
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称",
						isguanzhu:false,
						title:"我是标题",
						type:"img", // img:图文,video:视频
						titlepic:"../../static/demo/datapic/11.jpg",
						infonum:{
							index:0,//0:没有操作，1:顶,2:踩；
							dingnum:11,
							cainum:11,
						},
						commentnum:10,
						sharenum:10,
					},
					{
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称",
						isguanzhu:true,
						title:"我是标题",
						type:"video", // img:图文,video:视频
						titlepic:"../../static/demo/datapic/11.jpg",
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
			}
		},
		onLoad() {

		},
		methods: {

		},
		components:{
			indexList
		}
	}
</script>

<style>

</style>
