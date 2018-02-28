import Vue from 'vue'
import Router from 'vue-router'
//import bottom from '@/components/home/Bottom.vue'
//import index from '@/../index.html'
import home_one from '@/components/home/home_one.vue'
import home_tower from '@/components/home/home_tower.vue'
import home_three from '@/components/home/home_three.vue'
import pavlion from '@/components/home_child/pavlion.vue'
import stoly from '@/components/home_child/stoly.vue'
import tower_child from '@/components/home_child/tower_child.vue'
import login from '@/components/login/login.vue'
import regis from '@/components/login/registered.vue'
import thelogin from '@/components/login/The_login.vue'
import topic from '@/components/tower_child/topic.vue'

import toread1 from '@/components/three_child/toread1.vue'
import like2 from '@/components/three_child/like2.vue'
import message4 from '@/components/three_child/message4.vue'
import setup5 from '@/components/three_child/setup5.vue'
import about6 from '@/components/three_child/about6.vue'
import feng from '@/components/login/fengmian.vue'

Vue.use(Router)

export default new Router({
  routes: [

//        children:[ //子路径/home_one
		          {path:'/home_one',component:home_one,
		            children:[
		               {path:'/home_one/pavlion',component:pavlion},
		               {path:'/home_one/stoly',component:stoly},
		               {path:'/home_one',component:pavlion},
		            ]
		          },
		          
		          {path:'/home_tower',component:home_tower},
		          {path:'/home_three',component:home_three},
		           {path:'/tower_child',component:tower_child},
		           
		           {path:'/regis',component:regis},
		           {path:'/thelogin',component:thelogin},
		           {path:'/topic',component:topic},
		           
		           {path:'/toread1',component:toread1},
		            {path:'/like2',component:like2},
		             {path:'/message4',component:message4},
		             {path:'/setup5',component:setup5},
		             {path:'/about6',component:about6},
		             {path:'/feng',component:feng},
		           
		          {path:'*',component:feng},
		           {path:'/login',component:login},
		           
  ]
})
