import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    HistoricalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ItemListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
