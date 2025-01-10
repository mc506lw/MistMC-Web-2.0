import { createRouter, createWebHistory } from 'vue-router';
import SlimeServer from '../components/Servers/SlimeServer.vue';
import RetirementServer from '../components/Servers/RetirementServer.vue';
import SkyblockServer from '../components/Servers/SkyblockServer.vue';
import Home from '../views/Home.vue';
import Servers from '../views/Servers.vue';
import History from '../views/History.vue';
import Players from '../views/Players.vue';
import CCD from '../views/CCD.vue';
import NotFound from '../components/NotFound.vue';
import Download from '../components/Download.vue';
import Functionlist from '../views/Functionlist.vue';

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
        redirect: 'slime',
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
    path: '/download',
    component: Download
  },
  {
    path: '/players',
    component: Players
  },
  {
    path: '/ccd',
    component: CCD
  },
  {
    path: '/function',
    component: Functionlist
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

router.afterEach((to, from) => {
  window.sessionStorage.setItem('appState', JSON.stringify({ path: to.path, query: to.query, params: to.params }));
});

export default router;