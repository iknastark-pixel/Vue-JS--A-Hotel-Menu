<template>
  <div class="page">
    <CartBadge />
    <div class="header">
      <h1>{{ categoryLabel }}</h1>
      <p class="sub">{{ type === 'veg' ? ' Vegetarian' : ' Non-Vegetarian' }}</p>
    </div>

    <div class="food-list">
      <div
        v-for="item in foodItems"
        :key="item.id"
        class="food-card"
        :class="{ selected: cart.hasItem(item.id) }"
      >
        <div class="food-info">
          <span class="food-name">{{ item.name }}</span>
          <span class="food-price">₹{{ item.price }}</span>
        </div>
        <button
          v-if="!cart.hasItem(item.id)"
          class="add-btn"
          @click="addToCart(item)"
        >
          + Add
        </button>
        <div v-else class="tick-box"> Added</div>
      </div>
    </div>

    <div class="bottom-bar">
      <button class="back-btn" @click="$router.back()">Back</button>
      <button class="checkout-btn" @click="$router.push('/checkout')" :disabled="cart.count === 0">
         Checkout ({{ cart.count }})
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { cart } from '../store.js'
import { menuData, categoryLabels } from '../menuData.js'
import CartBadge from '../components/CartBadge.vue'

const route = useRoute()
const router = useRouter()
const type = route.path.startsWith('/veg/') ? 'veg' : 'nonveg'
const category = route.params.category

const foodItems = computed(() => {
  return menuData[type]?.[category] || []
})

const categoryLabel = computed(() => {
  return categoryLabels[category] || category
})

function addToCart(item) {
  cart.addItem({ ...item, type })
}

</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px 120px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 2rem;
  color: #8B1A1A;
}

.sub {
  color: #777;
  margin-top: 4px;
}

.food-list {
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.food-card {
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: border-color 0.2s;
}

.food-card.selected {
  border-color: #4caf50;
  background: #f0fdf0;
}

.food-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.food-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: #333;
}

.food-price {
  font-size: 0.95rem;
  color: #d35400;
  font-weight: bold;
}

.add-btn {
  background: #d35400;
  color: white;
  border: none;
  padding: 9px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background 0.2s;
}

.add-btn:hover {
  background: #a04000;
}

.tick-box {
  font-size: 0.95rem;
  color: #2e7d32;
  font-weight: bold;
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 2px solid #eee;
  padding: 14px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -3px 12px rgba(0,0,0,0.1);
}

.back-btn {
  background: #555;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 1rem;
}

.back-btn:hover {
  background: #333;
}

.checkout-btn {
  background: #d35400;
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.2s;
}

.checkout-btn:hover:not(:disabled) {
  background: #a04000;
}

.checkout-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
