/*
Angular Modules
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*
Material Design Modules
*/
import { 
  MatMenuModule, 
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
 } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*
Objectifi
*/
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
  ItemsListComponent,
  ItemComponent,
  ItemDetailsComponent,
  ItemListResolver
} from './items/index';

import { ConsumerComponent } from './items/consumer/consumer.component';
import { GenericStringInputComponent } from './common/Inputs/generic-string-input/generic-string-input.component';
import { GenericNumberInputComponent } from './common/Inputs/generic-number-input/generic-number-input.component';
import { TodoListComponent } from './items/todo-list/todo-list.component';
import { HistoricalListComponent } from './items/historical-list/historical-list.component';
import { CreateListComponent } from './items/create-list.component';
import { GenericDateInputComponent } from './common/Inputs/generic-date-input/generic-date-input.component';
import { FieldDialogComponent } from './field/field-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldDialogComponent,
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
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [
    ItemListResolver
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    FieldDialogComponent
  ]
})
export class AppModule { }
