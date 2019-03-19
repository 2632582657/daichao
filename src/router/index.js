import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index'
import Whole from '@/components/pages/whole'
import Member from '@/components/pages/member'
import Longin from '@/components/subComponents/member/login'
import LoanDetail from '@/components/subComponents/whole/loan_detail.vue'
Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    {
      path:'/',
      component:Index,
      meta:{navShow:true}
    },
    {
      path: '/home',
      name: 'loan_index',
      component: Index,
      meta:{navShow:true}
    },
    {
      path:'/whole',
      name:'loan_whole',
      component:Whole,
      meta:{navShow:true}
    },
    {
      path:'/member',
      name:'loan_member',
      component:Member,
      meta:{navShow:true}
    },
    {
      path:'/longin',
      name:'login',
      component:Longin,
     
    },
    {
      path:'/detail',
      name:'detail',
      component:LoanDetail,
     
    }
  ]
})
