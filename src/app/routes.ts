import { Routes } from '@angular/router';
import {
    ItemsListComponent,
    ItemListResolver,
    ItemDetailsComponent
} from './items/index';

export const appRoutes:Routes=[
    { path: 'items', component: ItemsListComponent, resolve: {items: ItemListResolver} },
    { path: '', redirectTo: '/items', pathMatch: 'full' },
    { path: 'item/:id', component: ItemDetailsComponent }
]