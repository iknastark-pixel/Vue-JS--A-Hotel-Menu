import { reactive } from 'vue'

export const cart = reactive({
  items: [], // { id, name, price, category }

  addItem(item) {
    const existing = this.items.find(i => i.id === item.id)
    if (!existing) {
      this.items.push({ ...item, qty: 1 })
    } else {
      existing.qty++
    }
  },

  removeItem(id) {
    const idx = this.items.findIndex(i => i.id === id)
    if (idx !== -1) this.items.splice(idx, 1)
  },

  hasItem(id) {
    return this.items.some(i => i.id === id)
  },

  get total() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0)
  },

  get count() {
    return this.items.reduce((sum, i) => sum + i.qty, 0)
  },

  clear() {
    this.items = []
  }
})
