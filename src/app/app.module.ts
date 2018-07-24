import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
import { MyStringComponent } from './items/inputs/my-string/my-string.component';
import { TodoListComponent } from './items/todo-list/todo-list.component';
import { HistoricalListComponent } from './items/historical-list/historical-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemComponent,
    ItemDetailsComponent,
    ConsumerComponent,
    TodoListComponent, 
    MyStringComponent,
    HistoricalListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ItemListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
