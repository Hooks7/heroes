import Vue from 'vue'
import VueRouter from 'vue-router';
import appList from './hero/app-list';
import Foo from './views/app-foo';
import Bar from './views/app-bar'
import addHero from './hero/add-hero'
import routing from './views/secondary-routing'
import eitHero from './hero/edit-hero'


Vue.use(VueRouter) //使用

const router = new VueRouter({
  // 路由表
  linkActiveClass: 'active',
  routes: [{
      path: '/hero',
      component: routing,
      children: [{

          path: 'add',
          component: addHero
        }, {
          path: '',
          component: appList
        },
        {
          path: 'edit/:id',
          component: eitHero
        }
      ]

    }, {
      path: '/foo',
      component: Foo
    }, {
      path: '/bar',
      component: Bar
    },
    {
      path: '',
      component: appList
    }
  ]

})
export default router
