import { createRouter, createWebHashHistory } from "vue-router";
import Start from "../views/Start.vue";
import Details from "../views/Details.vue";
import Hardware from "../views/Hardware.vue";
import Customise from "../views/Customise.vue";
import AdditionalEntryPoints from "../views/AdditionalEntryPoints.vue";
import AccessDoorControl from "../views/AccesDoorControl.vue";
import Software from "../views/Software.vue";
import InfectionControlPackage from "../views/InfectionControlPackage.vue";
import ProductAddons from "../views/ProductAddons.vue";
import Summary from "../views/Summary.vue";
import EntrysignAddons from "../views/EntrysignAddons.vue";
import FobsTokens from "../views/FobsTokens.vue";
import Terminals from "../views/Terminals.vue";
// import Addons from "../views/Addons.vue";
import LabelsCards from "../views/LabelsCards.vue";
import IdCards from "../views/IdCards.vue";
import Lanyards from "../views/Lanyards.vue";

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
    path: "/Software",
    name: "Software",
    component: Software,
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
    children: [
      // { path: "product-addons", component: Addons },
      { path: "entrysign-addons", component: EntrysignAddons },
      { path: "fobs-and-tokens", component: FobsTokens },
      { path: "terminals", component: Terminals },
      { path: "labels-cards", component: LabelsCards },
      { path: "id-cards", component: IdCards },
      { path: "lanyards", component: Lanyards },
    ],
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
