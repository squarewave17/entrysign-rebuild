import { createRouter, createWebHashHistory } from 'vue-router'
import Start from '../views/Start.vue'
import Details from '../views/Details.vue'
import Hardware from '../views/Hardware.vue'
import Customise from '../views/Customise.vue'
import AdditionalEntryPoints from '../views/AdditionalEntryPoints.vue'
import AccessDoorControl from '../views/AccesDoorControl.vue'
import Software from '../views/Software.vue'
import InfectionControlPackage from '../views/InfectionControlPackage.vue'
import ProductAddons from '../views/ProductAddons.vue'
import Summary from '../views/Summary.vue'
import EntrysignAddons from '../views/sub-views/EntrysignAddons.vue'
import FobsTokens from '../views/sub-views/FobsTokens.vue'
import Terminals from '../views/sub-views/Terminals.vue'
import AcNav from '../views/AcNav.vue'
import LabelsCards from '../views/sub-views/LabelsCards.vue'
import IdCards from '../views/sub-views/IdCards.vue'
import Lanyards from '../views/sub-views/Lanyards.vue'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start,
  },
  {
    path: '/details',
    name: 'Details',
    component: Details,
  },
  {
    path: '/hardware',
    name: 'Hardware',
    component: Hardware,
  },
  {
    path: '/customise',
    name: 'Customise',
    component: Customise,
  },
  {
    path: '/additional-entry-points',
    name: 'Additional Entry Points',
    component: AdditionalEntryPoints,
  },
  {
    path: '/access-door-control',
    name: 'Access Door Control',
    component: AccessDoorControl,
  },
  {
    path: '/Software',
    name: 'Software',
    component: Software,
  },
  {
    path: '/infection-control-package',
    name: 'Infection Control Package',
    component: InfectionControlPackage,
  },
  {
    path: '/product-addons',
    name: 'Product Addons',
    component: ProductAddons,
    children: [
      { path: '', component: AcNav },
      { path: 'entrysign-addons', component: EntrysignAddons },
      { path: 'fobs-and-tokens', component: FobsTokens },
      { path: 'terminals', component: Terminals },
      { path: 'labels-cards', component: LabelsCards },
      { path: 'id-cards', component: IdCards },
      { path: 'lanyards', component: Lanyards },
    ],
  },
  {
    path: '/summary',
    name: 'Summary',
    component: Summary,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
