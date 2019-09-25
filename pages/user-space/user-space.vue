<template>
	<view>
		<!-- 背景图 -->
		<view class="user-space-head u-f-ajc">
			<image :src="getBgimg" mode="widthFix" lazy-load @tap="changBgImg"></image>
			<view class="user-space-head-info u-f-ajc u-f-column">
				<image :src="userinfo.userpic" mode="widthFix" lazy-load></image>
				<view class="user-space-margin u-f-ac">
					{{userinfo.username}}<tag-sex-age :sex="userinfo.sex" :age="userinfo.age"></tag-sex-age>
				</view>
				<view 
					class="icon iconfont user-space-head-btn user-space-margin" 
					:class="[userinfo.isguanzhu ? 'active' : 'icon-zengjia']" @tap="guanzhu">
					{{userinfo.isguanzhu?'已关注' :'关注'}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from "../../components/common/tag-sex-age.vue";
	export default {
		components:{
			tagSexAge
		},
		data() {
			return {
				userinfo:{
					bgimg:2,
					userpic:"../../static/demo/userpic/12.jpg",//头像
					username:"昵称",//名字
					sex:0, //性别 0男 1女
					age:20,//年龄
					isguanzhu:false, //关注
				}
			}
		},
		computed:{
			getBgimg(){
				return "../../static/bgimg/"+this.userinfo.bgimg+".jpg";
			}
		},
		methods: {
			changBgImg(){
				let no = parseInt(this.userinfo.bgimg);
				this.userinfo.bgimg = no < 4 ? ++no : 1;
				// if(no < 4){
				// 	no++
				// } else {
				// 	no=1
				// }
				
			},
			guanzhu(){
				//关注
				this.userinfo.isguanzhu = !this.userinfo.isguanzhu;
			}
		}
	}
</script>

<style>
.user-space-margin{
	margin: 15upx 0;
}
.user-space-head{
	position: relative;
	height: 500upx;
	overflow: hidden;
}
.user-space-head>image{
	width: 100%;
}
.user-space-head-info{
	position: absolute;
	top: 150upx;
}
.user-space-head-info>image{
	width: 150upx;
	height: 150upx;
	border-radius: 100%;
}
.user-space-head-info>view:first-of-type{
	color: #FFFFFF;
	font-size: 35upx;
	font-weight: bold;
	text-shadow: 2upx 2upx 10upx #333333;
}
.user-space-head-btn{
	background: #FFE933;
	color: #333333;
	border: 1px solid #FFE933;
	padding: 0 15upx;
	border-radius: 10upx;
	font-size: 28upx;
}
.active{
	background: none;
	color: #FFFFFF;
	border: 1px solid #FFFFFF;
}
</style>
