<template>
  <div class="wrapper">
    <div class="content">
      <div class="grid-container">
        <div v-for="(item, index) in items" :key="index" class="item">
          <div class="item-content">
            <div class="img"><img :src="item.image" /></div>
            <div class="details">
              <div class="title"><h2>{{ item.title }}</h2></div>
              <div class="price"><p>Цена: ${{ item.price }}</p></div>
              <div class="description"><p>Описание: {{ item.description }}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const items = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    items.value = await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
});
</script>

<style scoped>
.grid-container {
  display: grid;
  gap: 20px;
}

.item {
  display: flex;
  border: 1px solid #ccc;
  /* Остальные стили блока */
}

@media screen and (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr); /* Два блока в строке для ширины экрана 768px и больше */
  }
}

@media screen and (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr); /* Три блока в строке для ширины экрана 1024px и больше */
  }
}

@media screen and (min-width: 1280px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr); /* Четыре блока в строке для ширины экрана 1280px и больше */
  }
}

/* Дополнительные стили */
.img img {
  width: 50%; /* Адаптивный размер изображений */
  height: auto;
  object-fit: cover;
}
</style>
