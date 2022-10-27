import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {TourListComponent} from "./tours/tour-list/tour-list.component";
import {AppRoutingModule} from "./app-routing.module";
import {TourCreateComponent} from "./tours/tour-create/tour-create.component";
import {TourEditComponent} from "./tours/tour-edit/tour-edit.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TourListComponent,
    TourCreateComponent,
    TourEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
