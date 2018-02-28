<template>
	<div style="width: 100%;background: #f8f8f8;">
		 <div style="width: 100%;height: 1.68rem;background: white;">
			<img @click="hui" style="float: left;width: 1.62rem;height: 1.62rem;" src="../../assets/login_img/QQ20180201104701_02.gif" alt="" />
			 <p style="font-size: 0.5rem;line-height: 1.68rem;float: left;margin-left: 3.5rem;">
			 	 设置
			 </p>
		</div>
	
	<img style="width: 100%;" src="../../assets/login_img/QQxu20180129092238_03.gif" alt="" />
	<img @click="tui" style="width: 100%;" src="../../assets/login_img/QQxuai20180129092238_05.gif" alt="" />
	</div>
</template>

<script>
	export default{
		methods:{
			tui(){
				window.location.href='#/login'
			},
			hui(){
				window.location.href='#/home_three'
			}
		}
	}
</script>

<style>
</style>