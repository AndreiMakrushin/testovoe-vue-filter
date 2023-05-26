import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import data from '../data/data.json'

export const useUsersStore = defineStore('users', () => {
  const country = ref('')
  const points = ref('')

  const filteredUsers = computed(() => {
    console.log(country.value, points.value);
    return data.filter((user) => {
      return user.country.includes(country.value) && user.point.includes(points.value)
    })
  })

  return { country, points, filteredUsers }
})
