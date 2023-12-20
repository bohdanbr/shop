<template>
    <router-link :to="{name: 'Basket'}">
    <div class="basket">
        <span v-if="store.basket.length">{{ store.basket.length }}</span>
        <font-awesome-icon icon="fa-solid fa-basket-shopping" size="2xl" />
    </div>
</router-link>
</template>

<script setup>
import { store } from '../store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<style scoped>
.basket {
    position: relative;
    width: fit-content;
    margin: 15px;
    margin-left: auto;
    padding-top: 20px;
}
.basket span {
    width: 20px;
    height: 20px;
    background-color: rgb(170, 47, 47);
    position: absolute;
    border-radius: 50%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: -15px;
    right: -10px;
    
}
</style>