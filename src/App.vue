<template>
  <div id="app">
    <Tools />
    <ProductList />
  </div>
</template>

<script setup>
import ProductList from './components/ProductList.vue';
import Tools from './components/Tools.vue';
</script>

<style>
  #app {
    margin: 20px;
  }
</style>