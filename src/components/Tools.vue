<template>
  <div class="tools" :class="store.theme">
    <font-awesome-icon @click="changeDesign('type-1')" icon="fa-solid fa-grip" size="2xl" />
    <font-awesome-icon @click="changeDesign('type-2')" icon="fa-solid fa-grip-lines" size="2xl" />
    <font-awesome-icon :icon="store.theme === 'day-theme' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" size="2xl"
      @click="toggleTheme" />
  </div>
</template>
  
<script setup>
import { store } from '../store.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


const toggleTheme = () => {
  store.changeTheme(store.theme === 'day-theme' ? 'night-theme' : 'day-theme');
};

const changeDesign = (type) => {
  store.productsDesign = type;
};
</script>
  
<style scoped>
svg {
  margin: 15px 0 15px 15px;
  transition: color 0.3s ease;
}
svg:hover {
  cursor: pointer;
  color: rgba(95, 18, 18, 0.588);
}

.tools {
  display: flex;
  justify-content: end;
  padding-right: 10px;
}
</style>
  