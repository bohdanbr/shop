import { reactive } from 'vue'

export const store = reactive({
  theme: 'day-theme',
  productsDesign: 'type-1',
  products: [],
  categories: [],
  error: '',
  loading: true,
  activeCategory: 'All',

  changeTheme: (theme) => {
    store.theme = theme
  },
  fetchProducts: async () => {
    store.loading = true;
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      store.products = await response.json();
      store.products.forEach(product => {
        if (!store.categories.includes(product.category)) store.categories.push(product.category)
      });
    } catch (error) {
      store.error = error.message;
    } finally {
      store.loading = false;
    }
  },

  changeCategory: (status = 'all') => store.activeCategory = status,

})