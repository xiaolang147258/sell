<template>
	<div style="width: 100%;height: 19.2rem;background: #fafafa;position: absolute;top: 0;z-index: 99999999;">
		<div style="width: 100%;height: 1.68rem;background: white;">
			<img @click="logins" style="float: left;width: 1.62rem;height: 1.62rem;" src="../../assets/login_img/QQ20180201104701_02.gif" alt="" />
			 <p style="font-size: 0.5rem;line-height: 1.68rem;float: left;margin-left: 3.5rem;">
			 	注册
			 </p>
		</div>
		<div style="width: 100%;height: 8rem;border-bottom:0.01rem solid #CACACA ;">
			<div style="width: 10.26rem;height: 5.4rem;margin-left: 0.5rem;">
				<div class="box_inp">
					<img class="imgs" src="../../assets/login_img/12323.png"/>
					<input v-model="active.Id" class="inps" type="text" placeholder="请设置账号" />
				</div>
				<div class="box_inp">
					<img class="imgs" src="../../assets/login_img/1231.png" alt="" />
					<input v-model="active.name" class="inps" type="text" placeholder="请设置昵称" />
				</div>
				<div class="box_inp">
					<img class="imgs" src="../../assets/login_img/3333.png" alt="" />
					<input v-model="active.password" class="inps" type="text" placeholder="请设置密码" />
				</div>
			</div>
			<div style="width: 100%;height: 3rem;">
				<img @click="GO" style="float: right;width: 2.67rem;height: 2.8rem;" src="../../assets/login_img/QQ20180201104701_06.gif" alt="" />
			</div>
		</div>
		
	</div>
</template>

<script>
	import store from '../../vuex/store.js'
	export default {
		store,
		data(){
			return{
				active:{
					Id:'',
					name:'',
					password:'',
				}
			}
		},
		methods:{
			logins(){
				window.location.href='#/login'
			},
			GO(){
				if(this.active.Id!==''&&this.active.name!==''&&this.active.password!==''){
					this.$store.state.login_b.push(this.active)
				    alert('注册成功，快去登录吧！')
				    window.location.href='#/login'
				    console.log(this.$store.state.login_b)
				}else{
					alert('抱歉，您的信息没有填完整')
				}
				
			}
		}
	}
</script>

<style scoped>
	.box_inp{
		width: 100%;
		height: 1.77rem;
		border-bottom:0.01rem solid #CACACA;
		
	}
	.imgs{
		width: 0.6rem;
		height: 0.6rem;
	}
	.inps{
		width: 9rem;
		height: 1rem;
		font-size: 0.4rem;
		border: none;
		background: #fafafa;
	}
</style>