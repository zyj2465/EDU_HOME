import Vue from 'vue'
import VueRouter from 'vue-router'
import Courses from '@/views/Courses.vue'
import Layout from '@/views/Layout.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children:[
      {
        path:'/Courses',
        name:"Courses",
        component:Courses
      },
      {
        path:"/",
        name:"Home",
        component:Courses,
      }
    ]
  },
  // 错误路由页面，当无法匹配到当前所输入路径的页面时自动跳转该页面
  {
    path:"*",
    component:() => import("@/views/errer.vue")
  },
  {
    path:'/Login',
    name:"Login",
    component:Login,
  }
];
// const route = routes
const router = new VueRouter({
  routes
})

export default router
