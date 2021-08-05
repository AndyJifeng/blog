import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import LearningRecord from '../views/LearningRecord.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[{
      path:'/hello',
      name:'Hello',
      component: () => import("../views/Hello.vue")
    },
    {
      path:'/learningRecord',
      name:'LearningRecord',
      component: LearningRecord
    },{
      path:'/about',
      name:'About',
      component:() => import("../views/About.vue")
    }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
