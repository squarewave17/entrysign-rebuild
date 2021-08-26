import { createRouter, createWebHashHistory } from "vue-router";
import Start from "../views/Start.vue";
import Details from "../views/Details.vue";
import Hardware from "../views/Hardware.vue";
import Customise from "../views/Customise.vue";
import AdditionalEntryPoints from "../views/AdditionalEntryPoints.vue";
import AccessDoorControl from "../views/AccesDoorControl.vue";
import InfectionControlPackage from "../views/InfectionControlPackage.vue";
import ProductAddons from "../views/ProductAddons.vue";
import Summary from "../views/Summary.vue";

const routes = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/details",
    name: "Details",
    component: Details,
  },
  {
    path: "/hardware",
    name: "Hardware",
    component: Hardware,
  },
  {
    path: "/customise",
    name: "Customise",
    component: Customise,
  },
  {
    path: "/additional-entry-points",
    name: "Additional Entry Points",
    component: AdditionalEntryPoints,
  },
  {
    path: "/access-door-control",
    name: "Access Door Control",
    component: AccessDoorControl,
  },
  {
    path: "/infection-control-package",
    name: "Infection Control Package",
    component: InfectionControlPackage,
  },
  {
    path: "/product-addons",
    name: "Product Addons",
    component: ProductAddons,
  },
  {
    path: "/summary",
    name: "Summary",
    component: Summary,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
