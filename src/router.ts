import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/pokemon/:name',
      name: 'detail',
      component: () => import('@/views/PkmnDetail.vue')
    },
    {
      path: '/moves',
      name: 'moves',
      component: () => import('@/views/Moves.vue')
    },
    {
      path: '/items',
      name: 'items',
      component: () => import('@/views/Items.vue')
    },
    {
      path: '/abilities',
      name: 'abilities',
      component: () => import('@/views/Abilities.vue')
    },
    {
      path: '/encounters',
      name: 'encounters',
      component: () => import('@/views/Encounters.vue')
    }
  ],
});
