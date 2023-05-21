import { ref, watchEffect} from 'vue'
import { defineStore } from 'pinia'
import data from '../data/data.json'

export const useUsersStore = defineStore('users', () => {
  
  const userAll = ref(data)

  const country = ref("")
  const points = ref("")

  watchEffect(()=>{
    userAll.value = data.filter((user)=> 
      user.country.includes(country.value) && user.point.includes(points.value)
    )
  })
  
  return { userAll, country, points }
})
