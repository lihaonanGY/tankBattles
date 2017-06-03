import Vue from 'vue'
import Router from 'vue-router'
// import tankBattles from '@/components/tankBattles'
import list from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'tankBattles',
    //   component: tankBattles
    // }
    {
      path: '/',
      name: 'list',
      component: list
    }
  ]
})
