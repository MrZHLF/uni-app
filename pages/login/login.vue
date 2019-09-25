<template>
	<view>
		<!-- 状态栏 -->
		<uni-status-bar bgcolor="#FFE933"></uni-status-bar>
		<!-- 关闭按钮 -->
		<view class="icon iconfont icon-guanbi" @tap="back"></view>
		<!-- 背景图 -->
		<image class="login-header" src="../../static/common/loginhead.png" mode="widthFix" lazy-load></image>
		<!-- 输入框 -->
		<view class="body">
			
			<template v-if="!status">
				<!-- 账号密码登录 -->
				<input type="text" class="uni-input common-input" placeholder="昵称/手机号/邮箱" v-model="username" />
				<view class="login-input-box">
					<input type="text" class="uni-input common-input forget-input" placeholder="请输入密码" v-model="password" />
					<view class="forget u-f-ajc login-font-color">忘记密码</view>
				</view>
			</template>
			
			<template v-else>
				<!-- 手机号验证码登录 -->
				<view class="login-input-box">
					<view class="phone u-f-ajc">+86</view>
					<input type="text" class="uni-input common-input phone-input" placeholder="请输入手机号码" v-model="phone" />
				</view>
				
				<view class="login-input-box">
					<input type="text" class="uni-input common-input forget-input" placeholder="请输入验证码" v-model="checknum" />
					<view class="forget u-f-ajc login-font-color yanzhengma" @tap="getChangeNum">
						<view class="u-f-ajc">{{!codetime ? '获取验证码' : codetime+'  s'}}</view>
					</view>
				</view>
			</template>
			
			
			
			
			<button type="primary" 
				class="user-set-btn" 
				@tap="submit" 
				:class="{'user-set-btn-disable': disabled}" 
				:loading="loading"
				:disabled="disabled">登录</button>
			
		</view>
		
		<!-- 登录状态切换 -->
		<view class="login-status u-f-ajc login-padding login-font-color" @tap="changeStatus">
			{{status ? '账号密码登录' : '验证码登录'}}<view class="icon iconfont icon-jinru login-font-color"></view>
		</view>
		
		<!-- 第三方登录 -->
		<view class="other-login-title u-f-ajc login-padding login-font-color">第三方登录</view>
		
		<other-login></other-login>
		
		<!-- 协议 -->
		<view class="login-rule u-f-ajc login-padding login-font-color">
			注册即代表统一 <view>《xxx协议》</view>
		</view>
		
	</view>
</template>

<script>
	import uniStatusBar from "../../components/uni-status-bar/uni-status-bar.vue";
	import otherLogin from "../../components/home/other-login.vue";
	export default {
		data() {
			return {
				disabled:true,
				loading:false,
				status:false, //false代表账号密码登录,true验证码登录
				username:"", //用户名
				password:"",//密码
				phone:"",//手机号
				checknum:"",//验证码
				codetime:0,
			}
		},
		components:{
			uniStatusBar,
			otherLogin
		},
		watch:{
			username(){
				this.OnBtnChange()
			},
			password(){
				this.OnBtnChange()
			},
			phone(){
				this.OnBtnChange()
			},
			checknum(){
				this.OnBtnChange()
			}
		},
		methods: {
			// 验证手机号码
			isPhone(){
				let mPattern = /^1[34578]\d{9}$/;
				return mPattern.test(this.phone)
			},
			getChangeNum(){
				//获取验证码
				if(this.codetime > 0){
					return;
				}
				//手机号校验
				let mPattern = /^1[34578]\d{9}$/;
				if(!this.isPhone()){
					uni.showToast({
						title:" 请输入正确的手机号",
						icon:"none"
					});
					return;
				}
				//请求服务器
				this.codetime = 10;
				let time = setInterval(()=>{
					this.codetime--
					if(this.codetime < 1){
						clearInterval(time)
						this.codetime =0;
					}
				},1000)
			},
			//初始化表单
			initInput(){
				this.username= '';
				this.password='';
				this.phone='';
				this.checknum='';
			},
			//改变按钮状态
			OnBtnChange(){
				if((this.username && this.password) || (this.phone && this.checknum)){
					this.disabled = false;
					return;
				}
				this.disabled = true
			},
			// 返回上一步
			back(){
				console.log(12)
			},
			submit(){
				// 提交登录
				if(!this.status){
					// 账号密码登录
					if(!this.isPhone()){
						uni.showToast({
							title:" 请输入正确的手机号",
							icon:"none"
						});
						return;
					}
				} else {
					// 验证码登录
					
				}
			},
			changeStatus(){
				// 切换登录状态
				this.initInput()
				this.status  = !this.status
			}
		}
	}
</script>

<style>
@import "../../common/form.css";
.login-padding{
	padding:  20upx 0;
}
.login-font-color{
	color: #BBBBBB;
}
.icon-guanbi{
	position: fixed;
	top: 60upx;
	left: 30upx;
	font-size: 40upx;
	font-weight: bold;
	color: #332F0A;
	z-index: 9;
}
.login-header{
	width: 100%;
}
.other-login-title{
	position: relative;
}
.other-login-title:before,.other-login-title:after{
	content: "";
	position: absolute;
	width: 100upx;
	height: 1upx;
	background: #BBBBBB;
	top: 50%;
}
.other-login-title:before{
	left: 25%;
}
.other-login-title:after{
	right: 25%;
}
.login-input-box{
	position: relative;
}
.login-input-box .forget-input{
	padding-right: 150upx;
}
.login-input-box .forget,.login-input-box .phone{
	position: absolute;
	top: 0;
	height: 100%;
	z-index: 100;
}
.login-input-box .forget{
	width: 150upx;
	right: 0;
}
.login-input-box .phone{
	width: 100upx;
	left: 0;
	font-weight: bold;
}
.login-input-box .phone-input{
	padding-left: 100upx;
}
.yanzhengma view{
	background: #EEEEEE;
	border-radius: 10upx;
	font-size: 25upx;
	width: 150upx;
	height: 10upx 0;
}
</style>
