<template>
	<view>
		<!-- 操作菜单 -->
		<view class="pape-left-popup-mask" v-show="show" @tap="hidepopup"></view>
		<view class="pape-left-popup" v-show="show">
			<view class="u-f-ac" hover-class="pape-left-popup-h" @tap="lahei">
				<view class="icon iconfont icon-sousuo"></view>
				拉黑
			</view>
			<view class="u-f-ac" hover-class="pape-left-popup-h" @tap="beizhu">
				<view class="icon iconfont icon-qingchu"></view>
				备注
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			show:Boolean
		},
		methods:{
			hidepopup(){
				this.$emit('hide')
			},
			lahei(){
				this.$emit('lahei')
			},
			beizhu(){
				this.$emit('beizhu')
			}
		}
	}
</script>

<style scoped>
	.pape-left-popup-mask{
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 1999;
	}
	.pape-left-popup{
		position: fixed;
		right: 0;
		top: 100upx;
		background: #FFFFFF;
		z-index: 2000;
		width: 55%;
		box-shadow: 1upx 1upx 20upx 2upx #CCCCCC;
		/* #ifdef H5 */
			top: 100upx;
		/* #endif */
	}
	.pape-left-popup>view{
		padding: 20upx;
		font-size: 35upx;
		
	}
	.pape-left-popup>view>view{
		margin-right: 10upx;
		font-weight: bold;
	}
	.pape-left-popup-h{
		background: #EEEEEE;
	}
</style>
