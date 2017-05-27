import Vue from 'vue'
import Router from 'vue-router'
import tankBattles from '@/components/tankBattles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tankBattles',
      component: tankBattles
    }
  ]
})
