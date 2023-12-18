import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { faGrip, faGripLines, faSun, faMoon, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faGrip, faGripLines, faSun, faMoon, faBasketShopping);

createApp(App).mount('#app')
