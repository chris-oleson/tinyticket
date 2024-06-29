import { createRouter, createWebHistory } from 'vue-router'
import Settings from '/src/views/Settings'
import PageNotFound from '/src/views/PageNotFound'
import View from '/src/views/View'
import Ticket from '/src/views/Ticket'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/404',
            alias: '/:pathMatch(.*)*',
            component: PageNotFound,
            meta: {
                title: '404'
            }
        },
        {
            path: '/settings',
            component: Settings,
            meta: {
                title: 'Settings'
            }
        },
        {
            path: '/',
            component: View,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/view/:view',
            component: View,
            meta: {
                title: 'View'
            }
        },
        {
            path: '/ticket/:ticket',
            component: Ticket,
            meta: {
                title: 'Ticket'
            }
        }
    ]
})

router.afterEach(to => {
    if (to.meta.title) {
      document.title = `${to.meta.title} - TinyTicket`;
    }
})