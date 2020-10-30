import Vue from 'vue'
import VueRouter from 'vue-router'
import { routerMap } from './router.config.js'

Vue.use(VueRouter)

const createRouter = () =>
    new VueRouter({
        scrollBehavior: () => ({ y: 0 }),
        routes: routerMap
    })

const router = createRouter()

export default router
