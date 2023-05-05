import Vue from "vue";
import Router from "vue-router";

import home from "../components/HelloWorld.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../components/HelloWorld.vue")
    },
    {
      path: "/Profile",
      component: () => import("../components/Profile.vue")
    },
    {
      path: "/Project",
      component: () => import("../components/Project.vue")
    },
    {
      path: "/Contact",
      component: () => import("../components/Contact.vue")
    }
  ]
});
