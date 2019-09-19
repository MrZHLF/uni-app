<template>
	<view class="user-chat-item">
		<view v-if="item.gstime" class="user-chat-time u-f-ajc">{{item.gstime}}</view>
		<view class="user-chat-list u-f" :class="{'user-chat-me':item.isme}">
			<!-- 好友 -->
			<image v-if="!item.isme" :src="item.userpic" mode="widthFix" lazy-load></image>
			<view class="user-chat-list-body">
				<!-- 文字 -->
				<text v-if="item.type=='text'">{{item.data}}</text>
				<!-- 图片 -->
				<image v-if="item.type=='img'" :src="item.data" mode="widthFix" lazy-load></image>
			</view>
			<!-- 我的 -->
			<image v-if="item.isme" :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style>
	.user-chat-list{
		padding: 20px 0;
	}
	.user-chat-list>image{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		flex-shrink: 0;
	}
	.user-chat-list-body{
		position: relative;
		background: #F4F4F4;
		padding: 25upx;
		margin-left: 20upx;
		margin-right: 100upx;
		border-radius: 20upx;
	}
	.user-chat-list-body:after{
		position: absolute;
		left: -30upx;
		top: 30upx;
		right: 0;
		content: "";
		width: 0;
		height: 0;
		border: 16upx solid  #F4F4F4;
		border-color: transparent #F4F4F4 transparent transparent;
	}
	.user-chat-me{
		justify-content: flex-end;
	}
	.user-chat-me .user-chat-list-body{
		margin-right: 20upx;
		margin-left: 100upx;
	}
	.user-chat-me .user-chat-list-body:after{
		left: auto;
		right: -30upx;
		border-color: transparent transparent transparent #F4F4F4;
	}
	.user-chat-list-body>image{
		max-width: 150upx;
		max-height: 200upx;
	}
	.user-chat-time{
		padding: 50upx 0;
		color: #a2a2a2;
		font-size: 24upx;
	}
</style>
