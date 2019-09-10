<template>
	<view>
		<!-- 输入框 -->
		<view class="user-chat-bottom u-f-ac">
			<input type="text" placeholder="文明发言" />
			<view class="icon iconfont icon-fabu"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.user-chat-bottom{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100upx;
	padding:  0 20upx;
	border-top:1upx solid ;
	background: #FFFFFF;
}
.user-chat-bottom>input{
	border-top:1upx solid ;
}
.user-chat-bottom>view{
	
}
</style>
