<script setup>
import LogoAntDesign from '../components/LogoAntDesign.vue'
import Select from '../components/Select.vue'
import PeopleList from '../components/PeopleList.vue'

import Footer from '../components/Footer.vue'
</script>

<template>
  <main>
    <LogoAntDesign />
    <div class="body">
      <Select />
      <PeopleList />
    </div>
    <Footer />
  </main>
</template>
<style scoped>
main{
  height: 100vh;
}
.body {
  min-height: 77%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
