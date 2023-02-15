import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'Home',
        meta: { layout: 'main', auth: true },
        component: () => import('../page/Home.vue'),

    },
    {
        path: '/',
        name: 'Equipment',
        meta: { layout: 'main', auth: true },
        component: () => import('../page/Equipment.vue'),
        children: [
            {
                path: '/catalog',
                name: 'Catalog',
                meta: { layout: 'main', auth: true },
                component: () => import('../components/categories/v-categories-list.vue'),
                children: [
                    {
                        path: '/catalog/:catId',
                        name: 'Subcategories',
                        meta: { layout: 'main', auth: true },
                        component: () => import('../components/categories/v-subcategories-list.vue'),
                        children: [
                            {
                                path: '/catalog/:catId/:subId',
                                name: 'Products',
                                component: () => import('../components/product/v-product-list.vue')
                            }
                        ]
                    }
                ]
            }

        ]

    },

    {
        path: '/diagnosis',
        name: 'Diagnosis',
        meta: { layout: 'main', auth: true },
        component: () => import('../page/Diagnosis.vue')
    },
    {
        path: '/doctorslist',
        name: 'Doctors_list',
        meta: { layout: 'main', auth: true },
        component: () => import('../page/Doctors List.vue')
    },
    {
        path: '/insurances',
        name: 'Insurances.vue',
        meta: { layout: 'main', auth: true },
        component: () => import('../page/Insurances.vue')
    },
    {
        path: '/settings',
        name: 'Settings',
        meta: { layout: 'main', auth: true },
        component: () => import('../page/Settings.vue')
    },
    {
        path: '/login',
        name: 'Login',
        meta: { layout: 'auth' },
        component: () => import('../page/Login.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthorization = !!localStorage.getItem("auth")
    const requireAuth = to.matched.some(record => record.meta.auth)
    if (requireAuth && !isAuthorization) {
        next('/login')
    } else {
        next()
    }

})

export default router