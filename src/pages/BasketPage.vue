<template>
    <button @click="store.goBack">Назад</button>
    <div class="basket-page">
        <h1>Корзина</h1>
        <div v-if="basketProducts.length === 0" class="basket-empty-text">
            <p>Ваша корзина пуста.</p>
        </div>
        <div v-else>
            <div v-for="(product, index) in basketProducts" :key="index" class="basket-item">
                <div class="img"><img :src="product.image" /></div>
                <div>{{ product.title }}</div>
                <div>Цена: ${{ product.price }}</div>
                <p>Описание: {{ product.description }}</p>
                <button @click="store.removeFromBasket(product.id)">Удалить из корзины</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { store } from '../store';

const basketProducts = store.products.filter(product => store.basket.includes(product.id));

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

