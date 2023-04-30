import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from "vue3-google-login";

createApp(App)
  .use(router)
  .use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_CLIENT_ID,
  })
  .mount("#app");
