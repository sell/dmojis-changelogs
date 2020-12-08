import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/changelogs',
    name: 'Changelogs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "changelogs" */ '../views/Changelogs.vue'),
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import(/* webpackChunkName: "notifications" */ '../views/Notifications.vue'),
  },
  {
    path: '/suggestions',
    name: 'Suggestions',
    component: () => import(/* webpackChunkName: "suggestions" */ '../views/Suggestions.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
