import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListnewsComponent } from './containers/listnews/listnews.component';
import { ViewnewsComponent } from './containers/viewnews/viewnews.component';
import { ConstantsComponent } from './constants/constants/constants.component';
import { NewsPanelComponent } from './containers/news-panel/news-panel.component';



@NgModule({
  declarations: [
    ListnewsComponent,
    ViewnewsComponent,
    ConstantsComponent,
    NewsPanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NEWSModule { }
