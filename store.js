import { reactive, computed, watch } from 'vue'

const savedState = JSON.parse(localStorage.getItem('ramHotelState') || '{}')

const state = reactive({
  user: {
    name: savedState.user?.name || ''
  },
  cartItems: savedState.cartItems || []
})

const user = {
  get name() {
    return state.user.name
  },
  setName(name) {
    state.user.name = name
  },
  clear() {
    state.user.name = ''
  }
}

const cart = {
  get items() {
    return state.cartItems
  },
  addItem(item) {
    const existing = state.cartItems.find(i => i.id === item.id)
    if (!existing) {
      state.cartItems.push({ ...item, qty: 1 })
    } else {
      existing.qty++
    }
  },
  removeItem(id) {
    const idx = state.cartItems.findIndex(i => i.id === id)
    if (idx !== -1) state.cartItems.splice(idx, 1)
  },
  hasItem(id) {
    return state.cartItems.some(i => i.id === id)
  },
  clear() {
    state.cartItems.splice(0)
  },
  get total() {
    return state.cartItems.reduce((sum, i) => sum + i.price * i.qty, 0)
  },
  get count() {
    return state.cartItems.reduce((sum, i) => sum + i.qty, 0)
  }
}

watch(
  () => ({ user: state.user, cartItems: state.cartItems }),
  value => {
    localStorage.setItem('ramHotelState', JSON.stringify(value))
  },
  { deep: true }
)

export { user, cart }
