import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'usuarios',
        loadComponent: () =>
            loadRemoteModule('mfe2-usuarios', './UserDashboard').then((m) => m.UserDashboardComponent)
    },
    { path: '**', children: [] }
];
