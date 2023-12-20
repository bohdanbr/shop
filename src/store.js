import { reactive, computed } from 'vue'
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
  
  setCategories: () => {
    store.products.forEach(product => {
      const category = product.category;
      if (!store.categories.includes(category)) store.categories.push(category);
    })
  },

  fetchProducts: async () => {
    store.loading = true;
    if (localStorage.getItem('products')) {
      store.products = JSON.parse(localStorage.getItem('products'))
      store.setCategories()
      store.loading = false;
      return
    }
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      store.products = await response.json();
      localStorage.setItem('products', JSON.stringify(store.products))
      store.setCategories()
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
    const index = store.basket.findIndex(item => item.id === id);
    if (index !== -1) {
      store.basket[index].quantity++; // Увеличиваем количество товара на 1
    } else {
      store.basket.push({ id, quantity: 1 }); // Добавляем товар с начальным количеством 1
    }
  },

  removeFromBasket: (id) => {
    store.basket = store.basket.filter(product => product !== id);
  },
  getItemQuantityById: (id) => {
    const item = store.basket.find(item => item.id === id);
    return item ? item.quantity : 0;
  },
  getTotalPriceById: (id) => {
    const item = store.basket.find(item => item.id === id);
    const product = store.products.find(product => product.id === id);
    return item ? item.quantity * product.price : 0;
  },
  getTotalPriceForAllItems: () => {
    const totalPrice = store.basket.reduce((total, item) => {
      const product = store.products.find(product => product.id === item.id);
      return total + item.quantity * product.price;
    }, 0);
  
    // Округление до двух знаков после запятой
    return totalPrice.toFixed(2);
  },
  
  goBack: () => {
    router.back();
  },
});