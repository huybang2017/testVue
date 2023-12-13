import { createRouter, createWebHistory } from "vue-router";
import About from "../components/About.vue";
// import AppVue from "../App.vue";
import Home from "../components/Home.vue";
import Infor from "../components/Infor.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/infor", name: "infor", component: Infor },
  ],
});

export default router;
