
const routes = (_routes: any) => [
    { // 主页
        path: '/',
        name: 'home',
        component: () => import('./Main.vue').then(r => r.default || r),
        meta: { requiresAuth: true },
    }
];

export default routes;
