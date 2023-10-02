import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import MainMenu from './components/MainMenu.vue';


const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/MainMenu',
    component: MainMenu
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
