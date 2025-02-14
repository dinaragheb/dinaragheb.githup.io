const app = {
  data() {
    return {
      title: 'Fast Food Bestellung',
      foods: foodlist,         
      filteredFoods: [...foodlist], 
      maxPrice: '',            
    };
  },
  methods: {
    applyFilter() {
      if (this.maxPrice === '') {
        this.filteredFoods = [...this.foods]; 
      } else {
        this.filteredFoods = this.foods.filter(food => food.price <= this.maxPrice);
      }
    },
    removeItem(index) {
      const itemToRemove = this.filteredFoods[index];
      this.foods = this.foods.filter(food => food.id !== itemToRemove.id); 
      this.applyFilter(); 
    }
  }
};

Vue.createApp(app).mount('#app');
