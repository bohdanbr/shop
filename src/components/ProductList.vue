<template>
  <div class="wrapper">
    <div class="content">
      <div class="grid-container" :class="store.productsDesign">
        <div v-for="(product, index) in store.getProducts()" :key="index" class="item">
          <router-link :to="{ name: 'ProductInfo', params: { id: product.id } }" class="item-content">
            <div class="img"><img :src="product.image" /></div>
            <div class="details">
              <div class="title">
                <h2>{{ product.title }}</h2>
              </div>
              <div class="price">
                <p>Цена: ${{ product.price }}</p>
              </div>
              <div class="description">
                <p>Описание: {{ product.description }}</p>
              </div>
              <button v-if="!store.basket.includes(product.id)" @click.prevent="store.addToBasket(product.id)">Добавить в
                корзину</button>
              <button v-else @click.prevent="store.removeFromBasket(product.id)">Удалить из корзины</button>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { store } from '../store.js'

</script>

<style scoped>
.item-content {
  text-decoration: none;
  color:black;
}
.item-content button {
  font-size: 30px;
  border-radius: 10px;
}
.grid-container {
  display: grid;
  gap: 20px;

}

.grid-container.type-2 {
  grid-template-columns: repeat(1, 1fr);
}

.item {
  display: flex;
  border: 1px solid #ccc;
  padding: 20px;
}

@media screen and (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
    /* Два блока в строке для ширины экрана 768px и больше */
  }
}

@media screen and (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
    /* Три блока в строке для ширины экрана 1024px и больше */
  }
}

@media screen and (min-width: 1280px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
    /* Четыре блока в строке для ширины экрана 1280px и больше */
  }
}

.img img {
  width: 50%;
  /* Адаптивный размер изображений */
  height: 100px;
  object-fit: contain;

}

.img {
  display: flex;
  justify-content: center;
}

.type-2 .img {
  justify-content: start;

}

.type-2 .img img {
  width: fit-content;

}
</style>
