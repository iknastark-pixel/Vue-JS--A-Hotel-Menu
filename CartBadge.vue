<template>
  <div class="cart-badge-wrapper" @click="$router.push('/checkout')">
    <div class="cart-icon">
      <span class="cart-label">Cart</span>
      <span v-if="cart.count > 0" class="badge">{{ cart.count }}</span>
    </div>
    <div v-if="cart.count > 0" class="cart-preview">
      <div v-for="item in cart.items" :key="item.id" class="preview-item">
        <span>{{ item.name }}</span>
        <span>x{{ item.qty }}</span>
      </div>
      <div class="preview-total">Total: ₹{{ cart.total }}</div>
    </div>
  </div>
</template>

<script setup>
import { cart } from '../store.js'
</script>

<style scoped>
.cart-badge-wrapper {
  position: fixed;
  top: 16px;
  right: 20px;
  z-index: 999;
  cursor: pointer;
}

.cart-icon {
  background: #d35400;
  color: white;
  padding: 10px 18px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.2);
  position: relative;
}

.badge {
  background: #fff;
  color: #d35400;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
}

.cart-preview {
  background: white;
  border: 2px solid #d35400;
  border-radius: 10px;
  padding: 10px;
  margin-top: 6px;
  min-width: 200px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.preview-item {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  padding: 3px 0;
  border-bottom: 1px solid #f0e0d0;
}

.preview-total {
  font-weight: bold;
  color: #d35400;
  margin-top: 6px;
  text-align: right;
}
</style>
