<template>
	<div style="width: 100%;height: 15rem;position: relative;">
		<div class="box_top">
			<span>
				<router-link to='/home_one/pavlion'>旧事展馆</router-link>
				<p class="p_one">EX MLSELM</p>
			</span>
			<span>
				<router-link to='/home_one/stoly'>发现故事</router-link>
				
			</span>
		</div>
		<div style="margin-top: 2rem;background: #EEEEEE;">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
	*{text-decoration: none;}
	.box_top{width: 100%;height: 2rem;position: fixed;top: 0;left: 0;border-bottom: 0.005rem solid #cacaca;box-shadow: 0 0 0.2rem 0 #cacaca;z-index: 9999;background: white;}
    .p_one{color: #CACACA;font-size: 0.5rem;font-family: "微软雅黑";position: absolute;top: 1rem;left: 1rem;}
     a{color: #CACACA;font-size: 0.5rem;font-family: "微软雅黑";}
     span{height: 0.2rem;margin-left: 1rem;}
     .router-link-active{color: yellow;font-weight: 600;}
</style>