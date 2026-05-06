import { createRouter, createWebHistory } from 'vue-router';
import MasterLayout from '@/views/pages/MasterLayout.vue';
import Home from '@/views/Home.vue';
import About from '@/views/pages/AboutUs.vue';
import Services from '@/views/pages/OurServices.vue';
import Contact from '@/views/pages/Contact.vue';
import Project from '@/views/pages/Project.vue';
import Career from '@/views/pages/Career.vue';
import It from '@/views/pages/It.vue';
import PrivacyPolicy from '@/views/pages/PrivacyPolicy.vue';
import ReturnPolicy from '@/views/pages/ReturnPolicy.vue';
import RefundPolicy from '@/views/pages/RefundPolicy.vue';
import Disclaimer from '@/views/pages/Disclaimer.vue';

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
        path: 'index',
        name: 'index',
        component: Home,
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
      {
        path: 'privacy-policy',
        name: 'privacy-policy',
        component: () => import('@/views/pages/PrivacyPolicy.vue'),
      },
      {
        path: 'return-policy',
        name: 'return-policy',
        component: () => import('@/views/pages/ReturnPolicy.vue'),
      },
      {
        path: 'refund-policy',
        name: 'refund-policy',
        component: () => import('@/views/pages/RefundPolicy.vue'),
      },
      {
        path: 'disclaimer',
        name: 'disclaimer',
        component: () => import('@/views/pages/Disclaimer.vue'),
      },

    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.afterEach((to) => {
  window.gtag('config', 'G-MPZFJSB6C8', {
    page_path: to.fullPath
  })
});
export default router;
