//路由按需加载组件

export const routerMap = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
    }
]