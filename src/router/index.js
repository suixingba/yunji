import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: '宙叶科技'
          }
        }, {
          path: '/software',
          name: 'software',
          component: resolve => require(['@/view/Software'], resolve),
          meta: {
            title: '软件产品'
          },
          children: [
            {
              path: '/software',
              redirect: '/software/gege'
            },
            {
              path: '/software/gege',
              name: 'software',
              component: resolve => require(['@/view/Software_gege'], resolve),
              meta: {
                title: '软件产品丨双仓送物机器人—格格'
              }
            },
            {
              path: '/software/up',
              name: 'software',
              component: resolve => require(['@/view/Software_up'], resolve),
              meta: {
                title: '软件产品丨新一代酒店多功能服务机器人—UP'
              }
            }
          ]
        }, {
          path: '/companyintroduction',
          name: 'companyintroduction',
          component: resolve => require(['@/view/CompanyIntroduction'], resolve),
          meta: {
            title: '关于我们'
          }
        }
      ]
    }
  ]
})
