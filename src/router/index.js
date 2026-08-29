import { createRouter, createWebHistory } from 'vue-router';
import MasterLayout from '@/views/pages/MasterLayout.vue';
import ParticleLogo from '@/views/ParticleLogo.vue';
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
import logoSrc from '@/assets/logo.png';

const routes = [
  {
    path: '/',
    name: 'landing',
    component: ParticleLogo,
    props: {
      src: logoSrc,
      title: 'Arch Enterprises',
      hint: 'Move your mouse over the logo — particles scatter and reform ✦'
    }
  },
  {
    path: '/home',
    component: MasterLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
      },
    ]
  },
  {
    path: '/about',
    component: MasterLayout,
    children: [
      {
        path: '',
        name: 'about',
        component: About,
      },
    ]
  },
  {
    path: '/index',
    component: MasterLayout,
    children: [
      {
        path: '',
        name: 'index',
        component: Home,
      },
    ]
  },
  {
    path: '/career',
    component: MasterLayout,
    children: [
      {
        path: '',
        name: 'career',
        component: Career,
      },
    ]
  },
  {
    path: '/services',
    component: MasterLayout,
    children: [
      {
        path: '',
        name: 'services',
        component: Services,
      },
    ]
  },
  {
    path: '/services/it',
    component: MasterLayout,
    children: [
      {
        path: '',
        name: 'it-services',
        component: It,
      },
    ]
  },
  {
    path: '/contact',
    component: MasterLayout,
    children: [
      {
        path: '',
        name: 'contact',
        component: Contact,
      },
    ]
  },
  {
    path: '/projects',
    component: MasterLayout,
    children: [
      {
        path: '',
        name: 'projects',
        component: Project,
      },
    ]
  },
  {
    path: '/privacy-policy',
    component: MasterLayout,
    children: [
      {
        path: '',
        name: 'privacy-policy',
        component: () => import('@/views/pages/PrivacyPolicy.vue'),
      },
    ]
  },
  {
    path: '/return-policy',
    component: MasterLayout,
    children: [
      {
        path: '',
        name: 'return-policy',
        component: () => import('@/views/pages/ReturnPolicy.vue'),
      },
    ]
  },
  {
    path: '/refund-policy',
    component: MasterLayout,
    children: [
      {
        path: '',
        name: 'refund-policy',
        component: () => import('@/views/pages/RefundPolicy.vue'),
      },
    ]
  },
  {
    path: '/disclaimer',
    component: MasterLayout,
    children: [
      {
        path: '',
        name: 'disclaimer',
        component: () => import('@/views/pages/Disclaimer.vue'),
      },
    ]
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
