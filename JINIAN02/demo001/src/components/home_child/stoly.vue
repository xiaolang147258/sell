<template>
	<div style="width: 100%;background: ghostwhite;margin-bottom: 2.5rem;">
		<!--
        	顶部轮播特效
        -->
		<div style="width: 100%;height: 3.5rem;background: url(../../../static/img/01063_behindglass_1280x800.jpg) no-repeat;">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img class="img_e" src="../../assets/QQ20180130094226.jpg" alt="" />
					</div>
					<div class="swiper-slide">
						<img class="img_e" src="../../assets/QQ20180130094237.jpg" alt="" />
					</div>
					<div class="swiper-slide">
						<img class="img_e" src="../../assets/QQ20180130094240.jpg" alt="" />
					</div>
					<div class="swiper-slide">
						<img class="img_e" src="../../assets/QQ20180130094246.jpg" alt="" />
					</div>
					<div class="swiper-slide">
						<img class="img_e" src="../../assets/QQ20180130094255.jpg" alt="" />
					</div>
				</div>
				<!-- 分页器 -->
				<div class="swiper-pagination"></div>
			</div>
		</div>
<!----------
        	话题---------------------------------------------------------------------------------
        -->
		<div style="width: 10.8rem;height: 4.2rem; background: #f7f9fa;overflow: hidden;">
			<div style="width:10.35 ;height: 100%;margin-left: 0.45rem;">
				<!--标题------------------------------------------------------------------------------------>
				<div style="width: 100%;height: 1.23rem;line-height: 0.8rem;font-weight: 600;">
					<a style="border-left: 0.1rem solid deepskyblue;font-size: 0.3rem;height: 0.2rem;">
						话题</a>
					<a style="font-size: 0.3rem;float: right;margin-top: 2%;color: #CACACA;margin-right: 0.25rem;">
						查看更多</a>
				</div>
				<!--图片加数据的轮播特效-------------------------------------------------------------------------->
				<div style="width: 100%;height: 3rem;">
					<div class="swiper-container_tower">
						<div class="swiper-wrapper">
							<div v-for="(i,index) in topic" class="swiper-slide slide_q">
								<img class="img_r" :src="i.Src" alt="" />
								<div style="width: 100%;height: 100%;position:absolute;top: 0rem;background: rgba(0,0,0,.2);border-radius: 0.3rem;">
									<div style="width: 3.7rem;height: 100%;margin: 0 auto;">
										<p style="font-size: 0.2rem;color: white;margin-top: 0.3rem;">
											话题</p>
										<div style="width: 100%;word-break: break-all;color: white;font-size: 0.4rem;margin-top: 0.1rem;">
											{{i.conten}}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
<!----------
        	前任旧物---------------------------------------------------------------------------------
        -->
		<div style="width: 100%;height: 6.72rem;background: white;">
			<div style="width: 10.35rem;height: 100%;margin-left: 0.45rem;">
				<!--标题 ----------------------------------------------------------------------->
				<div style="width: 100%;height: 1.23rem;line-height: 0.8rem;font-weight: 600;">
					<a style="border-left: 0.1rem solid yellow;font-size: 0.3rem;height: 0.2rem;">
						前任旧物</a>
					<a style="font-size: 0.3rem;float: right;margin-top: 2%;color: #CACACA;margin-right: 0.25rem;">
						查看更多</a>
				</div>
				<!--图片数据内容 ----------------------------------------------------------------------->
				<div style="width: 100%;height: 5.25rem;background:url(../../../static/img/01062_aspidersview_1280x800.jpg) no-repeat;">
					<div class="swiper-container_therr">
						<div class="swiper-wrapper ">
							
							<div v-for="(i,index) in Found" class="swiper-slide slide_therr">
								<img class="img_r" :src="i.Src" alt="" />
								<div style="width: 9rem;height: 80%;position: absolute;bottom: 0.3rem;left: 0.7rem;">
									<p style="color: yellow;font-size: 0.5rem;margin-top: 2rem;">
										{{i.name}}：
									</p>
									<div style="width: 100%;word-break: break-all;color: white;font-size: 0.7rem;margin-top: 0.1rem;overflow: hidden;text-overflow: ellipsis;height: 2.8rem;">
											{{i.conten}}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
		
<!----------
        	异地恋------------------------------------------------------------------------------------------------------------------------->
        
       <div style="width: 100%;background: white;border-bottom:0.01rem solid #CACACA ;">
       	<div style="width: 10.35rem;margin-left: 0.45rem;">
       		<!--标题---------------------------------------------------------------------------------------------------->
        	<div style="width: 100%;height: 1.23rem;line-height: 0.8rem;font-weight: 600;margin-top: 0.4rem;">
					<a style="border-left: 0.1rem solid yellow;font-size: 0.3rem;height: 0.2rem;">
						异地恋</a>
					<a style="font-size: 0.3rem;float: right;margin-top: 2%;color: #CACACA;margin-right: 0.25rem;">
						查看更多</a>
	        </div>
	        <!--动态内容---------------------------------------------------------------------------------------------------->
             <div v-for="(i,index) in Action_q" style="width: 100%;height: 3.45rem;position: relative;border-bottom:0.01rem solid #CACACA ;">
             	 <!-- 文本内容-------------------------------->
                  <div style="width: 7rem;height: 100%;box-sizing: border-box;word-break: break-all;">
                  	   <p style="font-size: 0.4rem;font-weight: 600;padding-top: 0.5rem;">
                  	   	   {{i.h}}</p>
                  	   <p style="font-size: 0.35rem;color: #989a9e;padding-top: 0.4rem;font-weight: 600;">
                  	   	 {{i.content}}</p>
                  	   <p style="font-size: 0.3rem;color: #CACACA;padding-top: 0.4rem;">
                  	   	 作者：{{i.name}}</p>
                  </div>
                 <!--头像------------------------------------->
                  <img :src="i.Src" style="width: 2.43rem;height: 2.43rem;border-radius: 0.3rem;position: absolute;right: 0.3rem;top: 0.5rem;" />
             </div>
             
       	</div>
      </div>
<!----------
        	校园爱情------------------------------------------------------------------------------------------------------------------------->    
        <div style="width: 100%;background: white;">
       	<div style="width: 10.35rem;margin-left: 0.45rem;">
       		<!--标题---------------------------------------------------------------------------------------------------->
        	<div style="width: 100%;height: 1.23rem;line-height: 0.8rem;font-weight: 600;margin-top: 0.4rem;">
					<a style="border-left: 0.1rem solid yellow;font-size: 0.3rem;height: 0.2rem;">
						校园爱情</a>
					<a style="font-size: 0.3rem;float: right;margin-top: 2%;color: #CACACA;margin-right: 0.25rem;">
						查看更多</a>
	        </div>
	        <!--动态内容---------------------------------------------------------------------------------------------------->
             <div v-for="(i,index) in Action_w" style="width: 100%;height: 3.45rem;position: relative;border-bottom:0.01rem solid #CACACA ;">
             	 <!-- 文本内容-------------------------------->
                  <div style="width: 7rem;height: 100%;box-sizing: border-box;word-break: break-all;">
                  	   <p style="font-size: 0.4rem;font-weight: 600;padding-top: 0.5rem;">
                  	   	   {{i.h}}</p>
                  	   <p style="font-size: 0.35rem;color: #989a9e;padding-top: 0.4rem;font-weight: 600;">
                  	   	 {{i.content}}</p>
                  	   <p style="font-size: 0.3rem;color: #CACACA;padding-top: 0.4rem;">
                  	   	 作者：{{i.name}}</p>
                  </div>
                 <!--头像------------------------------------->
                  <img :src="i.Src" style="width: 2.43rem;height: 2.43rem;border-radius: 0.3rem;position: absolute;right: 0.3rem;top: 0.5rem;" />
             </div>
             
       	</div>
      </div>
 <!----------
        	编辑精选------------------------------------------------------------------------------------------------------------------------->     
	  <div style="width: 100%;background: white;border-bottom:0.01rem solid #CACACA ;">
       	<div style="width: 10.35rem;margin-left: 0.45rem;">
       		<!--标题---------------------------------------------------------------------------------------------------->
        	<div style="width: 100%;height: 1.23rem;line-height: 0.8rem;font-weight: 600;margin-top: 0.4rem;">
					<a style="border-left: 0.1rem solid yellow;font-size: 0.3rem;height: 0.2rem;">
						编辑精选</a>
					<a style="font-size: 0.3rem;float: right;margin-top: 2%;color: #CACACA;margin-right: 0.25rem;">
						查看更多</a>
	        </div>
	        <!--动态内容---------------------------------------------------------------------------------------------------->
             <div v-for="(i,index) in Action_e" style="width: 100%;height: 3.45rem;position: relative;border-bottom:0.01rem solid #CACACA ;">
             	 <!-- 文本内容-------------------------------->
                  <div style="width: 7rem;height: 100%;box-sizing: border-box;word-break: break-all;">
                  	   <p style="font-size: 0.4rem;font-weight: 600;padding-top: 0.5rem;">
                  	   	   {{i.h}}</p>
                  	   <p style="font-size: 0.35rem;color: #989a9e;padding-top: 0.4rem;font-weight: 600;">
                  	   	 {{i.content}}</p>
                  	   <p style="font-size: 0.3rem;color: #CACACA;padding-top: 0.4rem;">
                  	   	 作者：{{i.name}}</p>
                  </div>
                 <!--头像------------------------------------->
                  <img :src="i.Src" style="width: 2.43rem;height: 2.43rem;border-radius: 0.3rem;position: absolute;right: 0.3rem;top: 0.5rem;" />
             </div>
             
       	</div>
      </div>
	
	</div>
</template>

<script>
	import Swiper from '../../../static/js/swiper.js'
	export default {
		data() {
			return {
				//话题数据
				topic: [{
						conten: '假期时，我们一起去过的地方',
						Src: '../../../static/topic_img/u=1295780828,2211548790&fm=200&gp=0.jpg'
					},
					{
						conten: '你心目中完美爱情是什么样子的',
						Src: '../../../static/topic_img/u=1469145549,2886413734&fm=27&gp=0.jpg'
					},
					{
						conten: '2017年最难忘的日子是？',
						Src: '../../../static/topic_img/u=2372141698,3894213008&fm=27&gp=0.jpg'
					},
					{
						conten: '圣诞节你最想收到什么礼物？',
						Src: '../../../static/topic_img/u=2795528346,778039419&fm=27&gp=0.jpg'
					},
					{
						conten: '你想找与Ta相似的新恋人吗？',
						Src: '../../../static/topic_img/u=3178061463,3866904538&fm=27&gp=0.jpg'
					},
					{
						conten: '你相信你会遇到更好的人吗？',
						Src: '../../../static/topic_img/u=415952880,3949263320&fm=27&gp=0.jpg'
					},
					{
						conten: '如果可以，你会删掉某段失败感情记忆吗？',
						Src: '../../../static/topic_img/u=611234654,3976534685&fm=27&gp=0 (1).jpg'
					},
				],
			  //前任旧物数据
                Found:[
                    {conten:'一个奇迹般美好的故事背后，总有九百九十九个得不到奇迹眷顾的凄惨故事。',Src:'../../../static/found_img/u=4016544124,1766141472&fm=27&gp=0.jpg',name:'Yen'},
                    {conten:'江湖可能因为少了谁而失色，却不会因为少了谁后就不再是江湖。',Src:'../../../static/found_img/sjajja.jpg',name:'会写诗的程序员'},
                    {conten:'你我之间的那面镜子从有裂痕开始，就已经注定了我只会将之抛弃，而不是去修复。',Src:'../../../static/found_img/QQ20180130094252.jpg',name:'一厢情愿'},
                    {conten:'仿佛时空巨大的玩笑，又好像命运充满恶意的捉弄。',Src:'../../../static/found_img/u=1005128747,3175603749&fm=27&gp=0.jpg',name:'绫罗i'},
                    {conten:'我知道你不会爱我，但我还是想骗骗自己。',Src:'../../../static/found_img/u=2724635330,3120278079&fm=27&gp=0.jpg',name:'佛系妇女'},
                    {conten:'人的手只有这么大，握不住所有的东西。',Src:'../../../static/found_img/u=4016544124,1766141472&fm=27&gp=0.jpg',name:'墨染'},
                    {conten:'山川万里，家园锦绣，她终究逃不出世事的樊篱，如蜉游般随波逐流。',Src:'../../../static/found_img/u=415952880,3949263320&fm=27&gp=0.jpg',name:'愿你'},
                ],
                //异地恋数据
                Action_q:[
                    {name:'尾巴开箱',h:'还没开始但刻骨铭心',content:'明明互相钦慕却要彼此错过',Src:'../../../static/found_img/20150212213059_ycnGF.thumb.224_0.jpeg'},
                    {name:'忘初心',h:'你是我永远不会忘记的梦想，但只是梦想',content:'深爱过后，成为朋友',Src:'../../../static/found_img/51284ff5d3ea4_200x200_3.jpg'},
                    {name:'鞠',h:'一厢情愿',content:'默默思念，会不会也是一种幸福？',Src:'../../../static/found_img/20141217124439_EmxBP.jpeg'},
                    {name:'林落',h:'和你在一起的日子，天空都这么好看',content:'贴吧认识的小迷妹和男神的故事',Src:'../../../static/found_img/006H2gbKgy1fcr5rqihszj30go0gogms.jpg'},
                ],
                //校园故事数据
                Action_w:[
                    {name:'放纵',h:'我宁愿从来没有和你遇见',content:'关于那个走丢的人',Src:'../../../static/topic_img/QQ20180130094252.jpg'},
                    {name:'威廉叶芝',h:'他与她的故事',content:'2013.10.18-2014.11.1',Src:'../../../static/topic_img/u=1295780828,2211548790&fm=200&gp=0.jpg'},
                    {name:'SHQL',h:'侯先生',content:'细细密密的回忆缠绕着心',Src:'../../../static/topic_img/u=1469145549,2886413734&fm=27&gp=0.jpg'},
                    {name:'如初',h:'一起去内蒙古的梦想会实现吗？',content:'你好 姚谷娘',Src:'../../../static/topic_img/u=2372141698,3894213008&fm=27&gp=0.jpg'},
                ],
                //编辑精选数据
                 Action_e:[
                    {name:'不野',h:'爱一个人不容易',content:'在你大喜日子看着他把你抱上婚车',Src:'../../../static/topic_img/u=2795528346,778039419&fm=27&gp=0.jpg'},
                    {name:'爱慕未停',h:'我和你的光年距离',content:'网上追男生未果的小女生故事',Src:'../../../static/topic_img/u=3178061463,3866904538&fm=27&gp=0.jpg'},
                    {name:'momo',h:'天意与归期',content:'你是我的楠楠学妹，我是你的小莫学姐',Src:'../../../static/topic_img/u=415952880,3949263320&fm=27&gp=0.jpg'},
                    {name:'M',h:'鹿',content:'40岁已婚大叔和25岁学妹的故事',Src:'../../../static/topic_img/u=611234654,3976534685&fm=27&gp=0 (1).jpg'},
                ],
			}
		},
		methods: {
			//顶部特效
			lunbo() {
				new Swiper('.swiper-container', {
					autoplay: true,
					effect: 'coverflow',
					slidesPerView: 2.5,
					centeredSlides: true,
					//					loop: true,
					coverflowEffect: {
						rotate: 30,
						stretch: 10,
						depth: 80,
						modifier: 2,
						slideShadows: true,
					},
					pagination: {
						el: '.swiper-pagination',
						dynamicBullets: 'bullets',
					},
				})
			},
			//标题特效
			zehua() {
				new Swiper('.swiper-container_tower', {
					effect: 'coverflow',
					slidesPerView: 2.5,
					centeredSlides: true,
					loop: true,
					coverflowEffect: {
						rotate: 10,
						stretch: 0,
						depth: 30,
						modifier: 1,
						slideShadows: false
					},

				})
			},
			
			Therr() {
				new Swiper('.swiper-container_therr', {
					effect: 'cube',
					autoplay: true,
//					loop: true,
					cubeEffect: {
						slideShadows: false,
						shadow: true,
						shadowOffset: 100,
						shadowScale: 0
					},
					zoom:true,
					 zoom: {
                       maxRatio: 2,
                            },
				})
			},

		},

		mounted() {
			this.lunbo()
			this.zehua()
			this.Therr()
		},
	}
</script>

<style scoped>
	@import url("../../assets/swiper.css");
	* {
		font-family: "微软雅黑";
	}
	
	.swiper-container {
		width: 100%;
		height: 100%;
	}
	
	.img_e {
		width: 100%;
		height: 100%;
	}
	
	.swiper-pagination span {
		width: 0.2rem;
		height: 0.2rem;
	}
	
	.swiper-container_tower {
		width: 100%;
		height: 2.46rem;
	}
	
	.slide_q {
		margin-right: 0.8rem;
		position: relative;
	}
	
	.img_r {
		width: 100%;
		height: 100%;
		border-radius: 0.3rem;
	}
	
	.slide_therr {
		position: relative;
	}
	
</style>