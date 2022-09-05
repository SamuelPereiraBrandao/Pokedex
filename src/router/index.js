import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HabilidadesVue from '@/views/HabilidadesVue.vue'
import SobreVue from '@/views/SobreVue.vue'
import StatusVue from '@/views/StatusVue.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    children: [
      { path: 'habilidades', component: HabilidadesVue},
      { path: 'sobre', component: SobreVue},
      { path: 'status', component: StatusVue}
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
