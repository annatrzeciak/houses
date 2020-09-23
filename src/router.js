import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Houses from "@/views/Houses";
import AddHouse from "@/views/AddHouse";
import HouseDetails from "@/views/HouseDetails";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/houses",
    name: "houses",
    component: Houses,
  },
  {
    path: "/house-details/:id",
    name: "house-details",
    component: HouseDetails,
  },
  {
    path: "/add-house",
    name: "add-house",
    component: AddHouse,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
