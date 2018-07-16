import { Routes } from '@angular/router';
import { ItemsListComponent } from './items/index';
import {
    ItemListResolver
} from './items/index';

export const appRoutes:Routes=[
    { path: 'items', component: ItemsListComponent, resolve: {items: ItemListResolver} },
    { path: '', redirectTo: '/items', pathMatch: 'full' }   
]