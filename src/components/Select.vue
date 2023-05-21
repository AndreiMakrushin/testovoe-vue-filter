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

const arrCountry = users.userAll.map((item) => {
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
//Проверка на уникальность
const isEqual = (result, b) => {
  let prop
  for (prop in result) {
    if (result[prop] !== b[prop]) return false
  }
  for (prop in b) {
    if (b[prop] !== result[prop]) return false
  }
  return true
}
// еслит значение уникально, делаем push
const unique = (result) => {
  let isAdded,
    arr = []

  for (let i = 0; i < result.length; i++) {
    isAdded = arr.some((v) => {
      return isEqual(v, result[i])
    })
    if (!isAdded) {
      arr.push(result[i])
    }
  }
  return arr
}
let people = unique(result)
</script>

<template>
  <div class="selectors">
    <div class="select">
      <div class="p-float-label">
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
          optionLabel="point"
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
