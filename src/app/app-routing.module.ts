import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsListComponent, ItemListResolver, ItemDetailsComponent} from './items/';

const appRoutes: Routes = [
  { path: 'items', component: ItemsListComponent, resolve: { items: ItemListResolver } },
  { path: 'item/:id', component: ItemDetailsComponent },
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: '**', redirectTo: 'items', pathMatch: 'full' }

];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]

})

export class AppRoutingModule { }
