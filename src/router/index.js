import { createRouter } from 'vue-router'


const router = createRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/about',
            component: () => import('../views/About.vue')
        }
    ]
})

export default router
