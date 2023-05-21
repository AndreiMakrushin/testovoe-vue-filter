<script setup>
import { ref } from 'vue'
import { useUsersStore } from '../stores/users'

const userAll = useUsersStore()

const secretInfo = ref(0)
</script>
<template>
  <div class="cards">
    <span class="header">List</span>
    <div
      class="card"
      v-for="user in userAll.userAll"
      :key="user.id"
      @click="secretInfo = `${user.id}`"
    >
      <div class="image">
        <img :src="user.Avatar" />
      </div>
      <div class="title">
        <h3>{{ user.title }}</h3>
        <strong>{{ user.Name }}</strong> {{ user.ubTitle }}
      </div>
      <div class="shadow" v-if="user.id == secretInfo">
        Возраст: {{ user.secret.age }} Количество Детей: {{ user.secret.children }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.shadow {
  position: relative;
  z-index: 9;
  box-shadow: 0px 3px 1px -2px rgba(165, 155, 155, 0.2), 0px 2px 2px 0px rgba(97, 91, 91, 0.14),
    0px 1px 5px 0px rgba(121, 114, 114, 0.12);
  display: flex;
  text-align: center;
  height: 100%;
}
.cards {
  max-width: 450px;
  margin-bottom: 40px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%),
    0px 1px 5px 0px rgb(0 0 0 / 12%);
}
.header {
  align-items: center;
  display: flex;
  height: 48px;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 0 16px 0 16px;
  color: rgba(0, 0, 0, 0.6);
}
.card {
  padding: 20px;
  display: flex;
  flex-direction: row;
}
.image {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  object-fit: cover;
  overflow: hidden;
}
img {
  width: 100%;
}
.title {
  z-index: 1;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.6);
  margin-left: 20px;
}
.title h3 {
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
}
.title span {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
}
</style>
