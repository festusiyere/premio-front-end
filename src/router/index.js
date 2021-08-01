import Vue from "vue";
import VueRouter from "vue-router";
import HomeLayout from "@/layouts/Home.vue";
import HomeComponent from "@/pages/HomeComponent.vue";
import InstructionsComponent from "@/pages/InstructionsComponent.vue";
import AddPopupComponent from "@/pages/AddPopupComponent.vue";
import PopupViewComponent from "@/pages/PopupViewComponent.vue";
import PopupEditComponent from "@/pages/PopupEditComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeLayout,
    children: [
      { path: "home", component: HomeComponent },
      { path: "instructions", component: InstructionsComponent },
      { path: "popup/add", component: AddPopupComponent },
      { path: "popup/:id", name: "popup-view", component: PopupViewComponent },
      { path: "popup/:id/edit", name: "popup-edit", component: PopupEditComponent },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
