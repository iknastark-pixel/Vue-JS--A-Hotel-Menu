<template>
  <div class="page">
    <div class="form-card">
      <h1>Ram's Hotel</h1>
      <p class="description">Enter your name to start your order.</p>

      <input
        v-model="name"
        type="text"
        placeholder="Your name"
        @keyup.enter="openMenuTab"
      />

      <button :disabled="!canProceed" @click="openMenuTab">
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { user } from '../store.js'

const name = ref(user.name || '')
const canProceed = computed(() => name.value.trim().length > 0)

function openMenuTab() {
  if (!canProceed.value) return
  user.setName(name.value.trim())
  const url = `${window.location.origin}${window.location.pathname}#/menu`
  window.open(url, '_blank')
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background: #ffffff;
}

.form-card {
  width: 100%;
  max-width: 420px;
  padding: 36px 30px;
  border: 1px solid #d0d0d0;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 0 0 rgba(0,0,0,0);
}

h1 {
  margin-bottom: 12px;
  font-size: 2rem;
  color: #222;
}

.description {
  margin-bottom: 24px;
  color: #555;
  line-height: 1.5;
}

input {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  margin-bottom: 18px;
}

button {
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #444;
  background: #fff;
  color: #222;
  font-size: 1rem;
  cursor: pointer;
}

button:disabled {
  border-color: #ccc;
  color: #999;
  cursor: not-allowed;
}

button:not(:disabled):hover {
  background: #f4f4f4;
}
</style>
