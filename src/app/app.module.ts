import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';

import {
  ItemsListComponent,
  ItemComponent,
  ItemDetailsComponent,
  ItemService,
  ItemListResolver
} from './items/index';
import { ConsumerComponent } from './items/consumer/consumer.component';
import { MyStringComponent } from './items/inputs/my-string/my-string.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemComponent,
    ItemDetailsComponent,
    ConsumerComponent,
    MyStringComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ItemListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
