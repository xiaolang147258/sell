<template>
	<div style="margin-bottom: 2rem;">
		
		
		<div v-for="(i,index) in active" style="width: 100%;border-bottom:0.01rem solid #CACACA ;background: white;margin-top: 0.4rem;">
			<div style="width: 9.8rem;height: 100%;margin: 0 auto;position: relative;font-family: '微软雅黑';">
				<div style="width: 100%;height: 1.83rem; position: relative;">
					<img class="img_q" v-bind:src="i.Head"/>
					 <span style="font-size: 0.4rem;font-weight: 600;position: absolute;top: 0.6rem;left: 1.2rem;">
					 	{{i.name}}</span>
					 <a style="font-size: 0.3rem;position: absolute;top: 1.1rem;left: 1.2rem;color: #CACACA;">
					 	{{i.sex}}</a>
					 <a style="float: right;font-size: 0.4rem;margin-top: 0.6rem;color: #CACACA;">
					 	{{i.Data}}
					 </a>
				</div>
				 <h6 style="font-family: '微软雅黑';font-size: 0.5rem;">{{i.h}}</h6>
				 <div style="width: 9.8rem;font-size: 0.4rem;font-family: '微软雅黑';color: #5d5d5d;word-break: break-all;margin-top: 0.2rem;">
				 	{{i.content}}
				 </div>
				 <div style="width: 9.8rem;overflow: hidden;margin-top: 0.2rem;">
				 	<img :src="i.img_src"/>
				 </div>
				 
				 <div style="width: 100%;height: 1.2rem;">
				 	<span @click="likes(index)" class="span_q">
				 		<img class="img_w" :src='i.img_like' alt="" />
				 		   {{i.like}}
				 	</span>
				 	<span class="span_q" style="margin-left: 1rem;">
				 		<img class="img_w" src="../../assets/pinglun.png" alt="" />
				 		   {{i.comments}}
				 	</span>
				 	<span class="span_q" style="float: right;margin-top: 0.5rem;font-size: 0.4rem;">{{i.Now}}</span>
				 </div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	import store from '../../vuex/store.js'
	export default {
		store,
		 data(){
		 	return{
		 	    active:[],
		 	    
		 	}
		 },
		
		methods:{
			likes(i){
				if(this.$store.state.active[i].img_like =='../../../static/img/xihuan.png'){
					  this.active[i].img_like ='../../../static/img/xi2.png'
				      
				   for(var j=0;j<this.$store.state.likeku.length;j++){
				   	     if(this.$store.state.active[i]==this.$store.state.likeku[j]){
				   	     	  this.$store.state.likeku.splice(j,1)
				   	     }
				   }
				}else{
					this.$store.state.active[i].img_like ='../../../static/img/xihuan.png'
				    this.$store.commit('likes',i)
				}
			},
		},
		mounted(){
////			this.active.push(this.$store.state.Home)
               this.active = this.$store.state.active
		},
		computed:{
//			active(){
//			   return this.$store.state.active
//			},
		}
	}
</script>

<style scoped>
	  *{list-style: none;}
	 .img_q{width: 1rem;height: 1rem;border-radius: 0.5rem;float: left;margin-top:0.45rem;}
     .img_w{width: 0.5rem;height: 0.5rem;}
     .span_q{color: #CACACA;font-size: 0.5rem;}
</style>