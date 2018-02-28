<template>
	<div style="width: 100%;background: white;height: 19.2rem;position: absolute;top: 0;z-index: 9999;">
		<div style="width: 100%;height: 1.68rem;background: white;">
			<img @click="hui" style="float: left;width: 1.62rem;height: 1.62rem;" src="../../assets/login_img/QQ20180201104701_02.gif" alt="" />
			 <p style="font-size: 0.5rem;line-height: 1.68rem;float: left;margin-left: 3rem;">
			 	 关于我们
			 </p>
		</div>
		<img style="width: 100%;" src="../../assets/login_img/QQbeibi20180129092234_02.gif" alt="" />
		
		<img style="width: 100%;position: absolute;top: 6.5rem;" src="../../assets/login_img/QQbeibi20180129092234_03.gif" alt="" />
		<img style="width: 100%;position: absolute;bottom: 0;"  src="../../assets/login_img/QQbeibi20180129092234_04.gif" alt="" />
	</div>
</template>

<script>
	export default{
		
	
	methods:{
			hui(){
				window.location.href='#/home_three'
			}
	 },
	}
</script>

<style>
</style>