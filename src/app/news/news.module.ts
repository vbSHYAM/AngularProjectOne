import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListnewsComponent } from './containers/listnews/listnews.component';
import { ViewnewsComponent } from './containers/viewnews/viewnews.component';
import { ConstantsComponent } from './constants/constants/constants.component';



@NgModule({
  declarations: [
    ListnewsComponent,
    ViewnewsComponent,
    ConstantsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NEWSModule { }
