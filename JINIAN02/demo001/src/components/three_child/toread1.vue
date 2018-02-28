<template>
	<div style="width: 100%;background: #fafafa;height: 19.2rem;position: absolute;top: 0;z-index: 99999;">
		
		  <div style="width: 100%;height: 1.68rem;background: white;">
			<img @click="hui" style="float: left;width: 1.62rem;height: 1.62rem;" src="../../assets/login_img/QQ20180201104701_02.gif" alt="" />
			 <p style="font-size: 0.5rem;line-height: 1.68rem;margin-left: 4.5rem;">
			 	我的跟读
			 </p>
		</div>
		<img style="width: 100%;margin-top: 3rem;" src="../../assets/login_img/QQs20180129092242_02.gif" alt="" />
		
	</div>
</template>

<script>
	export default{
		methods:{
			hui(){
				window.location.href='#/home_three'
			}
		}
	}
</script>

<style>
	*{
		font-family: "微软雅黑";
	}
</style>