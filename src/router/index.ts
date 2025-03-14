import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../components/TopPage.vue") },
  {
    path: "/ref-sample",
    component: () => import("../components/RefSample.vue"),
  },
  {
    path: "/ref-sample2",
    component: () => import("../components/RefSample2.vue"),
  },
  {
    path: "/ref-sample3",
    component: () => import("../components/RefSample3.vue"),
  },
  {
    path: "/reactive-sample",
    component: () => import("../components/ReactiveSample.vue"),
  },
  {
    path: "/computed-sample",
    component: () => import("../components/ComputedSample.vue"),
  },
  {
    path: "/watch-sample",
    component: () => import("../components/WatchSample.vue"),
  },
  {
    path: "/parent-props-sample",
    component: () => import("../components/ParentComponentPropsSample.vue"),
  },
  {
    path: "/parent-sample",
    component: () => import("../components/ParentComponentTwoWaySample.vue"),
  },
  {
    path: "/parent-slot-sample",
    component: () => import("../components/ParentComponentSlotSample.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
