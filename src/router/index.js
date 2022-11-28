import PageHome from "@/components/PageHome.vue";
import { createRouter, createWebHistory } from "vue-router";
import PageThreadShowVue from "@/components/PageThreadShow.vue";

const routes = [
  { path: "/", name: "Home", component: PageHome },
  {
    path: "/thread/show/:id",
    name: "ThreadShow",
    component: PageThreadShowVue,
    props: true,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
