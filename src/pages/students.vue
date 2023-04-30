<template>
  <div>students</div>
  <ul>
    <li v-for="student in students">
      <pre>{{ student.first_name }}</pre>
      <button
        @click="remove(student.uuid)"
        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Borrar
      </button>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Students } from "../services/students";

const students: any = ref([]);

onMounted(() => {
  getStudents();
});
const getStudents = () => {
  Students.get().then((items) => {
    students.value = items;
  });
};

const remove = (id: string) => {
  Students.delete(id);
  getStudents();
};
</script>
