import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//设置静态存储资源
const state={
	  Home:'',
	  archives:[
	       {
	       	h:'尾巴没了',
	       	img_src:'../../../static/img/QQ20180129193449.jpg',
	       	Data:"20.12",
	        content:'你还在吗'
	       },
	       {
	       	h:'写给你的信',
	       	img_src:'../../../static/img/QQ20180129193420.jpg',
	       	Data:"20.67",
	       content:'已经在风中'
	       },
	       {
	       	h:'旧城',
	       	img_src:'../../../static/img/QQ20180129193433.jpg',
	       	Data:"22.12",
	       content:'已经在风中'
	       },
	       {
	       	h:'永恒的遗憾',
	       	img_src:'../../../static/img/20150212213059_ycnGF.thumb.224_0.jpeg',
	       		Data:"13.12",
	       		content:'已经在风中'
	       },
	       {
	       	h:'大风吹得好远',
	       	img_src:'../../../static/img/QQ20180129193437.jpg',
	       	Data:"26.12",
	        content:'已经在风中'
	       },
	  ],
	  
	  active:[
		 		 {
		 		 Head:'../../../static/img/20150212213059_ycnGF.thumb.224_0.jpeg',
		 		 name:'尾巴开箱',
		 		 sex:'女生，金牛座',
		 		 Data:"100小时前更新",
		 		 h:'我依旧喜欢你',
		 		 content:'有些伤口，时间久了就会慢慢长好;有些委屈，受过了想通了也就释然了;有些伤痛，忍过了疼久了也成习惯了……然而却在很多孤独的瞬间，又重新涌上心头。其实，有些藏在心底的话，并不是故意要去隐瞒，只是，并不是所有的疼痛，都可以呐喊。',
		 		 img_src:"../../../static/img/QQ20180129193449.jpg",
		 		 like:20,
		 		 comments:3,
		 		 img_like:'../../../static/img/xi2.png',
		 		 Now:"全篇102字"
		 		 },
		 		 
		 		 {
		 		 Head:'../../../static/img/006H2gbKgy1fcr5rqihszj30go0gogms.jpg',
		 		 name:'小芭比',
		 		 sex:'女生，天蝎座座',
		 		 Data:"1天前更新",
		 		 h:'一厢情愿',
		 		 content:'那些离别和失望的伤痛，已经发不出声音来了',
		 		 img_src:"../../../static/img/QQ20180129193420.jpg",
		 		 like:27,
		 		 comments:9,
		 		 img_like:'../../../static/img/xi2.png',
		 		 Now:"全篇20字"
		 		 },
		 		 
		 		 {
		 		 Head:'../../../static/img/144820692.jpg',
		 		 name:'候鸟不往南',
		 		 sex:'女生，射手座',
		 		 Data:"10小时前更新",
		 		 h:'我爱过你',
		 		 content:'分手常说是偶然，在某天则是必然，因我们太要强也太自信，认为可以接受对方的一切，认为只有自己才能给她幸福，事实上却不是这样。当你离开她的时，会有别人陪在她身边，逗她开心，你不爱她时，她会爱上另一个不该爱的人，选择遗忘你。用眼睛看到的爱情只是表面，真正的爱情是用心去聆听。',
		 		 img_src:"../../../static/img/QQ20180129193441.jpg",
		 		 like:18,
		 		 comments:0,
		 		 img_like:'../../../static/img/xi2.png',
		 		 Now:"全篇120字"
		 		 },
		 		 
		 		 {
		 		 Head:'../../../static/img/51284ff5d3ea4_200x200_3.jpg',
		 		 name:'耳听爱情',
		 		 sex:'女生，天蝎座',
		 		 Data:"4小时前更新",
		 		 h:'你好，再见',
		 		 content:'有些心事只能自言自语，有些秘密只能讲给朋友。有些痛苦只能默默承受，自己还是要靠自己拯救。----真正的痛苦，没有人能与你分担，你只能把它从一个肩头，换到你的另一个肩头。',
		 		 img_src:"../../../static/img/QQ20180129193433.jpg",
		 		 like:180,
		 		 comments:100,
		 		 img_like:'../../../static/img/xi2.png',
		 		 Now:"全篇70字"
		 		 },
		 		 
		 		 {
		 		 Head:'../../../static/img/8c1001e93901213f8d0d3ec357e736d12f2e95f6.jpg',
		 		 name:'绯色',
		 		 sex:'女生，天蝎座',
		 		 Data:"3小时前更新",
		 		 h:'双向孤独',
		 		 content:'我的世界太过安静，静得可以听见自己心跳的声音。心房的血液慢慢流回心室，如此这般的轮回。聪明的人，喜欢猜心，也许猜对了别人的心，却也失去了自己的。傻气的人，喜欢给心，也许会被人骗，却未必能得到别人的。你以为我刀枪不入，我以为你百毒不侵。',
		 		 img_src:'../../../static/img/QQ20180129193437.jpg',
		 		 like:40,
		 		 comments:34,
		 		 img_like:'../../../static/img/xi2.png',
		 		 Now:"全篇90字"
		 		 },
		 		 
		 		 {
		 		 Head:'../../../static/img/006H2gbKgy1fcr5rqihszj30go0gogms.jpg',
		 		 name:'寸月',
		 		 sex:'女生，天蝎座',
		 		 Data:"2小时前更新",
		 		 h:'我的蜻蜓队长',
		 		 content:'很多人不需要再见，因为只是路过而已。遗忘就是我们给彼此最好的纪念',
		 		 img_src:'../../../static/topic_img/u=1295780828,2211548790&fm=200&gp=0.jpg',
		 		 like:401,
		 		 comments:341,
		 		 img_like:'../../../static/img/xi2.png',
		 		 Now:"全篇20字"
		 		 },
		 		 
		 		 {
		 		 Head:'../../../static/topic_img/20141217124439_EmxBP.jpeg',
		 		 name:'安静',
		 		 sex:'女生，天蝎座',
		 		 Data:"1小时前更新",
		 		 h:'想把你灌醉，听听你心里到底有谁',
		 		 content:'你我两岸相爱却不可相见。你默然选择离去，留下我一人独守彼岸。花开花落，你不曾在经过此岸；对不起，我无法不自己想起你；对不起，我不能让自己忘记你；对不起，我心中不能没有你；彼岸花已开，奈何桥已搭起，孟婆已像我招手，我还在此岸等待。孟婆汤足以遗忘前世记忆，却遗忘不掉你的身影。',
		 		 img_src:'../../../static/topic_img/QQ20180130094252.jpg',
		 		 like:41,
		 		 comments:32,
		 		 img_like:'../../../static/img/xi2.png',
		 		 Now:"全篇122字"
		 		 },
		 		],
		 		
		 		likeku:[
//		 		     {
//		 		 Head:'../../../static/topic_img/20141217124439_EmxBP.jpeg',
//		 		 name:'安静',
//		 		 sex:'女生，天蝎座',
//		 		 Data:"1小时前更新",
//		 		 h:'想把你灌醉，听听你心里到底有谁',
//		 		 content:'你我两岸相爱却不可相见。你默然选择离去，留下我一人独守彼岸。花开花落，你不曾在经过此岸；对不起，我无法不自己想起你；对不起，我不能让自己忘记你；对不起，我心中不能没有你；彼岸花已开，奈何桥已搭起，孟婆已像我招手，我还在此岸等待。孟婆汤足以遗忘前世记忆，却遗忘不掉你的身影。',
//		 		 img_src:'../../../static/topic_img/QQ20180130094252.jpg',
//		 		 like:41,
//		 		 comments:32,
//		 		 img_like:'../../../static/img/xi2.png',
//		 		 Now:"全篇122字"
//		 		 },
		 		],
		 		
		 		//背景图集合
		 		 background_src:[
			      "../../../static/img/u=195438051,3430611796&fm=27&gp=0.jpg",
			      "../../../static/img/aae43defbf434772ff5cea7fb4a4fb39.jpg",
			      "../../../static/img/aca74a7bfb1afa837d68b6250a821b73.jpg",
			      "../../../static/img/8de338f72fb3196498f51d3d6c87dfa8.jpg",
			      "../../../static/img/74fbccbb4a633655db7bbef3a3a0fcc9.png",
			   ],
			   //头像集合
			    hande_src:[
			       "../../../static/img/20150212213059_ycnGF.thumb.224_0.jpeg",
			       "../../../static/img/aae43defbf434772ff5cea7fb4a4fb39.jpg",
			       "../../../static/img/8de338f72fb3196498f51d3d6c87dfa8.jpg",
			       "../../../static/img/74fbccbb4a633655db7bbef3a3a0fcc9.png",
			       "../../../static/img/619d9ac8c0ade95d78f57f73a4c410af.jpg",
			    ],
		 	
		 		//登录信息存储
		 	login_b:[
		 	    {Id:'admin',password:'admin',name:"尾巴开箱"}
		 	],
		 	//临时存储用户信息
		 	login_j:'',
		 	//昵称
		 	act:'',
		 	//转存昵称
		 	names:'',
		 	
		 	//背景图路径
		 	Background_src:'',
		 	//头像路径
		 	Hande_src:'',
		 	
		 	//跳转、、
		 	tias:{
		 		tiao:1,
		 	},
};

//修改状态
const mutations={
	    jiao(state){
	    	  for(var i=0;i<state.login_b.length;i++){
	    	  	if(state.login_j==state.login_b[i].Id){
	    	  		  state.act=state.login_b[i].name
	    	  		  
	    	  		  state.names = state.login_b[i].name
	    	  		  
	    	  		  console.log(state.names)
	    	  	 }
	    	  }
	    },
	    
	    aa(state){
	    	var dad = state.active.length-1
	    	 //同步动态消息昵称
	    	 state.active[0].name = state.names
	    	 //随机换动态消息配图
	    	 state.active[0].img_src = state.background_src[Math.floor(Math.random()*4)]
	    	 console.log( state.active[0].img_src)
	    },

	    //选择性页面返回跳转
	    tiao(state){
	    	if(state.tias.tiao==0){
		 			window.location.href='#/home_three'
		 		}else if(state.tias.tiao==1){
		 			window.location.href='#/home_tower'
		 		}
	    },
	   //我喜欢的数据
	    likes(state,i){
	    	var dad = 0
	    	for(var j=0;j<state.likeku.length;j++){
	    		if(state.likeku[j]==state.active[i]){
	    			   dad++
	    		}
	    	}
	    	if(dad==0){
	    		state.likeku.unshift(state.active[i])
//				     console.log(state.likeku)
	    	}
//	    	     console.log(dad)
	    },
	    
};



export default new Vuex.Store({
	state,mutations
})






