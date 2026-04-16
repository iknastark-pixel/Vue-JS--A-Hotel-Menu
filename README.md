# Vue Multi-Page Application

## Overview

This project is a Vue.js-based web application that uses Vue Router to navigate between multiple views. It is structured using reusable components and follows a modular architecture to keep the code clean, scalable, and maintainable.

---

## Tech Stack

* Vue 3 (Composition API)
* Vue Router
* JavaScript (ES6)
* HTML & CSS

---

## Project Setup (From Scratch)

### 1. Create Project

```bash
npm create vue@latest
```

* Choose: Router = Yes
* Choose: Pinia = No (optional)

```bash
cd your-project-name
npm install
npm run dev
```

---

## Folder Structure (VERY IMPORTANT)

```
src/
 ├── assets/        # Static files (images, styles)
 ├── components/    # Reusable UI components
 │    └── NavTabs.vue
 │    └── UserCard.vue
 │
 ├── views/         # Page-level components (routed)
 │    └── Home.vue
 │    └── User.vue
 │
 ├── router/
 │    └── index.js  # Route configuration
 │
 ├── App.vue        # Root component
 ├── main.js        # Entry point
```

### Why this structure?

* **components/** → small reusable UI pieces
* **views/** → full pages (used by router)
* **router/** → controls navigation
* Separation improves readability and scalability

---

## Core Files Explanation

### main.js (Entry Point)

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

**Why important?**

* Initializes Vue app
* Injects router
* Mounts app to DOM

---

### App.vue (Root Layout)

```vue
<template>
  <div>
    <NavTabs />
    <router-view />
  </div>
</template>

<script setup>
import NavTabs from './components/NavTabs.vue'
</script>
```

**Why important?**

* Acts as global layout
* router-view dynamically renders pages

---

### router/index.js

```js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/user', component: User }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

**Why important?**

* Enables multi-page navigation without reload
* Maps URL → component

---

## Components

### NavTabs.vue

```vue
<template>
  <nav>
    <button @click="go('/')">Home</button>
    <button @click="go('/user')">User</button>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const go = (path) => router.push(path)
</script>
```

**Concepts used:**

* Event handling
* Router navigation

---

### UserCard.vue

```vue
<template>
  <div>
    <h3>{{ name }}</h3>
  </div>
</template>

<script setup>
defineProps(['name'])
</script>
```

**Concepts used:**

* Props (parent → child communication)

---

## Views (Pages)

### Home.vue

```vue
<template>
  <h1>Home Page</h1>
</template>
```

### User.vue

```vue
<template>
  <div>
    <UserCard v-for="user in users" :key="user.id" :name="user.name" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UserCard from '../components/UserCard.vue'

const users = ref([
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
])
</script>
```

---

## Key Vue Concepts Used

### 1. Reactivity

```js
const count = ref(0)
```

* Updates UI automatically when changed

### 2. Directives

* v-if → conditional rendering
* v-for → loops
* v-model → two-way binding

### 3. Event Handling

```vue
<button @click="increment">Click</button>
```

### 4. Routing

* Enables navigation without reload

---

## Workflow Summary

1. User opens app → main.js loads
2. App.vue renders layout
3. NavTabs always visible
4. router-view changes based on URL
5. Components render inside views
6. Data updates → UI updates automatically

---

## How to Run

```bash
npm install
npm run dev
```

---

## Future Improvements

* Add API integration (Axios)
* Add state management (Pinia)
* Add animations and transitions
* Add authentication system

---

## Conclusion

This project demonstrates a clean Vue architecture using routing, reusable components, and reactive data handling. It serves as a strong foundation for building scalable frontend applications.
