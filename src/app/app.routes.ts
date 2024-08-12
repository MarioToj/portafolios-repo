import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'profile',
                title: 'Detalles de perfil',
                loadComponent: () => import('./dashboard/pages/profile/profile.component')
            },
            {
                path: 'api',
                title: 'Consumo de api',
                loadComponent: () => import('./dashboard/pages/api/api.component')
            },
            {
                path: 'api/:id',
                title: 'Consumo card api',
                loadComponent: () => import('./dashboard/pages/api/api.component')
            },

            {
                path: '', redirectTo: 'profile', pathMatch: 'full',
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    }
];
