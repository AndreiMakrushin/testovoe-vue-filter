<script setup>
import { ref, watch } from 'vue'
import Dropdown from 'primevue/dropdown'
import { useUsersStore } from '../stores/users'

const users = useUsersStore()

const selectedCountry = ref('')
const selectedPoints = ref('')

watch(selectedCountry, () => {
  users.country = selectedCountry.value.country
})
watch(selectedPoints, () => {
  users.points = selectedPoints.value.point
})

const arrCountry = users.filteredUsers.map((item) => {
  return { country: item.country, points: item.point }
})
const result = []

arrCountry.forEach((item) => {
  result.push({
    country: item.country
  })
  result.push({
    point: item.points
  })
})
const unique = (result) => [...new Set(result.map(JSON.stringify))].map(JSON.parse)

let people = unique(result)
</script>

<template>
  <div class="selectors">
    <div class="select">
      <div class="p-float-label">
        <Dropdown
          v-model="selectedCountry"
          :options="people"
          optionLabel="country"
          placeholder="Выберите страну"
        />
        <label for="dd-city">Выберите страну</label>
      </div>
    </div>
    <div class="select">
      <div class="p-float-label">
        <Dropdown
          v-model="selectedPoints"
          :options="people"
          optionLabel="point"
          placeholder="Выберите количество баллов"
        />
        <label for="dd-city">Выберите количество баллов</label>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.p-dropdown-label) {
  width: 300px;
}
.select {
  padding-bottom: 25px;
}
.selectors {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
</style>
