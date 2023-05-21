import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import data from '../data/data.json'

export const useUsersStore = defineStore('users', () => {
  const userAll = ref(data)
  const country = ref('')
  const points = ref('')

  watchEffect((onInvalidate) => {
    if (!country.value && !points.value) {
      userAll.value = data
      return
    }
    const filteredUsers = data.filter(
      (user) =>
        (!country.value || user.country.includes(country.value)) &&
        (!points.value || user.point.includes(points.value))
    )
    userAll.value = filteredUsers
    onInvalidate(() => {
      userAll.value = data
    })
  })

  return { userAll, country, points }
})
