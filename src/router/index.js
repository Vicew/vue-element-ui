import Vue from 'vue'
import Router from 'vue-router'
// import DashBoard from 'components/dash-board/dash-board'
import Question from 'components/question/question'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Question
    },
    {
      path: '/question',
      name: 'question',
      component: Question
    }
  ]
})
