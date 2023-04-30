import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/",
    component: import("./layouts/admin.vue"),
    children: [
      {
        path: "home",
        component: import("./pages/home.vue"),
        name: "home",
      },
      {
        path: "students",
        component: import("./pages/students.vue"),
        name: "students",
      },
      {
        path: "teachers",
        component: import("./pages/teachers.vue"),
        name: "teachers",
      },
    ],
  },
  {
    path: "",
    component: import("./layouts/blank.vue"),
    children: [
      {
        path: "/login",
        component: import("./pages/login.vue"),
        name: "login",
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
  {
    path: "/404",
    component: () =>
      import(/* webpackChunkName: "404-page" */ "./pages/404.vue"),
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
