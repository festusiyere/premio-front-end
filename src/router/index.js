import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeLayout from '@/layouts/Home.vue';
import HomeComponent from '@/pages/HomeComponent.vue';
import InstructionsComponent from '@/pages/InstructionsComponent.vue';
import AddPopupComponent from '@/pages/AddPopupComponent.vue';
import PopupViewComponent from '@/pages/PopupViewComponent.vue';
import PopupEditComponent from '@/pages/PopupEditComponent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '/',
    component: HomeLayout,
    children: [
      { path: 'home', name: 'home', component: HomeComponent },
      { path: 'instructions', component: InstructionsComponent },
      { path: 'popup/add', component: AddPopupComponent },
      { path: 'popup/:id', name: 'popup-view', component: PopupViewComponent },
      {
        path: 'popup/:id/edit',
        name: 'popup-edit',
        component: PopupEditComponent,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
});

export default router;
