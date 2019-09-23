<template>
	<view>
		<!-- 未登录 -->
		<view class="u-f-ajc">登录仿糗百科，体验更多功能</view>
		<!-- 第三方登录 -->
		<view class="other-login">
			<view class="icon iconfont icon-weixin"></view>
			<view class="icon iconfont icon-weixin"></view>
			<view class="icon iconfont icon-weixin"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				console.log("跳转设置页")
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
