<template>
    <button @click="store.goBack">Назад</button>
    <div class="basket-page">
        <h1>Корзина</h1>
        <div v-if="basketProducts.length === 0" class="basket-empty-text">
            <p>Ваша корзина пуста.</p>
        </div>
        <div v-else>
            <div v-for="(product, index) in basketProducts" :key="index" class="basket-item">
                <span class="img"><img :src="product.image" /></span>
                <span>{{ product.title }}</span>
                <button @click="store.removeFromBasket(product.id)">Удалить из корзины</button>
                <div class="quantity-control">
                    <button class="reduce">-</button>
                    <span class="value">{{ store.getItemQuantityById(product.id) }}</span>
                    <button class="increase" @click="store.addToBasket(product.id)">+</button>
                </div>
                <span class="price">Цена: ${{ product.price }}</span>
                <span class="total-price">Общая сумма: $ {{ store.getTotalPriceById(product.id) }}</span>
            </div>
            <div>
                <span class="all-total-price">Общая сумма всех товаров: ${{ totalPrice.toFixed(2) }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { store } from '../store';
import { computed } from 'vue';

const totalPrice = computed(() => {
  return parseFloat(store.getTotalPriceForAllItems());
});

const basketProducts = computed(() => {
    return store.products.filter(product => {
        const foundItem = store.basket.find(item => item.id === product.id);
        return foundItem !== undefined;
    });
});


</script>

<style>

.all-total-price {
    font-size: 40px;
}
.basket-page {
    margin: 0 auto;
    max-width: 1440px;
}
.basket-empty-text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    /* Для центрирования по вертикали на всю высоту экрана */
    font-size: 50px;
}

.basket-item {
    display: flex;
    border: 1px solid #ccc;
    margin: 50px;
    padding: 20px;
    font-size: 20px;
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

