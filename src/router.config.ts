export interface routeType {
    path: string,
    sidebarName: string,
    navbarName: string,
    models?: () => Promise<object>[],
    component?: () => Promise<object>
};

export const routesConfig: routeType[] = [
    {
        path: '/dashboard',
        sidebarName: 'Dashboard',
        navbarName: 'Material Dashboard',
        models: () => [import('models/dashboard')],
        component: () => import('routes/dashboard/index')
    }, {
        path: '/user',
        sidebarName: 'User',
        navbarName: 'Material User',
        models: () => [import('models/app')],
        component: () => import('routes/user/index')
    }
];

export default routesConfig;