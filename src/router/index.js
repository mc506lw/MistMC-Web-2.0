import { createRouter, createWebHistory } from 'vue-router';
import SlimeServer from '../components/Servers/SlimeServer.vue';
import RetirementServer from '../components/Servers/RetirementServer.vue';
import SkyblockServer from '../components/Servers/SkyblockServer.vue';
import Home from '../views/Home.vue';
import Servers from '../views/Servers.vue';
import History from '../views/History.vue';
import Players from '../views/Players.vue';
import CCD from '../views/CCD.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/servers',
    component: Servers,
    children: [
      {
        path: '',
        redirect: 'servers/slime',
      },
      {
        path: 'slime',
        name: 'SlimeServer',
        component: SlimeServer,
      },
      {
        path: 'retirement',
        name: 'RetirementServer',
        component: RetirementServer,
      },
      {
        path: 'skyblock',
        name: 'SkyblockServer',
        component: SkyblockServer,
      },
    ],
  },
  {
    path: '/history',
    component: History
  },
  {
    path: '/players',
    component: Players
  },
  {
    path: '/ccd',
    component: CCD
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

