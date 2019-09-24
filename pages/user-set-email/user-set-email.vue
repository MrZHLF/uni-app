<template>
	<view class="body"> 
		<input type="text"  class="uni-input common-input" placeholder="输入需要绑定的邮箱" v-model="email" />
		<input type="text" password class="uni-input common-input" placeholder="输入密码" v-model="password" />
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
				email:"",
				password:"",
				disabled:true,
				loading:false
			}
		},
		watch:{
			email(val){
				this.chang();
			},
			password(val){
				this.chang();
			}
		},
		methods: {
			// 监听输入框
			chang(){
				if(this.email && this.password) {
					this.disabled = false;
					return;
				}
				this.disabled = true;
			},
			// 验证密码
			check(){
				if(!this.email || this.email == ''){
					uni.showToast({
						title:"邮箱不能为空",
						icon:"none"
					})
					return false
				}
				
				
				// 验证邮箱格式
				let ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				if(!ePattern.test(this.email)) {
					uni.showToast({
						title:"请输入正确邮箱格式",
						icon:"none"
					})
					return false;
				}
				
				if(!this.password || this.password == ''){
					uni.showToast({
						title:"密码不能为空",
						icon:"none"
					})
					return false;
				}
				return true;
			},
			submit(){
				//提交
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
