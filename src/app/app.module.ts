import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';

import {
  ItemsListComponent,
  ItemComponent,
  ItemDetailsComponent,
  ItemService,
  ItemListResolver
} from './items/index';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ItemService,
    ItemListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
