<template>
	<div style="width: 100%;background: #fafafa;height: 19.2rem;position: absolute;top: 0;z-index: 99999;">
		
		  <div style="width: 100%;height: 1.68rem;background: white;">
			<img @click="hui" style="float: left;width: 1.62rem;height: 1.62rem;" src="../../assets/login_img/QQ20180201104701_02.gif" alt="" />
			 <p style="font-size: 0.5rem;line-height: 1.68rem;margin-left: 4.5rem;">
			 	我的喜欢
			 </p>
		</div>
		<!--<img v-show="dad" style="width: 100%;margin-top: 3rem;" src="../../assets/login_img/QQs20180129092242_02.gif" alt="" />-->
		
<!-------------我喜欢的内容----------------------------------------------------------------->
        
        
		 <div v-for='(i,index) in actives' style="width: 100%;height:5rem;background:white;border-top: 0.01rem solid #e9e9e9;position: relative;">
		 	<div style="width: 9.33rem;height: 100%;margin:0 auto;position: relative;box-sizing: border-box;margin-top: 0.3rem;">
		 		
		 		<img style="width: 1rem;height: 1rem;border-radius: 0.5rem;float: left;" :src="i.Head"/>
		 		<p style="font-size: 0.4rem;padding-top: 0.3rem;color: #a6a6a6;float: left;;margin-left: 0.2rem">
		 	    	作者:{{i.name}}</p> <br />
		 	    
		 	    <p style="font-size: 0.5rem;font-weight: 600;padding-top: 0.3rem;color: #000000;width: 50%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
		 	    	{{i.h}}</p>
		 	    <div style="font-size: 0.35rem;padding-top: 0.5rem;color: #000000;overflow: hidden;text-overflow: ellipsis;width: 50%;white-space: nowrap;">
		 	    	{{i.content}}</div>
		 	    <button @click="shan(index)" style="width: 1.92rem;height: 0.9rem;font-size: 0.3rem;border:none ;position: absolute;bottom: 0.6rem;color: #2C3E50;background: white;border: 0.02rem solid #e9e9e9;">
		 	    	删除</button>
<!------------------
                 	背景配图
                 --------------------------------------------------->
		 	    <div style="width: 4.8rem;height: 2.5rem;position: absolute;top: 0.7rem;left: 4.7rem;overflow: hidden;border-radius: 0.3rem;">
		 	    	<img :src="i.img_src"/>
		 	    </div>
		 	 </div>
		 </div>
		
		
		
		
	</div>
</template>

<script>
	import store from '../../vuex/store.js'
	export default{
		store,
		data(){
			return{
				dad:true,
				actives:[],
			}
		},
		methods:{
			hui(){
				window.location.href='#/home_three'
			},
			shan(index){
				this.$store.state.likeku.splice(index,1)
				
               
			}
			
		},
		mounted(){
			
			
			this.actives = this.$store.state.likeku
			console.log(this.actives)
		},
		computed:{
//		  shuju(){
//		  	 return this.$store.state.likeku
//		  }
		}
	}
</script>

<style>
	*{
		font-family: "微软雅黑";
	}
</style>