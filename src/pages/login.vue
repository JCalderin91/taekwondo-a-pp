<template>
  <GoogleLogin :callback="callback" />
  <button @click="logout">Logout</button>
</template>

<script setup lang="ts">
import { decodeCredential, googleLogout } from "vue3-google-login";
const callback = (response: any) => {
  // decodeCredential will retrieve the JWT payload from the credential
  const userData = decodeCredential(response.credential);
  console.log("Handle the userData", userData);
};
const logout = () => {
  // your logout logics
  googleLogout();
};
</script>
