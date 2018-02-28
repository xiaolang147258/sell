<template>
	<div style="width: 100%;height: 19rem;">
		<div class="top_q" style="width: 100%;height: 2rem;border-bottom: 1px solid #CACACA;line-height: 2rem;">
			<img @click="hui" style="margin: 0.7rem 0 0 0.5rem;" src="../../assets/zuo.png" alt="" />
			<p style="float: left;margin: 0 0 0 3.5rem;font-size: 0.6rem;">新建</p>
			<img @click="chuan" style="margin: 0.7rem 0 0 3.5rem;" src="../../assets/gou.png" alt="" />
		</div>
		
		<div style="width: 100%;height: 11rem;border-bottom: 0.01rem solid #CACACA;">
			<img style="width:100%;height: 5rem;" src="../../assets/login_img/QQbeibi20180129092234_02.gif" alt="" />
	<!--标题---------------------------------------------->
			<input v-model="action.h" style="width: 90%;height: 1rem;font-size: 0.6rem;text-align: center;margin-left: 0.7rem;" type="text" placeholder="档案标题" />
	<!--内容---------------------------------------------->
			<input v-model="action.content" style="width: 90%;height: 1rem;font-size: 0.6rem;text-align: center;margin-left: 0.7rem;" type="text" placeholder="文档内容" />
		</div>
		
		
	</div>
</template>

<script>
	import store from '../../vuex/store.js'
	export default {
		store,
		data(){
			return{
			 action:{
				 Head:'../../../static/img/20150212213059_ycnGF.thumb.224_0.jpeg',
		 		 name:'',
		 		 sex:'女生，金牛座',
		 		 Data:'刚刚发布',
		 		 h:'',
		 		 content:'',
		 		 img_src:'',
		 		 img_like:'../../../static/img/xi2.png',
		 		 like:0,
		 		 comments:0,
		 		 Now:"全篇102字"
				},
				
			  
			}
		},
		
		methods:{
			hui(){
				window.location.href='#/home_tower'
			},
			chuan(){
				this.$store.state.active.unshift(this.action)
				this.$store.state.archives.unshift(this.action)
				this.$store.commit('aa')
			   
				window.location.href='#/home_tower'
			},
			
		},
		munted(){

		},
		computed:{
			Name(){
				return this.$stoer.state.names
			}
		}
	}
</script>

<style scoped>
	.top_q img{
		float: left;
		width: 0.7rem;
		height: 0.7rem;
	}
</style>