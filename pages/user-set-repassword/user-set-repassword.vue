<template>
	<view class="body"> 
		<input type="text" password  class="uni-input common-input" placeholder="输入旧密码" v-model="oldpassword" />
		<input type="text" password class="uni-input common-input" placeholder="输入新密码" v-model="newpassword" />
		<input type="text" password class="uni-input common-input" placeholder="输入确认密码" v-model="renewpassword" />
		<button type="primary" 
			class="user-set-btn" 
			@tap="submit" 
			:class="{'user-set-btn-disable': disabled}" 
			:loading="loading"
			:disabled="disabled">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldpassword:"", //旧密码
				newpassword:"",//新密码
				renewpassword:"",//确认密码
				disabled:true,
				loading:false
			}
		},
		watch:{
			oldpassword(val){
				this.chang();
			},
			newpassword(val){
				this.chang();
			},
			renewpassword(val){
				this.chang();
			}
		},
		methods: {
			// 监听输入框
			chang(){
				if(this.oldpassword && this.newpassword && this.renewpassword) {
					this.disabled = false;
					return;
				}
				this.disabled = true;
			},
			// 验证密码
			check(){
				if(!this.oldpassword || this.oldpassword == ''){
					uni.showToast({
						title:"旧密码不能为空",
						icon:"none"
					})
					return false
				}
				
				if(!this.newpassword || this.newpassword == ''){
					uni.showToast({
						title:"新密码不能为空",
						icon:"none"
					})
					return false;
				}
				
				if(!this.renewpassword || this.renewpassword == ''){
					uni.showToast({
						title:"确认密码不能为空",
						icon:"none"
					})
					return false;
				}
				
				if(this.newpassword !== this.renewpassword){
					uni.showToast({
						title:"两次密码不一致",
						icon:"none"
					})
					return false;
				}
				
				return true;
			},
			submit(){
				this.loading = true;
				this.disabled = true;
				if(!this.check()) {
					this.loading = false;
					this.disabled = false;
					return
				}
				
				uni.showToast({
					title:"验证通过",
					icon:"success",
					mask:false,
					duration:1500
				})
				this.disabled = false;
				this.loading = false;
			}
		}
	}
</script>

<style>
@import "../../common/form.css";
</style>
