import VueRouter from 'vue-router'

const pluginsRoutes = [
  'pdf',
  'moveable',
  'lodash'
].map(o => ({
  path: `/${o}`,
  component: () => import(`@/views/${o}/index.vue`)
}))

const routes = [
  ...pluginsRoutes
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => {
    return {
      offset: { y: 0 },
      behavior: 'smooth'
    }
  },
  routes
})
