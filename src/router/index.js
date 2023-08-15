import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import GraphExampleView from "../views/GraphExampleView.vue";
import GraphView from "../views/GraphView.vue";
import RecordView from "../views/RecordView.vue";
import RecordDetailView from "../views/RecordDetailView.vue";
import LoginPage from "../components/LoginPage.vue";
import RegisterPage from "../components/RegisterPage.vue";
// lazy-loaded
const ProfilePage = () => import("../components/ProfilePage.vue");
const BoardAdmin = () => import("../components/BoardAdmin.vue");
const BoardModerator = () => import("../components/BoardModerator.vue");
const BoardUser = () => import("../components/BoardUser.vue");

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
    path: "/graph",
    name: "graph",
    component: GraphView,
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
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: ProfilePage,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
