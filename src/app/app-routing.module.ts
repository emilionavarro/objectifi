import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsListComponent, ItemListResolver, ItemDetailsComponent} from './items/';
import { CreateListComponent } from './items/create-list.component';

/*
Make sure that the route ** is the last item in the list. 
Your route will be ignored if it comes after **
*/
const appRoutes: Routes = [
  { path: 'items', component: ItemsListComponent, resolve: { items: ItemListResolver } },
  { path: 'item/:id', component: ItemDetailsComponent },
  { path: 'createlist', component: CreateListComponent },
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
