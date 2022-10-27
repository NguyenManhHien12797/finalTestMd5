import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TourListComponent} from "./tours/tour-list/tour-list.component";
import {TourCreateComponent} from "./tours/tour-create/tour-create.component";
import {TourEditComponent} from "./tours/tour-edit/tour-edit.component";

const routes: Routes= [
  {
    path: 'tours/list',
    component: TourListComponent
  },
  {
    path: 'tours/create',
    component: TourCreateComponent
  },
  {
    path: 'tours/edit/:id',
    component: TourEditComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
