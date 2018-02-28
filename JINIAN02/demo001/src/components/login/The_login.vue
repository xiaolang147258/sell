<template>
	<div style="width: 100%;height: 19.2rem;background: #fafafa;position: absolute;top: 0;z-index: 99999999;">
		<div style="width: 100%;height: 1.68rem;background: white;">
			<img @click="login" style="float: left;width: 1.62rem;height: 1.62rem;" src="../../assets/login_img/QQ20180201104701_02.gif" alt="" />
			 <p style="font-size: 0.5rem;line-height: 1.68rem;float: left;margin-left: 3.5rem;font-weight: 600;">
			 	登录
			 </p>
			 <p style="font-size: 0.5rem;line-height: 1.68rem;float: right;margin-right: 0.1rem;color: #fce980;">
			 	忘记密码
			 </p>
		</div>
		<div style="width: 100%;height: 8rem;border-bottom:0.01rem solid #CACACA ;">
			<div style="width: 10.26rem;height: 5.4rem;margin-left: 0.5rem;">
				<div class="box_inp">
					<img class="imgs" src="../../assets/login_img/12323.png"/>
					<input v-model="dall.Id" class="inps" type="text" placeholder="请输入账号" />
				</div>
				
				<div class="box_inp">
					<img class="imgs" src="../../assets/login_img/3333.png" alt="" />
					<input v-on:keyup.alt.65='GOS' v-model="dall.password" class="inps" type="password" placeholder="请输入密码" />
				</div>
			</div>
			<div style="width: 100%;height: 3rem;">
				<img @click="GOS" style="float: right;width: 2.67rem;height: 2.8rem;" src="../../assets/login_img/QQ20180201104701_06.gif" alt="" />
			</div>
		</div>
		<p style="font-size: 0.5rem;font-family: '微软雅黑';position: absolute;bottom: 0.5rem;left: 1rem;color: #fce980;">
			登陆后就表示同意我们的服务条款》</p>
	</div>
</template>

<script>
	import store from '../../vuex/store.js'
	export default {
		 store,
		 data(){
		 	return{
		 		dall:{
		 			Id:'',
		 			password:'',
		 		}
		 	}
		 },
		methods:{
			login(){
				window.location.href='#/login'
			},
			GOS(){
				var dad = this.$store.state.login_b
				for(var i=0;i<dad.length;i++){
					if(this.dall.Id==dad[i].Id&&this.dall.password==dad[i].password){
						this.$store.state.login_j = this.dall.Id
						this.$store.commit('jiao')
//                      console.log(this.$store.state.act)
						
					  }
					}
				   if(this.$store.state.login_j!==''){
//				   	 
                        console.log('登陆成功')
				   	    window.location.href='#/home_three'
				   }else{
				   	   alert('用户名或者密码不正确')
				   }
				}
			},
			mounted(){
				console.log('初始用户：admin  密码：admin')
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
		background: #FAFAFA;
	}
</style>