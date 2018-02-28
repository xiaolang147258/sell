<template>
	<div style="width: 100%;background: #FAFAFA;">
		
		<div style="width: 100%;height: 6.3rem;background: url(../../../static/topic_img/QQ20180130094252.jpg);">
			
			<img style="width: 2rem;height: 2rem;border-radius: 1rem;margin: 1rem 0 0 4.4rem;" src="../../../static/found_img/20150212213059_ycnGF.thumb.224_0.jpeg" alt="" />
			
			<p style="font-size: 0.5rem;text-align: center;font-weight: 600;">
				{{name}}</p>
			<p style="font-size: 0.4rem;text-align: center;margin-top: 0.1rem;">
				男生/天蝎座
			</p>
			<button style="width: 1.7rem;height: 0.9rem;font-size: 0.4rem;margin-left: 4.5rem;border: none;background: white;border-radius: 0.3rem;outline: none;color: #CACACA;">编辑✔</button>
		</div>
		
		<div style="width: 100%;height: 5.4rem;background: white;">
			<div @click="like" style="width: 100%;height: 1.8rem;border-bottom: 0.01rem solid #CACACA;">
				<p style="float: left;font-size: 0.5rem;line-height: 1.8rem;margin-left: 0.7rem;">我的喜欢</p>
				<img style="float: right;width: 0.7rem;height: 0.7rem;margin: 0.55rem 0.55rem 0 0;" src="../../assets/login_img/xi.png" alt="" />
			</div>
			
			<div  @click="toread1" style="width: 100%;height: 1.8rem;border-bottom: 0.01rem solid #CACACA;">
				<p style="float: left;font-size: 0.5rem;line-height: 1.8rem;margin-left: 0.7rem;">我的跟读</p>
				<img style="float: right;width: 0.7rem;height: 0.7rem;margin: 0.55rem 0.55rem 0 0;" src="../../assets/login_img/zhan.png" alt="" />
			</div>
			
			<div @click="hua" style="width: 100%;height: 1.8rem;border-bottom: 0.01rem solid #CACACA;">
				<p style="float: left;font-size: 0.5rem;line-height: 1.8rem;margin-left: 0.7rem;">我的话题</p>
				<img style="float: right;width: 0.7rem;height: 0.7rem;margin: 0.55rem 0.55rem 0 0;" src="../../assets/login_img/jing.png" alt="" />
			</div>
			
		</div>
		
		<div style="width: 100%;height: 5.4rem;background:white;margin-top: 0.4rem;">
			<div   @click="message4" style="width: 100%;height: 1.8rem;border-bottom: 0.01rem solid #CACACA;">
				<p style="float: left;font-size: 0.5rem;line-height: 1.8rem;margin-left: 0.7rem;">消息中心</p>
				<img style="float: right;width: 0.7rem;height: 0.7rem;margin: 0.55rem 0.55rem 0 0;" src="../../assets/login_img/xiaoxi.png" alt="" />
			</div>
			
			
			<div @click="setup5" style="width: 100%;height: 1.8rem;border-bottom: 0.01rem solid #CACACA;">
				<p style="float: left;font-size: 0.5rem;line-height: 1.8rem;margin-left: 0.7rem;">设置</p>
				<img style="float: right;width: 0.7rem;height: 0.7rem;margin: 0.55rem 0.55rem 0 0;" src="../../assets/login_img/shezhi.png" alt="" />
			</div>
			
			<div @click="tui" style="width: 100%;height: 1.8rem;border-bottom: 0.01rem solid #CACACA;">
				<p style="float: left;font-size: 0.5rem;line-height: 1.8rem;margin-left: 0.7rem;">退出登录</p>
				<img style="float: right;width: 0.7rem;height: 0.7rem;margin: 0.55rem 0.55rem 0 0;" src="../../assets/login_img/tui.png" alt="" />
			</div>
			
		</div>
		
		<div style="width: 100%;height: 3rem;margin-top: 0.4rem;background: white;">
			<div @click="about6" style="width: 100%;height: 1.8rem;border-bottom: 0.01rem solid #CACACA;">
				<p style="float: left;font-size: 0.5rem;line-height: 1.8rem;margin-left: 0.7rem;">关于我们</p>
				<img style="float: right;width: 0.7rem;height: 0.7rem;margin: 0.55rem 0.55rem 0 0;" src="../../assets/login_img/wen.png" alt="" />
			</div>
		</div>
		
	</div>
</template>

<script>
	import store from '../../vuex/store.js'
	export default {
		
		data(){
			return{
				name:'',
				tiao:0
			}
		},
		store,
		  methods:{
		  	  tui(){
		  	  	window.location.href='#/login'
		  	  },
		  	  hua(){
		  	  	this.$store.state.tias.tiao = this.tiao
		  	  	window.location.href='#/topic'
		  	  },
		  	  
		  	 like(){
		  	 	window.location.href='#/like2'
		  	 },
		  	  toread1(){
		  	 	window.location.href='#/toread1'
		  	 },
		  	 message4(){
		  	 	window.location.href='#/message4'
		  	 },
		  	 setup5(){
		  	 	window.location.href='#/setup5'
		  	 },
		  	 about6(){
		  	 	window.location.href='#/about6'
		  	 },
		  	  
		  	  
		  	  
		  	  
		  },
		   mounted(){
		   	   this.name = this.$store.state.act
//		   	   this.$store.commit('hu')
//              this.$store.commit('tou')
               
		   },
		   computed:{
               hand(){
               	 return this.$store.state.Hande_src
               }
		   }
	}
</script>

<style>
	*{font-family: "微软雅黑";}
</style>