<template>
  <div>
    Administrator
    <div>
      <router-link :to="{ name: 'students' }">Estudiantes</router-link>
      <router-link :to="{ name: 'teachers' }">Profesores</router-link>
    </div>
    <router-view />
  </div>
</template>
