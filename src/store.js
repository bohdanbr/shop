import { reactive } from 'vue'
import router from './router';

export const store = reactive({
  theme: 'day-theme',
  productsDesign: 'type-1',
  products: [],
  categories: [],
  error: '',
  loading: true,
  activeCategory: 'All',
  basket: [],

  changeTheme: (theme) => {
    store.theme = theme
  },
  fetchProducts: async () => {
    store.loading = true;
    if (localStorage.getItem('products')) {
      store.products = JSON.parse(localStorage.getItem('products'))
      store.products.forEach(product => {
        const category = product.category;
        if (!store.categories.includes(category)) store.categories.push(category);
        store.loading = false;
      });
      return
    }
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      store.products = await response.json();
      localStorage.setItem('products', JSON.stringify(store.products))
      store.products.forEach(product => {
        const category = product.category;

        if (!store.categories.includes(category)) store.categories.push(category);
      });
    } catch (error) {
      store.error = error.message;
    } finally {
      store.loading = false;
    }
  },
  getProducts: () => {
    if (store.activeCategory.toLowerCase() === 'all') {
      return store.products;
    } else {
      return store.products.filter(product => product.category === store.activeCategory);
    }
  },
  changeCategory: (status = 'All') => {
    store.activeCategory = status;
  },

  addToBasket: (id) => {
    if (!store.basket.includes(id)) store.basket.push(id);
  },

  removeFromBasket: (id) => {
    store.basket = store.basket.filter(product => product !== id);
  },
  goBack: () => {
    router.back();
  },
});