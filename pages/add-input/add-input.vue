<template>
	<view>
		<!-- #ifndef MP-WEIXIN -->
			<uni-nav-bar :statusBar="true" rightText="发布" left-icon="back" @click-left="back" @click-right="submit">
				<view class="u-f-ajc" @tap="changelook">
					{{yinsi}}
					<view class="icon iconfont icon-xialazhankai"></view>
				</view>
			</uni-nav-bar>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
			<uni-nav-bar :statusBar="true" rightText="发布" @click-right="submit">
				<view class="u-f-ajc" @tap="changelook">
					{{yinsi}}
					<view class="icon iconfont icon-xialazhankai"></view>
				</view>
			</uni-nav-bar>
		<!-- #endif -->
		<!-- 多行输入框 -->
		<view class="uni-textarea">
			<textarea v-model="text" placeholder="不知道说啥" />
		</view>
		
		<!-- 多图上传 -->
		<uploudImages @uploud="uploud"></uploudImages>
		<!-- 弹出公告 -->
		<uni-popup :show="showpopup" position="middle" mode="fixed" @hidePopup="hidePopup">
			<view class="gonggao">
				<view class="u-f-ajc">
					<image src="../../static/common/addinput.png" mode="widthFix"></image>
				</view>
				<view>1.涉及黄色，政治，广告及骚扰信息</view>
				<view>2.涉及黄色，政治，广告及骚扰信息</view>
				<view>3.涉及黄色，政治，广告及骚扰信息</view>
				<view>4.涉及黄色，政治，广告及骚扰信息</view>
				<button type="default" @tap="hidePopup">朕知道了</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	
	let changelook = ['所有人可见', '仅自己可见'];
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar";
	import uploudImages from "../../components/common/uploud-images/uploud-images";
	import uniPopup from "../../components/uni-popup/uni-popup.vue";
	export default {
		data() {
			return {
				yinsi:"所有人可见",
				text:"", //文本框
				imageList:[], //图片存储
				showpopup:true, //弹出框
				isget:false, //是否保存
			}
		},
		methods: {
			back(){
				//返回
				uni.navigateBack({
					delta:1
				})
			},
			submit(){
				// 发布
				console.log('发布')
			},
			changelook(){
				// 隐私
				uni.showActionSheet({
				    itemList:changelook ,
				    success:(res) =>{
				        this.yinsi = changelook[res.tapIndex]
				    }
				});
			},
			uploud(arr){
				this.imageList= arr;
			},
			hidePopup(){
				//隐藏弹出框
				this.showpopup = false
			},
			baocun(){
				//是否保存草稿
				uni.showModal({
					content:"是否要保存草稿",
					cancelText:"不保存",
					confirmText:"保存",
					success:res=> {
						if(res.confirm){
							//保存
							
						} else {
							//不保存
						}
						this.isget = true
						uni.navigateBack({
							delta:1
						})
					}
				})
			}
		},
		onBackPress() {
			//是否有值
			if(!this.text && this.imageList.length < 1){return}
			// 监听用户返回
			if(!this.isget){
				this.baocun()
				return true
			}
			
		},
		components:{
			uniNavBar,
			uploudImages,
			uniPopup
		}
	}
</script>

<style>
.uni-textarea{
	border: 1upx solid #EEEEEE;
}
.gonggao{
	width: 500upx;
}
.gonggao image{
	width: 75%;
	margin-bottom: 20upx;
}
.gonggao button{
	margin-top: 20upx;
	background: #FFE934;
	color: #171606;
}
/* #ifdef MP-WEIXIN */
	.uni-status-bar{
		height: 0!important;
	}
/* #endif */
</style>
