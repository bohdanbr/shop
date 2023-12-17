<template>
  <div class="wrapper">
    <div :class="store.theme">
      <div class="loader-container" v-if="store.loading">
        <span class="loader"></span>
      </div>
      <template v-else>
        <Tools />
        <div class="content">
          <Menu />
          <ProductList />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import ProductList from './components/ProductList.vue';
import Tools from './components/Tools.vue';
import Menu from './components/Menu.vue';
import { store } from './store';

store.fetchProducts()

</script>

<style>
.wrapper {
  margin: 0 auto;
  max-width: 1440px;
}

.content {
  display: flex;
}

.day-theme {
  background-color: white;
  color: black;
}

.night-theme {
  background-color: black;
  color: white;
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loader {
  width: 96px;
  height: 96px;
  border: 10px solid #000000;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>