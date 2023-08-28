import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue')
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
