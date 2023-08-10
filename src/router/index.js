import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import GraphExampleView from "../views/GraphExampleView.vue";
import RecordView from "../views/RecordView.vue";
import RecordDetailView from "../views/RecordDetailView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/graph-example",
    name: "graph-example",
    component: GraphExampleView,
  },
  {
    path: "/record",
    name: "record",
    component: RecordView,
  },
  {
    path: "/record-detail/:recordId",
    name: "record-detail",
    component: RecordDetailView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
