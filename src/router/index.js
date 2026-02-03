import { createRouter, createWebHistory } from 'vue-router';
import MasterLayout from '@/views/pages/MasterLayout.vue';
import Home from '@/views/Home.vue';
import About from '@/views/pages/AboutUs.vue';
import Services from '@/views/pages/OurServices.vue';
import Contact from '@/views/pages/Contact.vue';
import Project from '@/views/pages/Project.vue';
import Career from '@/views/pages/Career.vue';
import It from '@/views/pages/It.vue';

const routes = [
  {
    path: '/',
    component: MasterLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
      },
      {
        path: 'about',
        name: 'about',
        component: About,
      },
      {
        path: 'career',
        name: 'career',
        component: Career,
      },
      {
        path: 'services',
        name: 'services',
        component: Services,
      },
      {
        path: 'contact',
        name: 'contact',
        component: Contact,
      },
      {
        path: 'projects',
        name: 'projects',
        component: Project,
      },
      // ✅ Sub-service pages (no leading slash)
      {
        path: 'services',
        name: 'diesel-engine-services',
       component: Services,
      },
      {
        path: 'services/it',
        name: 'it-services',
       component: It,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
