<template>
	<div class="home">
		<router-view></router-view>
		<div class="bottom_div">
			<span @click="one"><img class="img_one" src="../../../static/img/zhu01.png" alt="" /></span>
			<span @click="tow"><img class="img_tow" src="../../../static/img/san01.png" alt="" /></span>
			<span @click="three"><img class="img_three" src="../../../static/img/ren01.png" alt="" /></span>
		</div>
	</div>
</template>
<script>
	import router from '../../router/index.js'
	export default{
		  methods:{
		  	 one(){
		  	 	router.push({path:'/home_one'})
		  	 },
		  	 tow(){
		  	 	router.push({path:'/home_tower'})
		  	 },
		  	 three(){
		  	 	router.push({path:'/home_three'})
		  	 }
		  },
	}
</script>

<style scoped>
	*{margin: 0;padding: 0;}
	/*.home{width: 10.8rem;height: 17rem;position: relative;}*/
	.bottom_div{width: 100%;height: 1.3rem;background: #ffffff;border-top: 0.5px solid #cacaca;position: fixed;bottom: 0;right: 0;z-index: 999;}
	.img_one,.img_tow,.img_three{width: 0.9rem;height: 0.9rem;margin-left: 1.8rem;margin-top: 0.2rem;}
	 
</style>