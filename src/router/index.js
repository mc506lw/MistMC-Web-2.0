import { createRouter, createWebHistory } from 'vue-router';
import SlimeSurvival from '../views/SlimeSurvival.vue';
import RetirementSurvival from '../views/RetirementSurvival.vue';
import TechIsland from '../views/TechIsland.vue';

const routes = [
    { path: '/slime-survival', component: SlimeSurvival },
    { path: '/retirement-survival', component: RetirementSurvival },
    { path: '/tech-island', component: TechIsland },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
