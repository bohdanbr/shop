<template>
    <div class="menu">
        <h2>Categories</h2>
        <ul>
            <li @click="store.changeCategory()" :class="store.activeCategory.toLowerCase() === 'all' ? 'active' : ''">All
            </li>
            <li v-for="(category, index) in store.categories" :key="index" @click="store.changeCategory(category)"
                :class="store.activeCategory.toLowerCase() === category ? 'active' : ''">{{ category }}</li>
        </ul>
    </div>
</template>

<script setup>
import { store } from '../store';

</script>

<style>
.menu {
    padding: 20px;
}

ul {
    list-style: none;
    padding: 0;
    font-size: 20px;
    transition: color 0.3s ease;
}

ul li {
    margin-top: 20px;
    cursor: pointer;
}

ul li:hover {
  color: rgba(95, 18, 18, 0.588);
}

li.active {
    color: rgb(170, 47, 47);
    font-size: 42px;
}
</style>