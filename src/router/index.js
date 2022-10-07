import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: ()=>import('../views/Home.vue'),
  },{
    path: '/add',
    name: 'Add',
    component: ()=>import('../views/Add.vue'),
  },{
    path: '*',
    redirect:'/home'
  },
]

const router = new VueRouter({
  routes
})

export default router;