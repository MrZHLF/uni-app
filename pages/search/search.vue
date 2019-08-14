<template>
	<view>
		搜索页面
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap(e){
			// 监听原生标题导航按钮事件
			if(e.index==0){
				uni.navigateBack({
					delta:1
				})
			}
		},
		onNavigationBarSearchInputChanged(e){
			// 监听搜索框文本变化
			console.log(JSON.stringify(e.text),'监听搜索框文本变化')
		},
		onNavigationBarSearchInputConfirmed(e){
			// 监听点击搜索按钮事件
			console.log(JSON.stringify(e.text),'监听点击搜索按钮事件')
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
