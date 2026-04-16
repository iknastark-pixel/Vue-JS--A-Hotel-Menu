<template>
  <div id="app-root">
    <router-view />
  </div>
</template>

<script setup>
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #ffffff;
  min-height: 100vh;
  color: #2d2d2d;
}

#app-root {
  min-height: 100vh;
}

button {
  cursor: pointer;
  font-family: inherit;
}
</style>
