import Vue from 'vue'
import VueRouter from 'vue-router'
import { routerMap } from './router.config.js'

//封装路由跳转函数，添加跳转成功与失败回调
const vueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = (location, resolved = () => { }, rejected = () => { }) => vueRouterPush.call(this, location, resolved, rejected).catch(error => error)

Vue.use(VueRouter)

const createRouter = () =>
    new VueRouter({
        scrollBehavior: () => ({ y: 0 }),
        routes: routerMap
    })

const router = createRouter()

export default router
