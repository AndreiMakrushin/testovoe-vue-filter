<script setup>
import { ref,  watch} from 'vue'
import Dropdown from 'primevue/dropdown'
import { useUsersStore } from '../stores/users';

const users = useUsersStore()



const selectedCountry = ref('')
const selectedPoints = ref('')

watch(selectedCountry,()=>{
  users.country = selectedCountry.value.country
})
watch(selectedPoints,()=>{
  users.points = selectedPoints.value.points
})



const people = ref([
  { country: 'Russia', points: '< 20' },
  { country: 'Usa', points: '< 10' }
])
</script>

<template>
  <div class="selectors">
    <div class="select">
      <div class="p-float-label" >
        <Dropdown
          v-model="selectedCountry"
          inputId="dd-city"
          :options="people"
          optionLabel="country"
          placeholder="Выберите страну"
          class="w-full md:w-14rem"
        />
        <label for="dd-city">Выберите страну</label>
      </div>
    </div>
    <div class="select">
        <div class="p-float-label">
        <Dropdown
          v-model="selectedPoints"
          inputId="dd-city"
          :options="people"
          optionLabel="points"
          placeholder="Выберите количество баллов"
          class="w-full md:w-14rem"
        />
        <label for="dd-city">Выберите количество баллов</label>
      </div>
    </div>
  </div>
</template>

<style scoped>

.select {
  padding-bottom: 25px;
}
.selectors {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
</style>
