<script setup>
import { ref } from 'vue'

const date = ref(new Date().getFullYear())
</script>
<template>
  <div>
    <div class="footer-container">
      <div class="footer">{{ date }} - <strong>PRIMEVUE</strong></div>
    </div>
  </div>
</template>
<style scoped>
.footer-container {
  position: absolute;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: #f44336;
}
.footer {
  font-family: 'Poppins', sans-serif;
  color: white;
  padding: 16px;
}
</style>
