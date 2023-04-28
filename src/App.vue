<template>
  <h1 class="text-3xl font-bold text-cyan-500 text-center">Taekwondo App!</h1>
  <h6>Estudiantes</h6>
  <ul>
    <li v-for="student in students">
      <pre>{{ student }}</pre>
    </li>
  </ul>
  <h6>Cintas</h6>
  <ul>
    <li v-for="belt in belts">
      <pre>{{ belt }}</pre>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Students } from "./services/students";
import { Belts } from "./services/belts";

const students: any = ref([]);
const belts: any = ref([]);

onMounted(() => {
  getStudents();
  getBelts();
  /*
  Belts.create({ name: "Negro" });
  */
  Students.create({
    first_name: "John",
    last_name: "Doe",
    email: "jd@gmail.com",
    identity_number: "112233699",
    organization_id: 2,
    gender: "male",
    disability: "",
    date_of_bird: "1995-12-15",
    phone: "04159652",
    belt_id: ["recGis5hbiaLe67Z5"],
    address: "USA",
  });
});
const getStudents = () => {
  Students.get().then((items) => {
    students.value = items;
  });
};

const getBelts = () => {
  Belts.get().then((items) => {
    belts.value = items;
  });
};
</script>
