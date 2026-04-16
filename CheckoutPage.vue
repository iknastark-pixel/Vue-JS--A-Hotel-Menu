<template>
  <div class="page">
    <div class="header">
      <h1>Checkout</h1>
      <p class="subtitle" v-if="userName">Order for {{ userName }}</p>
    </div>

    <div v-if="cart.items.length === 0" class="empty">
      <p>Your cart is empty!</p>
      <button class="back-btn" @click="$router.push('/')">Go to Menu</button>
    </div>

    <div v-else class="checkout-content">
      <div class="order-list">
        <div v-for="item in cart.items" :key="item.id" class="order-row">
          <div class="order-info">
            <span class="item-name">{{ item.name }}</span>
            <span class="item-qty">x{{ item.qty }}</span>
          </div>
          <div class="order-right">
            <span class="item-total">₹{{ item.price * item.qty }}</span>
            <button class="remove-btn" @click="cart.removeItem(item.id)">Remove</button>
          </div>
        </div>
      </div>

      <div class="total-box">
        <span>Total Amount</span>
        <span class="total-amount">₹{{ cart.total }}</span>
      </div>

      <div class="bottom-bar">
        <button class="back-btn" @click="$router.back()">Back</button>
        <button class="pay-btn" @click="pay()">Pay ₹{{ cart.total }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { cart, user } from '../store.js'

const router = useRouter()
const userName = computed(() => user.name)

function pay() {
  const orderId = String(Math.floor(100000 + Math.random() * 900000))
  cart.clear()
  router.push({ path: '/success', query: { orderId } })
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

.subtitle {
  color: #555;
  margin-top: 6px;
  font-size: 1rem;
}

.empty {
  text-align: center;
  margin-top: 60px;
}

.empty p {
  font-size: 1.2rem;
  color: #888;
  margin-bottom: 20px;
}

.checkout-content {
  width: 100%;
  max-width: 550px;
}

.order-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.order-row {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 14px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item-name {
  font-weight: 600;
  font-size: 1rem;
}

.item-qty {
  color: #888;
  font-size: 0.85rem;
}

.order-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.item-total {
  font-weight: bold;
  color: #d35400;
  font-size: 1rem;
}

.remove-btn {
  background: #fee;
  border: 1px solid #f99;
  color: #c00;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-btn:hover {
  background: #fcc;
}

.total-box {
  background: #fff3e0;
  border: 2px solid #d35400;
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.total-amount {
  color: #d35400;
  font-size: 1.4rem;
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
  cursor: pointer;
}

.back-btn:hover {
  background: #333;
}

.pay-btn {
  background: #27ae60;
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

.pay-btn:hover {
  background: #1e8449;
}
</style>
