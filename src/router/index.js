import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/About',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Home/Aboutmgs',
      name: 'aboutmgs',
      component: () => import('../views/About/MgsView.vue')
    },
    {
      path: '/Home/About/History',
      name: 'history',
      component: () => import('../views/About/HistoryView.vue')
    },
    {
      path: '/Home/About/OurTeam',
      name: 'team',
      component: () => import('../views/About/TeamView.vue')
    },
    {
      path: '/Home/About/CaseStudy',
      name: 'case',
      component: () => import('../views/About/CaseView.vue')
    },
    {
      path: '/Home/About/BlogPage',
      name: 'blog',
      component: () => import('../views/About/BlogView.vue')
    },
    {
      path: '/Career',
      name: 'career',
      component: () => import('../views/CareerView.vue')
    },
    {
      path: '/Contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/Sitemap',
      name: 'sitemap',
      component: () => import('../views/SitemapView.vue')
    },
    {
      path: '/About2',
      name: 'about2',
      component: () => import('../views/About2View.vue')
    },
    {
      path: '/CaseStudy2',
      name: 'case2',
      component: () => import('../views/Case2View.vue')
    },
    {
      path: '/Blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    }
  ]
})

export default router
