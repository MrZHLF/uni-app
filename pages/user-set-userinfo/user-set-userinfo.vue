<template>
	<view class="body">
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>头像</view>
			<view class="u-f-ac" @tap="changeimg">
				<image :src="userpic" mode="aspectFill" lazy-load></image>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>

		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>昵称</view>
			<view class="u-f-ac">
				<input type="text" v-model="username" />
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>

		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>性别</view>
			<view class="u-f-ac" @tap="changOne('sex')">
				<view>{{ sex }}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>

		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>生日</view>
			<picker mode="date" :value="birthday" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="u-f-ac">
					<view>{{birthday}}</view>
					<view class="icon iconfont icon-bianji1"></view>
				</view>
			</picker>
		</view>

		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>情感</view>
			<view class="u-f-ac" @tap="changOne('qg')">
				<view>{{ qg }}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>

		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>职业</view>
			<view class="u-f-ac" @tap="changOne('job')">
				<view>{{ job }}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>

		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>家乡</view>
			<view class="u-f-ac" @tap="showMulLinkageThreePicker">
				<view>{{pickerText}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>

		<button type="primary" class="user-set-btn" @tap="submit">完成</button>
		
		<mpvue-city-picker themeColor="#007AFF" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		@onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
let sex = ['不限','男','女'];
let qg = ['秘密','未婚','已婚'];
let job=['秘密','IT','老师','医生']
import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
export default {
	data() {
		return {
			userpic:"../../static/demo/userpic/11.jpg",//头像
			username:"哈哈",//名称
			sex:"不限",//性别
			qg:"未婚",//情感
			job:"IT",//职业
			birthday:"2018-9-9",
			cityPickerValueDefault: [0, 0, 1],
			pickerText: '河南-郑州-金水区',
		}
	},
	components:{
		mpvueCityPicker
	},
	onBackPress() {
	  if (this.$refs.mpvueCityPicker.showPicker) {
	  	this.$refs.mpvueCityPicker.pickerCancel();
	    return true;
	  }
	},
	onUnload() {
		if (this.$refs.mpvueCityPicker.showPicker) {
			this.$refs.mpvueCityPicker.pickerCancel()
		}
	},
	computed: {
		startDate() {
			return this.getDate('start');
		},
		endDate() {
			return this.getDate('end');
		}
	},
	methods: {
		// 三级联动选择
		showMulLinkageThreePicker() {
			this.$refs.mpvueCityPicker.show()
		},
		onConfirm(e) {
			//城市
			this.pickerText = e.label
		},
		bindDateChange(e){
			//修改生日
			this.birthday = e.target.value
		},
		changeimg(){
			//修改头像
			uni.chooseImage({
				count:1,
				sizeType:['compressed'],
				success:(res)=> {
					this.userpic=res.tempFilePaths;
				}
			})
		},
		changOne(val){
			//单列选择
			let arr =[];
			switch(val){
				case 'sex':
					arr=sex;
					break;
				case 'qg':
					arr=qg;
					break;
				case 'job':
					arr=job;
					break;
			}
			uni.showActionSheet({
				itemList: arr,
				success: res => {
					switch (val){
						case 'sex':
						this.sex=arr[res.tapIndex];
							break;
						case 'qg':
						this.qg=arr[res.tapIndex];
							break;
						case 'job':
						this.job=arr[res.tapIndex];
							break;
					}
				},
			});
		},
		submit(){

		},
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			if (type === 'start') {
				year = year - 60;
			} else if (type === 'end') {
				year = year + 2;
			}
			month = month > 9 ? month : '0' + month;;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		}
	}
}
</script>

<style>
@import '../../common/form.css';
.user-set-userinfo-list {
	padding: 20upx;
	border-bottom: 1px solid #f4f4f4;
}
.user-set-userinfo-list > view:first-child {
	font-size: 32upx;
	font-weight: bold;
	color: #9b9b9b;
}
.user-set-userinfo-list > view:last-child > image {
	width: 80upx;
	height: 80upx;
	border-radius: 100%;
}
.user-set-userinfo-list > view:last-child > input {
	text-align: right;
}
.user-set-userinfo-list > view:last-child > view:last-of-type {
	margin-left: 20upx;
	color: #9b9b9b;
}
</style>
