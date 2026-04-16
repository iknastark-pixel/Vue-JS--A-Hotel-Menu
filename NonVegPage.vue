<template>
  <div class="page">
    <CartBadge />
    <div class="header">
      <h1> Non-Veg Menu</h1>
      <p>Select a category to explore dishes</p>
    </div>

    <div class="categories">
      <div
        v-for="cat in categories"
        :key="cat.key"
        class="cat-card"
        @click="go(cat.key)"
      >
        <div class="cat-name">{{ cat.label }}</div>
      </div>
    </div>

    <button class="back-btn" @click="$router.push('/')">Back</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import CartBadge from '../components/CartBadge.vue'

const router = useRouter()

const categories = [
  { key: 'seafood', label: 'Sea Food' },
  { key: 'starters', label: 'Starters' },
  { key: 'maindish', label: 'Main Dish' },
  { key: 'lunch', label: 'Lunch' },
  { key: 'supper', label: 'Supper' }
]

function go(cat) {
  router.push(`/nonveg/${cat}`)
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px 80px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 2.2rem;
  color: #c62828;
  margin-bottom: 6px;
}

.header p {
  color: #666;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 700px;
}

.cat-card {
  background: #ffffff;
  border: 2px solid #e53935;
  border-radius: 14px;
  padding: 24px 22px;
  text-align: center;
  cursor: pointer;
  width: 160px;
  transition: background 0.2s, border-color 0.2s;
}

.cat-card:hover {
  background: #fafafa;
}

.cat-name {
  font-weight: bold;
  font-size: 1.1rem;
  color: #c62828;
}

.back-btn {
  margin-top: 40px;
  background: #ffffff;
  color: #333;
  border: 1px solid #ccc;
  padding: 12px 28px;
  border-radius: 12px;
  font-size: 1rem;
  transition: background 0.2s, border-color 0.2s;
}

.back-btn:hover {
  background: #f4f4f4;
  border-color: #999;
}
</style>
