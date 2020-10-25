import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/ProjectPage.vue'
import RemontKvartir from '../views/Pages/RemontKvartir.vue'
import RemontDomov from '../views/Pages/RemontDomov.vue'
import StandardRemont from '../views/Pages/Kvartir/Standard.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

function prefixRoutes(prefix, routes) {
  return routes.map((route) => {
    route.path = prefix + '' + route.path;
    return route;
  });
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/remont-kvartir',
    name: 'remont-kvartir',

    component: RemontKvartir,

  },


  {
    path: '/remont-domov',
    name: 'remont-domov',

    component: RemontDomov
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/*',
    component: Home
  },
  ...prefixRoutes('/remont-kvartir',
    [
      {
        path: '/standard',
        name: 'remont-standard',
        component: StandardRemont
      },

    ]),
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
