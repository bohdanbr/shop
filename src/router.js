import { createRouter, createWebHashHistory } from 'vue-router';
import BasketPage from './pages/BasketPage.vue';
import HomePage from './pages/HomePage.vue';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/basket', name: 'Basket', component: BasketPage },
  ],
});

export default router;