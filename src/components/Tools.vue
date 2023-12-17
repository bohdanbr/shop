<template>
  <div class="tools" :class="store.theme">
    <font-awesome-icon @click="changeDesign('type-1')" icon="fa-solid fa-grip" size="2xl" />
    <font-awesome-icon @click="changeDesign('type-2')" icon="fa-solid fa-grip-lines" size="2xl" />
    <font-awesome-icon :icon="store.theme === 'night-theme' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" size="2xl"
      @click="toggleTheme" />
  </div>
</template>
  
<script setup>
import { store } from '../store.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGrip, faGripLines, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faGrip, faGripLines, faSun, faMoon);

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
  cursor: pointer;
}

.tools {
  display: flex;
  justify-content: end;
  padding-right: 10px;
}
</style>
  