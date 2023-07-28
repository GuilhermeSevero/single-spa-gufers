import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/app1/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/app1/about',
    name: 'about',
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
