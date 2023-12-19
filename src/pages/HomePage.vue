<template>
    <div :class="store.theme">
        <div class="wrapper">
            <div class="loader-container" v-if="store.loading">
                <span class="loader"></span>
            </div>
            <template v-else>
                <div v-if="store.error" class="fetch-error">
                    <div class="error-text">
                        <img src="../assets/images/error.png" alt="Error image">
                        Не удалось загрузить продукты. Пожалуйста, попробуйте ещё раз или немного позже.
                    </div>
                </div>
                <template v-else>
                    <Basket />
                    <Tools />
                    <div class="content">
                        <Menu />
                        <ProductList />
                    </div>
                </template>
            </template>
        </div>
    </div>
</template>

<script setup>
import ProductList from '../components/ProductList.vue';
import Tools from '../components/Tools.vue';
import Menu from '../components/Menu.vue';
import Basket from '../components/Basket.vue';
import { store } from '../store';


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
    transition: background-color 0.3s ease, color 0.3s ease;
}

.night-theme {
    background-color: rgb(23, 17, 31);
    color: white;
    transition: background-color 0.3s ease, color 0.3s ease;
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

.fetch-error {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 30px;
    border-radius: 10px;

}

.error-text {
    background-color: rgb(252, 252, 252);
    padding: 20px;
    border-radius: 10px;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.error-text img {
    width: 25%;
    height: 25%;
}
</style>