import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

=======
>>>>>>> f9c905d0abb2f8a5280f5f5c08261545ee8fb6a2
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
  ItemsListComponent,
  ItemComponent,
  ItemDetailsComponent,
  ItemService,
  ItemListResolver
} from './items/index';
import { ConsumerComponent } from './items/consumer/consumer.component';
<<<<<<< HEAD
import { MyStringComponent } from './items/inputs/my-string/my-string.component';
=======
import { TodoListComponent } from './items/todo-list/todo-list.component';
import { HistoricalListComponent } from './items/historical-list/historical-list.component';
>>>>>>> f9c905d0abb2f8a5280f5f5c08261545ee8fb6a2

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemComponent,
    ItemDetailsComponent,
    ConsumerComponent,
<<<<<<< HEAD
    MyStringComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
=======
    TodoListComponent, 
    HistoricalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> f9c905d0abb2f8a5280f5f5c08261545ee8fb6a2
  ],
  providers: [
    ItemListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
