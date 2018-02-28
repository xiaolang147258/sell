<template>
	<div style="width: 100%;margin-bottom: 1.3rem;">
		<div style="width: 100%;height: 1.68rem;background: white;">
			 <!--返回箭头 -->
			<img @click="hui" style="width: 0.7rem;height: 0.7rem;margin: 0.5rem 0 0 0.4rem;" src="../../assets/zuo.png" alt="" />
			
			<img style="float: right;height: 100%;" src="../../assets/login_img/QQ20180202093451_03.gif" alt="" />
		</div>
		
		
		
		<div v-for="(i,index) in act" style="width: 10.53rem;height: 3.03rem;margin: 0 auto;border-radius: 0.2rem;margin-top: 0.3rem;overflow: hidden;position: relative;">
			 <img style="width: 100%;height: 400%;" :src="i.img_src" alt="" />
		 <div style="width: 10.53rem;height: 3.03rem;border-radius: 0.3rem;background: rgba(0,0,0,.15);position: absolute;top: 0;">
		 	<div style="width: 9.33rem;height: 100%;margin:0 auto;position: relative;box-sizing: border-box;">
		 		<!--标题h-->
		 	    <p style="font-size: 0.5rem;font-weight: 600;padding-top: 0.3rem;color: #fce980;">
		 	    	{{i.h}}</p>
		 	    <div style="font-size: 0.35rem;padding-top: 0.3rem;color: #fce980;overflow: hidden;text-overflow: ellipsis;width: 70%;white-space: nowrap;">
		 	    	{{i.content}}</div>
		 	    <button style="width: 1.92rem;height: 0.6rem;font-size: 0.3rem;border:none ;border-radius: 0.3rem;position: absolute;bottom: 0.3rem;color: #2C3E50;">
		 	    	添加标签</button>
		 	    	
		 	     <div style="width: 2.4rem;height: 1.05rem;border: 0.01rem solid #2C3E50;border-radius: 0.525rem;float: right;overflow: hidden;">
		 	     	<img style="width: 100%;height: 100%;" src="../../assets/login_img/QQxiao20180202093451_03.gif" alt="" />
		 	     </div>
		 	 
		 	 </div>
		 </div>
		</div>
		
		<img style="width: 100%;margin-top: 1rem;" src="../../assets/login_img/QQ20180202093451_02.gif" alt="" />
		<div @click="xie" style="width: 2rem;height: 2rem;overflow: hidden;border-radius: 1rem;position: fixed;bottom: 2rem;right: 0.5rem;box-shadow: 0 0 0.3rem #CACACA;">
			<img style="width: 2.05rem;height: 2.05rem" src="../../assets/login_img/Qjia20180202093451_03.gif" alt="" />
		</div>
		
	</div>
</template>

<script>
	import store from '../../vuex/store.js'
	export default{
		store,
		
		 computed:{
		 	 act(){
		 	 	return this.$store.state.archives
		 	 }
		 },
		 methods:{
		 	hui(){
		 		 this.$store.commit('tiao')
		 	},
		 	
		 	xie(){
		 		window.location.href='#/tower_child'
		 	}
		 }
	}
</script>

<style>
	*{font-family: '微软雅黑';}
</style>