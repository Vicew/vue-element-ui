import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from 'components/dash-board/dash-board'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: DashBoard
    }
  ]
})
