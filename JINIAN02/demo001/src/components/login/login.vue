<template>
	<div style="width: 100%;height: 19.3rem;background: #f2f2f2;position: absolute;bottom: 0;z-index: 999999999;">
		<img style="width: 100%;margin-top: 1rem;" src="../../assets/login_img/QQ20180129092247_02.gif" alt="" />
	     
	     <p style="font-size: 0.6rem;text-align: center;margin-top: 0.5rem;">纪念博物馆</p>
	
	     <div style="width: 9.75rem;height: 3rem;margin: 0.6rem auto;">
	       <button @click="regist_go" style="background: white;" class="btn">注册</button>
	       <button @click="thelogin" style="background: #fce980;" class="btn">登录</button>
	     </div>
	    
	     <img style="width: 100%;margin-bottom: 0;" src="../../assets/login_img/QQ20180129092247_04.gif" alt="" />
	     
	</div>
</template>

<script>
	export default{
	
		methods:{
			regist_go(){
				window.location.href='#/regis'
			},
			thelogin(){

				
				window.location.href='#/thelogin'
				
			},
			
			tiao(){
				
			}
		},
		mounted(){
//			this.tiao();
//			var  setTimeout(function(){
//				window.location.href='/'
//			  },1)
				
        
		}
	}
</script>

<style scoped>
	.btn{width: 100%;height: 1.32rem;font-size: 0.4rem;margin-top: 0.5rem;border-radius:0.66rem;border: none;outline:none;box-shadow: 0 0 0.3rem #CACACA;}
</style>