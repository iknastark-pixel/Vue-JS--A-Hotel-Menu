<template>
  <div class="page">
    <CartBadge />
    <div class="header">
      <h1>Ram's Hotel</h1>
      <p class="tagline">Fresh Food, Great Taste</p>
      <p v-if="greeting" class="greeting">{{ greeting }}</p>
    </div>

    <div class="menu-section">
      <h2>Select Your Preference</h2>
      <div class="option-cards">
        <div class="card veg-card" @click="go('/veg')">
          <div class="card-title">Veg</div>
          <div class="card-sub">Pure vegetarian menu</div>
        </div>
        <div class="card nonveg-card" @click="go('/nonveg')">
          <div class="card-title">Non-Veg</div>
          <div class="card-sub">Seafood, chicken, mutton & more</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { user } from '../store.js'
import CartBadge from '../components/CartBadge.vue'

const router = useRouter()
const greeting = computed(() => {
  return user.name ? `Welcome, ${user.name}` : ''
})

function go(path) {
  router.push(path)
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

.header {
  text-align: center;
  margin-bottom: 50px;
}

.header h1 {
  font-size: 2.8rem;
  color: #8B1A1A;
  margin-bottom: 8px;
}

.tagline {
  font-size: 1.1rem;
  color: #555;
  font-style: normal;
}

.greeting {
  margin-top: 10px;
  color: #444;
  font-size: 1rem;
}

.menu-section {
  text-align: center;
}

.menu-section h2 {
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #444;
}

.option-cards {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  width: 200px;
  padding: 36px 20px;
  border-radius: 16px;
  cursor: pointer;
  text-align: center;
  transition: background 0.2s, border-color 0.2s;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #ffffff;
}

.card:hover {
  background: #f9f9f9;
  border-color: rgba(0, 0, 0, 0.18);
}

.veg-card {
  background: #ffffff;
  border: 2px solid #4caf50;
}

.nonveg-card {
  background: #ffffff;
  border: 2px solid #e53935;
}

.card-title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 6px;
}

.veg-card .card-title { color: #2e7d32; }
.nonveg-card .card-title { color: #c62828; }

.card-sub {
  font-size: 0.85rem;
  color: #666;
}
</style>
