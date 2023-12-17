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
<!-- фильровать значение по activeCategory 
store > getProducts
Menu >  -->
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
}

ul li {
    margin-top: 10px;
}

li.active {
    color: blue;
}
</style>