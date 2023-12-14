<template>
  <div class="wrapper">
    <div class="tools">
      <input type="radio" name="" id="">
      <label for="">Сетка</label>
      <input type="radio" name="" id="">
      <label for="">Списком</label>
    </div>
    <div v-for="index in 10" :key="index" class="content">
      <div class="item">
        <div class="title"></div>
        <div class="img"></div>
        <div class="price"></div>
        <div class="description"></div>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>
