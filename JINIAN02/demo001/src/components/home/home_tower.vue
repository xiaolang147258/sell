<template>
	<div style="width: 100%;background: #f5f5f5;height: 17.9rem;">
<!----------
        	头部标题------------------------------------------------------------>
		<div style="width: 100%;height: 1.62rem;line-height: 1.62rem;">
			<p	 style="font-size: 0.4rem;float: left;margin-left: 4.5rem;">故事档案</p>
			<img style="float: right;width: 0.8rem;height: 0.8rem;margin-right: 0.5rem;margin-top: 0.4rem;" src="../../assets/lin.png" alt="" />
		</div>
<!----------
        	底部翻页内容------------------------------------------------------------>
	     <div style="width: 100%;height: 16.28rem;">
	       <div style="width: 100%;height: 14rem;margin-right: 0.5rem;">
	     	<div class="swiper-container">
				<div class="swiper-wrapper">
					
					<div class="swiper-slide">
					<!--创建文档页---->
						<div>
							<div @click="tiao" style="width: 90%;height: 8rem;background: #f0f0f0;margin: 0 auto;margin-top: 2rem;"><img style="width: 2rem;height: 2rem;margin: 3rem 35%;" src="../../assets/jia20180129092259_03.gif" alt="" /></div>
				    <!--字体部分-----> 
				         <div style="width: 6.5rem;height: 6rem;margin: 0 auto;text-align: center;box-sizing: border-box;">
				         	 <p style="font-size: 0.6rem;padding-top: 0.5rem;">创建档案</p>
				         	 <p style="font-size: 0.45rem;padding-top: 0.4rem;color: #2C3E50;">为你的每一个前任创建一个档案 </p>
				         </div>
						</div>
					</div>
					
					<div @click="hua" v-for="(i,index) in shuju" class="swiper-slide">
						<div>
							<span style="">
								<p style="font-size: 0.6rem;float: left;margin-top: 0.5rem;margin-left:0.3rem ;">
								  {{i.Data}}/</p>
								<p style="font-size: 0.4rem;margin-top: 0.7rem;float: left;font-weight: 600;">
								Days</p></span>
						    <img style="width: 90%;height:8rem;margin-left:0.4rem;margin-top: 0.8rem;" :src="i.img_src" alt="" />
						    <p style="font-size: 0.5rem;margin-left: 0.3rem;word-break: break-all;margin-top: 1rem;">
						    	{{i.h}}
						    </p>
						</div>
					</div>
					
				</div>
				<!-- 分页器 -->
				<div class="swiper-pagination"></div>
				
			</div>
	     </div>
	    </div>
	
	
	</div>
</template>

<script>
	import Swiper from '../../../static/js/swiper.js'
	import store from '../../vuex/store.js'
	export default {
		store,
		data(){
			return{
				asses:[],
				tiaos:1,
			}
		},
		methods:{
			towers(){
				new Swiper('.swiper-container', {
				    slidesPerView : 1.4,
                    centeredSlides : true,
                    spaceBetween : 130,
//                  width:800,
                    preventLinksPropagation : true,
                    pagination: {
						 el: '.swiper-pagination',
					},
			  })
			},
			tiao(){
				if(this.$store.state.names==''){
					alert('您还没登录，无法创建文档')
				}else{
					window.location.href='#/tower_child'
				    console.log(this.$store.state.Home)
				}
				
			},
			hua(){
				this.$store.state.tias.tiao=this.tiaos
				window.location.href='#/topic'
			}
		},
		mounted(){
			console.log(1111)
			this.towers()

		},
		
		computed:{
			shuju(){
			   return this.$store.state.archives
			},
		}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/swiper.css");
	*{font-family: "微软雅黑";}
	
	.swiper-wrapper{height: 16rem;}
	.swiper-slide{height:14rem;background: white;box-shadow:  #CACACA 0rem 0rem 0.6rem;margin-top: 0.5rem;width: 8rem;}
	.swiper-pagination span {
		width: 0.2rem;
		height: 0.2rem;
	}	
	.swiper-pagination{
		bottom: 0;
	}
	
</style>