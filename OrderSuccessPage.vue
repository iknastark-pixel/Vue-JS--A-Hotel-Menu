<template>
  <div class="page">
    <div class="success-box">
      <div class="check-icon"></div>
      <h1>Payment Successful!</h1>
      <p class="msg">{{ greeting }}</p>
      <p v-if="orderId" class="order-id">Order ID: {{ orderId }}</p>
      <p class="sub">Do visit us again. Thank you for choosing Ram's Hotel!</p>
      <button class="home-btn" @click="$router.push('/')">Back to Menu</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { user } from '../store.js'

const route = useRoute()
const greeting = computed(() => {
  const name = user.name
  return name ? `Thanks, ${name}. Your order is confirmed.` : 'Your order is confirmed.'
})
const orderId = computed(() => route.query.orderId || '')
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.success-box {
  background: white;
  border: 3px solid #27ae60;
  border-radius: 20px;
  padding: 50px 40px;
  text-align: center;
  max-width: 440px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.1);
}

.check-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

h1 {
  font-size: 2rem;
  color: #27ae60;
  margin-bottom: 14px;
}

.msg {
  font-size: 1.15rem;
  color: #333;
  margin-bottom: 8px;
}

.order-id {
  font-size: 1rem;
  color: #555;
  margin-bottom: 12px;
}

.sub {
  color: #888;
  margin-bottom: 30px;
}

.home-btn {
  background: #8B1A1A;
  color: white;
  border: none;
  padding: 13px 30px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

.home-btn:hover {
  background: #5a1010;
}
</style>
