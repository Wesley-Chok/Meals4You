import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import MainMenu from './components/MainMenu.vue';
import SearchPage from './components/SearchPage.vue';

const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/MainMenu',
    component: MainMenu
  },
  {
    path: '/SearchPage',
    name: 'SearchPage',
    component: SearchPage
  }
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
