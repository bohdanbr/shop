<template>
    <button @click="store.goBack">Назад</button>
    <div class="basket-page">
        <h1>Корзина</h1>
        <div class="basket">
        <span v-if="store.basket.length">{{ store.basket.length }}</span>
        <font-awesome-icon icon="fa-solid fa-basket-shopping" size="2xl" />
    </div>
        <div v-if="basketProducts.length === 0" class="basket-empty-text">
            <p>Ваша корзина пуста.</p>
        </div>
        <div v-else>
            <div v-for="(product, index) in basketProducts" :key="index" class="basket-item">
                <span class="img"><img :src="product.image" /></span>
                <span>{{ product.title }}</span>
                <span>Цена: ${{ product.price }}</span>
                <span>Описание: {{ product.description }}</span>
                <button @click="store.removeFromBasket(product.id)">Удалить из корзины</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { store } from '../store';
import { computed } from 'vue';

const basketProducts = computed(() => {
  return store.products.filter(product => store.basket.includes(product.id));
});
</script>

<style>
.basket-page {

}
.basket-empty-text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh; /* Для центрирования по вертикали на всю высоту экрана */
    font-size: 50px;
}

.basket-item { 
    display: flex;
  border: 1px solid #ccc;
  margin: 50px;
  padding: 20px;
}

.img img {
  width: 50%;
  height: 100px;
  object-fit: contain;

}

.img {
  display: flex;
  justify-content: center;
}
</style>

