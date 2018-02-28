<template>
	<div style="width: 100%;background: #f8f8f8;height: 19.2rem;position: absolute;top: 0;z-index: 9999;">
		<img style="width: 100%;margin-top: 0rem;" src="../../assets/QQfeng20180202155405_02.gif" alt="" />
	    
	    <img style="width:4.5rem;margin-left: 2rem;" src="../../assets/img_home/QQ20180202175632_03.gif" alt="" />
	     <button @click="dingshi" style="width: 4.26rem;height: 1.5rem;border: none;border-radius: 0.75rem;background: #fce980;outline: none;margin-left: 6rem;margin-top: 2rem;font-size: 0.5rem;">请登录</button>
	</div>
</template>

<script>
	export default{
		methods:{
			dingshi(){
				window.location.reload()
				window.location.href='#/login'
			}
			
		},
		mounted(){

		}
	}
</script>

<style>
	*{
		/*font-family: "微软雅黑";*/
	}
</style>