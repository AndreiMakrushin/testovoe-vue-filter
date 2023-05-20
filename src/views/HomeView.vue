<script setup>
  import LogoAntDesign from '../components/LogoAntDesign.vue'
  import Select from '../components/Select.vue'
  import PeopleList from '../components/PeopleList.vue';
</script>

<template>
  <main>
    <LogoAntDesign/>
    <div class="body">
    <Select/>
    <PeopleList/>
    </div>
  </main>
</template>
<style scoped>
  .body{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
