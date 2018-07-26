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
import { GenericStringInputComponent } from './common/Inputs/generic-string-input/generic-string-input.component';
import { GenericNumberInputComponent } from './common/Inputs/generic-number-input/generic-number-input.component';
import { TodoListComponent } from './items/todo-list/todo-list.component';
import { HistoricalListComponent } from './items/historical-list/historical-list.component';
import { CreateListComponent } from './items/create-list.component';
import { GenericDateInputComponent } from './common/inputs/generic-date-input/generic-date-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemComponent,
    ItemDetailsComponent,
    ConsumerComponent,
    TodoListComponent,
    GenericStringInputComponent,
    GenericNumberInputComponent,
    HistoricalListComponent,
    CreateListComponent,
    GenericDateInputComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    ItemListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
